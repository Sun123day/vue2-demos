import axios from 'axios'

export function login(params) {//有参数就在括号里写个params，没有不写，这里的params是对象，注意一下
  return axios.request({
    //url中写接口，如果后端返回的是http://127.0.0.1:81/smart/login，一般只写/smart/login
    url: '/smart/login',
    method: 'POST',
    data: params || {}//有参数写这句，没参数不管
  })
}