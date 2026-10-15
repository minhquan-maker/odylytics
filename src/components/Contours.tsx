import { useMemo } from 'react'

const CENTER = { x: 640, y: 300 }

/** Topographic rings, a nod to flood maps: purple and orange lines drifting slowly behind the impact numbers. */
export function Contours() {
  const rings = useMemo(
    () =>
      Array.from({ length: 16 }, (_, k) => {
        const radius = 34 + k * 30
        const points = Array.from({ length: 96 }, (_, i) => {
          const angle = (i / 96) * Math.PI * 2
          const wobble = 1 + 0.12 * Math.sin(3 * angle + k * 0.45) + 0.07 * Math.sin(5 * angle - k * 0.7) + 0.04 * Math.sin(8 * angle + k)
          return `${i === 0 ? 'M' : 'L'}${(CENTER.x + Math.cos(angle) * radius * wobble * 1.25).toFixed(1)} ${(CENTER.y + Math.sin(angle) * radius * wobble).toFixed(1)}`
        })
        return { d: `${points.join('')}Z`, tone: k % 5 === 0 ? 'purple' : k % 5 === 2 ? 'orange' : 'ink' }
      }),
    [],
  )

  return (
    <svg className="contours" viewBox="0 0 1000 600" aria-hidden="true" focusable="false">
      <g className="contours__g">
        {rings.map((ring, index) => (
          <path key={index} d={ring.d} className={`contours__ring contours__ring--${ring.tone}`} />
        ))}
      </g>
    </svg>
  )
}
