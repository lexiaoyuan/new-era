import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import NewEra from '@/views/NewEra'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/newera',
      name: 'NewEra',
      component: NewEra
    }

  ]
})
