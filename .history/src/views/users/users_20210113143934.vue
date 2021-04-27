<!--
 * @Author: your name
 * @Date: 2021-01-06 10:10:40
 * @LastEditTime: 2021-01-13 14:39:34
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
            <div class="search" @click="ipt">
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
              <el-button type="primary" @click="addUsers">确 定</el-button>
            </div>
          </el-dialog>
        </div>
        <div class="box">
          <el-card class="box-card">
            <el-table :data="users.slice((currentPage - 1) * pageSize, currentPage * pageSize)" style="width: 100%">
              <el-table-column label="#" width="40"> 
                <template slot-scope="scope">
                  <span>{{ scope.$index+1 }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="username" label="姓名" align="center"> </el-table-column>
              <el-table-column prop="role_name" label="角色" align="center"> </el-table-column>
              <el-table-column prop="mobile" label="电话" align="center"> </el-table-column>
              <el-table-column prop="email" label="邮箱" align="center"> </el-table-column>
              <el-table-column label="状态" align="center">
                <template slot-scope="scope">
                  <el-switch v-model="scope.row.mg_state" @change="changes(scope.row)"></el-switch>
                </template> 
              </el-table-column>
              <el-table-column label="操作"  width="240" class="does" align="center">
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
                  ></el-button>
                  <el-button
                    size="mini"
                    type="warning"
                    icon="el-icon-setting"
                    @click="handleDistribution(scope.$index, scope.row)"></el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </div>
        <el-dialog title="编辑用户" :visible.sync="dialogFormVisible1">
          <el-form
            :model="forms"
            :rules="rules"
            ref="form">
            <el-form-item disabled label="用户名" prop="usernames" :label-width="formLabelWidth">
              <el-input disabled style="width:400px" v-model="forms.usernames" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email" :label-width="formLabelWidth">
              <el-input style="width:400px" v-model="forms.email" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="mobile" :label-width="formLabelWidth">
              <el-input style="width:400px" v-model="forms.mobile" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible1 = false">取 消</el-button>
            <el-button type="primary" @click="update">确 定</el-button>
          </div>
        </el-dialog>
        <el-dialog title="分配用户" :visible.sync="dialogFormVisible2">
          <div>当前用户: {{ arr.username }}</div>
          <div class="role">当前角色: {{ arr.role_name}}</div>
          <div>
            <template>
              <el-select v-model="value" placeholder="请选择" clearable>
                <el-option
                  
                  :value="arr.roleName">
                </el-option>
              </el-select>
            </template>
          </div>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible2 = false">取 消</el-button>
            <!-- 设置触发更新的方法 -->
            <el-button type="primary" @click="handleDistribution(scope.$index, scope.row)">确 定</el-button>
          </div>
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
              :total="users.length"
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
let userModule = createNamespacedHelpers("user");
let { mapState: userState, mapActions: userActions } = userModule;
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      id:"",
      pagenum: 1,
      pagesize: 10,
      query: "",
      input: '',
      currentPage: 1, //默认显示第一页
      pageSize: 5, //默认每页显示10条
      totalNum: null, //总页数
      value: "",
      dialogFormVisible: false,
      dialogFormVisible1: false,
      dialogFormVisible2: false,
      dialogVisible: false,
      form: {
          username: "",
          usernames: "",
          password: '',
          email: '',
          mobile: '',
      },
      forms: {},
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
      formLabelWidth: '100px',
      form5: "",
      arr:[],
    };
  },
  methods: {
    ...userActions(["getUsers", "addUser", "deleteUser", "changeUser", "editUser", "distributionUser", "rolesList"]),
    //增加用户
    addUsers() {
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
      this.dialogFormVisible = false
    },
    //搜索
    ipt(){
      this.getUsers({
        query: this.input,
        pagenum: this.pagenum,
        pagesize: this.pagesize,
      });
    },
    //修改用户状态
    changes(row){
      this.changeUser({
        uId:row.id,
        type:row.mg_state
      });
      this.getUsers({
        query: "",
        pagenum: this.pagenum,
        pagesize: this.pagesize,
      });
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
          this.deleteUser(row.id);
          this.getUsers({
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
    //编辑用户
    handleEdit(index, row) {
      // 将数据的index传递过来用于实现数据的回显
      this.forms = this.users[index];
      this.currentIndex = index;
      // 设置对话框的可见
      this.dialogFormVisible1 = true;
      console.log(index, row);
    },
    update() {
      this.editUser({
        id: this.forms.id,
        email: this.forms.email,
        mobile: this.forms.mobile
      });
      this.dialogFormVisible1 = false;
      this.getUsers({
        query: "",
        pagenum: this.pagenum,
        pagesize: this.pagesize,
      });
    },
    //分配权限
    /* handleDistribution(index, row){
      this.distributionUser({
        id: row.id,
        rid: this.form5
      })
    }, */
    handleDistribution(index, row) {
      // 将数据的index传递过来用于实现数据的回显
      this.arr = this.users[index];
      this.currentIndex = index;
      // 设置对话框的可见
      this.dialogFormVisible2 = true;
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
    this.getUsers({
      query: "",
      pagenum: this.pagenum,
      pagesize: this.pagesize,
    });
    this.rolesList();
  },
  watch: {},
  computed: {
    ...userState(["users", "roles"]),
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
.role {
  margin-top: 20px;
}
</style>
