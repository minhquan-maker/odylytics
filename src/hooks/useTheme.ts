import { useSyncExternalStore } from 'react'
import { flushSync } from 'react-dom'

export type Theme = 'dark' | 'light'

const STORAGE_KEY = 'odylytics-theme'
const THEME_COLOR: Record<Theme, string> = { dark: '#0E0D10', light: '#F3F2EE' }
const listeners = new Set<() => void>()

function getTheme(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

type ViewTransitionDocument = Document & { startViewTransition?: (update: () => void) => unknown }

export function setTheme(theme: Theme) {
  if (theme === getTheme()) return
  const root = document.documentElement

  const apply = () => {
    root.dataset.theme = theme
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // Storage can be unavailable (private mode); the theme still applies for this visit.
    }
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLOR[theme])
    listeners.forEach((listener) => listener())
  }

  const doc = document as ViewTransitionDocument
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (doc.startViewTransition && !reduced) {
    // One clean cross-fade of the whole page (no per-element colour flicker); React updates synchronously inside it.
    root.classList.remove('theme-animate')
    doc.startViewTransition(() => flushSync(apply))
    return
  }

  // Fallback: fade the colour tokens only on an explicit toggle; the initial theme from index.html does not animate.
  root.classList.add('theme-animate')
  apply()
}

/** The visitor's chosen theme; applied initially by the inline script in index.html. */
export function useTheme() {
  return useSyncExternalStore(subscribe, getTheme, (): Theme => 'light')
}
