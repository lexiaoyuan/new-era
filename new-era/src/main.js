// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import PortalVue from 'portal-vue'
import App from './App'
import router from './router'
import Vuex from  'vuex'
import 'es6-promise/auto'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import animate from 'animate.css'

Vue.use(BootstrapVue)
Vue.use(PortalVue)
Vue.use(Vuex)
Vue.use(animate)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
