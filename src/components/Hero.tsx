import { Suspense, lazy, useEffect, useRef, useState } from 'react'
import { ArrowDownIcon } from './Icons'
import { Label } from './Section'
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
              roadColor={dark ? '#000000' : undefined}
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
            <Label>{HOME_HERO.eyebrow}</Label>
            <span className="hero__line">{t(HOME_HERO.title[0])}</span>
          </div>
          <div className="hero__br">
            <span className="hero__line" aria-hidden="true">
              {t(HOME_HERO.title[1])}
            </span>
            <p className="hero__lead">{t(HOME_HERO.lead)}</p>
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
