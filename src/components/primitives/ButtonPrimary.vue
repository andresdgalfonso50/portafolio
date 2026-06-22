<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :type="tag === 'button' ? type : undefined"
    :class="['btn-primary', `btn-primary--${variant}`, `btn-primary--${size}`, { 'btn-primary--block': block, 'btn-primary--icon': $slots.icon }]"
    :aria-label="ariaLabel"
    :disabled="disabled || undefined"
  >
    <span v-if="$slots.icon" class="btn-primary__icon">
      <slot name="icon" />
    </span>
    <span class="btn-primary__label">
      <slot />
    </span>
    <span v-if="$slots.suffix" class="btn-primary__suffix">
      <slot name="suffix" />
    </span>
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: v => ['primary', 'secondary', 'accent', 'ghost', 'danger'].includes(v)
  },
  size: {
    type: String,
    default: 'md',
    validator: v => ['sm', 'md', 'lg'].includes(v)
  },
  to: { type: [String, Object], default: null },
  href: { type: String, default: null },
  type: { type: String, default: 'button' },
  block: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  ariaLabel: { type: String, default: null }
})

const tag = computed(() => {
  if (props.to) return 'router-link'
  if (props.href) return 'a'
  return 'button'
})
</script>

<style scoped>
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: var(--font-display, 'Inter', system-ui, sans-serif);
  font-weight: 600;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 9999px;
  white-space: nowrap;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  user-select: none;
}

.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-primary:focus-visible {
  outline: 2px solid var(--color-primary, #0071e3);
  outline-offset: 2px;
}

.btn-primary--block { width: 100%; }

/* Sizes */
.btn-primary--sm { padding: 0.5rem 1rem; font-size: 0.8125rem; }
.btn-primary--md { padding: 0.875rem 1.75rem; font-size: 0.875rem; }
.btn-primary--lg { padding: 1rem 2rem; font-size: 1rem; }

/* Variants */
.btn-primary--primary {
  background: var(--color-midnight, #0A1022);
  color: #fff;
  border-color: var(--color-midnight, #0A1022);
}
.btn-primary--primary:hover:not(:disabled) {
  background: #0071e3;
  border-color: #0071e3;
  transform: translateY(-1px);
}

.btn-primary--secondary {
  background: #0071e3;
  color: #ffffff;
  border-color: #0071e3;
}
.btn-primary--secondary:hover:not(:disabled) {
  background: #0058b8;
  border-color: #0058b8;
  transform: translateY(-1px);
}

.btn-primary--accent {
  background: var(--color-primary, #0071e3);
  color: #fff;
  border-color: var(--color-primary, #0071e3);
}
.btn-primary--accent:hover:not(:disabled) {
  background: var(--color-accent-hover, #0077ed);
  border-color: var(--color-accent-hover, #0077ed);
  transform: translateY(-1px);
}

.btn-primary--ghost {
  background: transparent;
  color: #fff;
  border-color: rgba(255, 255, 255, 0.3);
}
.btn-primary--ghost:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.6);
}

.btn-primary--danger {
  background: var(--color-error, #EF4444);
  color: #fff;
  border-color: var(--color-error, #EF4444);
}
.btn-primary--danger:hover:not(:disabled) {
  filter: brightness(1.1);
  transform: translateY(-1px);
}

.btn-primary__icon,
.btn-primary__suffix {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
}
</style>
