<template>
  <div>List
  </div>
</template>

<script>
  export default {
    name: 'List',
    mounted() {
      this.$store.commit("updateNeedShowFooter", true);
      this.$store.commit("updateSelected", 1);
    },
    data () {
      return {

      }
    }
  }
</script>

<style lang="less" scoped>
</style>