/**
 * autor: Snake 2018.9.1
 * @ http请求
 */
import router from '../router'
import axios from 'axios'
import qs from 'qs'
import api from './Config'
import {
    Message
} from 'element-ui';
const config = {
    baseURL: api.url.baseURL,
    timeout: 30000
}
let cancel, promiseArr = {},
    api_token = sessionStorage.getItem('TOKEN_KEY')
axios.defaults.baseURL = config.baseURL
axios.defaults.timeout = config.timeout
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
if (api_token) {
    axios.defaults.headers.api_token = api_token
}
// axios.defaults.headers['Access-Control-Allow-Origin'] = '*'

// 请求拦截器
axios.interceptors.request.use(config => {
    //发起请求时，取消掉当前正在进行的相同请求
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
    // console.log(response)
    return response
}, error => {
    return Promise.resolve(error.response)
})

const http = {
    get: '',
    post: '',
    all: ''
}


// get请求
http.get = (api = '', data = {}) => {
    let params = data //qs.stringify(data)
    return new Promise((resolve, reject) => {
        axios.get(api, {
            params
        }).then(res => {
            if(!res) return
            if (res.data.message == "请先登录") {
                sessionStorage.removeItem("username");
                sessionStorage.removeItem("email");
                sessionStorage.removeItem("TOKEN_KEY");
                sessionStorage.removeItem("is_set_pay");
                sessionStorage.removeItem("salt");
                sessionStorage.removeItem("imgsrc");
                Message({
                    message: '帐号在其他设备或者不同浏览器登录，请重新登录',
                    type: 'error'
                })
                setTimeout(() => {
                    router.push({
                        path: "/Logoin"
                    });
                }, 3000);
            }
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
            if(!res) return
            if (res.data.message == "请先登录") {
                sessionStorage.removeItem("username");
                sessionStorage.removeItem("email");
                sessionStorage.removeItem("TOKEN_KEY");
                sessionStorage.removeItem("is_set_pay");
                sessionStorage.removeItem("salt");
                sessionStorage.removeItem("imgsrc");
                sessionStorage.removeItem("psw");
                Message({
                    message: '帐号在其他设备或者不同浏览器登录，请重新登录',
                    type: 'error'
                })
                setTimeout(() => {
                    router.push({
                        path: "/Logoin"
                    });
                }, 3000);
            }
            resolve(res.data)
        }).catch(res => {
            reject(res)
        })
    })
}


// 暂时有问题  待完善
http.all = (...params) => {
    console.log(params)
    let args = params
    return new Promise((resolve, reject) => {
        axios.all(args).then(axios.spread((acct, perms) => {
            resolve(acct, perms)
        }))
    })
}

const install = Vue => {
    Vue.prototype.$http = http
}

export default {
    install
}