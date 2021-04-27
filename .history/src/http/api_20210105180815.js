/*
 * @Author: your name
 * @Date: 2021-01-05 14:15:05
 * @LastEditTime: 2021-01-05 18:08:15
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
  queryUser({ id }){
    return http.get(`/users/${id}`);
  }
};
