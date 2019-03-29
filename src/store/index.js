import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {  // 状态  this.$store.state
    cart: [],
    needShowFooter: false,
    footerSelected: 0, //底部导航位置
  },
  mutations: {  // 方法  处理state   this.$store.commit('方法名', 传值)
    addToCart(state, goodsInfo) {
      var flag = false;
      state.cart.some(item => {
        if (item.id == goodsInfo.id) {
          item.count += parseInt(goodsInfo.count)
          flag = true;
          return true;
        }
      })
      if (!flag) {
        state.cart.push(goodsInfo)
      }
    },
    updateNeedShowFooter(state, val) {
      state.needShowFooter = val;
    },
    updateSelected(state, val) {
      state.footerSelected = val;
    },
  },
  actions: {

  }
});
