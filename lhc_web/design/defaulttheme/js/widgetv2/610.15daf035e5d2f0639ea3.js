"use strict";(self.webpackChunkLHCReactAPP=self.webpackChunkLHCReactAPP||[]).push([[610],{610:function(e,t,n){n.r(t);var a,s=n(7154),r=n.n(s),c=n(4575),i=n.n(c),o=n(3913),u=n.n(o),l=n(1506),d=n.n(l),f=n(2205),h=n.n(f),v=n(8585),m=n.n(v),p=n(9754),g=n.n(p),_=n(9713),w=n.n(_),b=n(7294),y=n(6458),k=(n(2137),n(488)),E=n.n(k),C=n(6512);var P=(0,y.$j)((function(e){return{chatwidget:e.chatwidget}}))(a=function(e){h()(s,e);var t,n,a=(t=s,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,a=g()(t);if(n){var s=g()(this).constructor;e=Reflect.construct(a,arguments,s)}else e=a.apply(this,arguments);return m()(this,e)});function s(e){var t;return i()(this,s),t=a.call(this,e),w()(d()(t),"state",{preg_match_rules:[]}),t.listenerAdded=!1,t.js_execute=null,t}return u()(s,[{key:"handleParentMessage",value:function(e,t){if(e.data.event==t.target){var n=[];n[e.data.event]=e.data.value,this.setState(n)}}},{key:"abstractClick",value:function(e,t){var n=this;JSON.parse(e["data-action"]).forEach((function(e){if("add_css_class"==e.action){var t=document.querySelector(e.target);t&&t.classList.add(e.value)}else if("remove_css_class"==e.action){var a=document.querySelector(e.target);a&&a.classList.remove(e.value)}else if("chat_attr_global"==e.action)window.lhcChat[e.target]=e.value;else if("set_state"==e.action){var s={};s[e.target]=e.value,n.props.setStateParent(s)}else"post_message"==e.action?document.getElementById(e.target).contentWindow.postMessage(e.value,"*"):"listen_post_message"==e.action&&(window.addEventListener?window.addEventListener("message",(function(t){n.handleParentMessage(t,e)}),!1):window.attachEvent?window.attachEvent("onmessage",(function(t){n.handleParentMessage(t,e)})):document.attachEvent&&document.attachEvent("onmessage",(function(t){n.handleParentMessage(t,e)})))}))}},{key:"componentDidMount",value:function(){null!==this.js_execute&&(0,C.bQ)(this.js_execute,this)}},{key:"render",value:function(){var e=this,t=this.props.chatwidget.getIn(["chat_ui",this.props.attr]);return this.props.has_new||(t=t.replace(/<newmessages>(.*)<\/newmessages>/gi,"")),this.state.preg_match_rules.forEach((function(e){t=t.replace(e.search,e.replace,"")})),b.createElement(b.Fragment,null,E()(t,{replace:function(t){var n=Object.assign({},t.attribs);if(t.attribs){if(t.name&&"button"===t.name)return b.createElement("button",r()({type:"button"},t.attribs,{onClick:function(t){return e.abstractClick(n,t)}}),(0,k.domToReact)(t.children));if(t.name&&"lhcaction"===t.name)return 0==e.listenerAdded&&(e.abstractClick(n,null),e.listenerAdded=!0),"";if(t.name&&"script"===t.name&&t.attribs["data-bot-action"])return e.js_execute=t,b.createElement(b.Fragment,null)}}}))}}]),s}(b.Component))||a;t.default=P}}]);
//# sourceMappingURL=610.15daf035e5d2f0639ea3.js.map