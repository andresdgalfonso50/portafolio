import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import { trackPageview } from '@/plugins/hotjar'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Yeison Alfonso | UX/UI Product Designer',
      description: 'UX/UI Product Designer con Maestría en UX/UI. +4x ingresos en e-commerce, diseño de apps y telemedicina. End-to-end design con impacto medible.'
    }
  },
  {
    path: '/ecommerce',
    name: 'Ecommerce',
    component: () => import('@/views/Ecommerce.vue'),
    meta: {
      title: '+4x Ingresos en Checkout E-commerce | Yeison Alfonso',
      description: 'Rediseñamos el checkout de Continental Assist y multiplicamos x4 los ingresos. UX/UI con impacto directo en conversión.'
    }
  },
  {
    path: '/app',
    name: 'App',
    component: () => import('@/views/App.vue'),
    meta: {
      title: 'App de Viajes: De 97% a 50% Abandono | Yeison Alfonso',
      description: 'App de asistencia en viajes: de 97% abandono a 2 apps en producción. UX/UI que los viajeros usan.'
    }
  },
  {
    path: '/telemedicina',
    name: 'Telemedicina',
    component: () => import('@/views/XentralHealth.vue'),
    meta: {
      title: 'Xentral Health: Ecosistema de Telemedicina | Case Study',
      description: 'Xentral Health: ecosistema de telemedicina que integra la asistencia médica telefónica con un app web para viajeros en emergencia. -60% tiempo de atención.'
    }
  },
  {
    // Legacy alias — keep old /app-web bookmarks working.
    path: '/app-web',
    redirect: '/telemedicina'
  },
  {
    path: '/sobre-mi',
    name: 'SobreMi',
    component: () => import('@/views/About.vue'),
    meta: {
      title: 'Sobre mí | Yeison Alfonso',
      description: 'Product Designer con maestría en UX/UI. Especialista en diseño de productos digitales con impacto medible.'
    }
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import('@/views/Contacto.vue'),
    meta: {
      title: 'Contacto | Yeison Alfonso',
      description: 'Contáctame para colaborar en proyectos de diseño UX/UI, productos digitales y estrategia de experiencia de usuario.'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
    meta: {
      title: '404 - Página no encontrada | Yeison Alfonso',
      description: 'La página que buscas no existe. Regresa al inicio para ver mi portfolio de diseño UX/UI.'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'instant' }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Yeison Alfonso | UX/UI Product Designer'
  const metaDesc = document.querySelector('meta[name="description"]')
  if (metaDesc && to.meta.description) {
    metaDesc.setAttribute('content', to.meta.description)
  }
  next()
})

router.afterEach((to) => {
  trackPageview(to.fullPath)
})

export default router
