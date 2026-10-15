import type { ReactNode } from 'react'
import { useT } from '../lib/lang'

/** Mono label with an orange square marker, the one label style used across the site. */
export function Label({ children, className = '' }: { children: ReactNode; className?: string }) {
  const t = useT()
  return (
    <p className={`label ${className}`.trim()}>
      {typeof children === 'string' ? t(children) : children}
    </p>
  )
}

export function PageHead({ label, title, lead }: { label: string; title: string; lead?: string }) {
  const t = useT()
  return (
    <header className="pagehead">
      <div className="container">
        <Label>{label}</Label>
        <h1 className="pagehead__title">{t(title)}</h1>
        {lead && <p className="pagehead__lead">{t(lead)}</p>}
      </div>
    </header>
  )
}

export function SectionHead({ label, title, action }: { label?: string; title: string; action?: { href: string; text: string } }) {
  const t = useT()
  return (
    <header className="sechead">
      <div>
        {label && <Label>{label}</Label>}
        <h2 className="sechead__title">{t(title)}</h2>
      </div>
      {action && (
        <a className="link-arrow" href={action.href}>
          {t(action.text)}
          <span aria-hidden="true">→</span>
        </a>
      )}
    </header>
  )
}
