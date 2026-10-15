import { Label, PageHead, SectionHead } from '../components/Section'
import { ACCOMPLISHED, ONGOING, RESEARCH_AREAS, RESEARCH_INTRO, RESEARCH_PRINCIPLES } from '../data/site'

export function ResearchOverview() {
  return (
    <>
      <PageHead label={RESEARCH_INTRO.label} title={RESEARCH_INTRO.title} lead={RESEARCH_INTRO.lead} />

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

      <section className="section section--tight">
        <div className="container">
          <SectionHead label="Areas" title="What we are asking." />
          <ul className="areas">
            {RESEARCH_AREAS.map((area) => (
              <li key={area.label} className="area" data-reveal>
                <h3>{area.label}</h3>
                <p>{area.text}</p>
                <span className="area__prod">{area.products}</span>
              </li>
            ))}
          </ul>
          <p className="more">
            <a className="link-arrow" href="#/research/ongoing">
              See ongoing projects <span aria-hidden="true">→</span>
            </a>
            <a className="link-arrow" href="#/research/accomplished">
              See what we achieved <span aria-hidden="true">→</span>
            </a>
          </p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="callout" data-reveal>
            <Label>Publications</Label>
            <h2>Papers and datasets are on their way.</h2>
            <p>We have not published a paper yet. When we do, it will be listed here with its data and code whenever our partners allow.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export function ResearchOngoing() {
  return (
    <>
      <PageHead label="Research · Ongoing" title="Active projects and open questions." lead="Each project is tied to a product and a question we do not yet know the answer to. Stages show how far along we are." />
      <section className="section section--tight">
        <div className="container">
          <ul className="projects">
            {ONGOING.map((project) => (
              <li key={project.title} className="project" data-reveal>
                <div className="project__head">
                  <span className="status">{project.stage}</span>
                  <span className="project__area">{project.area}</span>
                </div>
                <h2 className="project__title">{project.title}</h2>
                <p className="project__q">{project.question}</p>
                <dl className="project__meta">
                  <div>
                    <dt>Product</dt>
                    <dd>{project.product}</dd>
                  </div>
                  <div>
                    <dt>Partners</dt>
                    <dd>{project.partners.length ? project.partners.join(', ') : 'Open to partners'}</dd>
                  </div>
                </dl>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="container closing-wrap">
        <div className="closing scope-dark">
          <Label>Collaborate</Label>
          <h2 className="closing__title">Bring a lab, a dataset or a field site.</h2>
          <p>We are looking for research partners who care about floods, accessibility and inclusive hiring.</p>
          <a className="btn btn--accent" href="#/contact">
            Get in touch
          </a>
        </div>
      </section>
    </>
  )
}

export function ResearchAccomplished() {
  const years = [...new Set(ACCOMPLISHED.map((item) => item.year))]
  return (
    <>
      <PageHead label="Research · Accomplished" title="Prizes, pilots and milestones so far." lead="A running record of what the team has shipped and where it was recognised." />
      <section className="section section--tight">
        <div className="container">
          {years.map((year) => (
            <div key={year} className="timeline">
              <h2 className="timeline__year">{year}</h2>
              <ul className="timeline__list">
                {ACCOMPLISHED.filter((item) => item.year === year).map((item) => (
                  <li key={item.title} className="milestone" data-reveal>
                    {item.image && (
                      <div className="milestone__media">
                        <img src={item.image} alt="" loading="lazy" />
                      </div>
                    )}
                    <div className="milestone__body">
                      <span className="tag">{item.kind}</span>
                      <h3>{item.title}</h3>
                      <p>{item.context}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
