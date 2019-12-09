import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "login" */ '../views/Home.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import(/* webpackChunkName: "login" */ '../views/ViewProfile.vue')
    },
    {
      path: '/user-profile',
      name: 'userprofile',
      component: () => import(/* webpackChunkName: "login" */ '../views/UserProfile.vue')
    },
    {
      path: '/edit-profile',
      name: 'edit-profile',
      component: () => import(/* webpackChunkName: "login" */ '../views/Edit.vue')
    },
    {
      path: '/reset-password',
      name: 'resetpassword',
      component: () => import(/* webpackChunkName: "login" */ '../views/ResetPw.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import(/* webpackChunkName: "login" */ '../views/Admin.vue')
    },
  ]
})
