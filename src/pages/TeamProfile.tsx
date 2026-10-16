import { ArrowUpRightIcon, LinkedInIcon } from '../components/Icons'
import { Label } from '../components/Section'
import { TEAM } from '../data/content'
import { NotFound } from './NotFound'

const LINK_SLOTS = ['LinkedIn', 'Portfolio', 'GitHub', 'Facebook', 'Email (HCMUT)', 'Email (UTS)']

function Soon() {
  return <p className="profile__soon">Updating soon.</p>
}

/** One member's page. Every member gets the same sections in the same order; missing ones read 'Updating soon'. */
export function TeamProfile({ slug }: { slug: string }) {
  const member = TEAM.find((item) => item.slug === slug)
  if (!member) return <NotFound />
  const previous = TEAM[(TEAM.indexOf(member) - 1 + TEAM.length) % TEAM.length]
  const next = TEAM[(TEAM.indexOf(member) + 1) % TEAM.length]
  const href = (label: string) => (label === 'LinkedIn' ? member.linkedin : member.links?.find((link) => link.label === label)?.href) ?? null
  const links = LINK_SLOTS.map((label) => ({ label, href: href(label) }))

  return (
    <section className="section profile-page">
      <div className="container profile">
        <a className="link-arrow link-arrow--back" href="#/team/co-founders">
          <span aria-hidden="true">←</span> All co-founders
        </a>

        <div className="profile__layout">
          <div className="profile__photo">{member.photo && <img src={member.photo} alt={`Portrait of ${member.name}`} />}</div>
          <header className="profile__head">
            <Label>{member.role}</Label>
            <h1 className="profile__name">{member.name}</h1>
            <p className="profile__bio">{member.bio}</p>
            <ul className="profile__links" aria-label="Links">
              {links.map((link) => (
                <li key={link.label}>
                  {link.href ? (
                    <a href={link.href} target={link.href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer">
                      {link.label === 'LinkedIn' && <LinkedInIcon />}
                      {link.label}
                      <ArrowUpRightIcon />
                    </a>
                  ) : (
                    <span className="is-off" aria-disabled="true">
                      {link.label === 'LinkedIn' && <LinkedInIcon />}
                      {link.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </header>
        </div>

        <div className="profile__main">
            <section className="profile__sec">
              <h2 className="profile__h">About</h2>
              {member.about?.length ? (
                <div className="profile__about">
                  {member.about.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                  {member.quote && <blockquote className="profile__quote">{member.quote}</blockquote>}
                </div>
              ) : (
                <Soon />
              )}
            </section>

            <section className="profile__sec">
              <h2 className="profile__h">What they own</h2>
              <ul className="profile__list">
                {member.responsibilities.map((duty) => (
                  <li key={duty}>{duty}</li>
                ))}
              </ul>
            </section>

            <section className="profile__sec">
              <h2 className="profile__h">Background</h2>
              {member.background?.length ? (
                <ul className="profile__rows">
                  {member.background.map((item) => (
                    <li key={item.title}>
                      <strong>{item.title}</strong>
                      <span>{item.org}</span>
                      {item.note && <span className="profile__note">{item.note}</span>}
                    </li>
                  ))}
                </ul>
              ) : (
                <Soon />
              )}
            </section>

            <section className="profile__sec">
              <h2 className="profile__h">Highlights</h2>
              {member.highlights?.length ? (
                <ul className="profile__list">
                  {member.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <Soon />
              )}
            </section>
        </div>

        <nav className="profile__navigation" aria-label="Co-founder profiles">
          <a className="profile__neighbor" href={`#/team/${previous.slug}`} rel="prev">
            <span>Previous</span>
            <strong><span aria-hidden="true">←</span> {previous.name}, {previous.shortRole}</strong>
          </a>
          <a className="profile__neighbor profile__neighbor--next" href={`#/team/${next.slug}`} rel="next">
            <span>Next</span>
            <strong>{next.name}, {next.shortRole} <span aria-hidden="true">→</span></strong>
          </a>
        </nav>
      </div>
    </section>
  )
}
