/*
 * @Author: your name
 * @Date: 2021-01-08 17:04:49
 * @LastEditTime: 2021-01-08 17:08:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ai\src\store\order\order.js
 */
import api from "../../http/api";
import { Message } from "element-ui";

export default {
    // 开启命名空间
    namespaced: true,
    state: {
      orders: []
    },
    mutations: {
      setOrders(state, data) {
        state.orders = data;
      },
    },
    actions: {
      // 发请求
      //获取用户
      async getOrdersList({ commit }, params) {
        //console.log(router);
        let res = await api.getOrdersList(params);
        if (res.meta.status === 200) {
          console.log(res);
          commit("setOrders", res.data);
        } else {
          Message.error(res.meta.msg);
        }
      },
    }
  };
  