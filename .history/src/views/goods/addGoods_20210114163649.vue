<!--
 * @Author: your name
 * @Date: 2021-01-13 10:40:00
 * @LastEditTime: 2021-01-14 16:36:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ai\src\views\goods\addGoods.vue
-->
<template>
  <div class="all">
    <div class="all_box">
      <el-card class="box-card">
        <div>
          <el-alert
            title="添加商品信息"
            type="info"
            :closable="false"
            show-icon
            center>
          </el-alert>
        </div>
        <div>
          <el-tabs :tab-position="tabPosition" style="height: 200px;">
            <el-tab-pane label="基本信息">基本信息</el-tab-pane>
            <el-tab-pane label="商品参数">商品参数</el-tab-pane>
            <el-tab-pane label="商品属性">商品属性</el-tab-pane>
            <el-tab-pane label="商品图片">商品图片</el-tab-pane>
            <el-tab-pane label="商品内容">商品内容</el-tab-pane>
          </el-tabs>
        </div>
        <div>
          <el-steps :active="active" finish-status="success">
          <el-step title="步骤 1"></el-step>
          <el-step title="步骤 2"></el-step>
          <el-step title="步骤 3"></el-step>
        </el-steps>

        <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
let categorieModule = createNamespacedHelpers("categorie");
let {
  mapState: categorieState,
  mapActions: categorieActions,
} = categorieModule;
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      tabPosition: 'left',
      active: "0",
      value: "",
      form1s: "",
      form2s: "",
      form3s: "",
      form4s: "",
      text1: "",
      props: {
        label: "cat_name",
        children: "children",
        value: "cat_name",
        checkStrictly: true,
        id: "cat_id",
        level: 1,
      },
      arrs: {},
      text: "",
    };
  },
  methods: {
    ...categorieActions([
      "addGoods",
      "parameterList1",
      "parameterList2",
      "getCategoriesList",
      "editParameter",
      "addParameter",
      "deleteParameter"
    ]),
    next() {
      this.active++;
    },
    toshow1() {
      this.active = "1";
    },
    toshow2() {
      this.active = "2";
    },
    toshow3() {
      this.active = "3";
    },
    toshow4() {
      this.active = "4";
    },
    toshow5() {
      this.addGoods({
        goods_name: this.form1s,
        goods_cat: "1,2,3",
        goods_price: this.form2s,
        goods_number: this.form3s, 
        goods_weight: this.form4,
        goods_introduce: this.text,
        pics: this.text1,
        attrs: "",
      });
      this.$router.push("/goods")
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleChange() {
      console.log(this.value);
    },
    todeta(data) {
      this.arrs = data;
      this.parameterList1({
        id: this.arrs.cat_id,
        sel: "many",
      });
    },
  },
  mounted() {
    this.getCategoriesList({
      type: [1, 2, 3],
      pagenum: 1,
      pagesize: 5,
    });
  },
  watch: {},
  computed: {
    ...categorieState(["categories", "categories1", "categories2"]),
  },
};
</script>

<style scoped lang="scss">
.bg {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.bgm {
  width: 80%;
  height: 35px;
  background-color: rgb(237, 237, 237);
  text-align: center;
  line-height: 35px;
}
.bgms {
  width: 80%;
  height: 125px;
  text-align: center;
}
.nav {
  width: 90%;
  height: 400px;
}
.bgs {
  width: 90%;
  height: 80px;
  line-height: 80px;
  font-family: cursive;
}
</style>