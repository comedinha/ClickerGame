import axios from 'axios'

export const API_BASE_URL = `http://localhost:8088`

export const HTTP = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: 'Bearer {token}'
  }
})
