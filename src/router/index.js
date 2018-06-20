import Vue from 'vue'
import Router from 'vue-router'
import ReportIndex from '@/components/report/Index'
import OrgIndex from '@/components/org/Index'
import MockData from '@/components/MockData'
import DemoOne from '@/components/charts/DemoOne'

Vue.use(Router);

let router = new Router({
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
});

router.beforeEach((to, from, next) => {
  if (to.path.indexOf("/org") > -1) {
    let user = window.sessionStorage.getItem("user");
    if (user === null) {
      alert("访问机构页面请先登陆");
      next({
        path: '/'
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
