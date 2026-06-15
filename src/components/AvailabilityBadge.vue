<template>
  <span class="availability-badge" :class="`availability-badge--${variant}`">
    <span class="availability-dot" aria-hidden="true"></span>
    <span class="availability-text">{{ text }}</span>
  </span>
</template>

<script setup>
const props = defineProps({
  text: { type: String, default: 'Disponible para nuevos proyectos' },
  variant: {
    type: String,
    default: 'light',
    validator: (v) => ['light', 'dark'].includes(v)
  }
})
</script>

<style scoped>
.availability-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-family: var(--font-display, 'Inter', system-ui, sans-serif);
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: 1;
  border: 1px solid transparent;
  transition: all 0.3s ease;
}

.availability-badge--light {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: var(--color-midnight, #1d1d1f);
  border-color: rgba(0, 0, 0, 0.06);
}

.availability-badge--dark {
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border-color: rgba(255, 255, 255, 0.12);
}

.availability-dot {
  position: relative;
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.6);
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.6); }
  70% { box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
  100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
}

@media (prefers-reduced-motion: reduce) {
  .availability-dot { animation: none; }
}
</style>
