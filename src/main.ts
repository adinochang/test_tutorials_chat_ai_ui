import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedSTate from 'pinia-plugin-persistedstate'
import { router } from './router'
import './style.css'
import App from './App.vue'


// init pinia
const pinia = createPinia()
pinia.use(piniaPluginPersistedSTate)

// init app 
const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')
