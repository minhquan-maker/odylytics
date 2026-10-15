import { LogoLoop } from './LogoLoop'
import { PARTNERS } from '../data/content'

const logos = PARTNERS.filter((partner) => partner.logo).map((partner) => ({ src: partner.logo as string, alt: partner.name, title: partner.name, height: 56 }))

/** Monochrome partner logos (white source files; turned black on light themes in CSS). */
export function PartnerLoop() {
  return <LogoLoop className="partner-loop" logos={logos} speed={48} logoHeight={52} gap={96} fadeOut scaleOnHover ariaLabel="Partner universities and companies" />
}
