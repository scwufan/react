/*
 * @Author: your name
 * @Date: 2021-01-13 17:49:36
 * @LastEditTime: 2021-01-13 18:25:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ai\src\store\report\report.js
 */
import api from "../../http/api";
import { Message } from "element-ui";

export default {
  namespaced: true,
  state: {
    reports: []
  },
  mutations: {
    setReports(state, data) {
      state.reports = data;
    }
  },
  actions: {
    //时间统计的折线图
    async queryReportsex({ commit }, params) {
      //console.log(router);
      let res = await api.queryReportsex(params);
      if (res.meta.status === 200) {
        console.log(res);
        commit("setReports", res.data);
      } else {
        Message.error(res.meta.msg);
      }
    },
  }
}