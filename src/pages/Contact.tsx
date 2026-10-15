import { useState } from 'react'
import type { FormEvent } from 'react'
import { PageHead } from '../components/Section'
import { CONTACT, FAQ, SOCIALS } from '../data/content'
import { CONTACT_PURPOSES } from '../data/site'
import { useT } from '../lib/lang'

export function Contact() {
  const t = useT()
  const [sent, setSent] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const field = (name: string) => String(data.get(name) ?? '').trim()
    const organisation = field('organisation')
    const subject = `[${field('purpose')}] Enquiry from ${field('name')}${organisation ? ` (${organisation})` : ''}`
    const body = `${field('message')}\n\n— ${field('name')}\n${field('email')}${organisation ? `\n${organisation}` : ''}`
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <>
      <PageHead label="Get in touch" title="Let’s build what matters, together." lead="Partnerships, pilots, research or press: tell us what you have in mind." />
      <section className="section section--tight">
        <div className="container contact">
          <form className="form" onSubmit={onSubmit}>
            <label className="field">
              <span className="field__label">{t('What is this about?')}</span>
              <select name="purpose" defaultValue={CONTACT_PURPOSES[0]}>
                {CONTACT_PURPOSES.map((item) => (
                  <option key={item} value={item}>
                    {t(item)}
                  </option>
                ))}
              </select>
            </label>
            <div className="form__row">
              <label className="field">
                <span className="field__label">{t('Name')}</span>
                <input name="name" type="text" autoComplete="name" required />
              </label>
              <label className="field">
                <span className="field__label">{t('Email')}</span>
                <input name="email" type="email" autoComplete="email" required />
              </label>
            </div>
            <label className="field">
              <span className="field__label">{t('Organisation')}</span>
              <input name="organisation" type="text" autoComplete="organization" />
            </label>
            <label className="field">
              <span className="field__label">{t('Message')}</span>
              <textarea name="message" rows={6} required />
            </label>
            <label className="check">
              <input type="checkbox" required />
              <span>
                I agree that Odylytics may use these details to reply to me, as described in the <a href="#/legal/privacy">{t('Privacy Policy')}</a>.
              </span>
            </label>
            <div className="form__actions">
              <button className="btn btn--primary" type="submit">
                {t('Send message')}
              </button>
              <p className="form__status" role="status">
                {sent ? 'Your email app should open with the message ready to send.' : ''}
              </p>
            </div>
          </form>

          <aside className="contact__side">
            <dl className="facts">
              <div>
                <dt>{t('Email')}</dt>
                <dd>
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </dd>
              </div>
              {SOCIALS.map((social) => (
                <div key={social.label}>
                  <dt>{social.label}</dt>
                  <dd>
                    <a href={social.href} target="_blank" rel="noreferrer">
                      odylytics
                    </a>
                  </dd>
                </div>
              ))}
              <div>
                <dt>Address</dt>
                <dd>{CONTACT.address}</dd>
              </div>
              <div>
                <dt>Privacy requests</dt>
                <dd>
                  <a href="#/legal/data-requests">How to submit</a>
                </dd>
              </div>
              <div>
                <dt>Security reports</dt>
                <dd>
                  <a href="#/legal/disclosure">{t('Responsible disclosure')}</a>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container faq">
          <h2 className="sechead__title">{t('Frequently asked questions')}</h2>
          <div>
            {FAQ.map((item) => (
              <details key={item.q} className="faq__item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
