<!--
 * @Author: your name
 * @Date: 2021-01-06 16:14:15
 * @LastEditTime: 2021-01-12 14:35:52
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
        <div class="box">
          <el-card class="box-card">
            <el-table :data="categories.slice((currentPage - 1) * pageSize, currentPage * pageSize)" style="width: 100%">
              <el-table-column label="#" width="100"> 
                <template slot-scope="scope">
                  <span>{{ scope.$index+1 }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="cat_name" label="分类名称" align="center" width="350"> </el-table-column>
              <el-table-column label="是否有效" align="center" width="100">
                <template slot-scope="scope">
                  <span v-if="scope.row.cat_deleted===false"><i class="el-icon-success" style="color:#87CEEB"></i></span>
                </template>
              </el-table-column>
              <el-table-column  label="排序" align="center" width="100">
                <template slot-scope="scope">
                  <span v-if="scope.row.cat_level===0"><el-tag>一级</el-tag></span>
                  <span v-else-if="scope.row.cat_level===1"><el-tag type="success">二级</el-tag></span>
                  <span v-else-if="scope.row.cat_level===2"><el-tag type="warning">三级</el-tag></span>
                </template>
              </el-table-column>
              <el-table-column label="操作"  width="240">
                <template slot-scope="scope">
                  <el-button
                  size="mini"
                  type="primary"
                  @click="handleEdit(scope.$index, scope.row)"
                  icon="el-icon-edit"
                  ></el-button
                >
                  <el-button
                  size="mini"
                  type="danger"
                  icon="el-icon-delete"
                  @click="handleDelete(scope.$index, scope.row)"
                  ></el-button
                >
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </div>
        <div class="Pagin">
          <div class="block">
            <el-pagination
              @size-change="handleSe"
              @current-change="handleCe"
              :current-page="currentPage"
              :page-sizes="[5, 10, 20, 30]"
              :page-size="pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="categories.length"
            >
            </el-pagination>
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
      currentPage: 1, //默认显示第一页
      pageSize: 5, //默认每页显示10条
      totalNum: null, //总页数
    };
  },
  methods: {
    ...categorieActions(["getCategoriesList", "deleteCategories"]),
    // 删除单个用户
    handleDelete(index, row) {
      this.$confirm("永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          // 移除对应索引位置的数据，可以对row进行设置向后台请求删除数据
          this.deleteCategories(row.goods_id);
          this.getCategoriesList({
            query: "",
            pagenum: this.pagenum,
            pagesize: this.pagesize,
          });
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
      console.log(index, row);
    },
    handleSe(val) {
      //  console.log(`每页 ${val} 条`);
      this.pageSize = val; //动态改变
    },
    handleCe(val) {
      // console.log(`当前页: ${val}`);
      this.currentPage = val; //动态改变
    },
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
