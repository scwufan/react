import api from "../../http/api";
import { Message } from "element-ui";

export default {
  // 开启命名空间
  namespaced: true,
  state: {
    roles: []
  },
  mutations: {
    setRoles(state, data) {
      state.roles = data;
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
        commit("setRoles", res.data);
      } else {
        Message.error(res.meta.msg);
      }
    },
    //根据 ID 查询用户信息
    /* async queryUser(params) {
      //console.log(router);
      let res = await api.queryUser(params);
      if (res.meta.status === 200) {
        console.log(res);
        Message.success(res.meta.msg);
      } else {
        Message.error(res.meta.msg);
      }
    }, */
    //添加角色
    async addRoles(params) {
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
    },
    //编辑用户提交
    async editRoles(_, params) {
      //console.log(router);
      let res = await api.editRoles(params);
      if (res.meta.status === 200) {
        Message.success(res.meta.msg);
        console.log(res);
      } else {
        Message.error(res.meta.msg);
      }
    },
    //分配用户角色
    /* async distributionUser(_, params) {
      //console.log(router);
      let res = await api.distributionUser(params);
      if (res.meta.status === 200) {
        Message.success(res.meta.msg);
        console.log(res);
      } else {
        Message.error(res.meta.msg);
      }
    }, */
  }
};
