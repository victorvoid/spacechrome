// Compiled by ClojureScript 1.9.562 {}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if(typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels46585 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels46585 = (function (val,meta46586){
this.val = val;
this.meta46586 = meta46586;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels46585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46587,meta46586__$1){
var self__ = this;
var _46587__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels46585(self__.val,meta46586__$1));
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels46585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46587){
var self__ = this;
var _46587__$1 = this;
return self__.meta46586;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels46585.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels46585.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta46586","meta46586",213826587,null)], null);
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels46585.cljs$lang$type = true;

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels46585.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels46585";

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels46585.cljs$lang$ctorPrWriter = (function (this__29116__auto__,writer__29117__auto__,opt__29118__auto__){
return cljs.core._write.call(null,writer__29117__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels46585");
});

cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels46585 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels46585(val__$1,meta46586){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels46585(val__$1,meta46586));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels46585(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
})

cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
});

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__29116__auto__,writer__29117__auto__,opt__29118__auto__){
return cljs.core._write.call(null,writer__29117__auto__,"cljs.core.async.impl.channels/PutBox");
});

cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((!((this$ == null))) && (!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__29177__auto__ = (((this$ == null))?null:this$);
var m__29178__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__29177__auto__)]);
if(!((m__29178__auto__ == null))){
return m__29178__auto__.call(null,this$);
} else {
var m__29178__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);
if(!((m__29178__auto____$1 == null))){
return m__29178__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"MMC.abort",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
})
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_46599 = self__.puts.pop();
if((putter_46599 == null)){
} else {
var put_handler_46600 = putter_46599.handler;
var val_46601 = putter_46599.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_46600)){
var put_cb_46602 = cljs.core.async.impl.protocols.commit.call(null,put_handler_46600);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_46602,put_handler_46600,val_46601,putter_46599,this$__$1){
return (function (){
return put_cb_46602.call(null,true);
});})(put_cb_46602,put_handler_46600,val_46601,putter_46599,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly.call(null,false));

return cljs.core.async.impl.protocols.close_BANG_.call(null,this$__$1);
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if(!((val == null))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Can't put nil in on a channel"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(not (nil? val))")].join('')));
}

var closed__$1 = self__.closed;
if((closed__$1) || (!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))){
return cljs.core.async.impl.channels.box.call(null,!(closed__$1));
} else {
if(cljs.core.truth_((function (){var and__28447__auto__ = self__.buf;
if(cljs.core.truth_(and__28447__auto__)){
return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else {
return and__28447__auto__;
}
})())){
cljs.core.async.impl.protocols.commit.call(null,handler);

var done_QMARK_ = cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if(((self__.takes.length > (0))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var taker = self__.takes.pop();
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker)){
var ret = cljs.core.async.impl.protocols.commit.call(null,taker);
var val__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var G__46603 = cljs.core.conj.call(null,takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return ret.call(null,val__$1);
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__46603;
continue;
} else {
var G__46604 = takers;
takers = G__46604;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

if(cljs.core.seq.call(null,take_cbs)){
var seq__46588_46605 = cljs.core.seq.call(null,take_cbs);
var chunk__46589_46606 = null;
var count__46590_46607 = (0);
var i__46591_46608 = (0);
while(true){
if((i__46591_46608 < count__46590_46607)){
var f_46609 = cljs.core._nth.call(null,chunk__46589_46606,i__46591_46608);
cljs.core.async.impl.dispatch.run.call(null,f_46609);

var G__46610 = seq__46588_46605;
var G__46611 = chunk__46589_46606;
var G__46612 = count__46590_46607;
var G__46613 = (i__46591_46608 + (1));
seq__46588_46605 = G__46610;
chunk__46589_46606 = G__46611;
count__46590_46607 = G__46612;
i__46591_46608 = G__46613;
continue;
} else {
var temp__5278__auto___46614 = cljs.core.seq.call(null,seq__46588_46605);
if(temp__5278__auto___46614){
var seq__46588_46615__$1 = temp__5278__auto___46614;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46588_46615__$1)){
var c__29370__auto___46616 = cljs.core.chunk_first.call(null,seq__46588_46615__$1);
var G__46617 = cljs.core.chunk_rest.call(null,seq__46588_46615__$1);
var G__46618 = c__29370__auto___46616;
var G__46619 = cljs.core.count.call(null,c__29370__auto___46616);
var G__46620 = (0);
seq__46588_46605 = G__46617;
chunk__46589_46606 = G__46618;
count__46590_46607 = G__46619;
i__46591_46608 = G__46620;
continue;
} else {
var f_46621 = cljs.core.first.call(null,seq__46588_46615__$1);
cljs.core.async.impl.dispatch.run.call(null,f_46621);

var G__46622 = cljs.core.next.call(null,seq__46588_46615__$1);
var G__46623 = null;
var G__46624 = (0);
var G__46625 = (0);
seq__46588_46605 = G__46622;
chunk__46589_46606 = G__46623;
count__46590_46607 = G__46624;
i__46591_46608 = G__46625;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box.call(null,true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
return take_cb.call(null,val);
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,true);
} else {
if((self__.dirty_puts > cljs.core.async.impl.channels.MAX_DIRTY)){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.puts.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No more than "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" pending puts are allowed on a single channel."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" Consider using a windowed buffer.")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(< (.-length puts) impl/MAX-QUEUE-SIZE)")].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if(!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler))){
return null;
} else {
if((!((self__.buf == null))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var temp__5276__auto__ = cljs.core.async.impl.protocols.commit.call(null,handler);
if(cljs.core.truth_(temp__5276__auto__)){
var take_cb = temp__5276__auto__;
var val = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var vec__46592 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__28447__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler);
if(and__28447__auto__){
return cljs.core.async.impl.protocols.commit.call(null,put_handler);
} else {
return and__28447__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.call(null,cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val__$1)):null);
if((cljs.core.not.call(null,done_QMARK_)) && (cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))) && ((self__.puts.length > (0)))){
var G__46626 = cbs__$1;
cbs = G__46626;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.call(null,vec__46592,(0),null);
var cbs = cljs.core.nth.call(null,vec__46592,(1),null);
if(cljs.core.truth_(done_QMARK_)){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

var seq__46595_46627 = cljs.core.seq.call(null,cbs);
var chunk__46596_46628 = null;
var count__46597_46629 = (0);
var i__46598_46630 = (0);
while(true){
if((i__46598_46630 < count__46597_46629)){
var cb_46631 = cljs.core._nth.call(null,chunk__46596_46628,i__46598_46630);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__46595_46627,chunk__46596_46628,count__46597_46629,i__46598_46630,cb_46631,val,vec__46592,done_QMARK_,cbs,take_cb,temp__5276__auto__,this$__$1){
return (function (){
return cb_46631.call(null,true);
});})(seq__46595_46627,chunk__46596_46628,count__46597_46629,i__46598_46630,cb_46631,val,vec__46592,done_QMARK_,cbs,take_cb,temp__5276__auto__,this$__$1))
);

var G__46632 = seq__46595_46627;
var G__46633 = chunk__46596_46628;
var G__46634 = count__46597_46629;
var G__46635 = (i__46598_46630 + (1));
seq__46595_46627 = G__46632;
chunk__46596_46628 = G__46633;
count__46597_46629 = G__46634;
i__46598_46630 = G__46635;
continue;
} else {
var temp__5278__auto___46636 = cljs.core.seq.call(null,seq__46595_46627);
if(temp__5278__auto___46636){
var seq__46595_46637__$1 = temp__5278__auto___46636;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46595_46637__$1)){
var c__29370__auto___46638 = cljs.core.chunk_first.call(null,seq__46595_46637__$1);
var G__46639 = cljs.core.chunk_rest.call(null,seq__46595_46637__$1);
var G__46640 = c__29370__auto___46638;
var G__46641 = cljs.core.count.call(null,c__29370__auto___46638);
var G__46642 = (0);
seq__46595_46627 = G__46639;
chunk__46596_46628 = G__46640;
count__46597_46629 = G__46641;
i__46598_46630 = G__46642;
continue;
} else {
var cb_46643 = cljs.core.first.call(null,seq__46595_46637__$1);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__46595_46627,chunk__46596_46628,count__46597_46629,i__46598_46630,cb_46643,seq__46595_46637__$1,temp__5278__auto___46636,val,vec__46592,done_QMARK_,cbs,take_cb,temp__5276__auto__,this$__$1){
return (function (){
return cb_46643.call(null,true);
});})(seq__46595_46627,chunk__46596_46628,count__46597_46629,i__46598_46630,cb_46643,seq__46595_46637__$1,temp__5278__auto___46636,val,vec__46592,done_QMARK_,cbs,take_cb,temp__5276__auto__,this$__$1))
);

var G__46644 = cljs.core.next.call(null,seq__46595_46637__$1);
var G__46645 = null;
var G__46646 = (0);
var G__46647 = (0);
seq__46595_46627 = G__46644;
chunk__46596_46628 = G__46645;
count__46597_46629 = G__46646;
i__46598_46630 = G__46647;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit.call(null,putter.handler);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (put_cb,putter,this$__$1){
return (function (){
return put_cb.call(null,true);
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
self__.add_BANG_.call(null,self__.buf);
} else {
}

if(cljs.core.truth_((function (){var and__28447__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);
if(cljs.core.truth_(and__28447__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,handler);
} else {
return and__28447__auto__;
}
})())){
var has_val = (function (){var and__28447__auto__ = self__.buf;
if(cljs.core.truth_(and__28447__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__28447__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
if((self__.dirty_takes > cljs.core.async.impl.channels.MAX_DIRTY)){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.takes.length < cljs.core.async.impl.protocols.MAX_QUEUE_SIZE)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No more than "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.async.impl.protocols.MAX_QUEUE_SIZE),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" pending takes are allowed on a single channel.")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(< (.-length takes) impl/MAX-QUEUE-SIZE)")].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__28447__auto__ = self__.buf;
if(cljs.core.truth_(and__28447__auto__)){
return (self__.puts.length === (0));
} else {
return and__28447__auto__;
}
})())){
self__.add_BANG_.call(null,self__.buf);
} else {
}

while(true){
var taker_46648 = self__.takes.pop();
if((taker_46648 == null)){
} else {
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_46648)){
var take_cb_46649 = cljs.core.async.impl.protocols.commit.call(null,taker_46648);
var val_46650 = (cljs.core.truth_((function (){var and__28447__auto__ = self__.buf;
if(cljs.core.truth_(and__28447__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__28447__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_46649,val_46650,taker_46648,this$__$1){
return (function (){
return take_cb_46649.call(null,val_46650);
});})(take_cb_46649,val_46650,taker_46648,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
cljs.core.async.impl.protocols.close_buf_BANG_.call(null,self__.buf);
} else {
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__29116__auto__,writer__29117__auto__,opt__29118__auto__){
return cljs.core._write.call(null,writer__29117__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var or__28459__auto__ = exh;
if(cljs.core.truth_(or__28459__auto__)){
return or__28459__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.call(null,buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var args46651 = [];
var len__29680__auto___46656 = arguments.length;
var i__29681__auto___46657 = (0);
while(true){
if((i__29681__auto___46657 < len__29680__auto___46656)){
args46651.push((arguments[i__29681__auto___46657]));

var G__46658 = (i__29681__auto___46657 + (1));
i__29681__auto___46657 = G__46658;
continue;
} else {
}
break;
}

var G__46653 = args46651.length;
switch (G__46653) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46651.length)].join('')));

}
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.call(null,buf,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.call(null,buf,xform,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?xform.call(null,cljs.core.async.impl.protocols.add_BANG_):cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
var G__46660 = null;
var G__46660__1 = (function (buf__$1){
try{return add_BANG_.call(null,buf__$1);
}catch (e46654){var t = e46654;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__46660__2 = (function (buf__$1,val){
try{return add_BANG_.call(null,buf__$1,val);
}catch (e46655){var t = e46655;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__46660 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__46660__1.call(this,buf__$1);
case 2:
return G__46660__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__46660.cljs$core$IFn$_invoke$arity$1 = G__46660__1;
G__46660.cljs$core$IFn$_invoke$arity$2 = G__46660__2;
return G__46660;
})()
;})(add_BANG_))
})()));
});

cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=channels.js.map?rel=1497481551761