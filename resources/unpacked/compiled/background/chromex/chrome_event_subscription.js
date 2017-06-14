// Compiled by ClojureScript 1.9.562 {}
goog.provide('chromex.chrome_event_subscription');
goog.require('cljs.core');
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
return chromex.protocols.subscribe_BANG_.call(null,this$__$1,null);
});

chromex.chrome_event_subscription.ChromeEventSubscription.prototype.chromex$protocols$IChromeEventSubscription$subscribe_BANG_$arity$2 = (function (this$,extra_args){
var self__ = this;
var this$__$1 = this;
new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((extra_args == null)) || (cljs.core.seq_QMARK_.call(null,extra_args))], null)], null);

if(!(cljs.core._EQ_.call(null,self__.subscribed_count,(0)))){
return chromex.chrome_event_subscription._STAR_subscribe_called_while_subscribed_STAR_.call(null,this$__$1);
} else {
if(((!((self__.chan == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === self__.chan.chromex$protocols$IChromeEventChannel$)))?true:(((!self__.chan.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,chromex.protocols.IChromeEventChannel,self__.chan):false)):cljs.core.native_satisfies_QMARK_.call(null,chromex.protocols.IChromeEventChannel,self__.chan))){
chromex.protocols.register_BANG_.call(null,self__.chan,this$__$1);
} else {
}

self__.subscribed_count = (self__.subscribed_count + (1));

var target_obj_50997 = self__.chrome_event;
var _STAR_runtime_state_STAR_51001 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_50997,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_50999 = [target_obj_50997,(function (){var next_obj_51000 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_50997,(0),"addListener",true))?(target_obj_50997["addListener"]):null);
return next_obj_51000;
})()];
var fn_50998 = (call_info_50999[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_50998,oops.state.get_last_access_modifier.call(null))){
if(!((fn_50998 == null))){
return fn_50998.apply((call_info_50999[(0)]),oops.helpers.to_native_array.call(null,cljs.core.cons.call(null,self__.listener,extra_args)));
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51001;
}}
});

chromex.chrome_event_subscription.ChromeEventSubscription.prototype.chromex$protocols$IChromeEventSubscription$unsubscribe_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!(cljs.core._EQ_.call(null,self__.subscribed_count,(1)))){
return chromex.chrome_event_subscription._STAR_unsubscribe_called_while_not_subscribed_STAR_.call(null,this$__$1);
} else {
self__.subscribed_count = (self__.subscribed_count - (1));

var target_obj_51002_51008 = self__.chrome_event;
var _STAR_runtime_state_STAR_51006_51009 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_51002_51008,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_51004_51010 = [target_obj_51002_51008,(function (){var next_obj_51005 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_51002_51008,(0),"removeListener",true))?(target_obj_51002_51008["removeListener"]):null);
return next_obj_51005;
})()];
var fn_51003_51011 = (call_info_51004_51010[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_51003_51011,oops.state.get_last_access_modifier.call(null))){
if(!((fn_51003_51011 == null))){
fn_51003_51011.call((call_info_51004_51010[(0)]),self__.listener);
} else {
}
} else {
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_51006_51009;
}
if(((!((self__.chan == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === self__.chan.chromex$protocols$IChromeEventChannel$)))?true:(((!self__.chan.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,chromex.protocols.IChromeEventChannel,self__.chan):false)):cljs.core.native_satisfies_QMARK_.call(null,chromex.protocols.IChromeEventChannel,self__.chan))){
return chromex.protocols.unregister_BANG_.call(null,self__.chan,this$__$1);
} else {
return null;
}
}
});

chromex.chrome_event_subscription.ChromeEventSubscription.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chrome-event","chrome-event",-2110595104,null),new cljs.core.Symbol(null,"listener","listener",-1772288521,null),new cljs.core.Symbol(null,"chan","chan",-462490168,null),cljs.core.with_meta(new cljs.core.Symbol(null,"subscribed-count","subscribed-count",1987758776,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

chromex.chrome_event_subscription.ChromeEventSubscription.cljs$lang$type = true;

chromex.chrome_event_subscription.ChromeEventSubscription.cljs$lang$ctorStr = "chromex.chrome-event-subscription/ChromeEventSubscription";

chromex.chrome_event_subscription.ChromeEventSubscription.cljs$lang$ctorPrWriter = (function (this__29116__auto__,writer__29117__auto__,opt__29118__auto__){
return cljs.core._write.call(null,writer__29117__auto__,"chromex.chrome-event-subscription/ChromeEventSubscription");
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

//# sourceMappingURL=chrome_event_subscription.js.map?rel=1497481555425