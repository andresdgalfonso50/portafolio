<template>
  <div class="view-wrapper">
    <AuroraBg variant="hero" class="contact-page section">
      <div class="container relative z-10">
        <div class="contact-header fade-in text-center max-w-3xl mx-auto">
          <span class="label text-secondary">Contacto</span>
          <h1 class="font-display text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-midnight mb-6">
            Hablemos de tu próximo
            <span class="text-gradient-secondary">caso de éxito</span>
          </h1>
          <p class="contact-subtitle">
            +4x conversión, 12% retención global, soluciones en producción listas para escalar. ¿Cuál es el KPI que transformaremos?
          </p>
        </div>

        <section class="contact-info fade-in stagger-1 max-w-2xl mx-auto mt-12" aria-labelledby="contact-channels">
          <h2 id="contact-channels" class="sr-only">Canales de contacto directo</h2>
          <div class="contact-links">
            <a href="mailto:andresdgalfonso@gmail.com" class="contact-link">
              <div class="contact-icon">
                <Mail :size="20" />
              </div>
              <div class="contact-details">
                <span class="contact-label">Email</span>
                <span class="contact-value">andresdgalfonso@gmail.com</span>
                <span class="inline-block mt-1 px-2 py-0.5 bg-chip text-body text-[10px] font-bold uppercase tracking-widest rounded-full">Email personal</span>
              </div>
            </a>
            <a href="tel:+573125673243" class="contact-link">
              <div class="contact-icon">
                <Phone :size="20" />
              </div>
              <div class="contact-details">
                <span class="contact-label">Teléfono</span>
                <span class="contact-value">+57 312 567 3243</span>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/yeison-alfonso-product-designer" target="_blank" rel="noopener noreferrer" class="contact-link">
              <div class="contact-icon">
                <Linkedin :size="20" />
              </div>
              <div class="contact-details">
                <span class="contact-label">LinkedIn</span>
                <span class="contact-value">yeison-alfonso-product-designer</span>
              </div>
            </a>
            <div class="contact-link">
              <div class="contact-icon">
                <MapPin :size="20" />
              </div>
              <div class="contact-details">
                <span class="contact-label">Ubicación</span>
                <span class="contact-value">Bogotá, Colombia</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AuroraBg>
  </div>
</template>

<script setup>
import { Mail, Phone, Linkedin, MapPin } from 'lucide-vue-next'
import { useScrollAnimations } from '@/composables/useScrollAnimations'
import AuroraBg from '@/components/primitives/AuroraBg.vue'

useScrollAnimations()
</script>