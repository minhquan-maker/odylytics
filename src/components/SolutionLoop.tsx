import { useMemo } from 'react'
import { LogoLoop } from './LogoLoop'
import { SOLUTIONS } from '../data/content'
import { useBrandAssets } from '../hooks/useBrandAssets'

/** The six Odylytics solutions as a looping logo strip, like the partner strip. */
export function SolutionLoop() {
  const { solutionLogo } = useBrandAssets()
  const logos = useMemo(() => SOLUTIONS.filter((solution) => solution.logo).map((solution) => ({ src: solutionLogo(solution.logo as string), alt: solution.name, title: solution.name, height: 64 })), [solutionLogo])
  return <LogoLoop className="solution-loop" logos={logos} speed={44} logoHeight={60} gap={72} fadeOut scaleOnHover ariaLabel="Odylytics solutions" />
}
