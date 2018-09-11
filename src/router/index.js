import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Detail from '@/pages/details/Detail'
import City from '@/pages/city/City'
import WeekendDetail from '@/pages/weekendDetail/WeekendDetail'

Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }, {
      path: '/weekendDetail/:id',
      name: 'WeekendDetail',
      component: WeekendDetail
    }
  ]
})
