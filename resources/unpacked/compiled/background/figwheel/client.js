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
var args57274 = [];
var len__29680__auto___57277 = arguments.length;
var i__29681__auto___57278 = (0);
while(true){
if((i__29681__auto___57278 < len__29680__auto___57277)){
args57274.push((arguments[i__29681__auto___57278]));

var G__57279 = (i__29681__auto___57278 + (1));
i__29681__auto___57278 = G__57279;
continue;
} else {
}
break;
}

var G__57276 = args57274.length;
switch (G__57276) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args57274.length)].join('')));

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
var len__29680__auto___57282 = arguments.length;
var i__29681__auto___57283 = (0);
while(true){
if((i__29681__auto___57283 < len__29680__auto___57282)){
args__29687__auto__.push((arguments[i__29681__auto___57283]));

var G__57284 = (i__29681__auto___57283 + (1));
i__29681__auto___57283 = G__57284;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq57281){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57281));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29687__auto__ = [];
var len__29680__auto___57286 = arguments.length;
var i__29681__auto___57287 = (0);
while(true){
if((i__29681__auto___57287 < len__29680__auto___57286)){
args__29687__auto__.push((arguments[i__29681__auto___57287]));

var G__57288 = (i__29681__auto___57287 + (1));
i__29681__auto___57287 = G__57288;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq57285){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57285));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__57289){
var map__57292 = p__57289;
var map__57292__$1 = ((((!((map__57292 == null)))?((((map__57292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57292.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57292):map__57292);
var message = cljs.core.get.call(null,map__57292__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__57292__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__32057__auto___57454 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto___57454,ch){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto___57454,ch){
return (function (state_57423){
var state_val_57424 = (state_57423[(1)]);
if((state_val_57424 === (7))){
var inst_57419 = (state_57423[(2)]);
var state_57423__$1 = state_57423;
var statearr_57425_57455 = state_57423__$1;
(statearr_57425_57455[(2)] = inst_57419);

(statearr_57425_57455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57424 === (1))){
var state_57423__$1 = state_57423;
var statearr_57426_57456 = state_57423__$1;
(statearr_57426_57456[(2)] = null);

(statearr_57426_57456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57424 === (4))){
var inst_57376 = (state_57423[(7)]);
var inst_57376__$1 = (state_57423[(2)]);
var state_57423__$1 = (function (){var statearr_57427 = state_57423;
(statearr_57427[(7)] = inst_57376__$1);

return statearr_57427;
})();
if(cljs.core.truth_(inst_57376__$1)){
var statearr_57428_57457 = state_57423__$1;
(statearr_57428_57457[(1)] = (5));

} else {
var statearr_57429_57458 = state_57423__$1;
(statearr_57429_57458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57424 === (15))){
var inst_57383 = (state_57423[(8)]);
var inst_57398 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_57383);
var inst_57399 = cljs.core.first.call(null,inst_57398);
var inst_57400 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_57399);
var inst_57401 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_57400)].join('');
var inst_57402 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_57401);
var state_57423__$1 = state_57423;
var statearr_57430_57459 = state_57423__$1;
(statearr_57430_57459[(2)] = inst_57402);

(statearr_57430_57459[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57424 === (13))){
var inst_57407 = (state_57423[(2)]);
var state_57423__$1 = state_57423;
var statearr_57431_57460 = state_57423__$1;
(statearr_57431_57460[(2)] = inst_57407);

(statearr_57431_57460[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57424 === (6))){
var state_57423__$1 = state_57423;
var statearr_57432_57461 = state_57423__$1;
(statearr_57432_57461[(2)] = null);

(statearr_57432_57461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57424 === (17))){
var inst_57405 = (state_57423[(2)]);
var state_57423__$1 = state_57423;
var statearr_57433_57462 = state_57423__$1;
(statearr_57433_57462[(2)] = inst_57405);

(statearr_57433_57462[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57424 === (3))){
var inst_57421 = (state_57423[(2)]);
var state_57423__$1 = state_57423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57423__$1,inst_57421);
} else {
if((state_val_57424 === (12))){
var inst_57382 = (state_57423[(9)]);
var inst_57396 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_57382,opts);
var state_57423__$1 = state_57423;
if(cljs.core.truth_(inst_57396)){
var statearr_57434_57463 = state_57423__$1;
(statearr_57434_57463[(1)] = (15));

} else {
var statearr_57435_57464 = state_57423__$1;
(statearr_57435_57464[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57424 === (2))){
var state_57423__$1 = state_57423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57423__$1,(4),ch);
} else {
if((state_val_57424 === (11))){
var inst_57383 = (state_57423[(8)]);
var inst_57388 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57389 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_57383);
var inst_57390 = cljs.core.async.timeout.call(null,(1000));
var inst_57391 = [inst_57389,inst_57390];
var inst_57392 = (new cljs.core.PersistentVector(null,2,(5),inst_57388,inst_57391,null));
var state_57423__$1 = state_57423;
return cljs.core.async.ioc_alts_BANG_.call(null,state_57423__$1,(14),inst_57392);
} else {
if((state_val_57424 === (9))){
var inst_57383 = (state_57423[(8)]);
var inst_57409 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_57410 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_57383);
var inst_57411 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_57410);
var inst_57412 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_57411)].join('');
var inst_57413 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_57412);
var state_57423__$1 = (function (){var statearr_57436 = state_57423;
(statearr_57436[(10)] = inst_57409);

return statearr_57436;
})();
var statearr_57437_57465 = state_57423__$1;
(statearr_57437_57465[(2)] = inst_57413);

(statearr_57437_57465[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57424 === (5))){
var inst_57376 = (state_57423[(7)]);
var inst_57378 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_57379 = (new cljs.core.PersistentArrayMap(null,2,inst_57378,null));
var inst_57380 = (new cljs.core.PersistentHashSet(null,inst_57379,null));
var inst_57381 = figwheel.client.focus_msgs.call(null,inst_57380,inst_57376);
var inst_57382 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_57381);
var inst_57383 = cljs.core.first.call(null,inst_57381);
var inst_57384 = figwheel.client.autoload_QMARK_.call(null);
var state_57423__$1 = (function (){var statearr_57438 = state_57423;
(statearr_57438[(8)] = inst_57383);

(statearr_57438[(9)] = inst_57382);

return statearr_57438;
})();
if(cljs.core.truth_(inst_57384)){
var statearr_57439_57466 = state_57423__$1;
(statearr_57439_57466[(1)] = (8));

} else {
var statearr_57440_57467 = state_57423__$1;
(statearr_57440_57467[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57424 === (14))){
var inst_57394 = (state_57423[(2)]);
var state_57423__$1 = state_57423;
var statearr_57441_57468 = state_57423__$1;
(statearr_57441_57468[(2)] = inst_57394);

(statearr_57441_57468[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57424 === (16))){
var state_57423__$1 = state_57423;
var statearr_57442_57469 = state_57423__$1;
(statearr_57442_57469[(2)] = null);

(statearr_57442_57469[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57424 === (10))){
var inst_57415 = (state_57423[(2)]);
var state_57423__$1 = (function (){var statearr_57443 = state_57423;
(statearr_57443[(11)] = inst_57415);

return statearr_57443;
})();
var statearr_57444_57470 = state_57423__$1;
(statearr_57444_57470[(2)] = null);

(statearr_57444_57470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57424 === (8))){
var inst_57382 = (state_57423[(9)]);
var inst_57386 = figwheel.client.reload_file_state_QMARK_.call(null,inst_57382,opts);
var state_57423__$1 = state_57423;
if(cljs.core.truth_(inst_57386)){
var statearr_57445_57471 = state_57423__$1;
(statearr_57445_57471[(1)] = (11));

} else {
var statearr_57446_57472 = state_57423__$1;
(statearr_57446_57472[(1)] = (12));

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
});})(c__32057__auto___57454,ch))
;
return ((function (switch__31943__auto__,c__32057__auto___57454,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__31944__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__31944__auto____0 = (function (){
var statearr_57450 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57450[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__31944__auto__);

(statearr_57450[(1)] = (1));

return statearr_57450;
});
var figwheel$client$file_reloader_plugin_$_state_machine__31944__auto____1 = (function (state_57423){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_57423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e57451){if((e57451 instanceof Object)){
var ex__31947__auto__ = e57451;
var statearr_57452_57473 = state_57423;
(statearr_57452_57473[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57474 = state_57423;
state_57423 = G__57474;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__31944__auto__ = function(state_57423){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__31944__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__31944__auto____1.call(this,state_57423);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__31944__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__31944__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto___57454,ch))
})();
var state__32059__auto__ = (function (){var statearr_57453 = f__32058__auto__.call(null);
(statearr_57453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto___57454);

return statearr_57453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto___57454,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__57475_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__57475_SHARP_));
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
var base_path_57478 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_57478){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e57477){if((e57477 instanceof Error)){
var e = e57477;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_57478], null));
} else {
var e = e57477;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_57478))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__57479){
var map__57488 = p__57479;
var map__57488__$1 = ((((!((map__57488 == null)))?((((map__57488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57488.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57488):map__57488);
var opts = map__57488__$1;
var build_id = cljs.core.get.call(null,map__57488__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__57488,map__57488__$1,opts,build_id){
return (function (p__57490){
var vec__57491 = p__57490;
var seq__57492 = cljs.core.seq.call(null,vec__57491);
var first__57493 = cljs.core.first.call(null,seq__57492);
var seq__57492__$1 = cljs.core.next.call(null,seq__57492);
var map__57494 = first__57493;
var map__57494__$1 = ((((!((map__57494 == null)))?((((map__57494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57494.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57494):map__57494);
var msg = map__57494__$1;
var msg_name = cljs.core.get.call(null,map__57494__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__57492__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__57491,seq__57492,first__57493,seq__57492__$1,map__57494,map__57494__$1,msg,msg_name,_,map__57488,map__57488__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__57491,seq__57492,first__57493,seq__57492__$1,map__57494,map__57494__$1,msg,msg_name,_,map__57488,map__57488__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__57488,map__57488__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__57502){
var vec__57503 = p__57502;
var seq__57504 = cljs.core.seq.call(null,vec__57503);
var first__57505 = cljs.core.first.call(null,seq__57504);
var seq__57504__$1 = cljs.core.next.call(null,seq__57504);
var map__57506 = first__57505;
var map__57506__$1 = ((((!((map__57506 == null)))?((((map__57506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57506.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57506):map__57506);
var msg = map__57506__$1;
var msg_name = cljs.core.get.call(null,map__57506__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__57504__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__57508){
var map__57520 = p__57508;
var map__57520__$1 = ((((!((map__57520 == null)))?((((map__57520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57520.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57520):map__57520);
var on_compile_warning = cljs.core.get.call(null,map__57520__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__57520__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__57520,map__57520__$1,on_compile_warning,on_compile_fail){
return (function (p__57522){
var vec__57523 = p__57522;
var seq__57524 = cljs.core.seq.call(null,vec__57523);
var first__57525 = cljs.core.first.call(null,seq__57524);
var seq__57524__$1 = cljs.core.next.call(null,seq__57524);
var map__57526 = first__57525;
var map__57526__$1 = ((((!((map__57526 == null)))?((((map__57526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57526.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57526):map__57526);
var msg = map__57526__$1;
var msg_name = cljs.core.get.call(null,map__57526__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__57524__$1;
var pred__57528 = cljs.core._EQ_;
var expr__57529 = msg_name;
if(cljs.core.truth_(pred__57528.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__57529))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__57528.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__57529))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__57520,map__57520__$1,on_compile_warning,on_compile_fail))
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
return (function (state_57757){
var state_val_57758 = (state_57757[(1)]);
if((state_val_57758 === (7))){
var inst_57677 = (state_57757[(2)]);
var state_57757__$1 = state_57757;
if(cljs.core.truth_(inst_57677)){
var statearr_57759_57809 = state_57757__$1;
(statearr_57759_57809[(1)] = (8));

} else {
var statearr_57760_57810 = state_57757__$1;
(statearr_57760_57810[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57758 === (20))){
var inst_57751 = (state_57757[(2)]);
var state_57757__$1 = state_57757;
var statearr_57761_57811 = state_57757__$1;
(statearr_57761_57811[(2)] = inst_57751);

(statearr_57761_57811[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57758 === (27))){
var inst_57747 = (state_57757[(2)]);
var state_57757__$1 = state_57757;
var statearr_57762_57812 = state_57757__$1;
(statearr_57762_57812[(2)] = inst_57747);

(statearr_57762_57812[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57758 === (1))){
var inst_57670 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_57757__$1 = state_57757;
if(cljs.core.truth_(inst_57670)){
var statearr_57763_57813 = state_57757__$1;
(statearr_57763_57813[(1)] = (2));

} else {
var statearr_57764_57814 = state_57757__$1;
(statearr_57764_57814[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57758 === (24))){
var inst_57749 = (state_57757[(2)]);
var state_57757__$1 = state_57757;
var statearr_57765_57815 = state_57757__$1;
(statearr_57765_57815[(2)] = inst_57749);

(statearr_57765_57815[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57758 === (4))){
var inst_57755 = (state_57757[(2)]);
var state_57757__$1 = state_57757;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57757__$1,inst_57755);
} else {
if((state_val_57758 === (15))){
var inst_57753 = (state_57757[(2)]);
var state_57757__$1 = state_57757;
var statearr_57766_57816 = state_57757__$1;
(statearr_57766_57816[(2)] = inst_57753);

(statearr_57766_57816[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57758 === (21))){
var inst_57706 = (state_57757[(2)]);
var inst_57707 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_57708 = figwheel.client.auto_jump_to_error.call(null,opts,inst_57707);
var state_57757__$1 = (function (){var statearr_57767 = state_57757;
(statearr_57767[(7)] = inst_57706);

return statearr_57767;
})();
var statearr_57768_57817 = state_57757__$1;
(statearr_57768_57817[(2)] = inst_57708);

(statearr_57768_57817[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57758 === (31))){
var inst_57736 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_57757__$1 = state_57757;
if(cljs.core.truth_(inst_57736)){
var statearr_57769_57818 = state_57757__$1;
(statearr_57769_57818[(1)] = (34));

} else {
var statearr_57770_57819 = state_57757__$1;
(statearr_57770_57819[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57758 === (32))){
var inst_57745 = (state_57757[(2)]);
var state_57757__$1 = state_57757;
var statearr_57771_57820 = state_57757__$1;
(statearr_57771_57820[(2)] = inst_57745);

(statearr_57771_57820[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57758 === (33))){
var inst_57732 = (state_57757[(2)]);
var inst_57733 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_57734 = figwheel.client.auto_jump_to_error.call(null,opts,inst_57733);
var state_57757__$1 = (function (){var statearr_57772 = state_57757;
(statearr_57772[(8)] = inst_57732);

return statearr_57772;
})();
var statearr_57773_57821 = state_57757__$1;
(statearr_57773_57821[(2)] = inst_57734);

(statearr_57773_57821[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57758 === (13))){
var inst_57691 = figwheel.client.heads_up.clear.call(null);
var state_57757__$1 = state_57757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57757__$1,(16),inst_57691);
} else {
if((state_val_57758 === (22))){
var inst_57712 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_57713 = figwheel.client.heads_up.append_warning_message.call(null,inst_57712);
var state_57757__$1 = state_57757;
var statearr_57774_57822 = state_57757__$1;
(statearr_57774_57822[(2)] = inst_57713);

(statearr_57774_57822[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57758 === (36))){
var inst_57743 = (state_57757[(2)]);
var state_57757__$1 = state_57757;
var statearr_57775_57823 = state_57757__$1;
(statearr_57775_57823[(2)] = inst_57743);

(statearr_57775_57823[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57758 === (29))){
var inst_57723 = (state_57757[(2)]);
var inst_57724 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_57725 = figwheel.client.auto_jump_to_error.call(null,opts,inst_57724);
var state_57757__$1 = (function (){var statearr_57776 = state_57757;
(statearr_57776[(9)] = inst_57723);

return statearr_57776;
})();
var statearr_57777_57824 = state_57757__$1;
(statearr_57777_57824[(2)] = inst_57725);

(statearr_57777_57824[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57758 === (6))){
var inst_57672 = (state_57757[(10)]);
var state_57757__$1 = state_57757;
var statearr_57778_57825 = state_57757__$1;
(statearr_57778_57825[(2)] = inst_57672);

(statearr_57778_57825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57758 === (28))){
var inst_57719 = (state_57757[(2)]);
var inst_57720 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_57721 = figwheel.client.heads_up.display_warning.call(null,inst_57720);
var state_57757__$1 = (function (){var statearr_57779 = state_57757;
(statearr_57779[(11)] = inst_57719);

return statearr_57779;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57757__$1,(29),inst_57721);
} else {
if((state_val_57758 === (25))){
var inst_57717 = figwheel.client.heads_up.clear.call(null);
var state_57757__$1 = state_57757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57757__$1,(28),inst_57717);
} else {
if((state_val_57758 === (34))){
var inst_57738 = figwheel.client.heads_up.flash_loaded.call(null);
var state_57757__$1 = state_57757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57757__$1,(37),inst_57738);
} else {
if((state_val_57758 === (17))){
var inst_57697 = (state_57757[(2)]);
var inst_57698 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_57699 = figwheel.client.auto_jump_to_error.call(null,opts,inst_57698);
var state_57757__$1 = (function (){var statearr_57780 = state_57757;
(statearr_57780[(12)] = inst_57697);

return statearr_57780;
})();
var statearr_57781_57826 = state_57757__$1;
(statearr_57781_57826[(2)] = inst_57699);

(statearr_57781_57826[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57758 === (3))){
var inst_57689 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_57757__$1 = state_57757;
if(cljs.core.truth_(inst_57689)){
var statearr_57782_57827 = state_57757__$1;
(statearr_57782_57827[(1)] = (13));

} else {
var statearr_57783_57828 = state_57757__$1;
(statearr_57783_57828[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57758 === (12))){
var inst_57685 = (state_57757[(2)]);
var state_57757__$1 = state_57757;
var statearr_57784_57829 = state_57757__$1;
(statearr_57784_57829[(2)] = inst_57685);

(statearr_57784_57829[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57758 === (2))){
var inst_57672 = (state_57757[(10)]);
var inst_57672__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_57757__$1 = (function (){var statearr_57785 = state_57757;
(statearr_57785[(10)] = inst_57672__$1);

return statearr_57785;
})();
if(cljs.core.truth_(inst_57672__$1)){
var statearr_57786_57830 = state_57757__$1;
(statearr_57786_57830[(1)] = (5));

} else {
var statearr_57787_57831 = state_57757__$1;
(statearr_57787_57831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57758 === (23))){
var inst_57715 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_57757__$1 = state_57757;
if(cljs.core.truth_(inst_57715)){
var statearr_57788_57832 = state_57757__$1;
(statearr_57788_57832[(1)] = (25));

} else {
var statearr_57789_57833 = state_57757__$1;
(statearr_57789_57833[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57758 === (35))){
var state_57757__$1 = state_57757;
var statearr_57790_57834 = state_57757__$1;
(statearr_57790_57834[(2)] = null);

(statearr_57790_57834[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57758 === (19))){
var inst_57710 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_57757__$1 = state_57757;
if(cljs.core.truth_(inst_57710)){
var statearr_57791_57835 = state_57757__$1;
(statearr_57791_57835[(1)] = (22));

} else {
var statearr_57792_57836 = state_57757__$1;
(statearr_57792_57836[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57758 === (11))){
var inst_57681 = (state_57757[(2)]);
var state_57757__$1 = state_57757;
var statearr_57793_57837 = state_57757__$1;
(statearr_57793_57837[(2)] = inst_57681);

(statearr_57793_57837[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57758 === (9))){
var inst_57683 = figwheel.client.heads_up.clear.call(null);
var state_57757__$1 = state_57757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57757__$1,(12),inst_57683);
} else {
if((state_val_57758 === (5))){
var inst_57674 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_57757__$1 = state_57757;
var statearr_57794_57838 = state_57757__$1;
(statearr_57794_57838[(2)] = inst_57674);

(statearr_57794_57838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57758 === (14))){
var inst_57701 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_57757__$1 = state_57757;
if(cljs.core.truth_(inst_57701)){
var statearr_57795_57839 = state_57757__$1;
(statearr_57795_57839[(1)] = (18));

} else {
var statearr_57796_57840 = state_57757__$1;
(statearr_57796_57840[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57758 === (26))){
var inst_57727 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_57757__$1 = state_57757;
if(cljs.core.truth_(inst_57727)){
var statearr_57797_57841 = state_57757__$1;
(statearr_57797_57841[(1)] = (30));

} else {
var statearr_57798_57842 = state_57757__$1;
(statearr_57798_57842[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57758 === (16))){
var inst_57693 = (state_57757[(2)]);
var inst_57694 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_57695 = figwheel.client.heads_up.display_exception.call(null,inst_57694);
var state_57757__$1 = (function (){var statearr_57799 = state_57757;
(statearr_57799[(13)] = inst_57693);

return statearr_57799;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57757__$1,(17),inst_57695);
} else {
if((state_val_57758 === (30))){
var inst_57729 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_57730 = figwheel.client.heads_up.display_warning.call(null,inst_57729);
var state_57757__$1 = state_57757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57757__$1,(33),inst_57730);
} else {
if((state_val_57758 === (10))){
var inst_57687 = (state_57757[(2)]);
var state_57757__$1 = state_57757;
var statearr_57800_57843 = state_57757__$1;
(statearr_57800_57843[(2)] = inst_57687);

(statearr_57800_57843[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57758 === (18))){
var inst_57703 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_57704 = figwheel.client.heads_up.display_exception.call(null,inst_57703);
var state_57757__$1 = state_57757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57757__$1,(21),inst_57704);
} else {
if((state_val_57758 === (37))){
var inst_57740 = (state_57757[(2)]);
var state_57757__$1 = state_57757;
var statearr_57801_57844 = state_57757__$1;
(statearr_57801_57844[(2)] = inst_57740);

(statearr_57801_57844[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57758 === (8))){
var inst_57679 = figwheel.client.heads_up.flash_loaded.call(null);
var state_57757__$1 = state_57757;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57757__$1,(11),inst_57679);
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
var statearr_57805 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57805[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto__);

(statearr_57805[(1)] = (1));

return statearr_57805;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto____1 = (function (state_57757){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_57757);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e57806){if((e57806 instanceof Object)){
var ex__31947__auto__ = e57806;
var statearr_57807_57845 = state_57757;
(statearr_57807_57845[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57757);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57846 = state_57757;
state_57757 = G__57846;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto__ = function(state_57757){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto____1.call(this,state_57757);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto__,msg_hist,msg_names,msg))
})();
var state__32059__auto__ = (function (){var statearr_57808 = f__32058__auto__.call(null);
(statearr_57808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto__);

return statearr_57808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto__,msg_hist,msg_names,msg))
);

return c__32057__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__32057__auto___57909 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto___57909,ch){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto___57909,ch){
return (function (state_57892){
var state_val_57893 = (state_57892[(1)]);
if((state_val_57893 === (1))){
var state_57892__$1 = state_57892;
var statearr_57894_57910 = state_57892__$1;
(statearr_57894_57910[(2)] = null);

(statearr_57894_57910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57893 === (2))){
var state_57892__$1 = state_57892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57892__$1,(4),ch);
} else {
if((state_val_57893 === (3))){
var inst_57890 = (state_57892[(2)]);
var state_57892__$1 = state_57892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57892__$1,inst_57890);
} else {
if((state_val_57893 === (4))){
var inst_57880 = (state_57892[(7)]);
var inst_57880__$1 = (state_57892[(2)]);
var state_57892__$1 = (function (){var statearr_57895 = state_57892;
(statearr_57895[(7)] = inst_57880__$1);

return statearr_57895;
})();
if(cljs.core.truth_(inst_57880__$1)){
var statearr_57896_57911 = state_57892__$1;
(statearr_57896_57911[(1)] = (5));

} else {
var statearr_57897_57912 = state_57892__$1;
(statearr_57897_57912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57893 === (5))){
var inst_57880 = (state_57892[(7)]);
var inst_57882 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_57880);
var state_57892__$1 = state_57892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57892__$1,(8),inst_57882);
} else {
if((state_val_57893 === (6))){
var state_57892__$1 = state_57892;
var statearr_57898_57913 = state_57892__$1;
(statearr_57898_57913[(2)] = null);

(statearr_57898_57913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57893 === (7))){
var inst_57888 = (state_57892[(2)]);
var state_57892__$1 = state_57892;
var statearr_57899_57914 = state_57892__$1;
(statearr_57899_57914[(2)] = inst_57888);

(statearr_57899_57914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57893 === (8))){
var inst_57884 = (state_57892[(2)]);
var state_57892__$1 = (function (){var statearr_57900 = state_57892;
(statearr_57900[(8)] = inst_57884);

return statearr_57900;
})();
var statearr_57901_57915 = state_57892__$1;
(statearr_57901_57915[(2)] = null);

(statearr_57901_57915[(1)] = (2));


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
});})(c__32057__auto___57909,ch))
;
return ((function (switch__31943__auto__,c__32057__auto___57909,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__31944__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__31944__auto____0 = (function (){
var statearr_57905 = [null,null,null,null,null,null,null,null,null];
(statearr_57905[(0)] = figwheel$client$heads_up_plugin_$_state_machine__31944__auto__);

(statearr_57905[(1)] = (1));

return statearr_57905;
});
var figwheel$client$heads_up_plugin_$_state_machine__31944__auto____1 = (function (state_57892){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_57892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e57906){if((e57906 instanceof Object)){
var ex__31947__auto__ = e57906;
var statearr_57907_57916 = state_57892;
(statearr_57907_57916[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57917 = state_57892;
state_57892 = G__57917;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__31944__auto__ = function(state_57892){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__31944__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__31944__auto____1.call(this,state_57892);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__31944__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__31944__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto___57909,ch))
})();
var state__32059__auto__ = (function (){var statearr_57908 = f__32058__auto__.call(null);
(statearr_57908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto___57909);

return statearr_57908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto___57909,ch))
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
return (function (state_57938){
var state_val_57939 = (state_57938[(1)]);
if((state_val_57939 === (1))){
var inst_57933 = cljs.core.async.timeout.call(null,(3000));
var state_57938__$1 = state_57938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57938__$1,(2),inst_57933);
} else {
if((state_val_57939 === (2))){
var inst_57935 = (state_57938[(2)]);
var inst_57936 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_57938__$1 = (function (){var statearr_57940 = state_57938;
(statearr_57940[(7)] = inst_57935);

return statearr_57940;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57938__$1,inst_57936);
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
var statearr_57944 = [null,null,null,null,null,null,null,null];
(statearr_57944[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__31944__auto__);

(statearr_57944[(1)] = (1));

return statearr_57944;
});
var figwheel$client$enforce_project_plugin_$_state_machine__31944__auto____1 = (function (state_57938){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_57938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e57945){if((e57945 instanceof Object)){
var ex__31947__auto__ = e57945;
var statearr_57946_57948 = state_57938;
(statearr_57946_57948[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57949 = state_57938;
state_57938 = G__57949;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__31944__auto__ = function(state_57938){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__31944__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__31944__auto____1.call(this,state_57938);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__31944__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__31944__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto__))
})();
var state__32059__auto__ = (function (){var statearr_57947 = f__32058__auto__.call(null);
(statearr_57947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto__);

return statearr_57947;
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
return (function (state_57972){
var state_val_57973 = (state_57972[(1)]);
if((state_val_57973 === (1))){
var inst_57966 = cljs.core.async.timeout.call(null,(2000));
var state_57972__$1 = state_57972;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57972__$1,(2),inst_57966);
} else {
if((state_val_57973 === (2))){
var inst_57968 = (state_57972[(2)]);
var inst_57969 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_57970 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_57969);
var state_57972__$1 = (function (){var statearr_57974 = state_57972;
(statearr_57974[(7)] = inst_57968);

return statearr_57974;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57972__$1,inst_57970);
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
var statearr_57978 = [null,null,null,null,null,null,null,null];
(statearr_57978[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto__);

(statearr_57978[(1)] = (1));

return statearr_57978;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto____1 = (function (state_57972){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_57972);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e57979){if((e57979 instanceof Object)){
var ex__31947__auto__ = e57979;
var statearr_57980_57982 = state_57972;
(statearr_57980_57982[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57983 = state_57972;
state_57972 = G__57983;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto__ = function(state_57972){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto____1.call(this,state_57972);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto__,figwheel_version,temp__5278__auto__))
})();
var state__32059__auto__ = (function (){var statearr_57981 = f__32058__auto__.call(null);
(statearr_57981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto__);

return statearr_57981;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__57984){
var map__57988 = p__57984;
var map__57988__$1 = ((((!((map__57988 == null)))?((((map__57988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57988.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57988):map__57988);
var file = cljs.core.get.call(null,map__57988__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__57988__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__57988__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__57990 = "";
var G__57990__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57990),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__57990);
var G__57990__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57990__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__57990__$1);
if(cljs.core.truth_((function (){var and__28447__auto__ = line;
if(cljs.core.truth_(and__28447__auto__)){
return column;
} else {
return and__28447__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57990__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__57990__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__57991){
var map__57998 = p__57991;
var map__57998__$1 = ((((!((map__57998 == null)))?((((map__57998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57998.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57998):map__57998);
var ed = map__57998__$1;
var formatted_exception = cljs.core.get.call(null,map__57998__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__57998__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__57998__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__58000_58004 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__58001_58005 = null;
var count__58002_58006 = (0);
var i__58003_58007 = (0);
while(true){
if((i__58003_58007 < count__58002_58006)){
var msg_58008 = cljs.core._nth.call(null,chunk__58001_58005,i__58003_58007);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_58008);

var G__58009 = seq__58000_58004;
var G__58010 = chunk__58001_58005;
var G__58011 = count__58002_58006;
var G__58012 = (i__58003_58007 + (1));
seq__58000_58004 = G__58009;
chunk__58001_58005 = G__58010;
count__58002_58006 = G__58011;
i__58003_58007 = G__58012;
continue;
} else {
var temp__5278__auto___58013 = cljs.core.seq.call(null,seq__58000_58004);
if(temp__5278__auto___58013){
var seq__58000_58014__$1 = temp__5278__auto___58013;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58000_58014__$1)){
var c__29370__auto___58015 = cljs.core.chunk_first.call(null,seq__58000_58014__$1);
var G__58016 = cljs.core.chunk_rest.call(null,seq__58000_58014__$1);
var G__58017 = c__29370__auto___58015;
var G__58018 = cljs.core.count.call(null,c__29370__auto___58015);
var G__58019 = (0);
seq__58000_58004 = G__58016;
chunk__58001_58005 = G__58017;
count__58002_58006 = G__58018;
i__58003_58007 = G__58019;
continue;
} else {
var msg_58020 = cljs.core.first.call(null,seq__58000_58014__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_58020);

var G__58021 = cljs.core.next.call(null,seq__58000_58014__$1);
var G__58022 = null;
var G__58023 = (0);
var G__58024 = (0);
seq__58000_58004 = G__58021;
chunk__58001_58005 = G__58022;
count__58002_58006 = G__58023;
i__58003_58007 = G__58024;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__58025){
var map__58028 = p__58025;
var map__58028__$1 = ((((!((map__58028 == null)))?((((map__58028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58028.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58028):map__58028);
var w = map__58028__$1;
var message = cljs.core.get.call(null,map__58028__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/unpacked/compiled/background/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/unpacked/compiled/background/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
var seq__58040 = cljs.core.seq.call(null,plugins);
var chunk__58041 = null;
var count__58042 = (0);
var i__58043 = (0);
while(true){
if((i__58043 < count__58042)){
var vec__58044 = cljs.core._nth.call(null,chunk__58041,i__58043);
var k = cljs.core.nth.call(null,vec__58044,(0),null);
var plugin = cljs.core.nth.call(null,vec__58044,(1),null);
if(cljs.core.truth_(plugin)){
var pl_58050 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__58040,chunk__58041,count__58042,i__58043,pl_58050,vec__58044,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_58050.call(null,msg_hist);
});})(seq__58040,chunk__58041,count__58042,i__58043,pl_58050,vec__58044,k,plugin))
);
} else {
}

var G__58051 = seq__58040;
var G__58052 = chunk__58041;
var G__58053 = count__58042;
var G__58054 = (i__58043 + (1));
seq__58040 = G__58051;
chunk__58041 = G__58052;
count__58042 = G__58053;
i__58043 = G__58054;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__58040);
if(temp__5278__auto__){
var seq__58040__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58040__$1)){
var c__29370__auto__ = cljs.core.chunk_first.call(null,seq__58040__$1);
var G__58055 = cljs.core.chunk_rest.call(null,seq__58040__$1);
var G__58056 = c__29370__auto__;
var G__58057 = cljs.core.count.call(null,c__29370__auto__);
var G__58058 = (0);
seq__58040 = G__58055;
chunk__58041 = G__58056;
count__58042 = G__58057;
i__58043 = G__58058;
continue;
} else {
var vec__58047 = cljs.core.first.call(null,seq__58040__$1);
var k = cljs.core.nth.call(null,vec__58047,(0),null);
var plugin = cljs.core.nth.call(null,vec__58047,(1),null);
if(cljs.core.truth_(plugin)){
var pl_58059 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__58040,chunk__58041,count__58042,i__58043,pl_58059,vec__58047,k,plugin,seq__58040__$1,temp__5278__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_58059.call(null,msg_hist);
});})(seq__58040,chunk__58041,count__58042,i__58043,pl_58059,vec__58047,k,plugin,seq__58040__$1,temp__5278__auto__))
);
} else {
}

var G__58060 = cljs.core.next.call(null,seq__58040__$1);
var G__58061 = null;
var G__58062 = (0);
var G__58063 = (0);
seq__58040 = G__58060;
chunk__58041 = G__58061;
count__58042 = G__58062;
i__58043 = G__58063;
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
var args58064 = [];
var len__29680__auto___58071 = arguments.length;
var i__29681__auto___58072 = (0);
while(true){
if((i__29681__auto___58072 < len__29680__auto___58071)){
args58064.push((arguments[i__29681__auto___58072]));

var G__58073 = (i__29681__auto___58072 + (1));
i__29681__auto___58072 = G__58073;
continue;
} else {
}
break;
}

var G__58066 = args58064.length;
switch (G__58066) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args58064.length)].join('')));

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

var seq__58067_58075 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__58068_58076 = null;
var count__58069_58077 = (0);
var i__58070_58078 = (0);
while(true){
if((i__58070_58078 < count__58069_58077)){
var msg_58079 = cljs.core._nth.call(null,chunk__58068_58076,i__58070_58078);
figwheel.client.socket.handle_incoming_message.call(null,msg_58079);

var G__58080 = seq__58067_58075;
var G__58081 = chunk__58068_58076;
var G__58082 = count__58069_58077;
var G__58083 = (i__58070_58078 + (1));
seq__58067_58075 = G__58080;
chunk__58068_58076 = G__58081;
count__58069_58077 = G__58082;
i__58070_58078 = G__58083;
continue;
} else {
var temp__5278__auto___58084 = cljs.core.seq.call(null,seq__58067_58075);
if(temp__5278__auto___58084){
var seq__58067_58085__$1 = temp__5278__auto___58084;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58067_58085__$1)){
var c__29370__auto___58086 = cljs.core.chunk_first.call(null,seq__58067_58085__$1);
var G__58087 = cljs.core.chunk_rest.call(null,seq__58067_58085__$1);
var G__58088 = c__29370__auto___58086;
var G__58089 = cljs.core.count.call(null,c__29370__auto___58086);
var G__58090 = (0);
seq__58067_58075 = G__58087;
chunk__58068_58076 = G__58088;
count__58069_58077 = G__58089;
i__58070_58078 = G__58090;
continue;
} else {
var msg_58091 = cljs.core.first.call(null,seq__58067_58085__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_58091);

var G__58092 = cljs.core.next.call(null,seq__58067_58085__$1);
var G__58093 = null;
var G__58094 = (0);
var G__58095 = (0);
seq__58067_58075 = G__58092;
chunk__58068_58076 = G__58093;
count__58069_58077 = G__58094;
i__58070_58078 = G__58095;
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
var len__29680__auto___58100 = arguments.length;
var i__29681__auto___58101 = (0);
while(true){
if((i__29681__auto___58101 < len__29680__auto___58100)){
args__29687__auto__.push((arguments[i__29681__auto___58101]));

var G__58102 = (i__29681__auto___58101 + (1));
i__29681__auto___58101 = G__58102;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__58097){
var map__58098 = p__58097;
var map__58098__$1 = ((((!((map__58098 == null)))?((((map__58098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58098.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58098):map__58098);
var opts = map__58098__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq58096){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58096));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e58104){if((e58104 instanceof Error)){
var e = e58104;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e58104;

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
return (function (p__58108){
var map__58109 = p__58108;
var map__58109__$1 = ((((!((map__58109 == null)))?((((map__58109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58109.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58109):map__58109);
var msg_name = cljs.core.get.call(null,map__58109__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1497481561597