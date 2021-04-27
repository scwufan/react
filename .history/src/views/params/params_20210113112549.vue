<!--
 * @Author: your name
 * @Date: 2021-01-06 16:13:37
 * @LastEditTime: 2021-01-13 11:25:49
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
            :closable="false"
            show-icon>
          </el-alert>
        </div>
        <div class="center">
          <div>选择商品分类:</div>
          <div class="cascader">
            <el-cascader
              :options="categories"
              :props="Props"
              @change="changes"
              >
              </el-cascader>
          </div>
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
      Props: {
        children: 'children',
        label: 'cat_name',
        checkStrictly: true,
        value: "cat_name",
        emitPath:"false"
      },
    };
  },
  methods: {
    ...categorieActions(["parameterList", "getCategoriesList"]),
    changes(val) {
      console.log(val)
    },
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
.center {
  display: flex;
  align-items: center;
  margin-top: 20px;
}
.cascader {
  margin-left: 20px;
}
</style>