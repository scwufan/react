/*
 * @Author: your name
 * @Date: 2021-01-12 11:35:17
 * @LastEditTime: 2021-01-14 16:15:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ai\src\store\categorie\categorie.js
 */
import api from '../../http/api';
import { Message } from 'element-ui';

export default {
  namespaced: true,
  state: {
    categories: [],
    categories1: [],
    categories2: [],
    total:null,
  },
  mutations: {
    setCategories(state, data) {
      state.categories = data;
    },
    setCategories1(state, data) {
      state.categories1 = data;
    },
    setCategories2(state, data) {
      state.categories2 = data;
    },
    setTotal(state, data) {
      state.total = data;
    },
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
     //postgoods添加商品
    async addGoods(_, params) {
      let res = await api.addGoods(params);
      if (res.meta.status === 201) {
        // 请求成功 存用户 跳转路由 提示用户
        console.log(res.meta.msg);
      } else {
        Message.error(res.meta.msg);
      // console.log(res.meta.msg);
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
    async parameterList1({ commit }, params) {
      let res = await api.parameterList(params);
      if (res.meta.status === 200) {
        commit("setCategories1", res.data);
        commit("setTotal", res.data.length);
        console.log(res);
      } else {
        Message.error(res.meta.msg);
      }
    },
    async parameterList2({ commit }, params) {
      let res = await api.parameterList(params);
      if (res.meta.status === 200) {
        commit("setCategories2", res.data);
        commit("setTotal", res.data.length);
        console.log(res);
      } else {
        Message.error(res.meta.msg);
      }
    },
    //编辑提交参数
  async editParameter(_, params) {
    let res = await api.editParameter(params);
    if (res.meta.status === 200) {
      //console.log(res);
    } else {
      Message.error(res.meta.msg);
     // console.log(res.meta.msg);
    }
  },
    // 删除参数deleteattributes
   async deleteParameter(_, params) {
    let res = await api.deleteParameter(params);
    if (res.meta.status === 200) {
     // console.log(res);
    } else {
      Message.error(res.meta.msg);
     // console.log(res.meta.msg);
    }
  },
  //添加动态参数或者静态属性 addParameter
   async addParameter(_, params) {
    let res = await api.addParameter(params);
    if (res.meta.status === 201) {
     // console.log(res);
    } else {
      Message.error(res.meta.msg);
     // console.log(res.meta.msg);
    }
  },
  }
}