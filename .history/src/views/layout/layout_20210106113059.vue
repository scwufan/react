<!--
 * @Author: your name
 * @Date: 2021-01-06 10:07:10
 * @LastEditTime: 2021-01-06 11:30:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ai\src\views\layout\layout.vue
-->
<template>
  <div class="all">
    <div class="top">
      <div class="top_left">欢迎来到小爱后台系统</div>
      <div class="top_right">
        <div>{{ time }} {{ hour }}{{ times }}</div>
        <div id="he-plugin-simple"></div>
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
      time: "",
      times: ""
    };
  },
  methods: {},
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.time = dayjs().format("YYYY/MM/DD");
    this.times = dayjs().format("HH:mm:ss");
    let hour = dayjs().format("HH");
    if (hour >= 6 && hour < 12) {
      this.hour = "上午";
    } else if (hour >= 12 && hour < 14) {
      this.hour = "中午";
    } else if (hour >= 14 && hour < 18) {
      this.hour = "下午";
    } else if (hour >= 18 && hour < 24) {
      this.hour = "晚上";
    }
  },
  watch: {},
  computed: {}
};
WIDGET = {
  CONFIG: {
    "modules": "01234",
    "background": 1,
    "tmpColor": "FFFFFF",
    "tmpSize": 16,
    "cityColor": "FFFFFF",
    "citySize": 16,
    "aqiSize": 16,
    "weatherIconSize": 24,
    "alertIconSize": 18,
    "padding": "10px 10px 10px 10px",
    "shadow": "1",
    "language": "auto",
    "borderRadius": 5,
    "fixed": "false",
    "vertical": "middle",
    "horizontal": "center",
    "key": "f4ffa27075194b7b9b8b7b58d4fa64d8"
  }
}
</script>
<script src="https://widget.qweather.net/simple/static/js/he-simple-common.js?v=2.0"></script>

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
