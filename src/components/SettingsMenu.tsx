import { useEffect, useRef, useState } from 'react'
import { LANGUAGES, setLang, useLang, useT } from '../lib/lang'
import type { Lang } from '../lib/lang'
import { setReduceMotion, useReducedMotion } from '../lib/motion'
import { setThemePreference, useThemePreference } from '../hooks/useTheme'
import type { ThemePref } from '../hooks/useTheme'
import { CheckIcon, ChevronDownIcon, GearIcon } from './Icons'

function Segmented<T extends string>({ label, value, options, onChange }: { label: string; value: T; options: { id: T; text: string }[]; onChange: (value: T) => void }) {
  return (
    <div className="segmented" role="group" aria-label={label}>
      {options.map((option) => (
        <button key={option.id} type="button" className={value === option.id ? 'is-active' : ''} aria-pressed={value === option.id} onClick={() => onChange(option.id)}>
          {option.text}
        </button>
      ))}
    </div>
  )
}

function LanguageList() {
  const t = useT()
  const lang = useLang()
  const [open, setOpen] = useState(false)
  const current = LANGUAGES.find((item) => item.id === lang) ?? LANGUAGES[0]

  return (
    <div className="lang">
      <button type="button" className="lang__button" aria-expanded={open} aria-haspopup="listbox" aria-label={t('Language')} onClick={() => setOpen((value) => !value)}>
        <span>{current.label}</span>
        <ChevronDownIcon />
      </button>
      {open && (
        <ul className="lang__list" role="listbox" aria-label={t('Language')}>
          {LANGUAGES.map((item) => (
            <li key={item.id} role="option" aria-selected={item.id === lang}>
              <button
                type="button"
                className={item.id === lang ? 'is-active' : ''}
                onClick={() => {
                  setLang(item.id as Lang)
                  setOpen(false)
                }}
              >
                <span>{item.label}</span>
                {item.id === lang && <CheckIcon />}
              </button>
            </li>
          ))}
        </ul>
      )}
      {lang !== 'en' && <p className="settings__hint">{t('Policies and long articles stay in English.')}</p>}
    </div>
  )
}

/** Theme, language and motion controls, in that order. Used inside the popover and in the mobile menu. */
export function SettingsPanel() {
  const t = useT()
  const theme = useThemePreference()
  const reduced = useReducedMotion()

  return (
    <div className="settings__panel">
      <section className="settings__group" aria-label={t('Theme')}>
        <h3 className="settings__label">{t('Theme')}</h3>
        <Segmented<ThemePref>
          label={t('Theme')}
          value={theme}
          onChange={setThemePreference}
          options={[
            { id: 'light', text: t('Light') },
            { id: 'dark', text: t('Dark') },
            { id: 'system', text: t('System') },
          ]}
        />
      </section>

      <section className="settings__group" aria-label={t('Language')}>
        <h3 className="settings__label">{t('Language')}</h3>
        <LanguageList />
      </section>

      <section className="settings__group" aria-label={t('Accessibility')}>
        <h3 className="settings__label">{t('Accessibility')}</h3>
        <div className="settings__row">
          <span className="settings__name">{t('Reduce motion')}</span>
          <Segmented<'yes' | 'no'>
            label={t('Reduce motion')}
            value={reduced ? 'yes' : 'no'}
            onChange={(value) => setReduceMotion(value === 'yes')}
            options={[
              { id: 'yes', text: t('Yes') },
              { id: 'no', text: t('No') },
            ]}
          />
        </div>
      </section>
    </div>
  )
}

/** Gear button in the nav that opens the settings popover. */
export function SettingsMenu() {
  const t = useT()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onPointer = (event: PointerEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)
    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className="settings" ref={ref}>
      <button type="button" className="settings__button" aria-expanded={open} aria-haspopup="dialog" aria-label={t('Settings')} onClick={() => setOpen((value) => !value)}>
        <GearIcon />
      </button>
      {open && (
        <div className="settings__pop" role="dialog" aria-label={t('Settings')}>
          <SettingsPanel />
        </div>
      )}
    </div>
  )
}
