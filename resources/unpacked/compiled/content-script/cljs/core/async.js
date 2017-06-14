// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args16187 = [];
var len__9181__auto___16193 = arguments.length;
var i__9182__auto___16194 = (0);
while(true){
if((i__9182__auto___16194 < len__9181__auto___16193)){
args16187.push((arguments[i__9182__auto___16194]));

var G__16195 = (i__9182__auto___16194 + (1));
i__9182__auto___16194 = G__16195;
continue;
} else {
}
break;
}

var G__16189 = args16187.length;
switch (G__16189) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16187.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async16190 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16190 = (function (f,blockable,meta16191){
this.f = f;
this.blockable = blockable;
this.meta16191 = meta16191;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16192,meta16191__$1){
var self__ = this;
var _16192__$1 = this;
return (new cljs.core.async.t_cljs$core$async16190(self__.f,self__.blockable,meta16191__$1));
});

cljs.core.async.t_cljs$core$async16190.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16192){
var self__ = this;
var _16192__$1 = this;
return self__.meta16191;
});

cljs.core.async.t_cljs$core$async16190.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16190.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16190.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async16190.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async16190.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta16191], null);
});

cljs.core.async.t_cljs$core$async16190.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16190.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16190";

cljs.core.async.t_cljs$core$async16190.cljs$lang$ctorPrWriter = (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write(writer__8618__auto__,"cljs.core.async/t_cljs$core$async16190");
});

cljs.core.async.__GT_t_cljs$core$async16190 = (function cljs$core$async$__GT_t_cljs$core$async16190(f__$1,blockable__$1,meta16191){
return (new cljs.core.async.t_cljs$core$async16190(f__$1,blockable__$1,meta16191));
});

}

return (new cljs.core.async.t_cljs$core$async16190(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
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
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args16199 = [];
var len__9181__auto___16202 = arguments.length;
var i__9182__auto___16203 = (0);
while(true){
if((i__9182__auto___16203 < len__9181__auto___16202)){
args16199.push((arguments[i__9182__auto___16203]));

var G__16204 = (i__9182__auto___16203 + (1));
i__9182__auto___16203 = G__16204;
continue;
} else {
}
break;
}

var G__16201 = args16199.length;
switch (G__16201) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16199.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var args16206 = [];
var len__9181__auto___16209 = arguments.length;
var i__9182__auto___16210 = (0);
while(true){
if((i__9182__auto___16210 < len__9181__auto___16209)){
args16206.push((arguments[i__9182__auto___16210]));

var G__16211 = (i__9182__auto___16210 + (1));
i__9182__auto___16210 = G__16211;
continue;
} else {
}
break;
}

var G__16208 = args16206.length;
switch (G__16208) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16206.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var args16213 = [];
var len__9181__auto___16216 = arguments.length;
var i__9182__auto___16217 = (0);
while(true){
if((i__9182__auto___16217 < len__9181__auto___16216)){
args16213.push((arguments[i__9182__auto___16217]));

var G__16218 = (i__9182__auto___16217 + (1));
i__9182__auto___16217 = G__16218;
continue;
} else {
}
break;
}

var G__16215 = args16213.length;
switch (G__16215) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16213.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_16220 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16220) : fn1.call(null,val_16220));
} else {
cljs.core.async.impl.dispatch.run(((function (val_16220,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16220) : fn1.call(null,val_16220));
});})(val_16220,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
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
var args16221 = [];
var len__9181__auto___16224 = arguments.length;
var i__9182__auto___16225 = (0);
while(true){
if((i__9182__auto___16225 < len__9181__auto___16224)){
args16221.push((arguments[i__9182__auto___16225]));

var G__16226 = (i__9182__auto___16225 + (1));
i__9182__auto___16225 = G__16226;
continue;
} else {
}
break;
}

var G__16223 = args16221.length;
switch (G__16223) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16221.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5276__auto__)){
var ret = temp__5276__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5276__auto__)){
var retb = temp__5276__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5276__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
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
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__8981__auto___16228 = n;
var x_16229 = (0);
while(true){
if((x_16229 < n__8981__auto___16228)){
(a[x_16229] = (0));

var G__16230 = (x_16229 + (1));
x_16229 = G__16230;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__16231 = (i + (1));
i = G__16231;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async16235 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16235 = (function (flag,meta16236){
this.flag = flag;
this.meta16236 = meta16236;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16237,meta16236__$1){
var self__ = this;
var _16237__$1 = this;
return (new cljs.core.async.t_cljs$core$async16235(self__.flag,meta16236__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async16235.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16237){
var self__ = this;
var _16237__$1 = this;
return self__.meta16236;
});})(flag))
;

cljs.core.async.t_cljs$core$async16235.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16235.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async16235.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16235.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16235.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta16236], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async16235.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16235.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16235";

cljs.core.async.t_cljs$core$async16235.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write(writer__8618__auto__,"cljs.core.async/t_cljs$core$async16235");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async16235 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async16235(flag__$1,meta16236){
return (new cljs.core.async.t_cljs$core$async16235(flag__$1,meta16236));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async16235(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async16241 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16241 = (function (flag,cb,meta16242){
this.flag = flag;
this.cb = cb;
this.meta16242 = meta16242;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16243,meta16242__$1){
var self__ = this;
var _16243__$1 = this;
return (new cljs.core.async.t_cljs$core$async16241(self__.flag,self__.cb,meta16242__$1));
});

cljs.core.async.t_cljs$core$async16241.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16243){
var self__ = this;
var _16243__$1 = this;
return self__.meta16242;
});

cljs.core.async.t_cljs$core$async16241.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16241.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async16241.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16241.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async16241.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta16242], null);
});

cljs.core.async.t_cljs$core$async16241.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16241.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16241";

cljs.core.async.t_cljs$core$async16241.cljs$lang$ctorPrWriter = (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write(writer__8618__auto__,"cljs.core.async/t_cljs$core$async16241");
});

cljs.core.async.__GT_t_cljs$core$async16241 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async16241(flag__$1,cb__$1,meta16242){
return (new cljs.core.async.t_cljs$core$async16241(flag__$1,cb__$1,meta16242));
});

}

return (new cljs.core.async.t_cljs$core$async16241(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16244_SHARP_){
var G__16248 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16244_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16248) : fret.call(null,G__16248));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16245_SHARP_){
var G__16249 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16245_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16249) : fret.call(null,G__16249));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__7960__auto__ = wport;
if(cljs.core.truth_(or__7960__auto__)){
return or__7960__auto__;
} else {
return port;
}
})()], null));
} else {
var G__16250 = (i + (1));
i = G__16250;
continue;
}
} else {
return null;
}
break;
}
})();
var or__7960__auto__ = ret;
if(cljs.core.truth_(or__7960__auto__)){
return or__7960__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5278__auto__ = (function (){var and__7948__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__7948__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__7948__auto__;
}
})();
if(cljs.core.truth_(temp__5278__auto__)){
var got = temp__5278__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
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
var args__9188__auto__ = [];
var len__9181__auto___16256 = arguments.length;
var i__9182__auto___16257 = (0);
while(true){
if((i__9182__auto___16257 < len__9181__auto___16256)){
args__9188__auto__.push((arguments[i__9182__auto___16257]));

var G__16258 = (i__9182__auto___16257 + (1));
i__9182__auto___16257 = G__16258;
continue;
} else {
}
break;
}

var argseq__9189__auto__ = ((((1) < args__9188__auto__.length))?(new cljs.core.IndexedSeq(args__9188__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9189__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16253){
var map__16254 = p__16253;
var map__16254__$1 = ((((!((map__16254 == null)))?((((map__16254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16254.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16254):map__16254);
var opts = map__16254__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16251){
var G__16252 = cljs.core.first(seq16251);
var seq16251__$1 = cljs.core.next(seq16251);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16252,seq16251__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
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
var args16259 = [];
var len__9181__auto___16309 = arguments.length;
var i__9182__auto___16310 = (0);
while(true){
if((i__9182__auto___16310 < len__9181__auto___16309)){
args16259.push((arguments[i__9182__auto___16310]));

var G__16311 = (i__9182__auto___16310 + (1));
i__9182__auto___16310 = G__16311;
continue;
} else {
}
break;
}

var G__16261 = args16259.length;
switch (G__16261) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16259.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__16128__auto___16313 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16128__auto___16313){
return (function (){
var f__16129__auto__ = (function (){var switch__16002__auto__ = ((function (c__16128__auto___16313){
return (function (state_16285){
var state_val_16286 = (state_16285[(1)]);
if((state_val_16286 === (7))){
var inst_16281 = (state_16285[(2)]);
var state_16285__$1 = state_16285;
var statearr_16287_16314 = state_16285__$1;
(statearr_16287_16314[(2)] = inst_16281);

(statearr_16287_16314[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16286 === (1))){
var state_16285__$1 = state_16285;
var statearr_16288_16315 = state_16285__$1;
(statearr_16288_16315[(2)] = null);

(statearr_16288_16315[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16286 === (4))){
var inst_16264 = (state_16285[(7)]);
var inst_16264__$1 = (state_16285[(2)]);
var inst_16265 = (inst_16264__$1 == null);
var state_16285__$1 = (function (){var statearr_16289 = state_16285;
(statearr_16289[(7)] = inst_16264__$1);

return statearr_16289;
})();
if(cljs.core.truth_(inst_16265)){
var statearr_16290_16316 = state_16285__$1;
(statearr_16290_16316[(1)] = (5));

} else {
var statearr_16291_16317 = state_16285__$1;
(statearr_16291_16317[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16286 === (13))){
var state_16285__$1 = state_16285;
var statearr_16292_16318 = state_16285__$1;
(statearr_16292_16318[(2)] = null);

(statearr_16292_16318[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16286 === (6))){
var inst_16264 = (state_16285[(7)]);
var state_16285__$1 = state_16285;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16285__$1,(11),to,inst_16264);
} else {
if((state_val_16286 === (3))){
var inst_16283 = (state_16285[(2)]);
var state_16285__$1 = state_16285;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16285__$1,inst_16283);
} else {
if((state_val_16286 === (12))){
var state_16285__$1 = state_16285;
var statearr_16293_16319 = state_16285__$1;
(statearr_16293_16319[(2)] = null);

(statearr_16293_16319[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16286 === (2))){
var state_16285__$1 = state_16285;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16285__$1,(4),from);
} else {
if((state_val_16286 === (11))){
var inst_16274 = (state_16285[(2)]);
var state_16285__$1 = state_16285;
if(cljs.core.truth_(inst_16274)){
var statearr_16294_16320 = state_16285__$1;
(statearr_16294_16320[(1)] = (12));

} else {
var statearr_16295_16321 = state_16285__$1;
(statearr_16295_16321[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16286 === (9))){
var state_16285__$1 = state_16285;
var statearr_16296_16322 = state_16285__$1;
(statearr_16296_16322[(2)] = null);

(statearr_16296_16322[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16286 === (5))){
var state_16285__$1 = state_16285;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16297_16323 = state_16285__$1;
(statearr_16297_16323[(1)] = (8));

} else {
var statearr_16298_16324 = state_16285__$1;
(statearr_16298_16324[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16286 === (14))){
var inst_16279 = (state_16285[(2)]);
var state_16285__$1 = state_16285;
var statearr_16299_16325 = state_16285__$1;
(statearr_16299_16325[(2)] = inst_16279);

(statearr_16299_16325[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16286 === (10))){
var inst_16271 = (state_16285[(2)]);
var state_16285__$1 = state_16285;
var statearr_16300_16326 = state_16285__$1;
(statearr_16300_16326[(2)] = inst_16271);

(statearr_16300_16326[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16286 === (8))){
var inst_16268 = cljs.core.async.close_BANG_(to);
var state_16285__$1 = state_16285;
var statearr_16301_16327 = state_16285__$1;
(statearr_16301_16327[(2)] = inst_16268);

(statearr_16301_16327[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__16128__auto___16313))
;
return ((function (switch__16002__auto__,c__16128__auto___16313){
return (function() {
var cljs$core$async$state_machine__16003__auto__ = null;
var cljs$core$async$state_machine__16003__auto____0 = (function (){
var statearr_16305 = [null,null,null,null,null,null,null,null];
(statearr_16305[(0)] = cljs$core$async$state_machine__16003__auto__);

(statearr_16305[(1)] = (1));

return statearr_16305;
});
var cljs$core$async$state_machine__16003__auto____1 = (function (state_16285){
while(true){
var ret_value__16004__auto__ = (function (){try{while(true){
var result__16005__auto__ = switch__16002__auto__(state_16285);
if(cljs.core.keyword_identical_QMARK_(result__16005__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16005__auto__;
}
break;
}
}catch (e16306){if((e16306 instanceof Object)){
var ex__16006__auto__ = e16306;
var statearr_16307_16328 = state_16285;
(statearr_16307_16328[(5)] = ex__16006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16285);

return cljs.core.cst$kw$recur;
} else {
throw e16306;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16004__auto__,cljs.core.cst$kw$recur)){
var G__16329 = state_16285;
state_16285 = G__16329;
continue;
} else {
return ret_value__16004__auto__;
}
break;
}
});
cljs$core$async$state_machine__16003__auto__ = function(state_16285){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16003__auto____1.call(this,state_16285);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16003__auto____0;
cljs$core$async$state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16003__auto____1;
return cljs$core$async$state_machine__16003__auto__;
})()
;})(switch__16002__auto__,c__16128__auto___16313))
})();
var state__16130__auto__ = (function (){var statearr_16308 = (f__16129__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16129__auto__.cljs$core$IFn$_invoke$arity$0() : f__16129__auto__.call(null));
(statearr_16308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16128__auto___16313);

return statearr_16308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16130__auto__);
});})(c__16128__auto___16313))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__16517){
var vec__16518 = p__16517;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16518,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16518,(1),null);
var job = vec__16518;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16128__auto___16704 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16128__auto___16704,res,vec__16518,v,p,job,jobs,results){
return (function (){
var f__16129__auto__ = (function (){var switch__16002__auto__ = ((function (c__16128__auto___16704,res,vec__16518,v,p,job,jobs,results){
return (function (state_16525){
var state_val_16526 = (state_16525[(1)]);
if((state_val_16526 === (1))){
var state_16525__$1 = state_16525;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16525__$1,(2),res,v);
} else {
if((state_val_16526 === (2))){
var inst_16522 = (state_16525[(2)]);
var inst_16523 = cljs.core.async.close_BANG_(res);
var state_16525__$1 = (function (){var statearr_16527 = state_16525;
(statearr_16527[(7)] = inst_16522);

return statearr_16527;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16525__$1,inst_16523);
} else {
return null;
}
}
});})(c__16128__auto___16704,res,vec__16518,v,p,job,jobs,results))
;
return ((function (switch__16002__auto__,c__16128__auto___16704,res,vec__16518,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16003__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16003__auto____0 = (function (){
var statearr_16531 = [null,null,null,null,null,null,null,null];
(statearr_16531[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16003__auto__);

(statearr_16531[(1)] = (1));

return statearr_16531;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16003__auto____1 = (function (state_16525){
while(true){
var ret_value__16004__auto__ = (function (){try{while(true){
var result__16005__auto__ = switch__16002__auto__(state_16525);
if(cljs.core.keyword_identical_QMARK_(result__16005__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16005__auto__;
}
break;
}
}catch (e16532){if((e16532 instanceof Object)){
var ex__16006__auto__ = e16532;
var statearr_16533_16705 = state_16525;
(statearr_16533_16705[(5)] = ex__16006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16525);

return cljs.core.cst$kw$recur;
} else {
throw e16532;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16004__auto__,cljs.core.cst$kw$recur)){
var G__16706 = state_16525;
state_16525 = G__16706;
continue;
} else {
return ret_value__16004__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16003__auto__ = function(state_16525){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16003__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16003__auto____1.call(this,state_16525);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16003__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16003__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16003__auto__;
})()
;})(switch__16002__auto__,c__16128__auto___16704,res,vec__16518,v,p,job,jobs,results))
})();
var state__16130__auto__ = (function (){var statearr_16534 = (f__16129__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16129__auto__.cljs$core$IFn$_invoke$arity$0() : f__16129__auto__.call(null));
(statearr_16534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16128__auto___16704);

return statearr_16534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16130__auto__);
});})(c__16128__auto___16704,res,vec__16518,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16535){
var vec__16536 = p__16535;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16536,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16536,(1),null);
var job = vec__16536;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__8981__auto___16707 = n;
var __16708 = (0);
while(true){
if((__16708 < n__8981__auto___16707)){
var G__16539_16709 = type;
var G__16539_16710__$1 = (((G__16539_16709 instanceof cljs.core.Keyword))?G__16539_16709.fqn:null);
switch (G__16539_16710__$1) {
case "compute":
var c__16128__auto___16712 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16708,c__16128__auto___16712,G__16539_16709,G__16539_16710__$1,n__8981__auto___16707,jobs,results,process,async){
return (function (){
var f__16129__auto__ = (function (){var switch__16002__auto__ = ((function (__16708,c__16128__auto___16712,G__16539_16709,G__16539_16710__$1,n__8981__auto___16707,jobs,results,process,async){
return (function (state_16552){
var state_val_16553 = (state_16552[(1)]);
if((state_val_16553 === (1))){
var state_16552__$1 = state_16552;
var statearr_16554_16713 = state_16552__$1;
(statearr_16554_16713[(2)] = null);

(statearr_16554_16713[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (2))){
var state_16552__$1 = state_16552;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16552__$1,(4),jobs);
} else {
if((state_val_16553 === (3))){
var inst_16550 = (state_16552[(2)]);
var state_16552__$1 = state_16552;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16552__$1,inst_16550);
} else {
if((state_val_16553 === (4))){
var inst_16542 = (state_16552[(2)]);
var inst_16543 = process(inst_16542);
var state_16552__$1 = state_16552;
if(cljs.core.truth_(inst_16543)){
var statearr_16555_16714 = state_16552__$1;
(statearr_16555_16714[(1)] = (5));

} else {
var statearr_16556_16715 = state_16552__$1;
(statearr_16556_16715[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (5))){
var state_16552__$1 = state_16552;
var statearr_16557_16716 = state_16552__$1;
(statearr_16557_16716[(2)] = null);

(statearr_16557_16716[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (6))){
var state_16552__$1 = state_16552;
var statearr_16558_16717 = state_16552__$1;
(statearr_16558_16717[(2)] = null);

(statearr_16558_16717[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16553 === (7))){
var inst_16548 = (state_16552[(2)]);
var state_16552__$1 = state_16552;
var statearr_16559_16718 = state_16552__$1;
(statearr_16559_16718[(2)] = inst_16548);

(statearr_16559_16718[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__16708,c__16128__auto___16712,G__16539_16709,G__16539_16710__$1,n__8981__auto___16707,jobs,results,process,async))
;
return ((function (__16708,switch__16002__auto__,c__16128__auto___16712,G__16539_16709,G__16539_16710__$1,n__8981__auto___16707,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16003__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16003__auto____0 = (function (){
var statearr_16563 = [null,null,null,null,null,null,null];
(statearr_16563[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16003__auto__);

(statearr_16563[(1)] = (1));

return statearr_16563;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16003__auto____1 = (function (state_16552){
while(true){
var ret_value__16004__auto__ = (function (){try{while(true){
var result__16005__auto__ = switch__16002__auto__(state_16552);
if(cljs.core.keyword_identical_QMARK_(result__16005__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16005__auto__;
}
break;
}
}catch (e16564){if((e16564 instanceof Object)){
var ex__16006__auto__ = e16564;
var statearr_16565_16719 = state_16552;
(statearr_16565_16719[(5)] = ex__16006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16552);

return cljs.core.cst$kw$recur;
} else {
throw e16564;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16004__auto__,cljs.core.cst$kw$recur)){
var G__16720 = state_16552;
state_16552 = G__16720;
continue;
} else {
return ret_value__16004__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16003__auto__ = function(state_16552){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16003__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16003__auto____1.call(this,state_16552);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16003__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16003__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16003__auto__;
})()
;})(__16708,switch__16002__auto__,c__16128__auto___16712,G__16539_16709,G__16539_16710__$1,n__8981__auto___16707,jobs,results,process,async))
})();
var state__16130__auto__ = (function (){var statearr_16566 = (f__16129__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16129__auto__.cljs$core$IFn$_invoke$arity$0() : f__16129__auto__.call(null));
(statearr_16566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16128__auto___16712);

return statearr_16566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16130__auto__);
});})(__16708,c__16128__auto___16712,G__16539_16709,G__16539_16710__$1,n__8981__auto___16707,jobs,results,process,async))
);


break;
case "async":
var c__16128__auto___16721 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16708,c__16128__auto___16721,G__16539_16709,G__16539_16710__$1,n__8981__auto___16707,jobs,results,process,async){
return (function (){
var f__16129__auto__ = (function (){var switch__16002__auto__ = ((function (__16708,c__16128__auto___16721,G__16539_16709,G__16539_16710__$1,n__8981__auto___16707,jobs,results,process,async){
return (function (state_16579){
var state_val_16580 = (state_16579[(1)]);
if((state_val_16580 === (1))){
var state_16579__$1 = state_16579;
var statearr_16581_16722 = state_16579__$1;
(statearr_16581_16722[(2)] = null);

(statearr_16581_16722[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16580 === (2))){
var state_16579__$1 = state_16579;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16579__$1,(4),jobs);
} else {
if((state_val_16580 === (3))){
var inst_16577 = (state_16579[(2)]);
var state_16579__$1 = state_16579;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16579__$1,inst_16577);
} else {
if((state_val_16580 === (4))){
var inst_16569 = (state_16579[(2)]);
var inst_16570 = async(inst_16569);
var state_16579__$1 = state_16579;
if(cljs.core.truth_(inst_16570)){
var statearr_16582_16723 = state_16579__$1;
(statearr_16582_16723[(1)] = (5));

} else {
var statearr_16583_16724 = state_16579__$1;
(statearr_16583_16724[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16580 === (5))){
var state_16579__$1 = state_16579;
var statearr_16584_16725 = state_16579__$1;
(statearr_16584_16725[(2)] = null);

(statearr_16584_16725[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16580 === (6))){
var state_16579__$1 = state_16579;
var statearr_16585_16726 = state_16579__$1;
(statearr_16585_16726[(2)] = null);

(statearr_16585_16726[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16580 === (7))){
var inst_16575 = (state_16579[(2)]);
var state_16579__$1 = state_16579;
var statearr_16586_16727 = state_16579__$1;
(statearr_16586_16727[(2)] = inst_16575);

(statearr_16586_16727[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__16708,c__16128__auto___16721,G__16539_16709,G__16539_16710__$1,n__8981__auto___16707,jobs,results,process,async))
;
return ((function (__16708,switch__16002__auto__,c__16128__auto___16721,G__16539_16709,G__16539_16710__$1,n__8981__auto___16707,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16003__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16003__auto____0 = (function (){
var statearr_16590 = [null,null,null,null,null,null,null];
(statearr_16590[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16003__auto__);

(statearr_16590[(1)] = (1));

return statearr_16590;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16003__auto____1 = (function (state_16579){
while(true){
var ret_value__16004__auto__ = (function (){try{while(true){
var result__16005__auto__ = switch__16002__auto__(state_16579);
if(cljs.core.keyword_identical_QMARK_(result__16005__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16005__auto__;
}
break;
}
}catch (e16591){if((e16591 instanceof Object)){
var ex__16006__auto__ = e16591;
var statearr_16592_16728 = state_16579;
(statearr_16592_16728[(5)] = ex__16006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16579);

return cljs.core.cst$kw$recur;
} else {
throw e16591;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16004__auto__,cljs.core.cst$kw$recur)){
var G__16729 = state_16579;
state_16579 = G__16729;
continue;
} else {
return ret_value__16004__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16003__auto__ = function(state_16579){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16003__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16003__auto____1.call(this,state_16579);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16003__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16003__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16003__auto__;
})()
;})(__16708,switch__16002__auto__,c__16128__auto___16721,G__16539_16709,G__16539_16710__$1,n__8981__auto___16707,jobs,results,process,async))
})();
var state__16130__auto__ = (function (){var statearr_16593 = (f__16129__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16129__auto__.cljs$core$IFn$_invoke$arity$0() : f__16129__auto__.call(null));
(statearr_16593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16128__auto___16721);

return statearr_16593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16130__auto__);
});})(__16708,c__16128__auto___16721,G__16539_16709,G__16539_16710__$1,n__8981__auto___16707,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16539_16710__$1)].join('')));

}

var G__16730 = (__16708 + (1));
__16708 = G__16730;
continue;
} else {
}
break;
}

var c__16128__auto___16731 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16128__auto___16731,jobs,results,process,async){
return (function (){
var f__16129__auto__ = (function (){var switch__16002__auto__ = ((function (c__16128__auto___16731,jobs,results,process,async){
return (function (state_16615){
var state_val_16616 = (state_16615[(1)]);
if((state_val_16616 === (1))){
var state_16615__$1 = state_16615;
var statearr_16617_16732 = state_16615__$1;
(statearr_16617_16732[(2)] = null);

(statearr_16617_16732[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16616 === (2))){
var state_16615__$1 = state_16615;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16615__$1,(4),from);
} else {
if((state_val_16616 === (3))){
var inst_16613 = (state_16615[(2)]);
var state_16615__$1 = state_16615;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16615__$1,inst_16613);
} else {
if((state_val_16616 === (4))){
var inst_16596 = (state_16615[(7)]);
var inst_16596__$1 = (state_16615[(2)]);
var inst_16597 = (inst_16596__$1 == null);
var state_16615__$1 = (function (){var statearr_16618 = state_16615;
(statearr_16618[(7)] = inst_16596__$1);

return statearr_16618;
})();
if(cljs.core.truth_(inst_16597)){
var statearr_16619_16733 = state_16615__$1;
(statearr_16619_16733[(1)] = (5));

} else {
var statearr_16620_16734 = state_16615__$1;
(statearr_16620_16734[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16616 === (5))){
var inst_16599 = cljs.core.async.close_BANG_(jobs);
var state_16615__$1 = state_16615;
var statearr_16621_16735 = state_16615__$1;
(statearr_16621_16735[(2)] = inst_16599);

(statearr_16621_16735[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16616 === (6))){
var inst_16601 = (state_16615[(8)]);
var inst_16596 = (state_16615[(7)]);
var inst_16601__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16602 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16603 = [inst_16596,inst_16601__$1];
var inst_16604 = (new cljs.core.PersistentVector(null,2,(5),inst_16602,inst_16603,null));
var state_16615__$1 = (function (){var statearr_16622 = state_16615;
(statearr_16622[(8)] = inst_16601__$1);

return statearr_16622;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16615__$1,(8),jobs,inst_16604);
} else {
if((state_val_16616 === (7))){
var inst_16611 = (state_16615[(2)]);
var state_16615__$1 = state_16615;
var statearr_16623_16736 = state_16615__$1;
(statearr_16623_16736[(2)] = inst_16611);

(statearr_16623_16736[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16616 === (8))){
var inst_16601 = (state_16615[(8)]);
var inst_16606 = (state_16615[(2)]);
var state_16615__$1 = (function (){var statearr_16624 = state_16615;
(statearr_16624[(9)] = inst_16606);

return statearr_16624;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16615__$1,(9),results,inst_16601);
} else {
if((state_val_16616 === (9))){
var inst_16608 = (state_16615[(2)]);
var state_16615__$1 = (function (){var statearr_16625 = state_16615;
(statearr_16625[(10)] = inst_16608);

return statearr_16625;
})();
var statearr_16626_16737 = state_16615__$1;
(statearr_16626_16737[(2)] = null);

(statearr_16626_16737[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__16128__auto___16731,jobs,results,process,async))
;
return ((function (switch__16002__auto__,c__16128__auto___16731,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16003__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16003__auto____0 = (function (){
var statearr_16630 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16630[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16003__auto__);

(statearr_16630[(1)] = (1));

return statearr_16630;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16003__auto____1 = (function (state_16615){
while(true){
var ret_value__16004__auto__ = (function (){try{while(true){
var result__16005__auto__ = switch__16002__auto__(state_16615);
if(cljs.core.keyword_identical_QMARK_(result__16005__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16005__auto__;
}
break;
}
}catch (e16631){if((e16631 instanceof Object)){
var ex__16006__auto__ = e16631;
var statearr_16632_16738 = state_16615;
(statearr_16632_16738[(5)] = ex__16006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16615);

return cljs.core.cst$kw$recur;
} else {
throw e16631;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16004__auto__,cljs.core.cst$kw$recur)){
var G__16739 = state_16615;
state_16615 = G__16739;
continue;
} else {
return ret_value__16004__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16003__auto__ = function(state_16615){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16003__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16003__auto____1.call(this,state_16615);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16003__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16003__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16003__auto__;
})()
;})(switch__16002__auto__,c__16128__auto___16731,jobs,results,process,async))
})();
var state__16130__auto__ = (function (){var statearr_16633 = (f__16129__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16129__auto__.cljs$core$IFn$_invoke$arity$0() : f__16129__auto__.call(null));
(statearr_16633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16128__auto___16731);

return statearr_16633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16130__auto__);
});})(c__16128__auto___16731,jobs,results,process,async))
);


var c__16128__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16128__auto__,jobs,results,process,async){
return (function (){
var f__16129__auto__ = (function (){var switch__16002__auto__ = ((function (c__16128__auto__,jobs,results,process,async){
return (function (state_16671){
var state_val_16672 = (state_16671[(1)]);
if((state_val_16672 === (7))){
var inst_16667 = (state_16671[(2)]);
var state_16671__$1 = state_16671;
var statearr_16673_16740 = state_16671__$1;
(statearr_16673_16740[(2)] = inst_16667);

(statearr_16673_16740[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16672 === (20))){
var state_16671__$1 = state_16671;
var statearr_16674_16741 = state_16671__$1;
(statearr_16674_16741[(2)] = null);

(statearr_16674_16741[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16672 === (1))){
var state_16671__$1 = state_16671;
var statearr_16675_16742 = state_16671__$1;
(statearr_16675_16742[(2)] = null);

(statearr_16675_16742[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16672 === (4))){
var inst_16636 = (state_16671[(7)]);
var inst_16636__$1 = (state_16671[(2)]);
var inst_16637 = (inst_16636__$1 == null);
var state_16671__$1 = (function (){var statearr_16676 = state_16671;
(statearr_16676[(7)] = inst_16636__$1);

return statearr_16676;
})();
if(cljs.core.truth_(inst_16637)){
var statearr_16677_16743 = state_16671__$1;
(statearr_16677_16743[(1)] = (5));

} else {
var statearr_16678_16744 = state_16671__$1;
(statearr_16678_16744[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16672 === (15))){
var inst_16649 = (state_16671[(8)]);
var state_16671__$1 = state_16671;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16671__$1,(18),to,inst_16649);
} else {
if((state_val_16672 === (21))){
var inst_16662 = (state_16671[(2)]);
var state_16671__$1 = state_16671;
var statearr_16679_16745 = state_16671__$1;
(statearr_16679_16745[(2)] = inst_16662);

(statearr_16679_16745[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16672 === (13))){
var inst_16664 = (state_16671[(2)]);
var state_16671__$1 = (function (){var statearr_16680 = state_16671;
(statearr_16680[(9)] = inst_16664);

return statearr_16680;
})();
var statearr_16681_16746 = state_16671__$1;
(statearr_16681_16746[(2)] = null);

(statearr_16681_16746[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16672 === (6))){
var inst_16636 = (state_16671[(7)]);
var state_16671__$1 = state_16671;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16671__$1,(11),inst_16636);
} else {
if((state_val_16672 === (17))){
var inst_16657 = (state_16671[(2)]);
var state_16671__$1 = state_16671;
if(cljs.core.truth_(inst_16657)){
var statearr_16682_16747 = state_16671__$1;
(statearr_16682_16747[(1)] = (19));

} else {
var statearr_16683_16748 = state_16671__$1;
(statearr_16683_16748[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16672 === (3))){
var inst_16669 = (state_16671[(2)]);
var state_16671__$1 = state_16671;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16671__$1,inst_16669);
} else {
if((state_val_16672 === (12))){
var inst_16646 = (state_16671[(10)]);
var state_16671__$1 = state_16671;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16671__$1,(14),inst_16646);
} else {
if((state_val_16672 === (2))){
var state_16671__$1 = state_16671;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16671__$1,(4),results);
} else {
if((state_val_16672 === (19))){
var state_16671__$1 = state_16671;
var statearr_16684_16749 = state_16671__$1;
(statearr_16684_16749[(2)] = null);

(statearr_16684_16749[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16672 === (11))){
var inst_16646 = (state_16671[(2)]);
var state_16671__$1 = (function (){var statearr_16685 = state_16671;
(statearr_16685[(10)] = inst_16646);

return statearr_16685;
})();
var statearr_16686_16750 = state_16671__$1;
(statearr_16686_16750[(2)] = null);

(statearr_16686_16750[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16672 === (9))){
var state_16671__$1 = state_16671;
var statearr_16687_16751 = state_16671__$1;
(statearr_16687_16751[(2)] = null);

(statearr_16687_16751[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16672 === (5))){
var state_16671__$1 = state_16671;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16688_16752 = state_16671__$1;
(statearr_16688_16752[(1)] = (8));

} else {
var statearr_16689_16753 = state_16671__$1;
(statearr_16689_16753[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16672 === (14))){
var inst_16649 = (state_16671[(8)]);
var inst_16651 = (state_16671[(11)]);
var inst_16649__$1 = (state_16671[(2)]);
var inst_16650 = (inst_16649__$1 == null);
var inst_16651__$1 = cljs.core.not(inst_16650);
var state_16671__$1 = (function (){var statearr_16690 = state_16671;
(statearr_16690[(8)] = inst_16649__$1);

(statearr_16690[(11)] = inst_16651__$1);

return statearr_16690;
})();
if(inst_16651__$1){
var statearr_16691_16754 = state_16671__$1;
(statearr_16691_16754[(1)] = (15));

} else {
var statearr_16692_16755 = state_16671__$1;
(statearr_16692_16755[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16672 === (16))){
var inst_16651 = (state_16671[(11)]);
var state_16671__$1 = state_16671;
var statearr_16693_16756 = state_16671__$1;
(statearr_16693_16756[(2)] = inst_16651);

(statearr_16693_16756[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16672 === (10))){
var inst_16643 = (state_16671[(2)]);
var state_16671__$1 = state_16671;
var statearr_16694_16757 = state_16671__$1;
(statearr_16694_16757[(2)] = inst_16643);

(statearr_16694_16757[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16672 === (18))){
var inst_16654 = (state_16671[(2)]);
var state_16671__$1 = state_16671;
var statearr_16695_16758 = state_16671__$1;
(statearr_16695_16758[(2)] = inst_16654);

(statearr_16695_16758[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16672 === (8))){
var inst_16640 = cljs.core.async.close_BANG_(to);
var state_16671__$1 = state_16671;
var statearr_16696_16759 = state_16671__$1;
(statearr_16696_16759[(2)] = inst_16640);

(statearr_16696_16759[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__16128__auto__,jobs,results,process,async))
;
return ((function (switch__16002__auto__,c__16128__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16003__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16003__auto____0 = (function (){
var statearr_16700 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16700[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16003__auto__);

(statearr_16700[(1)] = (1));

return statearr_16700;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16003__auto____1 = (function (state_16671){
while(true){
var ret_value__16004__auto__ = (function (){try{while(true){
var result__16005__auto__ = switch__16002__auto__(state_16671);
if(cljs.core.keyword_identical_QMARK_(result__16005__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16005__auto__;
}
break;
}
}catch (e16701){if((e16701 instanceof Object)){
var ex__16006__auto__ = e16701;
var statearr_16702_16760 = state_16671;
(statearr_16702_16760[(5)] = ex__16006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16671);

return cljs.core.cst$kw$recur;
} else {
throw e16701;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16004__auto__,cljs.core.cst$kw$recur)){
var G__16761 = state_16671;
state_16671 = G__16761;
continue;
} else {
return ret_value__16004__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16003__auto__ = function(state_16671){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16003__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16003__auto____1.call(this,state_16671);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16003__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16003__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16003__auto__;
})()
;})(switch__16002__auto__,c__16128__auto__,jobs,results,process,async))
})();
var state__16130__auto__ = (function (){var statearr_16703 = (f__16129__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16129__auto__.cljs$core$IFn$_invoke$arity$0() : f__16129__auto__.call(null));
(statearr_16703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16128__auto__);

return statearr_16703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16130__auto__);
});})(c__16128__auto__,jobs,results,process,async))
);

return c__16128__auto__;
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
var args16762 = [];
var len__9181__auto___16765 = arguments.length;
var i__9182__auto___16766 = (0);
while(true){
if((i__9182__auto___16766 < len__9181__auto___16765)){
args16762.push((arguments[i__9182__auto___16766]));

var G__16767 = (i__9182__auto___16766 + (1));
i__9182__auto___16766 = G__16767;
continue;
} else {
}
break;
}

var G__16764 = args16762.length;
switch (G__16764) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16762.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
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
var args16769 = [];
var len__9181__auto___16772 = arguments.length;
var i__9182__auto___16773 = (0);
while(true){
if((i__9182__auto___16773 < len__9181__auto___16772)){
args16769.push((arguments[i__9182__auto___16773]));

var G__16774 = (i__9182__auto___16773 + (1));
i__9182__auto___16773 = G__16774;
continue;
} else {
}
break;
}

var G__16771 = args16769.length;
switch (G__16771) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16769.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
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
var args16776 = [];
var len__9181__auto___16829 = arguments.length;
var i__9182__auto___16830 = (0);
while(true){
if((i__9182__auto___16830 < len__9181__auto___16829)){
args16776.push((arguments[i__9182__auto___16830]));

var G__16831 = (i__9182__auto___16830 + (1));
i__9182__auto___16830 = G__16831;
continue;
} else {
}
break;
}

var G__16778 = args16776.length;
switch (G__16778) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16776.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__16128__auto___16833 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16128__auto___16833,tc,fc){
return (function (){
var f__16129__auto__ = (function (){var switch__16002__auto__ = ((function (c__16128__auto___16833,tc,fc){
return (function (state_16804){
var state_val_16805 = (state_16804[(1)]);
if((state_val_16805 === (7))){
var inst_16800 = (state_16804[(2)]);
var state_16804__$1 = state_16804;
var statearr_16806_16834 = state_16804__$1;
(statearr_16806_16834[(2)] = inst_16800);

(statearr_16806_16834[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16805 === (1))){
var state_16804__$1 = state_16804;
var statearr_16807_16835 = state_16804__$1;
(statearr_16807_16835[(2)] = null);

(statearr_16807_16835[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16805 === (4))){
var inst_16781 = (state_16804[(7)]);
var inst_16781__$1 = (state_16804[(2)]);
var inst_16782 = (inst_16781__$1 == null);
var state_16804__$1 = (function (){var statearr_16808 = state_16804;
(statearr_16808[(7)] = inst_16781__$1);

return statearr_16808;
})();
if(cljs.core.truth_(inst_16782)){
var statearr_16809_16836 = state_16804__$1;
(statearr_16809_16836[(1)] = (5));

} else {
var statearr_16810_16837 = state_16804__$1;
(statearr_16810_16837[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16805 === (13))){
var state_16804__$1 = state_16804;
var statearr_16811_16838 = state_16804__$1;
(statearr_16811_16838[(2)] = null);

(statearr_16811_16838[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16805 === (6))){
var inst_16781 = (state_16804[(7)]);
var inst_16787 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16781) : p.call(null,inst_16781));
var state_16804__$1 = state_16804;
if(cljs.core.truth_(inst_16787)){
var statearr_16812_16839 = state_16804__$1;
(statearr_16812_16839[(1)] = (9));

} else {
var statearr_16813_16840 = state_16804__$1;
(statearr_16813_16840[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16805 === (3))){
var inst_16802 = (state_16804[(2)]);
var state_16804__$1 = state_16804;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16804__$1,inst_16802);
} else {
if((state_val_16805 === (12))){
var state_16804__$1 = state_16804;
var statearr_16814_16841 = state_16804__$1;
(statearr_16814_16841[(2)] = null);

(statearr_16814_16841[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16805 === (2))){
var state_16804__$1 = state_16804;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16804__$1,(4),ch);
} else {
if((state_val_16805 === (11))){
var inst_16781 = (state_16804[(7)]);
var inst_16791 = (state_16804[(2)]);
var state_16804__$1 = state_16804;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16804__$1,(8),inst_16791,inst_16781);
} else {
if((state_val_16805 === (9))){
var state_16804__$1 = state_16804;
var statearr_16815_16842 = state_16804__$1;
(statearr_16815_16842[(2)] = tc);

(statearr_16815_16842[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16805 === (5))){
var inst_16784 = cljs.core.async.close_BANG_(tc);
var inst_16785 = cljs.core.async.close_BANG_(fc);
var state_16804__$1 = (function (){var statearr_16816 = state_16804;
(statearr_16816[(8)] = inst_16784);

return statearr_16816;
})();
var statearr_16817_16843 = state_16804__$1;
(statearr_16817_16843[(2)] = inst_16785);

(statearr_16817_16843[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16805 === (14))){
var inst_16798 = (state_16804[(2)]);
var state_16804__$1 = state_16804;
var statearr_16818_16844 = state_16804__$1;
(statearr_16818_16844[(2)] = inst_16798);

(statearr_16818_16844[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16805 === (10))){
var state_16804__$1 = state_16804;
var statearr_16819_16845 = state_16804__$1;
(statearr_16819_16845[(2)] = fc);

(statearr_16819_16845[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16805 === (8))){
var inst_16793 = (state_16804[(2)]);
var state_16804__$1 = state_16804;
if(cljs.core.truth_(inst_16793)){
var statearr_16820_16846 = state_16804__$1;
(statearr_16820_16846[(1)] = (12));

} else {
var statearr_16821_16847 = state_16804__$1;
(statearr_16821_16847[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
});})(c__16128__auto___16833,tc,fc))
;
return ((function (switch__16002__auto__,c__16128__auto___16833,tc,fc){
return (function() {
var cljs$core$async$state_machine__16003__auto__ = null;
var cljs$core$async$state_machine__16003__auto____0 = (function (){
var statearr_16825 = [null,null,null,null,null,null,null,null,null];
(statearr_16825[(0)] = cljs$core$async$state_machine__16003__auto__);

(statearr_16825[(1)] = (1));

return statearr_16825;
});
var cljs$core$async$state_machine__16003__auto____1 = (function (state_16804){
while(true){
var ret_value__16004__auto__ = (function (){try{while(true){
var result__16005__auto__ = switch__16002__auto__(state_16804);
if(cljs.core.keyword_identical_QMARK_(result__16005__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16005__auto__;
}
break;
}
}catch (e16826){if((e16826 instanceof Object)){
var ex__16006__auto__ = e16826;
var statearr_16827_16848 = state_16804;
(statearr_16827_16848[(5)] = ex__16006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16804);

return cljs.core.cst$kw$recur;
} else {
throw e16826;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16004__auto__,cljs.core.cst$kw$recur)){
var G__16849 = state_16804;
state_16804 = G__16849;
continue;
} else {
return ret_value__16004__auto__;
}
break;
}
});
cljs$core$async$state_machine__16003__auto__ = function(state_16804){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16003__auto____1.call(this,state_16804);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16003__auto____0;
cljs$core$async$state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16003__auto____1;
return cljs$core$async$state_machine__16003__auto__;
})()
;})(switch__16002__auto__,c__16128__auto___16833,tc,fc))
})();
var state__16130__auto__ = (function (){var statearr_16828 = (f__16129__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16129__auto__.cljs$core$IFn$_invoke$arity$0() : f__16129__auto__.call(null));
(statearr_16828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16128__auto___16833);

return statearr_16828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16130__auto__);
});})(c__16128__auto___16833,tc,fc))
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
var c__16128__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16128__auto__){
return (function (){
var f__16129__auto__ = (function (){var switch__16002__auto__ = ((function (c__16128__auto__){
return (function (state_16913){
var state_val_16914 = (state_16913[(1)]);
if((state_val_16914 === (7))){
var inst_16909 = (state_16913[(2)]);
var state_16913__$1 = state_16913;
var statearr_16915_16936 = state_16913__$1;
(statearr_16915_16936[(2)] = inst_16909);

(statearr_16915_16936[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16914 === (1))){
var inst_16893 = init;
var state_16913__$1 = (function (){var statearr_16916 = state_16913;
(statearr_16916[(7)] = inst_16893);

return statearr_16916;
})();
var statearr_16917_16937 = state_16913__$1;
(statearr_16917_16937[(2)] = null);

(statearr_16917_16937[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16914 === (4))){
var inst_16896 = (state_16913[(8)]);
var inst_16896__$1 = (state_16913[(2)]);
var inst_16897 = (inst_16896__$1 == null);
var state_16913__$1 = (function (){var statearr_16918 = state_16913;
(statearr_16918[(8)] = inst_16896__$1);

return statearr_16918;
})();
if(cljs.core.truth_(inst_16897)){
var statearr_16919_16938 = state_16913__$1;
(statearr_16919_16938[(1)] = (5));

} else {
var statearr_16920_16939 = state_16913__$1;
(statearr_16920_16939[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16914 === (6))){
var inst_16900 = (state_16913[(9)]);
var inst_16893 = (state_16913[(7)]);
var inst_16896 = (state_16913[(8)]);
var inst_16900__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16893,inst_16896) : f.call(null,inst_16893,inst_16896));
var inst_16901 = cljs.core.reduced_QMARK_(inst_16900__$1);
var state_16913__$1 = (function (){var statearr_16921 = state_16913;
(statearr_16921[(9)] = inst_16900__$1);

return statearr_16921;
})();
if(inst_16901){
var statearr_16922_16940 = state_16913__$1;
(statearr_16922_16940[(1)] = (8));

} else {
var statearr_16923_16941 = state_16913__$1;
(statearr_16923_16941[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16914 === (3))){
var inst_16911 = (state_16913[(2)]);
var state_16913__$1 = state_16913;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16913__$1,inst_16911);
} else {
if((state_val_16914 === (2))){
var state_16913__$1 = state_16913;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16913__$1,(4),ch);
} else {
if((state_val_16914 === (9))){
var inst_16900 = (state_16913[(9)]);
var inst_16893 = inst_16900;
var state_16913__$1 = (function (){var statearr_16924 = state_16913;
(statearr_16924[(7)] = inst_16893);

return statearr_16924;
})();
var statearr_16925_16942 = state_16913__$1;
(statearr_16925_16942[(2)] = null);

(statearr_16925_16942[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16914 === (5))){
var inst_16893 = (state_16913[(7)]);
var state_16913__$1 = state_16913;
var statearr_16926_16943 = state_16913__$1;
(statearr_16926_16943[(2)] = inst_16893);

(statearr_16926_16943[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16914 === (10))){
var inst_16907 = (state_16913[(2)]);
var state_16913__$1 = state_16913;
var statearr_16927_16944 = state_16913__$1;
(statearr_16927_16944[(2)] = inst_16907);

(statearr_16927_16944[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16914 === (8))){
var inst_16900 = (state_16913[(9)]);
var inst_16903 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_16900) : cljs.core.deref.call(null,inst_16900));
var state_16913__$1 = state_16913;
var statearr_16928_16945 = state_16913__$1;
(statearr_16928_16945[(2)] = inst_16903);

(statearr_16928_16945[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__16128__auto__))
;
return ((function (switch__16002__auto__,c__16128__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__16003__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16003__auto____0 = (function (){
var statearr_16932 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16932[(0)] = cljs$core$async$reduce_$_state_machine__16003__auto__);

(statearr_16932[(1)] = (1));

return statearr_16932;
});
var cljs$core$async$reduce_$_state_machine__16003__auto____1 = (function (state_16913){
while(true){
var ret_value__16004__auto__ = (function (){try{while(true){
var result__16005__auto__ = switch__16002__auto__(state_16913);
if(cljs.core.keyword_identical_QMARK_(result__16005__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16005__auto__;
}
break;
}
}catch (e16933){if((e16933 instanceof Object)){
var ex__16006__auto__ = e16933;
var statearr_16934_16946 = state_16913;
(statearr_16934_16946[(5)] = ex__16006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16913);

return cljs.core.cst$kw$recur;
} else {
throw e16933;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16004__auto__,cljs.core.cst$kw$recur)){
var G__16947 = state_16913;
state_16913 = G__16947;
continue;
} else {
return ret_value__16004__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16003__auto__ = function(state_16913){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16003__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16003__auto____1.call(this,state_16913);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16003__auto____0;
cljs$core$async$reduce_$_state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16003__auto____1;
return cljs$core$async$reduce_$_state_machine__16003__auto__;
})()
;})(switch__16002__auto__,c__16128__auto__))
})();
var state__16130__auto__ = (function (){var statearr_16935 = (f__16129__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16129__auto__.cljs$core$IFn$_invoke$arity$0() : f__16129__auto__.call(null));
(statearr_16935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16128__auto__);

return statearr_16935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16130__auto__);
});})(c__16128__auto__))
);

return c__16128__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__16128__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16128__auto__,f__$1){
return (function (){
var f__16129__auto__ = (function (){var switch__16002__auto__ = ((function (c__16128__auto__,f__$1){
return (function (state_16967){
var state_val_16968 = (state_16967[(1)]);
if((state_val_16968 === (1))){
var inst_16962 = cljs.core.async.reduce(f__$1,init,ch);
var state_16967__$1 = state_16967;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16967__$1,(2),inst_16962);
} else {
if((state_val_16968 === (2))){
var inst_16964 = (state_16967[(2)]);
var inst_16965 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16964) : f__$1.call(null,inst_16964));
var state_16967__$1 = state_16967;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16967__$1,inst_16965);
} else {
return null;
}
}
});})(c__16128__auto__,f__$1))
;
return ((function (switch__16002__auto__,c__16128__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__16003__auto__ = null;
var cljs$core$async$transduce_$_state_machine__16003__auto____0 = (function (){
var statearr_16972 = [null,null,null,null,null,null,null];
(statearr_16972[(0)] = cljs$core$async$transduce_$_state_machine__16003__auto__);

(statearr_16972[(1)] = (1));

return statearr_16972;
});
var cljs$core$async$transduce_$_state_machine__16003__auto____1 = (function (state_16967){
while(true){
var ret_value__16004__auto__ = (function (){try{while(true){
var result__16005__auto__ = switch__16002__auto__(state_16967);
if(cljs.core.keyword_identical_QMARK_(result__16005__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16005__auto__;
}
break;
}
}catch (e16973){if((e16973 instanceof Object)){
var ex__16006__auto__ = e16973;
var statearr_16974_16976 = state_16967;
(statearr_16974_16976[(5)] = ex__16006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16967);

return cljs.core.cst$kw$recur;
} else {
throw e16973;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16004__auto__,cljs.core.cst$kw$recur)){
var G__16977 = state_16967;
state_16967 = G__16977;
continue;
} else {
return ret_value__16004__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__16003__auto__ = function(state_16967){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__16003__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__16003__auto____1.call(this,state_16967);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__16003__auto____0;
cljs$core$async$transduce_$_state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__16003__auto____1;
return cljs$core$async$transduce_$_state_machine__16003__auto__;
})()
;})(switch__16002__auto__,c__16128__auto__,f__$1))
})();
var state__16130__auto__ = (function (){var statearr_16975 = (f__16129__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16129__auto__.cljs$core$IFn$_invoke$arity$0() : f__16129__auto__.call(null));
(statearr_16975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16128__auto__);

return statearr_16975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16130__auto__);
});})(c__16128__auto__,f__$1))
);

return c__16128__auto__;
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
var args16978 = [];
var len__9181__auto___17030 = arguments.length;
var i__9182__auto___17031 = (0);
while(true){
if((i__9182__auto___17031 < len__9181__auto___17030)){
args16978.push((arguments[i__9182__auto___17031]));

var G__17032 = (i__9182__auto___17031 + (1));
i__9182__auto___17031 = G__17032;
continue;
} else {
}
break;
}

var G__16980 = args16978.length;
switch (G__16980) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16978.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__16128__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16128__auto__){
return (function (){
var f__16129__auto__ = (function (){var switch__16002__auto__ = ((function (c__16128__auto__){
return (function (state_17005){
var state_val_17006 = (state_17005[(1)]);
if((state_val_17006 === (7))){
var inst_16987 = (state_17005[(2)]);
var state_17005__$1 = state_17005;
var statearr_17007_17034 = state_17005__$1;
(statearr_17007_17034[(2)] = inst_16987);

(statearr_17007_17034[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17006 === (1))){
var inst_16981 = cljs.core.seq(coll);
var inst_16982 = inst_16981;
var state_17005__$1 = (function (){var statearr_17008 = state_17005;
(statearr_17008[(7)] = inst_16982);

return statearr_17008;
})();
var statearr_17009_17035 = state_17005__$1;
(statearr_17009_17035[(2)] = null);

(statearr_17009_17035[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17006 === (4))){
var inst_16982 = (state_17005[(7)]);
var inst_16985 = cljs.core.first(inst_16982);
var state_17005__$1 = state_17005;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17005__$1,(7),ch,inst_16985);
} else {
if((state_val_17006 === (13))){
var inst_16999 = (state_17005[(2)]);
var state_17005__$1 = state_17005;
var statearr_17010_17036 = state_17005__$1;
(statearr_17010_17036[(2)] = inst_16999);

(statearr_17010_17036[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17006 === (6))){
var inst_16990 = (state_17005[(2)]);
var state_17005__$1 = state_17005;
if(cljs.core.truth_(inst_16990)){
var statearr_17011_17037 = state_17005__$1;
(statearr_17011_17037[(1)] = (8));

} else {
var statearr_17012_17038 = state_17005__$1;
(statearr_17012_17038[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17006 === (3))){
var inst_17003 = (state_17005[(2)]);
var state_17005__$1 = state_17005;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17005__$1,inst_17003);
} else {
if((state_val_17006 === (12))){
var state_17005__$1 = state_17005;
var statearr_17013_17039 = state_17005__$1;
(statearr_17013_17039[(2)] = null);

(statearr_17013_17039[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17006 === (2))){
var inst_16982 = (state_17005[(7)]);
var state_17005__$1 = state_17005;
if(cljs.core.truth_(inst_16982)){
var statearr_17014_17040 = state_17005__$1;
(statearr_17014_17040[(1)] = (4));

} else {
var statearr_17015_17041 = state_17005__$1;
(statearr_17015_17041[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17006 === (11))){
var inst_16996 = cljs.core.async.close_BANG_(ch);
var state_17005__$1 = state_17005;
var statearr_17016_17042 = state_17005__$1;
(statearr_17016_17042[(2)] = inst_16996);

(statearr_17016_17042[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17006 === (9))){
var state_17005__$1 = state_17005;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17017_17043 = state_17005__$1;
(statearr_17017_17043[(1)] = (11));

} else {
var statearr_17018_17044 = state_17005__$1;
(statearr_17018_17044[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17006 === (5))){
var inst_16982 = (state_17005[(7)]);
var state_17005__$1 = state_17005;
var statearr_17019_17045 = state_17005__$1;
(statearr_17019_17045[(2)] = inst_16982);

(statearr_17019_17045[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17006 === (10))){
var inst_17001 = (state_17005[(2)]);
var state_17005__$1 = state_17005;
var statearr_17020_17046 = state_17005__$1;
(statearr_17020_17046[(2)] = inst_17001);

(statearr_17020_17046[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17006 === (8))){
var inst_16982 = (state_17005[(7)]);
var inst_16992 = cljs.core.next(inst_16982);
var inst_16982__$1 = inst_16992;
var state_17005__$1 = (function (){var statearr_17021 = state_17005;
(statearr_17021[(7)] = inst_16982__$1);

return statearr_17021;
})();
var statearr_17022_17047 = state_17005__$1;
(statearr_17022_17047[(2)] = null);

(statearr_17022_17047[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__16128__auto__))
;
return ((function (switch__16002__auto__,c__16128__auto__){
return (function() {
var cljs$core$async$state_machine__16003__auto__ = null;
var cljs$core$async$state_machine__16003__auto____0 = (function (){
var statearr_17026 = [null,null,null,null,null,null,null,null];
(statearr_17026[(0)] = cljs$core$async$state_machine__16003__auto__);

(statearr_17026[(1)] = (1));

return statearr_17026;
});
var cljs$core$async$state_machine__16003__auto____1 = (function (state_17005){
while(true){
var ret_value__16004__auto__ = (function (){try{while(true){
var result__16005__auto__ = switch__16002__auto__(state_17005);
if(cljs.core.keyword_identical_QMARK_(result__16005__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16005__auto__;
}
break;
}
}catch (e17027){if((e17027 instanceof Object)){
var ex__16006__auto__ = e17027;
var statearr_17028_17048 = state_17005;
(statearr_17028_17048[(5)] = ex__16006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17005);

return cljs.core.cst$kw$recur;
} else {
throw e17027;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16004__auto__,cljs.core.cst$kw$recur)){
var G__17049 = state_17005;
state_17005 = G__17049;
continue;
} else {
return ret_value__16004__auto__;
}
break;
}
});
cljs$core$async$state_machine__16003__auto__ = function(state_17005){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16003__auto____1.call(this,state_17005);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16003__auto____0;
cljs$core$async$state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16003__auto____1;
return cljs$core$async$state_machine__16003__auto__;
})()
;})(switch__16002__auto__,c__16128__auto__))
})();
var state__16130__auto__ = (function (){var statearr_17029 = (f__16129__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16129__auto__.cljs$core$IFn$_invoke$arity$0() : f__16129__auto__.call(null));
(statearr_17029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16128__auto__);

return statearr_17029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16130__auto__);
});})(c__16128__auto__))
);

return c__16128__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

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
var x__8678__auto__ = (((_ == null))?null:_);
var m__8679__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8678__auto__)]);
if(!((m__8679__auto__ == null))){
return (m__8679__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8679__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8679__auto__.call(null,_));
} else {
var m__8679__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__8679__auto____$1 == null))){
return (m__8679__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8679__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8679__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
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
var x__8678__auto__ = (((m == null))?null:m);
var m__8679__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8678__auto__)]);
if(!((m__8679__auto__ == null))){
return (m__8679__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8679__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__8679__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__8679__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__8679__auto____$1 == null))){
return (m__8679__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8679__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__8679__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__8678__auto__ = (((m == null))?null:m);
var m__8679__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8678__auto__)]);
if(!((m__8679__auto__ == null))){
return (m__8679__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8679__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8679__auto__.call(null,m,ch));
} else {
var m__8679__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__8679__auto____$1 == null))){
return (m__8679__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8679__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8679__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__8678__auto__ = (((m == null))?null:m);
var m__8679__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8678__auto__)]);
if(!((m__8679__auto__ == null))){
return (m__8679__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8679__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__8679__auto__.call(null,m));
} else {
var m__8679__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__8679__auto____$1 == null))){
return (m__8679__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8679__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__8679__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
var cs = (function (){var G__17278 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17278) : cljs.core.atom.call(null,G__17278));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async17279 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17279 = (function (ch,cs,meta17280){
this.ch = ch;
this.cs = cs;
this.meta17280 = meta17280;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17281,meta17280__$1){
var self__ = this;
var _17281__$1 = this;
return (new cljs.core.async.t_cljs$core$async17279(self__.ch,self__.cs,meta17280__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async17279.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17281){
var self__ = this;
var _17281__$1 = this;
return self__.meta17280;
});})(cs))
;

cljs.core.async.t_cljs$core$async17279.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17279.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async17279.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17279.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17279.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17279.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17282_17506 = self__.cs;
var G__17283_17507 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17282_17506,G__17283_17507) : cljs.core.reset_BANG_.call(null,G__17282_17506,G__17283_17507));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17279.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta17280], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async17279.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17279.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17279";

cljs.core.async.t_cljs$core$async17279.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write(writer__8618__auto__,"cljs.core.async/t_cljs$core$async17279");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async17279 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async17279(ch__$1,cs__$1,meta17280){
return (new cljs.core.async.t_cljs$core$async17279(ch__$1,cs__$1,meta17280));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async17279(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__16128__auto___17508 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16128__auto___17508,cs,m,dchan,dctr,done){
return (function (){
var f__16129__auto__ = (function (){var switch__16002__auto__ = ((function (c__16128__auto___17508,cs,m,dchan,dctr,done){
return (function (state_17418){
var state_val_17419 = (state_17418[(1)]);
if((state_val_17419 === (7))){
var inst_17414 = (state_17418[(2)]);
var state_17418__$1 = state_17418;
var statearr_17420_17509 = state_17418__$1;
(statearr_17420_17509[(2)] = inst_17414);

(statearr_17420_17509[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17419 === (20))){
var inst_17317 = (state_17418[(7)]);
var inst_17329 = cljs.core.first(inst_17317);
var inst_17330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17329,(0),null);
var inst_17331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17329,(1),null);
var state_17418__$1 = (function (){var statearr_17421 = state_17418;
(statearr_17421[(8)] = inst_17330);

return statearr_17421;
})();
if(cljs.core.truth_(inst_17331)){
var statearr_17422_17510 = state_17418__$1;
(statearr_17422_17510[(1)] = (22));

} else {
var statearr_17423_17511 = state_17418__$1;
(statearr_17423_17511[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17419 === (27))){
var inst_17366 = (state_17418[(9)]);
var inst_17361 = (state_17418[(10)]);
var inst_17359 = (state_17418[(11)]);
var inst_17286 = (state_17418[(12)]);
var inst_17366__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17359,inst_17361);
var inst_17367 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17366__$1,inst_17286,done);
var state_17418__$1 = (function (){var statearr_17424 = state_17418;
(statearr_17424[(9)] = inst_17366__$1);

return statearr_17424;
})();
if(cljs.core.truth_(inst_17367)){
var statearr_17425_17512 = state_17418__$1;
(statearr_17425_17512[(1)] = (30));

} else {
var statearr_17426_17513 = state_17418__$1;
(statearr_17426_17513[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17419 === (1))){
var state_17418__$1 = state_17418;
var statearr_17427_17514 = state_17418__$1;
(statearr_17427_17514[(2)] = null);

(statearr_17427_17514[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17419 === (24))){
var inst_17317 = (state_17418[(7)]);
var inst_17336 = (state_17418[(2)]);
var inst_17337 = cljs.core.next(inst_17317);
var inst_17295 = inst_17337;
var inst_17296 = null;
var inst_17297 = (0);
var inst_17298 = (0);
var state_17418__$1 = (function (){var statearr_17428 = state_17418;
(statearr_17428[(13)] = inst_17298);

(statearr_17428[(14)] = inst_17336);

(statearr_17428[(15)] = inst_17295);

(statearr_17428[(16)] = inst_17296);

(statearr_17428[(17)] = inst_17297);

return statearr_17428;
})();
var statearr_17429_17515 = state_17418__$1;
(statearr_17429_17515[(2)] = null);

(statearr_17429_17515[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17419 === (39))){
var state_17418__$1 = state_17418;
var statearr_17433_17516 = state_17418__$1;
(statearr_17433_17516[(2)] = null);

(statearr_17433_17516[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17419 === (4))){
var inst_17286 = (state_17418[(12)]);
var inst_17286__$1 = (state_17418[(2)]);
var inst_17287 = (inst_17286__$1 == null);
var state_17418__$1 = (function (){var statearr_17434 = state_17418;
(statearr_17434[(12)] = inst_17286__$1);

return statearr_17434;
})();
if(cljs.core.truth_(inst_17287)){
var statearr_17435_17517 = state_17418__$1;
(statearr_17435_17517[(1)] = (5));

} else {
var statearr_17436_17518 = state_17418__$1;
(statearr_17436_17518[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17419 === (15))){
var inst_17298 = (state_17418[(13)]);
var inst_17295 = (state_17418[(15)]);
var inst_17296 = (state_17418[(16)]);
var inst_17297 = (state_17418[(17)]);
var inst_17313 = (state_17418[(2)]);
var inst_17314 = (inst_17298 + (1));
var tmp17430 = inst_17295;
var tmp17431 = inst_17296;
var tmp17432 = inst_17297;
var inst_17295__$1 = tmp17430;
var inst_17296__$1 = tmp17431;
var inst_17297__$1 = tmp17432;
var inst_17298__$1 = inst_17314;
var state_17418__$1 = (function (){var statearr_17437 = state_17418;
(statearr_17437[(13)] = inst_17298__$1);

(statearr_17437[(15)] = inst_17295__$1);

(statearr_17437[(16)] = inst_17296__$1);

(statearr_17437[(17)] = inst_17297__$1);

(statearr_17437[(18)] = inst_17313);

return statearr_17437;
})();
var statearr_17438_17519 = state_17418__$1;
(statearr_17438_17519[(2)] = null);

(statearr_17438_17519[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17419 === (21))){
var inst_17340 = (state_17418[(2)]);
var state_17418__$1 = state_17418;
var statearr_17442_17520 = state_17418__$1;
(statearr_17442_17520[(2)] = inst_17340);

(statearr_17442_17520[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17419 === (31))){
var inst_17366 = (state_17418[(9)]);
var inst_17370 = done(null);
var inst_17371 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17366);
var state_17418__$1 = (function (){var statearr_17443 = state_17418;
(statearr_17443[(19)] = inst_17370);

return statearr_17443;
})();
var statearr_17444_17521 = state_17418__$1;
(statearr_17444_17521[(2)] = inst_17371);

(statearr_17444_17521[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17419 === (32))){
var inst_17361 = (state_17418[(10)]);
var inst_17358 = (state_17418[(20)]);
var inst_17359 = (state_17418[(11)]);
var inst_17360 = (state_17418[(21)]);
var inst_17373 = (state_17418[(2)]);
var inst_17374 = (inst_17361 + (1));
var tmp17439 = inst_17358;
var tmp17440 = inst_17359;
var tmp17441 = inst_17360;
var inst_17358__$1 = tmp17439;
var inst_17359__$1 = tmp17440;
var inst_17360__$1 = tmp17441;
var inst_17361__$1 = inst_17374;
var state_17418__$1 = (function (){var statearr_17445 = state_17418;
(statearr_17445[(10)] = inst_17361__$1);

(statearr_17445[(22)] = inst_17373);

(statearr_17445[(20)] = inst_17358__$1);

(statearr_17445[(11)] = inst_17359__$1);

(statearr_17445[(21)] = inst_17360__$1);

return statearr_17445;
})();
var statearr_17446_17522 = state_17418__$1;
(statearr_17446_17522[(2)] = null);

(statearr_17446_17522[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17419 === (40))){
var inst_17386 = (state_17418[(23)]);
var inst_17390 = done(null);
var inst_17391 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17386);
var state_17418__$1 = (function (){var statearr_17447 = state_17418;
(statearr_17447[(24)] = inst_17390);

return statearr_17447;
})();
var statearr_17448_17523 = state_17418__$1;
(statearr_17448_17523[(2)] = inst_17391);

(statearr_17448_17523[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17419 === (33))){
var inst_17377 = (state_17418[(25)]);
var inst_17379 = cljs.core.chunked_seq_QMARK_(inst_17377);
var state_17418__$1 = state_17418;
if(inst_17379){
var statearr_17449_17524 = state_17418__$1;
(statearr_17449_17524[(1)] = (36));

} else {
var statearr_17450_17525 = state_17418__$1;
(statearr_17450_17525[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17419 === (13))){
var inst_17307 = (state_17418[(26)]);
var inst_17310 = cljs.core.async.close_BANG_(inst_17307);
var state_17418__$1 = state_17418;
var statearr_17451_17526 = state_17418__$1;
(statearr_17451_17526[(2)] = inst_17310);

(statearr_17451_17526[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17419 === (22))){
var inst_17330 = (state_17418[(8)]);
var inst_17333 = cljs.core.async.close_BANG_(inst_17330);
var state_17418__$1 = state_17418;
var statearr_17452_17527 = state_17418__$1;
(statearr_17452_17527[(2)] = inst_17333);

(statearr_17452_17527[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17419 === (36))){
var inst_17377 = (state_17418[(25)]);
var inst_17381 = cljs.core.chunk_first(inst_17377);
var inst_17382 = cljs.core.chunk_rest(inst_17377);
var inst_17383 = cljs.core.count(inst_17381);
var inst_17358 = inst_17382;
var inst_17359 = inst_17381;
var inst_17360 = inst_17383;
var inst_17361 = (0);
var state_17418__$1 = (function (){var statearr_17453 = state_17418;
(statearr_17453[(10)] = inst_17361);

(statearr_17453[(20)] = inst_17358);

(statearr_17453[(11)] = inst_17359);

(statearr_17453[(21)] = inst_17360);

return statearr_17453;
})();
var statearr_17454_17528 = state_17418__$1;
(statearr_17454_17528[(2)] = null);

(statearr_17454_17528[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17419 === (41))){
var inst_17377 = (state_17418[(25)]);
var inst_17393 = (state_17418[(2)]);
var inst_17394 = cljs.core.next(inst_17377);
var inst_17358 = inst_17394;
var inst_17359 = null;
var inst_17360 = (0);
var inst_17361 = (0);
var state_17418__$1 = (function (){var statearr_17455 = state_17418;
(statearr_17455[(10)] = inst_17361);

(statearr_17455[(20)] = inst_17358);

(statearr_17455[(11)] = inst_17359);

(statearr_17455[(27)] = inst_17393);

(statearr_17455[(21)] = inst_17360);

return statearr_17455;
})();
var statearr_17456_17529 = state_17418__$1;
(statearr_17456_17529[(2)] = null);

(statearr_17456_17529[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17419 === (43))){
var state_17418__$1 = state_17418;
var statearr_17457_17530 = state_17418__$1;
(statearr_17457_17530[(2)] = null);

(statearr_17457_17530[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17419 === (29))){
var inst_17402 = (state_17418[(2)]);
var state_17418__$1 = state_17418;
var statearr_17458_17531 = state_17418__$1;
(statearr_17458_17531[(2)] = inst_17402);

(statearr_17458_17531[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17419 === (44))){
var inst_17411 = (state_17418[(2)]);
var state_17418__$1 = (function (){var statearr_17459 = state_17418;
(statearr_17459[(28)] = inst_17411);

return statearr_17459;
})();
var statearr_17460_17532 = state_17418__$1;
(statearr_17460_17532[(2)] = null);

(statearr_17460_17532[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17419 === (6))){
var inst_17350 = (state_17418[(29)]);
var inst_17349 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_17350__$1 = cljs.core.keys(inst_17349);
var inst_17351 = cljs.core.count(inst_17350__$1);
var inst_17352 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_17351) : cljs.core.reset_BANG_.call(null,dctr,inst_17351));
var inst_17357 = cljs.core.seq(inst_17350__$1);
var inst_17358 = inst_17357;
var inst_17359 = null;
var inst_17360 = (0);
var inst_17361 = (0);
var state_17418__$1 = (function (){var statearr_17461 = state_17418;
(statearr_17461[(10)] = inst_17361);

(statearr_17461[(30)] = inst_17352);

(statearr_17461[(20)] = inst_17358);

(statearr_17461[(11)] = inst_17359);

(statearr_17461[(21)] = inst_17360);

(statearr_17461[(29)] = inst_17350__$1);

return statearr_17461;
})();
var statearr_17462_17533 = state_17418__$1;
(statearr_17462_17533[(2)] = null);

(statearr_17462_17533[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17419 === (28))){
var inst_17377 = (state_17418[(25)]);
var inst_17358 = (state_17418[(20)]);
var inst_17377__$1 = cljs.core.seq(inst_17358);
var state_17418__$1 = (function (){var statearr_17463 = state_17418;
(statearr_17463[(25)] = inst_17377__$1);

return statearr_17463;
})();
if(inst_17377__$1){
var statearr_17464_17534 = state_17418__$1;
(statearr_17464_17534[(1)] = (33));

} else {
var statearr_17465_17535 = state_17418__$1;
(statearr_17465_17535[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17419 === (25))){
var inst_17361 = (state_17418[(10)]);
var inst_17360 = (state_17418[(21)]);
var inst_17363 = (inst_17361 < inst_17360);
var inst_17364 = inst_17363;
var state_17418__$1 = state_17418;
if(cljs.core.truth_(inst_17364)){
var statearr_17466_17536 = state_17418__$1;
(statearr_17466_17536[(1)] = (27));

} else {
var statearr_17467_17537 = state_17418__$1;
(statearr_17467_17537[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17419 === (34))){
var state_17418__$1 = state_17418;
var statearr_17468_17538 = state_17418__$1;
(statearr_17468_17538[(2)] = null);

(statearr_17468_17538[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17419 === (17))){
var state_17418__$1 = state_17418;
var statearr_17469_17539 = state_17418__$1;
(statearr_17469_17539[(2)] = null);

(statearr_17469_17539[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17419 === (3))){
var inst_17416 = (state_17418[(2)]);
var state_17418__$1 = state_17418;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17418__$1,inst_17416);
} else {
if((state_val_17419 === (12))){
var inst_17345 = (state_17418[(2)]);
var state_17418__$1 = state_17418;
var statearr_17470_17540 = state_17418__$1;
(statearr_17470_17540[(2)] = inst_17345);

(statearr_17470_17540[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17419 === (2))){
var state_17418__$1 = state_17418;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17418__$1,(4),ch);
} else {
if((state_val_17419 === (23))){
var state_17418__$1 = state_17418;
var statearr_17471_17541 = state_17418__$1;
(statearr_17471_17541[(2)] = null);

(statearr_17471_17541[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17419 === (35))){
var inst_17400 = (state_17418[(2)]);
var state_17418__$1 = state_17418;
var statearr_17472_17542 = state_17418__$1;
(statearr_17472_17542[(2)] = inst_17400);

(statearr_17472_17542[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17419 === (19))){
var inst_17317 = (state_17418[(7)]);
var inst_17321 = cljs.core.chunk_first(inst_17317);
var inst_17322 = cljs.core.chunk_rest(inst_17317);
var inst_17323 = cljs.core.count(inst_17321);
var inst_17295 = inst_17322;
var inst_17296 = inst_17321;
var inst_17297 = inst_17323;
var inst_17298 = (0);
var state_17418__$1 = (function (){var statearr_17473 = state_17418;
(statearr_17473[(13)] = inst_17298);

(statearr_17473[(15)] = inst_17295);

(statearr_17473[(16)] = inst_17296);

(statearr_17473[(17)] = inst_17297);

return statearr_17473;
})();
var statearr_17474_17543 = state_17418__$1;
(statearr_17474_17543[(2)] = null);

(statearr_17474_17543[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17419 === (11))){
var inst_17295 = (state_17418[(15)]);
var inst_17317 = (state_17418[(7)]);
var inst_17317__$1 = cljs.core.seq(inst_17295);
var state_17418__$1 = (function (){var statearr_17475 = state_17418;
(statearr_17475[(7)] = inst_17317__$1);

return statearr_17475;
})();
if(inst_17317__$1){
var statearr_17476_17544 = state_17418__$1;
(statearr_17476_17544[(1)] = (16));

} else {
var statearr_17477_17545 = state_17418__$1;
(statearr_17477_17545[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17419 === (9))){
var inst_17347 = (state_17418[(2)]);
var state_17418__$1 = state_17418;
var statearr_17478_17546 = state_17418__$1;
(statearr_17478_17546[(2)] = inst_17347);

(statearr_17478_17546[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17419 === (5))){
var inst_17293 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_17294 = cljs.core.seq(inst_17293);
var inst_17295 = inst_17294;
var inst_17296 = null;
var inst_17297 = (0);
var inst_17298 = (0);
var state_17418__$1 = (function (){var statearr_17479 = state_17418;
(statearr_17479[(13)] = inst_17298);

(statearr_17479[(15)] = inst_17295);

(statearr_17479[(16)] = inst_17296);

(statearr_17479[(17)] = inst_17297);

return statearr_17479;
})();
var statearr_17480_17547 = state_17418__$1;
(statearr_17480_17547[(2)] = null);

(statearr_17480_17547[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17419 === (14))){
var state_17418__$1 = state_17418;
var statearr_17481_17548 = state_17418__$1;
(statearr_17481_17548[(2)] = null);

(statearr_17481_17548[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17419 === (45))){
var inst_17408 = (state_17418[(2)]);
var state_17418__$1 = state_17418;
var statearr_17482_17549 = state_17418__$1;
(statearr_17482_17549[(2)] = inst_17408);

(statearr_17482_17549[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17419 === (26))){
var inst_17350 = (state_17418[(29)]);
var inst_17404 = (state_17418[(2)]);
var inst_17405 = cljs.core.seq(inst_17350);
var state_17418__$1 = (function (){var statearr_17483 = state_17418;
(statearr_17483[(31)] = inst_17404);

return statearr_17483;
})();
if(inst_17405){
var statearr_17484_17550 = state_17418__$1;
(statearr_17484_17550[(1)] = (42));

} else {
var statearr_17485_17551 = state_17418__$1;
(statearr_17485_17551[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17419 === (16))){
var inst_17317 = (state_17418[(7)]);
var inst_17319 = cljs.core.chunked_seq_QMARK_(inst_17317);
var state_17418__$1 = state_17418;
if(inst_17319){
var statearr_17486_17552 = state_17418__$1;
(statearr_17486_17552[(1)] = (19));

} else {
var statearr_17487_17553 = state_17418__$1;
(statearr_17487_17553[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17419 === (38))){
var inst_17397 = (state_17418[(2)]);
var state_17418__$1 = state_17418;
var statearr_17488_17554 = state_17418__$1;
(statearr_17488_17554[(2)] = inst_17397);

(statearr_17488_17554[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17419 === (30))){
var state_17418__$1 = state_17418;
var statearr_17489_17555 = state_17418__$1;
(statearr_17489_17555[(2)] = null);

(statearr_17489_17555[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17419 === (10))){
var inst_17298 = (state_17418[(13)]);
var inst_17296 = (state_17418[(16)]);
var inst_17306 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17296,inst_17298);
var inst_17307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17306,(0),null);
var inst_17308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17306,(1),null);
var state_17418__$1 = (function (){var statearr_17490 = state_17418;
(statearr_17490[(26)] = inst_17307);

return statearr_17490;
})();
if(cljs.core.truth_(inst_17308)){
var statearr_17491_17556 = state_17418__$1;
(statearr_17491_17556[(1)] = (13));

} else {
var statearr_17492_17557 = state_17418__$1;
(statearr_17492_17557[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17419 === (18))){
var inst_17343 = (state_17418[(2)]);
var state_17418__$1 = state_17418;
var statearr_17493_17558 = state_17418__$1;
(statearr_17493_17558[(2)] = inst_17343);

(statearr_17493_17558[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17419 === (42))){
var state_17418__$1 = state_17418;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17418__$1,(45),dchan);
} else {
if((state_val_17419 === (37))){
var inst_17377 = (state_17418[(25)]);
var inst_17286 = (state_17418[(12)]);
var inst_17386 = (state_17418[(23)]);
var inst_17386__$1 = cljs.core.first(inst_17377);
var inst_17387 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17386__$1,inst_17286,done);
var state_17418__$1 = (function (){var statearr_17494 = state_17418;
(statearr_17494[(23)] = inst_17386__$1);

return statearr_17494;
})();
if(cljs.core.truth_(inst_17387)){
var statearr_17495_17559 = state_17418__$1;
(statearr_17495_17559[(1)] = (39));

} else {
var statearr_17496_17560 = state_17418__$1;
(statearr_17496_17560[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17419 === (8))){
var inst_17298 = (state_17418[(13)]);
var inst_17297 = (state_17418[(17)]);
var inst_17300 = (inst_17298 < inst_17297);
var inst_17301 = inst_17300;
var state_17418__$1 = state_17418;
if(cljs.core.truth_(inst_17301)){
var statearr_17497_17561 = state_17418__$1;
(statearr_17497_17561[(1)] = (10));

} else {
var statearr_17498_17562 = state_17418__$1;
(statearr_17498_17562[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__16128__auto___17508,cs,m,dchan,dctr,done))
;
return ((function (switch__16002__auto__,c__16128__auto___17508,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__16003__auto__ = null;
var cljs$core$async$mult_$_state_machine__16003__auto____0 = (function (){
var statearr_17502 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17502[(0)] = cljs$core$async$mult_$_state_machine__16003__auto__);

(statearr_17502[(1)] = (1));

return statearr_17502;
});
var cljs$core$async$mult_$_state_machine__16003__auto____1 = (function (state_17418){
while(true){
var ret_value__16004__auto__ = (function (){try{while(true){
var result__16005__auto__ = switch__16002__auto__(state_17418);
if(cljs.core.keyword_identical_QMARK_(result__16005__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16005__auto__;
}
break;
}
}catch (e17503){if((e17503 instanceof Object)){
var ex__16006__auto__ = e17503;
var statearr_17504_17563 = state_17418;
(statearr_17504_17563[(5)] = ex__16006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17418);

return cljs.core.cst$kw$recur;
} else {
throw e17503;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16004__auto__,cljs.core.cst$kw$recur)){
var G__17564 = state_17418;
state_17418 = G__17564;
continue;
} else {
return ret_value__16004__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16003__auto__ = function(state_17418){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16003__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16003__auto____1.call(this,state_17418);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16003__auto____0;
cljs$core$async$mult_$_state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16003__auto____1;
return cljs$core$async$mult_$_state_machine__16003__auto__;
})()
;})(switch__16002__auto__,c__16128__auto___17508,cs,m,dchan,dctr,done))
})();
var state__16130__auto__ = (function (){var statearr_17505 = (f__16129__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16129__auto__.cljs$core$IFn$_invoke$arity$0() : f__16129__auto__.call(null));
(statearr_17505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16128__auto___17508);

return statearr_17505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16130__auto__);
});})(c__16128__auto___17508,cs,m,dchan,dctr,done))
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
var args17565 = [];
var len__9181__auto___17568 = arguments.length;
var i__9182__auto___17569 = (0);
while(true){
if((i__9182__auto___17569 < len__9181__auto___17568)){
args17565.push((arguments[i__9182__auto___17569]));

var G__17570 = (i__9182__auto___17569 + (1));
i__9182__auto___17569 = G__17570;
continue;
} else {
}
break;
}

var G__17567 = args17565.length;
switch (G__17567) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17565.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__8678__auto__ = (((m == null))?null:m);
var m__8679__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8678__auto__)]);
if(!((m__8679__auto__ == null))){
return (m__8679__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8679__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8679__auto__.call(null,m,ch));
} else {
var m__8679__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__8679__auto____$1 == null))){
return (m__8679__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8679__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8679__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__8678__auto__ = (((m == null))?null:m);
var m__8679__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8678__auto__)]);
if(!((m__8679__auto__ == null))){
return (m__8679__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8679__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8679__auto__.call(null,m,ch));
} else {
var m__8679__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__8679__auto____$1 == null))){
return (m__8679__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8679__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8679__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__8678__auto__ = (((m == null))?null:m);
var m__8679__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8678__auto__)]);
if(!((m__8679__auto__ == null))){
return (m__8679__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8679__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__8679__auto__.call(null,m));
} else {
var m__8679__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__8679__auto____$1 == null))){
return (m__8679__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8679__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__8679__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__8678__auto__ = (((m == null))?null:m);
var m__8679__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8678__auto__)]);
if(!((m__8679__auto__ == null))){
return (m__8679__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8679__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__8679__auto__.call(null,m,state_map));
} else {
var m__8679__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__8679__auto____$1 == null))){
return (m__8679__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8679__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__8679__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__8678__auto__ = (((m == null))?null:m);
var m__8679__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8678__auto__)]);
if(!((m__8679__auto__ == null))){
return (m__8679__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8679__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__8679__auto__.call(null,m,mode));
} else {
var m__8679__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__8679__auto____$1 == null))){
return (m__8679__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8679__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__8679__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__9188__auto__ = [];
var len__9181__auto___17582 = arguments.length;
var i__9182__auto___17583 = (0);
while(true){
if((i__9182__auto___17583 < len__9181__auto___17582)){
args__9188__auto__.push((arguments[i__9182__auto___17583]));

var G__17584 = (i__9182__auto___17583 + (1));
i__9182__auto___17583 = G__17584;
continue;
} else {
}
break;
}

var argseq__9189__auto__ = ((((3) < args__9188__auto__.length))?(new cljs.core.IndexedSeq(args__9188__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9189__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17576){
var map__17577 = p__17576;
var map__17577__$1 = ((((!((map__17577 == null)))?((((map__17577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17577.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17577):map__17577);
var opts = map__17577__$1;
var statearr_17579_17585 = state;
(statearr_17579_17585[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__5278__auto__ = cljs.core.async.do_alts(((function (map__17577,map__17577__$1,opts){
return (function (val){
var statearr_17580_17586 = state;
(statearr_17580_17586[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__17577,map__17577__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5278__auto__)){
var cb = temp__5278__auto__;
var statearr_17581_17587 = state;
(statearr_17581_17587[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17572){
var G__17573 = cljs.core.first(seq17572);
var seq17572__$1 = cljs.core.next(seq17572);
var G__17574 = cljs.core.first(seq17572__$1);
var seq17572__$2 = cljs.core.next(seq17572__$1);
var G__17575 = cljs.core.first(seq17572__$2);
var seq17572__$3 = cljs.core.next(seq17572__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17573,G__17574,G__17575,seq17572__$3);
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
var cs = (function (){var G__17759 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17759) : cljs.core.atom.call(null,G__17759));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (function (){var G__17760 = cljs.core.cst$kw$mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17760) : cljs.core.atom.call(null,G__17760));
})();
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async17761 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17761 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta17762){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta17762 = meta17762;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17763,meta17762__$1){
var self__ = this;
var _17763__$1 = this;
return (new cljs.core.async.t_cljs$core$async17761(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta17762__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17761.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17763){
var self__ = this;
var _17763__$1 = this;
return self__.meta17762;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17761.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17761.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17761.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17761.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17761.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17761.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17764_17930 = self__.cs;
var G__17765_17931 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17764_17930,G__17765_17931) : cljs.core.reset_BANG_.call(null,G__17764_17930,G__17765_17931));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17761.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17761.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17761.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta17762], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async17761.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17761.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17761";

cljs.core.async.t_cljs$core$async17761.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write(writer__8618__auto__,"cljs.core.async/t_cljs$core$async17761");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async17761 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async17761(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17762){
return (new cljs.core.async.t_cljs$core$async17761(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta17762));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async17761(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16128__auto___17932 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16128__auto___17932,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16129__auto__ = (function (){var switch__16002__auto__ = ((function (c__16128__auto___17932,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17867){
var state_val_17868 = (state_17867[(1)]);
if((state_val_17868 === (7))){
var inst_17782 = (state_17867[(2)]);
var state_17867__$1 = state_17867;
var statearr_17869_17933 = state_17867__$1;
(statearr_17869_17933[(2)] = inst_17782);

(statearr_17869_17933[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (20))){
var inst_17794 = (state_17867[(7)]);
var state_17867__$1 = state_17867;
var statearr_17870_17934 = state_17867__$1;
(statearr_17870_17934[(2)] = inst_17794);

(statearr_17870_17934[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (27))){
var state_17867__$1 = state_17867;
var statearr_17871_17935 = state_17867__$1;
(statearr_17871_17935[(2)] = null);

(statearr_17871_17935[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (1))){
var inst_17769 = (state_17867[(8)]);
var inst_17769__$1 = calc_state();
var inst_17771 = (inst_17769__$1 == null);
var inst_17772 = cljs.core.not(inst_17771);
var state_17867__$1 = (function (){var statearr_17872 = state_17867;
(statearr_17872[(8)] = inst_17769__$1);

return statearr_17872;
})();
if(inst_17772){
var statearr_17873_17936 = state_17867__$1;
(statearr_17873_17936[(1)] = (2));

} else {
var statearr_17874_17937 = state_17867__$1;
(statearr_17874_17937[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (24))){
var inst_17841 = (state_17867[(9)]);
var inst_17818 = (state_17867[(10)]);
var inst_17827 = (state_17867[(11)]);
var inst_17841__$1 = (inst_17818.cljs$core$IFn$_invoke$arity$1 ? inst_17818.cljs$core$IFn$_invoke$arity$1(inst_17827) : inst_17818.call(null,inst_17827));
var state_17867__$1 = (function (){var statearr_17875 = state_17867;
(statearr_17875[(9)] = inst_17841__$1);

return statearr_17875;
})();
if(cljs.core.truth_(inst_17841__$1)){
var statearr_17876_17938 = state_17867__$1;
(statearr_17876_17938[(1)] = (29));

} else {
var statearr_17877_17939 = state_17867__$1;
(statearr_17877_17939[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (4))){
var inst_17785 = (state_17867[(2)]);
var state_17867__$1 = state_17867;
if(cljs.core.truth_(inst_17785)){
var statearr_17878_17940 = state_17867__$1;
(statearr_17878_17940[(1)] = (8));

} else {
var statearr_17879_17941 = state_17867__$1;
(statearr_17879_17941[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (15))){
var inst_17812 = (state_17867[(2)]);
var state_17867__$1 = state_17867;
if(cljs.core.truth_(inst_17812)){
var statearr_17880_17942 = state_17867__$1;
(statearr_17880_17942[(1)] = (19));

} else {
var statearr_17881_17943 = state_17867__$1;
(statearr_17881_17943[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (21))){
var inst_17817 = (state_17867[(12)]);
var inst_17817__$1 = (state_17867[(2)]);
var inst_17818 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17817__$1,cljs.core.cst$kw$solos);
var inst_17819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17817__$1,cljs.core.cst$kw$mutes);
var inst_17820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17817__$1,cljs.core.cst$kw$reads);
var state_17867__$1 = (function (){var statearr_17882 = state_17867;
(statearr_17882[(13)] = inst_17819);

(statearr_17882[(12)] = inst_17817__$1);

(statearr_17882[(10)] = inst_17818);

return statearr_17882;
})();
return cljs.core.async.ioc_alts_BANG_(state_17867__$1,(22),inst_17820);
} else {
if((state_val_17868 === (31))){
var inst_17849 = (state_17867[(2)]);
var state_17867__$1 = state_17867;
if(cljs.core.truth_(inst_17849)){
var statearr_17883_17944 = state_17867__$1;
(statearr_17883_17944[(1)] = (32));

} else {
var statearr_17884_17945 = state_17867__$1;
(statearr_17884_17945[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (32))){
var inst_17826 = (state_17867[(14)]);
var state_17867__$1 = state_17867;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17867__$1,(35),out,inst_17826);
} else {
if((state_val_17868 === (33))){
var inst_17817 = (state_17867[(12)]);
var inst_17794 = inst_17817;
var state_17867__$1 = (function (){var statearr_17885 = state_17867;
(statearr_17885[(7)] = inst_17794);

return statearr_17885;
})();
var statearr_17886_17946 = state_17867__$1;
(statearr_17886_17946[(2)] = null);

(statearr_17886_17946[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (13))){
var inst_17794 = (state_17867[(7)]);
var inst_17801 = inst_17794.cljs$lang$protocol_mask$partition0$;
var inst_17802 = (inst_17801 & (64));
var inst_17803 = inst_17794.cljs$core$ISeq$;
var inst_17804 = (cljs.core.PROTOCOL_SENTINEL === inst_17803);
var inst_17805 = (inst_17802) || (inst_17804);
var state_17867__$1 = state_17867;
if(cljs.core.truth_(inst_17805)){
var statearr_17887_17947 = state_17867__$1;
(statearr_17887_17947[(1)] = (16));

} else {
var statearr_17888_17948 = state_17867__$1;
(statearr_17888_17948[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (22))){
var inst_17826 = (state_17867[(14)]);
var inst_17827 = (state_17867[(11)]);
var inst_17825 = (state_17867[(2)]);
var inst_17826__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17825,(0),null);
var inst_17827__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17825,(1),null);
var inst_17828 = (inst_17826__$1 == null);
var inst_17829 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17827__$1,change);
var inst_17830 = (inst_17828) || (inst_17829);
var state_17867__$1 = (function (){var statearr_17889 = state_17867;
(statearr_17889[(14)] = inst_17826__$1);

(statearr_17889[(11)] = inst_17827__$1);

return statearr_17889;
})();
if(cljs.core.truth_(inst_17830)){
var statearr_17890_17949 = state_17867__$1;
(statearr_17890_17949[(1)] = (23));

} else {
var statearr_17891_17950 = state_17867__$1;
(statearr_17891_17950[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (36))){
var inst_17817 = (state_17867[(12)]);
var inst_17794 = inst_17817;
var state_17867__$1 = (function (){var statearr_17892 = state_17867;
(statearr_17892[(7)] = inst_17794);

return statearr_17892;
})();
var statearr_17893_17951 = state_17867__$1;
(statearr_17893_17951[(2)] = null);

(statearr_17893_17951[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (29))){
var inst_17841 = (state_17867[(9)]);
var state_17867__$1 = state_17867;
var statearr_17894_17952 = state_17867__$1;
(statearr_17894_17952[(2)] = inst_17841);

(statearr_17894_17952[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (6))){
var state_17867__$1 = state_17867;
var statearr_17895_17953 = state_17867__$1;
(statearr_17895_17953[(2)] = false);

(statearr_17895_17953[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (28))){
var inst_17837 = (state_17867[(2)]);
var inst_17838 = calc_state();
var inst_17794 = inst_17838;
var state_17867__$1 = (function (){var statearr_17896 = state_17867;
(statearr_17896[(7)] = inst_17794);

(statearr_17896[(15)] = inst_17837);

return statearr_17896;
})();
var statearr_17897_17954 = state_17867__$1;
(statearr_17897_17954[(2)] = null);

(statearr_17897_17954[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (25))){
var inst_17863 = (state_17867[(2)]);
var state_17867__$1 = state_17867;
var statearr_17898_17955 = state_17867__$1;
(statearr_17898_17955[(2)] = inst_17863);

(statearr_17898_17955[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (34))){
var inst_17861 = (state_17867[(2)]);
var state_17867__$1 = state_17867;
var statearr_17899_17956 = state_17867__$1;
(statearr_17899_17956[(2)] = inst_17861);

(statearr_17899_17956[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (17))){
var state_17867__$1 = state_17867;
var statearr_17900_17957 = state_17867__$1;
(statearr_17900_17957[(2)] = false);

(statearr_17900_17957[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (3))){
var state_17867__$1 = state_17867;
var statearr_17901_17958 = state_17867__$1;
(statearr_17901_17958[(2)] = false);

(statearr_17901_17958[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (12))){
var inst_17865 = (state_17867[(2)]);
var state_17867__$1 = state_17867;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17867__$1,inst_17865);
} else {
if((state_val_17868 === (2))){
var inst_17769 = (state_17867[(8)]);
var inst_17774 = inst_17769.cljs$lang$protocol_mask$partition0$;
var inst_17775 = (inst_17774 & (64));
var inst_17776 = inst_17769.cljs$core$ISeq$;
var inst_17777 = (cljs.core.PROTOCOL_SENTINEL === inst_17776);
var inst_17778 = (inst_17775) || (inst_17777);
var state_17867__$1 = state_17867;
if(cljs.core.truth_(inst_17778)){
var statearr_17902_17959 = state_17867__$1;
(statearr_17902_17959[(1)] = (5));

} else {
var statearr_17903_17960 = state_17867__$1;
(statearr_17903_17960[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (23))){
var inst_17826 = (state_17867[(14)]);
var inst_17832 = (inst_17826 == null);
var state_17867__$1 = state_17867;
if(cljs.core.truth_(inst_17832)){
var statearr_17904_17961 = state_17867__$1;
(statearr_17904_17961[(1)] = (26));

} else {
var statearr_17905_17962 = state_17867__$1;
(statearr_17905_17962[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (35))){
var inst_17852 = (state_17867[(2)]);
var state_17867__$1 = state_17867;
if(cljs.core.truth_(inst_17852)){
var statearr_17906_17963 = state_17867__$1;
(statearr_17906_17963[(1)] = (36));

} else {
var statearr_17907_17964 = state_17867__$1;
(statearr_17907_17964[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (19))){
var inst_17794 = (state_17867[(7)]);
var inst_17814 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17794);
var state_17867__$1 = state_17867;
var statearr_17908_17965 = state_17867__$1;
(statearr_17908_17965[(2)] = inst_17814);

(statearr_17908_17965[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (11))){
var inst_17794 = (state_17867[(7)]);
var inst_17798 = (inst_17794 == null);
var inst_17799 = cljs.core.not(inst_17798);
var state_17867__$1 = state_17867;
if(inst_17799){
var statearr_17909_17966 = state_17867__$1;
(statearr_17909_17966[(1)] = (13));

} else {
var statearr_17910_17967 = state_17867__$1;
(statearr_17910_17967[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (9))){
var inst_17769 = (state_17867[(8)]);
var state_17867__$1 = state_17867;
var statearr_17911_17968 = state_17867__$1;
(statearr_17911_17968[(2)] = inst_17769);

(statearr_17911_17968[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (5))){
var state_17867__$1 = state_17867;
var statearr_17912_17969 = state_17867__$1;
(statearr_17912_17969[(2)] = true);

(statearr_17912_17969[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (14))){
var state_17867__$1 = state_17867;
var statearr_17913_17970 = state_17867__$1;
(statearr_17913_17970[(2)] = false);

(statearr_17913_17970[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (26))){
var inst_17827 = (state_17867[(11)]);
var inst_17834 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17827);
var state_17867__$1 = state_17867;
var statearr_17914_17971 = state_17867__$1;
(statearr_17914_17971[(2)] = inst_17834);

(statearr_17914_17971[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (16))){
var state_17867__$1 = state_17867;
var statearr_17915_17972 = state_17867__$1;
(statearr_17915_17972[(2)] = true);

(statearr_17915_17972[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (38))){
var inst_17857 = (state_17867[(2)]);
var state_17867__$1 = state_17867;
var statearr_17916_17973 = state_17867__$1;
(statearr_17916_17973[(2)] = inst_17857);

(statearr_17916_17973[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (30))){
var inst_17819 = (state_17867[(13)]);
var inst_17818 = (state_17867[(10)]);
var inst_17827 = (state_17867[(11)]);
var inst_17844 = cljs.core.empty_QMARK_(inst_17818);
var inst_17845 = (inst_17819.cljs$core$IFn$_invoke$arity$1 ? inst_17819.cljs$core$IFn$_invoke$arity$1(inst_17827) : inst_17819.call(null,inst_17827));
var inst_17846 = cljs.core.not(inst_17845);
var inst_17847 = (inst_17844) && (inst_17846);
var state_17867__$1 = state_17867;
var statearr_17917_17974 = state_17867__$1;
(statearr_17917_17974[(2)] = inst_17847);

(statearr_17917_17974[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (10))){
var inst_17769 = (state_17867[(8)]);
var inst_17790 = (state_17867[(2)]);
var inst_17791 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17790,cljs.core.cst$kw$solos);
var inst_17792 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17790,cljs.core.cst$kw$mutes);
var inst_17793 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17790,cljs.core.cst$kw$reads);
var inst_17794 = inst_17769;
var state_17867__$1 = (function (){var statearr_17918 = state_17867;
(statearr_17918[(7)] = inst_17794);

(statearr_17918[(16)] = inst_17792);

(statearr_17918[(17)] = inst_17793);

(statearr_17918[(18)] = inst_17791);

return statearr_17918;
})();
var statearr_17919_17975 = state_17867__$1;
(statearr_17919_17975[(2)] = null);

(statearr_17919_17975[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (18))){
var inst_17809 = (state_17867[(2)]);
var state_17867__$1 = state_17867;
var statearr_17920_17976 = state_17867__$1;
(statearr_17920_17976[(2)] = inst_17809);

(statearr_17920_17976[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (37))){
var state_17867__$1 = state_17867;
var statearr_17921_17977 = state_17867__$1;
(statearr_17921_17977[(2)] = null);

(statearr_17921_17977[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17868 === (8))){
var inst_17769 = (state_17867[(8)]);
var inst_17787 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_17769);
var state_17867__$1 = state_17867;
var statearr_17922_17978 = state_17867__$1;
(statearr_17922_17978[(2)] = inst_17787);

(statearr_17922_17978[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__16128__auto___17932,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16002__auto__,c__16128__auto___17932,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__16003__auto__ = null;
var cljs$core$async$mix_$_state_machine__16003__auto____0 = (function (){
var statearr_17926 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17926[(0)] = cljs$core$async$mix_$_state_machine__16003__auto__);

(statearr_17926[(1)] = (1));

return statearr_17926;
});
var cljs$core$async$mix_$_state_machine__16003__auto____1 = (function (state_17867){
while(true){
var ret_value__16004__auto__ = (function (){try{while(true){
var result__16005__auto__ = switch__16002__auto__(state_17867);
if(cljs.core.keyword_identical_QMARK_(result__16005__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16005__auto__;
}
break;
}
}catch (e17927){if((e17927 instanceof Object)){
var ex__16006__auto__ = e17927;
var statearr_17928_17979 = state_17867;
(statearr_17928_17979[(5)] = ex__16006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17867);

return cljs.core.cst$kw$recur;
} else {
throw e17927;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16004__auto__,cljs.core.cst$kw$recur)){
var G__17980 = state_17867;
state_17867 = G__17980;
continue;
} else {
return ret_value__16004__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16003__auto__ = function(state_17867){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16003__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16003__auto____1.call(this,state_17867);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16003__auto____0;
cljs$core$async$mix_$_state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16003__auto____1;
return cljs$core$async$mix_$_state_machine__16003__auto__;
})()
;})(switch__16002__auto__,c__16128__auto___17932,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16130__auto__ = (function (){var statearr_17929 = (f__16129__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16129__auto__.cljs$core$IFn$_invoke$arity$0() : f__16129__auto__.call(null));
(statearr_17929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16128__auto___17932);

return statearr_17929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16130__auto__);
});})(c__16128__auto___17932,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__8678__auto__ = (((p == null))?null:p);
var m__8679__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8678__auto__)]);
if(!((m__8679__auto__ == null))){
return (m__8679__auto__.cljs$core$IFn$_invoke$arity$4 ? m__8679__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__8679__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__8679__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__8679__auto____$1 == null))){
return (m__8679__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__8679__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__8679__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__8678__auto__ = (((p == null))?null:p);
var m__8679__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8678__auto__)]);
if(!((m__8679__auto__ == null))){
return (m__8679__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8679__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__8679__auto__.call(null,p,v,ch));
} else {
var m__8679__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__8679__auto____$1 == null))){
return (m__8679__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8679__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__8679__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args17981 = [];
var len__9181__auto___17984 = arguments.length;
var i__9182__auto___17985 = (0);
while(true){
if((i__9182__auto___17985 < len__9181__auto___17984)){
args17981.push((arguments[i__9182__auto___17985]));

var G__17986 = (i__9182__auto___17985 + (1));
i__9182__auto___17985 = G__17986;
continue;
} else {
}
break;
}

var G__17983 = args17981.length;
switch (G__17983) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17981.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__8678__auto__ = (((p == null))?null:p);
var m__8679__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8678__auto__)]);
if(!((m__8679__auto__ == null))){
return (m__8679__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8679__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__8679__auto__.call(null,p));
} else {
var m__8679__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8679__auto____$1 == null))){
return (m__8679__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8679__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__8679__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__8678__auto__ = (((p == null))?null:p);
var m__8679__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8678__auto__)]);
if(!((m__8679__auto__ == null))){
return (m__8679__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8679__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__8679__auto__.call(null,p,v));
} else {
var m__8679__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8679__auto____$1 == null))){
return (m__8679__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8679__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__8679__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
var args17989 = [];
var len__9181__auto___18117 = arguments.length;
var i__9182__auto___18118 = (0);
while(true){
if((i__9182__auto___18118 < len__9181__auto___18117)){
args17989.push((arguments[i__9182__auto___18118]));

var G__18119 = (i__9182__auto___18118 + (1));
i__9182__auto___18118 = G__18119;
continue;
} else {
}
break;
}

var G__17991 = args17989.length;
switch (G__17991) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17989.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__17992 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17992) : cljs.core.atom.call(null,G__17992));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__7960__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__7960__auto__)){
return or__7960__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__7960__auto__,mults){
return (function (p1__17988_SHARP_){
if(cljs.core.truth_((p1__17988_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17988_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17988_SHARP_.call(null,topic)))){
return p1__17988_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17988_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__7960__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async17993 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17993 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17994){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17994 = meta17994;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17995,meta17994__$1){
var self__ = this;
var _17995__$1 = this;
return (new cljs.core.async.t_cljs$core$async17993(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17994__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17993.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17995){
var self__ = this;
var _17995__$1 = this;
return self__.meta17994;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17993.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17993.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17993.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17993.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17993.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5278__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__5278__auto__)){
var m = temp__5278__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17993.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17996 = self__.mults;
var G__17997 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17996,G__17997) : cljs.core.reset_BANG_.call(null,G__17996,G__17997));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17993.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17993.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta17994], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17993.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17993.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17993";

cljs.core.async.t_cljs$core$async17993.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write(writer__8618__auto__,"cljs.core.async/t_cljs$core$async17993");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async17993 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async17993(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17994){
return (new cljs.core.async.t_cljs$core$async17993(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17994));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async17993(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16128__auto___18121 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16128__auto___18121,mults,ensure_mult,p){
return (function (){
var f__16129__auto__ = (function (){var switch__16002__auto__ = ((function (c__16128__auto___18121,mults,ensure_mult,p){
return (function (state_18069){
var state_val_18070 = (state_18069[(1)]);
if((state_val_18070 === (7))){
var inst_18065 = (state_18069[(2)]);
var state_18069__$1 = state_18069;
var statearr_18071_18122 = state_18069__$1;
(statearr_18071_18122[(2)] = inst_18065);

(statearr_18071_18122[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18070 === (20))){
var state_18069__$1 = state_18069;
var statearr_18072_18123 = state_18069__$1;
(statearr_18072_18123[(2)] = null);

(statearr_18072_18123[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18070 === (1))){
var state_18069__$1 = state_18069;
var statearr_18073_18124 = state_18069__$1;
(statearr_18073_18124[(2)] = null);

(statearr_18073_18124[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18070 === (24))){
var inst_18048 = (state_18069[(7)]);
var inst_18057 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18048);
var state_18069__$1 = state_18069;
var statearr_18074_18125 = state_18069__$1;
(statearr_18074_18125[(2)] = inst_18057);

(statearr_18074_18125[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18070 === (4))){
var inst_18000 = (state_18069[(8)]);
var inst_18000__$1 = (state_18069[(2)]);
var inst_18001 = (inst_18000__$1 == null);
var state_18069__$1 = (function (){var statearr_18075 = state_18069;
(statearr_18075[(8)] = inst_18000__$1);

return statearr_18075;
})();
if(cljs.core.truth_(inst_18001)){
var statearr_18076_18126 = state_18069__$1;
(statearr_18076_18126[(1)] = (5));

} else {
var statearr_18077_18127 = state_18069__$1;
(statearr_18077_18127[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18070 === (15))){
var inst_18042 = (state_18069[(2)]);
var state_18069__$1 = state_18069;
var statearr_18078_18128 = state_18069__$1;
(statearr_18078_18128[(2)] = inst_18042);

(statearr_18078_18128[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18070 === (21))){
var inst_18062 = (state_18069[(2)]);
var state_18069__$1 = (function (){var statearr_18079 = state_18069;
(statearr_18079[(9)] = inst_18062);

return statearr_18079;
})();
var statearr_18080_18129 = state_18069__$1;
(statearr_18080_18129[(2)] = null);

(statearr_18080_18129[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18070 === (13))){
var inst_18024 = (state_18069[(10)]);
var inst_18026 = cljs.core.chunked_seq_QMARK_(inst_18024);
var state_18069__$1 = state_18069;
if(inst_18026){
var statearr_18081_18130 = state_18069__$1;
(statearr_18081_18130[(1)] = (16));

} else {
var statearr_18082_18131 = state_18069__$1;
(statearr_18082_18131[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18070 === (22))){
var inst_18054 = (state_18069[(2)]);
var state_18069__$1 = state_18069;
if(cljs.core.truth_(inst_18054)){
var statearr_18083_18132 = state_18069__$1;
(statearr_18083_18132[(1)] = (23));

} else {
var statearr_18084_18133 = state_18069__$1;
(statearr_18084_18133[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18070 === (6))){
var inst_18050 = (state_18069[(11)]);
var inst_18000 = (state_18069[(8)]);
var inst_18048 = (state_18069[(7)]);
var inst_18048__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18000) : topic_fn.call(null,inst_18000));
var inst_18049 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_18050__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18049,inst_18048__$1);
var state_18069__$1 = (function (){var statearr_18085 = state_18069;
(statearr_18085[(11)] = inst_18050__$1);

(statearr_18085[(7)] = inst_18048__$1);

return statearr_18085;
})();
if(cljs.core.truth_(inst_18050__$1)){
var statearr_18086_18134 = state_18069__$1;
(statearr_18086_18134[(1)] = (19));

} else {
var statearr_18087_18135 = state_18069__$1;
(statearr_18087_18135[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18070 === (25))){
var inst_18059 = (state_18069[(2)]);
var state_18069__$1 = state_18069;
var statearr_18088_18136 = state_18069__$1;
(statearr_18088_18136[(2)] = inst_18059);

(statearr_18088_18136[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18070 === (17))){
var inst_18024 = (state_18069[(10)]);
var inst_18033 = cljs.core.first(inst_18024);
var inst_18034 = cljs.core.async.muxch_STAR_(inst_18033);
var inst_18035 = cljs.core.async.close_BANG_(inst_18034);
var inst_18036 = cljs.core.next(inst_18024);
var inst_18010 = inst_18036;
var inst_18011 = null;
var inst_18012 = (0);
var inst_18013 = (0);
var state_18069__$1 = (function (){var statearr_18089 = state_18069;
(statearr_18089[(12)] = inst_18012);

(statearr_18089[(13)] = inst_18013);

(statearr_18089[(14)] = inst_18010);

(statearr_18089[(15)] = inst_18011);

(statearr_18089[(16)] = inst_18035);

return statearr_18089;
})();
var statearr_18090_18137 = state_18069__$1;
(statearr_18090_18137[(2)] = null);

(statearr_18090_18137[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18070 === (3))){
var inst_18067 = (state_18069[(2)]);
var state_18069__$1 = state_18069;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18069__$1,inst_18067);
} else {
if((state_val_18070 === (12))){
var inst_18044 = (state_18069[(2)]);
var state_18069__$1 = state_18069;
var statearr_18091_18138 = state_18069__$1;
(statearr_18091_18138[(2)] = inst_18044);

(statearr_18091_18138[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18070 === (2))){
var state_18069__$1 = state_18069;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18069__$1,(4),ch);
} else {
if((state_val_18070 === (23))){
var state_18069__$1 = state_18069;
var statearr_18092_18139 = state_18069__$1;
(statearr_18092_18139[(2)] = null);

(statearr_18092_18139[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18070 === (19))){
var inst_18050 = (state_18069[(11)]);
var inst_18000 = (state_18069[(8)]);
var inst_18052 = cljs.core.async.muxch_STAR_(inst_18050);
var state_18069__$1 = state_18069;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18069__$1,(22),inst_18052,inst_18000);
} else {
if((state_val_18070 === (11))){
var inst_18010 = (state_18069[(14)]);
var inst_18024 = (state_18069[(10)]);
var inst_18024__$1 = cljs.core.seq(inst_18010);
var state_18069__$1 = (function (){var statearr_18093 = state_18069;
(statearr_18093[(10)] = inst_18024__$1);

return statearr_18093;
})();
if(inst_18024__$1){
var statearr_18094_18140 = state_18069__$1;
(statearr_18094_18140[(1)] = (13));

} else {
var statearr_18095_18141 = state_18069__$1;
(statearr_18095_18141[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18070 === (9))){
var inst_18046 = (state_18069[(2)]);
var state_18069__$1 = state_18069;
var statearr_18096_18142 = state_18069__$1;
(statearr_18096_18142[(2)] = inst_18046);

(statearr_18096_18142[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18070 === (5))){
var inst_18007 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_18008 = cljs.core.vals(inst_18007);
var inst_18009 = cljs.core.seq(inst_18008);
var inst_18010 = inst_18009;
var inst_18011 = null;
var inst_18012 = (0);
var inst_18013 = (0);
var state_18069__$1 = (function (){var statearr_18097 = state_18069;
(statearr_18097[(12)] = inst_18012);

(statearr_18097[(13)] = inst_18013);

(statearr_18097[(14)] = inst_18010);

(statearr_18097[(15)] = inst_18011);

return statearr_18097;
})();
var statearr_18098_18143 = state_18069__$1;
(statearr_18098_18143[(2)] = null);

(statearr_18098_18143[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18070 === (14))){
var state_18069__$1 = state_18069;
var statearr_18102_18144 = state_18069__$1;
(statearr_18102_18144[(2)] = null);

(statearr_18102_18144[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18070 === (16))){
var inst_18024 = (state_18069[(10)]);
var inst_18028 = cljs.core.chunk_first(inst_18024);
var inst_18029 = cljs.core.chunk_rest(inst_18024);
var inst_18030 = cljs.core.count(inst_18028);
var inst_18010 = inst_18029;
var inst_18011 = inst_18028;
var inst_18012 = inst_18030;
var inst_18013 = (0);
var state_18069__$1 = (function (){var statearr_18103 = state_18069;
(statearr_18103[(12)] = inst_18012);

(statearr_18103[(13)] = inst_18013);

(statearr_18103[(14)] = inst_18010);

(statearr_18103[(15)] = inst_18011);

return statearr_18103;
})();
var statearr_18104_18145 = state_18069__$1;
(statearr_18104_18145[(2)] = null);

(statearr_18104_18145[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18070 === (10))){
var inst_18012 = (state_18069[(12)]);
var inst_18013 = (state_18069[(13)]);
var inst_18010 = (state_18069[(14)]);
var inst_18011 = (state_18069[(15)]);
var inst_18018 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18011,inst_18013);
var inst_18019 = cljs.core.async.muxch_STAR_(inst_18018);
var inst_18020 = cljs.core.async.close_BANG_(inst_18019);
var inst_18021 = (inst_18013 + (1));
var tmp18099 = inst_18012;
var tmp18100 = inst_18010;
var tmp18101 = inst_18011;
var inst_18010__$1 = tmp18100;
var inst_18011__$1 = tmp18101;
var inst_18012__$1 = tmp18099;
var inst_18013__$1 = inst_18021;
var state_18069__$1 = (function (){var statearr_18105 = state_18069;
(statearr_18105[(12)] = inst_18012__$1);

(statearr_18105[(13)] = inst_18013__$1);

(statearr_18105[(14)] = inst_18010__$1);

(statearr_18105[(15)] = inst_18011__$1);

(statearr_18105[(17)] = inst_18020);

return statearr_18105;
})();
var statearr_18106_18146 = state_18069__$1;
(statearr_18106_18146[(2)] = null);

(statearr_18106_18146[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18070 === (18))){
var inst_18039 = (state_18069[(2)]);
var state_18069__$1 = state_18069;
var statearr_18107_18147 = state_18069__$1;
(statearr_18107_18147[(2)] = inst_18039);

(statearr_18107_18147[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18070 === (8))){
var inst_18012 = (state_18069[(12)]);
var inst_18013 = (state_18069[(13)]);
var inst_18015 = (inst_18013 < inst_18012);
var inst_18016 = inst_18015;
var state_18069__$1 = state_18069;
if(cljs.core.truth_(inst_18016)){
var statearr_18108_18148 = state_18069__$1;
(statearr_18108_18148[(1)] = (10));

} else {
var statearr_18109_18149 = state_18069__$1;
(statearr_18109_18149[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__16128__auto___18121,mults,ensure_mult,p))
;
return ((function (switch__16002__auto__,c__16128__auto___18121,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__16003__auto__ = null;
var cljs$core$async$state_machine__16003__auto____0 = (function (){
var statearr_18113 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18113[(0)] = cljs$core$async$state_machine__16003__auto__);

(statearr_18113[(1)] = (1));

return statearr_18113;
});
var cljs$core$async$state_machine__16003__auto____1 = (function (state_18069){
while(true){
var ret_value__16004__auto__ = (function (){try{while(true){
var result__16005__auto__ = switch__16002__auto__(state_18069);
if(cljs.core.keyword_identical_QMARK_(result__16005__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16005__auto__;
}
break;
}
}catch (e18114){if((e18114 instanceof Object)){
var ex__16006__auto__ = e18114;
var statearr_18115_18150 = state_18069;
(statearr_18115_18150[(5)] = ex__16006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18069);

return cljs.core.cst$kw$recur;
} else {
throw e18114;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16004__auto__,cljs.core.cst$kw$recur)){
var G__18151 = state_18069;
state_18069 = G__18151;
continue;
} else {
return ret_value__16004__auto__;
}
break;
}
});
cljs$core$async$state_machine__16003__auto__ = function(state_18069){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16003__auto____1.call(this,state_18069);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16003__auto____0;
cljs$core$async$state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16003__auto____1;
return cljs$core$async$state_machine__16003__auto__;
})()
;})(switch__16002__auto__,c__16128__auto___18121,mults,ensure_mult,p))
})();
var state__16130__auto__ = (function (){var statearr_18116 = (f__16129__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16129__auto__.cljs$core$IFn$_invoke$arity$0() : f__16129__auto__.call(null));
(statearr_18116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16128__auto___18121);

return statearr_18116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16130__auto__);
});})(c__16128__auto___18121,mults,ensure_mult,p))
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
var args18152 = [];
var len__9181__auto___18155 = arguments.length;
var i__9182__auto___18156 = (0);
while(true){
if((i__9182__auto___18156 < len__9181__auto___18155)){
args18152.push((arguments[i__9182__auto___18156]));

var G__18157 = (i__9182__auto___18156 + (1));
i__9182__auto___18156 = G__18157;
continue;
} else {
}
break;
}

var G__18154 = args18152.length;
switch (G__18154) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18152.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args18159 = [];
var len__9181__auto___18162 = arguments.length;
var i__9182__auto___18163 = (0);
while(true){
if((i__9182__auto___18163 < len__9181__auto___18162)){
args18159.push((arguments[i__9182__auto___18163]));

var G__18164 = (i__9182__auto___18163 + (1));
i__9182__auto___18163 = G__18164;
continue;
} else {
}
break;
}

var G__18161 = args18159.length;
switch (G__18161) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18159.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var args18166 = [];
var len__9181__auto___18237 = arguments.length;
var i__9182__auto___18238 = (0);
while(true){
if((i__9182__auto___18238 < len__9181__auto___18237)){
args18166.push((arguments[i__9182__auto___18238]));

var G__18239 = (i__9182__auto___18238 + (1));
i__9182__auto___18238 = G__18239;
continue;
} else {
}
break;
}

var G__18168 = args18166.length;
switch (G__18168) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18166.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__16128__auto___18241 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16128__auto___18241,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16129__auto__ = (function (){var switch__16002__auto__ = ((function (c__16128__auto___18241,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18207){
var state_val_18208 = (state_18207[(1)]);
if((state_val_18208 === (7))){
var state_18207__$1 = state_18207;
var statearr_18209_18242 = state_18207__$1;
(statearr_18209_18242[(2)] = null);

(statearr_18209_18242[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18208 === (1))){
var state_18207__$1 = state_18207;
var statearr_18210_18243 = state_18207__$1;
(statearr_18210_18243[(2)] = null);

(statearr_18210_18243[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18208 === (4))){
var inst_18171 = (state_18207[(7)]);
var inst_18173 = (inst_18171 < cnt);
var state_18207__$1 = state_18207;
if(cljs.core.truth_(inst_18173)){
var statearr_18211_18244 = state_18207__$1;
(statearr_18211_18244[(1)] = (6));

} else {
var statearr_18212_18245 = state_18207__$1;
(statearr_18212_18245[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18208 === (15))){
var inst_18203 = (state_18207[(2)]);
var state_18207__$1 = state_18207;
var statearr_18213_18246 = state_18207__$1;
(statearr_18213_18246[(2)] = inst_18203);

(statearr_18213_18246[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18208 === (13))){
var inst_18196 = cljs.core.async.close_BANG_(out);
var state_18207__$1 = state_18207;
var statearr_18214_18247 = state_18207__$1;
(statearr_18214_18247[(2)] = inst_18196);

(statearr_18214_18247[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18208 === (6))){
var state_18207__$1 = state_18207;
var statearr_18215_18248 = state_18207__$1;
(statearr_18215_18248[(2)] = null);

(statearr_18215_18248[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18208 === (3))){
var inst_18205 = (state_18207[(2)]);
var state_18207__$1 = state_18207;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18207__$1,inst_18205);
} else {
if((state_val_18208 === (12))){
var inst_18193 = (state_18207[(8)]);
var inst_18193__$1 = (state_18207[(2)]);
var inst_18194 = cljs.core.some(cljs.core.nil_QMARK_,inst_18193__$1);
var state_18207__$1 = (function (){var statearr_18216 = state_18207;
(statearr_18216[(8)] = inst_18193__$1);

return statearr_18216;
})();
if(cljs.core.truth_(inst_18194)){
var statearr_18217_18249 = state_18207__$1;
(statearr_18217_18249[(1)] = (13));

} else {
var statearr_18218_18250 = state_18207__$1;
(statearr_18218_18250[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18208 === (2))){
var inst_18170 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_18171 = (0);
var state_18207__$1 = (function (){var statearr_18219 = state_18207;
(statearr_18219[(7)] = inst_18171);

(statearr_18219[(9)] = inst_18170);

return statearr_18219;
})();
var statearr_18220_18251 = state_18207__$1;
(statearr_18220_18251[(2)] = null);

(statearr_18220_18251[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18208 === (11))){
var inst_18171 = (state_18207[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_18207,(10),Object,null,(9));
var inst_18180 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18171) : chs__$1.call(null,inst_18171));
var inst_18181 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18171) : done.call(null,inst_18171));
var inst_18182 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18180,inst_18181);
var state_18207__$1 = state_18207;
var statearr_18221_18252 = state_18207__$1;
(statearr_18221_18252[(2)] = inst_18182);


cljs.core.async.impl.ioc_helpers.process_exception(state_18207__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_18208 === (9))){
var inst_18171 = (state_18207[(7)]);
var inst_18184 = (state_18207[(2)]);
var inst_18185 = (inst_18171 + (1));
var inst_18171__$1 = inst_18185;
var state_18207__$1 = (function (){var statearr_18222 = state_18207;
(statearr_18222[(7)] = inst_18171__$1);

(statearr_18222[(10)] = inst_18184);

return statearr_18222;
})();
var statearr_18223_18253 = state_18207__$1;
(statearr_18223_18253[(2)] = null);

(statearr_18223_18253[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18208 === (5))){
var inst_18191 = (state_18207[(2)]);
var state_18207__$1 = (function (){var statearr_18224 = state_18207;
(statearr_18224[(11)] = inst_18191);

return statearr_18224;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18207__$1,(12),dchan);
} else {
if((state_val_18208 === (14))){
var inst_18193 = (state_18207[(8)]);
var inst_18198 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18193);
var state_18207__$1 = state_18207;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18207__$1,(16),out,inst_18198);
} else {
if((state_val_18208 === (16))){
var inst_18200 = (state_18207[(2)]);
var state_18207__$1 = (function (){var statearr_18225 = state_18207;
(statearr_18225[(12)] = inst_18200);

return statearr_18225;
})();
var statearr_18226_18254 = state_18207__$1;
(statearr_18226_18254[(2)] = null);

(statearr_18226_18254[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18208 === (10))){
var inst_18175 = (state_18207[(2)]);
var inst_18176 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18207__$1 = (function (){var statearr_18227 = state_18207;
(statearr_18227[(13)] = inst_18175);

return statearr_18227;
})();
var statearr_18228_18255 = state_18207__$1;
(statearr_18228_18255[(2)] = inst_18176);


cljs.core.async.impl.ioc_helpers.process_exception(state_18207__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_18208 === (8))){
var inst_18189 = (state_18207[(2)]);
var state_18207__$1 = state_18207;
var statearr_18229_18256 = state_18207__$1;
(statearr_18229_18256[(2)] = inst_18189);

(statearr_18229_18256[(1)] = (5));


return cljs.core.cst$kw$recur;
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
});})(c__16128__auto___18241,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16002__auto__,c__16128__auto___18241,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__16003__auto__ = null;
var cljs$core$async$state_machine__16003__auto____0 = (function (){
var statearr_18233 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18233[(0)] = cljs$core$async$state_machine__16003__auto__);

(statearr_18233[(1)] = (1));

return statearr_18233;
});
var cljs$core$async$state_machine__16003__auto____1 = (function (state_18207){
while(true){
var ret_value__16004__auto__ = (function (){try{while(true){
var result__16005__auto__ = switch__16002__auto__(state_18207);
if(cljs.core.keyword_identical_QMARK_(result__16005__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16005__auto__;
}
break;
}
}catch (e18234){if((e18234 instanceof Object)){
var ex__16006__auto__ = e18234;
var statearr_18235_18257 = state_18207;
(statearr_18235_18257[(5)] = ex__16006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18207);

return cljs.core.cst$kw$recur;
} else {
throw e18234;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16004__auto__,cljs.core.cst$kw$recur)){
var G__18258 = state_18207;
state_18207 = G__18258;
continue;
} else {
return ret_value__16004__auto__;
}
break;
}
});
cljs$core$async$state_machine__16003__auto__ = function(state_18207){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16003__auto____1.call(this,state_18207);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16003__auto____0;
cljs$core$async$state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16003__auto____1;
return cljs$core$async$state_machine__16003__auto__;
})()
;})(switch__16002__auto__,c__16128__auto___18241,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16130__auto__ = (function (){var statearr_18236 = (f__16129__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16129__auto__.cljs$core$IFn$_invoke$arity$0() : f__16129__auto__.call(null));
(statearr_18236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16128__auto___18241);

return statearr_18236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16130__auto__);
});})(c__16128__auto___18241,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args18260 = [];
var len__9181__auto___18318 = arguments.length;
var i__9182__auto___18319 = (0);
while(true){
if((i__9182__auto___18319 < len__9181__auto___18318)){
args18260.push((arguments[i__9182__auto___18319]));

var G__18320 = (i__9182__auto___18319 + (1));
i__9182__auto___18319 = G__18320;
continue;
} else {
}
break;
}

var G__18262 = args18260.length;
switch (G__18262) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18260.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16128__auto___18322 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16128__auto___18322,out){
return (function (){
var f__16129__auto__ = (function (){var switch__16002__auto__ = ((function (c__16128__auto___18322,out){
return (function (state_18294){
var state_val_18295 = (state_18294[(1)]);
if((state_val_18295 === (7))){
var inst_18273 = (state_18294[(7)]);
var inst_18274 = (state_18294[(8)]);
var inst_18273__$1 = (state_18294[(2)]);
var inst_18274__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18273__$1,(0),null);
var inst_18275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18273__$1,(1),null);
var inst_18276 = (inst_18274__$1 == null);
var state_18294__$1 = (function (){var statearr_18296 = state_18294;
(statearr_18296[(7)] = inst_18273__$1);

(statearr_18296[(8)] = inst_18274__$1);

(statearr_18296[(9)] = inst_18275);

return statearr_18296;
})();
if(cljs.core.truth_(inst_18276)){
var statearr_18297_18323 = state_18294__$1;
(statearr_18297_18323[(1)] = (8));

} else {
var statearr_18298_18324 = state_18294__$1;
(statearr_18298_18324[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18295 === (1))){
var inst_18263 = cljs.core.vec(chs);
var inst_18264 = inst_18263;
var state_18294__$1 = (function (){var statearr_18299 = state_18294;
(statearr_18299[(10)] = inst_18264);

return statearr_18299;
})();
var statearr_18300_18325 = state_18294__$1;
(statearr_18300_18325[(2)] = null);

(statearr_18300_18325[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18295 === (4))){
var inst_18264 = (state_18294[(10)]);
var state_18294__$1 = state_18294;
return cljs.core.async.ioc_alts_BANG_(state_18294__$1,(7),inst_18264);
} else {
if((state_val_18295 === (6))){
var inst_18290 = (state_18294[(2)]);
var state_18294__$1 = state_18294;
var statearr_18301_18326 = state_18294__$1;
(statearr_18301_18326[(2)] = inst_18290);

(statearr_18301_18326[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18295 === (3))){
var inst_18292 = (state_18294[(2)]);
var state_18294__$1 = state_18294;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18294__$1,inst_18292);
} else {
if((state_val_18295 === (2))){
var inst_18264 = (state_18294[(10)]);
var inst_18266 = cljs.core.count(inst_18264);
var inst_18267 = (inst_18266 > (0));
var state_18294__$1 = state_18294;
if(cljs.core.truth_(inst_18267)){
var statearr_18303_18327 = state_18294__$1;
(statearr_18303_18327[(1)] = (4));

} else {
var statearr_18304_18328 = state_18294__$1;
(statearr_18304_18328[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18295 === (11))){
var inst_18264 = (state_18294[(10)]);
var inst_18283 = (state_18294[(2)]);
var tmp18302 = inst_18264;
var inst_18264__$1 = tmp18302;
var state_18294__$1 = (function (){var statearr_18305 = state_18294;
(statearr_18305[(10)] = inst_18264__$1);

(statearr_18305[(11)] = inst_18283);

return statearr_18305;
})();
var statearr_18306_18329 = state_18294__$1;
(statearr_18306_18329[(2)] = null);

(statearr_18306_18329[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18295 === (9))){
var inst_18274 = (state_18294[(8)]);
var state_18294__$1 = state_18294;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18294__$1,(11),out,inst_18274);
} else {
if((state_val_18295 === (5))){
var inst_18288 = cljs.core.async.close_BANG_(out);
var state_18294__$1 = state_18294;
var statearr_18307_18330 = state_18294__$1;
(statearr_18307_18330[(2)] = inst_18288);

(statearr_18307_18330[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18295 === (10))){
var inst_18286 = (state_18294[(2)]);
var state_18294__$1 = state_18294;
var statearr_18308_18331 = state_18294__$1;
(statearr_18308_18331[(2)] = inst_18286);

(statearr_18308_18331[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18295 === (8))){
var inst_18264 = (state_18294[(10)]);
var inst_18273 = (state_18294[(7)]);
var inst_18274 = (state_18294[(8)]);
var inst_18275 = (state_18294[(9)]);
var inst_18278 = (function (){var cs = inst_18264;
var vec__18269 = inst_18273;
var v = inst_18274;
var c = inst_18275;
return ((function (cs,vec__18269,v,c,inst_18264,inst_18273,inst_18274,inst_18275,state_val_18295,c__16128__auto___18322,out){
return (function (p1__18259_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18259_SHARP_);
});
;})(cs,vec__18269,v,c,inst_18264,inst_18273,inst_18274,inst_18275,state_val_18295,c__16128__auto___18322,out))
})();
var inst_18279 = cljs.core.filterv(inst_18278,inst_18264);
var inst_18264__$1 = inst_18279;
var state_18294__$1 = (function (){var statearr_18309 = state_18294;
(statearr_18309[(10)] = inst_18264__$1);

return statearr_18309;
})();
var statearr_18310_18332 = state_18294__$1;
(statearr_18310_18332[(2)] = null);

(statearr_18310_18332[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__16128__auto___18322,out))
;
return ((function (switch__16002__auto__,c__16128__auto___18322,out){
return (function() {
var cljs$core$async$state_machine__16003__auto__ = null;
var cljs$core$async$state_machine__16003__auto____0 = (function (){
var statearr_18314 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18314[(0)] = cljs$core$async$state_machine__16003__auto__);

(statearr_18314[(1)] = (1));

return statearr_18314;
});
var cljs$core$async$state_machine__16003__auto____1 = (function (state_18294){
while(true){
var ret_value__16004__auto__ = (function (){try{while(true){
var result__16005__auto__ = switch__16002__auto__(state_18294);
if(cljs.core.keyword_identical_QMARK_(result__16005__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16005__auto__;
}
break;
}
}catch (e18315){if((e18315 instanceof Object)){
var ex__16006__auto__ = e18315;
var statearr_18316_18333 = state_18294;
(statearr_18316_18333[(5)] = ex__16006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18294);

return cljs.core.cst$kw$recur;
} else {
throw e18315;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16004__auto__,cljs.core.cst$kw$recur)){
var G__18334 = state_18294;
state_18294 = G__18334;
continue;
} else {
return ret_value__16004__auto__;
}
break;
}
});
cljs$core$async$state_machine__16003__auto__ = function(state_18294){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16003__auto____1.call(this,state_18294);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16003__auto____0;
cljs$core$async$state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16003__auto____1;
return cljs$core$async$state_machine__16003__auto__;
})()
;})(switch__16002__auto__,c__16128__auto___18322,out))
})();
var state__16130__auto__ = (function (){var statearr_18317 = (f__16129__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16129__auto__.cljs$core$IFn$_invoke$arity$0() : f__16129__auto__.call(null));
(statearr_18317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16128__auto___18322);

return statearr_18317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16130__auto__);
});})(c__16128__auto___18322,out))
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args18335 = [];
var len__9181__auto___18384 = arguments.length;
var i__9182__auto___18385 = (0);
while(true){
if((i__9182__auto___18385 < len__9181__auto___18384)){
args18335.push((arguments[i__9182__auto___18385]));

var G__18386 = (i__9182__auto___18385 + (1));
i__9182__auto___18385 = G__18386;
continue;
} else {
}
break;
}

var G__18337 = args18335.length;
switch (G__18337) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18335.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16128__auto___18388 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16128__auto___18388,out){
return (function (){
var f__16129__auto__ = (function (){var switch__16002__auto__ = ((function (c__16128__auto___18388,out){
return (function (state_18361){
var state_val_18362 = (state_18361[(1)]);
if((state_val_18362 === (7))){
var inst_18343 = (state_18361[(7)]);
var inst_18343__$1 = (state_18361[(2)]);
var inst_18344 = (inst_18343__$1 == null);
var inst_18345 = cljs.core.not(inst_18344);
var state_18361__$1 = (function (){var statearr_18363 = state_18361;
(statearr_18363[(7)] = inst_18343__$1);

return statearr_18363;
})();
if(inst_18345){
var statearr_18364_18389 = state_18361__$1;
(statearr_18364_18389[(1)] = (8));

} else {
var statearr_18365_18390 = state_18361__$1;
(statearr_18365_18390[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18362 === (1))){
var inst_18338 = (0);
var state_18361__$1 = (function (){var statearr_18366 = state_18361;
(statearr_18366[(8)] = inst_18338);

return statearr_18366;
})();
var statearr_18367_18391 = state_18361__$1;
(statearr_18367_18391[(2)] = null);

(statearr_18367_18391[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18362 === (4))){
var state_18361__$1 = state_18361;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18361__$1,(7),ch);
} else {
if((state_val_18362 === (6))){
var inst_18356 = (state_18361[(2)]);
var state_18361__$1 = state_18361;
var statearr_18368_18392 = state_18361__$1;
(statearr_18368_18392[(2)] = inst_18356);

(statearr_18368_18392[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18362 === (3))){
var inst_18358 = (state_18361[(2)]);
var inst_18359 = cljs.core.async.close_BANG_(out);
var state_18361__$1 = (function (){var statearr_18369 = state_18361;
(statearr_18369[(9)] = inst_18358);

return statearr_18369;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18361__$1,inst_18359);
} else {
if((state_val_18362 === (2))){
var inst_18338 = (state_18361[(8)]);
var inst_18340 = (inst_18338 < n);
var state_18361__$1 = state_18361;
if(cljs.core.truth_(inst_18340)){
var statearr_18370_18393 = state_18361__$1;
(statearr_18370_18393[(1)] = (4));

} else {
var statearr_18371_18394 = state_18361__$1;
(statearr_18371_18394[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18362 === (11))){
var inst_18338 = (state_18361[(8)]);
var inst_18348 = (state_18361[(2)]);
var inst_18349 = (inst_18338 + (1));
var inst_18338__$1 = inst_18349;
var state_18361__$1 = (function (){var statearr_18372 = state_18361;
(statearr_18372[(8)] = inst_18338__$1);

(statearr_18372[(10)] = inst_18348);

return statearr_18372;
})();
var statearr_18373_18395 = state_18361__$1;
(statearr_18373_18395[(2)] = null);

(statearr_18373_18395[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18362 === (9))){
var state_18361__$1 = state_18361;
var statearr_18374_18396 = state_18361__$1;
(statearr_18374_18396[(2)] = null);

(statearr_18374_18396[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18362 === (5))){
var state_18361__$1 = state_18361;
var statearr_18375_18397 = state_18361__$1;
(statearr_18375_18397[(2)] = null);

(statearr_18375_18397[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18362 === (10))){
var inst_18353 = (state_18361[(2)]);
var state_18361__$1 = state_18361;
var statearr_18376_18398 = state_18361__$1;
(statearr_18376_18398[(2)] = inst_18353);

(statearr_18376_18398[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18362 === (8))){
var inst_18343 = (state_18361[(7)]);
var state_18361__$1 = state_18361;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18361__$1,(11),out,inst_18343);
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
});})(c__16128__auto___18388,out))
;
return ((function (switch__16002__auto__,c__16128__auto___18388,out){
return (function() {
var cljs$core$async$state_machine__16003__auto__ = null;
var cljs$core$async$state_machine__16003__auto____0 = (function (){
var statearr_18380 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18380[(0)] = cljs$core$async$state_machine__16003__auto__);

(statearr_18380[(1)] = (1));

return statearr_18380;
});
var cljs$core$async$state_machine__16003__auto____1 = (function (state_18361){
while(true){
var ret_value__16004__auto__ = (function (){try{while(true){
var result__16005__auto__ = switch__16002__auto__(state_18361);
if(cljs.core.keyword_identical_QMARK_(result__16005__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16005__auto__;
}
break;
}
}catch (e18381){if((e18381 instanceof Object)){
var ex__16006__auto__ = e18381;
var statearr_18382_18399 = state_18361;
(statearr_18382_18399[(5)] = ex__16006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18361);

return cljs.core.cst$kw$recur;
} else {
throw e18381;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16004__auto__,cljs.core.cst$kw$recur)){
var G__18400 = state_18361;
state_18361 = G__18400;
continue;
} else {
return ret_value__16004__auto__;
}
break;
}
});
cljs$core$async$state_machine__16003__auto__ = function(state_18361){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16003__auto____1.call(this,state_18361);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16003__auto____0;
cljs$core$async$state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16003__auto____1;
return cljs$core$async$state_machine__16003__auto__;
})()
;})(switch__16002__auto__,c__16128__auto___18388,out))
})();
var state__16130__auto__ = (function (){var statearr_18383 = (f__16129__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16129__auto__.cljs$core$IFn$_invoke$arity$0() : f__16129__auto__.call(null));
(statearr_18383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16128__auto___18388);

return statearr_18383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16130__auto__);
});})(c__16128__auto___18388,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async18410 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18410 = (function (f,ch,meta18411){
this.f = f;
this.ch = ch;
this.meta18411 = meta18411;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18412,meta18411__$1){
var self__ = this;
var _18412__$1 = this;
return (new cljs.core.async.t_cljs$core$async18410(self__.f,self__.ch,meta18411__$1));
});

cljs.core.async.t_cljs$core$async18410.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18412){
var self__ = this;
var _18412__$1 = this;
return self__.meta18411;
});

cljs.core.async.t_cljs$core$async18410.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18410.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18410.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async18410.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18410.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async18413 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18413 = (function (f,ch,meta18411,_,fn1,meta18414){
this.f = f;
this.ch = ch;
this.meta18411 = meta18411;
this._ = _;
this.fn1 = fn1;
this.meta18414 = meta18414;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18415,meta18414__$1){
var self__ = this;
var _18415__$1 = this;
return (new cljs.core.async.t_cljs$core$async18413(self__.f,self__.ch,self__.meta18411,self__._,self__.fn1,meta18414__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async18413.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18415){
var self__ = this;
var _18415__$1 = this;
return self__.meta18414;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18413.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18413.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18413.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18413.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__18401_SHARP_){
var G__18416 = (((p1__18401_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18401_SHARP_) : self__.f.call(null,p1__18401_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18416) : f1.call(null,G__18416));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async18413.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18411,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async18410], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta18414], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18413.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18413.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18413";

cljs.core.async.t_cljs$core$async18413.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write(writer__8618__auto__,"cljs.core.async/t_cljs$core$async18413");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async18413 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18413(f__$1,ch__$1,meta18411__$1,___$2,fn1__$1,meta18414){
return (new cljs.core.async.t_cljs$core$async18413(f__$1,ch__$1,meta18411__$1,___$2,fn1__$1,meta18414));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async18413(self__.f,self__.ch,self__.meta18411,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__7948__auto__ = ret;
if(cljs.core.truth_(and__7948__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__7948__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18417 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18417) : self__.f.call(null,G__18417));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async18410.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18410.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async18410.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18411], null);
});

cljs.core.async.t_cljs$core$async18410.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18410.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18410";

cljs.core.async.t_cljs$core$async18410.cljs$lang$ctorPrWriter = (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write(writer__8618__auto__,"cljs.core.async/t_cljs$core$async18410");
});

cljs.core.async.__GT_t_cljs$core$async18410 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18410(f__$1,ch__$1,meta18411){
return (new cljs.core.async.t_cljs$core$async18410(f__$1,ch__$1,meta18411));
});

}

return (new cljs.core.async.t_cljs$core$async18410(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async18421 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18421 = (function (f,ch,meta18422){
this.f = f;
this.ch = ch;
this.meta18422 = meta18422;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18423,meta18422__$1){
var self__ = this;
var _18423__$1 = this;
return (new cljs.core.async.t_cljs$core$async18421(self__.f,self__.ch,meta18422__$1));
});

cljs.core.async.t_cljs$core$async18421.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18423){
var self__ = this;
var _18423__$1 = this;
return self__.meta18422;
});

cljs.core.async.t_cljs$core$async18421.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18421.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18421.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18421.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18421.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18421.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async18421.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18422], null);
});

cljs.core.async.t_cljs$core$async18421.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18421.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18421";

cljs.core.async.t_cljs$core$async18421.cljs$lang$ctorPrWriter = (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write(writer__8618__auto__,"cljs.core.async/t_cljs$core$async18421");
});

cljs.core.async.__GT_t_cljs$core$async18421 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async18421(f__$1,ch__$1,meta18422){
return (new cljs.core.async.t_cljs$core$async18421(f__$1,ch__$1,meta18422));
});

}

return (new cljs.core.async.t_cljs$core$async18421(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async18427 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18427 = (function (p,ch,meta18428){
this.p = p;
this.ch = ch;
this.meta18428 = meta18428;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18429,meta18428__$1){
var self__ = this;
var _18429__$1 = this;
return (new cljs.core.async.t_cljs$core$async18427(self__.p,self__.ch,meta18428__$1));
});

cljs.core.async.t_cljs$core$async18427.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18429){
var self__ = this;
var _18429__$1 = this;
return self__.meta18428;
});

cljs.core.async.t_cljs$core$async18427.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18427.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18427.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async18427.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18427.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18427.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18427.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async18427.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18428], null);
});

cljs.core.async.t_cljs$core$async18427.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18427.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18427";

cljs.core.async.t_cljs$core$async18427.cljs$lang$ctorPrWriter = (function (this__8617__auto__,writer__8618__auto__,opt__8619__auto__){
return cljs.core._write(writer__8618__auto__,"cljs.core.async/t_cljs$core$async18427");
});

cljs.core.async.__GT_t_cljs$core$async18427 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async18427(p__$1,ch__$1,meta18428){
return (new cljs.core.async.t_cljs$core$async18427(p__$1,ch__$1,meta18428));
});

}

return (new cljs.core.async.t_cljs$core$async18427(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args18430 = [];
var len__9181__auto___18474 = arguments.length;
var i__9182__auto___18475 = (0);
while(true){
if((i__9182__auto___18475 < len__9181__auto___18474)){
args18430.push((arguments[i__9182__auto___18475]));

var G__18476 = (i__9182__auto___18475 + (1));
i__9182__auto___18475 = G__18476;
continue;
} else {
}
break;
}

var G__18432 = args18430.length;
switch (G__18432) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18430.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16128__auto___18478 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16128__auto___18478,out){
return (function (){
var f__16129__auto__ = (function (){var switch__16002__auto__ = ((function (c__16128__auto___18478,out){
return (function (state_18453){
var state_val_18454 = (state_18453[(1)]);
if((state_val_18454 === (7))){
var inst_18449 = (state_18453[(2)]);
var state_18453__$1 = state_18453;
var statearr_18455_18479 = state_18453__$1;
(statearr_18455_18479[(2)] = inst_18449);

(statearr_18455_18479[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18454 === (1))){
var state_18453__$1 = state_18453;
var statearr_18456_18480 = state_18453__$1;
(statearr_18456_18480[(2)] = null);

(statearr_18456_18480[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18454 === (4))){
var inst_18435 = (state_18453[(7)]);
var inst_18435__$1 = (state_18453[(2)]);
var inst_18436 = (inst_18435__$1 == null);
var state_18453__$1 = (function (){var statearr_18457 = state_18453;
(statearr_18457[(7)] = inst_18435__$1);

return statearr_18457;
})();
if(cljs.core.truth_(inst_18436)){
var statearr_18458_18481 = state_18453__$1;
(statearr_18458_18481[(1)] = (5));

} else {
var statearr_18459_18482 = state_18453__$1;
(statearr_18459_18482[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18454 === (6))){
var inst_18435 = (state_18453[(7)]);
var inst_18440 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18435) : p.call(null,inst_18435));
var state_18453__$1 = state_18453;
if(cljs.core.truth_(inst_18440)){
var statearr_18460_18483 = state_18453__$1;
(statearr_18460_18483[(1)] = (8));

} else {
var statearr_18461_18484 = state_18453__$1;
(statearr_18461_18484[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18454 === (3))){
var inst_18451 = (state_18453[(2)]);
var state_18453__$1 = state_18453;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18453__$1,inst_18451);
} else {
if((state_val_18454 === (2))){
var state_18453__$1 = state_18453;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18453__$1,(4),ch);
} else {
if((state_val_18454 === (11))){
var inst_18443 = (state_18453[(2)]);
var state_18453__$1 = state_18453;
var statearr_18462_18485 = state_18453__$1;
(statearr_18462_18485[(2)] = inst_18443);

(statearr_18462_18485[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18454 === (9))){
var state_18453__$1 = state_18453;
var statearr_18463_18486 = state_18453__$1;
(statearr_18463_18486[(2)] = null);

(statearr_18463_18486[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18454 === (5))){
var inst_18438 = cljs.core.async.close_BANG_(out);
var state_18453__$1 = state_18453;
var statearr_18464_18487 = state_18453__$1;
(statearr_18464_18487[(2)] = inst_18438);

(statearr_18464_18487[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18454 === (10))){
var inst_18446 = (state_18453[(2)]);
var state_18453__$1 = (function (){var statearr_18465 = state_18453;
(statearr_18465[(8)] = inst_18446);

return statearr_18465;
})();
var statearr_18466_18488 = state_18453__$1;
(statearr_18466_18488[(2)] = null);

(statearr_18466_18488[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18454 === (8))){
var inst_18435 = (state_18453[(7)]);
var state_18453__$1 = state_18453;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18453__$1,(11),out,inst_18435);
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
});})(c__16128__auto___18478,out))
;
return ((function (switch__16002__auto__,c__16128__auto___18478,out){
return (function() {
var cljs$core$async$state_machine__16003__auto__ = null;
var cljs$core$async$state_machine__16003__auto____0 = (function (){
var statearr_18470 = [null,null,null,null,null,null,null,null,null];
(statearr_18470[(0)] = cljs$core$async$state_machine__16003__auto__);

(statearr_18470[(1)] = (1));

return statearr_18470;
});
var cljs$core$async$state_machine__16003__auto____1 = (function (state_18453){
while(true){
var ret_value__16004__auto__ = (function (){try{while(true){
var result__16005__auto__ = switch__16002__auto__(state_18453);
if(cljs.core.keyword_identical_QMARK_(result__16005__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16005__auto__;
}
break;
}
}catch (e18471){if((e18471 instanceof Object)){
var ex__16006__auto__ = e18471;
var statearr_18472_18489 = state_18453;
(statearr_18472_18489[(5)] = ex__16006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18453);

return cljs.core.cst$kw$recur;
} else {
throw e18471;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16004__auto__,cljs.core.cst$kw$recur)){
var G__18490 = state_18453;
state_18453 = G__18490;
continue;
} else {
return ret_value__16004__auto__;
}
break;
}
});
cljs$core$async$state_machine__16003__auto__ = function(state_18453){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16003__auto____1.call(this,state_18453);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16003__auto____0;
cljs$core$async$state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16003__auto____1;
return cljs$core$async$state_machine__16003__auto__;
})()
;})(switch__16002__auto__,c__16128__auto___18478,out))
})();
var state__16130__auto__ = (function (){var statearr_18473 = (f__16129__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16129__auto__.cljs$core$IFn$_invoke$arity$0() : f__16129__auto__.call(null));
(statearr_18473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16128__auto___18478);

return statearr_18473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16130__auto__);
});})(c__16128__auto___18478,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args18491 = [];
var len__9181__auto___18494 = arguments.length;
var i__9182__auto___18495 = (0);
while(true){
if((i__9182__auto___18495 < len__9181__auto___18494)){
args18491.push((arguments[i__9182__auto___18495]));

var G__18496 = (i__9182__auto___18495 + (1));
i__9182__auto___18495 = G__18496;
continue;
} else {
}
break;
}

var G__18493 = args18491.length;
switch (G__18493) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18491.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__16128__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16128__auto__){
return (function (){
var f__16129__auto__ = (function (){var switch__16002__auto__ = ((function (c__16128__auto__){
return (function (state_18663){
var state_val_18664 = (state_18663[(1)]);
if((state_val_18664 === (7))){
var inst_18659 = (state_18663[(2)]);
var state_18663__$1 = state_18663;
var statearr_18665_18706 = state_18663__$1;
(statearr_18665_18706[(2)] = inst_18659);

(statearr_18665_18706[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18664 === (20))){
var inst_18629 = (state_18663[(7)]);
var inst_18640 = (state_18663[(2)]);
var inst_18641 = cljs.core.next(inst_18629);
var inst_18615 = inst_18641;
var inst_18616 = null;
var inst_18617 = (0);
var inst_18618 = (0);
var state_18663__$1 = (function (){var statearr_18666 = state_18663;
(statearr_18666[(8)] = inst_18615);

(statearr_18666[(9)] = inst_18618);

(statearr_18666[(10)] = inst_18616);

(statearr_18666[(11)] = inst_18640);

(statearr_18666[(12)] = inst_18617);

return statearr_18666;
})();
var statearr_18667_18707 = state_18663__$1;
(statearr_18667_18707[(2)] = null);

(statearr_18667_18707[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18664 === (1))){
var state_18663__$1 = state_18663;
var statearr_18668_18708 = state_18663__$1;
(statearr_18668_18708[(2)] = null);

(statearr_18668_18708[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18664 === (4))){
var inst_18604 = (state_18663[(13)]);
var inst_18604__$1 = (state_18663[(2)]);
var inst_18605 = (inst_18604__$1 == null);
var state_18663__$1 = (function (){var statearr_18669 = state_18663;
(statearr_18669[(13)] = inst_18604__$1);

return statearr_18669;
})();
if(cljs.core.truth_(inst_18605)){
var statearr_18670_18709 = state_18663__$1;
(statearr_18670_18709[(1)] = (5));

} else {
var statearr_18671_18710 = state_18663__$1;
(statearr_18671_18710[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18664 === (15))){
var state_18663__$1 = state_18663;
var statearr_18675_18711 = state_18663__$1;
(statearr_18675_18711[(2)] = null);

(statearr_18675_18711[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18664 === (21))){
var state_18663__$1 = state_18663;
var statearr_18676_18712 = state_18663__$1;
(statearr_18676_18712[(2)] = null);

(statearr_18676_18712[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18664 === (13))){
var inst_18615 = (state_18663[(8)]);
var inst_18618 = (state_18663[(9)]);
var inst_18616 = (state_18663[(10)]);
var inst_18617 = (state_18663[(12)]);
var inst_18625 = (state_18663[(2)]);
var inst_18626 = (inst_18618 + (1));
var tmp18672 = inst_18615;
var tmp18673 = inst_18616;
var tmp18674 = inst_18617;
var inst_18615__$1 = tmp18672;
var inst_18616__$1 = tmp18673;
var inst_18617__$1 = tmp18674;
var inst_18618__$1 = inst_18626;
var state_18663__$1 = (function (){var statearr_18677 = state_18663;
(statearr_18677[(14)] = inst_18625);

(statearr_18677[(8)] = inst_18615__$1);

(statearr_18677[(9)] = inst_18618__$1);

(statearr_18677[(10)] = inst_18616__$1);

(statearr_18677[(12)] = inst_18617__$1);

return statearr_18677;
})();
var statearr_18678_18713 = state_18663__$1;
(statearr_18678_18713[(2)] = null);

(statearr_18678_18713[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18664 === (22))){
var state_18663__$1 = state_18663;
var statearr_18679_18714 = state_18663__$1;
(statearr_18679_18714[(2)] = null);

(statearr_18679_18714[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18664 === (6))){
var inst_18604 = (state_18663[(13)]);
var inst_18613 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18604) : f.call(null,inst_18604));
var inst_18614 = cljs.core.seq(inst_18613);
var inst_18615 = inst_18614;
var inst_18616 = null;
var inst_18617 = (0);
var inst_18618 = (0);
var state_18663__$1 = (function (){var statearr_18680 = state_18663;
(statearr_18680[(8)] = inst_18615);

(statearr_18680[(9)] = inst_18618);

(statearr_18680[(10)] = inst_18616);

(statearr_18680[(12)] = inst_18617);

return statearr_18680;
})();
var statearr_18681_18715 = state_18663__$1;
(statearr_18681_18715[(2)] = null);

(statearr_18681_18715[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18664 === (17))){
var inst_18629 = (state_18663[(7)]);
var inst_18633 = cljs.core.chunk_first(inst_18629);
var inst_18634 = cljs.core.chunk_rest(inst_18629);
var inst_18635 = cljs.core.count(inst_18633);
var inst_18615 = inst_18634;
var inst_18616 = inst_18633;
var inst_18617 = inst_18635;
var inst_18618 = (0);
var state_18663__$1 = (function (){var statearr_18682 = state_18663;
(statearr_18682[(8)] = inst_18615);

(statearr_18682[(9)] = inst_18618);

(statearr_18682[(10)] = inst_18616);

(statearr_18682[(12)] = inst_18617);

return statearr_18682;
})();
var statearr_18683_18716 = state_18663__$1;
(statearr_18683_18716[(2)] = null);

(statearr_18683_18716[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18664 === (3))){
var inst_18661 = (state_18663[(2)]);
var state_18663__$1 = state_18663;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18663__$1,inst_18661);
} else {
if((state_val_18664 === (12))){
var inst_18649 = (state_18663[(2)]);
var state_18663__$1 = state_18663;
var statearr_18684_18717 = state_18663__$1;
(statearr_18684_18717[(2)] = inst_18649);

(statearr_18684_18717[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18664 === (2))){
var state_18663__$1 = state_18663;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18663__$1,(4),in$);
} else {
if((state_val_18664 === (23))){
var inst_18657 = (state_18663[(2)]);
var state_18663__$1 = state_18663;
var statearr_18685_18718 = state_18663__$1;
(statearr_18685_18718[(2)] = inst_18657);

(statearr_18685_18718[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18664 === (19))){
var inst_18644 = (state_18663[(2)]);
var state_18663__$1 = state_18663;
var statearr_18686_18719 = state_18663__$1;
(statearr_18686_18719[(2)] = inst_18644);

(statearr_18686_18719[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18664 === (11))){
var inst_18629 = (state_18663[(7)]);
var inst_18615 = (state_18663[(8)]);
var inst_18629__$1 = cljs.core.seq(inst_18615);
var state_18663__$1 = (function (){var statearr_18687 = state_18663;
(statearr_18687[(7)] = inst_18629__$1);

return statearr_18687;
})();
if(inst_18629__$1){
var statearr_18688_18720 = state_18663__$1;
(statearr_18688_18720[(1)] = (14));

} else {
var statearr_18689_18721 = state_18663__$1;
(statearr_18689_18721[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18664 === (9))){
var inst_18651 = (state_18663[(2)]);
var inst_18652 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18663__$1 = (function (){var statearr_18690 = state_18663;
(statearr_18690[(15)] = inst_18651);

return statearr_18690;
})();
if(cljs.core.truth_(inst_18652)){
var statearr_18691_18722 = state_18663__$1;
(statearr_18691_18722[(1)] = (21));

} else {
var statearr_18692_18723 = state_18663__$1;
(statearr_18692_18723[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18664 === (5))){
var inst_18607 = cljs.core.async.close_BANG_(out);
var state_18663__$1 = state_18663;
var statearr_18693_18724 = state_18663__$1;
(statearr_18693_18724[(2)] = inst_18607);

(statearr_18693_18724[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18664 === (14))){
var inst_18629 = (state_18663[(7)]);
var inst_18631 = cljs.core.chunked_seq_QMARK_(inst_18629);
var state_18663__$1 = state_18663;
if(inst_18631){
var statearr_18694_18725 = state_18663__$1;
(statearr_18694_18725[(1)] = (17));

} else {
var statearr_18695_18726 = state_18663__$1;
(statearr_18695_18726[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18664 === (16))){
var inst_18647 = (state_18663[(2)]);
var state_18663__$1 = state_18663;
var statearr_18696_18727 = state_18663__$1;
(statearr_18696_18727[(2)] = inst_18647);

(statearr_18696_18727[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18664 === (10))){
var inst_18618 = (state_18663[(9)]);
var inst_18616 = (state_18663[(10)]);
var inst_18623 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18616,inst_18618);
var state_18663__$1 = state_18663;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18663__$1,(13),out,inst_18623);
} else {
if((state_val_18664 === (18))){
var inst_18629 = (state_18663[(7)]);
var inst_18638 = cljs.core.first(inst_18629);
var state_18663__$1 = state_18663;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18663__$1,(20),out,inst_18638);
} else {
if((state_val_18664 === (8))){
var inst_18618 = (state_18663[(9)]);
var inst_18617 = (state_18663[(12)]);
var inst_18620 = (inst_18618 < inst_18617);
var inst_18621 = inst_18620;
var state_18663__$1 = state_18663;
if(cljs.core.truth_(inst_18621)){
var statearr_18697_18728 = state_18663__$1;
(statearr_18697_18728[(1)] = (10));

} else {
var statearr_18698_18729 = state_18663__$1;
(statearr_18698_18729[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__16128__auto__))
;
return ((function (switch__16002__auto__,c__16128__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__16003__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16003__auto____0 = (function (){
var statearr_18702 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18702[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16003__auto__);

(statearr_18702[(1)] = (1));

return statearr_18702;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16003__auto____1 = (function (state_18663){
while(true){
var ret_value__16004__auto__ = (function (){try{while(true){
var result__16005__auto__ = switch__16002__auto__(state_18663);
if(cljs.core.keyword_identical_QMARK_(result__16005__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16005__auto__;
}
break;
}
}catch (e18703){if((e18703 instanceof Object)){
var ex__16006__auto__ = e18703;
var statearr_18704_18730 = state_18663;
(statearr_18704_18730[(5)] = ex__16006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18663);

return cljs.core.cst$kw$recur;
} else {
throw e18703;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16004__auto__,cljs.core.cst$kw$recur)){
var G__18731 = state_18663;
state_18663 = G__18731;
continue;
} else {
return ret_value__16004__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16003__auto__ = function(state_18663){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16003__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16003__auto____1.call(this,state_18663);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16003__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16003__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16003__auto__;
})()
;})(switch__16002__auto__,c__16128__auto__))
})();
var state__16130__auto__ = (function (){var statearr_18705 = (f__16129__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16129__auto__.cljs$core$IFn$_invoke$arity$0() : f__16129__auto__.call(null));
(statearr_18705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16128__auto__);

return statearr_18705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16130__auto__);
});})(c__16128__auto__))
);

return c__16128__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args18732 = [];
var len__9181__auto___18735 = arguments.length;
var i__9182__auto___18736 = (0);
while(true){
if((i__9182__auto___18736 < len__9181__auto___18735)){
args18732.push((arguments[i__9182__auto___18736]));

var G__18737 = (i__9182__auto___18736 + (1));
i__9182__auto___18736 = G__18737;
continue;
} else {
}
break;
}

var G__18734 = args18732.length;
switch (G__18734) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18732.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args18739 = [];
var len__9181__auto___18742 = arguments.length;
var i__9182__auto___18743 = (0);
while(true){
if((i__9182__auto___18743 < len__9181__auto___18742)){
args18739.push((arguments[i__9182__auto___18743]));

var G__18744 = (i__9182__auto___18743 + (1));
i__9182__auto___18743 = G__18744;
continue;
} else {
}
break;
}

var G__18741 = args18739.length;
switch (G__18741) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18739.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args18746 = [];
var len__9181__auto___18797 = arguments.length;
var i__9182__auto___18798 = (0);
while(true){
if((i__9182__auto___18798 < len__9181__auto___18797)){
args18746.push((arguments[i__9182__auto___18798]));

var G__18799 = (i__9182__auto___18798 + (1));
i__9182__auto___18798 = G__18799;
continue;
} else {
}
break;
}

var G__18748 = args18746.length;
switch (G__18748) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18746.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16128__auto___18801 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16128__auto___18801,out){
return (function (){
var f__16129__auto__ = (function (){var switch__16002__auto__ = ((function (c__16128__auto___18801,out){
return (function (state_18772){
var state_val_18773 = (state_18772[(1)]);
if((state_val_18773 === (7))){
var inst_18767 = (state_18772[(2)]);
var state_18772__$1 = state_18772;
var statearr_18774_18802 = state_18772__$1;
(statearr_18774_18802[(2)] = inst_18767);

(statearr_18774_18802[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18773 === (1))){
var inst_18749 = null;
var state_18772__$1 = (function (){var statearr_18775 = state_18772;
(statearr_18775[(7)] = inst_18749);

return statearr_18775;
})();
var statearr_18776_18803 = state_18772__$1;
(statearr_18776_18803[(2)] = null);

(statearr_18776_18803[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18773 === (4))){
var inst_18752 = (state_18772[(8)]);
var inst_18752__$1 = (state_18772[(2)]);
var inst_18753 = (inst_18752__$1 == null);
var inst_18754 = cljs.core.not(inst_18753);
var state_18772__$1 = (function (){var statearr_18777 = state_18772;
(statearr_18777[(8)] = inst_18752__$1);

return statearr_18777;
})();
if(inst_18754){
var statearr_18778_18804 = state_18772__$1;
(statearr_18778_18804[(1)] = (5));

} else {
var statearr_18779_18805 = state_18772__$1;
(statearr_18779_18805[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18773 === (6))){
var state_18772__$1 = state_18772;
var statearr_18780_18806 = state_18772__$1;
(statearr_18780_18806[(2)] = null);

(statearr_18780_18806[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18773 === (3))){
var inst_18769 = (state_18772[(2)]);
var inst_18770 = cljs.core.async.close_BANG_(out);
var state_18772__$1 = (function (){var statearr_18781 = state_18772;
(statearr_18781[(9)] = inst_18769);

return statearr_18781;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18772__$1,inst_18770);
} else {
if((state_val_18773 === (2))){
var state_18772__$1 = state_18772;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18772__$1,(4),ch);
} else {
if((state_val_18773 === (11))){
var inst_18752 = (state_18772[(8)]);
var inst_18761 = (state_18772[(2)]);
var inst_18749 = inst_18752;
var state_18772__$1 = (function (){var statearr_18782 = state_18772;
(statearr_18782[(10)] = inst_18761);

(statearr_18782[(7)] = inst_18749);

return statearr_18782;
})();
var statearr_18783_18807 = state_18772__$1;
(statearr_18783_18807[(2)] = null);

(statearr_18783_18807[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18773 === (9))){
var inst_18752 = (state_18772[(8)]);
var state_18772__$1 = state_18772;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18772__$1,(11),out,inst_18752);
} else {
if((state_val_18773 === (5))){
var inst_18752 = (state_18772[(8)]);
var inst_18749 = (state_18772[(7)]);
var inst_18756 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18752,inst_18749);
var state_18772__$1 = state_18772;
if(inst_18756){
var statearr_18785_18808 = state_18772__$1;
(statearr_18785_18808[(1)] = (8));

} else {
var statearr_18786_18809 = state_18772__$1;
(statearr_18786_18809[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18773 === (10))){
var inst_18764 = (state_18772[(2)]);
var state_18772__$1 = state_18772;
var statearr_18787_18810 = state_18772__$1;
(statearr_18787_18810[(2)] = inst_18764);

(statearr_18787_18810[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18773 === (8))){
var inst_18749 = (state_18772[(7)]);
var tmp18784 = inst_18749;
var inst_18749__$1 = tmp18784;
var state_18772__$1 = (function (){var statearr_18788 = state_18772;
(statearr_18788[(7)] = inst_18749__$1);

return statearr_18788;
})();
var statearr_18789_18811 = state_18772__$1;
(statearr_18789_18811[(2)] = null);

(statearr_18789_18811[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__16128__auto___18801,out))
;
return ((function (switch__16002__auto__,c__16128__auto___18801,out){
return (function() {
var cljs$core$async$state_machine__16003__auto__ = null;
var cljs$core$async$state_machine__16003__auto____0 = (function (){
var statearr_18793 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18793[(0)] = cljs$core$async$state_machine__16003__auto__);

(statearr_18793[(1)] = (1));

return statearr_18793;
});
var cljs$core$async$state_machine__16003__auto____1 = (function (state_18772){
while(true){
var ret_value__16004__auto__ = (function (){try{while(true){
var result__16005__auto__ = switch__16002__auto__(state_18772);
if(cljs.core.keyword_identical_QMARK_(result__16005__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16005__auto__;
}
break;
}
}catch (e18794){if((e18794 instanceof Object)){
var ex__16006__auto__ = e18794;
var statearr_18795_18812 = state_18772;
(statearr_18795_18812[(5)] = ex__16006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18772);

return cljs.core.cst$kw$recur;
} else {
throw e18794;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16004__auto__,cljs.core.cst$kw$recur)){
var G__18813 = state_18772;
state_18772 = G__18813;
continue;
} else {
return ret_value__16004__auto__;
}
break;
}
});
cljs$core$async$state_machine__16003__auto__ = function(state_18772){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16003__auto____1.call(this,state_18772);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16003__auto____0;
cljs$core$async$state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16003__auto____1;
return cljs$core$async$state_machine__16003__auto__;
})()
;})(switch__16002__auto__,c__16128__auto___18801,out))
})();
var state__16130__auto__ = (function (){var statearr_18796 = (f__16129__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16129__auto__.cljs$core$IFn$_invoke$arity$0() : f__16129__auto__.call(null));
(statearr_18796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16128__auto___18801);

return statearr_18796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16130__auto__);
});})(c__16128__auto___18801,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args18814 = [];
var len__9181__auto___18884 = arguments.length;
var i__9182__auto___18885 = (0);
while(true){
if((i__9182__auto___18885 < len__9181__auto___18884)){
args18814.push((arguments[i__9182__auto___18885]));

var G__18886 = (i__9182__auto___18885 + (1));
i__9182__auto___18885 = G__18886;
continue;
} else {
}
break;
}

var G__18816 = args18814.length;
switch (G__18816) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18814.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16128__auto___18888 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16128__auto___18888,out){
return (function (){
var f__16129__auto__ = (function (){var switch__16002__auto__ = ((function (c__16128__auto___18888,out){
return (function (state_18854){
var state_val_18855 = (state_18854[(1)]);
if((state_val_18855 === (7))){
var inst_18850 = (state_18854[(2)]);
var state_18854__$1 = state_18854;
var statearr_18856_18889 = state_18854__$1;
(statearr_18856_18889[(2)] = inst_18850);

(statearr_18856_18889[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18855 === (1))){
var inst_18817 = (new Array(n));
var inst_18818 = inst_18817;
var inst_18819 = (0);
var state_18854__$1 = (function (){var statearr_18857 = state_18854;
(statearr_18857[(7)] = inst_18818);

(statearr_18857[(8)] = inst_18819);

return statearr_18857;
})();
var statearr_18858_18890 = state_18854__$1;
(statearr_18858_18890[(2)] = null);

(statearr_18858_18890[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18855 === (4))){
var inst_18822 = (state_18854[(9)]);
var inst_18822__$1 = (state_18854[(2)]);
var inst_18823 = (inst_18822__$1 == null);
var inst_18824 = cljs.core.not(inst_18823);
var state_18854__$1 = (function (){var statearr_18859 = state_18854;
(statearr_18859[(9)] = inst_18822__$1);

return statearr_18859;
})();
if(inst_18824){
var statearr_18860_18891 = state_18854__$1;
(statearr_18860_18891[(1)] = (5));

} else {
var statearr_18861_18892 = state_18854__$1;
(statearr_18861_18892[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18855 === (15))){
var inst_18844 = (state_18854[(2)]);
var state_18854__$1 = state_18854;
var statearr_18862_18893 = state_18854__$1;
(statearr_18862_18893[(2)] = inst_18844);

(statearr_18862_18893[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18855 === (13))){
var state_18854__$1 = state_18854;
var statearr_18863_18894 = state_18854__$1;
(statearr_18863_18894[(2)] = null);

(statearr_18863_18894[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18855 === (6))){
var inst_18819 = (state_18854[(8)]);
var inst_18840 = (inst_18819 > (0));
var state_18854__$1 = state_18854;
if(cljs.core.truth_(inst_18840)){
var statearr_18864_18895 = state_18854__$1;
(statearr_18864_18895[(1)] = (12));

} else {
var statearr_18865_18896 = state_18854__$1;
(statearr_18865_18896[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18855 === (3))){
var inst_18852 = (state_18854[(2)]);
var state_18854__$1 = state_18854;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18854__$1,inst_18852);
} else {
if((state_val_18855 === (12))){
var inst_18818 = (state_18854[(7)]);
var inst_18842 = cljs.core.vec(inst_18818);
var state_18854__$1 = state_18854;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18854__$1,(15),out,inst_18842);
} else {
if((state_val_18855 === (2))){
var state_18854__$1 = state_18854;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18854__$1,(4),ch);
} else {
if((state_val_18855 === (11))){
var inst_18834 = (state_18854[(2)]);
var inst_18835 = (new Array(n));
var inst_18818 = inst_18835;
var inst_18819 = (0);
var state_18854__$1 = (function (){var statearr_18866 = state_18854;
(statearr_18866[(10)] = inst_18834);

(statearr_18866[(7)] = inst_18818);

(statearr_18866[(8)] = inst_18819);

return statearr_18866;
})();
var statearr_18867_18897 = state_18854__$1;
(statearr_18867_18897[(2)] = null);

(statearr_18867_18897[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18855 === (9))){
var inst_18818 = (state_18854[(7)]);
var inst_18832 = cljs.core.vec(inst_18818);
var state_18854__$1 = state_18854;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18854__$1,(11),out,inst_18832);
} else {
if((state_val_18855 === (5))){
var inst_18822 = (state_18854[(9)]);
var inst_18818 = (state_18854[(7)]);
var inst_18819 = (state_18854[(8)]);
var inst_18827 = (state_18854[(11)]);
var inst_18826 = (inst_18818[inst_18819] = inst_18822);
var inst_18827__$1 = (inst_18819 + (1));
var inst_18828 = (inst_18827__$1 < n);
var state_18854__$1 = (function (){var statearr_18868 = state_18854;
(statearr_18868[(11)] = inst_18827__$1);

(statearr_18868[(12)] = inst_18826);

return statearr_18868;
})();
if(cljs.core.truth_(inst_18828)){
var statearr_18869_18898 = state_18854__$1;
(statearr_18869_18898[(1)] = (8));

} else {
var statearr_18870_18899 = state_18854__$1;
(statearr_18870_18899[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18855 === (14))){
var inst_18847 = (state_18854[(2)]);
var inst_18848 = cljs.core.async.close_BANG_(out);
var state_18854__$1 = (function (){var statearr_18872 = state_18854;
(statearr_18872[(13)] = inst_18847);

return statearr_18872;
})();
var statearr_18873_18900 = state_18854__$1;
(statearr_18873_18900[(2)] = inst_18848);

(statearr_18873_18900[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18855 === (10))){
var inst_18838 = (state_18854[(2)]);
var state_18854__$1 = state_18854;
var statearr_18874_18901 = state_18854__$1;
(statearr_18874_18901[(2)] = inst_18838);

(statearr_18874_18901[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18855 === (8))){
var inst_18818 = (state_18854[(7)]);
var inst_18827 = (state_18854[(11)]);
var tmp18871 = inst_18818;
var inst_18818__$1 = tmp18871;
var inst_18819 = inst_18827;
var state_18854__$1 = (function (){var statearr_18875 = state_18854;
(statearr_18875[(7)] = inst_18818__$1);

(statearr_18875[(8)] = inst_18819);

return statearr_18875;
})();
var statearr_18876_18902 = state_18854__$1;
(statearr_18876_18902[(2)] = null);

(statearr_18876_18902[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__16128__auto___18888,out))
;
return ((function (switch__16002__auto__,c__16128__auto___18888,out){
return (function() {
var cljs$core$async$state_machine__16003__auto__ = null;
var cljs$core$async$state_machine__16003__auto____0 = (function (){
var statearr_18880 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18880[(0)] = cljs$core$async$state_machine__16003__auto__);

(statearr_18880[(1)] = (1));

return statearr_18880;
});
var cljs$core$async$state_machine__16003__auto____1 = (function (state_18854){
while(true){
var ret_value__16004__auto__ = (function (){try{while(true){
var result__16005__auto__ = switch__16002__auto__(state_18854);
if(cljs.core.keyword_identical_QMARK_(result__16005__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16005__auto__;
}
break;
}
}catch (e18881){if((e18881 instanceof Object)){
var ex__16006__auto__ = e18881;
var statearr_18882_18903 = state_18854;
(statearr_18882_18903[(5)] = ex__16006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18854);

return cljs.core.cst$kw$recur;
} else {
throw e18881;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16004__auto__,cljs.core.cst$kw$recur)){
var G__18904 = state_18854;
state_18854 = G__18904;
continue;
} else {
return ret_value__16004__auto__;
}
break;
}
});
cljs$core$async$state_machine__16003__auto__ = function(state_18854){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16003__auto____1.call(this,state_18854);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16003__auto____0;
cljs$core$async$state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16003__auto____1;
return cljs$core$async$state_machine__16003__auto__;
})()
;})(switch__16002__auto__,c__16128__auto___18888,out))
})();
var state__16130__auto__ = (function (){var statearr_18883 = (f__16129__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16129__auto__.cljs$core$IFn$_invoke$arity$0() : f__16129__auto__.call(null));
(statearr_18883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16128__auto___18888);

return statearr_18883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16130__auto__);
});})(c__16128__auto___18888,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args18905 = [];
var len__9181__auto___18979 = arguments.length;
var i__9182__auto___18980 = (0);
while(true){
if((i__9182__auto___18980 < len__9181__auto___18979)){
args18905.push((arguments[i__9182__auto___18980]));

var G__18981 = (i__9182__auto___18980 + (1));
i__9182__auto___18980 = G__18981;
continue;
} else {
}
break;
}

var G__18907 = args18905.length;
switch (G__18907) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18905.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16128__auto___18983 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16128__auto___18983,out){
return (function (){
var f__16129__auto__ = (function (){var switch__16002__auto__ = ((function (c__16128__auto___18983,out){
return (function (state_18949){
var state_val_18950 = (state_18949[(1)]);
if((state_val_18950 === (7))){
var inst_18945 = (state_18949[(2)]);
var state_18949__$1 = state_18949;
var statearr_18951_18984 = state_18949__$1;
(statearr_18951_18984[(2)] = inst_18945);

(statearr_18951_18984[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18950 === (1))){
var inst_18908 = [];
var inst_18909 = inst_18908;
var inst_18910 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_18949__$1 = (function (){var statearr_18952 = state_18949;
(statearr_18952[(7)] = inst_18909);

(statearr_18952[(8)] = inst_18910);

return statearr_18952;
})();
var statearr_18953_18985 = state_18949__$1;
(statearr_18953_18985[(2)] = null);

(statearr_18953_18985[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18950 === (4))){
var inst_18913 = (state_18949[(9)]);
var inst_18913__$1 = (state_18949[(2)]);
var inst_18914 = (inst_18913__$1 == null);
var inst_18915 = cljs.core.not(inst_18914);
var state_18949__$1 = (function (){var statearr_18954 = state_18949;
(statearr_18954[(9)] = inst_18913__$1);

return statearr_18954;
})();
if(inst_18915){
var statearr_18955_18986 = state_18949__$1;
(statearr_18955_18986[(1)] = (5));

} else {
var statearr_18956_18987 = state_18949__$1;
(statearr_18956_18987[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18950 === (15))){
var inst_18939 = (state_18949[(2)]);
var state_18949__$1 = state_18949;
var statearr_18957_18988 = state_18949__$1;
(statearr_18957_18988[(2)] = inst_18939);

(statearr_18957_18988[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18950 === (13))){
var state_18949__$1 = state_18949;
var statearr_18958_18989 = state_18949__$1;
(statearr_18958_18989[(2)] = null);

(statearr_18958_18989[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18950 === (6))){
var inst_18909 = (state_18949[(7)]);
var inst_18934 = inst_18909.length;
var inst_18935 = (inst_18934 > (0));
var state_18949__$1 = state_18949;
if(cljs.core.truth_(inst_18935)){
var statearr_18959_18990 = state_18949__$1;
(statearr_18959_18990[(1)] = (12));

} else {
var statearr_18960_18991 = state_18949__$1;
(statearr_18960_18991[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18950 === (3))){
var inst_18947 = (state_18949[(2)]);
var state_18949__$1 = state_18949;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18949__$1,inst_18947);
} else {
if((state_val_18950 === (12))){
var inst_18909 = (state_18949[(7)]);
var inst_18937 = cljs.core.vec(inst_18909);
var state_18949__$1 = state_18949;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18949__$1,(15),out,inst_18937);
} else {
if((state_val_18950 === (2))){
var state_18949__$1 = state_18949;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18949__$1,(4),ch);
} else {
if((state_val_18950 === (11))){
var inst_18917 = (state_18949[(10)]);
var inst_18913 = (state_18949[(9)]);
var inst_18927 = (state_18949[(2)]);
var inst_18928 = [];
var inst_18929 = inst_18928.push(inst_18913);
var inst_18909 = inst_18928;
var inst_18910 = inst_18917;
var state_18949__$1 = (function (){var statearr_18961 = state_18949;
(statearr_18961[(7)] = inst_18909);

(statearr_18961[(8)] = inst_18910);

(statearr_18961[(11)] = inst_18929);

(statearr_18961[(12)] = inst_18927);

return statearr_18961;
})();
var statearr_18962_18992 = state_18949__$1;
(statearr_18962_18992[(2)] = null);

(statearr_18962_18992[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18950 === (9))){
var inst_18909 = (state_18949[(7)]);
var inst_18925 = cljs.core.vec(inst_18909);
var state_18949__$1 = state_18949;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18949__$1,(11),out,inst_18925);
} else {
if((state_val_18950 === (5))){
var inst_18917 = (state_18949[(10)]);
var inst_18910 = (state_18949[(8)]);
var inst_18913 = (state_18949[(9)]);
var inst_18917__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18913) : f.call(null,inst_18913));
var inst_18918 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18917__$1,inst_18910);
var inst_18919 = cljs.core.keyword_identical_QMARK_(inst_18910,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_18920 = (inst_18918) || (inst_18919);
var state_18949__$1 = (function (){var statearr_18963 = state_18949;
(statearr_18963[(10)] = inst_18917__$1);

return statearr_18963;
})();
if(cljs.core.truth_(inst_18920)){
var statearr_18964_18993 = state_18949__$1;
(statearr_18964_18993[(1)] = (8));

} else {
var statearr_18965_18994 = state_18949__$1;
(statearr_18965_18994[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18950 === (14))){
var inst_18942 = (state_18949[(2)]);
var inst_18943 = cljs.core.async.close_BANG_(out);
var state_18949__$1 = (function (){var statearr_18967 = state_18949;
(statearr_18967[(13)] = inst_18942);

return statearr_18967;
})();
var statearr_18968_18995 = state_18949__$1;
(statearr_18968_18995[(2)] = inst_18943);

(statearr_18968_18995[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18950 === (10))){
var inst_18932 = (state_18949[(2)]);
var state_18949__$1 = state_18949;
var statearr_18969_18996 = state_18949__$1;
(statearr_18969_18996[(2)] = inst_18932);

(statearr_18969_18996[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18950 === (8))){
var inst_18909 = (state_18949[(7)]);
var inst_18917 = (state_18949[(10)]);
var inst_18913 = (state_18949[(9)]);
var inst_18922 = inst_18909.push(inst_18913);
var tmp18966 = inst_18909;
var inst_18909__$1 = tmp18966;
var inst_18910 = inst_18917;
var state_18949__$1 = (function (){var statearr_18970 = state_18949;
(statearr_18970[(14)] = inst_18922);

(statearr_18970[(7)] = inst_18909__$1);

(statearr_18970[(8)] = inst_18910);

return statearr_18970;
})();
var statearr_18971_18997 = state_18949__$1;
(statearr_18971_18997[(2)] = null);

(statearr_18971_18997[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__16128__auto___18983,out))
;
return ((function (switch__16002__auto__,c__16128__auto___18983,out){
return (function() {
var cljs$core$async$state_machine__16003__auto__ = null;
var cljs$core$async$state_machine__16003__auto____0 = (function (){
var statearr_18975 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18975[(0)] = cljs$core$async$state_machine__16003__auto__);

(statearr_18975[(1)] = (1));

return statearr_18975;
});
var cljs$core$async$state_machine__16003__auto____1 = (function (state_18949){
while(true){
var ret_value__16004__auto__ = (function (){try{while(true){
var result__16005__auto__ = switch__16002__auto__(state_18949);
if(cljs.core.keyword_identical_QMARK_(result__16005__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16005__auto__;
}
break;
}
}catch (e18976){if((e18976 instanceof Object)){
var ex__16006__auto__ = e18976;
var statearr_18977_18998 = state_18949;
(statearr_18977_18998[(5)] = ex__16006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18949);

return cljs.core.cst$kw$recur;
} else {
throw e18976;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16004__auto__,cljs.core.cst$kw$recur)){
var G__18999 = state_18949;
state_18949 = G__18999;
continue;
} else {
return ret_value__16004__auto__;
}
break;
}
});
cljs$core$async$state_machine__16003__auto__ = function(state_18949){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16003__auto____1.call(this,state_18949);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16003__auto____0;
cljs$core$async$state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16003__auto____1;
return cljs$core$async$state_machine__16003__auto__;
})()
;})(switch__16002__auto__,c__16128__auto___18983,out))
})();
var state__16130__auto__ = (function (){var statearr_18978 = (f__16129__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16129__auto__.cljs$core$IFn$_invoke$arity$0() : f__16129__auto__.call(null));
(statearr_18978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16128__auto___18983);

return statearr_18978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16130__auto__);
});})(c__16128__auto___18983,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

