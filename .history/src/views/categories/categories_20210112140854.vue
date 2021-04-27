<!--
 * @Author: your name
 * @Date: 2021-01-06 16:14:15
 * @LastEditTime: 2021-01-12 14:08:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ai\src\views\categories\categories.vue
-->
<template>
  <div class="all">
    <div class="all_box">
      <el-card class="box-card">
        <div class="top">
          <div><el-button type="primary"  @click="dialogFormVisible = true">添加分类</el-button></div>
          <el-dialog title="添加分类" :visible.sync="dialogFormVisible">
            <el-form
              :model="form"
              :rules="rules"
              ref="form">
              <el-form-item label="分类名称" prop="cat_name" :label-width="formLabelWidth">
                <el-input style="width:400px" v-model="form.cat_name" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
          </el-dialog>
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
      dialogFormVisible:false,
      form: {
        cat_name:"",
      },
      rules: {
        cat_name: [
          { required: true, message: "请输入商品名称", trigger: "blur" },
        ],
      },
      formLabelWidth: '100px',
    };
  },
  methods: {
    ...categorieActions(["getCategoriesList"]),
  },
  mounted() {
    this.getCategoriesList({
      query: "",
      pagenum: this.pagenum,
      pagesize: this.pagesize,
    })
  },
  watch: {},
  computed: {
    ...categorieState(["categories"]),
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
.box {
  margin-top: 20px;
}
</style>
