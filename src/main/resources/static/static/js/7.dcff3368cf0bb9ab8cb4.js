webpackJsonp([7],{K31e:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("02xr"),i=s("uxtY"),n={name:"login",data:function(){return{wrapperHeight:700,loginForm:{userName:"",password:""},fullscreenLoading:!1,value:null}},methods:{handleChange:function(e){console.log(e)},postUser:function(){return 0==this.loginForm.userName.length?(this.$message.error("请输入用户名"),!1):0==this.loginForm.password.length?(this.$message.error("请输入密码"),!1):void this._adminLogin()},_adminLogin:function(){var e=this;this.fullscreenLoading=!0,Object(r.v)(this.loginForm).then(function(t){if(t.code==i.b){sessionStorage.setItem("loginInfo.gpsUserId",t.result.userName);var s=e;setTimeout(function(){s.fullscreenLoading=!1,s.$router.push("/supplement")},500)}else e.fullscreenLoading=!1,e.$message.error(t.define)})}},mounted:function(){var e=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;this.wrapperHeight=e}},o={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"wrap",style:{height:e.wrapperHeight+"px"}},[e._m(0),e._v(" "),s("div",{staticClass:"login-panel"},[s("el-row",[s("el-col",{attrs:{span:20}},[s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("span",[e._v("泓原通公交系统")])]),e._v(" "),s("el-form",{staticClass:"demo-ruleForm",attrs:{model:e.loginForm,"label-width":"60px"}},[s("el-form-item",{attrs:{label:"用户名"}},[s("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.loginForm.userName,callback:function(t){e.$set(e.loginForm,"userName","string"==typeof t?t.trim():t)},expression:"loginForm.userName"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"密码"}},[s("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password","string"==typeof t?t.trim():t)},expression:"loginForm.password"}})],1),e._v(" "),s("div",{staticClass:"form__footer"},[s("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],staticStyle:{width:"90%"},attrs:{type:"primary",round:""},on:{click:e.postUser}},[e._v("登录")])],1)],1)],1)],1)],1)],1),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"header"},[t("i",{staticClass:"logo el-icon-datacenter-track-line-fill"}),this._v(" "),t("span",[this._v("泓原通公交系统")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"footer"},[t("p",[this._v("\n\t\t\t@2019 长沙泓原通信息科技有限公司\n\t\t\t"),t("a",{staticStyle:{color:"white"},attrs:{target:"_blank",href:"http://www.beian.miit.gov.cn/"}},[this._v("湘ICP备16014104号-1")])])])}]};var a=s("VU/8")(n,o,!1,function(e){s("KurW")},"data-v-83f75222",null);t.default=a.exports},KurW:function(e,t){}});
//# sourceMappingURL=7.dcff3368cf0bb9ab8cb4.js.map