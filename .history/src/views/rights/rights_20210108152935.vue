<!--
 * @Author: your name
 * @Date: 2021-01-06 16:10:52
 * @LastEditTime: 2021-01-08 15:29:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ai\src\views\rights\rights.vue
-->
<template>
  <div class="all">
    <div class="all_box">
      <el-card class="box-card">
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
            </el-table>
          </el-card>
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
      form5: "",
    };
  },
  methods: {
    ...roleActions(["rolesList", "addRoles", "deleteRoles", "editRoles"]),
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
