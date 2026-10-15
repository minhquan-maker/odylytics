import { SectionHeading } from '../components/SectionHeading'
import { useBrandAssets } from '../hooks/useBrandAssets'
import { useContent, useUi } from '../hooks/useContent'

/** Three founders on the second row, two on the first; each card opens the founder's own profile. */
export function TeamPage() {
  const { TEAM, TEAM_HEADING, TEAM_GROUPS, ADVISORS, MEMBERS } = useContent()
  const ui = useUi()
  const brand = useBrandAssets()
  const rows = [TEAM.slice(0, 2), TEAM.slice(2)]

  return (
    <section className="section page team-page" aria-labelledby="team-title">
      <div className="container">
        <SectionHeading id="team-title" {...TEAM_HEADING} />

        <div className="crew" aria-labelledby="team-cofounders">
          <header className="crew__head" data-reveal>
            <h2 id="team-cofounders" className="crew__title">
              {TEAM_GROUPS.cofounders.heading}
            </h2>
            <p className="crew__intro">{TEAM_GROUPS.cofounders.intro}</p>
          </header>
          <div className="founders">
            {rows.map((row, rowIndex) => (
              <ul key={rowIndex} className="founders__row">
                {row.map((member) => (
                  <li key={member.slug} data-reveal="pop">
                    <a className="founder-card" href={`#/team/${member.slug}`}>
                      <span className="founder-card__photo">
                        {member.photo ? <img src={member.photo} alt={`Portrait of ${member.name}`} loading="lazy" /> : <img className="founder-card__placeholder" src={brand.symbol} alt="" />}
                      </span>
                      <span className="founder-card__body">
                        <span className="founder-card__role">{member.role}</span>
                        <span className="founder-card__name">{member.name}</span>
                        <span className="founder-card__bio">{member.bio}</span>
                        <span className="founder-card__more">{ui.viewProfile}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="crew" aria-labelledby="team-advisors">
          <header className="crew__head" data-reveal>
            <h2 id="team-advisors" className="crew__title">
              {TEAM_GROUPS.advisors.heading}
            </h2>
            <p className="crew__intro">{TEAM_GROUPS.advisors.intro}</p>
          </header>
          <ul className="advisors">
            {ADVISORS.map((advisor) => (
              <li key={advisor.name} className="advisor-card" data-reveal="pop">
                <span className="advisor-card__avatar">
                  <img src={brand.symbol} alt="" />
                </span>
                <span className="advisor-card__soon">{ui.advisorSoon}</span>
                <span className="advisor-card__role">{advisor.role}</span>
                <span className="advisor-card__name">{advisor.name}</span>
                <span className="advisor-card__org">{advisor.affiliation}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="crew" aria-labelledby="team-members">
          <header className="crew__head" data-reveal>
            <h2 id="team-members" className="crew__title">
              {TEAM_GROUPS.members.heading}
            </h2>
            <p className="crew__intro">{TEAM_GROUPS.members.intro}</p>
          </header>
          {MEMBERS.length > 0 ? (
            <ul className="founders__row">
              {MEMBERS.map((member) => (
                <li key={member.slug}>
                  <a className="founder-card" href={`#/team/${member.slug}`}>
                    <span className="founder-card__body">
                      <span className="founder-card__role">{member.role}</span>
                      <span className="founder-card__name">{member.name}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="crew__soon" data-reveal>
              <span className="soon-tag">{ui.updatingSoon}</span>
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
