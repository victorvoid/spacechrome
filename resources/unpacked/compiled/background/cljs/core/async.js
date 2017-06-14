// Compiled by ClojureScript 1.9.562 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args46754 = [];
var len__29680__auto___46760 = arguments.length;
var i__29681__auto___46761 = (0);
while(true){
if((i__29681__auto___46761 < len__29680__auto___46760)){
args46754.push((arguments[i__29681__auto___46761]));

var G__46762 = (i__29681__auto___46761 + (1));
i__29681__auto___46761 = G__46762;
continue;
} else {
}
break;
}

var G__46756 = args46754.length;
switch (G__46756) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46754.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async46757 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46757 = (function (f,blockable,meta46758){
this.f = f;
this.blockable = blockable;
this.meta46758 = meta46758;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46759,meta46758__$1){
var self__ = this;
var _46759__$1 = this;
return (new cljs.core.async.t_cljs$core$async46757(self__.f,self__.blockable,meta46758__$1));
});

cljs.core.async.t_cljs$core$async46757.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46759){
var self__ = this;
var _46759__$1 = this;
return self__.meta46758;
});

cljs.core.async.t_cljs$core$async46757.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46757.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async46757.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async46757.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async46757.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46758","meta46758",-788280145,null)], null);
});

cljs.core.async.t_cljs$core$async46757.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46757.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46757";

cljs.core.async.t_cljs$core$async46757.cljs$lang$ctorPrWriter = (function (this__29116__auto__,writer__29117__auto__,opt__29118__auto__){
return cljs.core._write.call(null,writer__29117__auto__,"cljs.core.async/t_cljs$core$async46757");
});

cljs.core.async.__GT_t_cljs$core$async46757 = (function cljs$core$async$__GT_t_cljs$core$async46757(f__$1,blockable__$1,meta46758){
return (new cljs.core.async.t_cljs$core$async46757(f__$1,blockable__$1,meta46758));
});

}

return (new cljs.core.async.t_cljs$core$async46757(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args46766 = [];
var len__29680__auto___46769 = arguments.length;
var i__29681__auto___46770 = (0);
while(true){
if((i__29681__auto___46770 < len__29680__auto___46769)){
args46766.push((arguments[i__29681__auto___46770]));

var G__46771 = (i__29681__auto___46770 + (1));
i__29681__auto___46770 = G__46771;
continue;
} else {
}
break;
}

var G__46768 = args46766.length;
switch (G__46768) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46766.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args46773 = [];
var len__29680__auto___46776 = arguments.length;
var i__29681__auto___46777 = (0);
while(true){
if((i__29681__auto___46777 < len__29680__auto___46776)){
args46773.push((arguments[i__29681__auto___46777]));

var G__46778 = (i__29681__auto___46777 + (1));
i__29681__auto___46777 = G__46778;
continue;
} else {
}
break;
}

var G__46775 = args46773.length;
switch (G__46775) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46773.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args46780 = [];
var len__29680__auto___46783 = arguments.length;
var i__29681__auto___46784 = (0);
while(true){
if((i__29681__auto___46784 < len__29680__auto___46783)){
args46780.push((arguments[i__29681__auto___46784]));

var G__46785 = (i__29681__auto___46784 + (1));
i__29681__auto___46784 = G__46785;
continue;
} else {
}
break;
}

var G__46782 = args46780.length;
switch (G__46782) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46780.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_46787 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_46787);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_46787,ret){
return (function (){
return fn1.call(null,val_46787);
});})(val_46787,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args46788 = [];
var len__29680__auto___46791 = arguments.length;
var i__29681__auto___46792 = (0);
while(true){
if((i__29681__auto___46792 < len__29680__auto___46791)){
args46788.push((arguments[i__29681__auto___46792]));

var G__46793 = (i__29681__auto___46792 + (1));
i__29681__auto___46792 = G__46793;
continue;
} else {
}
break;
}

var G__46790 = args46788.length;
switch (G__46790) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46788.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5276__auto__)){
var ret = temp__5276__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5276__auto__)){
var retb = temp__5276__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5276__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5276__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__29480__auto___46795 = n;
var x_46796 = (0);
while(true){
if((x_46796 < n__29480__auto___46795)){
(a[x_46796] = (0));

var G__46797 = (x_46796 + (1));
x_46796 = G__46797;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__46798 = (i + (1));
i = G__46798;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async46802 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46802 = (function (flag,meta46803){
this.flag = flag;
this.meta46803 = meta46803;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_46804,meta46803__$1){
var self__ = this;
var _46804__$1 = this;
return (new cljs.core.async.t_cljs$core$async46802(self__.flag,meta46803__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async46802.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_46804){
var self__ = this;
var _46804__$1 = this;
return self__.meta46803;
});})(flag))
;

cljs.core.async.t_cljs$core$async46802.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46802.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async46802.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async46802.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async46802.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta46803","meta46803",1747545670,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async46802.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46802.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46802";

cljs.core.async.t_cljs$core$async46802.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__29116__auto__,writer__29117__auto__,opt__29118__auto__){
return cljs.core._write.call(null,writer__29117__auto__,"cljs.core.async/t_cljs$core$async46802");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async46802 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async46802(flag__$1,meta46803){
return (new cljs.core.async.t_cljs$core$async46802(flag__$1,meta46803));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async46802(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async46808 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46808 = (function (flag,cb,meta46809){
this.flag = flag;
this.cb = cb;
this.meta46809 = meta46809;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46810,meta46809__$1){
var self__ = this;
var _46810__$1 = this;
return (new cljs.core.async.t_cljs$core$async46808(self__.flag,self__.cb,meta46809__$1));
});

cljs.core.async.t_cljs$core$async46808.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46810){
var self__ = this;
var _46810__$1 = this;
return self__.meta46809;
});

cljs.core.async.t_cljs$core$async46808.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46808.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async46808.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async46808.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async46808.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta46809","meta46809",1961571688,null)], null);
});

cljs.core.async.t_cljs$core$async46808.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46808.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46808";

cljs.core.async.t_cljs$core$async46808.cljs$lang$ctorPrWriter = (function (this__29116__auto__,writer__29117__auto__,opt__29118__auto__){
return cljs.core._write.call(null,writer__29117__auto__,"cljs.core.async/t_cljs$core$async46808");
});

cljs.core.async.__GT_t_cljs$core$async46808 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async46808(flag__$1,cb__$1,meta46809){
return (new cljs.core.async.t_cljs$core$async46808(flag__$1,cb__$1,meta46809));
});

}

return (new cljs.core.async.t_cljs$core$async46808(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46811_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46811_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46812_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46812_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__28459__auto__ = wport;
if(cljs.core.truth_(or__28459__auto__)){
return or__28459__auto__;
} else {
return port;
}
})()], null));
} else {
var G__46813 = (i + (1));
i = G__46813;
continue;
}
} else {
return null;
}
break;
}
})();
var or__28459__auto__ = ret;
if(cljs.core.truth_(or__28459__auto__)){
return or__28459__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5278__auto__ = (function (){var and__28447__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__28447__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__28447__auto__;
}
})();
if(cljs.core.truth_(temp__5278__auto__)){
var got = temp__5278__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___46819 = arguments.length;
var i__29681__auto___46820 = (0);
while(true){
if((i__29681__auto___46820 < len__29680__auto___46819)){
args__29687__auto__.push((arguments[i__29681__auto___46820]));

var G__46821 = (i__29681__auto___46820 + (1));
i__29681__auto___46820 = G__46821;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((1) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29688__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46816){
var map__46817 = p__46816;
var map__46817__$1 = ((((!((map__46817 == null)))?((((map__46817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46817.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46817):map__46817);
var opts = map__46817__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46814){
var G__46815 = cljs.core.first.call(null,seq46814);
var seq46814__$1 = cljs.core.next.call(null,seq46814);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46815,seq46814__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args46822 = [];
var len__29680__auto___46872 = arguments.length;
var i__29681__auto___46873 = (0);
while(true){
if((i__29681__auto___46873 < len__29680__auto___46872)){
args46822.push((arguments[i__29681__auto___46873]));

var G__46874 = (i__29681__auto___46873 + (1));
i__29681__auto___46873 = G__46874;
continue;
} else {
}
break;
}

var G__46824 = args46822.length;
switch (G__46824) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46822.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32057__auto___46876 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto___46876){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto___46876){
return (function (state_46848){
var state_val_46849 = (state_46848[(1)]);
if((state_val_46849 === (7))){
var inst_46844 = (state_46848[(2)]);
var state_46848__$1 = state_46848;
var statearr_46850_46877 = state_46848__$1;
(statearr_46850_46877[(2)] = inst_46844);

(statearr_46850_46877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46849 === (1))){
var state_46848__$1 = state_46848;
var statearr_46851_46878 = state_46848__$1;
(statearr_46851_46878[(2)] = null);

(statearr_46851_46878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46849 === (4))){
var inst_46827 = (state_46848[(7)]);
var inst_46827__$1 = (state_46848[(2)]);
var inst_46828 = (inst_46827__$1 == null);
var state_46848__$1 = (function (){var statearr_46852 = state_46848;
(statearr_46852[(7)] = inst_46827__$1);

return statearr_46852;
})();
if(cljs.core.truth_(inst_46828)){
var statearr_46853_46879 = state_46848__$1;
(statearr_46853_46879[(1)] = (5));

} else {
var statearr_46854_46880 = state_46848__$1;
(statearr_46854_46880[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46849 === (13))){
var state_46848__$1 = state_46848;
var statearr_46855_46881 = state_46848__$1;
(statearr_46855_46881[(2)] = null);

(statearr_46855_46881[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46849 === (6))){
var inst_46827 = (state_46848[(7)]);
var state_46848__$1 = state_46848;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46848__$1,(11),to,inst_46827);
} else {
if((state_val_46849 === (3))){
var inst_46846 = (state_46848[(2)]);
var state_46848__$1 = state_46848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46848__$1,inst_46846);
} else {
if((state_val_46849 === (12))){
var state_46848__$1 = state_46848;
var statearr_46856_46882 = state_46848__$1;
(statearr_46856_46882[(2)] = null);

(statearr_46856_46882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46849 === (2))){
var state_46848__$1 = state_46848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46848__$1,(4),from);
} else {
if((state_val_46849 === (11))){
var inst_46837 = (state_46848[(2)]);
var state_46848__$1 = state_46848;
if(cljs.core.truth_(inst_46837)){
var statearr_46857_46883 = state_46848__$1;
(statearr_46857_46883[(1)] = (12));

} else {
var statearr_46858_46884 = state_46848__$1;
(statearr_46858_46884[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46849 === (9))){
var state_46848__$1 = state_46848;
var statearr_46859_46885 = state_46848__$1;
(statearr_46859_46885[(2)] = null);

(statearr_46859_46885[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46849 === (5))){
var state_46848__$1 = state_46848;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46860_46886 = state_46848__$1;
(statearr_46860_46886[(1)] = (8));

} else {
var statearr_46861_46887 = state_46848__$1;
(statearr_46861_46887[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46849 === (14))){
var inst_46842 = (state_46848[(2)]);
var state_46848__$1 = state_46848;
var statearr_46862_46888 = state_46848__$1;
(statearr_46862_46888[(2)] = inst_46842);

(statearr_46862_46888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46849 === (10))){
var inst_46834 = (state_46848[(2)]);
var state_46848__$1 = state_46848;
var statearr_46863_46889 = state_46848__$1;
(statearr_46863_46889[(2)] = inst_46834);

(statearr_46863_46889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46849 === (8))){
var inst_46831 = cljs.core.async.close_BANG_.call(null,to);
var state_46848__$1 = state_46848;
var statearr_46864_46890 = state_46848__$1;
(statearr_46864_46890[(2)] = inst_46831);

(statearr_46864_46890[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32057__auto___46876))
;
return ((function (switch__31943__auto__,c__32057__auto___46876){
return (function() {
var cljs$core$async$state_machine__31944__auto__ = null;
var cljs$core$async$state_machine__31944__auto____0 = (function (){
var statearr_46868 = [null,null,null,null,null,null,null,null];
(statearr_46868[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_46868[(1)] = (1));

return statearr_46868;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_46848){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_46848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e46869){if((e46869 instanceof Object)){
var ex__31947__auto__ = e46869;
var statearr_46870_46891 = state_46848;
(statearr_46870_46891[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46892 = state_46848;
state_46848 = G__46892;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_46848){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_46848);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto___46876))
})();
var state__32059__auto__ = (function (){var statearr_46871 = f__32058__auto__.call(null);
(statearr_46871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto___46876);

return statearr_46871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto___46876))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__47080){
var vec__47081 = p__47080;
var v = cljs.core.nth.call(null,vec__47081,(0),null);
var p = cljs.core.nth.call(null,vec__47081,(1),null);
var job = vec__47081;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32057__auto___47267 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto___47267,res,vec__47081,v,p,job,jobs,results){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto___47267,res,vec__47081,v,p,job,jobs,results){
return (function (state_47088){
var state_val_47089 = (state_47088[(1)]);
if((state_val_47089 === (1))){
var state_47088__$1 = state_47088;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47088__$1,(2),res,v);
} else {
if((state_val_47089 === (2))){
var inst_47085 = (state_47088[(2)]);
var inst_47086 = cljs.core.async.close_BANG_.call(null,res);
var state_47088__$1 = (function (){var statearr_47090 = state_47088;
(statearr_47090[(7)] = inst_47085);

return statearr_47090;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47088__$1,inst_47086);
} else {
return null;
}
}
});})(c__32057__auto___47267,res,vec__47081,v,p,job,jobs,results))
;
return ((function (switch__31943__auto__,c__32057__auto___47267,res,vec__47081,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0 = (function (){
var statearr_47094 = [null,null,null,null,null,null,null,null];
(statearr_47094[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__);

(statearr_47094[(1)] = (1));

return statearr_47094;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1 = (function (state_47088){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_47088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e47095){if((e47095 instanceof Object)){
var ex__31947__auto__ = e47095;
var statearr_47096_47268 = state_47088;
(statearr_47096_47268[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47269 = state_47088;
state_47088 = G__47269;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__ = function(state_47088){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1.call(this,state_47088);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto___47267,res,vec__47081,v,p,job,jobs,results))
})();
var state__32059__auto__ = (function (){var statearr_47097 = f__32058__auto__.call(null);
(statearr_47097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto___47267);

return statearr_47097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto___47267,res,vec__47081,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__47098){
var vec__47099 = p__47098;
var v = cljs.core.nth.call(null,vec__47099,(0),null);
var p = cljs.core.nth.call(null,vec__47099,(1),null);
var job = vec__47099;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__29480__auto___47270 = n;
var __47271 = (0);
while(true){
if((__47271 < n__29480__auto___47270)){
var G__47102_47272 = type;
var G__47102_47273__$1 = (((G__47102_47272 instanceof cljs.core.Keyword))?G__47102_47272.fqn:null);
switch (G__47102_47273__$1) {
case "compute":
var c__32057__auto___47275 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__47271,c__32057__auto___47275,G__47102_47272,G__47102_47273__$1,n__29480__auto___47270,jobs,results,process,async){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (__47271,c__32057__auto___47275,G__47102_47272,G__47102_47273__$1,n__29480__auto___47270,jobs,results,process,async){
return (function (state_47115){
var state_val_47116 = (state_47115[(1)]);
if((state_val_47116 === (1))){
var state_47115__$1 = state_47115;
var statearr_47117_47276 = state_47115__$1;
(statearr_47117_47276[(2)] = null);

(statearr_47117_47276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47116 === (2))){
var state_47115__$1 = state_47115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47115__$1,(4),jobs);
} else {
if((state_val_47116 === (3))){
var inst_47113 = (state_47115[(2)]);
var state_47115__$1 = state_47115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47115__$1,inst_47113);
} else {
if((state_val_47116 === (4))){
var inst_47105 = (state_47115[(2)]);
var inst_47106 = process.call(null,inst_47105);
var state_47115__$1 = state_47115;
if(cljs.core.truth_(inst_47106)){
var statearr_47118_47277 = state_47115__$1;
(statearr_47118_47277[(1)] = (5));

} else {
var statearr_47119_47278 = state_47115__$1;
(statearr_47119_47278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47116 === (5))){
var state_47115__$1 = state_47115;
var statearr_47120_47279 = state_47115__$1;
(statearr_47120_47279[(2)] = null);

(statearr_47120_47279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47116 === (6))){
var state_47115__$1 = state_47115;
var statearr_47121_47280 = state_47115__$1;
(statearr_47121_47280[(2)] = null);

(statearr_47121_47280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47116 === (7))){
var inst_47111 = (state_47115[(2)]);
var state_47115__$1 = state_47115;
var statearr_47122_47281 = state_47115__$1;
(statearr_47122_47281[(2)] = inst_47111);

(statearr_47122_47281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47271,c__32057__auto___47275,G__47102_47272,G__47102_47273__$1,n__29480__auto___47270,jobs,results,process,async))
;
return ((function (__47271,switch__31943__auto__,c__32057__auto___47275,G__47102_47272,G__47102_47273__$1,n__29480__auto___47270,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0 = (function (){
var statearr_47126 = [null,null,null,null,null,null,null];
(statearr_47126[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__);

(statearr_47126[(1)] = (1));

return statearr_47126;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1 = (function (state_47115){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_47115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e47127){if((e47127 instanceof Object)){
var ex__31947__auto__ = e47127;
var statearr_47128_47282 = state_47115;
(statearr_47128_47282[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47283 = state_47115;
state_47115 = G__47283;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__ = function(state_47115){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1.call(this,state_47115);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__;
})()
;})(__47271,switch__31943__auto__,c__32057__auto___47275,G__47102_47272,G__47102_47273__$1,n__29480__auto___47270,jobs,results,process,async))
})();
var state__32059__auto__ = (function (){var statearr_47129 = f__32058__auto__.call(null);
(statearr_47129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto___47275);

return statearr_47129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(__47271,c__32057__auto___47275,G__47102_47272,G__47102_47273__$1,n__29480__auto___47270,jobs,results,process,async))
);


break;
case "async":
var c__32057__auto___47284 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__47271,c__32057__auto___47284,G__47102_47272,G__47102_47273__$1,n__29480__auto___47270,jobs,results,process,async){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (__47271,c__32057__auto___47284,G__47102_47272,G__47102_47273__$1,n__29480__auto___47270,jobs,results,process,async){
return (function (state_47142){
var state_val_47143 = (state_47142[(1)]);
if((state_val_47143 === (1))){
var state_47142__$1 = state_47142;
var statearr_47144_47285 = state_47142__$1;
(statearr_47144_47285[(2)] = null);

(statearr_47144_47285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47143 === (2))){
var state_47142__$1 = state_47142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47142__$1,(4),jobs);
} else {
if((state_val_47143 === (3))){
var inst_47140 = (state_47142[(2)]);
var state_47142__$1 = state_47142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47142__$1,inst_47140);
} else {
if((state_val_47143 === (4))){
var inst_47132 = (state_47142[(2)]);
var inst_47133 = async.call(null,inst_47132);
var state_47142__$1 = state_47142;
if(cljs.core.truth_(inst_47133)){
var statearr_47145_47286 = state_47142__$1;
(statearr_47145_47286[(1)] = (5));

} else {
var statearr_47146_47287 = state_47142__$1;
(statearr_47146_47287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47143 === (5))){
var state_47142__$1 = state_47142;
var statearr_47147_47288 = state_47142__$1;
(statearr_47147_47288[(2)] = null);

(statearr_47147_47288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47143 === (6))){
var state_47142__$1 = state_47142;
var statearr_47148_47289 = state_47142__$1;
(statearr_47148_47289[(2)] = null);

(statearr_47148_47289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47143 === (7))){
var inst_47138 = (state_47142[(2)]);
var state_47142__$1 = state_47142;
var statearr_47149_47290 = state_47142__$1;
(statearr_47149_47290[(2)] = inst_47138);

(statearr_47149_47290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__47271,c__32057__auto___47284,G__47102_47272,G__47102_47273__$1,n__29480__auto___47270,jobs,results,process,async))
;
return ((function (__47271,switch__31943__auto__,c__32057__auto___47284,G__47102_47272,G__47102_47273__$1,n__29480__auto___47270,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0 = (function (){
var statearr_47153 = [null,null,null,null,null,null,null];
(statearr_47153[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__);

(statearr_47153[(1)] = (1));

return statearr_47153;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1 = (function (state_47142){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_47142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e47154){if((e47154 instanceof Object)){
var ex__31947__auto__ = e47154;
var statearr_47155_47291 = state_47142;
(statearr_47155_47291[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47292 = state_47142;
state_47142 = G__47292;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__ = function(state_47142){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1.call(this,state_47142);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__;
})()
;})(__47271,switch__31943__auto__,c__32057__auto___47284,G__47102_47272,G__47102_47273__$1,n__29480__auto___47270,jobs,results,process,async))
})();
var state__32059__auto__ = (function (){var statearr_47156 = f__32058__auto__.call(null);
(statearr_47156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto___47284);

return statearr_47156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(__47271,c__32057__auto___47284,G__47102_47272,G__47102_47273__$1,n__29480__auto___47270,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47102_47273__$1)].join('')));

}

var G__47293 = (__47271 + (1));
__47271 = G__47293;
continue;
} else {
}
break;
}

var c__32057__auto___47294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto___47294,jobs,results,process,async){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto___47294,jobs,results,process,async){
return (function (state_47178){
var state_val_47179 = (state_47178[(1)]);
if((state_val_47179 === (1))){
var state_47178__$1 = state_47178;
var statearr_47180_47295 = state_47178__$1;
(statearr_47180_47295[(2)] = null);

(statearr_47180_47295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47179 === (2))){
var state_47178__$1 = state_47178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47178__$1,(4),from);
} else {
if((state_val_47179 === (3))){
var inst_47176 = (state_47178[(2)]);
var state_47178__$1 = state_47178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47178__$1,inst_47176);
} else {
if((state_val_47179 === (4))){
var inst_47159 = (state_47178[(7)]);
var inst_47159__$1 = (state_47178[(2)]);
var inst_47160 = (inst_47159__$1 == null);
var state_47178__$1 = (function (){var statearr_47181 = state_47178;
(statearr_47181[(7)] = inst_47159__$1);

return statearr_47181;
})();
if(cljs.core.truth_(inst_47160)){
var statearr_47182_47296 = state_47178__$1;
(statearr_47182_47296[(1)] = (5));

} else {
var statearr_47183_47297 = state_47178__$1;
(statearr_47183_47297[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47179 === (5))){
var inst_47162 = cljs.core.async.close_BANG_.call(null,jobs);
var state_47178__$1 = state_47178;
var statearr_47184_47298 = state_47178__$1;
(statearr_47184_47298[(2)] = inst_47162);

(statearr_47184_47298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47179 === (6))){
var inst_47159 = (state_47178[(7)]);
var inst_47164 = (state_47178[(8)]);
var inst_47164__$1 = cljs.core.async.chan.call(null,(1));
var inst_47165 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47166 = [inst_47159,inst_47164__$1];
var inst_47167 = (new cljs.core.PersistentVector(null,2,(5),inst_47165,inst_47166,null));
var state_47178__$1 = (function (){var statearr_47185 = state_47178;
(statearr_47185[(8)] = inst_47164__$1);

return statearr_47185;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47178__$1,(8),jobs,inst_47167);
} else {
if((state_val_47179 === (7))){
var inst_47174 = (state_47178[(2)]);
var state_47178__$1 = state_47178;
var statearr_47186_47299 = state_47178__$1;
(statearr_47186_47299[(2)] = inst_47174);

(statearr_47186_47299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47179 === (8))){
var inst_47164 = (state_47178[(8)]);
var inst_47169 = (state_47178[(2)]);
var state_47178__$1 = (function (){var statearr_47187 = state_47178;
(statearr_47187[(9)] = inst_47169);

return statearr_47187;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47178__$1,(9),results,inst_47164);
} else {
if((state_val_47179 === (9))){
var inst_47171 = (state_47178[(2)]);
var state_47178__$1 = (function (){var statearr_47188 = state_47178;
(statearr_47188[(10)] = inst_47171);

return statearr_47188;
})();
var statearr_47189_47300 = state_47178__$1;
(statearr_47189_47300[(2)] = null);

(statearr_47189_47300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__32057__auto___47294,jobs,results,process,async))
;
return ((function (switch__31943__auto__,c__32057__auto___47294,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0 = (function (){
var statearr_47193 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47193[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__);

(statearr_47193[(1)] = (1));

return statearr_47193;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1 = (function (state_47178){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_47178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e47194){if((e47194 instanceof Object)){
var ex__31947__auto__ = e47194;
var statearr_47195_47301 = state_47178;
(statearr_47195_47301[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47302 = state_47178;
state_47178 = G__47302;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__ = function(state_47178){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1.call(this,state_47178);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto___47294,jobs,results,process,async))
})();
var state__32059__auto__ = (function (){var statearr_47196 = f__32058__auto__.call(null);
(statearr_47196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto___47294);

return statearr_47196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto___47294,jobs,results,process,async))
);


var c__32057__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto__,jobs,results,process,async){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto__,jobs,results,process,async){
return (function (state_47234){
var state_val_47235 = (state_47234[(1)]);
if((state_val_47235 === (7))){
var inst_47230 = (state_47234[(2)]);
var state_47234__$1 = state_47234;
var statearr_47236_47303 = state_47234__$1;
(statearr_47236_47303[(2)] = inst_47230);

(statearr_47236_47303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47235 === (20))){
var state_47234__$1 = state_47234;
var statearr_47237_47304 = state_47234__$1;
(statearr_47237_47304[(2)] = null);

(statearr_47237_47304[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47235 === (1))){
var state_47234__$1 = state_47234;
var statearr_47238_47305 = state_47234__$1;
(statearr_47238_47305[(2)] = null);

(statearr_47238_47305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47235 === (4))){
var inst_47199 = (state_47234[(7)]);
var inst_47199__$1 = (state_47234[(2)]);
var inst_47200 = (inst_47199__$1 == null);
var state_47234__$1 = (function (){var statearr_47239 = state_47234;
(statearr_47239[(7)] = inst_47199__$1);

return statearr_47239;
})();
if(cljs.core.truth_(inst_47200)){
var statearr_47240_47306 = state_47234__$1;
(statearr_47240_47306[(1)] = (5));

} else {
var statearr_47241_47307 = state_47234__$1;
(statearr_47241_47307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47235 === (15))){
var inst_47212 = (state_47234[(8)]);
var state_47234__$1 = state_47234;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47234__$1,(18),to,inst_47212);
} else {
if((state_val_47235 === (21))){
var inst_47225 = (state_47234[(2)]);
var state_47234__$1 = state_47234;
var statearr_47242_47308 = state_47234__$1;
(statearr_47242_47308[(2)] = inst_47225);

(statearr_47242_47308[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47235 === (13))){
var inst_47227 = (state_47234[(2)]);
var state_47234__$1 = (function (){var statearr_47243 = state_47234;
(statearr_47243[(9)] = inst_47227);

return statearr_47243;
})();
var statearr_47244_47309 = state_47234__$1;
(statearr_47244_47309[(2)] = null);

(statearr_47244_47309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47235 === (6))){
var inst_47199 = (state_47234[(7)]);
var state_47234__$1 = state_47234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47234__$1,(11),inst_47199);
} else {
if((state_val_47235 === (17))){
var inst_47220 = (state_47234[(2)]);
var state_47234__$1 = state_47234;
if(cljs.core.truth_(inst_47220)){
var statearr_47245_47310 = state_47234__$1;
(statearr_47245_47310[(1)] = (19));

} else {
var statearr_47246_47311 = state_47234__$1;
(statearr_47246_47311[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47235 === (3))){
var inst_47232 = (state_47234[(2)]);
var state_47234__$1 = state_47234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47234__$1,inst_47232);
} else {
if((state_val_47235 === (12))){
var inst_47209 = (state_47234[(10)]);
var state_47234__$1 = state_47234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47234__$1,(14),inst_47209);
} else {
if((state_val_47235 === (2))){
var state_47234__$1 = state_47234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47234__$1,(4),results);
} else {
if((state_val_47235 === (19))){
var state_47234__$1 = state_47234;
var statearr_47247_47312 = state_47234__$1;
(statearr_47247_47312[(2)] = null);

(statearr_47247_47312[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47235 === (11))){
var inst_47209 = (state_47234[(2)]);
var state_47234__$1 = (function (){var statearr_47248 = state_47234;
(statearr_47248[(10)] = inst_47209);

return statearr_47248;
})();
var statearr_47249_47313 = state_47234__$1;
(statearr_47249_47313[(2)] = null);

(statearr_47249_47313[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47235 === (9))){
var state_47234__$1 = state_47234;
var statearr_47250_47314 = state_47234__$1;
(statearr_47250_47314[(2)] = null);

(statearr_47250_47314[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47235 === (5))){
var state_47234__$1 = state_47234;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47251_47315 = state_47234__$1;
(statearr_47251_47315[(1)] = (8));

} else {
var statearr_47252_47316 = state_47234__$1;
(statearr_47252_47316[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47235 === (14))){
var inst_47212 = (state_47234[(8)]);
var inst_47214 = (state_47234[(11)]);
var inst_47212__$1 = (state_47234[(2)]);
var inst_47213 = (inst_47212__$1 == null);
var inst_47214__$1 = cljs.core.not.call(null,inst_47213);
var state_47234__$1 = (function (){var statearr_47253 = state_47234;
(statearr_47253[(8)] = inst_47212__$1);

(statearr_47253[(11)] = inst_47214__$1);

return statearr_47253;
})();
if(inst_47214__$1){
var statearr_47254_47317 = state_47234__$1;
(statearr_47254_47317[(1)] = (15));

} else {
var statearr_47255_47318 = state_47234__$1;
(statearr_47255_47318[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47235 === (16))){
var inst_47214 = (state_47234[(11)]);
var state_47234__$1 = state_47234;
var statearr_47256_47319 = state_47234__$1;
(statearr_47256_47319[(2)] = inst_47214);

(statearr_47256_47319[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47235 === (10))){
var inst_47206 = (state_47234[(2)]);
var state_47234__$1 = state_47234;
var statearr_47257_47320 = state_47234__$1;
(statearr_47257_47320[(2)] = inst_47206);

(statearr_47257_47320[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47235 === (18))){
var inst_47217 = (state_47234[(2)]);
var state_47234__$1 = state_47234;
var statearr_47258_47321 = state_47234__$1;
(statearr_47258_47321[(2)] = inst_47217);

(statearr_47258_47321[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47235 === (8))){
var inst_47203 = cljs.core.async.close_BANG_.call(null,to);
var state_47234__$1 = state_47234;
var statearr_47259_47322 = state_47234__$1;
(statearr_47259_47322[(2)] = inst_47203);

(statearr_47259_47322[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32057__auto__,jobs,results,process,async))
;
return ((function (switch__31943__auto__,c__32057__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0 = (function (){
var statearr_47263 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47263[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__);

(statearr_47263[(1)] = (1));

return statearr_47263;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1 = (function (state_47234){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_47234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e47264){if((e47264 instanceof Object)){
var ex__31947__auto__ = e47264;
var statearr_47265_47323 = state_47234;
(statearr_47265_47323[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47324 = state_47234;
state_47234 = G__47324;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__ = function(state_47234){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1.call(this,state_47234);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto__,jobs,results,process,async))
})();
var state__32059__auto__ = (function (){var statearr_47266 = f__32058__auto__.call(null);
(statearr_47266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto__);

return statearr_47266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto__,jobs,results,process,async))
);

return c__32057__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args47325 = [];
var len__29680__auto___47328 = arguments.length;
var i__29681__auto___47329 = (0);
while(true){
if((i__29681__auto___47329 < len__29680__auto___47328)){
args47325.push((arguments[i__29681__auto___47329]));

var G__47330 = (i__29681__auto___47329 + (1));
i__29681__auto___47329 = G__47330;
continue;
} else {
}
break;
}

var G__47327 = args47325.length;
switch (G__47327) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47325.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args47332 = [];
var len__29680__auto___47335 = arguments.length;
var i__29681__auto___47336 = (0);
while(true){
if((i__29681__auto___47336 < len__29680__auto___47335)){
args47332.push((arguments[i__29681__auto___47336]));

var G__47337 = (i__29681__auto___47336 + (1));
i__29681__auto___47336 = G__47337;
continue;
} else {
}
break;
}

var G__47334 = args47332.length;
switch (G__47334) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47332.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args47339 = [];
var len__29680__auto___47392 = arguments.length;
var i__29681__auto___47393 = (0);
while(true){
if((i__29681__auto___47393 < len__29680__auto___47392)){
args47339.push((arguments[i__29681__auto___47393]));

var G__47394 = (i__29681__auto___47393 + (1));
i__29681__auto___47393 = G__47394;
continue;
} else {
}
break;
}

var G__47341 = args47339.length;
switch (G__47341) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47339.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__32057__auto___47396 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto___47396,tc,fc){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto___47396,tc,fc){
return (function (state_47367){
var state_val_47368 = (state_47367[(1)]);
if((state_val_47368 === (7))){
var inst_47363 = (state_47367[(2)]);
var state_47367__$1 = state_47367;
var statearr_47369_47397 = state_47367__$1;
(statearr_47369_47397[(2)] = inst_47363);

(statearr_47369_47397[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47368 === (1))){
var state_47367__$1 = state_47367;
var statearr_47370_47398 = state_47367__$1;
(statearr_47370_47398[(2)] = null);

(statearr_47370_47398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47368 === (4))){
var inst_47344 = (state_47367[(7)]);
var inst_47344__$1 = (state_47367[(2)]);
var inst_47345 = (inst_47344__$1 == null);
var state_47367__$1 = (function (){var statearr_47371 = state_47367;
(statearr_47371[(7)] = inst_47344__$1);

return statearr_47371;
})();
if(cljs.core.truth_(inst_47345)){
var statearr_47372_47399 = state_47367__$1;
(statearr_47372_47399[(1)] = (5));

} else {
var statearr_47373_47400 = state_47367__$1;
(statearr_47373_47400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47368 === (13))){
var state_47367__$1 = state_47367;
var statearr_47374_47401 = state_47367__$1;
(statearr_47374_47401[(2)] = null);

(statearr_47374_47401[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47368 === (6))){
var inst_47344 = (state_47367[(7)]);
var inst_47350 = p.call(null,inst_47344);
var state_47367__$1 = state_47367;
if(cljs.core.truth_(inst_47350)){
var statearr_47375_47402 = state_47367__$1;
(statearr_47375_47402[(1)] = (9));

} else {
var statearr_47376_47403 = state_47367__$1;
(statearr_47376_47403[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47368 === (3))){
var inst_47365 = (state_47367[(2)]);
var state_47367__$1 = state_47367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47367__$1,inst_47365);
} else {
if((state_val_47368 === (12))){
var state_47367__$1 = state_47367;
var statearr_47377_47404 = state_47367__$1;
(statearr_47377_47404[(2)] = null);

(statearr_47377_47404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47368 === (2))){
var state_47367__$1 = state_47367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47367__$1,(4),ch);
} else {
if((state_val_47368 === (11))){
var inst_47344 = (state_47367[(7)]);
var inst_47354 = (state_47367[(2)]);
var state_47367__$1 = state_47367;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47367__$1,(8),inst_47354,inst_47344);
} else {
if((state_val_47368 === (9))){
var state_47367__$1 = state_47367;
var statearr_47378_47405 = state_47367__$1;
(statearr_47378_47405[(2)] = tc);

(statearr_47378_47405[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47368 === (5))){
var inst_47347 = cljs.core.async.close_BANG_.call(null,tc);
var inst_47348 = cljs.core.async.close_BANG_.call(null,fc);
var state_47367__$1 = (function (){var statearr_47379 = state_47367;
(statearr_47379[(8)] = inst_47347);

return statearr_47379;
})();
var statearr_47380_47406 = state_47367__$1;
(statearr_47380_47406[(2)] = inst_47348);

(statearr_47380_47406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47368 === (14))){
var inst_47361 = (state_47367[(2)]);
var state_47367__$1 = state_47367;
var statearr_47381_47407 = state_47367__$1;
(statearr_47381_47407[(2)] = inst_47361);

(statearr_47381_47407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47368 === (10))){
var state_47367__$1 = state_47367;
var statearr_47382_47408 = state_47367__$1;
(statearr_47382_47408[(2)] = fc);

(statearr_47382_47408[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47368 === (8))){
var inst_47356 = (state_47367[(2)]);
var state_47367__$1 = state_47367;
if(cljs.core.truth_(inst_47356)){
var statearr_47383_47409 = state_47367__$1;
(statearr_47383_47409[(1)] = (12));

} else {
var statearr_47384_47410 = state_47367__$1;
(statearr_47384_47410[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32057__auto___47396,tc,fc))
;
return ((function (switch__31943__auto__,c__32057__auto___47396,tc,fc){
return (function() {
var cljs$core$async$state_machine__31944__auto__ = null;
var cljs$core$async$state_machine__31944__auto____0 = (function (){
var statearr_47388 = [null,null,null,null,null,null,null,null,null];
(statearr_47388[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_47388[(1)] = (1));

return statearr_47388;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_47367){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_47367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e47389){if((e47389 instanceof Object)){
var ex__31947__auto__ = e47389;
var statearr_47390_47411 = state_47367;
(statearr_47390_47411[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47412 = state_47367;
state_47367 = G__47412;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_47367){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_47367);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto___47396,tc,fc))
})();
var state__32059__auto__ = (function (){var statearr_47391 = f__32058__auto__.call(null);
(statearr_47391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto___47396);

return statearr_47391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto___47396,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32057__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto__){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto__){
return (function (state_47476){
var state_val_47477 = (state_47476[(1)]);
if((state_val_47477 === (7))){
var inst_47472 = (state_47476[(2)]);
var state_47476__$1 = state_47476;
var statearr_47478_47499 = state_47476__$1;
(statearr_47478_47499[(2)] = inst_47472);

(statearr_47478_47499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47477 === (1))){
var inst_47456 = init;
var state_47476__$1 = (function (){var statearr_47479 = state_47476;
(statearr_47479[(7)] = inst_47456);

return statearr_47479;
})();
var statearr_47480_47500 = state_47476__$1;
(statearr_47480_47500[(2)] = null);

(statearr_47480_47500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47477 === (4))){
var inst_47459 = (state_47476[(8)]);
var inst_47459__$1 = (state_47476[(2)]);
var inst_47460 = (inst_47459__$1 == null);
var state_47476__$1 = (function (){var statearr_47481 = state_47476;
(statearr_47481[(8)] = inst_47459__$1);

return statearr_47481;
})();
if(cljs.core.truth_(inst_47460)){
var statearr_47482_47501 = state_47476__$1;
(statearr_47482_47501[(1)] = (5));

} else {
var statearr_47483_47502 = state_47476__$1;
(statearr_47483_47502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47477 === (6))){
var inst_47456 = (state_47476[(7)]);
var inst_47459 = (state_47476[(8)]);
var inst_47463 = (state_47476[(9)]);
var inst_47463__$1 = f.call(null,inst_47456,inst_47459);
var inst_47464 = cljs.core.reduced_QMARK_.call(null,inst_47463__$1);
var state_47476__$1 = (function (){var statearr_47484 = state_47476;
(statearr_47484[(9)] = inst_47463__$1);

return statearr_47484;
})();
if(inst_47464){
var statearr_47485_47503 = state_47476__$1;
(statearr_47485_47503[(1)] = (8));

} else {
var statearr_47486_47504 = state_47476__$1;
(statearr_47486_47504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47477 === (3))){
var inst_47474 = (state_47476[(2)]);
var state_47476__$1 = state_47476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47476__$1,inst_47474);
} else {
if((state_val_47477 === (2))){
var state_47476__$1 = state_47476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47476__$1,(4),ch);
} else {
if((state_val_47477 === (9))){
var inst_47463 = (state_47476[(9)]);
var inst_47456 = inst_47463;
var state_47476__$1 = (function (){var statearr_47487 = state_47476;
(statearr_47487[(7)] = inst_47456);

return statearr_47487;
})();
var statearr_47488_47505 = state_47476__$1;
(statearr_47488_47505[(2)] = null);

(statearr_47488_47505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47477 === (5))){
var inst_47456 = (state_47476[(7)]);
var state_47476__$1 = state_47476;
var statearr_47489_47506 = state_47476__$1;
(statearr_47489_47506[(2)] = inst_47456);

(statearr_47489_47506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47477 === (10))){
var inst_47470 = (state_47476[(2)]);
var state_47476__$1 = state_47476;
var statearr_47490_47507 = state_47476__$1;
(statearr_47490_47507[(2)] = inst_47470);

(statearr_47490_47507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47477 === (8))){
var inst_47463 = (state_47476[(9)]);
var inst_47466 = cljs.core.deref.call(null,inst_47463);
var state_47476__$1 = state_47476;
var statearr_47491_47508 = state_47476__$1;
(statearr_47491_47508[(2)] = inst_47466);

(statearr_47491_47508[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__32057__auto__))
;
return ((function (switch__31943__auto__,c__32057__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__31944__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31944__auto____0 = (function (){
var statearr_47495 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47495[(0)] = cljs$core$async$reduce_$_state_machine__31944__auto__);

(statearr_47495[(1)] = (1));

return statearr_47495;
});
var cljs$core$async$reduce_$_state_machine__31944__auto____1 = (function (state_47476){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_47476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e47496){if((e47496 instanceof Object)){
var ex__31947__auto__ = e47496;
var statearr_47497_47509 = state_47476;
(statearr_47497_47509[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47510 = state_47476;
state_47476 = G__47510;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31944__auto__ = function(state_47476){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31944__auto____1.call(this,state_47476);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31944__auto____0;
cljs$core$async$reduce_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31944__auto____1;
return cljs$core$async$reduce_$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto__))
})();
var state__32059__auto__ = (function (){var statearr_47498 = f__32058__auto__.call(null);
(statearr_47498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto__);

return statearr_47498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto__))
);

return c__32057__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__32057__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto__,f__$1){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto__,f__$1){
return (function (state_47530){
var state_val_47531 = (state_47530[(1)]);
if((state_val_47531 === (1))){
var inst_47525 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_47530__$1 = state_47530;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47530__$1,(2),inst_47525);
} else {
if((state_val_47531 === (2))){
var inst_47527 = (state_47530[(2)]);
var inst_47528 = f__$1.call(null,inst_47527);
var state_47530__$1 = state_47530;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47530__$1,inst_47528);
} else {
return null;
}
}
});})(c__32057__auto__,f__$1))
;
return ((function (switch__31943__auto__,c__32057__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__31944__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31944__auto____0 = (function (){
var statearr_47535 = [null,null,null,null,null,null,null];
(statearr_47535[(0)] = cljs$core$async$transduce_$_state_machine__31944__auto__);

(statearr_47535[(1)] = (1));

return statearr_47535;
});
var cljs$core$async$transduce_$_state_machine__31944__auto____1 = (function (state_47530){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_47530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e47536){if((e47536 instanceof Object)){
var ex__31947__auto__ = e47536;
var statearr_47537_47539 = state_47530;
(statearr_47537_47539[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47540 = state_47530;
state_47530 = G__47540;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31944__auto__ = function(state_47530){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31944__auto____1.call(this,state_47530);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31944__auto____0;
cljs$core$async$transduce_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31944__auto____1;
return cljs$core$async$transduce_$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto__,f__$1))
})();
var state__32059__auto__ = (function (){var statearr_47538 = f__32058__auto__.call(null);
(statearr_47538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto__);

return statearr_47538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto__,f__$1))
);

return c__32057__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args47541 = [];
var len__29680__auto___47593 = arguments.length;
var i__29681__auto___47594 = (0);
while(true){
if((i__29681__auto___47594 < len__29680__auto___47593)){
args47541.push((arguments[i__29681__auto___47594]));

var G__47595 = (i__29681__auto___47594 + (1));
i__29681__auto___47594 = G__47595;
continue;
} else {
}
break;
}

var G__47543 = args47541.length;
switch (G__47543) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47541.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32057__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto__){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto__){
return (function (state_47568){
var state_val_47569 = (state_47568[(1)]);
if((state_val_47569 === (7))){
var inst_47550 = (state_47568[(2)]);
var state_47568__$1 = state_47568;
var statearr_47570_47597 = state_47568__$1;
(statearr_47570_47597[(2)] = inst_47550);

(statearr_47570_47597[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47569 === (1))){
var inst_47544 = cljs.core.seq.call(null,coll);
var inst_47545 = inst_47544;
var state_47568__$1 = (function (){var statearr_47571 = state_47568;
(statearr_47571[(7)] = inst_47545);

return statearr_47571;
})();
var statearr_47572_47598 = state_47568__$1;
(statearr_47572_47598[(2)] = null);

(statearr_47572_47598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47569 === (4))){
var inst_47545 = (state_47568[(7)]);
var inst_47548 = cljs.core.first.call(null,inst_47545);
var state_47568__$1 = state_47568;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47568__$1,(7),ch,inst_47548);
} else {
if((state_val_47569 === (13))){
var inst_47562 = (state_47568[(2)]);
var state_47568__$1 = state_47568;
var statearr_47573_47599 = state_47568__$1;
(statearr_47573_47599[(2)] = inst_47562);

(statearr_47573_47599[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47569 === (6))){
var inst_47553 = (state_47568[(2)]);
var state_47568__$1 = state_47568;
if(cljs.core.truth_(inst_47553)){
var statearr_47574_47600 = state_47568__$1;
(statearr_47574_47600[(1)] = (8));

} else {
var statearr_47575_47601 = state_47568__$1;
(statearr_47575_47601[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47569 === (3))){
var inst_47566 = (state_47568[(2)]);
var state_47568__$1 = state_47568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47568__$1,inst_47566);
} else {
if((state_val_47569 === (12))){
var state_47568__$1 = state_47568;
var statearr_47576_47602 = state_47568__$1;
(statearr_47576_47602[(2)] = null);

(statearr_47576_47602[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47569 === (2))){
var inst_47545 = (state_47568[(7)]);
var state_47568__$1 = state_47568;
if(cljs.core.truth_(inst_47545)){
var statearr_47577_47603 = state_47568__$1;
(statearr_47577_47603[(1)] = (4));

} else {
var statearr_47578_47604 = state_47568__$1;
(statearr_47578_47604[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47569 === (11))){
var inst_47559 = cljs.core.async.close_BANG_.call(null,ch);
var state_47568__$1 = state_47568;
var statearr_47579_47605 = state_47568__$1;
(statearr_47579_47605[(2)] = inst_47559);

(statearr_47579_47605[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47569 === (9))){
var state_47568__$1 = state_47568;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47580_47606 = state_47568__$1;
(statearr_47580_47606[(1)] = (11));

} else {
var statearr_47581_47607 = state_47568__$1;
(statearr_47581_47607[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47569 === (5))){
var inst_47545 = (state_47568[(7)]);
var state_47568__$1 = state_47568;
var statearr_47582_47608 = state_47568__$1;
(statearr_47582_47608[(2)] = inst_47545);

(statearr_47582_47608[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47569 === (10))){
var inst_47564 = (state_47568[(2)]);
var state_47568__$1 = state_47568;
var statearr_47583_47609 = state_47568__$1;
(statearr_47583_47609[(2)] = inst_47564);

(statearr_47583_47609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47569 === (8))){
var inst_47545 = (state_47568[(7)]);
var inst_47555 = cljs.core.next.call(null,inst_47545);
var inst_47545__$1 = inst_47555;
var state_47568__$1 = (function (){var statearr_47584 = state_47568;
(statearr_47584[(7)] = inst_47545__$1);

return statearr_47584;
})();
var statearr_47585_47610 = state_47568__$1;
(statearr_47585_47610[(2)] = null);

(statearr_47585_47610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32057__auto__))
;
return ((function (switch__31943__auto__,c__32057__auto__){
return (function() {
var cljs$core$async$state_machine__31944__auto__ = null;
var cljs$core$async$state_machine__31944__auto____0 = (function (){
var statearr_47589 = [null,null,null,null,null,null,null,null];
(statearr_47589[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_47589[(1)] = (1));

return statearr_47589;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_47568){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_47568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e47590){if((e47590 instanceof Object)){
var ex__31947__auto__ = e47590;
var statearr_47591_47611 = state_47568;
(statearr_47591_47611[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47612 = state_47568;
state_47568 = G__47612;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_47568){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_47568);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto__))
})();
var state__32059__auto__ = (function (){var statearr_47592 = f__32058__auto__.call(null);
(statearr_47592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto__);

return statearr_47592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto__))
);

return c__32057__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__29177__auto__ = (((_ == null))?null:_);
var m__29178__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__29177__auto__)]);
if(!((m__29178__auto__ == null))){
return m__29178__auto__.call(null,_);
} else {
var m__29178__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__29178__auto____$1 == null))){
return m__29178__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__29177__auto__ = (((m == null))?null:m);
var m__29178__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__29177__auto__)]);
if(!((m__29178__auto__ == null))){
return m__29178__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__29178__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__29178__auto____$1 == null))){
return m__29178__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__29177__auto__ = (((m == null))?null:m);
var m__29178__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__29177__auto__)]);
if(!((m__29178__auto__ == null))){
return m__29178__auto__.call(null,m,ch);
} else {
var m__29178__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__29178__auto____$1 == null))){
return m__29178__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__29177__auto__ = (((m == null))?null:m);
var m__29178__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__29177__auto__)]);
if(!((m__29178__auto__ == null))){
return m__29178__auto__.call(null,m);
} else {
var m__29178__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__29178__auto____$1 == null))){
return m__29178__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async47838 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47838 = (function (ch,cs,meta47839){
this.ch = ch;
this.cs = cs;
this.meta47839 = meta47839;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async47838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_47840,meta47839__$1){
var self__ = this;
var _47840__$1 = this;
return (new cljs.core.async.t_cljs$core$async47838(self__.ch,self__.cs,meta47839__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async47838.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_47840){
var self__ = this;
var _47840__$1 = this;
return self__.meta47839;
});})(cs))
;

cljs.core.async.t_cljs$core$async47838.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47838.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async47838.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async47838.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47838.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47838.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async47838.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta47839","meta47839",-1589340236,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async47838.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async47838.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47838";

cljs.core.async.t_cljs$core$async47838.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__29116__auto__,writer__29117__auto__,opt__29118__auto__){
return cljs.core._write.call(null,writer__29117__auto__,"cljs.core.async/t_cljs$core$async47838");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async47838 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async47838(ch__$1,cs__$1,meta47839){
return (new cljs.core.async.t_cljs$core$async47838(ch__$1,cs__$1,meta47839));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async47838(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__32057__auto___48063 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto___48063,cs,m,dchan,dctr,done){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto___48063,cs,m,dchan,dctr,done){
return (function (state_47975){
var state_val_47976 = (state_47975[(1)]);
if((state_val_47976 === (7))){
var inst_47971 = (state_47975[(2)]);
var state_47975__$1 = state_47975;
var statearr_47977_48064 = state_47975__$1;
(statearr_47977_48064[(2)] = inst_47971);

(statearr_47977_48064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (20))){
var inst_47874 = (state_47975[(7)]);
var inst_47886 = cljs.core.first.call(null,inst_47874);
var inst_47887 = cljs.core.nth.call(null,inst_47886,(0),null);
var inst_47888 = cljs.core.nth.call(null,inst_47886,(1),null);
var state_47975__$1 = (function (){var statearr_47978 = state_47975;
(statearr_47978[(8)] = inst_47887);

return statearr_47978;
})();
if(cljs.core.truth_(inst_47888)){
var statearr_47979_48065 = state_47975__$1;
(statearr_47979_48065[(1)] = (22));

} else {
var statearr_47980_48066 = state_47975__$1;
(statearr_47980_48066[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (27))){
var inst_47843 = (state_47975[(9)]);
var inst_47923 = (state_47975[(10)]);
var inst_47918 = (state_47975[(11)]);
var inst_47916 = (state_47975[(12)]);
var inst_47923__$1 = cljs.core._nth.call(null,inst_47916,inst_47918);
var inst_47924 = cljs.core.async.put_BANG_.call(null,inst_47923__$1,inst_47843,done);
var state_47975__$1 = (function (){var statearr_47981 = state_47975;
(statearr_47981[(10)] = inst_47923__$1);

return statearr_47981;
})();
if(cljs.core.truth_(inst_47924)){
var statearr_47982_48067 = state_47975__$1;
(statearr_47982_48067[(1)] = (30));

} else {
var statearr_47983_48068 = state_47975__$1;
(statearr_47983_48068[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (1))){
var state_47975__$1 = state_47975;
var statearr_47984_48069 = state_47975__$1;
(statearr_47984_48069[(2)] = null);

(statearr_47984_48069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (24))){
var inst_47874 = (state_47975[(7)]);
var inst_47893 = (state_47975[(2)]);
var inst_47894 = cljs.core.next.call(null,inst_47874);
var inst_47852 = inst_47894;
var inst_47853 = null;
var inst_47854 = (0);
var inst_47855 = (0);
var state_47975__$1 = (function (){var statearr_47985 = state_47975;
(statearr_47985[(13)] = inst_47855);

(statearr_47985[(14)] = inst_47852);

(statearr_47985[(15)] = inst_47853);

(statearr_47985[(16)] = inst_47893);

(statearr_47985[(17)] = inst_47854);

return statearr_47985;
})();
var statearr_47986_48070 = state_47975__$1;
(statearr_47986_48070[(2)] = null);

(statearr_47986_48070[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (39))){
var state_47975__$1 = state_47975;
var statearr_47990_48071 = state_47975__$1;
(statearr_47990_48071[(2)] = null);

(statearr_47990_48071[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (4))){
var inst_47843 = (state_47975[(9)]);
var inst_47843__$1 = (state_47975[(2)]);
var inst_47844 = (inst_47843__$1 == null);
var state_47975__$1 = (function (){var statearr_47991 = state_47975;
(statearr_47991[(9)] = inst_47843__$1);

return statearr_47991;
})();
if(cljs.core.truth_(inst_47844)){
var statearr_47992_48072 = state_47975__$1;
(statearr_47992_48072[(1)] = (5));

} else {
var statearr_47993_48073 = state_47975__$1;
(statearr_47993_48073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (15))){
var inst_47855 = (state_47975[(13)]);
var inst_47852 = (state_47975[(14)]);
var inst_47853 = (state_47975[(15)]);
var inst_47854 = (state_47975[(17)]);
var inst_47870 = (state_47975[(2)]);
var inst_47871 = (inst_47855 + (1));
var tmp47987 = inst_47852;
var tmp47988 = inst_47853;
var tmp47989 = inst_47854;
var inst_47852__$1 = tmp47987;
var inst_47853__$1 = tmp47988;
var inst_47854__$1 = tmp47989;
var inst_47855__$1 = inst_47871;
var state_47975__$1 = (function (){var statearr_47994 = state_47975;
(statearr_47994[(18)] = inst_47870);

(statearr_47994[(13)] = inst_47855__$1);

(statearr_47994[(14)] = inst_47852__$1);

(statearr_47994[(15)] = inst_47853__$1);

(statearr_47994[(17)] = inst_47854__$1);

return statearr_47994;
})();
var statearr_47995_48074 = state_47975__$1;
(statearr_47995_48074[(2)] = null);

(statearr_47995_48074[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (21))){
var inst_47897 = (state_47975[(2)]);
var state_47975__$1 = state_47975;
var statearr_47999_48075 = state_47975__$1;
(statearr_47999_48075[(2)] = inst_47897);

(statearr_47999_48075[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (31))){
var inst_47923 = (state_47975[(10)]);
var inst_47927 = done.call(null,null);
var inst_47928 = cljs.core.async.untap_STAR_.call(null,m,inst_47923);
var state_47975__$1 = (function (){var statearr_48000 = state_47975;
(statearr_48000[(19)] = inst_47927);

return statearr_48000;
})();
var statearr_48001_48076 = state_47975__$1;
(statearr_48001_48076[(2)] = inst_47928);

(statearr_48001_48076[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (32))){
var inst_47917 = (state_47975[(20)]);
var inst_47915 = (state_47975[(21)]);
var inst_47918 = (state_47975[(11)]);
var inst_47916 = (state_47975[(12)]);
var inst_47930 = (state_47975[(2)]);
var inst_47931 = (inst_47918 + (1));
var tmp47996 = inst_47917;
var tmp47997 = inst_47915;
var tmp47998 = inst_47916;
var inst_47915__$1 = tmp47997;
var inst_47916__$1 = tmp47998;
var inst_47917__$1 = tmp47996;
var inst_47918__$1 = inst_47931;
var state_47975__$1 = (function (){var statearr_48002 = state_47975;
(statearr_48002[(20)] = inst_47917__$1);

(statearr_48002[(22)] = inst_47930);

(statearr_48002[(21)] = inst_47915__$1);

(statearr_48002[(11)] = inst_47918__$1);

(statearr_48002[(12)] = inst_47916__$1);

return statearr_48002;
})();
var statearr_48003_48077 = state_47975__$1;
(statearr_48003_48077[(2)] = null);

(statearr_48003_48077[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (40))){
var inst_47943 = (state_47975[(23)]);
var inst_47947 = done.call(null,null);
var inst_47948 = cljs.core.async.untap_STAR_.call(null,m,inst_47943);
var state_47975__$1 = (function (){var statearr_48004 = state_47975;
(statearr_48004[(24)] = inst_47947);

return statearr_48004;
})();
var statearr_48005_48078 = state_47975__$1;
(statearr_48005_48078[(2)] = inst_47948);

(statearr_48005_48078[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (33))){
var inst_47934 = (state_47975[(25)]);
var inst_47936 = cljs.core.chunked_seq_QMARK_.call(null,inst_47934);
var state_47975__$1 = state_47975;
if(inst_47936){
var statearr_48006_48079 = state_47975__$1;
(statearr_48006_48079[(1)] = (36));

} else {
var statearr_48007_48080 = state_47975__$1;
(statearr_48007_48080[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (13))){
var inst_47864 = (state_47975[(26)]);
var inst_47867 = cljs.core.async.close_BANG_.call(null,inst_47864);
var state_47975__$1 = state_47975;
var statearr_48008_48081 = state_47975__$1;
(statearr_48008_48081[(2)] = inst_47867);

(statearr_48008_48081[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (22))){
var inst_47887 = (state_47975[(8)]);
var inst_47890 = cljs.core.async.close_BANG_.call(null,inst_47887);
var state_47975__$1 = state_47975;
var statearr_48009_48082 = state_47975__$1;
(statearr_48009_48082[(2)] = inst_47890);

(statearr_48009_48082[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (36))){
var inst_47934 = (state_47975[(25)]);
var inst_47938 = cljs.core.chunk_first.call(null,inst_47934);
var inst_47939 = cljs.core.chunk_rest.call(null,inst_47934);
var inst_47940 = cljs.core.count.call(null,inst_47938);
var inst_47915 = inst_47939;
var inst_47916 = inst_47938;
var inst_47917 = inst_47940;
var inst_47918 = (0);
var state_47975__$1 = (function (){var statearr_48010 = state_47975;
(statearr_48010[(20)] = inst_47917);

(statearr_48010[(21)] = inst_47915);

(statearr_48010[(11)] = inst_47918);

(statearr_48010[(12)] = inst_47916);

return statearr_48010;
})();
var statearr_48011_48083 = state_47975__$1;
(statearr_48011_48083[(2)] = null);

(statearr_48011_48083[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (41))){
var inst_47934 = (state_47975[(25)]);
var inst_47950 = (state_47975[(2)]);
var inst_47951 = cljs.core.next.call(null,inst_47934);
var inst_47915 = inst_47951;
var inst_47916 = null;
var inst_47917 = (0);
var inst_47918 = (0);
var state_47975__$1 = (function (){var statearr_48012 = state_47975;
(statearr_48012[(27)] = inst_47950);

(statearr_48012[(20)] = inst_47917);

(statearr_48012[(21)] = inst_47915);

(statearr_48012[(11)] = inst_47918);

(statearr_48012[(12)] = inst_47916);

return statearr_48012;
})();
var statearr_48013_48084 = state_47975__$1;
(statearr_48013_48084[(2)] = null);

(statearr_48013_48084[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (43))){
var state_47975__$1 = state_47975;
var statearr_48014_48085 = state_47975__$1;
(statearr_48014_48085[(2)] = null);

(statearr_48014_48085[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (29))){
var inst_47959 = (state_47975[(2)]);
var state_47975__$1 = state_47975;
var statearr_48015_48086 = state_47975__$1;
(statearr_48015_48086[(2)] = inst_47959);

(statearr_48015_48086[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (44))){
var inst_47968 = (state_47975[(2)]);
var state_47975__$1 = (function (){var statearr_48016 = state_47975;
(statearr_48016[(28)] = inst_47968);

return statearr_48016;
})();
var statearr_48017_48087 = state_47975__$1;
(statearr_48017_48087[(2)] = null);

(statearr_48017_48087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (6))){
var inst_47907 = (state_47975[(29)]);
var inst_47906 = cljs.core.deref.call(null,cs);
var inst_47907__$1 = cljs.core.keys.call(null,inst_47906);
var inst_47908 = cljs.core.count.call(null,inst_47907__$1);
var inst_47909 = cljs.core.reset_BANG_.call(null,dctr,inst_47908);
var inst_47914 = cljs.core.seq.call(null,inst_47907__$1);
var inst_47915 = inst_47914;
var inst_47916 = null;
var inst_47917 = (0);
var inst_47918 = (0);
var state_47975__$1 = (function (){var statearr_48018 = state_47975;
(statearr_48018[(30)] = inst_47909);

(statearr_48018[(20)] = inst_47917);

(statearr_48018[(29)] = inst_47907__$1);

(statearr_48018[(21)] = inst_47915);

(statearr_48018[(11)] = inst_47918);

(statearr_48018[(12)] = inst_47916);

return statearr_48018;
})();
var statearr_48019_48088 = state_47975__$1;
(statearr_48019_48088[(2)] = null);

(statearr_48019_48088[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (28))){
var inst_47934 = (state_47975[(25)]);
var inst_47915 = (state_47975[(21)]);
var inst_47934__$1 = cljs.core.seq.call(null,inst_47915);
var state_47975__$1 = (function (){var statearr_48020 = state_47975;
(statearr_48020[(25)] = inst_47934__$1);

return statearr_48020;
})();
if(inst_47934__$1){
var statearr_48021_48089 = state_47975__$1;
(statearr_48021_48089[(1)] = (33));

} else {
var statearr_48022_48090 = state_47975__$1;
(statearr_48022_48090[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (25))){
var inst_47917 = (state_47975[(20)]);
var inst_47918 = (state_47975[(11)]);
var inst_47920 = (inst_47918 < inst_47917);
var inst_47921 = inst_47920;
var state_47975__$1 = state_47975;
if(cljs.core.truth_(inst_47921)){
var statearr_48023_48091 = state_47975__$1;
(statearr_48023_48091[(1)] = (27));

} else {
var statearr_48024_48092 = state_47975__$1;
(statearr_48024_48092[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (34))){
var state_47975__$1 = state_47975;
var statearr_48025_48093 = state_47975__$1;
(statearr_48025_48093[(2)] = null);

(statearr_48025_48093[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (17))){
var state_47975__$1 = state_47975;
var statearr_48026_48094 = state_47975__$1;
(statearr_48026_48094[(2)] = null);

(statearr_48026_48094[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (3))){
var inst_47973 = (state_47975[(2)]);
var state_47975__$1 = state_47975;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47975__$1,inst_47973);
} else {
if((state_val_47976 === (12))){
var inst_47902 = (state_47975[(2)]);
var state_47975__$1 = state_47975;
var statearr_48027_48095 = state_47975__$1;
(statearr_48027_48095[(2)] = inst_47902);

(statearr_48027_48095[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (2))){
var state_47975__$1 = state_47975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47975__$1,(4),ch);
} else {
if((state_val_47976 === (23))){
var state_47975__$1 = state_47975;
var statearr_48028_48096 = state_47975__$1;
(statearr_48028_48096[(2)] = null);

(statearr_48028_48096[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (35))){
var inst_47957 = (state_47975[(2)]);
var state_47975__$1 = state_47975;
var statearr_48029_48097 = state_47975__$1;
(statearr_48029_48097[(2)] = inst_47957);

(statearr_48029_48097[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (19))){
var inst_47874 = (state_47975[(7)]);
var inst_47878 = cljs.core.chunk_first.call(null,inst_47874);
var inst_47879 = cljs.core.chunk_rest.call(null,inst_47874);
var inst_47880 = cljs.core.count.call(null,inst_47878);
var inst_47852 = inst_47879;
var inst_47853 = inst_47878;
var inst_47854 = inst_47880;
var inst_47855 = (0);
var state_47975__$1 = (function (){var statearr_48030 = state_47975;
(statearr_48030[(13)] = inst_47855);

(statearr_48030[(14)] = inst_47852);

(statearr_48030[(15)] = inst_47853);

(statearr_48030[(17)] = inst_47854);

return statearr_48030;
})();
var statearr_48031_48098 = state_47975__$1;
(statearr_48031_48098[(2)] = null);

(statearr_48031_48098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (11))){
var inst_47852 = (state_47975[(14)]);
var inst_47874 = (state_47975[(7)]);
var inst_47874__$1 = cljs.core.seq.call(null,inst_47852);
var state_47975__$1 = (function (){var statearr_48032 = state_47975;
(statearr_48032[(7)] = inst_47874__$1);

return statearr_48032;
})();
if(inst_47874__$1){
var statearr_48033_48099 = state_47975__$1;
(statearr_48033_48099[(1)] = (16));

} else {
var statearr_48034_48100 = state_47975__$1;
(statearr_48034_48100[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (9))){
var inst_47904 = (state_47975[(2)]);
var state_47975__$1 = state_47975;
var statearr_48035_48101 = state_47975__$1;
(statearr_48035_48101[(2)] = inst_47904);

(statearr_48035_48101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (5))){
var inst_47850 = cljs.core.deref.call(null,cs);
var inst_47851 = cljs.core.seq.call(null,inst_47850);
var inst_47852 = inst_47851;
var inst_47853 = null;
var inst_47854 = (0);
var inst_47855 = (0);
var state_47975__$1 = (function (){var statearr_48036 = state_47975;
(statearr_48036[(13)] = inst_47855);

(statearr_48036[(14)] = inst_47852);

(statearr_48036[(15)] = inst_47853);

(statearr_48036[(17)] = inst_47854);

return statearr_48036;
})();
var statearr_48037_48102 = state_47975__$1;
(statearr_48037_48102[(2)] = null);

(statearr_48037_48102[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (14))){
var state_47975__$1 = state_47975;
var statearr_48038_48103 = state_47975__$1;
(statearr_48038_48103[(2)] = null);

(statearr_48038_48103[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (45))){
var inst_47965 = (state_47975[(2)]);
var state_47975__$1 = state_47975;
var statearr_48039_48104 = state_47975__$1;
(statearr_48039_48104[(2)] = inst_47965);

(statearr_48039_48104[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (26))){
var inst_47907 = (state_47975[(29)]);
var inst_47961 = (state_47975[(2)]);
var inst_47962 = cljs.core.seq.call(null,inst_47907);
var state_47975__$1 = (function (){var statearr_48040 = state_47975;
(statearr_48040[(31)] = inst_47961);

return statearr_48040;
})();
if(inst_47962){
var statearr_48041_48105 = state_47975__$1;
(statearr_48041_48105[(1)] = (42));

} else {
var statearr_48042_48106 = state_47975__$1;
(statearr_48042_48106[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (16))){
var inst_47874 = (state_47975[(7)]);
var inst_47876 = cljs.core.chunked_seq_QMARK_.call(null,inst_47874);
var state_47975__$1 = state_47975;
if(inst_47876){
var statearr_48043_48107 = state_47975__$1;
(statearr_48043_48107[(1)] = (19));

} else {
var statearr_48044_48108 = state_47975__$1;
(statearr_48044_48108[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (38))){
var inst_47954 = (state_47975[(2)]);
var state_47975__$1 = state_47975;
var statearr_48045_48109 = state_47975__$1;
(statearr_48045_48109[(2)] = inst_47954);

(statearr_48045_48109[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (30))){
var state_47975__$1 = state_47975;
var statearr_48046_48110 = state_47975__$1;
(statearr_48046_48110[(2)] = null);

(statearr_48046_48110[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (10))){
var inst_47855 = (state_47975[(13)]);
var inst_47853 = (state_47975[(15)]);
var inst_47863 = cljs.core._nth.call(null,inst_47853,inst_47855);
var inst_47864 = cljs.core.nth.call(null,inst_47863,(0),null);
var inst_47865 = cljs.core.nth.call(null,inst_47863,(1),null);
var state_47975__$1 = (function (){var statearr_48047 = state_47975;
(statearr_48047[(26)] = inst_47864);

return statearr_48047;
})();
if(cljs.core.truth_(inst_47865)){
var statearr_48048_48111 = state_47975__$1;
(statearr_48048_48111[(1)] = (13));

} else {
var statearr_48049_48112 = state_47975__$1;
(statearr_48049_48112[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (18))){
var inst_47900 = (state_47975[(2)]);
var state_47975__$1 = state_47975;
var statearr_48050_48113 = state_47975__$1;
(statearr_48050_48113[(2)] = inst_47900);

(statearr_48050_48113[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (42))){
var state_47975__$1 = state_47975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47975__$1,(45),dchan);
} else {
if((state_val_47976 === (37))){
var inst_47843 = (state_47975[(9)]);
var inst_47943 = (state_47975[(23)]);
var inst_47934 = (state_47975[(25)]);
var inst_47943__$1 = cljs.core.first.call(null,inst_47934);
var inst_47944 = cljs.core.async.put_BANG_.call(null,inst_47943__$1,inst_47843,done);
var state_47975__$1 = (function (){var statearr_48051 = state_47975;
(statearr_48051[(23)] = inst_47943__$1);

return statearr_48051;
})();
if(cljs.core.truth_(inst_47944)){
var statearr_48052_48114 = state_47975__$1;
(statearr_48052_48114[(1)] = (39));

} else {
var statearr_48053_48115 = state_47975__$1;
(statearr_48053_48115[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47976 === (8))){
var inst_47855 = (state_47975[(13)]);
var inst_47854 = (state_47975[(17)]);
var inst_47857 = (inst_47855 < inst_47854);
var inst_47858 = inst_47857;
var state_47975__$1 = state_47975;
if(cljs.core.truth_(inst_47858)){
var statearr_48054_48116 = state_47975__$1;
(statearr_48054_48116[(1)] = (10));

} else {
var statearr_48055_48117 = state_47975__$1;
(statearr_48055_48117[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32057__auto___48063,cs,m,dchan,dctr,done))
;
return ((function (switch__31943__auto__,c__32057__auto___48063,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31944__auto__ = null;
var cljs$core$async$mult_$_state_machine__31944__auto____0 = (function (){
var statearr_48059 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48059[(0)] = cljs$core$async$mult_$_state_machine__31944__auto__);

(statearr_48059[(1)] = (1));

return statearr_48059;
});
var cljs$core$async$mult_$_state_machine__31944__auto____1 = (function (state_47975){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_47975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e48060){if((e48060 instanceof Object)){
var ex__31947__auto__ = e48060;
var statearr_48061_48118 = state_47975;
(statearr_48061_48118[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48060;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48119 = state_47975;
state_47975 = G__48119;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31944__auto__ = function(state_47975){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31944__auto____1.call(this,state_47975);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31944__auto____0;
cljs$core$async$mult_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31944__auto____1;
return cljs$core$async$mult_$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto___48063,cs,m,dchan,dctr,done))
})();
var state__32059__auto__ = (function (){var statearr_48062 = f__32058__auto__.call(null);
(statearr_48062[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto___48063);

return statearr_48062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto___48063,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args48120 = [];
var len__29680__auto___48123 = arguments.length;
var i__29681__auto___48124 = (0);
while(true){
if((i__29681__auto___48124 < len__29680__auto___48123)){
args48120.push((arguments[i__29681__auto___48124]));

var G__48125 = (i__29681__auto___48124 + (1));
i__29681__auto___48124 = G__48125;
continue;
} else {
}
break;
}

var G__48122 = args48120.length;
switch (G__48122) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48120.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__29177__auto__ = (((m == null))?null:m);
var m__29178__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__29177__auto__)]);
if(!((m__29178__auto__ == null))){
return m__29178__auto__.call(null,m,ch);
} else {
var m__29178__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__29178__auto____$1 == null))){
return m__29178__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__29177__auto__ = (((m == null))?null:m);
var m__29178__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__29177__auto__)]);
if(!((m__29178__auto__ == null))){
return m__29178__auto__.call(null,m,ch);
} else {
var m__29178__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__29178__auto____$1 == null))){
return m__29178__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__29177__auto__ = (((m == null))?null:m);
var m__29178__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__29177__auto__)]);
if(!((m__29178__auto__ == null))){
return m__29178__auto__.call(null,m);
} else {
var m__29178__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__29178__auto____$1 == null))){
return m__29178__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__29177__auto__ = (((m == null))?null:m);
var m__29178__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__29177__auto__)]);
if(!((m__29178__auto__ == null))){
return m__29178__auto__.call(null,m,state_map);
} else {
var m__29178__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__29178__auto____$1 == null))){
return m__29178__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__29177__auto__ = (((m == null))?null:m);
var m__29178__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__29177__auto__)]);
if(!((m__29178__auto__ == null))){
return m__29178__auto__.call(null,m,mode);
} else {
var m__29178__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__29178__auto____$1 == null))){
return m__29178__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___48137 = arguments.length;
var i__29681__auto___48138 = (0);
while(true){
if((i__29681__auto___48138 < len__29680__auto___48137)){
args__29687__auto__.push((arguments[i__29681__auto___48138]));

var G__48139 = (i__29681__auto___48138 + (1));
i__29681__auto___48138 = G__48139;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((3) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29688__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__48131){
var map__48132 = p__48131;
var map__48132__$1 = ((((!((map__48132 == null)))?((((map__48132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48132.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48132):map__48132);
var opts = map__48132__$1;
var statearr_48134_48140 = state;
(statearr_48134_48140[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__5278__auto__ = cljs.core.async.do_alts.call(null,((function (map__48132,map__48132__$1,opts){
return (function (val){
var statearr_48135_48141 = state;
(statearr_48135_48141[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__48132,map__48132__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5278__auto__)){
var cb = temp__5278__auto__;
var statearr_48136_48142 = state;
(statearr_48136_48142[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq48127){
var G__48128 = cljs.core.first.call(null,seq48127);
var seq48127__$1 = cljs.core.next.call(null,seq48127);
var G__48129 = cljs.core.first.call(null,seq48127__$1);
var seq48127__$2 = cljs.core.next.call(null,seq48127__$1);
var G__48130 = cljs.core.first.call(null,seq48127__$2);
var seq48127__$3 = cljs.core.next.call(null,seq48127__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__48128,G__48129,G__48130,seq48127__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async48310 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48310 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta48311){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta48311 = meta48311;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48312,meta48311__$1){
var self__ = this;
var _48312__$1 = this;
return (new cljs.core.async.t_cljs$core$async48310(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta48311__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48310.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48312){
var self__ = this;
var _48312__$1 = this;
return self__.meta48311;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48310.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48310.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48310.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48310.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48310.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48310.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48310.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48310.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48310.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta48311","meta48311",-1505797042,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48310.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48310.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48310";

cljs.core.async.t_cljs$core$async48310.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__29116__auto__,writer__29117__auto__,opt__29118__auto__){
return cljs.core._write.call(null,writer__29117__auto__,"cljs.core.async/t_cljs$core$async48310");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async48310 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async48310(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta48311){
return (new cljs.core.async.t_cljs$core$async48310(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta48311));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async48310(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32057__auto___48477 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto___48477,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto___48477,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_48414){
var state_val_48415 = (state_48414[(1)]);
if((state_val_48415 === (7))){
var inst_48329 = (state_48414[(2)]);
var state_48414__$1 = state_48414;
var statearr_48416_48478 = state_48414__$1;
(statearr_48416_48478[(2)] = inst_48329);

(statearr_48416_48478[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48415 === (20))){
var inst_48341 = (state_48414[(7)]);
var state_48414__$1 = state_48414;
var statearr_48417_48479 = state_48414__$1;
(statearr_48417_48479[(2)] = inst_48341);

(statearr_48417_48479[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48415 === (27))){
var state_48414__$1 = state_48414;
var statearr_48418_48480 = state_48414__$1;
(statearr_48418_48480[(2)] = null);

(statearr_48418_48480[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48415 === (1))){
var inst_48316 = (state_48414[(8)]);
var inst_48316__$1 = calc_state.call(null);
var inst_48318 = (inst_48316__$1 == null);
var inst_48319 = cljs.core.not.call(null,inst_48318);
var state_48414__$1 = (function (){var statearr_48419 = state_48414;
(statearr_48419[(8)] = inst_48316__$1);

return statearr_48419;
})();
if(inst_48319){
var statearr_48420_48481 = state_48414__$1;
(statearr_48420_48481[(1)] = (2));

} else {
var statearr_48421_48482 = state_48414__$1;
(statearr_48421_48482[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48415 === (24))){
var inst_48365 = (state_48414[(9)]);
var inst_48374 = (state_48414[(10)]);
var inst_48388 = (state_48414[(11)]);
var inst_48388__$1 = inst_48365.call(null,inst_48374);
var state_48414__$1 = (function (){var statearr_48422 = state_48414;
(statearr_48422[(11)] = inst_48388__$1);

return statearr_48422;
})();
if(cljs.core.truth_(inst_48388__$1)){
var statearr_48423_48483 = state_48414__$1;
(statearr_48423_48483[(1)] = (29));

} else {
var statearr_48424_48484 = state_48414__$1;
(statearr_48424_48484[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48415 === (4))){
var inst_48332 = (state_48414[(2)]);
var state_48414__$1 = state_48414;
if(cljs.core.truth_(inst_48332)){
var statearr_48425_48485 = state_48414__$1;
(statearr_48425_48485[(1)] = (8));

} else {
var statearr_48426_48486 = state_48414__$1;
(statearr_48426_48486[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48415 === (15))){
var inst_48359 = (state_48414[(2)]);
var state_48414__$1 = state_48414;
if(cljs.core.truth_(inst_48359)){
var statearr_48427_48487 = state_48414__$1;
(statearr_48427_48487[(1)] = (19));

} else {
var statearr_48428_48488 = state_48414__$1;
(statearr_48428_48488[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48415 === (21))){
var inst_48364 = (state_48414[(12)]);
var inst_48364__$1 = (state_48414[(2)]);
var inst_48365 = cljs.core.get.call(null,inst_48364__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48366 = cljs.core.get.call(null,inst_48364__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48367 = cljs.core.get.call(null,inst_48364__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_48414__$1 = (function (){var statearr_48429 = state_48414;
(statearr_48429[(9)] = inst_48365);

(statearr_48429[(12)] = inst_48364__$1);

(statearr_48429[(13)] = inst_48366);

return statearr_48429;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_48414__$1,(22),inst_48367);
} else {
if((state_val_48415 === (31))){
var inst_48396 = (state_48414[(2)]);
var state_48414__$1 = state_48414;
if(cljs.core.truth_(inst_48396)){
var statearr_48430_48489 = state_48414__$1;
(statearr_48430_48489[(1)] = (32));

} else {
var statearr_48431_48490 = state_48414__$1;
(statearr_48431_48490[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48415 === (32))){
var inst_48373 = (state_48414[(14)]);
var state_48414__$1 = state_48414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48414__$1,(35),out,inst_48373);
} else {
if((state_val_48415 === (33))){
var inst_48364 = (state_48414[(12)]);
var inst_48341 = inst_48364;
var state_48414__$1 = (function (){var statearr_48432 = state_48414;
(statearr_48432[(7)] = inst_48341);

return statearr_48432;
})();
var statearr_48433_48491 = state_48414__$1;
(statearr_48433_48491[(2)] = null);

(statearr_48433_48491[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48415 === (13))){
var inst_48341 = (state_48414[(7)]);
var inst_48348 = inst_48341.cljs$lang$protocol_mask$partition0$;
var inst_48349 = (inst_48348 & (64));
var inst_48350 = inst_48341.cljs$core$ISeq$;
var inst_48351 = (cljs.core.PROTOCOL_SENTINEL === inst_48350);
var inst_48352 = (inst_48349) || (inst_48351);
var state_48414__$1 = state_48414;
if(cljs.core.truth_(inst_48352)){
var statearr_48434_48492 = state_48414__$1;
(statearr_48434_48492[(1)] = (16));

} else {
var statearr_48435_48493 = state_48414__$1;
(statearr_48435_48493[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48415 === (22))){
var inst_48373 = (state_48414[(14)]);
var inst_48374 = (state_48414[(10)]);
var inst_48372 = (state_48414[(2)]);
var inst_48373__$1 = cljs.core.nth.call(null,inst_48372,(0),null);
var inst_48374__$1 = cljs.core.nth.call(null,inst_48372,(1),null);
var inst_48375 = (inst_48373__$1 == null);
var inst_48376 = cljs.core._EQ_.call(null,inst_48374__$1,change);
var inst_48377 = (inst_48375) || (inst_48376);
var state_48414__$1 = (function (){var statearr_48436 = state_48414;
(statearr_48436[(14)] = inst_48373__$1);

(statearr_48436[(10)] = inst_48374__$1);

return statearr_48436;
})();
if(cljs.core.truth_(inst_48377)){
var statearr_48437_48494 = state_48414__$1;
(statearr_48437_48494[(1)] = (23));

} else {
var statearr_48438_48495 = state_48414__$1;
(statearr_48438_48495[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48415 === (36))){
var inst_48364 = (state_48414[(12)]);
var inst_48341 = inst_48364;
var state_48414__$1 = (function (){var statearr_48439 = state_48414;
(statearr_48439[(7)] = inst_48341);

return statearr_48439;
})();
var statearr_48440_48496 = state_48414__$1;
(statearr_48440_48496[(2)] = null);

(statearr_48440_48496[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48415 === (29))){
var inst_48388 = (state_48414[(11)]);
var state_48414__$1 = state_48414;
var statearr_48441_48497 = state_48414__$1;
(statearr_48441_48497[(2)] = inst_48388);

(statearr_48441_48497[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48415 === (6))){
var state_48414__$1 = state_48414;
var statearr_48442_48498 = state_48414__$1;
(statearr_48442_48498[(2)] = false);

(statearr_48442_48498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48415 === (28))){
var inst_48384 = (state_48414[(2)]);
var inst_48385 = calc_state.call(null);
var inst_48341 = inst_48385;
var state_48414__$1 = (function (){var statearr_48443 = state_48414;
(statearr_48443[(7)] = inst_48341);

(statearr_48443[(15)] = inst_48384);

return statearr_48443;
})();
var statearr_48444_48499 = state_48414__$1;
(statearr_48444_48499[(2)] = null);

(statearr_48444_48499[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48415 === (25))){
var inst_48410 = (state_48414[(2)]);
var state_48414__$1 = state_48414;
var statearr_48445_48500 = state_48414__$1;
(statearr_48445_48500[(2)] = inst_48410);

(statearr_48445_48500[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48415 === (34))){
var inst_48408 = (state_48414[(2)]);
var state_48414__$1 = state_48414;
var statearr_48446_48501 = state_48414__$1;
(statearr_48446_48501[(2)] = inst_48408);

(statearr_48446_48501[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48415 === (17))){
var state_48414__$1 = state_48414;
var statearr_48447_48502 = state_48414__$1;
(statearr_48447_48502[(2)] = false);

(statearr_48447_48502[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48415 === (3))){
var state_48414__$1 = state_48414;
var statearr_48448_48503 = state_48414__$1;
(statearr_48448_48503[(2)] = false);

(statearr_48448_48503[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48415 === (12))){
var inst_48412 = (state_48414[(2)]);
var state_48414__$1 = state_48414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48414__$1,inst_48412);
} else {
if((state_val_48415 === (2))){
var inst_48316 = (state_48414[(8)]);
var inst_48321 = inst_48316.cljs$lang$protocol_mask$partition0$;
var inst_48322 = (inst_48321 & (64));
var inst_48323 = inst_48316.cljs$core$ISeq$;
var inst_48324 = (cljs.core.PROTOCOL_SENTINEL === inst_48323);
var inst_48325 = (inst_48322) || (inst_48324);
var state_48414__$1 = state_48414;
if(cljs.core.truth_(inst_48325)){
var statearr_48449_48504 = state_48414__$1;
(statearr_48449_48504[(1)] = (5));

} else {
var statearr_48450_48505 = state_48414__$1;
(statearr_48450_48505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48415 === (23))){
var inst_48373 = (state_48414[(14)]);
var inst_48379 = (inst_48373 == null);
var state_48414__$1 = state_48414;
if(cljs.core.truth_(inst_48379)){
var statearr_48451_48506 = state_48414__$1;
(statearr_48451_48506[(1)] = (26));

} else {
var statearr_48452_48507 = state_48414__$1;
(statearr_48452_48507[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48415 === (35))){
var inst_48399 = (state_48414[(2)]);
var state_48414__$1 = state_48414;
if(cljs.core.truth_(inst_48399)){
var statearr_48453_48508 = state_48414__$1;
(statearr_48453_48508[(1)] = (36));

} else {
var statearr_48454_48509 = state_48414__$1;
(statearr_48454_48509[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48415 === (19))){
var inst_48341 = (state_48414[(7)]);
var inst_48361 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48341);
var state_48414__$1 = state_48414;
var statearr_48455_48510 = state_48414__$1;
(statearr_48455_48510[(2)] = inst_48361);

(statearr_48455_48510[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48415 === (11))){
var inst_48341 = (state_48414[(7)]);
var inst_48345 = (inst_48341 == null);
var inst_48346 = cljs.core.not.call(null,inst_48345);
var state_48414__$1 = state_48414;
if(inst_48346){
var statearr_48456_48511 = state_48414__$1;
(statearr_48456_48511[(1)] = (13));

} else {
var statearr_48457_48512 = state_48414__$1;
(statearr_48457_48512[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48415 === (9))){
var inst_48316 = (state_48414[(8)]);
var state_48414__$1 = state_48414;
var statearr_48458_48513 = state_48414__$1;
(statearr_48458_48513[(2)] = inst_48316);

(statearr_48458_48513[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48415 === (5))){
var state_48414__$1 = state_48414;
var statearr_48459_48514 = state_48414__$1;
(statearr_48459_48514[(2)] = true);

(statearr_48459_48514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48415 === (14))){
var state_48414__$1 = state_48414;
var statearr_48460_48515 = state_48414__$1;
(statearr_48460_48515[(2)] = false);

(statearr_48460_48515[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48415 === (26))){
var inst_48374 = (state_48414[(10)]);
var inst_48381 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_48374);
var state_48414__$1 = state_48414;
var statearr_48461_48516 = state_48414__$1;
(statearr_48461_48516[(2)] = inst_48381);

(statearr_48461_48516[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48415 === (16))){
var state_48414__$1 = state_48414;
var statearr_48462_48517 = state_48414__$1;
(statearr_48462_48517[(2)] = true);

(statearr_48462_48517[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48415 === (38))){
var inst_48404 = (state_48414[(2)]);
var state_48414__$1 = state_48414;
var statearr_48463_48518 = state_48414__$1;
(statearr_48463_48518[(2)] = inst_48404);

(statearr_48463_48518[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48415 === (30))){
var inst_48365 = (state_48414[(9)]);
var inst_48374 = (state_48414[(10)]);
var inst_48366 = (state_48414[(13)]);
var inst_48391 = cljs.core.empty_QMARK_.call(null,inst_48365);
var inst_48392 = inst_48366.call(null,inst_48374);
var inst_48393 = cljs.core.not.call(null,inst_48392);
var inst_48394 = (inst_48391) && (inst_48393);
var state_48414__$1 = state_48414;
var statearr_48464_48519 = state_48414__$1;
(statearr_48464_48519[(2)] = inst_48394);

(statearr_48464_48519[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48415 === (10))){
var inst_48316 = (state_48414[(8)]);
var inst_48337 = (state_48414[(2)]);
var inst_48338 = cljs.core.get.call(null,inst_48337,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_48339 = cljs.core.get.call(null,inst_48337,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_48340 = cljs.core.get.call(null,inst_48337,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_48341 = inst_48316;
var state_48414__$1 = (function (){var statearr_48465 = state_48414;
(statearr_48465[(7)] = inst_48341);

(statearr_48465[(16)] = inst_48340);

(statearr_48465[(17)] = inst_48338);

(statearr_48465[(18)] = inst_48339);

return statearr_48465;
})();
var statearr_48466_48520 = state_48414__$1;
(statearr_48466_48520[(2)] = null);

(statearr_48466_48520[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48415 === (18))){
var inst_48356 = (state_48414[(2)]);
var state_48414__$1 = state_48414;
var statearr_48467_48521 = state_48414__$1;
(statearr_48467_48521[(2)] = inst_48356);

(statearr_48467_48521[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48415 === (37))){
var state_48414__$1 = state_48414;
var statearr_48468_48522 = state_48414__$1;
(statearr_48468_48522[(2)] = null);

(statearr_48468_48522[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48415 === (8))){
var inst_48316 = (state_48414[(8)]);
var inst_48334 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48316);
var state_48414__$1 = state_48414;
var statearr_48469_48523 = state_48414__$1;
(statearr_48469_48523[(2)] = inst_48334);

(statearr_48469_48523[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32057__auto___48477,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31943__auto__,c__32057__auto___48477,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31944__auto__ = null;
var cljs$core$async$mix_$_state_machine__31944__auto____0 = (function (){
var statearr_48473 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48473[(0)] = cljs$core$async$mix_$_state_machine__31944__auto__);

(statearr_48473[(1)] = (1));

return statearr_48473;
});
var cljs$core$async$mix_$_state_machine__31944__auto____1 = (function (state_48414){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_48414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e48474){if((e48474 instanceof Object)){
var ex__31947__auto__ = e48474;
var statearr_48475_48524 = state_48414;
(statearr_48475_48524[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48525 = state_48414;
state_48414 = G__48525;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31944__auto__ = function(state_48414){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31944__auto____1.call(this,state_48414);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31944__auto____0;
cljs$core$async$mix_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31944__auto____1;
return cljs$core$async$mix_$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto___48477,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32059__auto__ = (function (){var statearr_48476 = f__32058__auto__.call(null);
(statearr_48476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto___48477);

return statearr_48476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto___48477,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__29177__auto__ = (((p == null))?null:p);
var m__29178__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__29177__auto__)]);
if(!((m__29178__auto__ == null))){
return m__29178__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__29178__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__29178__auto____$1 == null))){
return m__29178__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__29177__auto__ = (((p == null))?null:p);
var m__29178__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__29177__auto__)]);
if(!((m__29178__auto__ == null))){
return m__29178__auto__.call(null,p,v,ch);
} else {
var m__29178__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__29178__auto____$1 == null))){
return m__29178__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args48526 = [];
var len__29680__auto___48529 = arguments.length;
var i__29681__auto___48530 = (0);
while(true){
if((i__29681__auto___48530 < len__29680__auto___48529)){
args48526.push((arguments[i__29681__auto___48530]));

var G__48531 = (i__29681__auto___48530 + (1));
i__29681__auto___48530 = G__48531;
continue;
} else {
}
break;
}

var G__48528 = args48526.length;
switch (G__48528) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48526.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__29177__auto__ = (((p == null))?null:p);
var m__29178__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29177__auto__)]);
if(!((m__29178__auto__ == null))){
return m__29178__auto__.call(null,p);
} else {
var m__29178__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__29178__auto____$1 == null))){
return m__29178__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__29177__auto__ = (((p == null))?null:p);
var m__29178__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29177__auto__)]);
if(!((m__29178__auto__ == null))){
return m__29178__auto__.call(null,p,v);
} else {
var m__29178__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__29178__auto____$1 == null))){
return m__29178__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args48534 = [];
var len__29680__auto___48659 = arguments.length;
var i__29681__auto___48660 = (0);
while(true){
if((i__29681__auto___48660 < len__29680__auto___48659)){
args48534.push((arguments[i__29681__auto___48660]));

var G__48661 = (i__29681__auto___48660 + (1));
i__29681__auto___48660 = G__48661;
continue;
} else {
}
break;
}

var G__48536 = args48534.length;
switch (G__48536) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48534.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__28459__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__28459__auto__)){
return or__28459__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__28459__auto__,mults){
return (function (p1__48533_SHARP_){
if(cljs.core.truth_(p1__48533_SHARP_.call(null,topic))){
return p1__48533_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__48533_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28459__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async48537 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48537 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta48538){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta48538 = meta48538;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_48539,meta48538__$1){
var self__ = this;
var _48539__$1 = this;
return (new cljs.core.async.t_cljs$core$async48537(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta48538__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48537.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_48539){
var self__ = this;
var _48539__$1 = this;
return self__.meta48538;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48537.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48537.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48537.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48537.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48537.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5278__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5278__auto__)){
var m = temp__5278__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48537.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48537.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48537.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta48538","meta48538",735823566,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async48537.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48537.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48537";

cljs.core.async.t_cljs$core$async48537.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__29116__auto__,writer__29117__auto__,opt__29118__auto__){
return cljs.core._write.call(null,writer__29117__auto__,"cljs.core.async/t_cljs$core$async48537");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async48537 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async48537(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48538){
return (new cljs.core.async.t_cljs$core$async48537(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48538));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async48537(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32057__auto___48663 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto___48663,mults,ensure_mult,p){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto___48663,mults,ensure_mult,p){
return (function (state_48611){
var state_val_48612 = (state_48611[(1)]);
if((state_val_48612 === (7))){
var inst_48607 = (state_48611[(2)]);
var state_48611__$1 = state_48611;
var statearr_48613_48664 = state_48611__$1;
(statearr_48613_48664[(2)] = inst_48607);

(statearr_48613_48664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48612 === (20))){
var state_48611__$1 = state_48611;
var statearr_48614_48665 = state_48611__$1;
(statearr_48614_48665[(2)] = null);

(statearr_48614_48665[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48612 === (1))){
var state_48611__$1 = state_48611;
var statearr_48615_48666 = state_48611__$1;
(statearr_48615_48666[(2)] = null);

(statearr_48615_48666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48612 === (24))){
var inst_48590 = (state_48611[(7)]);
var inst_48599 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_48590);
var state_48611__$1 = state_48611;
var statearr_48616_48667 = state_48611__$1;
(statearr_48616_48667[(2)] = inst_48599);

(statearr_48616_48667[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48612 === (4))){
var inst_48542 = (state_48611[(8)]);
var inst_48542__$1 = (state_48611[(2)]);
var inst_48543 = (inst_48542__$1 == null);
var state_48611__$1 = (function (){var statearr_48617 = state_48611;
(statearr_48617[(8)] = inst_48542__$1);

return statearr_48617;
})();
if(cljs.core.truth_(inst_48543)){
var statearr_48618_48668 = state_48611__$1;
(statearr_48618_48668[(1)] = (5));

} else {
var statearr_48619_48669 = state_48611__$1;
(statearr_48619_48669[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48612 === (15))){
var inst_48584 = (state_48611[(2)]);
var state_48611__$1 = state_48611;
var statearr_48620_48670 = state_48611__$1;
(statearr_48620_48670[(2)] = inst_48584);

(statearr_48620_48670[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48612 === (21))){
var inst_48604 = (state_48611[(2)]);
var state_48611__$1 = (function (){var statearr_48621 = state_48611;
(statearr_48621[(9)] = inst_48604);

return statearr_48621;
})();
var statearr_48622_48671 = state_48611__$1;
(statearr_48622_48671[(2)] = null);

(statearr_48622_48671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48612 === (13))){
var inst_48566 = (state_48611[(10)]);
var inst_48568 = cljs.core.chunked_seq_QMARK_.call(null,inst_48566);
var state_48611__$1 = state_48611;
if(inst_48568){
var statearr_48623_48672 = state_48611__$1;
(statearr_48623_48672[(1)] = (16));

} else {
var statearr_48624_48673 = state_48611__$1;
(statearr_48624_48673[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48612 === (22))){
var inst_48596 = (state_48611[(2)]);
var state_48611__$1 = state_48611;
if(cljs.core.truth_(inst_48596)){
var statearr_48625_48674 = state_48611__$1;
(statearr_48625_48674[(1)] = (23));

} else {
var statearr_48626_48675 = state_48611__$1;
(statearr_48626_48675[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48612 === (6))){
var inst_48542 = (state_48611[(8)]);
var inst_48592 = (state_48611[(11)]);
var inst_48590 = (state_48611[(7)]);
var inst_48590__$1 = topic_fn.call(null,inst_48542);
var inst_48591 = cljs.core.deref.call(null,mults);
var inst_48592__$1 = cljs.core.get.call(null,inst_48591,inst_48590__$1);
var state_48611__$1 = (function (){var statearr_48627 = state_48611;
(statearr_48627[(11)] = inst_48592__$1);

(statearr_48627[(7)] = inst_48590__$1);

return statearr_48627;
})();
if(cljs.core.truth_(inst_48592__$1)){
var statearr_48628_48676 = state_48611__$1;
(statearr_48628_48676[(1)] = (19));

} else {
var statearr_48629_48677 = state_48611__$1;
(statearr_48629_48677[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48612 === (25))){
var inst_48601 = (state_48611[(2)]);
var state_48611__$1 = state_48611;
var statearr_48630_48678 = state_48611__$1;
(statearr_48630_48678[(2)] = inst_48601);

(statearr_48630_48678[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48612 === (17))){
var inst_48566 = (state_48611[(10)]);
var inst_48575 = cljs.core.first.call(null,inst_48566);
var inst_48576 = cljs.core.async.muxch_STAR_.call(null,inst_48575);
var inst_48577 = cljs.core.async.close_BANG_.call(null,inst_48576);
var inst_48578 = cljs.core.next.call(null,inst_48566);
var inst_48552 = inst_48578;
var inst_48553 = null;
var inst_48554 = (0);
var inst_48555 = (0);
var state_48611__$1 = (function (){var statearr_48631 = state_48611;
(statearr_48631[(12)] = inst_48552);

(statearr_48631[(13)] = inst_48555);

(statearr_48631[(14)] = inst_48553);

(statearr_48631[(15)] = inst_48554);

(statearr_48631[(16)] = inst_48577);

return statearr_48631;
})();
var statearr_48632_48679 = state_48611__$1;
(statearr_48632_48679[(2)] = null);

(statearr_48632_48679[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48612 === (3))){
var inst_48609 = (state_48611[(2)]);
var state_48611__$1 = state_48611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48611__$1,inst_48609);
} else {
if((state_val_48612 === (12))){
var inst_48586 = (state_48611[(2)]);
var state_48611__$1 = state_48611;
var statearr_48633_48680 = state_48611__$1;
(statearr_48633_48680[(2)] = inst_48586);

(statearr_48633_48680[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48612 === (2))){
var state_48611__$1 = state_48611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48611__$1,(4),ch);
} else {
if((state_val_48612 === (23))){
var state_48611__$1 = state_48611;
var statearr_48634_48681 = state_48611__$1;
(statearr_48634_48681[(2)] = null);

(statearr_48634_48681[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48612 === (19))){
var inst_48542 = (state_48611[(8)]);
var inst_48592 = (state_48611[(11)]);
var inst_48594 = cljs.core.async.muxch_STAR_.call(null,inst_48592);
var state_48611__$1 = state_48611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48611__$1,(22),inst_48594,inst_48542);
} else {
if((state_val_48612 === (11))){
var inst_48552 = (state_48611[(12)]);
var inst_48566 = (state_48611[(10)]);
var inst_48566__$1 = cljs.core.seq.call(null,inst_48552);
var state_48611__$1 = (function (){var statearr_48635 = state_48611;
(statearr_48635[(10)] = inst_48566__$1);

return statearr_48635;
})();
if(inst_48566__$1){
var statearr_48636_48682 = state_48611__$1;
(statearr_48636_48682[(1)] = (13));

} else {
var statearr_48637_48683 = state_48611__$1;
(statearr_48637_48683[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48612 === (9))){
var inst_48588 = (state_48611[(2)]);
var state_48611__$1 = state_48611;
var statearr_48638_48684 = state_48611__$1;
(statearr_48638_48684[(2)] = inst_48588);

(statearr_48638_48684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48612 === (5))){
var inst_48549 = cljs.core.deref.call(null,mults);
var inst_48550 = cljs.core.vals.call(null,inst_48549);
var inst_48551 = cljs.core.seq.call(null,inst_48550);
var inst_48552 = inst_48551;
var inst_48553 = null;
var inst_48554 = (0);
var inst_48555 = (0);
var state_48611__$1 = (function (){var statearr_48639 = state_48611;
(statearr_48639[(12)] = inst_48552);

(statearr_48639[(13)] = inst_48555);

(statearr_48639[(14)] = inst_48553);

(statearr_48639[(15)] = inst_48554);

return statearr_48639;
})();
var statearr_48640_48685 = state_48611__$1;
(statearr_48640_48685[(2)] = null);

(statearr_48640_48685[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48612 === (14))){
var state_48611__$1 = state_48611;
var statearr_48644_48686 = state_48611__$1;
(statearr_48644_48686[(2)] = null);

(statearr_48644_48686[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48612 === (16))){
var inst_48566 = (state_48611[(10)]);
var inst_48570 = cljs.core.chunk_first.call(null,inst_48566);
var inst_48571 = cljs.core.chunk_rest.call(null,inst_48566);
var inst_48572 = cljs.core.count.call(null,inst_48570);
var inst_48552 = inst_48571;
var inst_48553 = inst_48570;
var inst_48554 = inst_48572;
var inst_48555 = (0);
var state_48611__$1 = (function (){var statearr_48645 = state_48611;
(statearr_48645[(12)] = inst_48552);

(statearr_48645[(13)] = inst_48555);

(statearr_48645[(14)] = inst_48553);

(statearr_48645[(15)] = inst_48554);

return statearr_48645;
})();
var statearr_48646_48687 = state_48611__$1;
(statearr_48646_48687[(2)] = null);

(statearr_48646_48687[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48612 === (10))){
var inst_48552 = (state_48611[(12)]);
var inst_48555 = (state_48611[(13)]);
var inst_48553 = (state_48611[(14)]);
var inst_48554 = (state_48611[(15)]);
var inst_48560 = cljs.core._nth.call(null,inst_48553,inst_48555);
var inst_48561 = cljs.core.async.muxch_STAR_.call(null,inst_48560);
var inst_48562 = cljs.core.async.close_BANG_.call(null,inst_48561);
var inst_48563 = (inst_48555 + (1));
var tmp48641 = inst_48552;
var tmp48642 = inst_48553;
var tmp48643 = inst_48554;
var inst_48552__$1 = tmp48641;
var inst_48553__$1 = tmp48642;
var inst_48554__$1 = tmp48643;
var inst_48555__$1 = inst_48563;
var state_48611__$1 = (function (){var statearr_48647 = state_48611;
(statearr_48647[(12)] = inst_48552__$1);

(statearr_48647[(13)] = inst_48555__$1);

(statearr_48647[(14)] = inst_48553__$1);

(statearr_48647[(17)] = inst_48562);

(statearr_48647[(15)] = inst_48554__$1);

return statearr_48647;
})();
var statearr_48648_48688 = state_48611__$1;
(statearr_48648_48688[(2)] = null);

(statearr_48648_48688[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48612 === (18))){
var inst_48581 = (state_48611[(2)]);
var state_48611__$1 = state_48611;
var statearr_48649_48689 = state_48611__$1;
(statearr_48649_48689[(2)] = inst_48581);

(statearr_48649_48689[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48612 === (8))){
var inst_48555 = (state_48611[(13)]);
var inst_48554 = (state_48611[(15)]);
var inst_48557 = (inst_48555 < inst_48554);
var inst_48558 = inst_48557;
var state_48611__$1 = state_48611;
if(cljs.core.truth_(inst_48558)){
var statearr_48650_48690 = state_48611__$1;
(statearr_48650_48690[(1)] = (10));

} else {
var statearr_48651_48691 = state_48611__$1;
(statearr_48651_48691[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32057__auto___48663,mults,ensure_mult,p))
;
return ((function (switch__31943__auto__,c__32057__auto___48663,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31944__auto__ = null;
var cljs$core$async$state_machine__31944__auto____0 = (function (){
var statearr_48655 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48655[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_48655[(1)] = (1));

return statearr_48655;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_48611){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_48611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e48656){if((e48656 instanceof Object)){
var ex__31947__auto__ = e48656;
var statearr_48657_48692 = state_48611;
(statearr_48657_48692[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48656;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48693 = state_48611;
state_48611 = G__48693;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_48611){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_48611);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto___48663,mults,ensure_mult,p))
})();
var state__32059__auto__ = (function (){var statearr_48658 = f__32058__auto__.call(null);
(statearr_48658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto___48663);

return statearr_48658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto___48663,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args48694 = [];
var len__29680__auto___48697 = arguments.length;
var i__29681__auto___48698 = (0);
while(true){
if((i__29681__auto___48698 < len__29680__auto___48697)){
args48694.push((arguments[i__29681__auto___48698]));

var G__48699 = (i__29681__auto___48698 + (1));
i__29681__auto___48698 = G__48699;
continue;
} else {
}
break;
}

var G__48696 = args48694.length;
switch (G__48696) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48694.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args48701 = [];
var len__29680__auto___48704 = arguments.length;
var i__29681__auto___48705 = (0);
while(true){
if((i__29681__auto___48705 < len__29680__auto___48704)){
args48701.push((arguments[i__29681__auto___48705]));

var G__48706 = (i__29681__auto___48705 + (1));
i__29681__auto___48705 = G__48706;
continue;
} else {
}
break;
}

var G__48703 = args48701.length;
switch (G__48703) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48701.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args48708 = [];
var len__29680__auto___48779 = arguments.length;
var i__29681__auto___48780 = (0);
while(true){
if((i__29681__auto___48780 < len__29680__auto___48779)){
args48708.push((arguments[i__29681__auto___48780]));

var G__48781 = (i__29681__auto___48780 + (1));
i__29681__auto___48780 = G__48781;
continue;
} else {
}
break;
}

var G__48710 = args48708.length;
switch (G__48710) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48708.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__32057__auto___48783 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto___48783,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto___48783,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_48749){
var state_val_48750 = (state_48749[(1)]);
if((state_val_48750 === (7))){
var state_48749__$1 = state_48749;
var statearr_48751_48784 = state_48749__$1;
(statearr_48751_48784[(2)] = null);

(statearr_48751_48784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48750 === (1))){
var state_48749__$1 = state_48749;
var statearr_48752_48785 = state_48749__$1;
(statearr_48752_48785[(2)] = null);

(statearr_48752_48785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48750 === (4))){
var inst_48713 = (state_48749[(7)]);
var inst_48715 = (inst_48713 < cnt);
var state_48749__$1 = state_48749;
if(cljs.core.truth_(inst_48715)){
var statearr_48753_48786 = state_48749__$1;
(statearr_48753_48786[(1)] = (6));

} else {
var statearr_48754_48787 = state_48749__$1;
(statearr_48754_48787[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48750 === (15))){
var inst_48745 = (state_48749[(2)]);
var state_48749__$1 = state_48749;
var statearr_48755_48788 = state_48749__$1;
(statearr_48755_48788[(2)] = inst_48745);

(statearr_48755_48788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48750 === (13))){
var inst_48738 = cljs.core.async.close_BANG_.call(null,out);
var state_48749__$1 = state_48749;
var statearr_48756_48789 = state_48749__$1;
(statearr_48756_48789[(2)] = inst_48738);

(statearr_48756_48789[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48750 === (6))){
var state_48749__$1 = state_48749;
var statearr_48757_48790 = state_48749__$1;
(statearr_48757_48790[(2)] = null);

(statearr_48757_48790[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48750 === (3))){
var inst_48747 = (state_48749[(2)]);
var state_48749__$1 = state_48749;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48749__$1,inst_48747);
} else {
if((state_val_48750 === (12))){
var inst_48735 = (state_48749[(8)]);
var inst_48735__$1 = (state_48749[(2)]);
var inst_48736 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_48735__$1);
var state_48749__$1 = (function (){var statearr_48758 = state_48749;
(statearr_48758[(8)] = inst_48735__$1);

return statearr_48758;
})();
if(cljs.core.truth_(inst_48736)){
var statearr_48759_48791 = state_48749__$1;
(statearr_48759_48791[(1)] = (13));

} else {
var statearr_48760_48792 = state_48749__$1;
(statearr_48760_48792[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48750 === (2))){
var inst_48712 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_48713 = (0);
var state_48749__$1 = (function (){var statearr_48761 = state_48749;
(statearr_48761[(7)] = inst_48713);

(statearr_48761[(9)] = inst_48712);

return statearr_48761;
})();
var statearr_48762_48793 = state_48749__$1;
(statearr_48762_48793[(2)] = null);

(statearr_48762_48793[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48750 === (11))){
var inst_48713 = (state_48749[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_48749,(10),Object,null,(9));
var inst_48722 = chs__$1.call(null,inst_48713);
var inst_48723 = done.call(null,inst_48713);
var inst_48724 = cljs.core.async.take_BANG_.call(null,inst_48722,inst_48723);
var state_48749__$1 = state_48749;
var statearr_48763_48794 = state_48749__$1;
(statearr_48763_48794[(2)] = inst_48724);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48749__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48750 === (9))){
var inst_48713 = (state_48749[(7)]);
var inst_48726 = (state_48749[(2)]);
var inst_48727 = (inst_48713 + (1));
var inst_48713__$1 = inst_48727;
var state_48749__$1 = (function (){var statearr_48764 = state_48749;
(statearr_48764[(10)] = inst_48726);

(statearr_48764[(7)] = inst_48713__$1);

return statearr_48764;
})();
var statearr_48765_48795 = state_48749__$1;
(statearr_48765_48795[(2)] = null);

(statearr_48765_48795[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48750 === (5))){
var inst_48733 = (state_48749[(2)]);
var state_48749__$1 = (function (){var statearr_48766 = state_48749;
(statearr_48766[(11)] = inst_48733);

return statearr_48766;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48749__$1,(12),dchan);
} else {
if((state_val_48750 === (14))){
var inst_48735 = (state_48749[(8)]);
var inst_48740 = cljs.core.apply.call(null,f,inst_48735);
var state_48749__$1 = state_48749;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48749__$1,(16),out,inst_48740);
} else {
if((state_val_48750 === (16))){
var inst_48742 = (state_48749[(2)]);
var state_48749__$1 = (function (){var statearr_48767 = state_48749;
(statearr_48767[(12)] = inst_48742);

return statearr_48767;
})();
var statearr_48768_48796 = state_48749__$1;
(statearr_48768_48796[(2)] = null);

(statearr_48768_48796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48750 === (10))){
var inst_48717 = (state_48749[(2)]);
var inst_48718 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_48749__$1 = (function (){var statearr_48769 = state_48749;
(statearr_48769[(13)] = inst_48717);

return statearr_48769;
})();
var statearr_48770_48797 = state_48749__$1;
(statearr_48770_48797[(2)] = inst_48718);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48749__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48750 === (8))){
var inst_48731 = (state_48749[(2)]);
var state_48749__$1 = state_48749;
var statearr_48771_48798 = state_48749__$1;
(statearr_48771_48798[(2)] = inst_48731);

(statearr_48771_48798[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32057__auto___48783,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31943__auto__,c__32057__auto___48783,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31944__auto__ = null;
var cljs$core$async$state_machine__31944__auto____0 = (function (){
var statearr_48775 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48775[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_48775[(1)] = (1));

return statearr_48775;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_48749){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_48749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e48776){if((e48776 instanceof Object)){
var ex__31947__auto__ = e48776;
var statearr_48777_48799 = state_48749;
(statearr_48777_48799[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48800 = state_48749;
state_48749 = G__48800;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_48749){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_48749);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto___48783,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32059__auto__ = (function (){var statearr_48778 = f__32058__auto__.call(null);
(statearr_48778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto___48783);

return statearr_48778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto___48783,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args48802 = [];
var len__29680__auto___48860 = arguments.length;
var i__29681__auto___48861 = (0);
while(true){
if((i__29681__auto___48861 < len__29680__auto___48860)){
args48802.push((arguments[i__29681__auto___48861]));

var G__48862 = (i__29681__auto___48861 + (1));
i__29681__auto___48861 = G__48862;
continue;
} else {
}
break;
}

var G__48804 = args48802.length;
switch (G__48804) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48802.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32057__auto___48864 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto___48864,out){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto___48864,out){
return (function (state_48836){
var state_val_48837 = (state_48836[(1)]);
if((state_val_48837 === (7))){
var inst_48815 = (state_48836[(7)]);
var inst_48816 = (state_48836[(8)]);
var inst_48815__$1 = (state_48836[(2)]);
var inst_48816__$1 = cljs.core.nth.call(null,inst_48815__$1,(0),null);
var inst_48817 = cljs.core.nth.call(null,inst_48815__$1,(1),null);
var inst_48818 = (inst_48816__$1 == null);
var state_48836__$1 = (function (){var statearr_48838 = state_48836;
(statearr_48838[(7)] = inst_48815__$1);

(statearr_48838[(9)] = inst_48817);

(statearr_48838[(8)] = inst_48816__$1);

return statearr_48838;
})();
if(cljs.core.truth_(inst_48818)){
var statearr_48839_48865 = state_48836__$1;
(statearr_48839_48865[(1)] = (8));

} else {
var statearr_48840_48866 = state_48836__$1;
(statearr_48840_48866[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48837 === (1))){
var inst_48805 = cljs.core.vec.call(null,chs);
var inst_48806 = inst_48805;
var state_48836__$1 = (function (){var statearr_48841 = state_48836;
(statearr_48841[(10)] = inst_48806);

return statearr_48841;
})();
var statearr_48842_48867 = state_48836__$1;
(statearr_48842_48867[(2)] = null);

(statearr_48842_48867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48837 === (4))){
var inst_48806 = (state_48836[(10)]);
var state_48836__$1 = state_48836;
return cljs.core.async.ioc_alts_BANG_.call(null,state_48836__$1,(7),inst_48806);
} else {
if((state_val_48837 === (6))){
var inst_48832 = (state_48836[(2)]);
var state_48836__$1 = state_48836;
var statearr_48843_48868 = state_48836__$1;
(statearr_48843_48868[(2)] = inst_48832);

(statearr_48843_48868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48837 === (3))){
var inst_48834 = (state_48836[(2)]);
var state_48836__$1 = state_48836;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48836__$1,inst_48834);
} else {
if((state_val_48837 === (2))){
var inst_48806 = (state_48836[(10)]);
var inst_48808 = cljs.core.count.call(null,inst_48806);
var inst_48809 = (inst_48808 > (0));
var state_48836__$1 = state_48836;
if(cljs.core.truth_(inst_48809)){
var statearr_48845_48869 = state_48836__$1;
(statearr_48845_48869[(1)] = (4));

} else {
var statearr_48846_48870 = state_48836__$1;
(statearr_48846_48870[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48837 === (11))){
var inst_48806 = (state_48836[(10)]);
var inst_48825 = (state_48836[(2)]);
var tmp48844 = inst_48806;
var inst_48806__$1 = tmp48844;
var state_48836__$1 = (function (){var statearr_48847 = state_48836;
(statearr_48847[(11)] = inst_48825);

(statearr_48847[(10)] = inst_48806__$1);

return statearr_48847;
})();
var statearr_48848_48871 = state_48836__$1;
(statearr_48848_48871[(2)] = null);

(statearr_48848_48871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48837 === (9))){
var inst_48816 = (state_48836[(8)]);
var state_48836__$1 = state_48836;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48836__$1,(11),out,inst_48816);
} else {
if((state_val_48837 === (5))){
var inst_48830 = cljs.core.async.close_BANG_.call(null,out);
var state_48836__$1 = state_48836;
var statearr_48849_48872 = state_48836__$1;
(statearr_48849_48872[(2)] = inst_48830);

(statearr_48849_48872[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48837 === (10))){
var inst_48828 = (state_48836[(2)]);
var state_48836__$1 = state_48836;
var statearr_48850_48873 = state_48836__$1;
(statearr_48850_48873[(2)] = inst_48828);

(statearr_48850_48873[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48837 === (8))){
var inst_48815 = (state_48836[(7)]);
var inst_48817 = (state_48836[(9)]);
var inst_48806 = (state_48836[(10)]);
var inst_48816 = (state_48836[(8)]);
var inst_48820 = (function (){var cs = inst_48806;
var vec__48811 = inst_48815;
var v = inst_48816;
var c = inst_48817;
return ((function (cs,vec__48811,v,c,inst_48815,inst_48817,inst_48806,inst_48816,state_val_48837,c__32057__auto___48864,out){
return (function (p1__48801_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__48801_SHARP_);
});
;})(cs,vec__48811,v,c,inst_48815,inst_48817,inst_48806,inst_48816,state_val_48837,c__32057__auto___48864,out))
})();
var inst_48821 = cljs.core.filterv.call(null,inst_48820,inst_48806);
var inst_48806__$1 = inst_48821;
var state_48836__$1 = (function (){var statearr_48851 = state_48836;
(statearr_48851[(10)] = inst_48806__$1);

return statearr_48851;
})();
var statearr_48852_48874 = state_48836__$1;
(statearr_48852_48874[(2)] = null);

(statearr_48852_48874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__32057__auto___48864,out))
;
return ((function (switch__31943__auto__,c__32057__auto___48864,out){
return (function() {
var cljs$core$async$state_machine__31944__auto__ = null;
var cljs$core$async$state_machine__31944__auto____0 = (function (){
var statearr_48856 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48856[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_48856[(1)] = (1));

return statearr_48856;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_48836){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_48836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e48857){if((e48857 instanceof Object)){
var ex__31947__auto__ = e48857;
var statearr_48858_48875 = state_48836;
(statearr_48858_48875[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48876 = state_48836;
state_48836 = G__48876;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_48836){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_48836);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto___48864,out))
})();
var state__32059__auto__ = (function (){var statearr_48859 = f__32058__auto__.call(null);
(statearr_48859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto___48864);

return statearr_48859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto___48864,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args48877 = [];
var len__29680__auto___48926 = arguments.length;
var i__29681__auto___48927 = (0);
while(true){
if((i__29681__auto___48927 < len__29680__auto___48926)){
args48877.push((arguments[i__29681__auto___48927]));

var G__48928 = (i__29681__auto___48927 + (1));
i__29681__auto___48927 = G__48928;
continue;
} else {
}
break;
}

var G__48879 = args48877.length;
switch (G__48879) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48877.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32057__auto___48930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto___48930,out){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto___48930,out){
return (function (state_48903){
var state_val_48904 = (state_48903[(1)]);
if((state_val_48904 === (7))){
var inst_48885 = (state_48903[(7)]);
var inst_48885__$1 = (state_48903[(2)]);
var inst_48886 = (inst_48885__$1 == null);
var inst_48887 = cljs.core.not.call(null,inst_48886);
var state_48903__$1 = (function (){var statearr_48905 = state_48903;
(statearr_48905[(7)] = inst_48885__$1);

return statearr_48905;
})();
if(inst_48887){
var statearr_48906_48931 = state_48903__$1;
(statearr_48906_48931[(1)] = (8));

} else {
var statearr_48907_48932 = state_48903__$1;
(statearr_48907_48932[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48904 === (1))){
var inst_48880 = (0);
var state_48903__$1 = (function (){var statearr_48908 = state_48903;
(statearr_48908[(8)] = inst_48880);

return statearr_48908;
})();
var statearr_48909_48933 = state_48903__$1;
(statearr_48909_48933[(2)] = null);

(statearr_48909_48933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48904 === (4))){
var state_48903__$1 = state_48903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48903__$1,(7),ch);
} else {
if((state_val_48904 === (6))){
var inst_48898 = (state_48903[(2)]);
var state_48903__$1 = state_48903;
var statearr_48910_48934 = state_48903__$1;
(statearr_48910_48934[(2)] = inst_48898);

(statearr_48910_48934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48904 === (3))){
var inst_48900 = (state_48903[(2)]);
var inst_48901 = cljs.core.async.close_BANG_.call(null,out);
var state_48903__$1 = (function (){var statearr_48911 = state_48903;
(statearr_48911[(9)] = inst_48900);

return statearr_48911;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48903__$1,inst_48901);
} else {
if((state_val_48904 === (2))){
var inst_48880 = (state_48903[(8)]);
var inst_48882 = (inst_48880 < n);
var state_48903__$1 = state_48903;
if(cljs.core.truth_(inst_48882)){
var statearr_48912_48935 = state_48903__$1;
(statearr_48912_48935[(1)] = (4));

} else {
var statearr_48913_48936 = state_48903__$1;
(statearr_48913_48936[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48904 === (11))){
var inst_48880 = (state_48903[(8)]);
var inst_48890 = (state_48903[(2)]);
var inst_48891 = (inst_48880 + (1));
var inst_48880__$1 = inst_48891;
var state_48903__$1 = (function (){var statearr_48914 = state_48903;
(statearr_48914[(8)] = inst_48880__$1);

(statearr_48914[(10)] = inst_48890);

return statearr_48914;
})();
var statearr_48915_48937 = state_48903__$1;
(statearr_48915_48937[(2)] = null);

(statearr_48915_48937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48904 === (9))){
var state_48903__$1 = state_48903;
var statearr_48916_48938 = state_48903__$1;
(statearr_48916_48938[(2)] = null);

(statearr_48916_48938[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48904 === (5))){
var state_48903__$1 = state_48903;
var statearr_48917_48939 = state_48903__$1;
(statearr_48917_48939[(2)] = null);

(statearr_48917_48939[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48904 === (10))){
var inst_48895 = (state_48903[(2)]);
var state_48903__$1 = state_48903;
var statearr_48918_48940 = state_48903__$1;
(statearr_48918_48940[(2)] = inst_48895);

(statearr_48918_48940[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48904 === (8))){
var inst_48885 = (state_48903[(7)]);
var state_48903__$1 = state_48903;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48903__$1,(11),out,inst_48885);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__32057__auto___48930,out))
;
return ((function (switch__31943__auto__,c__32057__auto___48930,out){
return (function() {
var cljs$core$async$state_machine__31944__auto__ = null;
var cljs$core$async$state_machine__31944__auto____0 = (function (){
var statearr_48922 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48922[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_48922[(1)] = (1));

return statearr_48922;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_48903){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_48903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e48923){if((e48923 instanceof Object)){
var ex__31947__auto__ = e48923;
var statearr_48924_48941 = state_48903;
(statearr_48924_48941[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48942 = state_48903;
state_48903 = G__48942;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_48903){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_48903);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto___48930,out))
})();
var state__32059__auto__ = (function (){var statearr_48925 = f__32058__auto__.call(null);
(statearr_48925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto___48930);

return statearr_48925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto___48930,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48950 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48950 = (function (f,ch,meta48951){
this.f = f;
this.ch = ch;
this.meta48951 = meta48951;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48952,meta48951__$1){
var self__ = this;
var _48952__$1 = this;
return (new cljs.core.async.t_cljs$core$async48950(self__.f,self__.ch,meta48951__$1));
});

cljs.core.async.t_cljs$core$async48950.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48952){
var self__ = this;
var _48952__$1 = this;
return self__.meta48951;
});

cljs.core.async.t_cljs$core$async48950.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48950.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48950.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48950.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48950.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async48953 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48953 = (function (f,ch,meta48951,_,fn1,meta48954){
this.f = f;
this.ch = ch;
this.meta48951 = meta48951;
this._ = _;
this.fn1 = fn1;
this.meta48954 = meta48954;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_48955,meta48954__$1){
var self__ = this;
var _48955__$1 = this;
return (new cljs.core.async.t_cljs$core$async48953(self__.f,self__.ch,self__.meta48951,self__._,self__.fn1,meta48954__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async48953.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_48955){
var self__ = this;
var _48955__$1 = this;
return self__.meta48954;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48953.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48953.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48953.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async48953.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__48943_SHARP_){
return f1.call(null,(((p1__48943_SHARP_ == null))?null:self__.f.call(null,p1__48943_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async48953.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48951","meta48951",-1194957110,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async48950","cljs.core.async/t_cljs$core$async48950",1126714695,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta48954","meta48954",-2036823654,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async48953.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48953.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48953";

cljs.core.async.t_cljs$core$async48953.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__29116__auto__,writer__29117__auto__,opt__29118__auto__){
return cljs.core._write.call(null,writer__29117__auto__,"cljs.core.async/t_cljs$core$async48953");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async48953 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48953(f__$1,ch__$1,meta48951__$1,___$2,fn1__$1,meta48954){
return (new cljs.core.async.t_cljs$core$async48953(f__$1,ch__$1,meta48951__$1,___$2,fn1__$1,meta48954));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async48953(self__.f,self__.ch,self__.meta48951,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__28447__auto__ = ret;
if(cljs.core.truth_(and__28447__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__28447__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async48950.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48950.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async48950.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48951","meta48951",-1194957110,null)], null);
});

cljs.core.async.t_cljs$core$async48950.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48950.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48950";

cljs.core.async.t_cljs$core$async48950.cljs$lang$ctorPrWriter = (function (this__29116__auto__,writer__29117__auto__,opt__29118__auto__){
return cljs.core._write.call(null,writer__29117__auto__,"cljs.core.async/t_cljs$core$async48950");
});

cljs.core.async.__GT_t_cljs$core$async48950 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48950(f__$1,ch__$1,meta48951){
return (new cljs.core.async.t_cljs$core$async48950(f__$1,ch__$1,meta48951));
});

}

return (new cljs.core.async.t_cljs$core$async48950(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async48959 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48959 = (function (f,ch,meta48960){
this.f = f;
this.ch = ch;
this.meta48960 = meta48960;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48961,meta48960__$1){
var self__ = this;
var _48961__$1 = this;
return (new cljs.core.async.t_cljs$core$async48959(self__.f,self__.ch,meta48960__$1));
});

cljs.core.async.t_cljs$core$async48959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48961){
var self__ = this;
var _48961__$1 = this;
return self__.meta48960;
});

cljs.core.async.t_cljs$core$async48959.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48959.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48959.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48959.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48959.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48959.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async48959.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48960","meta48960",508182933,null)], null);
});

cljs.core.async.t_cljs$core$async48959.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48959.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48959";

cljs.core.async.t_cljs$core$async48959.cljs$lang$ctorPrWriter = (function (this__29116__auto__,writer__29117__auto__,opt__29118__auto__){
return cljs.core._write.call(null,writer__29117__auto__,"cljs.core.async/t_cljs$core$async48959");
});

cljs.core.async.__GT_t_cljs$core$async48959 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async48959(f__$1,ch__$1,meta48960){
return (new cljs.core.async.t_cljs$core$async48959(f__$1,ch__$1,meta48960));
});

}

return (new cljs.core.async.t_cljs$core$async48959(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async48965 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48965 = (function (p,ch,meta48966){
this.p = p;
this.ch = ch;
this.meta48966 = meta48966;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48967,meta48966__$1){
var self__ = this;
var _48967__$1 = this;
return (new cljs.core.async.t_cljs$core$async48965(self__.p,self__.ch,meta48966__$1));
});

cljs.core.async.t_cljs$core$async48965.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48967){
var self__ = this;
var _48967__$1 = this;
return self__.meta48966;
});

cljs.core.async.t_cljs$core$async48965.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48965.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48965.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async48965.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48965.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async48965.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48965.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async48965.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48966","meta48966",-40783742,null)], null);
});

cljs.core.async.t_cljs$core$async48965.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48965.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48965";

cljs.core.async.t_cljs$core$async48965.cljs$lang$ctorPrWriter = (function (this__29116__auto__,writer__29117__auto__,opt__29118__auto__){
return cljs.core._write.call(null,writer__29117__auto__,"cljs.core.async/t_cljs$core$async48965");
});

cljs.core.async.__GT_t_cljs$core$async48965 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async48965(p__$1,ch__$1,meta48966){
return (new cljs.core.async.t_cljs$core$async48965(p__$1,ch__$1,meta48966));
});

}

return (new cljs.core.async.t_cljs$core$async48965(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args48968 = [];
var len__29680__auto___49012 = arguments.length;
var i__29681__auto___49013 = (0);
while(true){
if((i__29681__auto___49013 < len__29680__auto___49012)){
args48968.push((arguments[i__29681__auto___49013]));

var G__49014 = (i__29681__auto___49013 + (1));
i__29681__auto___49013 = G__49014;
continue;
} else {
}
break;
}

var G__48970 = args48968.length;
switch (G__48970) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48968.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32057__auto___49016 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto___49016,out){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto___49016,out){
return (function (state_48991){
var state_val_48992 = (state_48991[(1)]);
if((state_val_48992 === (7))){
var inst_48987 = (state_48991[(2)]);
var state_48991__$1 = state_48991;
var statearr_48993_49017 = state_48991__$1;
(statearr_48993_49017[(2)] = inst_48987);

(statearr_48993_49017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48992 === (1))){
var state_48991__$1 = state_48991;
var statearr_48994_49018 = state_48991__$1;
(statearr_48994_49018[(2)] = null);

(statearr_48994_49018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48992 === (4))){
var inst_48973 = (state_48991[(7)]);
var inst_48973__$1 = (state_48991[(2)]);
var inst_48974 = (inst_48973__$1 == null);
var state_48991__$1 = (function (){var statearr_48995 = state_48991;
(statearr_48995[(7)] = inst_48973__$1);

return statearr_48995;
})();
if(cljs.core.truth_(inst_48974)){
var statearr_48996_49019 = state_48991__$1;
(statearr_48996_49019[(1)] = (5));

} else {
var statearr_48997_49020 = state_48991__$1;
(statearr_48997_49020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48992 === (6))){
var inst_48973 = (state_48991[(7)]);
var inst_48978 = p.call(null,inst_48973);
var state_48991__$1 = state_48991;
if(cljs.core.truth_(inst_48978)){
var statearr_48998_49021 = state_48991__$1;
(statearr_48998_49021[(1)] = (8));

} else {
var statearr_48999_49022 = state_48991__$1;
(statearr_48999_49022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48992 === (3))){
var inst_48989 = (state_48991[(2)]);
var state_48991__$1 = state_48991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48991__$1,inst_48989);
} else {
if((state_val_48992 === (2))){
var state_48991__$1 = state_48991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48991__$1,(4),ch);
} else {
if((state_val_48992 === (11))){
var inst_48981 = (state_48991[(2)]);
var state_48991__$1 = state_48991;
var statearr_49000_49023 = state_48991__$1;
(statearr_49000_49023[(2)] = inst_48981);

(statearr_49000_49023[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48992 === (9))){
var state_48991__$1 = state_48991;
var statearr_49001_49024 = state_48991__$1;
(statearr_49001_49024[(2)] = null);

(statearr_49001_49024[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48992 === (5))){
var inst_48976 = cljs.core.async.close_BANG_.call(null,out);
var state_48991__$1 = state_48991;
var statearr_49002_49025 = state_48991__$1;
(statearr_49002_49025[(2)] = inst_48976);

(statearr_49002_49025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48992 === (10))){
var inst_48984 = (state_48991[(2)]);
var state_48991__$1 = (function (){var statearr_49003 = state_48991;
(statearr_49003[(8)] = inst_48984);

return statearr_49003;
})();
var statearr_49004_49026 = state_48991__$1;
(statearr_49004_49026[(2)] = null);

(statearr_49004_49026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48992 === (8))){
var inst_48973 = (state_48991[(7)]);
var state_48991__$1 = state_48991;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48991__$1,(11),out,inst_48973);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__32057__auto___49016,out))
;
return ((function (switch__31943__auto__,c__32057__auto___49016,out){
return (function() {
var cljs$core$async$state_machine__31944__auto__ = null;
var cljs$core$async$state_machine__31944__auto____0 = (function (){
var statearr_49008 = [null,null,null,null,null,null,null,null,null];
(statearr_49008[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_49008[(1)] = (1));

return statearr_49008;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_48991){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_48991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e49009){if((e49009 instanceof Object)){
var ex__31947__auto__ = e49009;
var statearr_49010_49027 = state_48991;
(statearr_49010_49027[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49028 = state_48991;
state_48991 = G__49028;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_48991){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_48991);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto___49016,out))
})();
var state__32059__auto__ = (function (){var statearr_49011 = f__32058__auto__.call(null);
(statearr_49011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto___49016);

return statearr_49011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto___49016,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args49029 = [];
var len__29680__auto___49032 = arguments.length;
var i__29681__auto___49033 = (0);
while(true){
if((i__29681__auto___49033 < len__29680__auto___49032)){
args49029.push((arguments[i__29681__auto___49033]));

var G__49034 = (i__29681__auto___49033 + (1));
i__29681__auto___49033 = G__49034;
continue;
} else {
}
break;
}

var G__49031 = args49029.length;
switch (G__49031) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49029.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32057__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto__){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto__){
return (function (state_49201){
var state_val_49202 = (state_49201[(1)]);
if((state_val_49202 === (7))){
var inst_49197 = (state_49201[(2)]);
var state_49201__$1 = state_49201;
var statearr_49203_49244 = state_49201__$1;
(statearr_49203_49244[(2)] = inst_49197);

(statearr_49203_49244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49202 === (20))){
var inst_49167 = (state_49201[(7)]);
var inst_49178 = (state_49201[(2)]);
var inst_49179 = cljs.core.next.call(null,inst_49167);
var inst_49153 = inst_49179;
var inst_49154 = null;
var inst_49155 = (0);
var inst_49156 = (0);
var state_49201__$1 = (function (){var statearr_49204 = state_49201;
(statearr_49204[(8)] = inst_49153);

(statearr_49204[(9)] = inst_49178);

(statearr_49204[(10)] = inst_49154);

(statearr_49204[(11)] = inst_49155);

(statearr_49204[(12)] = inst_49156);

return statearr_49204;
})();
var statearr_49205_49245 = state_49201__$1;
(statearr_49205_49245[(2)] = null);

(statearr_49205_49245[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49202 === (1))){
var state_49201__$1 = state_49201;
var statearr_49206_49246 = state_49201__$1;
(statearr_49206_49246[(2)] = null);

(statearr_49206_49246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49202 === (4))){
var inst_49142 = (state_49201[(13)]);
var inst_49142__$1 = (state_49201[(2)]);
var inst_49143 = (inst_49142__$1 == null);
var state_49201__$1 = (function (){var statearr_49207 = state_49201;
(statearr_49207[(13)] = inst_49142__$1);

return statearr_49207;
})();
if(cljs.core.truth_(inst_49143)){
var statearr_49208_49247 = state_49201__$1;
(statearr_49208_49247[(1)] = (5));

} else {
var statearr_49209_49248 = state_49201__$1;
(statearr_49209_49248[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49202 === (15))){
var state_49201__$1 = state_49201;
var statearr_49213_49249 = state_49201__$1;
(statearr_49213_49249[(2)] = null);

(statearr_49213_49249[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49202 === (21))){
var state_49201__$1 = state_49201;
var statearr_49214_49250 = state_49201__$1;
(statearr_49214_49250[(2)] = null);

(statearr_49214_49250[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49202 === (13))){
var inst_49153 = (state_49201[(8)]);
var inst_49154 = (state_49201[(10)]);
var inst_49155 = (state_49201[(11)]);
var inst_49156 = (state_49201[(12)]);
var inst_49163 = (state_49201[(2)]);
var inst_49164 = (inst_49156 + (1));
var tmp49210 = inst_49153;
var tmp49211 = inst_49154;
var tmp49212 = inst_49155;
var inst_49153__$1 = tmp49210;
var inst_49154__$1 = tmp49211;
var inst_49155__$1 = tmp49212;
var inst_49156__$1 = inst_49164;
var state_49201__$1 = (function (){var statearr_49215 = state_49201;
(statearr_49215[(8)] = inst_49153__$1);

(statearr_49215[(10)] = inst_49154__$1);

(statearr_49215[(11)] = inst_49155__$1);

(statearr_49215[(14)] = inst_49163);

(statearr_49215[(12)] = inst_49156__$1);

return statearr_49215;
})();
var statearr_49216_49251 = state_49201__$1;
(statearr_49216_49251[(2)] = null);

(statearr_49216_49251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49202 === (22))){
var state_49201__$1 = state_49201;
var statearr_49217_49252 = state_49201__$1;
(statearr_49217_49252[(2)] = null);

(statearr_49217_49252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49202 === (6))){
var inst_49142 = (state_49201[(13)]);
var inst_49151 = f.call(null,inst_49142);
var inst_49152 = cljs.core.seq.call(null,inst_49151);
var inst_49153 = inst_49152;
var inst_49154 = null;
var inst_49155 = (0);
var inst_49156 = (0);
var state_49201__$1 = (function (){var statearr_49218 = state_49201;
(statearr_49218[(8)] = inst_49153);

(statearr_49218[(10)] = inst_49154);

(statearr_49218[(11)] = inst_49155);

(statearr_49218[(12)] = inst_49156);

return statearr_49218;
})();
var statearr_49219_49253 = state_49201__$1;
(statearr_49219_49253[(2)] = null);

(statearr_49219_49253[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49202 === (17))){
var inst_49167 = (state_49201[(7)]);
var inst_49171 = cljs.core.chunk_first.call(null,inst_49167);
var inst_49172 = cljs.core.chunk_rest.call(null,inst_49167);
var inst_49173 = cljs.core.count.call(null,inst_49171);
var inst_49153 = inst_49172;
var inst_49154 = inst_49171;
var inst_49155 = inst_49173;
var inst_49156 = (0);
var state_49201__$1 = (function (){var statearr_49220 = state_49201;
(statearr_49220[(8)] = inst_49153);

(statearr_49220[(10)] = inst_49154);

(statearr_49220[(11)] = inst_49155);

(statearr_49220[(12)] = inst_49156);

return statearr_49220;
})();
var statearr_49221_49254 = state_49201__$1;
(statearr_49221_49254[(2)] = null);

(statearr_49221_49254[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49202 === (3))){
var inst_49199 = (state_49201[(2)]);
var state_49201__$1 = state_49201;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49201__$1,inst_49199);
} else {
if((state_val_49202 === (12))){
var inst_49187 = (state_49201[(2)]);
var state_49201__$1 = state_49201;
var statearr_49222_49255 = state_49201__$1;
(statearr_49222_49255[(2)] = inst_49187);

(statearr_49222_49255[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49202 === (2))){
var state_49201__$1 = state_49201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49201__$1,(4),in$);
} else {
if((state_val_49202 === (23))){
var inst_49195 = (state_49201[(2)]);
var state_49201__$1 = state_49201;
var statearr_49223_49256 = state_49201__$1;
(statearr_49223_49256[(2)] = inst_49195);

(statearr_49223_49256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49202 === (19))){
var inst_49182 = (state_49201[(2)]);
var state_49201__$1 = state_49201;
var statearr_49224_49257 = state_49201__$1;
(statearr_49224_49257[(2)] = inst_49182);

(statearr_49224_49257[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49202 === (11))){
var inst_49167 = (state_49201[(7)]);
var inst_49153 = (state_49201[(8)]);
var inst_49167__$1 = cljs.core.seq.call(null,inst_49153);
var state_49201__$1 = (function (){var statearr_49225 = state_49201;
(statearr_49225[(7)] = inst_49167__$1);

return statearr_49225;
})();
if(inst_49167__$1){
var statearr_49226_49258 = state_49201__$1;
(statearr_49226_49258[(1)] = (14));

} else {
var statearr_49227_49259 = state_49201__$1;
(statearr_49227_49259[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49202 === (9))){
var inst_49189 = (state_49201[(2)]);
var inst_49190 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_49201__$1 = (function (){var statearr_49228 = state_49201;
(statearr_49228[(15)] = inst_49189);

return statearr_49228;
})();
if(cljs.core.truth_(inst_49190)){
var statearr_49229_49260 = state_49201__$1;
(statearr_49229_49260[(1)] = (21));

} else {
var statearr_49230_49261 = state_49201__$1;
(statearr_49230_49261[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49202 === (5))){
var inst_49145 = cljs.core.async.close_BANG_.call(null,out);
var state_49201__$1 = state_49201;
var statearr_49231_49262 = state_49201__$1;
(statearr_49231_49262[(2)] = inst_49145);

(statearr_49231_49262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49202 === (14))){
var inst_49167 = (state_49201[(7)]);
var inst_49169 = cljs.core.chunked_seq_QMARK_.call(null,inst_49167);
var state_49201__$1 = state_49201;
if(inst_49169){
var statearr_49232_49263 = state_49201__$1;
(statearr_49232_49263[(1)] = (17));

} else {
var statearr_49233_49264 = state_49201__$1;
(statearr_49233_49264[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49202 === (16))){
var inst_49185 = (state_49201[(2)]);
var state_49201__$1 = state_49201;
var statearr_49234_49265 = state_49201__$1;
(statearr_49234_49265[(2)] = inst_49185);

(statearr_49234_49265[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49202 === (10))){
var inst_49154 = (state_49201[(10)]);
var inst_49156 = (state_49201[(12)]);
var inst_49161 = cljs.core._nth.call(null,inst_49154,inst_49156);
var state_49201__$1 = state_49201;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49201__$1,(13),out,inst_49161);
} else {
if((state_val_49202 === (18))){
var inst_49167 = (state_49201[(7)]);
var inst_49176 = cljs.core.first.call(null,inst_49167);
var state_49201__$1 = state_49201;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49201__$1,(20),out,inst_49176);
} else {
if((state_val_49202 === (8))){
var inst_49155 = (state_49201[(11)]);
var inst_49156 = (state_49201[(12)]);
var inst_49158 = (inst_49156 < inst_49155);
var inst_49159 = inst_49158;
var state_49201__$1 = state_49201;
if(cljs.core.truth_(inst_49159)){
var statearr_49235_49266 = state_49201__$1;
(statearr_49235_49266[(1)] = (10));

} else {
var statearr_49236_49267 = state_49201__$1;
(statearr_49236_49267[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32057__auto__))
;
return ((function (switch__31943__auto__,c__32057__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31944__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31944__auto____0 = (function (){
var statearr_49240 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49240[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31944__auto__);

(statearr_49240[(1)] = (1));

return statearr_49240;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31944__auto____1 = (function (state_49201){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_49201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e49241){if((e49241 instanceof Object)){
var ex__31947__auto__ = e49241;
var statearr_49242_49268 = state_49201;
(statearr_49242_49268[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49269 = state_49201;
state_49201 = G__49269;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31944__auto__ = function(state_49201){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31944__auto____1.call(this,state_49201);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31944__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31944__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto__))
})();
var state__32059__auto__ = (function (){var statearr_49243 = f__32058__auto__.call(null);
(statearr_49243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto__);

return statearr_49243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto__))
);

return c__32057__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args49270 = [];
var len__29680__auto___49273 = arguments.length;
var i__29681__auto___49274 = (0);
while(true){
if((i__29681__auto___49274 < len__29680__auto___49273)){
args49270.push((arguments[i__29681__auto___49274]));

var G__49275 = (i__29681__auto___49274 + (1));
i__29681__auto___49274 = G__49275;
continue;
} else {
}
break;
}

var G__49272 = args49270.length;
switch (G__49272) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49270.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args49277 = [];
var len__29680__auto___49280 = arguments.length;
var i__29681__auto___49281 = (0);
while(true){
if((i__29681__auto___49281 < len__29680__auto___49280)){
args49277.push((arguments[i__29681__auto___49281]));

var G__49282 = (i__29681__auto___49281 + (1));
i__29681__auto___49281 = G__49282;
continue;
} else {
}
break;
}

var G__49279 = args49277.length;
switch (G__49279) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49277.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args49284 = [];
var len__29680__auto___49335 = arguments.length;
var i__29681__auto___49336 = (0);
while(true){
if((i__29681__auto___49336 < len__29680__auto___49335)){
args49284.push((arguments[i__29681__auto___49336]));

var G__49337 = (i__29681__auto___49336 + (1));
i__29681__auto___49336 = G__49337;
continue;
} else {
}
break;
}

var G__49286 = args49284.length;
switch (G__49286) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49284.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32057__auto___49339 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto___49339,out){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto___49339,out){
return (function (state_49310){
var state_val_49311 = (state_49310[(1)]);
if((state_val_49311 === (7))){
var inst_49305 = (state_49310[(2)]);
var state_49310__$1 = state_49310;
var statearr_49312_49340 = state_49310__$1;
(statearr_49312_49340[(2)] = inst_49305);

(statearr_49312_49340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49311 === (1))){
var inst_49287 = null;
var state_49310__$1 = (function (){var statearr_49313 = state_49310;
(statearr_49313[(7)] = inst_49287);

return statearr_49313;
})();
var statearr_49314_49341 = state_49310__$1;
(statearr_49314_49341[(2)] = null);

(statearr_49314_49341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49311 === (4))){
var inst_49290 = (state_49310[(8)]);
var inst_49290__$1 = (state_49310[(2)]);
var inst_49291 = (inst_49290__$1 == null);
var inst_49292 = cljs.core.not.call(null,inst_49291);
var state_49310__$1 = (function (){var statearr_49315 = state_49310;
(statearr_49315[(8)] = inst_49290__$1);

return statearr_49315;
})();
if(inst_49292){
var statearr_49316_49342 = state_49310__$1;
(statearr_49316_49342[(1)] = (5));

} else {
var statearr_49317_49343 = state_49310__$1;
(statearr_49317_49343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49311 === (6))){
var state_49310__$1 = state_49310;
var statearr_49318_49344 = state_49310__$1;
(statearr_49318_49344[(2)] = null);

(statearr_49318_49344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49311 === (3))){
var inst_49307 = (state_49310[(2)]);
var inst_49308 = cljs.core.async.close_BANG_.call(null,out);
var state_49310__$1 = (function (){var statearr_49319 = state_49310;
(statearr_49319[(9)] = inst_49307);

return statearr_49319;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49310__$1,inst_49308);
} else {
if((state_val_49311 === (2))){
var state_49310__$1 = state_49310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49310__$1,(4),ch);
} else {
if((state_val_49311 === (11))){
var inst_49290 = (state_49310[(8)]);
var inst_49299 = (state_49310[(2)]);
var inst_49287 = inst_49290;
var state_49310__$1 = (function (){var statearr_49320 = state_49310;
(statearr_49320[(7)] = inst_49287);

(statearr_49320[(10)] = inst_49299);

return statearr_49320;
})();
var statearr_49321_49345 = state_49310__$1;
(statearr_49321_49345[(2)] = null);

(statearr_49321_49345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49311 === (9))){
var inst_49290 = (state_49310[(8)]);
var state_49310__$1 = state_49310;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49310__$1,(11),out,inst_49290);
} else {
if((state_val_49311 === (5))){
var inst_49287 = (state_49310[(7)]);
var inst_49290 = (state_49310[(8)]);
var inst_49294 = cljs.core._EQ_.call(null,inst_49290,inst_49287);
var state_49310__$1 = state_49310;
if(inst_49294){
var statearr_49323_49346 = state_49310__$1;
(statearr_49323_49346[(1)] = (8));

} else {
var statearr_49324_49347 = state_49310__$1;
(statearr_49324_49347[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49311 === (10))){
var inst_49302 = (state_49310[(2)]);
var state_49310__$1 = state_49310;
var statearr_49325_49348 = state_49310__$1;
(statearr_49325_49348[(2)] = inst_49302);

(statearr_49325_49348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49311 === (8))){
var inst_49287 = (state_49310[(7)]);
var tmp49322 = inst_49287;
var inst_49287__$1 = tmp49322;
var state_49310__$1 = (function (){var statearr_49326 = state_49310;
(statearr_49326[(7)] = inst_49287__$1);

return statearr_49326;
})();
var statearr_49327_49349 = state_49310__$1;
(statearr_49327_49349[(2)] = null);

(statearr_49327_49349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__32057__auto___49339,out))
;
return ((function (switch__31943__auto__,c__32057__auto___49339,out){
return (function() {
var cljs$core$async$state_machine__31944__auto__ = null;
var cljs$core$async$state_machine__31944__auto____0 = (function (){
var statearr_49331 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49331[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_49331[(1)] = (1));

return statearr_49331;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_49310){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_49310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e49332){if((e49332 instanceof Object)){
var ex__31947__auto__ = e49332;
var statearr_49333_49350 = state_49310;
(statearr_49333_49350[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49351 = state_49310;
state_49310 = G__49351;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_49310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_49310);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto___49339,out))
})();
var state__32059__auto__ = (function (){var statearr_49334 = f__32058__auto__.call(null);
(statearr_49334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto___49339);

return statearr_49334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto___49339,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args49352 = [];
var len__29680__auto___49422 = arguments.length;
var i__29681__auto___49423 = (0);
while(true){
if((i__29681__auto___49423 < len__29680__auto___49422)){
args49352.push((arguments[i__29681__auto___49423]));

var G__49424 = (i__29681__auto___49423 + (1));
i__29681__auto___49423 = G__49424;
continue;
} else {
}
break;
}

var G__49354 = args49352.length;
switch (G__49354) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49352.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32057__auto___49426 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto___49426,out){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto___49426,out){
return (function (state_49392){
var state_val_49393 = (state_49392[(1)]);
if((state_val_49393 === (7))){
var inst_49388 = (state_49392[(2)]);
var state_49392__$1 = state_49392;
var statearr_49394_49427 = state_49392__$1;
(statearr_49394_49427[(2)] = inst_49388);

(statearr_49394_49427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49393 === (1))){
var inst_49355 = (new Array(n));
var inst_49356 = inst_49355;
var inst_49357 = (0);
var state_49392__$1 = (function (){var statearr_49395 = state_49392;
(statearr_49395[(7)] = inst_49356);

(statearr_49395[(8)] = inst_49357);

return statearr_49395;
})();
var statearr_49396_49428 = state_49392__$1;
(statearr_49396_49428[(2)] = null);

(statearr_49396_49428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49393 === (4))){
var inst_49360 = (state_49392[(9)]);
var inst_49360__$1 = (state_49392[(2)]);
var inst_49361 = (inst_49360__$1 == null);
var inst_49362 = cljs.core.not.call(null,inst_49361);
var state_49392__$1 = (function (){var statearr_49397 = state_49392;
(statearr_49397[(9)] = inst_49360__$1);

return statearr_49397;
})();
if(inst_49362){
var statearr_49398_49429 = state_49392__$1;
(statearr_49398_49429[(1)] = (5));

} else {
var statearr_49399_49430 = state_49392__$1;
(statearr_49399_49430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49393 === (15))){
var inst_49382 = (state_49392[(2)]);
var state_49392__$1 = state_49392;
var statearr_49400_49431 = state_49392__$1;
(statearr_49400_49431[(2)] = inst_49382);

(statearr_49400_49431[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49393 === (13))){
var state_49392__$1 = state_49392;
var statearr_49401_49432 = state_49392__$1;
(statearr_49401_49432[(2)] = null);

(statearr_49401_49432[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49393 === (6))){
var inst_49357 = (state_49392[(8)]);
var inst_49378 = (inst_49357 > (0));
var state_49392__$1 = state_49392;
if(cljs.core.truth_(inst_49378)){
var statearr_49402_49433 = state_49392__$1;
(statearr_49402_49433[(1)] = (12));

} else {
var statearr_49403_49434 = state_49392__$1;
(statearr_49403_49434[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49393 === (3))){
var inst_49390 = (state_49392[(2)]);
var state_49392__$1 = state_49392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49392__$1,inst_49390);
} else {
if((state_val_49393 === (12))){
var inst_49356 = (state_49392[(7)]);
var inst_49380 = cljs.core.vec.call(null,inst_49356);
var state_49392__$1 = state_49392;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49392__$1,(15),out,inst_49380);
} else {
if((state_val_49393 === (2))){
var state_49392__$1 = state_49392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49392__$1,(4),ch);
} else {
if((state_val_49393 === (11))){
var inst_49372 = (state_49392[(2)]);
var inst_49373 = (new Array(n));
var inst_49356 = inst_49373;
var inst_49357 = (0);
var state_49392__$1 = (function (){var statearr_49404 = state_49392;
(statearr_49404[(10)] = inst_49372);

(statearr_49404[(7)] = inst_49356);

(statearr_49404[(8)] = inst_49357);

return statearr_49404;
})();
var statearr_49405_49435 = state_49392__$1;
(statearr_49405_49435[(2)] = null);

(statearr_49405_49435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49393 === (9))){
var inst_49356 = (state_49392[(7)]);
var inst_49370 = cljs.core.vec.call(null,inst_49356);
var state_49392__$1 = state_49392;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49392__$1,(11),out,inst_49370);
} else {
if((state_val_49393 === (5))){
var inst_49365 = (state_49392[(11)]);
var inst_49356 = (state_49392[(7)]);
var inst_49357 = (state_49392[(8)]);
var inst_49360 = (state_49392[(9)]);
var inst_49364 = (inst_49356[inst_49357] = inst_49360);
var inst_49365__$1 = (inst_49357 + (1));
var inst_49366 = (inst_49365__$1 < n);
var state_49392__$1 = (function (){var statearr_49406 = state_49392;
(statearr_49406[(11)] = inst_49365__$1);

(statearr_49406[(12)] = inst_49364);

return statearr_49406;
})();
if(cljs.core.truth_(inst_49366)){
var statearr_49407_49436 = state_49392__$1;
(statearr_49407_49436[(1)] = (8));

} else {
var statearr_49408_49437 = state_49392__$1;
(statearr_49408_49437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49393 === (14))){
var inst_49385 = (state_49392[(2)]);
var inst_49386 = cljs.core.async.close_BANG_.call(null,out);
var state_49392__$1 = (function (){var statearr_49410 = state_49392;
(statearr_49410[(13)] = inst_49385);

return statearr_49410;
})();
var statearr_49411_49438 = state_49392__$1;
(statearr_49411_49438[(2)] = inst_49386);

(statearr_49411_49438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49393 === (10))){
var inst_49376 = (state_49392[(2)]);
var state_49392__$1 = state_49392;
var statearr_49412_49439 = state_49392__$1;
(statearr_49412_49439[(2)] = inst_49376);

(statearr_49412_49439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49393 === (8))){
var inst_49365 = (state_49392[(11)]);
var inst_49356 = (state_49392[(7)]);
var tmp49409 = inst_49356;
var inst_49356__$1 = tmp49409;
var inst_49357 = inst_49365;
var state_49392__$1 = (function (){var statearr_49413 = state_49392;
(statearr_49413[(7)] = inst_49356__$1);

(statearr_49413[(8)] = inst_49357);

return statearr_49413;
})();
var statearr_49414_49440 = state_49392__$1;
(statearr_49414_49440[(2)] = null);

(statearr_49414_49440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32057__auto___49426,out))
;
return ((function (switch__31943__auto__,c__32057__auto___49426,out){
return (function() {
var cljs$core$async$state_machine__31944__auto__ = null;
var cljs$core$async$state_machine__31944__auto____0 = (function (){
var statearr_49418 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49418[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_49418[(1)] = (1));

return statearr_49418;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_49392){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_49392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e49419){if((e49419 instanceof Object)){
var ex__31947__auto__ = e49419;
var statearr_49420_49441 = state_49392;
(statearr_49420_49441[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49442 = state_49392;
state_49392 = G__49442;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_49392){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_49392);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto___49426,out))
})();
var state__32059__auto__ = (function (){var statearr_49421 = f__32058__auto__.call(null);
(statearr_49421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto___49426);

return statearr_49421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto___49426,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args49443 = [];
var len__29680__auto___49517 = arguments.length;
var i__29681__auto___49518 = (0);
while(true){
if((i__29681__auto___49518 < len__29680__auto___49517)){
args49443.push((arguments[i__29681__auto___49518]));

var G__49519 = (i__29681__auto___49518 + (1));
i__29681__auto___49518 = G__49519;
continue;
} else {
}
break;
}

var G__49445 = args49443.length;
switch (G__49445) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49443.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32057__auto___49521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto___49521,out){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto___49521,out){
return (function (state_49487){
var state_val_49488 = (state_49487[(1)]);
if((state_val_49488 === (7))){
var inst_49483 = (state_49487[(2)]);
var state_49487__$1 = state_49487;
var statearr_49489_49522 = state_49487__$1;
(statearr_49489_49522[(2)] = inst_49483);

(statearr_49489_49522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49488 === (1))){
var inst_49446 = [];
var inst_49447 = inst_49446;
var inst_49448 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_49487__$1 = (function (){var statearr_49490 = state_49487;
(statearr_49490[(7)] = inst_49448);

(statearr_49490[(8)] = inst_49447);

return statearr_49490;
})();
var statearr_49491_49523 = state_49487__$1;
(statearr_49491_49523[(2)] = null);

(statearr_49491_49523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49488 === (4))){
var inst_49451 = (state_49487[(9)]);
var inst_49451__$1 = (state_49487[(2)]);
var inst_49452 = (inst_49451__$1 == null);
var inst_49453 = cljs.core.not.call(null,inst_49452);
var state_49487__$1 = (function (){var statearr_49492 = state_49487;
(statearr_49492[(9)] = inst_49451__$1);

return statearr_49492;
})();
if(inst_49453){
var statearr_49493_49524 = state_49487__$1;
(statearr_49493_49524[(1)] = (5));

} else {
var statearr_49494_49525 = state_49487__$1;
(statearr_49494_49525[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49488 === (15))){
var inst_49477 = (state_49487[(2)]);
var state_49487__$1 = state_49487;
var statearr_49495_49526 = state_49487__$1;
(statearr_49495_49526[(2)] = inst_49477);

(statearr_49495_49526[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49488 === (13))){
var state_49487__$1 = state_49487;
var statearr_49496_49527 = state_49487__$1;
(statearr_49496_49527[(2)] = null);

(statearr_49496_49527[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49488 === (6))){
var inst_49447 = (state_49487[(8)]);
var inst_49472 = inst_49447.length;
var inst_49473 = (inst_49472 > (0));
var state_49487__$1 = state_49487;
if(cljs.core.truth_(inst_49473)){
var statearr_49497_49528 = state_49487__$1;
(statearr_49497_49528[(1)] = (12));

} else {
var statearr_49498_49529 = state_49487__$1;
(statearr_49498_49529[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49488 === (3))){
var inst_49485 = (state_49487[(2)]);
var state_49487__$1 = state_49487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49487__$1,inst_49485);
} else {
if((state_val_49488 === (12))){
var inst_49447 = (state_49487[(8)]);
var inst_49475 = cljs.core.vec.call(null,inst_49447);
var state_49487__$1 = state_49487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49487__$1,(15),out,inst_49475);
} else {
if((state_val_49488 === (2))){
var state_49487__$1 = state_49487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49487__$1,(4),ch);
} else {
if((state_val_49488 === (11))){
var inst_49451 = (state_49487[(9)]);
var inst_49455 = (state_49487[(10)]);
var inst_49465 = (state_49487[(2)]);
var inst_49466 = [];
var inst_49467 = inst_49466.push(inst_49451);
var inst_49447 = inst_49466;
var inst_49448 = inst_49455;
var state_49487__$1 = (function (){var statearr_49499 = state_49487;
(statearr_49499[(11)] = inst_49465);

(statearr_49499[(7)] = inst_49448);

(statearr_49499[(8)] = inst_49447);

(statearr_49499[(12)] = inst_49467);

return statearr_49499;
})();
var statearr_49500_49530 = state_49487__$1;
(statearr_49500_49530[(2)] = null);

(statearr_49500_49530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49488 === (9))){
var inst_49447 = (state_49487[(8)]);
var inst_49463 = cljs.core.vec.call(null,inst_49447);
var state_49487__$1 = state_49487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49487__$1,(11),out,inst_49463);
} else {
if((state_val_49488 === (5))){
var inst_49448 = (state_49487[(7)]);
var inst_49451 = (state_49487[(9)]);
var inst_49455 = (state_49487[(10)]);
var inst_49455__$1 = f.call(null,inst_49451);
var inst_49456 = cljs.core._EQ_.call(null,inst_49455__$1,inst_49448);
var inst_49457 = cljs.core.keyword_identical_QMARK_.call(null,inst_49448,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_49458 = (inst_49456) || (inst_49457);
var state_49487__$1 = (function (){var statearr_49501 = state_49487;
(statearr_49501[(10)] = inst_49455__$1);

return statearr_49501;
})();
if(cljs.core.truth_(inst_49458)){
var statearr_49502_49531 = state_49487__$1;
(statearr_49502_49531[(1)] = (8));

} else {
var statearr_49503_49532 = state_49487__$1;
(statearr_49503_49532[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49488 === (14))){
var inst_49480 = (state_49487[(2)]);
var inst_49481 = cljs.core.async.close_BANG_.call(null,out);
var state_49487__$1 = (function (){var statearr_49505 = state_49487;
(statearr_49505[(13)] = inst_49480);

return statearr_49505;
})();
var statearr_49506_49533 = state_49487__$1;
(statearr_49506_49533[(2)] = inst_49481);

(statearr_49506_49533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49488 === (10))){
var inst_49470 = (state_49487[(2)]);
var state_49487__$1 = state_49487;
var statearr_49507_49534 = state_49487__$1;
(statearr_49507_49534[(2)] = inst_49470);

(statearr_49507_49534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49488 === (8))){
var inst_49451 = (state_49487[(9)]);
var inst_49447 = (state_49487[(8)]);
var inst_49455 = (state_49487[(10)]);
var inst_49460 = inst_49447.push(inst_49451);
var tmp49504 = inst_49447;
var inst_49447__$1 = tmp49504;
var inst_49448 = inst_49455;
var state_49487__$1 = (function (){var statearr_49508 = state_49487;
(statearr_49508[(7)] = inst_49448);

(statearr_49508[(8)] = inst_49447__$1);

(statearr_49508[(14)] = inst_49460);

return statearr_49508;
})();
var statearr_49509_49535 = state_49487__$1;
(statearr_49509_49535[(2)] = null);

(statearr_49509_49535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32057__auto___49521,out))
;
return ((function (switch__31943__auto__,c__32057__auto___49521,out){
return (function() {
var cljs$core$async$state_machine__31944__auto__ = null;
var cljs$core$async$state_machine__31944__auto____0 = (function (){
var statearr_49513 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49513[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_49513[(1)] = (1));

return statearr_49513;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_49487){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_49487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e49514){if((e49514 instanceof Object)){
var ex__31947__auto__ = e49514;
var statearr_49515_49536 = state_49487;
(statearr_49515_49536[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49537 = state_49487;
state_49487 = G__49537;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_49487){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_49487);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto___49521,out))
})();
var state__32059__auto__ = (function (){var statearr_49516 = f__32058__auto__.call(null);
(statearr_49516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto___49521);

return statearr_49516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto___49521,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1497481553234