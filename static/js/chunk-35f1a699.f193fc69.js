(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35f1a699"],{"1a59":function(t,e,o){},"7e51":function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"idPhotoEl",staticClass:"id-photo-wrapper"},[o("div",{staticClass:"div-body"},[o("el-row",{staticClass:"row-area"},[o("el-col",{staticClass:"col-photo",attrs:{span:16}},[o("el-row",{staticClass:"row-photo"},[o("el-col",{staticStyle:{"text-align":"center"},attrs:{span:12}},[o("img",{staticClass:"img_photo",attrs:{src:t.leftPhotoSrc}})]),o("el-col",{staticStyle:{"text-align":"center"},attrs:{span:12}},[o("img",{staticClass:"img_photo",attrs:{src:t.rightPhotoSrc}})])],1),o("div",{staticClass:"div-upload"},[o("el-upload",{ref:"upload",staticClass:"btn-upload",attrs:{accept:".jpg, .jpeg, .png",action:t.uploadUrl,enctype:"multipart/form-data",limit:1,multiple:!1,"before-upload":t.beforeUpload,"on-exceed":t.outOfLimit,"on-success":t.importSuccess,"file-list":t.fileList,"auto-upload":!0}},[o("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[t._v("上传照片")]),o("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpeg、jpg、png文件")])],1),o("div",{staticClass:"div-select-color"},[o("div",{staticClass:"div-select-title"},[t._v(" 选择底色 ")]),o("div",{staticClass:"div-color-list div-list"},[o("div",{class:[0===t.makePhotoReq.color?t.divSelected:t.divColor,t.divWhite],on:{click:function(e){return t.setColor(0)}}}),o("div",{class:[1===t.makePhotoReq.color?t.divSelected:t.divColor,t.divRed],on:{click:function(e){return t.setColor(1)}}}),o("div",{class:[2===t.makePhotoReq.color?t.divSelected:t.divColor,t.divBlue],on:{click:function(e){return t.setColor(2)}}})])]),o("div",{staticClass:"div-select-size"},[o("div",{staticClass:"div-select-title"},[t._v(" 选择尺寸 ")]),o("div",{staticClass:"div-size-list div-list"},[o("el-radio-group",{model:{value:t.makePhotoReq.size,callback:function(e){t.$set(t.makePhotoReq,"size",e)},expression:"makePhotoReq.size"}},t._l(t.sizeList,(function(e,s){return o("el-radio",{key:s,staticStyle:{display:"block"},attrs:{label:e.label}},[t._v(t._s(e.value))])})),1)],1)]),o("div",{staticClass:"div-download"},[o("el-button",{staticClass:"btn-id-photo",attrs:{disabled:t.isBlank(t.makePhotoReq.img_id),type:"primary"},on:{click:t.makeIdPhotoClick}},[t._v("生成证件照")]),o("el-button",{staticClass:"btn-download",attrs:{disabled:t.isBlank(t.makePhotoReq.img_id)||t.isBlank(t.rightPhotoSrc),type:"primary"},on:{click:t.downloadFile}},[t._v("下载证件照")])],1)],1)],1)],1)],1)])},i=[],a=(o("34ef"),o("28a5"),o("7f7f"),o("db72"),o("6b54"),o("bc3a")),l=o.n(a),r=o("5c96"),n=l.a.create({baseURL:Object({VUE_APP_PROXY:"https://k72scvlt96.execute-api.ap-east-1.amazonaws.com/prod",NODE_ENV:"production",VUE_APP_WEB_VERSION:"1.0.0",VUE_APP_ERROR_MESSAGE_DEFAULT:"数据异样！",VUE_APP_ERROR_MESSAGE_403:"登录已过期或没有权限！",VUE_APP_ERROR_MESSAGE_404:"服务器找不到!",VUE_APP_ERROR_MESSAGE_500:"服务器错误！",VUE_APP_ERROR_MESSAGE_OTHER:"网络走神了，请稍后再试!",BASE_URL:""}).VUE_APP_BASE_API,timeout:6e4});n.post(),n.interceptors.request.use((function(t){return t.headers.customHeader="axios",t}),(function(t){return Promise.reject(t)})),n.interceptors.response.use((function(t){var e=t.data;if(console.log("拦截",e),0!==e.code){if(401===e.code)return void window.open(e.redirect,"_self");if(e.msg){var o=e.msg.length>50?"数据异样！":e.msg;r["Message"].closeAll(),Object(r["Message"])({message:o,type:"error",showClose:!0,duration:5e3})}return Promise.reject(e,t)}return e}),(function(t){var e="网络走神了，请稍后再试!",o=t.response&&t.response.status;return console.log("Error: Network Error"===t.toString()),403===o&&(e="登录已过期或没有权限！"),404===o&&(e="服务器找不到!"),o>=500&&(e="服务器错误！"),r["Message"].closeAll(),Object(r["Message"])({message:e,type:"error",showClose:!0,duration:5e3}),Promise.reject(t)}));var c=n;var d={make_id_photo:"https://k72scvlt96.execute-api.ap-east-1.amazonaws.com/prod/download_cert_image"};function u(t){return c({url:d.make_id_photo,method:"POST",data:t})}var p={name:"IdPhoto",data:function(){return{leftPhotoSrc:"",rightPhotoSrc:"",sizeList:[{label:0,value:"1⼨       295*413px"},{label:1,value:"⼤1⼨   389*566px"},{label:2,value:"⼩2⼨   413*531px"},{label:3,value:"2⼨       413*579px"},{label:4,value:"⼤2⼨    413*626px"},{label:-1,value:"原图大小"}],makePhotoReq:{size:0,color:0,img_id:null},uploadUrl:"https://k72scvlt96.execute-api.ap-east-1.amazonaws.com/prod/upload_image",fileList:[],idPhotoEl:null,fileName:"",divSelected:"div-selected",divColor:"div-color",divWhite:"div-white",divRed:"div-red",divBlue:"div-blue"}},mounted:function(){this.idPhotoEl=this.$refs["idPhotoEl"],console.log("url",this.uploadUrl)},methods:{isBlank:function(t){return this.$options.filters.isBlank(t)},importSuccess:function(t,e,o){0===t.code?(this.makePhotoReq.img_id=t.img_id,this.showLeftPhoto(e.raw),this.fileName=e.name.substring(0,e.name.lastIndexOf(".")),console.log(this.fileName),this.$message.success("上传成功")):this.$message.error(t.msg),this.$refs["upload"].clearFiles()},beforeUpload:function(t){var e=t.name.substring(t.name.lastIndexOf(".")+1);return"jpg"===e||"jpeg"===e||"png"===e||(this.$message.error("上传文件只能是.jpg、.jpeg、.png格式!"),!1)},outOfLimit:function(t,e){this.$message.error("一次只能上传一张照片！照片上传中，请稍后...")},makeIdPhotoClick:function(){var t=this,e=this.$loading(this.idPhotoEl);u(this.makePhotoReq).then((function(e){console.log(e),t.rightPhotoSrc=e.img})).finally((function(){e.close()}))},setColor:function(t){this.makePhotoReq.color=t},downloadFile:function(){var t=document.createElement("a"),e=this.base64ToBlob(this.rightPhotoSrc),o=document.createEvent("HTMLEvents");o.initEvent("click",!0,!0),t.download=this.fileName+"(证件照)",t.href=URL.createObjectURL(e),t.click()},base64ToBlob:function(t){for(var e=t.split(";base64,"),o=e[0].split(":")[1],s=window.atob(e[1]),i=s.length,a=new Uint8Array(i),l=0;l<i;++l)a[l]=s.charCodeAt(l);return new Blob([a],{type:o})},showLeftPhoto:function(t){var e="",o=new FileReader;o.readAsDataURL(t);var s=this;o.onload=function(t){e=this.result.substring(this.result.indexOf(",")+1),s.leftPhotoSrc="data:image/png;base64,"+e}}}},h=p,v=(o("c7f8"),o("2877")),m=Object(v["a"])(h,s,i,!1,null,"400bb433",null);e["default"]=m.exports},c7f8:function(t,e,o){"use strict";o("1a59")}}]);