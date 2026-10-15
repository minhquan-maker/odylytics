import * as EN from '../data/content'
import { VI } from '../data/content.vi'
import { UI } from '../data/ui'
import { useLang } from '../lib/lang'

const ENGLISH = {
  NAV: EN.NAV,
  HERO: EN.HERO,
  MISSION: EN.MISSION,
  SOLUTIONS_HEADING: EN.SOLUTIONS_HEADING,
  SOLUTIONS: EN.SOLUTIONS,
  RECOGNITION_HEADING: EN.RECOGNITION_HEADING,
  RECOGNITION: EN.RECOGNITION,
  PARTNERS_HEADING: EN.PARTNERS_HEADING,
  PARTNERS: EN.PARTNERS,
  IMPACT_HEADING: EN.IMPACT_HEADING,
  IMPACT: EN.IMPACT,
  IMPACT_NOTE: EN.IMPACT_NOTE,
  TESTIMONIALS_HEADING: EN.TESTIMONIALS_HEADING,
  TEAM_HEADING: EN.TEAM_HEADING,
  TEAM: EN.TEAM,
  TEAM_TEASER: EN.TEAM_TEASER,
  TEAM_GROUPS: EN.TEAM_GROUPS,
  ADVISORS: EN.ADVISORS,
  MEMBERS: EN.MEMBERS,
  NEWS_HEADING: EN.NEWS_HEADING,
  FAQ_HEADING: EN.FAQ_HEADING,
  FAQ: EN.FAQ,
  POSTS: EN.POSTS,
  CONTACT: EN.CONTACT,
  FOOTER_NOTE: EN.FOOTER_NOTE,
  FOOTER_GROUPS: EN.FOOTER_GROUPS,
  LEGAL_LINKS: EN.LEGAL_LINKS,
}

export type Content = typeof ENGLISH
export type DeepPartial<T> = T extends readonly (infer U)[] ? DeepPartial<U>[] : T extends object ? { [K in keyof T]?: DeepPartial<T[K]> } : T

/** Overlays the translation on the English content; anything not translated falls back to English. */
function merge<T>(base: T, over: unknown): T {
  if (over === undefined || over === null) return base
  if (Array.isArray(base)) {
    const list = over as unknown[]
    return base.map((item, index) => merge(item, list[index])) as T
  }
  if (typeof base === 'object' && base !== null) {
    const source = over as Record<string, unknown>
    const result: Record<string, unknown> = {}
    for (const key of Object.keys(base)) result[key] = merge((base as Record<string, unknown>)[key], source[key])
    return result as T
  }
  return over as T
}

const VIETNAMESE = merge(ENGLISH, VI)

/** Page copy in the visitor's chosen language. */
export function useContent(): Content {
  const lang = useLang()
  return lang === 'vi' ? VIETNAMESE : ENGLISH
}

export function useUi() {
  return UI[useLang()]
}
