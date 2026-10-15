import { useEffect, useRef, useState } from 'react'
import { ChevronDownIcon, CloseIcon, MenuIcon } from '../components/Icons'
import { SettingsMenu, SettingsPanel } from '../components/SettingsMenu'
import { NAV } from '../data/site'
import { useBrandAssets } from '../hooks/useBrandAssets'
import { lockScroll, unlockScroll } from '../hooks/useSmoothScroll'
import { useAuth } from '../lib/auth'
import { useT } from '../lib/lang'

export function Nav({ route }: { route: string }) {
  const [scrolled, setScrolled] = useState(false)
  const [seen, setSeen] = useState(route)
  const [open, setOpen] = useState(false)
  const [dropdown, setDropdown] = useState<number | null>(null)
  // Close menus when the route changes (derived during render, not in an effect).
  if (seen !== route) {
    setSeen(route)
    setDropdown(null)
    setOpen(false)
  }
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const linksRef = useRef<HTMLElement>(null)
  const { member } = useAuth()
  const brand = useBrandAssets()
  const t = useT()
  const memberHref = member ? '#/admin' : '#/login'
  const memberLabel = t(member ? 'Dashboard' : 'Login')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (dropdown === null) return
    const onPointer = (event: PointerEvent) => {
      if (!linksRef.current?.contains(event.target as Node)) setDropdown(null)
    }
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setDropdown(null)
    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [dropdown])

  useEffect(() => {
    if (!open) return
    const toggle = toggleRef.current
    lockScroll()
    const onKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)
    const desktop = window.matchMedia('(min-width: 961px)')
    const onResize = () => desktop.matches && setOpen(false)
    window.addEventListener('keydown', onKeyDown)
    desktop.addEventListener('change', onResize)
    return () => {
      unlockScroll()
      window.removeEventListener('keydown', onKeyDown)
      desktop.removeEventListener('change', onResize)
      toggle?.focus({ preventScroll: true })
    }
  }, [open])

  const current = (href?: string) => (href && route === href.slice(1) ? 'page' : undefined)
  const groupActive = (items?: { href: string }[]) => items?.some((item) => route === item.href.slice(1))

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}${route === '/' && !scrolled && !open ? ' is-clear' : ''}`}>
      <div className="nav__inner">
        <a className="nav__brand" href="#/" aria-label="Odylytics, home">
          <img src={brand.wordmark} alt="" width="1826" height="565" />
        </a>

        <nav className="nav__links" aria-label="Primary" ref={linksRef}>
          <ul>
            {NAV.map((group, index) => (
              <li key={group.label} className="nav__item" onMouseEnter={() => group.items && setDropdown(index)} onMouseLeave={() => setDropdown(null)}>
                {group.items ? (
                  <>
                    <button type="button" className={`nav__trigger${groupActive(group.items) ? ' is-current' : ''}`} aria-expanded={dropdown === index} aria-haspopup="true" onClick={() => setDropdown(dropdown === index ? null : index)}>
                      {t(group.label)}
                      <ChevronDownIcon />
                    </button>
                    {dropdown === index && (
                      <ul className="nav__dropdown">
                        {group.items.map((item) => (
                          <li key={item.label}>
                            <a href={item.href} aria-current={current(item.href)} onClick={() => setDropdown(null)}>
                              <span className="nav__dd-title">{t(item.label)}</span>
                              {item.description && <span className="nav__dd-desc">{t(item.description)}</span>}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <a className={`nav__trigger${route === group.href?.slice(1) ? ' is-current' : ''}`} href={group.href} aria-current={current(group.href)}>
                    {t(group.label)}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav__actions">
          <a className="nav__login" href={memberHref}>
            {memberLabel}
          </a>
          <SettingsMenu />
          <a className="btn btn--accent btn--sm nav__cta" href="#/contact">
            {t('Get in touch')}
          </a>
          <button ref={toggleRef} type="button" className="nav__toggle" aria-expanded={open} aria-controls="mobile-menu" aria-label="Menu" onClick={() => setOpen((value) => !value)}>
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" ref={menuRef} className="nav__menu" hidden={!open} data-lenis-prevent>
        <nav aria-label="Mobile">
          <ul className="nav__menu-groups">
            {NAV.map((group) => (
              <li key={group.label}>
                {group.items ? (
                  <>
                    <span className="nav__menu-heading">{t(group.label)}</span>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item.label}>
                          <a href={item.href} onClick={() => setOpen(false)}>
                            {t(item.label)}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a className="nav__menu-top" href={group.href} onClick={() => setOpen(false)}>
                    {t(group.label)}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <SettingsPanel />
        <div className="nav__menu-foot">
          <a className="btn btn--outline" href={memberHref} onClick={() => setOpen(false)}>
            {memberLabel}
          </a>
          <a className="btn btn--accent" href="#/contact" onClick={() => setOpen(false)}>
            {t('Get in touch')}
          </a>
        </div>
      </div>
    </header>
  )
}
