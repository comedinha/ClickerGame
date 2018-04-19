import router from '../router'
import {HTTP} from './http-common'

export default {
  user: {
    authenticated: false
  },
  login (context, creds, redirect) {
    HTTP.post('/auth/login', creds, data => {
      localStorage.setItem('id_token', data.id_token)

      this.user.authenticated = true

      if (redirect) {
        router.go(redirect)
      }
    }).error(err => {
      context.error = err
    })
  },
  signUp (context, creds, redirect) {
    HTTP.post('/auth/singup', creds, data => {
      localStorage.setItem('id_token', data.id_token)

      this.user.authenticated = true

      if (redirect) {
        router.go(redirect)
      }
    }).error(err => {
      context.error = err
    })
  },
  logout () {
    localStorage.removeItem('id_token')
    this.user.authenticated = false
  },
  checkAuth () {
    const jwt = localStorage.getItem('id_token')
    this.user.authenticated = !!jwt
  },
  getAuthHeader () {
    return {
      'Authorization': 'Bearer ' + localStorage.getItem('id_token')
    }
  }
}
