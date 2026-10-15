import { useState } from 'react'
import { Label, PageHead, SectionHead } from '../components/Section'
import { ADVISORS, MEMBERS, PARTNERS, TEAM } from '../data/content'
import { PARTNERS_PAGE, PARTNER_NOTES, RESOURCES_PAGE, TEAM_PAGE } from '../data/site'
import { useT } from '../lib/lang'

export function CoFounders() {
  return (
    <>
      <PageHead label={TEAM_PAGE.label} title={TEAM_PAGE.title} lead={TEAM_PAGE.lead} />
      <section className="section section--tight">
        <div className="container">
          <ul className="founders">
            {TEAM.map((member) => (
              <li key={member.slug} data-reveal>
                <a className="founder" href={`#/team/${member.slug}`}>
                  <span className="founder__photo">{member.photo && <img src={member.photo} alt={`Portrait of ${member.name}`} loading="lazy" />}</span>
                  <span className="founder__role">{member.role}</span>
                  <span className="founder__name">{member.name}</span>
                  <span className="founder__bio">{member.bio}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <SectionHead label="Advisors" title="Mentors and experts who guide our work." />
          <ul className="advisors">
            {ADVISORS.map((advisor) => (
              <li key={advisor.name} className="advisor" data-reveal>
                <span className="advisor__role">{advisor.role}</span>
                <span className="advisor__name">{advisor.name}</span>
                <span className="advisor__org">{advisor.affiliation}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <SectionHead label="Members" title="Students and collaborators building with us." />
          {MEMBERS.length ? (
            <ul className="advisors">
              {MEMBERS.map((member) => (
                <li key={member.slug} className="advisor">
                  <span className="advisor__role">{member.role}</span>
                  <span className="advisor__name">{member.name}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="callout">
              <p>Members will be listed here soon.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export function PartnersPage() {
  const t = useT()
  const groups = ['Academic', 'Corporate', 'Accelerator']
  return (
    <>
      <PageHead label={PARTNERS_PAGE.label} title={PARTNERS_PAGE.title} lead={PARTNERS_PAGE.lead} />
      <section className="section section--tight">
        <div className="container">
          {groups.map((group) => (
            <div key={group} className="partnergroup">
              <h2 className="partnergroup__title">{group}</h2>
              <ul className="partners">
                {PARTNERS.filter((partner) => partner.type === group).map((partner) => (
                  <li key={partner.name} className="partner" data-reveal>
                    <div className="partner__logo">{partner.logo && <img src={partner.logo} alt="" loading="lazy" />}</div>
                    <h3>{partner.name}</h3>
                    <p>{PARTNER_NOTES[partner.name]}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="container closing-wrap">
        <div className="closing scope-dark">
          <Label>Partnerships</Label>
          <h2 className="closing__title">Become a partner.</h2>
          <p>Offer a testbed, a lab, a stage or funding, and help us put AI where it is needed.</p>
          <a className="btn btn--accent" href="#/contact">
            {t('Get in touch')}
          </a>
        </div>
      </section>
    </>
  )
}

export function Resources() {
  const t = useT()
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(RESOURCES_PAGE.boilerplate)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }
  return (
    <>
      <PageHead label={RESOURCES_PAGE.label} title={RESOURCES_PAGE.title} lead={RESOURCES_PAGE.lead} />
      <section className="section section--tight">
        <div className="container resources">
          <div data-reveal>
            <SectionHead label="About" title="Boilerplate" />
            <p className="resources__text">{RESOURCES_PAGE.boilerplate}</p>
            <button type="button" className="btn btn--outline btn--sm" onClick={copy}>
              {copied ? 'Copied' : 'Copy text'}
            </button>
          </div>
          <dl className="facts" data-reveal>
            {RESOURCES_PAGE.facts.map((fact) => (
              <div key={fact.k}>
                <dt>{fact.k}</dt>
                <dd>{fact.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <SectionHead label="Brand assets" title="Logos" />
          <ul className="assets">
            {RESOURCES_PAGE.assets.map((asset) => (
              <li key={asset.file} className={`asset${asset.file.includes('dark') ? ' asset--dark' : ''}`} data-reveal>
                <div className="asset__preview">
                  <img src={asset.file} alt="" />
                </div>
                <div className="asset__meta">
                  <strong>{asset.name}</strong>
                  <span>{asset.note}</span>
                  <a href={asset.file} download>
                    Download SVG
                  </a>
                </div>
              </li>
            ))}
          </ul>
          <p className="resources__note">Please keep clear space around the logo, do not recolour or distort it. See the brand section of the <a href="#/legal/terms">{t('Terms of Use')}</a>.</p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <SectionHead label="Coverage" title="In the press" />
          <ul className="coverage">
            {RESOURCES_PAGE.coverage.map((item) => (
              <li key={item.href}>
                <a href={item.href} target="_blank" rel="noreferrer">
                  <span className="coverage__src">{item.source}</span>
                  <span className="coverage__title">{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="callout">
            <Label>Reports</Label>
            <p>Impact reports and public datasets will appear here. Press enquiries: <a href="mailto:odylytics@gmail.com">odylytics@gmail.com</a>.</p>
          </div>
        </div>
      </section>
    </>
  )
}
