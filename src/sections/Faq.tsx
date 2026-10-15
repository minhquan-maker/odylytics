import { SectionHeading } from '../components/SectionHeading'
import { useContent } from '../hooks/useContent'

export function Faq() {
  const { FAQ_HEADING, FAQ } = useContent()
  return (
    <section id="faq" className="section faq" aria-labelledby="faq-title">
      <div className="container">
        <SectionHeading id="faq-title" center {...FAQ_HEADING} />
        <div className="faq__list" data-reveal>
          {FAQ.map((item) => (
            <details key={item.q} className="faq__item">
              <summary className="faq__q">
                <span>{item.q}</span>
                <span className="faq__icon" aria-hidden="true" />
              </summary>
              <p className="faq__a">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
