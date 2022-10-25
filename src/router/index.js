import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutUs from '../views/AboutUs.vue'
import OurTeam from '../views/OurTeam.vue'
import Menu from '../views/Menu.vue'
import Gallery from '../views/Gallery.vue'
import News from '../views/News.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/AboutUs',
      component: AboutUs
    },
    {
      path: '/OurTeam',
      component: OurTeam
    },
    {
      path: '/Menu',
      component: Menu
    },
    {
      path: '/Gallery',
      component: Gallery
    },
    {
      path: '/News',
      component: News
    },
    {
      path: '/Contact',
      component: Contact
    }

  ]
})

export default router
