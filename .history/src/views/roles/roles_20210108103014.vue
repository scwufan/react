<template>
  <div class="all">
    <div class="all_box">
      <el-card class="box-card">
        <div class="top">
          <div><el-button type="primary"  @click="dialogFormVisible = true">添加角色</el-button></div>
          <el-dialog title="添加角色" :visible.sync="dialogFormVisible">
            <el-form
              :model="form"
              :rules="rules"
              ref="form">
              <el-form-item label="角色名" prop="username" :label-width="formLabelWidth">
                <el-input style="width:400px" v-model="form.username" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="角色描述" :label-width="formLabelWidth">
                <el-input style="width:400px" v-model="form.password" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary">确 定</el-button>
            </div>
          </el-dialog>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
let roleModule = createNamespacedHelpers("role");
let { mapState: roleState, mapActions: roleActions } = roleModule;
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      value: "",
      dialogFormVisible: false,
      dialogFormVisible1: false,
      dialogFormVisible2: false,
      dialogVisible: false,
      form: {
          username: "",
          describe:"",
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
    ...roleActions(["rolesList"]),
    //增加用户
    /* addUsers() {
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
    handleDelete(index, row){
      this.deleteUser(row.id)
      this.dialogVisible=false
      this.getUsers({
        query: "",
        pagenum: this.pagenum,
        pagesize: this.pagesize,
      });
    },
    //编辑用户
    handleEdit(index, row) {
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
    },
    //分配权限
    handleDistribution(index, row){
      this.distributionUser({
        id: row.id,
        rid: this.form5
      })
    }, */
  },
  mounted() {
    this.rolesList();
  },
  watch: {},
  computed: {
    ...roleState(["roles"]),
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
</style>
