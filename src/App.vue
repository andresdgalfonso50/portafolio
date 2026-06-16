<template>
  <div id="app" class="app-shell">
    <a href="#main-content" class="skip-to-content">Saltar al contenido</a>
    <header>
      <NavBar />
      <MobileMenu />
    </header>
    <main id="main-content" class="app-main">
      <router-view />
    </main>
    <Footer class="app-footer" />
    <BackToTop />
    <WhatsAppButton />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import MobileMenu from './components/MobileMenu.vue'
import Footer from './components/Footer.vue'
import BackToTop from './components/BackToTop.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'
</script>
