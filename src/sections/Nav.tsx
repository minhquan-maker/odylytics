import { useEffect, useRef, useState } from 'react'
import { Button } from '../components/Button'
import { ChevronDownIcon, CloseIcon, MenuIcon } from '../components/Icons'
import { SettingsMenu, SettingsPanel } from '../components/SettingsMenu'
import { BRAND } from '../data/content'
import { useContent, useUi } from '../hooks/useContent'
import { lockScroll, unlockScroll } from '../hooks/useSmoothScroll'
import { useAuth } from '../lib/auth'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [dropdown, setDropdown] = useState<number | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const linksRef = useRef<HTMLElement>(null)
  const { NAV } = useContent()
  const ui = useUi()
  const { member } = useAuth()
  const memberHref = member ? '#/admin' : '#/login'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
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
    menuRef.current?.querySelector<HTMLAnchorElement>('a')?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const desktop = window.matchMedia('(min-width: 821px)')
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

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <div className="nav__inner">
        <a className="nav__brand" href="#home" aria-label="Odylytics, back to top">
          {/* The zone morph (see index.css / useZoneFade) crossfades the white wordmark
              to the black-text one — both files directly, independent of the theme. */}
          <img className="nav__brand-img" src={BRAND.wordmarkDark} alt="" width="1826" height="565" />
          <img className="nav__brand-img nav__brand-img--light" src={BRAND.wordmark} alt="" width="1826" height="565" />
        </a>

        <nav className="nav__links" aria-label="Primary" ref={linksRef}>
          <ul>
            {NAV.map((group, index) => (
              <li key={group.label} className="nav__item" onMouseEnter={() => group.items && setDropdown(index)} onMouseLeave={() => setDropdown(null)}>
                {group.items ? (
                  <>
                    <button type="button" className="nav__trigger" aria-expanded={dropdown === index} aria-haspopup="true" onClick={() => setDropdown(dropdown === index ? null : index)}>
                      {group.label}
                      <ChevronDownIcon />
                    </button>
                    {dropdown === index && (
                      <ul className="nav__dropdown">
                        {group.items.map((item) => (
                          <li key={item.label}>
                            <a href={item.href} onClick={() => setDropdown(null)}>
                              <span className="nav__dd-title">{item.label}</span>
                              {item.description && <span className="nav__dd-desc">{item.description}</span>}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <a href={group.href}>{group.label}</a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav__actions">
          <a className="nav__member" href={memberHref}>
            {member ? ui.dashboard : ui.memberLogin}
          </a>
          <SettingsMenu />
          <Button href="#contact" variant="primary" size="sm" arrow={false} className="nav__cta">
            {ui.getInTouch}
          </Button>
          <button
            ref={toggleRef}
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={ui.menu}
            onClick={() => setOpen((value) => !value)}
          >
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
                    <span className="nav__menu-heading">{group.label}</span>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item.label}>
                          <a href={item.href} onClick={() => setOpen(false)}>
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a className="nav__menu-top" href={group.href} onClick={() => setOpen(false)}>
                    {group.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <SettingsPanel />
        <a className="nav__menu-member" href={memberHref} onClick={() => setOpen(false)}>
          {member ? ui.dashboard : ui.memberLogin}
        </a>
        <Button href="#contact" variant="primary" arrow={false} onClick={() => setOpen(false)}>
          {ui.getInTouch}
        </Button>
      </div>
    </header>
  )
}
