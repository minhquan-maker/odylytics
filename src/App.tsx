import './App.css'
import { Consent } from './layout/Consent'
import { ErrorBoundary } from './layout/ErrorBoundary'
import { OfflineScreen } from './layout/OfflineScreen'
import { Footer } from './layout/Footer'
import { Nav } from './layout/Nav'
import { PageTransition } from './layout/PageTransition'
import { useRoute } from './hooks/useRoute'
import { useReveal } from './hooks/useReveal'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { Admin } from './pages/Admin'
import { Blog } from './pages/Blog'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Legal, LegalHub } from './pages/Legal'
import { Login } from './pages/Login'
import { NotFound } from './pages/NotFound'
import { Product } from './pages/Product'
import { ResearchArticle, ResearchOngoing, ResearchOverview, ResearchPublications } from './pages/Research'
import { CoFounders, PartnersPage, Resources } from './pages/Team'
import { TeamProfile } from './pages/TeamProfile'

function Page({ route: fullRoute }: { route: string }) {
  const [route, query = ''] = fullRoute.split('?')
  switch (route) {
    case '/':
      return <Home />
    case '/product/climate-tech':
      return <Product id="climate-tech" />
    case '/product/accessibility':
      return <Product id="accessibility" />
    case '/product/incoming':
      return <Product id="incoming" />
    case '/research':
      return <ResearchOverview />
    case '/research/ongoing':
      return <ResearchOngoing />
    case '/research/publications':
      return <ResearchPublications key={query} query={query} />
    case '/team':
    case '/team/co-founders':
      return <CoFounders />
    case '/team/partners':
      return <PartnersPage />
    case '/team/resources':
      return <Resources />
    case '/blog':
      return <Blog />
    case '/contact':
      return <Contact />
    case '/login':
      return <Login />
    case '/admin':
      return <Admin />
    case '/legal':
      return <LegalHub />
  }
  const article = /^\/research\/([a-z0-9-]+)$/.exec(route)
  if (article) return <ResearchArticle slug={article[1]} />
  const profile = /^\/team\/([a-z0-9-]+)$/.exec(route)
  if (profile) return <TeamProfile slug={profile[1]} />
  const legal = /^\/legal\/([a-z0-9-]+)$/.exec(route)
  if (legal) return <Legal slug={legal[1]} />
  return <NotFound />
}

function App() {
  const route = useRoute()
  useReveal(route)
  useSmoothScroll()

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav route={route} />
      <main id="main">
        <ErrorBoundary key={route}>
          <Page route={route} />
        </ErrorBoundary>
      </main>
      <Footer />
      <Consent />
      <OfflineScreen />
      <PageTransition />
    </>
  )
}

export default App
