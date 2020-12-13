import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import router from './router'
import store from './store'

import mediumZoom from 'medium-zoom'

mediumZoom('[data-zoomable]')

const app = createApp(App)
app.config.globalProperties.$dataURL = import.meta.env.VITE_DATA_URL
app.use(router)
app.use(store)
app.mount('#app')
