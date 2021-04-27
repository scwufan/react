/*
 * @Author: your name
 * @Date: 2021-01-05 11:52:56
 * @LastEditTime: 2021-01-05 15:08:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ai\vue.config.js
 */
module.exports = {
  //跨域
  devServer: {
    proxy: {
      "/api": {
        ws: false,
        target: "http://localhost:8888/api/private/v1/",
        changeOrigin: true,
        withCredentials: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
