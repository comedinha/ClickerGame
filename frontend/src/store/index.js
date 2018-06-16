import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import lobby from './modules/lobby'
import scene from './modules/scene'

import click from './modules/click'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    lobby,
    scene,
    click
  }
})
