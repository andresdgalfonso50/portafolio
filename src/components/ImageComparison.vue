<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="cursor-pointer group" @click="openComparison('antes')">
        <span class="text-sm font-semibold text-slate-500 uppercase tracking-wide block mb-3">Antes</span>
        <div class="overflow-hidden rounded-xl shadow-sm transition-all duration-300 group-hover:shadow-md">
          <img :src="antesSrc" alt="Versión anterior" class="w-full h-auto object-cover">
        </div>
        <p class="text-xs text-slate-400 mt-3 text-center">Click para comparar</p>
      </div>

      <div class="cursor-pointer group" @click="openComparison('despues')">
        <span class="text-sm font-semibold text-slate-500 uppercase tracking-wide block mb-3">Después</span>
        <div class="overflow-hidden rounded-xl shadow-sm transition-all duration-300 group-hover:shadow-md">
          <img :src="despuesSrc" alt="Versión después" class="w-full h-auto object-cover">
        </div>
        <p class="text-xs text-slate-400 mt-3 text-center">Click para comparar</p>
      </div>
    </div>

    <!-- Modal Comparison -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="isOpen"
          class="fixed inset-0 z-[200] flex items-center justify-center p-4"
          @click.self="closeModal"
          role="dialog"
          aria-modal="true"
          :aria-label="currentLabel + ' - Comparación visual'"
        >
          <div class="fixed inset-0 bg-black/80 backdrop-blur-sm" @click="closeModal"></div>

          <div class="relative z-10 w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden">
            <!-- Header -->
            <div class="flex items-center justify-between p-4 border-b border-slate-100">
              <div class="flex items-center gap-2">
                <button
                  @click="setCurrent('antes')"
                  :class="['px-4 py-2 rounded-xl font-medium transition-all', currentImage === 'antes' ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200']"
                >
                  ANTES
                </button>
                <button
                  @click="setCurrent('despues')"
                  :class="['px-4 py-2 rounded-xl font-medium transition-all', currentImage === 'despues' ? 'bg-purple-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200']"
                >
                  DESPUÉS
                </button>
              </div>

              <button ref="closeButtonRef" @click="closeModal" class="p-2 hover:bg-slate-100 rounded-xl transition-colors" aria-label="Cerrar comparador">
                <X :size="24" class="text-slate-500" />
              </button>
            </div>

            <!-- Image Area -->
            <div class="relative bg-slate-900 flex items-center justify-center min-h-[60vh]">
              <img
                :src="currentSrc"
                :alt="currentLabel"
                class="max-w-full max-h-[70vh] object-contain"
              >

              <!-- Navigation Arrows -->
              <button
                @click="prevImage"
                class="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all backdrop-blur-sm"
              >
                <ChevronLeft :size="32" class="text-white" />
              </button>

              <button
                @click="nextImage"
                class="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all backdrop-blur-sm"
              >
                <ChevronRight :size="32" class="text-white" />
              </button>
            </div>

            <!-- Footer -->
            <div class="flex items-center justify-center gap-4 p-4 bg-slate-50">
              <span class="text-sm text-slate-500">Usa las flechas ← → o haz clic en los botones</span>
              <div class="flex items-center gap-2">
                <button
                  @click="setCurrent('antes')"
                  :class="['w-3 h-3 rounded-full transition-all', currentImage === 'antes' ? 'bg-slate-800 scale-125' : 'bg-slate-300 hover:bg-slate-400']"
                ></button>
                <button
                  @click="setCurrent('despues')"
                  :class="['w-3 h-3 rounded-full transition-all', currentImage === 'despues' ? 'bg-purple-600 scale-125' : 'bg-slate-300 hover:bg-slate-400']"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'
import { X, ChevronLeft, ChevronRight } from 'lucide-vue-next'

const props = defineProps({
  antesSrc: { type: String, required: true },
  despuesSrc: { type: String, required: true },
  antesAlt: { type: String, default: 'Versión anterior' },
  despuesAlt: { type: String, default: 'Versión después' }
})

const isOpen = ref(false)
const currentImage = ref('antes')
const closeButtonRef = ref(null)

const images = computed(() => [
  { key: 'antes', src: props.antesSrc, alt: props.antesAlt },
  { key: 'despues', src: props.despuesSrc, alt: props.despuesAlt }
])

const currentSrc = computed(() => {
  const img = images.value.find(img => img.key === currentImage.value)
  return img?.src || ''
})

const currentLabel = computed(() => {
  return currentImage.value === 'antes' ? 'ANTES' : 'DESPUÉS'
})

function openComparison(initial = 'despues') {
  currentImage.value = initial
  isOpen.value = true
  document.body.style.overflow = 'hidden'
  nextTick(() => {
    closeButtonRef.value?.focus()
  })
}

function closeModal() {
  isOpen.value = false
  document.body.style.overflow = ''
}

function setCurrent(key) {
  currentImage.value = key
}

function prevImage() {
  currentImage.value = currentImage.value === 'antes' ? 'despues' : 'antes'
}

function nextImage() {
  currentImage.value = currentImage.value === 'antes' ? 'despues' : 'antes'
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from > div,
.modal-leave-to > div {
  transform: scale(0.95);
}
</style>