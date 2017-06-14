// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('oops.helpers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
oops.helpers.is_prototype_QMARK_ = (function oops$helpers$is_prototype_QMARK_(o){
return (o.constructor.prototype === o);
});
oops.helpers.get_constructor = (function oops$helpers$get_constructor(o){
return (o["constructor"]);
});
oops.helpers.cljs_type_QMARK_ = (function oops$helpers$cljs_type_QMARK_(f){
var and__7948__auto__ = goog.isObject(f);
if(cljs.core.truth_(and__7948__auto__)){
var and__7948__auto____$1 = cljs.core.not(oops.helpers.is_prototype_QMARK_(f));
if(and__7948__auto____$1){
return (f["cljs$lang$type"]);
} else {
return and__7948__auto____$1;
}
} else {
return and__7948__auto__;
}
});
oops.helpers.cljs_instance_QMARK_ = (function oops$helpers$cljs_instance_QMARK_(value){
var and__7948__auto__ = goog.isObject(value);
if(cljs.core.truth_(and__7948__auto__)){
return oops.helpers.cljs_type_QMARK_(oops.helpers.get_constructor(value));
} else {
return and__7948__auto__;
}
});
oops.helpers.to_native_array = (function oops$helpers$to_native_array(coll){
if(cljs.core.array_QMARK_(coll)){
return coll;
} else {
var arr = [];
var items = cljs.core.seq(coll);
while(true){
if(!((items == null))){
var item = cljs.core._first(items);
arr.push(item);

var G__19789 = cljs.core.next(items);
items = G__19789;
continue;
} else {
return arr;
}
break;
}
}
});
oops.helpers.repurpose_error = (function oops$helpers$repurpose_error(error,msg,info){


error.message = msg;

var x19791 = error;
x19791.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

x19791.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = ((function (x19791){
return (function (_obj,writer,opts){
var _obj__$1 = this;
cljs.core._write(writer,msg);

if(!((info == null))){
cljs.core._write(writer," ");

return cljs.core.pr_writer(info,writer,opts);
} else {
return null;
}
});})(x19791))
;

return x19791;
});
