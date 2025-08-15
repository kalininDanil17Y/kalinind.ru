import { onMounted, onUnmounted } from 'vue'

export function useScrollAnimations() {
  let observer: IntersectionObserver | null = null

  const initScrollAnimations = () => {
    // Create intersection observer for scroll animations
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px',
      },
    )

    // Observe all elements with the animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll')
    animatedElements.forEach((el) => {
      if (observer) {
        observer.observe(el)
      }
    })
  }

  onMounted(() => {
    // Delay initialization to ensure DOM is ready
    setTimeout(initScrollAnimations, 100)
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    initScrollAnimations,
  }
}
