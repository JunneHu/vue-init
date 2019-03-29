<template>
  <div>Cart
  </div>
</template>

<script>
  export default {
    name: 'Cart',
    mounted() {
			this.$store.commit("updateNeedShowFooter", true);
			this.$store.commit("updateSelected", 2);
		},
    data () {
      return {

      }
    }
  }
</script>

<style lang="less" scoped>
</style>