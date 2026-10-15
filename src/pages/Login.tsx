import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { Label } from '../components/Section'
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
      <div className="container login__shell">
        <form className="login__form" onSubmit={onSubmit}>
          <Label>Members only</Label>
          <h1 id="login-title" className="login__title">
            Welcome back
          </h1>
          <p className="login__lead">Sign in with the account the Odylytics team created for you. Members publish news and manage testimonials.</p>

          {demoMode && <p className="notice">Demo mode: no Supabase project is connected, so any email and password works and edits stay in this browser.</p>}
          {!available && <p className="notice">Member login is not switched on for this site yet. The site owner needs to connect the member database.</p>}

          <label className="field">
            <span className="field__label">Email</span>
            <input name="email" type="email" autoComplete="email" placeholder="you@odylytics.com" required disabled={!available} />
          </label>
          <label className="field">
            <span className="field__label">Password</span>
            <span className="field__password">
              <input name="password" type={show ? 'text' : 'password'} autoComplete="current-password" required disabled={!available} />
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

          <button className="btn btn--primary login__submit" type="submit" disabled={busy}>
            {busy ? 'Signing in…' : 'Sign in'}
          </button>
          <p className="login__fine">
            By signing in you agree to the <a href="#/legal/terms">Terms of Use</a> and the <a href="#/legal/privacy">Privacy Policy</a>.
          </p>
        </form>
      </div>
    </section>
  )
}
