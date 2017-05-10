webpackJsonp([17,20],{319:function(e,s,a){a(652);var t=a(3)(a(377),a(708),null,null);e.exports=t.exports},377:function(e,s,a){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(s,"__esModule",{value:!0});var i=a(120),o=t(i),r=a(152),l=a(127);t(l);s.default={data:function(){return{email:"",dialogVisible:!0}},methods:{onClose:function(){this.file={},this.$router.push({name:"UserProfile"})},resetPassword:function(){if(this.$validator.validate("email",this.email)){var e=o.default.auth();e.sendPasswordResetEmail(this.email).then(function(){(0,r.Message)({showClose:!0,message:"Your password reset link has been sent to your email.",type:"success"})},function(e){console.log(e),(0,r.Message)({showClose:!0,message:e.message,type:"error"})})}else(0,r.Message)({showClose:!0,message:"There was an error when trying to reset your password.",type:"error"})}},mounted:function(){this.$ga.trackPage(this.$route.path)}}},611:function(e,s,a){s=e.exports=a(122)(),s.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",file:"password-reset.vue",sourceRoot:"webpack://"}])},652:function(e,s,a){var t=a(611);"string"==typeof t&&(t=[[e.id,t,""]]);a(123)(t,{});t.locals&&(e.exports=t.locals)},708:function(e,s){e.exports={render:function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("el-dialog",{attrs:{size:"full","show-close":!1},on:{close:e.onClose},model:{value:e.dialogVisible,callback:function(s){e.dialogVisible=s},expression:"dialogVisible"}},[a("div",{slot:"title"},[a("div",{staticClass:"el-dialog__headerbtn"},[a("router-link",{attrs:{to:{name:"UserProfile"}}},[a("i",{staticClass:"el-dialog__close el-icon el-icon-close"})])],1)]),e._v(" "),e._t("default",[a("div",{staticClass:"container",staticStyle:{"padding-top":"125px"}},[a("h3",[e._v("Reset Password")]),e._v(" "),a("div",{staticClass:"modal-body"},[a("span",[e._v("We will send your reset password link to your email")]),e._v(" "),a("div",{staticClass:"row user-row"},[a("el-input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],attrs:{placeholder:"Enter Your Email",name:"email"},model:{value:e.email,callback:function(s){e.email=s},expression:"email"}}),e._v(" "),a("div",{staticClass:"a-row"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("email"),expression:"errors.has('email')"}],staticClass:"help is-danger"},[e._v(e._s(e.errors.first("email")))])])],1)]),e._v(" "),a("div",{staticClass:"footer",staticStyle:{"margin-top":"20px","margin-bottom":"10px"}},[a("el-button",{attrs:{type:"primary "},on:{click:e.resetPassword}},[e._v("Reset Password")])],1)])])],2)},staticRenderFns:[]}}});
//# sourceMappingURL=17.dbe72799626c46d75345.js.map