// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/start'
//引入全局变量托管vuex
import Vuex from 'vuex'
import store from '@/store/store'
import 'lib-flexible'
//顶部标题
import VueWechatTitle from 'vue-wechat-title'//路由跳转顶部标题
//提示框
import './components/Toast/toast.css';
import Toast from './components/Toast/index';
Vue.use(Toast);

Vue.use(Vuex);

Vue.use(VueWechatTitle);
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
