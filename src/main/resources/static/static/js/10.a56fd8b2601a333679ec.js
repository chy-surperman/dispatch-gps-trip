webpackJsonp([10],{TRBu:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("02xr"),r=a("uxtY"),n={data:function(){return{routeList:[],routeName:"",timeTables:[]}},methods:{createSchedule:function(){null!=this.routeName&&""!=this.routeName?this.$router.push({path:URLConstans.createTimetable,query:{routeName:this.routeName}}):this.$message.error("请选择线路")},_getRouteLis:function(){var e=this;Object(l.p)().then(function(t){t.code==r.b&&(e.routeList=t.result,e.routeName=e.routeList[0],e._getSupplementMetas())})},_getSupplementMetas:function(){var e=this,t={routeName:this.routeName};Object(l.r)(t).then(function(t){t.code==r.b&&(e.timeTables=t.result)})},routeChange:function(e){},queryPlans:function(){this._getSupplementMetas()}},created:function(){this._getRouteLis()}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"schedule-wrap"},[a("el-row",{staticClass:"schedule-panel"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:3}},[a("el-select",{attrs:{placeholder:"请选择线路"},on:{change:e.routeChange},model:{value:e.routeName,callback:function(t){e.routeName=t},expression:"routeName"}},e._l(e.routeList,function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})}))],1),e._v(" "),a("el-col",{attrs:{span:2}},[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.queryPlans}},[e._v("查询")])],1)],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{"max-height":"500",size:"medium",data:e.timeTables,align:"center","highlight-current-row":""}},[a("el-table-column",{attrs:{type:"index",width:"60"}}),e._v(" "),a("el-table-column",{attrs:{prop:"startDate",label:"起始时间",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"endDate",label:"结束时间",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"routeName",label:"线路名称",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"plateNum",label:"车牌号",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"starttag",label:"方向",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"terminal",label:"终端编号",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"operatingDate",label:"操作时间",width:"200"}})],1)],1)],1)},staticRenderFns:[]};var o=a("VU/8")(n,u,!1,function(e){a("VKJ2")},"data-v-6d0e0960",null);t.default=o.exports},VKJ2:function(e,t){}});
//# sourceMappingURL=10.a56fd8b2601a333679ec.js.map