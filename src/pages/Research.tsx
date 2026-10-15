import { useState } from 'react'
import { CiteBlock, EntryCard, EntryRow, ExampleList, StageBar } from '../components/ResearchBits'
import { Label, PageHead, SectionHead } from '../components/Section'
import { AREAS, ENTRIES, EXAMPLE_ENTRY, EXAMPLE_ONGOING, areaOf, entryBySlug, formatDate, ongoingEntries, publishedEntries } from '../data/research'
import type { EntryKind } from '../data/research'
import { RESEARCH_INTRO, RESEARCH_PRINCIPLES } from '../data/site'
import { NotFound } from './NotFound'

function EmptyPublications({ compact = false }: { compact?: boolean }) {
  return (
    <>
      <ExampleList>
        <EntryRow entry={EXAMPLE_ENTRY} example />
        <EntryRow entry={{ ...EXAMPLE_ENTRY, title: 'A second entry looks like this', kind: 'Dataset', area: 'sensing', date: '2025-11' }} example />
      </ExampleList>
      {compact ? (
        <p className="muted">The first papers are on their way. Each one will appear here with its PDF, code and data whenever our partners allow it.</p>
      ) : (
        <div className="callout">
          <Label>Publications</Label>
          <h2>The first papers are on their way.</h2>
          <p>We have not published a paper yet. Each one will appear here with its PDF, code and data whenever our partners allow it.</p>
        </div>
      )}
    </>
  )
}

export function ResearchOverview() {
  const featured = ENTRIES.filter((entry) => entry.featured).slice(0, 3)
  const published = publishedEntries()
  return (
    <>
      <PageHead label={RESEARCH_INTRO.label} title={RESEARCH_INTRO.title} lead={RESEARCH_INTRO.lead} />

      {featured.length > 0 && (
        <section className="section section--tight">
          <div className="container">
            <SectionHead label="Featured" title="Work in focus." />
            <div className="ecards">
              {featured.map((entry) => (
                <EntryCard key={entry.slug} entry={entry} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section section--tight">
        <div className="container">
          <SectionHead label="Areas" title="Where we are looking." />
          <ul className="areas">
            {AREAS.map((area) => {
              const count = ENTRIES.filter((entry) => entry.area === area.id).length
              return (
                <li key={area.id}>
                  <a className="area" href={`#/research/publications?area=${area.id}`} data-reveal>
                    <h3>{area.label}</h3>
                    <p>{area.text}</p>
                    <span className="area__prod">{count === 0 ? 'No entries yet' : `${count} ${count === 1 ? 'entry' : 'entries'}`}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <SectionHead label="Latest" title="New from our research." action={{ href: '#/research/publications', text: 'All publications' }} />
          {published.length ? (
            <div className="elist">
              {published.slice(0, 6).map((entry) => (
                <EntryRow key={entry.slug} entry={entry} />
              ))}
            </div>
          ) : (
            <EmptyPublications compact />
          )}
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <SectionHead label="Principles" title="How we do research." />
          <ol className="principles">
            {RESEARCH_PRINCIPLES.map((item) => (
              <li key={item.index} data-reveal>
                <span className="principles__n">{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}

export function ResearchOngoing() {
  const list = ongoingEntries()
  return (
    <>
      <PageHead label="Research · Ongoing" title="Questions we are working on." lead="Work in progress, with the stage it has reached. Entries move to Publications once they are published." />
      <section className="section section--tight">
        <div className="container">
          {list.length ? (
            <div className="ecards ecards--two">
              {list.map((entry) => (
                <EntryCard key={entry.slug} entry={entry} project />
              ))}
            </div>
          ) : (
            <>
              <ExampleList>
                <EntryRow entry={EXAMPLE_ONGOING} example />
              </ExampleList>
              <div className="callout">
                <Label>Ongoing</Label>
                <h2>Nothing in progress is public yet.</h2>
                <p>Open questions will be listed here as soon as we can share them, each with the stage it has reached.</p>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  )
}

/** All published entries with filters by area and type; the area can come from the address (?area=flood). */
export function ResearchPublications({ query }: { query: string }) {
  const params = new URLSearchParams(query)
  const [area, setArea] = useState(params.get('area') ?? 'all')
  const [kind, setKind] = useState<'all' | EntryKind>('all')
  const published = publishedEntries()
  const kinds = [...new Set(published.map((entry) => entry.kind))]
  const list = published.filter((entry) => (area === 'all' || entry.area === area) && (kind === 'all' || entry.kind === kind))
  const years = [...new Set(list.map((entry) => entry.date?.slice(0, 4) ?? 'Undated'))]

  const pickArea = (value: string) => {
    setArea(value)
    window.history.replaceState(null, '', value === 'all' ? '#/research/publications' : `#/research/publications?area=${value}`)
  }

  return (
    <>
      <PageHead label="Research · Publications" title="Papers, reports, datasets and code." lead="Everything we publish, with the PDF, code and data whenever our partners allow it." />
      <section className="section section--tight">
        <div className="container">
          {published.length === 0 ? (
            <EmptyPublications />
          ) : (
            <>
              <div className="filters" role="group" aria-label="Filter by area">
                {[{ id: 'all', short: 'All areas' }, ...AREAS].map((item) => (
                  <button key={item.id} type="button" className={`chip${area === item.id ? ' is-active' : ''}`} aria-pressed={area === item.id} onClick={() => pickArea(item.id)}>
                    {item.short}
                  </button>
                ))}
              </div>
              {kinds.length > 1 && (
                <div className="filters" role="group" aria-label="Filter by type">
                  {(['all', ...kinds] as const).map((item) => (
                    <button key={item} type="button" className={`chip${kind === item ? ' is-active' : ''}`} aria-pressed={kind === item} onClick={() => setKind(item)}>
                      {item === 'all' ? 'All types' : item}
                    </button>
                  ))}
                </div>
              )}
              {years.map((year) => (
                <div key={year} className="timeline">
                  <h2 className="timeline__year">{year}</h2>
                  <div className="elist">
                    {list
                      .filter((entry) => (entry.date?.slice(0, 4) ?? 'Undated') === year)
                      .map((entry) => (
                        <EntryRow key={entry.slug} entry={entry} />
                      ))}
                  </div>
                </div>
              ))}
              {list.length === 0 && <p className="muted">Nothing matches these filters yet.</p>}
            </>
          )}
        </div>
      </section>
    </>
  )
}

/** One research page: a project or a published work, in the same article layout. */
export function ResearchArticle({ slug }: { slug: string }) {
  const entry = entryBySlug(slug)
  if (!entry) return <NotFound />
  const area = areaOf(entry.area)
  const related = ENTRIES.filter((item) => item.area === entry.area && item.slug !== entry.slug).slice(0, 3)
  const sections = entry.sections ?? []
  const soon = <p className="profile__soon">Updating soon.</p>
  const named = (heading: string) => sections.find((item) => item.heading === heading)

  return (
    <article className="section article">
      <div className="container article__wrap">
        <a className="link-arrow link-arrow--back" href={entry.status === 'Published' ? '#/research/publications' : '#/research/ongoing'}>
          <span aria-hidden="true">←</span> {entry.status === 'Published' ? 'All publications' : 'Ongoing research'}
        </a>

        <header className="article__head">
          <Label>{`${area?.short ?? 'Research'} · ${entry.kind}`}</Label>
          <h1 className="article__title">{entry.title}</h1>
          <p className="article__lead">{entry.summary}</p>
          <p className="article__meta">
            {entry.date && <span>{formatDate(entry.date)}</span>}
            {entry.authors?.length ? <span>{entry.authors.join(', ')}</span> : null}
            {entry.venue && <span>{entry.venue}</span>}
          </p>
          {entry.links?.length ? (
            <div className="article__links">
              {entry.links.map((link) => (
                <a key={link.href} className="btn btn--outline btn--sm" href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </header>

        <div className="article__layout">
          <aside className="article__facts">
            <dl className="facts">
              {entry.stage && (
                <div>
                  <dt>Stage</dt>
                  <dd>
                    <StageBar stage={entry.stage} />
                  </dd>
                </div>
              )}
              <div>
                <dt>Status</dt>
                <dd>{entry.status}</dd>
              </div>
              {entry.product && (
                <div>
                  <dt>Product</dt>
                  <dd>{entry.product}</dd>
                </div>
              )}
              <div>
                <dt>Partners</dt>
                <dd>{entry.partners?.length ? entry.partners.join(', ') : 'Open to partners'}</dd>
              </div>
            </dl>
          </aside>

          <div className="article__body">
            {entry.question && (
              <section className="profile__sec">
                <h2 className="profile__h">Question</h2>
                <p className="profile__about">{entry.question}</p>
              </section>
            )}
            {['Overview', 'Method', 'Findings'].map((heading) => (
              <section key={heading} className="profile__sec">
                <h2 className="profile__h">{heading}</h2>
                {named(heading) ? named(heading)?.body.map((paragraph) => <p key={paragraph} className="profile__about">{paragraph}</p>) : soon}
              </section>
            ))}
            {sections
              .filter((item) => !['Overview', 'Method', 'Findings'].includes(item.heading))
              .map((item) => (
                <section key={item.heading} className="profile__sec">
                  <h2 className="profile__h">{item.heading}</h2>
                  <div>{item.body.map((paragraph) => <p key={paragraph} className="profile__about">{paragraph}</p>)}</div>
                </section>
              ))}
            <section className="profile__sec">
              <h2 className="profile__h">Cite</h2>
              {entry.status === 'Published' ? <CiteBlock entry={entry} /> : <p className="profile__soon">A citation appears here once the work is published.</p>}
            </section>
          </div>
        </div>

        {related.length > 0 && (
          <div className="article__related">
            <SectionHead label="Related" title="More in this area." />
            <div className="elist">
              {related.map((item) => (
                <EntryRow key={item.slug} entry={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  )
}
