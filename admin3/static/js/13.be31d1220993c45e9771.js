webpackJsonp([13],{"0a4u":function(t,e){},"4d4b":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:function(){return{title:"node数据 可随时更改",tableOption:{tableColumn:[],tableData:[],page:{currentPage:1,pageSize:10,total:0}}}},methods:{getList:function(){var t=this;this.$http.user.getNodeList().then(function(e){if(200==e.status){var n=e.data,a=n.tableColumn,i=n.tableData;t.title=e.title,t.tableOption.tableColumn=a,t.tableOption.tableData=i}})},handleSizeChange:function(t){console.log("每页 "+t+" 条")},handleCurrentChange:function(t){console.log("当前页: "+t)}},created:function(){this.getList()}},i={render:function(){var t=this.$createElement;return(this._self._c||t)("h-crud",{attrs:{title:this.title,"table-option":this.tableOption},on:{"size-change":this.handleSizeChange,"current-change":this.handleCurrentChange}})},staticRenderFns:[]};var l=n("VU/8")(a,i,!1,function(t){n("0a4u")},"data-v-2538a47b",null);e.default=l.exports}});