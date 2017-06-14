// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('oops.messages');
goog.require('cljs.core');
goog.require('cljs.core.constants');
oops.messages.post_process_message = (function oops$messages$post_process_message(msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Oops"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('');
});
if(typeof oops.messages.runtime_message !== 'undefined'){
} else {
oops.messages.runtime_message = (function (){var method_table__8991__auto__ = (function (){var G__20073 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20073) : cljs.core.atom.call(null,G__20073));
})();
var prefer_table__8992__auto__ = (function (){var G__20074 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20074) : cljs.core.atom.call(null,G__20074));
})();
var method_cache__8993__auto__ = (function (){var G__20075 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20075) : cljs.core.atom.call(null,G__20075));
})();
var cached_hierarchy__8994__auto__ = (function (){var G__20076 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20076) : cljs.core.atom.call(null,G__20076));
})();
var hierarchy__8995__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("oops.messages","runtime-message"),((function (method_table__8991__auto__,prefer_table__8992__auto__,method_cache__8993__auto__,cached_hierarchy__8994__auto__,hierarchy__8995__auto__){
return (function() { 
var G__20077__delegate = function (type,_){
return type;
};
var G__20077 = function (type,var_args){
var _ = null;
if (arguments.length > 1) {
var G__20078__i = 0, G__20078__a = new Array(arguments.length -  1);
while (G__20078__i < G__20078__a.length) {G__20078__a[G__20078__i] = arguments[G__20078__i + 1]; ++G__20078__i;}
  _ = new cljs.core.IndexedSeq(G__20078__a,0,null);
} 
return G__20077__delegate.call(this,type,_);};
G__20077.cljs$lang$maxFixedArity = 1;
G__20077.cljs$lang$applyTo = (function (arglist__20079){
var type = cljs.core.first(arglist__20079);
var _ = cljs.core.rest(arglist__20079);
return G__20077__delegate(type,_);
});
G__20077.cljs$core$IFn$_invoke$arity$variadic = G__20077__delegate;
return G__20077;
})()
;})(method_table__8991__auto__,prefer_table__8992__auto__,method_cache__8993__auto__,cached_hierarchy__8994__auto__,hierarchy__8995__auto__))
,cljs.core.cst$kw$default,hierarchy__8995__auto__,method_table__8991__auto__,prefer_table__8992__auto__,method_cache__8993__auto__,cached_hierarchy__8994__auto__));
})();
}
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,(function (_type,info){
var map__20080 = info;
var map__20080__$1 = ((((!((map__20080 == null)))?((((map__20080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20080.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20080):map__20080);
var flavor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20080__$1,cljs.core.cst$kw$flavor);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20080__$1,cljs.core.cst$kw$path);
return (oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1 ? oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unexpected object value ("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(flavor),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((!(cljs.core.empty_QMARK_(path)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" on key path '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'")].join(''):null))].join('')) : oops.messages.post_process_message.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unexpected object value ("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(flavor),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((!(cljs.core.empty_QMARK_(path)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" on key path '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'")].join(''):null))].join('')));
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$expected_DASH_function_DASH_value,(function (_type,info){
var map__20082 = info;
var map__20082__$1 = ((((!((map__20082 == null)))?((((map__20082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20082.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20082):map__20082);
var soft_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20082__$1,cljs.core.cst$kw$soft_QMARK_);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20082__$1,cljs.core.cst$kw$path);
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20082__$1,cljs.core.cst$kw$fn);
return (oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1 ? oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Expected a function"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(soft_QMARK_)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" or nil")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((!(cljs.core.empty_QMARK_(path)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" on key path '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", got <"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.typeOf(fn)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("> instead")].join('')) : oops.messages.post_process_message.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Expected a function"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(soft_QMARK_)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" or nil")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((!(cljs.core.empty_QMARK_(path)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" on key path '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", got <"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.typeOf(fn)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("> instead")].join('')));
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$missing_DASH_object_DASH_key,(function (_type,info){
var map__20084 = info;
var map__20084__$1 = ((((!((map__20084 == null)))?((((map__20084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20084.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20084):map__20084);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20084__$1,cljs.core.cst$kw$key);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20084__$1,cljs.core.cst$kw$path);
return (oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1 ? oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Missing expected object key '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((!((cljs.core.empty_QMARK_(path)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,key))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" on key path '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'")].join(''):null))].join('')) : oops.messages.post_process_message.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Missing expected object key '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((!((cljs.core.empty_QMARK_(path)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,key))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" on key path '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'")].join(''):null))].join('')));
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$invalid_DASH_selector,(function (_type){
return (oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1 ? oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1("Invalid selector") : oops.messages.post_process_message.call(null,"Invalid selector"));
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$unexpected_DASH_empty_DASH_selector,(function (_type){
return (oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1 ? oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unexpected empty selector")].join('')) : oops.messages.post_process_message.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unexpected empty selector")].join('')));
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$unexpected_DASH_punching_DASH_selector,(function (_type){
return (oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1 ? oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unexpected punching selector (\"!\" makes sense only with oset!)")].join('')) : oops.messages.post_process_message.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unexpected punching selector (\"!\" makes sense only with oset!)")].join('')));
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$unexpected_DASH_soft_DASH_selector,(function (_type){
return (oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1 ? oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unexpected soft selector (\"?\" does not make sense with oset!)")].join('')) : oops.messages.post_process_message.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unexpected soft selector (\"?\" does not make sense with oset!)")].join('')));
}));
