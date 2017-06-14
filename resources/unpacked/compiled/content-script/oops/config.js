// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('oops.config');
goog.require('cljs.core');
goog.require('cljs.core.constants');
oops.config.get_initial_runtime_config = (function oops$config$get_initial_runtime_config(){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$unexpected_DASH_empty_DASH_selector,cljs.core.cst$kw$warning_DASH_reporting,cljs.core.cst$kw$use_DASH_envelope,cljs.core.cst$kw$error_DASH_reporting,cljs.core.cst$kw$expected_DASH_function_DASH_value,cljs.core.cst$kw$child_DASH_factory,cljs.core.cst$kw$invalid_DASH_selector,cljs.core.cst$kw$unexpected_DASH_punching_DASH_selector,cljs.core.cst$kw$throw_DASH_errors_DASH_from_DASH_macro_DASH_call_DASH_sites,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,cljs.core.cst$kw$unexpected_DASH_soft_DASH_selector,cljs.core.cst$kw$missing_DASH_object_DASH_key],[cljs.core.cst$kw$warn,cljs.core.cst$kw$console,true,cljs.core.cst$kw$throw,cljs.core.cst$kw$error,cljs.core.cst$kw$js_DASH_obj,cljs.core.cst$kw$error,cljs.core.cst$kw$warn,true,cljs.core.cst$kw$error,cljs.core.cst$kw$warn,cljs.core.cst$kw$error]);
});
oops.config._STAR_runtime_config_STAR_ = oops.config.get_initial_runtime_config();
oops.config.set_current_runtime_config_BANG_ = (function oops$config$set_current_runtime_config_BANG_(new_config){
if(cljs.core.map_QMARK_(new_config)){
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
var args__9188__auto__ = [];
var len__9181__auto___19692 = arguments.length;
var i__9182__auto___19693 = (0);
while(true){
if((i__9182__auto___19693 < len__9181__auto___19692)){
args__9188__auto__.push((arguments[i__9182__auto___19693]));

var G__19694 = (i__9182__auto___19693 + (1));
i__9182__auto___19693 = G__19694;
continue;
} else {
}
break;
}

var argseq__9189__auto__ = ((((1) < args__9188__auto__.length))?(new cljs.core.IndexedSeq(args__9188__auto__.slice((1)),(0),null)):null);
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9189__auto__);
});

oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f_or_map,args){
if(cljs.core.map_QMARK_(f_or_map)){
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.array_seq([f_or_map], 0));
} else {
return oops.config.set_current_runtime_config_BANG_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_or_map,oops.config.get_current_runtime_config(),args));
}
});

oops.config.update_current_runtime_config_BANG_.cljs$lang$maxFixedArity = (1);

oops.config.update_current_runtime_config_BANG_.cljs$lang$applyTo = (function (seq19690){
var G__19691 = cljs.core.first(seq19690);
var seq19690__$1 = cljs.core.next(seq19690);
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19691,seq19690__$1);
});

oops.config.get_config_key = (function oops$config$get_config_key(var_args){
var args__9188__auto__ = [];
var len__9181__auto___19702 = arguments.length;
var i__9182__auto___19703 = (0);
while(true){
if((i__9182__auto___19703 < len__9181__auto___19702)){
args__9188__auto__.push((arguments[i__9182__auto___19703]));

var G__19704 = (i__9182__auto___19703 + (1));
i__9182__auto___19703 = G__19704;
continue;
} else {
}
break;
}

var argseq__9189__auto__ = ((((1) < args__9188__auto__.length))?(new cljs.core.IndexedSeq(args__9188__auto__.slice((1)),(0),null)):null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9189__auto__);
});

oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__19697){
var vec__19698 = p__19697;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19698,(0),null);
var G__19701 = (function (){var or__7960__auto__ = config;
if(cljs.core.truth_(or__7960__auto__)){
return or__7960__auto__;
} else {
return oops.config.get_current_runtime_config();
}
})();
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__19701) : key.call(null,G__19701));
});

oops.config.get_config_key.cljs$lang$maxFixedArity = (1);

oops.config.get_config_key.cljs$lang$applyTo = (function (seq19695){
var G__19696 = cljs.core.first(seq19695);
var seq19695__$1 = cljs.core.next(seq19695);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(G__19696,seq19695__$1);
});

oops.config.has_config_key_QMARK_ = (function oops$config$has_config_key_QMARK_(var_args){
var args__9188__auto__ = [];
var len__9181__auto___19711 = arguments.length;
var i__9182__auto___19712 = (0);
while(true){
if((i__9182__auto___19712 < len__9181__auto___19711)){
args__9188__auto__.push((arguments[i__9182__auto___19712]));

var G__19713 = (i__9182__auto___19712 + (1));
i__9182__auto___19712 = G__19713;
continue;
} else {
}
break;
}

var argseq__9189__auto__ = ((((1) < args__9188__auto__.length))?(new cljs.core.IndexedSeq(args__9188__auto__.slice((1)),(0),null)):null);
return oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9189__auto__);
});

oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__19707){
var vec__19708 = p__19707;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19708,(0),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$oops$config_SLASH_not_DASH_found,cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var or__7960__auto__ = config;
if(cljs.core.truth_(or__7960__auto__)){
return or__7960__auto__;
} else {
return oops.config.get_current_runtime_config();
}
})(),key,cljs.core.cst$kw$oops$config_SLASH_not_DASH_found));
});

oops.config.has_config_key_QMARK_.cljs$lang$maxFixedArity = (1);

oops.config.has_config_key_QMARK_.cljs$lang$applyTo = (function (seq19705){
var G__19706 = cljs.core.first(seq19705);
var seq19705__$1 = cljs.core.next(seq19705);
return oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__19706,seq19705__$1);
});

oops.config.get_error_reporting = (function oops$config$get_error_reporting(var_args){
var args__9188__auto__ = [];
var len__9181__auto___19719 = arguments.length;
var i__9182__auto___19720 = (0);
while(true){
if((i__9182__auto___19720 < len__9181__auto___19719)){
args__9188__auto__.push((arguments[i__9182__auto___19720]));

var G__19721 = (i__9182__auto___19720 + (1));
i__9182__auto___19720 = G__19721;
continue;
} else {
}
break;
}

var argseq__9189__auto__ = ((((0) < args__9188__auto__.length))?(new cljs.core.IndexedSeq(args__9188__auto__.slice((0)),(0),null)):null);
return oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__9189__auto__);
});

oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__19715){
var vec__19716 = p__19715;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19716,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error_DASH_reporting,cljs.core.array_seq([config], 0));
});

oops.config.get_error_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_error_reporting.cljs$lang$applyTo = (function (seq19714){
return oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19714));
});

oops.config.get_warning_reporting = (function oops$config$get_warning_reporting(var_args){
var args__9188__auto__ = [];
var len__9181__auto___19727 = arguments.length;
var i__9182__auto___19728 = (0);
while(true){
if((i__9182__auto___19728 < len__9181__auto___19727)){
args__9188__auto__.push((arguments[i__9182__auto___19728]));

var G__19729 = (i__9182__auto___19728 + (1));
i__9182__auto___19728 = G__19729;
continue;
} else {
}
break;
}

var argseq__9189__auto__ = ((((0) < args__9188__auto__.length))?(new cljs.core.IndexedSeq(args__9188__auto__.slice((0)),(0),null)):null);
return oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__9189__auto__);
});

oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__19723){
var vec__19724 = p__19723;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19724,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warning_DASH_reporting,cljs.core.array_seq([config], 0));
});

oops.config.get_warning_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_warning_reporting.cljs$lang$applyTo = (function (seq19722){
return oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19722));
});

oops.config.get_suppress_reporting = (function oops$config$get_suppress_reporting(var_args){
var args__9188__auto__ = [];
var len__9181__auto___19735 = arguments.length;
var i__9182__auto___19736 = (0);
while(true){
if((i__9182__auto___19736 < len__9181__auto___19735)){
args__9188__auto__.push((arguments[i__9182__auto___19736]));

var G__19737 = (i__9182__auto___19736 + (1));
i__9182__auto___19736 = G__19737;
continue;
} else {
}
break;
}

var argseq__9189__auto__ = ((((0) < args__9188__auto__.length))?(new cljs.core.IndexedSeq(args__9188__auto__.slice((0)),(0),null)):null);
return oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__9189__auto__);
});

oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__19731){
var vec__19732 = p__19731;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19732,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$suppress_DASH_reporting,cljs.core.array_seq([config], 0));
});

oops.config.get_suppress_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_suppress_reporting.cljs$lang$applyTo = (function (seq19730){
return oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19730));
});

oops.config.get_child_factory = (function oops$config$get_child_factory(var_args){
var args__9188__auto__ = [];
var len__9181__auto___19743 = arguments.length;
var i__9182__auto___19744 = (0);
while(true){
if((i__9182__auto___19744 < len__9181__auto___19743)){
args__9188__auto__.push((arguments[i__9182__auto___19744]));

var G__19745 = (i__9182__auto___19744 + (1));
i__9182__auto___19744 = G__19745;
continue;
} else {
}
break;
}

var argseq__9189__auto__ = ((((0) < args__9188__auto__.length))?(new cljs.core.IndexedSeq(args__9188__auto__.slice((0)),(0),null)):null);
return oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic(argseq__9189__auto__);
});

oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic = (function (p__19739){
var vec__19740 = p__19739;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19740,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$child_DASH_factory,cljs.core.array_seq([config], 0));
});

oops.config.get_child_factory.cljs$lang$maxFixedArity = (0);

oops.config.get_child_factory.cljs$lang$applyTo = (function (seq19738){
return oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19738));
});

oops.config.set_child_factory_BANG_ = (function oops$config$set_child_factory_BANG_(new_factory_fn){
return oops.config.update_current_runtime_config_BANG_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$child_DASH_factory,new_factory_fn], null));
});
oops.config.throw_errors_from_macro_call_sites_QMARK_ = (function oops$config$throw_errors_from_macro_call_sites_QMARK_(var_args){
var args__9188__auto__ = [];
var len__9181__auto___19751 = arguments.length;
var i__9182__auto___19752 = (0);
while(true){
if((i__9182__auto___19752 < len__9181__auto___19751)){
args__9188__auto__.push((arguments[i__9182__auto___19752]));

var G__19753 = (i__9182__auto___19752 + (1));
i__9182__auto___19752 = G__19753;
continue;
} else {
}
break;
}

var argseq__9189__auto__ = ((((0) < args__9188__auto__.length))?(new cljs.core.IndexedSeq(args__9188__auto__.slice((0)),(0),null)):null);
return oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__9189__auto__);
});

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__19747){
var vec__19748 = p__19747;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19748,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$throw_DASH_errors_DASH_from_DASH_macro_DASH_call_DASH_sites,cljs.core.array_seq([config], 0)) === true;
});

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$maxFixedArity = (0);

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$applyTo = (function (seq19746){
return oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19746));
});

oops.config.use_envelope_QMARK_ = (function oops$config$use_envelope_QMARK_(var_args){
var args__9188__auto__ = [];
var len__9181__auto___19759 = arguments.length;
var i__9182__auto___19760 = (0);
while(true){
if((i__9182__auto___19760 < len__9181__auto___19759)){
args__9188__auto__.push((arguments[i__9182__auto___19760]));

var G__19761 = (i__9182__auto___19760 + (1));
i__9182__auto___19760 = G__19761;
continue;
} else {
}
break;
}

var argseq__9189__auto__ = ((((0) < args__9188__auto__.length))?(new cljs.core.IndexedSeq(args__9188__auto__.slice((0)),(0),null)):null);
return oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__9189__auto__);
});

oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__19755){
var vec__19756 = p__19755;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19756,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$use_DASH_envelope,cljs.core.array_seq([config], 0)) === true;
});

oops.config.use_envelope_QMARK_.cljs$lang$maxFixedArity = (0);

oops.config.use_envelope_QMARK_.cljs$lang$applyTo = (function (seq19754){
return oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19754));
});

