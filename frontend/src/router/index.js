import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'

import Login from '@/components/auth/Login'
import Logout from '@/components/auth/Logout'

import Test from '@/components/tests/Test'
import Counter from '@/components/tests/Counter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
    },
    {
      path: '/Counter',
      name: 'Counter',
      component: Counter
    }
  ]
})
