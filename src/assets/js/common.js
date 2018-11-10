/**
 * 用于存放公共方法
 */
import {Message} from 'element-ui'
function install (Vue) {
  // 收藏视频
  Vue.prototype.$collect = function (videoId, callBack) {
    Vue.prototype.$http.get(`/api/video/collect/${videoId}`).then(res => {
      if (res.status !== 0) {
        let opt = {
          message: res.message,
          type: 'error'
        }
        Message(opt)
      }
      callBack && callBack(res)
    })
  }

  // 取消收藏
  Vue.prototype.$cancelCollect = function (videoId, callBack) {
    Vue.prototype.$http.get(`/api/video/cancelCollect/${videoId}`).then(res => {
      if (res.status !== 0) {
        let opt = {
          message: res.message,
          type: 'error'
        }
        Message(opt)
      }
      callBack && callBack(res)
    })
  }
}

export default {
  install
}
