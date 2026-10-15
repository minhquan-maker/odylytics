import { useLayoutEffect } from 'react'

const clamp01 = (value: number) => Math.min(1, Math.max(0, value))
/** The swap begins once the incoming section's top passes this fraction of the viewport. */
const LEAD = 0.92
/** …and completes after its top has climbed this fraction of the viewport further. */
const TRAVEL = 0.6

/**
 * Mercury-style background morph: drives `--zone-mix` (0→1, see index.css) from the scroll
 * position so every semantic token blends dark↔light while the solutions band is in view,
 * and blends back as News arrives. Scrubbed, so scrolling back reverses it mid-way.
 * The navbar colour toggle is independent — in light theme the tokens are overridden
 * directly and the zone mix has no effect.
 */
export function useZoneFade(route?: string) {
  useLayoutEffect(() => {
    const root = document.documentElement
    const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')
    let raf = 0
    let last = -1

    const apply = (mix: number) => {
      root.style.setProperty('--zone-mix', mix.toFixed(3))
      if (root.dataset.theme === 'light') return
      root.style.colorScheme = mix > 0.5 ? 'light' : ''
      meta?.setAttribute('content', mix > 0.5 ? '#FAFAFB' : '#0B0A0E')
    }

    const update = () => {
      raf = 0
      const showcase = document.getElementById('solutions')
      const news = document.getElementById('news')
      let mix = 0
      if (showcase && news) {
        const vh = window.innerHeight
        const span = vh * TRAVEL
        const into = clamp01((vh * LEAD - showcase.getBoundingClientRect().top) / span)
        const outof = clamp01((vh * LEAD - news.getBoundingClientRect().top) / span)
        mix = into * (1 - outof)
      }
      if (Math.abs(mix - last) >= 0.001) {
        last = mix
        apply(mix)
      }
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
      root.style.removeProperty('--zone-mix')
      root.style.colorScheme = ''
      if (root.dataset.theme !== 'light') meta?.setAttribute('content', '#0B0A0E')
    }
  }, [route])
}
