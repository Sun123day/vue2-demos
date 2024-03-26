import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('@/views/AboutView.vue')
  // },
  // {
  //   path: '/',
  //   redirect: '/index'
  // },
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index/index.vue'),
    children: [
      {
        path: '/BasicLayout',//
        name: 'BasicLayout',
        component: () => import('@/views/BasicLayout/index.vue')
      },
      {
        path: '/BasicContainer',//
        name: 'BasicContainer',
        component: () => import('@/views/BasicContainer/index.vue')
      },
      {
        path: '/FormRadio',//
        name: 'FormRadio',
        component: () => import('@/views/FormRadio/index.vue')
      },
      {
        path: '/FormCheckbox',//
        name: 'FormCheckbox',
        component: () => import('@/views/FormCheckbox/index.vue')
      },

    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
