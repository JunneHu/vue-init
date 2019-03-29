<template>
  <div class="login">
    <van-field v-model="phone" type="tel" required clearable label="手机号" placeholder="请输入手机号" />
    <van-field v-model="password" type="password" required clearable label="密码" placeholder="请输入密码" />
    <van-button type="primary" v-on:click="toLogin" class="login-btn">登录</van-button>
  </div>
</template>

<script>
  import { Toast } from 'vant';
  export default {
    name: 'login',
    data () {
      return {
        phone: '',
        password: ''
      }
    },
    mounted() {
    },
    methods: {
      toLogin() {
        if (!this.phone || !this.password) {
          return Toast('手机号或者密码不能为空');
        }
        this.$axios(this.$api.login, { phone: this.phone, password: this.password }).then((res) => {
          if (res.code === '0') {
            if (res.data) {
              Toast(res.message);
              localStorage.setItem('userinfo', JSON.stringify(res.data.userinfo))
              this.pushPath('/');
            }
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .login-btn {
    display: block;
    margin: 40px auto;
    width: 80%;
  }
</style>