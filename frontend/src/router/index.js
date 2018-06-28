import Vue from 'vue'
import Router from 'vue-router'

import store from '../store'

import Auth from '@/components/template/Auth'
import Index from '@/components/template/Index'
import Play from '@/components/template/Play'

import Email from '@/components/auth/Email'
import ResetPassword from '@/components/auth/ResetPassword'
import Signup from '@/components/auth/Signup'
import Signin from '@/components/auth/Signin'

import Lobby from '@/components/lobby/Lobby'

import Scene from '@/components/scene/Scene'

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
        },
        {
          path: '/ResetPassword',
          name: 'ResetPassword',
          component: ResetPassword,
          beforeEnter: ifNotAuthenticated
        }
      ]
    },

    {
      path: '/Play',
      name: 'Play',
      redirect: 'Scene',
      component: Play,
      beforeEnter: ifAuthenticated,
      children: [
        {
          path: '/Scene',
          name: 'Scene',
          component: Scene
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
