import { SectionHeading } from '../components/SectionHeading'
import { useContent, useUi } from '../hooks/useContent'

/** The six solutions as a plain static grid: a whole photo (or the logo on a plain surface), then name and one line. */
export function Showcase() {
  const { SOLUTIONS_HEADING, SOLUTIONS } = useContent()
  const ui = useUi()
  const { intro, ...heading } = SOLUTIONS_HEADING

  return (
    <section id="solutions" className="section showcase" aria-labelledby="showcase-title">
      <div className="container">
        <SectionHeading id="showcase-title" center intro={intro} {...heading} />

        <ul className="showcase__grid">
          {SOLUTIONS.map((solution) => (
            <li key={solution.id} className="showcase-card" data-reveal="pop">
              <div className={`showcase-card__media${solution.image ? '' : ' showcase-card__media--plain'}`}>
                {solution.image && <img className="showcase-card__photo" src={solution.image} alt="" loading="lazy" />}
                {solution.logo &&
                  (solution.image ? (
                    <span className="showcase-card__chip">
                      <img src={solution.logo} alt={solution.name} />
                    </span>
                  ) : (
                    <img className="showcase-card__logo" src={solution.logo} alt={solution.name} />
                  ))}
              </div>
              <h3 className="showcase-card__name">
                {solution.name}
                {solution.category && <span className="showcase-card__cat">{solution.category}</span>}
              </h3>
              <p className="showcase-card__line">{solution.oneLiner || ui.updatingSoon}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
