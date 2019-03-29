<template>
  <div>Center
  </div>
</template>

<script>
  export default {
    name: 'Center',
    mounted() {
			this.$store.commit("updateNeedShowFooter", true);
			this.$store.commit("updateSelected", 3);
		},
    data () {
      return {

      }
    }
  }
</script>

<style lang="less" scoped>
</style>