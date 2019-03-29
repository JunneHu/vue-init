<template>
  <div class="app-container">
    <van-nav-bar title="首页" fixed @click-left="onClickLeft" />
    <transition>
      <router-view />
    </transition>
    <van-tabbar v-model="selected" v-show="needShowFooter">
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="shop-o" to="/list">商品</van-tabbar-item>
      <van-tabbar-item icon="cart-o" info="5" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" dot to="/center">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
      }
    },
    computed: {
      needShowFooter() {
        return this.$store.state.needShowFooter;
      },
      selected: {
        get() {
          return this.$store.state.footerSelected;
        },
        set(newValue) {
          this.$store.state.footerSelected = newValue
        }
      }
    },
    watch: {
      '$route'(to, from) {
        if (to.name == "Home" || to.name == "List" || to.name == "Center" || to.name == "Cart") {
          this.$store.commit("updateNeedShowFooter", true);
        } else {
          setTimeout(() => {
            this.$store.commit("updateNeedShowFooter", false);
          }, 10)
        }
      },
    },
    methods: {
      onClickLeft() {

      }
    },
  }
</script>

<style lang="less" scoped>
  .app-container {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 46px;
    overflow-x: hidden;
  }

  .v-enter {
    opacity: 0;
    transform: translateX(100%);
  }

  .v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }

  .v-enter-active,
  .v-leave-active {
    transition: all 0.5s ease;
  }

  .van-tabbar-item {
    text-align: center;
    a {
      color: #7d7e80;
    }
    &.van-tabbar-item--active {
      a {
        color: #1989fa;
      }
    }
  }
</style>