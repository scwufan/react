/*
 * @Author: your name
 * @Date: 2021-01-12 11:35:17
 * @LastEditTime: 2021-01-12 14:33:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ai\src\store\categorie\categorie.js
 */
import api from '../../http/api';
import { Message } from 'element-ui';

export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    setCategories(state, data) {
      state.categories = data;
    }
  },
  actions: {
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
    //删除分类
    async deleteCategories(_, params) {
        let res = await api.deleteCategories(params);
    },
  }
}