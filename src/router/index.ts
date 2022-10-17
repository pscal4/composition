import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/composition',
      name: 'composition',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/compositionview/CompositionView.vue')
    },
    {
      path: '/options',
      name: 'options',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/optionsview/OptionsView.vue')
    },
    {
      path: '/composable',
      name: 'composable',
      component: () => import('../views/ComposableView.vue')
    },
    {
      path: '/mixin',
      name: 'mixin',
      component: () => import('../views/mixinview/MixinView.vue')
    }
  ]
})

export default router
