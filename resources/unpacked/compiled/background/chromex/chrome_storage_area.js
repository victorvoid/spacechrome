// Compiled by ClojureScript 1.9.562 {}
goog.provide('chromex.chrome_storage_area');
goog.require('cljs.core');
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
return chromex.protocols.get.call(null,this$__$1,null);
});

chromex.chrome_storage_area.ChromeStorageArea.prototype.chromex$protocols$IChromeStorageArea$get$arity$2 = (function (_this,keys){
var self__ = this;
var _this__$1 = this;
var channel = self__.channel_factory.call(null);
var target_obj_51067_51092 = self__.native_chrome_storage_area;
var _STAR_runtime_state_STAR_51071_51093 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51067_51092,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_51069_51094 = [target_obj_51067_51092,(function (){var next_obj_51070 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51067_51092,(0),"get",true))?(target_obj_51067_51092["get"]):null);
return next_obj_51070;
})()];
var fn_51068_51095 = (call_info_51069_51094[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_51068_51095,oops.state.get_last_access_modifier.call(null))){
if(!((fn_51068_51095 == null))){
fn_51068_51095.call((call_info_51069_51094[(0)]),keys,self__.callback_factory.call(null,channel));
} else {
}
} else {
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51071_51093;
}
return channel;
});

chromex.chrome_storage_area.ChromeStorageArea.prototype.chromex$protocols$IChromeStorageArea$get_bytes_in_use$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return chromex.protocols.get_bytes_in_use.call(null,this$__$1,null);
});

chromex.chrome_storage_area.ChromeStorageArea.prototype.chromex$protocols$IChromeStorageArea$get_bytes_in_use$arity$2 = (function (_this,keys){
var self__ = this;
var _this__$1 = this;
var channel = self__.channel_factory.call(null);
var target_obj_51072_51096 = self__.native_chrome_storage_area;
var _STAR_runtime_state_STAR_51076_51097 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51072_51096,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_51074_51098 = [target_obj_51072_51096,(function (){var next_obj_51075 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51072_51096,(0),"getBytesInUse",true))?(target_obj_51072_51096["getBytesInUse"]):null);
return next_obj_51075;
})()];
var fn_51073_51099 = (call_info_51074_51098[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_51073_51099,oops.state.get_last_access_modifier.call(null))){
if(!((fn_51073_51099 == null))){
fn_51073_51099.call((call_info_51074_51098[(0)]),keys,self__.callback_factory.call(null,channel));
} else {
}
} else {
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51076_51097;
}
return channel;
});

chromex.chrome_storage_area.ChromeStorageArea.prototype.chromex$protocols$IChromeStorageArea$set$arity$2 = (function (_this,items){
var self__ = this;
var _this__$1 = this;
var channel = self__.channel_factory.call(null);
var target_obj_51077_51100 = self__.native_chrome_storage_area;
var _STAR_runtime_state_STAR_51081_51101 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51077_51100,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_51079_51102 = [target_obj_51077_51100,(function (){var next_obj_51080 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51077_51100,(0),"set",true))?(target_obj_51077_51100["set"]):null);
return next_obj_51080;
})()];
var fn_51078_51103 = (call_info_51079_51102[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_51078_51103,oops.state.get_last_access_modifier.call(null))){
if(!((fn_51078_51103 == null))){
fn_51078_51103.call((call_info_51079_51102[(0)]),items,self__.callback_factory.call(null,channel));
} else {
}
} else {
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51081_51101;
}
return channel;
});

chromex.chrome_storage_area.ChromeStorageArea.prototype.chromex$protocols$IChromeStorageArea$remove$arity$2 = (function (_this,keys){
var self__ = this;
var _this__$1 = this;
var channel = self__.channel_factory.call(null);
var target_obj_51082_51104 = self__.native_chrome_storage_area;
var _STAR_runtime_state_STAR_51086_51105 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51082_51104,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_51084_51106 = [target_obj_51082_51104,(function (){var next_obj_51085 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51082_51104,(0),"remove",true))?(target_obj_51082_51104["remove"]):null);
return next_obj_51085;
})()];
var fn_51083_51107 = (call_info_51084_51106[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_51083_51107,oops.state.get_last_access_modifier.call(null))){
if(!((fn_51083_51107 == null))){
fn_51083_51107.call((call_info_51084_51106[(0)]),keys,self__.callback_factory.call(null,channel));
} else {
}
} else {
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51086_51105;
}
return channel;
});

chromex.chrome_storage_area.ChromeStorageArea.prototype.chromex$protocols$IChromeStorageArea$clear$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
var channel = self__.channel_factory.call(null);
var target_obj_51087_51108 = self__.native_chrome_storage_area;
var _STAR_runtime_state_STAR_51091_51109 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51087_51108,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_51089_51110 = [target_obj_51087_51108,(function (){var next_obj_51090 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51087_51108,(0),"clear",true))?(target_obj_51087_51108["clear"]):null);
return next_obj_51090;
})()];
var fn_51088_51111 = (call_info_51089_51110[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_51088_51111,oops.state.get_last_access_modifier.call(null))){
if(!((fn_51088_51111 == null))){
fn_51088_51111.call((call_info_51089_51110[(0)]),self__.callback_factory.call(null,channel));
} else {
}
} else {
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51091_51109;
}
return channel;
});

chromex.chrome_storage_area.ChromeStorageArea.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"native-chrome-storage-area","native-chrome-storage-area",-1884589295,null),new cljs.core.Symbol(null,"channel-factory","channel-factory",-705139767,null),new cljs.core.Symbol(null,"callback-factory","callback-factory",-808206009,null)], null);
});

chromex.chrome_storage_area.ChromeStorageArea.cljs$lang$type = true;

chromex.chrome_storage_area.ChromeStorageArea.cljs$lang$ctorStr = "chromex.chrome-storage-area/ChromeStorageArea";

chromex.chrome_storage_area.ChromeStorageArea.cljs$lang$ctorPrWriter = (function (this__29116__auto__,writer__29117__auto__,opt__29118__auto__){
return cljs.core._write.call(null,writer__29117__auto__,"chromex.chrome-storage-area/ChromeStorageArea");
});

chromex.chrome_storage_area.__GT_ChromeStorageArea = (function chromex$chrome_storage_area$__GT_ChromeStorageArea(native_chrome_storage_area,channel_factory,callback_factory){
return (new chromex.chrome_storage_area.ChromeStorageArea(native_chrome_storage_area,channel_factory,callback_factory));
});

chromex.chrome_storage_area.make_chrome_storage_area = (function chromex$chrome_storage_area$make_chrome_storage_area(config,native_chrome_storage_area){
if(cljs.core.truth_(native_chrome_storage_area)){
} else {
throw (new Error("Assert failed: native-chrome-storage-area"));
}

return (new chromex.chrome_storage_area.ChromeStorageArea(native_chrome_storage_area,(function (){var config__30551__auto__ = config;
var handler_key__30552__auto__ = new cljs.core.Keyword(null,"chrome-storage-area-callback-channel-factory","chrome-storage-area-callback-channel-factory",573191526);
var handler__30553__auto__ = handler_key__30552__auto__.call(null,config__30551__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30553__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30552__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30551__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30553__auto__)")].join('')));
}

return cljs.core.partial.call(null,handler__30553__auto__,config__30551__auto__);
})(),(function (){var config__30551__auto__ = config;
var handler_key__30552__auto__ = new cljs.core.Keyword(null,"chrome-storage-area-callback-fn-factory","chrome-storage-area-callback-fn-factory",575077111);
var handler__30553__auto__ = handler_key__30552__auto__.call(null,config__30551__auto__);
if(cljs.core.fn_QMARK_.call(null,handler__30553__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__30552__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__30551__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__30553__auto__)")].join('')));
}

return cljs.core.partial.call(null,handler__30553__auto__,config__30551__auto__);
})()));
});

//# sourceMappingURL=chrome_storage_area.js.map?rel=1497481555555