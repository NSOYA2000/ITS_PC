import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import About from '@/components/about'
import Case from '@/components/case'
import Detail from '@/components/detail'

/**公共组件 */


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/case/:id',
      name: 'Case',
      component: Case
    },
    {
      path: '/detail/:pam',
      name: 'Detail',
      component: Detail
    }
  ]
})
