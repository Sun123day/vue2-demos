import axios from 'axios'

export function login(params) {
  return axios.request({
    // url: '/user/login',
    url: '/smart/login',
    method: 'POST',
    data: params || {}
  })
}