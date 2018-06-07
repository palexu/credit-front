import Vue from 'vue'
import Router from 'vue-router'
import ReportIndex from '@/components/report/Index'
import OrgIndex from '@/components/org/Index'
import MockData from '@/components/MockData'
import DemoOne from '@/components/charts/DemoOne'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: ReportIndex
    },
    {
      path: '/org',
      name: 'Organization',
      component: OrgIndex
    },
    {
      path: "/mock",
      name: "Mock",
      component: MockData
    },
    {
      path: "/demo",
      name: "Demo",
      component: DemoOne
    }
  ]
})
