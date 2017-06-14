// Compiled by ClojureScript 1.9.562 {}
goog.provide('devtools.reporter');
goog.require('cljs.core');
goog.require('devtools.util');
devtools.reporter.issues_url = "https://github.com/binaryage/cljs-devtools/issues";
devtools.reporter.report_internal_error_BANG_ = (function devtools$reporter$report_internal_error_BANG_(var_args){
var args__29687__auto__ = [];
var len__29680__auto___60785 = arguments.length;
var i__29681__auto___60786 = (0);
while(true){
if((i__29681__auto___60786 < len__29680__auto___60785)){
args__29687__auto__.push((arguments[i__29681__auto___60786]));

var G__60787 = (i__29681__auto___60786 + (1));
i__29681__auto___60786 = G__60787;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((1) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((1)),(0),null)):null);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29688__auto__);
});

devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (e,p__60780){
var vec__60781 = p__60780;
var context = cljs.core.nth.call(null,vec__60781,(0),null);
var footer = cljs.core.nth.call(null,vec__60781,(1),null);
try{var message = (((e instanceof Error))?(function (){var or__28459__auto__ = e.message;
if(cljs.core.truth_(or__28459__auto__)){
return or__28459__auto__;
} else {
return e;
}
})():e);
var header = ["%cCLJS DevTools Error%c%s","background-color:red;color:white;font-weight:bold;padding:0px 3px;border-radius:2px;","color:red",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('')];
var context_msg = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("In "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.get_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(context)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".")].join(''):".")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n\n")].join('');
var footer_msg = ((!((footer == null)))?footer:[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("---\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please report the issue here: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.reporter.issues_url)].join(''));
var details = [context_msg,e,footer_msg];
var c = console;
var group_collapsed = (c["groupCollapsed"]);
var log = (c["log"]);
var group_end = (c["groupEnd"]);
if(cljs.core.truth_(group_collapsed)){
} else {
throw (new Error("Assert failed: group-collapsed"));
}

if(cljs.core.truth_(log)){
} else {
throw (new Error("Assert failed: log"));
}

if(cljs.core.truth_(group_end)){
} else {
throw (new Error("Assert failed: group-end"));
}

group_collapsed.apply(c,header);

log.apply(c,details);

return group_end.call(c);
}catch (e60784){var e__$1 = e60784;
return console.error("FATAL: report-internal-error! failed",e__$1);
}});

devtools.reporter.report_internal_error_BANG_.cljs$lang$maxFixedArity = (1);

devtools.reporter.report_internal_error_BANG_.cljs$lang$applyTo = (function (seq60778){
var G__60779 = cljs.core.first.call(null,seq60778);
var seq60778__$1 = cljs.core.next.call(null,seq60778);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__60779,seq60778__$1);
});


//# sourceMappingURL=reporter.js.map?rel=1497481565835