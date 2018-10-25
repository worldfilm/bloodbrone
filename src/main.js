import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import http from './utils/http.js'
import './utils/filters.js'
import loading from './components/loading.vue'
import Hub from "@/components/Hub";
import data from  './data/pagedatas.js'
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$mydata = data

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components: {
    App
  },
  template: '<App/>'
})
