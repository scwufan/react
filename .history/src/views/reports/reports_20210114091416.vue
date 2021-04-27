<!--
 * @Author: your name
 * @Date: 2021-01-06 16:15:50
 * @LastEditTime: 2021-01-14 09:14:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ai\src\views\reports\reports.vue
-->
<template>
  <div class="all">
    <div class="all_box">
      <template>
        <ve-line :data="chartData" :settings="chartSettings"></ve-line>
      </template>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
let reportModule = createNamespacedHelpers("report");
let { mapState: reportState, mapActions: reportActions } = reportModule;
export default {
  name: "",
  props: {},
  components: {},
  data() {
    this.chartSettings = {
        stack: { '用户': ['访问用户', '下单用户'] },
        area: true
    }
    return {
      chartData: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
        }
    };
  },
  methods: {
    ...reportActions(["queryReportsex"]),
  },
  mounted() {
    this.queryReportsex()
  },
  watch: {},
  computed: {
    ...reportState(["reports"]),
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
