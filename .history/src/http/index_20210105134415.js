/*
 * @Author: your name
 * @Date: 2021-01-05 11:17:10
 * @LastEditTime: 2021-01-05 13:44:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ai\src\http\index.js
 */
import axios from "axios";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import {Message} from "element-ui";

//需要区分当前环境是开发环境(development)还是生产环境(production)
let isPro = process.env.NODE_ENV === "production";

const http = axios.create({
  baseURL: isPro ? "线上接口路径" : "/api"
});
