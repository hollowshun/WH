webpackJsonp([5],{axwe:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s("OzzV");var n={data:function(){return{}},methods:{test1:function(){var t=this;this.$http.user.test1("/post",{page:1,size:3}).then(function(e){console.log("123",e),t.$message.success("请求成功")})},test2:function(){var t=this;this.$http.user.test2({page:1,size:3}).then(function(e){console.log("123",e),t.$message.success("请求成功")})},test3:function(){var t=this;this.$http.user.test3({page:1,size:3}).then(function(e){console.log("123",e),t.$message.success("请求成功")})}}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pd16"},[e("el-button",{on:{click:this.test1}},[this._v("json请求1")]),this._v(" "),e("el-button",{on:{click:this.test2}},[this._v("json请求2")])],1)},staticRenderFns:[]};var o=s("VU/8")(n,i,!1,function(t){s("emu/")},"data-v-d9ba5980",null);e.default=o.exports},"emu/":function(t,e){}});