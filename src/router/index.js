import { createRouter, createWebHistory } from 'vue-router'
import GooberOverlay from '@/components/GooberOverlay.vue'
import InfoView from '@/views/InfoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: GooberOverlay
    },
    {
      path: '/e',
      redirect: '/e/1'
    },
    {
      path: '/e/:id',
      name: 'e',
      component: InfoView,
      props: (route) => ({ id: Number.parseInt(route.params.id) })
    }
  ]
})

export default router
