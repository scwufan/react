<template>
  <div class="all">
    <el-card class="box-card">
      <div class="text item">
        <div class="top">欢迎来到小爱后台管理系统</div>
        <div class="center">
        <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="活动名称">
          <el-input></el-input>
        </el-form-item>
        </el-form>
         
        </div>
      </div>
    </el-card>
  </div>
  <!-- <div>
    
    <el-button type="primary" @click="submit">登录</el-button>
  </div> -->
</template>

<script>
import { createNamespacedHelpers } from "vuex";
let userModule = createNamespacedHelpers("user");
let { mapActions: userActions } = userModule;

export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    ...userActions(["login"]),
    /* submit() {
      this.login({
        username: this.username,
        password: this.password
      });
    } */
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang="scss">
.all {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 550px;
}
.text {
  font-size: 14px;
}
.box-card {
  width: 640px;
}
.box-card2 {
  width: 640px;
}
.top {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 34px;
  font-weight: 700;
}
.center {
  width: 510px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
