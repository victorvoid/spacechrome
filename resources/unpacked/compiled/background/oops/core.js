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

var G__50747 = oops.config.get_error_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__50747)){
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
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__50747)){
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
if(cljs.core._EQ_.call(null,false,G__50747)){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50747)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__50749 = oops.config.get_warning_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__50749)){
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
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__50749)){
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
if(cljs.core._EQ_.call(null,false,G__50749)){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50749)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__29687__auto__ = [];
var len__29680__auto___50757 = arguments.length;
var i__29681__auto___50758 = (0);
while(true){
if((i__29681__auto___50758 < len__29680__auto___50757)){
args__29687__auto__.push((arguments[i__29681__auto___50758]));

var G__50759 = (i__29681__auto___50758 + (1));
i__29681__auto___50758 = G__50759;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((1) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29688__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__50752){
var vec__50753 = p__50752;
var info = cljs.core.nth.call(null,vec__50753,(0),null);

if(!(cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),msg_id))){
var G__50756_50760 = oops.config.get_config_key.call(null,msg_id);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),G__50756_50760)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),G__50756_50760)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,false,G__50756_50760)){
} else {
if(cljs.core._EQ_.call(null,null,G__50756_50760)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50756_50760)].join('')));

}
}
}
}
} else {
}

return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq50750){
var G__50751 = cljs.core.first.call(null,seq50750);
var seq50750__$1 = cljs.core.next.call(null,seq50750);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(G__50751,seq50750__$1);
});

oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_50767 = oops.config.get_child_factory.call(null);
var child_factory_50767__$1 = (function (){var G__50768 = child_factory_50767;
var G__50768__$1 = (((G__50768 instanceof cljs.core.Keyword))?G__50768.fqn:null);
switch (G__50768__$1) {
case "js-obj":
return ((function (G__50768,G__50768__$1,child_factory_50767){
return (function (){
return {};
});
;})(G__50768,G__50768__$1,child_factory_50767))

break;
case "js-array":
return ((function (G__50768,G__50768__$1,child_factory_50767){
return (function (){
return [];
});
;})(G__50768,G__50768__$1,child_factory_50767))

break;
default:
return child_factory_50767;

}
})();

var child_obj_50766 = child_factory_50767__$1.call(null,obj,key);
(obj[key] = child_obj_50766);

return child_obj_50766;
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
var selector_path_50774 = [];
oops.schema.prepare_simple_path_BANG_.call(null,selector,selector_path_50774);

return selector_path_50774;
} else {
var selector_path_50775 = [];
oops.schema.prepare_path_BANG_.call(null,selector,selector_path_50775);

return selector_path_50775;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5276__auto__ = oops.schema.check_dynamic_path_BANG_.call(null,path,op);
if(cljs.core.truth_(temp__5276__auto__)){
var issue_50777 = temp__5276__auto__;
return cljs.core.apply.call(null,oops.core.report_if_needed_dynamically,issue_50777);
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
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_50796 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_50796,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_50789 = (function (){var path_50788 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_50788,(0));

return path_50788;
})();
var len_50790 = path_50789.length;
var i_50791 = (0);
var obj_50792 = obj;
while(true){
if((i_50791 < len_50790)){
var mode_50793 = (path_50789[i_50791]);
var key_50794 = (path_50789[(i_50791 + (1))]);
var next_obj_50795 = oops.core.get_key_dynamically.call(null,obj_50792,key_50794,mode_50793);
var G__50797 = mode_50793;
switch (G__50797) {
case (0):
var G__50799 = (i_50791 + (2));
var G__50800 = next_obj_50795;
i_50791 = G__50799;
obj_50792 = G__50800;
continue;

break;
case (1):
if(!((next_obj_50795 == null))){
var G__50801 = (i_50791 + (2));
var G__50802 = next_obj_50795;
i_50791 = G__50801;
obj_50792 = G__50802;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_50795 == null))){
var G__50803 = (i_50791 + (2));
var G__50804 = next_obj_50795;
i_50791 = G__50803;
obj_50792 = G__50804;
continue;
} else {
var G__50805 = (i_50791 + (2));
var G__50806 = oops.core.punch_key_dynamically_BANG_.call(null,obj_50792,key_50794);
i_50791 = G__50805;
obj_50792 = G__50806;
continue;
}

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50797)].join('')));

}
} else {
return obj_50792;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_50861 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_50861,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_50837 = (function (){var path_50836 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_50836,(0));

return path_50836;
})();
var len_50838 = path_50837.length;
if((len_50838 < (4))){
return [obj,(function (){var path_50840 = path_50837;
var len_50841 = path_50840.length;
var i_50842 = (0);
var obj_50843 = obj;
while(true){
if((i_50842 < len_50841)){
var mode_50844 = (path_50840[i_50842]);
var key_50845 = (path_50840[(i_50842 + (1))]);
var next_obj_50846 = oops.core.get_key_dynamically.call(null,obj_50843,key_50845,mode_50844);
var G__50862 = mode_50844;
switch (G__50862) {
case (0):
var G__50866 = (i_50842 + (2));
var G__50867 = next_obj_50846;
i_50842 = G__50866;
obj_50843 = G__50867;
continue;

break;
case (1):
if(!((next_obj_50846 == null))){
var G__50868 = (i_50842 + (2));
var G__50869 = next_obj_50846;
i_50842 = G__50868;
obj_50843 = G__50869;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_50846 == null))){
var G__50870 = (i_50842 + (2));
var G__50871 = next_obj_50846;
i_50842 = G__50870;
obj_50843 = G__50871;
continue;
} else {
var G__50872 = (i_50842 + (2));
var G__50873 = oops.core.punch_key_dynamically_BANG_.call(null,obj_50843,key_50845);
i_50842 = G__50872;
obj_50843 = G__50873;
continue;
}

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50862)].join('')));

}
} else {
return obj_50843;
}
break;
}
})()];
} else {
var target_obj_50839 = (function (){var path_50847 = path_50837.slice((0),(len_50838 - (2)));
var len_50848 = path_50847.length;
var i_50849 = (0);
var obj_50850 = obj;
while(true){
if((i_50849 < len_50848)){
var mode_50851 = (path_50847[i_50849]);
var key_50852 = (path_50847[(i_50849 + (1))]);
var next_obj_50853 = oops.core.get_key_dynamically.call(null,obj_50850,key_50852,mode_50851);
var G__50863 = mode_50851;
switch (G__50863) {
case (0):
var G__50875 = (i_50849 + (2));
var G__50876 = next_obj_50853;
i_50849 = G__50875;
obj_50850 = G__50876;
continue;

break;
case (1):
if(!((next_obj_50853 == null))){
var G__50877 = (i_50849 + (2));
var G__50878 = next_obj_50853;
i_50849 = G__50877;
obj_50850 = G__50878;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_50853 == null))){
var G__50879 = (i_50849 + (2));
var G__50880 = next_obj_50853;
i_50849 = G__50879;
obj_50850 = G__50880;
continue;
} else {
var G__50881 = (i_50849 + (2));
var G__50882 = oops.core.punch_key_dynamically_BANG_.call(null,obj_50850,key_50852);
i_50849 = G__50881;
obj_50850 = G__50882;
continue;
}

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50863)].join('')));

}
} else {
return obj_50850;
}
break;
}
})();
return [target_obj_50839,(function (){var path_50854 = [(path_50837[(len_50838 - (2))]),(path_50837[(len_50838 - (1))])];
var len_50855 = path_50854.length;
var i_50856 = (0);
var obj_50857 = target_obj_50839;
while(true){
if((i_50856 < len_50855)){
var mode_50858 = (path_50854[i_50856]);
var key_50859 = (path_50854[(i_50856 + (1))]);
var next_obj_50860 = oops.core.get_key_dynamically.call(null,obj_50857,key_50859,mode_50858);
var G__50864 = mode_50858;
switch (G__50864) {
case (0):
var G__50884 = (i_50856 + (2));
var G__50885 = next_obj_50860;
i_50856 = G__50884;
obj_50857 = G__50885;
continue;

break;
case (1):
if(!((next_obj_50860 == null))){
var G__50886 = (i_50856 + (2));
var G__50887 = next_obj_50860;
i_50856 = G__50886;
obj_50857 = G__50887;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_50860 == null))){
var G__50888 = (i_50856 + (2));
var G__50889 = next_obj_50860;
i_50856 = G__50888;
obj_50857 = G__50889;
continue;
} else {
var G__50890 = (i_50856 + (2));
var G__50891 = oops.core.punch_key_dynamically_BANG_.call(null,obj_50857,key_50859);
i_50856 = G__50890;
obj_50857 = G__50891;
continue;
}

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50864)].join('')));

}
} else {
return obj_50857;
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
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_50922 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_50922,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_50909 = (function (){var path_50908 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_50908,(1));

return path_50908;
})();
var len_50912 = path_50909.length;
var parent_obj_path_50913 = path_50909.slice((0),(len_50912 - (2)));
var key_50910 = (path_50909[(len_50912 - (1))]);
var mode_50911 = (path_50909[(len_50912 - (2))]);
var parent_obj_50914 = (function (){var path_50915 = parent_obj_path_50913;
var len_50916 = path_50915.length;
var i_50917 = (0);
var obj_50918 = obj;
while(true){
if((i_50917 < len_50916)){
var mode_50919 = (path_50915[i_50917]);
var key_50920 = (path_50915[(i_50917 + (1))]);
var next_obj_50921 = oops.core.get_key_dynamically.call(null,obj_50918,key_50920,mode_50919);
var G__50923 = mode_50919;
switch (G__50923) {
case (0):
var G__50925 = (i_50917 + (2));
var G__50926 = next_obj_50921;
i_50917 = G__50925;
obj_50918 = G__50926;
continue;

break;
case (1):
if(!((next_obj_50921 == null))){
var G__50927 = (i_50917 + (2));
var G__50928 = next_obj_50921;
i_50917 = G__50927;
obj_50918 = G__50928;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_50921 == null))){
var G__50929 = (i_50917 + (2));
var G__50930 = next_obj_50921;
i_50917 = G__50929;
obj_50918 = G__50930;
continue;
} else {
var G__50931 = (i_50917 + (2));
var G__50932 = oops.core.punch_key_dynamically_BANG_.call(null,obj_50918,key_50920);
i_50917 = G__50931;
obj_50918 = G__50932;
continue;
}

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50923)].join('')));

}
} else {
return obj_50918;
}
break;
}
})();
return oops.core.set_key_dynamically.call(null,parent_obj_50914,key_50910,val,mode_50911);
} else {
return null;
}
});

//# sourceMappingURL=core.js.map?rel=1497481555289