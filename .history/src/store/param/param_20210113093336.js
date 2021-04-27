/*
 * @Author: your name
 * @Date: 2021-01-13 08:56:03
 * @LastEditTime: 2021-01-13 08:56:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ai\src\store\param\param.js
 */
import api from  "../../http/api";
import { Message } from "element-ui";

export default {
  namespaced: true,
  state: {
    params: []
  },
  mutations: {
    setParams(state,data) {
      state.params = data;
    }
  },
  action: {
    //获取商品分类
    a/* sync getCategoriesList({ commit }, params) {
      let res = await api.getCategoriesList(params);
      if (res.meta.status === 200) {
        commit("setCategories", res.data.result);
        console.log(res);
      } else {
        Message.error(res.meta.msg);
      }
    }, */
  }
}