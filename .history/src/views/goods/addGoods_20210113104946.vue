<!--
 * @Author: your name
 * @Date: 2021-01-13 10:40:00
 * @LastEditTime: 2021-01-13 10:49:46
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
            show-icon>
          </el-alert>
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
    return {};
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