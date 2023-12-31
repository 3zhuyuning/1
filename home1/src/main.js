
import { createApp } from 'vue'

import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'

import App from './App.vue'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import router from './router/index.js'

import axios from '@/plugins/axiosInstance.js'

import store from './store';


const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.use(router).use(ElementPlus).use(store)
app.mount('#app')
// Vue.prototype.$axios = axios
app.config.globalProperties.$axios=axios;



