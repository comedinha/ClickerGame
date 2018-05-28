import Vue from 'vue'
import Router from 'vue-router'

import store from '../store'

import Home from '@/components/Home'

import Signup from '@/components/auth/Signup'
import Signin from '@/components/auth/Signin'
import Logout from '@/components/auth/Logout'

import Test from '@/components/tests/Test'
import Counter from '@/components/tests/Counter'

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/Signin')
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Signin',
      name: 'Signin',
      component: Signin,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: '/Signup',
      name: 'Signup',
      component: Signup,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/Logout',
      name: 'Logout',
      component: Logout,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/Counter',
      name: 'Counter',
      component: Counter,
      beforeEnter: ifAuthenticated
    }
  ]
})
