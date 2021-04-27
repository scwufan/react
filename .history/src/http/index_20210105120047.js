/*
 * @Author: your name
 * @Date: 2021-01-05 11:17:10
 * @LastEditTime: 2021-01-05 12:00:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ai\src\http\index.js
 */
import axios from "axios";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import {Message} from "element-ui";

const http = axiso.create({
    baseURL:"/api";
})