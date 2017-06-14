// Compiled by ClojureScript 1.9.562 {}
goog.provide('chromex.chrome_event_channel');
goog.require('cljs.core');
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
return self__.subscriptions = cljs.core.conj.call(null,self__.subscriptions,subscription);
});

chromex.chrome_event_channel.ChromeEventChannel.prototype.chromex$protocols$IChromeEventChannel$unregister_BANG_$arity$2 = (function (_this,subscription){
var self__ = this;
var _this__$1 = this;
return self__.subscriptions = cljs.core.disj.call(null,self__.subscriptions,subscription);
});

chromex.chrome_event_channel.ChromeEventChannel.prototype.chromex$protocols$IChromeEventChannel$unsubscribe_all_BANG_$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
var seq__50969_50973 = cljs.core.seq.call(null,self__.subscriptions);
var chunk__50970_50974 = null;
var count__50971_50975 = (0);
var i__50972_50976 = (0);
while(true){
if((i__50972_50976 < count__50971_50975)){
var subscription_50977 = cljs.core._nth.call(null,chunk__50970_50974,i__50972_50976);
chromex.protocols.unsubscribe_BANG_.call(null,subscription_50977);

var G__50978 = seq__50969_50973;
var G__50979 = chunk__50970_50974;
var G__50980 = count__50971_50975;
var G__50981 = (i__50972_50976 + (1));
seq__50969_50973 = G__50978;
chunk__50970_50974 = G__50979;
count__50971_50975 = G__50980;
i__50972_50976 = G__50981;
continue;
} else {
var temp__5278__auto___50982 = cljs.core.seq.call(null,seq__50969_50973);
if(temp__5278__auto___50982){
var seq__50969_50983__$1 = temp__5278__auto___50982;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50969_50983__$1)){
var c__29370__auto___50984 = cljs.core.chunk_first.call(null,seq__50969_50983__$1);
var G__50985 = cljs.core.chunk_rest.call(null,seq__50969_50983__$1);
var G__50986 = c__29370__auto___50984;
var G__50987 = cljs.core.count.call(null,c__29370__auto___50984);
var G__50988 = (0);
seq__50969_50973 = G__50985;
chunk__50970_50974 = G__50986;
count__50971_50975 = G__50987;
i__50972_50976 = G__50988;
continue;
} else {
var subscription_50989 = cljs.core.first.call(null,seq__50969_50983__$1);
chromex.protocols.unsubscribe_BANG_.call(null,subscription_50989);

var G__50990 = cljs.core.next.call(null,seq__50969_50983__$1);
var G__50991 = null;
var G__50992 = (0);
var G__50993 = (0);
seq__50969_50973 = G__50990;
chunk__50970_50974 = G__50991;
count__50971_50975 = G__50992;
i__50972_50976 = G__50993;
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
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.chan,val,handler);
});

chromex.chrome_event_channel.ChromeEventChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

chromex.chrome_event_channel.ChromeEventChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_this,handler){
var self__ = this;
var _this__$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.chan,handler);
});

chromex.chrome_event_channel.ChromeEventChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

chromex.chrome_event_channel.ChromeEventChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_this){
var self__ = this;
var _this__$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.chan);
});

chromex.chrome_event_channel.ChromeEventChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
chromex.protocols.unsubscribe_all_BANG_.call(null,this$__$1);

return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.chan);
});

chromex.chrome_event_channel.ChromeEventChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chan","chan",-462490168,null),cljs.core.with_meta(new cljs.core.Symbol(null,"subscriptions","subscriptions",-1403485993,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

chromex.chrome_event_channel.ChromeEventChannel.cljs$lang$type = true;

chromex.chrome_event_channel.ChromeEventChannel.cljs$lang$ctorStr = "chromex.chrome-event-channel/ChromeEventChannel";

chromex.chrome_event_channel.ChromeEventChannel.cljs$lang$ctorPrWriter = (function (this__29116__auto__,writer__29117__auto__,opt__29118__auto__){
return cljs.core._write.call(null,writer__29117__auto__,"chromex.chrome-event-channel/ChromeEventChannel");
});

chromex.chrome_event_channel.__GT_ChromeEventChannel = (function chromex$chrome_event_channel$__GT_ChromeEventChannel(chan,subscriptions){
return (new chromex.chrome_event_channel.ChromeEventChannel(chan,subscriptions));
});

chromex.chrome_event_channel.make_chrome_event_channel = (function chromex$chrome_event_channel$make_chrome_event_channel(chan){
return (new chromex.chrome_event_channel.ChromeEventChannel(chan,cljs.core.PersistentHashSet.EMPTY));
});

//# sourceMappingURL=chrome_event_channel.js.map?rel=1497481555394