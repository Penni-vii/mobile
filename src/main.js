import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 一般要先引入第三方的样式，再引入自己的样式，注意顺序问题，不然会出现自己写的样式被层叠掉的问题
import './utils/register-vant' // 引入vant组件的js文件
import './styles/index.less' // 引入自己的样式文件

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
