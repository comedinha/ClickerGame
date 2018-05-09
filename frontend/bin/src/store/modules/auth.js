import {HTTP as axios} from '@/services/http-common'

const state = {
  token: localStorage.getItem('user-token') || '',
  status: ''
}

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status
}

const actions = {
  authRequest: ({commit, dispatch}, user) => {
    return new Promise((resolve, reject) => {
      commit('authRequest')
      axios({ url: 'auth', data: user, method: 'POST' })
        .then(resp => {
          const token = resp.data.token
          localStorage.setItem('user-token', token)
          axios.defaults.headers.common['Authorization'] = token
          commit('authSuccess', token)
          dispatch('userRequest')
          resolve(resp)
        })
        .catch(err => {
          commit('authError', err)
          localStorage.removeItem('user-token')
          reject(err)
        })
    })
  },

  authLogout: ({commit, dispatch}) => {
    return new Promise((resolve, reject) => {
      commit('authLogout')
      localStorage.removeItem('user-token')
      delete axios.defaults.headers.common['Authorization']
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
