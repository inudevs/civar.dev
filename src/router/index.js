import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '@/pages/Index'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }
  ]
})