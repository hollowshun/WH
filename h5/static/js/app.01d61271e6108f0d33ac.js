webpackJsonp([1],{"/Jx7":function(t,e){},Ex3g:function(t,e){},LsgM:function(t,e){},NFxM:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("kV13"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view",{attrs:{name:"NavBar"}}),this._v(" "),e("router-view"),this._v(" "),e("router-view",{attrs:{name:"Tabbar"}})],1)},staticRenderFns:[]};var o=n("C7Lr")({name:"App"},r,!1,function(t){n("lx3a")},null,null).exports,s=n("sTv3"),i=n("EJGG"),c=n("kciL");a.a.use(c.a);var u=new c.a.Store({state:{token:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")).token:""},mutations:{token:function(t,e){t.token=e},removeToken:function(t,e){t.token=""}},actions:{setUserInfo:function(t,e){var n=t.commit;console.log(e),n("token",e.token)}},getters:{token:function(t){return t.token}}}),l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:t.meta.title},on:{"click-left":function(e){return t.$router.go(-1)}},scopedSlots:t._u([t.meta.isShow?{key:"left",fn:function(){return[n("van-icon",{attrs:{name:"arrow-left",size:"18",color:"#333"}}),t._v(" 返回\n    ")]},proxy:!0}:null],null,!0)})],1)},staticRenderFns:[]};var f=n("C7Lr")({data:function(){return{meta:{title:"ColdChain",isShow:!0}}},watch:{$route:function(t,e){this.meta=t.meta}},methods:{},created:function(){this.meta=this.$route.meta}},l,!1,function(t){n("usda")},"data-v-2561f8b0",null).exports,d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-tabbar",{attrs:{route:"","active-color":"#07c160","inactive-color":"#000"}},t._l(t.list,function(e,a){return n("van-tabbar-item",{key:a,attrs:{replace:"",to:e.path,icon:e.icon}},[t._v("\n      "+t._s(e.name)+"\n    ")])}),1)],1)},staticRenderFns:[]};var h=n("C7Lr")({data:function(){return{list:[{path:"/home",icon:"home-o",name:"首页"},{path:"/task",icon:"apps-o",name:"任务"},{path:"/running",icon:"logistics",name:"运行"},{path:"/repair",icon:"setting-o",name:"维护"},{path:"/user",icon:"contact",name:"我的"}]}},methods:{}},d,!1,function(t){n("SBdf")},"data-v-38507cc4",null).exports,v={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("注册")])},staticRenderFns:[]};var p=n("C7Lr")({data:function(){return{}},methods:{},created:function(){}},v,!1,function(t){n("ti53")},"data-v-4d46cc02",null).exports,m={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("忘记密码")])},staticRenderFns:[]};var g=n("C7Lr")({data:function(){return{}},methods:{},created:function(){}},m,!1,function(t){n("UO7E")},"data-v-a7fccf14",null).exports,b={data:function(){return{}},methods:{post:function(){var t=this;this.$http.home.testPost({aaa:11}).then(function(e){t.$toast.success("请求成功"),console.log(e)})},get:function(){var t=this;this.$http.home.testGet({aaa:11}).then(function(e){t.$toast.success("请求成功"),console.log(e)})}},created:function(){}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[t._v("\n    首页\n  ")]),t._v(" "),n("p",[t._v("\n    只限本地测试使用\n  ")]),t._v(" "),n("van-button",{attrs:{type:"primary",disabled:""},on:{click:t.post}},[t._v("post接口测试")]),t._v(" "),n("van-button",{attrs:{type:"primary",disabled:""},on:{click:t.get}},[t._v("get接口测试")])],1)},staticRenderFns:[]};var k=n("C7Lr")(b,_,!1,function(t){n("LsgM")},"data-v-7abb46e3",null).exports,$={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("维护")])},staticRenderFns:[]};var w=n("C7Lr")({data:function(){return{}},methods:{},created:function(){}},$,!1,function(t){n("j0Vh")},"data-v-313dc88a",null).exports,x={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("运行")])},staticRenderFns:[]};var C=n("C7Lr")({data:function(){return{}},methods:{},created:function(){}},x,!1,function(t){n("iDhj")},"data-v-b5aa0872",null).exports,L={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("任务")])},staticRenderFns:[]};var S=n("C7Lr")({data:function(){return{}},methods:{},created:function(){}},L,!1,function(t){n("/Jx7")},"data-v-34bedf49",null).exports,E=n("3cXf"),M=n.n(E),N={data:function(){return{}},methods:{login:function(){var t=this;this.$toast.loading({duration:0,message:"加载中...",loadingType:"spinner",forbidClick:!0}),setTimeout(function(){t.$toast.clear();var e={name:"张三",tel:"15888888888",token:"123456"};localStorage.setItem("userInfo",M()(e)),t.$store.dispatch("setUserInfo",e),t.$toast.success("登录成功"),t.$router.push("/home")},1e3)}},created:function(){}},T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._v("\n  我是登录页\n  "),e("div",{staticClass:"loginBtn"},[e("van-button",{attrs:{type:"primary",block:""},on:{click:this.login}},[this._v("登录")])],1)])},staticRenderFns:[]};var y={data:function(){return{}},methods:{logOut:function(){var t=this;this.$toast.loading({duration:0,message:"加载中...",loadingType:"spinner",forbidClick:!0}),setTimeout(function(){t.$toast.clear(),t.$toast.success("退出成功"),localStorage.removeItem("userInfo"),t.$store.commit("removeToken",""),t.$router.push("/home")},1e3)}},created:function(){}},F={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._v("\n  我的\n  "),e("div",{staticClass:"logoutBtn"},[e("van-button",{attrs:{type:"danger",block:""},on:{click:this.logOut}},[this._v("退出登录")])],1)])},staticRenderFns:[]};var R={components:{Login:n("C7Lr")(N,T,!1,function(t){n("NKNb")},"data-v-6887e09c",null).exports,User:n("C7Lr")(y,F,!1,function(t){n("O4oS")},"data-v-3e7e8479",null).exports},data:function(){return{isLogin:!!this.$store.getters.token}},methods:{},created:function(){}},I={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.isLogin?e("User"):e("Login")],1)},staticRenderFns:[]};var B=n("C7Lr")(R,I,!1,function(t){n("Ex3g")},"data-v-18000b30",null).exports,O={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("404")])},staticRenderFns:[]};var j=n("C7Lr")({data:function(){return{}},methods:{},created:function(){}},O,!1,function(t){n("v9Dh")},"data-v-3a134eee",null).exports;a.a.use(s.a);var H=new s.a({routes:[{path:"/",redirect:"/home"},{path:"/home",name:"home",meta:{title:"ColdChain",isShow:!1},components:{default:k,NavBar:f,Tabbar:h}},{path:"/repair",name:"repair",meta:{title:"维护",isShow:!1},components:{default:w,NavBar:f,Tabbar:h}},{path:"/running",name:"running",meta:{title:"运行",isShow:!1},components:{default:C,NavBar:f,Tabbar:h}},{path:"/task",name:"task",meta:{title:"任务",isShow:!1},components:{default:S,NavBar:f,Tabbar:h}},{path:"/user",name:"user",meta:{title:"我的",isShow:!1},components:{default:B,NavBar:f,Tabbar:h}},{path:"/register",name:"register",component:p},{path:"/forgetPassword",name:"forgetPassword",component:g},{path:"*",meta:{title:"404",isShow:!0},components:{default:j,NavBar:f}}]});H.beforeEach(function(t,e,n){"/forgetPassword"===t.path||"/register"===t.path||"/user"===t.path||"/home"===t.path?n():u.getters.token?n():(Object(i.a)("请先登录!"),n("/user"))});var P=H,U=n("rVsN"),D=n.n(U),J=n("I29D"),G=n.n(J);G.a.defaults.timeout=1e4,G.a.defaults.withCredentials=!1,G.a.defaults.baseURL="http://httpbin.org/",G.a.interceptors.request.use(function(t){return i.a.loading({message:"加载中...",duration:0,forbidClick:!0,loadingType:"spinner"}),t},function(t){return D.a.reject(t)}),G.a.interceptors.response.use(function(t){return i.a.clear(),t},function(t){if(i.a.clear(),err&&err.response)switch(err.response.status){case 400:err.Message="请求错误(400)";break;case 401:localStorage.removeItem("token"),P.push("/login");break;case 403:err.Message="拒绝访问(403)";break;case 404:err.Message="请求出错(404)";break;case 408:err.Message="请求超时(408)";break;case 500:err.Message="服务器错误(500)";break;case 501:err.Message="服务未实现(501)";break;case 502:err.Message="网络错误(502)";break;case 503:err.Message="服务不可用(503)";break;case 504:err.Message="网络超时(504)";break;case 505:err.Message="HTTP版本不受支持(505)";break;default:err.Message="连接出错("+err.response.status+")!"}else err.Message="连接服务器失败!";return Object(i.a)(err.Message),D.a.reject(t)});var V={home:{testPost:function(t){return e="/post",n=t,new D.a(function(t,a){G.a.post(e,n).then(function(e){t(e.data)}).catch(function(t){a(t.data)})});var e,n},testGet:function(t){return e="/get",n=t,new D.a(function(t,a){G.a.get(e,{params:n}).then(function(e){t(e.data)}).catch(function(t){a(t.data)})});var e,n}}};n("NFxM"),n("xHuH");a.a.config.productionTip=!1,a.a.prototype.$http=V,a.a.use(i.b),new a.a({el:"#app",router:P,store:u,components:{App:o},template:"<App/>"})},NKNb:function(t,e){},O4oS:function(t,e){},SBdf:function(t,e){},UO7E:function(t,e){},iDhj:function(t,e){},j0Vh:function(t,e){},lx3a:function(t,e){},ti53:function(t,e){},usda:function(t,e){},v9Dh:function(t,e){},xHuH:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.01d61271e6108f0d33ac.js.map