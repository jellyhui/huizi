import Vue from 'vue'
import Router from 'vue-router'
import AppHeader from '@/components/appHeader'
import Home from '@/components/Home'
import Search from '@/components/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'appHeader',
      component: AppHeader
    },
    {
      path: '/home',
      component: Home,
      name: 'Home'
    },
    {
      path: '/Search',
      component: Search,
      name: 'Search'
    }
  ]
})
