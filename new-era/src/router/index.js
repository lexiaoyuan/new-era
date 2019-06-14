import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import NewEra from '@/views/NewEra'
import NewJourney from '@/views/NewJourney'
import NewYouth from '@/views/NewYouth'

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
    },
    {
      path: '/newjourney',
      name: 'NewJourney',
      component: NewJourney
    },
    {
      path: '/newyouth',
      name: 'NewYouth',
      component: NewYouth
    }

  ]
})
