import { ref } from 'vue'

// Singleton state — shared across all components that call useMobileMenu().
// Without this, NavBar and MobileMenu would each create their own ref(false)
// and the menu would never open.
const mobileMenuOpen = ref(false)

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

function closeMobileMenu() {
  mobileMenuOpen.value = false
}

export function useMobileMenu() {
  return {
    mobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu
  }
}
