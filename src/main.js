import { createApp, ref } from 'vue'
import './assets/scss/main.scss'
import App from './App.vue'
const isLoading = ref(false)

const app = createApp(App)
app.provide('isLoading', isLoading)
app.mount('#app')
