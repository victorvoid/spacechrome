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
var len__29680__auto___30440 = arguments.length;
var i__29681__auto___30441 = (0);
while(true){
if((i__29681__auto___30441 < len__29680__auto___30440)){
args__29687__auto__.push((arguments[i__29681__auto___30441]));

var G__30442 = (i__29681__auto___30441 + (1));
i__29681__auto___30441 = G__30442;
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

oops.config.update_current_runtime_config_BANG_.cljs$lang$applyTo = (function (seq30438){
var G__30439 = cljs.core.first.call(null,seq30438);
var seq30438__$1 = cljs.core.next.call(null,seq30438);
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30439,seq30438__$1);
});

oops.config.get_config_key = (function oops$config$get_config_key(var_args){
var args__29687__auto__ = [];
var len__29680__auto___30449 = arguments.length;
var i__29681__auto___30450 = (0);
while(true){
if((i__29681__auto___30450 < len__29680__auto___30449)){
args__29687__auto__.push((arguments[i__29681__auto___30450]));

var G__30451 = (i__29681__auto___30450 + (1));
i__29681__auto___30450 = G__30451;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((1) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((1)),(0),null)):null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29688__auto__);
});

oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__30445){
var vec__30446 = p__30445;
var config = cljs.core.nth.call(null,vec__30446,(0),null);
return key.call(null,(function (){var or__28459__auto__ = config;
if(cljs.core.truth_(or__28459__auto__)){
return or__28459__auto__;
} else {
return oops.config.get_current_runtime_config.call(null);
}
})());
});

oops.config.get_config_key.cljs$lang$maxFixedArity = (1);

oops.config.get_config_key.cljs$lang$applyTo = (function (seq30443){
var G__30444 = cljs.core.first.call(null,seq30443);
var seq30443__$1 = cljs.core.next.call(null,seq30443);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(G__30444,seq30443__$1);
});

oops.config.has_config_key_QMARK_ = (function oops$config$has_config_key_QMARK_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___30458 = arguments.length;
var i__29681__auto___30459 = (0);
while(true){
if((i__29681__auto___30459 < len__29680__auto___30458)){
args__29687__auto__.push((arguments[i__29681__auto___30459]));

var G__30460 = (i__29681__auto___30459 + (1));
i__29681__auto___30459 = G__30460;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((1) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((1)),(0),null)):null);
return oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29688__auto__);
});

oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__30454){
var vec__30455 = p__30454;
var config = cljs.core.nth.call(null,vec__30455,(0),null);
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("oops.config","not-found","oops.config/not-found",105443457),cljs.core.get.call(null,(function (){var or__28459__auto__ = config;
if(cljs.core.truth_(or__28459__auto__)){
return or__28459__auto__;
} else {
return oops.config.get_current_runtime_config.call(null);
}
})(),key,new cljs.core.Keyword("oops.config","not-found","oops.config/not-found",105443457)));
});

oops.config.has_config_key_QMARK_.cljs$lang$maxFixedArity = (1);

oops.config.has_config_key_QMARK_.cljs$lang$applyTo = (function (seq30452){
var G__30453 = cljs.core.first.call(null,seq30452);
var seq30452__$1 = cljs.core.next.call(null,seq30452);
return oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__30453,seq30452__$1);
});

oops.config.get_error_reporting = (function oops$config$get_error_reporting(var_args){
var args__29687__auto__ = [];
var len__29680__auto___30466 = arguments.length;
var i__29681__auto___30467 = (0);
while(true){
if((i__29681__auto___30467 < len__29680__auto___30466)){
args__29687__auto__.push((arguments[i__29681__auto___30467]));

var G__30468 = (i__29681__auto___30467 + (1));
i__29681__auto___30467 = G__30468;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});

oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__30462){
var vec__30463 = p__30462;
var config = cljs.core.nth.call(null,vec__30463,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"error-reporting","error-reporting",1274700782),config);
});

oops.config.get_error_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_error_reporting.cljs$lang$applyTo = (function (seq30461){
return oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30461));
});

oops.config.get_warning_reporting = (function oops$config$get_warning_reporting(var_args){
var args__29687__auto__ = [];
var len__29680__auto___30474 = arguments.length;
var i__29681__auto___30475 = (0);
while(true){
if((i__29681__auto___30475 < len__29680__auto___30474)){
args__29687__auto__.push((arguments[i__29681__auto___30475]));

var G__30476 = (i__29681__auto___30475 + (1));
i__29681__auto___30475 = G__30476;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});

oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__30470){
var vec__30471 = p__30470;
var config = cljs.core.nth.call(null,vec__30471,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"warning-reporting","warning-reporting",-319054391),config);
});

oops.config.get_warning_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_warning_reporting.cljs$lang$applyTo = (function (seq30469){
return oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30469));
});

oops.config.get_suppress_reporting = (function oops$config$get_suppress_reporting(var_args){
var args__29687__auto__ = [];
var len__29680__auto___30482 = arguments.length;
var i__29681__auto___30483 = (0);
while(true){
if((i__29681__auto___30483 < len__29680__auto___30482)){
args__29687__auto__.push((arguments[i__29681__auto___30483]));

var G__30484 = (i__29681__auto___30483 + (1));
i__29681__auto___30483 = G__30484;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});

oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__30478){
var vec__30479 = p__30478;
var config = cljs.core.nth.call(null,vec__30479,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"suppress-reporting","suppress-reporting",43885458),config);
});

oops.config.get_suppress_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_suppress_reporting.cljs$lang$applyTo = (function (seq30477){
return oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30477));
});

oops.config.get_child_factory = (function oops$config$get_child_factory(var_args){
var args__29687__auto__ = [];
var len__29680__auto___30490 = arguments.length;
var i__29681__auto___30491 = (0);
while(true){
if((i__29681__auto___30491 < len__29680__auto___30490)){
args__29687__auto__.push((arguments[i__29681__auto___30491]));

var G__30492 = (i__29681__auto___30491 + (1));
i__29681__auto___30491 = G__30492;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});

oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic = (function (p__30486){
var vec__30487 = p__30486;
var config = cljs.core.nth.call(null,vec__30487,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"child-factory","child-factory",-1019029066),config);
});

oops.config.get_child_factory.cljs$lang$maxFixedArity = (0);

oops.config.get_child_factory.cljs$lang$applyTo = (function (seq30485){
return oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30485));
});

oops.config.set_child_factory_BANG_ = (function oops$config$set_child_factory_BANG_(new_factory_fn){
return oops.config.update_current_runtime_config_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"child-factory","child-factory",-1019029066),new_factory_fn], null));
});
oops.config.throw_errors_from_macro_call_sites_QMARK_ = (function oops$config$throw_errors_from_macro_call_sites_QMARK_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___30498 = arguments.length;
var i__29681__auto___30499 = (0);
while(true){
if((i__29681__auto___30499 < len__29680__auto___30498)){
args__29687__auto__.push((arguments[i__29681__auto___30499]));

var G__30500 = (i__29681__auto___30499 + (1));
i__29681__auto___30499 = G__30500;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__30494){
var vec__30495 = p__30494;
var config = cljs.core.nth.call(null,vec__30495,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"throw-errors-from-macro-call-sites","throw-errors-from-macro-call-sites",-1338743049),config) === true;
});

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$maxFixedArity = (0);

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$applyTo = (function (seq30493){
return oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30493));
});

oops.config.use_envelope_QMARK_ = (function oops$config$use_envelope_QMARK_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___30506 = arguments.length;
var i__29681__auto___30507 = (0);
while(true){
if((i__29681__auto___30507 < len__29680__auto___30506)){
args__29687__auto__.push((arguments[i__29681__auto___30507]));

var G__30508 = (i__29681__auto___30507 + (1));
i__29681__auto___30507 = G__30508;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});

oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__30502){
var vec__30503 = p__30502;
var config = cljs.core.nth.call(null,vec__30503,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"use-envelope","use-envelope",-2007197780),config) === true;
});

oops.config.use_envelope_QMARK_.cljs$lang$maxFixedArity = (0);

oops.config.use_envelope_QMARK_.cljs$lang$applyTo = (function (seq30501){
return oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30501));
});


//# sourceMappingURL=config.js.map?rel=1497481535051