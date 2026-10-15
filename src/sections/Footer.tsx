import { BRAND, CONTACT, SOCIALS } from '../data/content'
import { Button } from '../components/Button'
import { useContent, useUi } from '../hooks/useContent'

/** Always dark, whichever theme is chosen: a dim giant wordmark half-covered by a rounded panel with the links. */
export function Footer() {
  const { FOOTER_GROUPS, FOOTER_NOTE, LEGAL_LINKS, HERO } = useContent()
  const ui = useUi()
  return (
    <footer className="footer scope-dark">
      <div className="container">
        <a className="footer__wordmark" href="#home" aria-label="Odylytics, back to top">
          <img src={BRAND.wordmarkDark} alt="" width="1826" height="565" />
        </a>
      </div>

      <div className="footer__panel">
        <div className="container footer__grid">
          <div className="footer__lead">
            <p className="footer__tagline">{HERO.note}</p>
            <Button href="#contact" variant="primary" arrow>
              {ui.getInTouch}
            </Button>
            <dl className="footer__contact">
              <div>
                <dt>A</dt>
                <dd>{CONTACT.address}</dd>
              </div>
              {CONTACT.phone && (
                <div>
                  <dt>P</dt>
                  <dd>{CONTACT.phone}</dd>
                </div>
              )}
              <div>
                <dt>E</dt>
                <dd>
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="footer__groups">
            {FOOTER_GROUPS.map((group) => (
              <nav key={group.heading} className="footer__group" aria-label={group.heading}>
                <h2 className="footer__label">{group.heading}</h2>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="container footer__bar">
          <p className="footer__note">{FOOTER_NOTE}</p>
          <div className="footer__bar-row">
            <div className="footer__bar-left">
              <p className="footer__copy">{ui.rights}</p>
              <ul className="footer__social">
                {SOCIALS.map((social) => (
                  <li key={social.label}>
                    <a href={social.href} target="_blank" rel="noreferrer">
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <ul className="footer__legal" aria-label={ui.legal}>
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
