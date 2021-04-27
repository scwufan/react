<!--
 * @Author: your name
 * @Date: 2021-01-06 16:15:50
 * @LastEditTime: 2021-01-14 10:46:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ai\src\views\reports\reports.vue
-->
<template>
  <div class="all">
    <div class="all_box">
      
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
    return {

    };
  },
  methods: {
    ...reportActions(["queryReportsex"]),
  },
  mounted() {
    this.queryReportsex()
    // 基于准备好的dom，初始化echarts实例
    var myChart = this.$echarts.init(document.getElementById('echartsExample')) // echartsExample是显示echart的元素id
    // 绘制图表
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    })
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
#echartsExample {
  width: 500px;
  height: 500px;
}
</style>
