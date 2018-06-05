import Vue from 'vue'
import Router from 'vue-router'

import store from '../store'

import Auth from '@/components/template/Auth'

import Activeemail from '@/components/auth/Activeemail'
import Signup from '@/components/auth/Signup'
import Signin from '@/components/auth/Signin'

import Home from '@/components/lobby/Index'

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
  next('Signin')
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/Auth',
      redirect: 'Signin',
      name: 'Auth',
      component: Auth,
      children: [
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
          path: '/Email',
          name: 'Email',
          component: Activeemail,
          beforeEnter: ifNotAuthenticated
        }
      ]
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
