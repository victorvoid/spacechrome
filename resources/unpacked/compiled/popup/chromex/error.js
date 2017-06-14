// Compiled by ClojureScript 1.9.562 {}
goog.provide('chromex.error');
goog.require('cljs.core');
chromex.error.last_error = cljs.core.atom.call(null,null);
chromex.error.set_last_error_BANG_ = (function chromex$error$set_last_error_BANG_(error){
return cljs.core.reset_BANG_.call(null,chromex.error.last_error,error);
});
chromex.error.get_last_error = (function chromex$error$get_last_error(){
return cljs.core.deref.call(null,chromex.error.last_error);
});

//# sourceMappingURL=error.js.map?rel=1497481540493