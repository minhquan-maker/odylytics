import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { Button } from '../components/Button'
import { BRAND } from '../data/content'
import { backendConfigured, demoMode } from '../lib/backend'
import { signIn, useAuth } from '../lib/auth'

export function Login() {
  const { member } = useAuth()
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)
  const [show, setShow] = useState(false)
  const available = backendConfigured || demoMode

  useEffect(() => {
    if (member) window.location.hash = '#/admin'
  }, [member])
  if (member) return null

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    setBusy(true)
    setError(null)
    setError(await signIn(String(form.get('email')).trim(), String(form.get('password'))))
    setBusy(false)
  }

  return (
    <section className="login" aria-labelledby="login-title">
      <div className="login__shell">
        <aside className="login__aside">
          <div className="aurora" aria-hidden="true" />
          <a className="login__brand" href="#home" aria-label="Odylytics, back to the website">
            <img src={BRAND.wordmarkDark} alt="" width="1826" height="565" />
          </a>
          <div className="login__pitch">
            <h2 className="h2-serif">
              Tell the story. <em className="em">Keep it current.</em>
            </h2>
            <p>Members publish news, update prizes and manage testimonials. Everything saved here appears on the public site straight away.</p>
          </div>
          <p className="login__foot">One AI firm. Six solutions.</p>
        </aside>

        <div className="login__panel">
          <form className="login__form" onSubmit={onSubmit}>
            <p className="eyebrow">Members only</p>
            <h1 id="login-title" className="login__title">
              Welcome back
            </h1>
            <p className="login__lead">Sign in with the account the Odylytics team created for you.</p>

            {demoMode && <p className="notice">Demo mode: no Supabase project is connected, so any email and password works and edits stay in this browser.</p>}
            {!available && <p className="notice">Member login is not switched on for this site yet. The site owner needs to connect the member database.</p>}

            <label className="field">
              <span className="label">Email</span>
              <input name="email" type="email" autoComplete="email" placeholder="you@odylytics.com" required disabled={!available} />
            </label>
            <label className="field">
              <span className="label">Password</span>
              <span className="field__password">
                <input name="password" type={show ? 'text' : 'password'} autoComplete="current-password" placeholder="Your password" required disabled={!available} />
                <button type="button" className="field__toggle" onClick={() => setShow((value) => !value)} aria-pressed={show}>
                  {show ? 'Hide' : 'Show'}
                </button>
              </span>
            </label>

            {error && (
              <p className="form-error" role="alert">
                {error}
              </p>
            )}

            <Button type="submit" arrow={false} variant="primary" className="login__submit">
              {busy ? 'Signing in…' : 'Sign in'}
            </Button>
            <a className="text-btn" href="#home">
              ‹ Back to the website
            </a>
          </form>
        </div>
      </div>
    </section>
  )
}
