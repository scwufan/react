/*
 * @Author: your name
 * @Date: 2021-01-08 17:04:49
 * @LastEditTime: 2021-01-08 17:05:07
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
      rights: []
    },
    mutations: {
      setRights(state, data) {
        state.rights = data;
      },
    },
    actions: {
      // 发请求
      //获取用户
      async powerList({ commit }, params) {
        //console.log(router);
        let res = await api.powerList(params);
        if (res.meta.status === 200) {
          console.log(res);
          commit("setRights", res.data);
        } else {
          Message.error(res.meta.msg);
        }
      },
    }
  };
  