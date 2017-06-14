// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('chromex.defaults');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('chromex.support');
goog.require('oops.core');
goog.require('goog.object');
goog.require('chromex.error');
goog.require('chromex.protocols');
chromex.defaults.log_prefix = "[chromex]";
chromex.defaults.console_log = (function chromex$defaults$console_log(var_args){
var args__9188__auto__ = [];
var len__9181__auto___22449 = arguments.length;
var i__9182__auto___22450 = (0);
while(true){
if((i__9182__auto___22450 < len__9181__auto___22449)){
args__9188__auto__.push((arguments[i__9182__auto___22450]));

var G__22451 = (i__9182__auto___22450 + (1));
i__9182__auto___22450 = G__22451;
continue;
} else {
}
break;
}

var argseq__9189__auto__ = ((((0) < args__9188__auto__.length))?(new cljs.core.IndexedSeq(args__9188__auto__.slice((0)),(0),null)):null);
return chromex.defaults.console_log.cljs$core$IFn$_invoke$arity$variadic(argseq__9189__auto__);
});

chromex.defaults.console_log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
});

chromex.defaults.console_log.cljs$lang$maxFixedArity = (0);

chromex.defaults.console_log.cljs$lang$applyTo = (function (seq22448){
return chromex.defaults.console_log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22448));
});

chromex.defaults.console_error = (function chromex$defaults$console_error(var_args){
var args__9188__auto__ = [];
var len__9181__auto___22453 = arguments.length;
var i__9182__auto___22454 = (0);
while(true){
if((i__9182__auto___22454 < len__9181__auto___22453)){
args__9188__auto__.push((arguments[i__9182__auto___22454]));

var G__22455 = (i__9182__auto___22454 + (1));
i__9182__auto___22454 = G__22455;
continue;
} else {
}
break;
}

var argseq__9189__auto__ = ((((0) < args__9188__auto__.length))?(new cljs.core.IndexedSeq(args__9188__auto__.slice((0)),(0),null)):null);
return chromex.defaults.console_error.cljs$core$IFn$_invoke$arity$variadic(argseq__9189__auto__);
});

chromex.defaults.console_error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return console.error.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
});

chromex.defaults.console_error.cljs$lang$maxFixedArity = (0);

chromex.defaults.console_error.cljs$lang$applyTo = (function (seq22452){
return chromex.defaults.console_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22452));
});

chromex.defaults.default_logger = (function chromex$defaults$default_logger(var_args){
var args__9188__auto__ = [];
var len__9181__auto___22457 = arguments.length;
var i__9182__auto___22458 = (0);
while(true){
if((i__9182__auto___22458 < len__9181__auto___22457)){
args__9188__auto__.push((arguments[i__9182__auto___22458]));

var G__22459 = (i__9182__auto___22458 + (1));
i__9182__auto___22458 = G__22459;
continue;
} else {
}
break;
}

var argseq__9189__auto__ = ((((0) < args__9188__auto__.length))?(new cljs.core.IndexedSeq(args__9188__auto__.slice((0)),(0),null)):null);
return chromex.defaults.default_logger.cljs$core$IFn$_invoke$arity$variadic(argseq__9189__auto__);
});

chromex.defaults.default_logger.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(chromex.defaults.console_log,chromex.defaults.log_prefix,args);
});

chromex.defaults.default_logger.cljs$lang$maxFixedArity = (0);

chromex.defaults.default_logger.cljs$lang$applyTo = (function (seq22456){
return chromex.defaults.default_logger.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22456));
});

chromex.defaults.default_callback_error_reporter = (function chromex$defaults$default_callback_error_reporter(descriptor,error){
var function$ = (function (){var or__7960__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(descriptor))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(descriptor)))].join('');
if(cljs.core.truth_(or__7960__auto__)){
return or__7960__auto__;
} else {
return "an unknown function";
}
})();
var explanation = (function (){var target_obj_22462 = error;
var next_obj_22463 = (target_obj_22462["message"]);
return next_obj_22463;
})();
var message = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("an error occured during the call to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(function$),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(explanation)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(explanation)].join(''):null))].join('');
return chromex.defaults.console_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([chromex.defaults.log_prefix,message,"Details:",error], 0));
});
chromex.defaults.report_error_if_needed_BANG_ = (function chromex$defaults$report_error_if_needed_BANG_(config,descriptor,error){
var temp__5278__auto__ = cljs.core.cst$kw$callback_DASH_error_DASH_reporter.cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__5278__auto__)){
var error_reporter = temp__5278__auto__;
if(cljs.core.fn_QMARK_(error_reporter)){
} else {
throw (new Error("Assert failed: (fn? error-reporter)"));
}

return (error_reporter.cljs$core$IFn$_invoke$arity$2 ? error_reporter.cljs$core$IFn$_invoke$arity$2(descriptor,error) : error_reporter.call(null,descriptor,error));
} else {
return null;
}
});
chromex.defaults.default_callback_fn_factory = (function chromex$defaults$default_callback_fn_factory(config,descriptor,chan){
return (function() { 
var G__22470__delegate = function (args){
var temp__5276__auto___22471 = (function (){var target_obj_22467 = chrome;
var next_obj_22468 = (target_obj_22467["runtime"]);
var next_obj_22469 = (next_obj_22468["lastError"]);
if(!((next_obj_22469 == null))){
return next_obj_22469;
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5276__auto___22471)){
var error_22472 = temp__5276__auto___22471;
chromex.error.set_last_error_BANG_(error_22472);

chromex.defaults.report_error_if_needed_BANG_(config,descriptor,error_22472);
} else {
chromex.error.set_last_error_BANG_(null);

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,cljs.core.vec(args));
}

return cljs.core.async.close_BANG_(chan);
};
var G__22470 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22473__i = 0, G__22473__a = new Array(arguments.length -  0);
while (G__22473__i < G__22473__a.length) {G__22473__a[G__22473__i] = arguments[G__22473__i + 0]; ++G__22473__i;}
  args = new cljs.core.IndexedSeq(G__22473__a,0,null);
} 
return G__22470__delegate.call(this,args);};
G__22470.cljs$lang$maxFixedArity = 0;
G__22470.cljs$lang$applyTo = (function (arglist__22474){
var args = cljs.core.seq(arglist__22474);
return G__22470__delegate(args);
});
G__22470.cljs$core$IFn$_invoke$arity$variadic = G__22470__delegate;
return G__22470;
})()
;
});
chromex.defaults.default_callback_channel_factory = (function chromex$defaults$default_callback_channel_factory(_config){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
});
chromex.defaults.default_event_listener_factory = (function chromex$defaults$default_event_listener_factory(_config,event_id,chan){
return (function() { 
var G__22475__delegate = function (args){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_id,cljs.core.vec(args)], null));
};
var G__22475 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22476__i = 0, G__22476__a = new Array(arguments.length -  0);
while (G__22476__i < G__22476__a.length) {G__22476__a[G__22476__i] = arguments[G__22476__i + 0]; ++G__22476__i;}
  args = new cljs.core.IndexedSeq(G__22476__a,0,null);
} 
return G__22475__delegate.call(this,args);};
G__22475.cljs$lang$maxFixedArity = 0;
G__22475.cljs$lang$applyTo = (function (arglist__22477){
var args = cljs.core.seq(arglist__22477);
return G__22475__delegate(args);
});
G__22475.cljs$core$IFn$_invoke$arity$variadic = G__22475__delegate;
return G__22475;
})()
;
});
chromex.defaults.default_missing_api_check = (function chromex$defaults$default_missing_api_check(api,obj,key){
if(cljs.core.not(goog.object.containsKey(obj,key))){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Chromex library tried to access a missing Chrome API object '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(api),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'.\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Your Chrome version might be too old or too recent for running this extension.\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("This is a failure which probably requires a software update.")].join('')));
} else {
return null;
}
});
chromex.defaults.default_chrome_storage_area_callback_fn_factory = (function chromex$defaults$default_chrome_storage_area_callback_fn_factory(config,chan){
return (function() { 
var G__22486__delegate = function (args){
var last_error = (function (){var target_obj_22482 = cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1(config);
var next_obj_22483 = (target_obj_22482["chrome"]);
var next_obj_22484 = (next_obj_22483["runtime"]);
var next_obj_22485 = (next_obj_22484["lastError"]);
if(!((next_obj_22485 == null))){
return next_obj_22485;
} else {
return null;
}
})();
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(args),last_error], null));
};
var G__22486 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22487__i = 0, G__22487__a = new Array(arguments.length -  0);
while (G__22487__i < G__22487__a.length) {G__22487__a[G__22487__i] = arguments[G__22487__i + 0]; ++G__22487__i;}
  args = new cljs.core.IndexedSeq(G__22487__a,0,null);
} 
return G__22486__delegate.call(this,args);};
G__22486.cljs$lang$maxFixedArity = 0;
G__22486.cljs$lang$applyTo = (function (arglist__22488){
var args = cljs.core.seq(arglist__22488);
return G__22486__delegate(args);
});
G__22486.cljs$core$IFn$_invoke$arity$variadic = G__22486__delegate;
return G__22486;
})()
;
});
chromex.defaults.default_chrome_storage_area_callback_channel_factory = (function chromex$defaults$default_chrome_storage_area_callback_channel_factory(_config){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
});
chromex.defaults.default_chrome_port_channel_factory = (function chromex$defaults$default_chrome_port_channel_factory(_config){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
});
chromex.defaults.default_chrome_port_on_message_fn_factory = (function chromex$defaults$default_chrome_port_on_message_fn_factory(config,chrome_port){
return (function (message){
if((message == null)){
var config__14251__auto__ = config;
var handler_key__14252__auto__ = cljs.core.cst$kw$chrome_DASH_port_DASH_received_DASH_nil_DASH_message;
var handler__14253__auto__ = (handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1 ? handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler_key__14252__auto__.call(null,config__14251__auto__));
if(cljs.core.fn_QMARK_(handler__14253__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__14252__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14251__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__14253__auto__)")].join('')));
}

return (handler__14253__auto__.cljs$core$IFn$_invoke$arity$2 ? handler__14253__auto__.cljs$core$IFn$_invoke$arity$2(config__14251__auto__,chrome_port) : handler__14253__auto__.call(null,config__14251__auto__,chrome_port));
} else {
chromex.protocols.put_message_BANG_(chrome_port,message);

return null;
}
});
});
chromex.defaults.default_chrome_port_on_disconnect_fn_factory = (function chromex$defaults$default_chrome_port_on_disconnect_fn_factory(_config,chrome_port){
return (function (){
chromex.protocols.close_resources_BANG_(chrome_port);

chromex.protocols.set_connected_BANG_(chrome_port,false);

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
chromex.defaults.default_config = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$chrome_DASH_port_DASH_post_DASH_message_DASH_called_DASH_on_DASH_disconnected_DASH_port,cljs.core.cst$kw$chrome_DASH_port_DASH_put_DASH_message_DASH_called_DASH_on_DASH_disconnected_DASH_port,cljs.core.cst$kw$chrome_DASH_port_DASH_on_DASH_disconnect_DASH_called_DASH_on_DASH_disconnected_DASH_port,cljs.core.cst$kw$chrome_DASH_storage_DASH_area_DASH_callback_DASH_channel_DASH_factory,cljs.core.cst$kw$chrome_DASH_port_DASH_post_DASH_message_DASH_called_DASH_with_DASH_nil,cljs.core.cst$kw$chrome_DASH_port_DASH_channel_DASH_factory,cljs.core.cst$kw$missing_DASH_api_DASH_check_DASH_fn,cljs.core.cst$kw$chrome_DASH_port_DASH_received_DASH_nil_DASH_message,cljs.core.cst$kw$chrome_DASH_port_DASH_on_DASH_message_DASH_called_DASH_on_DASH_disconnected_DASH_port,cljs.core.cst$kw$chrome_DASH_port_DASH_on_DASH_message_DASH_fn_DASH_factory,cljs.core.cst$kw$chrome_DASH_port_DASH_disconnect_DASH_called_DASH_on_DASH_disconnected_DASH_port,cljs.core.cst$kw$root,cljs.core.cst$kw$logger,cljs.core.cst$kw$event_DASH_listener_DASH_factory,cljs.core.cst$kw$callback_DASH_fn_DASH_factory,cljs.core.cst$kw$chrome_DASH_storage_DASH_area_DASH_callback_DASH_fn_DASH_factory,cljs.core.cst$kw$callback_DASH_error_DASH_reporter,cljs.core.cst$kw$verbose_DASH_logging,cljs.core.cst$kw$callback_DASH_channel_DASH_factory,cljs.core.cst$kw$chrome_DASH_port_DASH_on_DASH_disconnect_DASH_fn_DASH_factory],[chromex.defaults.default_chrome_port_post_message_called_on_disconnected_port,chromex.defaults.default_chrome_port_put_message_called_on_disconnected_port,chromex.defaults.default_chrome_port_on_disconnect_called_on_disconnected_port,chromex.defaults.default_chrome_storage_area_callback_channel_factory,chromex.defaults.default_chrome_port_post_message_called_with_nil,chromex.defaults.default_chrome_port_channel_factory,chromex.defaults.default_missing_api_check,chromex.defaults.default_chrome_port_received_nil_message,chromex.defaults.default_chrome_port_on_message_called_on_disconnected_port,chromex.defaults.default_chrome_port_on_message_fn_factory,chromex.defaults.default_chrome_port_disconnect_called_on_disconnected_port,goog.global,chromex.defaults.default_logger,chromex.defaults.default_event_listener_factory,chromex.defaults.default_callback_fn_factory,chromex.defaults.default_chrome_storage_area_callback_fn_factory,chromex.defaults.default_callback_error_reporter,false,chromex.defaults.default_callback_channel_factory,chromex.defaults.default_chrome_port_on_disconnect_fn_factory]);
