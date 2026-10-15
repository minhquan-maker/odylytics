import { CountUp } from '../components/CountUp'
import { HeroArt } from '../components/HeroArt'
import { PartnerLoop } from '../components/Partners'
import { PostCard } from '../components/PostCard'
import { Label, SectionHead } from '../components/Section'
import { Testimonials } from '../components/Testimonials'
import { IMPACT, IMPACT_NOTE, POSTS, RECOGNITION, SOLUTIONS, TEAM } from '../data/content'
import { HOME_BAND, HOME_CLOSING, HOME_HERO, HOME_PILLARS, HOME_WORK, PRODUCT_GROUPS } from '../data/site'
import { useBrandAssets } from '../hooks/useBrandAssets'
import { postsStore } from '../lib/stores'

function Title() {
  // Underline the key words, the way a printed headline would, without italics.
  return (
    <h1 className="hero__title">
      {HOME_HERO.title.map((line) => (
        <span key={line} className="hero__line">
          {line.split(' ').map((word, index, words) => (
            <span key={`${word}-${index}`}>
              {HOME_HERO.underline.includes(word) ? <u>{word}</u> : word}
              {index < words.length - 1 ? ' ' : ''}
            </span>
          ))}
        </span>
      ))}
    </h1>
  )
}

export function Home() {
  const { solutionLogo } = useBrandAssets()
  const stored = postsStore.useItems()
  const posts = (postsStore.isSeeded() ? POSTS : stored).slice(0, 3)
  const prizes = RECOGNITION.flatMap((group) => group.items.map((item) => ({ ...item, product: group.solutionName })))
  const live = (id: string) => SOLUTIONS.find((solution) => solution.id === id)
  const climate = PRODUCT_GROUPS['climate-tech']
  const access = PRODUCT_GROUPS.accessibility

  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <Label>{HOME_HERO.eyebrow}</Label>
            <Title />
            <p className="hero__lead">{HOME_HERO.lead}</p>
            <div className="hero__cta">
              <a className="btn btn--primary" href="#/product/climate-tech">
                Explore products
              </a>
              <a className="btn btn--outline" href="#/research">
                Read our research
              </a>
            </div>
          </div>
          <div className="hero__art">
            <HeroArt />
          </div>
        </div>
        <div className="container">
          <div className="hero__cards">
            <a className="hero-card" href="#/research/accomplished">
              <span className="tag tag--accent">New</span>
              <h2>EnableCode wins Fessior DevCamp 2026</h2>
              <p>Our hands-free coding platform for people with upper-limb disabilities took first place.</p>
              <span className="link-arrow">
                Read more <span aria-hidden="true">→</span>
              </span>
            </a>
            <a className="hero-card" href="#/contact">
              <span className="tag">Partner with us</span>
              <h2>Run a pilot with Odylytics</h2>
              <p>Universities, public bodies and companies: tell us about the problem you want to solve.</p>
              <span className="link-arrow">
                Get in touch <span aria-hidden="true">→</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="strip" aria-label="Partners">
        <div className="container">
          <Label>Built with universities and companies</Label>
        </div>
        <PartnerLoop />
      </section>

      <section className="section">
        <div className="container">
          <SectionHead label="What we do" title="One AI firm, three ways we create value." />
          <ol className="pillars">
            {HOME_PILLARS.map((pillar) => (
              <li key={pillar.label} className="pillar" data-reveal>
                <span className="pillar__index">{pillar.index}</span>
                <p className="pillar__label">{pillar.label}</p>
                <h3 className="pillar__title">{pillar.title}</h3>
                <p className="pillar__text">{pillar.text}</p>
                <a className="link-arrow" href={pillar.href}>
                  {pillar.cta} <span aria-hidden="true">→</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <SectionHead label="Product" title="Solutions built on one shared AI core." action={{ href: '#/product/incoming', text: 'See what is incoming' }} />
          <div className="productgrid">
            {[climate, access].map((group) => (
              <a key={group.id} className="productcard" href={`#/product/${group.id}`} data-reveal>
                <p className="productcard__label">{group.label.replace('Product · ', '')}</p>
                <h3 className="productcard__title">{group.title}</h3>
                <ul className="productcard__logos">
                  {group.solutions.map((id) => {
                    const solution = live(id)
                    return solution?.logo ? (
                      <li key={id}>
                        <img src={solutionLogo(solution.logo)} alt={solution.name} />
                      </li>
                    ) : null
                  })}
                </ul>
                <span className="link-arrow">
                  Explore <span aria-hidden="true">→</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="band scope-dark" aria-labelledby="band-title">
        <div className="container band__grid">
          <div>
            <Label>{HOME_BAND.label}</Label>
            <h2 id="band-title" className="band__title">
              {HOME_BAND.title}
            </h2>
            <p className="band__text">{HOME_BAND.text}</p>
          </div>
          <dl className="stats">
            {IMPACT.map((stat) => (
              <div key={stat.label} className="stat">
                <dt>{stat.label}</dt>
                <dd>
                  <CountUp to={stat.value} />
                  {stat.suffix}
                </dd>
              </div>
            ))}
          </dl>
          <p className="band__note">{IMPACT_NOTE}</p>
          <div className="bars" aria-hidden="true">
            {Array.from({ length: 36 }, (_, index) => (
              <span key={index} className={`bars__bar${index > 29 ? ' is-hot' : ''}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead label="Research and recognition" title="Our work, in public." action={{ href: '#/research/accomplished', text: 'See all milestones' }} />
          <ul className="prizes">
            {prizes.map((prize) => (
              <li key={`${prize.issuer}-${prize.year}`} className="prize" data-reveal>
                {prize.image && (
                  <div className="prize__media">
                    <img src={prize.image} alt="" loading="lazy" />
                  </div>
                )}
                <div className="prize__body">
                  <p className="prize__place">{prize.place === '1st' ? '1st prize' : '2nd prize'}</p>
                  <h3 className="prize__issuer">{prize.issuer}</h3>
                  <p className="prize__meta">
                    {prize.product} · {prize.year}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <SectionHead label="Testimonials" title="People on the ground already believe in AquaGuard." />
          <Testimonials limit={3} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead label="Team" title="Five co-founders, one mission." action={{ href: '#/team/co-founders', text: 'Meet the team' }} />
          <ul className="crewrow">
            {TEAM.map((member) => (
              <li key={member.slug} data-reveal>
                <a className="crewcard" href={`#/team/${member.slug}`}>
                  <span className="crewcard__photo">{member.photo && <img src={member.photo} alt={`Portrait of ${member.name}`} loading="lazy" />}</span>
                  <span className="crewcard__name">{member.name}</span>
                  <span className="crewcard__role">{member.shortRole}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <SectionHead label="Blog" title="Latest from Odylytics." action={{ href: '#/blog', text: 'All posts' }} />
          <div className="post-grid">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container work">
          <div className="work__media" data-reveal>
            <img src={HOME_WORK.image} alt="The Odylytics team working together" loading="lazy" />
          </div>
          <div className="work__body" data-reveal>
            <h2 className="work__title">{HOME_WORK.title}</h2>
            <p>{HOME_WORK.text}</p>
            <a className="btn btn--outline" href="#/team/co-founders">
              {HOME_WORK.cta}
            </a>
          </div>
        </div>
      </section>

      <section className="container closing-wrap">
        <div className="closing scope-dark">
          <Label>Get in touch</Label>
          <h2 className="closing__title">{HOME_CLOSING.title}</h2>
          <p>{HOME_CLOSING.text}</p>
          <a className="btn btn--accent" href="#/contact">
            Get in touch
          </a>
        </div>
      </section>
    </>
  )
}
