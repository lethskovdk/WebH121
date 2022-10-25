import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

import './styles/main.scss'

Promise.all([axios.get('https://gastropub.webexam-mcdm.dk/api/images'), axios.get('https://gastropub.webexam-mcdm.dk/api/texts')]).then((res) => {
    window.img = res[0].data;
    window.txt = res[1].data;

    const app = createApp(App)

    app.use(router)

    app.mount('#app')
})
