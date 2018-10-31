import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Patient from '@/components/Patient'
import Welcome from '@/components/Welcome'
import Xray from '@/components/Xray'
import CreateUser from '@/components/CreateUser'
import User from '@/components/User'
import DetailsUser from '@/components/DetailsUser'
import EditUser from '@/components/EditUser'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'Home'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
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
    },
    {
      path: '/createuser',
      name: 'CreateUser',
      component: CreateUser
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/detailsuser/:id',
      name: 'DetailsUser',
      component: DetailsUser
    },
    {
      path: '/edituser/:id',
      name: 'EditUser',
      component: EditUser
    }
  ],
  mode: 'history' //No hash localhost:8080/#/createuser --> localhost:8080/createuser   
}) 
