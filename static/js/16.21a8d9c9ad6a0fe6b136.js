webpackJsonp([16,19],{315:function(e,t,s){s(654);var a=s(3)(s(372),s(712),null,null);e.exports=a.exports},372:function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=s(124),o=a(l),i=s(152),r=s(129),n=a(r);t.default={data:function(){return{tab:0,dialogVisible:!0,imageUrl:"",file:{url:"",obj:null}}},mounted:function(){this.$ga.trackPage(this.$route.path)},methods:{setTab:function(e){this.tab=e},onClose:function(){this.file={},this.$router.push({name:"UserProfile"})},onFileSelected:function(e){return this.file.obj=e,this.file.url=e.name,!1},uploadLocal:function(){var e=this;if(this.tab)if(n.default.isEmpty(this.imageUrl))(0,i.Message)({showClose:!0,message:"Your photo url is empty or invalid",type:"error"});else{var t=o.default.auth().currentUser;t.updateProfile({photoURL:this.imageUrl}).then(function(){(0,i.Message)({showClose:!0,message:"Your Photo has been successfully updated.",type:"success"}),e.$store.dispatch("setUser",t),e.$router.push({name:"UserProfile"})},function(){(0,i.Message)({showClose:!0,message:"There was an error when trying to update your Photo.",type:"error"})})}else if(n.default.isEmpty(this.file.obj))(0,i.Message)({showClose:!0,message:"The image file is empty or invalid.",type:"error"});else{var s=l.db.ref("deals-photos/"+this.file.url);s.put(this.file.obj).then(function(t){s.getDownloadURL().then(function(t){var s=o.default.auth().currentUser;s.updateProfile({photoURL:t}).then(function(){(0,i.Message)({showClose:!0,message:"Your Photo has been successfully updated.",type:"success"}),e.$store.dispatch("setUser",s),e.$router.push({name:"UserProfile"})},function(){(0,i.Message)({showClose:!0,message:"There was an error when trying to update your Photo.",type:"error"})})})})}}}}},613:function(e,t,s){t=e.exports=s(125)(),t.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",file:"update-photo.vue",sourceRoot:"webpack://"}])},654:function(e,t,s){var a=s(613);"string"==typeof a&&(a=[[e.id,a,""]]);s(126)(a,{});a.locals&&(e.exports=a.locals)},712:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-dialog",{attrs:{size:"full","show-close":!1},on:{close:e.onClose},model:{value:e.dialogVisible,callback:function(t){e.dialogVisible=t},expression:"dialogVisible"}},[s("div",{slot:"title"},[s("div",{staticClass:"el-dialog__headerbtn"},[s("router-link",{attrs:{to:{name:"UserProfile"}}},[s("i",{staticClass:"el-dialog__close el-icon el-icon-close"})])],1)]),e._v(" "),e._t("default",[s("div",{staticClass:"container",staticStyle:{"padding-top":"125px"}},[s("h3",[e._v("Update Avatar")]),e._v(" "),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"row nav-selector"},[s("ul",{staticClass:"nav nav-pills"},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link active",attrs:{href:"#upload","data-toggle":"pill"},on:{click:function(t){e.setTab(0)}}},[s("b",[e._v("Upload")])])]),e._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#uploadURL","data-toggle":"pill"},on:{click:function(t){e.setTab(1)}}},[s("b",[e._v("Image From URL")])])])])]),e._v(" "),s("div",{staticClass:"tab-content"},[s("div",{staticClass:"tab-pane active",attrs:{id:"upload",role:"tabpanel"}},[s("div",{staticClass:"row user-row"},[s("el-input",{attrs:{placeholder:"Upload Your Photo",disabled:""},model:{value:e.file.url,callback:function(t){e.file.url=t},expression:"file.url"}},[s("template",{slot:"append"},[s("el-upload",{staticClass:"upload-demo",attrs:{action:"","show-upload-list":!1,multiple:!1,"before-upload":e.onFileSelected}},[s("el-button",{staticStyle:{color:"#212121"},attrs:{size:"small",type:"primary"}},[e._v("Upload Files")])],1)],1)],2)],1)]),e._v(" "),s("div",{staticClass:"tab-pane",attrs:{id:"uploadURL",role:"tabpanel"}},[s("div",{staticClass:"row user-row"},[s("el-input",{attrs:{placeholder:"https://www."},model:{value:e.imageUrl,callback:function(t){e.imageUrl=t},expression:"imageUrl"}})],1)])])]),e._v(" "),s("div",{staticClass:"footer",staticStyle:{"margin-top":"20px"}},[s("el-button",{attrs:{type:"primary "},on:{click:e.uploadLocal}},[e._v("Upload")]),e._v(" "),s("router-link",{attrs:{to:{name:"UserProfile"}}},[s("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("Cancel")])],1)],1)])])],2)},staticRenderFns:[]}}});
//# sourceMappingURL=16.21a8d9c9ad6a0fe6b136.js.map