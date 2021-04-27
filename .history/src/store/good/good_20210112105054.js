/*
 * @Author: your name
 * @Date: 2021-01-12 08:30:50
 * @LastEditTime: 2021-01-12 10:22:20
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
      //添加商品
    async addGoods(_, params) {
      let res = await api.addGoods(params);
      if (res.meta.status === 201){
        console.log(res);
        Message.success(res.meta.msg);
      } else {
        Message.error(res.meta.msg);
      }
    },
    //商品列表
    async getGoodsList({ commit }, params) {
        //console.log(router);
        let res = await api.getGoodsList(params);
        if (res.meta.status === 200) {
          console.log(res);
          commit("setGoods", res.data.goods);
        } else {
          Message.error(res.meta.msg);
        }
      },
        //删除商品
    async deleteGood(_, params) {
      let res = await api.deleteGood(params);
        if (res.meta.status === 200){
            //console.log(res);
            Message.success(res.meta.msg);
        } else {
            Message.error(res.meta.msg);
        }
    },
  }
}