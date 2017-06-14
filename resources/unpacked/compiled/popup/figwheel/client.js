// Compiled by ClojureScript 1.9.562 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.10";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args42185 = [];
var len__29680__auto___42188 = arguments.length;
var i__29681__auto___42189 = (0);
while(true){
if((i__29681__auto___42189 < len__29680__auto___42188)){
args42185.push((arguments[i__29681__auto___42189]));

var G__42190 = (i__29681__auto___42189 + (1));
i__29681__auto___42189 = G__42190;
continue;
} else {
}
break;
}

var G__42187 = args42185.length;
switch (G__42187) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42185.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__29687__auto__ = [];
var len__29680__auto___42193 = arguments.length;
var i__29681__auto___42194 = (0);
while(true){
if((i__29681__auto___42194 < len__29680__auto___42193)){
args__29687__auto__.push((arguments[i__29681__auto___42194]));

var G__42195 = (i__29681__auto___42194 + (1));
i__29681__auto___42194 = G__42195;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq42192){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42192));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29687__auto__ = [];
var len__29680__auto___42197 = arguments.length;
var i__29681__auto___42198 = (0);
while(true){
if((i__29681__auto___42198 < len__29680__auto___42197)){
args__29687__auto__.push((arguments[i__29681__auto___42198]));

var G__42199 = (i__29681__auto___42198 + (1));
i__29681__auto___42198 = G__42199;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq42196){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42196));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__42200){
var map__42203 = p__42200;
var map__42203__$1 = ((((!((map__42203 == null)))?((((map__42203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42203.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42203):map__42203);
var message = cljs.core.get.call(null,map__42203__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__42203__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__28459__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__28459__auto__)){
return or__28459__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__28447__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__28447__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__28447__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__32057__auto___42365 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto___42365,ch){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto___42365,ch){
return (function (state_42334){
var state_val_42335 = (state_42334[(1)]);
if((state_val_42335 === (7))){
var inst_42330 = (state_42334[(2)]);
var state_42334__$1 = state_42334;
var statearr_42336_42366 = state_42334__$1;
(statearr_42336_42366[(2)] = inst_42330);

(statearr_42336_42366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42335 === (1))){
var state_42334__$1 = state_42334;
var statearr_42337_42367 = state_42334__$1;
(statearr_42337_42367[(2)] = null);

(statearr_42337_42367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42335 === (4))){
var inst_42287 = (state_42334[(7)]);
var inst_42287__$1 = (state_42334[(2)]);
var state_42334__$1 = (function (){var statearr_42338 = state_42334;
(statearr_42338[(7)] = inst_42287__$1);

return statearr_42338;
})();
if(cljs.core.truth_(inst_42287__$1)){
var statearr_42339_42368 = state_42334__$1;
(statearr_42339_42368[(1)] = (5));

} else {
var statearr_42340_42369 = state_42334__$1;
(statearr_42340_42369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42335 === (15))){
var inst_42294 = (state_42334[(8)]);
var inst_42309 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42294);
var inst_42310 = cljs.core.first.call(null,inst_42309);
var inst_42311 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_42310);
var inst_42312 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42311)].join('');
var inst_42313 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_42312);
var state_42334__$1 = state_42334;
var statearr_42341_42370 = state_42334__$1;
(statearr_42341_42370[(2)] = inst_42313);

(statearr_42341_42370[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42335 === (13))){
var inst_42318 = (state_42334[(2)]);
var state_42334__$1 = state_42334;
var statearr_42342_42371 = state_42334__$1;
(statearr_42342_42371[(2)] = inst_42318);

(statearr_42342_42371[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42335 === (6))){
var state_42334__$1 = state_42334;
var statearr_42343_42372 = state_42334__$1;
(statearr_42343_42372[(2)] = null);

(statearr_42343_42372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42335 === (17))){
var inst_42316 = (state_42334[(2)]);
var state_42334__$1 = state_42334;
var statearr_42344_42373 = state_42334__$1;
(statearr_42344_42373[(2)] = inst_42316);

(statearr_42344_42373[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42335 === (3))){
var inst_42332 = (state_42334[(2)]);
var state_42334__$1 = state_42334;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42334__$1,inst_42332);
} else {
if((state_val_42335 === (12))){
var inst_42293 = (state_42334[(9)]);
var inst_42307 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_42293,opts);
var state_42334__$1 = state_42334;
if(cljs.core.truth_(inst_42307)){
var statearr_42345_42374 = state_42334__$1;
(statearr_42345_42374[(1)] = (15));

} else {
var statearr_42346_42375 = state_42334__$1;
(statearr_42346_42375[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42335 === (2))){
var state_42334__$1 = state_42334;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42334__$1,(4),ch);
} else {
if((state_val_42335 === (11))){
var inst_42294 = (state_42334[(8)]);
var inst_42299 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42300 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_42294);
var inst_42301 = cljs.core.async.timeout.call(null,(1000));
var inst_42302 = [inst_42300,inst_42301];
var inst_42303 = (new cljs.core.PersistentVector(null,2,(5),inst_42299,inst_42302,null));
var state_42334__$1 = state_42334;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42334__$1,(14),inst_42303);
} else {
if((state_val_42335 === (9))){
var inst_42294 = (state_42334[(8)]);
var inst_42320 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_42321 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42294);
var inst_42322 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42321);
var inst_42323 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42322)].join('');
var inst_42324 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_42323);
var state_42334__$1 = (function (){var statearr_42347 = state_42334;
(statearr_42347[(10)] = inst_42320);

return statearr_42347;
})();
var statearr_42348_42376 = state_42334__$1;
(statearr_42348_42376[(2)] = inst_42324);

(statearr_42348_42376[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42335 === (5))){
var inst_42287 = (state_42334[(7)]);
var inst_42289 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_42290 = (new cljs.core.PersistentArrayMap(null,2,inst_42289,null));
var inst_42291 = (new cljs.core.PersistentHashSet(null,inst_42290,null));
var inst_42292 = figwheel.client.focus_msgs.call(null,inst_42291,inst_42287);
var inst_42293 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_42292);
var inst_42294 = cljs.core.first.call(null,inst_42292);
var inst_42295 = figwheel.client.autoload_QMARK_.call(null);
var state_42334__$1 = (function (){var statearr_42349 = state_42334;
(statearr_42349[(8)] = inst_42294);

(statearr_42349[(9)] = inst_42293);

return statearr_42349;
})();
if(cljs.core.truth_(inst_42295)){
var statearr_42350_42377 = state_42334__$1;
(statearr_42350_42377[(1)] = (8));

} else {
var statearr_42351_42378 = state_42334__$1;
(statearr_42351_42378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42335 === (14))){
var inst_42305 = (state_42334[(2)]);
var state_42334__$1 = state_42334;
var statearr_42352_42379 = state_42334__$1;
(statearr_42352_42379[(2)] = inst_42305);

(statearr_42352_42379[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42335 === (16))){
var state_42334__$1 = state_42334;
var statearr_42353_42380 = state_42334__$1;
(statearr_42353_42380[(2)] = null);

(statearr_42353_42380[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42335 === (10))){
var inst_42326 = (state_42334[(2)]);
var state_42334__$1 = (function (){var statearr_42354 = state_42334;
(statearr_42354[(11)] = inst_42326);

return statearr_42354;
})();
var statearr_42355_42381 = state_42334__$1;
(statearr_42355_42381[(2)] = null);

(statearr_42355_42381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42335 === (8))){
var inst_42293 = (state_42334[(9)]);
var inst_42297 = figwheel.client.reload_file_state_QMARK_.call(null,inst_42293,opts);
var state_42334__$1 = state_42334;
if(cljs.core.truth_(inst_42297)){
var statearr_42356_42382 = state_42334__$1;
(statearr_42356_42382[(1)] = (11));

} else {
var statearr_42357_42383 = state_42334__$1;
(statearr_42357_42383[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32057__auto___42365,ch))
;
return ((function (switch__31943__auto__,c__32057__auto___42365,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__31944__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__31944__auto____0 = (function (){
var statearr_42361 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42361[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__31944__auto__);

(statearr_42361[(1)] = (1));

return statearr_42361;
});
var figwheel$client$file_reloader_plugin_$_state_machine__31944__auto____1 = (function (state_42334){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_42334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e42362){if((e42362 instanceof Object)){
var ex__31947__auto__ = e42362;
var statearr_42363_42384 = state_42334;
(statearr_42363_42384[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42385 = state_42334;
state_42334 = G__42385;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__31944__auto__ = function(state_42334){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__31944__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__31944__auto____1.call(this,state_42334);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__31944__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__31944__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto___42365,ch))
})();
var state__32059__auto__ = (function (){var statearr_42364 = f__32058__auto__.call(null);
(statearr_42364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto___42365);

return statearr_42364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto___42365,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__42386_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__42386_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_42389 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_42389){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e42388){if((e42388 instanceof Error)){
var e = e42388;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_42389], null));
} else {
var e = e42388;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_42389))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__42390){
var map__42399 = p__42390;
var map__42399__$1 = ((((!((map__42399 == null)))?((((map__42399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42399.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42399):map__42399);
var opts = map__42399__$1;
var build_id = cljs.core.get.call(null,map__42399__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__42399,map__42399__$1,opts,build_id){
return (function (p__42401){
var vec__42402 = p__42401;
var seq__42403 = cljs.core.seq.call(null,vec__42402);
var first__42404 = cljs.core.first.call(null,seq__42403);
var seq__42403__$1 = cljs.core.next.call(null,seq__42403);
var map__42405 = first__42404;
var map__42405__$1 = ((((!((map__42405 == null)))?((((map__42405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42405.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42405):map__42405);
var msg = map__42405__$1;
var msg_name = cljs.core.get.call(null,map__42405__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42403__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__42402,seq__42403,first__42404,seq__42403__$1,map__42405,map__42405__$1,msg,msg_name,_,map__42399,map__42399__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__42402,seq__42403,first__42404,seq__42403__$1,map__42405,map__42405__$1,msg,msg_name,_,map__42399,map__42399__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__42399,map__42399__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__42413){
var vec__42414 = p__42413;
var seq__42415 = cljs.core.seq.call(null,vec__42414);
var first__42416 = cljs.core.first.call(null,seq__42415);
var seq__42415__$1 = cljs.core.next.call(null,seq__42415);
var map__42417 = first__42416;
var map__42417__$1 = ((((!((map__42417 == null)))?((((map__42417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42417.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42417):map__42417);
var msg = map__42417__$1;
var msg_name = cljs.core.get.call(null,map__42417__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42415__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__42419){
var map__42431 = p__42419;
var map__42431__$1 = ((((!((map__42431 == null)))?((((map__42431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42431.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42431):map__42431);
var on_compile_warning = cljs.core.get.call(null,map__42431__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__42431__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__42431,map__42431__$1,on_compile_warning,on_compile_fail){
return (function (p__42433){
var vec__42434 = p__42433;
var seq__42435 = cljs.core.seq.call(null,vec__42434);
var first__42436 = cljs.core.first.call(null,seq__42435);
var seq__42435__$1 = cljs.core.next.call(null,seq__42435);
var map__42437 = first__42436;
var map__42437__$1 = ((((!((map__42437 == null)))?((((map__42437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42437.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42437):map__42437);
var msg = map__42437__$1;
var msg_name = cljs.core.get.call(null,map__42437__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42435__$1;
var pred__42439 = cljs.core._EQ_;
var expr__42440 = msg_name;
if(cljs.core.truth_(pred__42439.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__42440))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__42439.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__42440))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__42431,map__42431__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__32057__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto__,msg_hist,msg_names,msg){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto__,msg_hist,msg_names,msg){
return (function (state_42668){
var state_val_42669 = (state_42668[(1)]);
if((state_val_42669 === (7))){
var inst_42588 = (state_42668[(2)]);
var state_42668__$1 = state_42668;
if(cljs.core.truth_(inst_42588)){
var statearr_42670_42720 = state_42668__$1;
(statearr_42670_42720[(1)] = (8));

} else {
var statearr_42671_42721 = state_42668__$1;
(statearr_42671_42721[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42669 === (20))){
var inst_42662 = (state_42668[(2)]);
var state_42668__$1 = state_42668;
var statearr_42672_42722 = state_42668__$1;
(statearr_42672_42722[(2)] = inst_42662);

(statearr_42672_42722[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42669 === (27))){
var inst_42658 = (state_42668[(2)]);
var state_42668__$1 = state_42668;
var statearr_42673_42723 = state_42668__$1;
(statearr_42673_42723[(2)] = inst_42658);

(statearr_42673_42723[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42669 === (1))){
var inst_42581 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_42668__$1 = state_42668;
if(cljs.core.truth_(inst_42581)){
var statearr_42674_42724 = state_42668__$1;
(statearr_42674_42724[(1)] = (2));

} else {
var statearr_42675_42725 = state_42668__$1;
(statearr_42675_42725[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42669 === (24))){
var inst_42660 = (state_42668[(2)]);
var state_42668__$1 = state_42668;
var statearr_42676_42726 = state_42668__$1;
(statearr_42676_42726[(2)] = inst_42660);

(statearr_42676_42726[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42669 === (4))){
var inst_42666 = (state_42668[(2)]);
var state_42668__$1 = state_42668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42668__$1,inst_42666);
} else {
if((state_val_42669 === (15))){
var inst_42664 = (state_42668[(2)]);
var state_42668__$1 = state_42668;
var statearr_42677_42727 = state_42668__$1;
(statearr_42677_42727[(2)] = inst_42664);

(statearr_42677_42727[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42669 === (21))){
var inst_42617 = (state_42668[(2)]);
var inst_42618 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42619 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42618);
var state_42668__$1 = (function (){var statearr_42678 = state_42668;
(statearr_42678[(7)] = inst_42617);

return statearr_42678;
})();
var statearr_42679_42728 = state_42668__$1;
(statearr_42679_42728[(2)] = inst_42619);

(statearr_42679_42728[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42669 === (31))){
var inst_42647 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_42668__$1 = state_42668;
if(cljs.core.truth_(inst_42647)){
var statearr_42680_42729 = state_42668__$1;
(statearr_42680_42729[(1)] = (34));

} else {
var statearr_42681_42730 = state_42668__$1;
(statearr_42681_42730[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42669 === (32))){
var inst_42656 = (state_42668[(2)]);
var state_42668__$1 = state_42668;
var statearr_42682_42731 = state_42668__$1;
(statearr_42682_42731[(2)] = inst_42656);

(statearr_42682_42731[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42669 === (33))){
var inst_42643 = (state_42668[(2)]);
var inst_42644 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42645 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42644);
var state_42668__$1 = (function (){var statearr_42683 = state_42668;
(statearr_42683[(8)] = inst_42643);

return statearr_42683;
})();
var statearr_42684_42732 = state_42668__$1;
(statearr_42684_42732[(2)] = inst_42645);

(statearr_42684_42732[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42669 === (13))){
var inst_42602 = figwheel.client.heads_up.clear.call(null);
var state_42668__$1 = state_42668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42668__$1,(16),inst_42602);
} else {
if((state_val_42669 === (22))){
var inst_42623 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42624 = figwheel.client.heads_up.append_warning_message.call(null,inst_42623);
var state_42668__$1 = state_42668;
var statearr_42685_42733 = state_42668__$1;
(statearr_42685_42733[(2)] = inst_42624);

(statearr_42685_42733[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42669 === (36))){
var inst_42654 = (state_42668[(2)]);
var state_42668__$1 = state_42668;
var statearr_42686_42734 = state_42668__$1;
(statearr_42686_42734[(2)] = inst_42654);

(statearr_42686_42734[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42669 === (29))){
var inst_42634 = (state_42668[(2)]);
var inst_42635 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42636 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42635);
var state_42668__$1 = (function (){var statearr_42687 = state_42668;
(statearr_42687[(9)] = inst_42634);

return statearr_42687;
})();
var statearr_42688_42735 = state_42668__$1;
(statearr_42688_42735[(2)] = inst_42636);

(statearr_42688_42735[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42669 === (6))){
var inst_42583 = (state_42668[(10)]);
var state_42668__$1 = state_42668;
var statearr_42689_42736 = state_42668__$1;
(statearr_42689_42736[(2)] = inst_42583);

(statearr_42689_42736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42669 === (28))){
var inst_42630 = (state_42668[(2)]);
var inst_42631 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42632 = figwheel.client.heads_up.display_warning.call(null,inst_42631);
var state_42668__$1 = (function (){var statearr_42690 = state_42668;
(statearr_42690[(11)] = inst_42630);

return statearr_42690;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42668__$1,(29),inst_42632);
} else {
if((state_val_42669 === (25))){
var inst_42628 = figwheel.client.heads_up.clear.call(null);
var state_42668__$1 = state_42668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42668__$1,(28),inst_42628);
} else {
if((state_val_42669 === (34))){
var inst_42649 = figwheel.client.heads_up.flash_loaded.call(null);
var state_42668__$1 = state_42668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42668__$1,(37),inst_42649);
} else {
if((state_val_42669 === (17))){
var inst_42608 = (state_42668[(2)]);
var inst_42609 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42610 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42609);
var state_42668__$1 = (function (){var statearr_42691 = state_42668;
(statearr_42691[(12)] = inst_42608);

return statearr_42691;
})();
var statearr_42692_42737 = state_42668__$1;
(statearr_42692_42737[(2)] = inst_42610);

(statearr_42692_42737[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42669 === (3))){
var inst_42600 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_42668__$1 = state_42668;
if(cljs.core.truth_(inst_42600)){
var statearr_42693_42738 = state_42668__$1;
(statearr_42693_42738[(1)] = (13));

} else {
var statearr_42694_42739 = state_42668__$1;
(statearr_42694_42739[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42669 === (12))){
var inst_42596 = (state_42668[(2)]);
var state_42668__$1 = state_42668;
var statearr_42695_42740 = state_42668__$1;
(statearr_42695_42740[(2)] = inst_42596);

(statearr_42695_42740[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42669 === (2))){
var inst_42583 = (state_42668[(10)]);
var inst_42583__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_42668__$1 = (function (){var statearr_42696 = state_42668;
(statearr_42696[(10)] = inst_42583__$1);

return statearr_42696;
})();
if(cljs.core.truth_(inst_42583__$1)){
var statearr_42697_42741 = state_42668__$1;
(statearr_42697_42741[(1)] = (5));

} else {
var statearr_42698_42742 = state_42668__$1;
(statearr_42698_42742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42669 === (23))){
var inst_42626 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_42668__$1 = state_42668;
if(cljs.core.truth_(inst_42626)){
var statearr_42699_42743 = state_42668__$1;
(statearr_42699_42743[(1)] = (25));

} else {
var statearr_42700_42744 = state_42668__$1;
(statearr_42700_42744[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42669 === (35))){
var state_42668__$1 = state_42668;
var statearr_42701_42745 = state_42668__$1;
(statearr_42701_42745[(2)] = null);

(statearr_42701_42745[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42669 === (19))){
var inst_42621 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_42668__$1 = state_42668;
if(cljs.core.truth_(inst_42621)){
var statearr_42702_42746 = state_42668__$1;
(statearr_42702_42746[(1)] = (22));

} else {
var statearr_42703_42747 = state_42668__$1;
(statearr_42703_42747[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42669 === (11))){
var inst_42592 = (state_42668[(2)]);
var state_42668__$1 = state_42668;
var statearr_42704_42748 = state_42668__$1;
(statearr_42704_42748[(2)] = inst_42592);

(statearr_42704_42748[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42669 === (9))){
var inst_42594 = figwheel.client.heads_up.clear.call(null);
var state_42668__$1 = state_42668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42668__$1,(12),inst_42594);
} else {
if((state_val_42669 === (5))){
var inst_42585 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_42668__$1 = state_42668;
var statearr_42705_42749 = state_42668__$1;
(statearr_42705_42749[(2)] = inst_42585);

(statearr_42705_42749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42669 === (14))){
var inst_42612 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_42668__$1 = state_42668;
if(cljs.core.truth_(inst_42612)){
var statearr_42706_42750 = state_42668__$1;
(statearr_42706_42750[(1)] = (18));

} else {
var statearr_42707_42751 = state_42668__$1;
(statearr_42707_42751[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42669 === (26))){
var inst_42638 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_42668__$1 = state_42668;
if(cljs.core.truth_(inst_42638)){
var statearr_42708_42752 = state_42668__$1;
(statearr_42708_42752[(1)] = (30));

} else {
var statearr_42709_42753 = state_42668__$1;
(statearr_42709_42753[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42669 === (16))){
var inst_42604 = (state_42668[(2)]);
var inst_42605 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42606 = figwheel.client.heads_up.display_exception.call(null,inst_42605);
var state_42668__$1 = (function (){var statearr_42710 = state_42668;
(statearr_42710[(13)] = inst_42604);

return statearr_42710;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42668__$1,(17),inst_42606);
} else {
if((state_val_42669 === (30))){
var inst_42640 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42641 = figwheel.client.heads_up.display_warning.call(null,inst_42640);
var state_42668__$1 = state_42668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42668__$1,(33),inst_42641);
} else {
if((state_val_42669 === (10))){
var inst_42598 = (state_42668[(2)]);
var state_42668__$1 = state_42668;
var statearr_42711_42754 = state_42668__$1;
(statearr_42711_42754[(2)] = inst_42598);

(statearr_42711_42754[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42669 === (18))){
var inst_42614 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42615 = figwheel.client.heads_up.display_exception.call(null,inst_42614);
var state_42668__$1 = state_42668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42668__$1,(21),inst_42615);
} else {
if((state_val_42669 === (37))){
var inst_42651 = (state_42668[(2)]);
var state_42668__$1 = state_42668;
var statearr_42712_42755 = state_42668__$1;
(statearr_42712_42755[(2)] = inst_42651);

(statearr_42712_42755[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42669 === (8))){
var inst_42590 = figwheel.client.heads_up.flash_loaded.call(null);
var state_42668__$1 = state_42668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42668__$1,(11),inst_42590);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32057__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__31943__auto__,c__32057__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto____0 = (function (){
var statearr_42716 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42716[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto__);

(statearr_42716[(1)] = (1));

return statearr_42716;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto____1 = (function (state_42668){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_42668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e42717){if((e42717 instanceof Object)){
var ex__31947__auto__ = e42717;
var statearr_42718_42756 = state_42668;
(statearr_42718_42756[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42757 = state_42668;
state_42668 = G__42757;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto__ = function(state_42668){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto____1.call(this,state_42668);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto__,msg_hist,msg_names,msg))
})();
var state__32059__auto__ = (function (){var statearr_42719 = f__32058__auto__.call(null);
(statearr_42719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto__);

return statearr_42719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto__,msg_hist,msg_names,msg))
);

return c__32057__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__32057__auto___42820 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto___42820,ch){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto___42820,ch){
return (function (state_42803){
var state_val_42804 = (state_42803[(1)]);
if((state_val_42804 === (1))){
var state_42803__$1 = state_42803;
var statearr_42805_42821 = state_42803__$1;
(statearr_42805_42821[(2)] = null);

(statearr_42805_42821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42804 === (2))){
var state_42803__$1 = state_42803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42803__$1,(4),ch);
} else {
if((state_val_42804 === (3))){
var inst_42801 = (state_42803[(2)]);
var state_42803__$1 = state_42803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42803__$1,inst_42801);
} else {
if((state_val_42804 === (4))){
var inst_42791 = (state_42803[(7)]);
var inst_42791__$1 = (state_42803[(2)]);
var state_42803__$1 = (function (){var statearr_42806 = state_42803;
(statearr_42806[(7)] = inst_42791__$1);

return statearr_42806;
})();
if(cljs.core.truth_(inst_42791__$1)){
var statearr_42807_42822 = state_42803__$1;
(statearr_42807_42822[(1)] = (5));

} else {
var statearr_42808_42823 = state_42803__$1;
(statearr_42808_42823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42804 === (5))){
var inst_42791 = (state_42803[(7)]);
var inst_42793 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_42791);
var state_42803__$1 = state_42803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42803__$1,(8),inst_42793);
} else {
if((state_val_42804 === (6))){
var state_42803__$1 = state_42803;
var statearr_42809_42824 = state_42803__$1;
(statearr_42809_42824[(2)] = null);

(statearr_42809_42824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42804 === (7))){
var inst_42799 = (state_42803[(2)]);
var state_42803__$1 = state_42803;
var statearr_42810_42825 = state_42803__$1;
(statearr_42810_42825[(2)] = inst_42799);

(statearr_42810_42825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42804 === (8))){
var inst_42795 = (state_42803[(2)]);
var state_42803__$1 = (function (){var statearr_42811 = state_42803;
(statearr_42811[(8)] = inst_42795);

return statearr_42811;
})();
var statearr_42812_42826 = state_42803__$1;
(statearr_42812_42826[(2)] = null);

(statearr_42812_42826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__32057__auto___42820,ch))
;
return ((function (switch__31943__auto__,c__32057__auto___42820,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__31944__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__31944__auto____0 = (function (){
var statearr_42816 = [null,null,null,null,null,null,null,null,null];
(statearr_42816[(0)] = figwheel$client$heads_up_plugin_$_state_machine__31944__auto__);

(statearr_42816[(1)] = (1));

return statearr_42816;
});
var figwheel$client$heads_up_plugin_$_state_machine__31944__auto____1 = (function (state_42803){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_42803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e42817){if((e42817 instanceof Object)){
var ex__31947__auto__ = e42817;
var statearr_42818_42827 = state_42803;
(statearr_42818_42827[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42828 = state_42803;
state_42803 = G__42828;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__31944__auto__ = function(state_42803){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__31944__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__31944__auto____1.call(this,state_42803);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__31944__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__31944__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto___42820,ch))
})();
var state__32059__auto__ = (function (){var statearr_42819 = f__32058__auto__.call(null);
(statearr_42819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto___42820);

return statearr_42819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto___42820,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32057__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto__){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto__){
return (function (state_42849){
var state_val_42850 = (state_42849[(1)]);
if((state_val_42850 === (1))){
var inst_42844 = cljs.core.async.timeout.call(null,(3000));
var state_42849__$1 = state_42849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42849__$1,(2),inst_42844);
} else {
if((state_val_42850 === (2))){
var inst_42846 = (state_42849[(2)]);
var inst_42847 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_42849__$1 = (function (){var statearr_42851 = state_42849;
(statearr_42851[(7)] = inst_42846);

return statearr_42851;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42849__$1,inst_42847);
} else {
return null;
}
}
});})(c__32057__auto__))
;
return ((function (switch__31943__auto__,c__32057__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__31944__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__31944__auto____0 = (function (){
var statearr_42855 = [null,null,null,null,null,null,null,null];
(statearr_42855[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__31944__auto__);

(statearr_42855[(1)] = (1));

return statearr_42855;
});
var figwheel$client$enforce_project_plugin_$_state_machine__31944__auto____1 = (function (state_42849){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_42849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e42856){if((e42856 instanceof Object)){
var ex__31947__auto__ = e42856;
var statearr_42857_42859 = state_42849;
(statearr_42857_42859[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42860 = state_42849;
state_42849 = G__42860;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__31944__auto__ = function(state_42849){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__31944__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__31944__auto____1.call(this,state_42849);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__31944__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__31944__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto__))
})();
var state__32059__auto__ = (function (){var statearr_42858 = f__32058__auto__.call(null);
(statearr_42858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto__);

return statearr_42858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto__))
);

return c__32057__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5278__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5278__auto__)){
var figwheel_version = temp__5278__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32057__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto__,figwheel_version,temp__5278__auto__){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto__,figwheel_version,temp__5278__auto__){
return (function (state_42883){
var state_val_42884 = (state_42883[(1)]);
if((state_val_42884 === (1))){
var inst_42877 = cljs.core.async.timeout.call(null,(2000));
var state_42883__$1 = state_42883;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42883__$1,(2),inst_42877);
} else {
if((state_val_42884 === (2))){
var inst_42879 = (state_42883[(2)]);
var inst_42880 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_42881 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_42880);
var state_42883__$1 = (function (){var statearr_42885 = state_42883;
(statearr_42885[(7)] = inst_42879);

return statearr_42885;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42883__$1,inst_42881);
} else {
return null;
}
}
});})(c__32057__auto__,figwheel_version,temp__5278__auto__))
;
return ((function (switch__31943__auto__,c__32057__auto__,figwheel_version,temp__5278__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto____0 = (function (){
var statearr_42889 = [null,null,null,null,null,null,null,null];
(statearr_42889[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto__);

(statearr_42889[(1)] = (1));

return statearr_42889;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto____1 = (function (state_42883){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_42883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e42890){if((e42890 instanceof Object)){
var ex__31947__auto__ = e42890;
var statearr_42891_42893 = state_42883;
(statearr_42891_42893[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42894 = state_42883;
state_42883 = G__42894;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto__ = function(state_42883){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto____1.call(this,state_42883);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto__,figwheel_version,temp__5278__auto__))
})();
var state__32059__auto__ = (function (){var statearr_42892 = f__32058__auto__.call(null);
(statearr_42892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto__);

return statearr_42892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto__,figwheel_version,temp__5278__auto__))
);

return c__32057__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__42895){
var map__42899 = p__42895;
var map__42899__$1 = ((((!((map__42899 == null)))?((((map__42899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42899.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42899):map__42899);
var file = cljs.core.get.call(null,map__42899__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__42899__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__42899__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__42901 = "";
var G__42901__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42901),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__42901);
var G__42901__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42901__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__42901__$1);
if(cljs.core.truth_((function (){var and__28447__auto__ = line;
if(cljs.core.truth_(and__28447__auto__)){
return column;
} else {
return and__28447__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42901__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__42901__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__42902){
var map__42909 = p__42902;
var map__42909__$1 = ((((!((map__42909 == null)))?((((map__42909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42909.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42909):map__42909);
var ed = map__42909__$1;
var formatted_exception = cljs.core.get.call(null,map__42909__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__42909__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__42909__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__42911_42915 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__42912_42916 = null;
var count__42913_42917 = (0);
var i__42914_42918 = (0);
while(true){
if((i__42914_42918 < count__42913_42917)){
var msg_42919 = cljs.core._nth.call(null,chunk__42912_42916,i__42914_42918);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42919);

var G__42920 = seq__42911_42915;
var G__42921 = chunk__42912_42916;
var G__42922 = count__42913_42917;
var G__42923 = (i__42914_42918 + (1));
seq__42911_42915 = G__42920;
chunk__42912_42916 = G__42921;
count__42913_42917 = G__42922;
i__42914_42918 = G__42923;
continue;
} else {
var temp__5278__auto___42924 = cljs.core.seq.call(null,seq__42911_42915);
if(temp__5278__auto___42924){
var seq__42911_42925__$1 = temp__5278__auto___42924;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42911_42925__$1)){
var c__29370__auto___42926 = cljs.core.chunk_first.call(null,seq__42911_42925__$1);
var G__42927 = cljs.core.chunk_rest.call(null,seq__42911_42925__$1);
var G__42928 = c__29370__auto___42926;
var G__42929 = cljs.core.count.call(null,c__29370__auto___42926);
var G__42930 = (0);
seq__42911_42915 = G__42927;
chunk__42912_42916 = G__42928;
count__42913_42917 = G__42929;
i__42914_42918 = G__42930;
continue;
} else {
var msg_42931 = cljs.core.first.call(null,seq__42911_42925__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42931);

var G__42932 = cljs.core.next.call(null,seq__42911_42925__$1);
var G__42933 = null;
var G__42934 = (0);
var G__42935 = (0);
seq__42911_42915 = G__42932;
chunk__42912_42916 = G__42933;
count__42913_42917 = G__42934;
i__42914_42918 = G__42935;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__42936){
var map__42939 = p__42936;
var map__42939__$1 = ((((!((map__42939 == null)))?((((map__42939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42939.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42939):map__42939);
var w = map__42939__$1;
var message = cljs.core.get.call(null,map__42939__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/unpacked/compiled/popup/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/unpacked/compiled/popup/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__28447__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__28447__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__28447__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__42951 = cljs.core.seq.call(null,plugins);
var chunk__42952 = null;
var count__42953 = (0);
var i__42954 = (0);
while(true){
if((i__42954 < count__42953)){
var vec__42955 = cljs.core._nth.call(null,chunk__42952,i__42954);
var k = cljs.core.nth.call(null,vec__42955,(0),null);
var plugin = cljs.core.nth.call(null,vec__42955,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42961 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42951,chunk__42952,count__42953,i__42954,pl_42961,vec__42955,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_42961.call(null,msg_hist);
});})(seq__42951,chunk__42952,count__42953,i__42954,pl_42961,vec__42955,k,plugin))
);
} else {
}

var G__42962 = seq__42951;
var G__42963 = chunk__42952;
var G__42964 = count__42953;
var G__42965 = (i__42954 + (1));
seq__42951 = G__42962;
chunk__42952 = G__42963;
count__42953 = G__42964;
i__42954 = G__42965;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__42951);
if(temp__5278__auto__){
var seq__42951__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42951__$1)){
var c__29370__auto__ = cljs.core.chunk_first.call(null,seq__42951__$1);
var G__42966 = cljs.core.chunk_rest.call(null,seq__42951__$1);
var G__42967 = c__29370__auto__;
var G__42968 = cljs.core.count.call(null,c__29370__auto__);
var G__42969 = (0);
seq__42951 = G__42966;
chunk__42952 = G__42967;
count__42953 = G__42968;
i__42954 = G__42969;
continue;
} else {
var vec__42958 = cljs.core.first.call(null,seq__42951__$1);
var k = cljs.core.nth.call(null,vec__42958,(0),null);
var plugin = cljs.core.nth.call(null,vec__42958,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42970 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42951,chunk__42952,count__42953,i__42954,pl_42970,vec__42958,k,plugin,seq__42951__$1,temp__5278__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_42970.call(null,msg_hist);
});})(seq__42951,chunk__42952,count__42953,i__42954,pl_42970,vec__42958,k,plugin,seq__42951__$1,temp__5278__auto__))
);
} else {
}

var G__42971 = cljs.core.next.call(null,seq__42951__$1);
var G__42972 = null;
var G__42973 = (0);
var G__42974 = (0);
seq__42951 = G__42971;
chunk__42952 = G__42972;
count__42953 = G__42973;
i__42954 = G__42974;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args42975 = [];
var len__29680__auto___42982 = arguments.length;
var i__29681__auto___42983 = (0);
while(true){
if((i__29681__auto___42983 < len__29680__auto___42982)){
args42975.push((arguments[i__29681__auto___42983]));

var G__42984 = (i__29681__auto___42983 + (1));
i__29681__auto___42983 = G__42984;
continue;
} else {
}
break;
}

var G__42977 = args42975.length;
switch (G__42977) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42975.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__42978_42986 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__42979_42987 = null;
var count__42980_42988 = (0);
var i__42981_42989 = (0);
while(true){
if((i__42981_42989 < count__42980_42988)){
var msg_42990 = cljs.core._nth.call(null,chunk__42979_42987,i__42981_42989);
figwheel.client.socket.handle_incoming_message.call(null,msg_42990);

var G__42991 = seq__42978_42986;
var G__42992 = chunk__42979_42987;
var G__42993 = count__42980_42988;
var G__42994 = (i__42981_42989 + (1));
seq__42978_42986 = G__42991;
chunk__42979_42987 = G__42992;
count__42980_42988 = G__42993;
i__42981_42989 = G__42994;
continue;
} else {
var temp__5278__auto___42995 = cljs.core.seq.call(null,seq__42978_42986);
if(temp__5278__auto___42995){
var seq__42978_42996__$1 = temp__5278__auto___42995;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42978_42996__$1)){
var c__29370__auto___42997 = cljs.core.chunk_first.call(null,seq__42978_42996__$1);
var G__42998 = cljs.core.chunk_rest.call(null,seq__42978_42996__$1);
var G__42999 = c__29370__auto___42997;
var G__43000 = cljs.core.count.call(null,c__29370__auto___42997);
var G__43001 = (0);
seq__42978_42986 = G__42998;
chunk__42979_42987 = G__42999;
count__42980_42988 = G__43000;
i__42981_42989 = G__43001;
continue;
} else {
var msg_43002 = cljs.core.first.call(null,seq__42978_42996__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_43002);

var G__43003 = cljs.core.next.call(null,seq__42978_42996__$1);
var G__43004 = null;
var G__43005 = (0);
var G__43006 = (0);
seq__42978_42986 = G__43003;
chunk__42979_42987 = G__43004;
count__42980_42988 = G__43005;
i__42981_42989 = G__43006;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__29687__auto__ = [];
var len__29680__auto___43011 = arguments.length;
var i__29681__auto___43012 = (0);
while(true){
if((i__29681__auto___43012 < len__29680__auto___43011)){
args__29687__auto__.push((arguments[i__29681__auto___43012]));

var G__43013 = (i__29681__auto___43012 + (1));
i__29681__auto___43012 = G__43013;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__43008){
var map__43009 = p__43008;
var map__43009__$1 = ((((!((map__43009 == null)))?((((map__43009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43009.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43009):map__43009);
var opts = map__43009__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq43007){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43007));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e43015){if((e43015 instanceof Error)){
var e = e43015;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e43015;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__43019){
var map__43020 = p__43019;
var map__43020__$1 = ((((!((map__43020 == null)))?((((map__43020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43020.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43020):map__43020);
var msg_name = cljs.core.get.call(null,map__43020__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1497481545559