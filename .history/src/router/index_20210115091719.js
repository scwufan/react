/*
 * @Author: your name
 * @Date: 2021-01-05 10:40:34
 * @LastEditTime: 2021-01-15 09:17:19
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
        component: Home,
        meta: {
          title: "首页"
        }
      },
      {
        path: "/users",
        name: "users",
        component: () => import("../views/users/users.vue"),
        meta: {
          title: "用户列表"
        }
      },
      {
        path: "/roles",
        name: "roles",
        component: () => import("../views/roles/roles.vue"),
        meta: {
          title: "角色列表"
        }
      },
      {
        path: "/rights",
        name: "rights",
        component: () => import("../views/rights/rights.vue"),
        meta: {
          title: "权限列表"
        }
      },
      {
        path: "/goods",
        name: "goods",
        component: () => import("../views/goods/goods.vue"),
        meta: {
          title: "商品列表"
        }
      },
      {
        path: "/addGoods",
        name: "addGoods",
        component: () => import("../views/goods/addGoods.vue"),
        meta: {
          title: "添加商品"
        }
      },
      {
        path: "/params",
        name: "params",
        component: () => import("../views/params/params.vue"),
        meta: {
          title: "分类参数"
        }
      },
      {
        path: "/categories",
        name: "categories",
        component: () => import("../views/categories/categories.vue"),
        meta: {
          title: "商品分类"
        }
      },
      {
        path: "/orders",
        name: "orders",
        component: () => import("../views/orders/orders.vue"),
        meta: {
          title: "订单管理"
        }
      },
      {
        path: "/reports",
        name: "reports",
        component: () => import("../views/reports/reports.vue"),
        meta: {
          title: "数据报表"
        }
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/login.vue"),
    meta: {
      title: '登录'
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  let user = localStorage.user
  console.log(user);
  if(to.path === '/login') {
    next()
  }else {
    user ? next() : next('/login')
  }
})

export default router;
