<template>
  <div class="all">
    <el-card class="box-card">
      <div class="text item">
        <div class="top">欢迎来到小爱后台管理系统</div>
        <div class="center">
        <el-form ref="form" :model="form" :rules="rules" label-width="100px">
          <el-form-item label="请输入用户名">
            <el-input placeholder="请输入用户名" v-model="username"></el-input>
          </el-form-item>
          <el-form-item label="请输入密码">
            <el-input placeholder="请输入密码" show-password v-model="password" prepend="请输入密码"
            ></el-input>
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
      password: "",
      rules: {
        password: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          },
          {
            min: 6,
            max: 15,
            message: "密码在6-15位之间",
            trigger: "blur"
          }
        ],
        username: [
          { 
            required: true,
            message:'用户名不能为空',
            trigger:'blur'
          },
          {
            min: 2,
            max: 10,
            message: "用户名在2-10位之间",
            trigger: "blur"
          }
        ]
      }
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
