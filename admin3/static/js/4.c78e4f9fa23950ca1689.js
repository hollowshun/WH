webpackJsonp([4],{"4PpF":function(e,t){},uemO:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={data:function(){return{title:"复杂列表",searchOption:{size:"small",labelWidth:"80px",searchList:[{label:"审批人:",type:"input",value:"",prop:"user"},{label:"活动区域:",type:"select",value:"",prop:"region",optionData:[{value:"shanghai",label:"区域一"},{value:"beijing",label:"区域二",disabled:!0}]},{label:"日期:",type:"date",value:"",prop:"date",placeholder:"选择日期",format:"yyyy 年 MM 月 dd 日",valueFormat:"yyyy-MM-dd"}],otherBtns:[{title:"导出",prop:"export",type:"danger"},{title:"下载",prop:"downLoad",type:"success"}]},tableOption:{tableColumn:[{prop:"name",label:"姓名"},{prop:"status",label:"状态"},{prop:"address",label:"描述",minWidth:"150"},{prop:"date",label:"日期",minWidth:"200"}],tableData:[{id:1,name:"张三",status:1,address:"我是描述",date:"2022-01-01"},{id:2,name:"李四",status:2,address:"我是描述2",date:"2022-01-02"}],operationColumn:{fixed:"right",minWidth:"250",btns:[{title:"编辑",prop:"edit",type:"primary",size:"small"},{title:"删除",prop:"delete",type:"danger",size:"small"},{title:"查看",prop:"dtl",type:"info",size:"small"}]},page:{currentPage:1,pageSize:10,total:20}}}},methods:{search:function(e){console.log(e)},reset:function(){console.log("重置")},otherBtnsClick:function(e){switch(e){case"export":console.log("我是导出");break;case"downLoad":console.log("我是下载")}},columnClick:function(e,t){var a=this;switch(e){case"edit":console.log("编辑",t);break;case"delete":this.$confirm("此操作将删除该数据，是否确认删除？","删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.$message({type:"success",message:"删除成功!"})}).catch(function(){a.$message({type:"info",message:"已取消删除"})});break;case"dtl":this.$router.push({path:"/Second/page1Dtl",query:{id:t.id}})}},handleSizeChange:function(e){console.log("每页 "+e+" 条")},handleCurrentChange:function(e){console.log("当前页: "+e)}},created:function(){}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h-crud",{attrs:{title:e.title,"search-option":e.searchOption,"table-option":e.tableOption},on:{search:e.search,reset:e.reset,otherBtnsClick:e.otherBtnsClick,columnClick:e.columnClick,"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange},scopedSlots:e._u([{key:"status",fn:function(t){var n=t.row;return[n.status&&1===n.status?a("span",{staticStyle:{color:"#F53F3F"}},[e._v("错误，红的")]):a("span",{staticStyle:{color:"green"}},[e._v("进行中，绿的")])]}}])})},staticRenderFns:[]};var l=a("VU/8")(n,o,!1,function(e){a("4PpF")},"data-v-c95e6cfe",null);t.default=l.exports}});