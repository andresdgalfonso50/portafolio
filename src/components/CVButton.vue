<template>
  <a
    :href="href"
    :download="download"
    class="cv-button"
    :class="[`cv-button--${variant}`, { 'cv-button--block': block }]"
    :aria-label="ariaLabel || label"
  >
    <Download :size="iconSize" :stroke-width="2" aria-hidden="true" />
    <span>{{ label }}</span>
  </a>
</template>

<script setup>
import { Download } from 'lucide-vue-next'

const props = defineProps({
  href: { type: String, default: '/assets/cv-yeison-alfonso.pdf' },
  download: { type: String, default: 'Yeison-Alfonso-Product-Designer.pdf' },
  label: { type: String, default: 'Descargar CV' },
  variant: {
    type: String,
    default: 'secondary',
    validator: (v) => ['primary', 'secondary', 'ghost'].includes(v)
  },
  block: { type: Boolean, default: false },
  iconSize: { type: Number, default: 18 },
  ariaLabel: { type: String, default: '' }
})
</script>

<style scoped>
.cv-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  font-family: var(--font-display, 'Inter', system-ui, sans-serif);
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1;
  border-radius: 9999px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  white-space: nowrap;
}

.cv-button--block {
  width: 100%;
  justify-content: center;
}

.cv-button--primary {
  background: var(--color-midnight, #1d1d1f);
  color: #fff;
  border: 1px solid var(--color-midnight, #1d1d1f);
}
.cv-button--primary:hover {
  background: var(--color-primary, #0071e3);
  border-color: var(--color-primary, #0071e3);
  transform: translateY(-1px);
}

.cv-button--secondary {
  background: #fff;
  color: var(--color-midnight, #1d1d1f);
  border: 1px solid var(--color-borderline, #e5e5e5);
}
.cv-button--secondary:hover {
  border-color: var(--color-midnight, #1d1d1f);
  transform: translateY(-1px);
}

.cv-button--ghost {
  background: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.3);
}
.cv-button--ghost:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.6);
}

.cv-button:focus-visible {
  outline: 2px solid var(--color-primary, #0071e3);
  outline-offset: 2px;
}
</style>
