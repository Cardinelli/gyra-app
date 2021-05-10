import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from "./router";
import {BootstrapVue, IconsPlugin} from "bootstrap-vue";
import {store} from "./store";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const router= new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
    if (to.path !== '/login' && !localStorage.getItem('token')) {
        next('/login')
    } else if (to.path === '/login' && localStorage.getItem('token')) {
        next('/')
    } else {
        next()
    }
})

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
