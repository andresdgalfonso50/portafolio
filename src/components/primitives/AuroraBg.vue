<template>
  <div class="aurora-wrapper" :class="wrapperClass">
    <!-- Blobs -->
    <div
      v-if="variant === 'hero' || variant === 'mixed'"
      class="aurora-blob aurora-blob--violet"
      style="width: 600px; height: 600px; top: -200px; left: -100px; opacity: 0.4;"
    ></div>
    <div
      v-if="variant === 'hero' || variant === 'mixed'"
      class="aurora-blob aurora-blob--blue"
      style="width: 500px; height: 500px; top: 100px; right: -100px; opacity: 0.35;"
    ></div>
    <div
      v-if="variant === 'dark' || variant === 'mixed'"
      class="aurora-blob aurora-blob--violet"
      style="width: 700px; height: 700px; top: -300px; left: 50%; transform: translateX(-50%); opacity: 0.5;"
    ></div>
    <div
      v-if="variant === 'dark'"
      class="aurora-blob aurora-blob--blue"
      style="width: 500px; height: 500px; bottom: -200px; right: 10%; opacity: 0.4;"
    ></div>
    <div
      v-if="variant === 'dark'"
      class="aurora-blob aurora-blob--emerald"
      style="width: 400px; height: 400px; bottom: -100px; left: 5%; opacity: 0.25;"
    ></div>
    <div
      v-if="variant === 'subtle'"
      class="aurora-blob aurora-blob--blue"
      style="width: 400px; height: 400px; top: -150px; right: -100px; opacity: 0.2;"
    ></div>

    <!-- Grid pattern overlay (subtle) -->
    <div
      v-if="showGrid"
      class="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none"
      :class="gridZIndex"
    ></div>

    <!-- Content -->
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'hero',
    validator: (v) => ['hero', 'dark', 'subtle', 'mixed'].includes(v)
  },
  showGrid: {
    type: Boolean,
    default: false
  }
})

const wrapperClass = computed(() => {
  return {
    'bg-white': props.variant === 'hero' || props.variant === 'subtle' || props.variant === 'mixed',
    'bg-slate-950 text-white': props.variant === 'dark'
  }
})

const gridZIndex = computed(() => '-z-10')
</script>
