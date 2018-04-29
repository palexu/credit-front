import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import MockData from '@/components/mock/Mockdata'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: "/mock",
      name: "Mock",
      component: MockData
    }
  ]
})
