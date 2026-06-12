<template>
  <div class="relative w-full max-w-2xl mx-auto">
    <img 
      :src="src" 
      :alt="alt" 
      class="w-full rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-borderline/50 object-cover"
      :class="imageClass"
      fetchpriority="high"
      loading="eager"
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
    default: 'Hero image'
  },
  imageClass: {
    type: String,
    default: 'aspect-[4/3]'
  }
})
</script>

<style scoped>
/* Perspectiva para el efecto 3D */
.perspective-\[1000px\] {
  perspective: 1000px;
}

/* Transformaciones 3D en hover */
.rotate-y-\[-8deg\] {
  transform: rotateY(-8deg) rotateX(4deg);
}

.rotate-y-0 {
  transform: rotateY(0) rotateX(0);
}

.hover\:rotate-y-0:hover {
  transform: rotateY(0) rotateX(0);
}

.hover\:rotate-x-0:hover {
  transform: rotateX(0);
}

.hover\:scale-100:hover {
  transform: scale(1);
}

/* Transición suave */
.relative.transform {
  transform-style: preserve-3d;
}
</style>
