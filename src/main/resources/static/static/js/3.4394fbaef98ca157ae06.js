webpackJsonp([3],{Fu8m:function(e,t){},YEQ0:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("02xr"),l=a("uxtY"),o=a("+v9d"),r={props:["showMileageDialog","mileage"],data:function(){return{mileageForm:{id:"",startTime:"",endTime:"",startDate:"",endDate:"",selfNum:"",plateNum:"",mileageTotal:"",operationMileage:"",notOperationMileage:"",tripCount:"",unit:"",routeName:""},routeList:[],mileageRules:{startTime:[{type:"date",required:!0,message:"请选择开始日期",trigger:"change"}],endTime:[{type:"date",required:!0,message:"请选择结束日期",trigger:"change"}],selfNum:[{required:!0,message:"请输入车辆编号",trigger:"blur"}],plateNum:[{required:!0,message:"请输入车牌号",trigger:"blur"}],operationMileage:[{required:!0,message:"请输入营运里程",trigger:"blur"}],notOperationMileage:[{required:!0,message:"请输入非营运里程",trigger:"blur"}],tripCount:[{required:!0,message:"请输入总趟次",trigger:"blur"}],mileageTotal:[{required:!0,message:"请输入合计里程",trigger:"blur"}],unit:[{required:!0,message:"请输入单位名称",trigger:"blur"}],routeName:[{required:!0,message:"请选择线路",trigger:"change"}]},dialogVisible:!1}},methods:{_getRouteLis:function(){var e=this;Object(i.p)().then(function(t){t.code==l.b&&(e.routeList=t.result,e.routeName=e.routeList[0])})},closeDialog:function(){this.$emit("closeDialog")},saveMileage:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.mileageForm.startDate=Object(o.a)(t.mileageForm.startTime,"yyyy-MM-dd"),t.mileageForm.endDate=Object(o.a)(t.mileageForm.endTime,"yyyy-MM-dd"),null==t.mileageForm.id||""==t.mileageForm.id?Object(i.a)(t.mileageForm).then(function(e){e.code==l.b?(t.$message.success("保存成功"),t.$emit("closeDialog","success")):t.$message.error(e.define)}):Object(i.z)(t.mileageForm).then(function(e){e.code==l.b?(t.$message.success("保存成功"),t.$emit("closeDialog","success")):t.$message.error(e.define)})})}},watch:{showMileageDialog:function(e){this.dialogVisible=e,this.mileageForm={id:"",startTime:"",endTime:"",startDate:"",endDate:"",selfNum:"",plateNum:"",mileageTotal:"",operationMileage:"",notOperationMileage:"",tripCount:"",unit:"",routeName:""},this._getRouteLis()},mileage:function(e){if(this.mileageForm=e,null!=e){var t=this.mileageForm.startDate.split("-");this.mileageForm.startTime=new Date(parseInt(t[0]),parseInt(t[1])-1,parseInt(t[2]));var a=this.mileageForm.endDate.split("-");this.mileageForm.endTime=new Date(parseInt(a[0]),parseInt(a[1])-1,parseInt(a[2]))}}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"添加里程",visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t},close:e.closeDialog}},[a("el-form",{ref:"mileageForm",attrs:{rules:e.mileageRules,inline:!0,model:e.mileageForm,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"起始日期",prop:"startTime"}},[a("el-date-picker",{attrs:{type:"date",format:"yyyy-MM-dd",placeholder:"选择日期"},model:{value:e.mileageForm.startTime,callback:function(t){e.$set(e.mileageForm,"startTime",t)},expression:"mileageForm.startTime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"结束日期",prop:"endTime"}},[a("el-date-picker",{attrs:{type:"date",format:"yyyy-MM-dd",placeholder:"选择日期"},model:{value:e.mileageForm.endTime,callback:function(t){e.$set(e.mileageForm,"endTime",t)},expression:"mileageForm.endTime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"车辆编号",prop:"selfNum"}},[a("el-input",{model:{value:e.mileageForm.selfNum,callback:function(t){e.$set(e.mileageForm,"selfNum","string"==typeof t?t.trim():t)},expression:"mileageForm.selfNum"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"车牌号",prop:"plateNum"}},[a("el-input",{model:{value:e.mileageForm.plateNum,callback:function(t){e.$set(e.mileageForm,"plateNum","string"==typeof t?t.trim():t)},expression:"mileageForm.plateNum"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"营运里程",prop:"operationMileage"}},[a("el-input",{model:{value:e.mileageForm.operationMileage,callback:function(t){e.$set(e.mileageForm,"operationMileage","string"==typeof t?t.trim():t)},expression:"mileageForm.operationMileage"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"合计里程",prop:"mileageTotal"}},[a("el-input",{model:{value:e.mileageForm.mileageTotal,callback:function(t){e.$set(e.mileageForm,"mileageTotal","string"==typeof t?t.trim():t)},expression:"mileageForm.mileageTotal"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"非营运里程",prop:"notOperationMileage"}},[a("el-input",{model:{value:e.mileageForm.notOperationMileage,callback:function(t){e.$set(e.mileageForm,"notOperationMileage","string"==typeof t?t.trim():t)},expression:"mileageForm.notOperationMileage"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"总趟次",prop:"tripCount"}},[a("el-input",{model:{value:e.mileageForm.tripCount,callback:function(t){e.$set(e.mileageForm,"tripCount","string"==typeof t?t.trim():t)},expression:"mileageForm.tripCount"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"线路",prop:"routeName"}},[a("el-select",{attrs:{placeholder:"请选择线路"},model:{value:e.mileageForm.routeName,callback:function(t){e.$set(e.mileageForm,"routeName",t)},expression:"mileageForm.routeName"}},e._l(e.routeList,function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"单位名称",prop:"unit"}},[a("el-input",{model:{value:e.mileageForm.unit,callback:function(t){e.$set(e.mileageForm,"unit","string"==typeof t?t.trim():t)},expression:"mileageForm.unit"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.closeDialog}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.saveMileage("mileageForm")}}},[e._v("确 定")])],1)],1)},staticRenderFns:[]};var m={name:"mileageRecord",components:{mileageDialog:a("VU/8")(r,s,!1,function(e){a("Fu8m")},"data-v-874b9000",null).exports},data:function(){return{routeList:[],routeName:"",workdate:"",plateNum:"",timeTables:[],showMileageDialog:!1,mileageData:{}}},methods:{_getRouteLis:function(){var e=this;Object(i.p)().then(function(t){t.code==l.b&&(e.routeList=t.result,e.routeName=e.routeList[0],e._getVehicleMileage())})},_getVehicleMileage:function(){var e=this;console.log(this.workdate);var t={routeName:this.routeName,workdate:this.workdate};Object(i.s)(t).then(function(t){t.code==l.b&&(e.timeTables=t.result)})},routeChange:function(e){},addMileage:function(){this.showMileageDialog=!0},closeDialog:function(e){this.showMileageDialog=!1,"success"==e&&this._getVehicleMileage()},queryPlans:function(){this._getVehicleMileage()},deletePlan:function(e,t){var a=this;this.$confirm("是否删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var o={id:t[e].id};Object(i.e)(o).then(function(e){e.code==l.b?(a._getVehicleMileage(),a.$message.success("删除成功")):a.$message.success("删除失败")})}).catch(function(){})},modify:function(e,t){this.mileageData=this.timeTables[e],this.showMileageDialog=!0}},created:function(){this._getRouteLis()}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"schedule-wrap"},[a("el-row",{staticClass:"schedule-panel"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:3}},[a("el-select",{attrs:{placeholder:"请选择线路"},on:{change:e.routeChange},model:{value:e.routeName,callback:function(t){e.routeName=t},expression:"routeName"}},e._l(e.routeList,function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})}))],1),e._v(" "),a("el-col",{attrs:{span:4}},[a("el-date-picker",{attrs:{type:"month","value-format":"yyyy-MM",placeholder:"选择月份"},model:{value:e.workdate,callback:function(t){e.workdate=t},expression:"workdate"}})],1),e._v(" "),a("el-col",{attrs:{span:2}},[a("el-button",{attrs:{type:"primary",size:"medium"},on:{click:e.queryPlans}},[e._v("查询")])],1)],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{"max-height":"500",size:"medium",data:e.timeTables,align:"center","highlight-current-row":""}},[a("el-table-column",{attrs:{type:"index",width:"100"}}),e._v(" "),a("el-table-column",{attrs:{prop:"workdate",label:"时间",width:"300"}}),e._v(" "),a("el-table-column",{attrs:{prop:"selfNum",label:"车辆自编号",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"plateNum",label:"车牌号",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"totalMileage",label:"合计里程(公里)",width:"300"}})],1)],1),e._v(" "),a("mileageDialog",{attrs:{showMileageDialog:e.showMileageDialog,mileage:e.mileageData},on:{closeDialog:e.closeDialog}})],1)},staticRenderFns:[]};var u=a("VU/8")(m,n,!1,function(e){a("q4DV")},"data-v-bdd19e64",null);t.default=u.exports},q4DV:function(e,t){}});
//# sourceMappingURL=3.4394fbaef98ca157ae06.js.map