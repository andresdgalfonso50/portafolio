import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Yeison Alfonso | UX/UI Product Designer' }
  },
  {
    path: '/ecommerce',
    name: 'Ecommerce',
    component: () => import('@/views/Ecommerce.vue'),
    meta: { title: 'E-commerce Case Study | Yeison Alfonso' }
  },
  {
    path: '/app',
    name: 'App',
    component: () => import('@/views/App.vue'),
    meta: { title: 'App Mobile Case Study | Yeison Alfonso' }
  },
  {
    path: '/xentral-health',
    name: 'XentralHealth',
    component: () => import('@/views/XentralHealth.vue'),
    meta: { title: 'Xentral Health Case Study | Yeison Alfonso' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    meta: { title: 'About | Yeison Alfonso' }
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import('@/views/Contacto.vue'),
    meta: { title: 'Contacto | Yeison Alfonso' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
    meta: { title: '404 - Página no encontrada | Yeison Alfonso' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Yeison Alfonso | UX/UI Product Designer'
  next()
})

export default router
