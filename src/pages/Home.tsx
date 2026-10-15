import { Contours } from '../components/Contours'
import { CountUp } from '../components/CountUp'
import { Hero } from '../components/Hero'
import { HeroArt } from '../components/HeroArt'
import { HowFlow } from '../components/HowFlow'
import { PartnerLoop } from '../components/Partners'
import { PostCard } from '../components/PostCard'
import { Label, SectionHead } from '../components/Section'
import { SolutionLoop } from '../components/SolutionLoop'
import { Testimonials } from '../components/Testimonials'
import { IMPACT, IMPACT_NOTE, POSTS, RECOGNITION, SOLUTIONS, TEAM } from '../data/content'
import { HOME_BAND, HOME_CLOSING, HOME_PILLARS, HOME_WORK, PRODUCT_GROUPS } from '../data/site'
import { useBrandAssets } from '../hooks/useBrandAssets'
import { postsStore } from '../lib/stores'
import { useT } from '../lib/lang'

export function Home() {
  const t = useT()
  const { solutionLogo } = useBrandAssets()
  const stored = postsStore.useItems()
  const posts = (postsStore.isSeeded() ? POSTS : stored).slice(0, 3)
  const prizes = RECOGNITION.flatMap((group) => group.items.map((item) => ({ ...item, product: group.solutionName })))
  const live = (id: string) => SOLUTIONS.find((solution) => solution.id === id)
  const climate = PRODUCT_GROUPS['climate-tech']
  const access = PRODUCT_GROUPS.accessibility

  return (
    <>
      <Hero />

      <section className="strip" aria-label="Partners">
        <div className="container">
          <Label>{t('Built with universities and companies')}</Label>
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
                <p className="pillar__label">{t(pillar.label)}</p>
                <h3 className="pillar__title">{t(pillar.title)}</h3>
                <p className="pillar__text">{t(pillar.text)}</p>
                <a className="link-arrow" href={pillar.href}>
                  {t(pillar.cta)} <span aria-hidden="true">→</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container how">
          <div className="how__copy" data-reveal>
            <Label>{t('How it works')}</Label>
            <h2 className="sechead__title">{t('Many inputs. One shared AI core.')}</h2>
            <p>{t('Community reports, sensor readings and webcam signals all flow through the same foundation, so every new product launches faster and learns from the others.')}</p>
          </div>
          <div className="how__art" data-reveal>
            <HeroArt />
            <HowFlow />
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <SectionHead label="Product" title="Solutions built on one shared AI core." action={{ href: '#/product/incoming', text: 'See what is incoming' }} />
          <div className="productgrid">
            {[climate, access].map((group) => (
              <a key={group.id} className="productcard" href={`#/product/${group.id}`} data-reveal>
                <p className="productcard__label">{t(group.label.replace('Product · ', ''))}</p>
                <h3 className="productcard__title">{t(group.title)}</h3>
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
                  {t('Explore')} <span aria-hidden="true">→</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="band scope-dark" aria-labelledby="band-title">
        <Contours />
        <div className="container band__inner">
          <div className="band__head">
            <Label>{HOME_BAND.label}</Label>
            <h2 id="band-title" className="band__title">
              {t(HOME_BAND.title)}
            </h2>
            <p className="band__text">{t(HOME_BAND.text)}</p>
          </div>
          <dl className="stats">
            {IMPACT.map((stat, index) => (
              <div key={stat.label} className="stat" data-reveal>
                <span className="stat__line" aria-hidden="true" />
                <span className="stat__idx" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <dt>{t(stat.label)}</dt>
                <dd>
                  <CountUp to={stat.value} />
                  {stat.suffix && <span className="stat__plus">{stat.suffix}</span>}
                </dd>
              </div>
            ))}
          </dl>
          <p className="band__note">{t(IMPACT_NOTE)}</p>
        </div>
      </section>

      <section className="solutionstrip" aria-label="Solutions">
        <SolutionLoop />
      </section>

      <section className="section">
        <div className="container">
          <SectionHead label="Recognition" title="Our work, in public." action={{ href: '#/blog', text: 'All news' }} />
          <ul className="prizes">
            {prizes.map((prize) => (
              <li key={`${prize.issuer}-${prize.year}`} className="prize" data-reveal>
                {prize.image && (
                  <div className="prize__media">
                    <img src={prize.image} alt="" loading="lazy" />
                  </div>
                )}
                <div className="prize__body">
                  <p className="prize__place">{t(prize.place === '1st' ? '1st prize' : '2nd prize')}</p>
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
            <h2 className="work__title">{t(HOME_WORK.title)}</h2>
            <p>{HOME_WORK.text}</p>
            <a className="btn btn--outline" href="#/team/co-founders">
              {t(HOME_WORK.cta)}
            </a>
          </div>
        </div>
      </section>

      <section className="container closing-wrap">
        <div className="closing closing--photo scope-dark">
          <div className="closing__copy">
            <Label>{t('Get in touch')}</Label>
            <h2 className="closing__title">{t(HOME_CLOSING.title)}</h2>
            <p>{t(HOME_CLOSING.text)}</p>
            <a className="btn btn--accent" href="#/contact">
              {t('Get in touch')}
            </a>
          </div>
          <div className="closing__photo">
            <img src="/assets/gallery/closing-team.jpg" alt="The Odylytics team with their EPICS, OISP and Bach Khoa Innovation prizes" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  )
}
