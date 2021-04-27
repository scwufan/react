<!--
 * @Author: your name
 * @Date: 2021-01-06 10:07:10
 * @LastEditTime: 2021-01-06 10:55:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ai\src\views\layout\layout.vue
-->
<template>
  <div class="all">
    <div class="top">
      <div class="top_left">欢迎来到小爱后台系统</div>
      <div class="top_right">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang="scss">
.all {
  width: 100%;
}
.top {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.top_left {
  padding-left: 50px;
}
.top_right {
  width: 400px;
  padding-right: 50px;
}
</style>
