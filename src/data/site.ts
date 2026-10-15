import type { LegalDoc } from './legal'
import { COOKIES, PRIVACY, TERMS } from './legal'
import { EXTRA_LEGAL } from './legal.extra'
import type { NavItem } from './content'

// ─── Navigation ─────────────────────────────────────────────────────────────

export type NavGroup = { label: string; href?: string; items?: NavItem[] }

export const NAV: NavGroup[] = [
  {
    label: 'Product',
    items: [
      { label: 'Climate-tech', href: '#/product/climate-tech', description: 'AI for flood response and environmental monitoring.' },
      { label: 'Accessibility', href: '#/product/accessibility', description: 'Tools that open education and work to everyone.' },
      { label: 'Incoming', href: '#/product/incoming', description: 'What we are building next.' },
    ],
  },
  {
    label: 'Research',
    items: [
      { label: 'Overview', href: '#/research', description: 'How we work, and the questions we ask.' },
      { label: 'Ongoing', href: '#/research/ongoing', description: 'Active projects and open questions.' },
      { label: 'Publications', href: '#/research/publications', description: 'Papers, reports, datasets and code.' },
    ],
  },
  {
    label: 'Team',
    items: [
      { label: 'Co-founders', href: '#/team/co-founders', description: 'The people who started Odylytics.' },
      { label: 'Partners', href: '#/team/partners', description: 'Universities and companies we build with.' },
      { label: 'Resources', href: '#/team/resources', description: 'Press kit, brand assets and contacts.' },
    ],
  },
  { label: 'Blog', href: '#/blog' },
]

// ─── Home ───────────────────────────────────────────────────────────────────

export const HOME_HERO = {
  eyebrow: 'AI firm',
  title: ['AI that works', 'when it matters'],
  lead: 'Research-grounded products for climate resilience and accessibility.',
  cue: 'Scroll to find out',
}

export const HOME_PILLARS = [
  {
    index: '01',
    label: 'Product',
    title: 'Solutions people use when it matters',
    text: 'Six solutions built on one shared AI core, from flood rescue coordination to inclusive education and hiring.',
    href: '#/product/climate-tech',
    cta: 'Explore products',
  },
  {
    index: '02',
    label: 'Research',
    title: 'Every product starts as a question',
    text: 'We work with university labs and advisors to test ideas with the people affected, before we ship them.',
    href: '#/research',
    cta: 'Read our research',
  },
  {
    index: '03',
    label: 'Impact',
    title: 'Evidence over promises',
    text: 'Four prizes, a growing partner network and communities already using AquaGuard in flood season.',
    href: '#/blog',
    cta: 'Read the latest news',
  },
]

export const HOME_BAND = {
  label: 'Impact',
  title: 'Proof from the field.',
  text: 'Our first platform, AquaGuard, connects flood victims, rescue teams and coordinators in one live view. The numbers come from that work.',
}

export const HOME_CLOSING = {
  title: 'Ready to build what matters?',
  text: 'Partnerships, pilots, research collaborations or press: we would love to hear from you.',
}

export const HOME_WORK = {
  title: 'Work with Odylytics',
  text: 'Odylytics is a student-founded AI firm based in Ho Chi Minh City. Our team spans engineering, product design and marketing, and we collaborate with universities in Vietnam, Australia, the United States, France and Canada.',
  image: '/assets/gallery/team-working.jpg',
  cta: 'Meet the team',
}

// ─── Product ────────────────────────────────────────────────────────────────

export type ProductGroupId = 'climate-tech' | 'accessibility' | 'incoming'

export type ProductGroup = {
  id: ProductGroupId
  label: string
  title: string
  lead: string
  /** Solution ids from content.ts SOLUTIONS shown on the page. */
  solutions: string[]
  /** Solution ids whose card shows a 'status' other than live; the key is the solution id. */
  status: Record<string, string>
  problem: { label: string; title: string; text: string }[]
}

export const PRODUCT_GROUPS: Record<ProductGroupId, ProductGroup> = {
  'climate-tech': {
    id: 'climate-tech',
    label: 'Product · Climate-tech',
    title: 'AI for flood response and the air we breathe.',
    lead: 'Floods and air pollution hit hardest where information is slow. We build tools that turn community reports and sensor data into decisions people can act on.',
    solutions: ['aquaguard', 'airguard'],
    status: { aquaguard: 'Pilot', airguard: 'Incoming' },
    problem: [
      { label: 'The problem', title: 'Rescue starts with knowing where.', text: 'During floods, requests for help arrive through calls and social posts. Coordinators lack a single, trusted picture of who needs what, and where.' },
      { label: 'Our approach', title: 'One live map for everyone involved.', text: 'Victims send SOS requests, rescue teams see them on a live flood map and coordinators dispatch from the same view. It runs on web and mobile.' },
      { label: 'Evidence', title: 'Tested in Vietnam’s flood season.', text: 'AquaGuard has won 1st prize at the OISP Presentation Contest and the EPICS 8th Competition, and 2nd prize at Bach Khoa Innovation.' },
    ],
  },
  accessibility: {
    id: 'accessibility',
    label: 'Product · Accessibility',
    title: 'Tools that open education and work to everyone.',
    lead: 'Technology should adapt to people, not the other way round. We build assistive and inclusive tools with the communities who will use them.',
    solutions: ['enablecode', 'includio', 'hearwork'],
    status: { enablecode: 'Prototype', includio: 'MVP', hearwork: 'Incoming' },
    problem: [
      { label: 'The problem', title: 'Standard tools assume standard bodies.', text: 'Keyboards, mice and interview rooms shut out people with upper-limb disabilities or autism before their skills are ever seen.' },
      { label: 'Our approach', title: 'Adapt the interface to the person.', text: 'EnableCode turns head movement into cursor control for drag-and-drop coding. Includio lets candidates rehearse interviews with AI as often as they like.' },
      { label: 'Evidence', title: 'Recognised by judges and educators.', text: 'EnableCode won 1st prize at Fessior DevCamp 2026 Prometheus, and Includio reached a working MVP at the RMIT ADC Hackathon 2026.' },
    ],
  },
  incoming: {
    id: 'incoming',
    label: 'Product · Incoming',
    title: 'What we are building next.',
    lead: 'Three more solutions are in early development. We share them as they mature, and we only announce what we can stand behind.',
    solutions: ['airguard', 'roomie', 'hearwork'],
    status: { airguard: 'Exploring', roomie: 'Exploring', hearwork: 'Exploring' },
    problem: [],
  },
}

export const INCOMING_STAGES = [
  { label: 'Exploring', text: 'We talk to the people affected and map the problem. Nothing is built yet.' },
  { label: 'Prototyping', text: 'A first working version is tested with a small group, often at a hackathon or lab.' },
  { label: 'Piloting', text: 'A partner organisation uses the product in a real setting and we measure what happens.' },
]

// ─── Research ───────────────────────────────────────────────────────────────

export const RESEARCH_INTRO = {
  label: 'Research',
  title: 'Research at Odylytics.',
  lead: 'Papers, datasets and open questions on AI for climate resilience and accessibility, shared as we go.',
}

// TODO(content): confirm principles and areas with the founders and advisors.
export const RESEARCH_PRINCIPLES = [
  { index: '01', title: 'Ask precise questions', text: 'Every piece of work starts with a question we can state in one sentence and a way to know when we have answered it.' },
  { index: '02', title: 'Test with those affected', text: 'The people who live with a problem help design and judge the experiments, not just the final result.' },
  { index: '03', title: 'Keep humans in the loop', text: 'Our systems support decisions. People stay in charge, and we say clearly what the AI cannot do.' },
  { index: '04', title: 'Share what we learn', text: 'We publish methods and results, and data and code when partners allow it, and credit everyone who contributed.' },
]


// ─── Team ───────────────────────────────────────────────────────────────────

export const PARTNER_NOTES: Record<string, string> = {
  'University of Technology Sydney': 'Two advisors from the School of Computer Science and the AI Intelligence Drone Lab guide our strategy and research.',
  'Ho Chi Minh City University of Technology': 'Our home university: advisors from the Faculty of Environment and the Faculty of Computer Science and Engineering, and host of Bach Khoa Innovation.',
  'Arizona State University': 'Co-organiser of the EPICS competition in Vietnam, where AquaGuard won first prize.',
  'RMIT University': 'Host of the ADC Hackathon where Includio became a working MVP.',
  'Sorbonne Université': 'Academic partner.',
  'Université Laval': 'Community advisor and supporter of AquaGuard from Québec.',
  Dow: 'Co-organiser of the EPICS competition in Vietnam.',
  'Leave a Nest': 'Organiser of the TECH PLANTER Vietnam 2026 Demo Day.',
  TechPlanter: 'Deep-tech accelerator programme where we presented AquaGuard.',
}

export const TEAM_PAGE = {
  label: 'Team · Co-founders',
  title: 'Five students. One shared core.',
  lead: 'Odylytics was started by five co-founders across product, engineering, design and marketing, with advisors from four universities.',
}

export const PARTNERS_PAGE = {
  label: 'Team · Partners',
  title: 'Built with universities.',
  lead: 'Our partners give us advisors, testbeds, stages and funding. In return we bring working products and student energy.',
}

export const RESOURCES_PAGE = {
  label: 'Team · Resources',
  title: 'Press kit and brand assets.',
  lead: 'Everything journalists, partners and organisers need to write about Odylytics accurately.',
  boilerplate:
    'Odylytics is an AI firm that designs, builds and ships digital solutions. Founded by five students in Ho Chi Minh City, it builds research-grounded products for climate resilience and accessibility, including AquaGuard for flood rescue coordination, EnableCode for hands-free coding education and Includio for inclusive hiring.',
  assets: [
    { name: 'Wordmark, black', file: '/assets/brand/odylytics-wordmark.svg', note: 'For light backgrounds' },
    { name: 'Wordmark, white', file: '/assets/brand/odylytics-wordmark-dark.svg', note: 'For dark backgrounds' },
    { name: 'Symbol, black', file: '/assets/brand/odylytics-symbol.svg', note: 'For light backgrounds' },
    { name: 'Symbol, white', file: '/assets/brand/odylytics-symbol-dark.svg', note: 'For dark backgrounds' },
  ],
  coverage: [
    { source: 'Thanh Niên', title: 'Students build a flood-warning and rescue-support system on a mobile platform', href: 'https://www.vietnam.vn/en/sinh-vien-lam-he-thong-canh-bao-lu-ho-tro-cuu-ho-tren-nen-tang-di-dong' },
  ],
  facts: [
    { k: 'Founded', v: 'Updating soon' },
    { k: 'Headquarters', v: 'Ho Chi Minh City, Vietnam' },
    { k: 'Co-founders', v: '5' },
    { k: 'Products', v: '6 (3 live or in pilot)' },
    { k: 'Press contact', v: 'odylytics@gmail.com' },
  ],
}

// ─── Contact ────────────────────────────────────────────────────────────────

export const CONTACT_PURPOSES = ['Partnership', 'Pilot or product enquiry', 'Research collaboration', 'Press', 'Careers', 'Other']

// ─── Legal & trust ──────────────────────────────────────────────────────────

export type LegalGroup = 'Core legal' | 'Your data' | 'AI and security' | 'Access and company'

export type LegalEntry = { slug: string; title: string; summary: string; group: LegalGroup; doc: LegalDoc }

const entry = (slug: string, title: string, summary: string, group: LegalGroup, doc: LegalDoc): LegalEntry => ({ slug, title, summary, group, doc })

export const LEGAL_ENTRIES: LegalEntry[] = [
  entry('terms', 'Terms of Use', 'The rules for using this website and our content.', 'Core legal', TERMS),
  entry('privacy', 'Privacy Policy', 'What personal data we collect, why, and your rights.', 'Core legal', PRIVACY),
  entry('cookies', 'Cookie Policy', 'What this site stores on your device and how to control it.', 'Core legal', COOKIES),
  entry('acceptable-use', 'Acceptable Use Policy', 'What you may and may not do on our site and products.', 'Core legal', EXTRA_LEGAL['acceptable-use']),
  entry('data-requests', 'Data requests', 'Access, correct or delete your data, and how long it takes.', 'Your data', EXTRA_LEGAL['data-requests']),
  entry('retention', 'Data retention', 'How long we keep each kind of data.', 'Your data', EXTRA_LEGAL['retention']),
  entry('subprocessors', 'Sub-processors', 'The services that process data on our behalf.', 'Your data', EXTRA_LEGAL['subprocessors']),
  entry('dpa', 'Data Processing Addendum', 'Terms for partners whose data we process in pilots.', 'Your data', EXTRA_LEGAL['dpa']),
  entry('responsible-ai', 'Responsible AI', 'The principles behind how we build and use AI.', 'AI and security', EXTRA_LEGAL['responsible-ai']),
  entry('ai-transparency', 'AI transparency', 'Where AI is used in each product, and its limits.', 'AI and security', EXTRA_LEGAL['ai-transparency']),
  entry('security', 'Security', 'How we protect data and respond to incidents.', 'AI and security', EXTRA_LEGAL['security']),
  entry('disclosure', 'Responsible disclosure', 'How to report a vulnerability to us.', 'AI and security', EXTRA_LEGAL['disclosure']),
  entry('accessibility', 'Accessibility statement', 'Our accessibility goals and known gaps.', 'Access and company', EXTRA_LEGAL['accessibility']),
  entry('notice', 'Legal notice', 'Who operates this site and how to reach us.', 'Access and company', EXTRA_LEGAL['notice']),
]

export const LEGAL_GROUPS: LegalGroup[] = ['Core legal', 'Your data', 'AI and security', 'Access and company']

// ─── Footer ─────────────────────────────────────────────────────────────────

const legalLink = (slug: string): NavItem => ({ label: LEGAL_ENTRIES.find((item) => item.slug === slug)?.title ?? slug, href: `#/legal/${slug}` })

export const FOOTER_COLUMNS: { heading: string; links: NavItem[] }[] = [
  {
    heading: 'Product',
    links: [
      { label: 'Climate-tech', href: '#/product/climate-tech' },
      { label: 'Accessibility', href: '#/product/accessibility' },
      { label: 'Incoming', href: '#/product/incoming' },
    ],
  },
  {
    heading: 'Research',
    links: [
      { label: 'Overview', href: '#/research' },
      { label: 'Ongoing', href: '#/research/ongoing' },
      { label: 'Publications', href: '#/research/publications' },
    ],
  },
  {
    heading: 'Team',
    links: [
      { label: 'Co-founders', href: '#/team/co-founders' },
      { label: 'Partners', href: '#/team/partners' },
      { label: 'Resources', href: '#/team/resources' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Blog', href: '#/blog' },
      { label: 'Get in touch', href: '#/contact' },
      { label: 'Press kit', href: '#/team/resources' },
      { label: 'Member login', href: '#/login' },
    ],
  },
  {
    heading: 'Legal',
    links: [legalLink('terms'), legalLink('privacy'), legalLink('cookies'), legalLink('acceptable-use'), legalLink('notice')],
  },
  {
    heading: 'Your data',
    links: [legalLink('data-requests'), legalLink('retention'), legalLink('subprocessors'), legalLink('dpa')],
  },
  {
    heading: 'AI and security',
    links: [legalLink('responsible-ai'), legalLink('ai-transparency'), legalLink('security'), legalLink('disclosure'), legalLink('accessibility')],
  },
]

export const FOOTER_STATEMENT =
  'AquaGuard, EnableCode, AirGuard, Includio, RooMie and HearWork are products of Odylytics. Awards and press coverage are credited to their organisers and publishers. Some products are in pilot or prototype stage and features may change. AquaGuard supports decisions and does not replace official emergency services or warnings.'
