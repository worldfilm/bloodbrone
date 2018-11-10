const getUserInfo = function () {
  return JSON.parse(window.sessionStorage.getItem('userdata'))
}

const setUserInfo = function (dataStr) {
  window.sessionStorage.setItem('userdata', dataStr)
}

const removeUserInfo = function () {
  window.sessionStorage.removeItem('userdata')
}

const user = {
  getUserInfo,
  setUserInfo,
  removeUserInfo
}

function install (Vue) {
  Vue.prototype.$user = user
}

export default {
  install
}
