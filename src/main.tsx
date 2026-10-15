import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { initLang } from './lib/lang'
import { initMotion } from './lib/motion'
import { initTheme } from './hooks/useTheme'


initLang()
initMotion()
initTheme()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
