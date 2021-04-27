<!--
 * @Author: your name
 * @Date: 2021-01-06 16:11:37
 * @LastEditTime: 2021-01-12 09:37:04
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
        <div class="box">
          <el-card class="box-card">
            <el-table :data="goods" style="width: 100%">
              <el-table-column label="#" width="100"> 
                <template slot-scope="scope">
                  <span>{{ scope.$index+1 }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="roleName" label="商品名称" align="center" width="250"> </el-table-column>
              <el-table-column prop="roleDesc" label="商品价格（元）" align="center" width="100"> </el-table-column>
              <el-table-column prop="roleDesc" label="商品重量" align="center" width="100"> </el-table-column>
              <el-table-column prop="roleDesc" label="创建时间" align="center" width="100"> </el-table-column>
              <el-table-column label="操作"  width="240" class="does" align="center">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="primary"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                    >删除</el-button>
                  <el-button
                    size="mini"
                    type="warning"
                    @click="dialogFormVisible2 = true">分配权限</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
let goodModule = createNamespacedHelpers("good");
let { mapState: goodState, mapActions: goodActions } = goodModule
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      input: '',
      dialogFormVisible: false,
      pagenum: 1,
      pagesize: 1000,
      query: "",
    };
  },
  methods: {
    ...goodActions(["addGoods", "getGoodsList"])
  },
  mounted() {
    this.getGoodsList({
      query: "",
      pagenum: this.pagenum,
      pagesize: this.pagesize,
    });
  },
  watch: {},
  computed: {
    ...goodState(["goods",]),
  },
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