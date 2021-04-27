/*
 * @Author: your name
 * @Date: 2021-01-05 14:35:51
 * @LastEditTime: 2021-01-07 08:52:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ai\src\store\user\user.js
 */
import api from "../../http/api";
import { Message } from "element-ui";

export default {
  // 开启命名空间
  namespaced: true,
  state: {
    menus: []
  },
  mutations: {
    setMenus(state, data) {
      state.menus = data;
    }
  },
  actions: {
    // 发请求
    // 登录 每一个action的方法都有两个参数 第一个是store 第二个是请求的参数
    // store可以解构为commit dispatch
    async leftMenus({ commit }) {
      //console.log(router);
      let res = await api.leftMenus();
      if (res.meta.status === 200) {
        commit("setMenus", res.data);
        //console.log(res);
      } else {
        Message.error(res.meta.msg);
      }
    }
  }
};
