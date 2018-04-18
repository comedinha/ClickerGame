import axios from 'axios'

export const HTTP = axios.create({
  baseURL: `http://localhost:8088/api`,
  headers: {
    Authorization: 'Bearer {token}'
  }
})
