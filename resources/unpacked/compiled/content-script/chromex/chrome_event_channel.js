// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('chromex.chrome_event_channel');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('chromex.protocols');

/**
* @constructor
 * @implements {chromex.protocols.IChromeEventChannel}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
chromex.chrome_event_channel.ChromeEventChannel = (function (chan,subscriptions){
this.chan = chan;
this.subscriptions = subscriptions;
})
chromex.chrome_event_channel.ChromeEventChannel.prototype.chromex$protocols$IChromeEventChannel$ = cljs.core.PROTOCOL_SENTINEL;

chromex.chrome_event_channel.ChromeEventChannel.prototype.chromex$protocols$IChromeEventChannel$register_BANG_$arity$2 = (function (_this,subscription){
var self__ = this;
var _this__$1 = this;
return self__.subscriptions = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.subscriptions,subscription);
});

chromex.chrome_event_channel.ChromeEventChannel.prototype.chromex$protocols$IChromeEventChannel$unregister_BANG_$arity$2 = (function (_this,subscription){
var self__ = this;
var _this__$1 = this;
return self__.subscriptions = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(self__.subscriptions,subscription);
});

chromex.chrome_event_channel.ChromeEventChannel.prototype.chromex$protocols$IChromeEventChannel$unsubscribe_all_BANG_$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
var seq__22284_22288 = cljs.core.seq(self__.subscriptions);
var chunk__22285_22289 = null;
var count__22286_22290 = (0);
var i__22287_22291 = (0);
while(true){
if((i__22287_22291 < count__22286_22290)){
var subscription_22292 = chunk__22285_22289.cljs$core$IIndexed$_nth$arity$2(null,i__22287_22291);
chromex.protocols.unsubscribe_BANG_(subscription_22292);

var G__22293 = seq__22284_22288;
var G__22294 = chunk__22285_22289;
var G__22295 = count__22286_22290;
var G__22296 = (i__22287_22291 + (1));
seq__22284_22288 = G__22293;
chunk__22285_22289 = G__22294;
count__22286_22290 = G__22295;
i__22287_22291 = G__22296;
continue;
} else {
var temp__5278__auto___22297 = cljs.core.seq(seq__22284_22288);
if(temp__5278__auto___22297){
var seq__22284_22298__$1 = temp__5278__auto___22297;
if(cljs.core.chunked_seq_QMARK_(seq__22284_22298__$1)){
var c__8871__auto___22299 = cljs.core.chunk_first(seq__22284_22298__$1);
var G__22300 = cljs.core.chunk_rest(seq__22284_22298__$1);
var G__22301 = c__8871__auto___22299;
var G__22302 = cljs.core.count(c__8871__auto___22299);
var G__22303 = (0);
seq__22284_22288 = G__22300;
chunk__22285_22289 = G__22301;
count__22286_22290 = G__22302;
i__22287_22291 = G__22303;
continue;
} else {
var subscription_22304 = cljs.core.first(seq__22284_22298__$1);
chromex.protocols.unsubscribe_BANG_(subscription_22304);

var G__22305 = cljs.core.next(seq__22284_22298__$1);
var G__22306 = null;
var G__22307 = (0);
var G__22308 = (0);
seq__22284_22288 = G__22305;
chunk__22285_22289 = G__22306;
count__22286_22290 = G__22307;
i__22287_22291 = G__22308;
continue;
}
} else {
}
}
break;
}

return self__.subscriptions = cljs.core.PersistentHashSet.EMPTY;
});

chromex.chrome_event_channel.ChromeEventChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

chromex.chrome_event_channel.ChromeEventChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_this,val,handler){
var self__ = this;
var _this__$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.chan,val,handler);
});

chromex.chrome_event_channel.ChromeEventChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

chromex.chrome_event_channel.ChromeEventChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_this,handler){
var self__ = this;
var _this__$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.chan,handler);
});

chromex.chrome_event_channel.ChromeEventChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

chromex.chrome_event_channel.ChromeEventChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.chan);
});

chromex.chrome_event_channel.ChromeEventChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.chromex$protocols$IChromeEventChannel$unsubscribe_all_BANG_$arity$1(null);

return cljs.core.async.impl.protocols.close_BANG_(self__.chan);
});

chromex.chrome_event_channel.ChromeEventChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$chan,cljs.core.with_meta(cljs.core.cst$sym$subscriptions,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

chromex.chrome_event_channel.ChromeEventChannel.cljs$lang$type = true;

chromex.chrome_event_channel.ChromeEventChannel.cljs$lang$ctorStr = "chromex.chrome-event-channel/ChromeEventChannel";

chromex.chrome_event_channel.ChromeEventChannel.cljs$lang$ctorPrWriter = (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write(writer__8618__auto__,"chromex.chrome-event-channel/ChromeEventChannel");
});

chromex.chrome_event_channel.__GT_ChromeEventChannel = (function chromex$chrome_event_channel$__GT_ChromeEventChannel(chan,subscriptions){
return (new chromex.chrome_event_channel.ChromeEventChannel(chan,subscriptions));
});

chromex.chrome_event_channel.make_chrome_event_channel = (function chromex$chrome_event_channel$make_chrome_event_channel(chan){
return (new chromex.chrome_event_channel.ChromeEventChannel(chan,cljs.core.PersistentHashSet.EMPTY));
});
