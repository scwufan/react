/*
 * @Author: your name
 * @Date: 2021-01-05 14:35:51
 * @LastEditTime: 2021-01-07 08:58:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ai\src\store\user\user.js
 */
import api from "../../http/api";
import { Message } from "element-ui";
import router from "../../router";

export default {
  // 开启命名空间
  namespaced: true,
  state: {
    users: []
  },
  mutations: {
    setUsers(state, data) {
      state.users = data;
    },
  },
  actions: {
    // 发请求
    // 登录 每一个action的方法都有两个参数 第一个是store 第二个是请求的参数
    // store可以解构为commit dispatch
    async login(_, params) {
      let res = await api.login(params);
      if (res.meta.status === 200) {
        // 请求成功 存用户 跳转路由 提示用户
        localStorage.setItem("user", JSON.stringify(res.data));
        localStorage.setItem("token", res.data.token);
        Message.success("登录成功");
        router.push("/");
      } else {
        Message.error(res.meta.msg);
      }
    },
    async getUsers({ commit }, params) {
      //console.log(router);
      let res = await api.getUsers(params);
      if (res.meta.status === 200) {
        console.log(res);
        commit("setUsers", res.data.users);
      } else {
        Message.error(res.meta.msg);
      }
    }
  }
};
