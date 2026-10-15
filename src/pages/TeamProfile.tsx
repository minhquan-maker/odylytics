import { ArrowUpRightIcon, LinkedInIcon } from '../components/Icons'
import { Label } from '../components/Section'
import { TEAM } from '../data/content'
import { NotFound } from './NotFound'

function Soon() {
  return <p className="profile__soon">Updating soon.</p>
}

/** One member's page. Every member gets the same sections in the same order; missing ones read 'Updating soon'. */
export function TeamProfile({ slug }: { slug: string }) {
  const member = TEAM.find((item) => item.slug === slug)
  if (!member) return <NotFound />
  const next = TEAM[(TEAM.indexOf(member) + 1) % TEAM.length]
  const links = [...(member.linkedin ? [{ label: 'LinkedIn', href: member.linkedin }] : []), ...(member.links ?? [])]

  return (
    <section className="section profile-page">
      <div className="container profile">
        <a className="link-arrow link-arrow--back" href="#/team/co-founders">
          <span aria-hidden="true">←</span> All co-founders
        </a>

        <div className="profile__layout">
          <aside className="profile__side">
            <div className="profile__photo">{member.photo && <img src={member.photo} alt={`Portrait of ${member.name}`} />}</div>
            {links.length > 0 && (
              <ul className="profile__links" aria-label="Links">
                {links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} target={link.href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer">
                      <span className="profile__linklabel">
                        {link.label === 'LinkedIn' && <LinkedInIcon />}
                        {link.label}
                      </span>
                      <ArrowUpRightIcon />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </aside>

          <div className="profile__main">
            <header className="profile__head">
              <Label>{member.role}</Label>
              <h1 className="profile__name">{member.name}</h1>
              <p className="profile__bio">{member.bio}</p>
            </header>

            <section className="profile__sec">
              <h2 className="profile__h">About</h2>
              {member.about ? <p className="profile__about">{member.about}</p> : <Soon />}
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
        </div>

        <a className="profile__next" href={`#/team/${next.slug}`}>
          <span>Next</span>
          <strong>
            {next.name}, {next.shortRole} →
          </strong>
        </a>
      </div>
    </section>
  )
}
