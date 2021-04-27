<!--
 * @Author: your name
 * @Date: 2021-01-06 16:13:37
 * @LastEditTime: 2021-01-13 10:31:26
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
            title="注意:只允许为第三级分类设置相关参数!"
            type="warning"
            :closable="false">
          </el-alert>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
let categorieModule = createNamespacedHelpers("categorie");
let { mapState: categorieState, mapActions: categorieActions } = categorieModule;
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      pagenum: 1,
      pagesize: 100,
      query: "",
      only:"only",
    };
  },
  methods: {
    ...categorieActions(["parameterList", "getCategoriesList"]),
  },
  mounted() {
    this.getCategoriesList({
      query: "",
      pagenum: this.pagenum,
      pagesize: this.pagesize,
    }),
    this.parameterList({
      id:this.id,
      sel:this.only
    })
  },
  watch: {},
  computed: {
    ...categorieState(["params", "categories"]),
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
</style>