// Compiled by ClojureScript 1.9.562 {}
goog.provide('oops.schema');
goog.require('cljs.core');
oops.schema.escaped_dot_marker = "####ESCAPED-DOT####";
oops.schema.re_all_escaped_dots = (new RegExp("\\\\\\.","g"));
oops.schema.re_all_escaped_dot_markers = (new RegExp("####ESCAPED-DOT####","g"));
oops.schema.unescape_modifiers = (function oops$schema$unescape_modifiers(s){
return s.replace(/^\\([?!])/,"$1");
});
oops.schema.parse_selector_element_BANG_ = (function oops$schema$parse_selector_element_BANG_(element_str,arr){
if(!(cljs.core.empty_QMARK_.call(null,element_str))){
var G__49548 = cljs.core.first.call(null,element_str);
switch (G__49548) {
case "?":
arr.push((1));

return arr.push(element_str.substring((1)));

break;
case "!":
arr.push((2));

return arr.push(element_str.substring((1)));

break;
default:
arr.push((0));

return arr.push(oops.schema.unescape_modifiers.call(null,element_str));

}
} else {
return null;
}
});
oops.schema.unescape_dots = (function oops$schema$unescape_dots(s){
return s.replace(oops.schema.re_all_escaped_dot_markers,".");
});
oops.schema.parse_selector_string_BANG_ = (function oops$schema$parse_selector_string_BANG_(selector_str,arr){
var elements_arr = selector_str.replace(oops.schema.re_all_escaped_dots,oops.schema.escaped_dot_marker).split(".");
var items = cljs.core.seq.call(null,elements_arr);
while(true){
if(items){
oops.schema.parse_selector_element_BANG_.call(null,oops.schema.unescape_dots.call(null,cljs.core.first.call(null,items)),arr);

var G__49550 = cljs.core.next.call(null,items);
items = G__49550;
continue;
} else {
return null;
}
break;
}
});
oops.schema.coerce_key_dynamically_BANG_ = (function oops$schema$coerce_key_dynamically_BANG_(key,arr){
var selector_str = cljs.core.name.call(null,key);
return oops.schema.parse_selector_string_BANG_.call(null,selector_str,arr);
});
oops.schema.collect_coerced_keys_into_array_BANG_ = (function oops$schema$collect_coerced_keys_into_array_BANG_(coll,arr){
var items = cljs.core.seq.call(null,coll);
while(true){
if(!((items == null))){
var item = cljs.core._first.call(null,items);
if(cljs.core.sequential_QMARK_.call(null,item)){
oops.schema.collect_coerced_keys_into_array_BANG_.call(null,item,arr);
} else {
oops.schema.coerce_key_dynamically_BANG_.call(null,item,arr);
}

var G__49551 = cljs.core.next.call(null,items);
items = G__49551;
continue;
} else {
return null;
}
break;
}
});
oops.schema.standalone_modifier_QMARK_ = (function oops$schema$standalone_modifier_QMARK_(arr,i){
return (((arr[i]) > (0))) && (cljs.core._EQ_.call(null,"",(arr[(i + (1))])));
});
oops.schema.merge_standalone_modifier_BANG_ = (function oops$schema$merge_standalone_modifier_BANG_(arr,i){
(arr[(i + (2))] = (arr[i]));

return arr.splice(i,(2));
});
oops.schema.merge_standalone_modifiers_BANG_ = (function oops$schema$merge_standalone_modifiers_BANG_(arr){
var len = arr.length;
var i = (len - (2));
while(true){
var finger = (i - (2));
if((finger < (0))){
return arr;
} else {
if(cljs.core.truth_(oops.schema.standalone_modifier_QMARK_.call(null,arr,finger))){
oops.schema.merge_standalone_modifier_BANG_.call(null,arr,finger);
} else {
}

var G__49552 = finger;
i = G__49552;
continue;
}
break;
}
});
oops.schema.prepare_path_BANG_ = (function oops$schema$prepare_path_BANG_(selector,arr){
oops.schema.collect_coerced_keys_into_array_BANG_.call(null,selector,arr);

return oops.schema.merge_standalone_modifiers_BANG_.call(null,arr);
});
oops.schema.prepare_simple_path_BANG_ = (function oops$schema$prepare_simple_path_BANG_(key,arr){
return oops.schema.coerce_key_dynamically_BANG_.call(null,key,arr);
});
oops.schema.has_invalid_path_access_mode_QMARK_ = (function oops$schema$has_invalid_path_access_mode_QMARK_(path,is_valid_QMARK_){
var items = cljs.core.seq.call(null,path);
while(true){
if(items){
if(cljs.core.truth_(is_valid_QMARK_.call(null,cljs.core.first.call(null,items)))){
var G__49553 = cljs.core.next.call(null,cljs.core.next.call(null,items));
items = G__49553;
continue;
} else {
return true;
}
} else {
return null;
}
break;
}
});
oops.schema.check_dynamic_path_BANG_ = (function oops$schema$check_dynamic_path_BANG_(path,op){


if(cljs.core.empty_QMARK_.call(null,path)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unexpected-empty-selector","unexpected-empty-selector",-572791900)], null);
} else {
var G__49557 = op;
switch (G__49557) {
case (0):
if(cljs.core.truth_(oops.schema.has_invalid_path_access_mode_QMARK_.call(null,path,((function (G__49557){
return (function (p1__49554_SHARP_){
return cljs.core.not_EQ_.call(null,p1__49554_SHARP_,(2));
});})(G__49557))
))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unexpected-punching-selector","unexpected-punching-selector",-1934135338)], null);
} else {
return null;
}

break;
case (1):
if(cljs.core.truth_(oops.schema.has_invalid_path_access_mode_QMARK_.call(null,path,((function (G__49557){
return (function (p1__49555_SHARP_){
return cljs.core.not_EQ_.call(null,p1__49555_SHARP_,(1));
});})(G__49557))
))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unexpected-soft-selector","unexpected-soft-selector",-1117708580)], null);
} else {
return null;
}

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49557)].join('')));

}
}
});

//# sourceMappingURL=schema.js.map?rel=1497481553444