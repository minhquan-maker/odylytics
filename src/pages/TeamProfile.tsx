import { LinkedInIcon } from '../components/Icons'
import { Label } from '../components/Section'
import { TEAM } from '../data/content'
import { NotFound } from './NotFound'

export function TeamProfile({ slug }: { slug: string }) {
  const member = TEAM.find((item) => item.slug === slug)
  if (!member) return <NotFound />
  const next = TEAM[(TEAM.indexOf(member) + 1) % TEAM.length]

  return (
    <section className="section profile-page">
      <div className="container profile">
        <a className="link-arrow link-arrow--back" href="#/team/co-founders">
          <span aria-hidden="true">←</span> All co-founders
        </a>
        <div className="profile__top">
          <div className="profile__photo">{member.photo && <img src={member.photo} alt={`Portrait of ${member.name}`} />}</div>
          <div className="profile__intro">
            <Label>{member.role}</Label>
            <h1 className="profile__name">{member.name}</h1>
            <p className="profile__bio">{member.bio}</p>
            {member.linkedin && (
              <a className="btn btn--outline btn--sm" href={member.linkedin} target="_blank" rel="noreferrer">
                <LinkedInIcon /> LinkedIn
              </a>
            )}
          </div>
        </div>
        <div className="profile__grid">
          <section className="profile__block">
            <h2 className="profile__h">What they own</h2>
            <ul>
              {member.responsibilities.map((duty) => (
                <li key={duty}>{duty}</li>
              ))}
            </ul>
          </section>
          {['About', 'Background', 'Highlights'].map((title) => (
            <section key={title} className="profile__block">
              <h2 className="profile__h">{title}</h2>
              <p className="profile__soon">Updating soon.</p>
            </section>
          ))}
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
