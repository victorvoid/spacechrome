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
var args32116 = [];
var len__29680__auto___32122 = arguments.length;
var i__29681__auto___32123 = (0);
while(true){
if((i__29681__auto___32123 < len__29680__auto___32122)){
args32116.push((arguments[i__29681__auto___32123]));

var G__32124 = (i__29681__auto___32123 + (1));
i__29681__auto___32123 = G__32124;
continue;
} else {
}
break;
}

var G__32118 = args32116.length;
switch (G__32118) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32116.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async32119 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32119 = (function (f,blockable,meta32120){
this.f = f;
this.blockable = blockable;
this.meta32120 = meta32120;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32121,meta32120__$1){
var self__ = this;
var _32121__$1 = this;
return (new cljs.core.async.t_cljs$core$async32119(self__.f,self__.blockable,meta32120__$1));
});

cljs.core.async.t_cljs$core$async32119.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32121){
var self__ = this;
var _32121__$1 = this;
return self__.meta32120;
});

cljs.core.async.t_cljs$core$async32119.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32119.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32119.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async32119.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32119.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32120","meta32120",1638625787,null)], null);
});

cljs.core.async.t_cljs$core$async32119.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32119.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32119";

cljs.core.async.t_cljs$core$async32119.cljs$lang$ctorPrWriter = (function (this__29116__auto__,writer__29117__auto__,opt__29118__auto__){
return cljs.core._write.call(null,writer__29117__auto__,"cljs.core.async/t_cljs$core$async32119");
});

cljs.core.async.__GT_t_cljs$core$async32119 = (function cljs$core$async$__GT_t_cljs$core$async32119(f__$1,blockable__$1,meta32120){
return (new cljs.core.async.t_cljs$core$async32119(f__$1,blockable__$1,meta32120));
});

}

return (new cljs.core.async.t_cljs$core$async32119(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args32128 = [];
var len__29680__auto___32131 = arguments.length;
var i__29681__auto___32132 = (0);
while(true){
if((i__29681__auto___32132 < len__29680__auto___32131)){
args32128.push((arguments[i__29681__auto___32132]));

var G__32133 = (i__29681__auto___32132 + (1));
i__29681__auto___32132 = G__32133;
continue;
} else {
}
break;
}

var G__32130 = args32128.length;
switch (G__32130) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32128.length)].join('')));

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
var args32135 = [];
var len__29680__auto___32138 = arguments.length;
var i__29681__auto___32139 = (0);
while(true){
if((i__29681__auto___32139 < len__29680__auto___32138)){
args32135.push((arguments[i__29681__auto___32139]));

var G__32140 = (i__29681__auto___32139 + (1));
i__29681__auto___32139 = G__32140;
continue;
} else {
}
break;
}

var G__32137 = args32135.length;
switch (G__32137) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32135.length)].join('')));

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
var args32142 = [];
var len__29680__auto___32145 = arguments.length;
var i__29681__auto___32146 = (0);
while(true){
if((i__29681__auto___32146 < len__29680__auto___32145)){
args32142.push((arguments[i__29681__auto___32146]));

var G__32147 = (i__29681__auto___32146 + (1));
i__29681__auto___32146 = G__32147;
continue;
} else {
}
break;
}

var G__32144 = args32142.length;
switch (G__32144) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32142.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_32149 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32149);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32149,ret){
return (function (){
return fn1.call(null,val_32149);
});})(val_32149,ret))
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
var args32150 = [];
var len__29680__auto___32153 = arguments.length;
var i__29681__auto___32154 = (0);
while(true){
if((i__29681__auto___32154 < len__29680__auto___32153)){
args32150.push((arguments[i__29681__auto___32154]));

var G__32155 = (i__29681__auto___32154 + (1));
i__29681__auto___32154 = G__32155;
continue;
} else {
}
break;
}

var G__32152 = args32150.length;
switch (G__32152) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32150.length)].join('')));

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
var n__29480__auto___32157 = n;
var x_32158 = (0);
while(true){
if((x_32158 < n__29480__auto___32157)){
(a[x_32158] = (0));

var G__32159 = (x_32158 + (1));
x_32158 = G__32159;
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

var G__32160 = (i + (1));
i = G__32160;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async32164 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32164 = (function (flag,meta32165){
this.flag = flag;
this.meta32165 = meta32165;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32166,meta32165__$1){
var self__ = this;
var _32166__$1 = this;
return (new cljs.core.async.t_cljs$core$async32164(self__.flag,meta32165__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32164.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32166){
var self__ = this;
var _32166__$1 = this;
return self__.meta32165;
});})(flag))
;

cljs.core.async.t_cljs$core$async32164.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32164.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32164.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32164.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32164.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32165","meta32165",2120226702,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32164.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32164.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32164";

cljs.core.async.t_cljs$core$async32164.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__29116__auto__,writer__29117__auto__,opt__29118__auto__){
return cljs.core._write.call(null,writer__29117__auto__,"cljs.core.async/t_cljs$core$async32164");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async32164 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32164(flag__$1,meta32165){
return (new cljs.core.async.t_cljs$core$async32164(flag__$1,meta32165));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32164(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async32170 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32170 = (function (flag,cb,meta32171){
this.flag = flag;
this.cb = cb;
this.meta32171 = meta32171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32172,meta32171__$1){
var self__ = this;
var _32172__$1 = this;
return (new cljs.core.async.t_cljs$core$async32170(self__.flag,self__.cb,meta32171__$1));
});

cljs.core.async.t_cljs$core$async32170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32172){
var self__ = this;
var _32172__$1 = this;
return self__.meta32171;
});

cljs.core.async.t_cljs$core$async32170.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32170.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32170.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32170.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32171","meta32171",-2081140524,null)], null);
});

cljs.core.async.t_cljs$core$async32170.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32170.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32170";

cljs.core.async.t_cljs$core$async32170.cljs$lang$ctorPrWriter = (function (this__29116__auto__,writer__29117__auto__,opt__29118__auto__){
return cljs.core._write.call(null,writer__29117__auto__,"cljs.core.async/t_cljs$core$async32170");
});

cljs.core.async.__GT_t_cljs$core$async32170 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32170(flag__$1,cb__$1,meta32171){
return (new cljs.core.async.t_cljs$core$async32170(flag__$1,cb__$1,meta32171));
});

}

return (new cljs.core.async.t_cljs$core$async32170(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__32173_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32173_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32174_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32174_SHARP_,port], null));
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
var G__32175 = (i + (1));
i = G__32175;
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
var len__29680__auto___32181 = arguments.length;
var i__29681__auto___32182 = (0);
while(true){
if((i__29681__auto___32182 < len__29680__auto___32181)){
args__29687__auto__.push((arguments[i__29681__auto___32182]));

var G__32183 = (i__29681__auto___32182 + (1));
i__29681__auto___32182 = G__32183;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((1) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29688__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32178){
var map__32179 = p__32178;
var map__32179__$1 = ((((!((map__32179 == null)))?((((map__32179.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32179.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32179):map__32179);
var opts = map__32179__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32176){
var G__32177 = cljs.core.first.call(null,seq32176);
var seq32176__$1 = cljs.core.next.call(null,seq32176);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32177,seq32176__$1);
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
var args32184 = [];
var len__29680__auto___32234 = arguments.length;
var i__29681__auto___32235 = (0);
while(true){
if((i__29681__auto___32235 < len__29680__auto___32234)){
args32184.push((arguments[i__29681__auto___32235]));

var G__32236 = (i__29681__auto___32235 + (1));
i__29681__auto___32235 = G__32236;
continue;
} else {
}
break;
}

var G__32186 = args32184.length;
switch (G__32186) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32184.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32057__auto___32238 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto___32238){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto___32238){
return (function (state_32210){
var state_val_32211 = (state_32210[(1)]);
if((state_val_32211 === (7))){
var inst_32206 = (state_32210[(2)]);
var state_32210__$1 = state_32210;
var statearr_32212_32239 = state_32210__$1;
(statearr_32212_32239[(2)] = inst_32206);

(statearr_32212_32239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32211 === (1))){
var state_32210__$1 = state_32210;
var statearr_32213_32240 = state_32210__$1;
(statearr_32213_32240[(2)] = null);

(statearr_32213_32240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32211 === (4))){
var inst_32189 = (state_32210[(7)]);
var inst_32189__$1 = (state_32210[(2)]);
var inst_32190 = (inst_32189__$1 == null);
var state_32210__$1 = (function (){var statearr_32214 = state_32210;
(statearr_32214[(7)] = inst_32189__$1);

return statearr_32214;
})();
if(cljs.core.truth_(inst_32190)){
var statearr_32215_32241 = state_32210__$1;
(statearr_32215_32241[(1)] = (5));

} else {
var statearr_32216_32242 = state_32210__$1;
(statearr_32216_32242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32211 === (13))){
var state_32210__$1 = state_32210;
var statearr_32217_32243 = state_32210__$1;
(statearr_32217_32243[(2)] = null);

(statearr_32217_32243[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32211 === (6))){
var inst_32189 = (state_32210[(7)]);
var state_32210__$1 = state_32210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32210__$1,(11),to,inst_32189);
} else {
if((state_val_32211 === (3))){
var inst_32208 = (state_32210[(2)]);
var state_32210__$1 = state_32210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32210__$1,inst_32208);
} else {
if((state_val_32211 === (12))){
var state_32210__$1 = state_32210;
var statearr_32218_32244 = state_32210__$1;
(statearr_32218_32244[(2)] = null);

(statearr_32218_32244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32211 === (2))){
var state_32210__$1 = state_32210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32210__$1,(4),from);
} else {
if((state_val_32211 === (11))){
var inst_32199 = (state_32210[(2)]);
var state_32210__$1 = state_32210;
if(cljs.core.truth_(inst_32199)){
var statearr_32219_32245 = state_32210__$1;
(statearr_32219_32245[(1)] = (12));

} else {
var statearr_32220_32246 = state_32210__$1;
(statearr_32220_32246[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32211 === (9))){
var state_32210__$1 = state_32210;
var statearr_32221_32247 = state_32210__$1;
(statearr_32221_32247[(2)] = null);

(statearr_32221_32247[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32211 === (5))){
var state_32210__$1 = state_32210;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32222_32248 = state_32210__$1;
(statearr_32222_32248[(1)] = (8));

} else {
var statearr_32223_32249 = state_32210__$1;
(statearr_32223_32249[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32211 === (14))){
var inst_32204 = (state_32210[(2)]);
var state_32210__$1 = state_32210;
var statearr_32224_32250 = state_32210__$1;
(statearr_32224_32250[(2)] = inst_32204);

(statearr_32224_32250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32211 === (10))){
var inst_32196 = (state_32210[(2)]);
var state_32210__$1 = state_32210;
var statearr_32225_32251 = state_32210__$1;
(statearr_32225_32251[(2)] = inst_32196);

(statearr_32225_32251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32211 === (8))){
var inst_32193 = cljs.core.async.close_BANG_.call(null,to);
var state_32210__$1 = state_32210;
var statearr_32226_32252 = state_32210__$1;
(statearr_32226_32252[(2)] = inst_32193);

(statearr_32226_32252[(1)] = (10));


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
});})(c__32057__auto___32238))
;
return ((function (switch__31943__auto__,c__32057__auto___32238){
return (function() {
var cljs$core$async$state_machine__31944__auto__ = null;
var cljs$core$async$state_machine__31944__auto____0 = (function (){
var statearr_32230 = [null,null,null,null,null,null,null,null];
(statearr_32230[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_32230[(1)] = (1));

return statearr_32230;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_32210){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_32210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e32231){if((e32231 instanceof Object)){
var ex__31947__auto__ = e32231;
var statearr_32232_32253 = state_32210;
(statearr_32232_32253[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32254 = state_32210;
state_32210 = G__32254;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_32210){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_32210);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto___32238))
})();
var state__32059__auto__ = (function (){var statearr_32233 = f__32058__auto__.call(null);
(statearr_32233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto___32238);

return statearr_32233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto___32238))
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
return (function (p__32442){
var vec__32443 = p__32442;
var v = cljs.core.nth.call(null,vec__32443,(0),null);
var p = cljs.core.nth.call(null,vec__32443,(1),null);
var job = vec__32443;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32057__auto___32629 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto___32629,res,vec__32443,v,p,job,jobs,results){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto___32629,res,vec__32443,v,p,job,jobs,results){
return (function (state_32450){
var state_val_32451 = (state_32450[(1)]);
if((state_val_32451 === (1))){
var state_32450__$1 = state_32450;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32450__$1,(2),res,v);
} else {
if((state_val_32451 === (2))){
var inst_32447 = (state_32450[(2)]);
var inst_32448 = cljs.core.async.close_BANG_.call(null,res);
var state_32450__$1 = (function (){var statearr_32452 = state_32450;
(statearr_32452[(7)] = inst_32447);

return statearr_32452;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32450__$1,inst_32448);
} else {
return null;
}
}
});})(c__32057__auto___32629,res,vec__32443,v,p,job,jobs,results))
;
return ((function (switch__31943__auto__,c__32057__auto___32629,res,vec__32443,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0 = (function (){
var statearr_32456 = [null,null,null,null,null,null,null,null];
(statearr_32456[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__);

(statearr_32456[(1)] = (1));

return statearr_32456;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1 = (function (state_32450){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_32450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e32457){if((e32457 instanceof Object)){
var ex__31947__auto__ = e32457;
var statearr_32458_32630 = state_32450;
(statearr_32458_32630[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32631 = state_32450;
state_32450 = G__32631;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__ = function(state_32450){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1.call(this,state_32450);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto___32629,res,vec__32443,v,p,job,jobs,results))
})();
var state__32059__auto__ = (function (){var statearr_32459 = f__32058__auto__.call(null);
(statearr_32459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto___32629);

return statearr_32459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto___32629,res,vec__32443,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32460){
var vec__32461 = p__32460;
var v = cljs.core.nth.call(null,vec__32461,(0),null);
var p = cljs.core.nth.call(null,vec__32461,(1),null);
var job = vec__32461;
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
var n__29480__auto___32632 = n;
var __32633 = (0);
while(true){
if((__32633 < n__29480__auto___32632)){
var G__32464_32634 = type;
var G__32464_32635__$1 = (((G__32464_32634 instanceof cljs.core.Keyword))?G__32464_32634.fqn:null);
switch (G__32464_32635__$1) {
case "compute":
var c__32057__auto___32637 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32633,c__32057__auto___32637,G__32464_32634,G__32464_32635__$1,n__29480__auto___32632,jobs,results,process,async){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (__32633,c__32057__auto___32637,G__32464_32634,G__32464_32635__$1,n__29480__auto___32632,jobs,results,process,async){
return (function (state_32477){
var state_val_32478 = (state_32477[(1)]);
if((state_val_32478 === (1))){
var state_32477__$1 = state_32477;
var statearr_32479_32638 = state_32477__$1;
(statearr_32479_32638[(2)] = null);

(statearr_32479_32638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (2))){
var state_32477__$1 = state_32477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32477__$1,(4),jobs);
} else {
if((state_val_32478 === (3))){
var inst_32475 = (state_32477[(2)]);
var state_32477__$1 = state_32477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32477__$1,inst_32475);
} else {
if((state_val_32478 === (4))){
var inst_32467 = (state_32477[(2)]);
var inst_32468 = process.call(null,inst_32467);
var state_32477__$1 = state_32477;
if(cljs.core.truth_(inst_32468)){
var statearr_32480_32639 = state_32477__$1;
(statearr_32480_32639[(1)] = (5));

} else {
var statearr_32481_32640 = state_32477__$1;
(statearr_32481_32640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (5))){
var state_32477__$1 = state_32477;
var statearr_32482_32641 = state_32477__$1;
(statearr_32482_32641[(2)] = null);

(statearr_32482_32641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (6))){
var state_32477__$1 = state_32477;
var statearr_32483_32642 = state_32477__$1;
(statearr_32483_32642[(2)] = null);

(statearr_32483_32642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (7))){
var inst_32473 = (state_32477[(2)]);
var state_32477__$1 = state_32477;
var statearr_32484_32643 = state_32477__$1;
(statearr_32484_32643[(2)] = inst_32473);

(statearr_32484_32643[(1)] = (3));


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
});})(__32633,c__32057__auto___32637,G__32464_32634,G__32464_32635__$1,n__29480__auto___32632,jobs,results,process,async))
;
return ((function (__32633,switch__31943__auto__,c__32057__auto___32637,G__32464_32634,G__32464_32635__$1,n__29480__auto___32632,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0 = (function (){
var statearr_32488 = [null,null,null,null,null,null,null];
(statearr_32488[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__);

(statearr_32488[(1)] = (1));

return statearr_32488;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1 = (function (state_32477){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_32477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e32489){if((e32489 instanceof Object)){
var ex__31947__auto__ = e32489;
var statearr_32490_32644 = state_32477;
(statearr_32490_32644[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32645 = state_32477;
state_32477 = G__32645;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__ = function(state_32477){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1.call(this,state_32477);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__;
})()
;})(__32633,switch__31943__auto__,c__32057__auto___32637,G__32464_32634,G__32464_32635__$1,n__29480__auto___32632,jobs,results,process,async))
})();
var state__32059__auto__ = (function (){var statearr_32491 = f__32058__auto__.call(null);
(statearr_32491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto___32637);

return statearr_32491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(__32633,c__32057__auto___32637,G__32464_32634,G__32464_32635__$1,n__29480__auto___32632,jobs,results,process,async))
);


break;
case "async":
var c__32057__auto___32646 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32633,c__32057__auto___32646,G__32464_32634,G__32464_32635__$1,n__29480__auto___32632,jobs,results,process,async){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (__32633,c__32057__auto___32646,G__32464_32634,G__32464_32635__$1,n__29480__auto___32632,jobs,results,process,async){
return (function (state_32504){
var state_val_32505 = (state_32504[(1)]);
if((state_val_32505 === (1))){
var state_32504__$1 = state_32504;
var statearr_32506_32647 = state_32504__$1;
(statearr_32506_32647[(2)] = null);

(statearr_32506_32647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32505 === (2))){
var state_32504__$1 = state_32504;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32504__$1,(4),jobs);
} else {
if((state_val_32505 === (3))){
var inst_32502 = (state_32504[(2)]);
var state_32504__$1 = state_32504;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32504__$1,inst_32502);
} else {
if((state_val_32505 === (4))){
var inst_32494 = (state_32504[(2)]);
var inst_32495 = async.call(null,inst_32494);
var state_32504__$1 = state_32504;
if(cljs.core.truth_(inst_32495)){
var statearr_32507_32648 = state_32504__$1;
(statearr_32507_32648[(1)] = (5));

} else {
var statearr_32508_32649 = state_32504__$1;
(statearr_32508_32649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32505 === (5))){
var state_32504__$1 = state_32504;
var statearr_32509_32650 = state_32504__$1;
(statearr_32509_32650[(2)] = null);

(statearr_32509_32650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32505 === (6))){
var state_32504__$1 = state_32504;
var statearr_32510_32651 = state_32504__$1;
(statearr_32510_32651[(2)] = null);

(statearr_32510_32651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32505 === (7))){
var inst_32500 = (state_32504[(2)]);
var state_32504__$1 = state_32504;
var statearr_32511_32652 = state_32504__$1;
(statearr_32511_32652[(2)] = inst_32500);

(statearr_32511_32652[(1)] = (3));


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
});})(__32633,c__32057__auto___32646,G__32464_32634,G__32464_32635__$1,n__29480__auto___32632,jobs,results,process,async))
;
return ((function (__32633,switch__31943__auto__,c__32057__auto___32646,G__32464_32634,G__32464_32635__$1,n__29480__auto___32632,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0 = (function (){
var statearr_32515 = [null,null,null,null,null,null,null];
(statearr_32515[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__);

(statearr_32515[(1)] = (1));

return statearr_32515;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1 = (function (state_32504){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_32504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e32516){if((e32516 instanceof Object)){
var ex__31947__auto__ = e32516;
var statearr_32517_32653 = state_32504;
(statearr_32517_32653[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32654 = state_32504;
state_32504 = G__32654;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__ = function(state_32504){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1.call(this,state_32504);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__;
})()
;})(__32633,switch__31943__auto__,c__32057__auto___32646,G__32464_32634,G__32464_32635__$1,n__29480__auto___32632,jobs,results,process,async))
})();
var state__32059__auto__ = (function (){var statearr_32518 = f__32058__auto__.call(null);
(statearr_32518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto___32646);

return statearr_32518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(__32633,c__32057__auto___32646,G__32464_32634,G__32464_32635__$1,n__29480__auto___32632,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32464_32635__$1)].join('')));

}

var G__32655 = (__32633 + (1));
__32633 = G__32655;
continue;
} else {
}
break;
}

var c__32057__auto___32656 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto___32656,jobs,results,process,async){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto___32656,jobs,results,process,async){
return (function (state_32540){
var state_val_32541 = (state_32540[(1)]);
if((state_val_32541 === (1))){
var state_32540__$1 = state_32540;
var statearr_32542_32657 = state_32540__$1;
(statearr_32542_32657[(2)] = null);

(statearr_32542_32657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32541 === (2))){
var state_32540__$1 = state_32540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32540__$1,(4),from);
} else {
if((state_val_32541 === (3))){
var inst_32538 = (state_32540[(2)]);
var state_32540__$1 = state_32540;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32540__$1,inst_32538);
} else {
if((state_val_32541 === (4))){
var inst_32521 = (state_32540[(7)]);
var inst_32521__$1 = (state_32540[(2)]);
var inst_32522 = (inst_32521__$1 == null);
var state_32540__$1 = (function (){var statearr_32543 = state_32540;
(statearr_32543[(7)] = inst_32521__$1);

return statearr_32543;
})();
if(cljs.core.truth_(inst_32522)){
var statearr_32544_32658 = state_32540__$1;
(statearr_32544_32658[(1)] = (5));

} else {
var statearr_32545_32659 = state_32540__$1;
(statearr_32545_32659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32541 === (5))){
var inst_32524 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32540__$1 = state_32540;
var statearr_32546_32660 = state_32540__$1;
(statearr_32546_32660[(2)] = inst_32524);

(statearr_32546_32660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32541 === (6))){
var inst_32526 = (state_32540[(8)]);
var inst_32521 = (state_32540[(7)]);
var inst_32526__$1 = cljs.core.async.chan.call(null,(1));
var inst_32527 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32528 = [inst_32521,inst_32526__$1];
var inst_32529 = (new cljs.core.PersistentVector(null,2,(5),inst_32527,inst_32528,null));
var state_32540__$1 = (function (){var statearr_32547 = state_32540;
(statearr_32547[(8)] = inst_32526__$1);

return statearr_32547;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32540__$1,(8),jobs,inst_32529);
} else {
if((state_val_32541 === (7))){
var inst_32536 = (state_32540[(2)]);
var state_32540__$1 = state_32540;
var statearr_32548_32661 = state_32540__$1;
(statearr_32548_32661[(2)] = inst_32536);

(statearr_32548_32661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32541 === (8))){
var inst_32526 = (state_32540[(8)]);
var inst_32531 = (state_32540[(2)]);
var state_32540__$1 = (function (){var statearr_32549 = state_32540;
(statearr_32549[(9)] = inst_32531);

return statearr_32549;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32540__$1,(9),results,inst_32526);
} else {
if((state_val_32541 === (9))){
var inst_32533 = (state_32540[(2)]);
var state_32540__$1 = (function (){var statearr_32550 = state_32540;
(statearr_32550[(10)] = inst_32533);

return statearr_32550;
})();
var statearr_32551_32662 = state_32540__$1;
(statearr_32551_32662[(2)] = null);

(statearr_32551_32662[(1)] = (2));


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
});})(c__32057__auto___32656,jobs,results,process,async))
;
return ((function (switch__31943__auto__,c__32057__auto___32656,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0 = (function (){
var statearr_32555 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32555[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__);

(statearr_32555[(1)] = (1));

return statearr_32555;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1 = (function (state_32540){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_32540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e32556){if((e32556 instanceof Object)){
var ex__31947__auto__ = e32556;
var statearr_32557_32663 = state_32540;
(statearr_32557_32663[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32664 = state_32540;
state_32540 = G__32664;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__ = function(state_32540){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1.call(this,state_32540);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto___32656,jobs,results,process,async))
})();
var state__32059__auto__ = (function (){var statearr_32558 = f__32058__auto__.call(null);
(statearr_32558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto___32656);

return statearr_32558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto___32656,jobs,results,process,async))
);


var c__32057__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto__,jobs,results,process,async){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto__,jobs,results,process,async){
return (function (state_32596){
var state_val_32597 = (state_32596[(1)]);
if((state_val_32597 === (7))){
var inst_32592 = (state_32596[(2)]);
var state_32596__$1 = state_32596;
var statearr_32598_32665 = state_32596__$1;
(statearr_32598_32665[(2)] = inst_32592);

(statearr_32598_32665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (20))){
var state_32596__$1 = state_32596;
var statearr_32599_32666 = state_32596__$1;
(statearr_32599_32666[(2)] = null);

(statearr_32599_32666[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (1))){
var state_32596__$1 = state_32596;
var statearr_32600_32667 = state_32596__$1;
(statearr_32600_32667[(2)] = null);

(statearr_32600_32667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (4))){
var inst_32561 = (state_32596[(7)]);
var inst_32561__$1 = (state_32596[(2)]);
var inst_32562 = (inst_32561__$1 == null);
var state_32596__$1 = (function (){var statearr_32601 = state_32596;
(statearr_32601[(7)] = inst_32561__$1);

return statearr_32601;
})();
if(cljs.core.truth_(inst_32562)){
var statearr_32602_32668 = state_32596__$1;
(statearr_32602_32668[(1)] = (5));

} else {
var statearr_32603_32669 = state_32596__$1;
(statearr_32603_32669[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (15))){
var inst_32574 = (state_32596[(8)]);
var state_32596__$1 = state_32596;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32596__$1,(18),to,inst_32574);
} else {
if((state_val_32597 === (21))){
var inst_32587 = (state_32596[(2)]);
var state_32596__$1 = state_32596;
var statearr_32604_32670 = state_32596__$1;
(statearr_32604_32670[(2)] = inst_32587);

(statearr_32604_32670[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (13))){
var inst_32589 = (state_32596[(2)]);
var state_32596__$1 = (function (){var statearr_32605 = state_32596;
(statearr_32605[(9)] = inst_32589);

return statearr_32605;
})();
var statearr_32606_32671 = state_32596__$1;
(statearr_32606_32671[(2)] = null);

(statearr_32606_32671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (6))){
var inst_32561 = (state_32596[(7)]);
var state_32596__$1 = state_32596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32596__$1,(11),inst_32561);
} else {
if((state_val_32597 === (17))){
var inst_32582 = (state_32596[(2)]);
var state_32596__$1 = state_32596;
if(cljs.core.truth_(inst_32582)){
var statearr_32607_32672 = state_32596__$1;
(statearr_32607_32672[(1)] = (19));

} else {
var statearr_32608_32673 = state_32596__$1;
(statearr_32608_32673[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (3))){
var inst_32594 = (state_32596[(2)]);
var state_32596__$1 = state_32596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32596__$1,inst_32594);
} else {
if((state_val_32597 === (12))){
var inst_32571 = (state_32596[(10)]);
var state_32596__$1 = state_32596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32596__$1,(14),inst_32571);
} else {
if((state_val_32597 === (2))){
var state_32596__$1 = state_32596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32596__$1,(4),results);
} else {
if((state_val_32597 === (19))){
var state_32596__$1 = state_32596;
var statearr_32609_32674 = state_32596__$1;
(statearr_32609_32674[(2)] = null);

(statearr_32609_32674[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (11))){
var inst_32571 = (state_32596[(2)]);
var state_32596__$1 = (function (){var statearr_32610 = state_32596;
(statearr_32610[(10)] = inst_32571);

return statearr_32610;
})();
var statearr_32611_32675 = state_32596__$1;
(statearr_32611_32675[(2)] = null);

(statearr_32611_32675[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (9))){
var state_32596__$1 = state_32596;
var statearr_32612_32676 = state_32596__$1;
(statearr_32612_32676[(2)] = null);

(statearr_32612_32676[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (5))){
var state_32596__$1 = state_32596;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32613_32677 = state_32596__$1;
(statearr_32613_32677[(1)] = (8));

} else {
var statearr_32614_32678 = state_32596__$1;
(statearr_32614_32678[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (14))){
var inst_32574 = (state_32596[(8)]);
var inst_32576 = (state_32596[(11)]);
var inst_32574__$1 = (state_32596[(2)]);
var inst_32575 = (inst_32574__$1 == null);
var inst_32576__$1 = cljs.core.not.call(null,inst_32575);
var state_32596__$1 = (function (){var statearr_32615 = state_32596;
(statearr_32615[(8)] = inst_32574__$1);

(statearr_32615[(11)] = inst_32576__$1);

return statearr_32615;
})();
if(inst_32576__$1){
var statearr_32616_32679 = state_32596__$1;
(statearr_32616_32679[(1)] = (15));

} else {
var statearr_32617_32680 = state_32596__$1;
(statearr_32617_32680[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (16))){
var inst_32576 = (state_32596[(11)]);
var state_32596__$1 = state_32596;
var statearr_32618_32681 = state_32596__$1;
(statearr_32618_32681[(2)] = inst_32576);

(statearr_32618_32681[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (10))){
var inst_32568 = (state_32596[(2)]);
var state_32596__$1 = state_32596;
var statearr_32619_32682 = state_32596__$1;
(statearr_32619_32682[(2)] = inst_32568);

(statearr_32619_32682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (18))){
var inst_32579 = (state_32596[(2)]);
var state_32596__$1 = state_32596;
var statearr_32620_32683 = state_32596__$1;
(statearr_32620_32683[(2)] = inst_32579);

(statearr_32620_32683[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32597 === (8))){
var inst_32565 = cljs.core.async.close_BANG_.call(null,to);
var state_32596__$1 = state_32596;
var statearr_32621_32684 = state_32596__$1;
(statearr_32621_32684[(2)] = inst_32565);

(statearr_32621_32684[(1)] = (10));


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
var statearr_32625 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32625[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__);

(statearr_32625[(1)] = (1));

return statearr_32625;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1 = (function (state_32596){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_32596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e32626){if((e32626 instanceof Object)){
var ex__31947__auto__ = e32626;
var statearr_32627_32685 = state_32596;
(statearr_32627_32685[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32686 = state_32596;
state_32596 = G__32686;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__ = function(state_32596){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1.call(this,state_32596);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31944__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto__,jobs,results,process,async))
})();
var state__32059__auto__ = (function (){var statearr_32628 = f__32058__auto__.call(null);
(statearr_32628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto__);

return statearr_32628;
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
var args32687 = [];
var len__29680__auto___32690 = arguments.length;
var i__29681__auto___32691 = (0);
while(true){
if((i__29681__auto___32691 < len__29680__auto___32690)){
args32687.push((arguments[i__29681__auto___32691]));

var G__32692 = (i__29681__auto___32691 + (1));
i__29681__auto___32691 = G__32692;
continue;
} else {
}
break;
}

var G__32689 = args32687.length;
switch (G__32689) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32687.length)].join('')));

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
var args32694 = [];
var len__29680__auto___32697 = arguments.length;
var i__29681__auto___32698 = (0);
while(true){
if((i__29681__auto___32698 < len__29680__auto___32697)){
args32694.push((arguments[i__29681__auto___32698]));

var G__32699 = (i__29681__auto___32698 + (1));
i__29681__auto___32698 = G__32699;
continue;
} else {
}
break;
}

var G__32696 = args32694.length;
switch (G__32696) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32694.length)].join('')));

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
var args32701 = [];
var len__29680__auto___32754 = arguments.length;
var i__29681__auto___32755 = (0);
while(true){
if((i__29681__auto___32755 < len__29680__auto___32754)){
args32701.push((arguments[i__29681__auto___32755]));

var G__32756 = (i__29681__auto___32755 + (1));
i__29681__auto___32755 = G__32756;
continue;
} else {
}
break;
}

var G__32703 = args32701.length;
switch (G__32703) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32701.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__32057__auto___32758 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto___32758,tc,fc){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto___32758,tc,fc){
return (function (state_32729){
var state_val_32730 = (state_32729[(1)]);
if((state_val_32730 === (7))){
var inst_32725 = (state_32729[(2)]);
var state_32729__$1 = state_32729;
var statearr_32731_32759 = state_32729__$1;
(statearr_32731_32759[(2)] = inst_32725);

(statearr_32731_32759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32730 === (1))){
var state_32729__$1 = state_32729;
var statearr_32732_32760 = state_32729__$1;
(statearr_32732_32760[(2)] = null);

(statearr_32732_32760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32730 === (4))){
var inst_32706 = (state_32729[(7)]);
var inst_32706__$1 = (state_32729[(2)]);
var inst_32707 = (inst_32706__$1 == null);
var state_32729__$1 = (function (){var statearr_32733 = state_32729;
(statearr_32733[(7)] = inst_32706__$1);

return statearr_32733;
})();
if(cljs.core.truth_(inst_32707)){
var statearr_32734_32761 = state_32729__$1;
(statearr_32734_32761[(1)] = (5));

} else {
var statearr_32735_32762 = state_32729__$1;
(statearr_32735_32762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32730 === (13))){
var state_32729__$1 = state_32729;
var statearr_32736_32763 = state_32729__$1;
(statearr_32736_32763[(2)] = null);

(statearr_32736_32763[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32730 === (6))){
var inst_32706 = (state_32729[(7)]);
var inst_32712 = p.call(null,inst_32706);
var state_32729__$1 = state_32729;
if(cljs.core.truth_(inst_32712)){
var statearr_32737_32764 = state_32729__$1;
(statearr_32737_32764[(1)] = (9));

} else {
var statearr_32738_32765 = state_32729__$1;
(statearr_32738_32765[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32730 === (3))){
var inst_32727 = (state_32729[(2)]);
var state_32729__$1 = state_32729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32729__$1,inst_32727);
} else {
if((state_val_32730 === (12))){
var state_32729__$1 = state_32729;
var statearr_32739_32766 = state_32729__$1;
(statearr_32739_32766[(2)] = null);

(statearr_32739_32766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32730 === (2))){
var state_32729__$1 = state_32729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32729__$1,(4),ch);
} else {
if((state_val_32730 === (11))){
var inst_32706 = (state_32729[(7)]);
var inst_32716 = (state_32729[(2)]);
var state_32729__$1 = state_32729;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32729__$1,(8),inst_32716,inst_32706);
} else {
if((state_val_32730 === (9))){
var state_32729__$1 = state_32729;
var statearr_32740_32767 = state_32729__$1;
(statearr_32740_32767[(2)] = tc);

(statearr_32740_32767[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32730 === (5))){
var inst_32709 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32710 = cljs.core.async.close_BANG_.call(null,fc);
var state_32729__$1 = (function (){var statearr_32741 = state_32729;
(statearr_32741[(8)] = inst_32709);

return statearr_32741;
})();
var statearr_32742_32768 = state_32729__$1;
(statearr_32742_32768[(2)] = inst_32710);

(statearr_32742_32768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32730 === (14))){
var inst_32723 = (state_32729[(2)]);
var state_32729__$1 = state_32729;
var statearr_32743_32769 = state_32729__$1;
(statearr_32743_32769[(2)] = inst_32723);

(statearr_32743_32769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32730 === (10))){
var state_32729__$1 = state_32729;
var statearr_32744_32770 = state_32729__$1;
(statearr_32744_32770[(2)] = fc);

(statearr_32744_32770[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32730 === (8))){
var inst_32718 = (state_32729[(2)]);
var state_32729__$1 = state_32729;
if(cljs.core.truth_(inst_32718)){
var statearr_32745_32771 = state_32729__$1;
(statearr_32745_32771[(1)] = (12));

} else {
var statearr_32746_32772 = state_32729__$1;
(statearr_32746_32772[(1)] = (13));

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
});})(c__32057__auto___32758,tc,fc))
;
return ((function (switch__31943__auto__,c__32057__auto___32758,tc,fc){
return (function() {
var cljs$core$async$state_machine__31944__auto__ = null;
var cljs$core$async$state_machine__31944__auto____0 = (function (){
var statearr_32750 = [null,null,null,null,null,null,null,null,null];
(statearr_32750[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_32750[(1)] = (1));

return statearr_32750;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_32729){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_32729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e32751){if((e32751 instanceof Object)){
var ex__31947__auto__ = e32751;
var statearr_32752_32773 = state_32729;
(statearr_32752_32773[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32774 = state_32729;
state_32729 = G__32774;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_32729){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_32729);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto___32758,tc,fc))
})();
var state__32059__auto__ = (function (){var statearr_32753 = f__32058__auto__.call(null);
(statearr_32753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto___32758);

return statearr_32753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto___32758,tc,fc))
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
return (function (state_32838){
var state_val_32839 = (state_32838[(1)]);
if((state_val_32839 === (7))){
var inst_32834 = (state_32838[(2)]);
var state_32838__$1 = state_32838;
var statearr_32840_32861 = state_32838__$1;
(statearr_32840_32861[(2)] = inst_32834);

(statearr_32840_32861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32839 === (1))){
var inst_32818 = init;
var state_32838__$1 = (function (){var statearr_32841 = state_32838;
(statearr_32841[(7)] = inst_32818);

return statearr_32841;
})();
var statearr_32842_32862 = state_32838__$1;
(statearr_32842_32862[(2)] = null);

(statearr_32842_32862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32839 === (4))){
var inst_32821 = (state_32838[(8)]);
var inst_32821__$1 = (state_32838[(2)]);
var inst_32822 = (inst_32821__$1 == null);
var state_32838__$1 = (function (){var statearr_32843 = state_32838;
(statearr_32843[(8)] = inst_32821__$1);

return statearr_32843;
})();
if(cljs.core.truth_(inst_32822)){
var statearr_32844_32863 = state_32838__$1;
(statearr_32844_32863[(1)] = (5));

} else {
var statearr_32845_32864 = state_32838__$1;
(statearr_32845_32864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32839 === (6))){
var inst_32821 = (state_32838[(8)]);
var inst_32818 = (state_32838[(7)]);
var inst_32825 = (state_32838[(9)]);
var inst_32825__$1 = f.call(null,inst_32818,inst_32821);
var inst_32826 = cljs.core.reduced_QMARK_.call(null,inst_32825__$1);
var state_32838__$1 = (function (){var statearr_32846 = state_32838;
(statearr_32846[(9)] = inst_32825__$1);

return statearr_32846;
})();
if(inst_32826){
var statearr_32847_32865 = state_32838__$1;
(statearr_32847_32865[(1)] = (8));

} else {
var statearr_32848_32866 = state_32838__$1;
(statearr_32848_32866[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32839 === (3))){
var inst_32836 = (state_32838[(2)]);
var state_32838__$1 = state_32838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32838__$1,inst_32836);
} else {
if((state_val_32839 === (2))){
var state_32838__$1 = state_32838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32838__$1,(4),ch);
} else {
if((state_val_32839 === (9))){
var inst_32825 = (state_32838[(9)]);
var inst_32818 = inst_32825;
var state_32838__$1 = (function (){var statearr_32849 = state_32838;
(statearr_32849[(7)] = inst_32818);

return statearr_32849;
})();
var statearr_32850_32867 = state_32838__$1;
(statearr_32850_32867[(2)] = null);

(statearr_32850_32867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32839 === (5))){
var inst_32818 = (state_32838[(7)]);
var state_32838__$1 = state_32838;
var statearr_32851_32868 = state_32838__$1;
(statearr_32851_32868[(2)] = inst_32818);

(statearr_32851_32868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32839 === (10))){
var inst_32832 = (state_32838[(2)]);
var state_32838__$1 = state_32838;
var statearr_32852_32869 = state_32838__$1;
(statearr_32852_32869[(2)] = inst_32832);

(statearr_32852_32869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32839 === (8))){
var inst_32825 = (state_32838[(9)]);
var inst_32828 = cljs.core.deref.call(null,inst_32825);
var state_32838__$1 = state_32838;
var statearr_32853_32870 = state_32838__$1;
(statearr_32853_32870[(2)] = inst_32828);

(statearr_32853_32870[(1)] = (10));


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
var statearr_32857 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32857[(0)] = cljs$core$async$reduce_$_state_machine__31944__auto__);

(statearr_32857[(1)] = (1));

return statearr_32857;
});
var cljs$core$async$reduce_$_state_machine__31944__auto____1 = (function (state_32838){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_32838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e32858){if((e32858 instanceof Object)){
var ex__31947__auto__ = e32858;
var statearr_32859_32871 = state_32838;
(statearr_32859_32871[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32872 = state_32838;
state_32838 = G__32872;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31944__auto__ = function(state_32838){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31944__auto____1.call(this,state_32838);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31944__auto____0;
cljs$core$async$reduce_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31944__auto____1;
return cljs$core$async$reduce_$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto__))
})();
var state__32059__auto__ = (function (){var statearr_32860 = f__32058__auto__.call(null);
(statearr_32860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto__);

return statearr_32860;
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
return (function (state_32892){
var state_val_32893 = (state_32892[(1)]);
if((state_val_32893 === (1))){
var inst_32887 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_32892__$1 = state_32892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32892__$1,(2),inst_32887);
} else {
if((state_val_32893 === (2))){
var inst_32889 = (state_32892[(2)]);
var inst_32890 = f__$1.call(null,inst_32889);
var state_32892__$1 = state_32892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32892__$1,inst_32890);
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
var statearr_32897 = [null,null,null,null,null,null,null];
(statearr_32897[(0)] = cljs$core$async$transduce_$_state_machine__31944__auto__);

(statearr_32897[(1)] = (1));

return statearr_32897;
});
var cljs$core$async$transduce_$_state_machine__31944__auto____1 = (function (state_32892){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_32892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e32898){if((e32898 instanceof Object)){
var ex__31947__auto__ = e32898;
var statearr_32899_32901 = state_32892;
(statearr_32899_32901[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32902 = state_32892;
state_32892 = G__32902;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31944__auto__ = function(state_32892){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31944__auto____1.call(this,state_32892);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31944__auto____0;
cljs$core$async$transduce_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31944__auto____1;
return cljs$core$async$transduce_$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto__,f__$1))
})();
var state__32059__auto__ = (function (){var statearr_32900 = f__32058__auto__.call(null);
(statearr_32900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto__);

return statearr_32900;
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
var args32903 = [];
var len__29680__auto___32955 = arguments.length;
var i__29681__auto___32956 = (0);
while(true){
if((i__29681__auto___32956 < len__29680__auto___32955)){
args32903.push((arguments[i__29681__auto___32956]));

var G__32957 = (i__29681__auto___32956 + (1));
i__29681__auto___32956 = G__32957;
continue;
} else {
}
break;
}

var G__32905 = args32903.length;
switch (G__32905) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32903.length)].join('')));

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
return (function (state_32930){
var state_val_32931 = (state_32930[(1)]);
if((state_val_32931 === (7))){
var inst_32912 = (state_32930[(2)]);
var state_32930__$1 = state_32930;
var statearr_32932_32959 = state_32930__$1;
(statearr_32932_32959[(2)] = inst_32912);

(statearr_32932_32959[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (1))){
var inst_32906 = cljs.core.seq.call(null,coll);
var inst_32907 = inst_32906;
var state_32930__$1 = (function (){var statearr_32933 = state_32930;
(statearr_32933[(7)] = inst_32907);

return statearr_32933;
})();
var statearr_32934_32960 = state_32930__$1;
(statearr_32934_32960[(2)] = null);

(statearr_32934_32960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (4))){
var inst_32907 = (state_32930[(7)]);
var inst_32910 = cljs.core.first.call(null,inst_32907);
var state_32930__$1 = state_32930;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32930__$1,(7),ch,inst_32910);
} else {
if((state_val_32931 === (13))){
var inst_32924 = (state_32930[(2)]);
var state_32930__$1 = state_32930;
var statearr_32935_32961 = state_32930__$1;
(statearr_32935_32961[(2)] = inst_32924);

(statearr_32935_32961[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (6))){
var inst_32915 = (state_32930[(2)]);
var state_32930__$1 = state_32930;
if(cljs.core.truth_(inst_32915)){
var statearr_32936_32962 = state_32930__$1;
(statearr_32936_32962[(1)] = (8));

} else {
var statearr_32937_32963 = state_32930__$1;
(statearr_32937_32963[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (3))){
var inst_32928 = (state_32930[(2)]);
var state_32930__$1 = state_32930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32930__$1,inst_32928);
} else {
if((state_val_32931 === (12))){
var state_32930__$1 = state_32930;
var statearr_32938_32964 = state_32930__$1;
(statearr_32938_32964[(2)] = null);

(statearr_32938_32964[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (2))){
var inst_32907 = (state_32930[(7)]);
var state_32930__$1 = state_32930;
if(cljs.core.truth_(inst_32907)){
var statearr_32939_32965 = state_32930__$1;
(statearr_32939_32965[(1)] = (4));

} else {
var statearr_32940_32966 = state_32930__$1;
(statearr_32940_32966[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (11))){
var inst_32921 = cljs.core.async.close_BANG_.call(null,ch);
var state_32930__$1 = state_32930;
var statearr_32941_32967 = state_32930__$1;
(statearr_32941_32967[(2)] = inst_32921);

(statearr_32941_32967[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (9))){
var state_32930__$1 = state_32930;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32942_32968 = state_32930__$1;
(statearr_32942_32968[(1)] = (11));

} else {
var statearr_32943_32969 = state_32930__$1;
(statearr_32943_32969[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (5))){
var inst_32907 = (state_32930[(7)]);
var state_32930__$1 = state_32930;
var statearr_32944_32970 = state_32930__$1;
(statearr_32944_32970[(2)] = inst_32907);

(statearr_32944_32970[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (10))){
var inst_32926 = (state_32930[(2)]);
var state_32930__$1 = state_32930;
var statearr_32945_32971 = state_32930__$1;
(statearr_32945_32971[(2)] = inst_32926);

(statearr_32945_32971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32931 === (8))){
var inst_32907 = (state_32930[(7)]);
var inst_32917 = cljs.core.next.call(null,inst_32907);
var inst_32907__$1 = inst_32917;
var state_32930__$1 = (function (){var statearr_32946 = state_32930;
(statearr_32946[(7)] = inst_32907__$1);

return statearr_32946;
})();
var statearr_32947_32972 = state_32930__$1;
(statearr_32947_32972[(2)] = null);

(statearr_32947_32972[(1)] = (2));


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
var statearr_32951 = [null,null,null,null,null,null,null,null];
(statearr_32951[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_32951[(1)] = (1));

return statearr_32951;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_32930){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_32930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e32952){if((e32952 instanceof Object)){
var ex__31947__auto__ = e32952;
var statearr_32953_32973 = state_32930;
(statearr_32953_32973[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32974 = state_32930;
state_32930 = G__32974;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_32930){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_32930);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto__))
})();
var state__32059__auto__ = (function (){var statearr_32954 = f__32058__auto__.call(null);
(statearr_32954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto__);

return statearr_32954;
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
if(typeof cljs.core.async.t_cljs$core$async33200 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33200 = (function (ch,cs,meta33201){
this.ch = ch;
this.cs = cs;
this.meta33201 = meta33201;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33202,meta33201__$1){
var self__ = this;
var _33202__$1 = this;
return (new cljs.core.async.t_cljs$core$async33200(self__.ch,self__.cs,meta33201__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33200.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33202){
var self__ = this;
var _33202__$1 = this;
return self__.meta33201;
});})(cs))
;

cljs.core.async.t_cljs$core$async33200.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33200.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33200.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33200.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33200.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33200.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33200.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33201","meta33201",762610915,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33200.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33200.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33200";

cljs.core.async.t_cljs$core$async33200.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__29116__auto__,writer__29117__auto__,opt__29118__auto__){
return cljs.core._write.call(null,writer__29117__auto__,"cljs.core.async/t_cljs$core$async33200");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async33200 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33200(ch__$1,cs__$1,meta33201){
return (new cljs.core.async.t_cljs$core$async33200(ch__$1,cs__$1,meta33201));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33200(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__32057__auto___33425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto___33425,cs,m,dchan,dctr,done){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto___33425,cs,m,dchan,dctr,done){
return (function (state_33337){
var state_val_33338 = (state_33337[(1)]);
if((state_val_33338 === (7))){
var inst_33333 = (state_33337[(2)]);
var state_33337__$1 = state_33337;
var statearr_33339_33426 = state_33337__$1;
(statearr_33339_33426[(2)] = inst_33333);

(statearr_33339_33426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (20))){
var inst_33236 = (state_33337[(7)]);
var inst_33248 = cljs.core.first.call(null,inst_33236);
var inst_33249 = cljs.core.nth.call(null,inst_33248,(0),null);
var inst_33250 = cljs.core.nth.call(null,inst_33248,(1),null);
var state_33337__$1 = (function (){var statearr_33340 = state_33337;
(statearr_33340[(8)] = inst_33249);

return statearr_33340;
})();
if(cljs.core.truth_(inst_33250)){
var statearr_33341_33427 = state_33337__$1;
(statearr_33341_33427[(1)] = (22));

} else {
var statearr_33342_33428 = state_33337__$1;
(statearr_33342_33428[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (27))){
var inst_33280 = (state_33337[(9)]);
var inst_33205 = (state_33337[(10)]);
var inst_33285 = (state_33337[(11)]);
var inst_33278 = (state_33337[(12)]);
var inst_33285__$1 = cljs.core._nth.call(null,inst_33278,inst_33280);
var inst_33286 = cljs.core.async.put_BANG_.call(null,inst_33285__$1,inst_33205,done);
var state_33337__$1 = (function (){var statearr_33343 = state_33337;
(statearr_33343[(11)] = inst_33285__$1);

return statearr_33343;
})();
if(cljs.core.truth_(inst_33286)){
var statearr_33344_33429 = state_33337__$1;
(statearr_33344_33429[(1)] = (30));

} else {
var statearr_33345_33430 = state_33337__$1;
(statearr_33345_33430[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (1))){
var state_33337__$1 = state_33337;
var statearr_33346_33431 = state_33337__$1;
(statearr_33346_33431[(2)] = null);

(statearr_33346_33431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (24))){
var inst_33236 = (state_33337[(7)]);
var inst_33255 = (state_33337[(2)]);
var inst_33256 = cljs.core.next.call(null,inst_33236);
var inst_33214 = inst_33256;
var inst_33215 = null;
var inst_33216 = (0);
var inst_33217 = (0);
var state_33337__$1 = (function (){var statearr_33347 = state_33337;
(statearr_33347[(13)] = inst_33255);

(statearr_33347[(14)] = inst_33215);

(statearr_33347[(15)] = inst_33216);

(statearr_33347[(16)] = inst_33217);

(statearr_33347[(17)] = inst_33214);

return statearr_33347;
})();
var statearr_33348_33432 = state_33337__$1;
(statearr_33348_33432[(2)] = null);

(statearr_33348_33432[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (39))){
var state_33337__$1 = state_33337;
var statearr_33352_33433 = state_33337__$1;
(statearr_33352_33433[(2)] = null);

(statearr_33352_33433[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (4))){
var inst_33205 = (state_33337[(10)]);
var inst_33205__$1 = (state_33337[(2)]);
var inst_33206 = (inst_33205__$1 == null);
var state_33337__$1 = (function (){var statearr_33353 = state_33337;
(statearr_33353[(10)] = inst_33205__$1);

return statearr_33353;
})();
if(cljs.core.truth_(inst_33206)){
var statearr_33354_33434 = state_33337__$1;
(statearr_33354_33434[(1)] = (5));

} else {
var statearr_33355_33435 = state_33337__$1;
(statearr_33355_33435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (15))){
var inst_33215 = (state_33337[(14)]);
var inst_33216 = (state_33337[(15)]);
var inst_33217 = (state_33337[(16)]);
var inst_33214 = (state_33337[(17)]);
var inst_33232 = (state_33337[(2)]);
var inst_33233 = (inst_33217 + (1));
var tmp33349 = inst_33215;
var tmp33350 = inst_33216;
var tmp33351 = inst_33214;
var inst_33214__$1 = tmp33351;
var inst_33215__$1 = tmp33349;
var inst_33216__$1 = tmp33350;
var inst_33217__$1 = inst_33233;
var state_33337__$1 = (function (){var statearr_33356 = state_33337;
(statearr_33356[(14)] = inst_33215__$1);

(statearr_33356[(15)] = inst_33216__$1);

(statearr_33356[(16)] = inst_33217__$1);

(statearr_33356[(17)] = inst_33214__$1);

(statearr_33356[(18)] = inst_33232);

return statearr_33356;
})();
var statearr_33357_33436 = state_33337__$1;
(statearr_33357_33436[(2)] = null);

(statearr_33357_33436[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (21))){
var inst_33259 = (state_33337[(2)]);
var state_33337__$1 = state_33337;
var statearr_33361_33437 = state_33337__$1;
(statearr_33361_33437[(2)] = inst_33259);

(statearr_33361_33437[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (31))){
var inst_33285 = (state_33337[(11)]);
var inst_33289 = done.call(null,null);
var inst_33290 = cljs.core.async.untap_STAR_.call(null,m,inst_33285);
var state_33337__$1 = (function (){var statearr_33362 = state_33337;
(statearr_33362[(19)] = inst_33289);

return statearr_33362;
})();
var statearr_33363_33438 = state_33337__$1;
(statearr_33363_33438[(2)] = inst_33290);

(statearr_33363_33438[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (32))){
var inst_33280 = (state_33337[(9)]);
var inst_33277 = (state_33337[(20)]);
var inst_33278 = (state_33337[(12)]);
var inst_33279 = (state_33337[(21)]);
var inst_33292 = (state_33337[(2)]);
var inst_33293 = (inst_33280 + (1));
var tmp33358 = inst_33277;
var tmp33359 = inst_33278;
var tmp33360 = inst_33279;
var inst_33277__$1 = tmp33358;
var inst_33278__$1 = tmp33359;
var inst_33279__$1 = tmp33360;
var inst_33280__$1 = inst_33293;
var state_33337__$1 = (function (){var statearr_33364 = state_33337;
(statearr_33364[(22)] = inst_33292);

(statearr_33364[(9)] = inst_33280__$1);

(statearr_33364[(20)] = inst_33277__$1);

(statearr_33364[(12)] = inst_33278__$1);

(statearr_33364[(21)] = inst_33279__$1);

return statearr_33364;
})();
var statearr_33365_33439 = state_33337__$1;
(statearr_33365_33439[(2)] = null);

(statearr_33365_33439[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (40))){
var inst_33305 = (state_33337[(23)]);
var inst_33309 = done.call(null,null);
var inst_33310 = cljs.core.async.untap_STAR_.call(null,m,inst_33305);
var state_33337__$1 = (function (){var statearr_33366 = state_33337;
(statearr_33366[(24)] = inst_33309);

return statearr_33366;
})();
var statearr_33367_33440 = state_33337__$1;
(statearr_33367_33440[(2)] = inst_33310);

(statearr_33367_33440[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (33))){
var inst_33296 = (state_33337[(25)]);
var inst_33298 = cljs.core.chunked_seq_QMARK_.call(null,inst_33296);
var state_33337__$1 = state_33337;
if(inst_33298){
var statearr_33368_33441 = state_33337__$1;
(statearr_33368_33441[(1)] = (36));

} else {
var statearr_33369_33442 = state_33337__$1;
(statearr_33369_33442[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (13))){
var inst_33226 = (state_33337[(26)]);
var inst_33229 = cljs.core.async.close_BANG_.call(null,inst_33226);
var state_33337__$1 = state_33337;
var statearr_33370_33443 = state_33337__$1;
(statearr_33370_33443[(2)] = inst_33229);

(statearr_33370_33443[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (22))){
var inst_33249 = (state_33337[(8)]);
var inst_33252 = cljs.core.async.close_BANG_.call(null,inst_33249);
var state_33337__$1 = state_33337;
var statearr_33371_33444 = state_33337__$1;
(statearr_33371_33444[(2)] = inst_33252);

(statearr_33371_33444[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (36))){
var inst_33296 = (state_33337[(25)]);
var inst_33300 = cljs.core.chunk_first.call(null,inst_33296);
var inst_33301 = cljs.core.chunk_rest.call(null,inst_33296);
var inst_33302 = cljs.core.count.call(null,inst_33300);
var inst_33277 = inst_33301;
var inst_33278 = inst_33300;
var inst_33279 = inst_33302;
var inst_33280 = (0);
var state_33337__$1 = (function (){var statearr_33372 = state_33337;
(statearr_33372[(9)] = inst_33280);

(statearr_33372[(20)] = inst_33277);

(statearr_33372[(12)] = inst_33278);

(statearr_33372[(21)] = inst_33279);

return statearr_33372;
})();
var statearr_33373_33445 = state_33337__$1;
(statearr_33373_33445[(2)] = null);

(statearr_33373_33445[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (41))){
var inst_33296 = (state_33337[(25)]);
var inst_33312 = (state_33337[(2)]);
var inst_33313 = cljs.core.next.call(null,inst_33296);
var inst_33277 = inst_33313;
var inst_33278 = null;
var inst_33279 = (0);
var inst_33280 = (0);
var state_33337__$1 = (function (){var statearr_33374 = state_33337;
(statearr_33374[(9)] = inst_33280);

(statearr_33374[(20)] = inst_33277);

(statearr_33374[(27)] = inst_33312);

(statearr_33374[(12)] = inst_33278);

(statearr_33374[(21)] = inst_33279);

return statearr_33374;
})();
var statearr_33375_33446 = state_33337__$1;
(statearr_33375_33446[(2)] = null);

(statearr_33375_33446[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (43))){
var state_33337__$1 = state_33337;
var statearr_33376_33447 = state_33337__$1;
(statearr_33376_33447[(2)] = null);

(statearr_33376_33447[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (29))){
var inst_33321 = (state_33337[(2)]);
var state_33337__$1 = state_33337;
var statearr_33377_33448 = state_33337__$1;
(statearr_33377_33448[(2)] = inst_33321);

(statearr_33377_33448[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (44))){
var inst_33330 = (state_33337[(2)]);
var state_33337__$1 = (function (){var statearr_33378 = state_33337;
(statearr_33378[(28)] = inst_33330);

return statearr_33378;
})();
var statearr_33379_33449 = state_33337__$1;
(statearr_33379_33449[(2)] = null);

(statearr_33379_33449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (6))){
var inst_33269 = (state_33337[(29)]);
var inst_33268 = cljs.core.deref.call(null,cs);
var inst_33269__$1 = cljs.core.keys.call(null,inst_33268);
var inst_33270 = cljs.core.count.call(null,inst_33269__$1);
var inst_33271 = cljs.core.reset_BANG_.call(null,dctr,inst_33270);
var inst_33276 = cljs.core.seq.call(null,inst_33269__$1);
var inst_33277 = inst_33276;
var inst_33278 = null;
var inst_33279 = (0);
var inst_33280 = (0);
var state_33337__$1 = (function (){var statearr_33380 = state_33337;
(statearr_33380[(29)] = inst_33269__$1);

(statearr_33380[(9)] = inst_33280);

(statearr_33380[(20)] = inst_33277);

(statearr_33380[(30)] = inst_33271);

(statearr_33380[(12)] = inst_33278);

(statearr_33380[(21)] = inst_33279);

return statearr_33380;
})();
var statearr_33381_33450 = state_33337__$1;
(statearr_33381_33450[(2)] = null);

(statearr_33381_33450[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (28))){
var inst_33277 = (state_33337[(20)]);
var inst_33296 = (state_33337[(25)]);
var inst_33296__$1 = cljs.core.seq.call(null,inst_33277);
var state_33337__$1 = (function (){var statearr_33382 = state_33337;
(statearr_33382[(25)] = inst_33296__$1);

return statearr_33382;
})();
if(inst_33296__$1){
var statearr_33383_33451 = state_33337__$1;
(statearr_33383_33451[(1)] = (33));

} else {
var statearr_33384_33452 = state_33337__$1;
(statearr_33384_33452[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (25))){
var inst_33280 = (state_33337[(9)]);
var inst_33279 = (state_33337[(21)]);
var inst_33282 = (inst_33280 < inst_33279);
var inst_33283 = inst_33282;
var state_33337__$1 = state_33337;
if(cljs.core.truth_(inst_33283)){
var statearr_33385_33453 = state_33337__$1;
(statearr_33385_33453[(1)] = (27));

} else {
var statearr_33386_33454 = state_33337__$1;
(statearr_33386_33454[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (34))){
var state_33337__$1 = state_33337;
var statearr_33387_33455 = state_33337__$1;
(statearr_33387_33455[(2)] = null);

(statearr_33387_33455[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (17))){
var state_33337__$1 = state_33337;
var statearr_33388_33456 = state_33337__$1;
(statearr_33388_33456[(2)] = null);

(statearr_33388_33456[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (3))){
var inst_33335 = (state_33337[(2)]);
var state_33337__$1 = state_33337;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33337__$1,inst_33335);
} else {
if((state_val_33338 === (12))){
var inst_33264 = (state_33337[(2)]);
var state_33337__$1 = state_33337;
var statearr_33389_33457 = state_33337__$1;
(statearr_33389_33457[(2)] = inst_33264);

(statearr_33389_33457[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (2))){
var state_33337__$1 = state_33337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33337__$1,(4),ch);
} else {
if((state_val_33338 === (23))){
var state_33337__$1 = state_33337;
var statearr_33390_33458 = state_33337__$1;
(statearr_33390_33458[(2)] = null);

(statearr_33390_33458[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (35))){
var inst_33319 = (state_33337[(2)]);
var state_33337__$1 = state_33337;
var statearr_33391_33459 = state_33337__$1;
(statearr_33391_33459[(2)] = inst_33319);

(statearr_33391_33459[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (19))){
var inst_33236 = (state_33337[(7)]);
var inst_33240 = cljs.core.chunk_first.call(null,inst_33236);
var inst_33241 = cljs.core.chunk_rest.call(null,inst_33236);
var inst_33242 = cljs.core.count.call(null,inst_33240);
var inst_33214 = inst_33241;
var inst_33215 = inst_33240;
var inst_33216 = inst_33242;
var inst_33217 = (0);
var state_33337__$1 = (function (){var statearr_33392 = state_33337;
(statearr_33392[(14)] = inst_33215);

(statearr_33392[(15)] = inst_33216);

(statearr_33392[(16)] = inst_33217);

(statearr_33392[(17)] = inst_33214);

return statearr_33392;
})();
var statearr_33393_33460 = state_33337__$1;
(statearr_33393_33460[(2)] = null);

(statearr_33393_33460[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (11))){
var inst_33236 = (state_33337[(7)]);
var inst_33214 = (state_33337[(17)]);
var inst_33236__$1 = cljs.core.seq.call(null,inst_33214);
var state_33337__$1 = (function (){var statearr_33394 = state_33337;
(statearr_33394[(7)] = inst_33236__$1);

return statearr_33394;
})();
if(inst_33236__$1){
var statearr_33395_33461 = state_33337__$1;
(statearr_33395_33461[(1)] = (16));

} else {
var statearr_33396_33462 = state_33337__$1;
(statearr_33396_33462[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (9))){
var inst_33266 = (state_33337[(2)]);
var state_33337__$1 = state_33337;
var statearr_33397_33463 = state_33337__$1;
(statearr_33397_33463[(2)] = inst_33266);

(statearr_33397_33463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (5))){
var inst_33212 = cljs.core.deref.call(null,cs);
var inst_33213 = cljs.core.seq.call(null,inst_33212);
var inst_33214 = inst_33213;
var inst_33215 = null;
var inst_33216 = (0);
var inst_33217 = (0);
var state_33337__$1 = (function (){var statearr_33398 = state_33337;
(statearr_33398[(14)] = inst_33215);

(statearr_33398[(15)] = inst_33216);

(statearr_33398[(16)] = inst_33217);

(statearr_33398[(17)] = inst_33214);

return statearr_33398;
})();
var statearr_33399_33464 = state_33337__$1;
(statearr_33399_33464[(2)] = null);

(statearr_33399_33464[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (14))){
var state_33337__$1 = state_33337;
var statearr_33400_33465 = state_33337__$1;
(statearr_33400_33465[(2)] = null);

(statearr_33400_33465[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (45))){
var inst_33327 = (state_33337[(2)]);
var state_33337__$1 = state_33337;
var statearr_33401_33466 = state_33337__$1;
(statearr_33401_33466[(2)] = inst_33327);

(statearr_33401_33466[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (26))){
var inst_33269 = (state_33337[(29)]);
var inst_33323 = (state_33337[(2)]);
var inst_33324 = cljs.core.seq.call(null,inst_33269);
var state_33337__$1 = (function (){var statearr_33402 = state_33337;
(statearr_33402[(31)] = inst_33323);

return statearr_33402;
})();
if(inst_33324){
var statearr_33403_33467 = state_33337__$1;
(statearr_33403_33467[(1)] = (42));

} else {
var statearr_33404_33468 = state_33337__$1;
(statearr_33404_33468[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (16))){
var inst_33236 = (state_33337[(7)]);
var inst_33238 = cljs.core.chunked_seq_QMARK_.call(null,inst_33236);
var state_33337__$1 = state_33337;
if(inst_33238){
var statearr_33405_33469 = state_33337__$1;
(statearr_33405_33469[(1)] = (19));

} else {
var statearr_33406_33470 = state_33337__$1;
(statearr_33406_33470[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (38))){
var inst_33316 = (state_33337[(2)]);
var state_33337__$1 = state_33337;
var statearr_33407_33471 = state_33337__$1;
(statearr_33407_33471[(2)] = inst_33316);

(statearr_33407_33471[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (30))){
var state_33337__$1 = state_33337;
var statearr_33408_33472 = state_33337__$1;
(statearr_33408_33472[(2)] = null);

(statearr_33408_33472[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (10))){
var inst_33215 = (state_33337[(14)]);
var inst_33217 = (state_33337[(16)]);
var inst_33225 = cljs.core._nth.call(null,inst_33215,inst_33217);
var inst_33226 = cljs.core.nth.call(null,inst_33225,(0),null);
var inst_33227 = cljs.core.nth.call(null,inst_33225,(1),null);
var state_33337__$1 = (function (){var statearr_33409 = state_33337;
(statearr_33409[(26)] = inst_33226);

return statearr_33409;
})();
if(cljs.core.truth_(inst_33227)){
var statearr_33410_33473 = state_33337__$1;
(statearr_33410_33473[(1)] = (13));

} else {
var statearr_33411_33474 = state_33337__$1;
(statearr_33411_33474[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (18))){
var inst_33262 = (state_33337[(2)]);
var state_33337__$1 = state_33337;
var statearr_33412_33475 = state_33337__$1;
(statearr_33412_33475[(2)] = inst_33262);

(statearr_33412_33475[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (42))){
var state_33337__$1 = state_33337;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33337__$1,(45),dchan);
} else {
if((state_val_33338 === (37))){
var inst_33205 = (state_33337[(10)]);
var inst_33305 = (state_33337[(23)]);
var inst_33296 = (state_33337[(25)]);
var inst_33305__$1 = cljs.core.first.call(null,inst_33296);
var inst_33306 = cljs.core.async.put_BANG_.call(null,inst_33305__$1,inst_33205,done);
var state_33337__$1 = (function (){var statearr_33413 = state_33337;
(statearr_33413[(23)] = inst_33305__$1);

return statearr_33413;
})();
if(cljs.core.truth_(inst_33306)){
var statearr_33414_33476 = state_33337__$1;
(statearr_33414_33476[(1)] = (39));

} else {
var statearr_33415_33477 = state_33337__$1;
(statearr_33415_33477[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33338 === (8))){
var inst_33216 = (state_33337[(15)]);
var inst_33217 = (state_33337[(16)]);
var inst_33219 = (inst_33217 < inst_33216);
var inst_33220 = inst_33219;
var state_33337__$1 = state_33337;
if(cljs.core.truth_(inst_33220)){
var statearr_33416_33478 = state_33337__$1;
(statearr_33416_33478[(1)] = (10));

} else {
var statearr_33417_33479 = state_33337__$1;
(statearr_33417_33479[(1)] = (11));

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
});})(c__32057__auto___33425,cs,m,dchan,dctr,done))
;
return ((function (switch__31943__auto__,c__32057__auto___33425,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__31944__auto__ = null;
var cljs$core$async$mult_$_state_machine__31944__auto____0 = (function (){
var statearr_33421 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33421[(0)] = cljs$core$async$mult_$_state_machine__31944__auto__);

(statearr_33421[(1)] = (1));

return statearr_33421;
});
var cljs$core$async$mult_$_state_machine__31944__auto____1 = (function (state_33337){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_33337);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e33422){if((e33422 instanceof Object)){
var ex__31947__auto__ = e33422;
var statearr_33423_33480 = state_33337;
(statearr_33423_33480[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33481 = state_33337;
state_33337 = G__33481;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31944__auto__ = function(state_33337){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31944__auto____1.call(this,state_33337);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31944__auto____0;
cljs$core$async$mult_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31944__auto____1;
return cljs$core$async$mult_$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto___33425,cs,m,dchan,dctr,done))
})();
var state__32059__auto__ = (function (){var statearr_33424 = f__32058__auto__.call(null);
(statearr_33424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto___33425);

return statearr_33424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto___33425,cs,m,dchan,dctr,done))
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
var args33482 = [];
var len__29680__auto___33485 = arguments.length;
var i__29681__auto___33486 = (0);
while(true){
if((i__29681__auto___33486 < len__29680__auto___33485)){
args33482.push((arguments[i__29681__auto___33486]));

var G__33487 = (i__29681__auto___33486 + (1));
i__29681__auto___33486 = G__33487;
continue;
} else {
}
break;
}

var G__33484 = args33482.length;
switch (G__33484) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33482.length)].join('')));

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
var len__29680__auto___33499 = arguments.length;
var i__29681__auto___33500 = (0);
while(true){
if((i__29681__auto___33500 < len__29680__auto___33499)){
args__29687__auto__.push((arguments[i__29681__auto___33500]));

var G__33501 = (i__29681__auto___33500 + (1));
i__29681__auto___33500 = G__33501;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((3) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29688__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33493){
var map__33494 = p__33493;
var map__33494__$1 = ((((!((map__33494 == null)))?((((map__33494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33494.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33494):map__33494);
var opts = map__33494__$1;
var statearr_33496_33502 = state;
(statearr_33496_33502[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__5278__auto__ = cljs.core.async.do_alts.call(null,((function (map__33494,map__33494__$1,opts){
return (function (val){
var statearr_33497_33503 = state;
(statearr_33497_33503[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33494,map__33494__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5278__auto__)){
var cb = temp__5278__auto__;
var statearr_33498_33504 = state;
(statearr_33498_33504[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33489){
var G__33490 = cljs.core.first.call(null,seq33489);
var seq33489__$1 = cljs.core.next.call(null,seq33489);
var G__33491 = cljs.core.first.call(null,seq33489__$1);
var seq33489__$2 = cljs.core.next.call(null,seq33489__$1);
var G__33492 = cljs.core.first.call(null,seq33489__$2);
var seq33489__$3 = cljs.core.next.call(null,seq33489__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33490,G__33491,G__33492,seq33489__$3);
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
if(typeof cljs.core.async.t_cljs$core$async33672 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33672 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta33673){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta33673 = meta33673;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33674,meta33673__$1){
var self__ = this;
var _33674__$1 = this;
return (new cljs.core.async.t_cljs$core$async33672(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta33673__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33672.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33674){
var self__ = this;
var _33674__$1 = this;
return self__.meta33673;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33672.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33672.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33672.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33672.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33672.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33672.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33672.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33672.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async33672.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta33673","meta33673",1270866256,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33672.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33672.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33672";

cljs.core.async.t_cljs$core$async33672.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__29116__auto__,writer__29117__auto__,opt__29118__auto__){
return cljs.core._write.call(null,writer__29117__auto__,"cljs.core.async/t_cljs$core$async33672");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async33672 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33672(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta33673){
return (new cljs.core.async.t_cljs$core$async33672(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta33673));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33672(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32057__auto___33839 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto___33839,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto___33839,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33776){
var state_val_33777 = (state_33776[(1)]);
if((state_val_33777 === (7))){
var inst_33691 = (state_33776[(2)]);
var state_33776__$1 = state_33776;
var statearr_33778_33840 = state_33776__$1;
(statearr_33778_33840[(2)] = inst_33691);

(statearr_33778_33840[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (20))){
var inst_33703 = (state_33776[(7)]);
var state_33776__$1 = state_33776;
var statearr_33779_33841 = state_33776__$1;
(statearr_33779_33841[(2)] = inst_33703);

(statearr_33779_33841[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (27))){
var state_33776__$1 = state_33776;
var statearr_33780_33842 = state_33776__$1;
(statearr_33780_33842[(2)] = null);

(statearr_33780_33842[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (1))){
var inst_33678 = (state_33776[(8)]);
var inst_33678__$1 = calc_state.call(null);
var inst_33680 = (inst_33678__$1 == null);
var inst_33681 = cljs.core.not.call(null,inst_33680);
var state_33776__$1 = (function (){var statearr_33781 = state_33776;
(statearr_33781[(8)] = inst_33678__$1);

return statearr_33781;
})();
if(inst_33681){
var statearr_33782_33843 = state_33776__$1;
(statearr_33782_33843[(1)] = (2));

} else {
var statearr_33783_33844 = state_33776__$1;
(statearr_33783_33844[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (24))){
var inst_33727 = (state_33776[(9)]);
var inst_33750 = (state_33776[(10)]);
var inst_33736 = (state_33776[(11)]);
var inst_33750__$1 = inst_33727.call(null,inst_33736);
var state_33776__$1 = (function (){var statearr_33784 = state_33776;
(statearr_33784[(10)] = inst_33750__$1);

return statearr_33784;
})();
if(cljs.core.truth_(inst_33750__$1)){
var statearr_33785_33845 = state_33776__$1;
(statearr_33785_33845[(1)] = (29));

} else {
var statearr_33786_33846 = state_33776__$1;
(statearr_33786_33846[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (4))){
var inst_33694 = (state_33776[(2)]);
var state_33776__$1 = state_33776;
if(cljs.core.truth_(inst_33694)){
var statearr_33787_33847 = state_33776__$1;
(statearr_33787_33847[(1)] = (8));

} else {
var statearr_33788_33848 = state_33776__$1;
(statearr_33788_33848[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (15))){
var inst_33721 = (state_33776[(2)]);
var state_33776__$1 = state_33776;
if(cljs.core.truth_(inst_33721)){
var statearr_33789_33849 = state_33776__$1;
(statearr_33789_33849[(1)] = (19));

} else {
var statearr_33790_33850 = state_33776__$1;
(statearr_33790_33850[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (21))){
var inst_33726 = (state_33776[(12)]);
var inst_33726__$1 = (state_33776[(2)]);
var inst_33727 = cljs.core.get.call(null,inst_33726__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33728 = cljs.core.get.call(null,inst_33726__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33729 = cljs.core.get.call(null,inst_33726__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33776__$1 = (function (){var statearr_33791 = state_33776;
(statearr_33791[(9)] = inst_33727);

(statearr_33791[(12)] = inst_33726__$1);

(statearr_33791[(13)] = inst_33728);

return statearr_33791;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33776__$1,(22),inst_33729);
} else {
if((state_val_33777 === (31))){
var inst_33758 = (state_33776[(2)]);
var state_33776__$1 = state_33776;
if(cljs.core.truth_(inst_33758)){
var statearr_33792_33851 = state_33776__$1;
(statearr_33792_33851[(1)] = (32));

} else {
var statearr_33793_33852 = state_33776__$1;
(statearr_33793_33852[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (32))){
var inst_33735 = (state_33776[(14)]);
var state_33776__$1 = state_33776;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33776__$1,(35),out,inst_33735);
} else {
if((state_val_33777 === (33))){
var inst_33726 = (state_33776[(12)]);
var inst_33703 = inst_33726;
var state_33776__$1 = (function (){var statearr_33794 = state_33776;
(statearr_33794[(7)] = inst_33703);

return statearr_33794;
})();
var statearr_33795_33853 = state_33776__$1;
(statearr_33795_33853[(2)] = null);

(statearr_33795_33853[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (13))){
var inst_33703 = (state_33776[(7)]);
var inst_33710 = inst_33703.cljs$lang$protocol_mask$partition0$;
var inst_33711 = (inst_33710 & (64));
var inst_33712 = inst_33703.cljs$core$ISeq$;
var inst_33713 = (cljs.core.PROTOCOL_SENTINEL === inst_33712);
var inst_33714 = (inst_33711) || (inst_33713);
var state_33776__$1 = state_33776;
if(cljs.core.truth_(inst_33714)){
var statearr_33796_33854 = state_33776__$1;
(statearr_33796_33854[(1)] = (16));

} else {
var statearr_33797_33855 = state_33776__$1;
(statearr_33797_33855[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (22))){
var inst_33736 = (state_33776[(11)]);
var inst_33735 = (state_33776[(14)]);
var inst_33734 = (state_33776[(2)]);
var inst_33735__$1 = cljs.core.nth.call(null,inst_33734,(0),null);
var inst_33736__$1 = cljs.core.nth.call(null,inst_33734,(1),null);
var inst_33737 = (inst_33735__$1 == null);
var inst_33738 = cljs.core._EQ_.call(null,inst_33736__$1,change);
var inst_33739 = (inst_33737) || (inst_33738);
var state_33776__$1 = (function (){var statearr_33798 = state_33776;
(statearr_33798[(11)] = inst_33736__$1);

(statearr_33798[(14)] = inst_33735__$1);

return statearr_33798;
})();
if(cljs.core.truth_(inst_33739)){
var statearr_33799_33856 = state_33776__$1;
(statearr_33799_33856[(1)] = (23));

} else {
var statearr_33800_33857 = state_33776__$1;
(statearr_33800_33857[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (36))){
var inst_33726 = (state_33776[(12)]);
var inst_33703 = inst_33726;
var state_33776__$1 = (function (){var statearr_33801 = state_33776;
(statearr_33801[(7)] = inst_33703);

return statearr_33801;
})();
var statearr_33802_33858 = state_33776__$1;
(statearr_33802_33858[(2)] = null);

(statearr_33802_33858[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (29))){
var inst_33750 = (state_33776[(10)]);
var state_33776__$1 = state_33776;
var statearr_33803_33859 = state_33776__$1;
(statearr_33803_33859[(2)] = inst_33750);

(statearr_33803_33859[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (6))){
var state_33776__$1 = state_33776;
var statearr_33804_33860 = state_33776__$1;
(statearr_33804_33860[(2)] = false);

(statearr_33804_33860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (28))){
var inst_33746 = (state_33776[(2)]);
var inst_33747 = calc_state.call(null);
var inst_33703 = inst_33747;
var state_33776__$1 = (function (){var statearr_33805 = state_33776;
(statearr_33805[(15)] = inst_33746);

(statearr_33805[(7)] = inst_33703);

return statearr_33805;
})();
var statearr_33806_33861 = state_33776__$1;
(statearr_33806_33861[(2)] = null);

(statearr_33806_33861[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (25))){
var inst_33772 = (state_33776[(2)]);
var state_33776__$1 = state_33776;
var statearr_33807_33862 = state_33776__$1;
(statearr_33807_33862[(2)] = inst_33772);

(statearr_33807_33862[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (34))){
var inst_33770 = (state_33776[(2)]);
var state_33776__$1 = state_33776;
var statearr_33808_33863 = state_33776__$1;
(statearr_33808_33863[(2)] = inst_33770);

(statearr_33808_33863[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (17))){
var state_33776__$1 = state_33776;
var statearr_33809_33864 = state_33776__$1;
(statearr_33809_33864[(2)] = false);

(statearr_33809_33864[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (3))){
var state_33776__$1 = state_33776;
var statearr_33810_33865 = state_33776__$1;
(statearr_33810_33865[(2)] = false);

(statearr_33810_33865[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (12))){
var inst_33774 = (state_33776[(2)]);
var state_33776__$1 = state_33776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33776__$1,inst_33774);
} else {
if((state_val_33777 === (2))){
var inst_33678 = (state_33776[(8)]);
var inst_33683 = inst_33678.cljs$lang$protocol_mask$partition0$;
var inst_33684 = (inst_33683 & (64));
var inst_33685 = inst_33678.cljs$core$ISeq$;
var inst_33686 = (cljs.core.PROTOCOL_SENTINEL === inst_33685);
var inst_33687 = (inst_33684) || (inst_33686);
var state_33776__$1 = state_33776;
if(cljs.core.truth_(inst_33687)){
var statearr_33811_33866 = state_33776__$1;
(statearr_33811_33866[(1)] = (5));

} else {
var statearr_33812_33867 = state_33776__$1;
(statearr_33812_33867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (23))){
var inst_33735 = (state_33776[(14)]);
var inst_33741 = (inst_33735 == null);
var state_33776__$1 = state_33776;
if(cljs.core.truth_(inst_33741)){
var statearr_33813_33868 = state_33776__$1;
(statearr_33813_33868[(1)] = (26));

} else {
var statearr_33814_33869 = state_33776__$1;
(statearr_33814_33869[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (35))){
var inst_33761 = (state_33776[(2)]);
var state_33776__$1 = state_33776;
if(cljs.core.truth_(inst_33761)){
var statearr_33815_33870 = state_33776__$1;
(statearr_33815_33870[(1)] = (36));

} else {
var statearr_33816_33871 = state_33776__$1;
(statearr_33816_33871[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (19))){
var inst_33703 = (state_33776[(7)]);
var inst_33723 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33703);
var state_33776__$1 = state_33776;
var statearr_33817_33872 = state_33776__$1;
(statearr_33817_33872[(2)] = inst_33723);

(statearr_33817_33872[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (11))){
var inst_33703 = (state_33776[(7)]);
var inst_33707 = (inst_33703 == null);
var inst_33708 = cljs.core.not.call(null,inst_33707);
var state_33776__$1 = state_33776;
if(inst_33708){
var statearr_33818_33873 = state_33776__$1;
(statearr_33818_33873[(1)] = (13));

} else {
var statearr_33819_33874 = state_33776__$1;
(statearr_33819_33874[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (9))){
var inst_33678 = (state_33776[(8)]);
var state_33776__$1 = state_33776;
var statearr_33820_33875 = state_33776__$1;
(statearr_33820_33875[(2)] = inst_33678);

(statearr_33820_33875[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (5))){
var state_33776__$1 = state_33776;
var statearr_33821_33876 = state_33776__$1;
(statearr_33821_33876[(2)] = true);

(statearr_33821_33876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (14))){
var state_33776__$1 = state_33776;
var statearr_33822_33877 = state_33776__$1;
(statearr_33822_33877[(2)] = false);

(statearr_33822_33877[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (26))){
var inst_33736 = (state_33776[(11)]);
var inst_33743 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33736);
var state_33776__$1 = state_33776;
var statearr_33823_33878 = state_33776__$1;
(statearr_33823_33878[(2)] = inst_33743);

(statearr_33823_33878[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (16))){
var state_33776__$1 = state_33776;
var statearr_33824_33879 = state_33776__$1;
(statearr_33824_33879[(2)] = true);

(statearr_33824_33879[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (38))){
var inst_33766 = (state_33776[(2)]);
var state_33776__$1 = state_33776;
var statearr_33825_33880 = state_33776__$1;
(statearr_33825_33880[(2)] = inst_33766);

(statearr_33825_33880[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (30))){
var inst_33727 = (state_33776[(9)]);
var inst_33728 = (state_33776[(13)]);
var inst_33736 = (state_33776[(11)]);
var inst_33753 = cljs.core.empty_QMARK_.call(null,inst_33727);
var inst_33754 = inst_33728.call(null,inst_33736);
var inst_33755 = cljs.core.not.call(null,inst_33754);
var inst_33756 = (inst_33753) && (inst_33755);
var state_33776__$1 = state_33776;
var statearr_33826_33881 = state_33776__$1;
(statearr_33826_33881[(2)] = inst_33756);

(statearr_33826_33881[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (10))){
var inst_33678 = (state_33776[(8)]);
var inst_33699 = (state_33776[(2)]);
var inst_33700 = cljs.core.get.call(null,inst_33699,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33701 = cljs.core.get.call(null,inst_33699,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33702 = cljs.core.get.call(null,inst_33699,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33703 = inst_33678;
var state_33776__$1 = (function (){var statearr_33827 = state_33776;
(statearr_33827[(16)] = inst_33700);

(statearr_33827[(17)] = inst_33701);

(statearr_33827[(18)] = inst_33702);

(statearr_33827[(7)] = inst_33703);

return statearr_33827;
})();
var statearr_33828_33882 = state_33776__$1;
(statearr_33828_33882[(2)] = null);

(statearr_33828_33882[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (18))){
var inst_33718 = (state_33776[(2)]);
var state_33776__$1 = state_33776;
var statearr_33829_33883 = state_33776__$1;
(statearr_33829_33883[(2)] = inst_33718);

(statearr_33829_33883[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (37))){
var state_33776__$1 = state_33776;
var statearr_33830_33884 = state_33776__$1;
(statearr_33830_33884[(2)] = null);

(statearr_33830_33884[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33777 === (8))){
var inst_33678 = (state_33776[(8)]);
var inst_33696 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33678);
var state_33776__$1 = state_33776;
var statearr_33831_33885 = state_33776__$1;
(statearr_33831_33885[(2)] = inst_33696);

(statearr_33831_33885[(1)] = (10));


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
});})(c__32057__auto___33839,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__31943__auto__,c__32057__auto___33839,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__31944__auto__ = null;
var cljs$core$async$mix_$_state_machine__31944__auto____0 = (function (){
var statearr_33835 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33835[(0)] = cljs$core$async$mix_$_state_machine__31944__auto__);

(statearr_33835[(1)] = (1));

return statearr_33835;
});
var cljs$core$async$mix_$_state_machine__31944__auto____1 = (function (state_33776){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_33776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e33836){if((e33836 instanceof Object)){
var ex__31947__auto__ = e33836;
var statearr_33837_33886 = state_33776;
(statearr_33837_33886[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33887 = state_33776;
state_33776 = G__33887;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31944__auto__ = function(state_33776){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31944__auto____1.call(this,state_33776);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31944__auto____0;
cljs$core$async$mix_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31944__auto____1;
return cljs$core$async$mix_$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto___33839,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32059__auto__ = (function (){var statearr_33838 = f__32058__auto__.call(null);
(statearr_33838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto___33839);

return statearr_33838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto___33839,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args33888 = [];
var len__29680__auto___33891 = arguments.length;
var i__29681__auto___33892 = (0);
while(true){
if((i__29681__auto___33892 < len__29680__auto___33891)){
args33888.push((arguments[i__29681__auto___33892]));

var G__33893 = (i__29681__auto___33892 + (1));
i__29681__auto___33892 = G__33893;
continue;
} else {
}
break;
}

var G__33890 = args33888.length;
switch (G__33890) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33888.length)].join('')));

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
var args33896 = [];
var len__29680__auto___34021 = arguments.length;
var i__29681__auto___34022 = (0);
while(true){
if((i__29681__auto___34022 < len__29680__auto___34021)){
args33896.push((arguments[i__29681__auto___34022]));

var G__34023 = (i__29681__auto___34022 + (1));
i__29681__auto___34022 = G__34023;
continue;
} else {
}
break;
}

var G__33898 = args33896.length;
switch (G__33898) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33896.length)].join('')));

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
return (function (p1__33895_SHARP_){
if(cljs.core.truth_(p1__33895_SHARP_.call(null,topic))){
return p1__33895_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33895_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28459__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async33899 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33899 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33900){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33900 = meta33900;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33901,meta33900__$1){
var self__ = this;
var _33901__$1 = this;
return (new cljs.core.async.t_cljs$core$async33899(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33900__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33899.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33901){
var self__ = this;
var _33901__$1 = this;
return self__.meta33900;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33899.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33899.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33899.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33899.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33899.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async33899.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33899.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33899.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33900","meta33900",-194241833,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33899.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33899.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33899";

cljs.core.async.t_cljs$core$async33899.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__29116__auto__,writer__29117__auto__,opt__29118__auto__){
return cljs.core._write.call(null,writer__29117__auto__,"cljs.core.async/t_cljs$core$async33899");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async33899 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33899(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33900){
return (new cljs.core.async.t_cljs$core$async33899(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33900));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33899(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32057__auto___34025 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto___34025,mults,ensure_mult,p){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto___34025,mults,ensure_mult,p){
return (function (state_33973){
var state_val_33974 = (state_33973[(1)]);
if((state_val_33974 === (7))){
var inst_33969 = (state_33973[(2)]);
var state_33973__$1 = state_33973;
var statearr_33975_34026 = state_33973__$1;
(statearr_33975_34026[(2)] = inst_33969);

(statearr_33975_34026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33974 === (20))){
var state_33973__$1 = state_33973;
var statearr_33976_34027 = state_33973__$1;
(statearr_33976_34027[(2)] = null);

(statearr_33976_34027[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33974 === (1))){
var state_33973__$1 = state_33973;
var statearr_33977_34028 = state_33973__$1;
(statearr_33977_34028[(2)] = null);

(statearr_33977_34028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33974 === (24))){
var inst_33952 = (state_33973[(7)]);
var inst_33961 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33952);
var state_33973__$1 = state_33973;
var statearr_33978_34029 = state_33973__$1;
(statearr_33978_34029[(2)] = inst_33961);

(statearr_33978_34029[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33974 === (4))){
var inst_33904 = (state_33973[(8)]);
var inst_33904__$1 = (state_33973[(2)]);
var inst_33905 = (inst_33904__$1 == null);
var state_33973__$1 = (function (){var statearr_33979 = state_33973;
(statearr_33979[(8)] = inst_33904__$1);

return statearr_33979;
})();
if(cljs.core.truth_(inst_33905)){
var statearr_33980_34030 = state_33973__$1;
(statearr_33980_34030[(1)] = (5));

} else {
var statearr_33981_34031 = state_33973__$1;
(statearr_33981_34031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33974 === (15))){
var inst_33946 = (state_33973[(2)]);
var state_33973__$1 = state_33973;
var statearr_33982_34032 = state_33973__$1;
(statearr_33982_34032[(2)] = inst_33946);

(statearr_33982_34032[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33974 === (21))){
var inst_33966 = (state_33973[(2)]);
var state_33973__$1 = (function (){var statearr_33983 = state_33973;
(statearr_33983[(9)] = inst_33966);

return statearr_33983;
})();
var statearr_33984_34033 = state_33973__$1;
(statearr_33984_34033[(2)] = null);

(statearr_33984_34033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33974 === (13))){
var inst_33928 = (state_33973[(10)]);
var inst_33930 = cljs.core.chunked_seq_QMARK_.call(null,inst_33928);
var state_33973__$1 = state_33973;
if(inst_33930){
var statearr_33985_34034 = state_33973__$1;
(statearr_33985_34034[(1)] = (16));

} else {
var statearr_33986_34035 = state_33973__$1;
(statearr_33986_34035[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33974 === (22))){
var inst_33958 = (state_33973[(2)]);
var state_33973__$1 = state_33973;
if(cljs.core.truth_(inst_33958)){
var statearr_33987_34036 = state_33973__$1;
(statearr_33987_34036[(1)] = (23));

} else {
var statearr_33988_34037 = state_33973__$1;
(statearr_33988_34037[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33974 === (6))){
var inst_33904 = (state_33973[(8)]);
var inst_33952 = (state_33973[(7)]);
var inst_33954 = (state_33973[(11)]);
var inst_33952__$1 = topic_fn.call(null,inst_33904);
var inst_33953 = cljs.core.deref.call(null,mults);
var inst_33954__$1 = cljs.core.get.call(null,inst_33953,inst_33952__$1);
var state_33973__$1 = (function (){var statearr_33989 = state_33973;
(statearr_33989[(7)] = inst_33952__$1);

(statearr_33989[(11)] = inst_33954__$1);

return statearr_33989;
})();
if(cljs.core.truth_(inst_33954__$1)){
var statearr_33990_34038 = state_33973__$1;
(statearr_33990_34038[(1)] = (19));

} else {
var statearr_33991_34039 = state_33973__$1;
(statearr_33991_34039[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33974 === (25))){
var inst_33963 = (state_33973[(2)]);
var state_33973__$1 = state_33973;
var statearr_33992_34040 = state_33973__$1;
(statearr_33992_34040[(2)] = inst_33963);

(statearr_33992_34040[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33974 === (17))){
var inst_33928 = (state_33973[(10)]);
var inst_33937 = cljs.core.first.call(null,inst_33928);
var inst_33938 = cljs.core.async.muxch_STAR_.call(null,inst_33937);
var inst_33939 = cljs.core.async.close_BANG_.call(null,inst_33938);
var inst_33940 = cljs.core.next.call(null,inst_33928);
var inst_33914 = inst_33940;
var inst_33915 = null;
var inst_33916 = (0);
var inst_33917 = (0);
var state_33973__$1 = (function (){var statearr_33993 = state_33973;
(statearr_33993[(12)] = inst_33914);

(statearr_33993[(13)] = inst_33917);

(statearr_33993[(14)] = inst_33939);

(statearr_33993[(15)] = inst_33916);

(statearr_33993[(16)] = inst_33915);

return statearr_33993;
})();
var statearr_33994_34041 = state_33973__$1;
(statearr_33994_34041[(2)] = null);

(statearr_33994_34041[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33974 === (3))){
var inst_33971 = (state_33973[(2)]);
var state_33973__$1 = state_33973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33973__$1,inst_33971);
} else {
if((state_val_33974 === (12))){
var inst_33948 = (state_33973[(2)]);
var state_33973__$1 = state_33973;
var statearr_33995_34042 = state_33973__$1;
(statearr_33995_34042[(2)] = inst_33948);

(statearr_33995_34042[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33974 === (2))){
var state_33973__$1 = state_33973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33973__$1,(4),ch);
} else {
if((state_val_33974 === (23))){
var state_33973__$1 = state_33973;
var statearr_33996_34043 = state_33973__$1;
(statearr_33996_34043[(2)] = null);

(statearr_33996_34043[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33974 === (19))){
var inst_33904 = (state_33973[(8)]);
var inst_33954 = (state_33973[(11)]);
var inst_33956 = cljs.core.async.muxch_STAR_.call(null,inst_33954);
var state_33973__$1 = state_33973;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33973__$1,(22),inst_33956,inst_33904);
} else {
if((state_val_33974 === (11))){
var inst_33914 = (state_33973[(12)]);
var inst_33928 = (state_33973[(10)]);
var inst_33928__$1 = cljs.core.seq.call(null,inst_33914);
var state_33973__$1 = (function (){var statearr_33997 = state_33973;
(statearr_33997[(10)] = inst_33928__$1);

return statearr_33997;
})();
if(inst_33928__$1){
var statearr_33998_34044 = state_33973__$1;
(statearr_33998_34044[(1)] = (13));

} else {
var statearr_33999_34045 = state_33973__$1;
(statearr_33999_34045[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33974 === (9))){
var inst_33950 = (state_33973[(2)]);
var state_33973__$1 = state_33973;
var statearr_34000_34046 = state_33973__$1;
(statearr_34000_34046[(2)] = inst_33950);

(statearr_34000_34046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33974 === (5))){
var inst_33911 = cljs.core.deref.call(null,mults);
var inst_33912 = cljs.core.vals.call(null,inst_33911);
var inst_33913 = cljs.core.seq.call(null,inst_33912);
var inst_33914 = inst_33913;
var inst_33915 = null;
var inst_33916 = (0);
var inst_33917 = (0);
var state_33973__$1 = (function (){var statearr_34001 = state_33973;
(statearr_34001[(12)] = inst_33914);

(statearr_34001[(13)] = inst_33917);

(statearr_34001[(15)] = inst_33916);

(statearr_34001[(16)] = inst_33915);

return statearr_34001;
})();
var statearr_34002_34047 = state_33973__$1;
(statearr_34002_34047[(2)] = null);

(statearr_34002_34047[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33974 === (14))){
var state_33973__$1 = state_33973;
var statearr_34006_34048 = state_33973__$1;
(statearr_34006_34048[(2)] = null);

(statearr_34006_34048[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33974 === (16))){
var inst_33928 = (state_33973[(10)]);
var inst_33932 = cljs.core.chunk_first.call(null,inst_33928);
var inst_33933 = cljs.core.chunk_rest.call(null,inst_33928);
var inst_33934 = cljs.core.count.call(null,inst_33932);
var inst_33914 = inst_33933;
var inst_33915 = inst_33932;
var inst_33916 = inst_33934;
var inst_33917 = (0);
var state_33973__$1 = (function (){var statearr_34007 = state_33973;
(statearr_34007[(12)] = inst_33914);

(statearr_34007[(13)] = inst_33917);

(statearr_34007[(15)] = inst_33916);

(statearr_34007[(16)] = inst_33915);

return statearr_34007;
})();
var statearr_34008_34049 = state_33973__$1;
(statearr_34008_34049[(2)] = null);

(statearr_34008_34049[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33974 === (10))){
var inst_33914 = (state_33973[(12)]);
var inst_33917 = (state_33973[(13)]);
var inst_33916 = (state_33973[(15)]);
var inst_33915 = (state_33973[(16)]);
var inst_33922 = cljs.core._nth.call(null,inst_33915,inst_33917);
var inst_33923 = cljs.core.async.muxch_STAR_.call(null,inst_33922);
var inst_33924 = cljs.core.async.close_BANG_.call(null,inst_33923);
var inst_33925 = (inst_33917 + (1));
var tmp34003 = inst_33914;
var tmp34004 = inst_33916;
var tmp34005 = inst_33915;
var inst_33914__$1 = tmp34003;
var inst_33915__$1 = tmp34005;
var inst_33916__$1 = tmp34004;
var inst_33917__$1 = inst_33925;
var state_33973__$1 = (function (){var statearr_34009 = state_33973;
(statearr_34009[(17)] = inst_33924);

(statearr_34009[(12)] = inst_33914__$1);

(statearr_34009[(13)] = inst_33917__$1);

(statearr_34009[(15)] = inst_33916__$1);

(statearr_34009[(16)] = inst_33915__$1);

return statearr_34009;
})();
var statearr_34010_34050 = state_33973__$1;
(statearr_34010_34050[(2)] = null);

(statearr_34010_34050[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33974 === (18))){
var inst_33943 = (state_33973[(2)]);
var state_33973__$1 = state_33973;
var statearr_34011_34051 = state_33973__$1;
(statearr_34011_34051[(2)] = inst_33943);

(statearr_34011_34051[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33974 === (8))){
var inst_33917 = (state_33973[(13)]);
var inst_33916 = (state_33973[(15)]);
var inst_33919 = (inst_33917 < inst_33916);
var inst_33920 = inst_33919;
var state_33973__$1 = state_33973;
if(cljs.core.truth_(inst_33920)){
var statearr_34012_34052 = state_33973__$1;
(statearr_34012_34052[(1)] = (10));

} else {
var statearr_34013_34053 = state_33973__$1;
(statearr_34013_34053[(1)] = (11));

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
});})(c__32057__auto___34025,mults,ensure_mult,p))
;
return ((function (switch__31943__auto__,c__32057__auto___34025,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__31944__auto__ = null;
var cljs$core$async$state_machine__31944__auto____0 = (function (){
var statearr_34017 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34017[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_34017[(1)] = (1));

return statearr_34017;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_33973){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_33973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e34018){if((e34018 instanceof Object)){
var ex__31947__auto__ = e34018;
var statearr_34019_34054 = state_33973;
(statearr_34019_34054[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34055 = state_33973;
state_33973 = G__34055;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_33973){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_33973);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto___34025,mults,ensure_mult,p))
})();
var state__32059__auto__ = (function (){var statearr_34020 = f__32058__auto__.call(null);
(statearr_34020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto___34025);

return statearr_34020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto___34025,mults,ensure_mult,p))
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
var args34056 = [];
var len__29680__auto___34059 = arguments.length;
var i__29681__auto___34060 = (0);
while(true){
if((i__29681__auto___34060 < len__29680__auto___34059)){
args34056.push((arguments[i__29681__auto___34060]));

var G__34061 = (i__29681__auto___34060 + (1));
i__29681__auto___34060 = G__34061;
continue;
} else {
}
break;
}

var G__34058 = args34056.length;
switch (G__34058) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34056.length)].join('')));

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
var args34063 = [];
var len__29680__auto___34066 = arguments.length;
var i__29681__auto___34067 = (0);
while(true){
if((i__29681__auto___34067 < len__29680__auto___34066)){
args34063.push((arguments[i__29681__auto___34067]));

var G__34068 = (i__29681__auto___34067 + (1));
i__29681__auto___34067 = G__34068;
continue;
} else {
}
break;
}

var G__34065 = args34063.length;
switch (G__34065) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34063.length)].join('')));

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
var args34070 = [];
var len__29680__auto___34141 = arguments.length;
var i__29681__auto___34142 = (0);
while(true){
if((i__29681__auto___34142 < len__29680__auto___34141)){
args34070.push((arguments[i__29681__auto___34142]));

var G__34143 = (i__29681__auto___34142 + (1));
i__29681__auto___34142 = G__34143;
continue;
} else {
}
break;
}

var G__34072 = args34070.length;
switch (G__34072) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34070.length)].join('')));

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
var c__32057__auto___34145 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto___34145,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto___34145,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34111){
var state_val_34112 = (state_34111[(1)]);
if((state_val_34112 === (7))){
var state_34111__$1 = state_34111;
var statearr_34113_34146 = state_34111__$1;
(statearr_34113_34146[(2)] = null);

(statearr_34113_34146[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34112 === (1))){
var state_34111__$1 = state_34111;
var statearr_34114_34147 = state_34111__$1;
(statearr_34114_34147[(2)] = null);

(statearr_34114_34147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34112 === (4))){
var inst_34075 = (state_34111[(7)]);
var inst_34077 = (inst_34075 < cnt);
var state_34111__$1 = state_34111;
if(cljs.core.truth_(inst_34077)){
var statearr_34115_34148 = state_34111__$1;
(statearr_34115_34148[(1)] = (6));

} else {
var statearr_34116_34149 = state_34111__$1;
(statearr_34116_34149[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34112 === (15))){
var inst_34107 = (state_34111[(2)]);
var state_34111__$1 = state_34111;
var statearr_34117_34150 = state_34111__$1;
(statearr_34117_34150[(2)] = inst_34107);

(statearr_34117_34150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34112 === (13))){
var inst_34100 = cljs.core.async.close_BANG_.call(null,out);
var state_34111__$1 = state_34111;
var statearr_34118_34151 = state_34111__$1;
(statearr_34118_34151[(2)] = inst_34100);

(statearr_34118_34151[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34112 === (6))){
var state_34111__$1 = state_34111;
var statearr_34119_34152 = state_34111__$1;
(statearr_34119_34152[(2)] = null);

(statearr_34119_34152[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34112 === (3))){
var inst_34109 = (state_34111[(2)]);
var state_34111__$1 = state_34111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34111__$1,inst_34109);
} else {
if((state_val_34112 === (12))){
var inst_34097 = (state_34111[(8)]);
var inst_34097__$1 = (state_34111[(2)]);
var inst_34098 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34097__$1);
var state_34111__$1 = (function (){var statearr_34120 = state_34111;
(statearr_34120[(8)] = inst_34097__$1);

return statearr_34120;
})();
if(cljs.core.truth_(inst_34098)){
var statearr_34121_34153 = state_34111__$1;
(statearr_34121_34153[(1)] = (13));

} else {
var statearr_34122_34154 = state_34111__$1;
(statearr_34122_34154[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34112 === (2))){
var inst_34074 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_34075 = (0);
var state_34111__$1 = (function (){var statearr_34123 = state_34111;
(statearr_34123[(7)] = inst_34075);

(statearr_34123[(9)] = inst_34074);

return statearr_34123;
})();
var statearr_34124_34155 = state_34111__$1;
(statearr_34124_34155[(2)] = null);

(statearr_34124_34155[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34112 === (11))){
var inst_34075 = (state_34111[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34111,(10),Object,null,(9));
var inst_34084 = chs__$1.call(null,inst_34075);
var inst_34085 = done.call(null,inst_34075);
var inst_34086 = cljs.core.async.take_BANG_.call(null,inst_34084,inst_34085);
var state_34111__$1 = state_34111;
var statearr_34125_34156 = state_34111__$1;
(statearr_34125_34156[(2)] = inst_34086);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34111__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34112 === (9))){
var inst_34075 = (state_34111[(7)]);
var inst_34088 = (state_34111[(2)]);
var inst_34089 = (inst_34075 + (1));
var inst_34075__$1 = inst_34089;
var state_34111__$1 = (function (){var statearr_34126 = state_34111;
(statearr_34126[(10)] = inst_34088);

(statearr_34126[(7)] = inst_34075__$1);

return statearr_34126;
})();
var statearr_34127_34157 = state_34111__$1;
(statearr_34127_34157[(2)] = null);

(statearr_34127_34157[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34112 === (5))){
var inst_34095 = (state_34111[(2)]);
var state_34111__$1 = (function (){var statearr_34128 = state_34111;
(statearr_34128[(11)] = inst_34095);

return statearr_34128;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34111__$1,(12),dchan);
} else {
if((state_val_34112 === (14))){
var inst_34097 = (state_34111[(8)]);
var inst_34102 = cljs.core.apply.call(null,f,inst_34097);
var state_34111__$1 = state_34111;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34111__$1,(16),out,inst_34102);
} else {
if((state_val_34112 === (16))){
var inst_34104 = (state_34111[(2)]);
var state_34111__$1 = (function (){var statearr_34129 = state_34111;
(statearr_34129[(12)] = inst_34104);

return statearr_34129;
})();
var statearr_34130_34158 = state_34111__$1;
(statearr_34130_34158[(2)] = null);

(statearr_34130_34158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34112 === (10))){
var inst_34079 = (state_34111[(2)]);
var inst_34080 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34111__$1 = (function (){var statearr_34131 = state_34111;
(statearr_34131[(13)] = inst_34079);

return statearr_34131;
})();
var statearr_34132_34159 = state_34111__$1;
(statearr_34132_34159[(2)] = inst_34080);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34111__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34112 === (8))){
var inst_34093 = (state_34111[(2)]);
var state_34111__$1 = state_34111;
var statearr_34133_34160 = state_34111__$1;
(statearr_34133_34160[(2)] = inst_34093);

(statearr_34133_34160[(1)] = (5));


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
});})(c__32057__auto___34145,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__31943__auto__,c__32057__auto___34145,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__31944__auto__ = null;
var cljs$core$async$state_machine__31944__auto____0 = (function (){
var statearr_34137 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34137[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_34137[(1)] = (1));

return statearr_34137;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_34111){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_34111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e34138){if((e34138 instanceof Object)){
var ex__31947__auto__ = e34138;
var statearr_34139_34161 = state_34111;
(statearr_34139_34161[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34162 = state_34111;
state_34111 = G__34162;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_34111){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_34111);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto___34145,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32059__auto__ = (function (){var statearr_34140 = f__32058__auto__.call(null);
(statearr_34140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto___34145);

return statearr_34140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto___34145,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args34164 = [];
var len__29680__auto___34222 = arguments.length;
var i__29681__auto___34223 = (0);
while(true){
if((i__29681__auto___34223 < len__29680__auto___34222)){
args34164.push((arguments[i__29681__auto___34223]));

var G__34224 = (i__29681__auto___34223 + (1));
i__29681__auto___34223 = G__34224;
continue;
} else {
}
break;
}

var G__34166 = args34164.length;
switch (G__34166) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34164.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32057__auto___34226 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto___34226,out){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto___34226,out){
return (function (state_34198){
var state_val_34199 = (state_34198[(1)]);
if((state_val_34199 === (7))){
var inst_34178 = (state_34198[(7)]);
var inst_34177 = (state_34198[(8)]);
var inst_34177__$1 = (state_34198[(2)]);
var inst_34178__$1 = cljs.core.nth.call(null,inst_34177__$1,(0),null);
var inst_34179 = cljs.core.nth.call(null,inst_34177__$1,(1),null);
var inst_34180 = (inst_34178__$1 == null);
var state_34198__$1 = (function (){var statearr_34200 = state_34198;
(statearr_34200[(7)] = inst_34178__$1);

(statearr_34200[(9)] = inst_34179);

(statearr_34200[(8)] = inst_34177__$1);

return statearr_34200;
})();
if(cljs.core.truth_(inst_34180)){
var statearr_34201_34227 = state_34198__$1;
(statearr_34201_34227[(1)] = (8));

} else {
var statearr_34202_34228 = state_34198__$1;
(statearr_34202_34228[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34199 === (1))){
var inst_34167 = cljs.core.vec.call(null,chs);
var inst_34168 = inst_34167;
var state_34198__$1 = (function (){var statearr_34203 = state_34198;
(statearr_34203[(10)] = inst_34168);

return statearr_34203;
})();
var statearr_34204_34229 = state_34198__$1;
(statearr_34204_34229[(2)] = null);

(statearr_34204_34229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34199 === (4))){
var inst_34168 = (state_34198[(10)]);
var state_34198__$1 = state_34198;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34198__$1,(7),inst_34168);
} else {
if((state_val_34199 === (6))){
var inst_34194 = (state_34198[(2)]);
var state_34198__$1 = state_34198;
var statearr_34205_34230 = state_34198__$1;
(statearr_34205_34230[(2)] = inst_34194);

(statearr_34205_34230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34199 === (3))){
var inst_34196 = (state_34198[(2)]);
var state_34198__$1 = state_34198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34198__$1,inst_34196);
} else {
if((state_val_34199 === (2))){
var inst_34168 = (state_34198[(10)]);
var inst_34170 = cljs.core.count.call(null,inst_34168);
var inst_34171 = (inst_34170 > (0));
var state_34198__$1 = state_34198;
if(cljs.core.truth_(inst_34171)){
var statearr_34207_34231 = state_34198__$1;
(statearr_34207_34231[(1)] = (4));

} else {
var statearr_34208_34232 = state_34198__$1;
(statearr_34208_34232[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34199 === (11))){
var inst_34168 = (state_34198[(10)]);
var inst_34187 = (state_34198[(2)]);
var tmp34206 = inst_34168;
var inst_34168__$1 = tmp34206;
var state_34198__$1 = (function (){var statearr_34209 = state_34198;
(statearr_34209[(10)] = inst_34168__$1);

(statearr_34209[(11)] = inst_34187);

return statearr_34209;
})();
var statearr_34210_34233 = state_34198__$1;
(statearr_34210_34233[(2)] = null);

(statearr_34210_34233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34199 === (9))){
var inst_34178 = (state_34198[(7)]);
var state_34198__$1 = state_34198;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34198__$1,(11),out,inst_34178);
} else {
if((state_val_34199 === (5))){
var inst_34192 = cljs.core.async.close_BANG_.call(null,out);
var state_34198__$1 = state_34198;
var statearr_34211_34234 = state_34198__$1;
(statearr_34211_34234[(2)] = inst_34192);

(statearr_34211_34234[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34199 === (10))){
var inst_34190 = (state_34198[(2)]);
var state_34198__$1 = state_34198;
var statearr_34212_34235 = state_34198__$1;
(statearr_34212_34235[(2)] = inst_34190);

(statearr_34212_34235[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34199 === (8))){
var inst_34168 = (state_34198[(10)]);
var inst_34178 = (state_34198[(7)]);
var inst_34179 = (state_34198[(9)]);
var inst_34177 = (state_34198[(8)]);
var inst_34182 = (function (){var cs = inst_34168;
var vec__34173 = inst_34177;
var v = inst_34178;
var c = inst_34179;
return ((function (cs,vec__34173,v,c,inst_34168,inst_34178,inst_34179,inst_34177,state_val_34199,c__32057__auto___34226,out){
return (function (p1__34163_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34163_SHARP_);
});
;})(cs,vec__34173,v,c,inst_34168,inst_34178,inst_34179,inst_34177,state_val_34199,c__32057__auto___34226,out))
})();
var inst_34183 = cljs.core.filterv.call(null,inst_34182,inst_34168);
var inst_34168__$1 = inst_34183;
var state_34198__$1 = (function (){var statearr_34213 = state_34198;
(statearr_34213[(10)] = inst_34168__$1);

return statearr_34213;
})();
var statearr_34214_34236 = state_34198__$1;
(statearr_34214_34236[(2)] = null);

(statearr_34214_34236[(1)] = (2));


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
});})(c__32057__auto___34226,out))
;
return ((function (switch__31943__auto__,c__32057__auto___34226,out){
return (function() {
var cljs$core$async$state_machine__31944__auto__ = null;
var cljs$core$async$state_machine__31944__auto____0 = (function (){
var statearr_34218 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34218[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_34218[(1)] = (1));

return statearr_34218;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_34198){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_34198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e34219){if((e34219 instanceof Object)){
var ex__31947__auto__ = e34219;
var statearr_34220_34237 = state_34198;
(statearr_34220_34237[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34238 = state_34198;
state_34198 = G__34238;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_34198){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_34198);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto___34226,out))
})();
var state__32059__auto__ = (function (){var statearr_34221 = f__32058__auto__.call(null);
(statearr_34221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto___34226);

return statearr_34221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto___34226,out))
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
var args34239 = [];
var len__29680__auto___34288 = arguments.length;
var i__29681__auto___34289 = (0);
while(true){
if((i__29681__auto___34289 < len__29680__auto___34288)){
args34239.push((arguments[i__29681__auto___34289]));

var G__34290 = (i__29681__auto___34289 + (1));
i__29681__auto___34289 = G__34290;
continue;
} else {
}
break;
}

var G__34241 = args34239.length;
switch (G__34241) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34239.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32057__auto___34292 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto___34292,out){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto___34292,out){
return (function (state_34265){
var state_val_34266 = (state_34265[(1)]);
if((state_val_34266 === (7))){
var inst_34247 = (state_34265[(7)]);
var inst_34247__$1 = (state_34265[(2)]);
var inst_34248 = (inst_34247__$1 == null);
var inst_34249 = cljs.core.not.call(null,inst_34248);
var state_34265__$1 = (function (){var statearr_34267 = state_34265;
(statearr_34267[(7)] = inst_34247__$1);

return statearr_34267;
})();
if(inst_34249){
var statearr_34268_34293 = state_34265__$1;
(statearr_34268_34293[(1)] = (8));

} else {
var statearr_34269_34294 = state_34265__$1;
(statearr_34269_34294[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34266 === (1))){
var inst_34242 = (0);
var state_34265__$1 = (function (){var statearr_34270 = state_34265;
(statearr_34270[(8)] = inst_34242);

return statearr_34270;
})();
var statearr_34271_34295 = state_34265__$1;
(statearr_34271_34295[(2)] = null);

(statearr_34271_34295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34266 === (4))){
var state_34265__$1 = state_34265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34265__$1,(7),ch);
} else {
if((state_val_34266 === (6))){
var inst_34260 = (state_34265[(2)]);
var state_34265__$1 = state_34265;
var statearr_34272_34296 = state_34265__$1;
(statearr_34272_34296[(2)] = inst_34260);

(statearr_34272_34296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34266 === (3))){
var inst_34262 = (state_34265[(2)]);
var inst_34263 = cljs.core.async.close_BANG_.call(null,out);
var state_34265__$1 = (function (){var statearr_34273 = state_34265;
(statearr_34273[(9)] = inst_34262);

return statearr_34273;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34265__$1,inst_34263);
} else {
if((state_val_34266 === (2))){
var inst_34242 = (state_34265[(8)]);
var inst_34244 = (inst_34242 < n);
var state_34265__$1 = state_34265;
if(cljs.core.truth_(inst_34244)){
var statearr_34274_34297 = state_34265__$1;
(statearr_34274_34297[(1)] = (4));

} else {
var statearr_34275_34298 = state_34265__$1;
(statearr_34275_34298[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34266 === (11))){
var inst_34242 = (state_34265[(8)]);
var inst_34252 = (state_34265[(2)]);
var inst_34253 = (inst_34242 + (1));
var inst_34242__$1 = inst_34253;
var state_34265__$1 = (function (){var statearr_34276 = state_34265;
(statearr_34276[(8)] = inst_34242__$1);

(statearr_34276[(10)] = inst_34252);

return statearr_34276;
})();
var statearr_34277_34299 = state_34265__$1;
(statearr_34277_34299[(2)] = null);

(statearr_34277_34299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34266 === (9))){
var state_34265__$1 = state_34265;
var statearr_34278_34300 = state_34265__$1;
(statearr_34278_34300[(2)] = null);

(statearr_34278_34300[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34266 === (5))){
var state_34265__$1 = state_34265;
var statearr_34279_34301 = state_34265__$1;
(statearr_34279_34301[(2)] = null);

(statearr_34279_34301[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34266 === (10))){
var inst_34257 = (state_34265[(2)]);
var state_34265__$1 = state_34265;
var statearr_34280_34302 = state_34265__$1;
(statearr_34280_34302[(2)] = inst_34257);

(statearr_34280_34302[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34266 === (8))){
var inst_34247 = (state_34265[(7)]);
var state_34265__$1 = state_34265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34265__$1,(11),out,inst_34247);
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
});})(c__32057__auto___34292,out))
;
return ((function (switch__31943__auto__,c__32057__auto___34292,out){
return (function() {
var cljs$core$async$state_machine__31944__auto__ = null;
var cljs$core$async$state_machine__31944__auto____0 = (function (){
var statearr_34284 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34284[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_34284[(1)] = (1));

return statearr_34284;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_34265){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_34265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e34285){if((e34285 instanceof Object)){
var ex__31947__auto__ = e34285;
var statearr_34286_34303 = state_34265;
(statearr_34286_34303[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34304 = state_34265;
state_34265 = G__34304;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_34265){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_34265);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto___34292,out))
})();
var state__32059__auto__ = (function (){var statearr_34287 = f__32058__auto__.call(null);
(statearr_34287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto___34292);

return statearr_34287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto___34292,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34312 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34312 = (function (f,ch,meta34313){
this.f = f;
this.ch = ch;
this.meta34313 = meta34313;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34314,meta34313__$1){
var self__ = this;
var _34314__$1 = this;
return (new cljs.core.async.t_cljs$core$async34312(self__.f,self__.ch,meta34313__$1));
});

cljs.core.async.t_cljs$core$async34312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34314){
var self__ = this;
var _34314__$1 = this;
return self__.meta34313;
});

cljs.core.async.t_cljs$core$async34312.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34312.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34312.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34312.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34312.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async34315 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34315 = (function (f,ch,meta34313,_,fn1,meta34316){
this.f = f;
this.ch = ch;
this.meta34313 = meta34313;
this._ = _;
this.fn1 = fn1;
this.meta34316 = meta34316;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34317,meta34316__$1){
var self__ = this;
var _34317__$1 = this;
return (new cljs.core.async.t_cljs$core$async34315(self__.f,self__.ch,self__.meta34313,self__._,self__.fn1,meta34316__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34315.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34317){
var self__ = this;
var _34317__$1 = this;
return self__.meta34316;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34315.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34315.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34315.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34315.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34305_SHARP_){
return f1.call(null,(((p1__34305_SHARP_ == null))?null:self__.f.call(null,p1__34305_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34315.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34313","meta34313",-1557079289,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34312","cljs.core.async/t_cljs$core$async34312",-1819668995,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34316","meta34316",1731630655,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34315.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34315.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34315";

cljs.core.async.t_cljs$core$async34315.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__29116__auto__,writer__29117__auto__,opt__29118__auto__){
return cljs.core._write.call(null,writer__29117__auto__,"cljs.core.async/t_cljs$core$async34315");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async34315 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34315(f__$1,ch__$1,meta34313__$1,___$2,fn1__$1,meta34316){
return (new cljs.core.async.t_cljs$core$async34315(f__$1,ch__$1,meta34313__$1,___$2,fn1__$1,meta34316));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34315(self__.f,self__.ch,self__.meta34313,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async34312.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34312.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34312.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34313","meta34313",-1557079289,null)], null);
});

cljs.core.async.t_cljs$core$async34312.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34312.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34312";

cljs.core.async.t_cljs$core$async34312.cljs$lang$ctorPrWriter = (function (this__29116__auto__,writer__29117__auto__,opt__29118__auto__){
return cljs.core._write.call(null,writer__29117__auto__,"cljs.core.async/t_cljs$core$async34312");
});

cljs.core.async.__GT_t_cljs$core$async34312 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34312(f__$1,ch__$1,meta34313){
return (new cljs.core.async.t_cljs$core$async34312(f__$1,ch__$1,meta34313));
});

}

return (new cljs.core.async.t_cljs$core$async34312(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34321 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34321 = (function (f,ch,meta34322){
this.f = f;
this.ch = ch;
this.meta34322 = meta34322;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34323,meta34322__$1){
var self__ = this;
var _34323__$1 = this;
return (new cljs.core.async.t_cljs$core$async34321(self__.f,self__.ch,meta34322__$1));
});

cljs.core.async.t_cljs$core$async34321.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34323){
var self__ = this;
var _34323__$1 = this;
return self__.meta34322;
});

cljs.core.async.t_cljs$core$async34321.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34321.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34321.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34321.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34321.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34321.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34321.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34322","meta34322",1425612793,null)], null);
});

cljs.core.async.t_cljs$core$async34321.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34321.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34321";

cljs.core.async.t_cljs$core$async34321.cljs$lang$ctorPrWriter = (function (this__29116__auto__,writer__29117__auto__,opt__29118__auto__){
return cljs.core._write.call(null,writer__29117__auto__,"cljs.core.async/t_cljs$core$async34321");
});

cljs.core.async.__GT_t_cljs$core$async34321 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34321(f__$1,ch__$1,meta34322){
return (new cljs.core.async.t_cljs$core$async34321(f__$1,ch__$1,meta34322));
});

}

return (new cljs.core.async.t_cljs$core$async34321(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async34327 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34327 = (function (p,ch,meta34328){
this.p = p;
this.ch = ch;
this.meta34328 = meta34328;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34329,meta34328__$1){
var self__ = this;
var _34329__$1 = this;
return (new cljs.core.async.t_cljs$core$async34327(self__.p,self__.ch,meta34328__$1));
});

cljs.core.async.t_cljs$core$async34327.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34329){
var self__ = this;
var _34329__$1 = this;
return self__.meta34328;
});

cljs.core.async.t_cljs$core$async34327.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34327.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34327.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34327.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34327.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34327.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34327.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34327.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34328","meta34328",-2069279291,null)], null);
});

cljs.core.async.t_cljs$core$async34327.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34327.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34327";

cljs.core.async.t_cljs$core$async34327.cljs$lang$ctorPrWriter = (function (this__29116__auto__,writer__29117__auto__,opt__29118__auto__){
return cljs.core._write.call(null,writer__29117__auto__,"cljs.core.async/t_cljs$core$async34327");
});

cljs.core.async.__GT_t_cljs$core$async34327 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34327(p__$1,ch__$1,meta34328){
return (new cljs.core.async.t_cljs$core$async34327(p__$1,ch__$1,meta34328));
});

}

return (new cljs.core.async.t_cljs$core$async34327(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args34330 = [];
var len__29680__auto___34374 = arguments.length;
var i__29681__auto___34375 = (0);
while(true){
if((i__29681__auto___34375 < len__29680__auto___34374)){
args34330.push((arguments[i__29681__auto___34375]));

var G__34376 = (i__29681__auto___34375 + (1));
i__29681__auto___34375 = G__34376;
continue;
} else {
}
break;
}

var G__34332 = args34330.length;
switch (G__34332) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34330.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32057__auto___34378 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto___34378,out){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto___34378,out){
return (function (state_34353){
var state_val_34354 = (state_34353[(1)]);
if((state_val_34354 === (7))){
var inst_34349 = (state_34353[(2)]);
var state_34353__$1 = state_34353;
var statearr_34355_34379 = state_34353__$1;
(statearr_34355_34379[(2)] = inst_34349);

(statearr_34355_34379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34354 === (1))){
var state_34353__$1 = state_34353;
var statearr_34356_34380 = state_34353__$1;
(statearr_34356_34380[(2)] = null);

(statearr_34356_34380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34354 === (4))){
var inst_34335 = (state_34353[(7)]);
var inst_34335__$1 = (state_34353[(2)]);
var inst_34336 = (inst_34335__$1 == null);
var state_34353__$1 = (function (){var statearr_34357 = state_34353;
(statearr_34357[(7)] = inst_34335__$1);

return statearr_34357;
})();
if(cljs.core.truth_(inst_34336)){
var statearr_34358_34381 = state_34353__$1;
(statearr_34358_34381[(1)] = (5));

} else {
var statearr_34359_34382 = state_34353__$1;
(statearr_34359_34382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34354 === (6))){
var inst_34335 = (state_34353[(7)]);
var inst_34340 = p.call(null,inst_34335);
var state_34353__$1 = state_34353;
if(cljs.core.truth_(inst_34340)){
var statearr_34360_34383 = state_34353__$1;
(statearr_34360_34383[(1)] = (8));

} else {
var statearr_34361_34384 = state_34353__$1;
(statearr_34361_34384[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34354 === (3))){
var inst_34351 = (state_34353[(2)]);
var state_34353__$1 = state_34353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34353__$1,inst_34351);
} else {
if((state_val_34354 === (2))){
var state_34353__$1 = state_34353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34353__$1,(4),ch);
} else {
if((state_val_34354 === (11))){
var inst_34343 = (state_34353[(2)]);
var state_34353__$1 = state_34353;
var statearr_34362_34385 = state_34353__$1;
(statearr_34362_34385[(2)] = inst_34343);

(statearr_34362_34385[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34354 === (9))){
var state_34353__$1 = state_34353;
var statearr_34363_34386 = state_34353__$1;
(statearr_34363_34386[(2)] = null);

(statearr_34363_34386[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34354 === (5))){
var inst_34338 = cljs.core.async.close_BANG_.call(null,out);
var state_34353__$1 = state_34353;
var statearr_34364_34387 = state_34353__$1;
(statearr_34364_34387[(2)] = inst_34338);

(statearr_34364_34387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34354 === (10))){
var inst_34346 = (state_34353[(2)]);
var state_34353__$1 = (function (){var statearr_34365 = state_34353;
(statearr_34365[(8)] = inst_34346);

return statearr_34365;
})();
var statearr_34366_34388 = state_34353__$1;
(statearr_34366_34388[(2)] = null);

(statearr_34366_34388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34354 === (8))){
var inst_34335 = (state_34353[(7)]);
var state_34353__$1 = state_34353;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34353__$1,(11),out,inst_34335);
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
});})(c__32057__auto___34378,out))
;
return ((function (switch__31943__auto__,c__32057__auto___34378,out){
return (function() {
var cljs$core$async$state_machine__31944__auto__ = null;
var cljs$core$async$state_machine__31944__auto____0 = (function (){
var statearr_34370 = [null,null,null,null,null,null,null,null,null];
(statearr_34370[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_34370[(1)] = (1));

return statearr_34370;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_34353){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_34353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e34371){if((e34371 instanceof Object)){
var ex__31947__auto__ = e34371;
var statearr_34372_34389 = state_34353;
(statearr_34372_34389[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34390 = state_34353;
state_34353 = G__34390;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_34353){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_34353);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto___34378,out))
})();
var state__32059__auto__ = (function (){var statearr_34373 = f__32058__auto__.call(null);
(statearr_34373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto___34378);

return statearr_34373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto___34378,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args34391 = [];
var len__29680__auto___34394 = arguments.length;
var i__29681__auto___34395 = (0);
while(true){
if((i__29681__auto___34395 < len__29680__auto___34394)){
args34391.push((arguments[i__29681__auto___34395]));

var G__34396 = (i__29681__auto___34395 + (1));
i__29681__auto___34395 = G__34396;
continue;
} else {
}
break;
}

var G__34393 = args34391.length;
switch (G__34393) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34391.length)].join('')));

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
return (function (state_34563){
var state_val_34564 = (state_34563[(1)]);
if((state_val_34564 === (7))){
var inst_34559 = (state_34563[(2)]);
var state_34563__$1 = state_34563;
var statearr_34565_34606 = state_34563__$1;
(statearr_34565_34606[(2)] = inst_34559);

(statearr_34565_34606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (20))){
var inst_34529 = (state_34563[(7)]);
var inst_34540 = (state_34563[(2)]);
var inst_34541 = cljs.core.next.call(null,inst_34529);
var inst_34515 = inst_34541;
var inst_34516 = null;
var inst_34517 = (0);
var inst_34518 = (0);
var state_34563__$1 = (function (){var statearr_34566 = state_34563;
(statearr_34566[(8)] = inst_34515);

(statearr_34566[(9)] = inst_34540);

(statearr_34566[(10)] = inst_34517);

(statearr_34566[(11)] = inst_34516);

(statearr_34566[(12)] = inst_34518);

return statearr_34566;
})();
var statearr_34567_34607 = state_34563__$1;
(statearr_34567_34607[(2)] = null);

(statearr_34567_34607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (1))){
var state_34563__$1 = state_34563;
var statearr_34568_34608 = state_34563__$1;
(statearr_34568_34608[(2)] = null);

(statearr_34568_34608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (4))){
var inst_34504 = (state_34563[(13)]);
var inst_34504__$1 = (state_34563[(2)]);
var inst_34505 = (inst_34504__$1 == null);
var state_34563__$1 = (function (){var statearr_34569 = state_34563;
(statearr_34569[(13)] = inst_34504__$1);

return statearr_34569;
})();
if(cljs.core.truth_(inst_34505)){
var statearr_34570_34609 = state_34563__$1;
(statearr_34570_34609[(1)] = (5));

} else {
var statearr_34571_34610 = state_34563__$1;
(statearr_34571_34610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (15))){
var state_34563__$1 = state_34563;
var statearr_34575_34611 = state_34563__$1;
(statearr_34575_34611[(2)] = null);

(statearr_34575_34611[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (21))){
var state_34563__$1 = state_34563;
var statearr_34576_34612 = state_34563__$1;
(statearr_34576_34612[(2)] = null);

(statearr_34576_34612[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (13))){
var inst_34515 = (state_34563[(8)]);
var inst_34517 = (state_34563[(10)]);
var inst_34516 = (state_34563[(11)]);
var inst_34518 = (state_34563[(12)]);
var inst_34525 = (state_34563[(2)]);
var inst_34526 = (inst_34518 + (1));
var tmp34572 = inst_34515;
var tmp34573 = inst_34517;
var tmp34574 = inst_34516;
var inst_34515__$1 = tmp34572;
var inst_34516__$1 = tmp34574;
var inst_34517__$1 = tmp34573;
var inst_34518__$1 = inst_34526;
var state_34563__$1 = (function (){var statearr_34577 = state_34563;
(statearr_34577[(8)] = inst_34515__$1);

(statearr_34577[(14)] = inst_34525);

(statearr_34577[(10)] = inst_34517__$1);

(statearr_34577[(11)] = inst_34516__$1);

(statearr_34577[(12)] = inst_34518__$1);

return statearr_34577;
})();
var statearr_34578_34613 = state_34563__$1;
(statearr_34578_34613[(2)] = null);

(statearr_34578_34613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (22))){
var state_34563__$1 = state_34563;
var statearr_34579_34614 = state_34563__$1;
(statearr_34579_34614[(2)] = null);

(statearr_34579_34614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (6))){
var inst_34504 = (state_34563[(13)]);
var inst_34513 = f.call(null,inst_34504);
var inst_34514 = cljs.core.seq.call(null,inst_34513);
var inst_34515 = inst_34514;
var inst_34516 = null;
var inst_34517 = (0);
var inst_34518 = (0);
var state_34563__$1 = (function (){var statearr_34580 = state_34563;
(statearr_34580[(8)] = inst_34515);

(statearr_34580[(10)] = inst_34517);

(statearr_34580[(11)] = inst_34516);

(statearr_34580[(12)] = inst_34518);

return statearr_34580;
})();
var statearr_34581_34615 = state_34563__$1;
(statearr_34581_34615[(2)] = null);

(statearr_34581_34615[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (17))){
var inst_34529 = (state_34563[(7)]);
var inst_34533 = cljs.core.chunk_first.call(null,inst_34529);
var inst_34534 = cljs.core.chunk_rest.call(null,inst_34529);
var inst_34535 = cljs.core.count.call(null,inst_34533);
var inst_34515 = inst_34534;
var inst_34516 = inst_34533;
var inst_34517 = inst_34535;
var inst_34518 = (0);
var state_34563__$1 = (function (){var statearr_34582 = state_34563;
(statearr_34582[(8)] = inst_34515);

(statearr_34582[(10)] = inst_34517);

(statearr_34582[(11)] = inst_34516);

(statearr_34582[(12)] = inst_34518);

return statearr_34582;
})();
var statearr_34583_34616 = state_34563__$1;
(statearr_34583_34616[(2)] = null);

(statearr_34583_34616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (3))){
var inst_34561 = (state_34563[(2)]);
var state_34563__$1 = state_34563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34563__$1,inst_34561);
} else {
if((state_val_34564 === (12))){
var inst_34549 = (state_34563[(2)]);
var state_34563__$1 = state_34563;
var statearr_34584_34617 = state_34563__$1;
(statearr_34584_34617[(2)] = inst_34549);

(statearr_34584_34617[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (2))){
var state_34563__$1 = state_34563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34563__$1,(4),in$);
} else {
if((state_val_34564 === (23))){
var inst_34557 = (state_34563[(2)]);
var state_34563__$1 = state_34563;
var statearr_34585_34618 = state_34563__$1;
(statearr_34585_34618[(2)] = inst_34557);

(statearr_34585_34618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (19))){
var inst_34544 = (state_34563[(2)]);
var state_34563__$1 = state_34563;
var statearr_34586_34619 = state_34563__$1;
(statearr_34586_34619[(2)] = inst_34544);

(statearr_34586_34619[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (11))){
var inst_34529 = (state_34563[(7)]);
var inst_34515 = (state_34563[(8)]);
var inst_34529__$1 = cljs.core.seq.call(null,inst_34515);
var state_34563__$1 = (function (){var statearr_34587 = state_34563;
(statearr_34587[(7)] = inst_34529__$1);

return statearr_34587;
})();
if(inst_34529__$1){
var statearr_34588_34620 = state_34563__$1;
(statearr_34588_34620[(1)] = (14));

} else {
var statearr_34589_34621 = state_34563__$1;
(statearr_34589_34621[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (9))){
var inst_34551 = (state_34563[(2)]);
var inst_34552 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34563__$1 = (function (){var statearr_34590 = state_34563;
(statearr_34590[(15)] = inst_34551);

return statearr_34590;
})();
if(cljs.core.truth_(inst_34552)){
var statearr_34591_34622 = state_34563__$1;
(statearr_34591_34622[(1)] = (21));

} else {
var statearr_34592_34623 = state_34563__$1;
(statearr_34592_34623[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (5))){
var inst_34507 = cljs.core.async.close_BANG_.call(null,out);
var state_34563__$1 = state_34563;
var statearr_34593_34624 = state_34563__$1;
(statearr_34593_34624[(2)] = inst_34507);

(statearr_34593_34624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (14))){
var inst_34529 = (state_34563[(7)]);
var inst_34531 = cljs.core.chunked_seq_QMARK_.call(null,inst_34529);
var state_34563__$1 = state_34563;
if(inst_34531){
var statearr_34594_34625 = state_34563__$1;
(statearr_34594_34625[(1)] = (17));

} else {
var statearr_34595_34626 = state_34563__$1;
(statearr_34595_34626[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (16))){
var inst_34547 = (state_34563[(2)]);
var state_34563__$1 = state_34563;
var statearr_34596_34627 = state_34563__$1;
(statearr_34596_34627[(2)] = inst_34547);

(statearr_34596_34627[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34564 === (10))){
var inst_34516 = (state_34563[(11)]);
var inst_34518 = (state_34563[(12)]);
var inst_34523 = cljs.core._nth.call(null,inst_34516,inst_34518);
var state_34563__$1 = state_34563;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34563__$1,(13),out,inst_34523);
} else {
if((state_val_34564 === (18))){
var inst_34529 = (state_34563[(7)]);
var inst_34538 = cljs.core.first.call(null,inst_34529);
var state_34563__$1 = state_34563;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34563__$1,(20),out,inst_34538);
} else {
if((state_val_34564 === (8))){
var inst_34517 = (state_34563[(10)]);
var inst_34518 = (state_34563[(12)]);
var inst_34520 = (inst_34518 < inst_34517);
var inst_34521 = inst_34520;
var state_34563__$1 = state_34563;
if(cljs.core.truth_(inst_34521)){
var statearr_34597_34628 = state_34563__$1;
(statearr_34597_34628[(1)] = (10));

} else {
var statearr_34598_34629 = state_34563__$1;
(statearr_34598_34629[(1)] = (11));

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
var statearr_34602 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34602[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31944__auto__);

(statearr_34602[(1)] = (1));

return statearr_34602;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31944__auto____1 = (function (state_34563){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_34563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e34603){if((e34603 instanceof Object)){
var ex__31947__auto__ = e34603;
var statearr_34604_34630 = state_34563;
(statearr_34604_34630[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34631 = state_34563;
state_34563 = G__34631;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31944__auto__ = function(state_34563){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31944__auto____1.call(this,state_34563);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31944__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31944__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto__))
})();
var state__32059__auto__ = (function (){var statearr_34605 = f__32058__auto__.call(null);
(statearr_34605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto__);

return statearr_34605;
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
var args34632 = [];
var len__29680__auto___34635 = arguments.length;
var i__29681__auto___34636 = (0);
while(true){
if((i__29681__auto___34636 < len__29680__auto___34635)){
args34632.push((arguments[i__29681__auto___34636]));

var G__34637 = (i__29681__auto___34636 + (1));
i__29681__auto___34636 = G__34637;
continue;
} else {
}
break;
}

var G__34634 = args34632.length;
switch (G__34634) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34632.length)].join('')));

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
var args34639 = [];
var len__29680__auto___34642 = arguments.length;
var i__29681__auto___34643 = (0);
while(true){
if((i__29681__auto___34643 < len__29680__auto___34642)){
args34639.push((arguments[i__29681__auto___34643]));

var G__34644 = (i__29681__auto___34643 + (1));
i__29681__auto___34643 = G__34644;
continue;
} else {
}
break;
}

var G__34641 = args34639.length;
switch (G__34641) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34639.length)].join('')));

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
var args34646 = [];
var len__29680__auto___34697 = arguments.length;
var i__29681__auto___34698 = (0);
while(true){
if((i__29681__auto___34698 < len__29680__auto___34697)){
args34646.push((arguments[i__29681__auto___34698]));

var G__34699 = (i__29681__auto___34698 + (1));
i__29681__auto___34698 = G__34699;
continue;
} else {
}
break;
}

var G__34648 = args34646.length;
switch (G__34648) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34646.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32057__auto___34701 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto___34701,out){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto___34701,out){
return (function (state_34672){
var state_val_34673 = (state_34672[(1)]);
if((state_val_34673 === (7))){
var inst_34667 = (state_34672[(2)]);
var state_34672__$1 = state_34672;
var statearr_34674_34702 = state_34672__$1;
(statearr_34674_34702[(2)] = inst_34667);

(statearr_34674_34702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34673 === (1))){
var inst_34649 = null;
var state_34672__$1 = (function (){var statearr_34675 = state_34672;
(statearr_34675[(7)] = inst_34649);

return statearr_34675;
})();
var statearr_34676_34703 = state_34672__$1;
(statearr_34676_34703[(2)] = null);

(statearr_34676_34703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34673 === (4))){
var inst_34652 = (state_34672[(8)]);
var inst_34652__$1 = (state_34672[(2)]);
var inst_34653 = (inst_34652__$1 == null);
var inst_34654 = cljs.core.not.call(null,inst_34653);
var state_34672__$1 = (function (){var statearr_34677 = state_34672;
(statearr_34677[(8)] = inst_34652__$1);

return statearr_34677;
})();
if(inst_34654){
var statearr_34678_34704 = state_34672__$1;
(statearr_34678_34704[(1)] = (5));

} else {
var statearr_34679_34705 = state_34672__$1;
(statearr_34679_34705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34673 === (6))){
var state_34672__$1 = state_34672;
var statearr_34680_34706 = state_34672__$1;
(statearr_34680_34706[(2)] = null);

(statearr_34680_34706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34673 === (3))){
var inst_34669 = (state_34672[(2)]);
var inst_34670 = cljs.core.async.close_BANG_.call(null,out);
var state_34672__$1 = (function (){var statearr_34681 = state_34672;
(statearr_34681[(9)] = inst_34669);

return statearr_34681;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34672__$1,inst_34670);
} else {
if((state_val_34673 === (2))){
var state_34672__$1 = state_34672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34672__$1,(4),ch);
} else {
if((state_val_34673 === (11))){
var inst_34652 = (state_34672[(8)]);
var inst_34661 = (state_34672[(2)]);
var inst_34649 = inst_34652;
var state_34672__$1 = (function (){var statearr_34682 = state_34672;
(statearr_34682[(10)] = inst_34661);

(statearr_34682[(7)] = inst_34649);

return statearr_34682;
})();
var statearr_34683_34707 = state_34672__$1;
(statearr_34683_34707[(2)] = null);

(statearr_34683_34707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34673 === (9))){
var inst_34652 = (state_34672[(8)]);
var state_34672__$1 = state_34672;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34672__$1,(11),out,inst_34652);
} else {
if((state_val_34673 === (5))){
var inst_34652 = (state_34672[(8)]);
var inst_34649 = (state_34672[(7)]);
var inst_34656 = cljs.core._EQ_.call(null,inst_34652,inst_34649);
var state_34672__$1 = state_34672;
if(inst_34656){
var statearr_34685_34708 = state_34672__$1;
(statearr_34685_34708[(1)] = (8));

} else {
var statearr_34686_34709 = state_34672__$1;
(statearr_34686_34709[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34673 === (10))){
var inst_34664 = (state_34672[(2)]);
var state_34672__$1 = state_34672;
var statearr_34687_34710 = state_34672__$1;
(statearr_34687_34710[(2)] = inst_34664);

(statearr_34687_34710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34673 === (8))){
var inst_34649 = (state_34672[(7)]);
var tmp34684 = inst_34649;
var inst_34649__$1 = tmp34684;
var state_34672__$1 = (function (){var statearr_34688 = state_34672;
(statearr_34688[(7)] = inst_34649__$1);

return statearr_34688;
})();
var statearr_34689_34711 = state_34672__$1;
(statearr_34689_34711[(2)] = null);

(statearr_34689_34711[(1)] = (2));


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
});})(c__32057__auto___34701,out))
;
return ((function (switch__31943__auto__,c__32057__auto___34701,out){
return (function() {
var cljs$core$async$state_machine__31944__auto__ = null;
var cljs$core$async$state_machine__31944__auto____0 = (function (){
var statearr_34693 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34693[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_34693[(1)] = (1));

return statearr_34693;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_34672){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_34672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e34694){if((e34694 instanceof Object)){
var ex__31947__auto__ = e34694;
var statearr_34695_34712 = state_34672;
(statearr_34695_34712[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34713 = state_34672;
state_34672 = G__34713;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_34672){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_34672);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto___34701,out))
})();
var state__32059__auto__ = (function (){var statearr_34696 = f__32058__auto__.call(null);
(statearr_34696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto___34701);

return statearr_34696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto___34701,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args34714 = [];
var len__29680__auto___34784 = arguments.length;
var i__29681__auto___34785 = (0);
while(true){
if((i__29681__auto___34785 < len__29680__auto___34784)){
args34714.push((arguments[i__29681__auto___34785]));

var G__34786 = (i__29681__auto___34785 + (1));
i__29681__auto___34785 = G__34786;
continue;
} else {
}
break;
}

var G__34716 = args34714.length;
switch (G__34716) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34714.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32057__auto___34788 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto___34788,out){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto___34788,out){
return (function (state_34754){
var state_val_34755 = (state_34754[(1)]);
if((state_val_34755 === (7))){
var inst_34750 = (state_34754[(2)]);
var state_34754__$1 = state_34754;
var statearr_34756_34789 = state_34754__$1;
(statearr_34756_34789[(2)] = inst_34750);

(statearr_34756_34789[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34755 === (1))){
var inst_34717 = (new Array(n));
var inst_34718 = inst_34717;
var inst_34719 = (0);
var state_34754__$1 = (function (){var statearr_34757 = state_34754;
(statearr_34757[(7)] = inst_34718);

(statearr_34757[(8)] = inst_34719);

return statearr_34757;
})();
var statearr_34758_34790 = state_34754__$1;
(statearr_34758_34790[(2)] = null);

(statearr_34758_34790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34755 === (4))){
var inst_34722 = (state_34754[(9)]);
var inst_34722__$1 = (state_34754[(2)]);
var inst_34723 = (inst_34722__$1 == null);
var inst_34724 = cljs.core.not.call(null,inst_34723);
var state_34754__$1 = (function (){var statearr_34759 = state_34754;
(statearr_34759[(9)] = inst_34722__$1);

return statearr_34759;
})();
if(inst_34724){
var statearr_34760_34791 = state_34754__$1;
(statearr_34760_34791[(1)] = (5));

} else {
var statearr_34761_34792 = state_34754__$1;
(statearr_34761_34792[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34755 === (15))){
var inst_34744 = (state_34754[(2)]);
var state_34754__$1 = state_34754;
var statearr_34762_34793 = state_34754__$1;
(statearr_34762_34793[(2)] = inst_34744);

(statearr_34762_34793[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34755 === (13))){
var state_34754__$1 = state_34754;
var statearr_34763_34794 = state_34754__$1;
(statearr_34763_34794[(2)] = null);

(statearr_34763_34794[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34755 === (6))){
var inst_34719 = (state_34754[(8)]);
var inst_34740 = (inst_34719 > (0));
var state_34754__$1 = state_34754;
if(cljs.core.truth_(inst_34740)){
var statearr_34764_34795 = state_34754__$1;
(statearr_34764_34795[(1)] = (12));

} else {
var statearr_34765_34796 = state_34754__$1;
(statearr_34765_34796[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34755 === (3))){
var inst_34752 = (state_34754[(2)]);
var state_34754__$1 = state_34754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34754__$1,inst_34752);
} else {
if((state_val_34755 === (12))){
var inst_34718 = (state_34754[(7)]);
var inst_34742 = cljs.core.vec.call(null,inst_34718);
var state_34754__$1 = state_34754;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34754__$1,(15),out,inst_34742);
} else {
if((state_val_34755 === (2))){
var state_34754__$1 = state_34754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34754__$1,(4),ch);
} else {
if((state_val_34755 === (11))){
var inst_34734 = (state_34754[(2)]);
var inst_34735 = (new Array(n));
var inst_34718 = inst_34735;
var inst_34719 = (0);
var state_34754__$1 = (function (){var statearr_34766 = state_34754;
(statearr_34766[(7)] = inst_34718);

(statearr_34766[(10)] = inst_34734);

(statearr_34766[(8)] = inst_34719);

return statearr_34766;
})();
var statearr_34767_34797 = state_34754__$1;
(statearr_34767_34797[(2)] = null);

(statearr_34767_34797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34755 === (9))){
var inst_34718 = (state_34754[(7)]);
var inst_34732 = cljs.core.vec.call(null,inst_34718);
var state_34754__$1 = state_34754;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34754__$1,(11),out,inst_34732);
} else {
if((state_val_34755 === (5))){
var inst_34727 = (state_34754[(11)]);
var inst_34718 = (state_34754[(7)]);
var inst_34719 = (state_34754[(8)]);
var inst_34722 = (state_34754[(9)]);
var inst_34726 = (inst_34718[inst_34719] = inst_34722);
var inst_34727__$1 = (inst_34719 + (1));
var inst_34728 = (inst_34727__$1 < n);
var state_34754__$1 = (function (){var statearr_34768 = state_34754;
(statearr_34768[(11)] = inst_34727__$1);

(statearr_34768[(12)] = inst_34726);

return statearr_34768;
})();
if(cljs.core.truth_(inst_34728)){
var statearr_34769_34798 = state_34754__$1;
(statearr_34769_34798[(1)] = (8));

} else {
var statearr_34770_34799 = state_34754__$1;
(statearr_34770_34799[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34755 === (14))){
var inst_34747 = (state_34754[(2)]);
var inst_34748 = cljs.core.async.close_BANG_.call(null,out);
var state_34754__$1 = (function (){var statearr_34772 = state_34754;
(statearr_34772[(13)] = inst_34747);

return statearr_34772;
})();
var statearr_34773_34800 = state_34754__$1;
(statearr_34773_34800[(2)] = inst_34748);

(statearr_34773_34800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34755 === (10))){
var inst_34738 = (state_34754[(2)]);
var state_34754__$1 = state_34754;
var statearr_34774_34801 = state_34754__$1;
(statearr_34774_34801[(2)] = inst_34738);

(statearr_34774_34801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34755 === (8))){
var inst_34727 = (state_34754[(11)]);
var inst_34718 = (state_34754[(7)]);
var tmp34771 = inst_34718;
var inst_34718__$1 = tmp34771;
var inst_34719 = inst_34727;
var state_34754__$1 = (function (){var statearr_34775 = state_34754;
(statearr_34775[(7)] = inst_34718__$1);

(statearr_34775[(8)] = inst_34719);

return statearr_34775;
})();
var statearr_34776_34802 = state_34754__$1;
(statearr_34776_34802[(2)] = null);

(statearr_34776_34802[(1)] = (2));


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
});})(c__32057__auto___34788,out))
;
return ((function (switch__31943__auto__,c__32057__auto___34788,out){
return (function() {
var cljs$core$async$state_machine__31944__auto__ = null;
var cljs$core$async$state_machine__31944__auto____0 = (function (){
var statearr_34780 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34780[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_34780[(1)] = (1));

return statearr_34780;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_34754){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_34754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e34781){if((e34781 instanceof Object)){
var ex__31947__auto__ = e34781;
var statearr_34782_34803 = state_34754;
(statearr_34782_34803[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34804 = state_34754;
state_34754 = G__34804;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_34754){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_34754);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto___34788,out))
})();
var state__32059__auto__ = (function (){var statearr_34783 = f__32058__auto__.call(null);
(statearr_34783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto___34788);

return statearr_34783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto___34788,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args34805 = [];
var len__29680__auto___34879 = arguments.length;
var i__29681__auto___34880 = (0);
while(true){
if((i__29681__auto___34880 < len__29680__auto___34879)){
args34805.push((arguments[i__29681__auto___34880]));

var G__34881 = (i__29681__auto___34880 + (1));
i__29681__auto___34880 = G__34881;
continue;
} else {
}
break;
}

var G__34807 = args34805.length;
switch (G__34807) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34805.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32057__auto___34883 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto___34883,out){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto___34883,out){
return (function (state_34849){
var state_val_34850 = (state_34849[(1)]);
if((state_val_34850 === (7))){
var inst_34845 = (state_34849[(2)]);
var state_34849__$1 = state_34849;
var statearr_34851_34884 = state_34849__$1;
(statearr_34851_34884[(2)] = inst_34845);

(statearr_34851_34884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34850 === (1))){
var inst_34808 = [];
var inst_34809 = inst_34808;
var inst_34810 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34849__$1 = (function (){var statearr_34852 = state_34849;
(statearr_34852[(7)] = inst_34810);

(statearr_34852[(8)] = inst_34809);

return statearr_34852;
})();
var statearr_34853_34885 = state_34849__$1;
(statearr_34853_34885[(2)] = null);

(statearr_34853_34885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34850 === (4))){
var inst_34813 = (state_34849[(9)]);
var inst_34813__$1 = (state_34849[(2)]);
var inst_34814 = (inst_34813__$1 == null);
var inst_34815 = cljs.core.not.call(null,inst_34814);
var state_34849__$1 = (function (){var statearr_34854 = state_34849;
(statearr_34854[(9)] = inst_34813__$1);

return statearr_34854;
})();
if(inst_34815){
var statearr_34855_34886 = state_34849__$1;
(statearr_34855_34886[(1)] = (5));

} else {
var statearr_34856_34887 = state_34849__$1;
(statearr_34856_34887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34850 === (15))){
var inst_34839 = (state_34849[(2)]);
var state_34849__$1 = state_34849;
var statearr_34857_34888 = state_34849__$1;
(statearr_34857_34888[(2)] = inst_34839);

(statearr_34857_34888[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34850 === (13))){
var state_34849__$1 = state_34849;
var statearr_34858_34889 = state_34849__$1;
(statearr_34858_34889[(2)] = null);

(statearr_34858_34889[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34850 === (6))){
var inst_34809 = (state_34849[(8)]);
var inst_34834 = inst_34809.length;
var inst_34835 = (inst_34834 > (0));
var state_34849__$1 = state_34849;
if(cljs.core.truth_(inst_34835)){
var statearr_34859_34890 = state_34849__$1;
(statearr_34859_34890[(1)] = (12));

} else {
var statearr_34860_34891 = state_34849__$1;
(statearr_34860_34891[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34850 === (3))){
var inst_34847 = (state_34849[(2)]);
var state_34849__$1 = state_34849;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34849__$1,inst_34847);
} else {
if((state_val_34850 === (12))){
var inst_34809 = (state_34849[(8)]);
var inst_34837 = cljs.core.vec.call(null,inst_34809);
var state_34849__$1 = state_34849;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34849__$1,(15),out,inst_34837);
} else {
if((state_val_34850 === (2))){
var state_34849__$1 = state_34849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34849__$1,(4),ch);
} else {
if((state_val_34850 === (11))){
var inst_34813 = (state_34849[(9)]);
var inst_34817 = (state_34849[(10)]);
var inst_34827 = (state_34849[(2)]);
var inst_34828 = [];
var inst_34829 = inst_34828.push(inst_34813);
var inst_34809 = inst_34828;
var inst_34810 = inst_34817;
var state_34849__$1 = (function (){var statearr_34861 = state_34849;
(statearr_34861[(11)] = inst_34829);

(statearr_34861[(7)] = inst_34810);

(statearr_34861[(12)] = inst_34827);

(statearr_34861[(8)] = inst_34809);

return statearr_34861;
})();
var statearr_34862_34892 = state_34849__$1;
(statearr_34862_34892[(2)] = null);

(statearr_34862_34892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34850 === (9))){
var inst_34809 = (state_34849[(8)]);
var inst_34825 = cljs.core.vec.call(null,inst_34809);
var state_34849__$1 = state_34849;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34849__$1,(11),out,inst_34825);
} else {
if((state_val_34850 === (5))){
var inst_34810 = (state_34849[(7)]);
var inst_34813 = (state_34849[(9)]);
var inst_34817 = (state_34849[(10)]);
var inst_34817__$1 = f.call(null,inst_34813);
var inst_34818 = cljs.core._EQ_.call(null,inst_34817__$1,inst_34810);
var inst_34819 = cljs.core.keyword_identical_QMARK_.call(null,inst_34810,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34820 = (inst_34818) || (inst_34819);
var state_34849__$1 = (function (){var statearr_34863 = state_34849;
(statearr_34863[(10)] = inst_34817__$1);

return statearr_34863;
})();
if(cljs.core.truth_(inst_34820)){
var statearr_34864_34893 = state_34849__$1;
(statearr_34864_34893[(1)] = (8));

} else {
var statearr_34865_34894 = state_34849__$1;
(statearr_34865_34894[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34850 === (14))){
var inst_34842 = (state_34849[(2)]);
var inst_34843 = cljs.core.async.close_BANG_.call(null,out);
var state_34849__$1 = (function (){var statearr_34867 = state_34849;
(statearr_34867[(13)] = inst_34842);

return statearr_34867;
})();
var statearr_34868_34895 = state_34849__$1;
(statearr_34868_34895[(2)] = inst_34843);

(statearr_34868_34895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34850 === (10))){
var inst_34832 = (state_34849[(2)]);
var state_34849__$1 = state_34849;
var statearr_34869_34896 = state_34849__$1;
(statearr_34869_34896[(2)] = inst_34832);

(statearr_34869_34896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34850 === (8))){
var inst_34813 = (state_34849[(9)]);
var inst_34817 = (state_34849[(10)]);
var inst_34809 = (state_34849[(8)]);
var inst_34822 = inst_34809.push(inst_34813);
var tmp34866 = inst_34809;
var inst_34809__$1 = tmp34866;
var inst_34810 = inst_34817;
var state_34849__$1 = (function (){var statearr_34870 = state_34849;
(statearr_34870[(7)] = inst_34810);

(statearr_34870[(14)] = inst_34822);

(statearr_34870[(8)] = inst_34809__$1);

return statearr_34870;
})();
var statearr_34871_34897 = state_34849__$1;
(statearr_34871_34897[(2)] = null);

(statearr_34871_34897[(1)] = (2));


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
});})(c__32057__auto___34883,out))
;
return ((function (switch__31943__auto__,c__32057__auto___34883,out){
return (function() {
var cljs$core$async$state_machine__31944__auto__ = null;
var cljs$core$async$state_machine__31944__auto____0 = (function (){
var statearr_34875 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34875[(0)] = cljs$core$async$state_machine__31944__auto__);

(statearr_34875[(1)] = (1));

return statearr_34875;
});
var cljs$core$async$state_machine__31944__auto____1 = (function (state_34849){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_34849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e34876){if((e34876 instanceof Object)){
var ex__31947__auto__ = e34876;
var statearr_34877_34898 = state_34849;
(statearr_34877_34898[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34899 = state_34849;
state_34849 = G__34899;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
cljs$core$async$state_machine__31944__auto__ = function(state_34849){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31944__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31944__auto____1.call(this,state_34849);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31944__auto____0;
cljs$core$async$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31944__auto____1;
return cljs$core$async$state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto___34883,out))
})();
var state__32059__auto__ = (function (){var statearr_34878 = f__32058__auto__.call(null);
(statearr_34878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto___34883);

return statearr_34878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto___34883,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1497481537366