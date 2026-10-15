import { LogoLoop } from './LogoLoop'
import { PARTNERS } from '../data/content'

const logos = PARTNERS.filter((partner) => partner.logo).map((partner) => ({ src: partner.logo as string, alt: partner.name, title: partner.name, height: 40 }))

/** Monochrome partner logos (white source files; turned black on light themes in CSS). */
export function PartnerLoop() {
  return <LogoLoop className="partner-loop" logos={logos} speed={42} logoHeight={34} gap={64} fadeOut scaleOnHover ariaLabel="Partner universities and companies" />
}
