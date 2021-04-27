/*
 * @Author: your name
 * @Date: 2021-01-08 09:35:34
 * @LastEditTime: 2021-01-13 16:09:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ai\src\store\role\role.js
 */
import api from "../../http/api";
import { Message } from "element-ui";

export default {
  // 开启命名空间
  namespaced: true,
  state: {
    roles: [],
    roles2: []
  },
  mutations: {
    setRoles(state, data) {
      state.roles = data;
    },
    setRoles2(state, data) {
      state.roles2 = data;
    }
  },
  actions: {
    // 发请求
    //获取用户
    async rolesList({ commit }, params) {
      //console.log(router);
      let res = await api.rolesList(params);
      if (res.meta.status === 200) {
        //console.log(res);
        commit("setRoles", res.data);
      } else {
        Message.error(res.meta.msg);
      }
    },
    //添加角色
    async addRoles(_, params) {
      //console.log(router);
      let res = await api.addRoles(params);
      if (res.meta.status === 201) {
        console.log(res);
        Message.success(res.meta.msg);
      } else {
        Message.error(res.meta.msg);
      }
    },
    //删除用户
    async deleteRoles(_, params) {
      //console.log(router);
      let res = await api.deleteRoles(params);
      if (res.meta.status === 200) {
        Message.success(res.meta.msg);
      } else {
        Message.error(res.meta.msg);
      }
    },
    //删除角色指定权限
    async deleteRolesPower(_, params) {
      //console.log(router);
      let res = await api.deleteRolesPower(params);
      if (res.meta.status === 200) {
        Message.success(res.meta.msg);
      } else {
        Message.error(res.meta.msg);
      }
    },
    //编辑用户提交
    async editRoles(_, params) {
      //console.log(router);
      let res = await api.editRoles(params);
      if (res.meta.status === 200) {
        Message.success(res.meta.msg);
      } else {
        Message.error(res.meta.msg);
      }
    },
    //获取用户
    async powerList({ commit }, params) {
      //console.log(router);
      let res = await api.powerList(params);
      if (res.meta.status === 200) {
        console.log(res);
        commit("setRoles2", res.data);
      } else {
        Message.error(res.meta.msg);
      }
    },
  }
};
