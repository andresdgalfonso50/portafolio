<template>
  <nav class="nav" aria-label="Navegación principal">
    <div class="container nav-inner">
      <router-link to="/" class="nav-logo" aria-label="Inicio">
        <img src="/assets/images/logos/logo-navbar.svg" alt="Logo Yeison Alfonso" width="300" height="180">
      </router-link>
      <ul class="nav-links">
        <li><router-link to="/" :class="{ active: $route.path === '/' }" :aria-current="$route.path === '/' ? 'page' : null">Home</router-link></li>
        <li><router-link to="/app" :class="{ active: $route.path === '/app' }" :aria-current="$route.path === '/app' ? 'page' : null">App</router-link></li>
        <li><router-link to="/ecommerce" :class="{ active: $route.path === '/ecommerce' }" :aria-current="$route.path === '/ecommerce' ? 'page' : null">E-commerce</router-link></li>
        <li><router-link to="/telemedicina" :class="{ active: $route.path === '/telemedicina' || $route.path === '/app-web' }" :aria-current="($route.path === '/telemedicina' || $route.path === '/app-web') ? 'page' : null">Telemedicina</router-link></li>
        <li><router-link to="/sobre-mi" :class="{ active: $route.path === '/sobre-mi' }" :aria-current="$route.path === '/sobre-mi' ? 'page' : null">Sobre mí</router-link></li>
        <li><router-link to="/contacto" :class="{ active: $route.path === '/contacto' }" :aria-current="$route.path === '/contacto' ? 'page' : null">Contacto</router-link></li>
      </ul>
      <button class="nav-toggle" :class="{ open: mobileMenuOpen }" :aria-expanded="mobileMenuOpen.toString()" aria-controls="mobile-menu" @click="toggleMobileMenu" :aria-label="mobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'">
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
