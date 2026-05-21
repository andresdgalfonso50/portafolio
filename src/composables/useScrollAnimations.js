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
      observer.observe(el)
    })
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