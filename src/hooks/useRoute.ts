import { useEffect, useSyncExternalStore } from 'react'

/** Route path without the leading hash, e.g. '/', '/product/climate-tech', '/legal/privacy'. */
export type Route = string

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
  if (isUnknownPath()) return '/404'
  const hash = window.location.hash
  if (hash.startsWith('#/')) return hash.slice(1).replace(/\/+$/, '') || '/'
  return '/'
}

/** Tiny hash router: `#/product/climate-tech`, `#/legal/privacy`, … The home page is `/`; unknown routes render NotFound. */
export function useRoute(): Route {
  const route = useSyncExternalStore(subscribe, getRoute, () => '/')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [route])

  return route
}
