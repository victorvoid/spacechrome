// Compiled by ClojureScript 1.9.562 {}
goog.provide('chromex_sample.background.storage');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('chromex.logging');
goog.require('chromex.protocols');
goog.require('chromex.ext.storage');
chromex_sample.background.storage.test_storage_BANG_ = (function chromex_sample$background$storage$test_storage_BANG_(){
var local_storage = chromex.ext.storage.local_STAR_.call(null,chromex.config.get_active_config.call(null));
chromex.protocols.set.call(null,local_storage,({"key1": "string", "key2": [(1),(2),(3)], "key3": true, "key4": null}));

var c__32057__auto___52303 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto___52303,local_storage){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto___52303,local_storage){
return (function (state_52220){
var state_val_52221 = (state_52220[(1)]);
if((state_val_52221 === (1))){
var inst_52207 = chromex.protocols.get.call(null,local_storage);
var state_52220__$1 = state_52220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52220__$1,(2),inst_52207);
} else {
if((state_val_52221 === (2))){
var inst_52212 = (state_52220[(7)]);
var inst_52209 = (state_52220[(2)]);
var inst_52210 = cljs.core.nth.call(null,inst_52209,(0),null);
var inst_52211 = cljs.core.nth.call(null,inst_52210,(0),null);
var inst_52212__$1 = cljs.core.nth.call(null,inst_52209,(1),null);
var state_52220__$1 = (function (){var statearr_52222 = state_52220;
(statearr_52222[(8)] = inst_52211);

(statearr_52222[(7)] = inst_52212__$1);

return statearr_52222;
})();
if(cljs.core.truth_(inst_52212__$1)){
var statearr_52223_52304 = state_52220__$1;
(statearr_52223_52304[(1)] = (3));

} else {
var statearr_52224_52305 = state_52220__$1;
(statearr_52224_52305[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52221 === (3))){
var inst_52212 = (state_52220[(7)]);
var inst_52214 = inst_52212.call(null,"fetch all error:",inst_52212);
var state_52220__$1 = state_52220;
var statearr_52225_52306 = state_52220__$1;
(statearr_52225_52306[(2)] = inst_52214);

(statearr_52225_52306[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52221 === (4))){
var inst_52211 = (state_52220[(8)]);
var inst_52216 = console.log("fetch all:",inst_52211);
var state_52220__$1 = (function (){var statearr_52226 = state_52220;
(statearr_52226[(9)] = inst_52216);

return statearr_52226;
})();
var statearr_52227_52307 = state_52220__$1;
(statearr_52227_52307[(2)] = null);

(statearr_52227_52307[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52221 === (5))){
var inst_52218 = (state_52220[(2)]);
var state_52220__$1 = state_52220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52220__$1,inst_52218);
} else {
return null;
}
}
}
}
}
});})(c__32057__auto___52303,local_storage))
;
return ((function (switch__31943__auto__,c__32057__auto___52303,local_storage){
return (function() {
var chromex_sample$background$storage$test_storage_BANG__$_state_machine__31944__auto__ = null;
var chromex_sample$background$storage$test_storage_BANG__$_state_machine__31944__auto____0 = (function (){
var statearr_52231 = [null,null,null,null,null,null,null,null,null,null];
(statearr_52231[(0)] = chromex_sample$background$storage$test_storage_BANG__$_state_machine__31944__auto__);

(statearr_52231[(1)] = (1));

return statearr_52231;
});
var chromex_sample$background$storage$test_storage_BANG__$_state_machine__31944__auto____1 = (function (state_52220){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_52220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e52232){if((e52232 instanceof Object)){
var ex__31947__auto__ = e52232;
var statearr_52233_52308 = state_52220;
(statearr_52233_52308[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52309 = state_52220;
state_52220 = G__52309;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
chromex_sample$background$storage$test_storage_BANG__$_state_machine__31944__auto__ = function(state_52220){
switch(arguments.length){
case 0:
return chromex_sample$background$storage$test_storage_BANG__$_state_machine__31944__auto____0.call(this);
case 1:
return chromex_sample$background$storage$test_storage_BANG__$_state_machine__31944__auto____1.call(this,state_52220);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
chromex_sample$background$storage$test_storage_BANG__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = chromex_sample$background$storage$test_storage_BANG__$_state_machine__31944__auto____0;
chromex_sample$background$storage$test_storage_BANG__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = chromex_sample$background$storage$test_storage_BANG__$_state_machine__31944__auto____1;
return chromex_sample$background$storage$test_storage_BANG__$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto___52303,local_storage))
})();
var state__32059__auto__ = (function (){var statearr_52234 = f__32058__auto__.call(null);
(statearr_52234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto___52303);

return statearr_52234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto___52303,local_storage))
);


var c__32057__auto___52310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto___52310,local_storage){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto___52310,local_storage){
return (function (state_52254){
var state_val_52255 = (state_52254[(1)]);
if((state_val_52255 === (1))){
var inst_52241 = chromex.protocols.get.call(null,local_storage,"key1");
var state_52254__$1 = state_52254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52254__$1,(2),inst_52241);
} else {
if((state_val_52255 === (2))){
var inst_52246 = (state_52254[(7)]);
var inst_52243 = (state_52254[(2)]);
var inst_52244 = cljs.core.nth.call(null,inst_52243,(0),null);
var inst_52245 = cljs.core.nth.call(null,inst_52244,(0),null);
var inst_52246__$1 = cljs.core.nth.call(null,inst_52243,(1),null);
var state_52254__$1 = (function (){var statearr_52256 = state_52254;
(statearr_52256[(8)] = inst_52245);

(statearr_52256[(7)] = inst_52246__$1);

return statearr_52256;
})();
if(cljs.core.truth_(inst_52246__$1)){
var statearr_52257_52311 = state_52254__$1;
(statearr_52257_52311[(1)] = (3));

} else {
var statearr_52258_52312 = state_52254__$1;
(statearr_52258_52312[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52255 === (3))){
var inst_52246 = (state_52254[(7)]);
var inst_52248 = inst_52246.call(null,"fetch key1 error:",inst_52246);
var state_52254__$1 = state_52254;
var statearr_52259_52313 = state_52254__$1;
(statearr_52259_52313[(2)] = inst_52248);

(statearr_52259_52313[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52255 === (4))){
var inst_52245 = (state_52254[(8)]);
var inst_52250 = console.log("fetch key1:",inst_52245);
var state_52254__$1 = (function (){var statearr_52260 = state_52254;
(statearr_52260[(9)] = inst_52250);

return statearr_52260;
})();
var statearr_52261_52314 = state_52254__$1;
(statearr_52261_52314[(2)] = null);

(statearr_52261_52314[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52255 === (5))){
var inst_52252 = (state_52254[(2)]);
var state_52254__$1 = state_52254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52254__$1,inst_52252);
} else {
return null;
}
}
}
}
}
});})(c__32057__auto___52310,local_storage))
;
return ((function (switch__31943__auto__,c__32057__auto___52310,local_storage){
return (function() {
var chromex_sample$background$storage$test_storage_BANG__$_state_machine__31944__auto__ = null;
var chromex_sample$background$storage$test_storage_BANG__$_state_machine__31944__auto____0 = (function (){
var statearr_52265 = [null,null,null,null,null,null,null,null,null,null];
(statearr_52265[(0)] = chromex_sample$background$storage$test_storage_BANG__$_state_machine__31944__auto__);

(statearr_52265[(1)] = (1));

return statearr_52265;
});
var chromex_sample$background$storage$test_storage_BANG__$_state_machine__31944__auto____1 = (function (state_52254){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_52254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e52266){if((e52266 instanceof Object)){
var ex__31947__auto__ = e52266;
var statearr_52267_52315 = state_52254;
(statearr_52267_52315[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52316 = state_52254;
state_52254 = G__52316;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
chromex_sample$background$storage$test_storage_BANG__$_state_machine__31944__auto__ = function(state_52254){
switch(arguments.length){
case 0:
return chromex_sample$background$storage$test_storage_BANG__$_state_machine__31944__auto____0.call(this);
case 1:
return chromex_sample$background$storage$test_storage_BANG__$_state_machine__31944__auto____1.call(this,state_52254);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
chromex_sample$background$storage$test_storage_BANG__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = chromex_sample$background$storage$test_storage_BANG__$_state_machine__31944__auto____0;
chromex_sample$background$storage$test_storage_BANG__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = chromex_sample$background$storage$test_storage_BANG__$_state_machine__31944__auto____1;
return chromex_sample$background$storage$test_storage_BANG__$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto___52310,local_storage))
})();
var state__32059__auto__ = (function (){var statearr_52268 = f__32058__auto__.call(null);
(statearr_52268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto___52310);

return statearr_52268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto___52310,local_storage))
);


var c__32057__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto__,local_storage){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto__,local_storage){
return (function (state_52288){
var state_val_52289 = (state_52288[(1)]);
if((state_val_52289 === (1))){
var inst_52275 = chromex.protocols.get.call(null,local_storage,["key2","key3"]);
var state_52288__$1 = state_52288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52288__$1,(2),inst_52275);
} else {
if((state_val_52289 === (2))){
var inst_52280 = (state_52288[(7)]);
var inst_52277 = (state_52288[(2)]);
var inst_52278 = cljs.core.nth.call(null,inst_52277,(0),null);
var inst_52279 = cljs.core.nth.call(null,inst_52278,(0),null);
var inst_52280__$1 = cljs.core.nth.call(null,inst_52277,(1),null);
var state_52288__$1 = (function (){var statearr_52290 = state_52288;
(statearr_52290[(8)] = inst_52279);

(statearr_52290[(7)] = inst_52280__$1);

return statearr_52290;
})();
if(cljs.core.truth_(inst_52280__$1)){
var statearr_52291_52317 = state_52288__$1;
(statearr_52291_52317[(1)] = (3));

} else {
var statearr_52292_52318 = state_52288__$1;
(statearr_52292_52318[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (3))){
var inst_52280 = (state_52288[(7)]);
var inst_52282 = inst_52280.call(null,"fetch key2 and key3 error:",inst_52280);
var state_52288__$1 = state_52288;
var statearr_52293_52319 = state_52288__$1;
(statearr_52293_52319[(2)] = inst_52282);

(statearr_52293_52319[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (4))){
var inst_52279 = (state_52288[(8)]);
var inst_52284 = console.log("fetch key2 and key3:",inst_52279);
var state_52288__$1 = (function (){var statearr_52294 = state_52288;
(statearr_52294[(9)] = inst_52284);

return statearr_52294;
})();
var statearr_52295_52320 = state_52288__$1;
(statearr_52295_52320[(2)] = null);

(statearr_52295_52320[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52289 === (5))){
var inst_52286 = (state_52288[(2)]);
var state_52288__$1 = state_52288;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52288__$1,inst_52286);
} else {
return null;
}
}
}
}
}
});})(c__32057__auto__,local_storage))
;
return ((function (switch__31943__auto__,c__32057__auto__,local_storage){
return (function() {
var chromex_sample$background$storage$test_storage_BANG__$_state_machine__31944__auto__ = null;
var chromex_sample$background$storage$test_storage_BANG__$_state_machine__31944__auto____0 = (function (){
var statearr_52299 = [null,null,null,null,null,null,null,null,null,null];
(statearr_52299[(0)] = chromex_sample$background$storage$test_storage_BANG__$_state_machine__31944__auto__);

(statearr_52299[(1)] = (1));

return statearr_52299;
});
var chromex_sample$background$storage$test_storage_BANG__$_state_machine__31944__auto____1 = (function (state_52288){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_52288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e52300){if((e52300 instanceof Object)){
var ex__31947__auto__ = e52300;
var statearr_52301_52321 = state_52288;
(statearr_52301_52321[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52322 = state_52288;
state_52288 = G__52322;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
chromex_sample$background$storage$test_storage_BANG__$_state_machine__31944__auto__ = function(state_52288){
switch(arguments.length){
case 0:
return chromex_sample$background$storage$test_storage_BANG__$_state_machine__31944__auto____0.call(this);
case 1:
return chromex_sample$background$storage$test_storage_BANG__$_state_machine__31944__auto____1.call(this,state_52288);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
chromex_sample$background$storage$test_storage_BANG__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = chromex_sample$background$storage$test_storage_BANG__$_state_machine__31944__auto____0;
chromex_sample$background$storage$test_storage_BANG__$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = chromex_sample$background$storage$test_storage_BANG__$_state_machine__31944__auto____1;
return chromex_sample$background$storage$test_storage_BANG__$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto__,local_storage))
})();
var state__32059__auto__ = (function (){var statearr_52302 = f__32058__auto__.call(null);
(statearr_52302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto__);

return statearr_52302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto__,local_storage))
);

return c__32057__auto__;
});

//# sourceMappingURL=storage.js.map?rel=1497481556335