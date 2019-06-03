import Vue from 'vue'
import Router from 'vue-router'
import BackgroundImg from '@/components/BackgroundImg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BackgroundImg',
      component: BackgroundImg
    }
  ]
})
