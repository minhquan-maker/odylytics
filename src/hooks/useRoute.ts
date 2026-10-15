import { useEffect, useSyncExternalStore } from 'react'

export type Route = `profile:${string}` | 'home' | 'blog' | 'privacy' | 'terms' | 'login' | 'admin' | 'team' | 'cookies' | 'notfound'

function subscribe(callback: () => void) {
  window.addEventListener('hashchange', callback)
  return () => window.removeEventListener('hashchange', callback)
}

/** The app only lives at `/`; any other path reached the SPA through the host's 404 fallback. */
export function isUnknownPath() {
  const path = window.location.pathname
  return path !== '/' && path !== '/index.html'
}

function getRoute(): Route {
  if (isUnknownPath()) return 'notfound'
  const hash = window.location.hash
  if (hash === '#/blog') return 'blog'
  if (hash === '#/privacy') return 'privacy'
  if (hash === '#/terms') return 'terms'
  if (hash === '#/team') return 'team'
  const profile = /^#\/team\/([a-z0-9-]+)$/.exec(hash)
  if (profile) return `profile:${profile[1]}`
  if (hash === '#/cookies') return 'cookies'
  if (hash === '#/login') return 'login'
  if (hash === '#/admin') return 'admin'
  if (hash.startsWith('#/')) return 'notfound'
  return 'home'
}

/** Tiny hash router: `#/blog`, `#/privacy`, `#/terms`, `#/login`, `#/admin`; unknown `#/…` routes are 'notfound', every other hash is a home-page anchor. */
export function useRoute(): Route {
  const route = useSyncExternalStore(subscribe, getRoute, () => 'home' as Route)

  useEffect(() => {
    const hash = window.location.hash
    const target = route === 'home' && hash.length > 1 ? document.querySelector<HTMLElement>(hash) : null
    if (target) target.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [route])

  return route
}
