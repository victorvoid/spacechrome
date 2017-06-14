// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('oops.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('goog.object');
goog.require('oops.sdefs');
goog.require('oops.state');
goog.require('oops.config');
goog.require('oops.messages');
goog.require('oops.helpers');
goog.require('oops.schema');
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_()){
return null;
} else {
oops.state.mark_error_reported_BANG_();

var G__22078 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__22078)){
throw oops.state.prepare_error_from_call_site(msg,(function (){var data__21823__auto__ = data;
var or__7960__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5276__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var devtools__21824__auto__ = temp__5276__auto__;
var temp__5276__auto____$1 = (devtools__21824__auto__["toolbox"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var toolbox__21825__auto__ = temp__5276__auto____$1;
var temp__5276__auto____$2 = (toolbox__21825__auto__["envelope"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var envelope__21826__auto__ = temp__5276__auto____$2;
if(cljs.core.fn_QMARK_(envelope__21826__auto__)){
return (envelope__21826__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__21826__auto__.cljs$core$IFn$_invoke$arity$2(data__21823__auto__,"details") : envelope__21826__auto__.call(null,data__21823__auto__,"details"));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__7960__auto__)){
return or__7960__auto__;
} else {
return data__21823__auto__;
}
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__22078)){
return oops.state.get_console_reporter().call(null,(console["error"]),msg,(function (){var data__21823__auto__ = data;
var or__7960__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5276__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var devtools__21824__auto__ = temp__5276__auto__;
var temp__5276__auto____$1 = (devtools__21824__auto__["toolbox"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var toolbox__21825__auto__ = temp__5276__auto____$1;
var temp__5276__auto____$2 = (toolbox__21825__auto__["envelope"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var envelope__21826__auto__ = temp__5276__auto____$2;
if(cljs.core.fn_QMARK_(envelope__21826__auto__)){
return (envelope__21826__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__21826__auto__.cljs$core$IFn$_invoke$arity$2(data__21823__auto__,"details") : envelope__21826__auto__.call(null,data__21823__auto__,"details"));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__7960__auto__)){
return or__7960__auto__;
} else {
return data__21823__auto__;
}
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__22078)){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22078)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__22080 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__22080)){
throw oops.state.prepare_error_from_call_site(msg,(function (){var data__21823__auto__ = data;
var or__7960__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5276__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var devtools__21824__auto__ = temp__5276__auto__;
var temp__5276__auto____$1 = (devtools__21824__auto__["toolbox"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var toolbox__21825__auto__ = temp__5276__auto____$1;
var temp__5276__auto____$2 = (toolbox__21825__auto__["envelope"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var envelope__21826__auto__ = temp__5276__auto____$2;
if(cljs.core.fn_QMARK_(envelope__21826__auto__)){
return (envelope__21826__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__21826__auto__.cljs$core$IFn$_invoke$arity$2(data__21823__auto__,"details") : envelope__21826__auto__.call(null,data__21823__auto__,"details"));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__7960__auto__)){
return or__7960__auto__;
} else {
return data__21823__auto__;
}
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__22080)){
return oops.state.get_console_reporter().call(null,(console["warn"]),msg,(function (){var data__21823__auto__ = data;
var or__7960__auto__ = ((oops.config.use_envelope_QMARK_())?(function (){var temp__5276__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var devtools__21824__auto__ = temp__5276__auto__;
var temp__5276__auto____$1 = (devtools__21824__auto__["toolbox"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var toolbox__21825__auto__ = temp__5276__auto____$1;
var temp__5276__auto____$2 = (toolbox__21825__auto__["envelope"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var envelope__21826__auto__ = temp__5276__auto____$2;
if(cljs.core.fn_QMARK_(envelope__21826__auto__)){
return (envelope__21826__auto__.cljs$core$IFn$_invoke$arity$2 ? envelope__21826__auto__.cljs$core$IFn$_invoke$arity$2(data__21823__auto__,"details") : envelope__21826__auto__.call(null,data__21823__auto__,"details"));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__7960__auto__)){
return or__7960__auto__;
} else {
return data__21823__auto__;
}
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__22080)){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22080)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__9188__auto__ = [];
var len__9181__auto___22087 = arguments.length;
var i__9182__auto___22088 = (0);
while(true){
if((i__9182__auto___22088 < len__9181__auto___22087)){
args__9188__auto__.push((arguments[i__9182__auto___22088]));

var G__22089 = (i__9182__auto___22088 + (1));
i__9182__auto___22088 = G__22089;
continue;
} else {
}
break;
}

var argseq__9189__auto__ = ((((1) < args__9188__auto__.length))?(new cljs.core.IndexedSeq(args__9188__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9189__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__22083){
var vec__22084 = p__22083;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22084,(0),null);
return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq22081){
var G__22082 = cljs.core.first(seq22081);
var seq22081__$1 = cljs.core.next(seq22081);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(G__22082,seq22081__$1);
});

oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_22096 = oops.config.get_child_factory();
var child_factory_22096__$1 = (function (){var G__22097 = child_factory_22096;
var G__22097__$1 = (((G__22097 instanceof cljs.core.Keyword))?G__22097.fqn:null);
switch (G__22097__$1) {
case "js-obj":
return ((function (G__22097,G__22097__$1,child_factory_22096){
return (function (){
return {};
});
;})(G__22097,G__22097__$1,child_factory_22096))

break;
case "js-array":
return ((function (G__22097,G__22097__$1,child_factory_22096){
return (function (){
return [];
});
;})(G__22097,G__22097__$1,child_factory_22096))

break;
default:
return child_factory_22096;

}
})();

var child_obj_22095 = (child_factory_22096__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_22096__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_22096__$1.call(null,obj,key));
(obj[key] = child_obj_22095);

return child_obj_22095;
});
oops.core.validate_object_access_dynamically = (function oops$core$validate_object_access_dynamically(obj,mode,key,check_key_QMARK_){
if(cljs.core.truth_((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((void 0 === obj)))?(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"undefined",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"undefined",cljs.core.cst$kw$obj,oops.state.get_target_object()], null))):(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((obj == null)))?(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"nil",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"nil",cljs.core.cst$kw$obj,oops.state.get_target_object()], null))):(cljs.core.truth_(goog.isBoolean(obj))?(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"boolean",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"boolean",cljs.core.cst$kw$obj,oops.state.get_target_object()], null))):(cljs.core.truth_(goog.isNumber(obj))?(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"number",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"number",cljs.core.cst$kw$obj,oops.state.get_target_object()], null))):(cljs.core.truth_(goog.isString(obj))?(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"string",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"string",cljs.core.cst$kw$obj,oops.state.get_target_object()], null))):((cljs.core.not(goog.isObject(obj)))?(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"non-object",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"non-object",cljs.core.cst$kw$obj,oops.state.get_target_object()], null))):(cljs.core.truth_(goog.isDateLike(obj))?(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"date-like",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"date-like",cljs.core.cst$kw$obj,oops.state.get_target_object()], null))):(cljs.core.truth_(oops.helpers.cljs_type_QMARK_(obj))?(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"cljs type",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"cljs type",cljs.core.cst$kw$obj,oops.state.get_target_object()], null))):(cljs.core.truth_(oops.helpers.cljs_instance_QMARK_(obj))?(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"cljs instance",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"cljs instance",cljs.core.cst$kw$obj,oops.state.get_target_object()], null))):true
))))))))))){
oops.state.add_key_to_current_path_BANG_(key);

oops.state.set_last_access_modifier_BANG_(mode);

if(cljs.core.truth_(check_key_QMARK_)){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && (cljs.core.not(goog.object.containsKey(obj,key)))){
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$missing_DASH_object_DASH_key,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$missing_DASH_object_DASH_key,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));
} else {
return true;
}
} else {
return true;
}
} else {
return null;
}
});
oops.core.validate_fn_call_dynamically = (function oops$core$validate_fn_call_dynamically(fn,mode){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1))) && ((fn == null))){
return true;
} else {
if(cljs.core.truth_(goog.isFunction(fn))){
return true;
} else {
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expected_DASH_function_DASH_value,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$soft_QMARK_,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1)),cljs.core.cst$kw$fn,fn,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$expected_DASH_function_DASH_value,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$soft_QMARK_,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1)),cljs.core.cst$kw$fn,fn,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

}
}
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword))){
var selector_path_22103 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_22103);

return selector_path_22103;
} else {
var selector_path_22104 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_22104);

return selector_path_22104;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5276__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if(cljs.core.truth_(temp__5276__auto__)){
var issue_22106 = temp__5276__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_22106);
} else {
return null;
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
return (obj[key]);
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
return (obj[key] = val);
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
var path_22117 = (function (){var path_22116 = oops.core.build_path_dynamically(selector);

return path_22116;
})();
var len_22118 = path_22117.length;
var i_22119 = (0);
var obj_22120 = obj;
while(true){
if((i_22119 < len_22118)){
var mode_22121 = (path_22117[i_22119]);
var key_22122 = (path_22117[(i_22119 + (1))]);
var next_obj_22123 = oops.core.get_key_dynamically(obj_22120,key_22122,mode_22121);
var G__22124 = mode_22121;
switch (G__22124) {
case (0):
var G__22126 = (i_22119 + (2));
var G__22127 = next_obj_22123;
i_22119 = G__22126;
obj_22120 = G__22127;
continue;

break;
case (1):
if(!((next_obj_22123 == null))){
var G__22128 = (i_22119 + (2));
var G__22129 = next_obj_22123;
i_22119 = G__22128;
obj_22120 = G__22129;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_22123 == null))){
var G__22130 = (i_22119 + (2));
var G__22131 = next_obj_22123;
i_22119 = G__22130;
obj_22120 = G__22131;
continue;
} else {
var G__22132 = (i_22119 + (2));
var G__22133 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_22120,key_22122) : oops.core.punch_key_dynamically_BANG_.call(null,obj_22120,key_22122));
i_22119 = G__22132;
obj_22120 = G__22133;
continue;
}

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22124)].join('')));

}
} else {
return obj_22120;
}
break;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
var path_22163 = (function (){var path_22162 = oops.core.build_path_dynamically(selector);

return path_22162;
})();
var len_22164 = path_22163.length;
if((len_22164 < (4))){
return [obj,(function (){var path_22166 = path_22163;
var len_22167 = path_22166.length;
var i_22168 = (0);
var obj_22169 = obj;
while(true){
if((i_22168 < len_22167)){
var mode_22170 = (path_22166[i_22168]);
var key_22171 = (path_22166[(i_22168 + (1))]);
var next_obj_22172 = oops.core.get_key_dynamically(obj_22169,key_22171,mode_22170);
var G__22187 = mode_22170;
switch (G__22187) {
case (0):
var G__22191 = (i_22168 + (2));
var G__22192 = next_obj_22172;
i_22168 = G__22191;
obj_22169 = G__22192;
continue;

break;
case (1):
if(!((next_obj_22172 == null))){
var G__22193 = (i_22168 + (2));
var G__22194 = next_obj_22172;
i_22168 = G__22193;
obj_22169 = G__22194;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_22172 == null))){
var G__22195 = (i_22168 + (2));
var G__22196 = next_obj_22172;
i_22168 = G__22195;
obj_22169 = G__22196;
continue;
} else {
var G__22197 = (i_22168 + (2));
var G__22198 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_22169,key_22171) : oops.core.punch_key_dynamically_BANG_.call(null,obj_22169,key_22171));
i_22168 = G__22197;
obj_22169 = G__22198;
continue;
}

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22187)].join('')));

}
} else {
return obj_22169;
}
break;
}
})()];
} else {
var target_obj_22165 = (function (){var path_22173 = path_22163.slice((0),(len_22164 - (2)));
var len_22174 = path_22173.length;
var i_22175 = (0);
var obj_22176 = obj;
while(true){
if((i_22175 < len_22174)){
var mode_22177 = (path_22173[i_22175]);
var key_22178 = (path_22173[(i_22175 + (1))]);
var next_obj_22179 = oops.core.get_key_dynamically(obj_22176,key_22178,mode_22177);
var G__22188 = mode_22177;
switch (G__22188) {
case (0):
var G__22200 = (i_22175 + (2));
var G__22201 = next_obj_22179;
i_22175 = G__22200;
obj_22176 = G__22201;
continue;

break;
case (1):
if(!((next_obj_22179 == null))){
var G__22202 = (i_22175 + (2));
var G__22203 = next_obj_22179;
i_22175 = G__22202;
obj_22176 = G__22203;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_22179 == null))){
var G__22204 = (i_22175 + (2));
var G__22205 = next_obj_22179;
i_22175 = G__22204;
obj_22176 = G__22205;
continue;
} else {
var G__22206 = (i_22175 + (2));
var G__22207 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_22176,key_22178) : oops.core.punch_key_dynamically_BANG_.call(null,obj_22176,key_22178));
i_22175 = G__22206;
obj_22176 = G__22207;
continue;
}

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22188)].join('')));

}
} else {
return obj_22176;
}
break;
}
})();
return [target_obj_22165,(function (){var path_22180 = [(path_22163[(len_22164 - (2))]),(path_22163[(len_22164 - (1))])];
var len_22181 = path_22180.length;
var i_22182 = (0);
var obj_22183 = target_obj_22165;
while(true){
if((i_22182 < len_22181)){
var mode_22184 = (path_22180[i_22182]);
var key_22185 = (path_22180[(i_22182 + (1))]);
var next_obj_22186 = oops.core.get_key_dynamically(obj_22183,key_22185,mode_22184);
var G__22189 = mode_22184;
switch (G__22189) {
case (0):
var G__22209 = (i_22182 + (2));
var G__22210 = next_obj_22186;
i_22182 = G__22209;
obj_22183 = G__22210;
continue;

break;
case (1):
if(!((next_obj_22186 == null))){
var G__22211 = (i_22182 + (2));
var G__22212 = next_obj_22186;
i_22182 = G__22211;
obj_22183 = G__22212;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_22186 == null))){
var G__22213 = (i_22182 + (2));
var G__22214 = next_obj_22186;
i_22182 = G__22213;
obj_22183 = G__22214;
continue;
} else {
var G__22215 = (i_22182 + (2));
var G__22216 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_22183,key_22185) : oops.core.punch_key_dynamically_BANG_.call(null,obj_22183,key_22185));
i_22182 = G__22215;
obj_22183 = G__22216;
continue;
}

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22189)].join('')));

}
} else {
return obj_22183;
}
break;
}
})()];
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
var path_22233 = (function (){var path_22232 = oops.core.build_path_dynamically(selector);

return path_22232;
})();
var len_22236 = path_22233.length;
var parent_obj_path_22237 = path_22233.slice((0),(len_22236 - (2)));
var key_22234 = (path_22233[(len_22236 - (1))]);
var mode_22235 = (path_22233[(len_22236 - (2))]);
var parent_obj_22238 = (function (){var path_22239 = parent_obj_path_22237;
var len_22240 = path_22239.length;
var i_22241 = (0);
var obj_22242 = obj;
while(true){
if((i_22241 < len_22240)){
var mode_22243 = (path_22239[i_22241]);
var key_22244 = (path_22239[(i_22241 + (1))]);
var next_obj_22245 = oops.core.get_key_dynamically(obj_22242,key_22244,mode_22243);
var G__22246 = mode_22243;
switch (G__22246) {
case (0):
var G__22248 = (i_22241 + (2));
var G__22249 = next_obj_22245;
i_22241 = G__22248;
obj_22242 = G__22249;
continue;

break;
case (1):
if(!((next_obj_22245 == null))){
var G__22250 = (i_22241 + (2));
var G__22251 = next_obj_22245;
i_22241 = G__22250;
obj_22242 = G__22251;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_22245 == null))){
var G__22252 = (i_22241 + (2));
var G__22253 = next_obj_22245;
i_22241 = G__22252;
obj_22242 = G__22253;
continue;
} else {
var G__22254 = (i_22241 + (2));
var G__22255 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_22242,key_22244) : oops.core.punch_key_dynamically_BANG_.call(null,obj_22242,key_22244));
i_22241 = G__22254;
obj_22242 = G__22255;
continue;
}

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22246)].join('')));

}
} else {
return obj_22242;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_22238,key_22234,val,mode_22235);
});
