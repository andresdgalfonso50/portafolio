<template>
  <div class="relative mx-auto w-full max-w-[280px] md:max-w-[320px]">
    <!-- Marco del iPhone -->
    <div 
      class="relative rounded-[2.5rem] border-[8px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden aspect-[9/19.5]"
      :class="[
        ringClass,
        'ring-1 ring-slate-900/5'
      ]"
    >
      <!-- Dynamic Island / Notch -->
      <div class="absolute top-0 inset-x-0 h-6 bg-slate-900 rounded-b-3xl w-1/2 mx-auto z-20"></div>
      
      <!-- Pantalla -->
      <img 
        :src="src" 
        :alt="alt" 
        class="w-full h-full object-cover object-top"
        loading="lazy"
      />
    </div>
    
    <!-- Sombra difusa inferior -->
    <div class="absolute -bottom-8 inset-x-10 h-10 bg-slate-400/30 blur-2xl rounded-full -z-10"></div>
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
    default: 'App screenshot'
  },
  ringClass: {
    type: String,
    default: '' // 'ring-titanium-natural' para color titanio natural
  }
})
</script>

<style scoped>
/* Efecto de brillo en el borde del marco */
.relative.rounded-\[2\.5rem\] {
  box-shadow: 
    0 0 0 1px rgba(255, 255, 255, 0.1) inset,
    0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Efecto de vidrio en la pantalla */
img {
  filter: saturate(0.95) contrast(1.02);
}
</style>
