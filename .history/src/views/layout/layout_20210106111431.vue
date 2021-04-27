<!--
 * @Author: your name
 * @Date: 2021-01-06 10:07:10
 * @LastEditTime: 2021-01-06 11:14:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ai\src\views\layout\layout.vue
-->
<template>
  <div class="all">
    <div class="top">
      <div class="top_left">欢迎来到小爱后台系统</div>
      <div class="top_right">
        <div>{{ time }}</div>
        <div></div>
        <div>亲爱的，{{ user.username }}</div>
        <div class="logout">退出</div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      user: {},
      hour: "",
      time: ""
    };
  },
  methods: {},
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
    //this.time = dayjs().format("YYYY年MM月DD日 HH时mm分ss秒");
  },
  watch: {},
  computed: {
    this.time = dayjs().format("YYYY年MM月DD日 HH时mm分ss秒");
  }
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
  color: #2e5e85;
}
.top_left {
  padding-left: 50px;
}
.top_right {
  width: 400px;
  padding-right: 50px;
  display: flex;
  justify-content: space-between;
}
.logout {
  color: #409eff;
  cursor: pointer;
}
</style>
