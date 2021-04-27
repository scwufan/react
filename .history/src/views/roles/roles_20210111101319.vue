<template>
  <div class="all">
    <div class="all_box">
      <el-card class="box-card">
        <div class="top">
          <div><el-button type="primary"  @click="dialogFormVisible = true">添加角色</el-button></div>
          <el-dialog title="添加角色" :visible.sync="dialogFormVisible">
            <el-form
              v-model="forms"
              ref="form">
              <el-form-item label="角色名" prop="roleName" :label-width="formLabelWidth">
                <el-input style="width:400px" v-model="forms1" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="角色描述" :label-width="formLabelWidth">
                <el-input style="width:400px" v-model="forms2" autocomplete="off"></el-input>
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
              <el-table-column type="expand">  
                <template slot-scope="scope">
                  <div v-if="scope.row.children.length<1">
                    <div>暂无数据</div>
                  </div>
                  <div v-else>
                    <div v-for="(item,index) in scope.row.children" :key="index" class="scope_a">
                        <el-tag closable>{{ item.authName }}</el-tag>
                        <div>
                        <div v-for="(itema,index) in item.children" :key="index" class="scope_b">
                            <el-tag closable type="success">{{ itema.authName }}</el-tag>
                            <div class="scope_d">
                            <div v-for="(itemb,index) in item.children" :key="index" class="scope_c">
                                <el-tag closable type="warning" @close="handleDelete1(scope.$index, scope.row)">{{ itemb.authName }}</el-tag>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                  </div>
                </template>
              </el-table-column>
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
        <el-dialog title="编辑用户" :visible.sync="dialogFormVisible1">
            <el-form
              :model="form"
              :rules="rules"
              ref="form">
              <el-form-item label="角色名" prop="roleName" :label-width="formLabelWidth">
                <el-input
                style="width:400px"
                v-model="form.roleName"
                autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item label="角色描述" :label-width="formLabelWidth">
                <el-input style="width:400px" v-model="form.describe" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible1 = false">取 消</el-button>
            <el-button type="primary" @click="update">确 定</el-button>
            </div>
        </el-dialog>
        <el-dialog title="分配权限" :visible.sync="dialogFormVisible2">
          <el-tree
            :data="roles"
            show-checkbox>
          </el-tree>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible2 = false">取 消</el-button>
            <!-- 设置触发更新的方法 -->
            <el-button type="primary" @click="handleDistribution(scope.$index, scope.row)">确 定</el-button>
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
      form: {
          roleName: "",
          describe:"",
      },
      forms:{},
      forms1:"",
      forms2:"",
      rules: {
        roleName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
      },
      formLabelWidth: '100px',
      trees:"tree"
    };
  },
  methods: {
    ...roleActions(["rolesList", "addRoles", "deleteRoles", "editRoles", "deleteRolesPower", "powerList"]),
    //增加用户
    addRole() {
      this.addRoles({
        roleName: this.forms1,
        roleDesc: this.forms2,
      });
      console.log(this.forms1)
      this.rolesList();
      this.dialogFormVisible = false
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
          this.deleteRoles(row.id);
          this.rolesList();
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
    // 删除单个用户
    handleDelete1(index, row) {
      this.$confirm("永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          // 移除对应索引位置的数据，可以对row进行设置向后台请求删除数据
          this.deleteRolesPower(row.roleId, row.rightId);
          this.rolesList();
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
      this.form = this.roles[index];
      this.currentIndex = index;
      // 设置对话框的可见
      this.dialogFormVisible1 = true;
      console.log(index, row);
    },
    update() {
      this.editRoles({
        id: this.form.id,
        roleName: this.form.roleName,
        roleDesc: this.form.describe,
      });
      this.dialogFormVisible1 = false;
      this.rolesList();
    },
  },
  mounted() {
    this.rolesList();
    this.powerList(this.trees);
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
.scope_a {
  display: flex;
  align-items: center;
}
.scope_b {
  display: flex;
  padding-left: 80px;
  align-items: center;
}
.scope_d {
  display: flex;
  padding: 20px 0;
  margin-left: 60px;
}
.scope_c {
  padding-left: 20px;
  flex-wrap: wrap;
}
</style>
