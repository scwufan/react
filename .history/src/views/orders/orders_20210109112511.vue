<!--
 * @Author: your name
 * @Date: 2021-01-06 16:15:03
 * @LastEditTime: 2021-01-09 11:25:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ai\src\views\orders\orders.vue
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
        </div>
        <div class="box">
          <el-card class="box-card">
            <el-table :data="orders.slice((currentPage - 1) * pageSize, currentPage * pageSize)" style="width: 100%">
              <el-table-column label="#" width="40"> 
                <template slot-scope="scope">
                  <span>{{ scope.$index+1 }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="order_number" label="订单编号" width="240"> </el-table-column>
              <el-table-column prop="order_price" label="订单价格"> </el-table-column>
              <el-table-column label="是否付款">
                <template slot-scope="scope">
                  <span v-if="scope.row.order_pay==='0'"><el-tag type="danger">已付款</el-tag></span>
                </template>
              </el-table-column>
              <el-table-column prop="is_send" label="是否发货"> </el-table-column>
              <el-table-column prop="create_time" label="下单时间" width="200">
                <template slot-scope="scope">
                  <span>{{ timestampToTime(scope.row.create_time*1000) }}</span>
                </template>
              </el-table-column>
              <el-table-column label="操作"  width="240" class="does">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="primary"
                    @click="dialogFormVisible = true">编辑</el-button>
                    <el-dialog title="编辑用户" :visible.sync="dialogFormVisible">
                      <el-form
                        :model="form"
                        :rules="rules"
                        ref="form">
                        <el-form-item disabled label="用户名" prop="usernames" :label-width="formLabelWidth">
                          <el-input style="width:400px" v-model="form.usernames" autocomplete="off"></el-input>
                        </el-form-item>
                      </el-form>
                      <div slot="footer" class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="handleEdit(scope.$index, scope.row)">确 定</el-button>
                      </div>
                    </el-dialog>
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
              :page-sizes="[2, 5, 6, 7, 10]"
              :page-size="pageSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="orders.length"
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
let orderModule = createNamespacedHelpers("order");
let { mapState: orderState, mapActions: orderActions } = orderModule;
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      pagenum: 1,
      pagesize: 100,
      query: "",
      user_id: "",
      pay_status: "",
      is_send: "",
      order_fapiao_title: "",
      order_fapiao_company: "",
      order_fapiao_content: "",
      consignee_addr: "",
      input: '',
      currentPage: 1, //默认显示第一页
      pageSize: 5, //默认每页显示10条
      totalNum: null, //总页数
      value: "",
      dialogFormVisible: false,
      dialogVisible: false,
      form: {
          username: "",
          usernames: "",
          password: '',
          email: '',
          mobile: '',
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
      },
      formLabelWidth: '100px',
      form5: "",
    };
  },
  methods: {
    ...orderActions(["getOrdersList",]),
    //搜索
    ipt(){
      /* this.getUsers({
        query: this.input,
        pagenum: this.pagenum,
        pagesize: this.pagesize,
      }); */
    },
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
    //编辑用户
    /* handleEdit(index, row) {
      this.editUser({
        id: row.id,
        email: this.form.email,
        mobile: this.form.mobile
      });
      this.dialogFormVisible1 = false;
      this.getUsers({
        query: "",
        pagenum: this.pagenum,
        pagesize: this.pagesize,
      });
    }, */
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
    this.getOrdersList({
      query: "",
      pagenum: this.pagenum,
      pagesize: this.pagesize,
      user_id: this.user_id,
      pay_status: this.pay_status,
      is_send: this.is_send,
      order_fapiao_title: this.order_fapiao_title,
      order_fapiao_company: this.order_fapiao_company,
      order_fapiao_content: this.order_fapiao_content,
      consignee_addr: this.consignee_addr
    });
  },
  watch: {},
  computed: {
    ...orderState(["orders"]),
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
.does{
  width: 500px;
  display: flex;
  justify-content: space-between;
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
.Pagin {
  margin-top: 20px;
}
</style>
