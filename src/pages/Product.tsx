import { Label, PageHead, SectionHead } from '../components/Section'
import { SolutionCard } from '../components/SolutionCard'
import { Testimonials } from '../components/Testimonials'
import { SOLUTIONS } from '../data/content'
import { INCOMING_STAGES, PRODUCT_GROUPS } from '../data/site'
import type { ProductGroupId } from '../data/site'
import { useT } from '../lib/lang'

export function Product({ id }: { id: ProductGroupId }) {
  const t = useT()
  const group = PRODUCT_GROUPS[id]
  const items = group.solutions.map((solutionId) => SOLUTIONS.find((solution) => solution.id === solutionId)).filter((solution) => solution !== undefined)

  return (
    <>
      <PageHead label={group.label} title={group.title} lead={group.lead} />

      {group.problem.length > 0 && (
        <section className="section section--tight">
          <div className="container">
            <ol className="story">
              {group.problem.map((step) => (
                <li key={step.label} data-reveal>
                  <Label>{step.label}</Label>
                  <h2 className="story__title">{step.title}</h2>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      <section className="section section--tight">
        <div className="container">
          <SectionHead label="Solutions" title={id === 'incoming' ? 'In early development' : 'In this group'} />
          <div className="solutions">
            {items.map((solution) => (
              <SolutionCard key={solution.id} solution={solution} status={group.status[solution.id]} />
            ))}
          </div>
        </div>
      </section>

      {id === 'incoming' && (
        <section className="section section--tight">
          <div className="container">
            <SectionHead label="How we work" title="From first question to real pilot." />
            <ol className="stages">
              {INCOMING_STAGES.map((stage, index) => (
                <li key={stage.label} data-reveal>
                  <span className="stages__n">0{index + 1}</span>
                  <h3>{stage.label}</h3>
                  <p>{stage.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {id === 'climate-tech' && (
        <section className="section section--surface">
          <div className="container">
            <SectionHead label="Testimonials" title="What people say about AquaGuard." />
            <Testimonials limit={3} />
          </div>
        </section>
      )}

      <section className="container closing-wrap">
        <div className="closing scope-dark">
          <Label>Pilots</Label>
          <h2 className="closing__title">{id === 'incoming' ? 'Have a problem we should look at?' : 'Run a pilot with us.'}</h2>
          <p>{id === 'incoming' ? 'Tell us who is affected and what a better outcome looks like.' : 'We work with universities, public bodies and companies who want to test AI on a real problem.'}</p>
          <a className="btn btn--accent" href="#/contact">
            {t('Get in touch')}
          </a>
        </div>
      </section>
    </>
  )
}
