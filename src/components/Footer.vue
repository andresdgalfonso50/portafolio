<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
<router-link to="/" class="footer-logo">
              <img src="/assets/images/logos/logo-footer.svg" alt="Logo Yeison Alfonso" width="200" height="60">
            </router-link>
          <p class="footer-tagline">Product Designer creando experiencias digitales con impacto medible.</p>
          <div class="footer-social">
            <a href="https://www.linkedin.com/in/yeison-alfonso-product-designer" target="_blank" rel="noopener" aria-label="LinkedIn">
              <Linkedin :size="20" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter">
              <Twitter :size="20" />
            </a>
            <a href="https://dribbble.com" target="_blank" rel="noopener" aria-label="Dribbble">
              <Dribbble :size="20" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener" aria-label="GitHub">
              <Github :size="20" />
            </a>
          </div>
        </div>
        <div class="footer-links">
          <h4>Navegación</h4>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/ecommerce">E-commerce</router-link></li>
            <li><router-link to="/app">App</router-link></li>
            <li><router-link to="/xentral-health">Xentral Health</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/contacto">Contacto</router-link></li>
          </ul>
        </div>
        <div class="footer-contact">
          <h4>Contacto</h4>
          <p><Mail :size="16" /> andresdgalfonso@gmail.com</p>
          <p><Phone :size="16" /> +57 312 567 3243</p>
          <p><MapPin :size="16" /> Bogotá, Colombia</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2025 Yeison Alfonso. Todos los derechos reservados.</p>
        <p>Diseñado y desarrollado con Vue 3 + Vite</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Linkedin, Twitter, Dribbble, Github, Mail, Phone, MapPin } from 'lucide-vue-next'
</script>