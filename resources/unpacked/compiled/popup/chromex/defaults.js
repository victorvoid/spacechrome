// Compiled by ClojureScript 1.9.562 {}
goog.provide('chromex.defaults');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('chromex.support');
goog.require('oops.core');
goog.require('goog.object');
goog.require('chromex.error');
goog.require('chromex.protocols');
chromex.defaults.log_prefix = "[chromex]";
chromex.defaults.console_log = (function chromex$defaults$console_log(var_args){
var args__29687__auto__ = [];
var len__29680__auto___37430 = arguments.length;
var i__29681__auto___37431 = (0);
while(true){
if((i__29681__auto___37431 < len__29680__auto___37430)){
args__29687__auto__.push((arguments[i__29681__auto___37431]));

var G__37432 = (i__29681__auto___37431 + (1));
i__29681__auto___37431 = G__37432;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return chromex.defaults.console_log.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});

chromex.defaults.console_log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});

chromex.defaults.console_log.cljs$lang$maxFixedArity = (0);

chromex.defaults.console_log.cljs$lang$applyTo = (function (seq37429){
return chromex.defaults.console_log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37429));
});

chromex.defaults.console_error = (function chromex$defaults$console_error(var_args){
var args__29687__auto__ = [];
var len__29680__auto___37434 = arguments.length;
var i__29681__auto___37435 = (0);
while(true){
if((i__29681__auto___37435 < len__29680__auto___37434)){
args__29687__auto__.push((arguments[i__29681__auto___37435]));

var G__37436 = (i__29681__auto___37435 + (1));
i__29681__auto___37435 = G__37436;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return chromex.defaults.console_error.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});

chromex.defaults.console_error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});

chromex.defaults.console_error.cljs$lang$maxFixedArity = (0);

chromex.defaults.console_error.cljs$lang$applyTo = (function (seq37433){
return chromex.defaults.console_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37433));
});

chromex.defaults.default_logger = (function chromex$defaults$default_logger(var_args){
var args__29687__auto__ = [];
var len__29680__auto___37438 = arguments.length;
var i__29681__auto___37439 = (0);
while(true){
if((i__29681__auto___37439 < len__29680__auto___37438)){
args__29687__auto__.push((arguments[i__29681__auto___37439]));

var G__37440 = (i__29681__auto___37439 + (1));
i__29681__auto___37439 = G__37440;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return chromex.defaults.default_logger.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});

chromex.defaults.default_logger.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,chromex.defaults.console_log,chromex.defaults.log_prefix,args);
});

chromex.defaults.default_logger.cljs$lang$maxFixedArity = (0);

chromex.defaults.default_logger.cljs$lang$applyTo = (function (seq37437){
return chromex.defaults.default_logger.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37437));
});

chromex.defaults.default_callback_error_reporter = (function chromex$defaults$default_callback_error_reporter(descriptor,error){
var function$ = (function (){var or__28459__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(descriptor))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(descriptor)))].join('');
if(cljs.core.truth_(or__28459__auto__)){
return or__28459__auto__;
} else {
return "an unknown function";
}
})();
var explanation = (function (){var target_obj_37444 = error;
var _STAR_runtime_state_STAR_37446 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_37444,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_37445 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_37444,(0),"message",true))?(target_obj_37444["message"]):null);
return next_obj_37445;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_37446;
}})();
var message = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("an error occured during the call to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(function$),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(explanation)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(explanation)].join(''):null))].join('');
return chromex.defaults.console_error.call(null,chromex.defaults.log_prefix,message,"Details:",error);
});
chromex.defaults.report_error_if_needed_BANG_ = (function chromex$defaults$report_error_if_needed_BANG_(config,descriptor,error){
var temp__5278__auto__ = new cljs.core.Keyword(null,"callback-error-reporter","callback-error-reporter",-2104016040).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__5278__auto__)){
var error_reporter = temp__5278__auto__;
if(cljs.core.fn_QMARK_.call(null,error_reporter)){
} else {
throw (new Error("Assert failed: (fn? error-reporter)"));
}

return error_reporter.call(null,descriptor,error);
} else {
return null;
}
});
chromex.defaults.default_callback_fn_factory = (function chromex$defaults$default_callback_fn_factory(config,descriptor,chan){
return (function() { 
var G__37455__delegate = function (args){
var temp__5276__auto___37456 = (function (){var target_obj_37451 = chrome;
var _STAR_runtime_state_STAR_37454 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_37451,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_37452 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_37451,(0),"runtime",true))?(target_obj_37451["runtime"]):null);
var next_obj_37453 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_37452,(1),"lastError",true))?(next_obj_37452["lastError"]):null);
if(!((next_obj_37453 == null))){
return next_obj_37453;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_37454;
}})();
if(cljs.core.truth_(temp__5276__auto___37456)){
var error_37457 = temp__5276__auto___37456;
chromex.error.set_last_error_BANG_.call(null,error_37457);

chromex.defaults.report_error_if_needed_BANG_.call(null,config,descriptor,error_37457);
} else {
chromex.error.set_last_error_BANG_.call(null,null);

cljs.core.async.put_BANG_.call(null,chan,cljs.core.vec.call(null,args));
}

return cljs.core.async.close_BANG_.call(null,chan);
};
var G__37455 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37458__i = 0, G__37458__a = new Array(arguments.length -  0);
while (G__37458__i < G__37458__a.length) {G__37458__a[G__37458__i] = arguments[G__37458__i + 0]; ++G__37458__i;}
  args = new cljs.core.IndexedSeq(G__37458__a,0,null);
} 
return G__37455__delegate.call(this,args);};
G__37455.cljs$lang$maxFixedArity = 0;
G__37455.cljs$lang$applyTo = (function (arglist__37459){
var args = cljs.core.seq(arglist__37459);
return G__37455__delegate(args);
});
G__37455.cljs$core$IFn$_invoke$arity$variadic = G__37455__delegate;
return G__37455;
})()
;
});
chromex.defaults.default_callback_channel_factory = (function chromex$defaults$default_callback_channel_factory(_config){
return cljs.core.async.chan.call(null);
});
chromex.defaults.default_event_listener_factory = (function chromex$defaults$default_event_listener_factory(_config,event_id,chan){
return (function() { 
var G__37460__delegate = function (args){
return cljs.core.async.put_BANG_.call(null,chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_id,cljs.core.vec.call(null,args)], null));
};
var G__37460 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37461__i = 0, G__37461__a = new Array(arguments.length -  0);
while (G__37461__i < G__37461__a.length) {G__37461__a[G__37461__i] = arguments[G__37461__i + 0]; ++G__37461__i;}
  args = new cljs.core.IndexedSeq(G__37461__a,0,null);
} 
return G__37460__delegate.call(this,args);};
G__37460.cljs$lang$maxFixedArity = 0;
G__37460.cljs$lang$applyTo = (function (arglist__37462){
var args = cljs.core.seq(arglist__37462);
return G__37460__delegate(args);
});
G__37460.cljs$core$IFn$_invoke$arity$variadic = G__37460__delegate;
return G__37460;
})()
;
});
chromex.defaults.default_missing_api_check = (function chromex$defaults$default_missing_api_check(api,obj,key){
if(cljs.core.not.call(null,goog.object.containsKey(obj,key))){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Chromex library tried to access a missing Chrome API object '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(api),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'.\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Your Chrome version might be too old or too recent for running this extension.\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("This is a failure which probably requires a software update.")].join('')));
} else {
return null;
}
});
chromex.defaults.default_chrome_storage_area_callback_fn_factory = (function chromex$defaults$default_chrome_storage_area_callback_fn_factory(config,chan){
return (function() { 
var G__37473__delegate = function (args){
var last_error = (function (){var target_obj_37468 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_37472 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_37468,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_37469 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_37468,(0),"chrome",true))?(target_obj_37468["chrome"]):null);
var next_obj_37470 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_37469,(0),"runtime",true))?(next_obj_37469["runtime"]):null);
var next_obj_37471 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_37470,(1),"lastError",true))?(next_obj_37470["lastError"]):null);
if(!((next_obj_37471 == null))){
return next_obj_37471;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_37472;
}})();
return cljs.core.async.put_BANG_.call(null,chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,args),last_error], null));
};
var G__37473 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37474__i = 0, G__37474__a = new Array(arguments.length -  0);
while (G__37474__i < G__37474__a.length) {G__37474__a[G__37474__i] = arguments[G__37474__i + 0]; ++G__37474__i;}
  args = new cljs.core.IndexedSeq(G__37474__a,0,null);
} 
return G__37473__delegate.call(this,args);};
G__37473.cljs$lang$maxFixedArity = 0;
G__37473.cljs$lang$applyTo = (function (arglist__37475){
var args = cljs.core.seq(arglist__37475);
return G__37473__delegate(args);
});
G__37473.cljs$core$IFn$_invoke$arity$variadic = G__37473__delegate;
return G__37473;
})()
;
});
chromex.defaults.default_chrome_storage_area_callback_channel_factory = (function chromex$defaults$default_chrome_storage_area_callback_channel_factory(_config){
return cljs.core.async.chan.call(null);
});
chromex.defaults.default_chrome_port_channel_factory = (function chromex$defaults$default_chrome_port_channel_factory(_config){
return cljs.core.async.chan.call(null);
});
chromex.defaults.default_chrome_port_on_message_fn_factory = (function chromex$defaults$default_chrome_port_on_message_fn_factory(config,chrome_port){
return (function (message){
if((message == null)){
var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"chrome-port-received-nil-message","chrome-port-received-nil-message",-1593119285);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,chrome_port);
} else {
chromex.protocols.put_message_BANG_.call(null,chrome_port,message);

return null;
}
});
});
chromex.defaults.default_chrome_port_on_disconnect_fn_factory = (function chromex$defaults$default_chrome_port_on_disconnect_fn_factory(_config,chrome_port){
return (function (){
chromex.protocols.close_resources_BANG_.call(null,chrome_port);

chromex.protocols.set_connected_BANG_.call(null,chrome_port,false);

return null;
});
});
chromex.defaults.default_chrome_port_disconnect_called_on_disconnected_port = (function chromex$defaults$default_chrome_port_disconnect_called_on_disconnected_port(_config,_chrome_port){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("ChromePort: disconnect! called on already disconnected port"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
chromex.defaults.default_chrome_port_post_message_called_on_disconnected_port = (function chromex$defaults$default_chrome_port_post_message_called_on_disconnected_port(_config,_chrome_port){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("ChromePort: post-message! called on already disconnected port"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
chromex.defaults.default_chrome_port_on_disconnect_called_on_disconnected_port = (function chromex$defaults$default_chrome_port_on_disconnect_called_on_disconnected_port(_config,_chrome_port){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("ChromePort: on-disconnect! called on already disconnected port"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
chromex.defaults.default_chrome_port_on_message_called_on_disconnected_port = (function chromex$defaults$default_chrome_port_on_message_called_on_disconnected_port(_config,_chrome_port){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("ChromePort: on-message! called on already disconnected port"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
chromex.defaults.default_chrome_port_post_message_called_with_nil = (function chromex$defaults$default_chrome_port_post_message_called_with_nil(_config,_chrome_port){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("ChromePort: post-message! called with nil message. Nil cannot be delivered via a core.async channel."),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
chromex.defaults.default_chrome_port_received_nil_message = (function chromex$defaults$default_chrome_port_received_nil_message(_config,_chrome_port){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("ChromePort: received a nil message. Nil cannot be delivered via a core.async channel."),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
chromex.defaults.default_chrome_port_put_message_called_on_disconnected_port = (function chromex$defaults$default_chrome_port_put_message_called_on_disconnected_port(_config,_chrome_port,message){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("ChromePort: put-message! called on already disconnected port.\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("message: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
chromex.defaults.default_config = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"chrome-port-post-message-called-on-disconnected-port","chrome-port-post-message-called-on-disconnected-port",-1329006944),new cljs.core.Keyword(null,"chrome-port-put-message-called-on-disconnected-port","chrome-port-put-message-called-on-disconnected-port",1479634211),new cljs.core.Keyword(null,"chrome-port-on-disconnect-called-on-disconnected-port","chrome-port-on-disconnect-called-on-disconnected-port",-269858172),new cljs.core.Keyword(null,"chrome-storage-area-callback-channel-factory","chrome-storage-area-callback-channel-factory",573191526),new cljs.core.Keyword(null,"chrome-port-post-message-called-with-nil","chrome-port-post-message-called-with-nil",864934312),new cljs.core.Keyword(null,"chrome-port-channel-factory","chrome-port-channel-factory",393485192),new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703),new cljs.core.Keyword(null,"chrome-port-received-nil-message","chrome-port-received-nil-message",-1593119285),new cljs.core.Keyword(null,"chrome-port-on-message-called-on-disconnected-port","chrome-port-on-message-called-on-disconnected-port",1590595021),new cljs.core.Keyword(null,"chrome-port-on-message-fn-factory","chrome-port-on-message-fn-factory",1295000398),new cljs.core.Keyword(null,"chrome-port-disconnect-called-on-disconnected-port","chrome-port-disconnect-called-on-disconnected-port",-1526797777),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"logger","logger",-220675947),new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091),new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029),new cljs.core.Keyword(null,"chrome-storage-area-callback-fn-factory","chrome-storage-area-callback-fn-factory",575077111),new cljs.core.Keyword(null,"callback-error-reporter","callback-error-reporter",-2104016040),new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909),new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003),new cljs.core.Keyword(null,"chrome-port-on-disconnect-fn-factory","chrome-port-on-disconnect-fn-factory",-501244675)],[chromex.defaults.default_chrome_port_post_message_called_on_disconnected_port,chromex.defaults.default_chrome_port_put_message_called_on_disconnected_port,chromex.defaults.default_chrome_port_on_disconnect_called_on_disconnected_port,chromex.defaults.default_chrome_storage_area_callback_channel_factory,chromex.defaults.default_chrome_port_post_message_called_with_nil,chromex.defaults.default_chrome_port_channel_factory,chromex.defaults.default_missing_api_check,chromex.defaults.default_chrome_port_received_nil_message,chromex.defaults.default_chrome_port_on_message_called_on_disconnected_port,chromex.defaults.default_chrome_port_on_message_fn_factory,chromex.defaults.default_chrome_port_disconnect_called_on_disconnected_port,goog.global,chromex.defaults.default_logger,chromex.defaults.default_event_listener_factory,chromex.defaults.default_callback_fn_factory,chromex.defaults.default_chrome_storage_area_callback_fn_factory,chromex.defaults.default_callback_error_reporter,false,chromex.defaults.default_callback_channel_factory,chromex.defaults.default_chrome_port_on_disconnect_fn_factory]);

//# sourceMappingURL=defaults.js.map?rel=1497481540628