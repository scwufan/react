<template>
  <div class="all">
    <el-card class="box-card">
      <div class="text item">
        <div class="top">欢迎来到小爱后台管理系统</div>
        <div class="center">
          <el-form label-width="100px" :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item label="请输入用户名" prop="name">
              <el-input
                placeholder="请输入用户名"
                v-model="username"
              ></el-input>
            </el-form-item>
            <el-form-item label="请输入密码" prop="pass">
              <el-input
                placeholder="请输入密码"
                show-password
                v-model="password"
                prepend="请输入密码"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="tips">
          特别提醒:
          如果您是管理员,请使用管理员账号登录,如果不知道账号,请联系公司人事。
        </div>
        <div class="bottom">
          <el-button type="primary" @click="submit">登录</el-button>
        </div>
      </div>
    </el-card>
  </div>
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
      ruleForm: {
        name: "",
        pass: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    ...userActions(["login"]),
    submit() {
      this.login({
        username: this.username,
        password: this.password
      });
    }
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
.tips {
  display: flex;
  justify-content: center;
  font-size: 16px;
  padding-top: 30px;
}
.bottom {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
</style>
