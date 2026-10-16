export type NavItem = { label: string; href: string; description?: string }

export type Solution = {
  /** True while real copy is missing: the card shows an 'Updating soon' frame. */
  soon?: boolean
  id: string
  name: string
  logo: string | null
  oneLiner: string
  /** 2–3 sentence project summary shown on the solution card. */
  description: string
  category: string
  flagship: boolean
  /** Showcase cover photo; the logo on a plain surface is shown when missing. */
  image?: string
}

export type RecognitionType = 'AWARD' | 'CERTIFICATION' | 'ACCELERATOR'

export type Recognition = {
  type: RecognitionType
  /** Competition placing shown in the medal badge when there is no issuer logo, e.g. '1st'. */
  place?: string
  title: string
  issuer: string
  year?: string
  context?: string
  issuerLogo: string | null
  /** Photo of the award moment; a framed placeholder is shown until set. */
  image?: string | null
  /** Link to the press article or announcement. */
  href?: string | null
}

export type RecognitionGroup = {
  solutionId: string
  solutionName: string
  items: Recognition[]
}

export type Partner = {
  name: string
  type: string
  logo: string | null
}

export type Testimonial = {
  id: string
  quote: string
  name: string
  role: string
  avatar: string | null
  solution: string
}

export type Advisor = {
  name: string
  /** Advisory role, e.g. 'Strategic Advisor'. */
  role: string
  /** Position and institution. */
  affiliation: string
}

export type TeamMember = {
  name: string
  role: string
  bio: string
  photo: string | null
  linkedin: string | null
  /** URL slug of the member's own profile page: #/team/<slug>. */
  slug: string
  /** One-word title shown under the portrait, e.g. 'CEO'. */
  shortRole: string
  /** Concrete day-to-day responsibilities. */
  responsibilities: string[]
  /** First-person or third-person paragraph for the profile page; the page shows 'Updating soon' while missing. */
  about?: string[]
  /** A line set apart under the about text. */
  quote?: string
  /** Education and past roles, newest first. */
  background?: { title: string; org: string; note?: string }[]
  /** Achievements worth listing on the profile. */
  highlights?: string[]
  /** Extra links such as portfolio, GitHub or email (LinkedIn comes from `linkedin`). */
  links?: { label: string; href: string }[]
}

export type PostCategory = 'Awards' | 'Press' | 'Milestones' | 'Product'

export type Post = {
  id: string
  title: string
  excerpt: string
  category: PostCategory
  /** Display date, e.g. 'March 2026'. Omitted until confirmed. */
  date?: string
  /** Cover image; a branded placeholder is shown until set. */
  image?: string | null
  /** External article / announcement link. */
  href?: string | null
  source?: string
  featured?: boolean
}

export const BRAND = {
  wordmark: '/assets/brand/odylytics-wordmark.svg',
  wordmarkDark: '/assets/brand/odylytics-wordmark-dark.svg',
  symbol: '/assets/brand/odylytics-symbol.svg',
  symbolDark: '/assets/brand/odylytics-symbol-dark.svg',
}

// ─── 2. Core Digital Solutions ──────────────────────────────────────────────

export const SOLUTIONS: Solution[] = [
  {
    id: 'aquaguard',
    name: 'AquaGuard',
    logo: '/assets/solutions/aquaguard.png',
    oneLiner: 'Real-time flood rescue coordination for victims, rescue teams and coordinators.',
    description:
      'Victims send SOS requests, rescue teams see them on a live flood map, and coordinators dispatch help from one shared view. Built for web and mobile and tested in Vietnam’s flood season.',
    category: 'Disaster response',
    flagship: true,
    image: '/assets/gallery/epics-first-place.jpg',
  },
  {
    id: 'airguard',
    name: 'AirGuard',
    logo: '/assets/solutions/airguard.png',
    oneLiner: 'Accessible air-quality monitoring for healthier cities.',
    soon: true,
    description: '',
    category: 'Environment',
    flagship: false,
  },
  {
    id: 'enablecode',
    name: 'EnableCode',
    logo: '/assets/solutions/enablecode.png',
    oneLiner: 'Hands-free, drag-and-drop coding for people with upper-limb disabilities.',
    description:
      'A webcam tracks the learner’s head, so gestures move the cursor and click blocks. Programs are assembled by drag and drop, which makes coding possible without a keyboard or mouse.',
    category: 'Inclusive education',
    flagship: true,
    image: '/assets/gallery/fessior-devcamp-prometheus.jpg',
  },
  {
    id: 'roomie',
    name: 'RooMie',
    logo: '/assets/solutions/roomie.png',
    oneLiner: '',
    soon: true,
    description: '',
    category: '',
    flagship: false,
  },
  {
    id: 'includio',
    name: 'Includio',
    logo: '/assets/solutions/includio.png',
    oneLiner: 'AI interview practice for autistic candidates.',
    description:
      'Includio simulates job interviews with AI. It writes questions from the job description and the candidate’s profile, so candidates can practise as often as they like without a real HR interviewer.',
    category: 'Inclusive hiring',
    flagship: false,
    image: '/assets/news/includio-rmit-hackathon.webp',
  },
  {
    id: 'hearwork',
    name: 'HearWork',
    logo: '/assets/solutions/hearwork.png',
    oneLiner: '',
    soon: true,
    description: '',
    category: '',
    flagship: false,
  },
]

// ─── 4. Awards & Certifications ─────────────────────────────────────────────

// TODO(content): press links (`href`) and issuer logos.
export const RECOGNITION: RecognitionGroup[] = [
  {
    solutionId: 'aquaguard',
    solutionName: 'AquaGuard',
    items: [
      {
        type: 'AWARD', place: '1st', title: '1st Prize', issuer: 'OISP Presentation Contest', year: '2025',
        issuerLogo: null, image: '/assets/gallery/oisp-presentation-contest.jpg', href: null,
      },
      {
        type: 'AWARD', place: '1st', title: '1st Prize', issuer: 'EPICS 8th Competition (ASU & Dow Vietnam)', year: '2026',
        issuerLogo: null, image: '/assets/gallery/epics-first-place.jpg', href: null,
      },
      {
        type: 'AWARD', place: '2nd', title: '2nd Prize', issuer: 'Bach Khoa Innovation', year: '2026',
        issuerLogo: null, image: '/assets/gallery/bach-khoa-innovation.jpg', href: null,
      },
    ],
  },
  {
    solutionId: 'enablecode',
    solutionName: 'EnableCode',
    items: [
      {
        type: 'AWARD', place: '1st', title: '1st Prize', issuer: 'Fessior DevCamp 2026 Prometheus', year: '2026',
        issuerLogo: null, image: '/assets/gallery/fessior-devcamp-prometheus.jpg', href: null,
      },
    ],
  },
]

// ─── 5. Partnerships ────────────────────────────────────────────────────────

export const PARTNERS: Partner[] = [
  { name: 'University of Technology Sydney', type: 'Academic', logo: '/assets/partners/uts.png' },
  { name: 'Ho Chi Minh City University of Technology', type: 'Academic', logo: '/assets/partners/hcmut.png' },
  { name: 'Arizona State University', type: 'Academic', logo: '/assets/partners/asu.png' },
  { name: 'RMIT University', type: 'Academic', logo: '/assets/partners/rmit.png' },
  { name: 'Sorbonne Université', type: 'Academic', logo: '/assets/partners/sorbonne.png' },
  { name: 'Université Laval', type: 'Academic', logo: '/assets/partners/laval.png' },
  { name: 'Dow', type: 'Corporate', logo: '/assets/partners/dow.png' },
  { name: 'Leave a Nest', type: 'Corporate', logo: '/assets/partners/leave-a-nest.png' },
  { name: 'TechPlanter', type: 'Accelerator', logo: '/assets/partners/techplanter.png' },
]

export type ImpactStat = { value: number; suffix?: string; label: string }

// TODO(content): confirm the figures and how each one is counted before shipping.
export const IMPACT: ImpactStat[] = [
  { value: 1000000, suffix: '+', label: 'Social media reached' },
  { value: 600, suffix: '+', label: 'Active users across platforms' },
  { value: 5, suffix: '+', label: 'Organizations endorsed' },
]

export const IMPACT_NOTE = 'Results from AquaGuard, our flood rescue platform.'

// ─── 6. Testimonials ────────────────────────────────────────────────────────

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'ms-ni',
    quote:
      'Having experienced severe flooding in Huế, I know how difficult it is to find reliable information and timely help. AquaGuard can help people report their location, request assistance, and stay informed.',
    name: 'Ms. Ni',
    role: 'Flood survivor, Huế, Vietnam',
    avatar: null,
    solution: 'AquaGuard',
  },
  {
    id: 'vo-thanh-hang',
    quote:
      'What makes AquaGuard unique is its community-centered approach. Citizens can report incidents, share real-time information, and connect with rescuers, building more resilient communities.',
    name: 'Dr. Vo Thanh Hang',
    role: 'Lecturer, Faculty of Environment, HCMUT',
    avatar: null,
    solution: 'AquaGuard',
  },
  {
    id: 'dinh-nguyen',
    quote: 'A highly valuable and practical solution that can significantly enhance flood rescue and emergency response, with strong potential well beyond Vietnam.',
    name: 'Prof. Dinh N. Nguyen',
    role: 'Professor Emeritus, Laval University, Canada',
    avatar: null,
    solution: 'AquaGuard',
  },
  {
    id: 'anna-b',
    quote:
      'By bringing citizens, rescuers, and local authorities together on one platform, AquaGuard could significantly strengthen flood emergency coordination in Vietnam.',
    name: 'Anna B.',
    role: 'Water rescue volunteer, WOPR, Warsaw',
    avatar: null,
    solution: 'AquaGuard',
  },
  {
    id: 'thich-chon-nguyen',
    quote: 'A practical solution that can support humanitarian relief efforts and help communities respond more effectively during flood emergencies.',
    name: 'Most Ven. Thich Chon Nguyen',
    role: 'Charity Committee, Van Hanh Zen Monastery',
    avatar: null,
    solution: 'AquaGuard',
  },
]

// ─── 7. Core Team ───────────────────────────────────────────────────────────

export const ADVISORS: Advisor[] = [
  { name: 'Dr. Tobias Cibis', role: 'Strategic Advisor', affiliation: 'Lecturer, School of Computer Science, UTS' },
  { name: 'Prof. Nguyen Ngoc Dinh', role: 'Community Advisor', affiliation: 'Director, Đất Lành Quebec Canada, Laval University' },
  { name: 'Assoc. Prof. Nabin Sharma', role: 'Research Advisor', affiliation: 'Director, AI Intelligence Drone Lab, UTS' },
  { name: 'Dr. Vo Thanh Hang', role: 'Product Advisor', affiliation: 'Faculty of Environment and Natural Resources, HCMUT' },
  { name: 'MSc. Bui Xuan Giang', role: 'System Advisor', affiliation: 'Faculty of Computer Science and Engineering, HCMUT' },
]

// TODO(content): add members here (same shape as TEAM) when they are ready; an empty group shows an 'Updating soon' frame.
export const MEMBERS: TeamMember[] = []

// TODO(content): confirm roles, bios and responsibilities.
export const TEAM: TeamMember[] = [
  {
    name: 'Nguyễn Minh Quân',
    slug: 'quan-ceo',
    role: 'Chief Executive Officer',
    shortRole: 'CEO',
    bio: 'Leads Odylytics’ vision and strategy, building partnerships that bring our solutions to the communities that need them.',
    photo: '/assets/team/quan-a.png',
    linkedin: 'https://www.linkedin.com/in/ngminhquan/',
    responsibilities: [
      'Sets company vision, strategy and roadmap',
      'Leads partnerships with universities, governments and sponsors',
      'Represents Odylytics at competitions, events and in the press',
    ],
    about: [
      'Second-year Artificial Intelligence student at UTS and HCMUT in Ho Chi Minh City, and Chief Executive Officer of Odylytics. He leads the development of AquaGuard, AirGuard, EnableCode and Includio, using technology to support emergency management and rescue coordination.',
      'Beyond technology he is an event coordinator, MC and student leader who believes meaningful impact starts with taking the first step.',
    ],
    quote: 'The secret of getting ahead is getting started.',
    background: [
      { title: 'Bachelor of Artificial Intelligence', org: 'University of Technology Sydney (UTS) and Ho Chi Minh City University of Technology (HCMUT)', note: 'Second year' },
      { title: 'Chief Executive Officer', org: 'Odylytics', note: 'Present' },
      { title: 'Venture Analyst', org: 'B71 (NUSX)', note: '2026' },
      { title: 'Research Assistant', org: 'URA Research Group', note: '2026' },
      { title: 'Vice President', org: 'HCMUT International Student Connection', note: '2026' },
      { title: 'Board of Directors', org: 'HCMUT Green Innovation', note: '2025' },
      { title: 'President', org: 'LSTS Student Council', note: '2024 – 2025' },
      { title: 'ASEAN Youth Ambassador and MC', org: 'Student leadership and events', note: '2024 – 2025' },
    ],
    links: [
      { label: 'Portfolio', href: 'https://quannguyen.odylytics.com/' },
      { label: 'GitHub', href: 'https://github.com/minhquan-maker' },
      { label: 'Facebook', href: 'https://www.facebook.com/mquan2512/' },
      { label: 'Email (HCMUT)', href: 'mailto:quan.nguyenalex2512@hcmut.edu.vn' },
      { label: 'Email (UTS)', href: 'mailto:MinhQuan.Nguyen-2@student.uts.edu.au' },
    ],
  },
  {
    name: 'Tran Tuan Nghia',
    slug: 'nghia-cto',
    role: 'Chief Technology Officer',
    shortRole: 'CTO',
    bio: 'Leads our technology and shared AI core, designing the models that turn sensor and community data into timely predictions.',
    photo: '/assets/team/nghia.png',
    linkedin: 'https://www.linkedin.com/in/tuannghia2457/',
    responsibilities: [
      'Leads the technology strategy, system architecture, and engineering development at Odylytics.',
      'Oversees the design and implementation of AI-powered products, integrating machine learning with scalable software systems.',
      'Conducts research in Computer Vision, Robotics, and AI-based localization systems.',
      'Develops and evaluates algorithms for autonomous navigation, visual perception, and GNSS-denied UAV localization.',
      'Collaborates with researchers and multidisciplinary teams to translate experimental ideas into real-world solutions.',
    ],
    about: [
      'Second-year Artificial Intelligence student at the University of Technology Sydney (UTS) and Ho Chi Minh City University of Technology (HCMUT), Chief Technology Officer (CTO) and Co-Founder of Odylytics, and Computer Vision Intern at Individual Systems.',
      'He specializes in Computer Vision, Robotics, and Artificial Intelligence, with a focus on developing intelligent systems that solve real-world problems.',
      'Beyond research, he is a software developer, technology entrepreneur, and hackathon enthusiast who believes that meaningful innovation emerges when rigorous research meets practical implementation.',
    ],
    quote: 'Turning research into technology that makes a difference.',
    background: [
      {
        title: 'Bachelor of Artificial Intelligence',
        org: 'University of Technology Sydney (UTS) and Ho Chi Minh City University of Technology (HCMUT)',
        note: 'Second year · GPA: 6.9/7.0',
      },
      {
        title: 'Chief Technology Officer',
        org: 'Odylytics',
        note: '2026 – Present',
      },
      {
        title: 'Computer Vision Intern',
        org: 'Individual Systems',
        note: '2026 – Present',
      },
      {
        title: 'Class President',
        org: '',
        note: '2025 – Present',
      },
      {
        title: 'Web Developer',
        org: 'Best Start English Center',
        note: '2025 – 2026',
      },
      {
        title: 'Teaching Assistant',
        org: 'Best Start English Center',
        note: '2025 – 2026',
      },
      {
        title: 'Software Development Intern',
        org: 'SDE Technology',
        note: '2024',
      },
      {
        title: 'Advanced Physics Student',
        org: 'VNU-HCM High School for the Gifted',
        note: '2022 – 2025',
      },
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/tuannghia2457' },
      { label: 'Facebook', href: 'https://www.facebook.com/tuannghia2457/' },
      { label: 'Email (HCMUT)', href: 'mailto:nghia.tran2457@hcmut.edu.vn' },
      { label: 'Email (UTS)', href: 'mailto:tuannghia.tran@student.uts.edu.au' },
    ],
    highlights: [
      "Dean's List — UTS (2026): Recognized for outstanding academic performance.",
      'Research Presenter — CTMIA 2026: Presented research on geometry-informed pothole surface reconstruction using depth functions and monotonic neural networks.',
    ],
  },
  {
    name: 'Nguyễn Trường Sơn',
    slug: 'son-cpo',
    role: 'Chief Product Officer',
    shortRole: 'CPO',
    bio: 'Designs accessible, human-centred experiences so every solution stays simple to use, even in a crisis.',
    photo: '/assets/team/son.png',
    linkedin: 'https://www.linkedin.com/in/shynnguyen/',
    responsibilities: [
      'Owns the product roadmap across every Odylytics solution',
      'Runs user research with rescue teams and people with disabilities',
      'Leads interface design and the Odylytics design system',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/shynnguyen1004' },
      { label: 'Facebook', href: 'https://www.facebook.com/shyn.nguyen.07' },
    ],
  },
  {
    name: 'Nguyễn Minh Quân',
    slug: 'quan-marketing',
    role: 'Head of Marketing',
    shortRole: 'Marketing',
    bio: 'Shapes how Odylytics reaches governments, partners and communities, and tells the stories behind our impact.',
    photo: '/assets/team/quan-b.png',
    linkedin: 'https://www.linkedin.com/in/nguy%E1%BB%85n-qu%C3%A2n-25a33540a/',
    responsibilities: [
      'Owns brand, website and social channels',
      'Pitches stories to press and manages the news page',
      'Prepares award entries and partner decks',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/Qu4n66' },
      { label: 'Facebook', href: 'https://www.facebook.com/Quan.nguyen.06' },
    ],
  },
  {
    name: 'Trương Nguyễn Bảo Khang',
    slug: 'khang-engineer',
    role: 'Software and DevOps Engineer',
    shortRole: 'Engineer',
    bio: 'Builds backend systems, researches algorithms and manages deployment for AquaGuard.',
    photo: '/assets/team/khang.png',
    linkedin: 'https://www.linkedin.com/in/kevintruong0511/',
    responsibilities: [
      'Builds backend systems for AquaGuard, the web and iOS flood platform',
      'Researches the algorithms behind flood alerts and rescue dispatch',
      'Manages deployment and infrastructure',
    ],
    about: [
      'Second-year Bachelor of Artificial Intelligence student at UTS and HCMUT, and Software and DevOps Engineer at Odylytics. He works on AquaGuard, a web and iOS platform that issues flood alerts, lets residents send SOS requests with their live location and coordinates the nearest rescue teams in real time. He loves exploring new technologies and applying AI to make real work more efficient and impactful.',
    ],
    background: [
      { title: 'Bachelor of Artificial Intelligence', org: 'University of Technology Sydney (UTS) and Ho Chi Minh City University of Technology (HCMUT)', note: 'Second year' },
      { title: 'Software and DevOps Engineer', org: 'Odylytics' },
    ],
    highlights: ['1st place, OISP Presentation Contest (with the AquaGuard team)', '1st place, EPICS 8th Competition (with the AquaGuard team)'],
    links: [
      { label: 'Portfolio', href: 'https://portfolio-khang.vercel.app' },
      { label: 'GitHub', href: 'https://github.com/kevintruong0511' },
      { label: 'Facebook', href: 'https://www.facebook.com/khangbido0511' },
      { label: 'Email (HCMUT)', href: 'mailto:khang.truong05112007@hcmut.edu.vn' },
      { label: 'Email (UTS)', href: 'mailto:NguyenBaoKhang.Truong@student.uts.edu.au' },
    ],
  },
]

// ─── 8. Contact + Footer ────────────────────────────────────────────────────

export const CONTACT = {
  eyebrow: 'Contact',
  lead: "Let's build what matters.",
  main: 'Together.',
  subcopy: "Partnerships, pilots or press — we'd love to hear from you.",
  // TODO(content): add the office address and phone number.
  address: 'Updating soon',
  phone: '',
  email: 'odylytics@gmail.com',
}

// TODO(content): add Facebook / YouTube when the pages exist.
export const SOCIALS: NavItem[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/odylytics' },
]

// ─── 9. News / Blog ─────────────────────────────────────────────────────────

export const POST_CATEGORIES: ('All' | PostCategory)[] = ['All', 'Awards', 'Press', 'Milestones', 'Product']

// TODO(content): drafts based on known wins. Add dates, cover photos and article links (`href`), and correct any detail.
export const POSTS: Post[] = [
  {
    id: 'quantum-scholarship',
    title: 'Our founder receives the Quantum scholarship',
    excerpt: 'The scholarship backs the next stage of Odylytics, from product research to bringing our solutions to more communities.',
    category: 'Milestones',
    featured: true,
    image: '/assets/news/quantum-scholarship.webp',
  },
  {
    id: 'thanh-nien-feature',
    title: 'Odylytics featured in Thanh Niên newspaper',
    excerpt: 'Vietnam’s national daily tells the story of a student team building AI for floods and accessibility.',
    category: 'Press',
    source: 'Thanh Niên',
    image: '/assets/news/mentor-session-2.webp',
    href: 'https://www.vietnam.vn/en/sinh-vien-lam-he-thong-canh-bao-lu-ho-tro-cuu-ho-tren-nen-tang-di-dong',
  },
  {
    id: 'aquaguard-oisp-first-prize',
    title: 'AquaGuard wins 1st prize at the OISP Presentation Contest',
    excerpt: 'Our flood rescue coordination platform took first place in the 2025 presentation round.',
    category: 'Awards',
    date: '2025',
    image: '/assets/gallery/oisp-presentation-contest.jpg',
  },
  {
    id: 'includio-rmit-adc-hackathon',
    title: 'From problem to MVP: Includio at RMIT ADC Hackathon',
    excerpt: 'Our team built Includio, an AI interview-practice platform for autistic candidates, into a working MVP at RMIT ADC Hackathon 2026.',
    category: 'Product',
    date: '2026',
    image: '/assets/news/includio-rmit-hackathon.webp',
  },
  {
    id: 'tech-planter-demo-day',
    title: 'AquaGuard on stage at TECH PLANTER Vietnam 2026 Demo Day',
    excerpt: 'Our team gave a Lightning Talk on AquaGuard at the Demo Day organised by Leave a Nest Group, and met fellow deep-tech startups, researchers and industry experts.',
    category: 'Milestones',
    date: '2026',
    image: '/assets/news/tech-planter-demo-day.webp',
  },
  {
    id: 'aquaguard-epics-first-prize',
    title: 'AquaGuard takes 1st prize at the EPICS 8th Competition',
    excerpt: 'Judges recognised how the system connects victims, rescue teams and coordinators in real time.',
    category: 'Awards',
    image: '/assets/gallery/epics-first-place.jpg',
  },
  {
    id: 'aquaguard-bach-khoa-second-prize',
    title: 'AquaGuard earns 2nd prize at Bach Khoa Innovation',
    excerpt: 'A runner-up finish among innovation projects at Ho Chi Minh City University of Technology.',
    category: 'Awards',
    date: '2026',
    image: '/assets/gallery/bach-khoa-innovation.jpg',
  },
  {
    id: 'enablecode-devcamp-first-prize',
    title: 'EnableCode wins Fessior DevCamp 2026 Prometheus',
    excerpt: 'Our hands-free coding platform for people with upper-limb disabilities won first place.',
    category: 'Awards',
    date: '2026',
    image: '/assets/gallery/fessior-devcamp-prometheus.jpg',
  },
  {
    id: 'team-wins',
    title: 'Our team brings home four prizes in a year',
    excerpt: 'A look back at the competitions, late nights and mentors behind this year’s results.',
    category: 'Milestones',
    image: '/assets/news/mentor-session-3.webp',
  },
]

// ─── 9b. FAQ ────────────────────────────────────────────────────────────────

// TODO(content): confirm each answer with the founders before shipping.
export const FAQ: { q: string; a: string }[] = [
  {
    q: 'What is Odylytics?',
    a: 'Odylytics is an AI firm that designs, builds and ships digital solutions. We create innovation and drive digital transformation, from flood rescue to inclusive education.',
  },
  {
    q: 'What solutions do you build?',
    a: 'Six so far: AquaGuard for flood rescue coordination, EnableCode for hands-free coding education, Includio for AI interview practice, and AirGuard, RooMie and HearWork, which are on the way.',
  },
  {
    q: 'What is AquaGuard?',
    a: 'AquaGuard is our flood rescue coordination platform. Victims send SOS requests, rescue teams see them on a live flood map, and coordinators dispatch help from one shared view. It has won first prize at the OISP Presentation Contest and the EPICS 8th Competition, and second prize at Bach Khoa Innovation.',
  },
  {
    q: 'Who is behind Odylytics?',
    a: 'Five student co-founders, supported by advisors and partner universities. You can meet everyone on the Team page.',
  },
  {
    q: 'Who do you work with?',
    a: 'Universities and companies that back innovation, including UTS, HCMUT, ASU, RMIT, Sorbonne Université, Université Laval, Dow, Leave a Nest and TechPlanter.',
  },
  {
    q: 'How can we work together?',
    a: 'Partnerships, pilots and press enquiries are all welcome. Send us a message through the contact form or email odylytics@gmail.com.',
  },
]
