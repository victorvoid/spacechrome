// Compiled by ClojureScript 1.9.562 {}
goog.provide('chromex_sample.popup.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('chromex.logging');
goog.require('chromex.protocols');
goog.require('chromex.ext.runtime');
chromex_sample.popup.core.process_message_BANG_ = (function chromex_sample$popup$core$process_message_BANG_(message){
console.log("POPUP: got message:",message);

return null;
});
chromex_sample.popup.core.run_message_loop_BANG_ = (function chromex_sample$popup$core$run_message_loop_BANG_(message_channel){
console.log("POPUP: starting message loop...");


var c__32057__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto__){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto__){
return (function (state_38803){
var state_val_38804 = (state_38803[(1)]);
if((state_val_38804 === (1))){
var state_38803__$1 = state_38803;
var statearr_38805_38821 = state_38803__$1;
(statearr_38805_38821[(2)] = null);

(statearr_38805_38821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38804 === (2))){
var state_38803__$1 = state_38803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38803__$1,(4),message_channel);
} else {
if((state_val_38804 === (3))){
var inst_38801 = (state_38803[(2)]);
var state_38803__$1 = state_38803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38803__$1,inst_38801);
} else {
if((state_val_38804 === (4))){
var inst_38792 = (state_38803[(7)]);
var inst_38792__$1 = (state_38803[(2)]);
var state_38803__$1 = (function (){var statearr_38806 = state_38803;
(statearr_38806[(7)] = inst_38792__$1);

return statearr_38806;
})();
if(cljs.core.truth_(inst_38792__$1)){
var statearr_38807_38822 = state_38803__$1;
(statearr_38807_38822[(1)] = (5));

} else {
var statearr_38808_38823 = state_38803__$1;
(statearr_38808_38823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38804 === (5))){
var inst_38792 = (state_38803[(7)]);
var inst_38794 = chromex_sample.popup.core.process_message_BANG_.call(null,inst_38792);
var state_38803__$1 = (function (){var statearr_38809 = state_38803;
(statearr_38809[(8)] = inst_38794);

return statearr_38809;
})();
var statearr_38810_38824 = state_38803__$1;
(statearr_38810_38824[(2)] = null);

(statearr_38810_38824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38804 === (6))){
var state_38803__$1 = state_38803;
var statearr_38811_38825 = state_38803__$1;
(statearr_38811_38825[(2)] = null);

(statearr_38811_38825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38804 === (7))){
var inst_38798 = (state_38803[(2)]);
var inst_38799 = console.log("POPUP: leaving message loop");
var state_38803__$1 = (function (){var statearr_38812 = state_38803;
(statearr_38812[(9)] = inst_38799);

(statearr_38812[(10)] = inst_38798);

return statearr_38812;
})();
var statearr_38813_38826 = state_38803__$1;
(statearr_38813_38826[(2)] = null);

(statearr_38813_38826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__32057__auto__))
;
return ((function (switch__31943__auto__,c__32057__auto__){
return (function() {
var chromex_sample$popup$core$run_message_loop_BANG__$_state_machine__31944__auto__ = null;
var chromex_sample$popup$core$run_message_loop_BANG__$_state_machine__31944__auto____0 = (function (){
var statearr_38817 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38817[(0)] = chromex_sample$popup$core$run_message_loop_BANG__$_state_machine__31944__auto__);

(statearr_38817[(1)] = (1));

return statearr_38817;
});
var chromex_sample$popup$core$run_message_loop_BANG__$_state_machine__31944__auto____1 = (function (state_38803){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_38803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e38818){if((e38818 instanceof Object)){
var ex__31947__auto__ = e38818;
var statearr_38819_38827 = state_38803;
(statearr_38819_38827[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38828 = state_38803;
state_38803 = G__38828;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
chromex_sample$popup$core$run_message_loop_BANG__$_state_machine__31944__auto__ = function(state_38803){
switch(arguments.length){
case 0:
return chromex_sample$popup$core$run_message_loop_BANG__$_state_machine__31944__auto____0.call(this);
case 1:
return chromex_sample$popup$core$run_message_loop_BANG__$_state_machine__31944__auto____1.call(this,state_38803);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
chromex_sample$popup$core$run_message_loop_BANG__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = chromex_sample$popup$core$run_message_loop_BANG__$_state_machine__31944__auto____0;
chromex_sample$popup$core$run_message_loop_BANG__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = chromex_sample$popup$core$run_message_loop_BANG__$_state_machine__31944__auto____1;
return chromex_sample$popup$core$run_message_loop_BANG__$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto__))
})();
var state__32059__auto__ = (function (){var statearr_38820 = f__32058__auto__.call(null);
(statearr_38820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto__);

return statearr_38820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto__))
);

return c__32057__auto__;
});
chromex_sample.popup.core.connect_to_background_page_BANG_ = (function chromex_sample$popup$core$connect_to_background_page_BANG_(){
var background_port = chromex.ext.runtime.connect_STAR_.call(null,chromex.config.get_active_config.call(null),new cljs.core.Keyword(null,"omit","omit",-1917972325),new cljs.core.Keyword(null,"omit","omit",-1917972325));
chromex.protocols.post_message_BANG_.call(null,background_port,"hello from POPUP!");

return chromex_sample.popup.core.run_message_loop_BANG_.call(null,background_port);
});
chromex_sample.popup.core.init_BANG_ = (function chromex_sample$popup$core$init_BANG_(){
console.log("POPUP: init");


return chromex_sample.popup.core.connect_to_background_page_BANG_.call(null);
});

//# sourceMappingURL=core.js.map?rel=1497481541541