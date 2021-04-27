/*
 * @Author: your name
 * @Date: 2021-01-05 14:35:51
 * @LastEditTime: 2021-01-07 18:37:30
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
    //登录
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
    //获取用户
    async getUsers({ commit }, params) {
      //console.log(router);
      let res = await api.getUsers(params);
      if (res.meta.status === 200) {
        console.log(res);
        commit("setUsers", res.data.users);
      } else {
        Message.error(res.meta.msg);
      }
    },
    //添加用户
    async addUser(params) {
      //console.log(router);
      let res = await api.addUser(params);
      if (res.meta.status === 201) {
        console.log(res);
        Message.success(res.meta.msg);
      } else {
        Message.error(res.meta.msg);
      }
    },
    //删除用户
    async deleteUser(_, params) {
      //console.log(router);
      let res = await api.deleteUser(params);
      if (res.meta.status === 200) {
        Message.success(res.meta.msg);
        console.log(res);
      } else {
        Message.error(res.meta.msg);
      }
    },
    //修改用户状态
    async changeUser(_, params) {
      //console.log(router);
      let res = await api.changeUser(params);
      if (res.meta.status === 200) {
        Message.success(res.meta.msg);
      } else {
        Message.error(res.meta.msg);
      }
    },
    //编辑用户提交
    async editUser(_, params) {
      //console.log(router);
      let res = await api.editUser(params);
      if (res.meta.status === 200) {
        Message.success(res.meta.msg);
        console.log(res);
      } else {
        Message.error(res.meta.msg);
      }
    },
    //分配用户角色
    async distributionUser(_, params) {
      //console.log(router);
      let res = await api.distributionUser(params);
      if (res.meta.status === 200) {
        Message.success(res.meta.msg);
        console.log(res);
      } else {
        Message.error(res.meta.msg);
      }
    },
  }
};
