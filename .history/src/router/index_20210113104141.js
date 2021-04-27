/*
 * @Author: your name
 * @Date: 2021-01-05 10:40:34
 * @LastEditTime: 2021-01-13 10:41:41
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
      },
      {
        path: "/roles",
        name: "roles",
        component: () => import("../views/roles/roles.vue")
      },
      {
        path: "/rights",
        name: "rights",
        component: () => import("../views/rights/rights.vue")
      },
      {
        path: "/goods",
        name: "goods",
        component: () => import("../views/goods/goods.vue")
      },
      {
        path: "/addGoods",
        name: "addGoods",
        component: () => import("../views/goods/addGoods.vue")
      },
      {
        path: "/params",
        name: "params",
        component: () => import("../views/params/params.vue")
      },
      {
        path: "/categories",
        name: "categories",
        component: () => import("../views/categories/categories.vue")
      },
      {
        path: "/orders",
        name: "orders",
        component: () => import("../views/orders/orders.vue")
      },
      {
        path: "/reports",
        name: "reports",
        component: () => import("../views/reports/reports.vue")
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
