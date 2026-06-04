<template>
  <div class="section-label">
    <span v-if="number" class="section-label__number">{{ number }}</span>
    <span>{{ label }}</span>
  </div>
</template>

<script setup>
defineProps({
  number: { type: [String, Number], default: '' },
  label: { type: String, required: true }
})
</script>
