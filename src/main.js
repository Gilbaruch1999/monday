/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import { createPinia } from 'pinia'
import mondaySdk from 'monday-sdk-js'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Styles
import 'unfonts.css'

const app = createApp(App)
const pinia = createPinia()

registerPlugins(app)
app.use(pinia)
app.provide('monday', mondaySdk())
app.mount('#app')
