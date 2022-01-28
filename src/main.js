import Vue from 'vue'
import VueRouter from 'vue-router'
import News from "./components/News.vue"
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)

const routes = [
  { path: '/', component: News },
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
}).$mount('#app')
