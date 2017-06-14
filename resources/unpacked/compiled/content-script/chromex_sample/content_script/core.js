// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('chromex_sample.content_script.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('chromex.logging');
goog.require('chromex.protocols');
goog.require('chromex.ext.runtime');
chromex_sample.content_script.core.process_message_BANG_ = (function chromex_sample$content_script$core$process_message_BANG_(message){
console.log("CONTENT SCRIPT: got message:",message);

return null;
});
chromex_sample.content_script.core.run_message_loop_BANG_ = (function chromex_sample$content_script$core$run_message_loop_BANG_(message_channel){
console.log("CONTENT SCRIPT: starting message loop...");


var c__16128__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16128__auto__){
return (function (){
var f__16129__auto__ = (function (){var switch__16002__auto__ = ((function (c__16128__auto__){
return (function (state_24027){
var state_val_24028 = (state_24027[(1)]);
if((state_val_24028 === (1))){
var state_24027__$1 = state_24027;
var statearr_24029_24045 = state_24027__$1;
(statearr_24029_24045[(2)] = null);

(statearr_24029_24045[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24028 === (2))){
var state_24027__$1 = state_24027;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24027__$1,(4),message_channel);
} else {
if((state_val_24028 === (3))){
var inst_24025 = (state_24027[(2)]);
var state_24027__$1 = state_24027;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24027__$1,inst_24025);
} else {
if((state_val_24028 === (4))){
var inst_24016 = (state_24027[(7)]);
var inst_24016__$1 = (state_24027[(2)]);
var state_24027__$1 = (function (){var statearr_24030 = state_24027;
(statearr_24030[(7)] = inst_24016__$1);

return statearr_24030;
})();
if(cljs.core.truth_(inst_24016__$1)){
var statearr_24031_24046 = state_24027__$1;
(statearr_24031_24046[(1)] = (5));

} else {
var statearr_24032_24047 = state_24027__$1;
(statearr_24032_24047[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24028 === (5))){
var inst_24016 = (state_24027[(7)]);
var inst_24018 = chromex_sample.content_script.core.process_message_BANG_(inst_24016);
var state_24027__$1 = (function (){var statearr_24033 = state_24027;
(statearr_24033[(8)] = inst_24018);

return statearr_24033;
})();
var statearr_24034_24048 = state_24027__$1;
(statearr_24034_24048[(2)] = null);

(statearr_24034_24048[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24028 === (6))){
var state_24027__$1 = state_24027;
var statearr_24035_24049 = state_24027__$1;
(statearr_24035_24049[(2)] = null);

(statearr_24035_24049[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24028 === (7))){
var inst_24022 = (state_24027[(2)]);
var inst_24023 = console.log("CONTENT SCRIPT: leaving message loop");
var state_24027__$1 = (function (){var statearr_24036 = state_24027;
(statearr_24036[(9)] = inst_24023);

(statearr_24036[(10)] = inst_24022);

return statearr_24036;
})();
var statearr_24037_24050 = state_24027__$1;
(statearr_24037_24050[(2)] = null);

(statearr_24037_24050[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__16128__auto__))
;
return ((function (switch__16002__auto__,c__16128__auto__){
return (function() {
var chromex_sample$content_script$core$run_message_loop_BANG__$_state_machine__16003__auto__ = null;
var chromex_sample$content_script$core$run_message_loop_BANG__$_state_machine__16003__auto____0 = (function (){
var statearr_24041 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24041[(0)] = chromex_sample$content_script$core$run_message_loop_BANG__$_state_machine__16003__auto__);

(statearr_24041[(1)] = (1));

return statearr_24041;
});
var chromex_sample$content_script$core$run_message_loop_BANG__$_state_machine__16003__auto____1 = (function (state_24027){
while(true){
var ret_value__16004__auto__ = (function (){try{while(true){
var result__16005__auto__ = switch__16002__auto__(state_24027);
if(cljs.core.keyword_identical_QMARK_(result__16005__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16005__auto__;
}
break;
}
}catch (e24042){if((e24042 instanceof Object)){
var ex__16006__auto__ = e24042;
var statearr_24043_24051 = state_24027;
(statearr_24043_24051[(5)] = ex__16006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24027);

return cljs.core.cst$kw$recur;
} else {
throw e24042;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16004__auto__,cljs.core.cst$kw$recur)){
var G__24052 = state_24027;
state_24027 = G__24052;
continue;
} else {
return ret_value__16004__auto__;
}
break;
}
});
chromex_sample$content_script$core$run_message_loop_BANG__$_state_machine__16003__auto__ = function(state_24027){
switch(arguments.length){
case 0:
return chromex_sample$content_script$core$run_message_loop_BANG__$_state_machine__16003__auto____0.call(this);
case 1:
return chromex_sample$content_script$core$run_message_loop_BANG__$_state_machine__16003__auto____1.call(this,state_24027);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
chromex_sample$content_script$core$run_message_loop_BANG__$_state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$0 = chromex_sample$content_script$core$run_message_loop_BANG__$_state_machine__16003__auto____0;
chromex_sample$content_script$core$run_message_loop_BANG__$_state_machine__16003__auto__.cljs$core$IFn$_invoke$arity$1 = chromex_sample$content_script$core$run_message_loop_BANG__$_state_machine__16003__auto____1;
return chromex_sample$content_script$core$run_message_loop_BANG__$_state_machine__16003__auto__;
})()
;})(switch__16002__auto__,c__16128__auto__))
})();
var state__16130__auto__ = (function (){var statearr_24044 = (f__16129__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16129__auto__.cljs$core$IFn$_invoke$arity$0() : f__16129__auto__.call(null));
(statearr_24044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16128__auto__);

return statearr_24044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16130__auto__);
});})(c__16128__auto__))
);

return c__16128__auto__;
});
chromex_sample.content_script.core.do_page_analysis_BANG_ = (function chromex_sample$content_script$core$do_page_analysis_BANG_(background_port){
var script_elements = document.getElementsByTagName("script");
var script_count = script_elements.length;
var title = document.title;
var msg = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("CONTENT SCRIPT: document '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(title),cljs.core.str.cljs$core$IFn$_invoke$arity$1("' contains "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(script_count),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" script tags.")].join('');
console.log(msg);


return chromex.protocols.post_message_BANG_(background_port,msg);
});
chromex_sample.content_script.core.connect_to_background_page_BANG_ = (function chromex_sample$content_script$core$connect_to_background_page_BANG_(){
var background_port = chromex.ext.runtime.connect_STAR_(chromex.config.get_active_config(),cljs.core.cst$kw$omit,cljs.core.cst$kw$omit);
chromex.protocols.post_message_BANG_(background_port,"hello spacechrome!");

chromex_sample.content_script.core.run_message_loop_BANG_(background_port);

return chromex_sample.content_script.core.do_page_analysis_BANG_(background_port);
});
chromex_sample.content_script.core.init_BANG_ = (function chromex_sample$content_script$core$init_BANG_(){
console.log("CONTENT SCRIPT: init");


return chromex_sample.content_script.core.connect_to_background_page_BANG_();
});
