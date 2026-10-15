import { setTheme, useTheme } from '../hooks/useTheme'

export function ThemeToggle() {
  const theme = useTheme()
  return (
    <div className="theme-toggle" role="group" aria-label="Theme">
      {(['light', 'dark'] as const).map((value) => (
        <button key={value} type="button" className={theme === value ? 'is-active' : ''} aria-pressed={theme === value} onClick={() => setTheme(value)}>
          {value === 'light' ? 'Light' : 'Dark'}
        </button>
      ))}
    </div>
  )
}
