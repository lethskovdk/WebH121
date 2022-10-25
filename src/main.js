import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import './styles/main.scss'

Promise.all([axios.get('https://smuknu.webmcdm.dk/products'), axios.get('https://smuknu.webmcdm.dk/questions'), axios.get('https://smuknu.webmcdm.dk/reviews')]).then((res) => {
  window.products = res[0].data

  window.questions = res[1].data

  window.reviews = res[2].data

  const app = createApp(App)

  app.use(router)

  app.mount('#app')
})
