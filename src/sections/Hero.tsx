import { Suspense, lazy, useEffect, useRef, useState } from 'react'
import { ArrowDownIcon } from '../components/Icons'
import { useContent } from '../hooks/useContent'
import { useBrandAssets } from '../hooks/useBrandAssets'
import { usePrefersReducedMotion } from '../hooks/useMediaQuery'
import { useRotatingWord } from '../hooks/useRotatingWord'
import { useTheme } from '../hooks/useTheme'

const Hyperspeed = lazy(() => import('../components/Hyperspeed'))

const LIGHT_COLORS = ['#AE0BFF', '#FF8C00', '#AE0BFF']
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

export function Hero() {
  const { HERO } = useContent()
  const brand = useBrandAssets()
  const theme = useTheme()
  const reducedMotion = usePrefersReducedMotion()
  const [webgl] = useState(supportsWebgl)
  const dark = theme !== 'light'
  const ref = useRef<HTMLElement>(null)
  const boost = useRef(0)
  const wordIndex = useRotatingWord(HERO.rotatingWords.length, 2500, !reducedMotion)
  const previousIndex = (wordIndex - 1 + HERO.rotatingWords.length) % HERO.rotatingWords.length

  // The hero is a tall scroll track with a sticky stage: scrolling first fades the copy
  // out upwards, then ramps the road up to full boost, and only then releases the page.
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
    <section id="home" ref={ref} className="hero" aria-labelledby="hero-title">
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
              tailColors={LIGHT_COLORS}
              headColors={LIGHT_COLORS}
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
          <img className="hero__logo" src={brand.wordmark} alt="Odylytics" width="1826" height="565" />
          <p className="eyebrow">{HERO.eyebrow}</p>

          <h1 id="hero-title" className="sr-only">
            {HERO.srHeadline}
          </h1>
          <div className="display hero__headline" aria-hidden="true">
            <span className="hero__line">{HERO.headlineTop}</span>
            <span className="hero__line">{HERO.headlineBottom}</span>
            <span className="hero__line">
              <span className="rotator" aria-live="off">
                {HERO.rotatingWords.map((word, index) => (
                  <span
                    key={word}
                    className={`rotator__word${index === wordIndex ? ' is-active' : ''}${index === previousIndex && !reducedMotion ? ' is-prev' : ''}`}
                  >
                    {word}.
                  </span>
                ))}
              </span>
            </span>
          </div>

          <p className="body-l hero__sub">{HERO.subheadline}</p>

          <p className="hero__note">
            <img src={brand.symbol} alt="" />
            {HERO.note}
          </p>
        </div>

        <p className="hero__cue" aria-hidden="true">
          <span className="hero__cue-icon">
            <ArrowDownIcon />
          </span>
          {HERO.scrollCue}
        </p>
      </div>
    </section>
  )
}
