<template>
  <div>
    Goods
  </div>
</template>

<script>
  export default {
    name: 'Goods',
    data () {
      return {
        list: [],
        cid: this.$route.params.cid
      }
    },
    methods: {
      addToShopCart() {

      }
    },
  }
</script>

<style lang="less" scoped>
</style>