// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import store from "./store"
import { Tabbar, TabbarItem, Swipe, SwipeItem, Row, Col, Icon, List, Field, Button, NavBar } from 'vant'
import httpServer from "./http/axios" //封装ajax请求
import Api from "./http/api"; //接口api
import validator from "./store/validator";  // 验证规则

import '../src/assets/css/common.less' // 公共样式
import moment from 'moment';

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.http.options.root = '';

Vue.use(Tabbar).use(TabbarItem).use(Swipe).use(SwipeItem).use(Row).use(Col).use(Icon).use(List).use(Field).use(Button).use(NavBar)


Vue.filter('dataFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern);
})

let ua = navigator.userAgent.toLowerCase();
Object.assign(Vue.prototype, {
  $axios: httpServer,
  $api: Api,
  $validator: validator,
  $isShowAlipay: ua.indexOf('micromessenger') == -1,  // 支付宝环境就显示支付宝支付
  goBack: () => {
    router.go(-1);
  },
  pushPath: (path) => {
    router.push(path);
  },
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
