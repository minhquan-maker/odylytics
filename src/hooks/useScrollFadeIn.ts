import { useLayoutEffect, type RefObject } from 'react'
import { usePrefersReducedMotion } from './useMediaQuery'

const clamp01 = (value: number) => Math.min(1, Math.max(0, value))

/**
 * Scroll-linked entrance for the section that follows the hero: sets `--reveal` from 0 to 1
 * as the element's top edge travels up from the viewport bottom, completing after `span`
 * viewport heights of scrolling. Unlike the IntersectionObserver reveal, the fade follows the
 * scroll position itself, mirroring the hero's own scroll-mapped fade-out. Without JavaScript
 * (or under reduced motion) `--reveal` stays at its CSS default of 1.
 */
export function useScrollFadeIn(ref: RefObject<HTMLElement | null>, span = 0.5) {
  const reducedMotion = usePrefersReducedMotion()

  // Layout effect so the first value lands before paint and the section never flashes.
  useLayoutEffect(() => {
    const el = ref.current
    if (!el || reducedMotion) return
    let raf = 0
    const update = () => {
      raf = 0
      const distance = window.innerHeight * span
      const progress = clamp01((window.innerHeight - el.getBoundingClientRect().top) / distance)
      el.style.setProperty('--reveal', progress.toFixed(3))
    }
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      el.style.removeProperty('--reveal')
    }
  }, [ref, reducedMotion, span])
}
