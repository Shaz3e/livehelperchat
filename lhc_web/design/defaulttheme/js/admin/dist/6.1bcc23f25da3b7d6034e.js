(window.webpackJsonpLHCReactAPPAdmin=window.webpackJsonpLHCReactAPPAdmin||[]).push([[6],{85:function(e,t,a){"use strict";a.r(t);var n=a(14),r=a.n(n),l=a(2),c=a.n(l),s=a(0),i=a.n(s),o=a(15),m=a.n(o),u=a(63),d=a(16),p=a.n(d),f=i.a.memo((function(e){var t=e.children,a=Object(s.useState)(!1),n=r()(a,2),l=n[0],c=n[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"pb-2"},i.a.createElement("button",{onClick:function(){return c(!l)},className:"btn btn-sm btn-outline-secondary"},"...")),l&&t)})),v=a(30),g=a.n(v),h=a(82),b=a(72),E=a.n(b),_=a(74),y=a.n(_),N=a(3),R=a.n(N),w=a(4),k=a.n(w),O=a(31),A=a.n(O),j=a(75),I=a.n(j),x=a(77),S=a.n(x),C=a(79),P=a.n(C),W=a(84);function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function T(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(Object(a),!0).forEach((function(t){c()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function F(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var M=function(e){I()(r,e);var t,a,n=(t=r,function(){var e,a=P()(t);if(F()){var n=P()(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return S()(this,e)});function r(e){var t;return R()(this,r),t=n.call(this,e),c()(A()(t),"state",{hightlight:!1,files:[],uploading:!1,uploadProgress:{},successfullUploaded:!1,progress:""}),t.fileInputRef=i.a.createRef(),t.dropAreaRef=i.a.createRef(),t.openFileDialog=t.openFileDialog.bind(A()(t)),t.onFilesAddedUI=t.onFilesAddedUI.bind(A()(t)),t.onDragOver=t.onDragOver.bind(A()(t)),t.onDragLeave=t.onDragLeave.bind(A()(t)),t.onDrop=t.onDrop.bind(A()(t)),t.onPaste=t.onPaste.bind(A()(t)),t.onFilesAdded=t.onFilesAdded.bind(A()(t)),t.uploadFiles=t.uploadFiles.bind(A()(t)),t.sendRequest=t.sendRequest.bind(A()(t)),t.chooseFromUploaded=t.chooseFromUploaded.bind(A()(t)),t.fileUploaded=t.fileUploaded.bind(A()(t)),t}return k()(r,[{key:"onFilesAdded",value:function(e){var t=this,a=this.props.t,n=new RegExp("(.|/)("+this.props.moptions.fop_op+")$","i"),r=[];e.forEach((function(e){n.test(e.type)||n.test(e.name)||r.push(e.name+": "+a("file.incorrect_type")),e.size>t.props.moptions.fop_size&&r.push(e.name+": "+a("file.to_big_file"))})),r.length>0?alert(r.join("\n")):this.setState({files:e})}},{key:"componentDidUpdate",value:function(e,t){this.state.files.length>0&&0==this.state.uploading&&this.uploadFiles()}},{key:"uploadFiles",value:(a=y()(E.a.mark((function e(){var t,a=this;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({uploadProgress:{},uploading:!0}),t=[],this.state.files.forEach((function(e){t.push(a.sendRequest(e))})),e.prev=3,e.next=6,Promise.all(t);case 6:this.setState({successfullUploaded:!0,uploading:!1,files:[]}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),this.setState({successfullUploaded:!0,uploading:!1,files:[]});case 12:case"end":return e.stop()}}),e,this,[[3,9]])}))),function(){return a.apply(this,arguments)})},{key:"fileUploaded",value:function(e){this.props.fileAttached(e)}},{key:"sendRequest",value:function(e){var t=this,a=this.props.t;return new Promise((function(n,r){var l=new XMLHttpRequest;l.upload.addEventListener("progress",(function(n){n.lengthComputable&&(T({},t.state.uploadProgress)[e.name]={state:"pending",percentage:n.loaded/n.total*100},t.setState({progress:a("file.uploading")+" "+Math.round(n.loaded/n.total*100)+"%"}))})),l.upload.addEventListener("load",(function(a){T({},t.state.uploadProgress)[e.name]={state:"done",percentage:100},t.setState({progress:""}),n(l.response)}));var c=t;l.onreadystatechange=function(){4===l.readyState&&c.fileUploaded(JSON.parse(l.response))},l.upload.addEventListener("error",(function(a){var n=T({},t.state.uploadProgress);n[e.name]={state:"error",percentage:0},t.setState({progress:n}),r(l.response)}));var s=new FormData;s.append("files",e,e.name),l.open("POST",WWW_DIR_JAVASCRIPT+"mailconv/uploadfile"),l.send(s)}))}},{key:"openFileDialog",value:function(){this.state.uploading||this.fileInputRef.current.click()}},{key:"onFilesAddedUI",value:function(e){var t=e.target.files,a=this.fileListToArray(t);this.onFilesAdded(a)}},{key:"onDragOver",value:function(e){e.preventDefault(),this.state.uploading||this.setState({hightlight:!0})}},{key:"componentDidMount",value:function(){this.dropAreaRef.current&&(this.dropAreaRef.current.ondragover=this.onDragOver,this.dropAreaRef.current.ondragleave=this.onDragLeave,this.dropAreaRef.current.ondrop=this.onDrop)}},{key:"componentWillUnmount",value:function(){this.dropAreaRef.current&&(this.dropAreaRef.current.ondragover=null,this.dropAreaRef.current.ondragleave=null,this.dropAreaRef.current.ondrop=null),window.attatchReplyCurrent=null}},{key:"onPaste",value:function(e){var t=e&&e.clipboardData&&e.clipboardData.items;if(t&&t.length){for(var a=[],n=0;n<t.length;n++){var r=t[n].getAsFile&&t[n].getAsFile();r&&a.push(r)}a.length>0&&this.onFilesAdded(a)}}},{key:"onDragLeave",value:function(e){this.setState({hightlight:!1})}},{key:"onDrop",value:function(e){if(e.preventDefault(),!this.state.uploading){var t=e.dataTransfer.files,a=this.fileListToArray(t);this.onFilesAdded(a),this.setState({hightlight:!1})}}},{key:"fileListToArray",value:function(e){for(var t=[],a=0;a<e.length;a++)t.push(e.item(a));return t}},{key:"chooseFromUploaded",value:function(){lhc.revealModal({title:"Attatch an already uploaded file",iframe:!0,height:500,url:WWW_DIR_JAVASCRIPT+"mailconv/attatchfile/(attachment)/1"});var e=this;window.attatchReplyCurrent=function(t){e.props.fileAttached(t)}}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{className:"btn btn-sm btn-outline-secondary",onClick:this.chooseFromUploaded},i.a.createElement("i",{className:"material-icons"},"list")," Choose file from uploaded files"),i.a.createElement("button",{ref:this.dropAreaRef,onClick:this.openFileDialog,className:"btn btn-sm "+(1==this.state.hightlight?"btn-outline-primary":"btn-outline-secondary")},i.a.createElement("i",{className:"material-icons"},"attach_file")," ",this.state.progress||"Drop your files here or choose a new file"),i.a.createElement("input",{onChange:this.onFilesAddedUI,ref:this.fileInputRef,id:"fileupload",type:"file",name:"files[]",multiple:!0,className:"d-none"}))}}]),r}(s.PureComponent),J=Object(W.a)()(M);function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function V(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(Object(a),!0).forEach((function(t){c()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var q=i.a.memo((function(e){var t=Object(s.useReducer)((function(e,t){var a=t.type,n=t.value;switch(a){case"add":return[].concat(g()(e),[n]);case"add_recipient":return(e=V({},e))[n].push({name:"",email:""}),e;case"remove_recipient":return(e=V({},e))[n.recipient]=e[n.recipient].filter((function(e,t){return t!==n.index})),e;case"set":return n;case"set_attribute":return(e=V({},e))[n.value.type][n.value.index][n.value.field]=n.value.value,e;case"cleanup":return[];case"remove":return e.filter((function(e,t){return t!==n}));default:return e}}),[]),a=r()(t,2),n=a[0],l=a[1],o=function(t,a){l({type:t,value:a}),e.setRecipients(n)};return Object(s.useEffect)((function(){l({type:"set",value:e.recipients}),e.setRecipients(e.recipients)}),[e.recipients]),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12 text-secondary font-weight-bold fs13 pb-1"},"Recipients ",i.a.createElement("i",{className:"material-icons settings text-muted",onClick:function(e){return o("add_recipient","reply")},style:{fontSize:"20px"}},"add")," Cc ",i.a.createElement("i",{className:"material-icons settings text-muted",onClick:function(e){return o("add_recipient","cc")},style:{fontSize:"20px"}},"add")," Bcc ",i.a.createElement("i",{onClick:function(e){return o("add_recipient","bcc")},className:"material-icons settings text-muted",style:{fontSize:"20px"}},"add")),i.a.createElement("div",{className:"col-6"},n.reply&&n.reply.map((function(e,t){var a;return i.a.createElement("div",{className:"form-row pb-1"},i.a.createElement("div",{className:"col-1 text-secondary fs13 pt-1"},"To:"),i.a.createElement("div",{className:"col-5"},i.a.createElement("div",{className:"input-group input-group-sm"},i.a.createElement("div",{className:"input-group-prepend"},i.a.createElement("span",{className:"input-group-text"},i.a.createElement("i",{className:"material-icons mr-0"},"mail_outline"))),i.a.createElement("input",(a={type:"text",className:"form-control form-control-sm",placeholder:"E-mail",onChange:function(e){return o("set_attribute",{value:{value:e.target.value,type:"reply",index:t,field:"email"}})},value:e.email},c()(a,"placeholder","E-mail"),c()(a,"aria-describedby","validationTooltipUsernamePrepend"),a)))),i.a.createElement("div",{className:"col-5"},i.a.createElement("input",{type:"text",placeholder:"Recipient name",onChange:function(e){return o("set_attribute",{value:{value:e.target.value,type:"reply",index:t,field:"name"}})},value:e.name,className:"form-control form-control-sm"})),t>0&&i.a.createElement("div",{className:"col"},i.a.createElement("i",{className:"material-icons settings text-muted",onClick:function(e){return o("remove_recipient",{recipient:"reply",index:t})}},"remove")))}))),i.a.createElement("div",{className:"col-6"},n.cc&&n.cc.map((function(e,t){var a;return i.a.createElement("div",{className:"form-row pb-1"},i.a.createElement("div",{className:"col-1 text-secondary fs13 pt-1"},"Cc:"),i.a.createElement("div",{className:"col-5"},i.a.createElement("div",{className:"input-group input-group-sm"},i.a.createElement("div",{className:"input-group-prepend"},i.a.createElement("span",{className:"input-group-text"},i.a.createElement("i",{className:"material-icons mr-0"},"mail_outline"))),i.a.createElement("input",(a={type:"text",className:"form-control form-control-sm",placeholder:"E-mail",onChange:function(e){return o("set_attribute",{value:{value:e.target.value,type:"cc",index:t,field:"email"}})},value:e.email},c()(a,"placeholder","E-mail"),c()(a,"aria-describedby","validationTooltipUsernamePrepend"),a)))),i.a.createElement("div",{className:"col-5"},i.a.createElement("input",{type:"text",placeholder:"Recipient name",onChange:function(e){return o("set_attribute",{value:{value:e.target.value,type:"cc",index:t,field:"name"}})},value:e.name,className:"form-control form-control-sm"})),i.a.createElement("div",{className:"col"},i.a.createElement("i",{className:"material-icons settings text-muted",onClick:function(e){return o("remove_recipient",{recipient:"cc",index:t})}},"remove")))}))),i.a.createElement("div",{className:"col-6"},n.bcc&&n.bcc.map((function(e,t){var a;return i.a.createElement("div",{className:"form-row pb-1"},i.a.createElement("div",{className:"col-1 text-secondary fs13 pt-1"},"Bcc:"),i.a.createElement("div",{className:"col-5"},i.a.createElement("div",{className:"input-group input-group-sm"},i.a.createElement("div",{className:"input-group-prepend"},i.a.createElement("span",{className:"input-group-text"},i.a.createElement("i",{className:"material-icons mr-0"},"mail_outline"))),i.a.createElement("input",(a={type:"text",className:"form-control form-control-sm",placeholder:"E-mail",onChange:function(e){return o("set_attribute",{value:{value:e.target.value,type:"bcc",index:t,field:"email"}})},value:e.email},c()(a,"placeholder","E-mail"),c()(a,"aria-describedby","validationTooltipUsernamePrepend"),a)))),i.a.createElement("div",{className:"col-5"},i.a.createElement("input",{type:"text",placeholder:"Recipient name",onChange:function(e){return o("set_attribute",{value:{value:e.target.value,type:"bcc",index:t,field:"name"}})},value:e.name,className:"form-control form-control-sm"})),i.a.createElement("div",{className:"col"},i.a.createElement("i",{className:"material-icons settings text-muted",onClick:function(e){return o("remove_recipient",{recipient:"bcc",index:t})}},"remove")))}))))})),L=i.a.memo((function(e){var t=Object(s.useState)(!1),a=r()(t,2);a[0],a[1];return i.a.createElement(i.a.Fragment,null,e.status.send&&i.a.createElement("div",{className:"alert alert-success p-1 pl-2",role:"alert"},"Success!"),!e.status.send&&i.a.createElement("div",{className:"alert alert-danger p-1 pl-2",role:"alert"},i.a.createElement("ul",{className:"mb-0"},e.status.errors.general&&i.a.createElement("li",null,e.status.errors.general),e.status.errors.reply&&i.a.createElement("li",null,e.status.errors.reply),e.status.errors.content&&i.a.createElement("li",null,e.status.errors.content))))})),z=i.a.memo((function(e){var t=Object(s.useState)(!1),a=r()(t,2),n=a[0],l=a[1],o=Object(s.useState)(!1),u=r()(o,2),d=u[0],p=u[1],f=Object(s.useState)(null),v=r()(f,2),b=(v[0],v[1],Object(s.useState)(null)),E=r()(b,2),_=E[0],y=E[1],N=Object(s.useState)(null),R=r()(N,2),w=R[0],k=R[1],O=Object(s.useState)(!1),A=r()(O,2),j=A[0],I=A[1],x=Object(s.useState)([]),S=r()(x,2),C=S[0],P=S[1],W=Object(s.useState)([]),D=r()(W,2),T=D[0],F=D[1],M=Object(s.useState)([]),U=r()(M,2),V=U[0],z=U[1],H=Object(s.useState)(!1),B=r()(H,2),$=B[0],Y=B[1],K=Object(s.useReducer)((function(e,t){var a=t.type,n=t.value;switch(a){case"add":return[].concat(g()(e),[n]);case"cleanup":return[];case"remove":return e.filter((function(e,t){return t!==n}));default:return e}}),[]),X=r()(K,2),G=X[0],Q=X[1],Z=Object(s.useRef)();Z.current=G;return Object(s.useEffect)((function(){return function(){Z.current.map((function(e,t){!0===e.new&&m.a.get(WWW_DIR_JAVASCRIPT+"file/delete/"+e.id+"/(csfr)/"+confLH.csrf_token+"?react=1")}))}}),[]),Object(s.useEffect)((function(){1!=n&&1!=d||0!=j?0==n&&0==d&&1==j&&(I(!1),Z.current.length>0&&(Z.current.map((function(e,t){!0===e.new&&m.a.get(WWW_DIR_JAVASCRIPT+"file/delete/"+e.id+"/(csfr)/"+confLH.csrf_token+"?react=1")})),Q({type:"cleanup"}))):m.a.post(WWW_DIR_JAVASCRIPT+"mailconv/getreplydata/"+e.message.id+"/"+(1==n?"reply":"forward")).then((function(e){I(!0),y(e.data.intro),k(e.data.signature),P(e.data.recipients)}))}),[n,d]),1==e.replyMode&&0==n&&(1==d&&(I(!1),p(!1)),l(!0)),1==e.forwardMode&&0==d&&(1==n&&(I(!1),l(!1)),p(!0)),i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"col-12 mt-2 pt-3 pb-2"},!n&&!d&&!e.fetchingMessages&&i.a.createElement("div",{className:"btn-group",role:"group","aria-label":"Mail actions"},i.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-secondary",onClick:function(){p(!1),l(!0)}},i.a.createElement("i",{className:"material-icons"},"reply"),"Reply"),i.a.createElement("button",{disabled:1==e.message.response_type,type:"button",className:"btn btn-sm btn-outline-secondary",onClick:function(){return e.noReplyRequired()}},i.a.createElement("i",{className:"material-icons"},"done"),"No reply required"),i.a.createElement("button",{type:"button",className:"btn btn-sm btn-outline-secondary",onClick:function(){l(!1),p(!0)}},i.a.createElement("i",{className:"material-icons"},"forward"),"Forward")),!e.fetchingMessages&&(n||d)&&j&&i.a.createElement("div",{className:"shadow p-2"},V.send_tried&&i.a.createElement(L,{status:V}),i.a.createElement(q,{setRecipients:function(e){return F(e)},mode:1==n?"reply":"forward",message:e.message,recipients:C}),i.a.createElement(h.a,{tinymceScriptSrc:"/design/defaulttheme/js/tinymce/js/tinymce/tinymce.min.js",initialValue:"<p></p>"+_+"<blockquote>"+e.message.body_front+"</blockquote>"+w,onInit:function(){tinyMCE.get("reply-to-mce-"+e.message.id).focus()},id:"reply-to-mce-"+e.message.id,init:{height:320,automatic_uploads:!0,file_picker_types:"image",images_upload_url:WWW_DIR_JAVASCRIPT+"mailconv/uploadimage",templates:WWW_DIR_JAVASCRIPT+"mailconv/apiresponsetemplates/"+e.message.id,paste_data_images:!0,relative_urls:!1,browser_spellcheck:!0,paste_as_text:!0,contextmenu:!1,menubar:!1,plugins:["advlist autolink lists link image charmap print preview anchor image lhfiles","searchreplace visualblocks code fullscreen","media table paste help","print preview importcss searchreplace autolink save autosave directionality visualblocks visualchars fullscreen media template codesample charmap pagebreak nonbreaking anchor toc advlist lists wordcount textpattern noneditable help charmap emoticons"],toolbar_mode:"wrap",toolbar:"undo redo | fontselect formatselect fontsizeselect | table | paste pastetext | subscript superscript | bold italic underline strikethrough | forecolor backcolor |                             alignleft aligncenter alignright alignjustify | lhfiles insertfile image pageembed template link anchor codesample |                             bullist numlist outdent indent | removeformat permanentpen | charmap emoticons | fullscreen print preview paste code | help"}}),n&&i.a.createElement("div",{className:"float-right"},i.a.createElement("a",{className:"action-image",onClick:function(){l(!1),e.cancelReply()}},i.a.createElement("i",{className:"material-icons"},"delete"))),d&&i.a.createElement("div",{className:"float-right"},i.a.createElement("a",{className:"action-image",onClick:function(){p(!1),e.cancelForward()}},i.a.createElement("i",{className:"material-icons"},"delete"))),i.a.createElement("div",{className:"btn-group mt-1",role:"group","aria-label":"Mail actions"},i.a.createElement("button",{type:"button",disabled:$,className:"btn btn-sm btn-outline-primary",onClick:function(){return t={recipients:T,content:tinyMCE.get("reply-to-mce-"+e.message.id).getContent(),attatchements:G,mode:1==n?"reply":"forward"},Y(!0),void m.a.post(WWW_DIR_JAVASCRIPT+"mailconv/apisendreply/"+e.message.id,t).then((function(t){z(t.data),Y(!1),1==t.data.send&&e.fetchMessages()})).catch((function(e){Y(!1),e.response?400===e.response.status?z(e.response.data):alert("Unhandled error."+e.response.data):e.request?console.log(e.request):console.log("Error",e.message),console.log(e.config)}));var t}},i.a.createElement("i",{className:"material-icons"},"send"),1==$?"Sending...":"Send"),i.a.createElement(J,{moptions:e.moptions,fileAttached:function(e){return Q({type:"add",value:e})},message:e.message})),G&&G.length>0&&i.a.createElement("div",{className:"pt-2"},G.map((function(e,t){return i.a.createElement("button",c()({title:"Click to remove",onClick:function(){return function(e,t){Q({type:"remove",value:t}),!0===e.new&&m.a.get(WWW_DIR_JAVASCRIPT+"file/delete/"+e.id+"/(csfr)/"+confLH.csrf_token+"?react=1")}(e,t)},className:"btn btn-sm btn-outline-info mr-1 mb-1"},"title",e.id),e.name)}))))))})),H=i.a.memo((function(e){var t=e.message,a=e.index,n=e.totalMessages,l=e.noReplyRequired,c=e.mode,o=e.addLabel,m=e.moptions,u=e.fetchMessages,v=e.fetchingMessages,g=Object(s.useState)(!1),h=r()(g,2),b=h[0],E=h[1],_=Object(s.useState)(a+1==n),y=r()(_,2),N=y[0],R=y[1],w=Object(s.useState)(!1),k=r()(w,2),O=k[0],A=k[1],j=Object(s.useState)(!1),I=r()(j,2),x=I[0],S=I[1];Object(s.useEffect)((function(){}),[]);return 1!=v||1!=O&&1!=x||(A(!1),S(!1)),i.a.createElement("div",{className:"row pb-2 mb-2 border-secondary"+("preview"!==c?" border-top pt-2":" border-bottom")},i.a.createElement("div",{className:"col-7 action-image",onClick:function(){return R(!N)}},i.a.createElement("span",{title:"Expand message "+t.id},i.a.createElement("i",{className:"material-icons"},N?"expand_less":"expand_more")),i.a.createElement("b",null,t.from_name),i.a.createElement("small",null," <",t.from_address,"> "),i.a.createElement("small",{className:t.status&&1!=t.status?t.cls_time?"chat-closed":"chat-active":"chat-pending"},i.a.createElement("i",{className:"material-icons"},"mail_outline"),t.status&&1!=t.status?"Responded":"Pending response")),i.a.createElement("div",{className:"col-5 text-right text-muted"},i.a.createElement("small",{className:"pr-1"},t.subjects&&t.subjects.map((function(e,t){return i.a.createElement("span",{className:"badge badge-info mr-1"},e.name)})),"preview"!==c&&i.a.createElement(i.a.Fragment,null,i.a.createElement("i",{title:"Add/Remove label",onClick:function(){return o(t)},className:"material-icons action-image text-muted"},"label")," |")),i.a.createElement("small",{className:"pr-2"},t.udate_front," | ",t.udate_ago," ago."),"preview"!==c&&i.a.createElement("i",{onClick:function(e){e.stopPropagation(),S(!1),A(!0)},className:"material-icons settings text-muted"},"reply"),i.a.createElement("i",{onClick:function(e){e.stopPropagation(),E(!b)},className:"material-icons settings text-muted"},b?"expand_less":"expand_more"),"preview"!==c&&i.a.createElement("div",{className:"dropdown float-right"},i.a.createElement("i",{className:"material-icons settings text-muted",id:"message-id-"+t.id,"data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"more_vert"),i.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"message-id-"+t.id},i.a.createElement("a",{className:"dropdown-item",href:"#",onClick:function(e){e.stopPropagation(),S(!1),A(!0)}},i.a.createElement("i",{className:"material-icons text-muted"},"reply"),"Reply"),i.a.createElement("a",{className:"dropdown-item",href:"#",onClick:function(e){e.stopPropagation(),A(!1),S(!0)}},i.a.createElement("i",{className:"material-icons text-muted"},"forward"),"Forward"),i.a.createElement("a",{className:"dropdown-item",target:"_blank",href:WWW_DIR_JAVASCRIPT+"mailconv/mailprint/"+t.id},i.a.createElement("i",{className:"material-icons text-muted"},"print"),"Print"),i.a.createElement("a",{className:"dropdown-item",href:WWW_DIR_JAVASCRIPT+"mailconv/apimaildownload/"+t.id},i.a.createElement("i",{className:"material-icons text-muted"},"cloud_download"),"Download"),i.a.createElement("a",{className:"dropdown-item",href:"#",onClick:function(){return l(t)}},i.a.createElement("i",{className:"material-icons text-muted"},"done"),"No reply required")))),b&&i.a.createElement("div",{className:"col-12"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"Message information"),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-6"},i.a.createElement("ul",{className:"fs13 mb-0 list-unstyled"},i.a.createElement("li",null,i.a.createElement("span",{className:"text-muted"},"from:")," ",i.a.createElement("b",null,t.from_name)," <",t.from_address,">"),i.a.createElement("li",null,i.a.createElement("span",{className:"text-muted"},"to:")," ",t.to_data_front),t.cc_data_front&&i.a.createElement("li",null,i.a.createElement("span",{className:"text-muted"},"cc:")," ",t.cc_data_front),t.bcc_data_front&&i.a.createElement("li",null,i.a.createElement("span",{className:"text-muted"},"bcc:")," ",t.bcc_data_front),i.a.createElement("li",null,i.a.createElement("span",{className:"text-muted"},"reply-to:")," ",t.reply_to_data_front),i.a.createElement("li",null,i.a.createElement("span",{className:"text-muted"},"mailed-by:")," ",t.from_host))),i.a.createElement("div",{className:"col-6"},i.a.createElement("ul",{className:"fs13 mb-0 list-unstyled"},t.accept_time_front&&i.a.createElement("li",null,"Accepted at: ",t.accept_time_front),t.plain_user_name&&i.a.createElement("li",null,"Accepted by: ",i.a.createElement("b",null,t.plain_user_name)),t.wait_time&&i.a.createElement("li",null,"Accept wait time: ",t.wait_time_pending),t.lr_time&&t.response_time&&i.a.createElement("li",null,"Response wait time: ",t.wait_time_response),t.lr_time&&i.a.createElement("li",null,"Response type: ",1==t.response_type?"No response required":2==t.response_type?"This is our response message":"Responeded by e-mail"),t.interaction_time&&i.a.createElement("li",null,"Interaction time: ",t.interaction_time_duration),t.cls_time&&i.a.createElement("li",null,"Close time: ",t.cls_time_front))))))),N&&i.a.createElement("div",{className:"col-12 mail-message-body pt-2 pb-2"},p()(t.body_front,{replace:function(e){if(e.attribs){Object.assign({},e.attribs);if(e.attribs.class&&(e.attribs.className=e.attribs.class,delete e.attribs.class),e.name&&"blockquote"===e.name)return e.attribs.style&&(e.attribs.style=(t=e.attribs.style,a={},t.split(";").forEach((function(e){var t=e.split(":"),n=r()(t,2),l=n[0],c=n[1];if(l){var s=function(e){var t=e.split("-");return 1===t.length?t[0]:t[0]+t.slice(1).map((function(e){return e[0].toUpperCase()+e.slice(1)})).join("")}(l.trim());a[s]=c.trim()}})),a)),i.a.createElement("blockquote",e.attribs,i.a.createElement(f,null,Object(d.domToReact)(e.children)))}var t,a}}),t.attachments&&t.attachments.length>0&&i.a.createElement("div",{className:"pt-2"},t.attachments.map((function(e){return i.a.createElement("a",{className:"btn btn-sm btn-outline-info mr-1",href:e.download_url,title:e.description},e.name)})))),"preview"!==c&&!v&&(a+1==n||O||x)&&i.a.createElement(z,{fetchingMessages:v,fetchMessages:function(e){return u()},moptions:m,forwardMode:x,cancelForward:function(e){return S(!1)},cancelReply:function(e){return A(!1)},replyMode:O,lastMessage:a+1==n,message:t,noReplyRequired:function(){return l(t)}}))}));function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(Object(a),!0).forEach((function(t){c()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function K(e,t){switch(t.type){case"increment":return{count:e.count+1};case"decrement":return{count:e.count-1};case"update":return Y({},e,{},t.value);case"update_message":var a=e.messages.findIndex((function(e){return e.id==t.message.id}));return e.messages[a]=t.message,t.conv&&(e.conv=t.conv),t.fetching_messages&&(e.fetching_messages=t.fetching_messages),e=Y({},e);case"update_history":return e=Y({},e,{},t.value),""!=t.history.msg&&e.messages.unshift(t.history),e;case"init":return{count:e.count-1};default:throw new Error("Unknown action!")}}t.default=function(e){Object(s.useRef)(null),Object(s.useRef)(null);var t=Object(s.useRef)(null),a=Object(s.useReducer)(K,{messages:[],operators:[],conv:null,loaded:!1,saving_remarks:!1,old_message_id:0,last_message:"",remarks:"",last_message_id:0,lmsop:0,lgsync:0,fetching_messages:!1}),n=r()(a,2),l=n[0],c=n[1],o=function(){m.a.post(WWW_DIR_JAVASCRIPT+"mailconv/loadmainconv/"+e.chatId+"/(mode)/"+(""!=e.mode?e.mode:"normal")).then((function(t){c({type:"update",value:{conv:t.data.conv,messages:t.data.messages,moptions:t.data.moptions,loaded:!0,fetching_messages:!1}}),!1===e.disableRemember&&"preview"!==e.mode&&function(e){if(localStorage)try{var t=[],a=localStorage.getItem("machat_id");null!==a&&""!==a&&(t=a.split(",")),-1===t.indexOf(e)&&(t.push(e),localStorage.setItem("machat_id",t.join(",")))}catch(e){}}(e.chatId)})).catch((function(e){}))},d=function(e){lhc.revealModal({url:WWW_DIR_JAVASCRIPT+e.url})};Object(s.useEffect)((function(){var t=setTimeout((function(){m.a.post(WWW_DIR_JAVASCRIPT+"mailconv/saveremarks/"+e.chatId,{data:l.remarks}).then((function(e){c({type:"update",value:{saving_remarks:!1}})}))}),500);return function(){return clearTimeout(t)}}),[l.remarks]);Object(s.useEffect)((function(){return o(),function(){!function(e){if(localStorage)try{var t=[],a=localStorage.getItem("machat_id");null!==a&&""!==a&&(t=a.split(",")),-1!==t.indexOf(e)&&t.splice(t.indexOf(e),1),localStorage.setItem("machat_id",t.join(","))}catch(e){}}(e.chatId)}}),[]),Object(s.useEffect)((function(){if(1==l.loaded)t.current}),[l.loaded]);var p=Object(u.a)("mail_chat"),f=p.t;p.i18n;return 0==l.loaded?i.a.createElement("span",null,"..."):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"chat-main-left-column "+("preview"==e.mode?"col-12":"col-7")},"preview"!==e.mode&&i.a.createElement("h1",{className:"pb-2"},i.a.createElement("i",{className:"material-icons"},1==l.conv.start_type?"call_made":"call_received"),l.conv.subject),i.a.createElement("div",null,l.messages.map((function(t,a){return i.a.createElement(H,{moptions:l.moptions,fetchMessages:function(t){return c({type:"update",value:{fetching_messages:!0}}),void m.a.get(WWW_DIR_JAVASCRIPT+"mailconv/apifetchmails/"+e.chatId).then((function(e){o()}))},fetchingMessages:l.fetching_messages,mode:e.mode,key:"msg_mail_"+e.chatId+"_"+a+"_"+t.id,totalMessages:l.messages.length,index:a,message:t,noReplyRequired:function(e){return function(e){m.a.post(WWW_DIR_JAVASCRIPT+"mailconv/apinoreplyrequired/"+e.id).then((function(e){c({type:"update_message",message:e.data.message,conv:e.data.conv})})).catch((function(e){}))}(t)},addLabel:function(e){return function(e){lhc.revealModal({url:WWW_DIR_JAVASCRIPT+"mailconv/apilabelmessage/"+e.id,hidecallback:function(){m.a.get(WWW_DIR_JAVASCRIPT+"mailconv/apigetlabels/"+e.id).then((function(e){c({type:"update_message",message:e.data.message})})).catch((function(e){}))}})}(t)}})})),l.fetching_messages&&i.a.createElement("div",{className:"alert alert-success p-1 pl-2",role:"alert"},"Send. Your send message will appear here... You can close this conversation in any case."))),i.a.createElement("div",{className:"chat-main-right-column "+("preview"==e.mode?"d-none":"col-5")},i.a.createElement("div",{role:"tabpanel"},i.a.createElement("ul",{className:"nav nav-pills",role:"tablist",ref:t},i.a.createElement("li",{role:"presentation",className:"nav-item"},i.a.createElement("a",{className:"nav-link active",href:"#mail-chat-info-"+e.chatId,"aria-controls":"#mail-chat-info-"+e.chatId,title:"Information",role:"tab","data-toggle":"tab"},i.a.createElement("i",{className:"material-icons mr-0"},"info_outline"))),i.a.createElement("li",{role:"presentation",className:"nav-item"},i.a.createElement("a",{className:"nav-link",href:"#mail-chat-remarks-"+e.chatId,"aria-controls":"#mail-chat-remarks-"+e.chatId,role:"tab","data-toggle":"tab",title:"Remarks"},i.a.createElement("i",{className:"material-icons mr-0"},"mode_edit")))),i.a.createElement("div",{className:"tab-content"},i.a.createElement("div",{role:"tabpanel",className:"tab-pane",id:"mail-chat-remarks-"+e.chatId},i.a.createElement("div",{className:"material-icons pb-1 text-success"+(l.saving_remarks?" text-warning":"")},"mode_edit"),i.a.createElement("div",null,l.conv&&i.a.createElement("textarea",{placeholder:"Enter your remarks here.",onKeyUp:function(e){return t=e.target.value,void c({type:"update",value:{saving_remarks:!0,remarks:t}});var t},class:"form-control mh150",defaultValue:l.conv.remarks}))),i.a.createElement("div",{role:"tabpanel",className:"tab-pane active",id:"mail-chat-info-"+e.chatId},i.a.createElement("div",{className:"pb-2"},i.a.createElement("a",{className:"btn btn-outline-secondary btn-sm",onClick:function(){return e=!1,l.messages.forEach((function(t){2!=t.status&&(e=!0)})),void((0==e||confirm("There is still unresponded messages, are you sure you want to close this conversation?"))&&m.a.post(WWW_DIR_JAVASCRIPT+"mailconv/apicloseconversation/"+l.conv.id).then((function(e){c({type:"update",value:{conv:e.data.conv,messages:e.data.messages}}),document.getElementById("chat-tab-link-mc"+l.conv.id)&&lhinst.removeDialogTabMail("mc"+l.conv.id,$("#tabs"),!0)})).catch((function(e){})));var e}},i.a.createElement("i",{className:"material-icons"},"close"),f("mail.close"))),l.conv&&i.a.createElement("table",{className:"table table-sm"},i.a.createElement("tr",null,i.a.createElement("td",{colSpan:"2"},i.a.createElement("i",{className:"material-icons action-image",onClick:function(){return d({url:"mailconv/mailhistory/"+e.chatId})}},"history"),i.a.createElement("a",{className:"material-icons action-image",onClick:function(){return d({url:"mailconv/transfermail/"+e.chatId})},title:"Transfer chat"},"supervisor_account"),i.a.createElement("a",{className:"text-dark material-icons",target:"_blank",href:WWW_DIR_JAVASCRIPT+"mailconv/mailprintcovnersation/"+e.chatId},"print"),l.conv.can_delete&&i.a.createElement("a",{className:"material-icons mr-0",onClick:function(e){confirm("Are you sure?")&&m.a.post(WWW_DIR_JAVASCRIPT+"mailconv/apideleteconversation/"+l.conv.id).then((function(e){document.getElementById("chat-tab-link-mc"+l.conv.id)?lhinst.removeDialogTabMail("mc"+l.conv.id,$("#tabs"),!0):document.location=WWW_DIR_JAVASCRIPT+"mailconv/conversations"})).catch((function(e){}))},title:"Delete chat"},"delete"))),i.a.createElement("tr",null,i.a.createElement("td",null,"Sender"),i.a.createElement("td",null,l.conv.from_name," <",l.conv.from_address,">")),i.a.createElement("tr",null,i.a.createElement("td",null,"Status"),i.a.createElement("td",null,!l.conv.status&&i.a.createElement("span",null,i.a.createElement("i",{className:"material-icons chat-pending"},"mail_outline"),"Pending"),1==l.conv.status&&i.a.createElement("span",null,i.a.createElement("i",{className:"material-icons chat-active"},"mail_outline"),"Active"),2==l.conv.status&&i.a.createElement("span",null,i.a.createElement("i",{className:"material-icons chat-closed"},"mail_outline"),"Closed"))),i.a.createElement("tr",null,i.a.createElement("td",null,"Department"),i.a.createElement("td",null,l.conv.department_name)),i.a.createElement("tr",null,i.a.createElement("td",null,"Received"),i.a.createElement("td",null,l.conv.udate_front)),i.a.createElement("tr",null,i.a.createElement("td",null,"ID"),i.a.createElement("td",null,l.conv.id)),l.conv.accept_time&&i.a.createElement("tr",null,i.a.createElement("td",null,"Accepted at"),i.a.createElement("td",null,l.conv.accept_time_front," | Wait time ",l.conv.wait_time_pending)),l.conv.response_time&&i.a.createElement("tr",null,i.a.createElement("td",null,"Responded at"),i.a.createElement("td",null,l.conv.lr_time_front," | Wait time ",l.conv.wait_time_response)),l.conv.cls_time&&i.a.createElement("tr",null,i.a.createElement("td",null,"Closed at"),i.a.createElement("td",null,l.conv.cls_time_front)),l.conv.interaction_time&&i.a.createElement("tr",null,i.a.createElement("td",null,"Interaction time"),i.a.createElement("td",null,l.conv.interaction_time_duration)),l.conv.priority&&i.a.createElement("tr",null,i.a.createElement("td",null,"Priority"),i.a.createElement("td",null,l.conv.priority)),i.a.createElement("tr",null,i.a.createElement("td",null,"Chat owner"),i.a.createElement("td",null,l.conv.plain_user_name)))))))))}}}]);