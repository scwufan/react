<!--
 * @Author: your name
 * @Date: 2021-01-13 10:40:00
 * @LastEditTime: 2021-01-13 10:54:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ai\src\views\goods\addGoods.vue
-->
<template>
  <div class="all">
    <div class="all_box">
      <el-card class="box-card">
        <div>
          <el-alert
            title="添加商品信息"
            type="info"
            :closable="false"
            show-icon
            center>
          </el-alert>
        </div>
        <div>
          <el-tabs :tab-position="tabPosition" style="height: 200px;">
            <el-tab-pane label="基本信息">基本信息</el-tab-pane>
            <el-tab-pane label="商品参数">商品参数</el-tab-pane>
            <el-tab-pane label="商品属性">商品属性</el-tab-pane>
            <el-tab-pane label="商品图片">商品图片</el-tab-pane>
            <el-tab-pane label="商品内容">商品内容</el-tab-pane>
          </el-tabs>
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
      tabPosition: 'left'
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
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
</style>