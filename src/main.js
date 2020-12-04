import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import router from './router'

const app = createApp(App)
app.config.globalProperties.$baseURL = import.meta.env.VITE_API_URL
app.use(router)
app.mount('#app')
