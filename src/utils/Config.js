var originUrl=window.location.origin
//测试环境
if(originUrl=="http://wwwvideo.6fg645fsd.com"||originUrl=='http://localhost:8080'){
  var url = {
      baseURL: 'http://webvideo.6fg645fsd.com',
  }
}
//线上环境
if(originUrl=="http://www.psxgtj.com"){
  var url = {
      baseURL: 'http://video-api.psxgtj.com',
  }
}
var url = {
    baseURL: 'http://video-api.psxgtj.com',
}
//后台接口地址,另外upload.vue组件处也有一处,如有接口地址变动请更改
export default {
    url
}
