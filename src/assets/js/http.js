/**
 * autor: Snake 2018.9.1
 * @ http请求
 */
import axios from 'axios'
import {Message} from 'element-ui'
import qs from 'qs'

var config;
var originUrl=window.location.origin;
//测试环境
if(originUrl=="http://dist.6fg645fsd.com"||originUrl=='http://localhost:8080'){
   config = {
    baseURL: 'http://webvideo.6fg645fsd.com',
    timeout: 30000
  }
}
//线上环境
if(originUrl=="http://dist.psxgtj.com"){
   config = {
    baseURL: 'http://video-api.psxgtj.com',
    timeout: 30000
  }
}

let cancel
let apiToken
const promiseArr = {}
if (sessionStorage.getItem('userdata')) {
  apiToken = JSON.parse(sessionStorage.getItem('userdata')).api_token
}

axios.defaults.baseURL = config.baseURL
axios.defaults.timeout = config.timeout
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'
if (apiToken) {
  axios.defaults.headers.api_token = apiToken
}
// axios.defaults.headers['Access-Control-Allow-Origin'] = '*'

// 请求拦截器
axios.interceptors.request.use(config => {
  // 发起请求时，取消掉当前正在进行的相同请求
  if (promiseArr[config.url]) {
    promiseArr[config.url]('操作取消')
    promiseArr[config.url] = cancel
  } else {
    promiseArr[config.url] = cancel
  }
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(response => {
  // Access-Control-Allow-Origin:*
  if (response.data.islogin === 0 || response.data.message === '请先登录') {
    window.sessionStorage.removeItem('userdata')
    Message({
      type: 'error',
      message: '请先登录'
    })
  }
  return response
}, error => {
  return Promise.resolve(error.response)
})

const http = {
  get: '',
  post: ''
}

// get请求
http.get = (api = '', data = {}) => {
  let params = data // qs.stringify(data)
  return new Promise((resolve, reject) => {
    axios.get(api, {
      params
    }).then(res => {
      resolve(res.data)
    }).catch(res => {
      reject(res)
    })
  })
}

// post请求
http.post = (api = '', data = {}) => {
  let params = qs.stringify(data)
  return new Promise((resolve, reject) => {
    axios.post(api, params).then(res => {
      resolve(res.data)
    }).catch(res => {
      reject(res)
    })
  })
}

const install = Vue => {
  Vue.prototype.$http = http
}

export default {
  install
}
