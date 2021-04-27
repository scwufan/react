<!--
 * @Author: your name
 * @Date: 2021-01-06 16:15:50
 * @LastEditTime: 2021-01-13 17:59:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ai\src\views\reports\reports.vue
-->
<template>
  <div></div>
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
    ...reportActions(["queryReports"]),
  },
  mounted() {
    this.queryReports()
  },
  watch: {},
  computed: {
    ...reportState(["reports"]),
  },
};
</script>

<style scoped lang='scss'>
</style>
