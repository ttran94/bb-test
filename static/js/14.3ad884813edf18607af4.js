webpackJsonp([14,19],{317:function(e,t,a){a(664);var s=a(3)(a(374),a(725),null,null);e.exports=s.exports},374:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(124),l=s(i),r=a(152),o=a(129),n=s(o);t.default={data:function(){return{email:"",dialogVisible:!0,title:"",selectedType:null,percent:null,listPrice:null,summary:null,productId:null,salePrice:null,top:"5%",selectedTag:[],mainUrl:null,origin:"https://api.best.bargains",path:"https://api.best.bargains/user/bargains",selectedStore:null,selectedBrand:null,selectedCategory:[],toolbarOptions:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"]],formats:["background","bold","color","font","code","italic","link","size","strike","script","underline","blockquote","header","indent","list","align","direction","code-block","formula"],content:"",validOn:null,validUntil:null,storeOptions:[],brandOptions:[],tagOptions:[],fileList:[],categoryOptions:[],editorOption:{formats:this.formats,modules:{toolbar:this.toolbarOptions}},typeOptions:[{value:"sale",label:"Sale"},{value:"percentOff",label:"Percent Off"},{value:"free",label:"Free"},{value:"promotion",label:"Promotion"},{value:"other",label:"Other"}]}},computed:{isHttp:function(){return!n.default.isEmpty(this.mainUrl)&&!(!this.mainUrl.toLowerCase().includes("http://")&&!this.mainUrl.toLowerCase().includes("https://"))}},methods:{onFileRemove:function(e){if(!n.default.isEmpty(e)){var t=n.default.findIndex(this.fileList,function(t){return t.uid===e.uid});t!==-1&&this.fileList.splice(t,1)}},onClose:function(){this.file={},this.$router.push({name:"UserBargains"})},onFileSelected:function(e){return n.default.isEmpty(e)||("image/jpeg"===e.type||"image/png"===e.type?this.fileList.push(e):(0,r.Message)({showClose:!0,message:"Only JPG and PNG file type are accepted!",type:"error"})),!1},storeChange:function(){console.log(this.selectedStore)},validateBeforeSubmit:function(){var e=this;null!==this.selectedType&&void 0!==this.selectedType?"sale"===this.selectedType?(this.$validator.attach("salePrice","required",{prettyName:"Sale Price",context:function(){return e.salePrice},getter:function(e){return e}}),this.$validator.attach("listPrice","required",{prettyName:"List Price",context:function(){return e.listPrice},getter:function(e){return e}}),this.$validator.detach("percent")):"percentOff"===this.selectedType?(this.$validator.attach("percent","required",{prettyName:"Percent",context:function(){return e.percent},getter:function(e){return e}}),this.$validator.detach("salePrice"),this.$validator.detach("listPrice")):(this.$validator.detach("percent"),this.$validator.detach("salePrice"),this.$validator.detach("listPrice")):(this.$validator.detach("percent"),this.$validator.detach("salePrice"),this.$validator.detach("listPrice")),n.default.isEmpty(this.validOn)?this.$validator.attach("validOn","required",{prettyName:"valid on",context:function(){return e.validOn},getter:function(e){return e}}):this.$validator.detach("validOn"),n.default.isEmpty(this.validUntil)?this.$validator.attach("validUntil","required",{prettyName:"valid until",context:function(){return e.validUntil},getter:function(e){return e}}):this.$validator.detach("validUntil"),this.$validator.validateAll().then(function(t){var a=e.fileList.length,s={title:e.title,details:e.content,mainUrl:e.mainUrl,categories:e.selectedCategory,type:e.selectedType,validOn:e.validOn,validUntil:e.validUntil,store:e.selectedStore,tags:e.selectedTag,summary:e.summary,images:[]};n.default.isEmpty(e.brand)||(s.brand=e.brand),n.default.isEmpty(e.productId)||(s.productId=e.productId),"sale"===e.selectedType.value?(s.listPrice=parseFloat(e.listPrice)||0,s.salePrice=parseFloat(e.salePrice)||0):"percentOff"===e.selectedType.value&&(s.percentOff=e.percent),a>0?e.fileList.map(function(t){var l=i.db.ref("deals-photos/"+t.name);l.put(t).then(function(i){l.getDownloadURL().then(function(i){var l={storageUri:t.name,url:i};s.images.push(l),a--,a<=0&&e.createPost(e.path,s)}).catch(function(e){console.log(e),a--})}).catch(function(t){console.log(t),a--,a<=0&&e.createPost(e.path,s)})}):e.createPost(e.path,s)}).catch(function(e){console.log(e)})},createPost:function(e,t){var a=this;this.$http.post(e,t).then(function(e){(0,r.Message)({showClose:!0,message:"Successfully Added The Bargain.",type:"success"}),a.$emit("onAddedSuccess"),a.$router.push({name:"UserBargains"})},function(e){(0,r.Message)({showClose:!0,message:e.body.message,type:"error"})})},resetPassword:function(){if(this.$validator.validate("email",this.email)){var e=l.default.auth();e.sendPasswordResetEmail(this.email).then(function(){(0,r.Message)({showClose:!0,message:"Your password reset link has been sent to your email.",type:"success"})},function(e){(0,r.Message)({showClose:!0,message:e.message,type:"error"})})}else(0,r.Message)({showClose:!0,message:"There was an error when trying to reset your password.",type:"error"})}},mounted:function(){var e=this;this.$ga.trackPage(this.$route.path),this.$http.get(this.origin+"/stores").then(function(t){e.storeOptions=t.body,e.errors.clear()}).catch(function(t){e.options=[]}),this.$http.get(this.origin+"/brands").then(function(t){e.brandOptions=t.body}).catch(function(t){e.options=[]}),this.$http.get(this.origin+"/categories").then(function(t){e.categoryOptions=t.body}).catch(function(t){e.options=[]}),this.$http.get(this.origin+"/tags").then(function(t){e.tagOptions=t.body}).catch(function(t){e.options=[]})}}},619:function(e,t,a){t=e.exports=a(125)(),t.push([e.id,"@media (min-width:576px){div.my-bargain div.el-dialog__body .container{width:100%}}.el-select{display:block}.row-pad-top{padding-top:10px}.el-upload-list__item.is-ready{display:none}.bb-label-12{font-size:13px}div.add-bargain input.el-input__inner{color:#333!important;border-color:#bfcbe3}div.add-bargain input.el-input__inner::-webkit-input-placeholder{color:#6c7378!important}div.add-bargain input.el-input__inner::-moz-placeholder{color:#6c7378!important}div.add-bargain input.el-input__inner:-ms-input-placeholder{color:#6c7378!important}div.add-bargain input.el-input__inner:-moz-placeholder{color:#6c7378!important}","",{version:3,sources:["/./src/components/user/user-bargains/add-bargain/add-bargain.vue"],names:[],mappings:"AACA,yBACA,8CACI,UAAW,CACd,CACA,AACD,WACE,aAAe,CAChB,AACD,aACE,gBAAkB,CACnB,AACD,+BACE,YAAc,CACf,AACD,aACE,cAAe,CAChB,AACD,sCACE,qBAAuB,AACvB,oBAAsB,CACvB,AACD,iEACE,uBAA0B,CAC3B,AACD,wDACE,uBAA0B,CAC3B,AACD,4DACE,uBAA0B,CAC3B,AACD,uDACE,uBAA0B,CAC3B",file:"add-bargain.vue",sourcesContent:["\n@media (min-width: 576px) {\ndiv.my-bargain div.el-dialog__body .container {\n    width:100%;\n}\n}\n.el-select {\n  display: block;\n}\n.row-pad-top {\n  padding-top: 10px;\n}\n.el-upload-list__item.is-ready {\n  display: none;\n}\n.bb-label-12 {\n  font-size:13px;\n}\ndiv.add-bargain input.el-input__inner{\n  color: #333 !important;\n  border-color: #BFCBE3;\n}\ndiv.add-bargain input.el-input__inner::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n  color: #6c7378 !important;\n}\ndiv.add-bargain input.el-input__inner::-moz-placeholder { /* Firefox 19+ */\n  color: #6c7378 !important;\n}\ndiv.add-bargain input.el-input__inner:-ms-input-placeholder { /* IE 10+ */\n  color: #6c7378 !important;\n}\ndiv.add-bargain input.el-input__inner:-moz-placeholder { /* Firefox 18- */\n  color: #6c7378 !important;\n}\n\n"],sourceRoot:"webpack://"}])},664:function(e,t,a){var s=a(619);"string"==typeof s&&(s=[[e.id,s,""]]);a(126)(s,{});s.locals&&(e.exports=s.locals)},725:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{size:"small","show-close":!1,top:e.top},on:{close:e.onClose},model:{value:e.dialogVisible,callback:function(t){e.dialogVisible=t},expression:"dialogVisible"}},[a("div",{slot:"title"},[a("div",{staticClass:"el-dialog__headerbtn"},[a("router-link",{attrs:{to:{name:"UserBargains"}}},[a("i",{staticClass:"el-dialog__close el-icon el-icon-close"})])],1)]),e._v(" "),e._t("default",[a("div",{staticClass:"container add-bargain"},[a("h3",[e._v("Add Bargain")]),e._v(" "),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 reset-col"},[a("p",{staticClass:"reset-col bb-label-12"},[a("b",[e._v("Title:"),a("i",{staticStyle:{color:"#d32f2f"}},[e._v("* ")])]),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("title"),expression:"errors.has('title')"}],staticClass:"help is-danger"},[e._v(e._s(e.errors.first("title")))])]),e._v(" "),a("div",{staticClass:"input-group"},[a("el-input",{directives:[{name:"validate",rawName:"v-validate:title",value:"required",expression:"'required'",arg:"title"}],class:{"is-danger":e.errors.has("title")},attrs:{name:"title",type:"text",placeholder:"Bargain Title"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),e._v(" "),a("i",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("title"),expression:"errors.has('title')"}],staticClass:"fa fa-warning",staticStyle:{position:"absolute",right:"5px",top:"10px"}})],1)])]),e._v(" "),a("div",{staticClass:"row row-pad-top"},[a("div",{staticClass:"col-lg-8 col-md-8 reset-col"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6 col-md-6 reset-col row-pad-right"},[a("p",{staticClass:"reset-col bb-label-12"},[a("b",[e._v("Type:"),a("i",{staticStyle:{color:"#d32f2f"}},[e._v("* ")])]),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("selectedType"),expression:"errors.has('selectedType')"}],staticClass:"help is-danger"},[e._v(e._s(e.errors.first("selectedType")))])]),e._v(" "),a("el-select",{directives:[{name:"validate",rawName:"v-validate:selectedType",value:"required",expression:"'required'",arg:"selectedType"}],attrs:{"data-vv-as":"type",name:"selectedType",placeholder:"Select a Bargain's Type"},model:{value:e.selectedType,callback:function(t){e.selectedType=t},expression:"selectedType"}},e._l(e.typeOptions,function(e){return a("el-option",{attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("div",{staticClass:"col-lg-6 col-md-6 reset-col row-pad-left"},[a("p",{staticClass:"reset-col bb-label-12"},[a("b",[e._v("Percent off:"),a("i",{staticStyle:{color:"#d32f2f"}},[e._v("* ")])]),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("percent"),expression:"errors.has('percent')"}],staticClass:"help is-danger"},[e._v(e._s(e.errors.first("percent")))])]),e._v(" "),a("div",{staticClass:"input-group"},[a("el-input",{attrs:{disabled:"percentOff"!==e.selectedType,"data-vv-as":"percent",placeholder:"Percent Off",name:"percent",controls:!1,min:0,max:100},model:{value:e.percent,callback:function(t){e.percent=t},expression:"percent"}},[a("template",{slot:"prepend"},[e._v("%")])],2)],1)])]),e._v(" "),a("div",{staticClass:"row row-pad-top"},[a("div",{staticClass:"col-lg-6 col-md-6 reset-col row-pad-right"},[a("p",{staticClass:"reset-col bb-label-12"},[a("b",[e._v("List Price:"),a("i",{staticStyle:{color:"#d32f2f"}},[e._v("* ")])]),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("listPrice"),expression:"errors.has('listPrice')"}],staticClass:"help is-danger"},[e._v(e._s(e.errors.first("listPrice")))])]),e._v(" "),a("div",{staticClass:"input-group"},[a("el-input",{attrs:{"data-vv-as":"list price",disabled:"sale"!==e.selectedType,placeholder:"List Price",name:"listPrice"},model:{value:e.listPrice,callback:function(t){e.listPrice=t},expression:"listPrice"}},[a("template",{slot:"prepend"},[e._v("$")])],2)],1)]),e._v(" "),a("div",{staticClass:"col-lg-6 col-md-6 reset-col row-pad-left"},[a("p",{staticClass:"reset-col bb-label-12"},[a("b",[e._v("Sale Price:"),a("i",{staticStyle:{color:"#d32f2f"}},[e._v("* ")])]),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("salePrice"),expression:"errors.has('salePrice')"}],staticClass:"help is-danger"},[e._v(e._s(e.errors.first("salePrice")))])]),e._v(" "),a("div",{staticClass:"input-group"},[a("el-input",{attrs:{"data-vv-as":"sale price",disabled:"sale"!==e.selectedType,placeholder:"Sale Price",name:"salePrice"},model:{value:e.salePrice,callback:function(t){e.salePrice=t},expression:"salePrice"}},[a("template",{slot:"prepend"},[e._v("$")])],2)],1)])]),e._v(" "),a("div",{staticClass:"row row-pad-top"},[a("div",{staticClass:"col-lg-6 col-md-6 reset-col row-pad-right"},[a("p",{staticClass:"reset-col bb-label-12"},[a("b",[e._v("Store:"),a("i",{staticStyle:{color:"#d32f2f"}},[e._v("* ")])]),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("selectedStore"),expression:"errors.has('selectedStore')"}],staticClass:"help is-danger"},[e._v(e._s(e.errors.first("selectedStore")))])]),e._v(" "),a("el-select",{directives:[{name:"validate",rawName:"v-validate:selectedStore",value:"required",expression:"'required'",arg:"selectedStore"}],attrs:{"data-vv-as":"store",filterable:"",name:"selectedStore",placeholder:"Select a store"},on:{change:e.storeChange},model:{value:e.selectedStore,callback:function(t){e.selectedStore=t},expression:"selectedStore"}},e._l(e.storeOptions,function(e){return a("el-option",{attrs:{label:e.name,value:e._id}})}))],1),e._v(" "),a("div",{staticClass:"col-lg-6 col-md-6 reset-col row-pad-left"},[a("p",{staticClass:"reset-col bb-label-12"},[a("b",[e._v("Brand:")])]),e._v(" "),a("el-select",{attrs:{name:"selectedBrand",filterable:"",placeholder:"Select a brand"},model:{value:e.selectedBrand,callback:function(t){e.selectedBrand=t},expression:"selectedBrand"}},e._l(e.brandOptions,function(e){return a("el-option",{attrs:{label:e.name,value:e._id}})}))],1)]),e._v(" "),a("div",{staticClass:"row row-pad-top"},[a("div",{staticClass:"col-lg-6 col-md-6 reset-col row-pad-right"},[a("p",{staticClass:"reset-col bb-label-12"},[a("b",[e._v("Valid on:"),a("i",{staticStyle:{color:"#d32f2f"}},[e._v("* ")])]),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("validOn"),expression:"errors.has('validOn')"}],staticClass:"help is-danger"},[e._v(e._s(e.errors.first("validOn")))])]),e._v(" "),a("el-date-picker",{directives:[{name:"validate",rawName:"v-validate:validOn",value:"required",expression:"'required'",arg:"validOn"}],class:{"help is-danger":e.errors.has("validOn")},staticStyle:{width:"100%"},attrs:{type:"datetime",name:"validOn",placeholder:"Pick a valid on day"},model:{value:e.validOn,callback:function(t){e.validOn=t},expression:"validOn"}})],1),e._v(" "),a("div",{staticClass:"col-lg-6 col-md-6 reset-col row-pad-left"},[a("p",{staticClass:"reset-col bb-label-12"},[a("b",[e._v("Valid until:"),a("i",{staticStyle:{color:"#d32f2f"}},[e._v("* ")])]),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("validUntil"),expression:"errors.has('validUntil')"}],staticClass:"help is-danger"},[e._v(e._s(e.errors.first("validUntil")))])]),e._v(" "),a("el-date-picker",{directives:[{name:"validate",rawName:"v-validate:validUntil",value:"required",expression:"'required'",arg:"validUntil"}],class:{"help is-danger":e.errors.has("validUntil")},staticStyle:{width:"100%"},attrs:{type:"datetime",name:"validUntil",placeholder:"Pick a valid until day"},model:{value:e.validUntil,callback:function(t){e.validUntil=t},expression:"validUntil"}})],1)]),e._v(" "),a("div",{staticClass:"row row-pad-top"},[a("div",{staticClass:"col-lg-12 col-md-12 reset-col"},[a("p",{staticClass:"reset-col bb-label-12"},[a("b",[e._v("Categories:"),a("i",{staticStyle:{color:"#d32f2f"}},[e._v("* ")])]),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("selectedCategory"),expression:"errors.has('selectedCategory')"}],staticClass:"help is-danger"},[e._v(e._s(e.errors.first("selectedCategory")))])]),e._v(" "),a("el-select",{directives:[{name:"validate",rawName:"v-validate:selectedCategory",value:"required",expression:"'required'",arg:"selectedCategory"}],attrs:{"data-vv-as":"categories",name:"selectedCategory",multiple:"",filterable:"",placeholder:"Select categories"},model:{value:e.selectedCategory,callback:function(t){e.selectedCategory=t},expression:"selectedCategory"}},e._l(e.categoryOptions,function(e){return a("el-option",{attrs:{label:e.name,value:e._id}})}))],1)]),e._v(" "),a("div",{staticClass:"row row-pad-top"},[a("div",{staticClass:"col-lg-6 col-md-6 reset-col row-pad-right"},[a("p",{staticClass:"reset-col bb-label-12"},[a("b",[e._v("Main url:"),a("i",{staticStyle:{color:"#d32f2f"}},[e._v("* ")])]),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("mainUrl"),expression:"errors.has('mainUrl')"}],staticClass:"help is-danger"},[e._v(e._s(e.errors.first("mainUrl")))])]),e._v(" "),a("el-input",{directives:[{name:"validate",rawName:"v-validate:mainUrl",value:"required",expression:"'required'",arg:"mainUrl"}],attrs:{placeholder:"Enter Main Url https://www.",name:"mainUrl","data-vv-as":"main url"},model:{value:e.mainUrl,callback:function(t){e.mainUrl=t},expression:"mainUrl"}},[a("template",{slot:"append"},[a("a",{attrs:{target:"_blank",href:e.isHttp?e.mainUrl:"http://"+e.mainUrl}},[a("el-button",{slot:"append"},[e._v("View Deal")])],1)])],2)],1),e._v(" "),a("div",{staticClass:"col-lg-6 col-md-6 reset-col row-pad-left"},[a("p",{staticClass:"reset-col bb-label-12"},[a("b",[e._v("Product id:")])]),e._v(" "),a("el-input",{attrs:{placeholder:"Product ID",name:"productId"},model:{value:e.productId,callback:function(t){e.productId=t},expression:"productId"}})],1)])]),e._v(" "),a("div",{staticClass:"col-lg-4 col-md-4 reset-col row-pad-left text-center"},[a("el-upload",{staticClass:"upload-demo",attrs:{drag:"",action:"","file-list":e.fileList,"show-file-list":!0,"on-remove":e.onFileRemove,"before-upload":e.onFileSelected,accept:"image/jpeg",mutiple:""}},[a("i",{staticClass:"el-icon-upload"}),e._v(" "),a("div",{staticClass:"el-upload__text"},[e._v("Drop file here or "),a("em",[e._v("click to upload")])]),e._v(" "),a("div",{staticClass:"el-upload__tip",slot:"tip"},[e._v("jpg/png files with a size less than 500kb")])])],1),e._v(" "),a("div",{staticClass:"row clearfix",staticStyle:{"margin-top":"20px"}},[a("div",{staticClass:"col-lg-12 reset-col"},[a("span",{staticClass:"control-label"},[e._v("Bargain's summary: ")]),e._v(" "),a("div",{staticClass:"clearfix",staticStyle:{"margin-top":"10px"}},[a("quill-editor",{ref:"myTextEditor",staticClass:"clearfix",staticStyle:{"min-height":"75px",clear:"both","margin-bottom":"10px"},attrs:{config:e.editorOption},model:{value:e.summary,callback:function(t){e.summary=t},expression:"summary"}})],1)])]),e._v(" "),a("div",{staticClass:"row clearfix"},[a("div",{staticClass:"col-lg-12 reset-col"},[a("span",{staticClass:"control-label"},[e._v("Bargain's details: ")]),e._v(" "),a("div",{staticClass:"clearfix",staticStyle:{"margin-top":"10px"}},[a("quill-editor",{ref:"myTextEditor",staticClass:"clearfix",staticStyle:{"min-height":"200px",clear:"both"},attrs:{config:e.editorOption},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1)])]),e._v(" "),a("div",{staticClass:"a-row row-pad-top"},[a("div",{staticClass:"col-lg-12 reset-col"},[a("el-select",{attrs:{name:"selectedTag",multiple:"",filterable:"",placeholder:"Select Tags"},model:{value:e.selectedTag,callback:function(t){e.selectedTag=t},expression:"selectedTag"}},e._l(e.tagOptions,function(e){return a("el-option",{attrs:{label:e.name,value:e._id}})}))],1)])])]),e._v(" "),a("div",{staticClass:"footer pull-right",staticStyle:{"margin-top":"20px","margin-bottom":"10px"}},[a("el-button",{attrs:{type:"secondary"},on:{click:e.onClose}},[e._v("Cancel")]),e._v(" "),a("el-button",{attrs:{type:"primary "},on:{click:e.validateBeforeSubmit}},[e._v("Add Bargain")])],1)])])],2)},staticRenderFns:[]}}});
//# sourceMappingURL=14.3ad884813edf18607af4.js.map