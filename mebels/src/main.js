import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import 'material-design-icons-iconfont/dist/material-design-icons.css'


const vuetify = createVuetify({
    components,
    directives,
  })

const pinia = createPinia()

createApp(App)
.use(pinia)
.use(router)
.use(vuetify)
.mount('#app')

