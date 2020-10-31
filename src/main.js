import Vue from 'vue'
import VueRouter from 'vue-router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import '@/assets/css/font-face.css';
import '@/assets/css/all.min.css';

import '@/assets/vendor/font-awesome-4.7/css/font-awesome.min.css';
import '@/assets/vendor/font-awesome-5/css/fontawesome-all.min.css';

import '@/assets/vendor/mdi-font/css/material-design-iconic-font.min.css';

import '@/assets/css/theme.css';


import App from './App.vue'
Vue.use(VueRouter)


const routes = [
    {
        path: '/', name:'login',
        component: () => import('./components/LoginLayout.vue')
    },
    {
        path: '/home', name:'home',
        component: () => import('./components/CoffeeHome.vue')
    },
    {
        path: '/login', name:'login',
        component: () => import('./components/LoginLayout.vue')
    },
  {
      path: '/products', name:'products',
      component: () => import('./components/CoffeeProducts.vue')
  },
  {
      path: '/products/:coffeeId', name:'productsDetails',
      component: () => import('./components/CoffeeProductsDetails.vue')
  },
  {
      path: '/about', name:'about',
      component: () => import('./components/CoffeeAbout.vue')
  },
  {
      path: '/store', name:'store',
      component: () => import('./components/CoffeeStore.vue')
  }
]

const router = new VueRouter({
  routes
})



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
