(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bd566"],{"2c21":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-card",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.rightsList,border:"",stripe:""}},[a("el-table-column",{attrs:{label:"#",type:"index",align:"center",width:"100"}}),a("el-table-column",{attrs:{prop:"authName",label:"权限名称",align:"center"}}),a("el-table-column",{attrs:{label:"权限等级",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return["0"===e.row.level?a("el-tag",[t._v("一级")]):t._e(),"1"===e.row.level?a("el-tag",{attrs:{type:"success"}},[t._v("二级")]):t._e(),"2"===e.row.level?a("el-tag",{attrs:{type:"warning"}},[t._v("三级")]):t._e()]}}])})],1)],1)],1)},n=[],s={data:function(){return{rightsList:[]}},components:{},methods:{getData:function(){var t=this;this.$api.allRights({type:"list"}).then((function(e){200===e.meta.status&&(t.rightsList=e.data)})).catch((function(t){console.log(t)}))}},mounted:function(){this.getData()},watch:{},computed:{}},c=s,i=a("9ca4"),r=Object(i["a"])(c,l,n,!1,null,"6b13a32a",null);e["default"]=r.exports}}]);