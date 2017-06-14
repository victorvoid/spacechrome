// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('chromex.error');
goog.require('cljs.core');
goog.require('cljs.core.constants');
chromex.error.last_error = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
chromex.error.set_last_error_BANG_ = (function chromex$error$set_last_error_BANG_(error){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(chromex.error.last_error,error) : cljs.core.reset_BANG_.call(null,chromex.error.last_error,error));
});
chromex.error.get_last_error = (function chromex$error$get_last_error(){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(chromex.error.last_error) : cljs.core.deref.call(null,chromex.error.last_error));
});
