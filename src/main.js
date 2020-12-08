import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import router from './router'

import mediumZoom from 'medium-zoom'

mediumZoom('[data-zoomable]')

const app = createApp(App)
app.config.globalProperties.$dataURL = import.meta.env.VITE_DATA_URL
app.use(router)
app.mount('#app')
