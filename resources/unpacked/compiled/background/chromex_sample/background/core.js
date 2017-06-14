// Compiled by ClojureScript 1.9.562 {}
goog.provide('chromex_sample.background.core');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('cljs.core.async');
goog.require('chromex.logging');
goog.require('chromex.chrome_event_channel');
goog.require('chromex.protocols');
goog.require('chromex.ext.tabs');
goog.require('chromex.ext.runtime');
goog.require('chromex_sample.background.storage');
chromex_sample.background.core.clients = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
chromex_sample.background.core.add_client_BANG_ = (function chromex_sample$background$core$add_client_BANG_(client){
console.log("BACKGROUND: client connected",chromex.protocols.get_sender.call(null,client));


return cljs.core.swap_BANG_.call(null,chromex_sample.background.core.clients,cljs.core.conj,client);
});
chromex_sample.background.core.remove_client_BANG_ = (function chromex_sample$background$core$remove_client_BANG_(client){
console.log("BACKGROUND: client disconnected",chromex.protocols.get_sender.call(null,client));


var remove_item = (function (coll,item){
return cljs.core.remove.call(null,(function (p1__53876_SHARP_){
return (item === p1__53876_SHARP_);
}),coll);
});
return cljs.core.swap_BANG_.call(null,chromex_sample.background.core.clients,remove_item,client);
});
chromex_sample.background.core.run_client_message_loop_BANG_ = (function chromex_sample$background$core$run_client_message_loop_BANG_(client){
var c__32057__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto__){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto__){
return (function (state_53923){
var state_val_53924 = (state_53923[(1)]);
if((state_val_53924 === (1))){
var state_53923__$1 = state_53923;
var statearr_53925_53941 = state_53923__$1;
(statearr_53925_53941[(2)] = null);

(statearr_53925_53941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53924 === (2))){
var state_53923__$1 = state_53923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53923__$1,(4),client);
} else {
if((state_val_53924 === (3))){
var inst_53921 = (state_53923[(2)]);
var state_53923__$1 = state_53923;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53923__$1,inst_53921);
} else {
if((state_val_53924 === (4))){
var inst_53911 = (state_53923[(7)]);
var inst_53911__$1 = (state_53923[(2)]);
var state_53923__$1 = (function (){var statearr_53926 = state_53923;
(statearr_53926[(7)] = inst_53911__$1);

return statearr_53926;
})();
if(cljs.core.truth_(inst_53911__$1)){
var statearr_53927_53942 = state_53923__$1;
(statearr_53927_53942[(1)] = (5));

} else {
var statearr_53928_53943 = state_53923__$1;
(statearr_53928_53943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53924 === (5))){
var inst_53911 = (state_53923[(7)]);
var inst_53913 = chromex.protocols.get_sender.call(null,client);
var inst_53914 = console.log("BACKGROUND: got client message:",inst_53911,"from",inst_53913);
var state_53923__$1 = (function (){var statearr_53929 = state_53923;
(statearr_53929[(8)] = inst_53914);

return statearr_53929;
})();
var statearr_53930_53944 = state_53923__$1;
(statearr_53930_53944[(2)] = null);

(statearr_53930_53944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53924 === (6))){
var state_53923__$1 = state_53923;
var statearr_53931_53945 = state_53923__$1;
(statearr_53931_53945[(2)] = null);

(statearr_53931_53945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53924 === (7))){
var inst_53918 = (state_53923[(2)]);
var inst_53919 = chromex_sample.background.core.remove_client_BANG_.call(null,client);
var state_53923__$1 = (function (){var statearr_53932 = state_53923;
(statearr_53932[(9)] = inst_53918);

return statearr_53932;
})();
var statearr_53933_53946 = state_53923__$1;
(statearr_53933_53946[(2)] = inst_53919);

(statearr_53933_53946[(1)] = (3));


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
var chromex_sample$background$core$run_client_message_loop_BANG__$_state_machine__31944__auto__ = null;
var chromex_sample$background$core$run_client_message_loop_BANG__$_state_machine__31944__auto____0 = (function (){
var statearr_53937 = [null,null,null,null,null,null,null,null,null,null];
(statearr_53937[(0)] = chromex_sample$background$core$run_client_message_loop_BANG__$_state_machine__31944__auto__);

(statearr_53937[(1)] = (1));

return statearr_53937;
});
var chromex_sample$background$core$run_client_message_loop_BANG__$_state_machine__31944__auto____1 = (function (state_53923){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_53923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e53938){if((e53938 instanceof Object)){
var ex__31947__auto__ = e53938;
var statearr_53939_53947 = state_53923;
(statearr_53939_53947[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53948 = state_53923;
state_53923 = G__53948;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
chromex_sample$background$core$run_client_message_loop_BANG__$_state_machine__31944__auto__ = function(state_53923){
switch(arguments.length){
case 0:
return chromex_sample$background$core$run_client_message_loop_BANG__$_state_machine__31944__auto____0.call(this);
case 1:
return chromex_sample$background$core$run_client_message_loop_BANG__$_state_machine__31944__auto____1.call(this,state_53923);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
chromex_sample$background$core$run_client_message_loop_BANG__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = chromex_sample$background$core$run_client_message_loop_BANG__$_state_machine__31944__auto____0;
chromex_sample$background$core$run_client_message_loop_BANG__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = chromex_sample$background$core$run_client_message_loop_BANG__$_state_machine__31944__auto____1;
return chromex_sample$background$core$run_client_message_loop_BANG__$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto__))
})();
var state__32059__auto__ = (function (){var statearr_53940 = f__32058__auto__.call(null);
(statearr_53940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto__);

return statearr_53940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto__))
);

return c__32057__auto__;
});
chromex_sample.background.core.handle_client_connection_BANG_ = (function chromex_sample$background$core$handle_client_connection_BANG_(client){
chromex_sample.background.core.add_client_BANG_.call(null,client);

chromex.protocols.post_message_BANG_.call(null,client,"hello from BACKGROUND PAGE!");

return chromex_sample.background.core.run_client_message_loop_BANG_.call(null,client);
});
chromex_sample.background.core.tell_clients_about_new_tab_BANG_ = (function chromex_sample$background$core$tell_clients_about_new_tab_BANG_(){
var seq__53953 = cljs.core.seq.call(null,cljs.core.deref.call(null,chromex_sample.background.core.clients));
var chunk__53954 = null;
var count__53955 = (0);
var i__53956 = (0);
while(true){
if((i__53956 < count__53955)){
var client = cljs.core._nth.call(null,chunk__53954,i__53956);
chromex.protocols.post_message_BANG_.call(null,client,"a new tab was created");

var G__53957 = seq__53953;
var G__53958 = chunk__53954;
var G__53959 = count__53955;
var G__53960 = (i__53956 + (1));
seq__53953 = G__53957;
chunk__53954 = G__53958;
count__53955 = G__53959;
i__53956 = G__53960;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__53953);
if(temp__5278__auto__){
var seq__53953__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53953__$1)){
var c__29370__auto__ = cljs.core.chunk_first.call(null,seq__53953__$1);
var G__53961 = cljs.core.chunk_rest.call(null,seq__53953__$1);
var G__53962 = c__29370__auto__;
var G__53963 = cljs.core.count.call(null,c__29370__auto__);
var G__53964 = (0);
seq__53953 = G__53961;
chunk__53954 = G__53962;
count__53955 = G__53963;
i__53956 = G__53964;
continue;
} else {
var client = cljs.core.first.call(null,seq__53953__$1);
chromex.protocols.post_message_BANG_.call(null,client,"a new tab was created");

var G__53965 = cljs.core.next.call(null,seq__53953__$1);
var G__53966 = null;
var G__53967 = (0);
var G__53968 = (0);
seq__53953 = G__53965;
chunk__53954 = G__53966;
count__53955 = G__53967;
i__53956 = G__53968;
continue;
}
} else {
return null;
}
}
break;
}
});
chromex_sample.background.core.process_chrome_event = (function chromex_sample$background$core$process_chrome_event(event_num,event){
console.log(goog.string.format("BACKGROUND: got chrome event (%05d)",event_num),event);


var vec__53973 = event;
var event_id = cljs.core.nth.call(null,vec__53973,(0),null);
var event_args = cljs.core.nth.call(null,vec__53973,(1),null);
var G__53976 = event_id;
var G__53976__$1 = (((G__53976 instanceof cljs.core.Keyword))?G__53976.fqn:null);
switch (G__53976__$1) {
case "chromex.ext.runtime/on-connect":
return cljs.core.apply.call(null,chromex_sample.background.core.handle_client_connection_BANG_,event_args);

break;
case "chromex.ext.tabs/on-created":
return chromex_sample.background.core.tell_clients_about_new_tab_BANG_.call(null);

break;
default:
return null;

}
});
chromex_sample.background.core.run_chrome_event_loop_BANG_ = (function chromex_sample$background$core$run_chrome_event_loop_BANG_(chrome_event_channel){
console.log("BACKGROUND: starting main event loop...");


var c__32057__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto__){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto__){
return (function (state_54027){
var state_val_54028 = (state_54027[(1)]);
if((state_val_54028 === (1))){
var inst_54012 = (1);
var state_54027__$1 = (function (){var statearr_54029 = state_54027;
(statearr_54029[(7)] = inst_54012);

return statearr_54029;
})();
var statearr_54030_54046 = state_54027__$1;
(statearr_54030_54046[(2)] = null);

(statearr_54030_54046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54028 === (2))){
var state_54027__$1 = state_54027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54027__$1,(4),chrome_event_channel);
} else {
if((state_val_54028 === (3))){
var inst_54025 = (state_54027[(2)]);
var state_54027__$1 = state_54027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54027__$1,inst_54025);
} else {
if((state_val_54028 === (4))){
var inst_54015 = (state_54027[(8)]);
var inst_54015__$1 = (state_54027[(2)]);
var state_54027__$1 = (function (){var statearr_54031 = state_54027;
(statearr_54031[(8)] = inst_54015__$1);

return statearr_54031;
})();
if(cljs.core.truth_(inst_54015__$1)){
var statearr_54032_54047 = state_54027__$1;
(statearr_54032_54047[(1)] = (5));

} else {
var statearr_54033_54048 = state_54027__$1;
(statearr_54033_54048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54028 === (5))){
var inst_54015 = (state_54027[(8)]);
var inst_54012 = (state_54027[(7)]);
var inst_54017 = chromex_sample.background.core.process_chrome_event.call(null,inst_54012,inst_54015);
var inst_54018 = (inst_54012 + (1));
var inst_54012__$1 = inst_54018;
var state_54027__$1 = (function (){var statearr_54034 = state_54027;
(statearr_54034[(9)] = inst_54017);

(statearr_54034[(7)] = inst_54012__$1);

return statearr_54034;
})();
var statearr_54035_54049 = state_54027__$1;
(statearr_54035_54049[(2)] = null);

(statearr_54035_54049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54028 === (6))){
var state_54027__$1 = state_54027;
var statearr_54036_54050 = state_54027__$1;
(statearr_54036_54050[(2)] = null);

(statearr_54036_54050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54028 === (7))){
var inst_54022 = (state_54027[(2)]);
var inst_54023 = console.log("BACKGROUND: leaving main event loop");
var state_54027__$1 = (function (){var statearr_54037 = state_54027;
(statearr_54037[(10)] = inst_54023);

(statearr_54037[(11)] = inst_54022);

return statearr_54037;
})();
var statearr_54038_54051 = state_54027__$1;
(statearr_54038_54051[(2)] = null);

(statearr_54038_54051[(1)] = (3));


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
var chromex_sample$background$core$run_chrome_event_loop_BANG__$_state_machine__31944__auto__ = null;
var chromex_sample$background$core$run_chrome_event_loop_BANG__$_state_machine__31944__auto____0 = (function (){
var statearr_54042 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54042[(0)] = chromex_sample$background$core$run_chrome_event_loop_BANG__$_state_machine__31944__auto__);

(statearr_54042[(1)] = (1));

return statearr_54042;
});
var chromex_sample$background$core$run_chrome_event_loop_BANG__$_state_machine__31944__auto____1 = (function (state_54027){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_54027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e54043){if((e54043 instanceof Object)){
var ex__31947__auto__ = e54043;
var statearr_54044_54052 = state_54027;
(statearr_54044_54052[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54053 = state_54027;
state_54027 = G__54053;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
chromex_sample$background$core$run_chrome_event_loop_BANG__$_state_machine__31944__auto__ = function(state_54027){
switch(arguments.length){
case 0:
return chromex_sample$background$core$run_chrome_event_loop_BANG__$_state_machine__31944__auto____0.call(this);
case 1:
return chromex_sample$background$core$run_chrome_event_loop_BANG__$_state_machine__31944__auto____1.call(this,state_54027);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
chromex_sample$background$core$run_chrome_event_loop_BANG__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = chromex_sample$background$core$run_chrome_event_loop_BANG__$_state_machine__31944__auto____0;
chromex_sample$background$core$run_chrome_event_loop_BANG__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = chromex_sample$background$core$run_chrome_event_loop_BANG__$_state_machine__31944__auto____1;
return chromex_sample$background$core$run_chrome_event_loop_BANG__$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto__))
})();
var state__32059__auto__ = (function (){var statearr_54045 = f__32058__auto__.call(null);
(statearr_54045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto__);

return statearr_54045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto__))
);

return c__32057__auto__;
});
chromex_sample.background.core.boot_chrome_event_loop_BANG_ = (function chromex_sample$background$core$boot_chrome_event_loop_BANG_(){
var chrome_event_channel = chromex.chrome_event_channel.make_chrome_event_channel.call(null,cljs.core.async.chan.call(null));
var chan54058_54062 = chrome_event_channel;
var config54059_54063 = chromex.config.get_active_config.call(null);
chromex.ext.tabs.on_created_STAR_.call(null,config54059_54063,chan54058_54062);

chromex.ext.tabs.on_updated_STAR_.call(null,config54059_54063,chan54058_54062);

chromex.ext.tabs.on_moved_STAR_.call(null,config54059_54063,chan54058_54062);

chromex.ext.tabs.on_activated_STAR_.call(null,config54059_54063,chan54058_54062);

chromex.ext.tabs.on_highlighted_STAR_.call(null,config54059_54063,chan54058_54062);

chromex.ext.tabs.on_detached_STAR_.call(null,config54059_54063,chan54058_54062);

chromex.ext.tabs.on_attached_STAR_.call(null,config54059_54063,chan54058_54062);

chromex.ext.tabs.on_removed_STAR_.call(null,config54059_54063,chan54058_54062);

chromex.ext.tabs.on_replaced_STAR_.call(null,config54059_54063,chan54058_54062);

chromex.ext.tabs.on_zoom_change_STAR_.call(null,config54059_54063,chan54058_54062);

var chan54060_54064 = chrome_event_channel;
var config54061_54065 = chromex.config.get_active_config.call(null);
chromex.ext.runtime.on_startup_STAR_.call(null,config54061_54065,chan54060_54064);

chromex.ext.runtime.on_installed_STAR_.call(null,config54061_54065,chan54060_54064);

chromex.ext.runtime.on_suspend_STAR_.call(null,config54061_54065,chan54060_54064);

chromex.ext.runtime.on_suspend_canceled_STAR_.call(null,config54061_54065,chan54060_54064);

chromex.ext.runtime.on_update_available_STAR_.call(null,config54061_54065,chan54060_54064);

chromex.ext.runtime.on_connect_STAR_.call(null,config54061_54065,chan54060_54064);

chromex.ext.runtime.on_connect_external_STAR_.call(null,config54061_54065,chan54060_54064);

chromex.ext.runtime.on_message_STAR_.call(null,config54061_54065,chan54060_54064);

chromex.ext.runtime.on_message_external_STAR_.call(null,config54061_54065,chan54060_54064);

chromex.ext.runtime.on_restart_required_STAR_.call(null,config54061_54065,chan54060_54064);

return chromex_sample.background.core.run_chrome_event_loop_BANG_.call(null,chrome_event_channel);
});
chromex_sample.background.core.init_BANG_ = (function chromex_sample$background$core$init_BANG_(){
console.log("BACKGROUND: init");


chromex_sample.background.storage.test_storage_BANG_.call(null);

return chromex_sample.background.core.boot_chrome_event_loop_BANG_.call(null);
});

//# sourceMappingURL=core.js.map?rel=1497481557486