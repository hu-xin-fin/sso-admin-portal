(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0873c1fc"],{"094c":function(e,t,a){},"57b5":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("section",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],staticClass:"section"},[t("div",{staticClass:"header"},[t("el-input",{staticStyle:{width:"5rem"},attrs:{maxlength:"11",placeholder:"请输入用户完整手机号查询"},on:{input:e.onInput},model:{value:e.userPhone,callback:function(t){e.userPhone="string"===typeof t?t.trim():t},expression:"userPhone"}}),t("el-button",{staticStyle:{"margin-left":"0.2rem"},attrs:{type:"primary"},on:{click:e.onSearch}},[e._v("查询")]),t("el-button",{staticStyle:{"margin-left":"0.2rem"},on:{click:e.onReset}},[e._v("重置")])],1),t("el-table",{staticStyle:{width:"100%"},attrs:{border:!0,data:e.tableData}},[t("el-table-column",{attrs:{prop:"nickName",label:"用户昵称"}}),t("el-table-column",{attrs:{prop:"createDate",label:"创建时间"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(e.getDateStr(a.row.createDate)))])]}}])}),t("el-table-column",{attrs:{prop:"phone",label:"电话信息"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("span",[e._v(e._s(e.getPhoneStr(a.row.phone)))])]}}])}),t("el-table-column",{attrs:{prop:"active",label:"用户状态"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-tag",{attrs:{effect:"dark",type:""+(a.row.active?"success":"danger")}},[e._v(e._s(a.row.active?"使用中":"已停用"))])]}}])}),t("el-table-column",{attrs:{prop:"roles",label:"用户角色"}},[[t("el-tag",[e._v("普通用户")])]],2),t("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{type:"danger",loading:a.row.isDelete},on:{click:function(t){return e.onDelete(a.row)}}},[e._v(e._s(a.row.isDelete?"删除中":"删除"))])]}}])})],1),t("div",{staticClass:"footer"},[t("el-pagination",{attrs:{"current-page":e.pageInfo.page,"page-sizes":[10,20,50,100],"page-size":e.pageInfo.size,layout:"total, sizes, prev, pager, next, jumper",total:e.totleCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)},n=[],o=a("365c");const r=e=>o["a"].get("/api/users",{params:e}),i=e=>o["a"].get("/api/users/"+e),l=e=>o["a"].delete("/api/users/"+e);var c=a("c1df"),h=a.n(c),u={name:"UserDetailPage",data(){return{userPhone:"",isLoading:!1,pageInfo:{page:1,size:10},tableData:[],totleCount:0}},mounted(){this.serachUserData()},methods:{handleSizeChange(e){this.page=1,this.pageInfo.size=e,this.serachUserData()},handleCurrentChange(e){this.pageInfo.page=e,this.serachUserData()},onDelete(e){e.isDelete=!0,l(e.phone).then(e=>{200===e.code&&(this.$message.success("删除成功"),this.onSearch())}).finally(()=>{e.isDelete=!1})},getDateStr(e){return h()(e).format("YYYY年MM月DD日 HH时:mm分:ss秒")},getPhoneStr(e){return e.slice(0,4)+"*****"+e.slice(-1)},onReset(){this.pageInfo={size:10,page:0},this.serachUserData()},onInput(e){this.userPhone=e.replace(/[^\d]/g,"")},onSearch(){this.userPhone?this.searchUserDataByPhone():this.serachUserData()},serachUserData(){this.isLoading=!0;let e={page:this.pageInfo.page-1,size:this.pageInfo.size};r(e).then(e=>{200===e.code&&(this.tableData=e.data.data.map(e=>(e.isDelete=!1,e)),this.totleCount=e.data.total)}).finally(()=>{this.isLoading=!1})},searchUserDataByPhone(){this.isLoading=!0,i(this.userPhone).then(e=>{200===e.code&&(this.tableData=[e.data].map(e=>(e.isDelete=!1,e)),this.totleCount=1)}).finally(()=>{this.isLoading=!1})}}},p=u,g=(a("a782"),a("2877")),d=Object(g["a"])(p,s,n,!1,null,"c96d019a",null);t["default"]=d.exports},a782:function(e,t,a){"use strict";a("094c")}}]);
//# sourceMappingURL=chunk-0873c1fc.f1a8e7d0.js.map