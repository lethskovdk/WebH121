import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Member from '../views/Member.vue'
import Products from '../views/Products.vue'
import QA from '../views/QA.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/Member',
      component: Member
    },
    {
      path: '/Products',
      component: Products
    },
    {
      path: '/QA',
      component: QA
    }
  ]
})

export default router
