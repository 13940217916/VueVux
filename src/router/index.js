import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Login from '@/views/login'
import Test from '@/components/test/fu'
import You from '@/views/you'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },{
      path:'/login',
      name:'Login',
      component:Login
    },{
    path:'/test',
      name:'',
      component:Test
    },{
      path:'/you',
      name:'You',
      component:You
    }
  ]
})
