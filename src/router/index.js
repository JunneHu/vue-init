import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'

import Home from '@/components/tabbar/Home'
import Cart from '@/components/tabbar/Cart'
import List from '@/components/tabbar/List'
import Center from '@/components/tabbar/Center'
import News from '@/components/News/News'
import Goods from '@/components/Goods/Goods'
import GoodsInfo from '@/components/Goods/GoodsInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }, {
      path: '/news/:cid',
      name: 'News',
      component: News
    }, {
      path: '/goods',
      name: 'Goods',
      component: Goods
    }, {
      path: '/goods/:cid',
      name: 'GoodsInfo',
      component: GoodsInfo
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/center',
      name: 'Center',
      component: Center
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
