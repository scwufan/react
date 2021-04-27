/*
 * @Author: your name
 * @Date: 2021-01-05 10:40:34
 * @LastEditTime: 2021-01-13 10:25:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ai\src\store\index.js
 */
import Vue from "vue";
import Vuex from "vuex";
import user from "./user/user";
import menus from "./menus/menus";
import role from "./role/role";
import right from "./right/right";
import order from "./order/order";
import good from "./good/good";
import categorie from "./categorie/categorie";
import param from "./param/param";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    menus,
    role,
    right,
    order,
    good,
    categorie,
    param,
  }
});
