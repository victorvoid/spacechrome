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
var o60138 = temp__5276__auto__;
var temp__5276__auto____$1 = (o60138["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o60139 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o60139["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o60140 = temp__5276__auto____$2;
return (o60140["make_template"]);
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
var o60141 = temp__5276__auto__;
var temp__5276__auto____$1 = (o60141["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o60142 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o60142["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o60143 = temp__5276__auto____$2;
return (o60143["make_group"]);
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
var o60144 = temp__5276__auto__;
var temp__5276__auto____$1 = (o60144["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o60145 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o60145["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o60146 = temp__5276__auto____$2;
return (o60146["make_reference"]);
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
var o60147 = temp__5276__auto__;
var temp__5276__auto____$1 = (o60147["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o60148 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o60148["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o60149 = temp__5276__auto____$2;
return (o60149["make_surrogate"]);
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
var o60150 = temp__5276__auto__;
var temp__5276__auto____$1 = (o60150["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o60151 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o60151["templating"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o60152 = temp__5276__auto____$2;
return (o60152["render_markup"]);
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
var o60153 = temp__5276__auto__;
var temp__5276__auto____$1 = (o60153["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o60154 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o60154["markup"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o60155 = temp__5276__auto____$2;
return (o60155["_LT_header_GT_"]);
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
var o60156 = temp__5276__auto__;
var temp__5276__auto____$1 = (o60156["formatters"]);
if(cljs.core.truth_(temp__5276__auto____$1)){
var o60157 = temp__5276__auto____$1;
var temp__5276__auto____$2 = (o60157["markup"]);
if(cljs.core.truth_(temp__5276__auto____$2)){
var o60158 = temp__5276__auto____$2;
return (o60158["_LT_standard_body_GT_"]);
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
var len__29680__auto___60160 = arguments.length;
var i__29681__auto___60161 = (0);
while(true){
if((i__29681__auto___60161 < len__29680__auto___60160)){
args__29687__auto__.push((arguments[i__29681__auto___60161]));

var G__60162 = (i__29681__auto___60161 + (1));
i__29681__auto___60161 = G__60162;
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

devtools.format.render_markup.cljs$lang$applyTo = (function (seq60159){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60159));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__29687__auto__ = [];
var len__29680__auto___60164 = arguments.length;
var i__29681__auto___60165 = (0);
while(true){
if((i__29681__auto___60165 < len__29680__auto___60164)){
args__29687__auto__.push((arguments[i__29681__auto___60165]));

var G__60166 = (i__29681__auto___60165 + (1));
i__29681__auto___60165 = G__60166;
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

devtools.format.make_template.cljs$lang$applyTo = (function (seq60163){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60163));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__29687__auto__ = [];
var len__29680__auto___60168 = arguments.length;
var i__29681__auto___60169 = (0);
while(true){
if((i__29681__auto___60169 < len__29680__auto___60168)){
args__29687__auto__.push((arguments[i__29681__auto___60169]));

var G__60170 = (i__29681__auto___60169 + (1));
i__29681__auto___60169 = G__60170;
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

devtools.format.make_group.cljs$lang$applyTo = (function (seq60167){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60167));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__29687__auto__ = [];
var len__29680__auto___60172 = arguments.length;
var i__29681__auto___60173 = (0);
while(true){
if((i__29681__auto___60173 < len__29680__auto___60172)){
args__29687__auto__.push((arguments[i__29681__auto___60173]));

var G__60174 = (i__29681__auto___60173 + (1));
i__29681__auto___60173 = G__60174;
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

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq60171){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60171));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__29687__auto__ = [];
var len__29680__auto___60176 = arguments.length;
var i__29681__auto___60177 = (0);
while(true){
if((i__29681__auto___60177 < len__29680__auto___60176)){
args__29687__auto__.push((arguments[i__29681__auto___60177]));

var G__60178 = (i__29681__auto___60177 + (1));
i__29681__auto___60177 = G__60178;
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

devtools.format.template.cljs$lang$applyTo = (function (seq60175){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60175));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__29687__auto__ = [];
var len__29680__auto___60180 = arguments.length;
var i__29681__auto___60181 = (0);
while(true){
if((i__29681__auto___60181 < len__29680__auto___60180)){
args__29687__auto__.push((arguments[i__29681__auto___60181]));

var G__60182 = (i__29681__auto___60181 + (1));
i__29681__auto___60181 = G__60182;
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

devtools.format.group.cljs$lang$applyTo = (function (seq60179){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60179));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__29687__auto__ = [];
var len__29680__auto___60184 = arguments.length;
var i__29681__auto___60185 = (0);
while(true){
if((i__29681__auto___60185 < len__29680__auto___60184)){
args__29687__auto__.push((arguments[i__29681__auto___60185]));

var G__60186 = (i__29681__auto___60185 + (1));
i__29681__auto___60185 = G__60186;
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

devtools.format.surrogate.cljs$lang$applyTo = (function (seq60183){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60183));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__29687__auto__ = [];
var len__29680__auto___60194 = arguments.length;
var i__29681__auto___60195 = (0);
while(true){
if((i__29681__auto___60195 < len__29680__auto___60194)){
args__29687__auto__.push((arguments[i__29681__auto___60195]));

var G__60196 = (i__29681__auto___60195 + (1));
i__29681__auto___60195 = G__60196;
continue;
} else {
}
break;
}

var argseq__29688__auto__ = ((((1) < args__29687__auto__.length))?(new cljs.core.IndexedSeq(args__29687__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29688__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__60190){
var vec__60191 = p__60190;
var state_override = cljs.core.nth.call(null,vec__60191,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__60191,state_override){
return (function (p1__60187_SHARP_){
return cljs.core.merge.call(null,p1__60187_SHARP_,state_override);
});})(vec__60191,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq60188){
var G__60189 = cljs.core.first.call(null,seq60188);
var seq60188__$1 = cljs.core.next.call(null,seq60188);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__60189,seq60188__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__29687__auto__ = [];
var len__29680__auto___60198 = arguments.length;
var i__29681__auto___60199 = (0);
while(true){
if((i__29681__auto___60199 < len__29680__auto___60198)){
args__29687__auto__.push((arguments[i__29681__auto___60199]));

var G__60200 = (i__29681__auto___60199 + (1));
i__29681__auto___60199 = G__60200;
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

devtools.format.build_header.cljs$lang$applyTo = (function (seq60197){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60197));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__29687__auto__ = [];
var len__29680__auto___60203 = arguments.length;
var i__29681__auto___60204 = (0);
while(true){
if((i__29681__auto___60204 < len__29680__auto___60203)){
args__29687__auto__.push((arguments[i__29681__auto___60204]));

var G__60205 = (i__29681__auto___60204 + (1));
i__29681__auto___60204 = G__60205;
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

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq60201){
var G__60202 = cljs.core.first.call(null,seq60201);
var seq60201__$1 = cljs.core.next.call(null,seq60201);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__60202,seq60201__$1);
});


//# sourceMappingURL=format.js.map?rel=1497481564694