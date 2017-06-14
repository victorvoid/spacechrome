// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('chromex.chrome_event_subscription');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('chromex.protocols');
goog.require('oops.core');

/**
* @constructor
 * @implements {chromex.protocols.IChromeEventSubscription}
*/
chromex.chrome_event_subscription.ChromeEventSubscription = (function (chrome_event,listener,chan,subscribed_count){
this.chrome_event = chrome_event;
this.listener = listener;
this.chan = chan;
this.subscribed_count = subscribed_count;
})
chromex.chrome_event_subscription.ChromeEventSubscription.prototype.chromex$protocols$IChromeEventSubscription$ = cljs.core.PROTOCOL_SENTINEL;

chromex.chrome_event_subscription.ChromeEventSubscription.prototype.chromex$protocols$IChromeEventSubscription$subscribe_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.chromex$protocols$IChromeEventSubscription$subscribe_BANG_$arity$2(null,null);
});

chromex.chrome_event_subscription.ChromeEventSubscription.prototype.chromex$protocols$IChromeEventSubscription$subscribe_BANG_$arity$2 = (function (this$,extra_args){
var self__ = this;
var this$__$1 = this;
new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pre,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((extra_args == null)) || (cljs.core.seq_QMARK_(extra_args))], null)], null);

if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.subscribed_count,(0)))){
return (chromex.chrome_event_subscription._STAR_subscribe_called_while_subscribed_STAR_.cljs$core$IFn$_invoke$arity$1 ? chromex.chrome_event_subscription._STAR_subscribe_called_while_subscribed_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : chromex.chrome_event_subscription._STAR_subscribe_called_while_subscribed_STAR_.call(null,this$__$1));
} else {
if(((!((self__.chan == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === self__.chan.chromex$protocols$IChromeEventChannel$)))?true:(((!self__.chan.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(chromex.protocols.IChromeEventChannel,self__.chan):false)):cljs.core.native_satisfies_QMARK_(chromex.protocols.IChromeEventChannel,self__.chan))){
chromex.protocols.register_BANG_(self__.chan,this$__$1);
} else {
}

self__.subscribed_count = (self__.subscribed_count + (1));

var target_obj_22312 = self__.chrome_event;
var call_info_22314 = [target_obj_22312,(function (){var next_obj_22315 = (target_obj_22312["addListener"]);
return next_obj_22315;
})()];
var fn_22313 = (call_info_22314[(1)]);
if(!((fn_22313 == null))){
return fn_22313.apply((call_info_22314[(0)]),oops.helpers.to_native_array(cljs.core.cons(self__.listener,extra_args)));
} else {
return null;
}
}
});

chromex.chrome_event_subscription.ChromeEventSubscription.prototype.chromex$protocols$IChromeEventSubscription$unsubscribe_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.subscribed_count,(1)))){
return (chromex.chrome_event_subscription._STAR_unsubscribe_called_while_not_subscribed_STAR_.cljs$core$IFn$_invoke$arity$1 ? chromex.chrome_event_subscription._STAR_unsubscribe_called_while_not_subscribed_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : chromex.chrome_event_subscription._STAR_unsubscribe_called_while_not_subscribed_STAR_.call(null,this$__$1));
} else {
self__.subscribed_count = (self__.subscribed_count - (1));

var target_obj_22316_22321 = self__.chrome_event;
var call_info_22318_22322 = [target_obj_22316_22321,(function (){var next_obj_22319 = (target_obj_22316_22321["removeListener"]);
return next_obj_22319;
})()];
var fn_22317_22323 = (call_info_22318_22322[(1)]);
if(!((fn_22317_22323 == null))){
fn_22317_22323.call((call_info_22318_22322[(0)]),self__.listener);
} else {
}

if(((!((self__.chan == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === self__.chan.chromex$protocols$IChromeEventChannel$)))?true:(((!self__.chan.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(chromex.protocols.IChromeEventChannel,self__.chan):false)):cljs.core.native_satisfies_QMARK_(chromex.protocols.IChromeEventChannel,self__.chan))){
return chromex.protocols.unregister_BANG_(self__.chan,this$__$1);
} else {
return null;
}
}
});

chromex.chrome_event_subscription.ChromeEventSubscription.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$chrome_DASH_event,cljs.core.cst$sym$listener,cljs.core.cst$sym$chan,cljs.core.with_meta(cljs.core.cst$sym$subscribed_DASH_count,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

chromex.chrome_event_subscription.ChromeEventSubscription.cljs$lang$type = true;

chromex.chrome_event_subscription.ChromeEventSubscription.cljs$lang$ctorStr = "chromex.chrome-event-subscription/ChromeEventSubscription";

chromex.chrome_event_subscription.ChromeEventSubscription.cljs$lang$ctorPrWriter = (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write(writer__8618__auto__,"chromex.chrome-event-subscription/ChromeEventSubscription");
});

chromex.chrome_event_subscription.__GT_ChromeEventSubscription = (function chromex$chrome_event_subscription$__GT_ChromeEventSubscription(chrome_event,listener,chan,subscribed_count){
return (new chromex.chrome_event_subscription.ChromeEventSubscription(chrome_event,listener,chan,subscribed_count));
});

chromex.chrome_event_subscription.make_chrome_event_subscription = (function chromex$chrome_event_subscription$make_chrome_event_subscription(chrome_event,listener,chan){
if(cljs.core.truth_(chrome_event)){
} else {
throw (new Error("Assert failed: chrome-event"));
}

if(cljs.core.truth_(listener)){
} else {
throw (new Error("Assert failed: listener"));
}

if(cljs.core.truth_(chan)){
} else {
throw (new Error("Assert failed: chan"));
}

return (new chromex.chrome_event_subscription.ChromeEventSubscription(chrome_event,listener,chan,(0)));
});
chromex.chrome_event_subscription._STAR_subscribe_called_while_subscribed_STAR_ = (function chromex$chrome_event_subscription$_STAR_subscribe_called_while_subscribed_STAR_(_chrome_event_subscription){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("ChromeEventSubscription: subscribe called while already subscribed"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
chromex.chrome_event_subscription._STAR_unsubscribe_called_while_not_subscribed_STAR_ = (function chromex$chrome_event_subscription$_STAR_unsubscribe_called_while_not_subscribed_STAR_(_chrome_event_subscription){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("ChromeEventSubscription: unsubscribe called while not subscribed"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
