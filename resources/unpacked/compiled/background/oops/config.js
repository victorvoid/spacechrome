// Compiled by ClojureScript 1.9.562 {}
goog.provide('oops.config');
goog.require('cljs.core');
oops.config.get_initial_runtime_config = (function oops$config$get_initial_runtime_config(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unexpected-empty-selector","unexpected-empty-selector",-572791900),new cljs.core.Keyword(null,"warning-reporting","warning-reporting",-319054391),new cljs.core.Keyword(null,"use-envelope","use-envelope",-2007197780),new cljs.core.Keyword(null,"error-reporting","error-reporting",1274700782),new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.Keyword(null,"child-factory","child-factory",-1019029066),new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.Keyword(null,"unexpected-punching-selector","unexpected-punching-selector",-1934135338),new cljs.core.Keyword(null,"throw-errors-from-macro-call-sites","throw-errors-from-macro-call-sites",-1338743049),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.Keyword(null,"unexpected-soft-selector","unexpected-soft-selector",-1117708580),new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731)],[new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"console","console",1228072057),true,new cljs.core.Keyword(null,"throw","throw",-1044625833),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"js-obj","js-obj",-1298148277),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"warn","warn",-436710552),true,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"error","error",-978969032)]);
});
oops.config._STAR_runtime_config_STAR_ = oops.config.get_initial_runtime_config.call(null);
oops.config.set_current_runtime_config_BANG_ = (function oops$config$set_current_runtime_config_BANG_(new_config){
if(cljs.core.map_QMARK_.call(null,new_config)){
} else {
throw (new Error("Assert failed: (map? new-config)"));
}

oops.config._STAR_runtime_config_STAR_ = new_config;

return new_config;
});
oops.config.get_current_runtime_config = (function oops$config$get_current_runtime_config(){
return oops.config._STAR_runtime_config_STAR_;
});
oops.config.update_current_runtime_config_BANG_ = (function oops$config$update_current_runtime_config_BANG_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___46468 = arguments.length;
var i__29681__auto___46469 = (0);
while(true){
if((i__29681__auto___46469 < len__29680__auto___46468)){
args__29687__auto__.push((arguments[i__29681__auto___46469]));

var G__46470 = (i__29681__auto___46469 + (1));
i__29681__auto___46469 = G__46470;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((1) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((1)),(0),null)):null);
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29688__auto__);
});

oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f_or_map,args){
if(cljs.core.map_QMARK_.call(null,f_or_map)){
return oops.config.update_current_runtime_config_BANG_.call(null,cljs.core.merge,f_or_map);
} else {
return oops.config.set_current_runtime_config_BANG_.call(null,cljs.core.apply.call(null,f_or_map,oops.config.get_current_runtime_config.call(null),args));
}
});

oops.config.update_current_runtime_config_BANG_.cljs$lang$maxFixedArity = (1);

oops.config.update_current_runtime_config_BANG_.cljs$lang$applyTo = (function (seq46466){
var G__46467 = cljs.core.first.call(null,seq46466);
var seq46466__$1 = cljs.core.next.call(null,seq46466);
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46467,seq46466__$1);
});

oops.config.get_config_key = (function oops$config$get_config_key(var_args){
var args__29687__auto__ = [];
var len__29680__auto___46477 = arguments.length;
var i__29681__auto___46478 = (0);
while(true){
if((i__29681__auto___46478 < len__29680__auto___46477)){
args__29687__auto__.push((arguments[i__29681__auto___46478]));

var G__46479 = (i__29681__auto___46478 + (1));
i__29681__auto___46478 = G__46479;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((1) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((1)),(0),null)):null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29688__auto__);
});

oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__46473){
var vec__46474 = p__46473;
var config = cljs.core.nth.call(null,vec__46474,(0),null);
return key.call(null,(function (){var or__28459__auto__ = config;
if(cljs.core.truth_(or__28459__auto__)){
return or__28459__auto__;
} else {
return oops.config.get_current_runtime_config.call(null);
}
})());
});

oops.config.get_config_key.cljs$lang$maxFixedArity = (1);

oops.config.get_config_key.cljs$lang$applyTo = (function (seq46471){
var G__46472 = cljs.core.first.call(null,seq46471);
var seq46471__$1 = cljs.core.next.call(null,seq46471);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(G__46472,seq46471__$1);
});

oops.config.has_config_key_QMARK_ = (function oops$config$has_config_key_QMARK_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___46486 = arguments.length;
var i__29681__auto___46487 = (0);
while(true){
if((i__29681__auto___46487 < len__29680__auto___46486)){
args__29687__auto__.push((arguments[i__29681__auto___46487]));

var G__46488 = (i__29681__auto___46487 + (1));
i__29681__auto___46487 = G__46488;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((1) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((1)),(0),null)):null);
return oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29688__auto__);
});

oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__46482){
var vec__46483 = p__46482;
var config = cljs.core.nth.call(null,vec__46483,(0),null);
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("oops.config","not-found","oops.config/not-found",105443457),cljs.core.get.call(null,(function (){var or__28459__auto__ = config;
if(cljs.core.truth_(or__28459__auto__)){
return or__28459__auto__;
} else {
return oops.config.get_current_runtime_config.call(null);
}
})(),key,new cljs.core.Keyword("oops.config","not-found","oops.config/not-found",105443457)));
});

oops.config.has_config_key_QMARK_.cljs$lang$maxFixedArity = (1);

oops.config.has_config_key_QMARK_.cljs$lang$applyTo = (function (seq46480){
var G__46481 = cljs.core.first.call(null,seq46480);
var seq46480__$1 = cljs.core.next.call(null,seq46480);
return oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__46481,seq46480__$1);
});

oops.config.get_error_reporting = (function oops$config$get_error_reporting(var_args){
var args__29687__auto__ = [];
var len__29680__auto___46494 = arguments.length;
var i__29681__auto___46495 = (0);
while(true){
if((i__29681__auto___46495 < len__29680__auto___46494)){
args__29687__auto__.push((arguments[i__29681__auto___46495]));

var G__46496 = (i__29681__auto___46495 + (1));
i__29681__auto___46495 = G__46496;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});

oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__46490){
var vec__46491 = p__46490;
var config = cljs.core.nth.call(null,vec__46491,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"error-reporting","error-reporting",1274700782),config);
});

oops.config.get_error_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_error_reporting.cljs$lang$applyTo = (function (seq46489){
return oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46489));
});

oops.config.get_warning_reporting = (function oops$config$get_warning_reporting(var_args){
var args__29687__auto__ = [];
var len__29680__auto___46502 = arguments.length;
var i__29681__auto___46503 = (0);
while(true){
if((i__29681__auto___46503 < len__29680__auto___46502)){
args__29687__auto__.push((arguments[i__29681__auto___46503]));

var G__46504 = (i__29681__auto___46503 + (1));
i__29681__auto___46503 = G__46504;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});

oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__46498){
var vec__46499 = p__46498;
var config = cljs.core.nth.call(null,vec__46499,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"warning-reporting","warning-reporting",-319054391),config);
});

oops.config.get_warning_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_warning_reporting.cljs$lang$applyTo = (function (seq46497){
return oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46497));
});

oops.config.get_suppress_reporting = (function oops$config$get_suppress_reporting(var_args){
var args__29687__auto__ = [];
var len__29680__auto___46510 = arguments.length;
var i__29681__auto___46511 = (0);
while(true){
if((i__29681__auto___46511 < len__29680__auto___46510)){
args__29687__auto__.push((arguments[i__29681__auto___46511]));

var G__46512 = (i__29681__auto___46511 + (1));
i__29681__auto___46511 = G__46512;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});

oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__46506){
var vec__46507 = p__46506;
var config = cljs.core.nth.call(null,vec__46507,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"suppress-reporting","suppress-reporting",43885458),config);
});

oops.config.get_suppress_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_suppress_reporting.cljs$lang$applyTo = (function (seq46505){
return oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46505));
});

oops.config.get_child_factory = (function oops$config$get_child_factory(var_args){
var args__29687__auto__ = [];
var len__29680__auto___46518 = arguments.length;
var i__29681__auto___46519 = (0);
while(true){
if((i__29681__auto___46519 < len__29680__auto___46518)){
args__29687__auto__.push((arguments[i__29681__auto___46519]));

var G__46520 = (i__29681__auto___46519 + (1));
i__29681__auto___46519 = G__46520;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});

oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic = (function (p__46514){
var vec__46515 = p__46514;
var config = cljs.core.nth.call(null,vec__46515,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"child-factory","child-factory",-1019029066),config);
});

oops.config.get_child_factory.cljs$lang$maxFixedArity = (0);

oops.config.get_child_factory.cljs$lang$applyTo = (function (seq46513){
return oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46513));
});

oops.config.set_child_factory_BANG_ = (function oops$config$set_child_factory_BANG_(new_factory_fn){
return oops.config.update_current_runtime_config_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"child-factory","child-factory",-1019029066),new_factory_fn], null));
});
oops.config.throw_errors_from_macro_call_sites_QMARK_ = (function oops$config$throw_errors_from_macro_call_sites_QMARK_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___46526 = arguments.length;
var i__29681__auto___46527 = (0);
while(true){
if((i__29681__auto___46527 < len__29680__auto___46526)){
args__29687__auto__.push((arguments[i__29681__auto___46527]));

var G__46528 = (i__29681__auto___46527 + (1));
i__29681__auto___46527 = G__46528;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__46522){
var vec__46523 = p__46522;
var config = cljs.core.nth.call(null,vec__46523,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"throw-errors-from-macro-call-sites","throw-errors-from-macro-call-sites",-1338743049),config) === true;
});

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$maxFixedArity = (0);

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$applyTo = (function (seq46521){
return oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46521));
});

oops.config.use_envelope_QMARK_ = (function oops$config$use_envelope_QMARK_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___46534 = arguments.length;
var i__29681__auto___46535 = (0);
while(true){
if((i__29681__auto___46535 < len__29680__auto___46534)){
args__29687__auto__.push((arguments[i__29681__auto___46535]));

var G__46536 = (i__29681__auto___46535 + (1));
i__29681__auto___46535 = G__46536;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});

oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__46530){
var vec__46531 = p__46530;
var config = cljs.core.nth.call(null,vec__46531,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"use-envelope","use-envelope",-2007197780),config) === true;
});

oops.config.use_envelope_QMARK_.cljs$lang$maxFixedArity = (0);

oops.config.use_envelope_QMARK_.cljs$lang$applyTo = (function (seq46529){
return oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46529));
});


//# sourceMappingURL=config.js.map?rel=1497481551394