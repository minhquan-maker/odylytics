import './App.css'
import { Blog } from './pages/Blog'
import { Admin } from './pages/Admin'
import { Legal } from './pages/Legal'
import { Login } from './pages/Login'
import { NotFound } from './pages/NotFound'
import { TeamPage } from './pages/TeamPage'
import { TeamProfile } from './pages/TeamProfile'
import { COOKIES, PRIVACY, TERMS } from './data/legal'
import { useUi } from './hooks/useContent'
import { useRoute } from './hooks/useRoute'
import { useReveal } from './hooks/useReveal'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { useZoneFade } from './hooks/useZoneFade'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'
import { Faq } from './sections/Faq'
import { Hero } from './sections/Hero'
import { LogoStrip } from './sections/LogoStrip'
import { Mission } from './sections/Mission'
import { News } from './sections/News'
import { Nav } from './sections/Nav'
import { Impact } from './sections/Impact'
import { Partners } from './sections/Partners'
import { Showcase } from './sections/Showcase'
import { Recognition } from './sections/Recognition'
import { TeamTeaser } from './sections/TeamTeaser'
import { Testimonials } from './sections/Testimonials'

function App() {
  const route = useRoute()
  const ui = useUi()
  useReveal(route)
  useSmoothScroll()
  useZoneFade(route)

  return (
    <>
      <a className="skip-link" href="#main">
        {ui.skip}
      </a>
      <Nav />
      <main id="main">
        {route === 'blog' && <Blog />}
        {route === 'privacy' && <Legal doc={PRIVACY} />}
        {route === 'terms' && <Legal doc={TERMS} />}
        {route === 'cookies' && <Legal doc={COOKIES} />}
        {route === 'team' && <TeamPage />}
        {route.startsWith('profile:') && <TeamProfile slug={route.slice(8)} />}
        {route === 'login' && <Login />}
        {route === 'admin' && <Admin />}
        {route === 'notfound' && <NotFound />}
        {route === 'home' && (
          <>
            <Hero />
            <Impact />
            <Partners />
            <Mission />
            <Showcase />
            <LogoStrip />
            <Recognition />
            <Testimonials />
            <TeamTeaser />
            <News />
            <Faq />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </>
  )
}

export default App
