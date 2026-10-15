import { Suspense, lazy, useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { ArrowDownIcon } from './Icons'
import { HOME_HERO } from '../data/site'
import { usePrefersReducedMotion } from '../hooks/useMediaQuery'
import { useTheme } from '../hooks/useTheme'
import { useT } from '../lib/lang'

const Hyperspeed = lazy(() => import('./Hyperspeed'))

const COLORS = ['#AE0BFF', '#FF8C00', '#AE0BFF']
const POLE_COLORS = ['#AE0BFF']

const clamp01 = (value: number) => Math.min(1, Math.max(0, value))
const smoothstep = (value: number) => value * value * (3 - 2 * value)

/**
 * Length of each intro stage, in viewport heights of scrolling: the copy fades out, the
 * road then accelerates (starting slightly before the fade ends), and finally cruises at
 * full boost long enough for the speed to register before the page moves on.
 */
const INTRO = { fade: 0.5, ramp: 0.3, cruise: 1.0 }
const RAMP_LEAD = 0.1
const INTRO_TOTAL = INTRO.fade + INTRO.ramp + INTRO.cruise
const FADE_END = INTRO.fade / INTRO_TOTAL
const BOOST_START = (INTRO.fade - RAMP_LEAD) / INTRO_TOTAL
const BOOST_END = (INTRO.fade + INTRO.ramp) / INTRO_TOTAL

/** Milliseconds per character for the label, the two headline lines and the sub line. */
const TYPE_SPEED = [30, 34, 34, 11]

/** Types the given strings one after another; `enabled` false shows them complete at once. */
function useTypewriter(texts: string[], enabled: boolean) {
  const [counts, setCounts] = useState<number[]>(() => texts.map(() => 0))
  useEffect(() => {
    if (!enabled) return
    const lengths = texts.map((text) => text.length)
    const start = performance.now() + 350
    let raf = 0
    // Time-based (not a timeout chain), so a busy main thread skips ahead instead of dragging the typing out.
    const tick = (now: number) => {
      let left = Math.max(0, now - start)
      const next = lengths.map((length, i) => {
        const take = Math.min(length, Math.floor(left / (TYPE_SPEED[i] ?? 20)))
        left = Math.max(0, left - length * (TYPE_SPEED[i] ?? 20))
        return take
      })
      setCounts((previous) => (previous.every((value, i) => value === next[i]) ? previous : next))
      if (next.some((count, i) => count < lengths[i])) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
    // The text is read once when typing starts; a later language change just swaps the finished text.
    // oxlint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled])

  return texts.map((text, i) => (enabled ? Math.min(counts[i] ?? 0, text.length) : text.length))
}

function Typed({ text, count, caret }: { text: string; count: number; caret: boolean }): ReactNode {
  return (
    <>
      {text.slice(0, count)}
      {caret && <span className="caret" />}
      <span className="ghost">{text.slice(count)}</span>
    </>
  )
}

function supportsWebgl() {
  try {
    const canvas = document.createElement('canvas')
    return Boolean(canvas.getContext('webgl2') ?? canvas.getContext('webgl'))
  } catch {
    return false
  }
}

/** Pinned scroll intro: a big headline over a light-trail road; scrolling fades the copy and sends the road to full speed. */
export function Hero() {
  const theme = useTheme()
  const t = useT()
  const reducedMotion = usePrefersReducedMotion()
  const [webgl] = useState(supportsWebgl)
  const dark = theme === 'dark'
  const ref = useRef<HTMLElement>(null)
  const boost = useRef(0)
  const label = t(HOME_HERO.eyebrow)
  const lineOne = t(HOME_HERO.title[0])
  const lineTwo = t(HOME_HERO.title[1])
  const lead = t(HOME_HERO.lead)
  const counts = useTypewriter([label, lineOne, lineTwo, lead], !reducedMotion)
  const active = counts.findIndex((count, i) => count < [label, lineOne, lineTwo, lead][i].length)

  useEffect(() => {
    const hero = ref.current
    if (!hero || reducedMotion) {
      boost.current = 0
      return
    }
    hero.style.setProperty('--hero-track', `${Math.round(INTRO_TOTAL * 100)}svh`)
    let raf = 0
    const update = () => {
      raf = 0
      const track = hero.offsetHeight - window.innerHeight
      const progress = track > 0 ? clamp01(-hero.getBoundingClientRect().top / track) : 0
      const fade = clamp01(progress / FADE_END)
      boost.current = smoothstep(clamp01((progress - BOOST_START) / (BOOST_END - BOOST_START)))
      hero.style.setProperty('--hero-fade', fade.toFixed(3))
      hero.classList.toggle('is-faded', fade > 0.98)
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
      hero.style.removeProperty('--hero-fade')
      hero.style.removeProperty('--hero-track')
      hero.classList.remove('is-faded')
    }
  }, [reducedMotion])

  return (
    <section ref={ref} className="hero" aria-labelledby="hero-title">
      <div className="hero__stage">
        {webgl ? (
          <Suspense fallback={null}>
            <Hyperspeed
              className="hero__road"
              theme={dark ? 'dark' : 'light'}
              curve="gentle"
              curvature={0.55}
              speed={reducedMotion ? 0 : 1.05}
              boost={3}
              fov={81}
              boostFov={160}
              lanes={6}
              roadWidth={20}
              medianWidth={2.5}
              density={40}
              trailLength={0.9}
              lightSize={1}
              poles={15}
              dust={1500}
              glow={0.6}
              reflections={0.5}
              roadOpacity={0.25}
              steer={0.25}
              tailColors={COLORS}
              headColors={COLORS}
              poleColors={POLE_COLORS}
              interactive={!reducedMotion}
              boostRef={boost}
              roadColor={dark ? '#0E0E0D' : undefined}
              lineColor={dark ? '#2d2d2d' : undefined}
            />
          </Suspense>
        ) : (
          <div className="aurora" aria-hidden="true" />
        )}

        <div className="container hero__content">
          <h1 id="hero-title" className="sr-only">
            {HOME_HERO.title.map((line) => t(line)).join(' ')}
          </h1>
          <div className="hero__tl" aria-hidden="true">
            <p className="label">
              <span>
                <Typed text={label} count={counts[0]} caret={active === 0} />
              </span>
            </p>
            <span className="hero__line">
              <Typed text={lineOne} count={counts[1]} caret={active === 1} />
            </span>
          </div>
          <div className="hero__br" aria-hidden="true">
            <span className="hero__line">
              <Typed text={lineTwo} count={counts[2]} caret={active === 2} />
            </span>
            <p className="hero__lead">
              <Typed text={lead} count={counts[3]} caret={active === 3} />
            </p>
          </div>
        </div>

        <p className="hero__cue" aria-hidden="true">
          <span className="hero__cue-icon">
            <ArrowDownIcon />
          </span>
          {t(HOME_HERO.cue)}
        </p>
      </div>
    </section>
  )
}
