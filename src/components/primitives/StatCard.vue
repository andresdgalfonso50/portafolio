<template>
  <div class="stat-card" :style="{ '--stat-color': colorVar }">
    <div class="flex items-start justify-between mb-2">
      <span
        v-if="label"
        class="text-[10px] font-bold uppercase tracking-widest"
        :class="labelClass"
      >
        {{ label }}
      </span>
      <component
        v-if="icon"
        :is="icon"
        :size="20"
        :stroke-width="1.75"
        :class="iconClass"
      />
    </div>
    <div
      class="font-display tabular-nums leading-none"
      :class="[sizeClass, valueClass]"
    >
      {{ value }}
    </div>
    <p v-if="description" class="text-sm text-body mt-2 leading-relaxed">
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
  accent: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'secondary', 'midnight', 'highlight'].includes(v)
  },
  size: {
    type: String,
    default: 'lg',
    validator: (v) => ['md', 'lg', 'xl'].includes(v)
  }
})

// Apple-style palette — monochrome + single system blue accent
const colorMap = {
  primary: { var: '#0071e3', text: 'text-primary' },
  secondary: { var: '#0071e3', text: 'text-secondary' },
  midnight: { var: '#1D1D1F', text: 'text-midnight' },
  highlight: { var: '#0071e3', text: 'text-highlight' }
}

const colorVar = computed(() => colorMap[props.accent].var)
const labelClass = computed(() => colorMap[props.accent].text)
const iconClass = computed(() => colorMap[props.accent].text)
const valueClass = computed(() => colorMap[props.accent].text)

const sizeClass = computed(() => {
  return {
    'text-4xl md:text-5xl font-black tracking-tighter': props.size === 'lg',
    'text-5xl md:text-7xl font-black tracking-tighter': props.size === 'xl',
    'text-2xl md:text-3xl font-extrabold tracking-tight': props.size === 'md'
  }
})
</script>
