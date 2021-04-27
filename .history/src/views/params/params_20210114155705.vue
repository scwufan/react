<!--
 * @Author: your name
 * @Date: 2021-01-06 16:13:37
 * @LastEditTime: 2021-01-14 15:57:05
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
            show-icon
          >
          </el-alert>
        </div>
        <div class="center">
          <div>选择商品分类:</div>
          <div class="cascader">
            <el-cascader
              :options="categories"
              :props="Props"
              @change="changes"
              v-model="value"
              level="1"
              :show-all-levels="false"
              clearable
            >
              <template slot-scope="{ node, data }">
                <div @click="todeta(data)">
                  <span>{{ data.cat_name }}</span>
                </div>
              </template>
            </el-cascader>
          </div>
        </div>
        <div class="box1">
          <div class="tables">
            <el-tabs v-model="activeName">
              <el-tab-pane label="动态参数">
                <div>
                  <el-button size="mini" type="primary" @click="handle1"
                    >添加参数</el-button
                  >
                </div>
                <el-table
                  :data="categories1"
                  style="width: 100%"
                  highlight-current-row
                >
                  <el-table-column label="#" width="120">
                    <template slot-scope="scope">
                      <span>{{ scope.$index + 1 }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="参数名称" width="280">
                    <template slot-scope="scope">
                      <span>{{ scope.row.attr_name }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作" width="200">
                    <template slot-scope="scope">
                      <el-button
                        size="mini"
                        type="primary"
                        @click="handleEdit(scope.$index, scope.row)"
                        >编辑</el-button
                      >
                      <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)"
                        >删除</el-button
                      >
                    </template>
                  </el-table-column>
                </el-table>
              </el-tab-pane>
              <el-tab-pane label="静态参数">
                <div>
                  <el-button size="mini" type="primary" @click="handle2"
                    >添加属性</el-button
                  >
                </div>
                <el-table
                  :data="categories2"
                  style="width: 100%"
                  highlight-current-row
                >
                  <el-table-column label="#" width="220">
                    <template slot-scope="scope">
                      <span>{{ scope.$index + 1 }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="参数名称" width="280">
                    <template slot-scope="scope">
                      <span>{{ scope.row.attr_name }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作" width="240">
                    <template slot-scope="scope">
                      <el-button
                        size="mini"
                        type="primary"
                        @click="handleEdit(scope.$index, scope.row)"
                        >编辑</el-button
                      >
                      <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)"
                        >删除</el-button
                      >
                    </template>
                  </el-table-column>
                </el-table>
              </el-tab-pane>
            </el-tabs>
          </div>
          <el-dialog title="编辑参数" :visible.sync="dialogFormVisible">
            <el-form>
              <el-form-item label="动态参数" :label-width="formLabelWidth">
                <el-input
                  v-model="form.attr_name"
                  auto-complete="off"
                ></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="cancel">取 消</el-button>
              <!-- 设置触发更新的方法 -->
              <el-button type="primary" @click="update">确 定</el-button>
            </div>
          </el-dialog>
          <el-dialog title="添加参数" :visible.sync="show1">
            <el-form>
              <el-form-item label="动态参数" :label-width="formLabelWidth">
                <el-input v-model="form1" auto-complete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="cancel1">取 消</el-button>
              <!-- 设置触发更新的方法 -->
              <el-button type="primary" @click="update1">确 定</el-button>
            </div>
          </el-dialog>
          <el-dialog title="添加参数" :visible.sync="show2">
            <el-form>
              <el-form-item label="静态参数" :label-width="formLabelWidth">
                <el-input v-model="form2" auto-complete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="cancel2">取 消</el-button>
              <!-- 设置触发更新的方法 -->
              <el-button type="primary" @click="update2">确 定</el-button>
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
let {
  mapState: categorieState,
  mapActions: categorieActions,
} = categorieModule;
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      pagenum: 1,
      pagesize: 100,
      query: "",
      Props: {
        children: "children",
        label: "cat_name",
        id: "cat_id",
        value: "cat_name",
        level: 1,
      },
      arrs: {},
      value: "",
      currentRow: null,
      dialogFormVisible: false,
      loading: false,
      form: {},
      values: "",
      formLabelWidth: "80px",
      currentPage: 1, //默认显示第一页
      pageSize: 5, //默认每页显示10条
      totalNum: null, //总页数
      show1: false,
      show2: false,
      activeName: 0,
      sel: "mang",
      form1: "",
      form2: "",
    };
  },
  methods: {
    ...categorieActions([
      "parameterList1",
      "parameterList2",
      "getCategoriesList",
      "editCategories",
      "addParameter",
    ]),
    //选择商品分类
    changes(val) {
      console.log(val);
    },
    todeta(data) {
      this.arrs = data;
      console.log(this.arrs);
      this.parameterList1({
        id: this.arrs.cat_id,
        sel: "many",
      });
      this.parameterList2({
        id: this.arrs.cat_id,
        sel: "only",
      });
    },
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handle1() {
      this.sel = "many";
      this.show1 = true;
    },
    handle2() {
      this.sel = "only";
      this.show2 = true;
    },
    update() {
      this.editCategories({
        id: this.arrs.cat_id,
        attrId: this.form.attr_id,
        attr_name: this.form.attr_name,
        attr_sel: this.form.attr_sel,
        attr_vals: this.form.attr_vals,
      });
      this.parameterList1({
        id: this.arrs.cat_id,
        sel: "many",
      });
      this.parameterList2({
        id: this.arrs.cat_id,
        sel: "only",
      });
      this.dialogFormVisible = false;
    },
    cancel1() {
      // 取消的时候直接设置对话框不可见即可
      this.show1 = false;
    },
    cancel2() {
      // 取消的时候直接设置对话框不可见即可
      this.show2 = false;
    },
    cancel() {
      // 取消的时候直接设置对话框不可见即可
      this.dialogFormVisible = false;
    },
    handleEdit(index, row) {
      // 将数据的index传递过来用于实现数据的回显
      this.form = row;
      this.currentIndex = index;
      // 设置对话框的可见
      this.dialogFormVisible = true;
      console.log(index, row);
    },
    handleshow(index, row) {
      this.form = this.goods[index];
      this.currentIndex = index;
      // 设置对话框的可见
      this.show2 = true;
      console.log(index, row);
    },
    //删除参数
    handleDelete(index, row) {
      this.$confirm("永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          // 移除对应索引位置的数据，可以对row进行设置向后台请求删除数据
          this.deleteParameter({
            id: this.arrs.cat_id,
            attrid: row.attr_id,
          });
          this.parameterList1({
            id: this.arrs.cat_id,
            sel: "many",
          });
          this.parameterList2({
            id: this.arrs.cat_id,
            sel: "only",
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
    //添加动态参数
    update1() {
      this.addParameter({
        id: this.arrs.cat_id,
        attr_name: this.form1,
        attr_sel: this.sel,
        attr_vals: this.form1,
      });
      this.parameterList1({
        id: this.arrs.cat_id,
        sel: "many",
      });
      this.parameterList2({
        id: this.arrs.cat_id,
        sel: "only",
      });
      this.show1 = false;
    },
    //添加静态参数
    update2() {
      this.addParameter({
        id: this.arrs.cat_id,
        attr_name: this.form2,
        attr_sel: this.sel,
        attr_vals: this.form2,
      });
      this.parameterList1({
        id: this.arrs.cat_id,
        sel: "many",
      });
      this.parameterList2({
        id: this.arrs.cat_id,
        sel: "only",
      });
      this.show2 = false;
    },
  },
  mounted() {
    this.getCategoriesList({
      type: [1, 2, 3],
      pagenum: 1,
      pagesize: 5,
    });
  },
  watch: {},
  computed: {
    ...categorieState(["categories", "categories1", "categories2"]),
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