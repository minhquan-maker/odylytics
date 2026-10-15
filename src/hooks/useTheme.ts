import { useSyncExternalStore } from 'react'
import { flushSync } from 'react-dom'
import { prefersReducedMotion } from '../lib/motion'

export type Theme = 'dark' | 'light'
export type ThemePref = Theme | 'system'

const STORAGE_KEY = 'odylytics-theme'
const THEME_COLOR: Record<Theme, string> = { dark: '#141413', light: '#F3F2EE' }
const listeners = new Set<() => void>()
const dark = () => window.matchMedia('(prefers-color-scheme: dark)')

function readPref(): ThemePref {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'dark' || value === 'system' ? value : 'light'
  } catch {
    return 'light'
  }
}

let pref: ThemePref = typeof window === 'undefined' ? 'light' : readPref()

const resolve = (value: ThemePref): Theme => (value === 'system' ? (dark().matches ? 'dark' : 'light') : value)

function getTheme(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

type ViewTransitionDocument = Document & { startViewTransition?: (update: () => void) => unknown }

function apply(theme: Theme, animate: boolean) {
  const root = document.documentElement
  const commit = () => {
    root.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLOR[theme])
    listeners.forEach((listener) => listener())
  }
  if (theme === getTheme()) {
    listeners.forEach((listener) => listener())
    return
  }
  const doc = document as ViewTransitionDocument
  if (animate && doc.startViewTransition && !prefersReducedMotion()) {
    doc.startViewTransition(() => flushSync(commit))
    return
  }
  commit()
}

/** Light, dark, or follow the system; the choice is stored and applied before first paint by index.html. */
export function setThemePreference(next: ThemePref) {
  pref = next
  try {
    localStorage.setItem(STORAGE_KEY, next)
  } catch {
    // Storage can be unavailable (private mode); the theme still applies for this visit.
  }
  apply(resolve(next), true)
}

/** Follows OS colour-scheme changes while the preference is 'system'. */
export function initTheme() {
  dark().addEventListener('change', () => pref === 'system' && apply(resolve('system'), true))
}

/** The theme in effect (light or dark). */
export function useTheme() {
  return useSyncExternalStore(subscribe, getTheme, (): Theme => 'light')
}

/** The visitor's choice, including 'system'. */
export function useThemePreference() {
  return useSyncExternalStore(subscribe, () => pref, (): ThemePref => 'light')
}
