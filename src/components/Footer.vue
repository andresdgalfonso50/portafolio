<template>
  <footer class="bg-midnight text-slate-400 py-16">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <!-- Brand -->
        <div class="flex flex-col gap-6 md:col-span-1">
          <router-link to="/" class="inline-block">
            <img src="/assets/images/logos/logo-footer.svg" alt="Yeison Alfonso" class="h-6 md:h-8 w-auto" width="230" height="40" />
          </router-link>
          <div class="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/yeison-alfonso-product-designer" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="hover:text-white transition-colors">
              <Linkedin :size="20" />
            </a>
          </div>
        </div>

        <!-- Navegación -->
        <div class="flex flex-col gap-4">
          <h4 class="text-white font-bold text-xs uppercase tracking-widest">Navegación</h4>
          <div class="flex flex-col gap-2">
            <router-link to="/" class="text-sm hover:text-white transition-colors">Home</router-link>
            <router-link to="/sobre-mi" class="text-sm hover:text-white transition-colors">Sobre mí</router-link>
            <router-link to="/contacto" class="text-sm hover:text-white transition-colors">Contacto</router-link>
          </div>
        </div>

        <!-- Contacto -->
        <div class="flex flex-col gap-4">
          <h4 class="text-white font-bold text-xs uppercase tracking-widest">Contacto</h4>
          <div class="flex flex-col gap-3">
            <a href="mailto:andresdgalfonso@gmail.com" class="flex items-center gap-3 group hover:text-white transition-colors">
              <Mail :size="16" class="text-body group-hover:text-white transition-colors shrink-0" />
              <span class="text-sm">andresdgalfonso@gmail.com</span>
            </a>
            <a href="tel:+573125673243" class="flex items-center gap-3 group hover:text-white transition-colors">
              <Phone :size="16" class="text-body group-hover:text-white transition-colors shrink-0" />
              <span class="text-sm">+57 312 567 3243</span>
            </a>
            <div class="flex items-center gap-3">
              <MapPin :size="16" class="text-body shrink-0" />
              <span class="text-sm">Bogotá, Colombia</span>
            </div>
          </div>
        </div>

        <!-- Impacto + Stack (nuevo bloque con propuesta de valor) -->
        <div class="flex flex-col gap-4">
          <h4 class="text-white font-bold text-xs uppercase tracking-widest">Impacto</h4>
          <ul class="flex flex-col gap-2 text-sm">
            <li class="flex items-center gap-2">
              <span class="text-primary">›</span>
              <span><strong class="text-white">+4x</strong> ingresos generados</span>
            </li>
            <li class="flex items-center gap-2">
              <span class="text-primary">›</span>
              <span><strong class="text-white">0.1% → 12%</strong> retención</span>
            </li>
            <li class="flex items-center gap-2">
              <span class="text-primary">›</span>
              <span><strong class="text-white">2 apps</strong> en producción</span>
            </li>
            <li class="flex items-center gap-2">
              <span class="text-primary">›</span>
              <span><strong class="text-white">+6K</strong> usuarios impactados</span>
            </li>
          </ul>
          <h4 class="text-white font-bold text-xs uppercase tracking-widest mt-2">Stack</h4>
          <p class="text-xs leading-relaxed">E-commerce · Mobile Apps · UX Strategy · CRO · Design Systems</p>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-xs text-body">© {{ new Date().getFullYear() }} Yeison Alfonso. Disponible desde abril 2026.</p>
        <div class="flex items-center gap-6 text-xs text-body">
          <span class="hidden md:inline">Diseñando productos que generan resultados.</span>
          <button @click="scrollToTop" class="p-2 hover:text-white transition-colors" aria-label="Volver arriba">
            <ChevronUp :size="20" />
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Linkedin, Mail, Phone, MapPin, ChevronUp } from 'lucide-vue-next'

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>