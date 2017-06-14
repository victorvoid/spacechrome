// Compiled by ClojureScript 1.9.562 {}
goog.provide('chromex.ext.tabs');
goog.require('cljs.core');
goog.require('chromex.core');
chromex.ext.tabs.tab_id_none_STAR_ = (function chromex$ext$tabs$tab_id_none_STAR_(config){
var result_52548 = (function (){var final_args_array_52549 = chromex.support.prepare_final_args_array.call(null,cljs.core.PersistentVector.EMPTY,"chrome.tabs.TAB_ID_NONE");
var ns_52550 = (function (){var target_obj_52552 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_52555 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_52552,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_52553 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_52552,(0),"chrome",true))?(target_obj_52552["chrome"]):null);
var next_obj_52554 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_52553,(0),"tabs",true))?(next_obj_52553["tabs"]):null);
return next_obj_52554;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_52555;
}})();

var config__30571__auto___52559 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___52559))){
var logger__30572__auto___52560 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___52559);
var prefix__30573__auto___52561 = ["accessing:","chrome.tabs.TAB_ID_NONE"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___52560)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___52559)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___52560.apply(null,prefix__30573__auto___52561.concat(final_args_array_52549));
} else {
}

var target_52551 = (function (){var target_obj_52556 = ns_52550;
var _STAR_runtime_state_STAR_52558 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_52556,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_52557 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_52556,(1),"TAB_ID_NONE",true))?(target_obj_52556["TAB_ID_NONE"]):null);
if(!((next_obj_52557 == null))){
return next_obj_52557;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_52558;
}})();
return target_52551;
})();
return result_52548;
});
chromex.ext.tabs.get_STAR_ = (function chromex$ext$tabs$get_STAR_(config,tab_id){
var callback_chan_52578 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__);
})();
var marshalled_tab_id_52580_52594 = (function (){var omit_test_52585 = tab_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_52585,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_52585;
}
})();
var marshalled_callback_52581_52595 = ((function (marshalled_tab_id_52580_52594,callback_chan_52578){
return (function (cb_tab_52586){
return (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","get","chromex.ext.tabs/get",-316093846),new cljs.core.Keyword(null,"name","name",1843675177),"get",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"tab-id",new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"tab",new cljs.core.Keyword(null,"type","type",1174270348),"tabs.Tab"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_52578);
})().call(null,cb_tab_52586);
});})(marshalled_tab_id_52580_52594,callback_chan_52578))
;
var result_52579_52596 = (function (){var final_args_array_52582 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_tab_id_52580_52594,"tab-id",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_52581_52595,"callback",null], null)], null),"chrome.tabs.get");
var ns_52583 = (function (){var target_obj_52587 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_52590 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_52587,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_52588 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_52587,(0),"chrome",true))?(target_obj_52587["chrome"]):null);
var next_obj_52589 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_52588,(0),"tabs",true))?(next_obj_52588["tabs"]):null);
return next_obj_52589;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_52590;
}})();
var config__30575__auto___52597 = config;
var api_check_fn__30576__auto___52598 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___52597);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___52598)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___52597)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___52598.call(null,"chrome.tabs.get",ns_52583,"get");

var config__30571__auto___52599 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___52599))){
var logger__30572__auto___52600 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___52599);
var prefix__30573__auto___52601 = ["calling:","chrome.tabs.get"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___52600)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___52599)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___52600.apply(null,prefix__30573__auto___52601.concat(final_args_array_52582));
} else {
}

var target_52584 = (function (){var target_obj_52591 = ns_52583;
var _STAR_runtime_state_STAR_52593 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_52591,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_52592 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_52591,(1),"get",true))?(target_obj_52591["get"]):null);
if(!((next_obj_52592 == null))){
return next_obj_52592;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_52593;
}})();
return target_52584.apply(ns_52583,final_args_array_52582);
})();

return callback_chan_52578;
});
chromex.ext.tabs.get_current_STAR_ = (function chromex$ext$tabs$get_current_STAR_(config){
var callback_chan_52616 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__);
})();
var marshalled_callback_52618_52630 = ((function (callback_chan_52616){
return (function (cb_tab_52622){
return (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","get-current","chromex.ext.tabs/get-current",1123704981),new cljs.core.Keyword(null,"name","name",1843675177),"getCurrent",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"tab",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"tabs.Tab"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_52616);
})().call(null,cb_tab_52622);
});})(callback_chan_52616))
;
var result_52617_52631 = (function (){var final_args_array_52619 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_52618_52630,"callback",null], null)], null),"chrome.tabs.getCurrent");
var ns_52620 = (function (){var target_obj_52623 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_52626 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_52623,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_52624 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_52623,(0),"chrome",true))?(target_obj_52623["chrome"]):null);
var next_obj_52625 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_52624,(0),"tabs",true))?(next_obj_52624["tabs"]):null);
return next_obj_52625;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_52626;
}})();
var config__30575__auto___52632 = config;
var api_check_fn__30576__auto___52633 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___52632);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___52633)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___52632)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___52633.call(null,"chrome.tabs.getCurrent",ns_52620,"getCurrent");

var config__30571__auto___52634 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___52634))){
var logger__30572__auto___52635 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___52634);
var prefix__30573__auto___52636 = ["calling:","chrome.tabs.getCurrent"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___52635)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___52634)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___52635.apply(null,prefix__30573__auto___52636.concat(final_args_array_52619));
} else {
}

var target_52621 = (function (){var target_obj_52627 = ns_52620;
var _STAR_runtime_state_STAR_52629 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_52627,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_52628 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_52627,(1),"getCurrent",true))?(target_obj_52627["getCurrent"]):null);
if(!((next_obj_52628 == null))){
return next_obj_52628;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_52629;
}})();
return target_52621.apply(ns_52620,final_args_array_52619);
})();

return callback_chan_52616;
});
chromex.ext.tabs.connect_STAR_ = (function chromex$ext$tabs$connect_STAR_(config,tab_id,connect_info){
var marshalled_tab_id_52653 = (function (){var omit_test_52658 = tab_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_52658,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_52658;
}
})();
var marshalled_connect_info_52654 = (function (){var omit_test_52659 = connect_info;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_52659,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_52659;
}
})();
var result_52652 = (function (){var final_args_array_52655 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_tab_id_52653,"tab-id",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_connect_info_52654,"connect-info",true], null)], null),"chrome.tabs.connect");
var ns_52656 = (function (){var target_obj_52660 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_52663 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_52660,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_52661 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_52660,(0),"chrome",true))?(target_obj_52660["chrome"]):null);
var next_obj_52662 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_52661,(0),"tabs",true))?(next_obj_52661["tabs"]):null);
return next_obj_52662;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_52663;
}})();
var config__30575__auto___52667 = config;
var api_check_fn__30576__auto___52668 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___52667);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___52668)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___52667)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___52668.call(null,"chrome.tabs.connect",ns_52656,"connect");

var config__30571__auto___52669 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___52669))){
var logger__30572__auto___52670 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___52669);
var prefix__30573__auto___52671 = ["calling:","chrome.tabs.connect"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___52670)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___52669)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___52670.apply(null,prefix__30573__auto___52671.concat(final_args_array_52655));
} else {
}

var target_52657 = (function (){var target_obj_52664 = ns_52656;
var _STAR_runtime_state_STAR_52666 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_52664,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_52665 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_52664,(1),"connect",true))?(target_obj_52664["connect"]):null);
if(!((next_obj_52665 == null))){
return next_obj_52665;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_52666;
}})();
return target_52657.apply(ns_52656,final_args_array_52655);
})();
return chromex.marshalling.from_native_chrome_port.call(null,config,result_52652);
});
chromex.ext.tabs.send_request_STAR_ = (function chromex$ext$tabs$send_request_STAR_(config,tab_id,request){
var callback_chan_52690 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__);
})();
var marshalled_tab_id_52692_52708 = (function (){var omit_test_52698 = tab_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_52698,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_52698;
}
})();
var marshalled_request_52693_52709 = (function (){var omit_test_52699 = request;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_52699,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_52699;
}
})();
var marshalled_response_callback_52694_52710 = ((function (marshalled_tab_id_52692_52708,marshalled_request_52693_52709,callback_chan_52690){
return (function (cb_response_52700){
return (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","send-request","chromex.ext.tabs/send-request",1841664260),new cljs.core.Keyword(null,"name","name",1843675177),"sendRequest",new cljs.core.Keyword(null,"since","since",315379842),"33",new cljs.core.Keyword(null,"deprecated","deprecated",1498275348),"Please use 'runtime.sendMessage'.",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"tab-id",new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"request",new cljs.core.Keyword(null,"type","type",1174270348),"any"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"response-callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"response",new cljs.core.Keyword(null,"type","type",1174270348),"any"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_52690);
})().call(null,cb_response_52700);
});})(marshalled_tab_id_52692_52708,marshalled_request_52693_52709,callback_chan_52690))
;
var result_52691_52711 = (function (){var final_args_array_52695 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_tab_id_52692_52708,"tab-id",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_request_52693_52709,"request",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_response_callback_52694_52710,"response-callback",true], null)], null),"chrome.tabs.sendRequest");
var ns_52696 = (function (){var target_obj_52701 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_52704 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_52701,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_52702 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_52701,(0),"chrome",true))?(target_obj_52701["chrome"]):null);
var next_obj_52703 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_52702,(0),"tabs",true))?(next_obj_52702["tabs"]):null);
return next_obj_52703;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_52704;
}})();
var config__30575__auto___52712 = config;
var api_check_fn__30576__auto___52713 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___52712);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___52713)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___52712)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___52713.call(null,"chrome.tabs.sendRequest",ns_52696,"sendRequest");

var config__30571__auto___52714 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___52714))){
var logger__30572__auto___52715 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___52714);
var prefix__30573__auto___52716 = ["calling:","chrome.tabs.sendRequest"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___52715)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___52714)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___52715.apply(null,prefix__30573__auto___52716.concat(final_args_array_52695));
} else {
}

var target_52697 = (function (){var target_obj_52705 = ns_52696;
var _STAR_runtime_state_STAR_52707 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_52705,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_52706 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_52705,(1),"sendRequest",true))?(target_obj_52705["sendRequest"]):null);
if(!((next_obj_52706 == null))){
return next_obj_52706;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_52707;
}})();
return target_52697.apply(ns_52696,final_args_array_52695);
})();

return callback_chan_52690;
});
chromex.ext.tabs.send_message_STAR_ = (function chromex$ext$tabs$send_message_STAR_(config,tab_id,message,options){
var callback_chan_52737 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__);
})();
var marshalled_tab_id_52739_52757 = (function (){var omit_test_52746 = tab_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_52746,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_52746;
}
})();
var marshalled_message_52740_52758 = (function (){var omit_test_52747 = message;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_52747,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_52747;
}
})();
var marshalled_options_52741_52759 = (function (){var omit_test_52748 = options;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_52748,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_52748;
}
})();
var marshalled_response_callback_52742_52760 = ((function (marshalled_tab_id_52739_52757,marshalled_message_52740_52758,marshalled_options_52741_52759,callback_chan_52737){
return (function (cb_response_52749){
return (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","send-message","chromex.ext.tabs/send-message",852348520),new cljs.core.Keyword(null,"name","name",1843675177),"sendMessage",new cljs.core.Keyword(null,"since","since",315379842),"20",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"tab-id",new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"message",new cljs.core.Keyword(null,"type","type",1174270348),"any"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"options",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"object"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"response-callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"response",new cljs.core.Keyword(null,"type","type",1174270348),"any"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_52737);
})().call(null,cb_response_52749);
});})(marshalled_tab_id_52739_52757,marshalled_message_52740_52758,marshalled_options_52741_52759,callback_chan_52737))
;
var result_52738_52761 = (function (){var final_args_array_52743 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_tab_id_52739_52757,"tab-id",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_message_52740_52758,"message",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_options_52741_52759,"options",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_response_callback_52742_52760,"response-callback",true], null)], null),"chrome.tabs.sendMessage");
var ns_52744 = (function (){var target_obj_52750 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_52753 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_52750,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_52751 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_52750,(0),"chrome",true))?(target_obj_52750["chrome"]):null);
var next_obj_52752 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_52751,(0),"tabs",true))?(next_obj_52751["tabs"]):null);
return next_obj_52752;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_52753;
}})();
var config__30575__auto___52762 = config;
var api_check_fn__30576__auto___52763 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___52762);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___52763)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___52762)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___52763.call(null,"chrome.tabs.sendMessage",ns_52744,"sendMessage");

var config__30571__auto___52764 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___52764))){
var logger__30572__auto___52765 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___52764);
var prefix__30573__auto___52766 = ["calling:","chrome.tabs.sendMessage"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___52765)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___52764)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___52765.apply(null,prefix__30573__auto___52766.concat(final_args_array_52743));
} else {
}

var target_52745 = (function (){var target_obj_52754 = ns_52744;
var _STAR_runtime_state_STAR_52756 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_52754,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_52755 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_52754,(1),"sendMessage",true))?(target_obj_52754["sendMessage"]):null);
if(!((next_obj_52755 == null))){
return next_obj_52755;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_52756;
}})();
return target_52745.apply(ns_52744,final_args_array_52743);
})();

return callback_chan_52737;
});
chromex.ext.tabs.get_selected_STAR_ = (function chromex$ext$tabs$get_selected_STAR_(config,window_id){
var callback_chan_52783 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__);
})();
var marshalled_window_id_52785_52799 = (function (){var omit_test_52790 = window_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_52790,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_52790;
}
})();
var marshalled_callback_52786_52800 = ((function (marshalled_window_id_52785_52799,callback_chan_52783){
return (function (cb_tab_52791){
return (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","get-selected","chromex.ext.tabs/get-selected",703911016),new cljs.core.Keyword(null,"name","name",1843675177),"getSelected",new cljs.core.Keyword(null,"since","since",315379842),"33",new cljs.core.Keyword(null,"deprecated","deprecated",1498275348),"Please use 'tabs.query' {active: true}.",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"window-id",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"tab",new cljs.core.Keyword(null,"type","type",1174270348),"tabs.Tab"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_52783);
})().call(null,cb_tab_52791);
});})(marshalled_window_id_52785_52799,callback_chan_52783))
;
var result_52784_52801 = (function (){var final_args_array_52787 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_window_id_52785_52799,"window-id",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_52786_52800,"callback",null], null)], null),"chrome.tabs.getSelected");
var ns_52788 = (function (){var target_obj_52792 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_52795 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_52792,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_52793 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_52792,(0),"chrome",true))?(target_obj_52792["chrome"]):null);
var next_obj_52794 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_52793,(0),"tabs",true))?(next_obj_52793["tabs"]):null);
return next_obj_52794;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_52795;
}})();
var config__30575__auto___52802 = config;
var api_check_fn__30576__auto___52803 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___52802);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___52803)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___52802)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___52803.call(null,"chrome.tabs.getSelected",ns_52788,"getSelected");

var config__30571__auto___52804 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___52804))){
var logger__30572__auto___52805 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___52804);
var prefix__30573__auto___52806 = ["calling:","chrome.tabs.getSelected"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___52805)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___52804)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___52805.apply(null,prefix__30573__auto___52806.concat(final_args_array_52787));
} else {
}

var target_52789 = (function (){var target_obj_52796 = ns_52788;
var _STAR_runtime_state_STAR_52798 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_52796,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_52797 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_52796,(1),"getSelected",true))?(target_obj_52796["getSelected"]):null);
if(!((next_obj_52797 == null))){
return next_obj_52797;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_52798;
}})();
return target_52789.apply(ns_52788,final_args_array_52787);
})();

return callback_chan_52783;
});
chromex.ext.tabs.get_all_in_window_STAR_ = (function chromex$ext$tabs$get_all_in_window_STAR_(config,window_id){
var callback_chan_52823 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__);
})();
var marshalled_window_id_52825_52839 = (function (){var omit_test_52830 = window_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_52830,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_52830;
}
})();
var marshalled_callback_52826_52840 = ((function (marshalled_window_id_52825_52839,callback_chan_52823){
return (function (cb_tabs_52831){
return (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","get-all-in-window","chromex.ext.tabs/get-all-in-window",-1792427692),new cljs.core.Keyword(null,"name","name",1843675177),"getAllInWindow",new cljs.core.Keyword(null,"since","since",315379842),"33",new cljs.core.Keyword(null,"deprecated","deprecated",1498275348),"Please use 'tabs.query' {windowId: windowId}.",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"window-id",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"tabs",new cljs.core.Keyword(null,"type","type",1174270348),"[array-of-tabs.Tabs]"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_52823);
})().call(null,cb_tabs_52831);
});})(marshalled_window_id_52825_52839,callback_chan_52823))
;
var result_52824_52841 = (function (){var final_args_array_52827 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_window_id_52825_52839,"window-id",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_52826_52840,"callback",null], null)], null),"chrome.tabs.getAllInWindow");
var ns_52828 = (function (){var target_obj_52832 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_52835 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_52832,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_52833 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_52832,(0),"chrome",true))?(target_obj_52832["chrome"]):null);
var next_obj_52834 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_52833,(0),"tabs",true))?(next_obj_52833["tabs"]):null);
return next_obj_52834;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_52835;
}})();
var config__30575__auto___52842 = config;
var api_check_fn__30576__auto___52843 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___52842);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___52843)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___52842)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___52843.call(null,"chrome.tabs.getAllInWindow",ns_52828,"getAllInWindow");

var config__30571__auto___52844 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___52844))){
var logger__30572__auto___52845 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___52844);
var prefix__30573__auto___52846 = ["calling:","chrome.tabs.getAllInWindow"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___52845)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___52844)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___52845.apply(null,prefix__30573__auto___52846.concat(final_args_array_52827));
} else {
}

var target_52829 = (function (){var target_obj_52836 = ns_52828;
var _STAR_runtime_state_STAR_52838 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_52836,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_52837 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_52836,(1),"getAllInWindow",true))?(target_obj_52836["getAllInWindow"]):null);
if(!((next_obj_52837 == null))){
return next_obj_52837;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_52838;
}})();
return target_52829.apply(ns_52828,final_args_array_52827);
})();

return callback_chan_52823;
});
chromex.ext.tabs.create_STAR_ = (function chromex$ext$tabs$create_STAR_(config,create_properties){
var callback_chan_52863 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__);
})();
var marshalled_create_properties_52865_52879 = (function (){var omit_test_52870 = create_properties;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_52870,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_52870;
}
})();
var marshalled_callback_52866_52880 = ((function (marshalled_create_properties_52865_52879,callback_chan_52863){
return (function (cb_tab_52871){
return (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","create","chromex.ext.tabs/create",977742829),new cljs.core.Keyword(null,"name","name",1843675177),"create",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"create-properties",new cljs.core.Keyword(null,"type","type",1174270348),"object"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"tab",new cljs.core.Keyword(null,"type","type",1174270348),"tabs.Tab"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_52863);
})().call(null,cb_tab_52871);
});})(marshalled_create_properties_52865_52879,callback_chan_52863))
;
var result_52864_52881 = (function (){var final_args_array_52867 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_create_properties_52865_52879,"create-properties",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_52866_52880,"callback",true], null)], null),"chrome.tabs.create");
var ns_52868 = (function (){var target_obj_52872 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_52875 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_52872,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_52873 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_52872,(0),"chrome",true))?(target_obj_52872["chrome"]):null);
var next_obj_52874 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_52873,(0),"tabs",true))?(next_obj_52873["tabs"]):null);
return next_obj_52874;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_52875;
}})();
var config__30575__auto___52882 = config;
var api_check_fn__30576__auto___52883 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___52882);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___52883)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___52882)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___52883.call(null,"chrome.tabs.create",ns_52868,"create");

var config__30571__auto___52884 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___52884))){
var logger__30572__auto___52885 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___52884);
var prefix__30573__auto___52886 = ["calling:","chrome.tabs.create"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___52885)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___52884)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___52885.apply(null,prefix__30573__auto___52886.concat(final_args_array_52867));
} else {
}

var target_52869 = (function (){var target_obj_52876 = ns_52868;
var _STAR_runtime_state_STAR_52878 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_52876,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_52877 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_52876,(1),"create",true))?(target_obj_52876["create"]):null);
if(!((next_obj_52877 == null))){
return next_obj_52877;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_52878;
}})();
return target_52869.apply(ns_52868,final_args_array_52867);
})();

return callback_chan_52863;
});
chromex.ext.tabs.duplicate_STAR_ = (function chromex$ext$tabs$duplicate_STAR_(config,tab_id){
var callback_chan_52903 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__);
})();
var marshalled_tab_id_52905_52919 = (function (){var omit_test_52910 = tab_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_52910,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_52910;
}
})();
var marshalled_callback_52906_52920 = ((function (marshalled_tab_id_52905_52919,callback_chan_52903){
return (function (cb_tab_52911){
return (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","duplicate","chromex.ext.tabs/duplicate",-2107191215),new cljs.core.Keyword(null,"name","name",1843675177),"duplicate",new cljs.core.Keyword(null,"since","since",315379842),"23",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"tab-id",new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"tab",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"tabs.Tab"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_52903);
})().call(null,cb_tab_52911);
});})(marshalled_tab_id_52905_52919,callback_chan_52903))
;
var result_52904_52921 = (function (){var final_args_array_52907 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_tab_id_52905_52919,"tab-id",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_52906_52920,"callback",true], null)], null),"chrome.tabs.duplicate");
var ns_52908 = (function (){var target_obj_52912 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_52915 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_52912,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_52913 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_52912,(0),"chrome",true))?(target_obj_52912["chrome"]):null);
var next_obj_52914 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_52913,(0),"tabs",true))?(next_obj_52913["tabs"]):null);
return next_obj_52914;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_52915;
}})();
var config__30575__auto___52922 = config;
var api_check_fn__30576__auto___52923 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___52922);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___52923)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___52922)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___52923.call(null,"chrome.tabs.duplicate",ns_52908,"duplicate");

var config__30571__auto___52924 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___52924))){
var logger__30572__auto___52925 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___52924);
var prefix__30573__auto___52926 = ["calling:","chrome.tabs.duplicate"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___52925)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___52924)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___52925.apply(null,prefix__30573__auto___52926.concat(final_args_array_52907));
} else {
}

var target_52909 = (function (){var target_obj_52916 = ns_52908;
var _STAR_runtime_state_STAR_52918 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_52916,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_52917 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_52916,(1),"duplicate",true))?(target_obj_52916["duplicate"]):null);
if(!((next_obj_52917 == null))){
return next_obj_52917;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_52918;
}})();
return target_52909.apply(ns_52908,final_args_array_52907);
})();

return callback_chan_52903;
});
chromex.ext.tabs.query_STAR_ = (function chromex$ext$tabs$query_STAR_(config,query_info){
var callback_chan_52943 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__);
})();
var marshalled_query_info_52945_52959 = (function (){var omit_test_52950 = query_info;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_52950,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_52950;
}
})();
var marshalled_callback_52946_52960 = ((function (marshalled_query_info_52945_52959,callback_chan_52943){
return (function (cb_result_52951){
return (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","query","chromex.ext.tabs/query",994669091),new cljs.core.Keyword(null,"name","name",1843675177),"query",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"query-info",new cljs.core.Keyword(null,"type","type",1174270348),"object"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"result",new cljs.core.Keyword(null,"type","type",1174270348),"[array-of-tabs.Tabs]"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_52943);
})().call(null,cb_result_52951);
});})(marshalled_query_info_52945_52959,callback_chan_52943))
;
var result_52944_52961 = (function (){var final_args_array_52947 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_query_info_52945_52959,"query-info",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_52946_52960,"callback",null], null)], null),"chrome.tabs.query");
var ns_52948 = (function (){var target_obj_52952 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_52955 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_52952,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_52953 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_52952,(0),"chrome",true))?(target_obj_52952["chrome"]):null);
var next_obj_52954 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_52953,(0),"tabs",true))?(next_obj_52953["tabs"]):null);
return next_obj_52954;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_52955;
}})();
var config__30575__auto___52962 = config;
var api_check_fn__30576__auto___52963 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___52962);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___52963)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___52962)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___52963.call(null,"chrome.tabs.query",ns_52948,"query");

var config__30571__auto___52964 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___52964))){
var logger__30572__auto___52965 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___52964);
var prefix__30573__auto___52966 = ["calling:","chrome.tabs.query"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___52965)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___52964)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___52965.apply(null,prefix__30573__auto___52966.concat(final_args_array_52947));
} else {
}

var target_52949 = (function (){var target_obj_52956 = ns_52948;
var _STAR_runtime_state_STAR_52958 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_52956,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_52957 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_52956,(1),"query",true))?(target_obj_52956["query"]):null);
if(!((next_obj_52957 == null))){
return next_obj_52957;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_52958;
}})();
return target_52949.apply(ns_52948,final_args_array_52947);
})();

return callback_chan_52943;
});
chromex.ext.tabs.highlight_STAR_ = (function chromex$ext$tabs$highlight_STAR_(config,highlight_info){
var callback_chan_52983 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__);
})();
var marshalled_highlight_info_52985_52999 = (function (){var omit_test_52990 = highlight_info;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_52990,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_52990;
}
})();
var marshalled_callback_52986_53000 = ((function (marshalled_highlight_info_52985_52999,callback_chan_52983){
return (function (cb_window_52991){
return (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","highlight","chromex.ext.tabs/highlight",1227370148),new cljs.core.Keyword(null,"name","name",1843675177),"highlight",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"highlight-info",new cljs.core.Keyword(null,"type","type",1174270348),"object"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"window",new cljs.core.Keyword(null,"type","type",1174270348),"windows.Window"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_52983);
})().call(null,cb_window_52991);
});})(marshalled_highlight_info_52985_52999,callback_chan_52983))
;
var result_52984_53001 = (function (){var final_args_array_52987 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_highlight_info_52985_52999,"highlight-info",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_52986_53000,"callback",true], null)], null),"chrome.tabs.highlight");
var ns_52988 = (function (){var target_obj_52992 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_52995 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_52992,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_52993 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_52992,(0),"chrome",true))?(target_obj_52992["chrome"]):null);
var next_obj_52994 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_52993,(0),"tabs",true))?(next_obj_52993["tabs"]):null);
return next_obj_52994;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_52995;
}})();
var config__30575__auto___53002 = config;
var api_check_fn__30576__auto___53003 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___53002);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___53003)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___53002)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___53003.call(null,"chrome.tabs.highlight",ns_52988,"highlight");

var config__30571__auto___53004 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53004))){
var logger__30572__auto___53005 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53004);
var prefix__30573__auto___53006 = ["calling:","chrome.tabs.highlight"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___53005)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___53004)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___53005.apply(null,prefix__30573__auto___53006.concat(final_args_array_52987));
} else {
}

var target_52989 = (function (){var target_obj_52996 = ns_52988;
var _STAR_runtime_state_STAR_52998 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_52996,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_52997 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_52996,(1),"highlight",true))?(target_obj_52996["highlight"]):null);
if(!((next_obj_52997 == null))){
return next_obj_52997;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_52998;
}})();
return target_52989.apply(ns_52988,final_args_array_52987);
})();

return callback_chan_52983;
});
chromex.ext.tabs.update_STAR_ = (function chromex$ext$tabs$update_STAR_(config,tab_id,update_properties){
var callback_chan_53025 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__);
})();
var marshalled_tab_id_53027_53043 = (function (){var omit_test_53033 = tab_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_53033,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_53033;
}
})();
var marshalled_update_properties_53028_53044 = (function (){var omit_test_53034 = update_properties;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_53034,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_53034;
}
})();
var marshalled_callback_53029_53045 = ((function (marshalled_tab_id_53027_53043,marshalled_update_properties_53028_53044,callback_chan_53025){
return (function (cb_tab_53035){
return (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","update","chromex.ext.tabs/update",-965021465),new cljs.core.Keyword(null,"name","name",1843675177),"update",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"tab-id",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"update-properties",new cljs.core.Keyword(null,"type","type",1174270348),"object"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"tab",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"tabs.Tab"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_53025);
})().call(null,cb_tab_53035);
});})(marshalled_tab_id_53027_53043,marshalled_update_properties_53028_53044,callback_chan_53025))
;
var result_53026_53046 = (function (){var final_args_array_53030 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_tab_id_53027_53043,"tab-id",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_update_properties_53028_53044,"update-properties",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_53029_53045,"callback",true], null)], null),"chrome.tabs.update");
var ns_53031 = (function (){var target_obj_53036 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_53039 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53036,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53037 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53036,(0),"chrome",true))?(target_obj_53036["chrome"]):null);
var next_obj_53038 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_53037,(0),"tabs",true))?(next_obj_53037["tabs"]):null);
return next_obj_53038;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53039;
}})();
var config__30575__auto___53047 = config;
var api_check_fn__30576__auto___53048 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___53047);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___53048)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___53047)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___53048.call(null,"chrome.tabs.update",ns_53031,"update");

var config__30571__auto___53049 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53049))){
var logger__30572__auto___53050 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53049);
var prefix__30573__auto___53051 = ["calling:","chrome.tabs.update"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___53050)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___53049)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___53050.apply(null,prefix__30573__auto___53051.concat(final_args_array_53030));
} else {
}

var target_53032 = (function (){var target_obj_53040 = ns_53031;
var _STAR_runtime_state_STAR_53042 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53040,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53041 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53040,(1),"update",true))?(target_obj_53040["update"]):null);
if(!((next_obj_53041 == null))){
return next_obj_53041;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53042;
}})();
return target_53032.apply(ns_53031,final_args_array_53030);
})();

return callback_chan_53025;
});
chromex.ext.tabs.move_STAR_ = (function chromex$ext$tabs$move_STAR_(config,tab_ids,move_properties){
var callback_chan_53070 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__);
})();
var marshalled_tab_ids_53072_53088 = (function (){var omit_test_53078 = tab_ids;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_53078,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_53078;
}
})();
var marshalled_move_properties_53073_53089 = (function (){var omit_test_53079 = move_properties;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_53079,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_53079;
}
})();
var marshalled_callback_53074_53090 = ((function (marshalled_tab_ids_53072_53088,marshalled_move_properties_53073_53089,callback_chan_53070){
return (function (cb_tabs_53080){
return (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","move","chromex.ext.tabs/move",434564936),new cljs.core.Keyword(null,"name","name",1843675177),"move",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"tab-ids",new cljs.core.Keyword(null,"type","type",1174270348),"integer-or-[array-of-integers]"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"move-properties",new cljs.core.Keyword(null,"type","type",1174270348),"object"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"tabs",new cljs.core.Keyword(null,"type","type",1174270348),"tabs.Tab-or-[array-of-tabs.Tabs]"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_53070);
})().call(null,cb_tabs_53080);
});})(marshalled_tab_ids_53072_53088,marshalled_move_properties_53073_53089,callback_chan_53070))
;
var result_53071_53091 = (function (){var final_args_array_53075 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_tab_ids_53072_53088,"tab-ids",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_move_properties_53073_53089,"move-properties",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_53074_53090,"callback",true], null)], null),"chrome.tabs.move");
var ns_53076 = (function (){var target_obj_53081 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_53084 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53081,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53082 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53081,(0),"chrome",true))?(target_obj_53081["chrome"]):null);
var next_obj_53083 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_53082,(0),"tabs",true))?(next_obj_53082["tabs"]):null);
return next_obj_53083;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53084;
}})();
var config__30575__auto___53092 = config;
var api_check_fn__30576__auto___53093 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___53092);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___53093)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___53092)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___53093.call(null,"chrome.tabs.move",ns_53076,"move");

var config__30571__auto___53094 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53094))){
var logger__30572__auto___53095 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53094);
var prefix__30573__auto___53096 = ["calling:","chrome.tabs.move"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___53095)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___53094)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___53095.apply(null,prefix__30573__auto___53096.concat(final_args_array_53075));
} else {
}

var target_53077 = (function (){var target_obj_53085 = ns_53076;
var _STAR_runtime_state_STAR_53087 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53085,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53086 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53085,(1),"move",true))?(target_obj_53085["move"]):null);
if(!((next_obj_53086 == null))){
return next_obj_53086;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53087;
}})();
return target_53077.apply(ns_53076,final_args_array_53075);
})();

return callback_chan_53070;
});
chromex.ext.tabs.reload_STAR_ = (function chromex$ext$tabs$reload_STAR_(config,tab_id,reload_properties){
var callback_chan_53114 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__);
})();
var marshalled_tab_id_53116_53131 = (function (){var omit_test_53122 = tab_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_53122,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_53122;
}
})();
var marshalled_reload_properties_53117_53132 = (function (){var omit_test_53123 = reload_properties;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_53123,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_53123;
}
})();
var marshalled_callback_53118_53133 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","reload","chromex.ext.tabs/reload",-1146320662),new cljs.core.Keyword(null,"name","name",1843675177),"reload",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"tab-id",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"reload-properties",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"object"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_53114);
})();
var result_53115_53134 = (function (){var final_args_array_53119 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_tab_id_53116_53131,"tab-id",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_reload_properties_53117_53132,"reload-properties",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_53118_53133,"callback",true], null)], null),"chrome.tabs.reload");
var ns_53120 = (function (){var target_obj_53124 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_53127 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53124,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53125 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53124,(0),"chrome",true))?(target_obj_53124["chrome"]):null);
var next_obj_53126 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_53125,(0),"tabs",true))?(next_obj_53125["tabs"]):null);
return next_obj_53126;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53127;
}})();
var config__30575__auto___53135 = config;
var api_check_fn__30576__auto___53136 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___53135);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___53136)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___53135)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___53136.call(null,"chrome.tabs.reload",ns_53120,"reload");

var config__30571__auto___53137 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53137))){
var logger__30572__auto___53138 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53137);
var prefix__30573__auto___53139 = ["calling:","chrome.tabs.reload"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___53138)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___53137)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___53138.apply(null,prefix__30573__auto___53139.concat(final_args_array_53119));
} else {
}

var target_53121 = (function (){var target_obj_53128 = ns_53120;
var _STAR_runtime_state_STAR_53130 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53128,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53129 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53128,(1),"reload",true))?(target_obj_53128["reload"]):null);
if(!((next_obj_53129 == null))){
return next_obj_53129;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53130;
}})();
return target_53121.apply(ns_53120,final_args_array_53119);
})();

return callback_chan_53114;
});
chromex.ext.tabs.remove_STAR_ = (function chromex$ext$tabs$remove_STAR_(config,tab_ids){
var callback_chan_53155 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__);
})();
var marshalled_tab_ids_53157_53170 = (function (){var omit_test_53162 = tab_ids;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_53162,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_53162;
}
})();
var marshalled_callback_53158_53171 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","remove","chromex.ext.tabs/remove",1073817227),new cljs.core.Keyword(null,"name","name",1843675177),"remove",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"tab-ids",new cljs.core.Keyword(null,"type","type",1174270348),"integer-or-[array-of-integers]"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_53155);
})();
var result_53156_53172 = (function (){var final_args_array_53159 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_tab_ids_53157_53170,"tab-ids",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_53158_53171,"callback",true], null)], null),"chrome.tabs.remove");
var ns_53160 = (function (){var target_obj_53163 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_53166 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53163,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53164 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53163,(0),"chrome",true))?(target_obj_53163["chrome"]):null);
var next_obj_53165 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_53164,(0),"tabs",true))?(next_obj_53164["tabs"]):null);
return next_obj_53165;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53166;
}})();
var config__30575__auto___53173 = config;
var api_check_fn__30576__auto___53174 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___53173);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___53174)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___53173)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___53174.call(null,"chrome.tabs.remove",ns_53160,"remove");

var config__30571__auto___53175 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53175))){
var logger__30572__auto___53176 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53175);
var prefix__30573__auto___53177 = ["calling:","chrome.tabs.remove"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___53176)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___53175)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___53176.apply(null,prefix__30573__auto___53177.concat(final_args_array_53159));
} else {
}

var target_53161 = (function (){var target_obj_53167 = ns_53160;
var _STAR_runtime_state_STAR_53169 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53167,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53168 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53167,(1),"remove",true))?(target_obj_53167["remove"]):null);
if(!((next_obj_53168 == null))){
return next_obj_53168;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53169;
}})();
return target_53161.apply(ns_53160,final_args_array_53159);
})();

return callback_chan_53155;
});
chromex.ext.tabs.detect_language_STAR_ = (function chromex$ext$tabs$detect_language_STAR_(config,tab_id){
var callback_chan_53194 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__);
})();
var marshalled_tab_id_53196_53210 = (function (){var omit_test_53201 = tab_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_53201,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_53201;
}
})();
var marshalled_callback_53197_53211 = ((function (marshalled_tab_id_53196_53210,callback_chan_53194){
return (function (cb_language_53202){
return (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","detect-language","chromex.ext.tabs/detect-language",803336595),new cljs.core.Keyword(null,"name","name",1843675177),"detectLanguage",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"tab-id",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"language",new cljs.core.Keyword(null,"type","type",1174270348),"string"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_53194);
})().call(null,cb_language_53202);
});})(marshalled_tab_id_53196_53210,callback_chan_53194))
;
var result_53195_53212 = (function (){var final_args_array_53198 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_tab_id_53196_53210,"tab-id",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_53197_53211,"callback",null], null)], null),"chrome.tabs.detectLanguage");
var ns_53199 = (function (){var target_obj_53203 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_53206 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53203,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53204 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53203,(0),"chrome",true))?(target_obj_53203["chrome"]):null);
var next_obj_53205 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_53204,(0),"tabs",true))?(next_obj_53204["tabs"]):null);
return next_obj_53205;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53206;
}})();
var config__30575__auto___53213 = config;
var api_check_fn__30576__auto___53214 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___53213);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___53214)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___53213)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___53214.call(null,"chrome.tabs.detectLanguage",ns_53199,"detectLanguage");

var config__30571__auto___53215 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53215))){
var logger__30572__auto___53216 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53215);
var prefix__30573__auto___53217 = ["calling:","chrome.tabs.detectLanguage"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___53216)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___53215)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___53216.apply(null,prefix__30573__auto___53217.concat(final_args_array_53198));
} else {
}

var target_53200 = (function (){var target_obj_53207 = ns_53199;
var _STAR_runtime_state_STAR_53209 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53207,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53208 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53207,(1),"detectLanguage",true))?(target_obj_53207["detectLanguage"]):null);
if(!((next_obj_53208 == null))){
return next_obj_53208;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53209;
}})();
return target_53200.apply(ns_53199,final_args_array_53198);
})();

return callback_chan_53194;
});
chromex.ext.tabs.capture_visible_tab_STAR_ = (function chromex$ext$tabs$capture_visible_tab_STAR_(config,window_id,options){
var callback_chan_53236 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__);
})();
var marshalled_window_id_53238_53254 = (function (){var omit_test_53244 = window_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_53244,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_53244;
}
})();
var marshalled_options_53239_53255 = (function (){var omit_test_53245 = options;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_53245,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_53245;
}
})();
var marshalled_callback_53240_53256 = ((function (marshalled_window_id_53238_53254,marshalled_options_53239_53255,callback_chan_53236){
return (function (cb_data_url_53246){
return (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","capture-visible-tab","chromex.ext.tabs/capture-visible-tab",-1662122182),new cljs.core.Keyword(null,"name","name",1843675177),"captureVisibleTab",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"window-id",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"options",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"object"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"data-url",new cljs.core.Keyword(null,"type","type",1174270348),"string"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_53236);
})().call(null,cb_data_url_53246);
});})(marshalled_window_id_53238_53254,marshalled_options_53239_53255,callback_chan_53236))
;
var result_53237_53257 = (function (){var final_args_array_53241 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_window_id_53238_53254,"window-id",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_options_53239_53255,"options",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_53240_53256,"callback",null], null)], null),"chrome.tabs.captureVisibleTab");
var ns_53242 = (function (){var target_obj_53247 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_53250 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53247,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53248 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53247,(0),"chrome",true))?(target_obj_53247["chrome"]):null);
var next_obj_53249 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_53248,(0),"tabs",true))?(next_obj_53248["tabs"]):null);
return next_obj_53249;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53250;
}})();
var config__30575__auto___53258 = config;
var api_check_fn__30576__auto___53259 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___53258);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___53259)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___53258)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___53259.call(null,"chrome.tabs.captureVisibleTab",ns_53242,"captureVisibleTab");

var config__30571__auto___53260 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53260))){
var logger__30572__auto___53261 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53260);
var prefix__30573__auto___53262 = ["calling:","chrome.tabs.captureVisibleTab"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___53261)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___53260)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___53261.apply(null,prefix__30573__auto___53262.concat(final_args_array_53241));
} else {
}

var target_53243 = (function (){var target_obj_53251 = ns_53242;
var _STAR_runtime_state_STAR_53253 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53251,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53252 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53251,(1),"captureVisibleTab",true))?(target_obj_53251["captureVisibleTab"]):null);
if(!((next_obj_53252 == null))){
return next_obj_53252;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53253;
}})();
return target_53243.apply(ns_53242,final_args_array_53241);
})();

return callback_chan_53236;
});
chromex.ext.tabs.execute_script_STAR_ = (function chromex$ext$tabs$execute_script_STAR_(config,tab_id,details){
var callback_chan_53281 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__);
})();
var marshalled_tab_id_53283_53299 = (function (){var omit_test_53289 = tab_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_53289,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_53289;
}
})();
var marshalled_details_53284_53300 = (function (){var omit_test_53290 = details;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_53290,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_53290;
}
})();
var marshalled_callback_53285_53301 = ((function (marshalled_tab_id_53283_53299,marshalled_details_53284_53300,callback_chan_53281){
return (function (cb_result_53291){
return (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","execute-script","chromex.ext.tabs/execute-script",-648872434),new cljs.core.Keyword(null,"name","name",1843675177),"executeScript",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"tab-id",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"details",new cljs.core.Keyword(null,"type","type",1174270348),"object"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"result",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"[array-of-anys]"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_53281);
})().call(null,cb_result_53291);
});})(marshalled_tab_id_53283_53299,marshalled_details_53284_53300,callback_chan_53281))
;
var result_53282_53302 = (function (){var final_args_array_53286 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_tab_id_53283_53299,"tab-id",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_details_53284_53300,"details",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_53285_53301,"callback",true], null)], null),"chrome.tabs.executeScript");
var ns_53287 = (function (){var target_obj_53292 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_53295 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53292,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53293 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53292,(0),"chrome",true))?(target_obj_53292["chrome"]):null);
var next_obj_53294 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_53293,(0),"tabs",true))?(next_obj_53293["tabs"]):null);
return next_obj_53294;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53295;
}})();
var config__30575__auto___53303 = config;
var api_check_fn__30576__auto___53304 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___53303);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___53304)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___53303)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___53304.call(null,"chrome.tabs.executeScript",ns_53287,"executeScript");

var config__30571__auto___53305 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53305))){
var logger__30572__auto___53306 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53305);
var prefix__30573__auto___53307 = ["calling:","chrome.tabs.executeScript"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___53306)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___53305)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___53306.apply(null,prefix__30573__auto___53307.concat(final_args_array_53286));
} else {
}

var target_53288 = (function (){var target_obj_53296 = ns_53287;
var _STAR_runtime_state_STAR_53298 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53296,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53297 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53296,(1),"executeScript",true))?(target_obj_53296["executeScript"]):null);
if(!((next_obj_53297 == null))){
return next_obj_53297;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53298;
}})();
return target_53288.apply(ns_53287,final_args_array_53286);
})();

return callback_chan_53281;
});
chromex.ext.tabs.insert_css_STAR_ = (function chromex$ext$tabs$insert_css_STAR_(config,tab_id,details){
var callback_chan_53325 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__);
})();
var marshalled_tab_id_53327_53342 = (function (){var omit_test_53333 = tab_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_53333,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_53333;
}
})();
var marshalled_details_53328_53343 = (function (){var omit_test_53334 = details;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_53334,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_53334;
}
})();
var marshalled_callback_53329_53344 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","insert-css","chromex.ext.tabs/insert-css",-2032426194),new cljs.core.Keyword(null,"name","name",1843675177),"insertCSS",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"tab-id",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"details",new cljs.core.Keyword(null,"type","type",1174270348),"object"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_53325);
})();
var result_53326_53345 = (function (){var final_args_array_53330 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_tab_id_53327_53342,"tab-id",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_details_53328_53343,"details",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_53329_53344,"callback",true], null)], null),"chrome.tabs.insertCSS");
var ns_53331 = (function (){var target_obj_53335 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_53338 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53335,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53336 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53335,(0),"chrome",true))?(target_obj_53335["chrome"]):null);
var next_obj_53337 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_53336,(0),"tabs",true))?(next_obj_53336["tabs"]):null);
return next_obj_53337;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53338;
}})();
var config__30575__auto___53346 = config;
var api_check_fn__30576__auto___53347 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___53346);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___53347)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___53346)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___53347.call(null,"chrome.tabs.insertCSS",ns_53331,"insertCSS");

var config__30571__auto___53348 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53348))){
var logger__30572__auto___53349 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53348);
var prefix__30573__auto___53350 = ["calling:","chrome.tabs.insertCSS"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___53349)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___53348)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___53349.apply(null,prefix__30573__auto___53350.concat(final_args_array_53330));
} else {
}

var target_53332 = (function (){var target_obj_53339 = ns_53331;
var _STAR_runtime_state_STAR_53341 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53339,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53340 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53339,(1),"insertCSS",true))?(target_obj_53339["insertCSS"]):null);
if(!((next_obj_53340 == null))){
return next_obj_53340;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53341;
}})();
return target_53332.apply(ns_53331,final_args_array_53330);
})();

return callback_chan_53325;
});
chromex.ext.tabs.set_zoom_STAR_ = (function chromex$ext$tabs$set_zoom_STAR_(config,tab_id,zoom_factor){
var callback_chan_53368 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__);
})();
var marshalled_tab_id_53370_53385 = (function (){var omit_test_53376 = tab_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_53376,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_53376;
}
})();
var marshalled_zoom_factor_53371_53386 = (function (){var omit_test_53377 = zoom_factor;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_53377,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_53377;
}
})();
var marshalled_callback_53372_53387 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","set-zoom","chromex.ext.tabs/set-zoom",1740190670),new cljs.core.Keyword(null,"name","name",1843675177),"setZoom",new cljs.core.Keyword(null,"since","since",315379842),"42",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"tab-id",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"zoom-factor",new cljs.core.Keyword(null,"type","type",1174270348),"double"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_53368);
})();
var result_53369_53388 = (function (){var final_args_array_53373 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_tab_id_53370_53385,"tab-id",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_zoom_factor_53371_53386,"zoom-factor",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_53372_53387,"callback",true], null)], null),"chrome.tabs.setZoom");
var ns_53374 = (function (){var target_obj_53378 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_53381 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53378,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53379 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53378,(0),"chrome",true))?(target_obj_53378["chrome"]):null);
var next_obj_53380 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_53379,(0),"tabs",true))?(next_obj_53379["tabs"]):null);
return next_obj_53380;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53381;
}})();
var config__30575__auto___53389 = config;
var api_check_fn__30576__auto___53390 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___53389);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___53390)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___53389)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___53390.call(null,"chrome.tabs.setZoom",ns_53374,"setZoom");

var config__30571__auto___53391 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53391))){
var logger__30572__auto___53392 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53391);
var prefix__30573__auto___53393 = ["calling:","chrome.tabs.setZoom"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___53392)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___53391)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___53392.apply(null,prefix__30573__auto___53393.concat(final_args_array_53373));
} else {
}

var target_53375 = (function (){var target_obj_53382 = ns_53374;
var _STAR_runtime_state_STAR_53384 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53382,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53383 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53382,(1),"setZoom",true))?(target_obj_53382["setZoom"]):null);
if(!((next_obj_53383 == null))){
return next_obj_53383;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53384;
}})();
return target_53375.apply(ns_53374,final_args_array_53373);
})();

return callback_chan_53368;
});
chromex.ext.tabs.get_zoom_STAR_ = (function chromex$ext$tabs$get_zoom_STAR_(config,tab_id){
var callback_chan_53410 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__);
})();
var marshalled_tab_id_53412_53426 = (function (){var omit_test_53417 = tab_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_53417,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_53417;
}
})();
var marshalled_callback_53413_53427 = ((function (marshalled_tab_id_53412_53426,callback_chan_53410){
return (function (cb_zoom_factor_53418){
return (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","get-zoom","chromex.ext.tabs/get-zoom",747134311),new cljs.core.Keyword(null,"name","name",1843675177),"getZoom",new cljs.core.Keyword(null,"since","since",315379842),"42",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"tab-id",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"zoom-factor",new cljs.core.Keyword(null,"type","type",1174270348),"double"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_53410);
})().call(null,cb_zoom_factor_53418);
});})(marshalled_tab_id_53412_53426,callback_chan_53410))
;
var result_53411_53428 = (function (){var final_args_array_53414 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_tab_id_53412_53426,"tab-id",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_53413_53427,"callback",null], null)], null),"chrome.tabs.getZoom");
var ns_53415 = (function (){var target_obj_53419 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_53422 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53419,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53420 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53419,(0),"chrome",true))?(target_obj_53419["chrome"]):null);
var next_obj_53421 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_53420,(0),"tabs",true))?(next_obj_53420["tabs"]):null);
return next_obj_53421;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53422;
}})();
var config__30575__auto___53429 = config;
var api_check_fn__30576__auto___53430 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___53429);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___53430)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___53429)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___53430.call(null,"chrome.tabs.getZoom",ns_53415,"getZoom");

var config__30571__auto___53431 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53431))){
var logger__30572__auto___53432 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53431);
var prefix__30573__auto___53433 = ["calling:","chrome.tabs.getZoom"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___53432)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___53431)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___53432.apply(null,prefix__30573__auto___53433.concat(final_args_array_53414));
} else {
}

var target_53416 = (function (){var target_obj_53423 = ns_53415;
var _STAR_runtime_state_STAR_53425 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53423,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53424 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53423,(1),"getZoom",true))?(target_obj_53423["getZoom"]):null);
if(!((next_obj_53424 == null))){
return next_obj_53424;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53425;
}})();
return target_53416.apply(ns_53415,final_args_array_53414);
})();

return callback_chan_53410;
});
chromex.ext.tabs.set_zoom_settings_STAR_ = (function chromex$ext$tabs$set_zoom_settings_STAR_(config,tab_id,zoom_settings){
var callback_chan_53451 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__);
})();
var marshalled_tab_id_53453_53468 = (function (){var omit_test_53459 = tab_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_53459,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_53459;
}
})();
var marshalled_zoom_settings_53454_53469 = (function (){var omit_test_53460 = zoom_settings;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_53460,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_53460;
}
})();
var marshalled_callback_53455_53470 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","set-zoom-settings","chromex.ext.tabs/set-zoom-settings",-1121343767),new cljs.core.Keyword(null,"name","name",1843675177),"setZoomSettings",new cljs.core.Keyword(null,"since","since",315379842),"42",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"tab-id",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"zoom-settings",new cljs.core.Keyword(null,"type","type",1174270348),"tabs.ZoomSettings"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_53451);
})();
var result_53452_53471 = (function (){var final_args_array_53456 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_tab_id_53453_53468,"tab-id",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_zoom_settings_53454_53469,"zoom-settings",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_53455_53470,"callback",true], null)], null),"chrome.tabs.setZoomSettings");
var ns_53457 = (function (){var target_obj_53461 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_53464 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53461,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53462 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53461,(0),"chrome",true))?(target_obj_53461["chrome"]):null);
var next_obj_53463 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_53462,(0),"tabs",true))?(next_obj_53462["tabs"]):null);
return next_obj_53463;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53464;
}})();
var config__30575__auto___53472 = config;
var api_check_fn__30576__auto___53473 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___53472);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___53473)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___53472)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___53473.call(null,"chrome.tabs.setZoomSettings",ns_53457,"setZoomSettings");

var config__30571__auto___53474 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53474))){
var logger__30572__auto___53475 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53474);
var prefix__30573__auto___53476 = ["calling:","chrome.tabs.setZoomSettings"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___53475)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___53474)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___53475.apply(null,prefix__30573__auto___53476.concat(final_args_array_53456));
} else {
}

var target_53458 = (function (){var target_obj_53465 = ns_53457;
var _STAR_runtime_state_STAR_53467 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53465,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53466 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53465,(1),"setZoomSettings",true))?(target_obj_53465["setZoomSettings"]):null);
if(!((next_obj_53466 == null))){
return next_obj_53466;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53467;
}})();
return target_53458.apply(ns_53457,final_args_array_53456);
})();

return callback_chan_53451;
});
chromex.ext.tabs.get_zoom_settings_STAR_ = (function chromex$ext$tabs$get_zoom_settings_STAR_(config,tab_id){
var callback_chan_53493 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__);
})();
var marshalled_tab_id_53495_53509 = (function (){var omit_test_53500 = tab_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_53500,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_53500;
}
})();
var marshalled_callback_53496_53510 = ((function (marshalled_tab_id_53495_53509,callback_chan_53493){
return (function (cb_zoom_settings_53501){
return (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","get-zoom-settings","chromex.ext.tabs/get-zoom-settings",-585298770),new cljs.core.Keyword(null,"name","name",1843675177),"getZoomSettings",new cljs.core.Keyword(null,"since","since",315379842),"42",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"tab-id",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"zoom-settings",new cljs.core.Keyword(null,"type","type",1174270348),"tabs.ZoomSettings"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_53493);
})().call(null,cb_zoom_settings_53501);
});})(marshalled_tab_id_53495_53509,callback_chan_53493))
;
var result_53494_53511 = (function (){var final_args_array_53497 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_tab_id_53495_53509,"tab-id",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_53496_53510,"callback",null], null)], null),"chrome.tabs.getZoomSettings");
var ns_53498 = (function (){var target_obj_53502 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_53505 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53502,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53503 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53502,(0),"chrome",true))?(target_obj_53502["chrome"]):null);
var next_obj_53504 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_53503,(0),"tabs",true))?(next_obj_53503["tabs"]):null);
return next_obj_53504;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53505;
}})();
var config__30575__auto___53512 = config;
var api_check_fn__30576__auto___53513 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___53512);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___53513)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___53512)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___53513.call(null,"chrome.tabs.getZoomSettings",ns_53498,"getZoomSettings");

var config__30571__auto___53514 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53514))){
var logger__30572__auto___53515 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53514);
var prefix__30573__auto___53516 = ["calling:","chrome.tabs.getZoomSettings"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___53515)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___53514)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___53515.apply(null,prefix__30573__auto___53516.concat(final_args_array_53497));
} else {
}

var target_53499 = (function (){var target_obj_53506 = ns_53498;
var _STAR_runtime_state_STAR_53508 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53506,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53507 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53506,(1),"getZoomSettings",true))?(target_obj_53506["getZoomSettings"]):null);
if(!((next_obj_53507 == null))){
return next_obj_53507;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53508;
}})();
return target_53499.apply(ns_53498,final_args_array_53497);
})();

return callback_chan_53493;
});
chromex.ext.tabs.discard_STAR_ = (function chromex$ext$tabs$discard_STAR_(config,tab_id){
var callback_chan_53533 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-channel-factory","callback-channel-factory",196315003);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__);
})();
var marshalled_tab_id_53535_53549 = (function (){var omit_test_53540 = tab_id;
if(cljs.core.keyword_identical_QMARK_.call(null,omit_test_53540,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
return new cljs.core.Keyword(null,"omit","omit",-1917972325);
} else {
return omit_test_53540;
}
})();
var marshalled_callback_53536_53550 = ((function (marshalled_tab_id_53535_53549,callback_chan_53533){
return (function (cb_tab_53541){
return (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"callback-fn-factory","callback-fn-factory",2078895029);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("chromex.ext.tabs","discard","chromex.ext.tabs/discard",71213150),new cljs.core.Keyword(null,"name","name",1843675177),"discard",new cljs.core.Keyword(null,"since","since",315379842),"54",new cljs.core.Keyword(null,"callback?","callback?",-1081196295),true,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"tab-id",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"callback",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"tab",new cljs.core.Keyword(null,"optional?","optional?",1184638129),true,new cljs.core.Keyword(null,"type","type",1174270348),"tabs.Tab"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"function?","function?",88718602),true], null),callback_chan_53533);
})().call(null,cb_tab_53541);
});})(marshalled_tab_id_53535_53549,callback_chan_53533))
;
var result_53534_53551 = (function (){var final_args_array_53537 = chromex.support.prepare_final_args_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_tab_id_53535_53549,"tab-id",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_53536_53550,"callback",true], null)], null),"chrome.tabs.discard");
var ns_53538 = (function (){var target_obj_53542 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_53545 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53542,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53543 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53542,(0),"chrome",true))?(target_obj_53542["chrome"]):null);
var next_obj_53544 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_53543,(0),"tabs",true))?(next_obj_53543["tabs"]):null);
return next_obj_53544;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53545;
}})();
var config__30575__auto___53552 = config;
var api_check_fn__30576__auto___53553 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___53552);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___53553)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___53552)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___53553.call(null,"chrome.tabs.discard",ns_53538,"discard");

var config__30571__auto___53554 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53554))){
var logger__30572__auto___53555 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53554);
var prefix__30573__auto___53556 = ["calling:","chrome.tabs.discard"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___53555)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___53554)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___53555.apply(null,prefix__30573__auto___53556.concat(final_args_array_53537));
} else {
}

var target_53539 = (function (){var target_obj_53546 = ns_53538;
var _STAR_runtime_state_STAR_53548 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53546,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53547 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53546,(1),"discard",true))?(target_obj_53546["discard"]):null);
if(!((next_obj_53547 == null))){
return next_obj_53547;
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53548;
}})();
return target_53539.apply(ns_53538,final_args_array_53537);
})();

return callback_chan_53533;
});
chromex.ext.tabs.on_created_STAR_ = (function chromex$ext$tabs$on_created_STAR_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___53572 = arguments.length;
var i__29681__auto___53573 = (0);
while(true){
if((i__29681__auto___53573 < len__29680__auto___53572)){
args__29687__auto__.push((arguments[i__29681__auto___53573]));

var G__53574 = (i__29681__auto___53573 + (1));
i__29681__auto___53573 = G__53574;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((2) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((2)),(0),null)):null);
return chromex.ext.tabs.on_created_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29688__auto__);
});

chromex.ext.tabs.on_created_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_53560 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.Keyword("chromex.ext.tabs","on-created","chromex.ext.tabs/on-created",234051309),channel);
})();
var handler_fn_53561 = ((function (event_fn_53560){
return (function (cb_tab_53563){
return event_fn_53560.call(null,cb_tab_53563);
});})(event_fn_53560))
;
var logging_fn__37663__auto__ = ((function (event_fn_53560,handler_fn_53561){
return (function (cb_param_tab_53564){
var config__30571__auto___53575 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53575))){
var logger__30572__auto___53576 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53575);
var prefix__30573__auto___53577 = ["event:","chrome.tabs.onCreated"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___53576)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___53575)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___53576.apply(null,prefix__30573__auto___53577.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_tab_53564], null))));
} else {
}

return handler_fn_53561.call(null,cb_param_tab_53564);
});})(event_fn_53560,handler_fn_53561))
;
var ns_obj_53562 = (function (){var target_obj_53565 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_53568 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53565,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53566 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53565,(0),"chrome",true))?(target_obj_53565["chrome"]):null);
var next_obj_53567 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_53566,(0),"tabs",true))?(next_obj_53566["tabs"]):null);
return next_obj_53567;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53568;
}})();
var config__30575__auto___53578 = config;
var api_check_fn__30576__auto___53579 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___53578);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___53579)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___53578)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___53579.call(null,"chrome.tabs.onCreated",ns_obj_53562,"onCreated");

var event_obj__37664__auto__ = (function (){var target_obj_53569 = ns_obj_53562;
var _STAR_runtime_state_STAR_53571 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53569,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53570 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53569,(0),"onCreated",true))?(target_obj_53569["onCreated"]):null);
return next_obj_53570;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53571;
}})();
var result__37665__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__37664__auto__,logging_fn__37663__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__37665__auto__,args);

return result__37665__auto__;
});

chromex.ext.tabs.on_created_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.tabs.on_created_STAR_.cljs$lang$applyTo = (function (seq53557){
var G__53558 = cljs.core.first.call(null,seq53557);
var seq53557__$1 = cljs.core.next.call(null,seq53557);
var G__53559 = cljs.core.first.call(null,seq53557__$1);
var seq53557__$2 = cljs.core.next.call(null,seq53557__$1);
return chromex.ext.tabs.on_created_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__53558,G__53559,seq53557__$2);
});

chromex.ext.tabs.on_updated_STAR_ = (function chromex$ext$tabs$on_updated_STAR_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___53599 = arguments.length;
var i__29681__auto___53600 = (0);
while(true){
if((i__29681__auto___53600 < len__29680__auto___53599)){
args__29687__auto__.push((arguments[i__29681__auto___53600]));

var G__53601 = (i__29681__auto___53600 + (1));
i__29681__auto___53600 = G__53601;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((2) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((2)),(0),null)):null);
return chromex.ext.tabs.on_updated_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29688__auto__);
});

chromex.ext.tabs.on_updated_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_53583 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.Keyword("chromex.ext.tabs","on-updated","chromex.ext.tabs/on-updated",513718938),channel);
})();
var handler_fn_53584 = ((function (event_fn_53583){
return (function (cb_tab_id_53586,cb_change_info_53587,cb_tab_53588){
return event_fn_53583.call(null,cb_tab_id_53586,cb_change_info_53587,cb_tab_53588);
});})(event_fn_53583))
;
var logging_fn__37663__auto__ = ((function (event_fn_53583,handler_fn_53584){
return (function (cb_param_tab_id_53589,cb_param_change_info_53590,cb_param_tab_53591){
var config__30571__auto___53602 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53602))){
var logger__30572__auto___53603 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53602);
var prefix__30573__auto___53604 = ["event:","chrome.tabs.onUpdated"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___53603)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___53602)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___53603.apply(null,prefix__30573__auto___53604.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_tab_id_53589,cb_param_change_info_53590,cb_param_tab_53591], null))));
} else {
}

return handler_fn_53584.call(null,cb_param_tab_id_53589,cb_param_change_info_53590,cb_param_tab_53591);
});})(event_fn_53583,handler_fn_53584))
;
var ns_obj_53585 = (function (){var target_obj_53592 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_53595 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53592,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53593 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53592,(0),"chrome",true))?(target_obj_53592["chrome"]):null);
var next_obj_53594 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_53593,(0),"tabs",true))?(next_obj_53593["tabs"]):null);
return next_obj_53594;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53595;
}})();
var config__30575__auto___53605 = config;
var api_check_fn__30576__auto___53606 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___53605);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___53606)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___53605)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___53606.call(null,"chrome.tabs.onUpdated",ns_obj_53585,"onUpdated");

var event_obj__37664__auto__ = (function (){var target_obj_53596 = ns_obj_53585;
var _STAR_runtime_state_STAR_53598 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53596,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53597 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53596,(0),"onUpdated",true))?(target_obj_53596["onUpdated"]):null);
return next_obj_53597;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53598;
}})();
var result__37665__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__37664__auto__,logging_fn__37663__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__37665__auto__,args);

return result__37665__auto__;
});

chromex.ext.tabs.on_updated_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.tabs.on_updated_STAR_.cljs$lang$applyTo = (function (seq53580){
var G__53581 = cljs.core.first.call(null,seq53580);
var seq53580__$1 = cljs.core.next.call(null,seq53580);
var G__53582 = cljs.core.first.call(null,seq53580__$1);
var seq53580__$2 = cljs.core.next.call(null,seq53580__$1);
return chromex.ext.tabs.on_updated_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__53581,G__53582,seq53580__$2);
});

chromex.ext.tabs.on_moved_STAR_ = (function chromex$ext$tabs$on_moved_STAR_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___53624 = arguments.length;
var i__29681__auto___53625 = (0);
while(true){
if((i__29681__auto___53625 < len__29680__auto___53624)){
args__29687__auto__.push((arguments[i__29681__auto___53625]));

var G__53626 = (i__29681__auto___53625 + (1));
i__29681__auto___53625 = G__53626;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((2) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((2)),(0),null)):null);
return chromex.ext.tabs.on_moved_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29688__auto__);
});

chromex.ext.tabs.on_moved_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_53610 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.Keyword("chromex.ext.tabs","on-moved","chromex.ext.tabs/on-moved",-680724148),channel);
})();
var handler_fn_53611 = ((function (event_fn_53610){
return (function (cb_tab_id_53613,cb_move_info_53614){
return event_fn_53610.call(null,cb_tab_id_53613,cb_move_info_53614);
});})(event_fn_53610))
;
var logging_fn__37663__auto__ = ((function (event_fn_53610,handler_fn_53611){
return (function (cb_param_tab_id_53615,cb_param_move_info_53616){
var config__30571__auto___53627 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53627))){
var logger__30572__auto___53628 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53627);
var prefix__30573__auto___53629 = ["event:","chrome.tabs.onMoved"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___53628)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___53627)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___53628.apply(null,prefix__30573__auto___53629.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_tab_id_53615,cb_param_move_info_53616], null))));
} else {
}

return handler_fn_53611.call(null,cb_param_tab_id_53615,cb_param_move_info_53616);
});})(event_fn_53610,handler_fn_53611))
;
var ns_obj_53612 = (function (){var target_obj_53617 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_53620 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53617,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53618 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53617,(0),"chrome",true))?(target_obj_53617["chrome"]):null);
var next_obj_53619 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_53618,(0),"tabs",true))?(next_obj_53618["tabs"]):null);
return next_obj_53619;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53620;
}})();
var config__30575__auto___53630 = config;
var api_check_fn__30576__auto___53631 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___53630);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___53631)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___53630)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___53631.call(null,"chrome.tabs.onMoved",ns_obj_53612,"onMoved");

var event_obj__37664__auto__ = (function (){var target_obj_53621 = ns_obj_53612;
var _STAR_runtime_state_STAR_53623 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53621,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53622 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53621,(0),"onMoved",true))?(target_obj_53621["onMoved"]):null);
return next_obj_53622;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53623;
}})();
var result__37665__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__37664__auto__,logging_fn__37663__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__37665__auto__,args);

return result__37665__auto__;
});

chromex.ext.tabs.on_moved_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.tabs.on_moved_STAR_.cljs$lang$applyTo = (function (seq53607){
var G__53608 = cljs.core.first.call(null,seq53607);
var seq53607__$1 = cljs.core.next.call(null,seq53607);
var G__53609 = cljs.core.first.call(null,seq53607__$1);
var seq53607__$2 = cljs.core.next.call(null,seq53607__$1);
return chromex.ext.tabs.on_moved_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__53608,G__53609,seq53607__$2);
});

chromex.ext.tabs.on_selection_changed_STAR_ = (function chromex$ext$tabs$on_selection_changed_STAR_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___53649 = arguments.length;
var i__29681__auto___53650 = (0);
while(true){
if((i__29681__auto___53650 < len__29680__auto___53649)){
args__29687__auto__.push((arguments[i__29681__auto___53650]));

var G__53651 = (i__29681__auto___53650 + (1));
i__29681__auto___53650 = G__53651;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((2) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((2)),(0),null)):null);
return chromex.ext.tabs.on_selection_changed_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29688__auto__);
});

chromex.ext.tabs.on_selection_changed_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_53635 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.Keyword("chromex.ext.tabs","on-selection-changed","chromex.ext.tabs/on-selection-changed",1241767140),channel);
})();
var handler_fn_53636 = ((function (event_fn_53635){
return (function (cb_tab_id_53638,cb_select_info_53639){
return event_fn_53635.call(null,cb_tab_id_53638,cb_select_info_53639);
});})(event_fn_53635))
;
var logging_fn__37663__auto__ = ((function (event_fn_53635,handler_fn_53636){
return (function (cb_param_tab_id_53640,cb_param_select_info_53641){
var config__30571__auto___53652 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53652))){
var logger__30572__auto___53653 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53652);
var prefix__30573__auto___53654 = ["event:","chrome.tabs.onSelectionChanged"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___53653)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___53652)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___53653.apply(null,prefix__30573__auto___53654.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_tab_id_53640,cb_param_select_info_53641], null))));
} else {
}

return handler_fn_53636.call(null,cb_param_tab_id_53640,cb_param_select_info_53641);
});})(event_fn_53635,handler_fn_53636))
;
var ns_obj_53637 = (function (){var target_obj_53642 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_53645 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53642,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53643 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53642,(0),"chrome",true))?(target_obj_53642["chrome"]):null);
var next_obj_53644 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_53643,(0),"tabs",true))?(next_obj_53643["tabs"]):null);
return next_obj_53644;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53645;
}})();
var config__30575__auto___53655 = config;
var api_check_fn__30576__auto___53656 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___53655);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___53656)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___53655)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___53656.call(null,"chrome.tabs.onSelectionChanged",ns_obj_53637,"onSelectionChanged");

var event_obj__37664__auto__ = (function (){var target_obj_53646 = ns_obj_53637;
var _STAR_runtime_state_STAR_53648 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53646,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53647 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53646,(0),"onSelectionChanged",true))?(target_obj_53646["onSelectionChanged"]):null);
return next_obj_53647;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53648;
}})();
var result__37665__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__37664__auto__,logging_fn__37663__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__37665__auto__,args);

return result__37665__auto__;
});

chromex.ext.tabs.on_selection_changed_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.tabs.on_selection_changed_STAR_.cljs$lang$applyTo = (function (seq53632){
var G__53633 = cljs.core.first.call(null,seq53632);
var seq53632__$1 = cljs.core.next.call(null,seq53632);
var G__53634 = cljs.core.first.call(null,seq53632__$1);
var seq53632__$2 = cljs.core.next.call(null,seq53632__$1);
return chromex.ext.tabs.on_selection_changed_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__53633,G__53634,seq53632__$2);
});

chromex.ext.tabs.on_active_changed_STAR_ = (function chromex$ext$tabs$on_active_changed_STAR_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___53674 = arguments.length;
var i__29681__auto___53675 = (0);
while(true){
if((i__29681__auto___53675 < len__29680__auto___53674)){
args__29687__auto__.push((arguments[i__29681__auto___53675]));

var G__53676 = (i__29681__auto___53675 + (1));
i__29681__auto___53675 = G__53676;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((2) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((2)),(0),null)):null);
return chromex.ext.tabs.on_active_changed_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29688__auto__);
});

chromex.ext.tabs.on_active_changed_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_53660 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.Keyword("chromex.ext.tabs","on-active-changed","chromex.ext.tabs/on-active-changed",1369383993),channel);
})();
var handler_fn_53661 = ((function (event_fn_53660){
return (function (cb_tab_id_53663,cb_select_info_53664){
return event_fn_53660.call(null,cb_tab_id_53663,cb_select_info_53664);
});})(event_fn_53660))
;
var logging_fn__37663__auto__ = ((function (event_fn_53660,handler_fn_53661){
return (function (cb_param_tab_id_53665,cb_param_select_info_53666){
var config__30571__auto___53677 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53677))){
var logger__30572__auto___53678 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53677);
var prefix__30573__auto___53679 = ["event:","chrome.tabs.onActiveChanged"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___53678)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___53677)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___53678.apply(null,prefix__30573__auto___53679.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_tab_id_53665,cb_param_select_info_53666], null))));
} else {
}

return handler_fn_53661.call(null,cb_param_tab_id_53665,cb_param_select_info_53666);
});})(event_fn_53660,handler_fn_53661))
;
var ns_obj_53662 = (function (){var target_obj_53667 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_53670 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53667,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53668 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53667,(0),"chrome",true))?(target_obj_53667["chrome"]):null);
var next_obj_53669 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_53668,(0),"tabs",true))?(next_obj_53668["tabs"]):null);
return next_obj_53669;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53670;
}})();
var config__30575__auto___53680 = config;
var api_check_fn__30576__auto___53681 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___53680);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___53681)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___53680)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___53681.call(null,"chrome.tabs.onActiveChanged",ns_obj_53662,"onActiveChanged");

var event_obj__37664__auto__ = (function (){var target_obj_53671 = ns_obj_53662;
var _STAR_runtime_state_STAR_53673 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53671,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53672 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53671,(0),"onActiveChanged",true))?(target_obj_53671["onActiveChanged"]):null);
return next_obj_53672;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53673;
}})();
var result__37665__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__37664__auto__,logging_fn__37663__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__37665__auto__,args);

return result__37665__auto__;
});

chromex.ext.tabs.on_active_changed_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.tabs.on_active_changed_STAR_.cljs$lang$applyTo = (function (seq53657){
var G__53658 = cljs.core.first.call(null,seq53657);
var seq53657__$1 = cljs.core.next.call(null,seq53657);
var G__53659 = cljs.core.first.call(null,seq53657__$1);
var seq53657__$2 = cljs.core.next.call(null,seq53657__$1);
return chromex.ext.tabs.on_active_changed_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__53658,G__53659,seq53657__$2);
});

chromex.ext.tabs.on_activated_STAR_ = (function chromex$ext$tabs$on_activated_STAR_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___53697 = arguments.length;
var i__29681__auto___53698 = (0);
while(true){
if((i__29681__auto___53698 < len__29680__auto___53697)){
args__29687__auto__.push((arguments[i__29681__auto___53698]));

var G__53699 = (i__29681__auto___53698 + (1));
i__29681__auto___53698 = G__53699;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((2) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((2)),(0),null)):null);
return chromex.ext.tabs.on_activated_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29688__auto__);
});

chromex.ext.tabs.on_activated_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_53685 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.Keyword("chromex.ext.tabs","on-activated","chromex.ext.tabs/on-activated",1422935115),channel);
})();
var handler_fn_53686 = ((function (event_fn_53685){
return (function (cb_active_info_53688){
return event_fn_53685.call(null,cb_active_info_53688);
});})(event_fn_53685))
;
var logging_fn__37663__auto__ = ((function (event_fn_53685,handler_fn_53686){
return (function (cb_param_active_info_53689){
var config__30571__auto___53700 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53700))){
var logger__30572__auto___53701 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53700);
var prefix__30573__auto___53702 = ["event:","chrome.tabs.onActivated"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___53701)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___53700)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___53701.apply(null,prefix__30573__auto___53702.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_active_info_53689], null))));
} else {
}

return handler_fn_53686.call(null,cb_param_active_info_53689);
});})(event_fn_53685,handler_fn_53686))
;
var ns_obj_53687 = (function (){var target_obj_53690 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_53693 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53690,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53691 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53690,(0),"chrome",true))?(target_obj_53690["chrome"]):null);
var next_obj_53692 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_53691,(0),"tabs",true))?(next_obj_53691["tabs"]):null);
return next_obj_53692;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53693;
}})();
var config__30575__auto___53703 = config;
var api_check_fn__30576__auto___53704 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___53703);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___53704)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___53703)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___53704.call(null,"chrome.tabs.onActivated",ns_obj_53687,"onActivated");

var event_obj__37664__auto__ = (function (){var target_obj_53694 = ns_obj_53687;
var _STAR_runtime_state_STAR_53696 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53694,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53695 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53694,(0),"onActivated",true))?(target_obj_53694["onActivated"]):null);
return next_obj_53695;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53696;
}})();
var result__37665__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__37664__auto__,logging_fn__37663__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__37665__auto__,args);

return result__37665__auto__;
});

chromex.ext.tabs.on_activated_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.tabs.on_activated_STAR_.cljs$lang$applyTo = (function (seq53682){
var G__53683 = cljs.core.first.call(null,seq53682);
var seq53682__$1 = cljs.core.next.call(null,seq53682);
var G__53684 = cljs.core.first.call(null,seq53682__$1);
var seq53682__$2 = cljs.core.next.call(null,seq53682__$1);
return chromex.ext.tabs.on_activated_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__53683,G__53684,seq53682__$2);
});

chromex.ext.tabs.on_highlight_changed_STAR_ = (function chromex$ext$tabs$on_highlight_changed_STAR_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___53720 = arguments.length;
var i__29681__auto___53721 = (0);
while(true){
if((i__29681__auto___53721 < len__29680__auto___53720)){
args__29687__auto__.push((arguments[i__29681__auto___53721]));

var G__53722 = (i__29681__auto___53721 + (1));
i__29681__auto___53721 = G__53722;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((2) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((2)),(0),null)):null);
return chromex.ext.tabs.on_highlight_changed_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29688__auto__);
});

chromex.ext.tabs.on_highlight_changed_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_53708 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.Keyword("chromex.ext.tabs","on-highlight-changed","chromex.ext.tabs/on-highlight-changed",-970888983),channel);
})();
var handler_fn_53709 = ((function (event_fn_53708){
return (function (cb_select_info_53711){
return event_fn_53708.call(null,cb_select_info_53711);
});})(event_fn_53708))
;
var logging_fn__37663__auto__ = ((function (event_fn_53708,handler_fn_53709){
return (function (cb_param_select_info_53712){
var config__30571__auto___53723 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53723))){
var logger__30572__auto___53724 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53723);
var prefix__30573__auto___53725 = ["event:","chrome.tabs.onHighlightChanged"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___53724)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___53723)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___53724.apply(null,prefix__30573__auto___53725.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_select_info_53712], null))));
} else {
}

return handler_fn_53709.call(null,cb_param_select_info_53712);
});})(event_fn_53708,handler_fn_53709))
;
var ns_obj_53710 = (function (){var target_obj_53713 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_53716 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53713,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53714 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53713,(0),"chrome",true))?(target_obj_53713["chrome"]):null);
var next_obj_53715 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_53714,(0),"tabs",true))?(next_obj_53714["tabs"]):null);
return next_obj_53715;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53716;
}})();
var config__30575__auto___53726 = config;
var api_check_fn__30576__auto___53727 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___53726);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___53727)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___53726)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___53727.call(null,"chrome.tabs.onHighlightChanged",ns_obj_53710,"onHighlightChanged");

var event_obj__37664__auto__ = (function (){var target_obj_53717 = ns_obj_53710;
var _STAR_runtime_state_STAR_53719 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53717,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53718 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53717,(0),"onHighlightChanged",true))?(target_obj_53717["onHighlightChanged"]):null);
return next_obj_53718;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53719;
}})();
var result__37665__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__37664__auto__,logging_fn__37663__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__37665__auto__,args);

return result__37665__auto__;
});

chromex.ext.tabs.on_highlight_changed_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.tabs.on_highlight_changed_STAR_.cljs$lang$applyTo = (function (seq53705){
var G__53706 = cljs.core.first.call(null,seq53705);
var seq53705__$1 = cljs.core.next.call(null,seq53705);
var G__53707 = cljs.core.first.call(null,seq53705__$1);
var seq53705__$2 = cljs.core.next.call(null,seq53705__$1);
return chromex.ext.tabs.on_highlight_changed_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__53706,G__53707,seq53705__$2);
});

chromex.ext.tabs.on_highlighted_STAR_ = (function chromex$ext$tabs$on_highlighted_STAR_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___53743 = arguments.length;
var i__29681__auto___53744 = (0);
while(true){
if((i__29681__auto___53744 < len__29680__auto___53743)){
args__29687__auto__.push((arguments[i__29681__auto___53744]));

var G__53745 = (i__29681__auto___53744 + (1));
i__29681__auto___53744 = G__53745;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((2) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((2)),(0),null)):null);
return chromex.ext.tabs.on_highlighted_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29688__auto__);
});

chromex.ext.tabs.on_highlighted_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_53731 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.Keyword("chromex.ext.tabs","on-highlighted","chromex.ext.tabs/on-highlighted",-1775951984),channel);
})();
var handler_fn_53732 = ((function (event_fn_53731){
return (function (cb_highlight_info_53734){
return event_fn_53731.call(null,cb_highlight_info_53734);
});})(event_fn_53731))
;
var logging_fn__37663__auto__ = ((function (event_fn_53731,handler_fn_53732){
return (function (cb_param_highlight_info_53735){
var config__30571__auto___53746 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53746))){
var logger__30572__auto___53747 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53746);
var prefix__30573__auto___53748 = ["event:","chrome.tabs.onHighlighted"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___53747)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___53746)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___53747.apply(null,prefix__30573__auto___53748.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_highlight_info_53735], null))));
} else {
}

return handler_fn_53732.call(null,cb_param_highlight_info_53735);
});})(event_fn_53731,handler_fn_53732))
;
var ns_obj_53733 = (function (){var target_obj_53736 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_53739 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53736,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53737 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53736,(0),"chrome",true))?(target_obj_53736["chrome"]):null);
var next_obj_53738 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_53737,(0),"tabs",true))?(next_obj_53737["tabs"]):null);
return next_obj_53738;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53739;
}})();
var config__30575__auto___53749 = config;
var api_check_fn__30576__auto___53750 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___53749);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___53750)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___53749)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___53750.call(null,"chrome.tabs.onHighlighted",ns_obj_53733,"onHighlighted");

var event_obj__37664__auto__ = (function (){var target_obj_53740 = ns_obj_53733;
var _STAR_runtime_state_STAR_53742 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53740,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53741 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53740,(0),"onHighlighted",true))?(target_obj_53740["onHighlighted"]):null);
return next_obj_53741;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53742;
}})();
var result__37665__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__37664__auto__,logging_fn__37663__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__37665__auto__,args);

return result__37665__auto__;
});

chromex.ext.tabs.on_highlighted_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.tabs.on_highlighted_STAR_.cljs$lang$applyTo = (function (seq53728){
var G__53729 = cljs.core.first.call(null,seq53728);
var seq53728__$1 = cljs.core.next.call(null,seq53728);
var G__53730 = cljs.core.first.call(null,seq53728__$1);
var seq53728__$2 = cljs.core.next.call(null,seq53728__$1);
return chromex.ext.tabs.on_highlighted_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__53729,G__53730,seq53728__$2);
});

chromex.ext.tabs.on_detached_STAR_ = (function chromex$ext$tabs$on_detached_STAR_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___53768 = arguments.length;
var i__29681__auto___53769 = (0);
while(true){
if((i__29681__auto___53769 < len__29680__auto___53768)){
args__29687__auto__.push((arguments[i__29681__auto___53769]));

var G__53770 = (i__29681__auto___53769 + (1));
i__29681__auto___53769 = G__53770;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((2) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((2)),(0),null)):null);
return chromex.ext.tabs.on_detached_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29688__auto__);
});

chromex.ext.tabs.on_detached_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_53754 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.Keyword("chromex.ext.tabs","on-detached","chromex.ext.tabs/on-detached",-1496085468),channel);
})();
var handler_fn_53755 = ((function (event_fn_53754){
return (function (cb_tab_id_53757,cb_detach_info_53758){
return event_fn_53754.call(null,cb_tab_id_53757,cb_detach_info_53758);
});})(event_fn_53754))
;
var logging_fn__37663__auto__ = ((function (event_fn_53754,handler_fn_53755){
return (function (cb_param_tab_id_53759,cb_param_detach_info_53760){
var config__30571__auto___53771 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53771))){
var logger__30572__auto___53772 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53771);
var prefix__30573__auto___53773 = ["event:","chrome.tabs.onDetached"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___53772)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___53771)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___53772.apply(null,prefix__30573__auto___53773.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_tab_id_53759,cb_param_detach_info_53760], null))));
} else {
}

return handler_fn_53755.call(null,cb_param_tab_id_53759,cb_param_detach_info_53760);
});})(event_fn_53754,handler_fn_53755))
;
var ns_obj_53756 = (function (){var target_obj_53761 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_53764 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53761,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53762 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53761,(0),"chrome",true))?(target_obj_53761["chrome"]):null);
var next_obj_53763 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_53762,(0),"tabs",true))?(next_obj_53762["tabs"]):null);
return next_obj_53763;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53764;
}})();
var config__30575__auto___53774 = config;
var api_check_fn__30576__auto___53775 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___53774);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___53775)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___53774)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___53775.call(null,"chrome.tabs.onDetached",ns_obj_53756,"onDetached");

var event_obj__37664__auto__ = (function (){var target_obj_53765 = ns_obj_53756;
var _STAR_runtime_state_STAR_53767 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53765,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53766 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53765,(0),"onDetached",true))?(target_obj_53765["onDetached"]):null);
return next_obj_53766;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53767;
}})();
var result__37665__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__37664__auto__,logging_fn__37663__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__37665__auto__,args);

return result__37665__auto__;
});

chromex.ext.tabs.on_detached_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.tabs.on_detached_STAR_.cljs$lang$applyTo = (function (seq53751){
var G__53752 = cljs.core.first.call(null,seq53751);
var seq53751__$1 = cljs.core.next.call(null,seq53751);
var G__53753 = cljs.core.first.call(null,seq53751__$1);
var seq53751__$2 = cljs.core.next.call(null,seq53751__$1);
return chromex.ext.tabs.on_detached_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__53752,G__53753,seq53751__$2);
});

chromex.ext.tabs.on_attached_STAR_ = (function chromex$ext$tabs$on_attached_STAR_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___53793 = arguments.length;
var i__29681__auto___53794 = (0);
while(true){
if((i__29681__auto___53794 < len__29680__auto___53793)){
args__29687__auto__.push((arguments[i__29681__auto___53794]));

var G__53795 = (i__29681__auto___53794 + (1));
i__29681__auto___53794 = G__53795;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((2) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((2)),(0),null)):null);
return chromex.ext.tabs.on_attached_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29688__auto__);
});

chromex.ext.tabs.on_attached_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_53779 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.Keyword("chromex.ext.tabs","on-attached","chromex.ext.tabs/on-attached",1214482162),channel);
})();
var handler_fn_53780 = ((function (event_fn_53779){
return (function (cb_tab_id_53782,cb_attach_info_53783){
return event_fn_53779.call(null,cb_tab_id_53782,cb_attach_info_53783);
});})(event_fn_53779))
;
var logging_fn__37663__auto__ = ((function (event_fn_53779,handler_fn_53780){
return (function (cb_param_tab_id_53784,cb_param_attach_info_53785){
var config__30571__auto___53796 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53796))){
var logger__30572__auto___53797 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53796);
var prefix__30573__auto___53798 = ["event:","chrome.tabs.onAttached"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___53797)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___53796)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___53797.apply(null,prefix__30573__auto___53798.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_tab_id_53784,cb_param_attach_info_53785], null))));
} else {
}

return handler_fn_53780.call(null,cb_param_tab_id_53784,cb_param_attach_info_53785);
});})(event_fn_53779,handler_fn_53780))
;
var ns_obj_53781 = (function (){var target_obj_53786 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_53789 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53786,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53787 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53786,(0),"chrome",true))?(target_obj_53786["chrome"]):null);
var next_obj_53788 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_53787,(0),"tabs",true))?(next_obj_53787["tabs"]):null);
return next_obj_53788;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53789;
}})();
var config__30575__auto___53799 = config;
var api_check_fn__30576__auto___53800 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___53799);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___53800)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___53799)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___53800.call(null,"chrome.tabs.onAttached",ns_obj_53781,"onAttached");

var event_obj__37664__auto__ = (function (){var target_obj_53790 = ns_obj_53781;
var _STAR_runtime_state_STAR_53792 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53790,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53791 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53790,(0),"onAttached",true))?(target_obj_53790["onAttached"]):null);
return next_obj_53791;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53792;
}})();
var result__37665__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__37664__auto__,logging_fn__37663__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__37665__auto__,args);

return result__37665__auto__;
});

chromex.ext.tabs.on_attached_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.tabs.on_attached_STAR_.cljs$lang$applyTo = (function (seq53776){
var G__53777 = cljs.core.first.call(null,seq53776);
var seq53776__$1 = cljs.core.next.call(null,seq53776);
var G__53778 = cljs.core.first.call(null,seq53776__$1);
var seq53776__$2 = cljs.core.next.call(null,seq53776__$1);
return chromex.ext.tabs.on_attached_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__53777,G__53778,seq53776__$2);
});

chromex.ext.tabs.on_removed_STAR_ = (function chromex$ext$tabs$on_removed_STAR_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___53818 = arguments.length;
var i__29681__auto___53819 = (0);
while(true){
if((i__29681__auto___53819 < len__29680__auto___53818)){
args__29687__auto__.push((arguments[i__29681__auto___53819]));

var G__53820 = (i__29681__auto___53819 + (1));
i__29681__auto___53819 = G__53820;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((2) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((2)),(0),null)):null);
return chromex.ext.tabs.on_removed_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29688__auto__);
});

chromex.ext.tabs.on_removed_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_53804 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.Keyword("chromex.ext.tabs","on-removed","chromex.ext.tabs/on-removed",972024471),channel);
})();
var handler_fn_53805 = ((function (event_fn_53804){
return (function (cb_tab_id_53807,cb_remove_info_53808){
return event_fn_53804.call(null,cb_tab_id_53807,cb_remove_info_53808);
});})(event_fn_53804))
;
var logging_fn__37663__auto__ = ((function (event_fn_53804,handler_fn_53805){
return (function (cb_param_tab_id_53809,cb_param_remove_info_53810){
var config__30571__auto___53821 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53821))){
var logger__30572__auto___53822 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53821);
var prefix__30573__auto___53823 = ["event:","chrome.tabs.onRemoved"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___53822)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___53821)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___53822.apply(null,prefix__30573__auto___53823.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_tab_id_53809,cb_param_remove_info_53810], null))));
} else {
}

return handler_fn_53805.call(null,cb_param_tab_id_53809,cb_param_remove_info_53810);
});})(event_fn_53804,handler_fn_53805))
;
var ns_obj_53806 = (function (){var target_obj_53811 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_53814 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53811,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53812 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53811,(0),"chrome",true))?(target_obj_53811["chrome"]):null);
var next_obj_53813 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_53812,(0),"tabs",true))?(next_obj_53812["tabs"]):null);
return next_obj_53813;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53814;
}})();
var config__30575__auto___53824 = config;
var api_check_fn__30576__auto___53825 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___53824);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___53825)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___53824)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___53825.call(null,"chrome.tabs.onRemoved",ns_obj_53806,"onRemoved");

var event_obj__37664__auto__ = (function (){var target_obj_53815 = ns_obj_53806;
var _STAR_runtime_state_STAR_53817 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53815,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53816 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53815,(0),"onRemoved",true))?(target_obj_53815["onRemoved"]):null);
return next_obj_53816;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53817;
}})();
var result__37665__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__37664__auto__,logging_fn__37663__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__37665__auto__,args);

return result__37665__auto__;
});

chromex.ext.tabs.on_removed_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.tabs.on_removed_STAR_.cljs$lang$applyTo = (function (seq53801){
var G__53802 = cljs.core.first.call(null,seq53801);
var seq53801__$1 = cljs.core.next.call(null,seq53801);
var G__53803 = cljs.core.first.call(null,seq53801__$1);
var seq53801__$2 = cljs.core.next.call(null,seq53801__$1);
return chromex.ext.tabs.on_removed_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__53802,G__53803,seq53801__$2);
});

chromex.ext.tabs.on_replaced_STAR_ = (function chromex$ext$tabs$on_replaced_STAR_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___53843 = arguments.length;
var i__29681__auto___53844 = (0);
while(true){
if((i__29681__auto___53844 < len__29680__auto___53843)){
args__29687__auto__.push((arguments[i__29681__auto___53844]));

var G__53845 = (i__29681__auto___53844 + (1));
i__29681__auto___53844 = G__53845;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((2) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((2)),(0),null)):null);
return chromex.ext.tabs.on_replaced_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29688__auto__);
});

chromex.ext.tabs.on_replaced_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_53829 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.Keyword("chromex.ext.tabs","on-replaced","chromex.ext.tabs/on-replaced",-2107870101),channel);
})();
var handler_fn_53830 = ((function (event_fn_53829){
return (function (cb_added_tab_id_53832,cb_removed_tab_id_53833){
return event_fn_53829.call(null,cb_added_tab_id_53832,cb_removed_tab_id_53833);
});})(event_fn_53829))
;
var logging_fn__37663__auto__ = ((function (event_fn_53829,handler_fn_53830){
return (function (cb_param_added_tab_id_53834,cb_param_removed_tab_id_53835){
var config__30571__auto___53846 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53846))){
var logger__30572__auto___53847 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53846);
var prefix__30573__auto___53848 = ["event:","chrome.tabs.onReplaced"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___53847)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___53846)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___53847.apply(null,prefix__30573__auto___53848.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_added_tab_id_53834,cb_param_removed_tab_id_53835], null))));
} else {
}

return handler_fn_53830.call(null,cb_param_added_tab_id_53834,cb_param_removed_tab_id_53835);
});})(event_fn_53829,handler_fn_53830))
;
var ns_obj_53831 = (function (){var target_obj_53836 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_53839 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53836,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53837 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53836,(0),"chrome",true))?(target_obj_53836["chrome"]):null);
var next_obj_53838 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_53837,(0),"tabs",true))?(next_obj_53837["tabs"]):null);
return next_obj_53838;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53839;
}})();
var config__30575__auto___53849 = config;
var api_check_fn__30576__auto___53850 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___53849);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___53850)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___53849)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___53850.call(null,"chrome.tabs.onReplaced",ns_obj_53831,"onReplaced");

var event_obj__37664__auto__ = (function (){var target_obj_53840 = ns_obj_53831;
var _STAR_runtime_state_STAR_53842 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53840,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53841 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53840,(0),"onReplaced",true))?(target_obj_53840["onReplaced"]):null);
return next_obj_53841;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53842;
}})();
var result__37665__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__37664__auto__,logging_fn__37663__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__37665__auto__,args);

return result__37665__auto__;
});

chromex.ext.tabs.on_replaced_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.tabs.on_replaced_STAR_.cljs$lang$applyTo = (function (seq53826){
var G__53827 = cljs.core.first.call(null,seq53826);
var seq53826__$1 = cljs.core.next.call(null,seq53826);
var G__53828 = cljs.core.first.call(null,seq53826__$1);
var seq53826__$2 = cljs.core.next.call(null,seq53826__$1);
return chromex.ext.tabs.on_replaced_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__53827,G__53828,seq53826__$2);
});

chromex.ext.tabs.on_zoom_change_STAR_ = (function chromex$ext$tabs$on_zoom_change_STAR_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___53866 = arguments.length;
var i__29681__auto___53867 = (0);
while(true){
if((i__29681__auto___53867 < len__29680__auto___53866)){
args__29687__auto__.push((arguments[i__29681__auto___53867]));

var G__53868 = (i__29681__auto___53867 + (1));
i__29681__auto___53867 = G__53868;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((2) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((2)),(0),null)):null);
return chromex.ext.tabs.on_zoom_change_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29688__auto__);
});

chromex.ext.tabs.on_zoom_change_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_53854 = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"event-listener-factory","event-listener-factory",-1976310091);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,new cljs.core.Keyword("chromex.ext.tabs","on-zoom-change","chromex.ext.tabs/on-zoom-change",1403421586),channel);
})();
var handler_fn_53855 = ((function (event_fn_53854){
return (function (cb_zoom_change_info_53857){
return event_fn_53854.call(null,cb_zoom_change_info_53857);
});})(event_fn_53854))
;
var logging_fn__37663__auto__ = ((function (event_fn_53854,handler_fn_53855){
return (function (cb_param_zoom_change_info_53858){
var config__30571__auto___53869 = config;
if(cljs.core.truth_(new cljs.core.Keyword(null,"verbose-logging","verbose-logging",-1125099909).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53869))){
var logger__30572__auto___53870 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config__30571__auto___53869);
var prefix__30573__auto___53871 = ["event:","chrome.tabs.onZoomChange"];
if(cljs.core.fn_QMARK_.call(null,logger__30572__auto___53870)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30571__auto___53869)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__30572__auto__)")].join('')));
}

logger__30572__auto___53870.apply(null,prefix__30573__auto___53871.concat(cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_zoom_change_info_53858], null))));
} else {
}

return handler_fn_53855.call(null,cb_param_zoom_change_info_53858);
});})(event_fn_53854,handler_fn_53855))
;
var ns_obj_53856 = (function (){var target_obj_53859 = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(config);
var _STAR_runtime_state_STAR_53862 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53859,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53860 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53859,(0),"chrome",true))?(target_obj_53859["chrome"]):null);
var next_obj_53861 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_53860,(0),"tabs",true))?(next_obj_53860["tabs"]):null);
return next_obj_53861;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53862;
}})();
var config__30575__auto___53872 = config;
var api_check_fn__30576__auto___53873 = new cljs.core.Keyword(null,"missing-api-check-fn","missing-api-check-fn",-1196803703).cljs$core$IFn$_invoke$arity$1(config__30575__auto___53872);
if(cljs.core.fn_QMARK_.call(null,api_check_fn__30576__auto___53873)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30575__auto___53872)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__30576__auto__)")].join('')));
}

api_check_fn__30576__auto___53873.call(null,"chrome.tabs.onZoomChange",ns_obj_53856,"onZoomChange");

var event_obj__37664__auto__ = (function (){var target_obj_53863 = ns_obj_53856;
var _STAR_runtime_state_STAR_53865 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_53863,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_53864 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_53863,(0),"onZoomChange",true))?(target_obj_53863["onZoomChange"]):null);
return next_obj_53864;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_53865;
}})();
var result__37665__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription.call(null,event_obj__37664__auto__,logging_fn__37663__auto__,channel);
chromex.protocols.subscribe_BANG_.call(null,result__37665__auto__,args);

return result__37665__auto__;
});

chromex.ext.tabs.on_zoom_change_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.tabs.on_zoom_change_STAR_.cljs$lang$applyTo = (function (seq53851){
var G__53852 = cljs.core.first.call(null,seq53851);
var seq53851__$1 = cljs.core.next.call(null,seq53851);
var G__53853 = cljs.core.first.call(null,seq53851__$1);
var seq53851__$2 = cljs.core.next.call(null,seq53851__$1);
return chromex.ext.tabs.on_zoom_change_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__53852,G__53853,seq53851__$2);
});


//# sourceMappingURL=tabs.js.map?rel=1497481557321