import { SectionHeading } from '../components/SectionHeading'
import { SOLUTIONS } from '../data/content'
import { useContent, useUi } from '../hooks/useContent'

export function Recognition() {
  const { RECOGNITION, RECOGNITION_HEADING } = useContent()
  const ui = useUi()
  const prizes = RECOGNITION.flatMap((group) => group.items.map((item) => ({ ...item, solutionId: group.solutionId, solutionName: group.solutionName })))

  return (
    <section id="recognition" className="section" aria-labelledby="recognition-title">
      <div className="container">
        <SectionHeading id="recognition-title" {...RECOGNITION_HEADING} />

        <ul className="prize-grid">
          {prizes.map((prize, index) => {
            const logo = SOLUTIONS.find((solution) => solution.id === prize.solutionId)?.logo
            return (
              <li key={index} className="card card--hover prize" data-reveal>
                <div className="prize__media">
                  {prize.image ? <img src={prize.image} alt={`${prize.title}, ${prize.issuer}`} loading="lazy" /> : <span className="logo-placeholder">{ui.photoSoon}</span>}
                  <span className={`prize__medal${prize.place === '1st' ? ' prize__medal--first' : ''}`}>{prize.place ?? prize.type}</span>
                </div>
                <div className="prize__body">
                  <span className="logo-chip prize__project">
                    {logo ? <img src={logo} alt={prize.solutionName} loading="lazy" /> : prize.solutionName}
                  </span>
                  <h3 className="prize__title">{prize.title}</h3>
                  <p className="prize__issuer">
                    {prize.issuer}
                    {prize.year && <> · {prize.year}</>}
                  </p>
                  {prize.href ? (
                    <a className="text-btn" href={prize.href} target="_blank" rel="noreferrer">
                      {ui.readTheArticle}
                    </a>
                  ) : (
                    <span className="prize__soon">{ui.articleLinkSoon}</span>
                  )}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
