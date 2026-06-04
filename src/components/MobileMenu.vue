<template>
  <Teleport to="body">
    <div
      v-if="mobileMenuOpen"
      class="mobile-menu-overlay"
      @click="closeMobileMenu"
      aria-hidden="true"
    ></div>
    <div
      ref="menuRef"
      id="mobile-menu"
      class="mobile-menu"
      :class="{ open: mobileMenuOpen }"
      role="navigation"
      aria-label="Menú de navegación móvil"
      :aria-hidden="!mobileMenuOpen"
    >
      <button ref="closeButtonRef" class="mobile-menu-close" @click="closeMobileMenu" aria-label="Cerrar menú de navegación">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <nav aria-label="Menú principal">
        <router-link to="/" @click="closeMobileMenu">Home</router-link>
        <router-link to="/app" @click="closeMobileMenu">App</router-link>
        <router-link to="/ecommerce" @click="closeMobileMenu">E-commerce</router-link>
        <router-link to="/app-web" @click="closeMobileMenu">App Web</router-link>
        <router-link to="/sobre-mi" @click="closeMobileMenu">Sobre mí</router-link>
        <router-link to="/contacto" @click="closeMobileMenu">Contacto</router-link>
      </nav>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { useMobileMenu } from '@/composables/useMobileMenu'

const { mobileMenuOpen, closeMobileMenu } = useMobileMenu()
const menuRef = ref(null)
const closeButtonRef = ref(null)

function handleKeydown(e) {
  if (e.key === 'Escape' && mobileMenuOpen.value) {
    closeMobileMenu()
  }
  if (e.key === 'Tab' && mobileMenuOpen.value) {
    const focusable = menuRef.value?.querySelectorAll('button, a, input, [tabindex]:not([tabindex="-1"])')
    if (focusable?.length) {
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})

watch(mobileMenuOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
    nextTick(() => {
      closeButtonRef.value?.focus()
    })
  } else {
    document.body.style.overflow = ''
  }
})
</script>
