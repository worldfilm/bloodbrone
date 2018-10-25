Vue.use(Router)
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        title: '首页'
      },
      component: Home
    },{
      path: '/Home',
      name: 'Home',
      meta: {
        title: '首页'
      },
      component: Home
    }
  ]
})
router.beforeEach((to, from, next) => {
  next()
  document.title = '血缘 - ' + to.meta.title
})


export default router
