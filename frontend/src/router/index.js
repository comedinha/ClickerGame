import Vue from 'vue'
import Router from 'vue-router'

import store from '../store'

import Auth from '@/components/template/Auth'
import Index from '@/components/template/Index'

import Email from '@/components/auth/Email'
import Signup from '@/components/auth/Signup'
import Signin from '@/components/auth/Signin'

import Lobby from '@/components/lobby/Lobby'

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
      name: 'Index',
      redirect: 'Lobby',
      component: Index,
      beforeEnter: ifAuthenticated,
      children: [
        {
          path: '/Lobby',
          name: 'Lobby',
          component: Lobby
        }
      ]
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
          component: Email,
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
