import type { ReactNode } from 'react'
import { Label } from './Section'

type Art = 'lost' | 'offline' | 'error'

/** Line illustrations for the system screens: nodes and wires drawn in the same language as the home circuit. */
export function StateArt({ kind }: { kind: Art }) {
  return (
    <svg className="stateart" viewBox="0 0 480 360" role="img" aria-label={kind === 'lost' ? 'A path that stops before it reaches its destination' : kind === 'offline' ? 'A wifi signal crossed out' : 'A node with a broken connection'}>
      <defs>
        <pattern id={`dots-${kind}`} width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" className="stateart__dot" />
        </pattern>
      </defs>
      <rect width="480" height="360" fill={`url(#dots-${kind})`} />
      {kind === 'lost' && (
        <g>
          <path className="stateart__wire" d="M60 270H150V180H250V250" />
          <path className="stateart__wire stateart__wire--dash" d="M250 250V300H330V150H420" />
          <circle className="stateart__node stateart__node--orange" cx="60" cy="270" r="9" />
          <rect className="stateart__node stateart__node--purple" x="412" y="142" width="16" height="16" />
          <circle className="stateart__node stateart__node--ink" cx="250" cy="250" r="6" />
          <text className="stateart__text" x="266" y="236">
            404
          </text>
        </g>
      )}
      {kind === 'offline' && (
        <g>
          <path className="stateart__arc" d="M110 160a190 190 0 0 1 260 0" />
          <path className="stateart__arc" d="M150 200a130 130 0 0 1 180 0" />
          <path className="stateart__arc" d="M190 240a70 70 0 0 1 100 0" />
          <circle className="stateart__node stateart__node--orange" cx="240" cy="278" r="10" />
          <path className="stateart__slash" d="M120 90 360 310" />
        </g>
      )}
      {kind === 'error' && (
        <g>
          <path className="stateart__wire" d="M60 180H170" />
          <path className="stateart__wire stateart__wire--dash" d="M190 180H290" />
          <path className="stateart__wire" d="M310 180H420" />
          <circle className="stateart__node stateart__node--orange" cx="60" cy="180" r="9" />
          <rect className="stateart__node stateart__node--purple" x="412" y="172" width="16" height="16" />
          <rect className="stateart__core" x="170" y="140" width="20" height="80" />
          <rect className="stateart__core" x="290" y="140" width="20" height="80" />
        </g>
      )}
    </svg>
  )
}

type Props = {
  kind: Art
  label: string
  title: string
  text: string
  actions: ReactNode
  /** Extra line under the actions, e.g. the requested path. */
  note?: ReactNode
}

export function StateScreen({ kind, label, title, text, actions, note }: Props) {
  return (
    <div className="state">
      <div className="container state__inner">
        <div className="state__copy">
          <Label>{label}</Label>
          <h1 className="state__title">{title}</h1>
          <p className="state__text">{text}</p>
          <div className="state__actions">{actions}</div>
          {note}
        </div>
        <div className="state__art">
          <StateArt kind={kind} />
        </div>
      </div>
    </div>
  )
}
