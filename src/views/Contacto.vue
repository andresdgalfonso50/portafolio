<template>
  <div class="view-wrapper">
    <AuroraBg variant="hero" class="contact-page section">
      <div class="container relative z-10">
        <div class="contact-header fade-in">
          <span class="label text-secondary">Contacto</span>
          <h1 class="font-display text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-midnight mb-6">
            Cuéntame
            <span class="text-gradient-secondary">de tu proyecto</span>
          </h1>
          <p class="contact-subtitle">
            +4x conversión, -50% abandono, 2 apps en producción. ¿Cuál es tu métrica?
          </p>
        </div>

        <div class="contact-grid">
          <div class="contact-info fade-in stagger-1">
            <div class="contact-links">
              <a href="mailto:andresdgalfonso@gmail.com" class="contact-link">
                <div class="contact-icon">
                  <Mail :size="20" />
                </div>
                <div class="contact-details">
                  <span class="contact-label">Email</span>
                  <span class="contact-value">andresdgalfonso@gmail.com</span>
                </div>
              </a>
              <a href="tel:+573125673243" class="contact-link">
                <div class="contact-icon">
                  <Phone :size="20" />
                </div>
                <div class="contact-details">
                  <span class="contact-label">Teléfono</span>
                  <span class="contact-value">+57 312 567 3243</span>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/yeison-alfonso-product-designer" target="_blank" rel="noopener noreferrer" class="contact-link">
                <div class="contact-icon">
                  <Linkedin :size="20" />
                </div>
                <div class="contact-details">
                  <span class="contact-label">LinkedIn</span>
                  <span class="contact-value">yeison-alfonso-product-designer</span>
                </div>
              </a>
              <div class="contact-link">
                <div class="contact-icon">
                  <MapPin :size="20" />
                </div>
                <div class="contact-details">
                  <span class="contact-label">Ubicación</span>
                  <span class="contact-value">Bogotá, Colombia</span>
                </div>
              </div>
            </div>

            <div class="contact-availability">
              <div class="availability-badge">
                <span class="availability-dot"></span>
                <span>Disponible desde abril 2026</span>
              </div>
            </div>
          </div>

          <div class="contact-form-wrapper fade-in stagger-2">
            <form class="contact-form" @submit.prevent="handleSubmit" novalidate>
              <div class="form-group">
                <label for="name">Nombre <span class="text-red-500">*</span></label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  placeholder="Tu nombre completo"
                  required
                  aria-required="true"
                  :class="{ 'input-error': errors.name }"
                  @blur="validateField('name')"
                  aria-describedby="name-error"
                >
                <span v-if="errors.name" id="name-error" class="error-message" role="alert">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  {{ errors.name }}
                </span>
              </div>
              <div class="form-group">
                <label for="email">Email <span class="text-red-500">*</span></label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  placeholder="tu@email.com"
                  required
                  aria-required="true"
                  :class="{ 'input-error': errors.email }"
                  @blur="validateField('email')"
                  aria-describedby="email-error"
                >
                <span v-if="errors.email" id="email-error" class="error-message" role="alert">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  {{ errors.email }}
                </span>
              </div>
              <div class="form-group">
                <label for="project">Tipo de proyecto <span class="text-red-500">*</span></label>
                <select
                  id="project"
                  v-model="form.project"
                  required
                  aria-required="true"
                  :class="{ 'input-error': errors.project }"
                  @blur="validateField('project')"
                  aria-describedby="project-error"
                >
                  <option value="" disabled selected>Selecciona una opción</option>
                  <option value="ecommerce">E-commerce / Plataforma de ventas</option>
                  <option value="app">App mobile</option>
                  <option value="saas">SaaS / Producto digital</option>
                  <option value="rediseño">Rediseño de producto existente</option>
                  <option value="otro">Otro</option>
                </select>
                <span v-if="errors.project" id="project-error" class="error-message" role="alert">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  {{ errors.project }}
                </span>
              </div>
              <div class="form-group">
                <label for="message">Mensaje <span class="text-red-500">*</span></label>
                <textarea
                  id="message"
                  v-model="form.message"
                  placeholder="Cuéntame de tu proyecto..."
                  rows="5"
                  required
                  aria-required="true"
                  :class="{ 'input-error': errors.message }"
                  @blur="validateField('message')"
                  aria-describedby="message-error"
                ></textarea>
                <span v-if="errors.message" id="message-error" class="error-message" role="alert">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  {{ errors.message }}
                </span>
              </div>
              <button type="submit" class="inline-flex items-center justify-center gap-2 w-full px-8 py-4 bg-midnight text-white font-semibold rounded-full hover:bg-primary transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed" :disabled="isSubmitting || isSent" :aria-busy="isSubmitting">
                <span v-if="isSubmitting" class="btn-spinner"></span>
                <CheckCircle v-else-if="isSent" :size="18" />
                <Send v-else :size="18" />
                <span aria-live="polite">{{ isSubmitting ? 'Enviando...' : isSent ? 'Enviado' : 'Enviar mensaje' }}</span>
              </button>
            </form>
            <div v-if="submitMessage" class="submit-message" :class="{ success: submitSuccess, error: !submitSuccess }" role="status">
              <CheckCircle v-if="submitSuccess" :size="16" class="inline mr-1" />
              {{ submitMessage }}
            </div>
          </div>
        </div>
      </div>
    </AuroraBg>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Mail, Phone, Linkedin, MapPin, Send, CheckCircle } from 'lucide-vue-next'
import { useScrollAnimations } from '@/composables/useScrollAnimations'
import AuroraBg from '@/components/primitives/AuroraBg.vue'
import emailjs from '@emailjs/browser'

useScrollAnimations()

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '')

const form = reactive({
  name: '',
  email: '',
  project: '',
  message: ''
})

const errors = reactive({
  name: '',
  email: '',
  project: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)
const isSent = ref(false)

function validateField(field) {
  errors[field] = ''

  switch (field) {
    case 'name':
      if (!form.name.trim()) {
        errors.name = 'Por favor ingresa tu nombre'
      } else if (form.name.trim().length < 2) {
        errors.name = 'El nombre debe tener al menos 2 caracteres'
      }
      break
    case 'email':
      if (!form.email.trim()) {
        errors.email = 'Por favor ingresa tu email'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        errors.email = 'Por favor ingresa un email válido'
      }
      break
    case 'project':
      if (!form.project) {
        errors.project = 'Por favor selecciona un tipo de proyecto'
      }
      break
    case 'message':
      if (!form.message.trim()) {
        errors.message = 'Por favor describe tu proyecto'
      } else if (form.message.trim().length < 10) {
        errors.message = 'El mensaje debe tener al menos 10 caracteres'
      }
      break
  }
}

function validateForm() {
  validateField('name')
  validateField('email')
  validateField('project')
  validateField('message')

  return !errors.name && !errors.email && !errors.project && !errors.message
}

async function handleSubmit() {
  if (!validateForm()) {
    return
  }

  isSubmitting.value = true
  submitMessage.value = ''

  const templateParams = {
    from_name: form.name,
    from_email: form.email,
    project_type: form.project,
    message: form.message,
    to_email: 'andresdgalfonso@gmail.com'
  }

  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams
    )

    if (response.status === 200) {
      isSent.value = true
      submitSuccess.value = true
      submitMessage.value = 'Mensaje enviado correctamente. Te responderé pronto.'

      form.name = ''
      form.email = ''
      form.project = ''
      form.message = ''
      Object.keys(errors).forEach(key => errors[key] = '')
    }
  } catch (error) {
    submitSuccess.value = false
    submitMessage.value = 'Hubo un error al enviar el mensaje. Escríbeme directamente a andresdgalfonso@gmail.com'
  } finally {
    isSubmitting.value = false
  }
}
</script>