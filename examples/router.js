import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const router =new Router({
        routes:[
          // 默认登录
        {
          path: '/',
          redirect: '/icon'
        },
        // icon
        {
          path: '/icon',
          component:resolve =>require(['../packages/icon/demo/icon.vue'],resolve),
        },
        {
          path: '/button',
          component:resolve =>require(['../packages/button/demo/button.vue'],resolve),
        },
        // 账号信息
        // {
        //   path:'/account',
        //   component:resolve =>require(['@/pages/account'],resolve),
        // },
        // // 分级大屏
        // {
        //   path:"/bigLung",
        //   component:resolve =>require(['@/pages/pfmsc_fenji/bigLung.vue'],resolve),
        // },
        // { path: '*', redirect: '/404', hidden: true },
        // // 统一打印页面
        // {
        //   path: '/print',
        //   component:resolve =>require(['@/pages/print.vue'],resolve),
        // },
        // // 浙大页面
        // {
        //   path: '/reportTit',
        //   component:resolve =>require(['@/pages/reportTit.vue'],resolve),
        // },
      ]
});

// 路由守卫
router.beforeEach((to, from, next) => {
  // console.log(to)
  // if (to.meta.title) {
  //   document.title = to.meta.title
  // }
  next();
})
export default  router
// export default new Router({
//   // mode: 'history', //后端支持可开
//   scrollBehavior: () => ({ y: 0 }),
//   routes: router
// })