<!--
 * @Author: your name
 * @Date: 2021-01-06 16:10:52
 * @LastEditTime: 2021-01-08 15:31:29
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
              <el-table-column prop="roleName" label="权限名称"> </el-table-column>
              <el-table-column prop="roleDesc" label="权限等级"> </el-table-column>
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
      
    };
  },
  methods: {
    ...roleActions(["rolesList"]),
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
</style>
