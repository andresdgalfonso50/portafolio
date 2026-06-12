<template>
  <div
    class="aurora-wrapper relative overflow-hidden"
    :class="wrapperClass"
  >
    <!-- Hero: ultra-subtle atmospheric texture (Apple-style — felt, not seen) -->
    <template v-if="variant === 'hero' || variant === 'mixed'">
      <div
        class="absolute inset-0 pointer-events-none"
        :style="heroOverlayStyle"
      ></div>
    </template>

    <!-- Dark variant: deep midnight with subtle system blue atmospheric glow -->
    <template v-if="variant === 'dark'">
      <div
        class="absolute pointer-events-none"
        style="width: 700px; height: 700px; top: -300px; left: 50%; transform: translateX(-50%); background: radial-gradient(circle, rgba(0,113,227,0.18), transparent 50%);"
      ></div>
      <div
        class="absolute pointer-events-none"
        style="width: 500px; height: 500px; bottom: -200px; right: 10%; background: radial-gradient(circle, rgba(0,113,227,0.14), transparent 50%);"
      ></div>
    </template>

    <!-- Subtle: minimal system blue hint -->
    <template v-if="variant === 'subtle'">
      <div
        class="absolute inset-0 pointer-events-none"
        :style="subtleOverlayStyle"
      ></div>
    </template>

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
    'bg-midnight text-white': props.variant === 'dark'
  }
})

// Apple-style: ultra-subtle radial gradients, max 5-7% opacity (overlay, not background)
const heroOverlayStyle = computed(() => ({
  background: 'radial-gradient(circle at 20% 20%, rgba(0,24,76,0.05), transparent 40%), radial-gradient(circle at 80% 30%, rgba(0,113,227,0.06), transparent 35%)'
}))

const subtleOverlayStyle = computed(() => ({
  background: 'radial-gradient(circle at 80% 20%, rgba(0,113,227,0.06), transparent 50%)'
}))

const gridZIndex = computed(() => '-z-10')
</script>
