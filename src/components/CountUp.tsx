import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from '../hooks/useMediaQuery'
import { useLang } from '../lib/lang'

/** Counts up to `to` once it scrolls into view; numbers use the page language's grouping. */
export function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const reduced = usePrefersReducedMotion()
  const lang = useLang()
  const [value, setValue] = useState(reduced ? to : 0)

  useEffect(() => {
    if (reduced) return
    const node = ref.current
    if (!node || !('IntersectionObserver' in window)) return
    let frame = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / 1600)
          setValue(Math.round(to * (1 - Math.pow(1 - progress, 3))))
          if (progress < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.5 },
    )
    observer.observe(node)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [to, reduced])

  return <span ref={ref}>{(reduced ? to : value).toLocaleString(lang === 'vi' ? 'vi-VN' : 'en-US')}</span>
}
