// Compiled by ClojureScript 1.9.562 {}
goog.provide('chromex.ext.storage');
goog.require('cljs.core');
goog.require('chromex.core');
chromex.ext.storage.sync_STAR_ = (function chromex$ext$storage$sync_STAR_(config){
var result_52008 = (function (){var final_args_array_52009 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.storage.sync");
var ns_52010 = (function (){var target_obj_52012 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_52015 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_52012,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_52013 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_52012,(0),"chrome",true))?(target_obj_52012["chrome"]):null);
var next_obj_52014 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_52013,(0),"storage",true))?(next_obj_52013["storage"]):null);
return next_obj_52014;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_52015;
}})();

var config__30571__auto___52019 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___52019))){
var logger__30572__auto___52020 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___52019);
var prefix__30573__auto___52021 = ["accessing:","chrome.storage.sync"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___52020)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___52019)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___52020.apply(null,prefix__30573__auto___52021.concat(final_args_array_52009));
} else {
}

var target_52011 = (function (){var target_obj_52016 = ns_52010;
var _STAR_runtime_state_STAR_52018 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_52016,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_52017 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_52016,(1),"sync",true))?(target_obj_52016["sync"]):null);
if(!((next_obj_52017 == null))){
return next_obj_52017;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_52018;
}})();
return target_52011;
})();
return chromex.marshalling.from_native_chrome_storage_area.call(null,config,result_52008);
});
chromex.ext.storage.local_STAR_ = (function chromex$ext$storage$local_STAR_(config){
var result_52033 = (function (){var final_args_array_52034 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.storage.local");
var ns_52035 = (function (){var target_obj_52037 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_52040 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_52037,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_52038 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_52037,(0),"chrome",true))?(target_obj_52037["chrome"]):null);
var next_obj_52039 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_52038,(0),"storage",true))?(next_obj_52038["storage"]):null);
return next_obj_52039;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_52040;
}})();

var config__30571__auto___52044 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___52044))){
var logger__30572__auto___52045 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___52044);
var prefix__30573__auto___52046 = ["accessing:","chrome.storage.local"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___52045)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___52044)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___52045.apply(null,prefix__30573__auto___52046.concat(final_args_array_52034));
} else {
}

var target_52036 = (function (){var target_obj_52041 = ns_52035;
var _STAR_runtime_state_STAR_52043 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_52041,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_52042 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_52041,(1),"local",true))?(target_obj_52041["local"]):null);
if(!((next_obj_52042 == null))){
return next_obj_52042;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_52043;
}})();
return target_52036;
})();
return chromex.marshalling.from_native_chrome_storage_area.call(null,config,result_52033);
});
chromex.ext.storage.managed_STAR_ = (function chromex$ext$storage$managed_STAR_(config){
var result_52058 = (function (){var final_args_array_52059 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.storage.managed");
var ns_52060 = (function (){var target_obj_52062 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_52065 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_52062,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_52063 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_52062,(0),"chrome",true))?(target_obj_52062["chrome"]):null);
var next_obj_52064 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_52063,(0),"storage",true))?(next_obj_52063["storage"]):null);
return next_obj_52064;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_52065;
}})();

var config__30571__auto___52069 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___52069))){
var logger__30572__auto___52070 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___52069);
var prefix__30573__auto___52071 = ["accessing:","chrome.storage.managed"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___52070)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___52069)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___52070.apply(null,prefix__30573__auto___52071.concat(final_args_array_52059));
} else {
}

var target_52061 = (function (){var target_obj_52066 = ns_52060;
var _STAR_runtime_state_STAR_52068 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_52066,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_52067 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_52066,(1),"managed",true))?(target_obj_52066["managed"]):null);
if(!((next_obj_52067 == null))){
return next_obj_52067;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_52068;
}})();
return target_52061;
})();
return chromex.marshalling.from_native_chrome_storage_area.call(null,config,result_52058);
});
chromex.ext.storage.on_changed_STAR_ = (function chromex$ext$storage$on_changed_STAR_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___52089 = arguments.length;
var i__29681__auto___52090 = (0);
while(true){
if((i__29681__auto___52090 < len__29680__auto___52089)){
args__29687__auto__.push((arguments[i__29681__auto___52090]));

var G__52091 = (i__29681__auto___52090 + (1));
i__29681__auto___52090 = G__52091;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((2) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((2)),(0),null)):null);
return chromex.ext.storage.on_changed_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29688__auto__);
});

chromex.ext.storage.on_changed_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_52075 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.Keyword("chromex.ext.storage","on-changed","chromex.ext.storage/on-changed",-1738146817),channel);
})();
var handler_fn_52076 = ((function (event_fn_52075){
return (function (cb_changes_52078,cb_area_name_52079){
return event_fn_52075.call(null,cb_changes_52078,cb_area_name_52079);
});})(event_fn_52075))
;
var logging_fn__37663__auto__ = ((function (event_fn_52075,handler_fn_52076){
return (function (cb_param_changes_52080,cb_param_area_name_52081){
var config__30571__auto___52092 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___52092))){
var logger__30572__auto___52093 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___52092);
var prefix__30573__auto___52094 = ["event:","chrome.storage.onChanged"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___52093)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___52092)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___52093.apply(null,prefix__30573__auto___52094.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_changes_52080,cb_param_area_name_52081], null))));
} else {
}

return handler_fn_52076.call(null,cb_param_changes_52080,cb_param_area_name_52081);
});})(event_fn_52075,handler_fn_52076))
;
var ns_obj_52077 = (function (){var target_obj_52082 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_52085 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_52082,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_52083 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_52082,(0),"chrome",true))?(target_obj_52082["chrome"]):null);
var next_obj_52084 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_52083,(0),"storage",true))?(next_obj_52083["storage"]):null);
return next_obj_52084;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_52085;
}})();
var config__30575__auto___52095 = config;
var api_check_fn__30576__auto___52096 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___52095);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___52096)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___52095)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___52096.call(null,"chrome.storage.onChanged",ns_obj_52077,"onChanged");

var event_obj__37664__auto__ = (function (){var target_obj_52086 = ns_obj_52077;
var _STAR_runtime_state_STAR_52088 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_52086,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_52087 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_52086,(0),"onChanged",true))?(target_obj_52086["onChanged"]):null);
return next_obj_52087;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_52088;
}})();
var result__37665__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__37664__auto__,logging_fn__37663__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__37665__auto__,args);

return result__37665__auto__;
});

chromex.ext.storage.on_changed_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.storage.on_changed_STAR_.cljs$lang$applyTo = (function (seq52072){
var G__52073 = cljs.core.first.call(null,seq52072);
var seq52072__$1 = cljs.core.next.call(null,seq52072);
var G__52074 = cljs.core.first.call(null,seq52072__$1);
var seq52072__$2 = cljs.core.next.call(null,seq52072__$1);
return chromex.ext.storage.on_changed_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__52073,G__52074,seq52072__$2);
});


//# sourceMappingURL=storage.js.map?rel=1497481556254