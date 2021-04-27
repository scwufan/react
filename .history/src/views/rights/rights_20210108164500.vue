<!--
 * @Author: your name
 * @Date: 2021-01-06 16:10:52
 * @LastEditTime: 2021-01-08 16:45:00
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
            <el-table :data="rights" style="width: 100%">
              <el-table-column label="#"> 
                <template slot-scope="scope">
                  <span>{{ scope.$index+1 }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="authName" label="权限名称"> </el-table-column>
              <el-table-column label="权限等级" class="classes">
                <template slot-scope="scope">
                  <span v-if="scope.row.level==='0'"><el-tag>一级</el-tag></span>
                  <span v-else-if="scope.row.level==='1'"><el-tag type="success">二级</el-tag></span>
                  <span v-else-if="scope.row.level==='2'"><el-tag type="warning">三级</el-tag></span>
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
let rightModule = createNamespacedHelpers("right");
let { mapState: rightState, mapActions: rightActions } = rightModule;
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      lists:"list"
    };
  },
  methods: {
    ...rightActions(["powerList"]),
  },
  mounted() {
    this.powerList(this.lists);
  },
  watch: {},
  computed: {
    ...rightState(["rights"]),
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
.classes{
  text-align: center;
}
</style>
