import { createApp } from 'vue'
import { createHead, VueHeadMixin } from "@vueuse/head"
import App from './App.vue'
import router from './router'

import './assets/main.css'


const app = createApp(App)
const head = createHead()
app.mixin(VueHeadMixin)

app.use(router)
app.use(head)

app.mount('#app')
