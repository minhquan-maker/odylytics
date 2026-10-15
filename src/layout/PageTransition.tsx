import { useEffect, useRef, useState } from 'react'
import { prefersReducedMotion } from '../lib/motion'

type Phase = 'idle' | 'cover' | 'glitch' | 'reveal'

const WORD = 'ODYLYTICS'
const NOISE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#/<>_'
const COVER_MS = 220
const FRAME_MS = 55
const REVEAL_MS = 320

/** A few quick frames: half-resolved noise, the mis-typed ODYLYTICX, then the right word. */
function buildFrames(): { text: string; glitch: boolean }[] {
  const noisy = (keep: number) => [...WORD].map((letter, index) => (index < keep ? letter : NOISE[Math.floor(Math.random() * NOISE.length)])).join('')
  return [
    { text: noisy(2), glitch: true },
    { text: noisy(6), glitch: true },
    { text: 'ODYLYTICX', glitch: true },
    { text: 'ODYLYTICX', glitch: true },
    { text: 'ODYLYTICS', glitch: false },
    { text: 'ODYLYTICS', glitch: false },
  ]
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
  const busy = useRef(false)
  const timers = useRef<number[]>([])

  useEffect(() => {
    const later = (fn: () => void, ms: number) => timers.current.push(window.setTimeout(fn, ms))

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || busy.current || prefersReducedMotion()) return
      const link = (event.target as Element).closest<HTMLAnchorElement>('a[href^="#/"]')
      if (!link || (link.target && link.target !== '_self') || link.hasAttribute('download')) return
      const route = link.getAttribute('href')!.slice(1).replace(/\/+$/, '') || '/'
      if (route === currentRoute() || section(route) === section(currentRoute())) return

      event.preventDefault()
      busy.current = true
      setFrame({ text: WORD, glitch: false })
      setPhase('cover')

      later(() => {
        window.location.hash = `#${route}`
        setPhase('glitch')
        const frames = buildFrames()
        frames.forEach((item, index) => {
          later(() => setFrame(item), index * FRAME_MS)
        })
        later(() => setPhase('reveal'), frames.length * FRAME_MS + 60)
        later(() => {
          setPhase('idle')
          busy.current = false
        }, frames.length * FRAME_MS + 60 + REVEAL_MS)
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
    <div className="cut" data-phase={phase} aria-hidden="true">
      <p className={`cut__word${frame.glitch ? ' is-glitch' : ''}`}>{frame.text}</p>
    </div>
  )
}
