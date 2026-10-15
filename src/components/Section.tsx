import type { ReactNode } from 'react'

/** Mono label with an orange square marker, the one label style used across the site. */
export function Label({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`label ${className}`.trim()}>
      <span className="label__mark" aria-hidden="true" />
      {children}
    </p>
  )
}

export function PageHead({ label, title, lead }: { label: string; title: string; lead?: string }) {
  return (
    <header className="pagehead">
      <div className="container">
        <Label>{label}</Label>
        <h1 className="pagehead__title">{title}</h1>
        {lead && <p className="pagehead__lead">{lead}</p>}
      </div>
    </header>
  )
}

export function SectionHead({ label, title, action }: { label?: string; title: string; action?: { href: string; text: string } }) {
  return (
    <header className="sechead">
      <div>
        {label && <Label>{label}</Label>}
        <h2 className="sechead__title">{title}</h2>
      </div>
      {action && (
        <a className="link-arrow" href={action.href}>
          {action.text}
          <span aria-hidden="true">→</span>
        </a>
      )}
    </header>
  )
}
