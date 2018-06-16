import Vue from 'vue'

const state = {
  token: localStorage.getItem('x-auth-token') || '',
  status: ''
}

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status
}

const actions = {
  authCreate: ({commit, dispatch}, user) => {
    return new Promise((resolve, reject) => {
      commit('authRequest')
      Vue.http.post('api/signup', user)
        .then(resp => {
          commit('authCreated')
        }, err => {
          commit('authError', err)
          reject(err)
        })
    })
  },

  authRequest: ({commit, dispatch}, user) => {
    return new Promise((resolve, reject) => {
      commit('authRequest')
      Vue.http.post('api/auth', user)
        .then(resp => {
          console.log('RESP:')
          console.log(resp)
          const token = resp.data.token
          localStorage.setItem('x-auth-token', token)
          commit('authSuccess', token)
          resolve(resp)
        }, err => {
          commit('authError', err)
          localStorage.removeItem('x-auth-token')
          reject(err)
        })
    })
  },

  authActive: ({commit, dispatch}, user) => {
    return new Promise((resolve, reject) => {
      commit('authRequest')
      Vue.http.post('api/authEmail', user)
        .then(resp => {
          commit('authActive')
        }, err => {
          commit('authError', err)
          reject(err)
        })
    })
  },

  authPasswordRecovery: ({commit, dispatch}, user) => {
    return new Promise((resolve, reject) => {
      commit('authRequest')
      Vue.http.post('api/authPasswordRecovery', user)
        .then(resp => {
          commit('authActive')
        }, err => {
          commit('authError', err)
          reject(err)
        })
    })
  },

  authPasswordReset: ({commit, dispatch}, user) => {
    return new Promise((resolve, reject) => {
      commit('authRequest')
      console.log(user)
      Vue.http.post('api/authPasswordReset', user)
        .then(resp => {
          commit('authActive')
        }, err => {
          commit('authError', err)
          reject(err)
        })
    })
  },

  authLogout: ({commit, dispatch}) => {
    return new Promise((resolve, reject) => {
      commit('authLogout')
      localStorage.removeItem('x-auth-token')
      resolve()
    })
  }
}

const mutations = {
  authRequest: (state) => {
    state.status = 'loading'
  },
  authSuccess: (state, token) => {
    state.status = 'success'
    state.token = token
  },
  authActive: (state) => {
    state.status = 'activated'
  },
  authCreated: (state) => {
    state.status = 'created'
  },
  authError: (state) => {
    state.status = 'error'
  },
  authLogout: (state) => {
    state.status = 'logout'
    state.token = ''
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
