import Vue from 'vue'

const state = {
  token: localStorage.getItem('x-auth-token') || '',

  status: '',

  recoveryDialog: false,

  successMessage: '',
  successDialog: false
}

const getters = {
  isAuthenticated: state => !!state.token,

  authToken: state => state.token,

  authStatus: state => state.status,

  getRecoveryDialog: state => state.recoveryDialog,

  getSuccessMessage: state => state.successMessage,

  getSuccessDialog: state => state.successDialog
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
          commit('authLogin', resp.data.token)
          commit('authStatus', 'success')
          resolve()
        }, errorCode => {
          commit('authStatus', 'error')
          reject(errorCode)
        })
    })
  },

  signGuest ({commit}) {
    // Comentário: Login guest
    return new Promise((resolve, reject) => {
      commit('authStatus', 'loading')
      Vue.http.post('api/authGuest', {})
        .then(resp => {
          commit('authLogin', resp.data.token)
          commit('authStatus', 'success')
          resolve()
        }, errorCode => {
          commit('authStatus', 'error')
          reject(errorCode)
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

  signout ({commit}) {
    commit('authStatus', 'loading')
    return new Promise((resolve) => {
      commit('authLogout')
      commit('authStatus', 'success')
      resolve()
    })
  },

  setRecoveryDialog ({commit}, event) {
    commit('recoveryDialog', event)
  },

  setSuccessMessage ({commit}, message) {
    commit('successMessage', message)
    commit('successDialog', true)
  },

  setSuccessDialog ({commit}, event) {
    commit('successDialog', event)
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
  },

  recoveryDialog (state, event) {
    state.recoveryDialog = event
  },

  successMessage (state, message) {
    state.successMessage = message
  },

  successDialog (state, event) {
    state.successDialog = event
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
