<!--
 * @Author: your name
 * @Date: 2021-01-06 16:15:50
 * @LastEditTime: 2021-01-14 17:35:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ai\src\views\reports\reports.vue
-->
<template>
  <div class="all">
    <div class="all_box">
      <div ref="chart" style="width:100%;height:376px"></div>
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
    return {};
  },
  methods: {
    ...reportActions(["queryReportsex"]),
    getEchartData() {
      const chart = this.$refs.chart
      if (chart) {
        const myChart = this.$echarts.init(chart)
        myChart.setOption(this.reports)
        window.addEventListener("resize", function() {
          myChart.resize()
        })
      }
    }
  },
  mounted() {
    this.queryReportsex()
  },
  watch: {
    reports() {
      this.getEchartData()
    }
  },
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
