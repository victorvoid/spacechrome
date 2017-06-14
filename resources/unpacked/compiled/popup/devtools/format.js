// Compiled by ClojureScript 1.9.562 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__29177__auto__ = (((value == null))?null:value);
var m__29178__auto__ = (devtools.format._header[goog.typeOf(x__29177__auto__)]);
if(!((m__29178__auto__ == null))){
return m__29178__auto__.call(null,value);
} else {
var m__29178__auto____$1 = (devtools.format._header["_"]);
if(!((m__29178__auto____$1 == null))){
return m__29178__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__29177__auto__ = (((value == null))?null:value);
var m__29178__auto__ = (devtools.format._has_body[goog.typeOf(x__29177__auto__)]);
if(!((m__29178__auto__ == null))){
return m__29178__auto__.call(null,value);
} else {
var m__29178__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__29178__auto____$1 == null))){
return m__29178__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__29177__auto__ = (((value == null))?null:value);
var m__29178__auto__ = (devtools.format._body[goog.typeOf(x__29177__auto__)]);
if(!((m__29178__auto__ == null))){
return m__29178__auto__.call(null,value);
} else {
var m__29178__auto____$1 = (devtools.format._body["_"]);
if(!((m__29178__auto____$1 == null))){
return m__29178__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o45333 = temp__5276__auto__;
var temp__5276__auto____$1 = (o45333["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o45334 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o45334["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o45335 = temp__5276__auto____$2;
return (o45335["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o45336 = temp__5276__auto__;
var temp__5276__auto____$1 = (o45336["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o45337 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o45337["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o45338 = temp__5276__auto____$2;
return (o45338["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o45339 = temp__5276__auto__;
var temp__5276__auto____$1 = (o45339["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o45340 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o45340["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o45341 = temp__5276__auto____$2;
return (o45341["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o45342 = temp__5276__auto__;
var temp__5276__auto____$1 = (o45342["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o45343 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o45343["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o45344 = temp__5276__auto____$2;
return (o45344["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o45345 = temp__5276__auto__;
var temp__5276__auto____$1 = (o45345["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o45346 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o45346["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o45347 = temp__5276__auto____$2;
return (o45347["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o45348 = temp__5276__auto__;
var temp__5276__auto____$1 = (o45348["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o45349 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o45349["markup"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o45350 = temp__5276__auto____$2;
return (o45350["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5276__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5276__auto__)){
var o45351 = temp__5276__auto__;
var temp__5276__auto____$1 = (o45351["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o45352 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o45352["markup"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o45353 = temp__5276__auto____$2;
return (o45353["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__29687__auto__ = [];
var len__29680__auto___45355 = arguments.length;
var i__29681__auto___45356 = (0);
while(true){
if((i__29681__auto___45356 < len__29680__auto___45355)){
args__29687__auto__.push((arguments[i__29681__auto___45356]));

var G__45357 = (i__29681__auto___45356 + (1));
i__29681__auto___45356 = G__45357;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq45354){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45354));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__29687__auto__ = [];
var len__29680__auto___45359 = arguments.length;
var i__29681__auto___45360 = (0);
while(true){
if((i__29681__auto___45360 < len__29680__auto___45359)){
args__29687__auto__.push((arguments[i__29681__auto___45360]));

var G__45361 = (i__29681__auto___45360 + (1));
i__29681__auto___45360 = G__45361;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq45358){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45358));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__29687__auto__ = [];
var len__29680__auto___45363 = arguments.length;
var i__29681__auto___45364 = (0);
while(true){
if((i__29681__auto___45364 < len__29680__auto___45363)){
args__29687__auto__.push((arguments[i__29681__auto___45364]));

var G__45365 = (i__29681__auto___45364 + (1));
i__29681__auto___45364 = G__45365;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq45362){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45362));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__29687__auto__ = [];
var len__29680__auto___45367 = arguments.length;
var i__29681__auto___45368 = (0);
while(true){
if((i__29681__auto___45368 < len__29680__auto___45367)){
args__29687__auto__.push((arguments[i__29681__auto___45368]));

var G__45369 = (i__29681__auto___45368 + (1));
i__29681__auto___45368 = G__45369;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq45366){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45366));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__29687__auto__ = [];
var len__29680__auto___45371 = arguments.length;
var i__29681__auto___45372 = (0);
while(true){
if((i__29681__auto___45372 < len__29680__auto___45371)){
args__29687__auto__.push((arguments[i__29681__auto___45372]));

var G__45373 = (i__29681__auto___45372 + (1));
i__29681__auto___45372 = G__45373;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq45370){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45370));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__29687__auto__ = [];
var len__29680__auto___45375 = arguments.length;
var i__29681__auto___45376 = (0);
while(true){
if((i__29681__auto___45376 < len__29680__auto___45375)){
args__29687__auto__.push((arguments[i__29681__auto___45376]));

var G__45377 = (i__29681__auto___45376 + (1));
i__29681__auto___45376 = G__45377;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq45374){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45374));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__29687__auto__ = [];
var len__29680__auto___45379 = arguments.length;
var i__29681__auto___45380 = (0);
while(true){
if((i__29681__auto___45380 < len__29680__auto___45379)){
args__29687__auto__.push((arguments[i__29681__auto___45380]));

var G__45381 = (i__29681__auto___45380 + (1));
i__29681__auto___45380 = G__45381;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq45378){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45378));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__29687__auto__ = [];
var len__29680__auto___45389 = arguments.length;
var i__29681__auto___45390 = (0);
while(true){
if((i__29681__auto___45390 < len__29680__auto___45389)){
args__29687__auto__.push((arguments[i__29681__auto___45390]));

var G__45391 = (i__29681__auto___45390 + (1));
i__29681__auto___45390 = G__45391;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((1) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29688__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__45385){
var vec__45386 = p__45385;
var state_override = cljs.core.nth.call(null,vec__45386,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__45386,state_override){
return (function (p1__45382_SHARP_){
return cljs.core.merge.call(null,p1__45382_SHARP_,state_override);
});})(vec__45386,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq45383){
var G__45384 = cljs.core.first.call(null,seq45383);
var seq45383__$1 = cljs.core.next.call(null,seq45383);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__45384,seq45383__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__29687__auto__ = [];
var len__29680__auto___45393 = arguments.length;
var i__29681__auto___45394 = (0);
while(true){
if((i__29681__auto___45394 < len__29680__auto___45393)){
args__29687__auto__.push((arguments[i__29681__auto___45394]));

var G__45395 = (i__29681__auto___45394 + (1));
i__29681__auto___45394 = G__45395;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((0) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__29688__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq45392){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45392));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__29687__auto__ = [];
var len__29680__auto___45398 = arguments.length;
var i__29681__auto___45399 = (0);
while(true){
if((i__29681__auto___45399 < len__29680__auto___45398)){
args__29687__auto__.push((arguments[i__29681__auto___45399]));

var G__45400 = (i__29681__auto___45399 + (1));
i__29681__auto___45399 = G__45400;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((1) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29688__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq45396){
var G__45397 = cljs.core.first.call(null,seq45396);
var seq45396__$1 = cljs.core.next.call(null,seq45396);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__45397,seq45396__$1);
});


//# sourceMappingURL=format.js.map?rel=1497481548782