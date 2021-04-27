/*
 * @Author: your name
 * @Date: 2021-01-05 10:40:34
 * @LastEditTime: 2021-01-14 16:47:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ai\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VCharts from 'v-charts';
import echarts from 'echarts';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.config.productionTip = false;
// use: 里面传入一个方法或者对象 这个方法名必须叫install 或者这个对象里面有个属性是install方法
Vue.use(ElementUI);
Vue.use(VCharts);
Vue.prototype.$echarts = echarts
Vue.use(mavonEditor)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
