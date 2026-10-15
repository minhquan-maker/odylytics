import { memo, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import type { ReactNode, RefObject } from 'react'
import './LogoLoop.css'
import { useReducedMotion } from '../lib/motion'

/** React Bits LogoLoop, ported from Tailwind to plain CSS (`LogoLoop.css`). */

export type LogoItem =
  | { node: ReactNode; href?: string; title?: string; ariaLabel?: string }
  | { src: string; alt?: string; href?: string; title?: string; width?: number; height?: number }

type Props = {
  logos: LogoItem[]
  /** Pixels per second. Negative values reverse the direction. */
  speed?: number
  direction?: 'left' | 'right'
  logoHeight?: number
  gap?: number
  /** Speed while hovered; 0 pauses, undefined keeps the normal speed. */
  hoverSpeed?: number
  fadeOut?: boolean
  scaleOnHover?: boolean
  ariaLabel?: string
  className?: string
}

const SMOOTH_TAU = 0.25
const MIN_COPIES = 2
const COPY_HEADROOM = 2

function useAnimationLoop(
  trackRef: RefObject<HTMLDivElement | null>,
  targetVelocity: number,
  seqWidth: number,
  isHovered: boolean,
  hoverSpeed: number | undefined,
) {
  const offsetRef = useRef(0)
  const velocityRef = useRef(0)
  const reduced = useReducedMotion()

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    if (reduced) {
      track.style.transform = 'translate3d(0, 0, 0)'
      return
    }

    let raf = 0
    let last: number | null = null

    const animate = (timestamp: number) => {
      const dt = last === null ? 0 : Math.max(0, timestamp - last) / 1000
      last = timestamp

      const target = isHovered && hoverSpeed !== undefined ? hoverSpeed : targetVelocity
      velocityRef.current += (target - velocityRef.current) * (1 - Math.exp(-dt / SMOOTH_TAU))

      if (seqWidth > 0) {
        const next = offsetRef.current + velocityRef.current * dt
        offsetRef.current = ((next % seqWidth) + seqWidth) % seqWidth
        track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`
      }
      raf = requestAnimationFrame(animate)
    }

    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [trackRef, targetVelocity, seqWidth, isHovered, hoverSpeed, reduced])
}

function LogoContent({ item }: { item: LogoItem }) {
  if ('node' in item) {
    return (
      <span className="logoloop__node" aria-hidden={!!item.href && !item.ariaLabel}>
        {item.node}
      </span>
    )
  }
  return (
    <img
      className="logoloop__img"
      src={item.src}
      width={item.width}
      height={item.height}
      alt={item.alt ?? ''}
      title={item.title}
      loading="eager"
      decoding="async"
      draggable={false}
    />
  )
}

export const LogoLoop = memo(function LogoLoop({
  logos,
  speed = 120,
  direction = 'left',
  logoHeight = 28,
  gap = 32,
  hoverSpeed = 0,
  fadeOut = false,
  scaleOnHover = false,
  ariaLabel = 'Partner logos',
  className,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const seqRef = useRef<HTMLUListElement>(null)

  const [seqWidth, setSeqWidth] = useState(0)
  const [copyCount, setCopyCount] = useState(MIN_COPIES)
  const [isHovered, setIsHovered] = useState(false)

  const targetVelocity = Math.abs(speed) * (direction === 'left' ? 1 : -1) * (speed < 0 ? -1 : 1)

  useLayoutEffect(() => {
    const container = containerRef.current
    if (!container) return
    container.style.setProperty('--logoloop-gap', `${gap}px`)
    container.style.setProperty('--logoloop-logo-height', `${logoHeight}px`)
  }, [gap, logoHeight])

  const updateDimensions = useCallback(() => {
    const containerWidth = containerRef.current?.clientWidth ?? 0
    const sequenceWidth = seqRef.current?.getBoundingClientRect().width ?? 0
    if (sequenceWidth > 0) {
      setSeqWidth(Math.ceil(sequenceWidth))
      setCopyCount(Math.max(MIN_COPIES, Math.ceil(containerWidth / sequenceWidth) + COPY_HEADROOM))
    }
  }, [])

  useEffect(() => {
    const observer = new ResizeObserver(updateDimensions)
    if (containerRef.current) observer.observe(containerRef.current)
    if (seqRef.current) observer.observe(seqRef.current)

    const images = Array.from(seqRef.current?.querySelectorAll('img') ?? [])
    images.forEach((img) => {
      if (!img.complete) img.addEventListener('load', updateDimensions, { once: true })
    })
    updateDimensions()

    return () => {
      observer.disconnect()
      images.forEach((img) => img.removeEventListener('load', updateDimensions))
    }
  }, [logos, gap, logoHeight, updateDimensions])

  useAnimationLoop(trackRef, targetVelocity, seqWidth, isHovered, hoverSpeed)

  const lists = useMemo(
    () =>
      Array.from({ length: copyCount }, (_, copy) => (
        <ul
          key={copy}
          className="logoloop__list"
          aria-hidden={copy > 0 || undefined}
          inert={copy > 0 || undefined}
          ref={copy === 0 ? seqRef : undefined}
        >
          {logos.map((item, index) => {
            const label = 'node' in item ? (item.ariaLabel ?? item.title) : (item.alt ?? item.title)
            return (
              <li key={index} className="logoloop__item">
                {item.href ? (
                  <a className="logoloop__link" href={item.href} aria-label={label || 'logo link'} target="_blank" rel="noreferrer noopener">
                    <LogoContent item={item} />
                  </a>
                ) : (
                  <LogoContent item={item} />
                )}
              </li>
            )
          })}
        </ul>
      )),
    [copyCount, logos],
  )

  const classes = ['logoloop', scaleOnHover && 'logoloop--scale', fadeOut && 'logoloop--fade', className]
    .filter(Boolean)
    .join(' ')

  return (
    <div ref={containerRef} className={classes} role="region" aria-label={ariaLabel}>
      <div
        ref={trackRef}
        className="logoloop__track"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {lists}
      </div>
    </div>
  )
})
