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
              <el-form-item label="角色名" :label-width="formLabelWidth">
                <el-input style="width:400px" v-model="form.roleName" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="角色描述" :label-width="formLabelWidth">
                <el-input style="width:400px" v-model="form.describe" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="addRole">确 定</el-button>
            </div>
          </el-dialog>
        </div>
        <div class="box">
          <el-card class="box-card">
            <el-table :data="roles" style="width: 100%">
              <el-table-column label="#"> 
                <template slot-scope="scope">
                  <span>{{ scope.$index+1 }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="roleName" label="职位"> </el-table-column>
              <el-table-column prop="roleDesc" label="描述"> </el-table-column>
              <el-table-column label="操作"  width="240" class="does">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    type="primary"
                    @click="dialogFormVisible1 = true">编辑</el-button>
                  <el-button
                    size="mini"
                    type="danger">删除</el-button>
                  <el-button
                    size="mini"
                    type="warning"
                    @click="dialogFormVisible2 = true">分配</el-button>
                    <el-dialog title="分配用户" :visible.sync="dialogFormVisible2">
                      <el-form v-model="form">
                        <el-form-item label="用户名" :label-width="formLabelWidth" disabled>
                          <el-input v-model="form.username" auto-complete="off" disabled></el-input>
                        </el-form-item>
                        <el-form-item label="邮箱" :label-width="formLabelWidth">
                          <el-input v-model="form.email" auto-complete="off"  disabled></el-input>
                        </el-form-item>
                        <el-form-item label="角色ID" :label-width="formLabelWidth">
                          <el-input v-model="form5" auto-complete="off"></el-input>
                        </el-form-item>
                      </el-form>
                      <div slot="footer" class="dialog-footer">
                        <el-button @click="dialogFormVisible2 = false">取 消</el-button>
                        <!-- 设置触发更新的方法 -->
                        <el-button type="primary" @click="handleDistribution(scope.$index, scope.row)">确 定</el-button>
                      </div>
                    </el-dialog>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </div>
        <el-dialog title="编辑用户" :visible.sync="dialogFormVisible1">
            <el-form
            :model="form"
            :rules="rules"
            ref="form">
            <el-form-item disabled label="用户名" prop="usernames" :label-width="formLabelWidth">
                <el-input disabled style="width:400px" v-model="form.usernames" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email" :label-width="formLabelWidth">
                <el-input style="width:400px" v-model="form.email" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="mobile" :label-width="formLabelWidth">
                <el-input style="width:400px" v-model="form.mobile" autocomplete="off"></el-input>
            </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible1 = false">取 消</el-button>
            <el-button type="primary" @click="handleEdit(scope.$index, scope.row)">确 定</el-button>
            </div>
        </el-dialog>
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
          roleName: "",
          describe:"",
      },
      rules: {
        roleName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
      },
      formLabelWidth: '100px',
      form5: "",
    };
  },
  methods: {
    ...roleActions(["rolesList", "addRoles"]),
    //增加用户
    addRole() {
      this.addRoles({
        roleName: this.form.roleName,
        roleDesc: this.form.describe,
      });
      this.rolesList();
    },
    //修改用户状态
    /* changes(row){
      this.changeUser({
        uId:row.id,
        type:row.mg_state
      });
      this.getUsers({
        query: "",
        pagenum: this.pagenum,
        pagesize: this.pagesize,
      });
    }, */
    // 删除单个用户
    /* handleDelete(index, row){
      this.deleteUser(row.id)
      this.dialogVisible=false
      this.getUsers({
        query: "",
        pagenum: this.pagenum,
        pagesize: this.pagesize,
      });
    }, */
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
    //分配权限
    /* handleDistribution(index, row){
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
