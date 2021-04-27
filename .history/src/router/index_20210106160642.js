/*
 * @Author: your name
 * @Date: 2021-01-05 10:40:34
 * @LastEditTime: 2021-01-06 16:06:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-ai\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import layout from "../views/layout/layout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: layout,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home
      },
      {
        path: "/users",
        name: "users",
        component: () => import("../views/users/users.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/login.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;