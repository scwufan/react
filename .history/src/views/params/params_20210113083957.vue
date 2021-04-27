<!--
 * @Author: your name
 * @Date: 2021-01-06 16:13:37
 * @LastEditTime: 2021-01-13 08:39:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ai\src\views\params\params.vue
-->
<template>
  <div class="all">
    <div class="all_box">
      <el-card class="box-card">
        <div>
          <el-alert
            title="警告提示的文案"
            type="warning">
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