// Compiled by ClojureScript 1.9.562 {}
goog.provide('chromex.ext.runtime');
goog.require('cljs.core');
goog.require('chromex.core');
chromex.ext.runtime.last_error_STAR_ = (function chromex$ext$runtime$last_error_STAR_(config){
var result_51135 = (function (){var final_args_array_51136 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.runtime.lastError");
var ns_51137 = (function (){var target_obj_51139 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_51142 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51139,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51140 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51139,(0),"chrome",true))?(target_obj_51139["chrome"]):null);
var next_obj_51141 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_51140,(0),"runtime",true))?(next_obj_51140["runtime"]):null);
return next_obj_51141;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51142;
}})();

var config__30571__auto___51146 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51146))){
var logger__30572__auto___51147 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51146);
var prefix__30573__auto___51148 = ["accessing:","chrome.runtime.lastError"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___51147)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___51146)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___51147.apply(null,prefix__30573__auto___51148.concat(final_args_array_51136));
} else {
}

var target_51138 = (function (){var target_obj_51143 = ns_51137;
var _STAR_runtime_state_STAR_51145 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51143,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51144 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51143,(1),"lastError",true))?(target_obj_51143["lastError"]):null);
if(!((next_obj_51144 == null))){
return next_obj_51144;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51145;
}})();
return target_51138;
})();
return result_51135;
});
chromex.ext.runtime.id_STAR_ = (function chromex$ext$runtime$id_STAR_(config){
var result_51160 = (function (){var final_args_array_51161 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.runtime.id");
var ns_51162 = (function (){var target_obj_51164 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_51167 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51164,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51165 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51164,(0),"chrome",true))?(target_obj_51164["chrome"]):null);
var next_obj_51166 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_51165,(0),"runtime",true))?(next_obj_51165["runtime"]):null);
return next_obj_51166;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51167;
}})();

var config__30571__auto___51171 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51171))){
var logger__30572__auto___51172 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51171);
var prefix__30573__auto___51173 = ["accessing:","chrome.runtime.id"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___51172)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___51171)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___51172.apply(null,prefix__30573__auto___51173.concat(final_args_array_51161));
} else {
}

var target_51163 = (function (){var target_obj_51168 = ns_51162;
var _STAR_runtime_state_STAR_51170 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51168,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51169 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51168,(1),"id",true))?(target_obj_51168["id"]):null);
if(!((next_obj_51169 == null))){
return next_obj_51169;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51170;
}})();
return target_51163;
})();
return result_51160;
});
chromex.ext.runtime.get_background_page_STAR_ = (function chromex$ext$runtime$get_background_page_STAR_(config){
var callback_chan_51188 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__);
})();
var marshalled_callback_51190_51202 = ((function (callback_chan_51188){
return (function (cb_background_page_51194){
return (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","get-background-page","chromex.ext.runtime/get-background-page",2138227095),new cljs.core.Keyword(null,"name","name",1843675177),"getBackgroundPage",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"background-page",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"Window"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_51188);
})().call(null,cb_background_page_51194);
});})(callback_chan_51188))
;
var result_51189_51203 = (function (){var final_args_array_51191 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_51190_51202,"callback",null], null)], null),"chrome.runtime.getBackgroundPage");
var ns_51192 = (function (){var target_obj_51195 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_51198 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51195,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51196 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51195,(0),"chrome",true))?(target_obj_51195["chrome"]):null);
var next_obj_51197 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_51196,(0),"runtime",true))?(next_obj_51196["runtime"]):null);
return next_obj_51197;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51198;
}})();
var config__30575__auto___51204 = config;
var api_check_fn__30576__auto___51205 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___51204);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___51205)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___51204)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___51205.call(null,"chrome.runtime.getBackgroundPage",ns_51192,"getBackgroundPage");

var config__30571__auto___51206 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51206))){
var logger__30572__auto___51207 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51206);
var prefix__30573__auto___51208 = ["calling:","chrome.runtime.getBackgroundPage"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___51207)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___51206)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___51207.apply(null,prefix__30573__auto___51208.concat(final_args_array_51191));
} else {
}

var target_51193 = (function (){var target_obj_51199 = ns_51192;
var _STAR_runtime_state_STAR_51201 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51199,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51200 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51199,(1),"getBackgroundPage",true))?(target_obj_51199["getBackgroundPage"]):null);
if(!((next_obj_51200 == null))){
return next_obj_51200;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51201;
}})();
return target_51193.apply(ns_51192,final_args_array_51191);
})();

return callback_chan_51188;
});
chromex.ext.runtime.open_options_page_STAR_ = (function chromex$ext$runtime$open_options_page_STAR_(config){
var callback_chan_51222 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__);
})();
var marshalled_callback_51224_51235 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","open-options-page","chromex.ext.runtime/open-options-page",-236868215),new cljs.core.Keyword(null,"name","name",1843675177),"openOptionsPage",new cljs.core.Keyword(null,"since","since",315379842),"42",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_51222);
})();
var result_51223_51236 = (function (){var final_args_array_51225 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_51224_51235,"callback",true], null)], null),"chrome.runtime.openOptionsPage");
var ns_51226 = (function (){var target_obj_51228 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_51231 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51228,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51229 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51228,(0),"chrome",true))?(target_obj_51228["chrome"]):null);
var next_obj_51230 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_51229,(0),"runtime",true))?(next_obj_51229["runtime"]):null);
return next_obj_51230;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51231;
}})();
var config__30575__auto___51237 = config;
var api_check_fn__30576__auto___51238 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___51237);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___51238)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___51237)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___51238.call(null,"chrome.runtime.openOptionsPage",ns_51226,"openOptionsPage");

var config__30571__auto___51239 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51239))){
var logger__30572__auto___51240 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51239);
var prefix__30573__auto___51241 = ["calling:","chrome.runtime.openOptionsPage"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___51240)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___51239)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___51240.apply(null,prefix__30573__auto___51241.concat(final_args_array_51225));
} else {
}

var target_51227 = (function (){var target_obj_51232 = ns_51226;
var _STAR_runtime_state_STAR_51234 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51232,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51233 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51232,(1),"openOptionsPage",true))?(target_obj_51232["openOptionsPage"]):null);
if(!((next_obj_51233 == null))){
return next_obj_51233;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51234;
}})();
return target_51227.apply(ns_51226,final_args_array_51225);
})();

return callback_chan_51222;
});
chromex.ext.runtime.get_manifest_STAR_ = (function chromex$ext$runtime$get_manifest_STAR_(config){
var result_51253 = (function (){var final_args_array_51254 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.runtime.getManifest");
var ns_51255 = (function (){var target_obj_51257 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_51260 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51257,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51258 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51257,(0),"chrome",true))?(target_obj_51257["chrome"]):null);
var next_obj_51259 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_51258,(0),"runtime",true))?(next_obj_51258["runtime"]):null);
return next_obj_51259;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51260;
}})();
var config__30575__auto___51264 = config;
var api_check_fn__30576__auto___51265 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___51264);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___51265)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___51264)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___51265.call(null,"chrome.runtime.getManifest",ns_51255,"getManifest");

var config__30571__auto___51266 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51266))){
var logger__30572__auto___51267 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51266);
var prefix__30573__auto___51268 = ["calling:","chrome.runtime.getManifest"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___51267)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___51266)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___51267.apply(null,prefix__30573__auto___51268.concat(final_args_array_51254));
} else {
}

var target_51256 = (function (){var target_obj_51261 = ns_51255;
var _STAR_runtime_state_STAR_51263 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51261,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51262 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51261,(1),"getManifest",true))?(target_obj_51261["getManifest"]):null);
if(!((next_obj_51262 == null))){
return next_obj_51262;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51263;
}})();
return target_51256.apply(ns_51255,final_args_array_51254);
})();
return result_51253;
});
chromex.ext.runtime.get_url_STAR_ = (function chromex$ext$runtime$get_url_STAR_(config,path){
var marshalled_path_51283 = (function (){var omit_test_51287 = path;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_51287,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_51287;
}
})();
var result_51282 = (function (){var final_args_array_51284 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_path_51283,"path",null], null)], null),"chrome.runtime.getURL");
var ns_51285 = (function (){var target_obj_51288 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_51291 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51288,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51289 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51288,(0),"chrome",true))?(target_obj_51288["chrome"]):null);
var next_obj_51290 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_51289,(0),"runtime",true))?(next_obj_51289["runtime"]):null);
return next_obj_51290;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51291;
}})();
var config__30575__auto___51295 = config;
var api_check_fn__30576__auto___51296 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___51295);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___51296)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___51295)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___51296.call(null,"chrome.runtime.getURL",ns_51285,"getURL");

var config__30571__auto___51297 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51297))){
var logger__30572__auto___51298 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51297);
var prefix__30573__auto___51299 = ["calling:","chrome.runtime.getURL"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___51298)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___51297)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___51298.apply(null,prefix__30573__auto___51299.concat(final_args_array_51284));
} else {
}

var target_51286 = (function (){var target_obj_51292 = ns_51285;
var _STAR_runtime_state_STAR_51294 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51292,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51293 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51292,(1),"getURL",true))?(target_obj_51292["getURL"]):null);
if(!((next_obj_51293 == null))){
return next_obj_51293;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51294;
}})();
return target_51286.apply(ns_51285,final_args_array_51284);
})();
return result_51282;
});
chromex.ext.runtime.set_uninstall_url_STAR_ = (function chromex$ext$runtime$set_uninstall_url_STAR_(config,url){
var callback_chan_51315 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__);
})();
var marshalled_url_51317_51330 = (function (){var omit_test_51322 = url;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_51322,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_51322;
}
})();
var marshalled_callback_51318_51331 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","set-uninstall-url","chromex.ext.runtime/set-uninstall-url",-1010845784),new cljs.core.Keyword(null,"name","name",1843675177),"setUninstallURL",new cljs.core.Keyword(null,"since","since",315379842),"41",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"url",new cljs.core.Keyword(null,"type","type",1174270348),"string"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_51315);
})();
var result_51316_51332 = (function (){var final_args_array_51319 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_url_51317_51330,"url",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_51318_51331,"callback",true], null)], null),"chrome.runtime.setUninstallURL");
var ns_51320 = (function (){var target_obj_51323 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_51326 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51323,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51324 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51323,(0),"chrome",true))?(target_obj_51323["chrome"]):null);
var next_obj_51325 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_51324,(0),"runtime",true))?(next_obj_51324["runtime"]):null);
return next_obj_51325;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51326;
}})();
var config__30575__auto___51333 = config;
var api_check_fn__30576__auto___51334 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___51333);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___51334)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___51333)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___51334.call(null,"chrome.runtime.setUninstallURL",ns_51320,"setUninstallURL");

var config__30571__auto___51335 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51335))){
var logger__30572__auto___51336 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51335);
var prefix__30573__auto___51337 = ["calling:","chrome.runtime.setUninstallURL"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___51336)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___51335)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___51336.apply(null,prefix__30573__auto___51337.concat(final_args_array_51319));
} else {
}

var target_51321 = (function (){var target_obj_51327 = ns_51320;
var _STAR_runtime_state_STAR_51329 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51327,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51328 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51327,(1),"setUninstallURL",true))?(target_obj_51327["setUninstallURL"]):null);
if(!((next_obj_51328 == null))){
return next_obj_51328;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51329;
}})();
return target_51321.apply(ns_51320,final_args_array_51319);
})();

return callback_chan_51315;
});
chromex.ext.runtime.reload_STAR_ = (function chromex$ext$runtime$reload_STAR_(config){
var result_51349 = (function (){var final_args_array_51350 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.runtime.reload");
var ns_51351 = (function (){var target_obj_51353 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_51356 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51353,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51354 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51353,(0),"chrome",true))?(target_obj_51353["chrome"]):null);
var next_obj_51355 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_51354,(0),"runtime",true))?(next_obj_51354["runtime"]):null);
return next_obj_51355;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51356;
}})();
var config__30575__auto___51360 = config;
var api_check_fn__30576__auto___51361 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___51360);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___51361)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___51360)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___51361.call(null,"chrome.runtime.reload",ns_51351,"reload");

var config__30571__auto___51362 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51362))){
var logger__30572__auto___51363 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51362);
var prefix__30573__auto___51364 = ["calling:","chrome.runtime.reload"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___51363)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___51362)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___51363.apply(null,prefix__30573__auto___51364.concat(final_args_array_51350));
} else {
}

var target_51352 = (function (){var target_obj_51357 = ns_51351;
var _STAR_runtime_state_STAR_51359 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51357,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51358 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51357,(1),"reload",true))?(target_obj_51357["reload"]):null);
if(!((next_obj_51358 == null))){
return next_obj_51358;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51359;
}})();
return target_51352.apply(ns_51351,final_args_array_51350);
})();
return result_51349;
});
chromex.ext.runtime.request_update_check_STAR_ = (function chromex$ext$runtime$request_update_check_STAR_(config){
var callback_chan_51380 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__);
})();
var marshalled_callback_51382_51395 = ((function (callback_chan_51380){
return (function (cb_status_51386,cb_details_51387){
return (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","request-update-check","chromex.ext.runtime/request-update-check",-1504783873),new cljs.core.Keyword(null,"name","name",1843675177),"requestUpdateCheck",new cljs.core.Keyword(null,"since","since",315379842),"25",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"status",new cljs.core.Keyword(null,"type","type",1174270348),"runtime.RequestUpdateCheckStatus"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"details",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"object"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_51380);
})().call(null,cb_status_51386,cb_details_51387);
});})(callback_chan_51380))
;
var result_51381_51396 = (function (){var final_args_array_51383 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_51382_51395,"callback",null], null)], null),"chrome.runtime.requestUpdateCheck");
var ns_51384 = (function (){var target_obj_51388 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_51391 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51388,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51389 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51388,(0),"chrome",true))?(target_obj_51388["chrome"]):null);
var next_obj_51390 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_51389,(0),"runtime",true))?(next_obj_51389["runtime"]):null);
return next_obj_51390;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51391;
}})();
var config__30575__auto___51397 = config;
var api_check_fn__30576__auto___51398 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___51397);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___51398)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___51397)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___51398.call(null,"chrome.runtime.requestUpdateCheck",ns_51384,"requestUpdateCheck");

var config__30571__auto___51399 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51399))){
var logger__30572__auto___51400 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51399);
var prefix__30573__auto___51401 = ["calling:","chrome.runtime.requestUpdateCheck"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___51400)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___51399)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___51400.apply(null,prefix__30573__auto___51401.concat(final_args_array_51383));
} else {
}

var target_51385 = (function (){var target_obj_51392 = ns_51384;
var _STAR_runtime_state_STAR_51394 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51392,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51393 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51392,(1),"requestUpdateCheck",true))?(target_obj_51392["requestUpdateCheck"]):null);
if(!((next_obj_51393 == null))){
return next_obj_51393;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51394;
}})();
return target_51385.apply(ns_51384,final_args_array_51383);
})();

return callback_chan_51380;
});
chromex.ext.runtime.restart_STAR_ = (function chromex$ext$runtime$restart_STAR_(config){
var result_51413 = (function (){var final_args_array_51414 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.runtime.restart");
var ns_51415 = (function (){var target_obj_51417 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_51420 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51417,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51418 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51417,(0),"chrome",true))?(target_obj_51417["chrome"]):null);
var next_obj_51419 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_51418,(0),"runtime",true))?(next_obj_51418["runtime"]):null);
return next_obj_51419;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51420;
}})();
var config__30575__auto___51424 = config;
var api_check_fn__30576__auto___51425 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___51424);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___51425)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___51424)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___51425.call(null,"chrome.runtime.restart",ns_51415,"restart");

var config__30571__auto___51426 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51426))){
var logger__30572__auto___51427 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51426);
var prefix__30573__auto___51428 = ["calling:","chrome.runtime.restart"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___51427)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___51426)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___51427.apply(null,prefix__30573__auto___51428.concat(final_args_array_51414));
} else {
}

var target_51416 = (function (){var target_obj_51421 = ns_51415;
var _STAR_runtime_state_STAR_51423 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51421,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51422 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51421,(1),"restart",true))?(target_obj_51421["restart"]):null);
if(!((next_obj_51422 == null))){
return next_obj_51422;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51423;
}})();
return target_51416.apply(ns_51415,final_args_array_51414);
})();
return result_51413;
});
chromex.ext.runtime.restart_after_delay_STAR_ = (function chromex$ext$runtime$restart_after_delay_STAR_(config,seconds){
var callback_chan_51444 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__);
})();
var marshalled_seconds_51446_51459 = (function (){var omit_test_51451 = seconds;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_51451,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_51451;
}
})();
var marshalled_callback_51447_51460 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","restart-after-delay","chromex.ext.runtime/restart-after-delay",-1851581361),new cljs.core.Keyword(null,"name","name",1843675177),"restartAfterDelay",new cljs.core.Keyword(null,"since","since",315379842),"53",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"seconds",new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_51444);
})();
var result_51445_51461 = (function (){var final_args_array_51448 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_seconds_51446_51459,"seconds",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_51447_51460,"callback",true], null)], null),"chrome.runtime.restartAfterDelay");
var ns_51449 = (function (){var target_obj_51452 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_51455 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51452,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51453 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51452,(0),"chrome",true))?(target_obj_51452["chrome"]):null);
var next_obj_51454 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_51453,(0),"runtime",true))?(next_obj_51453["runtime"]):null);
return next_obj_51454;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51455;
}})();
var config__30575__auto___51462 = config;
var api_check_fn__30576__auto___51463 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___51462);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___51463)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___51462)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___51463.call(null,"chrome.runtime.restartAfterDelay",ns_51449,"restartAfterDelay");

var config__30571__auto___51464 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51464))){
var logger__30572__auto___51465 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51464);
var prefix__30573__auto___51466 = ["calling:","chrome.runtime.restartAfterDelay"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___51465)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___51464)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___51465.apply(null,prefix__30573__auto___51466.concat(final_args_array_51448));
} else {
}

var target_51450 = (function (){var target_obj_51456 = ns_51449;
var _STAR_runtime_state_STAR_51458 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51456,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51457 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51456,(1),"restartAfterDelay",true))?(target_obj_51456["restartAfterDelay"]):null);
if(!((next_obj_51457 == null))){
return next_obj_51457;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51458;
}})();
return target_51450.apply(ns_51449,final_args_array_51448);
})();

return callback_chan_51444;
});
chromex.ext.runtime.connect_STAR_ = (function chromex$ext$runtime$connect_STAR_(config,extension_id,connect_info){
var marshalled_extension_id_51483 = (function (){var omit_test_51488 = extension_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_51488,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_51488;
}
})();
var marshalled_connect_info_51484 = (function (){var omit_test_51489 = connect_info;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_51489,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_51489;
}
})();
var result_51482 = (function (){var final_args_array_51485 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_extension_id_51483,"extension-id",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_connect_info_51484,"connect-info",true], null)], null),"chrome.runtime.connect");
var ns_51486 = (function (){var target_obj_51490 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_51493 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51490,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51491 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51490,(0),"chrome",true))?(target_obj_51490["chrome"]):null);
var next_obj_51492 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_51491,(0),"runtime",true))?(next_obj_51491["runtime"]):null);
return next_obj_51492;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51493;
}})();
var config__30575__auto___51497 = config;
var api_check_fn__30576__auto___51498 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___51497);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___51498)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___51497)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___51498.call(null,"chrome.runtime.connect",ns_51486,"connect");

var config__30571__auto___51499 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51499))){
var logger__30572__auto___51500 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51499);
var prefix__30573__auto___51501 = ["calling:","chrome.runtime.connect"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___51500)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___51499)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___51500.apply(null,prefix__30573__auto___51501.concat(final_args_array_51485));
} else {
}

var target_51487 = (function (){var target_obj_51494 = ns_51486;
var _STAR_runtime_state_STAR_51496 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51494,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51495 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51494,(1),"connect",true))?(target_obj_51494["connect"]):null);
if(!((next_obj_51495 == null))){
return next_obj_51495;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51496;
}})();
return target_51487.apply(ns_51486,final_args_array_51485);
})();
return chromex.marshalling.from_native_chrome_port.call(null,config,result_51482);
});
chromex.ext.runtime.connect_native_STAR_ = (function chromex$ext$runtime$connect_native_STAR_(config,application){
var marshalled_application_51516 = (function (){var omit_test_51520 = application;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_51520,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_51520;
}
})();
var result_51515 = (function (){var final_args_array_51517 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_application_51516,"application",null], null)], null),"chrome.runtime.connectNative");
var ns_51518 = (function (){var target_obj_51521 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_51524 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51521,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51522 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51521,(0),"chrome",true))?(target_obj_51521["chrome"]):null);
var next_obj_51523 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_51522,(0),"runtime",true))?(next_obj_51522["runtime"]):null);
return next_obj_51523;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51524;
}})();
var config__30575__auto___51528 = config;
var api_check_fn__30576__auto___51529 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___51528);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___51529)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___51528)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___51529.call(null,"chrome.runtime.connectNative",ns_51518,"connectNative");

var config__30571__auto___51530 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51530))){
var logger__30572__auto___51531 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51530);
var prefix__30573__auto___51532 = ["calling:","chrome.runtime.connectNative"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___51531)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___51530)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___51531.apply(null,prefix__30573__auto___51532.concat(final_args_array_51517));
} else {
}

var target_51519 = (function (){var target_obj_51525 = ns_51518;
var _STAR_runtime_state_STAR_51527 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51525,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51526 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51525,(1),"connectNative",true))?(target_obj_51525["connectNative"]):null);
if(!((next_obj_51526 == null))){
return next_obj_51526;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51527;
}})();
return target_51519.apply(ns_51518,final_args_array_51517);
})();
return chromex.marshalling.from_native_chrome_port.call(null,config,result_51515);
});
chromex.ext.runtime.send_message_STAR_ = (function chromex$ext$runtime$send_message_STAR_(config,extension_id,message,options){
var callback_chan_51553 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__);
})();
var marshalled_extension_id_51555_51573 = (function (){var omit_test_51562 = extension_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_51562,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_51562;
}
})();
var marshalled_message_51556_51574 = (function (){var omit_test_51563 = message;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_51563,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_51563;
}
})();
var marshalled_options_51557_51575 = (function (){var omit_test_51564 = options;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_51564,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_51564;
}
})();
var marshalled_response_callback_51558_51576 = ((function (marshalled_extension_id_51555_51573,marshalled_message_51556_51574,marshalled_options_51557_51575,callback_chan_51553){
return (function (cb_response_51565){
return (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","send-message","chromex.ext.runtime/send-message",-500803608),new cljs.core.Keyword(null,"name","name",1843675177),"sendMessage",new cljs.core.Keyword(null,"since","since",315379842),"26",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"extension-id",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"string"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"message",new cljs.core.Keyword(null,"type","type",1174270348),"any"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"options",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"object"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"response-callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"response",new cljs.core.Keyword(null,"type","type",1174270348),"any"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_51553);
})().call(null,cb_response_51565);
});})(marshalled_extension_id_51555_51573,marshalled_message_51556_51574,marshalled_options_51557_51575,callback_chan_51553))
;
var result_51554_51577 = (function (){var final_args_array_51559 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_extension_id_51555_51573,"extension-id",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_message_51556_51574,"message",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_options_51557_51575,"options",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_response_callback_51558_51576,"response-callback",true], null)], null),"chrome.runtime.sendMessage");
var ns_51560 = (function (){var target_obj_51566 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_51569 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51566,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51567 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51566,(0),"chrome",true))?(target_obj_51566["chrome"]):null);
var next_obj_51568 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_51567,(0),"runtime",true))?(next_obj_51567["runtime"]):null);
return next_obj_51568;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51569;
}})();
var config__30575__auto___51578 = config;
var api_check_fn__30576__auto___51579 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___51578);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___51579)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___51578)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___51579.call(null,"chrome.runtime.sendMessage",ns_51560,"sendMessage");

var config__30571__auto___51580 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51580))){
var logger__30572__auto___51581 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51580);
var prefix__30573__auto___51582 = ["calling:","chrome.runtime.sendMessage"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___51581)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___51580)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___51581.apply(null,prefix__30573__auto___51582.concat(final_args_array_51559));
} else {
}

var target_51561 = (function (){var target_obj_51570 = ns_51560;
var _STAR_runtime_state_STAR_51572 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51570,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51571 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51570,(1),"sendMessage",true))?(target_obj_51570["sendMessage"]):null);
if(!((next_obj_51571 == null))){
return next_obj_51571;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51572;
}})();
return target_51561.apply(ns_51560,final_args_array_51559);
})();

return callback_chan_51553;
});
chromex.ext.runtime.send_native_message_STAR_ = (function chromex$ext$runtime$send_native_message_STAR_(config,application,message){
var callback_chan_51601 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__);
})();
var marshalled_application_51603_51619 = (function (){var omit_test_51609 = application;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_51609,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_51609;
}
})();
var marshalled_message_51604_51620 = (function (){var omit_test_51610 = message;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_51610,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_51610;
}
})();
var marshalled_response_callback_51605_51621 = ((function (marshalled_application_51603_51619,marshalled_message_51604_51620,callback_chan_51601){
return (function (cb_response_51611){
return (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","send-native-message","chromex.ext.runtime/send-native-message",-489769559),new cljs.core.Keyword(null,"name","name",1843675177),"sendNativeMessage",new cljs.core.Keyword(null,"since","since",315379842),"28",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"application",new cljs.core.Keyword(null,"type","type",1174270348),"string"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"message",new cljs.core.Keyword(null,"type","type",1174270348),"object"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"response-callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"response",new cljs.core.Keyword(null,"type","type",1174270348),"any"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_51601);
})().call(null,cb_response_51611);
});})(marshalled_application_51603_51619,marshalled_message_51604_51620,callback_chan_51601))
;
var result_51602_51622 = (function (){var final_args_array_51606 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_application_51603_51619,"application",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_message_51604_51620,"message",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_response_callback_51605_51621,"response-callback",true], null)], null),"chrome.runtime.sendNativeMessage");
var ns_51607 = (function (){var target_obj_51612 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_51615 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51612,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51613 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51612,(0),"chrome",true))?(target_obj_51612["chrome"]):null);
var next_obj_51614 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_51613,(0),"runtime",true))?(next_obj_51613["runtime"]):null);
return next_obj_51614;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51615;
}})();
var config__30575__auto___51623 = config;
var api_check_fn__30576__auto___51624 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___51623);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___51624)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___51623)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___51624.call(null,"chrome.runtime.sendNativeMessage",ns_51607,"sendNativeMessage");

var config__30571__auto___51625 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51625))){
var logger__30572__auto___51626 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51625);
var prefix__30573__auto___51627 = ["calling:","chrome.runtime.sendNativeMessage"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___51626)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___51625)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___51626.apply(null,prefix__30573__auto___51627.concat(final_args_array_51606));
} else {
}

var target_51608 = (function (){var target_obj_51616 = ns_51607;
var _STAR_runtime_state_STAR_51618 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51616,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51617 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51616,(1),"sendNativeMessage",true))?(target_obj_51616["sendNativeMessage"]):null);
if(!((next_obj_51617 == null))){
return next_obj_51617;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51618;
}})();
return target_51608.apply(ns_51607,final_args_array_51606);
})();

return callback_chan_51601;
});
chromex.ext.runtime.get_platform_info_STAR_ = (function chromex$ext$runtime$get_platform_info_STAR_(config){
var callback_chan_51642 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__);
})();
var marshalled_callback_51644_51656 = ((function (callback_chan_51642){
return (function (cb_platform_info_51648){
return (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","get-platform-info","chromex.ext.runtime/get-platform-info",573309082),new cljs.core.Keyword(null,"name","name",1843675177),"getPlatformInfo",new cljs.core.Keyword(null,"since","since",315379842),"29",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"platform-info",new cljs.core.Keyword(null,"type","type",1174270348),"runtime.PlatformInfo"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_51642);
})().call(null,cb_platform_info_51648);
});})(callback_chan_51642))
;
var result_51643_51657 = (function (){var final_args_array_51645 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_51644_51656,"callback",null], null)], null),"chrome.runtime.getPlatformInfo");
var ns_51646 = (function (){var target_obj_51649 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_51652 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51649,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51650 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51649,(0),"chrome",true))?(target_obj_51649["chrome"]):null);
var next_obj_51651 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_51650,(0),"runtime",true))?(next_obj_51650["runtime"]):null);
return next_obj_51651;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51652;
}})();
var config__30575__auto___51658 = config;
var api_check_fn__30576__auto___51659 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___51658);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___51659)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___51658)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___51659.call(null,"chrome.runtime.getPlatformInfo",ns_51646,"getPlatformInfo");

var config__30571__auto___51660 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51660))){
var logger__30572__auto___51661 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51660);
var prefix__30573__auto___51662 = ["calling:","chrome.runtime.getPlatformInfo"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___51661)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___51660)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___51661.apply(null,prefix__30573__auto___51662.concat(final_args_array_51645));
} else {
}

var target_51647 = (function (){var target_obj_51653 = ns_51646;
var _STAR_runtime_state_STAR_51655 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51653,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51654 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51653,(1),"getPlatformInfo",true))?(target_obj_51653["getPlatformInfo"]):null);
if(!((next_obj_51654 == null))){
return next_obj_51654;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51655;
}})();
return target_51647.apply(ns_51646,final_args_array_51645);
})();

return callback_chan_51642;
});
chromex.ext.runtime.get_package_directory_entry_STAR_ = (function chromex$ext$runtime$get_package_directory_entry_STAR_(config){
var callback_chan_51677 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__);
})();
var marshalled_callback_51679_51691 = ((function (callback_chan_51677){
return (function (cb_directory_entry_51683){
return (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.runtime","get-package-directory-entry","chromex.ext.runtime/get-package-directory-entry",-1404865573),new cljs.core.Keyword(null,"name","name",1843675177),"getPackageDirectoryEntry",new cljs.core.Keyword(null,"since","since",315379842),"29",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"directory-entry",new cljs.core.Keyword(null,"type","type",1174270348),"DirectoryEntry"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_51677);
})().call(null,cb_directory_entry_51683);
});})(callback_chan_51677))
;
var result_51678_51692 = (function (){var final_args_array_51680 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_51679_51691,"callback",null], null)], null),"chrome.runtime.getPackageDirectoryEntry");
var ns_51681 = (function (){var target_obj_51684 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_51687 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51684,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51685 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51684,(0),"chrome",true))?(target_obj_51684["chrome"]):null);
var next_obj_51686 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_51685,(0),"runtime",true))?(next_obj_51685["runtime"]):null);
return next_obj_51686;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51687;
}})();
var config__30575__auto___51693 = config;
var api_check_fn__30576__auto___51694 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___51693);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___51694)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___51693)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___51694.call(null,"chrome.runtime.getPackageDirectoryEntry",ns_51681,"getPackageDirectoryEntry");

var config__30571__auto___51695 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51695))){
var logger__30572__auto___51696 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51695);
var prefix__30573__auto___51697 = ["calling:","chrome.runtime.getPackageDirectoryEntry"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___51696)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___51695)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___51696.apply(null,prefix__30573__auto___51697.concat(final_args_array_51680));
} else {
}

var target_51682 = (function (){var target_obj_51688 = ns_51681;
var _STAR_runtime_state_STAR_51690 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51688,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51689 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51688,(1),"getPackageDirectoryEntry",true))?(target_obj_51688["getPackageDirectoryEntry"]):null);
if(!((next_obj_51689 == null))){
return next_obj_51689;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51690;
}})();
return target_51682.apply(ns_51681,final_args_array_51680);
})();

return callback_chan_51677;
});
chromex.ext.runtime.on_startup_STAR_ = (function chromex$ext$runtime$on_startup_STAR_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___51711 = arguments.length;
var i__29681__auto___51712 = (0);
while(true){
if((i__29681__auto___51712 < len__29680__auto___51711)){
args__29687__auto__.push((arguments[i__29681__auto___51712]));

var G__51713 = (i__29681__auto___51712 + (1));
i__29681__auto___51712 = G__51713;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((2) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_startup_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29688__auto__);
});

chromex.ext.runtime.on_startup_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_51701 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-startup","chromex.ext.runtime/on-startup",-1208972204),channel);
})();
var handler_fn_51702 = event_fn_51701;
var logging_fn__37663__auto__ = ((function (event_fn_51701,handler_fn_51702){
return (function (){
var config__30571__auto___51714 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51714))){
var logger__30572__auto___51715 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51714);
var prefix__30573__auto___51716 = ["event:","chrome.runtime.onStartup"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___51715)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___51714)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___51715.apply(null,prefix__30573__auto___51716.concat(cljs.core.into_array.call(null,cljs.core.PersistentVector.EMPTY)));
} else {
}

return handler_fn_51702.call(null);
});})(event_fn_51701,handler_fn_51702))
;
var ns_obj_51703 = (function (){var target_obj_51704 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_51707 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51704,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51705 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51704,(0),"chrome",true))?(target_obj_51704["chrome"]):null);
var next_obj_51706 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_51705,(0),"runtime",true))?(next_obj_51705["runtime"]):null);
return next_obj_51706;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51707;
}})();
var config__30575__auto___51717 = config;
var api_check_fn__30576__auto___51718 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___51717);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___51718)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___51717)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___51718.call(null,"chrome.runtime.onStartup",ns_obj_51703,"onStartup");

var event_obj__37664__auto__ = (function (){var target_obj_51708 = ns_obj_51703;
var _STAR_runtime_state_STAR_51710 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51708,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51709 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51708,(0),"onStartup",true))?(target_obj_51708["onStartup"]):null);
return next_obj_51709;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51710;
}})();
var result__37665__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__37664__auto__,logging_fn__37663__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__37665__auto__,args);

return result__37665__auto__;
});

chromex.ext.runtime.on_startup_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_startup_STAR_.cljs$lang$applyTo = (function (seq51698){
var G__51699 = cljs.core.first.call(null,seq51698);
var seq51698__$1 = cljs.core.next.call(null,seq51698);
var G__51700 = cljs.core.first.call(null,seq51698__$1);
var seq51698__$2 = cljs.core.next.call(null,seq51698__$1);
return chromex.ext.runtime.on_startup_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__51699,G__51700,seq51698__$2);
});

chromex.ext.runtime.on_installed_STAR_ = (function chromex$ext$runtime$on_installed_STAR_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___51734 = arguments.length;
var i__29681__auto___51735 = (0);
while(true){
if((i__29681__auto___51735 < len__29680__auto___51734)){
args__29687__auto__.push((arguments[i__29681__auto___51735]));

var G__51736 = (i__29681__auto___51735 + (1));
i__29681__auto___51735 = G__51736;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((2) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_installed_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29688__auto__);
});

chromex.ext.runtime.on_installed_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_51722 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-installed","chromex.ext.runtime/on-installed",1653814653),channel);
})();
var handler_fn_51723 = ((function (event_fn_51722){
return (function (cb_details_51725){
return event_fn_51722.call(null,cb_details_51725);
});})(event_fn_51722))
;
var logging_fn__37663__auto__ = ((function (event_fn_51722,handler_fn_51723){
return (function (cb_param_details_51726){
var config__30571__auto___51737 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51737))){
var logger__30572__auto___51738 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51737);
var prefix__30573__auto___51739 = ["event:","chrome.runtime.onInstalled"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___51738)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___51737)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___51738.apply(null,prefix__30573__auto___51739.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_details_51726], null))));
} else {
}

return handler_fn_51723.call(null,cb_param_details_51726);
});})(event_fn_51722,handler_fn_51723))
;
var ns_obj_51724 = (function (){var target_obj_51727 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_51730 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51727,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51728 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51727,(0),"chrome",true))?(target_obj_51727["chrome"]):null);
var next_obj_51729 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_51728,(0),"runtime",true))?(next_obj_51728["runtime"]):null);
return next_obj_51729;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51730;
}})();
var config__30575__auto___51740 = config;
var api_check_fn__30576__auto___51741 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___51740);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___51741)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___51740)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___51741.call(null,"chrome.runtime.onInstalled",ns_obj_51724,"onInstalled");

var event_obj__37664__auto__ = (function (){var target_obj_51731 = ns_obj_51724;
var _STAR_runtime_state_STAR_51733 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51731,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51732 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51731,(0),"onInstalled",true))?(target_obj_51731["onInstalled"]):null);
return next_obj_51732;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51733;
}})();
var result__37665__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__37664__auto__,logging_fn__37663__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__37665__auto__,args);

return result__37665__auto__;
});

chromex.ext.runtime.on_installed_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_installed_STAR_.cljs$lang$applyTo = (function (seq51719){
var G__51720 = cljs.core.first.call(null,seq51719);
var seq51719__$1 = cljs.core.next.call(null,seq51719);
var G__51721 = cljs.core.first.call(null,seq51719__$1);
var seq51719__$2 = cljs.core.next.call(null,seq51719__$1);
return chromex.ext.runtime.on_installed_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__51720,G__51721,seq51719__$2);
});

chromex.ext.runtime.on_suspend_STAR_ = (function chromex$ext$runtime$on_suspend_STAR_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___51755 = arguments.length;
var i__29681__auto___51756 = (0);
while(true){
if((i__29681__auto___51756 < len__29680__auto___51755)){
args__29687__auto__.push((arguments[i__29681__auto___51756]));

var G__51757 = (i__29681__auto___51756 + (1));
i__29681__auto___51756 = G__51757;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((2) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_suspend_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29688__auto__);
});

chromex.ext.runtime.on_suspend_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_51745 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-suspend","chromex.ext.runtime/on-suspend",-1228920175),channel);
})();
var handler_fn_51746 = event_fn_51745;
var logging_fn__37663__auto__ = ((function (event_fn_51745,handler_fn_51746){
return (function (){
var config__30571__auto___51758 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51758))){
var logger__30572__auto___51759 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51758);
var prefix__30573__auto___51760 = ["event:","chrome.runtime.onSuspend"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___51759)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___51758)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___51759.apply(null,prefix__30573__auto___51760.concat(cljs.core.into_array.call(null,cljs.core.PersistentVector.EMPTY)));
} else {
}

return handler_fn_51746.call(null);
});})(event_fn_51745,handler_fn_51746))
;
var ns_obj_51747 = (function (){var target_obj_51748 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_51751 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51748,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51749 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51748,(0),"chrome",true))?(target_obj_51748["chrome"]):null);
var next_obj_51750 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_51749,(0),"runtime",true))?(next_obj_51749["runtime"]):null);
return next_obj_51750;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51751;
}})();
var config__30575__auto___51761 = config;
var api_check_fn__30576__auto___51762 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___51761);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___51762)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___51761)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___51762.call(null,"chrome.runtime.onSuspend",ns_obj_51747,"onSuspend");

var event_obj__37664__auto__ = (function (){var target_obj_51752 = ns_obj_51747;
var _STAR_runtime_state_STAR_51754 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51752,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51753 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51752,(0),"onSuspend",true))?(target_obj_51752["onSuspend"]):null);
return next_obj_51753;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51754;
}})();
var result__37665__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__37664__auto__,logging_fn__37663__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__37665__auto__,args);

return result__37665__auto__;
});

chromex.ext.runtime.on_suspend_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_suspend_STAR_.cljs$lang$applyTo = (function (seq51742){
var G__51743 = cljs.core.first.call(null,seq51742);
var seq51742__$1 = cljs.core.next.call(null,seq51742);
var G__51744 = cljs.core.first.call(null,seq51742__$1);
var seq51742__$2 = cljs.core.next.call(null,seq51742__$1);
return chromex.ext.runtime.on_suspend_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__51743,G__51744,seq51742__$2);
});

chromex.ext.runtime.on_suspend_canceled_STAR_ = (function chromex$ext$runtime$on_suspend_canceled_STAR_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___51776 = arguments.length;
var i__29681__auto___51777 = (0);
while(true){
if((i__29681__auto___51777 < len__29680__auto___51776)){
args__29687__auto__.push((arguments[i__29681__auto___51777]));

var G__51778 = (i__29681__auto___51777 + (1));
i__29681__auto___51777 = G__51778;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((2) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_suspend_canceled_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29688__auto__);
});

chromex.ext.runtime.on_suspend_canceled_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_51766 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-suspend-canceled","chromex.ext.runtime/on-suspend-canceled",-827432771),channel);
})();
var handler_fn_51767 = event_fn_51766;
var logging_fn__37663__auto__ = ((function (event_fn_51766,handler_fn_51767){
return (function (){
var config__30571__auto___51779 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51779))){
var logger__30572__auto___51780 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51779);
var prefix__30573__auto___51781 = ["event:","chrome.runtime.onSuspendCanceled"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___51780)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___51779)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___51780.apply(null,prefix__30573__auto___51781.concat(cljs.core.into_array.call(null,cljs.core.PersistentVector.EMPTY)));
} else {
}

return handler_fn_51767.call(null);
});})(event_fn_51766,handler_fn_51767))
;
var ns_obj_51768 = (function (){var target_obj_51769 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_51772 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51769,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51770 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51769,(0),"chrome",true))?(target_obj_51769["chrome"]):null);
var next_obj_51771 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_51770,(0),"runtime",true))?(next_obj_51770["runtime"]):null);
return next_obj_51771;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51772;
}})();
var config__30575__auto___51782 = config;
var api_check_fn__30576__auto___51783 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___51782);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___51783)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___51782)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___51783.call(null,"chrome.runtime.onSuspendCanceled",ns_obj_51768,"onSuspendCanceled");

var event_obj__37664__auto__ = (function (){var target_obj_51773 = ns_obj_51768;
var _STAR_runtime_state_STAR_51775 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51773,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51774 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51773,(0),"onSuspendCanceled",true))?(target_obj_51773["onSuspendCanceled"]):null);
return next_obj_51774;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51775;
}})();
var result__37665__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__37664__auto__,logging_fn__37663__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__37665__auto__,args);

return result__37665__auto__;
});

chromex.ext.runtime.on_suspend_canceled_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_suspend_canceled_STAR_.cljs$lang$applyTo = (function (seq51763){
var G__51764 = cljs.core.first.call(null,seq51763);
var seq51763__$1 = cljs.core.next.call(null,seq51763);
var G__51765 = cljs.core.first.call(null,seq51763__$1);
var seq51763__$2 = cljs.core.next.call(null,seq51763__$1);
return chromex.ext.runtime.on_suspend_canceled_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__51764,G__51765,seq51763__$2);
});

chromex.ext.runtime.on_update_available_STAR_ = (function chromex$ext$runtime$on_update_available_STAR_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___51799 = arguments.length;
var i__29681__auto___51800 = (0);
while(true){
if((i__29681__auto___51800 < len__29680__auto___51799)){
args__29687__auto__.push((arguments[i__29681__auto___51800]));

var G__51801 = (i__29681__auto___51800 + (1));
i__29681__auto___51800 = G__51801;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((2) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_update_available_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29688__auto__);
});

chromex.ext.runtime.on_update_available_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_51787 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-update-available","chromex.ext.runtime/on-update-available",-1242137249),channel);
})();
var handler_fn_51788 = ((function (event_fn_51787){
return (function (cb_details_51790){
return event_fn_51787.call(null,cb_details_51790);
});})(event_fn_51787))
;
var logging_fn__37663__auto__ = ((function (event_fn_51787,handler_fn_51788){
return (function (cb_param_details_51791){
var config__30571__auto___51802 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51802))){
var logger__30572__auto___51803 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51802);
var prefix__30573__auto___51804 = ["event:","chrome.runtime.onUpdateAvailable"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___51803)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___51802)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___51803.apply(null,prefix__30573__auto___51804.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_details_51791], null))));
} else {
}

return handler_fn_51788.call(null,cb_param_details_51791);
});})(event_fn_51787,handler_fn_51788))
;
var ns_obj_51789 = (function (){var target_obj_51792 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_51795 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51792,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51793 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51792,(0),"chrome",true))?(target_obj_51792["chrome"]):null);
var next_obj_51794 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_51793,(0),"runtime",true))?(next_obj_51793["runtime"]):null);
return next_obj_51794;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51795;
}})();
var config__30575__auto___51805 = config;
var api_check_fn__30576__auto___51806 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___51805);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___51806)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___51805)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___51806.call(null,"chrome.runtime.onUpdateAvailable",ns_obj_51789,"onUpdateAvailable");

var event_obj__37664__auto__ = (function (){var target_obj_51796 = ns_obj_51789;
var _STAR_runtime_state_STAR_51798 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51796,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51797 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51796,(0),"onUpdateAvailable",true))?(target_obj_51796["onUpdateAvailable"]):null);
return next_obj_51797;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51798;
}})();
var result__37665__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__37664__auto__,logging_fn__37663__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__37665__auto__,args);

return result__37665__auto__;
});

chromex.ext.runtime.on_update_available_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_update_available_STAR_.cljs$lang$applyTo = (function (seq51784){
var G__51785 = cljs.core.first.call(null,seq51784);
var seq51784__$1 = cljs.core.next.call(null,seq51784);
var G__51786 = cljs.core.first.call(null,seq51784__$1);
var seq51784__$2 = cljs.core.next.call(null,seq51784__$1);
return chromex.ext.runtime.on_update_available_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__51785,G__51786,seq51784__$2);
});

chromex.ext.runtime.on_browser_update_available_STAR_ = (function chromex$ext$runtime$on_browser_update_available_STAR_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___51820 = arguments.length;
var i__29681__auto___51821 = (0);
while(true){
if((i__29681__auto___51821 < len__29680__auto___51820)){
args__29687__auto__.push((arguments[i__29681__auto___51821]));

var G__51822 = (i__29681__auto___51821 + (1));
i__29681__auto___51821 = G__51822;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((2) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_browser_update_available_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29688__auto__);
});

chromex.ext.runtime.on_browser_update_available_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_51810 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-browser-update-available","chromex.ext.runtime/on-browser-update-available",-2070315485),channel);
})();
var handler_fn_51811 = event_fn_51810;
var logging_fn__37663__auto__ = ((function (event_fn_51810,handler_fn_51811){
return (function (){
var config__30571__auto___51823 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51823))){
var logger__30572__auto___51824 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51823);
var prefix__30573__auto___51825 = ["event:","chrome.runtime.onBrowserUpdateAvailable"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___51824)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___51823)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___51824.apply(null,prefix__30573__auto___51825.concat(cljs.core.into_array.call(null,cljs.core.PersistentVector.EMPTY)));
} else {
}

return handler_fn_51811.call(null);
});})(event_fn_51810,handler_fn_51811))
;
var ns_obj_51812 = (function (){var target_obj_51813 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_51816 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51813,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51814 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51813,(0),"chrome",true))?(target_obj_51813["chrome"]):null);
var next_obj_51815 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_51814,(0),"runtime",true))?(next_obj_51814["runtime"]):null);
return next_obj_51815;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51816;
}})();
var config__30575__auto___51826 = config;
var api_check_fn__30576__auto___51827 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___51826);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___51827)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___51826)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___51827.call(null,"chrome.runtime.onBrowserUpdateAvailable",ns_obj_51812,"onBrowserUpdateAvailable");

var event_obj__37664__auto__ = (function (){var target_obj_51817 = ns_obj_51812;
var _STAR_runtime_state_STAR_51819 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51817,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51818 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51817,(0),"onBrowserUpdateAvailable",true))?(target_obj_51817["onBrowserUpdateAvailable"]):null);
return next_obj_51818;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51819;
}})();
var result__37665__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__37664__auto__,logging_fn__37663__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__37665__auto__,args);

return result__37665__auto__;
});

chromex.ext.runtime.on_browser_update_available_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_browser_update_available_STAR_.cljs$lang$applyTo = (function (seq51807){
var G__51808 = cljs.core.first.call(null,seq51807);
var seq51807__$1 = cljs.core.next.call(null,seq51807);
var G__51809 = cljs.core.first.call(null,seq51807__$1);
var seq51807__$2 = cljs.core.next.call(null,seq51807__$1);
return chromex.ext.runtime.on_browser_update_available_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__51808,G__51809,seq51807__$2);
});

chromex.ext.runtime.on_connect_STAR_ = (function chromex$ext$runtime$on_connect_STAR_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___51843 = arguments.length;
var i__29681__auto___51844 = (0);
while(true){
if((i__29681__auto___51844 < len__29680__auto___51843)){
args__29687__auto__.push((arguments[i__29681__auto___51844]));

var G__51845 = (i__29681__auto___51844 + (1));
i__29681__auto___51844 = G__51845;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((2) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_connect_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29688__auto__);
});

chromex.ext.runtime.on_connect_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_51831 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-connect","chromex.ext.runtime/on-connect",-693825711),channel);
})();
var handler_fn_51832 = ((function (event_fn_51831){
return (function (cb_port_51834){
return event_fn_51831.call(null,chromex.marshalling.from_native_chrome_port.call(null,config,cb_port_51834));
});})(event_fn_51831))
;
var logging_fn__37663__auto__ = ((function (event_fn_51831,handler_fn_51832){
return (function (cb_param_port_51835){
var config__30571__auto___51846 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51846))){
var logger__30572__auto___51847 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51846);
var prefix__30573__auto___51848 = ["event:","chrome.runtime.onConnect"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___51847)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___51846)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___51847.apply(null,prefix__30573__auto___51848.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_port_51835], null))));
} else {
}

return handler_fn_51832.call(null,cb_param_port_51835);
});})(event_fn_51831,handler_fn_51832))
;
var ns_obj_51833 = (function (){var target_obj_51836 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_51839 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51836,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51837 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51836,(0),"chrome",true))?(target_obj_51836["chrome"]):null);
var next_obj_51838 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_51837,(0),"runtime",true))?(next_obj_51837["runtime"]):null);
return next_obj_51838;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51839;
}})();
var config__30575__auto___51849 = config;
var api_check_fn__30576__auto___51850 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___51849);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___51850)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___51849)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___51850.call(null,"chrome.runtime.onConnect",ns_obj_51833,"onConnect");

var event_obj__37664__auto__ = (function (){var target_obj_51840 = ns_obj_51833;
var _STAR_runtime_state_STAR_51842 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51840,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51841 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51840,(0),"onConnect",true))?(target_obj_51840["onConnect"]):null);
return next_obj_51841;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51842;
}})();
var result__37665__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__37664__auto__,logging_fn__37663__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__37665__auto__,args);

return result__37665__auto__;
});

chromex.ext.runtime.on_connect_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_connect_STAR_.cljs$lang$applyTo = (function (seq51828){
var G__51829 = cljs.core.first.call(null,seq51828);
var seq51828__$1 = cljs.core.next.call(null,seq51828);
var G__51830 = cljs.core.first.call(null,seq51828__$1);
var seq51828__$2 = cljs.core.next.call(null,seq51828__$1);
return chromex.ext.runtime.on_connect_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__51829,G__51830,seq51828__$2);
});

chromex.ext.runtime.on_connect_external_STAR_ = (function chromex$ext$runtime$on_connect_external_STAR_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___51866 = arguments.length;
var i__29681__auto___51867 = (0);
while(true){
if((i__29681__auto___51867 < len__29680__auto___51866)){
args__29687__auto__.push((arguments[i__29681__auto___51867]));

var G__51868 = (i__29681__auto___51867 + (1));
i__29681__auto___51867 = G__51868;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((2) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_connect_external_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29688__auto__);
});

chromex.ext.runtime.on_connect_external_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_51854 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-connect-external","chromex.ext.runtime/on-connect-external",-2057644994),channel);
})();
var handler_fn_51855 = ((function (event_fn_51854){
return (function (cb_port_51857){
return event_fn_51854.call(null,chromex.marshalling.from_native_chrome_port.call(null,config,cb_port_51857));
});})(event_fn_51854))
;
var logging_fn__37663__auto__ = ((function (event_fn_51854,handler_fn_51855){
return (function (cb_param_port_51858){
var config__30571__auto___51869 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51869))){
var logger__30572__auto___51870 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51869);
var prefix__30573__auto___51871 = ["event:","chrome.runtime.onConnectExternal"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___51870)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___51869)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___51870.apply(null,prefix__30573__auto___51871.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_port_51858], null))));
} else {
}

return handler_fn_51855.call(null,cb_param_port_51858);
});})(event_fn_51854,handler_fn_51855))
;
var ns_obj_51856 = (function (){var target_obj_51859 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_51862 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51859,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51860 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51859,(0),"chrome",true))?(target_obj_51859["chrome"]):null);
var next_obj_51861 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_51860,(0),"runtime",true))?(next_obj_51860["runtime"]):null);
return next_obj_51861;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51862;
}})();
var config__30575__auto___51872 = config;
var api_check_fn__30576__auto___51873 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___51872);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___51873)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___51872)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___51873.call(null,"chrome.runtime.onConnectExternal",ns_obj_51856,"onConnectExternal");

var event_obj__37664__auto__ = (function (){var target_obj_51863 = ns_obj_51856;
var _STAR_runtime_state_STAR_51865 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51863,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51864 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51863,(0),"onConnectExternal",true))?(target_obj_51863["onConnectExternal"]):null);
return next_obj_51864;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51865;
}})();
var result__37665__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__37664__auto__,logging_fn__37663__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__37665__auto__,args);

return result__37665__auto__;
});

chromex.ext.runtime.on_connect_external_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_connect_external_STAR_.cljs$lang$applyTo = (function (seq51851){
var G__51852 = cljs.core.first.call(null,seq51851);
var seq51851__$1 = cljs.core.next.call(null,seq51851);
var G__51853 = cljs.core.first.call(null,seq51851__$1);
var seq51851__$2 = cljs.core.next.call(null,seq51851__$1);
return chromex.ext.runtime.on_connect_external_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__51852,G__51853,seq51851__$2);
});

chromex.ext.runtime.on_message_STAR_ = (function chromex$ext$runtime$on_message_STAR_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___51893 = arguments.length;
var i__29681__auto___51894 = (0);
while(true){
if((i__29681__auto___51894 < len__29680__auto___51893)){
args__29687__auto__.push((arguments[i__29681__auto___51894]));

var G__51895 = (i__29681__auto___51894 + (1));
i__29681__auto___51894 = G__51895;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((2) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_message_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29688__auto__);
});

chromex.ext.runtime.on_message_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_51877 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-message","chromex.ext.runtime/on-message",2147364293),channel);
})();
var handler_fn_51878 = ((function (event_fn_51877){
return (function (cb_message_51880,cb_sender_51881,cb_send_response_51882){
return event_fn_51877.call(null,cb_message_51880,cb_sender_51881,cb_send_response_51882);
});})(event_fn_51877))
;
var logging_fn__37663__auto__ = ((function (event_fn_51877,handler_fn_51878){
return (function (cb_param_message_51883,cb_param_sender_51884,cb_param_send_response_51885){
var config__30571__auto___51896 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51896))){
var logger__30572__auto___51897 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51896);
var prefix__30573__auto___51898 = ["event:","chrome.runtime.onMessage"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___51897)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___51896)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___51897.apply(null,prefix__30573__auto___51898.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_message_51883,cb_param_sender_51884,cb_param_send_response_51885], null))));
} else {
}

return handler_fn_51878.call(null,cb_param_message_51883,cb_param_sender_51884,cb_param_send_response_51885);
});})(event_fn_51877,handler_fn_51878))
;
var ns_obj_51879 = (function (){var target_obj_51886 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_51889 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51886,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51887 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51886,(0),"chrome",true))?(target_obj_51886["chrome"]):null);
var next_obj_51888 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_51887,(0),"runtime",true))?(next_obj_51887["runtime"]):null);
return next_obj_51888;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51889;
}})();
var config__30575__auto___51899 = config;
var api_check_fn__30576__auto___51900 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___51899);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___51900)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___51899)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___51900.call(null,"chrome.runtime.onMessage",ns_obj_51879,"onMessage");

var event_obj__37664__auto__ = (function (){var target_obj_51890 = ns_obj_51879;
var _STAR_runtime_state_STAR_51892 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51890,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51891 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51890,(0),"onMessage",true))?(target_obj_51890["onMessage"]):null);
return next_obj_51891;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51892;
}})();
var result__37665__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__37664__auto__,logging_fn__37663__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__37665__auto__,args);

return result__37665__auto__;
});

chromex.ext.runtime.on_message_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_message_STAR_.cljs$lang$applyTo = (function (seq51874){
var G__51875 = cljs.core.first.call(null,seq51874);
var seq51874__$1 = cljs.core.next.call(null,seq51874);
var G__51876 = cljs.core.first.call(null,seq51874__$1);
var seq51874__$2 = cljs.core.next.call(null,seq51874__$1);
return chromex.ext.runtime.on_message_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__51875,G__51876,seq51874__$2);
});

chromex.ext.runtime.on_message_external_STAR_ = (function chromex$ext$runtime$on_message_external_STAR_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___51920 = arguments.length;
var i__29681__auto___51921 = (0);
while(true){
if((i__29681__auto___51921 < len__29680__auto___51920)){
args__29687__auto__.push((arguments[i__29681__auto___51921]));

var G__51922 = (i__29681__auto___51921 + (1));
i__29681__auto___51921 = G__51922;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((2) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_message_external_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29688__auto__);
});

chromex.ext.runtime.on_message_external_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_51904 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-message-external","chromex.ext.runtime/on-message-external",-779703990),channel);
})();
var handler_fn_51905 = ((function (event_fn_51904){
return (function (cb_message_51907,cb_sender_51908,cb_send_response_51909){
return event_fn_51904.call(null,cb_message_51907,cb_sender_51908,cb_send_response_51909);
});})(event_fn_51904))
;
var logging_fn__37663__auto__ = ((function (event_fn_51904,handler_fn_51905){
return (function (cb_param_message_51910,cb_param_sender_51911,cb_param_send_response_51912){
var config__30571__auto___51923 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51923))){
var logger__30572__auto___51924 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51923);
var prefix__30573__auto___51925 = ["event:","chrome.runtime.onMessageExternal"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___51924)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___51923)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___51924.apply(null,prefix__30573__auto___51925.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_message_51910,cb_param_sender_51911,cb_param_send_response_51912], null))));
} else {
}

return handler_fn_51905.call(null,cb_param_message_51910,cb_param_sender_51911,cb_param_send_response_51912);
});})(event_fn_51904,handler_fn_51905))
;
var ns_obj_51906 = (function (){var target_obj_51913 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_51916 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51913,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51914 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51913,(0),"chrome",true))?(target_obj_51913["chrome"]):null);
var next_obj_51915 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_51914,(0),"runtime",true))?(next_obj_51914["runtime"]):null);
return next_obj_51915;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51916;
}})();
var config__30575__auto___51926 = config;
var api_check_fn__30576__auto___51927 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___51926);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___51927)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___51926)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___51927.call(null,"chrome.runtime.onMessageExternal",ns_obj_51906,"onMessageExternal");

var event_obj__37664__auto__ = (function (){var target_obj_51917 = ns_obj_51906;
var _STAR_runtime_state_STAR_51919 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51917,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51918 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51917,(0),"onMessageExternal",true))?(target_obj_51917["onMessageExternal"]):null);
return next_obj_51918;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51919;
}})();
var result__37665__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__37664__auto__,logging_fn__37663__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__37665__auto__,args);

return result__37665__auto__;
});

chromex.ext.runtime.on_message_external_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_message_external_STAR_.cljs$lang$applyTo = (function (seq51901){
var G__51902 = cljs.core.first.call(null,seq51901);
var seq51901__$1 = cljs.core.next.call(null,seq51901);
var G__51903 = cljs.core.first.call(null,seq51901__$1);
var seq51901__$2 = cljs.core.next.call(null,seq51901__$1);
return chromex.ext.runtime.on_message_external_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__51902,G__51903,seq51901__$2);
});

chromex.ext.runtime.on_restart_required_STAR_ = (function chromex$ext$runtime$on_restart_required_STAR_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___51943 = arguments.length;
var i__29681__auto___51944 = (0);
while(true){
if((i__29681__auto___51944 < len__29680__auto___51943)){
args__29687__auto__.push((arguments[i__29681__auto___51944]));

var G__51945 = (i__29681__auto___51944 + (1));
i__29681__auto___51944 = G__51945;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((2) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_restart_required_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29688__auto__);
});

chromex.ext.runtime.on_restart_required_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_51931 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.Keyword("chromex.ext.runtime","on-restart-required","chromex.ext.runtime/on-restart-required",-754128621),channel);
})();
var handler_fn_51932 = ((function (event_fn_51931){
return (function (cb_reason_51934){
return event_fn_51931.call(null,cb_reason_51934);
});})(event_fn_51931))
;
var logging_fn__37663__auto__ = ((function (event_fn_51931,handler_fn_51932){
return (function (cb_param_reason_51935){
var config__30571__auto___51946 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51946))){
var logger__30572__auto___51947 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___51946);
var prefix__30573__auto___51948 = ["event:","chrome.runtime.onRestartRequired"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___51947)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___51946)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___51947.apply(null,prefix__30573__auto___51948.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_reason_51935], null))));
} else {
}

return handler_fn_51932.call(null,cb_param_reason_51935);
});})(event_fn_51931,handler_fn_51932))
;
var ns_obj_51933 = (function (){var target_obj_51936 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_51939 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51936,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51937 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51936,(0),"chrome",true))?(target_obj_51936["chrome"]):null);
var next_obj_51938 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_51937,(0),"runtime",true))?(next_obj_51937["runtime"]):null);
return next_obj_51938;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51939;
}})();
var config__30575__auto___51949 = config;
var api_check_fn__30576__auto___51950 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___51949);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___51950)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___51949)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___51950.call(null,"chrome.runtime.onRestartRequired",ns_obj_51933,"onRestartRequired");

var event_obj__37664__auto__ = (function (){var target_obj_51940 = ns_obj_51933;
var _STAR_runtime_state_STAR_51942 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51940,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_51941 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51940,(0),"onRestartRequired",true))?(target_obj_51940["onRestartRequired"]):null);
return next_obj_51941;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51942;
}})();
var result__37665__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__37664__auto__,logging_fn__37663__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__37665__auto__,args);

return result__37665__auto__;
});

chromex.ext.runtime.on_restart_required_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_restart_required_STAR_.cljs$lang$applyTo = (function (seq51928){
var G__51929 = cljs.core.first.call(null,seq51928);
var seq51928__$1 = cljs.core.next.call(null,seq51928);
var G__51930 = cljs.core.first.call(null,seq51928__$1);
var seq51928__$2 = cljs.core.next.call(null,seq51928__$1);
return chromex.ext.runtime.on_restart_required_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__51929,G__51930,seq51928__$2);
});


//# sourceMappingURL=runtime.js.map?rel=1497481556121