/*
 * @Author: your name
 * @Date: 2021-01-05 14:15:05
 * @LastEditTime: 2021-01-13 18:24:56
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
  queryUser(id) {
    return http.get(`/users/${id}`);
  },
  //编辑用户提交
  editUser({ id, email, mobile }) {
    return http.put(`/users/${id}`, {
      email,
      mobile
    });
  },
  //删除单个用户
  deleteUser(id) {
    return http.delete(`/users/${id}`);
  },
  //分配用户角色
  distributionUser({ id, rid }) {
    return http.put(`/users/${id}/role`, {
      rid
    });
  },
  //所有权限列表
  powerList(type) {
    return http.get(`/rights/${type}`);
  },
  //左侧菜单权限
  leftMenus() {
    return http.get("/menus");
  },
  //角色列表
  rolesList() {
    return http.get("/roles");
  },
  //添加角色
  addRoles({ roleName, roleDesc }) {
    return http.post("/roles", {
      roleName,
      roleDesc
    });
  },
  //根据 ID 查询角色
  queryRoles(id) {
    return http.get(`/roles/${id}`);
  },
  //编辑提交角色
  editRoles({ id, roleName, roleDesc }) {
    return http.put(`/roles/${id}`, {
      roleName,
      roleDesc
    });
  },
  //删除角色
  deleteRoles(id) {
    return http.delete(`/roles/${id}`);
  },
  //角色授权
  powerRoles({ roleId, rids }) {
    return http.post(`/roles/${roleId}/rights`, {
      rids
    });
  },
  //删除角色指定权限
  deleteRolesPower({ roleId, rightId }) {
    return http.delete(`/roles/${roleId}/rights/${rightId}`);
  },
  //商品分类数据列表
  getCategoriesList({ type, pagenum, pagesize }) {
    return http.get(
      `/categories?type=${type}&pagenum=${pagenum}&pagesize=${pagesize}`
    );
  },
  //添加分类
  addCategories({ cat_pid, cat_name, cat_level }) {
    return http.post("/categories", {
      cat_pid,
      cat_name,
      cat_level
    });
  },
  //根据 id 查询分类
  queryCategories(id) {
    return http.get(`/categories/${id}`);
  },
  //编辑提交分类
  editCategories({ id, cat_name }) {
    return http.put(`/categories/${id}`, {
      cat_name
    });
  },
  //删除分类
  deleteCategories(id) {
    return http.delete(`/categories/${id}`);
  },
  //参数列表
  parameterList({ id, sel }) {
    return http.get(`/categories/${id}/attributes?sel=${sel}`);
  },
  //添加动态参数或者静态属性
  addParameter({ id, attr_name, attr_sel, attr_vals }) {
    if (attr_sel === "many") {
      return http.post(`/categories/${id}/attributes`, {
        attr_name,
        attr_sel,
        attr_vals
      });
    } else {
      return http.post(`/categories/${id}/attributes`, {
        attr_name,
        attr_sel
      });
    }
  },
  //删除参数
  deleteParameter({ id, attrid }) {
    return http.delete(`/categories/${id}/attributes/${attrid}`);
  },
  //根据 ID 查询参数
  queryParameter({ id, attrId, attr_sel, attr_vals }) {
    return http.get(
      `/categories/${id}/attributes/${attrId}?attr_sel=${attr_sel}&attr_vals=${attr_vals}`
    );
  },
  //编辑提交参数
  editParameter({ id, attrId, attr_name, attr_sel, attr_vals }) {
    return http.put(`/categories/${id}/attributes/${attrId}`, {
      attr_name,
      attr_sel,
      attr_vals
    });
  },
  //商品列表数据
  getGoodsList({ query, pagenum, pagesize }) {
    return http.get(
      `/goods?query=${query}&pagenum=${pagenum}&pagesize=${pagesize}`
    );
  },
  //添加商品
  addGoods({
    goods_name,
    goods_cat,
    goods_price,
    goods_number,
    goods_weight,
    goods_introduce,
    pics,
    attrs
  }) {
    return http.post("/goods", {
      goods_name,
      goods_cat,
      goods_price,
      goods_number,
      goods_weight,
      goods_introduce,
      pics,
      attrs
    });
  },
  //根据 ID 查询商品
  queryGoods(id) {
    return http.get(`/goods/${id}`);
  },
  //编辑提交商品(只做效果,不提交接口)
  //删除商品
  deleteGood(id) {
    return http.delete(`/goods/${id}`);
  },
  //图片上传
  uploadimg() {
    return http.post("/upload");
  },
  //订单数据列表
  getOrdersList({
    query,
    pagenum,
    pagesize,
    user_id,
    pay_status,
    is_send,
    order_fapiao_title,
    order_fapiao_company,
    order_fapiao_content,
    consignee_addr
  }) {
    return http.get(
      `/orders?query=${query}&pagenum=${pagenum}&pagesize=${pagesize}&user_id=${user_id}&pay_status=${pay_status}&is_send=${is_send}&order_fapiao_title=${order_fapiao_title}&order_fapiao_company=${order_fapiao_company}&order_fapiao_content=${order_fapiao_content}&consignee_addr=${consignee_addr}`
    );
  },
  //修改订单状态
  editOrder({ id, is_send, order_pay, order_price, order_number, pay_status }) {
    return http.put(`/categories/${id}`, {
      is_send,
      order_pay,
      order_price,
      order_number,
      pay_status
    });
  },
  //查看订单详情
  queryOrders(id) {
    return http.get(`/orders/${id}`);
  },
  //修改地址
  //查看物流信息
  queryKuaidi(id) {
    return http.get(`/kuaidi/${id}`);
  },
  //时间统计的折线图??
  queryReportsex() {
    return http.get(`/reports/type`);
  }
};
