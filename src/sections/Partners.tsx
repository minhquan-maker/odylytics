import { useMemo } from 'react'
import { LogoLoop } from '../components/LogoLoop'
import type { LogoItem } from '../components/LogoLoop'
import { SectionHeading } from '../components/SectionHeading'
import { useContent } from '../hooks/useContent'

export function Partners() {
  const { PARTNERS, PARTNERS_HEADING } = useContent()
  const logos = useMemo<LogoItem[]>(
    () => PARTNERS.filter((partner) => partner.logo).map((partner) => ({ src: partner.logo ?? '', alt: partner.name, title: partner.name })),
    [PARTNERS],
  )

  return (
    <section id="partners" className="section section--compact" aria-labelledby="partners-title">
      <div className="container">
        <SectionHeading id="partners-title" {...PARTNERS_HEADING} />
      </div>
      <div className="partner-loop" data-reveal>
        <LogoLoop
          logos={logos}
          speed={60}
          logoHeight={64}
          gap={88}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          ariaLabel="Partner institutions"
        />
      </div>
    </section>
  )
}
