<!--
 * @Author: your name
 * @Date: 2021-01-06 16:11:37
 * @LastEditTime: 2021-01-12 08:52:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ai\src\views\goods\goods.vue
-->
<template>
  <div class="all">
    <div class="all_box">
      <el-card class="box-card">
        <div class="top">
          <div class="input">
            <el-input placeholder="请输入内容" v-model="input" clearable>
            </el-input>
            <div class="search">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </div>
          </div>
          <div><el-button type="primary"  @click="dialogFormVisible = true">添加商品</el-button></div>
          <el-dialog title="添加角色" :visible.sync="dialogFormVisible">
          </el-dialog>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      input: '',
      dialogFormVisible: false,
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
};
</script>

<style scoped lang='scss'>
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
  border-top: 1px solid #dcdfe6;
  border-right: 1px solid #dcdfe6;
  border-bottom: 1px solid #dcdfe6;
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
  border-bottom: 1px solid #dcdfe6;
}
</style>