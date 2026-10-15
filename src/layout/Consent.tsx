import { useEffect, useRef, useState } from 'react'
import { inject } from '@vercel/analytics'
import { Modal } from '../components/Modal'
import { saveConsent, useConsent } from '../lib/consent'
import { useT } from '../lib/lang'

let injected = false

/** First-visit banner plus a settings dialog; analytics load only after an explicit yes. */
export function Consent() {
  const consent = useConsent()
  const t = useT()
  const [settings, setSettings] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const opener = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (consent?.analytics && !injected) {
      injected = true
      inject()
    }
  }, [consent])

  useEffect(() => {
    const open = () => {
      opener.current = document.activeElement as HTMLElement
      setAnalytics(Boolean(consent?.analytics))
      setSettings(true)
    }
    window.addEventListener('odylytics:consent-settings', open)
    return () => window.removeEventListener('odylytics:consent-settings', open)
  }, [consent])

  const decide = (value: boolean) => {
    saveConsent(value)
    setSettings(false)
  }

  return (
    <>
      {!consent && !settings && (
        <aside className="consent" role="region" aria-label="Cookie preferences">
          <p className="consent__title">{t('Your privacy')}</p>
          <p className="consent__text">
            {t('We store your theme choice so the site looks the way you left it. With your permission we also measure visits with Vercel Analytics. Read the')} <a href="#/legal/cookies">{t('Cookie Policy')}</a>.
          </p>
          <div className="consent__actions">
            <button type="button" className="btn btn--primary btn--sm" onClick={() => decide(true)}>
              {t('Accept all')}
            </button>
            <button type="button" className="btn btn--outline btn--sm" onClick={() => decide(false)}>
              {t('Reject non-essential')}
            </button>
            <button
              type="button"
              className="btn btn--text btn--sm"
              onClick={() => {
                setAnalytics(false)
                setSettings(true)
              }}
            >
              {t('Customise')}
            </button>
          </div>
        </aside>
      )}

      <Modal open={settings} onClose={() => setSettings(false)} labelledBy="consent-title">
        <div className="consent-dialog">
          <h2 id="consent-title" className="h3">
            Cookie settings
          </h2>
          <p>Choose what this site may store or measure. You can change this at any time from the footer.</p>
          <ul className="consent-dialog__list">
            <li>
              <div>
                <strong>Strictly necessary</strong>
                <span>Remembers your theme, language and member sign-in. Cannot be switched off.</span>
              </div>
              <span className="switch is-on is-locked" aria-label="Always on" />
            </li>
            <li>
              <div>
                <strong>Analytics</strong>
                <span>Vercel Analytics counts page views without advertising profiles.</span>
              </div>
              <button type="button" role="switch" aria-checked={analytics} aria-label="Analytics" className={`switch${analytics ? ' is-on' : ''}`} onClick={() => setAnalytics((value) => !value)} />
            </li>
            <li>
              <div>
                <strong>Marketing</strong>
                <span>We do not use marketing or advertising cookies.</span>
              </div>
              <span className="switch is-locked" aria-label="Not used" />
            </li>
          </ul>
          <div className="consent-dialog__actions">
            <button type="button" className="btn btn--primary" onClick={() => decide(analytics)}>
              Save choices
            </button>
            <button type="button" className="btn btn--outline" onClick={() => decide(true)}>
              Accept all
            </button>
          </div>
        </div>
      </Modal>
    </>
  )
}
