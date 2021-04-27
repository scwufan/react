/*
 * @Author: your name
 * @Date: 2021-01-05 10:40:34
 * @LastEditTime: 2021-01-05 15:41:38
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue-ai\src\store\index.js
 */
import Vue from "vue";
import Vuex from "vuex";
import user from "./user/user";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user
  }
});
