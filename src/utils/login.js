import axios from 'axios'

export function login() {
  return axios.request({
    url: '/user/login',
    method: 'GET'
  })
}