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
      component: Home,
      meta: {
        title: '首页-辉煌新时代，追梦新征程'
      }
    },
    {
      path: '/newera',
      name: 'NewEra',
      component: NewEra,
      meta: {
        title: '新时代-辉煌新时代，追梦新征程'
      }
    },
    {
      path: '/newjourney',
      name: 'NewJourney',
      component: NewJourney,
      meta: {
        title: '新征程-辉煌新时代，追梦新征程'
      }
    },
    {
      path: '/newyouth',
      name: 'NewYouth',
      component: NewYouth,
      meta: {
        title: '新青年-辉煌新时代，追梦新征程'
      }
    }
  ]
})


