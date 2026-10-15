/**
 * Research content. To add a paper, report, dataset or project, append one object to ENTRIES.
 *
 * - `status: 'Ongoing'` appears on Research > Ongoing, `status: 'Published'` on Research > Publications.
 * - `featured: true` puts it in the large cards at the top of Research.
 * - `date` is ISO ('2026-10-15' or '2026-10'); leave it out for undated projects.
 * - `sections` is the long-form article body; any section left out reads "Updating soon" on the page.
 * - `slug` becomes the page address: #/research/<slug>.
 */

export const STAGES = ['Exploring', 'Prototype', 'MVP', 'Pilot', 'Published'] as const
export type Stage = (typeof STAGES)[number]

export type EntryKind = 'Project' | 'Paper' | 'Preprint' | 'Report' | 'Thesis' | 'Dataset' | 'Code' | 'Talk'

export type ResearchArea = { id: string; label: string; short: string; text: string; product: string }

export const AREAS: ResearchArea[] = [
  { id: 'flood', label: 'Flood and disaster intelligence', short: 'Flood intelligence', text: 'Coordinating victims, rescuers and authorities through live maps and community reports.', product: 'AquaGuard' },
  { id: 'assistive', label: 'Assistive interaction', short: 'Assistive interaction', text: 'Replacing keyboard and mouse with head tracking and gestures for coding education.', product: 'EnableCode' },
  { id: 'hiring', label: 'Inclusive hiring', short: 'Inclusive hiring', text: 'Generating interview practice from a job description and a candidate profile.', product: 'Includio' },
  { id: 'sensing', label: 'Environmental sensing', short: 'Environmental sensing', text: 'Making air-quality data readable and useful for everyday decisions.', product: 'AirGuard' },
]

export type ResearchLink = { label: 'Paper' | 'PDF' | 'Code' | 'Data' | 'Demo' | 'Slides' | 'Video'; href: string }

export type ResearchEntry = {
  slug: string
  title: string
  kind: EntryKind
  area: string
  status: 'Ongoing' | 'Published'
  /** One or two sentences shown in lists and cards. */
  summary: string
  date?: string
  /** Progress of an ongoing project. */
  stage?: Stage
  /** The question the work tries to answer. */
  question?: string
  authors?: string[]
  /** Journal, conference or report series (published entries). */
  venue?: string
  product?: string
  partners?: string[]
  featured?: boolean
  /** Cover image; a generated pattern tile is used when missing. */
  image?: string
  links?: ResearchLink[]
  sections?: { heading: string; body: string[] }[]
}

// TODO(content): replace stages, questions and partners with the confirmed research agenda.
export const ENTRIES: ResearchEntry[] = [
  {
    slug: 'live-coordination-flood-rescue',
    title: 'Live coordination for flood rescue',
    kind: 'Project',
    area: 'flood',
    status: 'Ongoing',
    stage: 'Pilot',
    featured: true,
    summary: 'One shared map for victims, rescue teams and coordinators during Vietnam’s flood season.',
    question: 'How can one shared map help coordinators dispatch rescue teams faster and with fewer duplicate requests?',
    product: 'AquaGuard',
    partners: ['HCMUT', 'UTS', 'Université Laval'],
    image: '/assets/gallery/epics-first-place.jpg',
  },
  {
    slug: 'hands-free-programming',
    title: 'Hands-free programming with head tracking',
    kind: 'Project',
    area: 'assistive',
    status: 'Ongoing',
    stage: 'Prototype',
    featured: true,
    summary: 'Head gestures from an ordinary webcam as a replacement for the mouse in block-based coding.',
    question: 'Can head gestures from an ordinary webcam replace a mouse well enough to learn block-based coding?',
    product: 'EnableCode',
    partners: ['Fessior DevCamp'],
    image: '/assets/gallery/fessior-devcamp-prometheus.jpg',
  },
  {
    slug: 'ai-interview-practice',
    title: 'AI interview practice for autistic candidates',
    kind: 'Project',
    area: 'hiring',
    status: 'Ongoing',
    stage: 'MVP',
    featured: true,
    summary: 'Generated interview questions from a job description and a candidate profile, practised as often as needed.',
    question: 'Does repeated, low-pressure practice with generated questions build confidence before a real interview?',
    product: 'Includio',
    partners: ['RMIT University'],
    image: '/assets/news/includio-rmit-hackathon.webp',
  },
  {
    slug: 'readable-air-quality',
    title: 'Readable air-quality monitoring',
    kind: 'Project',
    area: 'sensing',
    status: 'Ongoing',
    stage: 'Exploring',
    summary: 'Finding out what residents need to see in air-quality data to change how they act.',
    question: 'What do residents need to see in air-quality data to change how they act?',
    product: 'AirGuard',
    partners: [],
  },
]

/** Shown as a greyed-out sample until the first real publication exists. */
export const EXAMPLE_ENTRY: ResearchEntry = {
  slug: 'example',
  title: 'Title of the paper, report or dataset goes here',
  kind: 'Paper',
  area: 'flood',
  status: 'Published',
  date: '2026-01',
  summary: 'A one or two sentence summary appears here, written for a reader who has not seen the paper.',
  authors: ['First Author', 'Second Author'],
  venue: 'Journal, conference or report series',
}

export const areaOf = (id: string) => AREAS.find((area) => area.id === id)
export const entryBySlug = (slug: string) => ENTRIES.find((entry) => entry.slug === slug)
export const sortByDate = (list: ResearchEntry[]) => [...list].sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''))
export const ongoingEntries = () => ENTRIES.filter((entry) => entry.status === 'Ongoing')
export const publishedEntries = () => sortByDate(ENTRIES.filter((entry) => entry.status === 'Published'))

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

/** '2026-10-15' -> '15 Oct 2026', '2026-10' -> 'Oct 2026', '2026' -> '2026'. */
export function formatDate(date?: string) {
  if (!date) return ''
  const [year, month, day] = date.split('-')
  if (!month) return year
  const name = MONTHS[Number(month) - 1] ?? month
  return day ? `${Number(day)} ${name} ${year}` : `${name} ${year}`
}

/** BibTeX for a published entry, ready to copy. */
export function bibtex(entry: ResearchEntry) {
  const year = entry.date?.slice(0, 4) ?? 'n.d.'
  const first = (entry.authors?.[0] ?? 'odylytics').split(' ').pop()?.toLowerCase().replace(/[^a-z]/g, '') ?? 'odylytics'
  const type = entry.kind === 'Thesis' ? 'phdthesis' : entry.kind === 'Report' ? 'techreport' : entry.kind === 'Paper' ? 'article' : 'misc'
  const lines = [`@${type}{${first}${year},`, `  title = {${entry.title}},`]
  if (entry.authors?.length) lines.push(`  author = {${entry.authors.join(' and ')}},`)
  if (entry.venue) lines.push(`  journal = {${entry.venue}},`)
  lines.push(`  year = {${year}},`, `  url = {https://odylytics.com/#/research/${entry.slug}}`, '}')
  return lines.join('\n')
}
