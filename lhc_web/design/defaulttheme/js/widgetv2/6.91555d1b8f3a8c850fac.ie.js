(window.webpackJsonpLHCReactAPP=window.webpackJsonpLHCReactAPP||[]).push([[6],{481:function(t,e,a){"use strict";a.r(e),a.d(e,"nodeJSChat",(function(){return r}));var n=a(5),i=a.n(n),s=a(6),c=a.n(s),h=a(3),o=a(11),r=new(function(){function t(){var e=this;i()(this,t),this.socket=null,h.a.eventEmitter.addListener("endedChat",(function(){null!==e.socket&&e.socket.destroy()}))}return c()(t,[{key:"bootstrap",value:function(t,e,n){var i,s=n(),c=s.chatwidget.getIn(["chatData","id"]),r=(s.chatwidget.getIn(["chatData","hash"]),s.chatwidget.getIn(["chat_ui","sync_interval"])),d={hostname:t.hostname,path:t.path};""!=t.port&&(d.port=parseInt(t.port)),1==t.secure&&(d.secure=!0),i=t.instance_id>0?"chat_"+t.instance_id+"_"+c:"chat_"+c;var g=a(490),p=this.socket=g.connect(d),u=null;function _(e){1==e.status?t.instance_id>0?p.publish("chat_"+t.instance_id+"_"+c,{op:"vt",msg:e.msg}):p.publish("chat_"+c,{op:"vt",msg:e.msg}):t.instance_id>0?p.publish("chat_"+t.instance_id+"_"+c,{op:"vts"}):p.publish("chat_"+c,{op:"vts"})}function m(e){t.instance_id>0?p.publish("chat_"+t.instance_id+"_"+c,{op:"vt",msg:"✉️ "+e.msg}):p.publish("chat_"+c,{op:"vt",msg:"✉️ "+e.msg})}function l(e){t.instance_id>0?p.publish("chat_"+t.instance_id+"_"+c,{op:"vt",msg:"📕️ error happened while sending visitor message, please inform your administrator!"}):p.publish("chat_"+c,{op:"vt",msg:"📕️ error happened while sending visitor message, please inform your administrator!"})}function v(){(u=t.instance_id>0?p.subscribe("chat_"+t.instance_id+"_"+c):p.subscribe("chat_"+c)).on("subscribeFail",(function(t){console.error("Failed to subscribe to the sample channel due to error: "+t)})),u.watch((function(t){if("ot"==t.op)1==t.data.status?e({type:"chat_status_changed",data:{text:t.data.ttx}}):e({type:"chat_status_changed",data:{text:""}});else if("cmsg"==t.op||"schange"==t.op){var a=n();a.chatwidget.hasIn(["chatData","id"])&&e(Object(o.d)({chat_id:a.chatwidget.getIn(["chatData","id"]),hash:a.chatwidget.getIn(["chatData","hash"]),lmgsid:a.chatwidget.getIn(["chatLiveData","lmsgid"]),theme:a.chatwidget.get("theme")}))}else if("schange"==t.op){var i=n();i.chatwidget.hasIn(["chatData","id"])&&e(Object(o.b)({chat_id:i.chatwidget.getIn(["chatData","id"]),hash:i.chatwidget.getIn(["chatData","hash"]),mode:i.chatwidget.get("mode"),theme:i.chatwidget.get("theme")}))}})),h.a.eventEmitter.addListener("visitorTyping",_),h.a.eventEmitter.addListener("messageSend",m),h.a.eventEmitter.addListener("messageSendError",l),e({type:"CHAT_UI_UPDATE",data:{sync_interval:1e4}}),e({type:"CHAT_ADD_OVERRIDE",data:"typing"})}p.on("error",(function(t){console.error(t)})),p.on("close",(function(){null!==u&&u.destroy(),h.a.eventEmitter.removeListener("visitorTyping",_),h.a.eventEmitter.removeListener("messageSend",m),h.a.eventEmitter.removeListener("messageSendError",l),e({type:"CHAT_UI_UPDATE",data:{sync_interval:r}}),e({type:"CHAT_REMOVE_OVERRIDE",data:"typing"})})),p.on("connect",(function(e){e.isAuthenticated&&c>0?v():p.emit("login",{hash:t.hash,chanelName:i},(function(t){t?console.log(t):v()}))}))}}]),t}())}}]);
//# sourceMappingURL=6.91555d1b8f3a8c850fac.ie.js.map