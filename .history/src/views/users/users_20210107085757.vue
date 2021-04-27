<!--
 * @Author: your name
 * @Date: 2021-01-06 10:10:40
 * @LastEditTime: 2021-01-07 08:57:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ai\src\views\usersList\usersList.vue
-->
<template>
  <div></div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
let userModule = createNamespacedHelpers('user')
let {mapState: userState, mapActions: userActions} = userModule
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    ...userActions(['getUsers'])
  },
  mounted() {
    this.getUsers({
      query: '',
      pagenum: this.pagenum,
      pagesize: this.pagesize
    })
  },
  watch: {},
  computed: {
    ...userState(['users'])
  },
};
</script>

<style scoped lang='scss'>
</style>
