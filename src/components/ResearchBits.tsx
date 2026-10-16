import { useState } from 'react'
import { AREAS, STAGES, areaOf, fieldLabel, bibtex, formatDate } from '../data/research'
import type { ResearchEntry, Stage } from '../data/research'
import { ArrowUpRightIcon } from './Icons'

/** Generated cover for entries without a photo: a small pattern per research area, in the circuit-diagram language. */
export function ResearchTile({ area }: { area: string }) {
  const index = Math.max(0, AREAS.findIndex((item) => item.id === area))
  return (
    <svg className="rtile" viewBox="0 0 320 200" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id={`rt-dots-${index}`} width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" className="rtile__dot" />
        </pattern>
      </defs>
      <rect width="320" height="200" fill={`url(#rt-dots-${index})`} />
      {index === 0 &&
        [0, 1, 2, 3, 4].map((k) => <path key={k} className={k === 2 ? 'rtile__line rtile__line--orange' : 'rtile__line'} d={`M0 ${60 + k * 22} C 70 ${30 + k * 22}, 130 ${96 + k * 22}, 200 ${60 + k * 22} S 290 ${30 + k * 22}, 320 ${60 + k * 22}`} />)}
      {index === 1 && (
        <g>
          {[28, 52, 76].map((r) => <circle key={r} cx="160" cy="100" r={r} className="rtile__line" />)}
          <path className="rtile__line" d="M160 14V186M74 100H246" />
          <rect x="152" y="92" width="16" height="16" className="rtile__fill rtile__fill--purple" />
        </g>
      )}
      {index === 2 && (
        <g>
          {[0, 1, 2, 3].map((k) => <rect key={k} x={k % 2 ? 150 : 60} y={34 + k * 34} width={k % 2 ? 110 : 140} height="22" className={k === 2 ? 'rtile__fill rtile__fill--orange' : 'rtile__box'} />)}
        </g>
      )}
      {index === 3 &&
        Array.from({ length: 6 }, (_, row) =>
          Array.from({ length: 10 }, (_, col) => {
            const r = 2 + ((row * 7 + col * 3) % 6)
            return <circle key={`${row}-${col}`} cx={44 + col * 26} cy={40 + row * 26} r={r} className={r > 6 ? 'rtile__fill rtile__fill--orange' : 'rtile__fill rtile__fill--ink'} />
          }),
        )}
    </svg>
  )
}

/** Five squares, filled up to the current stage. */
export function StageBar({ stage }: { stage: Stage }) {
  const current = STAGES.indexOf(stage)
  return (
    <div className="stagebar" role="img" aria-label={`Stage: ${stage}`}>
      <ol>
        {STAGES.map((item, index) => (
          <li key={item} className={index <= current ? 'is-done' : ''} />
        ))}
      </ol>
      <span>{stage}</span>
    </div>
  )
}

function Cover({ entry }: { entry: ResearchEntry }) {
  return <div className="ecard__cover">{entry.image ? <img src={entry.image} alt="" loading="lazy" /> : <ResearchTile area={entry.area} />}</div>
}

/** Large card for featured research and for the Ongoing page. */
export function EntryCard({ entry, project = false }: { entry: ResearchEntry; project?: boolean }) {
  const area = areaOf(entry.area)
  return (
    <a className="ecard" href={`#/research/${entry.slug}`} data-reveal>
      <Cover entry={entry} />
      <div className="ecard__body">
        <p className="ecard__meta">
          <span>{area?.short}</span>
          <span>{entry.kind}</span>
          {!project && entry.date && <span>{formatDate(entry.date)}</span>}
        </p>
        {project && <p className="ecard__identity"><span>{entry.code ?? 'Unassigned'}</span><span>{formatDate(entry.date) || 'Date not set'}</span></p>}
        <h3 className="ecard__title">{entry.title}</h3>
        <p className="ecard__text">{project ? entry.question : entry.summary}</p>
        {entry.fields?.length ? <ul className="research-tags" aria-label="AI fields">{entry.fields.map((field) => <li key={field}>{fieldLabel(field)}</li>)}</ul> : null}
        {project && entry.stage && <StageBar stage={entry.stage} />}
        <span className="link-arrow">
          Read more <span aria-hidden="true">→</span>
        </span>
      </div>
    </a>
  )
}

/** One line of the research list: date, subject, title. */
export function EntryRow({ entry, example = false }: { entry: ResearchEntry; example?: boolean }) {
  const area = areaOf(entry.area)
  const inner = (
    <>
      <span className="erow__date">{formatDate(entry.date) || '—'}</span>
      <span className="erow__area">{area?.short}</span>
      <span className="erow__main">
        <span className="erow__title">{entry.title}</span>
        <span className="erow__sum">{entry.summary}</span>
      </span>
      <span className="erow__kind">{entry.kind}</span>
      <span className="erow__arrow" aria-hidden="true">
        <ArrowUpRightIcon />
      </span>
    </>
  )
  return example ? (
    <div className="erow erow--example" aria-hidden="true">
      {inner}
    </div>
  ) : (
    <a className="erow" href={`#/research/${entry.slug}`} data-reveal>
      {inner}
    </a>
  )
}

/** Greyed-out sample of a published entry, so the format is visible before the first real one is added. */
export function ExampleList({ children }: { children: React.ReactNode }) {
  return (
    <div className="example">
      <p className="example__tag">[ Example format ]</p>
      {children}
    </div>
  )
}

/** Copyable BibTeX block. */
export function CiteBlock({ entry }: { entry: ResearchEntry }) {
  const [copied, setCopied] = useState(false)
  const text = bibtex(entry)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }
  return (
    <div className="cite">
      <pre>{text}</pre>
      <button type="button" className="btn btn--outline btn--sm" onClick={copy}>
        {copied ? 'Copied' : 'Copy BibTeX'}
      </button>
    </div>
  )
}
