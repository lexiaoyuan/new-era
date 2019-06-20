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
import VueI18n from 'vue-i18n'
import 'es6-promise/auto'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import animate from 'animate.css'

Vue.use(BootstrapVue)
Vue.use(PortalVue)
Vue.use(Vuex)
Vue.use(animate)
Vue.use(VueI18n)
Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    'zh': require('./common/lang/zh'),
    'en': require('./common/lang/en')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  template: '<App/>',
  components: { App }
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
})


