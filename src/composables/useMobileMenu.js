import { ref } from 'vue'

export function useMobileMenu() {
  const mobileMenuOpen = ref(false)

  function toggleMobileMenu() {
    mobileMenuOpen.value = !mobileMenuOpen.value
  }

  function closeMobileMenu() {
    mobileMenuOpen.value = false
  }

  return {
    mobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu
  }
}
