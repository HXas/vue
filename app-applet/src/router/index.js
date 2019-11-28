import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/tagpages/home'
import Index from '@/tagpages/tagitempages/index'
import Journal from '@/tagpages/tagitempages/Journal'
import Mypage from '@/tagpages/tagitempages/mypage'
import Page from '@/pages/page'
import Login from '@/pages/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      hidden:true,
      meta: {
        title: '登录'
      }
    },{
      path:'/',
      redirect:'/home'
    },{
      path: '/home',
      name: 'Home',
      redirect: '/home/index',
      component: Home,
      children: [{
        path: '/home/index',
        name: 'Index',
        component: Index,
        meta: {
          title: '首页'
        }
      }, {
        path: '/home/Journal',
        name: 'Journal',
        component: Journal,
        meta: {
          title: '日志'
        }
      }, {
        path: '/home/mypage',
        name: 'Mypage',
        component: Mypage,
        meta: {
          title: '我的'
        }
      }]
    }, {
      path: '/page',
      name: 'Page',
      component: Page,
      meta: {
        title: '页面一'
      }
    }]
})
