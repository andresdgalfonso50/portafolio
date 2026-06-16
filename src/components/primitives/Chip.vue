<script setup>
defineProps({
  variant: {
    type: String,
    default: 'neutral',
    validator: v => ['neutral', 'primary', 'outlined', 'dark', 'accent'].includes(v)
  },
  size: {
    type: String,
    default: 'md',
    validator: v => ['sm', 'md'].includes(v)
  },
  uppercase: { type: Boolean, default: true },
  bold: { type: Boolean, default: true }
})
</script>

<template>
  <span
    :class="[
      'chip',
      `chip--${variant}`,
      `chip--${size}`,
      { 'chip--uppercase': uppercase, 'chip--bold': bold }
    ]"
  >
    <slot />
  </span>
</template>

<style scoped>
.chip {
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  border-radius: 9999px;
  white-space: nowrap;
  line-height: 1;
}

.chip--sm {
  padding: 0.25rem 0.75rem;
  font-size: 11px;
}

.chip--md {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.chip--uppercase {
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.chip--bold {
  font-weight: 700;
}

.chip--neutral {
  background-color: #f1f5f9;
  color: #475569;
}

.chip--primary {
  background-color: #0071e3;
  color: #ffffff;
}

.chip--outlined {
  background-color: transparent;
  color: #475569;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.chip--dark {
  background-color: #0f172a;
  color: #ffffff;
}

.chip--accent {
  background-color: #0071e3;
  color: #ffffff;
  letter-spacing: 0.05em;
}
</style>
