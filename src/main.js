// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 按需导入mint-ui
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);


// 导入mui样式
import './lib/mui/css/mui.min.css'

//设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false  

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
