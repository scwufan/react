<!--
 * @Author: your name
 * @Date: 2021-01-06 10:10:40
 * @LastEditTime: 2021-01-07 16:23:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ai\src\views\usersList\usersList.vue
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
          <div><el-button type="primary"  @click="dialogFormVisible = true">添加用户</el-button></div>
          <el-dialog title="添加用户" :visible.sync="dialogFormVisible">
            <el-form
              :model="form"
              :rules="rules"
              ref="form">
              <el-form-item label="用户名" prop="username" :label-width="formLabelWidth">
                <el-input style="width:400px" v-model="form.username" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password" :label-width="formLabelWidth">
                <el-input style="width:400px" v-model="form.password" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="邮箱" prop="email" :label-width="formLabelWidth">
                <el-input style="width:400px" v-model="form.email" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="手机号" prop="mobile" :label-width="formLabelWidth">
                <el-input style="width:400px" v-model="form.mobile" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="addUser">确 定</el-button>
            </div>
          </el-dialog>
        </div>
        <div class="box">
          <el-card class="box-card">
            <el-table :data="users" style="width: 100%">
              <el-table-column label="#" width="40"> 
                <template slot-scope="scope">
                  <span>{{ scope.$index+1 }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="username" label="姓名"> </el-table-column>
              <el-table-column prop="role_name" label="角色"> </el-table-column>
              <el-table-column prop="mobile" label="电话"> </el-table-column>
              <el-table-column prop="email" label="邮箱"> </el-table-column>
              <el-table-column label="状态">
                <template slot-scope="scope">
                  <el-switch v-model="scope.row.mg_state"></el-switch>
                </template> 
              </el-table-column>
              <el-table-column label="操作"  width="240">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="primary"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="dialogVisible = true">删除</el-button>
                  <el-button
                    size="mini"
                    type="warning"
                    @click="handleDistribution(scope.$index, scope.row)">分配</el-button>
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
let userModule = createNamespacedHelpers("user");
let { mapState: userState, mapActions: userActions } = userModule;
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      pagenum: 1,
      pagesize: 10,
      query: "",
      input: '',
      value: "",
      dialogFormVisible: false,
      dialogVisible: false,
      form: {
          username: '',
          password: '',
          email: '',
          mobile: '',
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
        ],
        mobile: [
          { required: true, message: "请输入手机号", trigger: "blur" },
        ]
      },
      formLabelWidth: '100px'
    };
  },
  methods: {
    ...userActions(["getUsers", "addUser"]),
    addUser() {
      this.addUser({
        username: this.form.username,
        password: this.form.password,
        email: this.form.email,
        mobile: this.form.mobile
      });
      this.getUsers({
        query: "",
        pagenum: this.pagenum,
        pagesize: this.pagesize,
      });
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  },
  mounted() {
    this.getUsers({
      query: "",
      pagenum: this.pagenum,
      pagesize: this.pagesize,
    });
  },
  watch: {},
  computed: {
    ...userState(["users"]),
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
