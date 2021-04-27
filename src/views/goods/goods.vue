<!--
 * @Author: your name
 * @Date: 2021-01-06 16:11:37
 * @LastEditTime: 2021-01-13 10:45:24
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
            <div class="search" @click="ipt">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </div>
          </div>
          <div><el-button type="primary"  @click="addGoods">添加商品</el-button></div>
        </div>
        <div class="box">
          <el-card class="box-card">
            <el-table :data="goods.slice((currentPage - 1) * pageSize, currentPage * pageSize)" style="width: 100%">
              <el-table-column label="#" width="100"> 
                <template slot-scope="scope">
                  <span>{{ scope.$index+1 }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="goods_name" label="商品名称" align="center" width="350"> </el-table-column>
              <el-table-column prop="goods_price" label="商品价格（元）" align="center" width="100"> </el-table-column>
              <el-table-column prop="goods_weight" label="商品重量" align="center" width="100"> </el-table-column>
              <el-table-column  label="创建时间" align="center" width="100">
                <template slot-scope="scope">
                  <span>{{ timestampToTime(scope.row.add_time*1000) }}</span>
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
        <el-dialog title="编辑商品" :visible.sync="dialogVisible">
          <el-form
              :model="form"
              :rules="rules"
              ref="form">
              <el-form-item label="商品名称" prop="goods_name" :label-width="formLabelWidth">
                <el-input
                style="width:400px"
                v-model="form.goods_name"
                autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item label="商品价格" prop="goods_price" :label-width="formLabelWidth">
                <el-input
                style="width:400px"
                v-model="form.goods_price"
                autocomplete="off"
                type="number"
                ></el-input>
              </el-form-item>
              <el-form-item label="商品数量" prop="goods_number" :label-width="formLabelWidth">
                <el-input
                style="width:400px"
                v-model="form.goods_number"
                autocomplete="off"
                type="number"
                ></el-input>
              </el-form-item>
              <el-form-item label="商品重量" prop="goods_weight" :label-width="formLabelWidth">
                <el-input
                style="width:400px"
                v-model="form.goods_weight"
                autocomplete="off"
                type="number"
                ></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="update">确 定</el-button>
            </div>
        </el-dialog>
        <div class="Pagin">
          <div class="block">
            <el-pagination
              @size-change="handleSe"
              @current-change="handleCe"
              :current-page="currentPage"
              :page-sizes="[10, 30, 50, 100]"
              :page-size="pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="goods.length"
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
      dialogVisible: false,
      pagenum: 1,
      pagesize: 1000,
      query: "",
      currentPage: 1, //默认显示第一页
      pageSize: 10, //默认每页显示10条
      totalNum: null, //总页数
      form: {
          goods_name: "",
          goods_price: "",
          goods_number: "",
          goods_weight: "",
      },
      rules: {
        goods_name: [
          { required: true, message: "请输入商品名称", trigger: "blur" },
        ],
        goods_price: [
          { required: true, message: "请输入商品价格", trigger: "blur" },
        ],
        goods_number: [
          { required: true, message: "请输入商品数量", trigger: "blur" },
        ],
        goods_weight: [
          { required: true, message: "请输入商品重量", trigger: "blur" },
        ],
      },
      formLabelWidth: '100px',
    };
  },
  methods: {
    ...goodActions(["addGoods", "getGoodsList", "deleteGood"]),
    //搜索
    ipt(){
      this.getGoodsList({
        query: this.input,
        pagenum: this.pagenum,
        pagesize: this.pagesize,
      });
    },
    addGoods(){
      this.$router.push("/addGoods")
    },
    //时间转换方法
    timestampToTime(cjsj) {
      var date = new Date(cjsj); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + "-";
      var M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      var D = date.getDate()<10?'0'+date.getDate()+" ":date.getDate()+" ";
      var h = date.getHours()<10?'0'+date.getHours()+":":date.getHours()+":";
      var m = date.getMinutes()<10?'0'+date.getMinutes()+":":date.getMinutes()+":";
      var s = date.getSeconds()<10?'0'+date.getSeconds():date.getSeconds();
      return Y + M + D + h + m + s;
      //console.log(timestampToTime(1533293827000));
    },
    handleSe(val) {
      //  console.log(`每页 ${val} 条`);
      this.pageSize = val; //动态改变
    },
    handleCe(val) {
      // console.log(`当前页: ${val}`);
      this.currentPage = val; //动态改变
    },
    //编辑用户
    handleEdit(index, row) {
      // 将数据的index传递过来用于实现数据的回显
      this.form = this.goods[index];
      this.currentIndex = index;
      // 设置对话框的可见
      this.dialogVisible = true;
      console.log(index, row);
    },
    update() {
      this.$message({
        type: "success",
        message: "编辑成功",
        });
      this.dialogVisible = false;
    },
    // 删除单个用户
    handleDelete(index, row) {
      this.$confirm("永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          // 移除对应索引位置的数据，可以对row进行设置向后台请求删除数据
          this.deleteGood(row.goods_id);
          this.getGoodsList({
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