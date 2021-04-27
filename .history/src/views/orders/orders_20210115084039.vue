<!--
 * @Author: your name
 * @Date: 2021-01-06 16:15:03
 * @LastEditTime: 2021-01-15 08:40:39
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
              <el-table-column prop="order_number" label="订单编号" width="200"> </el-table-column>
              <el-table-column prop="order_price" label="订单价格" align="center"> </el-table-column>
              <el-table-column label="是否付款" align="center">
                <template slot-scope="scope">
                  <span v-if="scope.row.order_pay==='0'"><el-tag type="danger">已付款</el-tag></span>
                </template>
              </el-table-column>
              <el-table-column prop="is_send" label="是否发货" align="center"> </el-table-column>
              <el-table-column prop="create_time" label="下单时间" width="200" align="center">
                <template slot-scope="scope">
                  <span>{{ timestampToTime(scope.row.create_time*1000) }}</span>
                </template>
              </el-table-column>
              <el-table-column label="操作"  width="240" align="center">
                <template slot-scope="scope">
                  <el-button
                  size="mini"
                  type="primary"
                  @click="dialogVisible = true"
                  icon="el-icon-edit"
                  ></el-button
                >
                  <el-button
                  size="mini"
                  type="success"
                  @click="handleEdit(scope.$index, scope.row)"
                  icon="el-icon-location-outline"
                  ></el-button
                >
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </div>
        <el-dialog title="收货地址" :visible.sync="dialogVisible">
          <el-cascader
            :options="cityOptions"
            :value="city"
            change-on-select
          >
          </el-cascader>
        </el-dialog>
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
import cityOptions from '../../../provinces-china-master/city_data2017_element'
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
      dialogVisible: false,
      dialogVisible1: false,
      form: {
          username: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
      },
      formLabelWidth: '100px',
      form5: "",
      cityOptions: cityOptions,
      city: "",
      id:'',
    };
  },
  methods: {
    ...orderActions(["getOrdersList", "queryKuaidi"]),
    //搜索
    ipt(){
      /* this.getUsers({
        query: this.input,
        pagenum: this.pagenum,
        pagesize: this.pagesize,
      }); */
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
    this.queryKuaidi()
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
