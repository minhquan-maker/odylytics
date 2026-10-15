import { useEffect } from 'react'
import { Button } from '../components/Button'
import { useBrandAssets } from '../hooks/useBrandAssets'
import { useUi } from '../hooks/useContent'
import { isUnknownPath } from '../hooks/useRoute'

/** Shown for unknown `#/…` routes, missing team profiles and any path other than `/`. */
export function NotFound() {
  const ui = useUi()
  const brand = useBrandAssets()
  const requested = isUnknownPath() ? window.location.pathname : window.location.hash.slice(1)

  useEffect(() => {
    const title = document.title
    document.title = `${ui.notFoundTitle} — Odylytics`
    return () => {
      document.title = title
    }
  }, [ui.notFoundTitle])

  // On a bad path, `#contact` would resolve to `/bad-path#contact` and stay on this page.
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
    <section className="section page notfound" aria-labelledby="notfound-title">
      <div className="aurora" aria-hidden="true" />
      <div className="container notfound__inner">
        <p className="eyebrow">{ui.notFoundEyebrow}</p>
        <p className="notfound__code" aria-hidden="true">
          <span>4</span>
          <img className="notfound__symbol" src={brand.symbol} alt="" />
          <span>4</span>
        </p>
        <h1 id="notfound-title" className="h2-serif">
          {ui.notFoundHeading} <span className="em">{ui.notFoundTail}</span>
        </h1>
        <p className="body-l notfound__text">{ui.notFoundText}</p>
        <div className="notfound__actions">
          <Button href="#home">{ui.notFoundHome}</Button>
          <Button href="#contact" variant="outline" arrow={false}>
            {ui.notFoundContact}
          </Button>
        </div>

        <nav className="notfound__links" aria-label={ui.notFoundTry}>
          <span className="label">{ui.notFoundTry}</span>
          <ul>
            {ui.notFoundLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {requested && (
          <p className="notfound__path">
            <span>{ui.notFoundRequested}</span> <code>{requested}</code>
          </p>
        )}
      </div>
    </section>
  )
}
