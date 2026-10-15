import { useEffect, useRef, useState } from 'react'

type Phase = 'idle' | 'cover' | 'glitch' | 'reveal'

const WORD = 'ODYLYTICS'
const NOISE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#/<>_'
const COVER_MS = 280
const FRAME_MS = 52
const REVEAL_MS = 420

/** Frames of the title: letters resolve left to right out of noise, mis-type as ODYLYTICX, then settle on ODYLYTICS. */
function buildFrames(): { text: string; glitch: boolean }[] {
  const frames: { text: string; glitch: boolean }[] = []
  for (let step = 0; step <= WORD.length; step += 1) {
    const text = [...WORD].map((letter, index) => (index < step ? letter : NOISE[Math.floor(Math.random() * NOISE.length)])).join('')
    frames.push({ text, glitch: step < WORD.length })
    frames.push({ text: [...text].map((char, index) => (index >= step && Math.random() < 0.5 ? NOISE[Math.floor(Math.random() * NOISE.length)] : char)).join(''), glitch: step < WORD.length })
  }
  frames.push({ text: 'ODYLYTICX', glitch: true }, { text: 'ODYLYTICX', glitch: true }, { text: 'ODYLYTICS', glitch: true }, { text: 'ODYLYTICS', glitch: false }, { text: 'ODYLYTICS', glitch: false }, { text: 'ODYLYTICS', glitch: false })
  return frames
}

const section = (route: string) => route.split('/')[1] ?? ''
const currentRoute = () => (window.location.hash.startsWith('#/') ? window.location.hash.slice(1).replace(/\/+$/, '') || '/' : '/')

/**
 * Full-screen cut between major sections (Home, Product, Research, Team, Blog…): the screen goes black,
 * the wordmark types itself with a glitch, the new page is swapped in underneath, then the cover wipes away.
 * Moves inside one section, anchors and back/forward navigation stay instant.
 */
export function PageTransition() {
  const [phase, setPhase] = useState<Phase>('idle')
  const [frame, setFrame] = useState({ text: WORD, glitch: false })
  const [progress, setProgress] = useState(0)
  const [target, setTarget] = useState('/')
  const busy = useRef(false)
  const timers = useRef<number[]>([])

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    const later = (fn: () => void, ms: number) => timers.current.push(window.setTimeout(fn, ms))

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || busy.current || reduced.matches) return
      const link = (event.target as Element).closest<HTMLAnchorElement>('a[href^="#/"]')
      if (!link || (link.target && link.target !== '_self') || link.hasAttribute('download')) return
      const route = link.getAttribute('href')!.slice(1).replace(/\/+$/, '') || '/'
      if (route === currentRoute() || section(route) === section(currentRoute())) return

      event.preventDefault()
      busy.current = true
      setTarget(route)
      setProgress(0)
      setFrame({ text: WORD.replace(/./g, '_'), glitch: true })
      setPhase('cover')

      later(() => {
        window.location.hash = `#${route}`
        setPhase('glitch')
        const frames = buildFrames()
        frames.forEach((item, index) => {
          later(() => {
            setFrame(item)
            setProgress(Math.round(((index + 1) / frames.length) * 100))
          }, index * FRAME_MS)
        })
        later(() => setPhase('reveal'), frames.length * FRAME_MS + 120)
        later(() => {
          setPhase('idle')
          busy.current = false
        }, frames.length * FRAME_MS + 120 + REVEAL_MS)
      }, COVER_MS)
    }

    document.addEventListener('click', onClick, true)
    const pending = timers.current
    return () => {
      document.removeEventListener('click', onClick, true)
      pending.forEach((id) => window.clearTimeout(id))
    }
  }, [])

  return (
    <div className="cut scope-dark" data-phase={phase} aria-hidden="true">
      <div className="cut__scan" />
      <p className="cut__meta cut__meta--tl">
        <span className="label__mark" /> Odylytics / loading
      </p>
      <p className={`cut__word${frame.glitch ? ' is-glitch' : ''}`}>{frame.text}</p>
      <p className="cut__meta cut__meta--bl">{target}</p>
      <p className="cut__meta cut__meta--br">{String(progress).padStart(3, '0')}</p>
    </div>
  )
}
