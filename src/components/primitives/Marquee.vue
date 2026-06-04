<template>
  <div class="marquee" :class="containerClass">
    <div class="marquee__track" :style="{ animationDuration: speed }">
      <!-- Render items twice for seamless loop -->
      <slot v-for="i in 2" :key="i" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  speed: {
    type: String,
    default: '40s'
  },
  containerClass: {
    type: String,
    default: ''
  }
})
</script>
