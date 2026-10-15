import { useCallback } from 'react'
import { BRAND } from '../data/content'
import { useTheme } from './useTheme'

const SOLUTIONS_DIR = '/assets/solutions/'

/** Logo variants that stay legible on the current theme's background. */
export function useBrandAssets() {
  const light = useTheme() === 'light'
  /** Dark-mode solution logos mirror the light set by filename under /assets/solutions/dark/. */
  const solutionLogo = useCallback(
    (path: string) => (light || !path.startsWith(SOLUTIONS_DIR) ? path : path.replace(SOLUTIONS_DIR, `${SOLUTIONS_DIR}dark/`)),
    [light],
  )
  return {
    wordmark: light ? BRAND.wordmark : BRAND.wordmarkDark,
    symbol: light ? BRAND.symbol : BRAND.symbolDark,
    solutionLogo,
  }
}
