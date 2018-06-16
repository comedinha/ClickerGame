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
  signup ({commit}, user) {
    return new Promise((resolve, reject) => {
      commit('authStatus', 'loading')
      Vue.http.post('api/signup', user)
        .then(() => {
          commit('authStatus', 'success')
          resolve()
        }, errorCode => {
          commit('authStatus', 'error')
          reject(errorCode)
        })
    })
  },

  signin ({commit}, user) {
    return new Promise((resolve, reject) => {
      commit('authStatus', 'loading')
      Vue.http.post('api/auth', user)
        .then(resp => {
<<<<<<< .mine
          commit('authLogin', resp.data.token)
          commit('authStatus', 'success')
          resolve()
        }, errorCode => {
          commit('authStatus', 'error')
          reject(errorCode)




=======
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
>>>>>>> .theirs
        })
    })
  },

  activeEmail ({commit}, user) {
    return new Promise((resolve, reject) => {
      commit('authStatus', 'loading')
      Vue.http.post('api/authEmail', user)
        .then(() => {
          commit('authStatus', 'success')
          resolve()
        }, errorCode => {
          commit('authStatus', 'error')
          reject(errorCode)
        })
    })
  },

  passwordRecovery ({commit}, user) {
    commit('authStatus', 'loading')
    Vue.http.post('api/authPasswordRecovery', user)
      .then(() => {
        commit('authStatus', 'success')
      })
  },

  passwordReset ({commit}, user) {
    return new Promise((resolve, reject) => {
      commit('authStatus', 'loading')
      Vue.http.post('api/authPasswordReset', user)
        .then(() => {
          commit('authStatus', 'success')
          resolve()
        }, errorCode => {
          commit('authStatus', 'error')
          reject(errorCode)
        })
    })
  },

  signout: ({commit}) => {
    commit('authStatus', 'loading')
    return new Promise((resolve) => {
      commit('authLogout')
      commit('authStatus', 'success')
      resolve()
    })
  }
}

const mutations = {
  authStatus (state, status) {
    state.status = status
  },

  authLogin (state, token) {
    state.token = token
    localStorage.setItem('x-auth-token', token)
  },

  authLogout (state) {
    localStorage.removeItem('x-auth-token')
    state.token = ''
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
