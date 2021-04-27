<!--
 * @Author: your name
 * @Date: 2021-01-06 10:10:40
 * @LastEditTime: 2021-01-07 09:09:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ai\src\views\usersList\usersList.vue
-->
<template>
  <div class="all"></div>
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
    return {
      pagenum: 1,
      pagesize: 10,
      query: ''
    };
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

<style scoped lang="scss">
.all {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
