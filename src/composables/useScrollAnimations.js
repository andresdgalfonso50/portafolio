import { onMounted, onUnmounted } from 'vue'

export function useScrollAnimations() {
  let observer

  onMounted(() => {
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
      // Si el elemento ya está en el viewport al cargar, hacerlo visible inmediatamente
      const rect = el.getBoundingClientRect()
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0
      if (isInViewport) {
        el.classList.add('visible')
      } else {
        observer.observe(el)
      }
    })

    // Fallback: si después de 2s algo sigue invisible, forzarlo visible
    setTimeout(() => {
      document.querySelectorAll('.fade-in:not(.visible)').forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('visible')
        }
      })
    }, 2000)
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    initScrollAnimations: () => {
      document.querySelectorAll('.fade-in').forEach((el) => {
        el.classList.add('visible')
      })
    }
  }
}