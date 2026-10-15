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

export type ResearchArea = { id: string; label: string; short: string; text: string }

export const AREAS: ResearchArea[] = [
  { id: 'flood', label: 'Disaster and climate intelligence', short: 'Climate intelligence', text: 'Live maps, sensor data and community reports that support decisions during floods and other hazards.' },
  { id: 'assistive', label: 'Assistive interaction', short: 'Assistive interaction', text: 'Interfaces that adapt to the body: head tracking, gestures and voice instead of keyboard and mouse.' },
  { id: 'hiring', label: 'Inclusive hiring and learning', short: 'Inclusive access', text: 'AI that widens access to work and education for people who are too often screened out.' },
  { id: 'sensing', label: 'Environmental sensing', short: 'Environmental sensing', text: 'Turning air-quality and environmental data into signals that people can act on.' },
  { id: 'localization', label: 'Visual localization and robotics', short: 'Visual localization', text: 'Geometric and semantic representations for navigation in environments without reliable GNSS.' },
  { id: 'retrieval', label: 'Information retrieval and language models', short: 'Retrieval and language models', text: 'Retrieving reliable evidence and grounding language-model answers in source documents.' },
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

export const ENTRIES: ResearchEntry[] = [
  {
    slug: 'gnss-denied-uav-localization',
    title: 'GNSS-Denied UAV Localization',
    kind: 'Project',
    area: 'localization',
    status: 'Ongoing',
    stage: 'Exploring',
    summary: 'Investigating geometric and semantic matching between UAV imagery and reference maps to localize aerial vehicles in forest environments without GNSS.',
    question: 'How can canopy geometry provide stable visual landmarks for UAV localization when GNSS is unavailable?',
    authors: ['Tran Tuan Nghia'],
    sections: [
      {
        heading: 'Overview',
        body: ['Ongoing research by Tran Tuan Nghia as a Research Assistant at the Institute for Intelligent Systems (IVS), focusing on geometric computer vision and visual localization in forest environments.'],
      },
      {
        heading: 'Method',
        body: ['The experimental pipeline segments canopy regions, applies convex preprocessing, constructs a generalized Voronoi representation, extracts candidates, and compares radial-angular descriptors for matching and localization.', 'Current experiments examine LAB + Crowns segmentation, convex hull preprocessing, connected-component and medoid filtering, and the stability of candidate landmarks.'],
      },
      {
        heading: 'Findings',
        body: ['Evaluation is ongoing, with current work focused on segmentation choices, preprocessing thresholds, and candidate stability. Localization performance has not yet been established.'],
      },
    ],
  },
  {
    slug: 'vietnamese-legal-rag',
    title: 'Vietnamese Legal RAG',
    kind: 'Project',
    area: 'retrieval',
    status: 'Ongoing',
    stage: 'Exploring',
    summary: 'Researching retrieval-augmented generation for questions about Vietnamese law and administrative procedures, with an emphasis on evidence retrieval and grounded answers.',
    question: 'How can a legal question-answering system retrieve authoritative evidence and generate answers grounded in Vietnamese source documents?',
    authors: ['Tran Tuan Nghia'],
    sections: [
      {
        heading: 'Overview',
        body: ['This research explores a Vietnamese legal question-answering system that connects information retrieval with language-model generation. The focus is on finding relevant evidence, evaluating retrieval quality, and supporting answers with source material.'],
      },
      {
        heading: 'Method',
        body: ['Methods under consideration include BM25 and SimCSE retrieval, hybrid search with Reciprocal Rank Fusion, re-ranking, authority scoring, and graph-based retrieval. These approaches form the research direction rather than a completed, validated system.'],
      },
      {
        heading: 'Findings',
        body: ['The work is in the exploration stage. Comparative retrieval results and answer-quality measurements are not yet available.'],
      },
    ],
  },
]

/** Shown as a greyed-out sample until the first real publication exists. */
export const EXAMPLE_ONGOING: ResearchEntry = {
  slug: 'example-ongoing',
  title: 'An open question we are working on',
  kind: 'Project',
  area: 'sensing',
  status: 'Ongoing',
  stage: 'Prototype',
  summary: 'What we are trying to find out, in a sentence or two, and why it matters.',
}

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
