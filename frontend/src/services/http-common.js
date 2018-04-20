import axios from 'axios'

export const API_BASE_URL = `http://localhost:8088`

const token = localStorage.getItem('user-token')
if (token) {
  axios.defaults.headers.common['Authorization'] = token
}

export const HTTP = axios.create({
  baseURL: API_BASE_URL
})
