import Vue from 'vue'
import Router from 'vue-router'
import VueLocalStorage from 'vue-localstorage'

import Login from '@/components/login'
import Test from '@/components/test'

Vue.use(Router)
Vue.use(VueLocalStorage)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
    }
  ]
})
