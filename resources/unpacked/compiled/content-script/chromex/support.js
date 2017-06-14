// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('chromex.support');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.object');
chromex.support.prepare_final_args_array = (function chromex$support$prepare_final_args_array(arg_descriptors,api){
var should_omit_QMARK_ = (function (p__14315){
var vec__14316 = p__14315;
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14316,(0),null);
var param_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14316,(1),null);
var can_be_omitted_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14316,(2),null);
if(cljs.core.keyword_identical_QMARK_(val,cljs.core.cst$kw$omit)){
if(cljs.core.truth_(can_be_omitted_QMARK_)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Parameter '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(param_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("' cannot be omitted in a call to '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(api),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" Parameter not declared as optional.")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("can-be-omitted?")].join('')));
}

return true;
} else {
return null;
}
});
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(should_omit_QMARK_,arg_descriptors)));
});
