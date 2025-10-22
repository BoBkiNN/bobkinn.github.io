import './assets/main.css'
import 'material-icons/iconfont/material-icons.css';
import "vue-toastification/dist/index.css"
import 'floating-vue/dist/style.css'

import Particles from "@tsparticles/vue3";
import { loadSlim } from "@tsparticles/slim";

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Toast, { type PluginOptions, POSITION } from "vue-toastification"
import FloatingVue from 'floating-vue'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(Particles, {
    init: async engine => {
      // await loadFull(engine); // you can load the full tsParticles library from "tsparticles" if you need it
      await loadSlim(engine); // or you can load the slim version from "tsparticles-slim" if don't need Shapes or Animations
    },
  });
const options: PluginOptions = {
  position: POSITION.BOTTOM_RIGHT,
  timeout: 3000,
  closeOnClick: true,
  pauseOnHover: true,
  transition: "Vue-Toastification__fade",
  toastClassName: "my-toast",
  bodyClassName: "my-toast-body",
  icon: false,
  draggable: false
}

app.use(Toast, options)
app.use(FloatingVue)

app.mount('#app')
