import { useEffect, useRef, useState } from 'react'
import { LANGUAGES, setLang, useLang, useT } from '../lib/lang'
import type { Lang } from '../lib/lang'
import { setReduceMotion, useReducedMotion } from '../lib/motion'
import { setThemePreference, useThemePreference } from '../hooks/useTheme'
import type { ThemePref } from '../hooks/useTheme'
import { GearIcon } from './Icons'

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

/** Language, theme and motion controls. Used inside the popover and in the mobile menu. */
export function SettingsPanel() {
  const t = useT()
  const lang = useLang()
  const theme = useThemePreference()
  const reduced = useReducedMotion()

  return (
    <div className="settings__panel">
      <div className="settings__group">
        <label className="settings__label" htmlFor="settings-lang">
          {t('Language')}
        </label>
        <select id="settings-lang" className="settings__select" value={lang} onChange={(event) => setLang(event.target.value as Lang)}>
          {LANGUAGES.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
        {lang !== 'en' && <p className="settings__hint">{t('Policies and long articles stay in English.')}</p>}
      </div>

      <div className="settings__group">
        <span className="settings__label">{t('Theme')}</span>
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
      </div>

      <div className="settings__group">
        <span className="settings__label">
          {t('Accessibility')} · {t('Reduce motion')}
        </span>
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
