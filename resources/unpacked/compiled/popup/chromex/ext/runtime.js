// Compiled by ClojureScript 1.9.562 {}
goog.provide('chromex.ext.runtime');
goog.require('cljs.core');
goog.require('chromex.core');
chromex.ext.runtime.last_error_STAR_ = (function chromex$ext$runtime$last_error_STAR_(config){
var result_37878 = (function (){var final_args_array_37879 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.runtime.lastError");
var ns_37880 = (function (){var target_obj_37882 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_37885 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_37882,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_37883 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_37882,(0),"chrome",true))?(target_obj_37882["chrome"]):null);
var next_obj_37884 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_37883,(0),"runtime",true))?(next_obj_37883["runtime"]):null);
return next_obj_37884;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_37885;
}})();

var config__30571__auto___37889 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___37889))){
var logger__30572__auto___37890 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___37889);
var prefix__30573__auto___37891 = ["accessing:","chrome.runtime.lastError"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___37890)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___37889)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___37890.apply(null,prefix__30573__auto___37891.concat(final_args_array_37879));
} else {
}

var target_37881 = (function (){var target_obj_37886 = ns_37880;
var _STAR_runtime_state_STAR_37888 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_37886,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_37887 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_37886,(1),"lastError",true))?(target_obj_37886["lastError"]):null);
if(!((next_obj_37887 == null))){
return next_obj_37887;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_37888;
}})();
return target_37881;
})();
return result_37878;
});
chromex.ext.runtime.id_STAR_ = (function chromex$ext$runtime$id_STAR_(config){
var result_37903 = (function (){var final_args_array_37904 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.runtime.id");
var ns_37905 = (function (){var target_obj_37907 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_37910 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_37907,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_37908 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_37907,(0),"chrome",true))?(target_obj_37907["chrome"]):null);
var next_obj_37909 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_37908,(0),"runtime",true))?(next_obj_37908["runtime"]):null);
return next_obj_37909;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_37910;
}})();

var config__30571__auto___37914 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___37914))){
var logger__30572__auto___37915 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___37914);
var prefix__30573__auto___37916 = ["accessing:","chrome.runtime.id"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___37915)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___37914)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___37915.apply(null,prefix__30573__auto___37916.concat(final_args_array_37904));
} else {
}

var target_37906 = (function (){var target_obj_37911 = ns_37905;
var _STAR_runtime_state_STAR_37913 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_37911,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_37912 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_37911,(1),"id",true))?(target_obj_37911["id"]):null);
if(!((next_obj_37912 == null))){
return next_obj_37912;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_37913;
}})();
return target_37906;
})();
return result_37903;
});
chromex.ext.runtime.get_background_page_STAR_ = (function chromex$ext$runtime$get_background_page_STAR_(config){
var callback_chan_37931 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__);
})();
var marshalled_callback_37933_37945 = ((function (callback_chan_37931){
return (function (cb_background_page_37937){
return (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","get-background-page","chromex.ext.runtime/get-background-page",2138227095),new cljs.core.Keyword(null,"name","name",1843675177),"getBackgroundPage",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"background-page",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"Window"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_37931);
})().call(null,cb_background_page_37937);
});})(callback_chan_37931))
;
var result_37932_37946 = (function (){var final_args_array_37934 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_37933_37945,"callback",null], null)], null),"chrome.runtime.getBackgroundPage");
var ns_37935 = (function (){var target_obj_37938 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_37941 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_37938,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_37939 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_37938,(0),"chrome",true))?(target_obj_37938["chrome"]):null);
var next_obj_37940 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_37939,(0),"runtime",true))?(next_obj_37939["runtime"]):null);
return next_obj_37940;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_37941;
}})();
var config__30575__auto___37947 = config;
var api_check_fn__30576__auto___37948 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___37947);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___37948)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___37947)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___37948.call(null,"chrome.runtime.getBackgroundPage",ns_37935,"getBackgroundPage");

var config__30571__auto___37949 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___37949))){
var logger__30572__auto___37950 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___37949);
var prefix__30573__auto___37951 = ["calling:","chrome.runtime.getBackgroundPage"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___37950)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___37949)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___37950.apply(null,prefix__30573__auto___37951.concat(final_args_array_37934));
} else {
}

var target_37936 = (function (){var target_obj_37942 = ns_37935;
var _STAR_runtime_state_STAR_37944 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_37942,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_37943 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_37942,(1),"getBackgroundPage",true))?(target_obj_37942["getBackgroundPage"]):null);
if(!((next_obj_37943 == null))){
return next_obj_37943;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_37944;
}})();
return target_37936.apply(ns_37935,final_args_array_37934);
})();

return callback_chan_37931;
});
chromex.ext.runtime.open_options_page_STAR_ = (function chromex$ext$runtime$open_options_page_STAR_(config){
var callback_chan_37965 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__);
})();
var marshalled_callback_37967_37978 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","open-options-page","chromex.ext.runtime/open-options-page",-236868215),new cljs.core.Keyword(null,"name","name",1843675177),"openOptionsPage",new cljs.core.Keyword(null,"since","since",315379842),"42",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_37965);
})();
var result_37966_37979 = (function (){var final_args_array_37968 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_37967_37978,"callback",true], null)], null),"chrome.runtime.openOptionsPage");
var ns_37969 = (function (){var target_obj_37971 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_37974 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_37971,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_37972 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_37971,(0),"chrome",true))?(target_obj_37971["chrome"]):null);
var next_obj_37973 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_37972,(0),"runtime",true))?(next_obj_37972["runtime"]):null);
return next_obj_37973;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_37974;
}})();
var config__30575__auto___37980 = config;
var api_check_fn__30576__auto___37981 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___37980);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___37981)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___37980)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___37981.call(null,"chrome.runtime.openOptionsPage",ns_37969,"openOptionsPage");

var config__30571__auto___37982 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___37982))){
var logger__30572__auto___37983 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___37982);
var prefix__30573__auto___37984 = ["calling:","chrome.runtime.openOptionsPage"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___37983)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___37982)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___37983.apply(null,prefix__30573__auto___37984.concat(final_args_array_37968));
} else {
}

var target_37970 = (function (){var target_obj_37975 = ns_37969;
var _STAR_runtime_state_STAR_37977 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_37975,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_37976 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_37975,(1),"openOptionsPage",true))?(target_obj_37975["openOptionsPage"]):null);
if(!((next_obj_37976 == null))){
return next_obj_37976;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_37977;
}})();
return target_37970.apply(ns_37969,final_args_array_37968);
})();

return callback_chan_37965;
});
chromex.ext.runtime.get_manifest_STAR_ = (function chromex$ext$runtime$get_manifest_STAR_(config){
var result_37996 = (function (){var final_args_array_37997 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.runtime.getManifest");
var ns_37998 = (function (){var target_obj_38000 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_38003 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38000,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38001 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38000,(0),"chrome",true))?(target_obj_38000["chrome"]):null);
var next_obj_38002 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_38001,(0),"runtime",true))?(next_obj_38001["runtime"]):null);
return next_obj_38002;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38003;
}})();
var config__30575__auto___38007 = config;
var api_check_fn__30576__auto___38008 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___38007);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___38008)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___38007)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___38008.call(null,"chrome.runtime.getManifest",ns_37998,"getManifest");

var config__30571__auto___38009 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38009))){
var logger__30572__auto___38010 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38009);
var prefix__30573__auto___38011 = ["calling:","chrome.runtime.getManifest"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___38010)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___38009)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___38010.apply(null,prefix__30573__auto___38011.concat(final_args_array_37997));
} else {
}

var target_37999 = (function (){var target_obj_38004 = ns_37998;
var _STAR_runtime_state_STAR_38006 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38004,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38005 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38004,(1),"getManifest",true))?(target_obj_38004["getManifest"]):null);
if(!((next_obj_38005 == null))){
return next_obj_38005;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38006;
}})();
return target_37999.apply(ns_37998,final_args_array_37997);
})();
return result_37996;
});
chromex.ext.runtime.get_url_STAR_ = (function chromex$ext$runtime$get_url_STAR_(config,path){
var marshalled_path_38026 = (function (){var omit_test_38030 = path;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_38030,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_38030;
}
})();
var result_38025 = (function (){var final_args_array_38027 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_path_38026,"path",null], null)], null),"chrome.runtime.getURL");
var ns_38028 = (function (){var target_obj_38031 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_38034 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38031,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38032 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38031,(0),"chrome",true))?(target_obj_38031["chrome"]):null);
var next_obj_38033 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_38032,(0),"runtime",true))?(next_obj_38032["runtime"]):null);
return next_obj_38033;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38034;
}})();
var config__30575__auto___38038 = config;
var api_check_fn__30576__auto___38039 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___38038);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___38039)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___38038)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___38039.call(null,"chrome.runtime.getURL",ns_38028,"getURL");

var config__30571__auto___38040 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38040))){
var logger__30572__auto___38041 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38040);
var prefix__30573__auto___38042 = ["calling:","chrome.runtime.getURL"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___38041)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___38040)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___38041.apply(null,prefix__30573__auto___38042.concat(final_args_array_38027));
} else {
}

var target_38029 = (function (){var target_obj_38035 = ns_38028;
var _STAR_runtime_state_STAR_38037 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38035,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38036 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38035,(1),"getURL",true))?(target_obj_38035["getURL"]):null);
if(!((next_obj_38036 == null))){
return next_obj_38036;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38037;
}})();
return target_38029.apply(ns_38028,final_args_array_38027);
})();
return result_38025;
});
chromex.ext.runtime.set_uninstall_url_STAR_ = (function chromex$ext$runtime$set_uninstall_url_STAR_(config,url){
var callback_chan_38058 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__);
})();
var marshalled_url_38060_38073 = (function (){var omit_test_38065 = url;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_38065,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_38065;
}
})();
var marshalled_callback_38061_38074 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","set-uninstall-url","chromex.ext.runtime/set-uninstall-url",-1010845784),new cljs.core.Keyword(null,"name","name",1843675177),"setUninstallURL",new cljs.core.Keyword(null,"since","since",315379842),"41",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"url",new cljs.core.Keyword(null,"type","type",1174270348),"string"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_38058);
})();
var result_38059_38075 = (function (){var final_args_array_38062 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_url_38060_38073,"url",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_38061_38074,"callback",true], null)], null),"chrome.runtime.setUninstallURL");
var ns_38063 = (function (){var target_obj_38066 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_38069 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38066,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38067 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38066,(0),"chrome",true))?(target_obj_38066["chrome"]):null);
var next_obj_38068 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_38067,(0),"runtime",true))?(next_obj_38067["runtime"]):null);
return next_obj_38068;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38069;
}})();
var config__30575__auto___38076 = config;
var api_check_fn__30576__auto___38077 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___38076);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___38077)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___38076)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___38077.call(null,"chrome.runtime.setUninstallURL",ns_38063,"setUninstallURL");

var config__30571__auto___38078 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38078))){
var logger__30572__auto___38079 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38078);
var prefix__30573__auto___38080 = ["calling:","chrome.runtime.setUninstallURL"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___38079)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___38078)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___38079.apply(null,prefix__30573__auto___38080.concat(final_args_array_38062));
} else {
}

var target_38064 = (function (){var target_obj_38070 = ns_38063;
var _STAR_runtime_state_STAR_38072 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38070,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38071 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38070,(1),"setUninstallURL",true))?(target_obj_38070["setUninstallURL"]):null);
if(!((next_obj_38071 == null))){
return next_obj_38071;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38072;
}})();
return target_38064.apply(ns_38063,final_args_array_38062);
})();

return callback_chan_38058;
});
chromex.ext.runtime.reload_STAR_ = (function chromex$ext$runtime$reload_STAR_(config){
var result_38092 = (function (){var final_args_array_38093 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.runtime.reload");
var ns_38094 = (function (){var target_obj_38096 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_38099 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38096,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38097 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38096,(0),"chrome",true))?(target_obj_38096["chrome"]):null);
var next_obj_38098 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_38097,(0),"runtime",true))?(next_obj_38097["runtime"]):null);
return next_obj_38098;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38099;
}})();
var config__30575__auto___38103 = config;
var api_check_fn__30576__auto___38104 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___38103);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___38104)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___38103)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___38104.call(null,"chrome.runtime.reload",ns_38094,"reload");

var config__30571__auto___38105 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38105))){
var logger__30572__auto___38106 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38105);
var prefix__30573__auto___38107 = ["calling:","chrome.runtime.reload"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___38106)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___38105)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___38106.apply(null,prefix__30573__auto___38107.concat(final_args_array_38093));
} else {
}

var target_38095 = (function (){var target_obj_38100 = ns_38094;
var _STAR_runtime_state_STAR_38102 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38100,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38101 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38100,(1),"reload",true))?(target_obj_38100["reload"]):null);
if(!((next_obj_38101 == null))){
return next_obj_38101;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38102;
}})();
return target_38095.apply(ns_38094,final_args_array_38093);
})();
return result_38092;
});
chromex.ext.runtime.request_update_check_STAR_ = (function chromex$ext$runtime$request_update_check_STAR_(config){
var callback_chan_38123 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__);
})();
var marshalled_callback_38125_38138 = ((function (callback_chan_38123){
return (function (cb_status_38129,cb_details_38130){
return (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","request-update-check","chromex.ext.runtime/request-update-check",-1504783873),new cljs.core.Keyword(null,"name","name",1843675177),"requestUpdateCheck",new cljs.core.Keyword(null,"since","since",315379842),"25",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"status",new cljs.core.Keyword(null,"type","type",1174270348),"runtime.RequestUpdateCheckStatus"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"details",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"object"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_38123);
})().call(null,cb_status_38129,cb_details_38130);
});})(callback_chan_38123))
;
var result_38124_38139 = (function (){var final_args_array_38126 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_38125_38138,"callback",null], null)], null),"chrome.runtime.requestUpdateCheck");
var ns_38127 = (function (){var target_obj_38131 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_38134 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38131,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38132 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38131,(0),"chrome",true))?(target_obj_38131["chrome"]):null);
var next_obj_38133 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_38132,(0),"runtime",true))?(next_obj_38132["runtime"]):null);
return next_obj_38133;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38134;
}})();
var config__30575__auto___38140 = config;
var api_check_fn__30576__auto___38141 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___38140);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___38141)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___38140)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___38141.call(null,"chrome.runtime.requestUpdateCheck",ns_38127,"requestUpdateCheck");

var config__30571__auto___38142 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38142))){
var logger__30572__auto___38143 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38142);
var prefix__30573__auto___38144 = ["calling:","chrome.runtime.requestUpdateCheck"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___38143)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___38142)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___38143.apply(null,prefix__30573__auto___38144.concat(final_args_array_38126));
} else {
}

var target_38128 = (function (){var target_obj_38135 = ns_38127;
var _STAR_runtime_state_STAR_38137 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38135,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38136 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38135,(1),"requestUpdateCheck",true))?(target_obj_38135["requestUpdateCheck"]):null);
if(!((next_obj_38136 == null))){
return next_obj_38136;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38137;
}})();
return target_38128.apply(ns_38127,final_args_array_38126);
})();

return callback_chan_38123;
});
chromex.ext.runtime.restart_STAR_ = (function chromex$ext$runtime$restart_STAR_(config){
var result_38156 = (function (){var final_args_array_38157 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.runtime.restart");
var ns_38158 = (function (){var target_obj_38160 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_38163 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38160,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38161 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38160,(0),"chrome",true))?(target_obj_38160["chrome"]):null);
var next_obj_38162 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_38161,(0),"runtime",true))?(next_obj_38161["runtime"]):null);
return next_obj_38162;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38163;
}})();
var config__30575__auto___38167 = config;
var api_check_fn__30576__auto___38168 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___38167);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___38168)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___38167)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___38168.call(null,"chrome.runtime.restart",ns_38158,"restart");

var config__30571__auto___38169 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38169))){
var logger__30572__auto___38170 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38169);
var prefix__30573__auto___38171 = ["calling:","chrome.runtime.restart"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___38170)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___38169)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___38170.apply(null,prefix__30573__auto___38171.concat(final_args_array_38157));
} else {
}

var target_38159 = (function (){var target_obj_38164 = ns_38158;
var _STAR_runtime_state_STAR_38166 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38164,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38165 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38164,(1),"restart",true))?(target_obj_38164["restart"]):null);
if(!((next_obj_38165 == null))){
return next_obj_38165;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38166;
}})();
return target_38159.apply(ns_38158,final_args_array_38157);
})();
return result_38156;
});
chromex.ext.runtime.restart_after_delay_STAR_ = (function chromex$ext$runtime$restart_after_delay_STAR_(config,seconds){
var callback_chan_38187 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__);
})();
var marshalled_seconds_38189_38202 = (function (){var omit_test_38194 = seconds;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_38194,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_38194;
}
})();
var marshalled_callback_38190_38203 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","restart-after-delay","chromex.ext.runtime/restart-after-delay",-1851581361),new cljs.core.Keyword(null,"name","name",1843675177),"restartAfterDelay",new cljs.core.Keyword(null,"since","since",315379842),"53",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"seconds",new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_38187);
})();
var result_38188_38204 = (function (){var final_args_array_38191 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_seconds_38189_38202,"seconds",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_38190_38203,"callback",true], null)], null),"chrome.runtime.restartAfterDelay");
var ns_38192 = (function (){var target_obj_38195 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_38198 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38195,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38196 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38195,(0),"chrome",true))?(target_obj_38195["chrome"]):null);
var next_obj_38197 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_38196,(0),"runtime",true))?(next_obj_38196["runtime"]):null);
return next_obj_38197;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38198;
}})();
var config__30575__auto___38205 = config;
var api_check_fn__30576__auto___38206 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___38205);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___38206)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___38205)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___38206.call(null,"chrome.runtime.restartAfterDelay",ns_38192,"restartAfterDelay");

var config__30571__auto___38207 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38207))){
var logger__30572__auto___38208 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38207);
var prefix__30573__auto___38209 = ["calling:","chrome.runtime.restartAfterDelay"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___38208)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___38207)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___38208.apply(null,prefix__30573__auto___38209.concat(final_args_array_38191));
} else {
}

var target_38193 = (function (){var target_obj_38199 = ns_38192;
var _STAR_runtime_state_STAR_38201 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38199,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38200 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38199,(1),"restartAfterDelay",true))?(target_obj_38199["restartAfterDelay"]):null);
if(!((next_obj_38200 == null))){
return next_obj_38200;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38201;
}})();
return target_38193.apply(ns_38192,final_args_array_38191);
})();

return callback_chan_38187;
});
chromex.ext.runtime.connect_STAR_ = (function chromex$ext$runtime$connect_STAR_(config,extension_id,connect_info){
var marshalled_extension_id_38226 = (function (){var omit_test_38231 = extension_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_38231,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_38231;
}
})();
var marshalled_connect_info_38227 = (function (){var omit_test_38232 = connect_info;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_38232,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_38232;
}
})();
var result_38225 = (function (){var final_args_array_38228 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_extension_id_38226,"extension-id",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_connect_info_38227,"connect-info",true], null)], null),"chrome.runtime.connect");
var ns_38229 = (function (){var target_obj_38233 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_38236 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38233,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38234 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38233,(0),"chrome",true))?(target_obj_38233["chrome"]):null);
var next_obj_38235 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_38234,(0),"runtime",true))?(next_obj_38234["runtime"]):null);
return next_obj_38235;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38236;
}})();
var config__30575__auto___38240 = config;
var api_check_fn__30576__auto___38241 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___38240);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___38241)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___38240)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___38241.call(null,"chrome.runtime.connect",ns_38229,"connect");

var config__30571__auto___38242 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38242))){
var logger__30572__auto___38243 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38242);
var prefix__30573__auto___38244 = ["calling:","chrome.runtime.connect"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___38243)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___38242)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___38243.apply(null,prefix__30573__auto___38244.concat(final_args_array_38228));
} else {
}

var target_38230 = (function (){var target_obj_38237 = ns_38229;
var _STAR_runtime_state_STAR_38239 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38237,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38238 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38237,(1),"connect",true))?(target_obj_38237["connect"]):null);
if(!((next_obj_38238 == null))){
return next_obj_38238;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38239;
}})();
return target_38230.apply(ns_38229,final_args_array_38228);
})();
return chromex.marshalling.from_native_chrome_port.call(null,config,result_38225);
});
chromex.ext.runtime.connect_native_STAR_ = (function chromex$ext$runtime$connect_native_STAR_(config,application){
var marshalled_application_38259 = (function (){var omit_test_38263 = application;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_38263,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_38263;
}
})();
var result_38258 = (function (){var final_args_array_38260 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_application_38259,"application",null], null)], null),"chrome.runtime.connectNative");
var ns_38261 = (function (){var target_obj_38264 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_38267 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38264,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38265 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38264,(0),"chrome",true))?(target_obj_38264["chrome"]):null);
var next_obj_38266 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_38265,(0),"runtime",true))?(next_obj_38265["runtime"]):null);
return next_obj_38266;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38267;
}})();
var config__30575__auto___38271 = config;
var api_check_fn__30576__auto___38272 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___38271);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___38272)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___38271)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___38272.call(null,"chrome.runtime.connectNative",ns_38261,"connectNative");

var config__30571__auto___38273 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38273))){
var logger__30572__auto___38274 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38273);
var prefix__30573__auto___38275 = ["calling:","chrome.runtime.connectNative"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___38274)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___38273)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___38274.apply(null,prefix__30573__auto___38275.concat(final_args_array_38260));
} else {
}

var target_38262 = (function (){var target_obj_38268 = ns_38261;
var _STAR_runtime_state_STAR_38270 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38268,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38269 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38268,(1),"connectNative",true))?(target_obj_38268["connectNative"]):null);
if(!((next_obj_38269 == null))){
return next_obj_38269;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38270;
}})();
return target_38262.apply(ns_38261,final_args_array_38260);
})();
return chromex.marshalling.from_native_chrome_port.call(null,config,result_38258);
});
chromex.ext.runtime.send_message_STAR_ = (function chromex$ext$runtime$send_message_STAR_(config,extension_id,message,options){
var callback_chan_38296 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__);
})();
var marshalled_extension_id_38298_38316 = (function (){var omit_test_38305 = extension_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_38305,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_38305;
}
})();
var marshalled_message_38299_38317 = (function (){var omit_test_38306 = message;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_38306,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_38306;
}
})();
var marshalled_options_38300_38318 = (function (){var omit_test_38307 = options;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_38307,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_38307;
}
})();
var marshalled_response_callback_38301_38319 = ((function (marshalled_extension_id_38298_38316,marshalled_message_38299_38317,marshalled_options_38300_38318,callback_chan_38296){
return (function (cb_response_38308){
return (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","send-message","chromex.ext.runtime/send-message",-500803608),new cljs.core.Keyword(null,"name","name",1843675177),"sendMessage",new cljs.core.Keyword(null,"since","since",315379842),"26",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"extension-id",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"string"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"message",new cljs.core.Keyword(null,"type","type",1174270348),"any"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"options",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"object"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"response-callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"response",new cljs.core.Keyword(null,"type","type",1174270348),"any"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_38296);
})().call(null,cb_response_38308);
});})(marshalled_extension_id_38298_38316,marshalled_message_38299_38317,marshalled_options_38300_38318,callback_chan_38296))
;
var result_38297_38320 = (function (){var final_args_array_38302 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_extension_id_38298_38316,"extension-id",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_message_38299_38317,"message",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_options_38300_38318,"options",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_response_callback_38301_38319,"response-callback",true], null)], null),"chrome.runtime.sendMessage");
var ns_38303 = (function (){var target_obj_38309 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_38312 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38309,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38310 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38309,(0),"chrome",true))?(target_obj_38309["chrome"]):null);
var next_obj_38311 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_38310,(0),"runtime",true))?(next_obj_38310["runtime"]):null);
return next_obj_38311;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38312;
}})();
var config__30575__auto___38321 = config;
var api_check_fn__30576__auto___38322 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___38321);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___38322)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___38321)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___38322.call(null,"chrome.runtime.sendMessage",ns_38303,"sendMessage");

var config__30571__auto___38323 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38323))){
var logger__30572__auto___38324 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38323);
var prefix__30573__auto___38325 = ["calling:","chrome.runtime.sendMessage"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___38324)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___38323)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___38324.apply(null,prefix__30573__auto___38325.concat(final_args_array_38302));
} else {
}

var target_38304 = (function (){var target_obj_38313 = ns_38303;
var _STAR_runtime_state_STAR_38315 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38313,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38314 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38313,(1),"sendMessage",true))?(target_obj_38313["sendMessage"]):null);
if(!((next_obj_38314 == null))){
return next_obj_38314;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38315;
}})();
return target_38304.apply(ns_38303,final_args_array_38302);
})();

return callback_chan_38296;
});
chromex.ext.runtime.send_native_message_STAR_ = (function chromex$ext$runtime$send_native_message_STAR_(config,application,message){
var callback_chan_38344 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__);
})();
var marshalled_application_38346_38362 = (function (){var omit_test_38352 = application;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_38352,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_38352;
}
})();
var marshalled_message_38347_38363 = (function (){var omit_test_38353 = message;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_38353,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_38353;
}
})();
var marshalled_response_callback_38348_38364 = ((function (marshalled_application_38346_38362,marshalled_message_38347_38363,callback_chan_38344){
return (function (cb_response_38354){
return (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","send-native-message","chromex.ext.runtime/send-native-message",-489769559),new cljs.core.Keyword(null,"name","name",1843675177),"sendNativeMessage",new cljs.core.Keyword(null,"since","since",315379842),"28",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"application",new cljs.core.Keyword(null,"type","type",1174270348),"string"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"message",new cljs.core.Keyword(null,"type","type",1174270348),"object"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"response-callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"response",new cljs.core.Keyword(null,"type","type",1174270348),"any"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_38344);
})().call(null,cb_response_38354);
});})(marshalled_application_38346_38362,marshalled_message_38347_38363,callback_chan_38344))
;
var result_38345_38365 = (function (){var final_args_array_38349 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_application_38346_38362,"application",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_message_38347_38363,"message",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_response_callback_38348_38364,"response-callback",true], null)], null),"chrome.runtime.sendNativeMessage");
var ns_38350 = (function (){var target_obj_38355 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_38358 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38355,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38356 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38355,(0),"chrome",true))?(target_obj_38355["chrome"]):null);
var next_obj_38357 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_38356,(0),"runtime",true))?(next_obj_38356["runtime"]):null);
return next_obj_38357;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38358;
}})();
var config__30575__auto___38366 = config;
var api_check_fn__30576__auto___38367 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___38366);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___38367)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___38366)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___38367.call(null,"chrome.runtime.sendNativeMessage",ns_38350,"sendNativeMessage");

var config__30571__auto___38368 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38368))){
var logger__30572__auto___38369 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38368);
var prefix__30573__auto___38370 = ["calling:","chrome.runtime.sendNativeMessage"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___38369)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___38368)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___38369.apply(null,prefix__30573__auto___38370.concat(final_args_array_38349));
} else {
}

var target_38351 = (function (){var target_obj_38359 = ns_38350;
var _STAR_runtime_state_STAR_38361 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38359,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38360 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38359,(1),"sendNativeMessage",true))?(target_obj_38359["sendNativeMessage"]):null);
if(!((next_obj_38360 == null))){
return next_obj_38360;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38361;
}})();
return target_38351.apply(ns_38350,final_args_array_38349);
})();

return callback_chan_38344;
});
chromex.ext.runtime.get_platform_info_STAR_ = (function chromex$ext$runtime$get_platform_info_STAR_(config){
var callback_chan_38385 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__);
})();
var marshalled_callback_38387_38399 = ((function (callback_chan_38385){
return (function (cb_platform_info_38391){
return (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","get-platform-info","chromex.ext.runtime/get-platform-info",573309082),new cljs.core.Keyword(null,"name","name",1843675177),"getPlatformInfo",new cljs.core.Keyword(null,"since","since",315379842),"29",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"platform-info",new cljs.core.Keyword(null,"type","type",1174270348),"runtime.PlatformInfo"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_38385);
})().call(null,cb_platform_info_38391);
});})(callback_chan_38385))
;
var result_38386_38400 = (function (){var final_args_array_38388 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_38387_38399,"callback",null], null)], null),"chrome.runtime.getPlatformInfo");
var ns_38389 = (function (){var target_obj_38392 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_38395 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38392,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38393 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38392,(0),"chrome",true))?(target_obj_38392["chrome"]):null);
var next_obj_38394 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_38393,(0),"runtime",true))?(next_obj_38393["runtime"]):null);
return next_obj_38394;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38395;
}})();
var config__30575__auto___38401 = config;
var api_check_fn__30576__auto___38402 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___38401);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___38402)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___38401)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___38402.call(null,"chrome.runtime.getPlatformInfo",ns_38389,"getPlatformInfo");

var config__30571__auto___38403 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38403))){
var logger__30572__auto___38404 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38403);
var prefix__30573__auto___38405 = ["calling:","chrome.runtime.getPlatformInfo"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___38404)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___38403)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___38404.apply(null,prefix__30573__auto___38405.concat(final_args_array_38388));
} else {
}

var target_38390 = (function (){var target_obj_38396 = ns_38389;
var _STAR_runtime_state_STAR_38398 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38396,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38397 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38396,(1),"getPlatformInfo",true))?(target_obj_38396["getPlatformInfo"]):null);
if(!((next_obj_38397 == null))){
return next_obj_38397;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38398;
}})();
return target_38390.apply(ns_38389,final_args_array_38388);
})();

return callback_chan_38385;
});
chromex.ext.runtime.get_package_directory_entry_STAR_ = (function chromex$ext$runtime$get_package_directory_entry_STAR_(config){
var callback_chan_38420 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__);
})();
var marshalled_callback_38422_38434 = ((function (callback_chan_38420){
return (function (cb_directory_entry_38426){
return (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","get-package-directory-entry","chromex.ext.runtime/get-package-directory-entry",-1404865573),new cljs.core.Keyword(null,"name","name",1843675177),"getPackageDirectoryEntry",new cljs.core.Keyword(null,"since","since",315379842),"29",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"directory-entry",new cljs.core.Keyword(null,"type","type",1174270348),"DirectoryEntry"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_38420);
})().call(null,cb_directory_entry_38426);
});})(callback_chan_38420))
;
var result_38421_38435 = (function (){var final_args_array_38423 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_38422_38434,"callback",null], null)], null),"chrome.runtime.getPackageDirectoryEntry");
var ns_38424 = (function (){var target_obj_38427 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_38430 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38427,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38428 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38427,(0),"chrome",true))?(target_obj_38427["chrome"]):null);
var next_obj_38429 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_38428,(0),"runtime",true))?(next_obj_38428["runtime"]):null);
return next_obj_38429;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38430;
}})();
var config__30575__auto___38436 = config;
var api_check_fn__30576__auto___38437 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___38436);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___38437)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___38436)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___38437.call(null,"chrome.runtime.getPackageDirectoryEntry",ns_38424,"getPackageDirectoryEntry");

var config__30571__auto___38438 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38438))){
var logger__30572__auto___38439 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38438);
var prefix__30573__auto___38440 = ["calling:","chrome.runtime.getPackageDirectoryEntry"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___38439)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___38438)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___38439.apply(null,prefix__30573__auto___38440.concat(final_args_array_38423));
} else {
}

var target_38425 = (function (){var target_obj_38431 = ns_38424;
var _STAR_runtime_state_STAR_38433 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38431,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38432 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38431,(1),"getPackageDirectoryEntry",true))?(target_obj_38431["getPackageDirectoryEntry"]):null);
if(!((next_obj_38432 == null))){
return next_obj_38432;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38433;
}})();
return target_38425.apply(ns_38424,final_args_array_38423);
})();

return callback_chan_38420;
});
chromex.ext.runtime.on_startup_STAR_ = (function chromex$ext$runtime$on_startup_STAR_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___38454 = arguments.length;
var i__29681__auto___38455 = (0);
while(true){
if((i__29681__auto___38455 < len__29680__auto___38454)){
args__29687__auto__.push((arguments[i__29681__auto___38455]));

var G__38456 = (i__29681__auto___38455 + (1));
i__29681__auto___38455 = G__38456;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((2) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_startup_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29688__auto__);
});

chromex.ext.runtime.on_startup_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_38444 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-startup","chromex.ext.runtime/on-startup",-1208972204),channel);
})();
var handler_fn_38445 = event_fn_38444;
var logging_fn__37663__auto__ = ((function (event_fn_38444,handler_fn_38445){
return (function (){
var config__30571__auto___38457 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38457))){
var logger__30572__auto___38458 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38457);
var prefix__30573__auto___38459 = ["event:","chrome.runtime.onStartup"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___38458)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___38457)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___38458.apply(null,prefix__30573__auto___38459.concat(cljs.core.into_array.call(null,cljs.core.PersistentVector.EMPTY)));
} else {
}

return handler_fn_38445.call(null);
});})(event_fn_38444,handler_fn_38445))
;
var ns_obj_38446 = (function (){var target_obj_38447 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_38450 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38447,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38448 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38447,(0),"chrome",true))?(target_obj_38447["chrome"]):null);
var next_obj_38449 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_38448,(0),"runtime",true))?(next_obj_38448["runtime"]):null);
return next_obj_38449;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38450;
}})();
var config__30575__auto___38460 = config;
var api_check_fn__30576__auto___38461 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___38460);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___38461)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___38460)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___38461.call(null,"chrome.runtime.onStartup",ns_obj_38446,"onStartup");

var event_obj__37664__auto__ = (function (){var target_obj_38451 = ns_obj_38446;
var _STAR_runtime_state_STAR_38453 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38451,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38452 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38451,(0),"onStartup",true))?(target_obj_38451["onStartup"]):null);
return next_obj_38452;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38453;
}})();
var result__37665__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__37664__auto__,logging_fn__37663__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__37665__auto__,args);

return result__37665__auto__;
});

chromex.ext.runtime.on_startup_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_startup_STAR_.cljs$lang$applyTo = (function (seq38441){
var G__38442 = cljs.core.first.call(null,seq38441);
var seq38441__$1 = cljs.core.next.call(null,seq38441);
var G__38443 = cljs.core.first.call(null,seq38441__$1);
var seq38441__$2 = cljs.core.next.call(null,seq38441__$1);
return chromex.ext.runtime.on_startup_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__38442,G__38443,seq38441__$2);
});

chromex.ext.runtime.on_installed_STAR_ = (function chromex$ext$runtime$on_installed_STAR_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___38477 = arguments.length;
var i__29681__auto___38478 = (0);
while(true){
if((i__29681__auto___38478 < len__29680__auto___38477)){
args__29687__auto__.push((arguments[i__29681__auto___38478]));

var G__38479 = (i__29681__auto___38478 + (1));
i__29681__auto___38478 = G__38479;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((2) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_installed_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29688__auto__);
});

chromex.ext.runtime.on_installed_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_38465 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-installed","chromex.ext.runtime/on-installed",1653814653),channel);
})();
var handler_fn_38466 = ((function (event_fn_38465){
return (function (cb_details_38468){
return event_fn_38465.call(null,cb_details_38468);
});})(event_fn_38465))
;
var logging_fn__37663__auto__ = ((function (event_fn_38465,handler_fn_38466){
return (function (cb_param_details_38469){
var config__30571__auto___38480 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38480))){
var logger__30572__auto___38481 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38480);
var prefix__30573__auto___38482 = ["event:","chrome.runtime.onInstalled"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___38481)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___38480)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___38481.apply(null,prefix__30573__auto___38482.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_details_38469], null))));
} else {
}

return handler_fn_38466.call(null,cb_param_details_38469);
});})(event_fn_38465,handler_fn_38466))
;
var ns_obj_38467 = (function (){var target_obj_38470 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_38473 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38470,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38471 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38470,(0),"chrome",true))?(target_obj_38470["chrome"]):null);
var next_obj_38472 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_38471,(0),"runtime",true))?(next_obj_38471["runtime"]):null);
return next_obj_38472;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38473;
}})();
var config__30575__auto___38483 = config;
var api_check_fn__30576__auto___38484 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___38483);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___38484)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___38483)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___38484.call(null,"chrome.runtime.onInstalled",ns_obj_38467,"onInstalled");

var event_obj__37664__auto__ = (function (){var target_obj_38474 = ns_obj_38467;
var _STAR_runtime_state_STAR_38476 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38474,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38475 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38474,(0),"onInstalled",true))?(target_obj_38474["onInstalled"]):null);
return next_obj_38475;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38476;
}})();
var result__37665__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__37664__auto__,logging_fn__37663__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__37665__auto__,args);

return result__37665__auto__;
});

chromex.ext.runtime.on_installed_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_installed_STAR_.cljs$lang$applyTo = (function (seq38462){
var G__38463 = cljs.core.first.call(null,seq38462);
var seq38462__$1 = cljs.core.next.call(null,seq38462);
var G__38464 = cljs.core.first.call(null,seq38462__$1);
var seq38462__$2 = cljs.core.next.call(null,seq38462__$1);
return chromex.ext.runtime.on_installed_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__38463,G__38464,seq38462__$2);
});

chromex.ext.runtime.on_suspend_STAR_ = (function chromex$ext$runtime$on_suspend_STAR_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___38498 = arguments.length;
var i__29681__auto___38499 = (0);
while(true){
if((i__29681__auto___38499 < len__29680__auto___38498)){
args__29687__auto__.push((arguments[i__29681__auto___38499]));

var G__38500 = (i__29681__auto___38499 + (1));
i__29681__auto___38499 = G__38500;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((2) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_suspend_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29688__auto__);
});

chromex.ext.runtime.on_suspend_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_38488 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-suspend","chromex.ext.runtime/on-suspend",-1228920175),channel);
})();
var handler_fn_38489 = event_fn_38488;
var logging_fn__37663__auto__ = ((function (event_fn_38488,handler_fn_38489){
return (function (){
var config__30571__auto___38501 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38501))){
var logger__30572__auto___38502 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38501);
var prefix__30573__auto___38503 = ["event:","chrome.runtime.onSuspend"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___38502)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___38501)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___38502.apply(null,prefix__30573__auto___38503.concat(cljs.core.into_array.call(null,cljs.core.PersistentVector.EMPTY)));
} else {
}

return handler_fn_38489.call(null);
});})(event_fn_38488,handler_fn_38489))
;
var ns_obj_38490 = (function (){var target_obj_38491 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_38494 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38491,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38492 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38491,(0),"chrome",true))?(target_obj_38491["chrome"]):null);
var next_obj_38493 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_38492,(0),"runtime",true))?(next_obj_38492["runtime"]):null);
return next_obj_38493;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38494;
}})();
var config__30575__auto___38504 = config;
var api_check_fn__30576__auto___38505 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___38504);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___38505)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___38504)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___38505.call(null,"chrome.runtime.onSuspend",ns_obj_38490,"onSuspend");

var event_obj__37664__auto__ = (function (){var target_obj_38495 = ns_obj_38490;
var _STAR_runtime_state_STAR_38497 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38495,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38496 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38495,(0),"onSuspend",true))?(target_obj_38495["onSuspend"]):null);
return next_obj_38496;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38497;
}})();
var result__37665__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__37664__auto__,logging_fn__37663__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__37665__auto__,args);

return result__37665__auto__;
});

chromex.ext.runtime.on_suspend_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_suspend_STAR_.cljs$lang$applyTo = (function (seq38485){
var G__38486 = cljs.core.first.call(null,seq38485);
var seq38485__$1 = cljs.core.next.call(null,seq38485);
var G__38487 = cljs.core.first.call(null,seq38485__$1);
var seq38485__$2 = cljs.core.next.call(null,seq38485__$1);
return chromex.ext.runtime.on_suspend_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__38486,G__38487,seq38485__$2);
});

chromex.ext.runtime.on_suspend_canceled_STAR_ = (function chromex$ext$runtime$on_suspend_canceled_STAR_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___38519 = arguments.length;
var i__29681__auto___38520 = (0);
while(true){
if((i__29681__auto___38520 < len__29680__auto___38519)){
args__29687__auto__.push((arguments[i__29681__auto___38520]));

var G__38521 = (i__29681__auto___38520 + (1));
i__29681__auto___38520 = G__38521;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((2) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_suspend_canceled_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29688__auto__);
});

chromex.ext.runtime.on_suspend_canceled_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_38509 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-suspend-canceled","chromex.ext.runtime/on-suspend-canceled",-827432771),channel);
})();
var handler_fn_38510 = event_fn_38509;
var logging_fn__37663__auto__ = ((function (event_fn_38509,handler_fn_38510){
return (function (){
var config__30571__auto___38522 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38522))){
var logger__30572__auto___38523 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38522);
var prefix__30573__auto___38524 = ["event:","chrome.runtime.onSuspendCanceled"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___38523)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___38522)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___38523.apply(null,prefix__30573__auto___38524.concat(cljs.core.into_array.call(null,cljs.core.PersistentVector.EMPTY)));
} else {
}

return handler_fn_38510.call(null);
});})(event_fn_38509,handler_fn_38510))
;
var ns_obj_38511 = (function (){var target_obj_38512 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_38515 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38512,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38513 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38512,(0),"chrome",true))?(target_obj_38512["chrome"]):null);
var next_obj_38514 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_38513,(0),"runtime",true))?(next_obj_38513["runtime"]):null);
return next_obj_38514;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38515;
}})();
var config__30575__auto___38525 = config;
var api_check_fn__30576__auto___38526 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___38525);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___38526)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___38525)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___38526.call(null,"chrome.runtime.onSuspendCanceled",ns_obj_38511,"onSuspendCanceled");

var event_obj__37664__auto__ = (function (){var target_obj_38516 = ns_obj_38511;
var _STAR_runtime_state_STAR_38518 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38516,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38517 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38516,(0),"onSuspendCanceled",true))?(target_obj_38516["onSuspendCanceled"]):null);
return next_obj_38517;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38518;
}})();
var result__37665__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__37664__auto__,logging_fn__37663__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__37665__auto__,args);

return result__37665__auto__;
});

chromex.ext.runtime.on_suspend_canceled_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_suspend_canceled_STAR_.cljs$lang$applyTo = (function (seq38506){
var G__38507 = cljs.core.first.call(null,seq38506);
var seq38506__$1 = cljs.core.next.call(null,seq38506);
var G__38508 = cljs.core.first.call(null,seq38506__$1);
var seq38506__$2 = cljs.core.next.call(null,seq38506__$1);
return chromex.ext.runtime.on_suspend_canceled_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__38507,G__38508,seq38506__$2);
});

chromex.ext.runtime.on_update_available_STAR_ = (function chromex$ext$runtime$on_update_available_STAR_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___38542 = arguments.length;
var i__29681__auto___38543 = (0);
while(true){
if((i__29681__auto___38543 < len__29680__auto___38542)){
args__29687__auto__.push((arguments[i__29681__auto___38543]));

var G__38544 = (i__29681__auto___38543 + (1));
i__29681__auto___38543 = G__38544;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((2) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_update_available_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29688__auto__);
});

chromex.ext.runtime.on_update_available_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_38530 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-update-available","chromex.ext.runtime/on-update-available",-1242137249),channel);
})();
var handler_fn_38531 = ((function (event_fn_38530){
return (function (cb_details_38533){
return event_fn_38530.call(null,cb_details_38533);
});})(event_fn_38530))
;
var logging_fn__37663__auto__ = ((function (event_fn_38530,handler_fn_38531){
return (function (cb_param_details_38534){
var config__30571__auto___38545 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38545))){
var logger__30572__auto___38546 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38545);
var prefix__30573__auto___38547 = ["event:","chrome.runtime.onUpdateAvailable"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___38546)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___38545)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___38546.apply(null,prefix__30573__auto___38547.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_details_38534], null))));
} else {
}

return handler_fn_38531.call(null,cb_param_details_38534);
});})(event_fn_38530,handler_fn_38531))
;
var ns_obj_38532 = (function (){var target_obj_38535 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_38538 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38535,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38536 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38535,(0),"chrome",true))?(target_obj_38535["chrome"]):null);
var next_obj_38537 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_38536,(0),"runtime",true))?(next_obj_38536["runtime"]):null);
return next_obj_38537;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38538;
}})();
var config__30575__auto___38548 = config;
var api_check_fn__30576__auto___38549 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___38548);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___38549)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___38548)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___38549.call(null,"chrome.runtime.onUpdateAvailable",ns_obj_38532,"onUpdateAvailable");

var event_obj__37664__auto__ = (function (){var target_obj_38539 = ns_obj_38532;
var _STAR_runtime_state_STAR_38541 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38539,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38540 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38539,(0),"onUpdateAvailable",true))?(target_obj_38539["onUpdateAvailable"]):null);
return next_obj_38540;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38541;
}})();
var result__37665__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__37664__auto__,logging_fn__37663__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__37665__auto__,args);

return result__37665__auto__;
});

chromex.ext.runtime.on_update_available_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_update_available_STAR_.cljs$lang$applyTo = (function (seq38527){
var G__38528 = cljs.core.first.call(null,seq38527);
var seq38527__$1 = cljs.core.next.call(null,seq38527);
var G__38529 = cljs.core.first.call(null,seq38527__$1);
var seq38527__$2 = cljs.core.next.call(null,seq38527__$1);
return chromex.ext.runtime.on_update_available_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__38528,G__38529,seq38527__$2);
});

chromex.ext.runtime.on_browser_update_available_STAR_ = (function chromex$ext$runtime$on_browser_update_available_STAR_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___38563 = arguments.length;
var i__29681__auto___38564 = (0);
while(true){
if((i__29681__auto___38564 < len__29680__auto___38563)){
args__29687__auto__.push((arguments[i__29681__auto___38564]));

var G__38565 = (i__29681__auto___38564 + (1));
i__29681__auto___38564 = G__38565;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((2) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_browser_update_available_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29688__auto__);
});

chromex.ext.runtime.on_browser_update_available_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_38553 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-browser-update-available","chromex.ext.runtime/on-browser-update-available",-2070315485),channel);
})();
var handler_fn_38554 = event_fn_38553;
var logging_fn__37663__auto__ = ((function (event_fn_38553,handler_fn_38554){
return (function (){
var config__30571__auto___38566 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38566))){
var logger__30572__auto___38567 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38566);
var prefix__30573__auto___38568 = ["event:","chrome.runtime.onBrowserUpdateAvailable"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___38567)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___38566)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___38567.apply(null,prefix__30573__auto___38568.concat(cljs.core.into_array.call(null,cljs.core.PersistentVector.EMPTY)));
} else {
}

return handler_fn_38554.call(null);
});})(event_fn_38553,handler_fn_38554))
;
var ns_obj_38555 = (function (){var target_obj_38556 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_38559 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38556,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38557 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38556,(0),"chrome",true))?(target_obj_38556["chrome"]):null);
var next_obj_38558 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_38557,(0),"runtime",true))?(next_obj_38557["runtime"]):null);
return next_obj_38558;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38559;
}})();
var config__30575__auto___38569 = config;
var api_check_fn__30576__auto___38570 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___38569);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___38570)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___38569)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___38570.call(null,"chrome.runtime.onBrowserUpdateAvailable",ns_obj_38555,"onBrowserUpdateAvailable");

var event_obj__37664__auto__ = (function (){var target_obj_38560 = ns_obj_38555;
var _STAR_runtime_state_STAR_38562 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38560,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38561 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38560,(0),"onBrowserUpdateAvailable",true))?(target_obj_38560["onBrowserUpdateAvailable"]):null);
return next_obj_38561;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38562;
}})();
var result__37665__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__37664__auto__,logging_fn__37663__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__37665__auto__,args);

return result__37665__auto__;
});

chromex.ext.runtime.on_browser_update_available_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_browser_update_available_STAR_.cljs$lang$applyTo = (function (seq38550){
var G__38551 = cljs.core.first.call(null,seq38550);
var seq38550__$1 = cljs.core.next.call(null,seq38550);
var G__38552 = cljs.core.first.call(null,seq38550__$1);
var seq38550__$2 = cljs.core.next.call(null,seq38550__$1);
return chromex.ext.runtime.on_browser_update_available_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__38551,G__38552,seq38550__$2);
});

chromex.ext.runtime.on_connect_STAR_ = (function chromex$ext$runtime$on_connect_STAR_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___38586 = arguments.length;
var i__29681__auto___38587 = (0);
while(true){
if((i__29681__auto___38587 < len__29680__auto___38586)){
args__29687__auto__.push((arguments[i__29681__auto___38587]));

var G__38588 = (i__29681__auto___38587 + (1));
i__29681__auto___38587 = G__38588;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((2) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_connect_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29688__auto__);
});

chromex.ext.runtime.on_connect_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_38574 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-connect","chromex.ext.runtime/on-connect",-693825711),channel);
})();
var handler_fn_38575 = ((function (event_fn_38574){
return (function (cb_port_38577){
return event_fn_38574.call(null,chromex.marshalling.from_native_chrome_port.call(null,config,cb_port_38577));
});})(event_fn_38574))
;
var logging_fn__37663__auto__ = ((function (event_fn_38574,handler_fn_38575){
return (function (cb_param_port_38578){
var config__30571__auto___38589 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38589))){
var logger__30572__auto___38590 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38589);
var prefix__30573__auto___38591 = ["event:","chrome.runtime.onConnect"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___38590)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___38589)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___38590.apply(null,prefix__30573__auto___38591.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_port_38578], null))));
} else {
}

return handler_fn_38575.call(null,cb_param_port_38578);
});})(event_fn_38574,handler_fn_38575))
;
var ns_obj_38576 = (function (){var target_obj_38579 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_38582 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38579,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38580 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38579,(0),"chrome",true))?(target_obj_38579["chrome"]):null);
var next_obj_38581 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_38580,(0),"runtime",true))?(next_obj_38580["runtime"]):null);
return next_obj_38581;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38582;
}})();
var config__30575__auto___38592 = config;
var api_check_fn__30576__auto___38593 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___38592);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___38593)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___38592)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___38593.call(null,"chrome.runtime.onConnect",ns_obj_38576,"onConnect");

var event_obj__37664__auto__ = (function (){var target_obj_38583 = ns_obj_38576;
var _STAR_runtime_state_STAR_38585 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38583,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38584 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38583,(0),"onConnect",true))?(target_obj_38583["onConnect"]):null);
return next_obj_38584;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38585;
}})();
var result__37665__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__37664__auto__,logging_fn__37663__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__37665__auto__,args);

return result__37665__auto__;
});

chromex.ext.runtime.on_connect_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_connect_STAR_.cljs$lang$applyTo = (function (seq38571){
var G__38572 = cljs.core.first.call(null,seq38571);
var seq38571__$1 = cljs.core.next.call(null,seq38571);
var G__38573 = cljs.core.first.call(null,seq38571__$1);
var seq38571__$2 = cljs.core.next.call(null,seq38571__$1);
return chromex.ext.runtime.on_connect_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__38572,G__38573,seq38571__$2);
});

chromex.ext.runtime.on_connect_external_STAR_ = (function chromex$ext$runtime$on_connect_external_STAR_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___38609 = arguments.length;
var i__29681__auto___38610 = (0);
while(true){
if((i__29681__auto___38610 < len__29680__auto___38609)){
args__29687__auto__.push((arguments[i__29681__auto___38610]));

var G__38611 = (i__29681__auto___38610 + (1));
i__29681__auto___38610 = G__38611;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((2) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_connect_external_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29688__auto__);
});

chromex.ext.runtime.on_connect_external_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_38597 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-connect-external","chromex.ext.runtime/on-connect-external",-2057644994),channel);
})();
var handler_fn_38598 = ((function (event_fn_38597){
return (function (cb_port_38600){
return event_fn_38597.call(null,chromex.marshalling.from_native_chrome_port.call(null,config,cb_port_38600));
});})(event_fn_38597))
;
var logging_fn__37663__auto__ = ((function (event_fn_38597,handler_fn_38598){
return (function (cb_param_port_38601){
var config__30571__auto___38612 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38612))){
var logger__30572__auto___38613 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38612);
var prefix__30573__auto___38614 = ["event:","chrome.runtime.onConnectExternal"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___38613)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___38612)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___38613.apply(null,prefix__30573__auto___38614.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_port_38601], null))));
} else {
}

return handler_fn_38598.call(null,cb_param_port_38601);
});})(event_fn_38597,handler_fn_38598))
;
var ns_obj_38599 = (function (){var target_obj_38602 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_38605 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38602,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38603 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38602,(0),"chrome",true))?(target_obj_38602["chrome"]):null);
var next_obj_38604 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_38603,(0),"runtime",true))?(next_obj_38603["runtime"]):null);
return next_obj_38604;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38605;
}})();
var config__30575__auto___38615 = config;
var api_check_fn__30576__auto___38616 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___38615);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___38616)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___38615)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___38616.call(null,"chrome.runtime.onConnectExternal",ns_obj_38599,"onConnectExternal");

var event_obj__37664__auto__ = (function (){var target_obj_38606 = ns_obj_38599;
var _STAR_runtime_state_STAR_38608 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38606,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38607 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38606,(0),"onConnectExternal",true))?(target_obj_38606["onConnectExternal"]):null);
return next_obj_38607;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38608;
}})();
var result__37665__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__37664__auto__,logging_fn__37663__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__37665__auto__,args);

return result__37665__auto__;
});

chromex.ext.runtime.on_connect_external_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_connect_external_STAR_.cljs$lang$applyTo = (function (seq38594){
var G__38595 = cljs.core.first.call(null,seq38594);
var seq38594__$1 = cljs.core.next.call(null,seq38594);
var G__38596 = cljs.core.first.call(null,seq38594__$1);
var seq38594__$2 = cljs.core.next.call(null,seq38594__$1);
return chromex.ext.runtime.on_connect_external_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__38595,G__38596,seq38594__$2);
});

chromex.ext.runtime.on_message_STAR_ = (function chromex$ext$runtime$on_message_STAR_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___38636 = arguments.length;
var i__29681__auto___38637 = (0);
while(true){
if((i__29681__auto___38637 < len__29680__auto___38636)){
args__29687__auto__.push((arguments[i__29681__auto___38637]));

var G__38638 = (i__29681__auto___38637 + (1));
i__29681__auto___38637 = G__38638;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((2) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_message_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29688__auto__);
});

chromex.ext.runtime.on_message_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_38620 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-message","chromex.ext.runtime/on-message",2147364293),channel);
})();
var handler_fn_38621 = ((function (event_fn_38620){
return (function (cb_message_38623,cb_sender_38624,cb_send_response_38625){
return event_fn_38620.call(null,cb_message_38623,cb_sender_38624,cb_send_response_38625);
});})(event_fn_38620))
;
var logging_fn__37663__auto__ = ((function (event_fn_38620,handler_fn_38621){
return (function (cb_param_message_38626,cb_param_sender_38627,cb_param_send_response_38628){
var config__30571__auto___38639 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38639))){
var logger__30572__auto___38640 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38639);
var prefix__30573__auto___38641 = ["event:","chrome.runtime.onMessage"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___38640)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___38639)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___38640.apply(null,prefix__30573__auto___38641.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_message_38626,cb_param_sender_38627,cb_param_send_response_38628], null))));
} else {
}

return handler_fn_38621.call(null,cb_param_message_38626,cb_param_sender_38627,cb_param_send_response_38628);
});})(event_fn_38620,handler_fn_38621))
;
var ns_obj_38622 = (function (){var target_obj_38629 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_38632 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38629,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38630 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38629,(0),"chrome",true))?(target_obj_38629["chrome"]):null);
var next_obj_38631 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_38630,(0),"runtime",true))?(next_obj_38630["runtime"]):null);
return next_obj_38631;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38632;
}})();
var config__30575__auto___38642 = config;
var api_check_fn__30576__auto___38643 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___38642);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___38643)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___38642)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___38643.call(null,"chrome.runtime.onMessage",ns_obj_38622,"onMessage");

var event_obj__37664__auto__ = (function (){var target_obj_38633 = ns_obj_38622;
var _STAR_runtime_state_STAR_38635 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38633,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38634 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38633,(0),"onMessage",true))?(target_obj_38633["onMessage"]):null);
return next_obj_38634;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38635;
}})();
var result__37665__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__37664__auto__,logging_fn__37663__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__37665__auto__,args);

return result__37665__auto__;
});

chromex.ext.runtime.on_message_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_message_STAR_.cljs$lang$applyTo = (function (seq38617){
var G__38618 = cljs.core.first.call(null,seq38617);
var seq38617__$1 = cljs.core.next.call(null,seq38617);
var G__38619 = cljs.core.first.call(null,seq38617__$1);
var seq38617__$2 = cljs.core.next.call(null,seq38617__$1);
return chromex.ext.runtime.on_message_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__38618,G__38619,seq38617__$2);
});

chromex.ext.runtime.on_message_external_STAR_ = (function chromex$ext$runtime$on_message_external_STAR_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___38663 = arguments.length;
var i__29681__auto___38664 = (0);
while(true){
if((i__29681__auto___38664 < len__29680__auto___38663)){
args__29687__auto__.push((arguments[i__29681__auto___38664]));

var G__38665 = (i__29681__auto___38664 + (1));
i__29681__auto___38664 = G__38665;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((2) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_message_external_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29688__auto__);
});

chromex.ext.runtime.on_message_external_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_38647 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-message-external","chromex.ext.runtime/on-message-external",-779703990),channel);
})();
var handler_fn_38648 = ((function (event_fn_38647){
return (function (cb_message_38650,cb_sender_38651,cb_send_response_38652){
return event_fn_38647.call(null,cb_message_38650,cb_sender_38651,cb_send_response_38652);
});})(event_fn_38647))
;
var logging_fn__37663__auto__ = ((function (event_fn_38647,handler_fn_38648){
return (function (cb_param_message_38653,cb_param_sender_38654,cb_param_send_response_38655){
var config__30571__auto___38666 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38666))){
var logger__30572__auto___38667 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38666);
var prefix__30573__auto___38668 = ["event:","chrome.runtime.onMessageExternal"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___38667)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___38666)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___38667.apply(null,prefix__30573__auto___38668.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_message_38653,cb_param_sender_38654,cb_param_send_response_38655], null))));
} else {
}

return handler_fn_38648.call(null,cb_param_message_38653,cb_param_sender_38654,cb_param_send_response_38655);
});})(event_fn_38647,handler_fn_38648))
;
var ns_obj_38649 = (function (){var target_obj_38656 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_38659 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38656,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38657 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38656,(0),"chrome",true))?(target_obj_38656["chrome"]):null);
var next_obj_38658 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_38657,(0),"runtime",true))?(next_obj_38657["runtime"]):null);
return next_obj_38658;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38659;
}})();
var config__30575__auto___38669 = config;
var api_check_fn__30576__auto___38670 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___38669);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___38670)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___38669)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___38670.call(null,"chrome.runtime.onMessageExternal",ns_obj_38649,"onMessageExternal");

var event_obj__37664__auto__ = (function (){var target_obj_38660 = ns_obj_38649;
var _STAR_runtime_state_STAR_38662 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38660,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38661 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38660,(0),"onMessageExternal",true))?(target_obj_38660["onMessageExternal"]):null);
return next_obj_38661;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38662;
}})();
var result__37665__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__37664__auto__,logging_fn__37663__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__37665__auto__,args);

return result__37665__auto__;
});

chromex.ext.runtime.on_message_external_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_message_external_STAR_.cljs$lang$applyTo = (function (seq38644){
var G__38645 = cljs.core.first.call(null,seq38644);
var seq38644__$1 = cljs.core.next.call(null,seq38644);
var G__38646 = cljs.core.first.call(null,seq38644__$1);
var seq38644__$2 = cljs.core.next.call(null,seq38644__$1);
return chromex.ext.runtime.on_message_external_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__38645,G__38646,seq38644__$2);
});

chromex.ext.runtime.on_restart_required_STAR_ = (function chromex$ext$runtime$on_restart_required_STAR_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___38686 = arguments.length;
var i__29681__auto___38687 = (0);
while(true){
if((i__29681__auto___38687 < len__29680__auto___38686)){
args__29687__auto__.push((arguments[i__29681__auto___38687]));

var G__38688 = (i__29681__auto___38687 + (1));
i__29681__auto___38687 = G__38688;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((2) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_restart_required_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29688__auto__);
});

chromex.ext.runtime.on_restart_required_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_38674 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-restart-required","chromex.ext.runtime/on-restart-required",-754128621),channel);
})();
var handler_fn_38675 = ((function (event_fn_38674){
return (function (cb_reason_38677){
return event_fn_38674.call(null,cb_reason_38677);
});})(event_fn_38674))
;
var logging_fn__37663__auto__ = ((function (event_fn_38674,handler_fn_38675){
return (function (cb_param_reason_38678){
var config__30571__auto___38689 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38689))){
var logger__30572__auto___38690 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___38689);
var prefix__30573__auto___38691 = ["event:","chrome.runtime.onRestartRequired"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___38690)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___38689)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___38690.apply(null,prefix__30573__auto___38691.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_reason_38678], null))));
} else {
}

return handler_fn_38675.call(null,cb_param_reason_38678);
});})(event_fn_38674,handler_fn_38675))
;
var ns_obj_38676 = (function (){var target_obj_38679 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_38682 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38679,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38680 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38679,(0),"chrome",true))?(target_obj_38679["chrome"]):null);
var next_obj_38681 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_38680,(0),"runtime",true))?(next_obj_38680["runtime"]):null);
return next_obj_38681;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38682;
}})();
var config__30575__auto___38692 = config;
var api_check_fn__30576__auto___38693 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___38692);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___38693)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___38692)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___38693.call(null,"chrome.runtime.onRestartRequired",ns_obj_38676,"onRestartRequired");

var event_obj__37664__auto__ = (function (){var target_obj_38683 = ns_obj_38676;
var _STAR_runtime_state_STAR_38685 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_38683,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_38684 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_38683,(0),"onRestartRequired",true))?(target_obj_38683["onRestartRequired"]):null);
return next_obj_38684;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_38685;
}})();
var result__37665__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__37664__auto__,logging_fn__37663__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__37665__auto__,args);

return result__37665__auto__;
});

chromex.ext.runtime.on_restart_required_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_restart_required_STAR_.cljs$lang$applyTo = (function (seq38671){
var G__38672 = cljs.core.first.call(null,seq38671);
var seq38671__$1 = cljs.core.next.call(null,seq38671);
var G__38673 = cljs.core.first.call(null,seq38671__$1);
var seq38671__$2 = cljs.core.next.call(null,seq38671__$1);
return chromex.ext.runtime.on_restart_required_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__38672,G__38673,seq38671__$2);
});


//# sourceMappingURL=runtime.js.map?rel=1497481541430