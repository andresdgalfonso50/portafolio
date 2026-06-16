<script setup>
defineProps({
  number: { type: [String, Number], required: true },
  variant: {
    type: String,
    default: 'light',  // 'light' (default chip) | 'dark' (midnight) | 'accent' (blue)
    validator: v => ['light', 'dark', 'accent'].includes(v)
  },
  size: {
    type: String,
    default: 'md',  // 'sm' (24px) | 'md' (36px) | 'lg' (40px)
    validator: v => ['sm', 'md', 'lg'].includes(v)
  }
})
</script>

<template>
  <span
    :class="[
      'step-circle',
      `step-circle--${variant}`,
      `step-circle--${size}`
    ]"
  >
    {{ number }}
  </span>
</template>

<style scoped>
.step-circle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-weight: 700;
  border-radius: 9999px;
  line-height: 1;
}

.step-circle--sm {
  width: 1.5rem;
  height: 1.5rem;
  font-size: 0.75rem;
}

.step-circle--md {
  width: 2.25rem;
  height: 2.25rem;
  font-size: 0.875rem;
}

.step-circle--lg {
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.125rem;
  font-weight: 900;
  font-family: 'Galano', system-ui, sans-serif;
}

.step-circle--light {
  background-color: #f1f5f9;
  color: #475569;
}

.step-circle--dark {
  background-color: #0f172a;
  color: #ffffff;
}

.step-circle--accent {
  background-color: #0071e3;
  color: #ffffff;
}
</style>
