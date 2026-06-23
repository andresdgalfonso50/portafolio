import { onMounted, onUnmounted } from 'vue'

export function useScrollAnimations() {
  let observer
  const FALLBACK_MS = 4000
  const HARD_FALLBACK_MS = 8000

  function revealAll() {
    document.querySelectorAll('.fade-in:not(.visible)').forEach((el) => {
      el.classList.add('visible')
    })
  }

  onMounted(() => {
    // Respect user preference: reveal everything immediately, skip observer.
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealAll()
      return
    }

    try {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      })

      document.querySelectorAll('.fade-in').forEach((el) => {
        const rect = el.getBoundingClientRect()
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0
        if (isInViewport) {
          el.classList.add('visible')
        } else {
          observer.observe(el)
        }
      })

      // Soft fallback: if observer hasn't fired after FALLBACK_MS, reveal anything in viewport.
      setTimeout(() => {
        document.querySelectorAll('.fade-in:not(.visible)').forEach((el) => {
          const rect = el.getBoundingClientRect()
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('visible')
          }
        })
      }, FALLBACK_MS)

      // Hard fallback: if observer silently fails, reveal everything.
      setTimeout(revealAll, HARD_FALLBACK_MS)
    } catch (err) {
      // If anything goes wrong with the observer, never leave content invisible.
      revealAll()
    }
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })
}
