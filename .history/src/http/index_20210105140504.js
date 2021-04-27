/*
 * @Author: your name
 * @Date: 2021-01-05 11:17:10
 * @LastEditTime: 2021-01-05 14:05:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ai\src\http\index.js
 */
import axios from "axios";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import { Message } from "element-ui";

//需要区分当前环境是开发环境(development)还是生产环境(production)
let isPro = process.env.NODE_ENV === "production";

const http = axios.create({
  baseURL: isPro ? "线上接口路径" : "/api",
  timeout: 10000
});

//请求拦截

http.interceptors.request.use(
  config => {
    nprogress.start();
    // 配置token token是鉴权的一种方式
    // 在登录成功之后 会返回当前用户的token 存在本地
    let token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  err => {
    nprogress.done();
    return Promise.reject(err);
  }
);
