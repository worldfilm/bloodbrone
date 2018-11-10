import Vue from 'vue'
import Router from 'vue-router'
import Home from './page/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '首页'
      },
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: () => import('./page/Detail.vue'),
      meta: {
        title: '详情页'
      },
    }
  ],
  
})