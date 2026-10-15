import { useSyncExternalStore } from 'react'

export type Consent = { v: 1; analytics: boolean; at: string }

const KEY = 'odylytics-consent'
const listeners = new Set<() => void>()
let cached: Consent | null | undefined

function read(): Consent | null {
  try {
    const raw = localStorage.getItem(KEY)
    const parsed = raw ? (JSON.parse(raw) as Consent) : null
    return parsed && parsed.v === 1 ? parsed : null
  } catch {
    return null
  }
}

function getSnapshot(): Consent | null {
  if (cached === undefined) cached = read()
  return cached
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

/** Stored choice, or null until the visitor decides. Without a choice, nothing optional runs. */
export function useConsent() {
  return useSyncExternalStore(subscribe, getSnapshot, () => null)
}

export function saveConsent(analytics: boolean) {
  const value: Consent = { v: 1, analytics, at: new Date().toISOString() }
  cached = value
  try {
    localStorage.setItem(KEY, JSON.stringify(value))
  } catch {
    // Storage can be blocked; the choice then applies to this visit only.
  }
  listeners.forEach((listener) => listener())
}

/** Opens the settings dialog from anywhere (footer link). */
export const openConsentSettings = () => window.dispatchEvent(new Event('odylytics:consent-settings'))
