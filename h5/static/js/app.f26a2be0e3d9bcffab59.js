webpackJsonp([1],{"/Jx7":function(t,e){},"/QWc":function(t,e){},BMiX:function(t,e){},NFxM:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("kV13"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view",{attrs:{name:"NavBar"}}),this._v(" "),e("router-view"),this._v(" "),e("router-view",{attrs:{name:"Tabbar"}})],1)},staticRenderFns:[]};var s=n("C7Lr")({name:"App"},r,!1,function(t){n("lx3a")},null,null).exports,o=n("sTv3"),i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:t.meta.title},on:{"click-left":function(e){return t.$router.go(-1)}},scopedSlots:t._u([t.meta.isShow?{key:"left",fn:function(){return[n("van-icon",{attrs:{name:"arrow-left",size:"18",color:"#333"}}),t._v(" 返回\n    ")]},proxy:!0}:null],null,!0)})],1)},staticRenderFns:[]};var c=n("C7Lr")({data:function(){return{meta:{title:"ColdChain",isShow:!0}}},watch:{$route:function(t,e){this.meta=t.meta}},methods:{},created:function(){this.meta=this.$route.meta}},i,!1,function(t){n("usda")},"data-v-2561f8b0",null).exports,u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-tabbar",{attrs:{route:"","active-color":"#07c160","inactive-color":"#000"}},t._l(t.list,function(e,a){return n("van-tabbar-item",{key:a,attrs:{replace:"",to:e.path,icon:e.icon}},[t._v("\n      "+t._s(e.name)+"\n    ")])}),1)],1)},staticRenderFns:[]};var f=n("C7Lr")({data:function(){return{list:[{path:"/home",icon:"home-o",name:"首页"},{path:"/task",icon:"apps-o",name:"任务"},{path:"/running",icon:"logistics",name:"运行"},{path:"/repair",icon:"setting-o",name:"维护"},{path:"/user",icon:"contact",name:"我的"}]}},methods:{}},u,!1,function(t){n("SBdf")},"data-v-38507cc4",null).exports,h={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("登录")])},staticRenderFns:[]};var l=n("C7Lr")({data:function(){return{}},methods:{},created:function(){}},h,!1,function(t){n("VxFN")},"data-v-34065e6c",null).exports,d={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("注册")])},staticRenderFns:[]};var p=n("C7Lr")({data:function(){return{}},methods:{},created:function(){}},d,!1,function(t){n("ti53")},"data-v-4d46cc02",null).exports,v={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("忘记密码")])},staticRenderFns:[]};var m=n("C7Lr")({data:function(){return{}},methods:{},created:function(){}},v,!1,function(t){n("UO7E")},"data-v-a7fccf14",null).exports,_={data:function(){return{}},methods:{post:function(){this.$http.home.testPost({aaa:11}).then(function(t){console.log(t)})},get:function(){this.$http.home.testGet({aaa:11}).then(function(t){console.log(t)})},del:function(){this.$http.home.testDel({aaa:11}).then(function(t){console.log(t)})},put:function(){this.$http.home.testPut({aaa:11}).then(function(t){console.log(t)})}},created:function(){}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("van-button",{attrs:{type:"primary"},on:{click:this.post}},[this._v("post")]),this._v(" "),e("van-button",{attrs:{type:"primary"},on:{click:this.get}},[this._v("get")])],1)},staticRenderFns:[]};var b=n("C7Lr")(_,g,!1,function(t){n("/QWc")},"data-v-043a49f2",null).exports,k={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("维护")])},staticRenderFns:[]};var w=n("C7Lr")({data:function(){return{}},methods:{},created:function(){}},k,!1,function(t){n("j0Vh")},"data-v-313dc88a",null).exports,x={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("运行")])},staticRenderFns:[]};var $=n("C7Lr")({data:function(){return{}},methods:{},created:function(){}},x,!1,function(t){n("iDhj")},"data-v-b5aa0872",null).exports,E={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("任务")])},staticRenderFns:[]};var M=n("C7Lr")({data:function(){return{}},methods:{},created:function(){}},E,!1,function(t){n("/Jx7")},"data-v-34bedf49",null).exports,C={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("我的")])},staticRenderFns:[]};var F=n("C7Lr")({data:function(){return{}},methods:{},created:function(){}},C,!1,function(t){n("BMiX")},"data-v-639c495c",null).exports,L={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("404")])},staticRenderFns:[]};var N=n("C7Lr")({data:function(){return{}},methods:{},created:function(){}},L,!1,function(t){n("v9Dh")},"data-v-3a134eee",null).exports;a.a.use(o.a);var R=new o.a({routes:[{path:"/",redirect:"/home"},{path:"/home",name:"home",meta:{title:"ColdChain",isShow:!1},components:{default:b,NavBar:c,Tabbar:f}},{path:"/repair",name:"repair",meta:{title:"维护",isShow:!1},components:{default:w,NavBar:c,Tabbar:f}},{path:"/running",name:"running",meta:{title:"运行",isShow:!1},components:{default:$,NavBar:c,Tabbar:f}},{path:"/task",name:"task",meta:{title:"任务",isShow:!1},components:{default:M,NavBar:c,Tabbar:f}},{path:"/user",name:"user",meta:{title:"我的",isShow:!1},components:{default:F,NavBar:c,Tabbar:f}},{path:"/login",name:"login",component:l},{path:"/register",name:"register",component:p},{path:"/forgetPassword",name:"forgetPassword",component:m},{path:"*",component:N}]});R.beforeEach(function(t,e,n){if("/forgetPassword"===t.path||"/register"===t.path||"/login"===t.path)n();else{n()}});var S=R,T=n("kciL");a.a.use(T.a);var B=new T.a.Store({state:{},mutations:{},actions:{},getters:{}}),y=n("rVsN"),P=n.n(y),D=n("I29D"),j=n.n(D);j.a.defaults.timeout=2e4,j.a.defaults.withCredentials=!1,j.a.defaults.baseURL="http://httpbin.org/",j.a.interceptors.request.use(function(t){return t},function(t){return P.a.reject(t)}),j.a.interceptors.response.use(function(t){return t},function(t){if(err&&err.response)switch(err.response.status){case 400:err.Message="请求错误(400)";break;case 401:localStorage.removeItem("token"),S.push("/login");break;case 403:err.Message="拒绝访问(403)";break;case 404:err.Message="请求出错(404)";break;case 408:err.Message="请求超时(408)";break;case 500:err.Message="服务器错误(500)";break;case 501:err.Message="服务未实现(501)";break;case 502:err.Message="网络错误(502)";break;case 503:err.Message="服务不可用(503)";break;case 504:err.Message="网络超时(504)";break;case 505:err.Message="HTTP版本不受支持(505)";break;default:err.Message="连接出错("+err.response.status+")!"}else err.Message="连接服务器失败!";return console.log(Message),P.a.reject(err)});var H={home:{testPost:function(t){return e="/post",n=t,new P.a(function(t,a){j.a.post(e,n).then(function(e){t(e.data)}).catch(function(t){a(t.data)})});var e,n},testGet:function(t){return e="/get",n=t,new P.a(function(t,a){j.a.get(e,{params:n}).then(function(e){t(e.data)}).catch(function(t){a(t.data)})});var e,n},testPut:function(t){return put("/put",t)},testDel:function(t){return DELETE("/delete",t)}}},V=n("EJGG");n("NFxM"),n("xHuH");a.a.config.productionTip=!1,a.a.prototype.$http=H,a.a.use(V.a),new a.a({el:"#app",router:S,store:B,components:{App:s},template:"<App/>"})},SBdf:function(t,e){},UO7E:function(t,e){},VxFN:function(t,e){},iDhj:function(t,e){},j0Vh:function(t,e){},lx3a:function(t,e){},ti53:function(t,e){},usda:function(t,e){},v9Dh:function(t,e){},xHuH:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f26a2be0e3d9bcffab59.js.map