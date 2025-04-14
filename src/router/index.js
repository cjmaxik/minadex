import { createRouter, createWebHistory } from 'vue-router'
import InfoView from '@/views/InfoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/e/1'
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
