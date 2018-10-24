import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import MainMenu from '@/components/MainMenu'
import Home from '@/components/Home'
import Patient from '@/components/Patient'
import Welcome from '@/components/Welcome'
import Xray from '@/components/Xray'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'Login'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/mainmenu',
      name: 'MainMenu',
      component: MainMenu
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: 'patient',
      name: 'Patient',
      component: Patient
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/xray',
      name: 'Xray',
      component: Xray
    }
  ]
})
