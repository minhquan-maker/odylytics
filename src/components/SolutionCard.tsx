import type { Solution } from '../data/content'
import { useBrandAssets } from '../hooks/useBrandAssets'

/** One solution: logo, status, and either its summary or an 'Updating soon' line. */
export function SolutionCard({ solution, status }: { solution: Solution; status?: string }) {
  const { solutionLogo } = useBrandAssets()
  return (
    <article className={`solution${solution.soon ? ' is-soon' : ''}`} data-reveal>
      {solution.image && (
        <div className="solution__media">
          <img src={solution.image} alt="" loading="lazy" />
        </div>
      )}
      <div className="solution__body">
        <div className="solution__top">
          {solution.logo ? <img className="solution__logo" src={solutionLogo(solution.logo)} alt={solution.name} /> : <h3 className="solution__name">{solution.name}</h3>}
          {status && <span className={`status${status === 'Pilot' || status === 'MVP' || status === 'Prototype' ? ' status--live' : ''}`}>{status}</span>}
        </div>
        {solution.category && <p className="solution__cat">{solution.category}</p>}
        {solution.oneLiner && <p className="solution__line">{solution.oneLiner}</p>}
        {solution.description ? <p className="solution__text">{solution.description}</p> : <p className="solution__soon">Details updating soon.</p>}
      </div>
    </article>
  )
}
