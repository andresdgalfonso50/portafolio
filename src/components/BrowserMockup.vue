<template>
  <div class="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-200">
    <!-- Barra de navegación macOS/Safari -->
    <div class="h-10 bg-slate-50 border-b border-slate-200 flex items-center px-4 gap-2">
      <!-- Botones de ventana -->
      <div class="w-3 h-3 rounded-full bg-rose-400"></div>
      <div class="w-3 h-3 rounded-full bg-amber-400"></div>
      <div class="w-3 h-3 rounded-full bg-emerald-400"></div>
      
      <!-- Barra de URL simulada -->
      <div class="flex-1 mx-4">
        <div class="h-5 bg-slate-100 rounded-md flex items-center px-3 gap-2">
          <svg class="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
          </svg>
          <span class="text-[10px] text-slate-400 truncate">{{ url }}</span>
        </div>
      </div>
    </div>
    
    <!-- Contenido de la pantalla -->
    <img 
      :src="src" 
      :alt="alt" 
      class="w-full h-auto object-cover object-top"
      loading="lazy"
    />
  </div>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: 'Web screenshot'
  },
  url: {
    type: String,
    default: 'app.continentalassist.com'
  }
})
</script>

<style scoped>
/* Sombra premium para el contenedor */
.w-full.max-w-5xl {
  box-shadow: 
    0 4px 6px -1px rgba(0, 0, 0, 0.05),
    0 10px 15px -3px rgba(0, 0, 0, 0.08),
    0 20px 25px -5px rgba(0, 0, 0, 0.05);
}
</style>
