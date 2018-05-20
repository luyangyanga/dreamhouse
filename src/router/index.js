import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/auth/Register'
import Login from '@/components/auth/Login';
import PhoneLogin from '@/components/auth/PhoneLogin';
import Settings from '@/components/private/Setting';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:Login
    },
    {
      path:'/register',
      component:Register
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/phoneLogin',
      component:PhoneLogin
    },
    {
      path:'/Settings',
      component:Settings
    }
  ]
})
