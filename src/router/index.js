import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter) // 全局注册VueRouter

// 配置路由表
const routes = [
  // 按需加载login组件，按需加载的组件不需要在上面引入， name是给这条规则取的名字
  { path: '/login', name: 'login', component: () => import('@/views/login') }
]

const router = new VueRouter({
  routes
})

export default router
