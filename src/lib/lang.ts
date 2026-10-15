import { useMemo, useSyncExternalStore } from 'react'
import { DICTIONARY } from '../data/i18n'

export type Lang = 'en' | 'vi' | 'fr' | 'zh' | 'ja'

export const LANGUAGES: { id: Lang; label: string }[] = [
  { id: 'en', label: 'English' },
  { id: 'vi', label: 'Tiếng Việt' },
  { id: 'fr', label: 'Français' },
  { id: 'zh', label: '中文' },
  { id: 'ja', label: '日本語' },
]

const STORAGE_KEY = 'odylytics-lang'
const COLUMN: Record<Exclude<Lang, 'en'>, number> = { vi: 0, fr: 1, zh: 2, ja: 3 }
const listeners = new Set<() => void>()

function getLang(): Lang {
  const value = document.documentElement.lang
  return LANGUAGES.some((item) => item.id === value) ? (value as Lang) : 'en'
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

/** Reads the saved language into `<html lang>`; English until the visitor picks another. */
export function initLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (LANGUAGES.some((item) => item.id === saved)) document.documentElement.lang = saved as string
  } catch {
    // Storage can be unavailable; English stays.
  }
}

export function setLang(lang: Lang) {
  document.documentElement.lang = lang
  try {
    localStorage.setItem(STORAGE_KEY, lang)
  } catch {
    // The language still applies for this visit.
  }
  listeners.forEach((listener) => listener())
}

export function useLang() {
  return useSyncExternalStore(subscribe, getLang, (): Lang => 'en')
}

/** Translates an English UI string; anything without a translation stays in English. */
export function translate(lang: Lang, text: string) {
  if (lang === 'en') return text
  return DICTIONARY[text]?.[COLUMN[lang]] || text
}

export function useT() {
  const lang = useLang()
  return useMemo(() => (text: string) => translate(lang, text), [lang])
}
