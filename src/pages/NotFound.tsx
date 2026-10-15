import { useEffect } from 'react'
import { Label } from '../components/Section'
import { isUnknownPath } from '../hooks/useRoute'

/** Shown for unknown `#/…` routes, missing profiles and any path other than `/`. */
export function NotFound() {
  const requested = isUnknownPath() ? window.location.pathname : window.location.hash.slice(1)

  useEffect(() => {
    const title = document.title
    document.title = 'Page not found — Odylytics'
    return () => {
      document.title = title
    }
  }, [])

  // On a bad path, a `#/…` link would resolve to `/bad-path#/…` and stay on this page.
  useEffect(() => {
    if (!isUnknownPath()) return
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element).closest<HTMLAnchorElement>('a[href^="#"]')
      if (!link || event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey) return
      event.preventDefault()
      window.location.assign(`/${link.hash}`)
    }
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  return (
    <section className="section notfound">
      <div className="container notfound__inner">
        <Label>Error 404</Label>
        <h1 className="notfound__title">This page took a wrong turn.</h1>
        <p className="notfound__text">The link may be broken, or the page may have moved. Head back home, or tell us what you were looking for.</p>
        <div className="notfound__actions">
          <a className="btn btn--primary" href="#/">
            Back to home
          </a>
          <a className="btn btn--outline" href="#/contact">
            Contact us
          </a>
        </div>
        <ul className="notfound__links">
          {[
            ['Product', '#/product/climate-tech'],
            ['Research', '#/research'],
            ['Team', '#/team/co-founders'],
            ['Blog', '#/blog'],
          ].map(([label, href]) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
        {requested && (
          <p className="notfound__path">
            Requested <code>{requested}</code>
          </p>
        )}
      </div>
    </section>
  )
}
