import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: ()=>import("@/views/index")
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: ()=>import("@/components/HelloWorld")
    },
    {
      path: '/map',
      name: 'map',
      component: ()=>import("@/views/map")
    },
    {
      path: '/map1',
      name: 'map1',
      component: ()=>import("@/views/map1")
    },
    {
      path: '/upload',
      name: 'upload',
      component: ()=>import("@/views/upload")
    },
    {
      path: '/attrs',
      name: 'attrs',
      component: ()=>import("@/views/attrs/grandpa")
    }
  ]
})
