/*
 * @Author: your name
 * @Date: 2021-01-05 14:15:05
 * @LastEditTime: 2021-01-05 18:32:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ai\src\http\api.js
 */
import http from "./index";

export default {
  login({ username, password }) {
    return http.post("/login", {
      username,
      password
    });
  },
  //用户数据列表
  getUsers({ pagenum, pagesize, query }) {
    if (query) {
      return http.get(
        `/users?pagenum=${pagenum}&pagesize=${pagesize}&query=${query}`
      );
    } else {
      return http.get(`/users?pagenum=${pagenum}&pagesize=${pagesize}`);
    }
  },
  //添加用户
  addUser({ username, password, email, mobile }) {
    return http.post("/users", {
      username,
      password,
      email,
      mobile
    });
  },
  //修改用户状态
  changeUser({ uId, type }) {
    return http.put(`/users/${uId}/state/${type}`);
  },
  //根据 ID 查询用户信息
  queryUser(id) {
    return http.get(`/users?id=${id}`);
  },
  //编辑用户提交
  editUser({ id, email, mobile }) {
    return http.put(`/users/${id}`, {
      email,
      mobile
    });
  },
  //删除单个用户
  deleteUser(id) {
    return http.delete(`/users/${id}`);
  },
  //分配用户角色
  distributionUser({ id, rid }) {
    return http.put(`/users/${id}/role`, {
      rid
    });
  },
  //所有权限列表
  powerList(type) {
    return http.get(`/rights?type=${type}`);
  },
  //左侧菜单权限
  leftMenus() {
    return http.get("/menus");
  },
  //角色列表
  rolesList() {
    return http.get("/roles");
  },
  //添加角色
  addRoles({ roleName, roleDesc }) {
    return http.post("/users", {
      roleName,
      roleDesc
    });
  },
  //根据 ID 查询角色
  queryRoles(id) {
    return http.get(`/users?id=${id}`);
  },
};
