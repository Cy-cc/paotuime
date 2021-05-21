// import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '*',
      component:()=>import("../components/noFound")
    },
    {
      path: '/',
      name: 'Index',
      component:()=>import("../components/index")
    },
    {
      path: '/toLogin',
      name: 'login',
      component:()=>import("../components/login")
    },
    {
      path: '/toManage',
      name: 'manage',
      redirect: '/toManage/toOrderSquare',
      component:()=>import("../components/manage"),
      children:[
        {
          path: 'toSearch',
          name: 'search',
          component:()=>import("../components/search")
        },
        {
          path: 'toMyOrder',
          name: 'myorder',
          component:()=>import("../components/myorder")
        },
        {
          path: 'toOrderSquare',
          name: 'OrderSquare',
          component:()=>import("../components/OrderSquare")
        },
        {
          path: 'toLeastOrder',
          name: 'LeastOrder',
          component:()=>import("../components/LeastOrder")
        }
      ]
    }
  ]
})
