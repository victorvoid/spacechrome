// Compiled by ClojureScript 1.9.562 {}
goog.provide('oops.core');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.object');
goog.require('oops.sdefs');
goog.require('oops.state');
goog.require('oops.config');
goog.require('oops.messages');
goog.require('oops.helpers');
goog.require('oops.schema');
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_.call(null)){
return null;
} else {
oops.state.mark_error_reported_BANG_.call(null);

var G__37040 = oops.config.get_error_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__37040)){
throw oops.state.prepare_error_from_call_site.call(null,msg,(function (){var data__36785__auto__ = data;
var or__28459__auto__ = ((oops.config.use_envelope_QMARK_.call(null))?(function (){var temp__5276__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var devtools__36786__auto__ = temp__5276__auto__;
var temp__5276__auto____$1 = (devtools__36786__auto__["toolbox"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var toolbox__36787__auto__ = temp__5276__auto____$1;
var temp__5276__auto____$2 = (toolbox__36787__auto__["envelope"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var envelope__36788__auto__ = temp__5276__auto____$2;
if(cljs.core.fn_QMARK_.call(null,envelope__36788__auto__)){
return envelope__36788__auto__.call(null,data__36785__auto__,"details");
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
if(cljs.core.truth_(or__28459__auto__)){
return or__28459__auto__;
} else {
return data__36785__auto__;
}
})());
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__37040)){
return oops.state.get_console_reporter.call(null).call(null,(console["error"]),msg,(function (){var data__36785__auto__ = data;
var or__28459__auto__ = ((oops.config.use_envelope_QMARK_.call(null))?(function (){var temp__5276__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var devtools__36786__auto__ = temp__5276__auto__;
var temp__5276__auto____$1 = (devtools__36786__auto__["toolbox"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var toolbox__36787__auto__ = temp__5276__auto____$1;
var temp__5276__auto____$2 = (toolbox__36787__auto__["envelope"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var envelope__36788__auto__ = temp__5276__auto____$2;
if(cljs.core.fn_QMARK_.call(null,envelope__36788__auto__)){
return envelope__36788__auto__.call(null,data__36785__auto__,"details");
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
if(cljs.core.truth_(or__28459__auto__)){
return or__28459__auto__;
} else {
return data__36785__auto__;
}
})());
} else {
if(cljs.core._EQ_.call(null,false,G__37040)){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37040)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__37042 = oops.config.get_warning_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__37042)){
throw oops.state.prepare_error_from_call_site.call(null,msg,(function (){var data__36785__auto__ = data;
var or__28459__auto__ = ((oops.config.use_envelope_QMARK_.call(null))?(function (){var temp__5276__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var devtools__36786__auto__ = temp__5276__auto__;
var temp__5276__auto____$1 = (devtools__36786__auto__["toolbox"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var toolbox__36787__auto__ = temp__5276__auto____$1;
var temp__5276__auto____$2 = (toolbox__36787__auto__["envelope"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var envelope__36788__auto__ = temp__5276__auto____$2;
if(cljs.core.fn_QMARK_.call(null,envelope__36788__auto__)){
return envelope__36788__auto__.call(null,data__36785__auto__,"details");
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
if(cljs.core.truth_(or__28459__auto__)){
return or__28459__auto__;
} else {
return data__36785__auto__;
}
})());
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__37042)){
return oops.state.get_console_reporter.call(null).call(null,(console["warn"]),msg,(function (){var data__36785__auto__ = data;
var or__28459__auto__ = ((oops.config.use_envelope_QMARK_.call(null))?(function (){var temp__5276__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var devtools__36786__auto__ = temp__5276__auto__;
var temp__5276__auto____$1 = (devtools__36786__auto__["toolbox"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var toolbox__36787__auto__ = temp__5276__auto____$1;
var temp__5276__auto____$2 = (toolbox__36787__auto__["envelope"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var envelope__36788__auto__ = temp__5276__auto____$2;
if(cljs.core.fn_QMARK_.call(null,envelope__36788__auto__)){
return envelope__36788__auto__.call(null,data__36785__auto__,"details");
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
if(cljs.core.truth_(or__28459__auto__)){
return or__28459__auto__;
} else {
return data__36785__auto__;
}
})());
} else {
if(cljs.core._EQ_.call(null,false,G__37042)){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37042)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__29687__auto__ = [];
var len__29680__auto___37050 = arguments.length;
var i__29681__auto___37051 = (0);
while(true){
if((i__29681__auto___37051 < len__29680__auto___37050)){
args__29687__auto__.push((arguments[i__29681__auto___37051]));

var G__37052 = (i__29681__auto___37051 + (1));
i__29681__auto___37051 = G__37052;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((1) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29688__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__37045){
var vec__37046 = p__37045;
var info = cljs.core.nth.call(null,vec__37046,(0),null);

if(!(cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),msg_id))){
var G__37049_37053 = oops.config.get_config_key.call(null,msg_id);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),G__37049_37053)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),G__37049_37053)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,false,G__37049_37053)){
} else {
if(cljs.core._EQ_.call(null,null,G__37049_37053)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37049_37053)].join('')));

}
}
}
}
} else {
}

return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq37043){
var G__37044 = cljs.core.first.call(null,seq37043);
var seq37043__$1 = cljs.core.next.call(null,seq37043);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(G__37044,seq37043__$1);
});

oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_37060 = oops.config.get_child_factory.call(null);
var child_factory_37060__$1 = (function (){var G__37061 = child_factory_37060;
var G__37061__$1 = (((G__37061 instanceof cljs.core.Keyword))?G__37061.fqn:null);
switch (G__37061__$1) {
case "js-obj":
return ((function (G__37061,G__37061__$1,child_factory_37060){
return (function (){
return {};
});
;})(G__37061,G__37061__$1,child_factory_37060))

break;
case "js-array":
return ((function (G__37061,G__37061__$1,child_factory_37060){
return (function (){
return [];
});
;})(G__37061,G__37061__$1,child_factory_37060))

break;
default:
return child_factory_37060;

}
})();

var child_obj_37059 = child_factory_37060__$1.call(null,obj,key);
(obj[key] = child_obj_37059);

return child_obj_37059;
});
oops.core.validate_object_access_dynamically = (function oops$core$validate_object_access_dynamically(obj,mode,key,check_key_QMARK_){
if(cljs.core.truth_((((cljs.core._EQ_.call(null,mode,(0))) && ((void 0 === obj)))?oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"undefined",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null)):(((cljs.core._EQ_.call(null,mode,(0))) && ((obj == null)))?oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"nil",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null)):(cljs.core.truth_(goog.isBoolean(obj))?oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"boolean",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null)):(cljs.core.truth_(goog.isNumber(obj))?oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"number",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null)):(cljs.core.truth_(goog.isString(obj))?oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"string",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null)):((cljs.core.not.call(null,goog.isObject(obj)))?oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"non-object",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null)):(cljs.core.truth_(goog.isDateLike(obj))?oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"date-like",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null)):(cljs.core.truth_(oops.helpers.cljs_type_QMARK_.call(null,obj))?oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs type",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null)):(cljs.core.truth_(oops.helpers.cljs_instance_QMARK_.call(null,obj))?oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs instance",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null)):true
))))))))))){
oops.state.add_key_to_current_path_BANG_.call(null,key);

oops.state.set_last_access_modifier_BANG_.call(null,mode);

if(cljs.core.truth_(check_key_QMARK_)){
if((cljs.core._EQ_.call(null,mode,(0))) && (cljs.core.not.call(null,goog.object.containsKey(obj,key)))){
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
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
if((cljs.core._EQ_.call(null,mode,(1))) && ((fn == null))){
return true;
} else {
if(cljs.core.truth_(goog.isFunction(fn))){
return true;
} else {
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"soft?","soft?",-1339668477),cljs.core._EQ_.call(null,mode,(1)),new cljs.core.Keyword(null,"fn","fn",-1175266204),fn,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

}
}
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword))){
var selector_path_37067 = [];
oops.schema.prepare_simple_path_BANG_.call(null,selector,selector_path_37067);

return selector_path_37067;
} else {
var selector_path_37068 = [];
oops.schema.prepare_path_BANG_.call(null,selector,selector_path_37068);

return selector_path_37068;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5276__auto__ = oops.schema.check_dynamic_path_BANG_.call(null,path,op);
if(cljs.core.truth_(temp__5276__auto__)){
var issue_37070 = temp__5276__auto__;
return cljs.core.apply.call(null,oops.core.report_if_needed_dynamically,issue_37070);
} else {
return null;
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
if(oops.core.validate_object_access_dynamically.call(null,obj,mode,key,true)){
return (obj[key]);
} else {
return null;
}
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
if(oops.core.validate_object_access_dynamically.call(null,obj,mode,key,true)){
return (obj[key] = val);
} else {
return null;
}
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_37089 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_37089,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_37082 = (function (){var path_37081 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_37081,(0));

return path_37081;
})();
var len_37083 = path_37082.length;
var i_37084 = (0);
var obj_37085 = obj;
while(true){
if((i_37084 < len_37083)){
var mode_37086 = (path_37082[i_37084]);
var key_37087 = (path_37082[(i_37084 + (1))]);
var next_obj_37088 = oops.core.get_key_dynamically.call(null,obj_37085,key_37087,mode_37086);
var G__37090 = mode_37086;
switch (G__37090) {
case (0):
var G__37092 = (i_37084 + (2));
var G__37093 = next_obj_37088;
i_37084 = G__37092;
obj_37085 = G__37093;
continue;

break;
case (1):
if(!((next_obj_37088 == null))){
var G__37094 = (i_37084 + (2));
var G__37095 = next_obj_37088;
i_37084 = G__37094;
obj_37085 = G__37095;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_37088 == null))){
var G__37096 = (i_37084 + (2));
var G__37097 = next_obj_37088;
i_37084 = G__37096;
obj_37085 = G__37097;
continue;
} else {
var G__37098 = (i_37084 + (2));
var G__37099 = oops.core.punch_key_dynamically_BANG_.call(null,obj_37085,key_37087);
i_37084 = G__37098;
obj_37085 = G__37099;
continue;
}

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37090)].join('')));

}
} else {
return obj_37085;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_37154 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_37154,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_37130 = (function (){var path_37129 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_37129,(0));

return path_37129;
})();
var len_37131 = path_37130.length;
if((len_37131 < (4))){
return [obj,(function (){var path_37133 = path_37130;
var len_37134 = path_37133.length;
var i_37135 = (0);
var obj_37136 = obj;
while(true){
if((i_37135 < len_37134)){
var mode_37137 = (path_37133[i_37135]);
var key_37138 = (path_37133[(i_37135 + (1))]);
var next_obj_37139 = oops.core.get_key_dynamically.call(null,obj_37136,key_37138,mode_37137);
var G__37155 = mode_37137;
switch (G__37155) {
case (0):
var G__37159 = (i_37135 + (2));
var G__37160 = next_obj_37139;
i_37135 = G__37159;
obj_37136 = G__37160;
continue;

break;
case (1):
if(!((next_obj_37139 == null))){
var G__37161 = (i_37135 + (2));
var G__37162 = next_obj_37139;
i_37135 = G__37161;
obj_37136 = G__37162;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_37139 == null))){
var G__37163 = (i_37135 + (2));
var G__37164 = next_obj_37139;
i_37135 = G__37163;
obj_37136 = G__37164;
continue;
} else {
var G__37165 = (i_37135 + (2));
var G__37166 = oops.core.punch_key_dynamically_BANG_.call(null,obj_37136,key_37138);
i_37135 = G__37165;
obj_37136 = G__37166;
continue;
}

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37155)].join('')));

}
} else {
return obj_37136;
}
break;
}
})()];
} else {
var target_obj_37132 = (function (){var path_37140 = path_37130.slice((0),(len_37131 - (2)));
var len_37141 = path_37140.length;
var i_37142 = (0);
var obj_37143 = obj;
while(true){
if((i_37142 < len_37141)){
var mode_37144 = (path_37140[i_37142]);
var key_37145 = (path_37140[(i_37142 + (1))]);
var next_obj_37146 = oops.core.get_key_dynamically.call(null,obj_37143,key_37145,mode_37144);
var G__37156 = mode_37144;
switch (G__37156) {
case (0):
var G__37168 = (i_37142 + (2));
var G__37169 = next_obj_37146;
i_37142 = G__37168;
obj_37143 = G__37169;
continue;

break;
case (1):
if(!((next_obj_37146 == null))){
var G__37170 = (i_37142 + (2));
var G__37171 = next_obj_37146;
i_37142 = G__37170;
obj_37143 = G__37171;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_37146 == null))){
var G__37172 = (i_37142 + (2));
var G__37173 = next_obj_37146;
i_37142 = G__37172;
obj_37143 = G__37173;
continue;
} else {
var G__37174 = (i_37142 + (2));
var G__37175 = oops.core.punch_key_dynamically_BANG_.call(null,obj_37143,key_37145);
i_37142 = G__37174;
obj_37143 = G__37175;
continue;
}

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37156)].join('')));

}
} else {
return obj_37143;
}
break;
}
})();
return [target_obj_37132,(function (){var path_37147 = [(path_37130[(len_37131 - (2))]),(path_37130[(len_37131 - (1))])];
var len_37148 = path_37147.length;
var i_37149 = (0);
var obj_37150 = target_obj_37132;
while(true){
if((i_37149 < len_37148)){
var mode_37151 = (path_37147[i_37149]);
var key_37152 = (path_37147[(i_37149 + (1))]);
var next_obj_37153 = oops.core.get_key_dynamically.call(null,obj_37150,key_37152,mode_37151);
var G__37157 = mode_37151;
switch (G__37157) {
case (0):
var G__37177 = (i_37149 + (2));
var G__37178 = next_obj_37153;
i_37149 = G__37177;
obj_37150 = G__37178;
continue;

break;
case (1):
if(!((next_obj_37153 == null))){
var G__37179 = (i_37149 + (2));
var G__37180 = next_obj_37153;
i_37149 = G__37179;
obj_37150 = G__37180;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_37153 == null))){
var G__37181 = (i_37149 + (2));
var G__37182 = next_obj_37153;
i_37149 = G__37181;
obj_37150 = G__37182;
continue;
} else {
var G__37183 = (i_37149 + (2));
var G__37184 = oops.core.punch_key_dynamically_BANG_.call(null,obj_37150,key_37152);
i_37149 = G__37183;
obj_37150 = G__37184;
continue;
}

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37157)].join('')));

}
} else {
return obj_37150;
}
break;
}
})()];
}
} else {
return null;
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_37215 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_37215,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_37202 = (function (){var path_37201 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_37201,(1));

return path_37201;
})();
var len_37205 = path_37202.length;
var parent_obj_path_37206 = path_37202.slice((0),(len_37205 - (2)));
var key_37203 = (path_37202[(len_37205 - (1))]);
var mode_37204 = (path_37202[(len_37205 - (2))]);
var parent_obj_37207 = (function (){var path_37208 = parent_obj_path_37206;
var len_37209 = path_37208.length;
var i_37210 = (0);
var obj_37211 = obj;
while(true){
if((i_37210 < len_37209)){
var mode_37212 = (path_37208[i_37210]);
var key_37213 = (path_37208[(i_37210 + (1))]);
var next_obj_37214 = oops.core.get_key_dynamically.call(null,obj_37211,key_37213,mode_37212);
var G__37216 = mode_37212;
switch (G__37216) {
case (0):
var G__37218 = (i_37210 + (2));
var G__37219 = next_obj_37214;
i_37210 = G__37218;
obj_37211 = G__37219;
continue;

break;
case (1):
if(!((next_obj_37214 == null))){
var G__37220 = (i_37210 + (2));
var G__37221 = next_obj_37214;
i_37210 = G__37220;
obj_37211 = G__37221;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_37214 == null))){
var G__37222 = (i_37210 + (2));
var G__37223 = next_obj_37214;
i_37210 = G__37222;
obj_37211 = G__37223;
continue;
} else {
var G__37224 = (i_37210 + (2));
var G__37225 = oops.core.punch_key_dynamically_BANG_.call(null,obj_37211,key_37213);
i_37210 = G__37224;
obj_37211 = G__37225;
continue;
}

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37216)].join('')));

}
} else {
return obj_37211;
}
break;
}
})();
return oops.core.set_key_dynamically.call(null,parent_obj_37207,key_37203,val,mode_37204);
} else {
return null;
}
});

//# sourceMappingURL=core.js.map?rel=1497481540332