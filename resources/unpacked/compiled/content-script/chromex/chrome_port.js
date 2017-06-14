// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('chromex.chrome_port');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
var target_obj_22258 = self__.native_chrome_port;
var next_obj_22259 = (target_obj_22258["name"]);
return next_obj_22259;
});

chromex.chrome_port.ChromePort.prototype.chromex$protocols$IChromePort$get_sender$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
var target_obj_22260 = self__.native_chrome_port;
var next_obj_22261 = (target_obj_22260["sender"]);
return next_obj_22261;
});

chromex.chrome_port.ChromePort.prototype.chromex$protocols$IChromePort$post_message_BANG_$arity$2 = (function (this$,message){
var self__ = this;
var this$__$1 = this;
if((message == null)){
var config__14251__auto__ = self__.config;
var handler_key__14252__auto__ = cljs.core.cst$kw$chrome_DASH_port_DASH_post_DASH_message_DASH_called_DASH_with_DASH_nil;
var handler__14253__auto__ = (handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1 ? handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler_key__14252__auto__.call(null,config__14251__auto__));
if(cljs.core.fn_QMARK_(handler__14253__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__14252__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14251__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__14253__auto__)")].join('')));
}

return (handler__14253__auto__.cljs$core$IFn$_invoke$arity$2 ? handler__14253__auto__.cljs$core$IFn$_invoke$arity$2(config__14251__auto__,this$__$1) : handler__14253__auto__.call(null,config__14251__auto__,this$__$1));
} else {
if(cljs.core.truth_(self__.connected_QMARK_)){
var target_obj_22262 = self__.native_chrome_port;
var call_info_22264 = [target_obj_22262,(function (){var next_obj_22265 = (target_obj_22262["postMessage"]);
return next_obj_22265;
})()];
var fn_22263 = (call_info_22264[(1)]);
if(!((fn_22263 == null))){
return fn_22263.call((call_info_22264[(0)]),message);
} else {
return null;
}
} else {
var config__14251__auto__ = self__.config;
var handler_key__14252__auto__ = cljs.core.cst$kw$chrome_DASH_port_DASH_post_DASH_message_DASH_called_DASH_on_DASH_disconnected_DASH_port;
var handler__14253__auto__ = (handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1 ? handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler_key__14252__auto__.call(null,config__14251__auto__));
if(cljs.core.fn_QMARK_(handler__14253__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__14252__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14251__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__14253__auto__)")].join('')));
}

return (handler__14253__auto__.cljs$core$IFn$_invoke$arity$2 ? handler__14253__auto__.cljs$core$IFn$_invoke$arity$2(config__14251__auto__,this$__$1) : handler__14253__auto__.call(null,config__14251__auto__,this$__$1));
}
}
});

chromex.chrome_port.ChromePort.prototype.chromex$protocols$IChromePort$disconnect_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.connected_QMARK_)){
var target_obj_22266 = self__.native_chrome_port;
var call_info_22268 = [target_obj_22266,(function (){var next_obj_22269 = (target_obj_22266["disconnect"]);
return next_obj_22269;
})()];
var fn_22267 = (call_info_22268[(1)]);
if(!((fn_22267 == null))){
return fn_22267.call((call_info_22268[(0)]));
} else {
return null;
}
} else {
var config__14251__auto__ = self__.config;
var handler_key__14252__auto__ = cljs.core.cst$kw$chrome_DASH_port_DASH_disconnect_DASH_called_DASH_on_DASH_disconnected_DASH_port;
var handler__14253__auto__ = (handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1 ? handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler_key__14252__auto__.call(null,config__14251__auto__));
if(cljs.core.fn_QMARK_(handler__14253__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__14252__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14251__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__14253__auto__)")].join('')));
}

return (handler__14253__auto__.cljs$core$IFn$_invoke$arity$2 ? handler__14253__auto__.cljs$core$IFn$_invoke$arity$2(config__14251__auto__,this$__$1) : handler__14253__auto__.call(null,config__14251__auto__,this$__$1));
}
});

chromex.chrome_port.ChromePort.prototype.chromex$protocols$IChromePort$on_disconnect_BANG_$arity$2 = (function (this$,callback){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.connected_QMARK_)){
var on_disconnect_event = (function (){var target_obj_22270 = self__.native_chrome_port;
var next_obj_22271 = (target_obj_22270["onDisconnect"]);
return next_obj_22271;
})();
if(cljs.core.truth_(on_disconnect_event)){
} else {
throw (new Error("Assert failed: on-disconnect-event"));
}

var target_obj_22272 = on_disconnect_event;
var call_info_22274 = [target_obj_22272,(function (){var next_obj_22275 = (target_obj_22272["addListener"]);
return next_obj_22275;
})()];
var fn_22273 = (call_info_22274[(1)]);
if(!((fn_22273 == null))){
return fn_22273.call((call_info_22274[(0)]),callback);
} else {
return null;
}
} else {
var config__14251__auto__ = self__.config;
var handler_key__14252__auto__ = cljs.core.cst$kw$chrome_DASH_port_DASH_on_DASH_disconnect_DASH_called_DASH_on_DASH_disconnected_DASH_port;
var handler__14253__auto__ = (handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1 ? handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler_key__14252__auto__.call(null,config__14251__auto__));
if(cljs.core.fn_QMARK_(handler__14253__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__14252__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14251__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__14253__auto__)")].join('')));
}

return (handler__14253__auto__.cljs$core$IFn$_invoke$arity$2 ? handler__14253__auto__.cljs$core$IFn$_invoke$arity$2(config__14251__auto__,this$__$1) : handler__14253__auto__.call(null,config__14251__auto__,this$__$1));
}
});

chromex.chrome_port.ChromePort.prototype.chromex$protocols$IChromePort$on_message_BANG_$arity$2 = (function (this$,callback){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.connected_QMARK_)){
var on_message_event = (function (){var target_obj_22276 = self__.native_chrome_port;
var next_obj_22277 = (target_obj_22276["onMessage"]);
return next_obj_22277;
})();
if(cljs.core.truth_(on_message_event)){
} else {
throw (new Error("Assert failed: on-message-event"));
}

var target_obj_22278 = on_message_event;
var call_info_22280 = [target_obj_22278,(function (){var next_obj_22281 = (target_obj_22278["addListener"]);
return next_obj_22281;
})()];
var fn_22279 = (call_info_22280[(1)]);
if(!((fn_22279 == null))){
return fn_22279.call((call_info_22280[(0)]),callback);
} else {
return null;
}
} else {
var config__14251__auto__ = self__.config;
var handler_key__14252__auto__ = cljs.core.cst$kw$chrome_DASH_port_DASH_on_DASH_message_DASH_called_DASH_on_DASH_disconnected_DASH_port;
var handler__14253__auto__ = (handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1 ? handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler_key__14252__auto__.call(null,config__14251__auto__));
if(cljs.core.fn_QMARK_(handler__14253__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__14252__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14251__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__14253__auto__)")].join('')));
}

return (handler__14253__auto__.cljs$core$IFn$_invoke$arity$2 ? handler__14253__auto__.cljs$core$IFn$_invoke$arity$2(config__14251__auto__,this$__$1) : handler__14253__auto__.call(null,config__14251__auto__,this$__$1));
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
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.channel,message);
} else {
var config__14251__auto__ = self__.config;
var handler_key__14252__auto__ = cljs.core.cst$kw$chrome_DASH_port_DASH_put_DASH_message_DASH_called_DASH_on_DASH_disconnected_DASH_port;
var handler__14253__auto__ = (handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1 ? handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler_key__14252__auto__.call(null,config__14251__auto__));
if(cljs.core.fn_QMARK_(handler__14253__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__14252__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14251__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__14253__auto__)")].join('')));
}

return (handler__14253__auto__.cljs$core$IFn$_invoke$arity$3 ? handler__14253__auto__.cljs$core$IFn$_invoke$arity$3(config__14251__auto__,this$__$1,message) : handler__14253__auto__.call(null,config__14251__auto__,this$__$1,message));
}
});

chromex.chrome_port.ChromePort.prototype.chromex$protocols$IChromePortState$close_resources_BANG_$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.channel);
});

chromex.chrome_port.ChromePort.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

chromex.chrome_port.ChromePort.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_this,handler){
var self__ = this;
var _this__$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.channel,handler);
});

chromex.chrome_port.ChromePort.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

chromex.chrome_port.ChromePort.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.channel);
});

chromex.chrome_port.ChromePort.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.chromex$protocols$IChromePort$disconnect_BANG_$arity$1(null);
});

chromex.chrome_port.ChromePort.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$config,cljs.core.cst$sym$native_DASH_chrome_DASH_port,cljs.core.cst$sym$channel,cljs.core.with_meta(cljs.core.cst$sym$connected_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

chromex.chrome_port.ChromePort.cljs$lang$type = true;

chromex.chrome_port.ChromePort.cljs$lang$ctorStr = "chromex.chrome-port/ChromePort";

chromex.chrome_port.ChromePort.cljs$lang$ctorPrWriter = (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write(writer__8618__auto__,"chromex.chrome-port/ChromePort");
});

chromex.chrome_port.__GT_ChromePort = (function chromex$chrome_port$__GT_ChromePort(config,native_chrome_port,channel,connected_QMARK_){
return (new chromex.chrome_port.ChromePort(config,native_chrome_port,channel,connected_QMARK_));
});

chromex.chrome_port.make_chrome_port = (function chromex$chrome_port$make_chrome_port(config,native_chrome_port){
if(cljs.core.truth_(native_chrome_port)){
} else {
throw (new Error("Assert failed: native-chrome-port"));
}

var channel = (function (){var config__14251__auto__ = config;
var handler_key__14252__auto__ = cljs.core.cst$kw$chrome_DASH_port_DASH_channel_DASH_factory;
var handler__14253__auto__ = (handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1 ? handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler_key__14252__auto__.call(null,config__14251__auto__));
if(cljs.core.fn_QMARK_(handler__14253__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__14252__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14251__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__14253__auto__)")].join('')));
}

return (handler__14253__auto__.cljs$core$IFn$_invoke$arity$1 ? handler__14253__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler__14253__auto__.call(null,config__14251__auto__));
})();
var chrome_port = (new chromex.chrome_port.ChromePort(config,native_chrome_port,channel,true));
chrome_port.chromex$protocols$IChromePort$on_message_BANG_$arity$2(null,(function (){var config__14251__auto__ = config;
var handler_key__14252__auto__ = cljs.core.cst$kw$chrome_DASH_port_DASH_on_DASH_message_DASH_fn_DASH_factory;
var handler__14253__auto__ = (handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1 ? handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler_key__14252__auto__.call(null,config__14251__auto__));
if(cljs.core.fn_QMARK_(handler__14253__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__14252__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14251__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__14253__auto__)")].join('')));
}

return (handler__14253__auto__.cljs$core$IFn$_invoke$arity$2 ? handler__14253__auto__.cljs$core$IFn$_invoke$arity$2(config__14251__auto__,chrome_port) : handler__14253__auto__.call(null,config__14251__auto__,chrome_port));
})());

chrome_port.chromex$protocols$IChromePort$on_disconnect_BANG_$arity$2(null,(function (){var config__14251__auto__ = config;
var handler_key__14252__auto__ = cljs.core.cst$kw$chrome_DASH_port_DASH_on_DASH_disconnect_DASH_fn_DASH_factory;
var handler__14253__auto__ = (handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1 ? handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler_key__14252__auto__.call(null,config__14251__auto__));
if(cljs.core.fn_QMARK_(handler__14253__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__14252__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14251__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__14253__auto__)")].join('')));
}

return (handler__14253__auto__.cljs$core$IFn$_invoke$arity$2 ? handler__14253__auto__.cljs$core$IFn$_invoke$arity$2(config__14251__auto__,chrome_port) : handler__14253__auto__.call(null,config__14251__auto__,chrome_port));
})());

return chrome_port;
});
