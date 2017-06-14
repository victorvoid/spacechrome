// Compiled by ClojureScript 1.9.562 {}
goog.provide('chromex.support');
goog.require('cljs.core');
goog.require('goog.object');
chromex.support.prepare_final_args_array = (function chromex$support$prepare_final_args_array(arg_descriptors,api){
var should_omit_QMARK_ = (function (p__46566){
var vec__46567 = p__46566;
var val = cljs.core.nth.call(null,vec__46567,(0),null);
var param_name = cljs.core.nth.call(null,vec__46567,(1),null);
var can_be_omitted_QMARK_ = cljs.core.nth.call(null,vec__46567,(2),null);
if(cljs.core.keyword_identical_QMARK_.call(null,val,new cljs.core.Keyword(null,"omit","omit",-1917972325))){
if(cljs.core.truth_(can_be_omitted_QMARK_)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Parameter '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(param_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("' cannot be omitted in a call to '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(api),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" Parameter not declared as optional.")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("can-be-omitted?")].join('')));
}

return true;
} else {
return null;
}
});
return cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.first,cljs.core.remove.call(null,should_omit_QMARK_,arg_descriptors)));
});

//# sourceMappingURL=support.js.map?rel=1497481551569