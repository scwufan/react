<!--
 * @Author: your name
 * @Date: 2021-01-06 10:10:40
 * @LastEditTime: 2021-01-07 09:44:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ai\src\views\usersList\usersList.vue
-->
<template>
  <div class="all">
    <div class="all_box">
      <el-card class="box-card">
        <div class="top">
          <div class="input">
            <el-input
              placeholder="请输入内容"
              v-model="input"
              clearable>
            </el-input>
            <div class="search">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </div>
          </div>
          <div><el-button type="primary">添加用户</el-button></div>
        </div>
        <div class="box">
          <el-card class="box-card">
            <div class="box_top"></div>
            <div></div>
          </el-card>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
let userModule = createNamespacedHelpers('user')
let {mapState: userState, mapActions: userActions} = userModule
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      pagenum: 1,
      pagesize: 10,
      query: ''
    };
  },
  methods: {
    ...userActions(['getUsers'])
  },
  mounted() {
    this.getUsers({
      query: '',
      pagenum: this.pagenum,
      pagesize: this.pagesize
    })
  },
  watch: {},
  computed: {
    ...userState(['users'])
  },
};
</script>

<style scoped lang="scss">
.all {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 80px;
}
.all_box {
  width: 95%;
}
.top {
  display: flex;
}
.input {
  display: flex;
}
.search {
  width: 60px;
  height: 39px;
  border-top: 1px solid #DCDFE6;
  border-right: 1px solid #DCDFE6;
  border-bottom: 1px solid #DCDFE6;
  border-radius: 5px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.box {
  margin-top: 20px;
}
.box_top {
  width: 100%;
  height: 50px;
  display: flex;
  border-bottom: 1px solid #DCDFE6;
}
</style>
