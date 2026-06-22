import Hotjar from '@hotjar/browser'

const siteId = 6735365
const hotjarVersion = 6

export function initHotjar() {
  if (typeof window === 'undefined') return

  Hotjar.init(siteId, hotjarVersion)

  if (import.meta.env.DEV) {
    console.info(`[Hotjar] Initialized siteId=${siteId} version=${hotjarVersion}`)
  }
}

export function identifyHotjar(userId, attributes = {}) {
  if (typeof window === 'undefined') return
  Hotjar.identify(userId, attributes)
}

export function trackEvent(eventName, attributes = {}) {
  if (typeof window === 'undefined') return
  Hotjar.event(eventName, attributes)
}

export function trackPageview(path) {
  if (typeof window === 'undefined') return
  Hotjar.stateChange(path)
}
