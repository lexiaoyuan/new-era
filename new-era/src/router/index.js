import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import PictureRotation from '@/components/PictureRotation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PictureRotation',
      component: PictureRotation
    }
  ]
})
