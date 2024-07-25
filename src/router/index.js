import { createRouter, createWebHistory } from 'vue-router'
import GooberOverlay from '@/components/GooberOverlay.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: GooberOverlay
    },
    {
      path: '/minadex',
      name: 'minadex',
      component: () => import('../views/InfoView.vue')
    }
  ]
})

export default router
