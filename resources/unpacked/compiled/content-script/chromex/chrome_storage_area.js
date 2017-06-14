// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('chromex.chrome_storage_area');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('chromex.support');
goog.require('oops.core');
goog.require('chromex.protocols');

/**
* @constructor
 * @implements {chromex.protocols.IChromeStorageArea}
*/
chromex.chrome_storage_area.ChromeStorageArea = (function (native_chrome_storage_area,channel_factory,callback_factory){
this.native_chrome_storage_area = native_chrome_storage_area;
this.channel_factory = channel_factory;
this.callback_factory = callback_factory;
})
chromex.chrome_storage_area.ChromeStorageArea.prototype.chromex$protocols$IChromeStorageArea$ = cljs.core.PROTOCOL_SENTINEL;

chromex.chrome_storage_area.ChromeStorageArea.prototype.chromex$protocols$IChromeStorageArea$get_native_storage_area$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return self__.native_chrome_storage_area;
});

chromex.chrome_storage_area.ChromeStorageArea.prototype.chromex$protocols$IChromeStorageArea$get$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.chromex$protocols$IChromeStorageArea$get$arity$2(null,null);
});

chromex.chrome_storage_area.ChromeStorageArea.prototype.chromex$protocols$IChromeStorageArea$get$arity$2 = (function (_this,keys){
var self__ = this;
var _this__$1 = this;
var channel = (self__.channel_factory.cljs$core$IFn$_invoke$arity$0 ? self__.channel_factory.cljs$core$IFn$_invoke$arity$0() : self__.channel_factory.call(null));
var target_obj_22493_22513 = self__.native_chrome_storage_area;
var call_info_22495_22514 = [target_obj_22493_22513,(function (){var next_obj_22496 = (target_obj_22493_22513["get"]);
return next_obj_22496;
})()];
var fn_22494_22515 = (call_info_22495_22514[(1)]);
if(!((fn_22494_22515 == null))){
fn_22494_22515.call((call_info_22495_22514[(0)]),keys,(self__.callback_factory.cljs$core$IFn$_invoke$arity$1 ? self__.callback_factory.cljs$core$IFn$_invoke$arity$1(channel) : self__.callback_factory.call(null,channel)));
} else {
}

return channel;
});

chromex.chrome_storage_area.ChromeStorageArea.prototype.chromex$protocols$IChromeStorageArea$get_bytes_in_use$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.chromex$protocols$IChromeStorageArea$get_bytes_in_use$arity$2(null,null);
});

chromex.chrome_storage_area.ChromeStorageArea.prototype.chromex$protocols$IChromeStorageArea$get_bytes_in_use$arity$2 = (function (_this,keys){
var self__ = this;
var _this__$1 = this;
var channel = (self__.channel_factory.cljs$core$IFn$_invoke$arity$0 ? self__.channel_factory.cljs$core$IFn$_invoke$arity$0() : self__.channel_factory.call(null));
var target_obj_22497_22516 = self__.native_chrome_storage_area;
var call_info_22499_22517 = [target_obj_22497_22516,(function (){var next_obj_22500 = (target_obj_22497_22516["getBytesInUse"]);
return next_obj_22500;
})()];
var fn_22498_22518 = (call_info_22499_22517[(1)]);
if(!((fn_22498_22518 == null))){
fn_22498_22518.call((call_info_22499_22517[(0)]),keys,(self__.callback_factory.cljs$core$IFn$_invoke$arity$1 ? self__.callback_factory.cljs$core$IFn$_invoke$arity$1(channel) : self__.callback_factory.call(null,channel)));
} else {
}

return channel;
});

chromex.chrome_storage_area.ChromeStorageArea.prototype.chromex$protocols$IChromeStorageArea$set$arity$2 = (function (_this,items){
var self__ = this;
var _this__$1 = this;
var channel = (self__.channel_factory.cljs$core$IFn$_invoke$arity$0 ? self__.channel_factory.cljs$core$IFn$_invoke$arity$0() : self__.channel_factory.call(null));
var target_obj_22501_22519 = self__.native_chrome_storage_area;
var call_info_22503_22520 = [target_obj_22501_22519,(function (){var next_obj_22504 = (target_obj_22501_22519["set"]);
return next_obj_22504;
})()];
var fn_22502_22521 = (call_info_22503_22520[(1)]);
if(!((fn_22502_22521 == null))){
fn_22502_22521.call((call_info_22503_22520[(0)]),items,(self__.callback_factory.cljs$core$IFn$_invoke$arity$1 ? self__.callback_factory.cljs$core$IFn$_invoke$arity$1(channel) : self__.callback_factory.call(null,channel)));
} else {
}

return channel;
});

chromex.chrome_storage_area.ChromeStorageArea.prototype.chromex$protocols$IChromeStorageArea$remove$arity$2 = (function (_this,keys){
var self__ = this;
var _this__$1 = this;
var channel = (self__.channel_factory.cljs$core$IFn$_invoke$arity$0 ? self__.channel_factory.cljs$core$IFn$_invoke$arity$0() : self__.channel_factory.call(null));
var target_obj_22505_22522 = self__.native_chrome_storage_area;
var call_info_22507_22523 = [target_obj_22505_22522,(function (){var next_obj_22508 = (target_obj_22505_22522["remove"]);
return next_obj_22508;
})()];
var fn_22506_22524 = (call_info_22507_22523[(1)]);
if(!((fn_22506_22524 == null))){
fn_22506_22524.call((call_info_22507_22523[(0)]),keys,(self__.callback_factory.cljs$core$IFn$_invoke$arity$1 ? self__.callback_factory.cljs$core$IFn$_invoke$arity$1(channel) : self__.callback_factory.call(null,channel)));
} else {
}

return channel;
});

chromex.chrome_storage_area.ChromeStorageArea.prototype.chromex$protocols$IChromeStorageArea$clear$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
var channel = (self__.channel_factory.cljs$core$IFn$_invoke$arity$0 ? self__.channel_factory.cljs$core$IFn$_invoke$arity$0() : self__.channel_factory.call(null));
var target_obj_22509_22525 = self__.native_chrome_storage_area;
var call_info_22511_22526 = [target_obj_22509_22525,(function (){var next_obj_22512 = (target_obj_22509_22525["clear"]);
return next_obj_22512;
})()];
var fn_22510_22527 = (call_info_22511_22526[(1)]);
if(!((fn_22510_22527 == null))){
fn_22510_22527.call((call_info_22511_22526[(0)]),(self__.callback_factory.cljs$core$IFn$_invoke$arity$1 ? self__.callback_factory.cljs$core$IFn$_invoke$arity$1(channel) : self__.callback_factory.call(null,channel)));
} else {
}

return channel;
});

chromex.chrome_storage_area.ChromeStorageArea.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$native_DASH_chrome_DASH_storage_DASH_area,cljs.core.cst$sym$channel_DASH_factory,cljs.core.cst$sym$callback_DASH_factory], null);
});

chromex.chrome_storage_area.ChromeStorageArea.cljs$lang$type = true;

chromex.chrome_storage_area.ChromeStorageArea.cljs$lang$ctorStr = "chromex.chrome-storage-area/ChromeStorageArea";

chromex.chrome_storage_area.ChromeStorageArea.cljs$lang$ctorPrWriter = (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write(writer__8618__auto__,"chromex.chrome-storage-area/ChromeStorageArea");
});

chromex.chrome_storage_area.__GT_ChromeStorageArea = (function chromex$chrome_storage_area$__GT_ChromeStorageArea(native_chrome_storage_area,channel_factory,callback_factory){
return (new chromex.chrome_storage_area.ChromeStorageArea(native_chrome_storage_area,channel_factory,callback_factory));
});

chromex.chrome_storage_area.make_chrome_storage_area = (function chromex$chrome_storage_area$make_chrome_storage_area(config,native_chrome_storage_area){
if(cljs.core.truth_(native_chrome_storage_area)){
} else {
throw (new Error("Assert failed: native-chrome-storage-area"));
}

return (new chromex.chrome_storage_area.ChromeStorageArea(native_chrome_storage_area,(function (){var config__14260__auto__ = config;
var handler_key__14261__auto__ = cljs.core.cst$kw$chrome_DASH_storage_DASH_area_DASH_callback_DASH_channel_DASH_factory;
var handler__14262__auto__ = (handler_key__14261__auto__.cljs$core$IFn$_invoke$arity$1 ? handler_key__14261__auto__.cljs$core$IFn$_invoke$arity$1(config__14260__auto__) : handler_key__14261__auto__.call(null,config__14260__auto__));
if(cljs.core.fn_QMARK_(handler__14262__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__14261__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14260__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__14262__auto__)")].join('')));
}

return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(handler__14262__auto__,config__14260__auto__);
})(),(function (){var config__14260__auto__ = config;
var handler_key__14261__auto__ = cljs.core.cst$kw$chrome_DASH_storage_DASH_area_DASH_callback_DASH_fn_DASH_factory;
var handler__14262__auto__ = (handler_key__14261__auto__.cljs$core$IFn$_invoke$arity$1 ? handler_key__14261__auto__.cljs$core$IFn$_invoke$arity$1(config__14260__auto__) : handler_key__14261__auto__.call(null,config__14260__auto__));
if(cljs.core.fn_QMARK_(handler__14262__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__14261__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14260__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__14262__auto__)")].join('')));
}

return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(handler__14262__auto__,config__14260__auto__);
})()));
});
