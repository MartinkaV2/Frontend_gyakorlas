import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// Bootstrap JavaScript
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

const app = createApp(App)
app.use(createPinia())
app.mount('#app')