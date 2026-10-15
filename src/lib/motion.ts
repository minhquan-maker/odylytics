import { useSyncExternalStore } from 'react'

/** 'system' follows the OS setting; 'reduce' and 'full' are explicit choices from the settings menu. */
type Pref = 'system' | 'reduce' | 'full'

const KEY = 'odylytics-motion'
const listeners = new Set<() => void>()
const query = () => window.matchMedia('(prefers-reduced-motion: reduce)')

function readPref(): Pref {
  try {
    const value = localStorage.getItem(KEY)
    return value === 'reduce' || value === 'full' ? value : 'system'
  } catch {
    return 'system'
  }
}

let pref: Pref = typeof window === 'undefined' ? 'system' : readPref()

/** True when animation should be off, whether the OS or the visitor asked for it. */
export function prefersReducedMotion() {
  return pref === 'reduce' || (pref === 'system' && query().matches)
}

function apply() {
  document.documentElement.dataset.motion = prefersReducedMotion() ? 'reduce' : 'full'
  listeners.forEach((listener) => listener())
}

export function setReduceMotion(reduce: boolean) {
  pref = reduce ? 'reduce' : 'full'
  try {
    localStorage.setItem(KEY, pref)
  } catch {
    // Storage can be unavailable; the choice applies for this visit.
  }
  apply()
}

/** Sets `<html data-motion>` (all CSS reads it) and follows OS changes while no explicit choice is stored. */
export function initMotion() {
  apply()
  query().addEventListener('change', () => pref === 'system' && apply())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function useReducedMotion() {
  return useSyncExternalStore(subscribe, prefersReducedMotion, () => false)
}
