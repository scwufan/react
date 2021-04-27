/*
 * @Author: your name
 * @Date: 2021-01-08 15:32:58
 * @LastEditTime: 2021-01-08 15:37:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ai\src\store\right\right.js
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
      async rolesList({ commit }, params) {
        //console.log(router);
        let res = await api.rolesList(params);
        if (res.meta.status === 200) {
          console.log(res);
          commit("setRights", res.data);
        } else {
          Message.error(res.meta.msg);
        }
      },
    }
  };
  