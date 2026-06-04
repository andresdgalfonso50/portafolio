<template>
  <nav class="nav" aria-label="Navegación principal">
    <div class="container nav-inner">
      <router-link to="/" class="nav-logo">
        <img src="/assets/images/logos/logo-navbar.svg" alt="Logo Yeison Alfonso" width="160" height="40">
      </router-link>
      <ul class="nav-links">
        <li><router-link to="/" :class="{ active: $route.path === '/' }">Home</router-link></li>
        <li><router-link to="/app" :class="{ active: $route.path.startsWith('/app') && $route.path !== '/app-web' }">App</router-link></li>
        <li><router-link to="/ecommerce" :class="{ active: $route.path === '/ecommerce' }">E-commerce</router-link></li>
        <li><router-link to="/app-web" :class="{ active: $route.path === '/app-web' }">App Web</router-link></li>
        <li><router-link to="/sobre-mi" :class="{ active: $route.path === '/sobre-mi' }">Sobre mí</router-link></li>
        <li><router-link to="/contacto" :class="{ active: $route.path === '/contacto' }">Contacto</router-link></li>
      </ul>
      <button class="nav-toggle" :class="{ open: mobileMenuOpen }" :aria-expanded="mobileMenuOpen.toString()" aria-controls="mobile-menu" @click="toggleMobileMenu" aria-label="Abrir menú de navegación">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useMobileMenu } from '@/composables/useMobileMenu'

const route = useRoute()
const { mobileMenuOpen, toggleMobileMenu } = useMobileMenu()
</script>
