// Compiled by ClojureScript 1.9.562 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__29116__auto__,writer__29117__auto__,opt__29118__auto__){
return cljs.core._write.call(null,writer__29117__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__29687__auto__ = [];
var len__29680__auto___49642 = arguments.length;
var i__29681__auto___49643 = (0);
while(true){
if((i__29681__auto___49643 < len__29680__auto___49642)){
args__29687__auto__.push((arguments[i__29681__auto___49643]));

var G__49644 = (i__29681__auto___49643 + (1));
i__29681__auto___49643 = G__49644;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq49641){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49641));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___49646 = arguments.length;
var i__29681__auto___49647 = (0);
while(true){
if((i__29681__auto___49647 < len__29680__auto___49646)){
args__29687__auto__.push((arguments[i__29681__auto___49647]));

var G__49648 = (i__29681__auto___49647 + (1));
i__29681__auto___49647 = G__49648;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq49645){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49645));
});

var g_QMARK__49649 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_49650 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__49649){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__49649))
,null));
var mkg_49651 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__49649,g_49650){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__49649,g_49650))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__49649,g_49650,mkg_49651){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__49649).call(null,x);
});})(g_QMARK__49649,g_49650,mkg_49651))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__49649,g_49650,mkg_49651){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_49651).call(null,gfn);
});})(g_QMARK__49649,g_49650,mkg_49651))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__49649,g_49650,mkg_49651){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_49650).call(null,generator);
});})(g_QMARK__49649,g_49650,mkg_49651))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__35313__auto___49671 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__35313__auto___49671){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__29687__auto__ = [];
var len__29680__auto___49672 = arguments.length;
var i__29681__auto___49673 = (0);
while(true){
if((i__29681__auto___49673 < len__29680__auto___49672)){
args__29687__auto__.push((arguments[i__29681__auto___49673]));

var G__49674 = (i__29681__auto___49673 + (1));
i__29681__auto___49673 = G__49674;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});})(g__35313__auto___49671))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35313__auto___49671){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35313__auto___49671),args);
});})(g__35313__auto___49671))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__35313__auto___49671){
return (function (seq49652){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49652));
});})(g__35313__auto___49671))
;


var g__35313__auto___49675 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__35313__auto___49675){
return (function cljs$spec$gen$alpha$list(var_args){
var args__29687__auto__ = [];
var len__29680__auto___49676 = arguments.length;
var i__29681__auto___49677 = (0);
while(true){
if((i__29681__auto___49677 < len__29680__auto___49676)){
args__29687__auto__.push((arguments[i__29681__auto___49677]));

var G__49678 = (i__29681__auto___49677 + (1));
i__29681__auto___49677 = G__49678;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});})(g__35313__auto___49675))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35313__auto___49675){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35313__auto___49675),args);
});})(g__35313__auto___49675))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__35313__auto___49675){
return (function (seq49653){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49653));
});})(g__35313__auto___49675))
;


var g__35313__auto___49679 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__35313__auto___49679){
return (function cljs$spec$gen$alpha$map(var_args){
var args__29687__auto__ = [];
var len__29680__auto___49680 = arguments.length;
var i__29681__auto___49681 = (0);
while(true){
if((i__29681__auto___49681 < len__29680__auto___49680)){
args__29687__auto__.push((arguments[i__29681__auto___49681]));

var G__49682 = (i__29681__auto___49681 + (1));
i__29681__auto___49681 = G__49682;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});})(g__35313__auto___49679))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35313__auto___49679){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35313__auto___49679),args);
});})(g__35313__auto___49679))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__35313__auto___49679){
return (function (seq49654){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49654));
});})(g__35313__auto___49679))
;


var g__35313__auto___49683 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__35313__auto___49683){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__29687__auto__ = [];
var len__29680__auto___49684 = arguments.length;
var i__29681__auto___49685 = (0);
while(true){
if((i__29681__auto___49685 < len__29680__auto___49684)){
args__29687__auto__.push((arguments[i__29681__auto___49685]));

var G__49686 = (i__29681__auto___49685 + (1));
i__29681__auto___49685 = G__49686;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});})(g__35313__auto___49683))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35313__auto___49683){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35313__auto___49683),args);
});})(g__35313__auto___49683))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__35313__auto___49683){
return (function (seq49655){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49655));
});})(g__35313__auto___49683))
;


var g__35313__auto___49687 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__35313__auto___49687){
return (function cljs$spec$gen$alpha$set(var_args){
var args__29687__auto__ = [];
var len__29680__auto___49688 = arguments.length;
var i__29681__auto___49689 = (0);
while(true){
if((i__29681__auto___49689 < len__29680__auto___49688)){
args__29687__auto__.push((arguments[i__29681__auto___49689]));

var G__49690 = (i__29681__auto___49689 + (1));
i__29681__auto___49689 = G__49690;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});})(g__35313__auto___49687))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35313__auto___49687){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35313__auto___49687),args);
});})(g__35313__auto___49687))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__35313__auto___49687){
return (function (seq49656){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49656));
});})(g__35313__auto___49687))
;


var g__35313__auto___49691 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__35313__auto___49691){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__29687__auto__ = [];
var len__29680__auto___49692 = arguments.length;
var i__29681__auto___49693 = (0);
while(true){
if((i__29681__auto___49693 < len__29680__auto___49692)){
args__29687__auto__.push((arguments[i__29681__auto___49693]));

var G__49694 = (i__29681__auto___49693 + (1));
i__29681__auto___49693 = G__49694;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});})(g__35313__auto___49691))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35313__auto___49691){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35313__auto___49691),args);
});})(g__35313__auto___49691))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__35313__auto___49691){
return (function (seq49657){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49657));
});})(g__35313__auto___49691))
;


var g__35313__auto___49695 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__35313__auto___49695){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__29687__auto__ = [];
var len__29680__auto___49696 = arguments.length;
var i__29681__auto___49697 = (0);
while(true){
if((i__29681__auto___49697 < len__29680__auto___49696)){
args__29687__auto__.push((arguments[i__29681__auto___49697]));

var G__49698 = (i__29681__auto___49697 + (1));
i__29681__auto___49697 = G__49698;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});})(g__35313__auto___49695))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35313__auto___49695){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35313__auto___49695),args);
});})(g__35313__auto___49695))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__35313__auto___49695){
return (function (seq49658){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49658));
});})(g__35313__auto___49695))
;


var g__35313__auto___49699 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__35313__auto___49699){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__29687__auto__ = [];
var len__29680__auto___49700 = arguments.length;
var i__29681__auto___49701 = (0);
while(true){
if((i__29681__auto___49701 < len__29680__auto___49700)){
args__29687__auto__.push((arguments[i__29681__auto___49701]));

var G__49702 = (i__29681__auto___49701 + (1));
i__29681__auto___49701 = G__49702;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});})(g__35313__auto___49699))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35313__auto___49699){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35313__auto___49699),args);
});})(g__35313__auto___49699))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__35313__auto___49699){
return (function (seq49659){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49659));
});})(g__35313__auto___49699))
;


var g__35313__auto___49703 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__35313__auto___49703){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__29687__auto__ = [];
var len__29680__auto___49704 = arguments.length;
var i__29681__auto___49705 = (0);
while(true){
if((i__29681__auto___49705 < len__29680__auto___49704)){
args__29687__auto__.push((arguments[i__29681__auto___49705]));

var G__49706 = (i__29681__auto___49705 + (1));
i__29681__auto___49705 = G__49706;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});})(g__35313__auto___49703))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35313__auto___49703){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35313__auto___49703),args);
});})(g__35313__auto___49703))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__35313__auto___49703){
return (function (seq49660){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49660));
});})(g__35313__auto___49703))
;


var g__35313__auto___49707 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__35313__auto___49707){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__29687__auto__ = [];
var len__29680__auto___49708 = arguments.length;
var i__29681__auto___49709 = (0);
while(true){
if((i__29681__auto___49709 < len__29680__auto___49708)){
args__29687__auto__.push((arguments[i__29681__auto___49709]));

var G__49710 = (i__29681__auto___49709 + (1));
i__29681__auto___49709 = G__49710;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});})(g__35313__auto___49707))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35313__auto___49707){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35313__auto___49707),args);
});})(g__35313__auto___49707))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__35313__auto___49707){
return (function (seq49661){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49661));
});})(g__35313__auto___49707))
;


var g__35313__auto___49711 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__35313__auto___49711){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__29687__auto__ = [];
var len__29680__auto___49712 = arguments.length;
var i__29681__auto___49713 = (0);
while(true){
if((i__29681__auto___49713 < len__29680__auto___49712)){
args__29687__auto__.push((arguments[i__29681__auto___49713]));

var G__49714 = (i__29681__auto___49713 + (1));
i__29681__auto___49713 = G__49714;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});})(g__35313__auto___49711))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35313__auto___49711){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35313__auto___49711),args);
});})(g__35313__auto___49711))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__35313__auto___49711){
return (function (seq49662){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49662));
});})(g__35313__auto___49711))
;


var g__35313__auto___49715 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__35313__auto___49715){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__29687__auto__ = [];
var len__29680__auto___49716 = arguments.length;
var i__29681__auto___49717 = (0);
while(true){
if((i__29681__auto___49717 < len__29680__auto___49716)){
args__29687__auto__.push((arguments[i__29681__auto___49717]));

var G__49718 = (i__29681__auto___49717 + (1));
i__29681__auto___49717 = G__49718;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});})(g__35313__auto___49715))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35313__auto___49715){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35313__auto___49715),args);
});})(g__35313__auto___49715))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__35313__auto___49715){
return (function (seq49663){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49663));
});})(g__35313__auto___49715))
;


var g__35313__auto___49719 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__35313__auto___49719){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__29687__auto__ = [];
var len__29680__auto___49720 = arguments.length;
var i__29681__auto___49721 = (0);
while(true){
if((i__29681__auto___49721 < len__29680__auto___49720)){
args__29687__auto__.push((arguments[i__29681__auto___49721]));

var G__49722 = (i__29681__auto___49721 + (1));
i__29681__auto___49721 = G__49722;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});})(g__35313__auto___49719))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35313__auto___49719){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35313__auto___49719),args);
});})(g__35313__auto___49719))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__35313__auto___49719){
return (function (seq49664){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49664));
});})(g__35313__auto___49719))
;


var g__35313__auto___49723 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__35313__auto___49723){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__29687__auto__ = [];
var len__29680__auto___49724 = arguments.length;
var i__29681__auto___49725 = (0);
while(true){
if((i__29681__auto___49725 < len__29680__auto___49724)){
args__29687__auto__.push((arguments[i__29681__auto___49725]));

var G__49726 = (i__29681__auto___49725 + (1));
i__29681__auto___49725 = G__49726;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});})(g__35313__auto___49723))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35313__auto___49723){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35313__auto___49723),args);
});})(g__35313__auto___49723))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__35313__auto___49723){
return (function (seq49665){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49665));
});})(g__35313__auto___49723))
;


var g__35313__auto___49727 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__35313__auto___49727){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__29687__auto__ = [];
var len__29680__auto___49728 = arguments.length;
var i__29681__auto___49729 = (0);
while(true){
if((i__29681__auto___49729 < len__29680__auto___49728)){
args__29687__auto__.push((arguments[i__29681__auto___49729]));

var G__49730 = (i__29681__auto___49729 + (1));
i__29681__auto___49729 = G__49730;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});})(g__35313__auto___49727))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35313__auto___49727){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35313__auto___49727),args);
});})(g__35313__auto___49727))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__35313__auto___49727){
return (function (seq49666){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49666));
});})(g__35313__auto___49727))
;


var g__35313__auto___49731 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__35313__auto___49731){
return (function cljs$spec$gen$alpha$return(var_args){
var args__29687__auto__ = [];
var len__29680__auto___49732 = arguments.length;
var i__29681__auto___49733 = (0);
while(true){
if((i__29681__auto___49733 < len__29680__auto___49732)){
args__29687__auto__.push((arguments[i__29681__auto___49733]));

var G__49734 = (i__29681__auto___49733 + (1));
i__29681__auto___49733 = G__49734;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});})(g__35313__auto___49731))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35313__auto___49731){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35313__auto___49731),args);
});})(g__35313__auto___49731))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__35313__auto___49731){
return (function (seq49667){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49667));
});})(g__35313__auto___49731))
;


var g__35313__auto___49735 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__35313__auto___49735){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___49736 = arguments.length;
var i__29681__auto___49737 = (0);
while(true){
if((i__29681__auto___49737 < len__29680__auto___49736)){
args__29687__auto__.push((arguments[i__29681__auto___49737]));

var G__49738 = (i__29681__auto___49737 + (1));
i__29681__auto___49737 = G__49738;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});})(g__35313__auto___49735))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35313__auto___49735){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35313__auto___49735),args);
});})(g__35313__auto___49735))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__35313__auto___49735){
return (function (seq49668){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49668));
});})(g__35313__auto___49735))
;


var g__35313__auto___49739 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__35313__auto___49739){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___49740 = arguments.length;
var i__29681__auto___49741 = (0);
while(true){
if((i__29681__auto___49741 < len__29680__auto___49740)){
args__29687__auto__.push((arguments[i__29681__auto___49741]));

var G__49742 = (i__29681__auto___49741 + (1));
i__29681__auto___49741 = G__49742;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});})(g__35313__auto___49739))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35313__auto___49739){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35313__auto___49739),args);
});})(g__35313__auto___49739))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__35313__auto___49739){
return (function (seq49669){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49669));
});})(g__35313__auto___49739))
;


var g__35313__auto___49743 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__35313__auto___49743){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__29687__auto__ = [];
var len__29680__auto___49744 = arguments.length;
var i__29681__auto___49745 = (0);
while(true){
if((i__29681__auto___49745 < len__29680__auto___49744)){
args__29687__auto__.push((arguments[i__29681__auto___49745]));

var G__49746 = (i__29681__auto___49745 + (1));
i__29681__auto___49745 = G__49746;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});})(g__35313__auto___49743))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35313__auto___49743){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35313__auto___49743),args);
});})(g__35313__auto___49743))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__35313__auto___49743){
return (function (seq49670){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49670));
});})(g__35313__auto___49743))
;

var g__35326__auto___49768 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__35326__auto___49768){
return (function cljs$spec$gen$alpha$any(var_args){
var args__29687__auto__ = [];
var len__29680__auto___49769 = arguments.length;
var i__29681__auto___49770 = (0);
while(true){
if((i__29681__auto___49770 < len__29680__auto___49769)){
args__29687__auto__.push((arguments[i__29681__auto___49770]));

var G__49771 = (i__29681__auto___49770 + (1));
i__29681__auto___49770 = G__49771;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});})(g__35326__auto___49768))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35326__auto___49768){
return (function (args){
return cljs.core.deref.call(null,g__35326__auto___49768);
});})(g__35326__auto___49768))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__35326__auto___49768){
return (function (seq49747){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49747));
});})(g__35326__auto___49768))
;


var g__35326__auto___49772 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__35326__auto___49772){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__29687__auto__ = [];
var len__29680__auto___49773 = arguments.length;
var i__29681__auto___49774 = (0);
while(true){
if((i__29681__auto___49774 < len__29680__auto___49773)){
args__29687__auto__.push((arguments[i__29681__auto___49774]));

var G__49775 = (i__29681__auto___49774 + (1));
i__29681__auto___49774 = G__49775;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});})(g__35326__auto___49772))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35326__auto___49772){
return (function (args){
return cljs.core.deref.call(null,g__35326__auto___49772);
});})(g__35326__auto___49772))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__35326__auto___49772){
return (function (seq49748){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49748));
});})(g__35326__auto___49772))
;


var g__35326__auto___49776 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__35326__auto___49776){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__29687__auto__ = [];
var len__29680__auto___49777 = arguments.length;
var i__29681__auto___49778 = (0);
while(true){
if((i__29681__auto___49778 < len__29680__auto___49777)){
args__29687__auto__.push((arguments[i__29681__auto___49778]));

var G__49779 = (i__29681__auto___49778 + (1));
i__29681__auto___49778 = G__49779;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});})(g__35326__auto___49776))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35326__auto___49776){
return (function (args){
return cljs.core.deref.call(null,g__35326__auto___49776);
});})(g__35326__auto___49776))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__35326__auto___49776){
return (function (seq49749){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49749));
});})(g__35326__auto___49776))
;


var g__35326__auto___49780 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__35326__auto___49780){
return (function cljs$spec$gen$alpha$char(var_args){
var args__29687__auto__ = [];
var len__29680__auto___49781 = arguments.length;
var i__29681__auto___49782 = (0);
while(true){
if((i__29681__auto___49782 < len__29680__auto___49781)){
args__29687__auto__.push((arguments[i__29681__auto___49782]));

var G__49783 = (i__29681__auto___49782 + (1));
i__29681__auto___49782 = G__49783;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});})(g__35326__auto___49780))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35326__auto___49780){
return (function (args){
return cljs.core.deref.call(null,g__35326__auto___49780);
});})(g__35326__auto___49780))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__35326__auto___49780){
return (function (seq49750){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49750));
});})(g__35326__auto___49780))
;


var g__35326__auto___49784 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__35326__auto___49784){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__29687__auto__ = [];
var len__29680__auto___49785 = arguments.length;
var i__29681__auto___49786 = (0);
while(true){
if((i__29681__auto___49786 < len__29680__auto___49785)){
args__29687__auto__.push((arguments[i__29681__auto___49786]));

var G__49787 = (i__29681__auto___49786 + (1));
i__29681__auto___49786 = G__49787;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});})(g__35326__auto___49784))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35326__auto___49784){
return (function (args){
return cljs.core.deref.call(null,g__35326__auto___49784);
});})(g__35326__auto___49784))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__35326__auto___49784){
return (function (seq49751){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49751));
});})(g__35326__auto___49784))
;


var g__35326__auto___49788 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__35326__auto___49788){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__29687__auto__ = [];
var len__29680__auto___49789 = arguments.length;
var i__29681__auto___49790 = (0);
while(true){
if((i__29681__auto___49790 < len__29680__auto___49789)){
args__29687__auto__.push((arguments[i__29681__auto___49790]));

var G__49791 = (i__29681__auto___49790 + (1));
i__29681__auto___49790 = G__49791;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});})(g__35326__auto___49788))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35326__auto___49788){
return (function (args){
return cljs.core.deref.call(null,g__35326__auto___49788);
});})(g__35326__auto___49788))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__35326__auto___49788){
return (function (seq49752){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49752));
});})(g__35326__auto___49788))
;


var g__35326__auto___49792 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__35326__auto___49792){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__29687__auto__ = [];
var len__29680__auto___49793 = arguments.length;
var i__29681__auto___49794 = (0);
while(true){
if((i__29681__auto___49794 < len__29680__auto___49793)){
args__29687__auto__.push((arguments[i__29681__auto___49794]));

var G__49795 = (i__29681__auto___49794 + (1));
i__29681__auto___49794 = G__49795;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});})(g__35326__auto___49792))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35326__auto___49792){
return (function (args){
return cljs.core.deref.call(null,g__35326__auto___49792);
});})(g__35326__auto___49792))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__35326__auto___49792){
return (function (seq49753){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49753));
});})(g__35326__auto___49792))
;


var g__35326__auto___49796 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__35326__auto___49796){
return (function cljs$spec$gen$alpha$double(var_args){
var args__29687__auto__ = [];
var len__29680__auto___49797 = arguments.length;
var i__29681__auto___49798 = (0);
while(true){
if((i__29681__auto___49798 < len__29680__auto___49797)){
args__29687__auto__.push((arguments[i__29681__auto___49798]));

var G__49799 = (i__29681__auto___49798 + (1));
i__29681__auto___49798 = G__49799;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});})(g__35326__auto___49796))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35326__auto___49796){
return (function (args){
return cljs.core.deref.call(null,g__35326__auto___49796);
});})(g__35326__auto___49796))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__35326__auto___49796){
return (function (seq49754){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49754));
});})(g__35326__auto___49796))
;


var g__35326__auto___49800 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__35326__auto___49800){
return (function cljs$spec$gen$alpha$int(var_args){
var args__29687__auto__ = [];
var len__29680__auto___49801 = arguments.length;
var i__29681__auto___49802 = (0);
while(true){
if((i__29681__auto___49802 < len__29680__auto___49801)){
args__29687__auto__.push((arguments[i__29681__auto___49802]));

var G__49803 = (i__29681__auto___49802 + (1));
i__29681__auto___49802 = G__49803;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});})(g__35326__auto___49800))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35326__auto___49800){
return (function (args){
return cljs.core.deref.call(null,g__35326__auto___49800);
});})(g__35326__auto___49800))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__35326__auto___49800){
return (function (seq49755){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49755));
});})(g__35326__auto___49800))
;


var g__35326__auto___49804 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__35326__auto___49804){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__29687__auto__ = [];
var len__29680__auto___49805 = arguments.length;
var i__29681__auto___49806 = (0);
while(true){
if((i__29681__auto___49806 < len__29680__auto___49805)){
args__29687__auto__.push((arguments[i__29681__auto___49806]));

var G__49807 = (i__29681__auto___49806 + (1));
i__29681__auto___49806 = G__49807;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});})(g__35326__auto___49804))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35326__auto___49804){
return (function (args){
return cljs.core.deref.call(null,g__35326__auto___49804);
});})(g__35326__auto___49804))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__35326__auto___49804){
return (function (seq49756){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49756));
});})(g__35326__auto___49804))
;


var g__35326__auto___49808 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__35326__auto___49808){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__29687__auto__ = [];
var len__29680__auto___49809 = arguments.length;
var i__29681__auto___49810 = (0);
while(true){
if((i__29681__auto___49810 < len__29680__auto___49809)){
args__29687__auto__.push((arguments[i__29681__auto___49810]));

var G__49811 = (i__29681__auto___49810 + (1));
i__29681__auto___49810 = G__49811;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});})(g__35326__auto___49808))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35326__auto___49808){
return (function (args){
return cljs.core.deref.call(null,g__35326__auto___49808);
});})(g__35326__auto___49808))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__35326__auto___49808){
return (function (seq49757){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49757));
});})(g__35326__auto___49808))
;


var g__35326__auto___49812 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__35326__auto___49812){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__29687__auto__ = [];
var len__29680__auto___49813 = arguments.length;
var i__29681__auto___49814 = (0);
while(true){
if((i__29681__auto___49814 < len__29680__auto___49813)){
args__29687__auto__.push((arguments[i__29681__auto___49814]));

var G__49815 = (i__29681__auto___49814 + (1));
i__29681__auto___49814 = G__49815;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});})(g__35326__auto___49812))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35326__auto___49812){
return (function (args){
return cljs.core.deref.call(null,g__35326__auto___49812);
});})(g__35326__auto___49812))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__35326__auto___49812){
return (function (seq49758){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49758));
});})(g__35326__auto___49812))
;


var g__35326__auto___49816 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__35326__auto___49816){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__29687__auto__ = [];
var len__29680__auto___49817 = arguments.length;
var i__29681__auto___49818 = (0);
while(true){
if((i__29681__auto___49818 < len__29680__auto___49817)){
args__29687__auto__.push((arguments[i__29681__auto___49818]));

var G__49819 = (i__29681__auto___49818 + (1));
i__29681__auto___49818 = G__49819;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});})(g__35326__auto___49816))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35326__auto___49816){
return (function (args){
return cljs.core.deref.call(null,g__35326__auto___49816);
});})(g__35326__auto___49816))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__35326__auto___49816){
return (function (seq49759){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49759));
});})(g__35326__auto___49816))
;


var g__35326__auto___49820 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__35326__auto___49820){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__29687__auto__ = [];
var len__29680__auto___49821 = arguments.length;
var i__29681__auto___49822 = (0);
while(true){
if((i__29681__auto___49822 < len__29680__auto___49821)){
args__29687__auto__.push((arguments[i__29681__auto___49822]));

var G__49823 = (i__29681__auto___49822 + (1));
i__29681__auto___49822 = G__49823;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});})(g__35326__auto___49820))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35326__auto___49820){
return (function (args){
return cljs.core.deref.call(null,g__35326__auto___49820);
});})(g__35326__auto___49820))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__35326__auto___49820){
return (function (seq49760){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49760));
});})(g__35326__auto___49820))
;


var g__35326__auto___49824 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__35326__auto___49824){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__29687__auto__ = [];
var len__29680__auto___49825 = arguments.length;
var i__29681__auto___49826 = (0);
while(true){
if((i__29681__auto___49826 < len__29680__auto___49825)){
args__29687__auto__.push((arguments[i__29681__auto___49826]));

var G__49827 = (i__29681__auto___49826 + (1));
i__29681__auto___49826 = G__49827;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});})(g__35326__auto___49824))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35326__auto___49824){
return (function (args){
return cljs.core.deref.call(null,g__35326__auto___49824);
});})(g__35326__auto___49824))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__35326__auto___49824){
return (function (seq49761){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49761));
});})(g__35326__auto___49824))
;


var g__35326__auto___49828 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__35326__auto___49828){
return (function cljs$spec$gen$alpha$string(var_args){
var args__29687__auto__ = [];
var len__29680__auto___49829 = arguments.length;
var i__29681__auto___49830 = (0);
while(true){
if((i__29681__auto___49830 < len__29680__auto___49829)){
args__29687__auto__.push((arguments[i__29681__auto___49830]));

var G__49831 = (i__29681__auto___49830 + (1));
i__29681__auto___49830 = G__49831;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});})(g__35326__auto___49828))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35326__auto___49828){
return (function (args){
return cljs.core.deref.call(null,g__35326__auto___49828);
});})(g__35326__auto___49828))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__35326__auto___49828){
return (function (seq49762){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49762));
});})(g__35326__auto___49828))
;


var g__35326__auto___49832 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__35326__auto___49832){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__29687__auto__ = [];
var len__29680__auto___49833 = arguments.length;
var i__29681__auto___49834 = (0);
while(true){
if((i__29681__auto___49834 < len__29680__auto___49833)){
args__29687__auto__.push((arguments[i__29681__auto___49834]));

var G__49835 = (i__29681__auto___49834 + (1));
i__29681__auto___49834 = G__49835;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});})(g__35326__auto___49832))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35326__auto___49832){
return (function (args){
return cljs.core.deref.call(null,g__35326__auto___49832);
});})(g__35326__auto___49832))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__35326__auto___49832){
return (function (seq49763){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49763));
});})(g__35326__auto___49832))
;


var g__35326__auto___49836 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__35326__auto___49836){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__29687__auto__ = [];
var len__29680__auto___49837 = arguments.length;
var i__29681__auto___49838 = (0);
while(true){
if((i__29681__auto___49838 < len__29680__auto___49837)){
args__29687__auto__.push((arguments[i__29681__auto___49838]));

var G__49839 = (i__29681__auto___49838 + (1));
i__29681__auto___49838 = G__49839;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});})(g__35326__auto___49836))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35326__auto___49836){
return (function (args){
return cljs.core.deref.call(null,g__35326__auto___49836);
});})(g__35326__auto___49836))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__35326__auto___49836){
return (function (seq49764){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49764));
});})(g__35326__auto___49836))
;


var g__35326__auto___49840 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__35326__auto___49840){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__29687__auto__ = [];
var len__29680__auto___49841 = arguments.length;
var i__29681__auto___49842 = (0);
while(true){
if((i__29681__auto___49842 < len__29680__auto___49841)){
args__29687__auto__.push((arguments[i__29681__auto___49842]));

var G__49843 = (i__29681__auto___49842 + (1));
i__29681__auto___49842 = G__49843;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});})(g__35326__auto___49840))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35326__auto___49840){
return (function (args){
return cljs.core.deref.call(null,g__35326__auto___49840);
});})(g__35326__auto___49840))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__35326__auto___49840){
return (function (seq49765){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49765));
});})(g__35326__auto___49840))
;


var g__35326__auto___49844 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__35326__auto___49844){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__29687__auto__ = [];
var len__29680__auto___49845 = arguments.length;
var i__29681__auto___49846 = (0);
while(true){
if((i__29681__auto___49846 < len__29680__auto___49845)){
args__29687__auto__.push((arguments[i__29681__auto___49846]));

var G__49847 = (i__29681__auto___49846 + (1));
i__29681__auto___49846 = G__49847;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});})(g__35326__auto___49844))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35326__auto___49844){
return (function (args){
return cljs.core.deref.call(null,g__35326__auto___49844);
});})(g__35326__auto___49844))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__35326__auto___49844){
return (function (seq49766){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49766));
});})(g__35326__auto___49844))
;


var g__35326__auto___49848 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__35326__auto___49848){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__29687__auto__ = [];
var len__29680__auto___49849 = arguments.length;
var i__29681__auto___49850 = (0);
while(true){
if((i__29681__auto___49850 < len__29680__auto___49849)){
args__29687__auto__.push((arguments[i__29681__auto___49850]));

var G__49851 = (i__29681__auto___49850 + (1));
i__29681__auto___49850 = G__49851;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});})(g__35326__auto___49848))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35326__auto___49848){
return (function (args){
return cljs.core.deref.call(null,g__35326__auto___49848);
});})(g__35326__auto___49848))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__35326__auto___49848){
return (function (seq49767){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49767));
});})(g__35326__auto___49848))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__29687__auto__ = [];
var len__29680__auto___49854 = arguments.length;
var i__29681__auto___49855 = (0);
while(true){
if((i__29681__auto___49855 < len__29680__auto___49854)){
args__29687__auto__.push((arguments[i__29681__auto___49855]));

var G__49856 = (i__29681__auto___49855 + (1));
i__29681__auto___49855 = G__49856;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__49852_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__49852_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq49853){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49853));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__49857_SHARP_){
return (new Date(p1__49857_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1497481553892