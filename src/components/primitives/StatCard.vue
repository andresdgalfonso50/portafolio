<template>
  <div class="stat-card group">
    <!-- Top row: label + icon -->
    <div class="flex items-center justify-between mb-6">
      <span
        v-if="label"
        class="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400"
      >
        {{ label }}
      </span>
      <div
        v-if="icon"
        class="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-50 group-hover:bg-primary/10 transition-colors duration-300"
      >
        <component
          :is="icon"
          :size="16"
          :stroke-width="2"
          class="text-slate-400 group-hover:text-primary transition-colors duration-300"
        />
      </div>
    </div>

    <!-- The metric — the protagonist -->
    <div
      class="font-display tabular-nums leading-none tracking-tighter mb-3 text-midnight"
      :class="sizeClass"
    >
      {{ value }}
    </div>

    <!-- Optional description -->
    <p v-if="description" class="text-sm text-body leading-snug">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  value: { type: String, required: true },
  label: { type: String, default: '' },
  description: { type: String, default: '' },
  icon: { type: [Object, Function], default: null },
  size: {
    type: String,
    default: 'lg',
    validator: (v) => ['md', 'lg', 'xl'].includes(v)
  }
})

// Always midnight (charcoal) for the number — neutral, premium, Apple-style.
// Blue is reserved for the icon hover state to keep the visual hierarchy clean.
const sizeClass = computed(() => {
  return {
    'text-5xl md:text-6xl font-black': props.size === 'lg',
    'text-6xl md:text-7xl font-black': props.size === 'xl',
    'text-3xl md:text-4xl font-extrabold': props.size === 'md'
  }
})
</script>

<style scoped>
.stat-card {
  position: relative;
  padding: 28px 24px;
  background: var(--color-bg-pure);
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.04);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 100%;
  background: var(--color-system-blue);
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.stat-card:hover {
  border-color: rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
  box-shadow: 0 12px 32px -8px rgba(0, 0, 0, 0.06);
}

.stat-card:hover::before {
  transform: scaleY(1);
}
</style>
