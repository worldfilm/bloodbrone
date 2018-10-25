import Vue from 'vue'

Vue.filter('payIcon', function(val) {
  return {
    'alipay': 'icon-zhifubao',
    'wechat': 'icon-weixinzhifu'
  }[val]
})