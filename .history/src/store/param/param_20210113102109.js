/*
 * @Author: your name
 * @Date: 2021-01-13 08:56:03
 * @LastEditTime: 2021-01-13 10:21:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ai\src\store\param\param.js
 */
import api from  "../../http/api";
import { Message } from "element-ui";

export default {
  namespaced: true,
  state: {
    params: [],
    categories: [],
  },
  mutations: {
    setParams(state, data) {
      state.params = data;
    },
    setCategories(state, data) {
      state.categories = data;
    }
  },
  action: {
    //获取商品分类
    async getCategoriesList({ commit }, params) {
      let res = await api.getCategoriesList(params);
      if (res.meta.status === 200) {
        commit("setCategories", res.data.result);
        console.log(res)
      } else {
        Message.error(res.meta.msg);
      }
    },
    //获取参数列表
    async parameterList({ commit }, params) {
      let res = await api.parameterList(params);
      if (res.meta.status === 200) {
        commit("setParams", res.data);
        console.log(res);
      } else {
        Message.error(res.meta.msg);
      }
    },
  }
}