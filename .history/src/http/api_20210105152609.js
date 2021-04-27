/*
 * @Author: your name
 * @Date: 2021-01-05 14:15:05
 * @LastEditTime: 2021-01-05 15:26:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ai\src\http\api.js
 */
import http from "./index";

export default {
  login({username,password}) {
    return http.post("/login", {
      username,
      password
    });
  },
  getUsers({ pagenum, pagesize, query }) {
    if (query) {
      return http.get(`/users?pagenum=${pagenum}&pagesize=${pagesize}&query=${query}`)
    } else {
      return http.get(`/users?pagenum=${pagenum}&pagesize=${pagesize}`)
    }
  }
};
