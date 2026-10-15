import { useEffect, useState } from 'react'
import { Label, PageHead } from '../components/Section'
import { LEGAL_ENTRIES, LEGAL_GROUPS } from '../data/site'
import { openConsentSettings } from '../lib/consent'
import { NotFound } from './NotFound'
import { useT } from '../lib/lang'

export function LegalHub() {
  const t = useT()
  return (
    <>
      <PageHead label="Trust and legal" title="Policies, privacy and trust." lead="Everything about how we handle your data, build AI responsibly, secure our systems and run this website, in one place." />
      <section className="section section--tight">
        <div className="container">
          {LEGAL_GROUPS.map((group) => (
            <div key={group} className="legalgroup">
              <h2 className="legalgroup__title">{group}</h2>
              <ul className="legalgrid">
                {LEGAL_ENTRIES.filter((entry) => entry.group === group).map((entry) => (
                  <li key={entry.slug}>
                    <a className="legalcard" href={`#/legal/${entry.slug}`} data-reveal>
                      <h3>{entry.title}</h3>
                      <p>{entry.summary}</p>
                      <span className="link-arrow">
                        Read <span aria-hidden="true">→</span>
                      </span>
                    </a>
                  </li>
                ))}
                {group === 'Your data' && (
                  <li>
                    <button type="button" className="legalcard legalcard--button" onClick={openConsentSettings}>
                      <h3>{t('Cookie settings')}</h3>
                      <p>Review and change what this site may store or measure.</p>
                      <span className="link-arrow">
                        Open <span aria-hidden="true">→</span>
                      </span>
                    </button>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export function Legal({ slug }: { slug: string }) {
  const [tocOpen, setTocOpen] = useState(false)
  const entry = LEGAL_ENTRIES.find((item) => item.slug === slug)
  useEffect(() => {
    if (!entry) return
    const title = document.title
    document.title = `${entry.title} — Odylytics`
    return () => {
      document.title = title
    }
  }, [entry])
  if (!entry) return <NotFound />
  const doc = entry.doc
  const id = (index: number) => `s-${index + 1}`

  return (
    <>
      <PageHead label={`Legal · ${entry.group}`} title={doc.title} lead={doc.intro} />
      <section className="section section--tight">
        <div className="container legal">
          <aside className="legal__side">
            <nav className={`legal__toc${tocOpen ? ' is-open' : ''}`} aria-label="Contents">
              <button type="button" className="legal__tocbtn" aria-expanded={tocOpen} onClick={() => setTocOpen((value) => !value)}>
                <Label>Contents</Label>
                <span aria-hidden="true">{tocOpen ? '−' : '+'}</span>
              </button>
              <ol>
                {doc.sections.map((section, index) => (
                  <li key={`${section.heading}-${index}`}>
                    <a href={`#/legal/${slug}`} onClick={(event) => {
                      event.preventDefault()
                      setTocOpen(false)
                      document.getElementById(id(index))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }}>
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <dl className="legal__meta">
              <div>
                <dt>Last updated</dt>
                <dd>{doc.updated}</dd>
              </div>
              <div>
                <dt>Version</dt>
                <dd>1.0</dd>
              </div>
            </dl>
            <button type="button" className="btn btn--outline btn--sm" onClick={() => window.print()}>
              Print or save as PDF
            </button>
          </aside>

          <article className="legal__body">
            {doc.sections.map((section, index) => (
              <section key={`${section.heading}-${index}`} id={id(index)} className="legal__section">
                <h2>
                  <span className="legal__num">{index + 1}</span>
                  {section.heading}
                </h2>
                {section.body?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.items && (
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.after?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>
            ))}
            <p className="legal__back">
              <a className="link-arrow link-arrow--back" href="#/legal">
                <span aria-hidden="true">←</span> All policies
              </a>
            </p>
          </article>
        </div>
      </section>
    </>
  )
}
