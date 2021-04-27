/*
 * @Author: your name
 * @Date: 2021-01-12 08:30:50
 * @LastEditTime: 2021-01-12 08:44:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ai\src\store\good\good.js
 */
import api from "../../http/api";
import { Message } from "element-ui";

export default {
  namespaced: true,
  state: {
    goods: [],
  },
  mutations: {
    setGoods(state, data) {
      state.goods = data
    }
  },
  actions: {
    async addGoods(params) {
      let res = await api.addGoods(params);
      if (res.meta.status === 201){
        console.log(res);
        Message.success(res.meta.msg);
      } else {
        Message.error(res.meta.msg);
      }
    }
  }
}