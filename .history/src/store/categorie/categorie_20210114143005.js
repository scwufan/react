/*
 * @Author: your name
 * @Date: 2021-01-12 11:35:17
 * @LastEditTime: 2021-01-14 14:23:15
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
      if (res.meta.status === 200) {
        //console.log(res)
      } else {
        //Message.error(res.meta.msg);
      }
    },
    //编辑提交分类
    async editCategories(_, params) {
      //console.log(router);
      let res = await api.editCategories(params);
      if (res.meta.status === 200) {
        Message.success(res.meta.msg);
      } else {
        Message.error(res.meta.msg);
      }
    },
    //添加分类
    async addCategories(_, params) {
      //console.log(router);
      let res = await api.addCategories(params);
      if (res.meta.status === 201) {
        Message.success(res.meta.msg);
      } else {
        Message.error(res.meta.msg);
      }
    },
    //获取参数列表
    async parameterList({ commit }, params) {
      let res = await api.parameterList(params);
      if (res.meta.status === 200) {
        commit("setCategories", res.data);
        console.log(res);
      } else {
        Message.error(res.meta.msg);
      }
    },
  }
}