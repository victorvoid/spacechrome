// Compiled by ClojureScript 1.9.562 {}
goog.provide('chromex.chrome_port');
goog.require('cljs.core');
goog.require('oops.core');
goog.require('chromex.support');
goog.require('chromex.protocols');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async');

/**
* @constructor
 * @implements {chromex.protocols.IChromePort}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {chromex.protocols.IChromePortState}
*/
chromex.chrome_port.ChromePort = (function (config,native_chrome_port,channel,connected_QMARK_){
this.config = config;
this.native_chrome_port = native_chrome_port;
this.channel = channel;
this.connected_QMARK_ = connected_QMARK_;
})
chromex.chrome_port.ChromePort.prototype.chromex$protocols$IChromePort$ = cljs.core.PROTOCOL_SENTINEL;

chromex.chrome_port.ChromePort.prototype.chromex$protocols$IChromePort$get_native_port$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return self__.native_chrome_port;
});

chromex.chrome_port.ChromePort.prototype.chromex$protocols$IChromePort$get_name$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
var target_obj_50935 = self__.native_chrome_port;
var _STAR_runtime_state_STAR_50937 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_50935,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_50936 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_50935,(0),"name",true))?(target_obj_50935["name"]):null);
return next_obj_50936;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_50937;
}});

chromex.chrome_port.ChromePort.prototype.chromex$protocols$IChromePort$get_sender$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
var target_obj_50938 = self__.native_chrome_port;
var _STAR_runtime_state_STAR_50940 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_50938,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_50939 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_50938,(0),"sender",true))?(target_obj_50938["sender"]):null);
return next_obj_50939;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_50940;
}});

chromex.chrome_port.ChromePort.prototype.chromex$protocols$IChromePort$post_message_BANG_$arity$2 = (function (this$,message){
var self__ = this;
var this$__$1 = this;
if((message == null)){
var config__30542__auto__ = self__.config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"chrome-port-post-message-called-with-nil","chrome-port-post-message-called-with-nil",864934312);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,this$__$1);
} else {
if(cljs.core.truth_(self__.connected_QMARK_)){
var target_obj_50941 = self__.native_chrome_port;
var _STAR_runtime_state_STAR_50945 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_50941,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_50943 = [target_obj_50941,(function (){var next_obj_50944 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_50941,(0),"postMessage",true))?(target_obj_50941["postMessage"]):null);
return next_obj_50944;
})()];
var fn_50942 = (call_info_50943[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_50942,oops.state.get_last_access_modifier.call(null))){
if(!((fn_50942 == null))){
return fn_50942.call((call_info_50943[(0)]),message);
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_50945;
}} else {
var config__30542__auto__ = self__.config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"chrome-port-post-message-called-on-disconnected-port","chrome-port-post-message-called-on-disconnected-port",-1329006944);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,this$__$1);
}
}
});

chromex.chrome_port.ChromePort.prototype.chromex$protocols$IChromePort$disconnect_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.connected_QMARK_)){
var target_obj_50946 = self__.native_chrome_port;
var _STAR_runtime_state_STAR_50950 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_50946,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_50948 = [target_obj_50946,(function (){var next_obj_50949 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_50946,(0),"disconnect",true))?(target_obj_50946["disconnect"]):null);
return next_obj_50949;
})()];
var fn_50947 = (call_info_50948[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_50947,oops.state.get_last_access_modifier.call(null))){
if(!((fn_50947 == null))){
return fn_50947.call((call_info_50948[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_50950;
}} else {
var config__30542__auto__ = self__.config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"chrome-port-disconnect-called-on-disconnected-port","chrome-port-disconnect-called-on-disconnected-port",-1526797777);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,this$__$1);
}
});

chromex.chrome_port.ChromePort.prototype.chromex$protocols$IChromePort$on_disconnect_BANG_$arity$2 = (function (this$,callback){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.connected_QMARK_)){
var on_disconnect_event = (function (){var target_obj_50951 = self__.native_chrome_port;
var _STAR_runtime_state_STAR_50953 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_50951,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_50952 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_50951,(0),"onDisconnect",true))?(target_obj_50951["onDisconnect"]):null);
return next_obj_50952;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_50953;
}})();
if(cljs.core.truth_(on_disconnect_event)){
} else {
throw (new Error("Assert failed: on-disconnect-event"));
}

var target_obj_50954 = on_disconnect_event;
var _STAR_runtime_state_STAR_50958 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_50954,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_50956 = [target_obj_50954,(function (){var next_obj_50957 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_50954,(0),"addListener",true))?(target_obj_50954["addListener"]):null);
return next_obj_50957;
})()];
var fn_50955 = (call_info_50956[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_50955,oops.state.get_last_access_modifier.call(null))){
if(!((fn_50955 == null))){
return fn_50955.call((call_info_50956[(0)]),callback);
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_50958;
}} else {
var config__30542__auto__ = self__.config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"chrome-port-on-disconnect-called-on-disconnected-port","chrome-port-on-disconnect-called-on-disconnected-port",-269858172);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,this$__$1);
}
});

chromex.chrome_port.ChromePort.prototype.chromex$protocols$IChromePort$on_message_BANG_$arity$2 = (function (this$,callback){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.connected_QMARK_)){
var on_message_event = (function (){var target_obj_50959 = self__.native_chrome_port;
var _STAR_runtime_state_STAR_50961 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_50959,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_50960 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_50959,(0),"onMessage",true))?(target_obj_50959["onMessage"]):null);
return next_obj_50960;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_50961;
}})();
if(cljs.core.truth_(on_message_event)){
} else {
throw (new Error("Assert failed: on-message-event"));
}

var target_obj_50962 = on_message_event;
var _STAR_runtime_state_STAR_50966 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_50962,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_50964 = [target_obj_50962,(function (){var next_obj_50965 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_50962,(0),"addListener",true))?(target_obj_50962["addListener"]):null);
return next_obj_50965;
})()];
var fn_50963 = (call_info_50964[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_50963,oops.state.get_last_access_modifier.call(null))){
if(!((fn_50963 == null))){
return fn_50963.call((call_info_50964[(0)]),callback);
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_50966;
}} else {
var config__30542__auto__ = self__.config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"chrome-port-on-message-called-on-disconnected-port","chrome-port-on-message-called-on-disconnected-port",1590595021);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,this$__$1);
}
});

chromex.chrome_port.ChromePort.prototype.chromex$protocols$IChromePortState$ = cljs.core.PROTOCOL_SENTINEL;

chromex.chrome_port.ChromePort.prototype.chromex$protocols$IChromePortState$set_connected_BANG_$arity$2 = (function (_this,val){
var self__ = this;
var _this__$1 = this;
return self__.connected_QMARK_ = val;
});

chromex.chrome_port.ChromePort.prototype.chromex$protocols$IChromePortState$put_message_BANG_$arity$2 = (function (this$,message){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.connected_QMARK_)){
return cljs.core.async.put_BANG_.call(null,self__.channel,message);
} else {
var config__30542__auto__ = self__.config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"chrome-port-put-message-called-on-disconnected-port","chrome-port-put-message-called-on-disconnected-port",1479634211);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,this$__$1,message);
}
});

chromex.chrome_port.ChromePort.prototype.chromex$protocols$IChromePortState$close_resources_BANG_$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.channel);
});

chromex.chrome_port.ChromePort.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

chromex.chrome_port.ChromePort.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_this,handler){
var self__ = this;
var _this__$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.channel,handler);
});

chromex.chrome_port.ChromePort.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

chromex.chrome_port.ChromePort.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.channel);
});

chromex.chrome_port.ChromePort.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return chromex.protocols.disconnect_BANG_.call(null,this$__$1);
});

chromex.chrome_port.ChromePort.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"config","config",-1659574354,null),new cljs.core.Symbol(null,"native-chrome-port","native-chrome-port",1837388003,null),new cljs.core.Symbol(null,"channel","channel",-1920248077,null),cljs.core.with_meta(new cljs.core.Symbol(null,"connected?","connected?",442980140,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

chromex.chrome_port.ChromePort.cljs$lang$type = true;

chromex.chrome_port.ChromePort.cljs$lang$ctorStr = "chromex.chrome-port/ChromePort";

chromex.chrome_port.ChromePort.cljs$lang$ctorPrWriter = (function (this__29116__auto__,writer__29117__auto__,opt__29118__auto__){
return cljs.core._write.call(null,writer__29117__auto__,"chromex.chrome-port/ChromePort");
});

chromex.chrome_port.__GT_ChromePort = (function chromex$chrome_port$__GT_ChromePort(config,native_chrome_port,channel,connected_QMARK_){
return (new chromex.chrome_port.ChromePort(config,native_chrome_port,channel,connected_QMARK_));
});

chromex.chrome_port.make_chrome_port = (function chromex$chrome_port$make_chrome_port(config,native_chrome_port){
if(cljs.core.truth_(native_chrome_port)){
} else {
throw (new Error("Assert failed: native-chrome-port"));
}

var channel = (function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"chrome-port-channel-factory","chrome-port-channel-factory",393485192);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__);
})();
var chrome_port = (new chromex.chrome_port.ChromePort(config,native_chrome_port,channel,true));
chromex.protocols.on_message_BANG_.call(null,chrome_port,(function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"chrome-port-on-message-fn-factory","chrome-port-on-message-fn-factory",1295000398);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,chrome_port);
})());

chromex.protocols.on_disconnect_BANG_.call(null,chrome_port,(function (){var config__30542__auto__ = config;
var handler_key__30543__auto__ = new cljs.core.Keyword(null,"chrome-port-on-disconnect-fn-factory","chrome-port-on-disconnect-fn-factory",-501244675);
var handler__30544__auto__ = handler_key__30543__auto__.call(null,config__30542__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30544__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30543__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30542__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30544__auto__)")].join('')));
}

return handler__30544__auto__.call(null,config__30542__auto__,chrome_port);
})());

return chrome_port;
});

//# sourceMappingURL=chrome_port.js.map?rel=1497481555363