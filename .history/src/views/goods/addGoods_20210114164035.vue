<!--
 * @Author: your name
 * @Date: 2021-01-13 10:40:00
 * @LastEditTime: 2021-01-14 16:40:35
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
        <div class="bg">
      <el-steps :active="active" class="bgms" align-center finish-status="success">
        <el-step title="基本信息"></el-step>
        <el-step title="商品参数"></el-step>
        <el-step title="商品属性"></el-step>
        <el-step title="商品图片"></el-step>
        <el-step title="商品内容"></el-step>
        <el-step title="完成"></el-step>
      </el-steps>
    </div>
    <div class="nav">
      <el-tabs tab-position="left" v-model="active">
        <el-tab-pane label="基本信息" name="0">
          <div class="bg">
            <div class="nav">
              <el-form label-width="100px">
                <el-form-item
                  label="商品名称"
                  :rules="[
                    {
                      required: true,
                      message: '请输入商品名称',
                      trigger: 'blur',
                    },
                    {
                      type: 'email',
                      message: '请输入正确的商品名称',
                      trigger: ['blur', 'change'],
                    },
                  ]"
                >
                  <el-input v-model="form1s"></el-input>
                </el-form-item>
                <el-form-item
                  label="商品价格"
                  :rules="[
                    {
                      required: true,
                      message: '请输入商品价格',
                      trigger: 'blur',
                    },
                    {
                      type: 'email',
                      message: '请输入正确的商品价格',
                      trigger: ['blur', 'change'],
                    },
                  ]"
                >
                  <el-input v-model="form2s"></el-input>
                </el-form-item>
                <el-form-item
                  label="商品数量"
                  :rules="[
                    {
                      required: true,
                      message: '请输入商品数量',
                      trigger: 'blur',
                    },
                    {
                      type: 'text',
                      message: '请输入正确的商品数量',
                      trigger: ['blur', 'change'],
                    },
                  ]"
                >
                  <el-input v-model="form3s"></el-input>
                </el-form-item>
                 <el-form-item
                  label="商品重量"
                  :rules="[
                    {
                      required: true,
                      message: '请输入商品数量',
                      trigger: 'blur',
                    },
                    {
                      type: 'text',
                      message: '请输入正确的商品数量',
                      trigger: ['blur', 'change'],
                    },
                  ]"
                >
                  <el-input v-model="form4s"></el-input>
                </el-form-item>
                <el-form-item
                  label="商品分类"
                  :rules="[
                    {
                      required: true,
                      message: '请输入商品分类',
                      trigger: 'blur',
                    },
                    {
                      type: 'text',
                      message: '请输入正确的商品分类',
                      trigger: ['blur', 'change'],
                    },
                  ]"
                >
                  <el-cascader
                    v-model="value"
                    :options="categories"
                    :props="props"
                    level="1"
                    @change="handleChange"
                    :show-all-levels="false"
                    clearable
                  >
                    <template slot-scope="{ node, data }">
                      <div @click="todeta(data)">
                        <span>{{ data.cat_name }}</span>
                      </div>
                    </template>
                  </el-cascader>
                </el-form-item>
              </el-form>
              <div>
                <el-button type="primary" @click="toshow1">下一步</el-button>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="商品参数" name="1">
          <div v-for="(item, index) in arr1" :key="index">
            <div class="bgs">{{ item.attr_name }}</div>
            <div class="bgs">暂无属性</div>
          </div>
          <div>
            <el-button type="primary" @click="toshow2">下一步</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="商品属性" name="2">
          暂无属性
          <div>
            <el-button type="primary" @click="toshow3">下一步</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="商品图片" name="3">
          <el-upload class="upload-demo" drag :action="text1" multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
          <div>
            <el-button type="primary" @click="toshow4">下一步</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="商品内容" name="4">
          <mavon-editor v-model="text" />
          <div>
            <el-button type="primary" @click="toshow5">提交</el-button>
          </div>
        </el-tab-pane>
      </el-tabs>
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
.all {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 80px;
}
.all_box {
  width: 95%;
}
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