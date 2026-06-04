<template>
  <div class="stat-card" :style="{ '--stat-color': colorVar }">
    <div class="flex items-start justify-between mb-2">
      <span
        v-if="label"
        class="text-[10px] font-bold uppercase tracking-widest"
        :style="{ color: textColor }"
      >
        {{ label }}
      </span>
      <component
        v-if="icon"
        :is="icon"
        :size="20"
        :stroke-width="1.75"
        :style="{ color: textColor }"
      />
    </div>
    <div
      class="font-display tabular-nums leading-none"
      :class="sizeClass"
      :style="{ color: valueColor }"
    >
      {{ value }}
    </div>
    <p v-if="description" class="text-sm text-slate-500 mt-2 leading-relaxed">
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
    default: 'blue',
    validator: (v) => ['blue', 'violet', 'emerald', 'slate', 'amber'].includes(v)
  },
  size: {
    type: String,
    default: 'lg',
    validator: (v) => ['md', 'lg', 'xl'].includes(v)
  }
})

const colorMap = {
  blue: { var: '#3B82F6', text: '#2563EB' },
  violet: { var: '#8B5CF6', text: '#7C3AED' },
  emerald: { var: '#10B981', text: '#059669' },
  slate: { var: '#1E293B', text: '#0F172A' },
  amber: { var: '#F59E0B', text: '#D97706' }
}

const colorVar = computed(() => colorMap[props.accent].var)
const textColor = computed(() => colorMap[props.accent].text)
const valueColor = computed(() => colorMap[props.accent].text)

const sizeClass = computed(() => {
  return {
    'text-4xl md:text-5xl font-black tracking-tighter': props.size === 'lg',
    'text-5xl md:text-7xl font-black tracking-tighter': props.size === 'xl',
    'text-2xl md:text-3xl font-extrabold tracking-tight': props.size === 'md'
  }
})
</script>
