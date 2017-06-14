// Compiled by ClojureScript 1.9.562 {}
goog.provide('oops.messages');
goog.require('cljs.core');
oops.messages.post_process_message = (function oops$messages$post_process_message(msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Oops"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('');
});
if(typeof oops.messages.runtime_message !== 'undefined'){
} else {
oops.messages.runtime_message = (function (){var method_table__29490__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__29491__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__29492__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__29493__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__29494__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"oops.messages","runtime-message"),((function (method_table__29490__auto__,prefer_table__29491__auto__,method_cache__29492__auto__,cached_hierarchy__29493__auto__,hierarchy__29494__auto__){
return (function() { 
var G__35209__delegate = function (type,_){
return type;
};
var G__35209 = function (type,var_args){
var _ = null;
if (arguments.length > 1) {
var G__35210__i = 0, G__35210__a = new Array(arguments.length -  1);
while (G__35210__i < G__35210__a.length) {G__35210__a[G__35210__i] = arguments[G__35210__i + 1]; ++G__35210__i;}
  _ = new cljs.core.IndexedSeq(G__35210__a,0,null);
} 
return G__35209__delegate.call(this,type,_);};
G__35209.cljs$lang$maxFixedArity = 1;
G__35209.cljs$lang$applyTo = (function (arglist__35211){
var type = cljs.core.first(arglist__35211);
var _ = cljs.core.rest(arglist__35211);
return G__35209__delegate(type,_);
});
G__35209.cljs$core$IFn$_invoke$arity$variadic = G__35209__delegate;
return G__35209;
})()
;})(method_table__29490__auto__,prefer_table__29491__auto__,method_cache__29492__auto__,cached_hierarchy__29493__auto__,hierarchy__29494__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__29494__auto__,method_table__29490__auto__,prefer_table__29491__auto__,method_cache__29492__auto__,cached_hierarchy__29493__auto__));
})();
}
cljs.core._add_method.call(null,oops.messages.runtime_message,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),(function (_type,info){
var map__35212 = info;
var map__35212__$1 = ((((!((map__35212 == null)))?((((map__35212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35212.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35212):map__35212);
var flavor = cljs.core.get.call(null,map__35212__$1,new cljs.core.Keyword(null,"flavor","flavor",-1331636636));
var path = cljs.core.get.call(null,map__35212__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return oops.messages.post_process_message.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unexpected object value ("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(flavor),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((!(cljs.core.empty_QMARK_.call(null,path)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" on key path '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'")].join(''):null))].join(''));
}));
cljs.core._add_method.call(null,oops.messages.runtime_message,new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),(function (_type,info){
var map__35214 = info;
var map__35214__$1 = ((((!((map__35214 == null)))?((((map__35214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35214.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35214):map__35214);
var soft_QMARK_ = cljs.core.get.call(null,map__35214__$1,new cljs.core.Keyword(null,"soft?","soft?",-1339668477));
var path = cljs.core.get.call(null,map__35214__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var fn = cljs.core.get.call(null,map__35214__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
return oops.messages.post_process_message.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Expected a function"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(soft_QMARK_)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" or nil")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((!(cljs.core.empty_QMARK_.call(null,path)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" on key path '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", got <"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.typeOf(fn)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("> instead")].join(''));
}));
cljs.core._add_method.call(null,oops.messages.runtime_message,new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),(function (_type,info){
var map__35216 = info;
var map__35216__$1 = ((((!((map__35216 == null)))?((((map__35216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35216.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35216):map__35216);
var key = cljs.core.get.call(null,map__35216__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var path = cljs.core.get.call(null,map__35216__$1,new cljs.core.Keyword(null,"path","path",-188191168));
return oops.messages.post_process_message.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Missing expected object key '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((!((cljs.core.empty_QMARK_.call(null,path)) || (cljs.core._EQ_.call(null,path,key))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" on key path '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'")].join(''):null))].join(''));
}));
cljs.core._add_method.call(null,oops.messages.runtime_message,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),(function (_type){
return oops.messages.post_process_message.call(null,"Invalid selector");
}));
cljs.core._add_method.call(null,oops.messages.runtime_message,new cljs.core.Keyword(null,"unexpected-empty-selector","unexpected-empty-selector",-572791900),(function (_type){
return oops.messages.post_process_message.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unexpected empty selector")].join(''));
}));
cljs.core._add_method.call(null,oops.messages.runtime_message,new cljs.core.Keyword(null,"unexpected-punching-selector","unexpected-punching-selector",-1934135338),(function (_type){
return oops.messages.post_process_message.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unexpected punching selector (\"!\" makes sense only with oset!)")].join(''));
}));
cljs.core._add_method.call(null,oops.messages.runtime_message,new cljs.core.Keyword(null,"unexpected-soft-selector","unexpected-soft-selector",-1117708580),(function (_type){
return oops.messages.post_process_message.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unexpected soft selector (\"?\" does not make sense with oset!)")].join(''));
}));

//# sourceMappingURL=messages.js.map?rel=1497481537770