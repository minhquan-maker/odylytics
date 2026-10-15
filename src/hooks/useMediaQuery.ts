import { useSyncExternalStore } from 'react'
import { useReducedMotion } from '../lib/motion'

export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query)
      mql.addEventListener('change', onChange)
      return () => mql.removeEventListener('change', onChange)
    },
    () => window.matchMedia(query).matches,
    () => false,
  )
}

/** OS setting or the visitor's own choice in the settings menu. */
export function usePrefersReducedMotion(): boolean {
  return useReducedMotion()
}
