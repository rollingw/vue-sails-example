webpackJsonp([13],{258:function(e,s,t){t(259);var a=t(7)(t(261),t(262),"data-v-1fc63cee",null);e.exports=a.exports},259:function(e,s,t){var a=t(260);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t(31)("4ac23378",a,!0)},260:function(e,s,t){s=e.exports=t(30)(),s.push([e.i,".card[data-v-1fc63cee]{max-height:350px;min-height:200px;overflow-y:scroll}","",{version:3,sources:["/home/s8wecy/Entwicklung/Github/vue-sails-example/frontend/src/components/help/Help.desktop.vue"],names:[],mappings:"AACA,uBACE,iBAAkB,AAClB,iBAAkB,AAClB,iBAAmB,CACpB",file:"Help.desktop.vue",sourcesContent:["\n.card[data-v-1fc63cee] {\n  max-height: 350px;\n  min-height: 200px;\n  overflow-y: scroll;\n}\n"],sourceRoot:""}])},261:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t(37),n=t.n(a),i=t(28);s.default={props:["io"],data:function(){return{assistant:"",message:"",messages:[{message:{assistant:{name:"System",message:"Hey, how can we help you?"}},time:(new Date).toString()}]}},mounted:function(){this.$root.$emit("bv::show::modal","help"),this.$emit("helpMounted")},created:function(){this.setRandomAssistantName()},computed:{isHelpVisible:{get:function(){return this.$store.state.isHelpVisible},set:function(e){this.store.commit("SET_IS_HELP_VISIBLE",e)}}},updated:function(){var e=this.$el.querySelector(".card");e.scrollTop=e.scrollHeight},methods:n()({postMessage:function(){var e=this;this.messages.push({message:{user:{message:this.message}},time:(new Date).toString()}),this.io.socket.post("/api/help",{},function(s){e.messages.push({message:{assistant:{name:e.assistant,message:s.answer}},time:(new Date).toString()})}),this.$set(this,"message","")},setRandomAssistantName:function(){var e=["Irvin Case","Juliette Cooper","Sheldon James"],s=e[Math.floor(Math.random()*e.length)];this.$set(this,"assistant",s)}},Object(i.c)({setIsHelpVisible:"SET_IS_HELP_VISIBLE"}))}},262:function(e,s){e.exports={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("b-modal",{attrs:{"no-close-on-backdrop":!0,"no-close-on-esc":!0,"hide-header-close":!0,"ok-only":!0,id:"help",title:"Help",size:"lg"}},[t("div",{staticClass:"card mb-2"},[t("div",{staticClass:"card-body"},e._l(e.messages,function(s){return t("div",[s.message.assistant?t("p",{staticClass:"mb-0"},[t("b",{staticClass:"mr-2"},[e._v(e._s(s.message.assistant.name))]),e._v("\n          "+e._s(s.message.assistant.message))]):e._e(),e._v(" "),s.message.assistant?t("p",{staticClass:"text-muted"},[t("small",[e._v(e._s(s.time))])]):e._e(),e._v(" "),s.message.user?t("p",{staticClass:"text-right mb-0"},[e._v(e._s(s.message.user.message)+" "),t("b",{staticClass:"ml-2"},[e._v("You")])]):e._e(),e._v(" "),s.message.user?t("p",{staticClass:"text-right text-muted"},[t("small",[e._v(e._s(s.time))])]):e._e()])}))]),e._v(" "),t("b-form-input",{attrs:{type:"text"},nativeOn:{keyup:function(s){if(!("button"in s)&&e._k(s.keyCode,"enter",13,s.key))return null;e.postMessage(s)}},model:{value:e.message,callback:function(s){e.message=s},expression:"message"}}),e._v(" "),t("template",{slot:"modal-footer"},[t("b-button",{attrs:{size:"sm",variant:"secondary"},on:{click:function(s){e.setIsHelpVisible(!1)}}},[e._v("\n      Close\n    ")])],1)],2)},staticRenderFns:[]}}});