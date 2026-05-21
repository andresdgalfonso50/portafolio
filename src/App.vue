<template>
  <div id="app">
    <a href="#main-content" class="skip-to-content">Saltar al contenido</a>
    <ProgressBar />
    <NavBar />
    <MobileMenu />
    <main id="main-content">
      <router-view />
    </main>
    <Footer />
    <BackToTop />
  </div>
</template>

<script setup>
import ProgressBar from './components/ProgressBar.vue'
import NavBar from './components/NavBar.vue'
import MobileMenu from './components/MobileMenu.vue'
import Footer from './components/Footer.vue'
import BackToTop from './components/BackToTop.vue'
</script>
