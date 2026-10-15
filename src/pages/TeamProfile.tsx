import { LinkedInIcon } from '../components/Icons'
import { useBrandAssets } from '../hooks/useBrandAssets'
import { useContent, useUi } from '../hooks/useContent'
import { NotFound } from './NotFound'

/** One member's own page. Sections without content show an 'Updating soon' frame so each person can fill theirs in. */
export function TeamProfile({ slug }: { slug: string }) {
  const { TEAM } = useContent()
  const ui = useUi()
  const brand = useBrandAssets()
  const member = TEAM.find((item) => item.slug === slug)

  if (!member) return <NotFound />

  const index = TEAM.indexOf(member)
  const next = TEAM[(index + 1) % TEAM.length]

  return (
    <section className="section page" aria-labelledby="profile-name">
      <div className="container profile">
        <a className="text-btn" href="#/team">
          {ui.backToTeam}
        </a>

        <div className="profile__top">
          <div className="profile__photo" data-reveal>
            {member.photo ? <img src={member.photo} alt={`Portrait of ${member.name}`} /> : <img className="profile__placeholder" src={brand.symbol} alt="" />}
          </div>
          <div className="profile__intro" data-reveal>
            <p className="eyebrow">{member.role}</p>
            <h1 id="profile-name" className="display">
              {member.name}
            </h1>
            <p className="body-l">{member.bio}</p>
            {member.linkedin ? (
              <a className="btn btn--outline btn--sm" href={member.linkedin} target="_blank" rel="noreferrer">
                <LinkedInIcon /> LinkedIn
              </a>
            ) : null}
          </div>
        </div>

        <div className="profile__grid">
          <section className="profile__block" data-reveal>
            <h2 className="label">{ui.responsibilities}</h2>
            <ul className="profile__list">
              {member.responsibilities.map((duty) => (
                <li key={duty}>{duty}</li>
              ))}
            </ul>
          </section>
          {[ui.about, ui.background, ui.highlights].map((title) => (
            <section key={title} className="profile__block" data-reveal>
              <h2 className="label">{title}</h2>
              <div className="soon-stack" aria-label={ui.updatingSoon}>
                <span className="soon-line soon-line--title" />
                <span className="soon-line" />
                <span className="soon-line soon-line--short" />
                <span className="soon-tag">{ui.updatingSoon}</span>
              </div>
            </section>
          ))}
        </div>

        <a className="profile__next" href={`#/team/${next.slug}`} data-reveal>
          <span className="label">Next</span>
          <span className="profile__next-name">
            {next.name}, {next.shortRole} ›
          </span>
        </a>
      </div>
    </section>
  )
}
