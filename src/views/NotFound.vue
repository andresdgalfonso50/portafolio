<template>
  <AuroraBg variant="dark" class="min-h-screen flex items-center justify-center px-6">
    <div class="text-center max-w-2xl mx-auto relative z-10">
      <span class="inline-block mb-6 px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white/80 text-xs font-bold uppercase tracking-widest rounded-full border border-white/20">
        Error 404
      </span>
      <h1 class="font-display font-extrabold tracking-tighter leading-[0.85] mb-6">
        <span class="block text-[clamp(7rem,18vw,12rem)] text-gradient-mixed">404</span>
      </h1>
      <p class="text-2xl md:text-3xl text-white font-bold mb-4">
        Esta ruta no lleva a ningún
        <span class="font-light italic text-blue-300">producto</span>.
      </p>
      <p class="text-lg text-slate-300 mb-10 max-w-lg mx-auto leading-relaxed">
        La página que buscas no existe o se movió. Te ayudo a encontrar el camino de vuelta.
      </p>
      <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
        <router-link
          to="/"
          class="inline-flex items-center gap-2 px-8 py-4 bg-violet-600 text-white font-semibold rounded-full shadow-glow-violet-lg hover:shadow-glow-violet hover:bg-violet-500 hover:scale-[1.02] transition-all duration-200"
        >
          <ArrowLeft :size="18" />
          Volver al inicio
        </router-link>
        <router-link
          to="/contacto"
          class="inline-flex items-center gap-3 px-6 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 hover:scale-[1.02] transition-all duration-200"
        >
          Reportar error
        </router-link>
      </div>
    </div>
  </AuroraBg>
</template>

<script setup>
import { ArrowLeft } from 'lucide-vue-next'
import AuroraBg from '@/components/primitives/AuroraBg.vue'
</script>
