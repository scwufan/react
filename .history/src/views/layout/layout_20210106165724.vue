<!--
 * @Author: your name
 * @Date: 2021-01-06 10:07:10
 * @LastEditTime: 2021-01-06 16:57:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ai\src\views\layout\layout.vue
-->
<template>
  <div class="all">
    <div class="top">
      <div class="top_left">欢迎来到小爱后台系统</div>
      <div class="top_right">
        <div>{{ time }} {{ hour }}{{ currentTime }}</div>
        <div>
          <iframe
            scrolling="no"
            src="https://tianqiapi.com/api.php?style=te&skin=pitaya"
            frameborder="0"
            width="130"
            height="16"
            allowtransparency="true"
          ></iframe>
        </div>
        <div>亲爱的，{{ user.username }}</div>
        <div class="logout">退出</div>
      </div>
    </div>
    <div>
      <el-container>
        <el-aside width="200px">
          <el-col :span="24">
            <el-menu
              router
              default-active="$route.path"
              class="el-menu-vertical-demo"
              background-color="#fff"
              text-color="#000"
              active-text-color="#15AAFB"
            >
              <el-menu-item index="/">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
              </el-menu-item>
              <el-submenu v-for="(item, index) in menus" :key="index" index="/">
                <span slot="title">{{ item.authName }}</span>
                <el-menu-item v-for="(itema, index) in item.children" :key="index">
                  <span slot="title">{{ itema.authName }}</span>
                </el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import { createNamespacedHelpers } from "vuex";
let menus = createNamespacedHelpers("menus");
let { mapState: menusState, mapActions: menusActions } = menus;
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      user: {},
      hour: "",
      time: "",
      timer: "", //定义一个定时器的变量
      currentTime: new Date() // 获取当前时间
    };
  },
  methods: {
    ...menusActions(["leftMenus"])
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.time = dayjs().format("YYYY/MM/DD");
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
    this.leftMenus();
  },
  watch: {},
  computed: {
    ...menusState(["menus"])
  },
  //获取时间
  created() {
    let _this = this; //声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(function() {
      _this.currentTime = //修改数据date
        new Date().getHours() +
        ":" +
        new Date().getMinutes() +
        ":" +
        new Date().getSeconds();
    }, 1000);
  },
  //销毁时间
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    }
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
  width: 500px;
  padding-right: 50px;
  display: flex;
  justify-content: space-between;
}
.logout {
  color: #409eff;
  cursor: pointer;
}
</style>
