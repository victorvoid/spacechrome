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
var target_obj_37228 = self__.native_chrome_port;
var _STAR_runtime_state_STAR_37230 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_37228,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_37229 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_37228,(0),"name",true))?(target_obj_37228["name"]):null);
return next_obj_37229;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_37230;
}});

chromex.chrome_port.ChromePort.prototype.chromex$protocols$IChromePort$get_sender$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
var target_obj_37231 = self__.native_chrome_port;
var _STAR_runtime_state_STAR_37233 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_37231,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_37232 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_37231,(0),"sender",true))?(target_obj_37231["sender"]):null);
return next_obj_37232;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_37233;
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
var target_obj_37234 = self__.native_chrome_port;
var _STAR_runtime_state_STAR_37238 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_37234,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_37236 = [target_obj_37234,(function (){var next_obj_37237 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_37234,(0),"postMessage",true))?(target_obj_37234["postMessage"]):null);
return next_obj_37237;
})()];
var fn_37235 = (call_info_37236[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_37235,oops.state.get_last_access_modifier.call(null))){
if(!((fn_37235 == null))){
return fn_37235.call((call_info_37236[(0)]),message);
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_37238;
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
var target_obj_37239 = self__.native_chrome_port;
var _STAR_runtime_state_STAR_37243 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_37239,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_37241 = [target_obj_37239,(function (){var next_obj_37242 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_37239,(0),"disconnect",true))?(target_obj_37239["disconnect"]):null);
return next_obj_37242;
})()];
var fn_37240 = (call_info_37241[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_37240,oops.state.get_last_access_modifier.call(null))){
if(!((fn_37240 == null))){
return fn_37240.call((call_info_37241[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_37243;
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
var on_disconnect_event = (function (){var target_obj_37244 = self__.native_chrome_port;
var _STAR_runtime_state_STAR_37246 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_37244,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_37245 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_37244,(0),"onDisconnect",true))?(target_obj_37244["onDisconnect"]):null);
return next_obj_37245;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_37246;
}})();
if(cljs.core.truth_(on_disconnect_event)){
} else {
throw (new Error("Assert failed: on-disconnect-event"));
}

var target_obj_37247 = on_disconnect_event;
var _STAR_runtime_state_STAR_37251 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_37247,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_37249 = [target_obj_37247,(function (){var next_obj_37250 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_37247,(0),"addListener",true))?(target_obj_37247["addListener"]):null);
return next_obj_37250;
})()];
var fn_37248 = (call_info_37249[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_37248,oops.state.get_last_access_modifier.call(null))){
if(!((fn_37248 == null))){
return fn_37248.call((call_info_37249[(0)]),callback);
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_37251;
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
var on_message_event = (function (){var target_obj_37252 = self__.native_chrome_port;
var _STAR_runtime_state_STAR_37254 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_37252,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_37253 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_37252,(0),"onMessage",true))?(target_obj_37252["onMessage"]):null);
return next_obj_37253;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_37254;
}})();
if(cljs.core.truth_(on_message_event)){
} else {
throw (new Error("Assert failed: on-message-event"));
}

var target_obj_37255 = on_message_event;
var _STAR_runtime_state_STAR_37259 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_37255,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_37257 = [target_obj_37255,(function (){var next_obj_37258 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_37255,(0),"addListener",true))?(target_obj_37255["addListener"]):null);
return next_obj_37258;
})()];
var fn_37256 = (call_info_37257[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_37256,oops.state.get_last_access_modifier.call(null))){
if(!((fn_37256 == null))){
return fn_37256.call((call_info_37257[(0)]),callback);
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_37259;
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

//# sourceMappingURL=chrome_port.js.map?rel=1497481540420