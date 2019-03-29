<template>
  <div>
    GoodsInfo
  </div>
</template>

<script>
  export default {
    name: 'GoodsInfo',
    data () {
      return {
        list: [],
        cid: this.$route.params.cid
      }
    }
  }
</script>

<style lang="less" scoped>
</style>