webpackJsonp([15,19],{316:function(t,e,a){a(670);var i=a(3)(a(373),a(732),null,null);t.exports=i.exports},373:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=a(124),o=i(s),n=a(152);e.default={name:"userProfile",data:function(){return{dialogVisible:!1,birthDate:null,displayName:this.$store.getters.getUser.nickName,email:this.$store.getters.getUser.email,file:{url:"",obj:null}}},computed:{photo:function(){return this.$store.getters.getUserImage}},methods:{onFileSelected:function(t){return this.file.obj=t,this.file.url=t.name,console.log(t),!1},updateDisplayName:function(){var t=this,e=o.default.auth().currentUser;e.updateProfile({displayName:this.displayName}).then(function(){(0,n.Message)({showClose:!0,message:"Your display name has been successfully updated.",type:"success"}),t.$store.dispatch("setUser",e)},function(){(0,n.Message)({showClose:!0,message:"There was an error when trying to update your display name.",type:"error"})})},saveProfile:function(){var t=o.default.auth().currentUser;t.updateProfile({dob:this.birthDate}).then(function(){(0,n.Message)({showClose:!0,message:"Your profile has been successfully updated.",type:"success"}),console.log(o.default.auth().currentUser)},function(){(0,n.Message)({showClose:!0,message:"There was an error when trying to update your profile.",type:"error"})})}},mounted:function(){this.$ga.trackPage(this.$route.path)}}},622:function(t,e,a){e=t.exports=a(125)(),e.push([t.id,".span-info{font-size:13px;color:#93a3b5}@media (min-width:576px){div.user-profile-update div.el-dialog__body .container{width:540px}}@media (min-width:700px){div.user-profile-update div.el-dialog__body .container{width:700px}}.label-info{font-size:12px;font-weight:lighter}div.el-dialog__body .container{position:relative;margin-left:auto;margin-right:auto}.row-table{display:table}.input-pad-top{margin-top:5px}.upload-pad-top{margin-top:10px;padding:5px}div.user-profile-update .el-date-editor.el-input,div.user-profile-update .el-input{width:75%}div.user-profile-update ul.el-upload-list.el-upload-list--text{display:none}.input-pad-bottom{margin-bottom:8px}div.user-row{margin-top:15px}div.user-pad-row{padding-top:15px;padding-bottom:15px}.col-cell{display:table-cell}","",{version:3,sources:["/./src/components/user/profile/user-profile.vue"],names:[],mappings:"AACA,WACE,eAAe,AACf,aAAe,CAChB,AACD,yBACA,uDACI,WAAY,CACf,CACA,AACD,yBACA,uDACI,WAAY,CACf,CACA,AACD,YACE,eAAgB,AAChB,mBAAqB,CACtB,AACD,+BACE,kBAAmB,AACnB,iBAAkB,AAClB,iBAAmB,CACpB,AACD,WACE,aAAe,CAChB,AACD,eACE,cAAe,CAChB,AACD,gBACE,gBAAiB,AACjB,WAAa,CACd,AACD,mFACE,SAAW,CACZ,AACD,+DACE,YAAa,CACd,AACD,kBACE,iBAAkB,CACnB,AACD,aACE,eAAgB,CACjB,AACD,iBACE,iBAAiB,AACjB,mBAAoB,CACrB,AACD,UACE,kBAAoB,CACrB",file:"user-profile.vue",sourcesContent:["\n.span-info {\n  font-size:13px;\n  color: #93a3b5;\n}\n@media (min-width: 576px) {\ndiv.user-profile-update div.el-dialog__body .container {\n    width:540px;\n}\n}\n@media (min-width: 700px) {\ndiv.user-profile-update div.el-dialog__body .container {\n    width:700px;\n}\n}\n.label-info {\n  font-size: 12px;\n  font-weight: lighter;\n}\ndiv.el-dialog__body .container {\n  position: relative;\n  margin-left: auto;\n  margin-right: auto;\n}\n.row-table {\n  display: table;\n}\n.input-pad-top {\n  margin-top:5px;\n}\n.upload-pad-top {\n  margin-top: 10px;\n  padding: 5px;\n}\ndiv.user-profile-update .el-date-editor.el-input, div.user-profile-update .el-input {\n  width: 75%;\n}\ndiv.user-profile-update ul.el-upload-list.el-upload-list--text {\n  display:none;\n}\n.input-pad-bottom {\n  margin-bottom:8px;\n}\ndiv.user-row {\n  margin-top:15px;\n}\ndiv.user-pad-row {\n  padding-top:15px;\n  padding-bottom:15px;\n}\n.col-cell {\n  display: table-cell;\n}\n\n"],sourceRoot:"webpack://"}])},670:function(t,e,a){var i=a(622);"string"==typeof i&&(i=[[t.id,i,""]]);a(126)(i,{});i.locals&&(t.exports=i.locals)},732:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-profile-update"},[a("router-view"),t._v(" "),a("div",{staticClass:"row",staticStyle:{padding:"0",margin:"0",width:"100%"}},[a("div",{staticClass:"col-lg-12 reset-col"},[a("div",{staticClass:"card",staticStyle:{"padding-bottom":"5px","border-top":"3px solid #03A9F4"}},[t._m(0),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 reset-col",staticStyle:{"margin-top":"15px"}},[a("div",{staticClass:"row user-row"},[t._m(1),t._v(" "),a("div",{staticClass:"col-lg-8"},[a("img",{staticClass:"img-thumbnail",staticStyle:{"max-height":"85px","max-width":"85px",width:"85px",height:"85px"},attrs:{src:t.photo,alt:"user"}}),t._v(" "),a("div",{staticClass:"row"},[a("router-link",{attrs:{to:{name:"UpdatePhoto"}}},[a("button",{staticClass:"upload-pad-top btn btn-info btn-raised"},[a("b",[t._v("Update Photo")])])])],1)])]),t._v(" "),a("div",{staticClass:"row user-pad-row",staticStyle:{"border-top":"1px solid #ccc","margin-top":"15px"}},[t._m(2),t._v(" "),a("div",{staticClass:"col-lg-8"},[t._m(3),t._v(" "),a("el-input",{staticClass:"input-pad-top input-pad-bottom",attrs:{placeholder:"Display Name"},model:{value:t.displayName,callback:function(e){t.displayName=e},expression:"displayName"}}),t._v(" "),a("div",{staticClass:"row"},[a("a",{staticClass:"input-pad",attrs:{href:"#"},on:{click:t.updateDisplayName}},[a("b",[t._v("Update Display Name")])])])],1)]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-8 offset-lg-4"},[t._m(4),t._v(" "),a("el-input",{staticClass:"input-pad-top input-pad-bottom",attrs:{placeholder:"Email",disabled:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)]),t._v(" "),a("div",{staticClass:"row user-row user-pad-row",staticStyle:{"border-top":"1px solid #ccc"}},[t._m(5),t._v(" "),a("div",{staticClass:"col-lg-8"},[a("router-link",{attrs:{to:{name:"passwordReset"}}},[a("b",[t._v("Reset Password")])])],1)])])])])])])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("ul",{staticClass:"nav nav-tabs",staticStyle:{width:"100%"}},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link active",staticStyle:{"border-radius":"0","font-size":"13px","padding-right":"10px","padding-left":"10px"},attrs:{href:"#"}},[a("strong",[t._v("Profile")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-4"},[a("span",{staticClass:"span-info"},[a("b",[t._v("User Photo")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-4"},[a("span",{staticClass:"span-info"},[a("b",[t._v("Account Information")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("strong",[t._v("Display Name")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("strong",[t._v("Email")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-lg-4"},[a("span",{staticClass:"span-info"},[a("b",[t._v("Password")])])])}]}}});
//# sourceMappingURL=15.a816f8c112f21e435eac.js.map