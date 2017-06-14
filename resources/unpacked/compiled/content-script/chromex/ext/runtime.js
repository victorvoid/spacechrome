// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('chromex.ext.runtime');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('chromex.core');
chromex.ext.runtime.last_error_STAR_ = (function chromex$ext$runtime$last_error_STAR_(config){
var result_22879 = (function (){var final_args_array_22880 = chromex.support.prepare_final_args_array(cljs.core.PersistentVector.EMPTY,"chrome.runtime.lastError");
var ns_22881 = (function (){var target_obj_22883 = cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1(config);
var next_obj_22884 = (target_obj_22883["chrome"]);
var next_obj_22885 = (next_obj_22884["runtime"]);
return next_obj_22885;
})();

var config__14280__auto___22888 = config;
if(cljs.core.truth_(cljs.core.cst$kw$verbose_DASH_logging.cljs$core$IFn$_invoke$arity$1(config__14280__auto___22888))){
var logger__14281__auto___22889 = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(config__14280__auto___22888);
var prefix__14282__auto___22890 = ["accessing:","chrome.runtime.lastError"];
if(cljs.core.fn_QMARK_(logger__14281__auto___22889)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14280__auto___22888)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__14281__auto__)")].join('')));
}

logger__14281__auto___22889.apply(null,prefix__14282__auto___22890.concat(final_args_array_22880));
} else {
}

var target_22882 = (function (){var target_obj_22886 = ns_22881;
var next_obj_22887 = (target_obj_22886["lastError"]);
if(!((next_obj_22887 == null))){
return next_obj_22887;
} else {
return null;
}
})();
return target_22882;
})();
return result_22879;
});
chromex.ext.runtime.id_STAR_ = (function chromex$ext$runtime$id_STAR_(config){
var result_22900 = (function (){var final_args_array_22901 = chromex.support.prepare_final_args_array(cljs.core.PersistentVector.EMPTY,"chrome.runtime.id");
var ns_22902 = (function (){var target_obj_22904 = cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1(config);
var next_obj_22905 = (target_obj_22904["chrome"]);
var next_obj_22906 = (next_obj_22905["runtime"]);
return next_obj_22906;
})();

var config__14280__auto___22909 = config;
if(cljs.core.truth_(cljs.core.cst$kw$verbose_DASH_logging.cljs$core$IFn$_invoke$arity$1(config__14280__auto___22909))){
var logger__14281__auto___22910 = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(config__14280__auto___22909);
var prefix__14282__auto___22911 = ["accessing:","chrome.runtime.id"];
if(cljs.core.fn_QMARK_(logger__14281__auto___22910)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14280__auto___22909)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__14281__auto__)")].join('')));
}

logger__14281__auto___22910.apply(null,prefix__14282__auto___22911.concat(final_args_array_22901));
} else {
}

var target_22903 = (function (){var target_obj_22907 = ns_22902;
var next_obj_22908 = (target_obj_22907["id"]);
if(!((next_obj_22908 == null))){
return next_obj_22908;
} else {
return null;
}
})();
return target_22903;
})();
return result_22900;
});
chromex.ext.runtime.get_background_page_STAR_ = (function chromex$ext$runtime$get_background_page_STAR_(config){
var callback_chan_22927 = (function (){var config__14251__auto__ = config;
var handler_key__14252__auto__ = cljs.core.cst$kw$callback_DASH_channel_DASH_factory;
var handler__14253__auto__ = (handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1 ? handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler_key__14252__auto__.call(null,config__14251__auto__));
if(cljs.core.fn_QMARK_(handler__14253__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__14252__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14251__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__14253__auto__)")].join('')));
}

return (handler__14253__auto__.cljs$core$IFn$_invoke$arity$1 ? handler__14253__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler__14253__auto__.call(null,config__14251__auto__));
})();
var marshalled_callback_22929_22942 = ((function (callback_chan_22927){
return (function (cb_background_page_22933){
return (function (){var config__14251__auto__ = config;
var handler_key__14252__auto__ = cljs.core.cst$kw$callback_DASH_fn_DASH_factory;
var handler__14253__auto__ = (handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1 ? handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler_key__14252__auto__.call(null,config__14251__auto__));
if(cljs.core.fn_QMARK_(handler__14253__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__14252__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14251__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__14253__auto__)")].join('')));
}

var G__22934 = config__14251__auto__;
var G__22935 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$id,cljs.core.cst$kw$chromex$ext$runtime_SLASH_get_DASH_background_DASH_page,cljs.core.cst$kw$name,"getBackgroundPage",cljs.core.cst$kw$callback_QMARK_,true,cljs.core.cst$kw$params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"callback",cljs.core.cst$kw$type,cljs.core.cst$kw$callback,cljs.core.cst$kw$callback,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"background-page",cljs.core.cst$kw$optional_QMARK_,true,cljs.core.cst$kw$type,"Window"], null)], null)], null)], null)], null),cljs.core.cst$kw$function_QMARK_,true], null);
var G__22936 = callback_chan_22927;
return (handler__14253__auto__.cljs$core$IFn$_invoke$arity$3 ? handler__14253__auto__.cljs$core$IFn$_invoke$arity$3(G__22934,G__22935,G__22936) : handler__14253__auto__.call(null,G__22934,G__22935,G__22936));
})().call(null,cb_background_page_22933);
});})(callback_chan_22927))
;
var result_22928_22943 = (function (){var final_args_array_22930 = chromex.support.prepare_final_args_array(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_22929_22942,"callback",null], null)], null),"chrome.runtime.getBackgroundPage");
var ns_22931 = (function (){var target_obj_22937 = cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1(config);
var next_obj_22938 = (target_obj_22937["chrome"]);
var next_obj_22939 = (next_obj_22938["runtime"]);
return next_obj_22939;
})();
var config__14284__auto___22944 = config;
var api_check_fn__14285__auto___22945 = cljs.core.cst$kw$missing_DASH_api_DASH_check_DASH_fn.cljs$core$IFn$_invoke$arity$1(config__14284__auto___22944);
if(cljs.core.fn_QMARK_(api_check_fn__14285__auto___22945)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14284__auto___22944)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__14285__auto__)")].join('')));
}

(api_check_fn__14285__auto___22945.cljs$core$IFn$_invoke$arity$3 ? api_check_fn__14285__auto___22945.cljs$core$IFn$_invoke$arity$3("chrome.runtime.getBackgroundPage",ns_22931,"getBackgroundPage") : api_check_fn__14285__auto___22945.call(null,"chrome.runtime.getBackgroundPage",ns_22931,"getBackgroundPage"));

var config__14280__auto___22946 = config;
if(cljs.core.truth_(cljs.core.cst$kw$verbose_DASH_logging.cljs$core$IFn$_invoke$arity$1(config__14280__auto___22946))){
var logger__14281__auto___22947 = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(config__14280__auto___22946);
var prefix__14282__auto___22948 = ["calling:","chrome.runtime.getBackgroundPage"];
if(cljs.core.fn_QMARK_(logger__14281__auto___22947)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14280__auto___22946)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__14281__auto__)")].join('')));
}

logger__14281__auto___22947.apply(null,prefix__14282__auto___22948.concat(final_args_array_22930));
} else {
}

var target_22932 = (function (){var target_obj_22940 = ns_22931;
var next_obj_22941 = (target_obj_22940["getBackgroundPage"]);
if(!((next_obj_22941 == null))){
return next_obj_22941;
} else {
return null;
}
})();
return target_22932.apply(ns_22931,final_args_array_22930);
})();

return callback_chan_22927;
});
chromex.ext.runtime.open_options_page_STAR_ = (function chromex$ext$runtime$open_options_page_STAR_(config){
var callback_chan_22963 = (function (){var config__14251__auto__ = config;
var handler_key__14252__auto__ = cljs.core.cst$kw$callback_DASH_channel_DASH_factory;
var handler__14253__auto__ = (handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1 ? handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler_key__14252__auto__.call(null,config__14251__auto__));
if(cljs.core.fn_QMARK_(handler__14253__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__14252__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14251__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__14253__auto__)")].join('')));
}

return (handler__14253__auto__.cljs$core$IFn$_invoke$arity$1 ? handler__14253__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler__14253__auto__.call(null,config__14251__auto__));
})();
var marshalled_callback_22965_22977 = (function (){var config__14251__auto__ = config;
var handler_key__14252__auto__ = cljs.core.cst$kw$callback_DASH_fn_DASH_factory;
var handler__14253__auto__ = (handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1 ? handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler_key__14252__auto__.call(null,config__14251__auto__));
if(cljs.core.fn_QMARK_(handler__14253__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__14252__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14251__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__14253__auto__)")].join('')));
}

var G__22969 = config__14251__auto__;
var G__22970 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,cljs.core.cst$kw$chromex$ext$runtime_SLASH_open_DASH_options_DASH_page,cljs.core.cst$kw$name,"openOptionsPage",cljs.core.cst$kw$since,"42",cljs.core.cst$kw$callback_QMARK_,true,cljs.core.cst$kw$params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"callback",cljs.core.cst$kw$optional_QMARK_,true,cljs.core.cst$kw$type,cljs.core.cst$kw$callback], null)], null),cljs.core.cst$kw$function_QMARK_,true], null);
var G__22971 = callback_chan_22963;
return (handler__14253__auto__.cljs$core$IFn$_invoke$arity$3 ? handler__14253__auto__.cljs$core$IFn$_invoke$arity$3(G__22969,G__22970,G__22971) : handler__14253__auto__.call(null,G__22969,G__22970,G__22971));
})();
var result_22964_22978 = (function (){var final_args_array_22966 = chromex.support.prepare_final_args_array(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_22965_22977,"callback",true], null)], null),"chrome.runtime.openOptionsPage");
var ns_22967 = (function (){var target_obj_22972 = cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1(config);
var next_obj_22973 = (target_obj_22972["chrome"]);
var next_obj_22974 = (next_obj_22973["runtime"]);
return next_obj_22974;
})();
var config__14284__auto___22979 = config;
var api_check_fn__14285__auto___22980 = cljs.core.cst$kw$missing_DASH_api_DASH_check_DASH_fn.cljs$core$IFn$_invoke$arity$1(config__14284__auto___22979);
if(cljs.core.fn_QMARK_(api_check_fn__14285__auto___22980)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14284__auto___22979)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__14285__auto__)")].join('')));
}

(api_check_fn__14285__auto___22980.cljs$core$IFn$_invoke$arity$3 ? api_check_fn__14285__auto___22980.cljs$core$IFn$_invoke$arity$3("chrome.runtime.openOptionsPage",ns_22967,"openOptionsPage") : api_check_fn__14285__auto___22980.call(null,"chrome.runtime.openOptionsPage",ns_22967,"openOptionsPage"));

var config__14280__auto___22981 = config;
if(cljs.core.truth_(cljs.core.cst$kw$verbose_DASH_logging.cljs$core$IFn$_invoke$arity$1(config__14280__auto___22981))){
var logger__14281__auto___22982 = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(config__14280__auto___22981);
var prefix__14282__auto___22983 = ["calling:","chrome.runtime.openOptionsPage"];
if(cljs.core.fn_QMARK_(logger__14281__auto___22982)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14280__auto___22981)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__14281__auto__)")].join('')));
}

logger__14281__auto___22982.apply(null,prefix__14282__auto___22983.concat(final_args_array_22966));
} else {
}

var target_22968 = (function (){var target_obj_22975 = ns_22967;
var next_obj_22976 = (target_obj_22975["openOptionsPage"]);
if(!((next_obj_22976 == null))){
return next_obj_22976;
} else {
return null;
}
})();
return target_22968.apply(ns_22967,final_args_array_22966);
})();

return callback_chan_22963;
});
chromex.ext.runtime.get_manifest_STAR_ = (function chromex$ext$runtime$get_manifest_STAR_(config){
var result_22993 = (function (){var final_args_array_22994 = chromex.support.prepare_final_args_array(cljs.core.PersistentVector.EMPTY,"chrome.runtime.getManifest");
var ns_22995 = (function (){var target_obj_22997 = cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1(config);
var next_obj_22998 = (target_obj_22997["chrome"]);
var next_obj_22999 = (next_obj_22998["runtime"]);
return next_obj_22999;
})();
var config__14284__auto___23002 = config;
var api_check_fn__14285__auto___23003 = cljs.core.cst$kw$missing_DASH_api_DASH_check_DASH_fn.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23002);
if(cljs.core.fn_QMARK_(api_check_fn__14285__auto___23003)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23002)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__14285__auto__)")].join('')));
}

(api_check_fn__14285__auto___23003.cljs$core$IFn$_invoke$arity$3 ? api_check_fn__14285__auto___23003.cljs$core$IFn$_invoke$arity$3("chrome.runtime.getManifest",ns_22995,"getManifest") : api_check_fn__14285__auto___23003.call(null,"chrome.runtime.getManifest",ns_22995,"getManifest"));

var config__14280__auto___23004 = config;
if(cljs.core.truth_(cljs.core.cst$kw$verbose_DASH_logging.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23004))){
var logger__14281__auto___23005 = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23004);
var prefix__14282__auto___23006 = ["calling:","chrome.runtime.getManifest"];
if(cljs.core.fn_QMARK_(logger__14281__auto___23005)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23004)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__14281__auto__)")].join('')));
}

logger__14281__auto___23005.apply(null,prefix__14282__auto___23006.concat(final_args_array_22994));
} else {
}

var target_22996 = (function (){var target_obj_23000 = ns_22995;
var next_obj_23001 = (target_obj_23000["getManifest"]);
if(!((next_obj_23001 == null))){
return next_obj_23001;
} else {
return null;
}
})();
return target_22996.apply(ns_22995,final_args_array_22994);
})();
return result_22993;
});
chromex.ext.runtime.get_url_STAR_ = (function chromex$ext$runtime$get_url_STAR_(config,path){
var marshalled_path_23019 = (function (){var omit_test_23023 = path;
if(cljs.core.keyword_identical_QMARK_(omit_test_23023,cljs.core.cst$kw$omit)){
return cljs.core.cst$kw$omit;
} else {
return omit_test_23023;
}
})();
var result_23018 = (function (){var final_args_array_23020 = chromex.support.prepare_final_args_array(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_path_23019,"path",null], null)], null),"chrome.runtime.getURL");
var ns_23021 = (function (){var target_obj_23024 = cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1(config);
var next_obj_23025 = (target_obj_23024["chrome"]);
var next_obj_23026 = (next_obj_23025["runtime"]);
return next_obj_23026;
})();
var config__14284__auto___23029 = config;
var api_check_fn__14285__auto___23030 = cljs.core.cst$kw$missing_DASH_api_DASH_check_DASH_fn.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23029);
if(cljs.core.fn_QMARK_(api_check_fn__14285__auto___23030)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23029)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__14285__auto__)")].join('')));
}

(api_check_fn__14285__auto___23030.cljs$core$IFn$_invoke$arity$3 ? api_check_fn__14285__auto___23030.cljs$core$IFn$_invoke$arity$3("chrome.runtime.getURL",ns_23021,"getURL") : api_check_fn__14285__auto___23030.call(null,"chrome.runtime.getURL",ns_23021,"getURL"));

var config__14280__auto___23031 = config;
if(cljs.core.truth_(cljs.core.cst$kw$verbose_DASH_logging.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23031))){
var logger__14281__auto___23032 = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23031);
var prefix__14282__auto___23033 = ["calling:","chrome.runtime.getURL"];
if(cljs.core.fn_QMARK_(logger__14281__auto___23032)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23031)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__14281__auto__)")].join('')));
}

logger__14281__auto___23032.apply(null,prefix__14282__auto___23033.concat(final_args_array_23020));
} else {
}

var target_23022 = (function (){var target_obj_23027 = ns_23021;
var next_obj_23028 = (target_obj_23027["getURL"]);
if(!((next_obj_23028 == null))){
return next_obj_23028;
} else {
return null;
}
})();
return target_23022.apply(ns_23021,final_args_array_23020);
})();
return result_23018;
});
chromex.ext.runtime.set_uninstall_url_STAR_ = (function chromex$ext$runtime$set_uninstall_url_STAR_(config,url){
var callback_chan_23050 = (function (){var config__14251__auto__ = config;
var handler_key__14252__auto__ = cljs.core.cst$kw$callback_DASH_channel_DASH_factory;
var handler__14253__auto__ = (handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1 ? handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler_key__14252__auto__.call(null,config__14251__auto__));
if(cljs.core.fn_QMARK_(handler__14253__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__14252__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14251__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__14253__auto__)")].join('')));
}

return (handler__14253__auto__.cljs$core$IFn$_invoke$arity$1 ? handler__14253__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler__14253__auto__.call(null,config__14251__auto__));
})();
var marshalled_url_23052_23066 = (function (){var omit_test_23057 = url;
if(cljs.core.keyword_identical_QMARK_(omit_test_23057,cljs.core.cst$kw$omit)){
return cljs.core.cst$kw$omit;
} else {
return omit_test_23057;
}
})();
var marshalled_callback_23053_23067 = (function (){var config__14251__auto__ = config;
var handler_key__14252__auto__ = cljs.core.cst$kw$callback_DASH_fn_DASH_factory;
var handler__14253__auto__ = (handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1 ? handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler_key__14252__auto__.call(null,config__14251__auto__));
if(cljs.core.fn_QMARK_(handler__14253__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__14252__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14251__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__14253__auto__)")].join('')));
}

var G__23058 = config__14251__auto__;
var G__23059 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,cljs.core.cst$kw$chromex$ext$runtime_SLASH_set_DASH_uninstall_DASH_url,cljs.core.cst$kw$name,"setUninstallURL",cljs.core.cst$kw$since,"41",cljs.core.cst$kw$callback_QMARK_,true,cljs.core.cst$kw$params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"url",cljs.core.cst$kw$type,"string"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"callback",cljs.core.cst$kw$optional_QMARK_,true,cljs.core.cst$kw$type,cljs.core.cst$kw$callback], null)], null),cljs.core.cst$kw$function_QMARK_,true], null);
var G__23060 = callback_chan_23050;
return (handler__14253__auto__.cljs$core$IFn$_invoke$arity$3 ? handler__14253__auto__.cljs$core$IFn$_invoke$arity$3(G__23058,G__23059,G__23060) : handler__14253__auto__.call(null,G__23058,G__23059,G__23060));
})();
var result_23051_23068 = (function (){var final_args_array_23054 = chromex.support.prepare_final_args_array(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_url_23052_23066,"url",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_23053_23067,"callback",true], null)], null),"chrome.runtime.setUninstallURL");
var ns_23055 = (function (){var target_obj_23061 = cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1(config);
var next_obj_23062 = (target_obj_23061["chrome"]);
var next_obj_23063 = (next_obj_23062["runtime"]);
return next_obj_23063;
})();
var config__14284__auto___23069 = config;
var api_check_fn__14285__auto___23070 = cljs.core.cst$kw$missing_DASH_api_DASH_check_DASH_fn.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23069);
if(cljs.core.fn_QMARK_(api_check_fn__14285__auto___23070)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23069)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__14285__auto__)")].join('')));
}

(api_check_fn__14285__auto___23070.cljs$core$IFn$_invoke$arity$3 ? api_check_fn__14285__auto___23070.cljs$core$IFn$_invoke$arity$3("chrome.runtime.setUninstallURL",ns_23055,"setUninstallURL") : api_check_fn__14285__auto___23070.call(null,"chrome.runtime.setUninstallURL",ns_23055,"setUninstallURL"));

var config__14280__auto___23071 = config;
if(cljs.core.truth_(cljs.core.cst$kw$verbose_DASH_logging.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23071))){
var logger__14281__auto___23072 = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23071);
var prefix__14282__auto___23073 = ["calling:","chrome.runtime.setUninstallURL"];
if(cljs.core.fn_QMARK_(logger__14281__auto___23072)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23071)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__14281__auto__)")].join('')));
}

logger__14281__auto___23072.apply(null,prefix__14282__auto___23073.concat(final_args_array_23054));
} else {
}

var target_23056 = (function (){var target_obj_23064 = ns_23055;
var next_obj_23065 = (target_obj_23064["setUninstallURL"]);
if(!((next_obj_23065 == null))){
return next_obj_23065;
} else {
return null;
}
})();
return target_23056.apply(ns_23055,final_args_array_23054);
})();

return callback_chan_23050;
});
chromex.ext.runtime.reload_STAR_ = (function chromex$ext$runtime$reload_STAR_(config){
var result_23083 = (function (){var final_args_array_23084 = chromex.support.prepare_final_args_array(cljs.core.PersistentVector.EMPTY,"chrome.runtime.reload");
var ns_23085 = (function (){var target_obj_23087 = cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1(config);
var next_obj_23088 = (target_obj_23087["chrome"]);
var next_obj_23089 = (next_obj_23088["runtime"]);
return next_obj_23089;
})();
var config__14284__auto___23092 = config;
var api_check_fn__14285__auto___23093 = cljs.core.cst$kw$missing_DASH_api_DASH_check_DASH_fn.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23092);
if(cljs.core.fn_QMARK_(api_check_fn__14285__auto___23093)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23092)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__14285__auto__)")].join('')));
}

(api_check_fn__14285__auto___23093.cljs$core$IFn$_invoke$arity$3 ? api_check_fn__14285__auto___23093.cljs$core$IFn$_invoke$arity$3("chrome.runtime.reload",ns_23085,"reload") : api_check_fn__14285__auto___23093.call(null,"chrome.runtime.reload",ns_23085,"reload"));

var config__14280__auto___23094 = config;
if(cljs.core.truth_(cljs.core.cst$kw$verbose_DASH_logging.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23094))){
var logger__14281__auto___23095 = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23094);
var prefix__14282__auto___23096 = ["calling:","chrome.runtime.reload"];
if(cljs.core.fn_QMARK_(logger__14281__auto___23095)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23094)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__14281__auto__)")].join('')));
}

logger__14281__auto___23095.apply(null,prefix__14282__auto___23096.concat(final_args_array_23084));
} else {
}

var target_23086 = (function (){var target_obj_23090 = ns_23085;
var next_obj_23091 = (target_obj_23090["reload"]);
if(!((next_obj_23091 == null))){
return next_obj_23091;
} else {
return null;
}
})();
return target_23086.apply(ns_23085,final_args_array_23084);
})();
return result_23083;
});
chromex.ext.runtime.request_update_check_STAR_ = (function chromex$ext$runtime$request_update_check_STAR_(config){
var callback_chan_23113 = (function (){var config__14251__auto__ = config;
var handler_key__14252__auto__ = cljs.core.cst$kw$callback_DASH_channel_DASH_factory;
var handler__14253__auto__ = (handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1 ? handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler_key__14252__auto__.call(null,config__14251__auto__));
if(cljs.core.fn_QMARK_(handler__14253__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__14252__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14251__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__14253__auto__)")].join('')));
}

return (handler__14253__auto__.cljs$core$IFn$_invoke$arity$1 ? handler__14253__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler__14253__auto__.call(null,config__14251__auto__));
})();
var marshalled_callback_23115_23129 = ((function (callback_chan_23113){
return (function (cb_status_23119,cb_details_23120){
return (function (){var config__14251__auto__ = config;
var handler_key__14252__auto__ = cljs.core.cst$kw$callback_DASH_fn_DASH_factory;
var handler__14253__auto__ = (handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1 ? handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler_key__14252__auto__.call(null,config__14251__auto__));
if(cljs.core.fn_QMARK_(handler__14253__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__14252__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14251__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__14253__auto__)")].join('')));
}

var G__23121 = config__14251__auto__;
var G__23122 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,cljs.core.cst$kw$chromex$ext$runtime_SLASH_request_DASH_update_DASH_check,cljs.core.cst$kw$name,"requestUpdateCheck",cljs.core.cst$kw$since,"25",cljs.core.cst$kw$callback_QMARK_,true,cljs.core.cst$kw$params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"callback",cljs.core.cst$kw$type,cljs.core.cst$kw$callback,cljs.core.cst$kw$callback,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"status",cljs.core.cst$kw$type,"runtime.RequestUpdateCheckStatus"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"details",cljs.core.cst$kw$optional_QMARK_,true,cljs.core.cst$kw$type,"object"], null)], null)], null)], null)], null),cljs.core.cst$kw$function_QMARK_,true], null);
var G__23123 = callback_chan_23113;
return (handler__14253__auto__.cljs$core$IFn$_invoke$arity$3 ? handler__14253__auto__.cljs$core$IFn$_invoke$arity$3(G__23121,G__23122,G__23123) : handler__14253__auto__.call(null,G__23121,G__23122,G__23123));
})().call(null,cb_status_23119,cb_details_23120);
});})(callback_chan_23113))
;
var result_23114_23130 = (function (){var final_args_array_23116 = chromex.support.prepare_final_args_array(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_23115_23129,"callback",null], null)], null),"chrome.runtime.requestUpdateCheck");
var ns_23117 = (function (){var target_obj_23124 = cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1(config);
var next_obj_23125 = (target_obj_23124["chrome"]);
var next_obj_23126 = (next_obj_23125["runtime"]);
return next_obj_23126;
})();
var config__14284__auto___23131 = config;
var api_check_fn__14285__auto___23132 = cljs.core.cst$kw$missing_DASH_api_DASH_check_DASH_fn.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23131);
if(cljs.core.fn_QMARK_(api_check_fn__14285__auto___23132)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23131)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__14285__auto__)")].join('')));
}

(api_check_fn__14285__auto___23132.cljs$core$IFn$_invoke$arity$3 ? api_check_fn__14285__auto___23132.cljs$core$IFn$_invoke$arity$3("chrome.runtime.requestUpdateCheck",ns_23117,"requestUpdateCheck") : api_check_fn__14285__auto___23132.call(null,"chrome.runtime.requestUpdateCheck",ns_23117,"requestUpdateCheck"));

var config__14280__auto___23133 = config;
if(cljs.core.truth_(cljs.core.cst$kw$verbose_DASH_logging.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23133))){
var logger__14281__auto___23134 = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23133);
var prefix__14282__auto___23135 = ["calling:","chrome.runtime.requestUpdateCheck"];
if(cljs.core.fn_QMARK_(logger__14281__auto___23134)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23133)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__14281__auto__)")].join('')));
}

logger__14281__auto___23134.apply(null,prefix__14282__auto___23135.concat(final_args_array_23116));
} else {
}

var target_23118 = (function (){var target_obj_23127 = ns_23117;
var next_obj_23128 = (target_obj_23127["requestUpdateCheck"]);
if(!((next_obj_23128 == null))){
return next_obj_23128;
} else {
return null;
}
})();
return target_23118.apply(ns_23117,final_args_array_23116);
})();

return callback_chan_23113;
});
chromex.ext.runtime.restart_STAR_ = (function chromex$ext$runtime$restart_STAR_(config){
var result_23145 = (function (){var final_args_array_23146 = chromex.support.prepare_final_args_array(cljs.core.PersistentVector.EMPTY,"chrome.runtime.restart");
var ns_23147 = (function (){var target_obj_23149 = cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1(config);
var next_obj_23150 = (target_obj_23149["chrome"]);
var next_obj_23151 = (next_obj_23150["runtime"]);
return next_obj_23151;
})();
var config__14284__auto___23154 = config;
var api_check_fn__14285__auto___23155 = cljs.core.cst$kw$missing_DASH_api_DASH_check_DASH_fn.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23154);
if(cljs.core.fn_QMARK_(api_check_fn__14285__auto___23155)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23154)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__14285__auto__)")].join('')));
}

(api_check_fn__14285__auto___23155.cljs$core$IFn$_invoke$arity$3 ? api_check_fn__14285__auto___23155.cljs$core$IFn$_invoke$arity$3("chrome.runtime.restart",ns_23147,"restart") : api_check_fn__14285__auto___23155.call(null,"chrome.runtime.restart",ns_23147,"restart"));

var config__14280__auto___23156 = config;
if(cljs.core.truth_(cljs.core.cst$kw$verbose_DASH_logging.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23156))){
var logger__14281__auto___23157 = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23156);
var prefix__14282__auto___23158 = ["calling:","chrome.runtime.restart"];
if(cljs.core.fn_QMARK_(logger__14281__auto___23157)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23156)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__14281__auto__)")].join('')));
}

logger__14281__auto___23157.apply(null,prefix__14282__auto___23158.concat(final_args_array_23146));
} else {
}

var target_23148 = (function (){var target_obj_23152 = ns_23147;
var next_obj_23153 = (target_obj_23152["restart"]);
if(!((next_obj_23153 == null))){
return next_obj_23153;
} else {
return null;
}
})();
return target_23148.apply(ns_23147,final_args_array_23146);
})();
return result_23145;
});
chromex.ext.runtime.restart_after_delay_STAR_ = (function chromex$ext$runtime$restart_after_delay_STAR_(config,seconds){
var callback_chan_23175 = (function (){var config__14251__auto__ = config;
var handler_key__14252__auto__ = cljs.core.cst$kw$callback_DASH_channel_DASH_factory;
var handler__14253__auto__ = (handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1 ? handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler_key__14252__auto__.call(null,config__14251__auto__));
if(cljs.core.fn_QMARK_(handler__14253__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__14252__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14251__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__14253__auto__)")].join('')));
}

return (handler__14253__auto__.cljs$core$IFn$_invoke$arity$1 ? handler__14253__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler__14253__auto__.call(null,config__14251__auto__));
})();
var marshalled_seconds_23177_23191 = (function (){var omit_test_23182 = seconds;
if(cljs.core.keyword_identical_QMARK_(omit_test_23182,cljs.core.cst$kw$omit)){
return cljs.core.cst$kw$omit;
} else {
return omit_test_23182;
}
})();
var marshalled_callback_23178_23192 = (function (){var config__14251__auto__ = config;
var handler_key__14252__auto__ = cljs.core.cst$kw$callback_DASH_fn_DASH_factory;
var handler__14253__auto__ = (handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1 ? handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler_key__14252__auto__.call(null,config__14251__auto__));
if(cljs.core.fn_QMARK_(handler__14253__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__14252__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14251__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__14253__auto__)")].join('')));
}

var G__23183 = config__14251__auto__;
var G__23184 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,cljs.core.cst$kw$chromex$ext$runtime_SLASH_restart_DASH_after_DASH_delay,cljs.core.cst$kw$name,"restartAfterDelay",cljs.core.cst$kw$since,"53",cljs.core.cst$kw$callback_QMARK_,true,cljs.core.cst$kw$params,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"seconds",cljs.core.cst$kw$type,"integer"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"callback",cljs.core.cst$kw$optional_QMARK_,true,cljs.core.cst$kw$type,cljs.core.cst$kw$callback], null)], null),cljs.core.cst$kw$function_QMARK_,true], null);
var G__23185 = callback_chan_23175;
return (handler__14253__auto__.cljs$core$IFn$_invoke$arity$3 ? handler__14253__auto__.cljs$core$IFn$_invoke$arity$3(G__23183,G__23184,G__23185) : handler__14253__auto__.call(null,G__23183,G__23184,G__23185));
})();
var result_23176_23193 = (function (){var final_args_array_23179 = chromex.support.prepare_final_args_array(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_seconds_23177_23191,"seconds",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_23178_23192,"callback",true], null)], null),"chrome.runtime.restartAfterDelay");
var ns_23180 = (function (){var target_obj_23186 = cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1(config);
var next_obj_23187 = (target_obj_23186["chrome"]);
var next_obj_23188 = (next_obj_23187["runtime"]);
return next_obj_23188;
})();
var config__14284__auto___23194 = config;
var api_check_fn__14285__auto___23195 = cljs.core.cst$kw$missing_DASH_api_DASH_check_DASH_fn.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23194);
if(cljs.core.fn_QMARK_(api_check_fn__14285__auto___23195)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23194)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__14285__auto__)")].join('')));
}

(api_check_fn__14285__auto___23195.cljs$core$IFn$_invoke$arity$3 ? api_check_fn__14285__auto___23195.cljs$core$IFn$_invoke$arity$3("chrome.runtime.restartAfterDelay",ns_23180,"restartAfterDelay") : api_check_fn__14285__auto___23195.call(null,"chrome.runtime.restartAfterDelay",ns_23180,"restartAfterDelay"));

var config__14280__auto___23196 = config;
if(cljs.core.truth_(cljs.core.cst$kw$verbose_DASH_logging.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23196))){
var logger__14281__auto___23197 = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23196);
var prefix__14282__auto___23198 = ["calling:","chrome.runtime.restartAfterDelay"];
if(cljs.core.fn_QMARK_(logger__14281__auto___23197)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23196)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__14281__auto__)")].join('')));
}

logger__14281__auto___23197.apply(null,prefix__14282__auto___23198.concat(final_args_array_23179));
} else {
}

var target_23181 = (function (){var target_obj_23189 = ns_23180;
var next_obj_23190 = (target_obj_23189["restartAfterDelay"]);
if(!((next_obj_23190 == null))){
return next_obj_23190;
} else {
return null;
}
})();
return target_23181.apply(ns_23180,final_args_array_23179);
})();

return callback_chan_23175;
});
chromex.ext.runtime.connect_STAR_ = (function chromex$ext$runtime$connect_STAR_(config,extension_id,connect_info){
var marshalled_extension_id_23213 = (function (){var omit_test_23218 = extension_id;
if(cljs.core.keyword_identical_QMARK_(omit_test_23218,cljs.core.cst$kw$omit)){
return cljs.core.cst$kw$omit;
} else {
return omit_test_23218;
}
})();
var marshalled_connect_info_23214 = (function (){var omit_test_23219 = connect_info;
if(cljs.core.keyword_identical_QMARK_(omit_test_23219,cljs.core.cst$kw$omit)){
return cljs.core.cst$kw$omit;
} else {
return omit_test_23219;
}
})();
var result_23212 = (function (){var final_args_array_23215 = chromex.support.prepare_final_args_array(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_extension_id_23213,"extension-id",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_connect_info_23214,"connect-info",true], null)], null),"chrome.runtime.connect");
var ns_23216 = (function (){var target_obj_23220 = cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1(config);
var next_obj_23221 = (target_obj_23220["chrome"]);
var next_obj_23222 = (next_obj_23221["runtime"]);
return next_obj_23222;
})();
var config__14284__auto___23225 = config;
var api_check_fn__14285__auto___23226 = cljs.core.cst$kw$missing_DASH_api_DASH_check_DASH_fn.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23225);
if(cljs.core.fn_QMARK_(api_check_fn__14285__auto___23226)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23225)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__14285__auto__)")].join('')));
}

(api_check_fn__14285__auto___23226.cljs$core$IFn$_invoke$arity$3 ? api_check_fn__14285__auto___23226.cljs$core$IFn$_invoke$arity$3("chrome.runtime.connect",ns_23216,"connect") : api_check_fn__14285__auto___23226.call(null,"chrome.runtime.connect",ns_23216,"connect"));

var config__14280__auto___23227 = config;
if(cljs.core.truth_(cljs.core.cst$kw$verbose_DASH_logging.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23227))){
var logger__14281__auto___23228 = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23227);
var prefix__14282__auto___23229 = ["calling:","chrome.runtime.connect"];
if(cljs.core.fn_QMARK_(logger__14281__auto___23228)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23227)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__14281__auto__)")].join('')));
}

logger__14281__auto___23228.apply(null,prefix__14282__auto___23229.concat(final_args_array_23215));
} else {
}

var target_23217 = (function (){var target_obj_23223 = ns_23216;
var next_obj_23224 = (target_obj_23223["connect"]);
if(!((next_obj_23224 == null))){
return next_obj_23224;
} else {
return null;
}
})();
return target_23217.apply(ns_23216,final_args_array_23215);
})();
return chromex.marshalling.from_native_chrome_port(config,result_23212);
});
chromex.ext.runtime.connect_native_STAR_ = (function chromex$ext$runtime$connect_native_STAR_(config,application){
var marshalled_application_23242 = (function (){var omit_test_23246 = application;
if(cljs.core.keyword_identical_QMARK_(omit_test_23246,cljs.core.cst$kw$omit)){
return cljs.core.cst$kw$omit;
} else {
return omit_test_23246;
}
})();
var result_23241 = (function (){var final_args_array_23243 = chromex.support.prepare_final_args_array(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_application_23242,"application",null], null)], null),"chrome.runtime.connectNative");
var ns_23244 = (function (){var target_obj_23247 = cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1(config);
var next_obj_23248 = (target_obj_23247["chrome"]);
var next_obj_23249 = (next_obj_23248["runtime"]);
return next_obj_23249;
})();
var config__14284__auto___23252 = config;
var api_check_fn__14285__auto___23253 = cljs.core.cst$kw$missing_DASH_api_DASH_check_DASH_fn.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23252);
if(cljs.core.fn_QMARK_(api_check_fn__14285__auto___23253)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23252)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__14285__auto__)")].join('')));
}

(api_check_fn__14285__auto___23253.cljs$core$IFn$_invoke$arity$3 ? api_check_fn__14285__auto___23253.cljs$core$IFn$_invoke$arity$3("chrome.runtime.connectNative",ns_23244,"connectNative") : api_check_fn__14285__auto___23253.call(null,"chrome.runtime.connectNative",ns_23244,"connectNative"));

var config__14280__auto___23254 = config;
if(cljs.core.truth_(cljs.core.cst$kw$verbose_DASH_logging.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23254))){
var logger__14281__auto___23255 = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23254);
var prefix__14282__auto___23256 = ["calling:","chrome.runtime.connectNative"];
if(cljs.core.fn_QMARK_(logger__14281__auto___23255)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23254)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__14281__auto__)")].join('')));
}

logger__14281__auto___23255.apply(null,prefix__14282__auto___23256.concat(final_args_array_23243));
} else {
}

var target_23245 = (function (){var target_obj_23250 = ns_23244;
var next_obj_23251 = (target_obj_23250["connectNative"]);
if(!((next_obj_23251 == null))){
return next_obj_23251;
} else {
return null;
}
})();
return target_23245.apply(ns_23244,final_args_array_23243);
})();
return chromex.marshalling.from_native_chrome_port(config,result_23241);
});
chromex.ext.runtime.send_message_STAR_ = (function chromex$ext$runtime$send_message_STAR_(config,extension_id,message,options){
var callback_chan_23278 = (function (){var config__14251__auto__ = config;
var handler_key__14252__auto__ = cljs.core.cst$kw$callback_DASH_channel_DASH_factory;
var handler__14253__auto__ = (handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1 ? handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler_key__14252__auto__.call(null,config__14251__auto__));
if(cljs.core.fn_QMARK_(handler__14253__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__14252__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14251__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__14253__auto__)")].join('')));
}

return (handler__14253__auto__.cljs$core$IFn$_invoke$arity$1 ? handler__14253__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler__14253__auto__.call(null,config__14251__auto__));
})();
var marshalled_extension_id_23280_23299 = (function (){var omit_test_23287 = extension_id;
if(cljs.core.keyword_identical_QMARK_(omit_test_23287,cljs.core.cst$kw$omit)){
return cljs.core.cst$kw$omit;
} else {
return omit_test_23287;
}
})();
var marshalled_message_23281_23300 = (function (){var omit_test_23288 = message;
if(cljs.core.keyword_identical_QMARK_(omit_test_23288,cljs.core.cst$kw$omit)){
return cljs.core.cst$kw$omit;
} else {
return omit_test_23288;
}
})();
var marshalled_options_23282_23301 = (function (){var omit_test_23289 = options;
if(cljs.core.keyword_identical_QMARK_(omit_test_23289,cljs.core.cst$kw$omit)){
return cljs.core.cst$kw$omit;
} else {
return omit_test_23289;
}
})();
var marshalled_response_callback_23283_23302 = ((function (marshalled_extension_id_23280_23299,marshalled_message_23281_23300,marshalled_options_23282_23301,callback_chan_23278){
return (function (cb_response_23290){
return (function (){var config__14251__auto__ = config;
var handler_key__14252__auto__ = cljs.core.cst$kw$callback_DASH_fn_DASH_factory;
var handler__14253__auto__ = (handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1 ? handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler_key__14252__auto__.call(null,config__14251__auto__));
if(cljs.core.fn_QMARK_(handler__14253__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__14252__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14251__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__14253__auto__)")].join('')));
}

var G__23291 = config__14251__auto__;
var G__23292 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,cljs.core.cst$kw$chromex$ext$runtime_SLASH_send_DASH_message,cljs.core.cst$kw$name,"sendMessage",cljs.core.cst$kw$since,"26",cljs.core.cst$kw$callback_QMARK_,true,cljs.core.cst$kw$params,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"extension-id",cljs.core.cst$kw$optional_QMARK_,true,cljs.core.cst$kw$type,"string"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"message",cljs.core.cst$kw$type,"any"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"options",cljs.core.cst$kw$optional_QMARK_,true,cljs.core.cst$kw$type,"object"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"response-callback",cljs.core.cst$kw$optional_QMARK_,true,cljs.core.cst$kw$type,cljs.core.cst$kw$callback,cljs.core.cst$kw$callback,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"response",cljs.core.cst$kw$type,"any"], null)], null)], null)], null)], null),cljs.core.cst$kw$function_QMARK_,true], null);
var G__23293 = callback_chan_23278;
return (handler__14253__auto__.cljs$core$IFn$_invoke$arity$3 ? handler__14253__auto__.cljs$core$IFn$_invoke$arity$3(G__23291,G__23292,G__23293) : handler__14253__auto__.call(null,G__23291,G__23292,G__23293));
})().call(null,cb_response_23290);
});})(marshalled_extension_id_23280_23299,marshalled_message_23281_23300,marshalled_options_23282_23301,callback_chan_23278))
;
var result_23279_23303 = (function (){var final_args_array_23284 = chromex.support.prepare_final_args_array(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_extension_id_23280_23299,"extension-id",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_message_23281_23300,"message",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_options_23282_23301,"options",true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_response_callback_23283_23302,"response-callback",true], null)], null),"chrome.runtime.sendMessage");
var ns_23285 = (function (){var target_obj_23294 = cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1(config);
var next_obj_23295 = (target_obj_23294["chrome"]);
var next_obj_23296 = (next_obj_23295["runtime"]);
return next_obj_23296;
})();
var config__14284__auto___23304 = config;
var api_check_fn__14285__auto___23305 = cljs.core.cst$kw$missing_DASH_api_DASH_check_DASH_fn.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23304);
if(cljs.core.fn_QMARK_(api_check_fn__14285__auto___23305)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23304)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__14285__auto__)")].join('')));
}

(api_check_fn__14285__auto___23305.cljs$core$IFn$_invoke$arity$3 ? api_check_fn__14285__auto___23305.cljs$core$IFn$_invoke$arity$3("chrome.runtime.sendMessage",ns_23285,"sendMessage") : api_check_fn__14285__auto___23305.call(null,"chrome.runtime.sendMessage",ns_23285,"sendMessage"));

var config__14280__auto___23306 = config;
if(cljs.core.truth_(cljs.core.cst$kw$verbose_DASH_logging.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23306))){
var logger__14281__auto___23307 = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23306);
var prefix__14282__auto___23308 = ["calling:","chrome.runtime.sendMessage"];
if(cljs.core.fn_QMARK_(logger__14281__auto___23307)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23306)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__14281__auto__)")].join('')));
}

logger__14281__auto___23307.apply(null,prefix__14282__auto___23308.concat(final_args_array_23284));
} else {
}

var target_23286 = (function (){var target_obj_23297 = ns_23285;
var next_obj_23298 = (target_obj_23297["sendMessage"]);
if(!((next_obj_23298 == null))){
return next_obj_23298;
} else {
return null;
}
})();
return target_23286.apply(ns_23285,final_args_array_23284);
})();

return callback_chan_23278;
});
chromex.ext.runtime.send_native_message_STAR_ = (function chromex$ext$runtime$send_native_message_STAR_(config,application,message){
var callback_chan_23328 = (function (){var config__14251__auto__ = config;
var handler_key__14252__auto__ = cljs.core.cst$kw$callback_DASH_channel_DASH_factory;
var handler__14253__auto__ = (handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1 ? handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler_key__14252__auto__.call(null,config__14251__auto__));
if(cljs.core.fn_QMARK_(handler__14253__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__14252__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14251__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__14253__auto__)")].join('')));
}

return (handler__14253__auto__.cljs$core$IFn$_invoke$arity$1 ? handler__14253__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler__14253__auto__.call(null,config__14251__auto__));
})();
var marshalled_application_23330_23347 = (function (){var omit_test_23336 = application;
if(cljs.core.keyword_identical_QMARK_(omit_test_23336,cljs.core.cst$kw$omit)){
return cljs.core.cst$kw$omit;
} else {
return omit_test_23336;
}
})();
var marshalled_message_23331_23348 = (function (){var omit_test_23337 = message;
if(cljs.core.keyword_identical_QMARK_(omit_test_23337,cljs.core.cst$kw$omit)){
return cljs.core.cst$kw$omit;
} else {
return omit_test_23337;
}
})();
var marshalled_response_callback_23332_23349 = ((function (marshalled_application_23330_23347,marshalled_message_23331_23348,callback_chan_23328){
return (function (cb_response_23338){
return (function (){var config__14251__auto__ = config;
var handler_key__14252__auto__ = cljs.core.cst$kw$callback_DASH_fn_DASH_factory;
var handler__14253__auto__ = (handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1 ? handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler_key__14252__auto__.call(null,config__14251__auto__));
if(cljs.core.fn_QMARK_(handler__14253__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__14252__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14251__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__14253__auto__)")].join('')));
}

var G__23339 = config__14251__auto__;
var G__23340 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,cljs.core.cst$kw$chromex$ext$runtime_SLASH_send_DASH_native_DASH_message,cljs.core.cst$kw$name,"sendNativeMessage",cljs.core.cst$kw$since,"28",cljs.core.cst$kw$callback_QMARK_,true,cljs.core.cst$kw$params,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"application",cljs.core.cst$kw$type,"string"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"message",cljs.core.cst$kw$type,"object"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,"response-callback",cljs.core.cst$kw$optional_QMARK_,true,cljs.core.cst$kw$type,cljs.core.cst$kw$callback,cljs.core.cst$kw$callback,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"response",cljs.core.cst$kw$type,"any"], null)], null)], null)], null)], null),cljs.core.cst$kw$function_QMARK_,true], null);
var G__23341 = callback_chan_23328;
return (handler__14253__auto__.cljs$core$IFn$_invoke$arity$3 ? handler__14253__auto__.cljs$core$IFn$_invoke$arity$3(G__23339,G__23340,G__23341) : handler__14253__auto__.call(null,G__23339,G__23340,G__23341));
})().call(null,cb_response_23338);
});})(marshalled_application_23330_23347,marshalled_message_23331_23348,callback_chan_23328))
;
var result_23329_23350 = (function (){var final_args_array_23333 = chromex.support.prepare_final_args_array(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_application_23330_23347,"application",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_message_23331_23348,"message",null], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_response_callback_23332_23349,"response-callback",true], null)], null),"chrome.runtime.sendNativeMessage");
var ns_23334 = (function (){var target_obj_23342 = cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1(config);
var next_obj_23343 = (target_obj_23342["chrome"]);
var next_obj_23344 = (next_obj_23343["runtime"]);
return next_obj_23344;
})();
var config__14284__auto___23351 = config;
var api_check_fn__14285__auto___23352 = cljs.core.cst$kw$missing_DASH_api_DASH_check_DASH_fn.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23351);
if(cljs.core.fn_QMARK_(api_check_fn__14285__auto___23352)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23351)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__14285__auto__)")].join('')));
}

(api_check_fn__14285__auto___23352.cljs$core$IFn$_invoke$arity$3 ? api_check_fn__14285__auto___23352.cljs$core$IFn$_invoke$arity$3("chrome.runtime.sendNativeMessage",ns_23334,"sendNativeMessage") : api_check_fn__14285__auto___23352.call(null,"chrome.runtime.sendNativeMessage",ns_23334,"sendNativeMessage"));

var config__14280__auto___23353 = config;
if(cljs.core.truth_(cljs.core.cst$kw$verbose_DASH_logging.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23353))){
var logger__14281__auto___23354 = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23353);
var prefix__14282__auto___23355 = ["calling:","chrome.runtime.sendNativeMessage"];
if(cljs.core.fn_QMARK_(logger__14281__auto___23354)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23353)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__14281__auto__)")].join('')));
}

logger__14281__auto___23354.apply(null,prefix__14282__auto___23355.concat(final_args_array_23333));
} else {
}

var target_23335 = (function (){var target_obj_23345 = ns_23334;
var next_obj_23346 = (target_obj_23345["sendNativeMessage"]);
if(!((next_obj_23346 == null))){
return next_obj_23346;
} else {
return null;
}
})();
return target_23335.apply(ns_23334,final_args_array_23333);
})();

return callback_chan_23328;
});
chromex.ext.runtime.get_platform_info_STAR_ = (function chromex$ext$runtime$get_platform_info_STAR_(config){
var callback_chan_23371 = (function (){var config__14251__auto__ = config;
var handler_key__14252__auto__ = cljs.core.cst$kw$callback_DASH_channel_DASH_factory;
var handler__14253__auto__ = (handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1 ? handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler_key__14252__auto__.call(null,config__14251__auto__));
if(cljs.core.fn_QMARK_(handler__14253__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__14252__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14251__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__14253__auto__)")].join('')));
}

return (handler__14253__auto__.cljs$core$IFn$_invoke$arity$1 ? handler__14253__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler__14253__auto__.call(null,config__14251__auto__));
})();
var marshalled_callback_23373_23386 = ((function (callback_chan_23371){
return (function (cb_platform_info_23377){
return (function (){var config__14251__auto__ = config;
var handler_key__14252__auto__ = cljs.core.cst$kw$callback_DASH_fn_DASH_factory;
var handler__14253__auto__ = (handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1 ? handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler_key__14252__auto__.call(null,config__14251__auto__));
if(cljs.core.fn_QMARK_(handler__14253__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__14252__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14251__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__14253__auto__)")].join('')));
}

var G__23378 = config__14251__auto__;
var G__23379 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,cljs.core.cst$kw$chromex$ext$runtime_SLASH_get_DASH_platform_DASH_info,cljs.core.cst$kw$name,"getPlatformInfo",cljs.core.cst$kw$since,"29",cljs.core.cst$kw$callback_QMARK_,true,cljs.core.cst$kw$params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"callback",cljs.core.cst$kw$type,cljs.core.cst$kw$callback,cljs.core.cst$kw$callback,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"platform-info",cljs.core.cst$kw$type,"runtime.PlatformInfo"], null)], null)], null)], null)], null),cljs.core.cst$kw$function_QMARK_,true], null);
var G__23380 = callback_chan_23371;
return (handler__14253__auto__.cljs$core$IFn$_invoke$arity$3 ? handler__14253__auto__.cljs$core$IFn$_invoke$arity$3(G__23378,G__23379,G__23380) : handler__14253__auto__.call(null,G__23378,G__23379,G__23380));
})().call(null,cb_platform_info_23377);
});})(callback_chan_23371))
;
var result_23372_23387 = (function (){var final_args_array_23374 = chromex.support.prepare_final_args_array(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_23373_23386,"callback",null], null)], null),"chrome.runtime.getPlatformInfo");
var ns_23375 = (function (){var target_obj_23381 = cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1(config);
var next_obj_23382 = (target_obj_23381["chrome"]);
var next_obj_23383 = (next_obj_23382["runtime"]);
return next_obj_23383;
})();
var config__14284__auto___23388 = config;
var api_check_fn__14285__auto___23389 = cljs.core.cst$kw$missing_DASH_api_DASH_check_DASH_fn.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23388);
if(cljs.core.fn_QMARK_(api_check_fn__14285__auto___23389)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23388)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__14285__auto__)")].join('')));
}

(api_check_fn__14285__auto___23389.cljs$core$IFn$_invoke$arity$3 ? api_check_fn__14285__auto___23389.cljs$core$IFn$_invoke$arity$3("chrome.runtime.getPlatformInfo",ns_23375,"getPlatformInfo") : api_check_fn__14285__auto___23389.call(null,"chrome.runtime.getPlatformInfo",ns_23375,"getPlatformInfo"));

var config__14280__auto___23390 = config;
if(cljs.core.truth_(cljs.core.cst$kw$verbose_DASH_logging.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23390))){
var logger__14281__auto___23391 = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23390);
var prefix__14282__auto___23392 = ["calling:","chrome.runtime.getPlatformInfo"];
if(cljs.core.fn_QMARK_(logger__14281__auto___23391)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23390)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__14281__auto__)")].join('')));
}

logger__14281__auto___23391.apply(null,prefix__14282__auto___23392.concat(final_args_array_23374));
} else {
}

var target_23376 = (function (){var target_obj_23384 = ns_23375;
var next_obj_23385 = (target_obj_23384["getPlatformInfo"]);
if(!((next_obj_23385 == null))){
return next_obj_23385;
} else {
return null;
}
})();
return target_23376.apply(ns_23375,final_args_array_23374);
})();

return callback_chan_23371;
});
chromex.ext.runtime.get_package_directory_entry_STAR_ = (function chromex$ext$runtime$get_package_directory_entry_STAR_(config){
var callback_chan_23408 = (function (){var config__14251__auto__ = config;
var handler_key__14252__auto__ = cljs.core.cst$kw$callback_DASH_channel_DASH_factory;
var handler__14253__auto__ = (handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1 ? handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler_key__14252__auto__.call(null,config__14251__auto__));
if(cljs.core.fn_QMARK_(handler__14253__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__14252__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14251__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__14253__auto__)")].join('')));
}

return (handler__14253__auto__.cljs$core$IFn$_invoke$arity$1 ? handler__14253__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler__14253__auto__.call(null,config__14251__auto__));
})();
var marshalled_callback_23410_23423 = ((function (callback_chan_23408){
return (function (cb_directory_entry_23414){
return (function (){var config__14251__auto__ = config;
var handler_key__14252__auto__ = cljs.core.cst$kw$callback_DASH_fn_DASH_factory;
var handler__14253__auto__ = (handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1 ? handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler_key__14252__auto__.call(null,config__14251__auto__));
if(cljs.core.fn_QMARK_(handler__14253__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__14252__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14251__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__14253__auto__)")].join('')));
}

var G__23415 = config__14251__auto__;
var G__23416 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,cljs.core.cst$kw$chromex$ext$runtime_SLASH_get_DASH_package_DASH_directory_DASH_entry,cljs.core.cst$kw$name,"getPackageDirectoryEntry",cljs.core.cst$kw$since,"29",cljs.core.cst$kw$callback_QMARK_,true,cljs.core.cst$kw$params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"callback",cljs.core.cst$kw$type,cljs.core.cst$kw$callback,cljs.core.cst$kw$callback,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"directory-entry",cljs.core.cst$kw$type,"DirectoryEntry"], null)], null)], null)], null)], null),cljs.core.cst$kw$function_QMARK_,true], null);
var G__23417 = callback_chan_23408;
return (handler__14253__auto__.cljs$core$IFn$_invoke$arity$3 ? handler__14253__auto__.cljs$core$IFn$_invoke$arity$3(G__23415,G__23416,G__23417) : handler__14253__auto__.call(null,G__23415,G__23416,G__23417));
})().call(null,cb_directory_entry_23414);
});})(callback_chan_23408))
;
var result_23409_23424 = (function (){var final_args_array_23411 = chromex.support.prepare_final_args_array(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [marshalled_callback_23410_23423,"callback",null], null)], null),"chrome.runtime.getPackageDirectoryEntry");
var ns_23412 = (function (){var target_obj_23418 = cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1(config);
var next_obj_23419 = (target_obj_23418["chrome"]);
var next_obj_23420 = (next_obj_23419["runtime"]);
return next_obj_23420;
})();
var config__14284__auto___23425 = config;
var api_check_fn__14285__auto___23426 = cljs.core.cst$kw$missing_DASH_api_DASH_check_DASH_fn.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23425);
if(cljs.core.fn_QMARK_(api_check_fn__14285__auto___23426)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23425)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__14285__auto__)")].join('')));
}

(api_check_fn__14285__auto___23426.cljs$core$IFn$_invoke$arity$3 ? api_check_fn__14285__auto___23426.cljs$core$IFn$_invoke$arity$3("chrome.runtime.getPackageDirectoryEntry",ns_23412,"getPackageDirectoryEntry") : api_check_fn__14285__auto___23426.call(null,"chrome.runtime.getPackageDirectoryEntry",ns_23412,"getPackageDirectoryEntry"));

var config__14280__auto___23427 = config;
if(cljs.core.truth_(cljs.core.cst$kw$verbose_DASH_logging.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23427))){
var logger__14281__auto___23428 = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23427);
var prefix__14282__auto___23429 = ["calling:","chrome.runtime.getPackageDirectoryEntry"];
if(cljs.core.fn_QMARK_(logger__14281__auto___23428)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23427)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__14281__auto__)")].join('')));
}

logger__14281__auto___23428.apply(null,prefix__14282__auto___23429.concat(final_args_array_23411));
} else {
}

var target_23413 = (function (){var target_obj_23421 = ns_23412;
var next_obj_23422 = (target_obj_23421["getPackageDirectoryEntry"]);
if(!((next_obj_23422 == null))){
return next_obj_23422;
} else {
return null;
}
})();
return target_23413.apply(ns_23412,final_args_array_23411);
})();

return callback_chan_23408;
});
chromex.ext.runtime.on_startup_STAR_ = (function chromex$ext$runtime$on_startup_STAR_(var_args){
var args__9188__auto__ = [];
var len__9181__auto___23444 = arguments.length;
var i__9182__auto___23445 = (0);
while(true){
if((i__9182__auto___23445 < len__9181__auto___23444)){
args__9188__auto__.push((arguments[i__9182__auto___23445]));

var G__23446 = (i__9182__auto___23445 + (1));
i__9182__auto___23445 = G__23446;
continue;
} else {
}
break;
}

var argseq__9189__auto__ = ((((2) < args__9188__auto__.length))?(new cljs.core.IndexedSeq(args__9188__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_startup_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9189__auto__);
});

chromex.ext.runtime.on_startup_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_23433 = (function (){var config__14251__auto__ = config;
var handler_key__14252__auto__ = cljs.core.cst$kw$event_DASH_listener_DASH_factory;
var handler__14253__auto__ = (handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1 ? handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler_key__14252__auto__.call(null,config__14251__auto__));
if(cljs.core.fn_QMARK_(handler__14253__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__14252__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14251__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__14253__auto__)")].join('')));
}

var G__23436 = config__14251__auto__;
var G__23437 = cljs.core.cst$kw$chromex$ext$runtime_SLASH_on_DASH_startup;
var G__23438 = channel;
return (handler__14253__auto__.cljs$core$IFn$_invoke$arity$3 ? handler__14253__auto__.cljs$core$IFn$_invoke$arity$3(G__23436,G__23437,G__23438) : handler__14253__auto__.call(null,G__23436,G__23437,G__23438));
})();
var handler_fn_23434 = event_fn_23433;
var logging_fn__22666__auto__ = ((function (event_fn_23433,handler_fn_23434){
return (function (){
var config__14280__auto___23447 = config;
if(cljs.core.truth_(cljs.core.cst$kw$verbose_DASH_logging.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23447))){
var logger__14281__auto___23448 = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23447);
var prefix__14282__auto___23449 = ["event:","chrome.runtime.onStartup"];
if(cljs.core.fn_QMARK_(logger__14281__auto___23448)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23447)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__14281__auto__)")].join('')));
}

logger__14281__auto___23448.apply(null,prefix__14282__auto___23449.concat(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)));
} else {
}

return (handler_fn_23434.cljs$core$IFn$_invoke$arity$0 ? handler_fn_23434.cljs$core$IFn$_invoke$arity$0() : handler_fn_23434.call(null));
});})(event_fn_23433,handler_fn_23434))
;
var ns_obj_23435 = (function (){var target_obj_23439 = cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1(config);
var next_obj_23440 = (target_obj_23439["chrome"]);
var next_obj_23441 = (next_obj_23440["runtime"]);
return next_obj_23441;
})();
var config__14284__auto___23450 = config;
var api_check_fn__14285__auto___23451 = cljs.core.cst$kw$missing_DASH_api_DASH_check_DASH_fn.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23450);
if(cljs.core.fn_QMARK_(api_check_fn__14285__auto___23451)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23450)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__14285__auto__)")].join('')));
}

(api_check_fn__14285__auto___23451.cljs$core$IFn$_invoke$arity$3 ? api_check_fn__14285__auto___23451.cljs$core$IFn$_invoke$arity$3("chrome.runtime.onStartup",ns_obj_23435,"onStartup") : api_check_fn__14285__auto___23451.call(null,"chrome.runtime.onStartup",ns_obj_23435,"onStartup"));

var event_obj__22667__auto__ = (function (){var target_obj_23442 = ns_obj_23435;
var next_obj_23443 = (target_obj_23442["onStartup"]);
return next_obj_23443;
})();
var result__22668__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription(event_obj__22667__auto__,logging_fn__22666__auto__,channel);
chromex.protocols.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2(result__22668__auto__,args);

return result__22668__auto__;
});

chromex.ext.runtime.on_startup_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_startup_STAR_.cljs$lang$applyTo = (function (seq23430){
var G__23431 = cljs.core.first(seq23430);
var seq23430__$1 = cljs.core.next(seq23430);
var G__23432 = cljs.core.first(seq23430__$1);
var seq23430__$2 = cljs.core.next(seq23430__$1);
return chromex.ext.runtime.on_startup_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__23431,G__23432,seq23430__$2);
});

chromex.ext.runtime.on_installed_STAR_ = (function chromex$ext$runtime$on_installed_STAR_(var_args){
var args__9188__auto__ = [];
var len__9181__auto___23468 = arguments.length;
var i__9182__auto___23469 = (0);
while(true){
if((i__9182__auto___23469 < len__9181__auto___23468)){
args__9188__auto__.push((arguments[i__9182__auto___23469]));

var G__23470 = (i__9182__auto___23469 + (1));
i__9182__auto___23469 = G__23470;
continue;
} else {
}
break;
}

var argseq__9189__auto__ = ((((2) < args__9188__auto__.length))?(new cljs.core.IndexedSeq(args__9188__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_installed_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9189__auto__);
});

chromex.ext.runtime.on_installed_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_23455 = (function (){var config__14251__auto__ = config;
var handler_key__14252__auto__ = cljs.core.cst$kw$event_DASH_listener_DASH_factory;
var handler__14253__auto__ = (handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1 ? handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler_key__14252__auto__.call(null,config__14251__auto__));
if(cljs.core.fn_QMARK_(handler__14253__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__14252__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14251__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__14253__auto__)")].join('')));
}

var G__23460 = config__14251__auto__;
var G__23461 = cljs.core.cst$kw$chromex$ext$runtime_SLASH_on_DASH_installed;
var G__23462 = channel;
return (handler__14253__auto__.cljs$core$IFn$_invoke$arity$3 ? handler__14253__auto__.cljs$core$IFn$_invoke$arity$3(G__23460,G__23461,G__23462) : handler__14253__auto__.call(null,G__23460,G__23461,G__23462));
})();
var handler_fn_23456 = ((function (event_fn_23455){
return (function (cb_details_23458){
return (event_fn_23455.cljs$core$IFn$_invoke$arity$1 ? event_fn_23455.cljs$core$IFn$_invoke$arity$1(cb_details_23458) : event_fn_23455.call(null,cb_details_23458));
});})(event_fn_23455))
;
var logging_fn__22666__auto__ = ((function (event_fn_23455,handler_fn_23456){
return (function (cb_param_details_23459){
var config__14280__auto___23471 = config;
if(cljs.core.truth_(cljs.core.cst$kw$verbose_DASH_logging.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23471))){
var logger__14281__auto___23472 = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23471);
var prefix__14282__auto___23473 = ["event:","chrome.runtime.onInstalled"];
if(cljs.core.fn_QMARK_(logger__14281__auto___23472)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23471)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__14281__auto__)")].join('')));
}

logger__14281__auto___23472.apply(null,prefix__14282__auto___23473.concat(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_details_23459], null))));
} else {
}

return handler_fn_23456(cb_param_details_23459);
});})(event_fn_23455,handler_fn_23456))
;
var ns_obj_23457 = (function (){var target_obj_23463 = cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1(config);
var next_obj_23464 = (target_obj_23463["chrome"]);
var next_obj_23465 = (next_obj_23464["runtime"]);
return next_obj_23465;
})();
var config__14284__auto___23474 = config;
var api_check_fn__14285__auto___23475 = cljs.core.cst$kw$missing_DASH_api_DASH_check_DASH_fn.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23474);
if(cljs.core.fn_QMARK_(api_check_fn__14285__auto___23475)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23474)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__14285__auto__)")].join('')));
}

(api_check_fn__14285__auto___23475.cljs$core$IFn$_invoke$arity$3 ? api_check_fn__14285__auto___23475.cljs$core$IFn$_invoke$arity$3("chrome.runtime.onInstalled",ns_obj_23457,"onInstalled") : api_check_fn__14285__auto___23475.call(null,"chrome.runtime.onInstalled",ns_obj_23457,"onInstalled"));

var event_obj__22667__auto__ = (function (){var target_obj_23466 = ns_obj_23457;
var next_obj_23467 = (target_obj_23466["onInstalled"]);
return next_obj_23467;
})();
var result__22668__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription(event_obj__22667__auto__,logging_fn__22666__auto__,channel);
chromex.protocols.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2(result__22668__auto__,args);

return result__22668__auto__;
});

chromex.ext.runtime.on_installed_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_installed_STAR_.cljs$lang$applyTo = (function (seq23452){
var G__23453 = cljs.core.first(seq23452);
var seq23452__$1 = cljs.core.next(seq23452);
var G__23454 = cljs.core.first(seq23452__$1);
var seq23452__$2 = cljs.core.next(seq23452__$1);
return chromex.ext.runtime.on_installed_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__23453,G__23454,seq23452__$2);
});

chromex.ext.runtime.on_suspend_STAR_ = (function chromex$ext$runtime$on_suspend_STAR_(var_args){
var args__9188__auto__ = [];
var len__9181__auto___23490 = arguments.length;
var i__9182__auto___23491 = (0);
while(true){
if((i__9182__auto___23491 < len__9181__auto___23490)){
args__9188__auto__.push((arguments[i__9182__auto___23491]));

var G__23492 = (i__9182__auto___23491 + (1));
i__9182__auto___23491 = G__23492;
continue;
} else {
}
break;
}

var argseq__9189__auto__ = ((((2) < args__9188__auto__.length))?(new cljs.core.IndexedSeq(args__9188__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_suspend_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9189__auto__);
});

chromex.ext.runtime.on_suspend_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_23479 = (function (){var config__14251__auto__ = config;
var handler_key__14252__auto__ = cljs.core.cst$kw$event_DASH_listener_DASH_factory;
var handler__14253__auto__ = (handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1 ? handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler_key__14252__auto__.call(null,config__14251__auto__));
if(cljs.core.fn_QMARK_(handler__14253__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__14252__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14251__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__14253__auto__)")].join('')));
}

var G__23482 = config__14251__auto__;
var G__23483 = cljs.core.cst$kw$chromex$ext$runtime_SLASH_on_DASH_suspend;
var G__23484 = channel;
return (handler__14253__auto__.cljs$core$IFn$_invoke$arity$3 ? handler__14253__auto__.cljs$core$IFn$_invoke$arity$3(G__23482,G__23483,G__23484) : handler__14253__auto__.call(null,G__23482,G__23483,G__23484));
})();
var handler_fn_23480 = event_fn_23479;
var logging_fn__22666__auto__ = ((function (event_fn_23479,handler_fn_23480){
return (function (){
var config__14280__auto___23493 = config;
if(cljs.core.truth_(cljs.core.cst$kw$verbose_DASH_logging.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23493))){
var logger__14281__auto___23494 = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23493);
var prefix__14282__auto___23495 = ["event:","chrome.runtime.onSuspend"];
if(cljs.core.fn_QMARK_(logger__14281__auto___23494)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23493)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__14281__auto__)")].join('')));
}

logger__14281__auto___23494.apply(null,prefix__14282__auto___23495.concat(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)));
} else {
}

return (handler_fn_23480.cljs$core$IFn$_invoke$arity$0 ? handler_fn_23480.cljs$core$IFn$_invoke$arity$0() : handler_fn_23480.call(null));
});})(event_fn_23479,handler_fn_23480))
;
var ns_obj_23481 = (function (){var target_obj_23485 = cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1(config);
var next_obj_23486 = (target_obj_23485["chrome"]);
var next_obj_23487 = (next_obj_23486["runtime"]);
return next_obj_23487;
})();
var config__14284__auto___23496 = config;
var api_check_fn__14285__auto___23497 = cljs.core.cst$kw$missing_DASH_api_DASH_check_DASH_fn.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23496);
if(cljs.core.fn_QMARK_(api_check_fn__14285__auto___23497)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23496)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__14285__auto__)")].join('')));
}

(api_check_fn__14285__auto___23497.cljs$core$IFn$_invoke$arity$3 ? api_check_fn__14285__auto___23497.cljs$core$IFn$_invoke$arity$3("chrome.runtime.onSuspend",ns_obj_23481,"onSuspend") : api_check_fn__14285__auto___23497.call(null,"chrome.runtime.onSuspend",ns_obj_23481,"onSuspend"));

var event_obj__22667__auto__ = (function (){var target_obj_23488 = ns_obj_23481;
var next_obj_23489 = (target_obj_23488["onSuspend"]);
return next_obj_23489;
})();
var result__22668__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription(event_obj__22667__auto__,logging_fn__22666__auto__,channel);
chromex.protocols.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2(result__22668__auto__,args);

return result__22668__auto__;
});

chromex.ext.runtime.on_suspend_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_suspend_STAR_.cljs$lang$applyTo = (function (seq23476){
var G__23477 = cljs.core.first(seq23476);
var seq23476__$1 = cljs.core.next(seq23476);
var G__23478 = cljs.core.first(seq23476__$1);
var seq23476__$2 = cljs.core.next(seq23476__$1);
return chromex.ext.runtime.on_suspend_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__23477,G__23478,seq23476__$2);
});

chromex.ext.runtime.on_suspend_canceled_STAR_ = (function chromex$ext$runtime$on_suspend_canceled_STAR_(var_args){
var args__9188__auto__ = [];
var len__9181__auto___23512 = arguments.length;
var i__9182__auto___23513 = (0);
while(true){
if((i__9182__auto___23513 < len__9181__auto___23512)){
args__9188__auto__.push((arguments[i__9182__auto___23513]));

var G__23514 = (i__9182__auto___23513 + (1));
i__9182__auto___23513 = G__23514;
continue;
} else {
}
break;
}

var argseq__9189__auto__ = ((((2) < args__9188__auto__.length))?(new cljs.core.IndexedSeq(args__9188__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_suspend_canceled_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9189__auto__);
});

chromex.ext.runtime.on_suspend_canceled_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_23501 = (function (){var config__14251__auto__ = config;
var handler_key__14252__auto__ = cljs.core.cst$kw$event_DASH_listener_DASH_factory;
var handler__14253__auto__ = (handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1 ? handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler_key__14252__auto__.call(null,config__14251__auto__));
if(cljs.core.fn_QMARK_(handler__14253__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__14252__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14251__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__14253__auto__)")].join('')));
}

var G__23504 = config__14251__auto__;
var G__23505 = cljs.core.cst$kw$chromex$ext$runtime_SLASH_on_DASH_suspend_DASH_canceled;
var G__23506 = channel;
return (handler__14253__auto__.cljs$core$IFn$_invoke$arity$3 ? handler__14253__auto__.cljs$core$IFn$_invoke$arity$3(G__23504,G__23505,G__23506) : handler__14253__auto__.call(null,G__23504,G__23505,G__23506));
})();
var handler_fn_23502 = event_fn_23501;
var logging_fn__22666__auto__ = ((function (event_fn_23501,handler_fn_23502){
return (function (){
var config__14280__auto___23515 = config;
if(cljs.core.truth_(cljs.core.cst$kw$verbose_DASH_logging.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23515))){
var logger__14281__auto___23516 = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23515);
var prefix__14282__auto___23517 = ["event:","chrome.runtime.onSuspendCanceled"];
if(cljs.core.fn_QMARK_(logger__14281__auto___23516)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23515)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__14281__auto__)")].join('')));
}

logger__14281__auto___23516.apply(null,prefix__14282__auto___23517.concat(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)));
} else {
}

return (handler_fn_23502.cljs$core$IFn$_invoke$arity$0 ? handler_fn_23502.cljs$core$IFn$_invoke$arity$0() : handler_fn_23502.call(null));
});})(event_fn_23501,handler_fn_23502))
;
var ns_obj_23503 = (function (){var target_obj_23507 = cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1(config);
var next_obj_23508 = (target_obj_23507["chrome"]);
var next_obj_23509 = (next_obj_23508["runtime"]);
return next_obj_23509;
})();
var config__14284__auto___23518 = config;
var api_check_fn__14285__auto___23519 = cljs.core.cst$kw$missing_DASH_api_DASH_check_DASH_fn.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23518);
if(cljs.core.fn_QMARK_(api_check_fn__14285__auto___23519)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23518)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__14285__auto__)")].join('')));
}

(api_check_fn__14285__auto___23519.cljs$core$IFn$_invoke$arity$3 ? api_check_fn__14285__auto___23519.cljs$core$IFn$_invoke$arity$3("chrome.runtime.onSuspendCanceled",ns_obj_23503,"onSuspendCanceled") : api_check_fn__14285__auto___23519.call(null,"chrome.runtime.onSuspendCanceled",ns_obj_23503,"onSuspendCanceled"));

var event_obj__22667__auto__ = (function (){var target_obj_23510 = ns_obj_23503;
var next_obj_23511 = (target_obj_23510["onSuspendCanceled"]);
return next_obj_23511;
})();
var result__22668__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription(event_obj__22667__auto__,logging_fn__22666__auto__,channel);
chromex.protocols.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2(result__22668__auto__,args);

return result__22668__auto__;
});

chromex.ext.runtime.on_suspend_canceled_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_suspend_canceled_STAR_.cljs$lang$applyTo = (function (seq23498){
var G__23499 = cljs.core.first(seq23498);
var seq23498__$1 = cljs.core.next(seq23498);
var G__23500 = cljs.core.first(seq23498__$1);
var seq23498__$2 = cljs.core.next(seq23498__$1);
return chromex.ext.runtime.on_suspend_canceled_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__23499,G__23500,seq23498__$2);
});

chromex.ext.runtime.on_update_available_STAR_ = (function chromex$ext$runtime$on_update_available_STAR_(var_args){
var args__9188__auto__ = [];
var len__9181__auto___23536 = arguments.length;
var i__9182__auto___23537 = (0);
while(true){
if((i__9182__auto___23537 < len__9181__auto___23536)){
args__9188__auto__.push((arguments[i__9182__auto___23537]));

var G__23538 = (i__9182__auto___23537 + (1));
i__9182__auto___23537 = G__23538;
continue;
} else {
}
break;
}

var argseq__9189__auto__ = ((((2) < args__9188__auto__.length))?(new cljs.core.IndexedSeq(args__9188__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_update_available_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9189__auto__);
});

chromex.ext.runtime.on_update_available_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_23523 = (function (){var config__14251__auto__ = config;
var handler_key__14252__auto__ = cljs.core.cst$kw$event_DASH_listener_DASH_factory;
var handler__14253__auto__ = (handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1 ? handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler_key__14252__auto__.call(null,config__14251__auto__));
if(cljs.core.fn_QMARK_(handler__14253__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__14252__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14251__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__14253__auto__)")].join('')));
}

var G__23528 = config__14251__auto__;
var G__23529 = cljs.core.cst$kw$chromex$ext$runtime_SLASH_on_DASH_update_DASH_available;
var G__23530 = channel;
return (handler__14253__auto__.cljs$core$IFn$_invoke$arity$3 ? handler__14253__auto__.cljs$core$IFn$_invoke$arity$3(G__23528,G__23529,G__23530) : handler__14253__auto__.call(null,G__23528,G__23529,G__23530));
})();
var handler_fn_23524 = ((function (event_fn_23523){
return (function (cb_details_23526){
return (event_fn_23523.cljs$core$IFn$_invoke$arity$1 ? event_fn_23523.cljs$core$IFn$_invoke$arity$1(cb_details_23526) : event_fn_23523.call(null,cb_details_23526));
});})(event_fn_23523))
;
var logging_fn__22666__auto__ = ((function (event_fn_23523,handler_fn_23524){
return (function (cb_param_details_23527){
var config__14280__auto___23539 = config;
if(cljs.core.truth_(cljs.core.cst$kw$verbose_DASH_logging.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23539))){
var logger__14281__auto___23540 = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23539);
var prefix__14282__auto___23541 = ["event:","chrome.runtime.onUpdateAvailable"];
if(cljs.core.fn_QMARK_(logger__14281__auto___23540)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23539)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__14281__auto__)")].join('')));
}

logger__14281__auto___23540.apply(null,prefix__14282__auto___23541.concat(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_details_23527], null))));
} else {
}

return handler_fn_23524(cb_param_details_23527);
});})(event_fn_23523,handler_fn_23524))
;
var ns_obj_23525 = (function (){var target_obj_23531 = cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1(config);
var next_obj_23532 = (target_obj_23531["chrome"]);
var next_obj_23533 = (next_obj_23532["runtime"]);
return next_obj_23533;
})();
var config__14284__auto___23542 = config;
var api_check_fn__14285__auto___23543 = cljs.core.cst$kw$missing_DASH_api_DASH_check_DASH_fn.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23542);
if(cljs.core.fn_QMARK_(api_check_fn__14285__auto___23543)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23542)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__14285__auto__)")].join('')));
}

(api_check_fn__14285__auto___23543.cljs$core$IFn$_invoke$arity$3 ? api_check_fn__14285__auto___23543.cljs$core$IFn$_invoke$arity$3("chrome.runtime.onUpdateAvailable",ns_obj_23525,"onUpdateAvailable") : api_check_fn__14285__auto___23543.call(null,"chrome.runtime.onUpdateAvailable",ns_obj_23525,"onUpdateAvailable"));

var event_obj__22667__auto__ = (function (){var target_obj_23534 = ns_obj_23525;
var next_obj_23535 = (target_obj_23534["onUpdateAvailable"]);
return next_obj_23535;
})();
var result__22668__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription(event_obj__22667__auto__,logging_fn__22666__auto__,channel);
chromex.protocols.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2(result__22668__auto__,args);

return result__22668__auto__;
});

chromex.ext.runtime.on_update_available_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_update_available_STAR_.cljs$lang$applyTo = (function (seq23520){
var G__23521 = cljs.core.first(seq23520);
var seq23520__$1 = cljs.core.next(seq23520);
var G__23522 = cljs.core.first(seq23520__$1);
var seq23520__$2 = cljs.core.next(seq23520__$1);
return chromex.ext.runtime.on_update_available_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__23521,G__23522,seq23520__$2);
});

chromex.ext.runtime.on_browser_update_available_STAR_ = (function chromex$ext$runtime$on_browser_update_available_STAR_(var_args){
var args__9188__auto__ = [];
var len__9181__auto___23558 = arguments.length;
var i__9182__auto___23559 = (0);
while(true){
if((i__9182__auto___23559 < len__9181__auto___23558)){
args__9188__auto__.push((arguments[i__9182__auto___23559]));

var G__23560 = (i__9182__auto___23559 + (1));
i__9182__auto___23559 = G__23560;
continue;
} else {
}
break;
}

var argseq__9189__auto__ = ((((2) < args__9188__auto__.length))?(new cljs.core.IndexedSeq(args__9188__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_browser_update_available_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9189__auto__);
});

chromex.ext.runtime.on_browser_update_available_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_23547 = (function (){var config__14251__auto__ = config;
var handler_key__14252__auto__ = cljs.core.cst$kw$event_DASH_listener_DASH_factory;
var handler__14253__auto__ = (handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1 ? handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler_key__14252__auto__.call(null,config__14251__auto__));
if(cljs.core.fn_QMARK_(handler__14253__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__14252__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14251__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__14253__auto__)")].join('')));
}

var G__23550 = config__14251__auto__;
var G__23551 = cljs.core.cst$kw$chromex$ext$runtime_SLASH_on_DASH_browser_DASH_update_DASH_available;
var G__23552 = channel;
return (handler__14253__auto__.cljs$core$IFn$_invoke$arity$3 ? handler__14253__auto__.cljs$core$IFn$_invoke$arity$3(G__23550,G__23551,G__23552) : handler__14253__auto__.call(null,G__23550,G__23551,G__23552));
})();
var handler_fn_23548 = event_fn_23547;
var logging_fn__22666__auto__ = ((function (event_fn_23547,handler_fn_23548){
return (function (){
var config__14280__auto___23561 = config;
if(cljs.core.truth_(cljs.core.cst$kw$verbose_DASH_logging.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23561))){
var logger__14281__auto___23562 = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23561);
var prefix__14282__auto___23563 = ["event:","chrome.runtime.onBrowserUpdateAvailable"];
if(cljs.core.fn_QMARK_(logger__14281__auto___23562)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23561)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__14281__auto__)")].join('')));
}

logger__14281__auto___23562.apply(null,prefix__14282__auto___23563.concat(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)));
} else {
}

return (handler_fn_23548.cljs$core$IFn$_invoke$arity$0 ? handler_fn_23548.cljs$core$IFn$_invoke$arity$0() : handler_fn_23548.call(null));
});})(event_fn_23547,handler_fn_23548))
;
var ns_obj_23549 = (function (){var target_obj_23553 = cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1(config);
var next_obj_23554 = (target_obj_23553["chrome"]);
var next_obj_23555 = (next_obj_23554["runtime"]);
return next_obj_23555;
})();
var config__14284__auto___23564 = config;
var api_check_fn__14285__auto___23565 = cljs.core.cst$kw$missing_DASH_api_DASH_check_DASH_fn.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23564);
if(cljs.core.fn_QMARK_(api_check_fn__14285__auto___23565)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23564)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__14285__auto__)")].join('')));
}

(api_check_fn__14285__auto___23565.cljs$core$IFn$_invoke$arity$3 ? api_check_fn__14285__auto___23565.cljs$core$IFn$_invoke$arity$3("chrome.runtime.onBrowserUpdateAvailable",ns_obj_23549,"onBrowserUpdateAvailable") : api_check_fn__14285__auto___23565.call(null,"chrome.runtime.onBrowserUpdateAvailable",ns_obj_23549,"onBrowserUpdateAvailable"));

var event_obj__22667__auto__ = (function (){var target_obj_23556 = ns_obj_23549;
var next_obj_23557 = (target_obj_23556["onBrowserUpdateAvailable"]);
return next_obj_23557;
})();
var result__22668__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription(event_obj__22667__auto__,logging_fn__22666__auto__,channel);
chromex.protocols.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2(result__22668__auto__,args);

return result__22668__auto__;
});

chromex.ext.runtime.on_browser_update_available_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_browser_update_available_STAR_.cljs$lang$applyTo = (function (seq23544){
var G__23545 = cljs.core.first(seq23544);
var seq23544__$1 = cljs.core.next(seq23544);
var G__23546 = cljs.core.first(seq23544__$1);
var seq23544__$2 = cljs.core.next(seq23544__$1);
return chromex.ext.runtime.on_browser_update_available_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__23545,G__23546,seq23544__$2);
});

chromex.ext.runtime.on_connect_STAR_ = (function chromex$ext$runtime$on_connect_STAR_(var_args){
var args__9188__auto__ = [];
var len__9181__auto___23583 = arguments.length;
var i__9182__auto___23584 = (0);
while(true){
if((i__9182__auto___23584 < len__9181__auto___23583)){
args__9188__auto__.push((arguments[i__9182__auto___23584]));

var G__23585 = (i__9182__auto___23584 + (1));
i__9182__auto___23584 = G__23585;
continue;
} else {
}
break;
}

var argseq__9189__auto__ = ((((2) < args__9188__auto__.length))?(new cljs.core.IndexedSeq(args__9188__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_connect_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9189__auto__);
});

chromex.ext.runtime.on_connect_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_23569 = (function (){var config__14251__auto__ = config;
var handler_key__14252__auto__ = cljs.core.cst$kw$event_DASH_listener_DASH_factory;
var handler__14253__auto__ = (handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1 ? handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler_key__14252__auto__.call(null,config__14251__auto__));
if(cljs.core.fn_QMARK_(handler__14253__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__14252__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14251__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__14253__auto__)")].join('')));
}

var G__23574 = config__14251__auto__;
var G__23575 = cljs.core.cst$kw$chromex$ext$runtime_SLASH_on_DASH_connect;
var G__23576 = channel;
return (handler__14253__auto__.cljs$core$IFn$_invoke$arity$3 ? handler__14253__auto__.cljs$core$IFn$_invoke$arity$3(G__23574,G__23575,G__23576) : handler__14253__auto__.call(null,G__23574,G__23575,G__23576));
})();
var handler_fn_23570 = ((function (event_fn_23569){
return (function (cb_port_23572){
var G__23577 = chromex.marshalling.from_native_chrome_port(config,cb_port_23572);
return (event_fn_23569.cljs$core$IFn$_invoke$arity$1 ? event_fn_23569.cljs$core$IFn$_invoke$arity$1(G__23577) : event_fn_23569.call(null,G__23577));
});})(event_fn_23569))
;
var logging_fn__22666__auto__ = ((function (event_fn_23569,handler_fn_23570){
return (function (cb_param_port_23573){
var config__14280__auto___23586 = config;
if(cljs.core.truth_(cljs.core.cst$kw$verbose_DASH_logging.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23586))){
var logger__14281__auto___23587 = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23586);
var prefix__14282__auto___23588 = ["event:","chrome.runtime.onConnect"];
if(cljs.core.fn_QMARK_(logger__14281__auto___23587)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23586)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__14281__auto__)")].join('')));
}

logger__14281__auto___23587.apply(null,prefix__14282__auto___23588.concat(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_port_23573], null))));
} else {
}

return handler_fn_23570(cb_param_port_23573);
});})(event_fn_23569,handler_fn_23570))
;
var ns_obj_23571 = (function (){var target_obj_23578 = cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1(config);
var next_obj_23579 = (target_obj_23578["chrome"]);
var next_obj_23580 = (next_obj_23579["runtime"]);
return next_obj_23580;
})();
var config__14284__auto___23589 = config;
var api_check_fn__14285__auto___23590 = cljs.core.cst$kw$missing_DASH_api_DASH_check_DASH_fn.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23589);
if(cljs.core.fn_QMARK_(api_check_fn__14285__auto___23590)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23589)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__14285__auto__)")].join('')));
}

(api_check_fn__14285__auto___23590.cljs$core$IFn$_invoke$arity$3 ? api_check_fn__14285__auto___23590.cljs$core$IFn$_invoke$arity$3("chrome.runtime.onConnect",ns_obj_23571,"onConnect") : api_check_fn__14285__auto___23590.call(null,"chrome.runtime.onConnect",ns_obj_23571,"onConnect"));

var event_obj__22667__auto__ = (function (){var target_obj_23581 = ns_obj_23571;
var next_obj_23582 = (target_obj_23581["onConnect"]);
return next_obj_23582;
})();
var result__22668__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription(event_obj__22667__auto__,logging_fn__22666__auto__,channel);
chromex.protocols.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2(result__22668__auto__,args);

return result__22668__auto__;
});

chromex.ext.runtime.on_connect_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_connect_STAR_.cljs$lang$applyTo = (function (seq23566){
var G__23567 = cljs.core.first(seq23566);
var seq23566__$1 = cljs.core.next(seq23566);
var G__23568 = cljs.core.first(seq23566__$1);
var seq23566__$2 = cljs.core.next(seq23566__$1);
return chromex.ext.runtime.on_connect_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__23567,G__23568,seq23566__$2);
});

chromex.ext.runtime.on_connect_external_STAR_ = (function chromex$ext$runtime$on_connect_external_STAR_(var_args){
var args__9188__auto__ = [];
var len__9181__auto___23608 = arguments.length;
var i__9182__auto___23609 = (0);
while(true){
if((i__9182__auto___23609 < len__9181__auto___23608)){
args__9188__auto__.push((arguments[i__9182__auto___23609]));

var G__23610 = (i__9182__auto___23609 + (1));
i__9182__auto___23609 = G__23610;
continue;
} else {
}
break;
}

var argseq__9189__auto__ = ((((2) < args__9188__auto__.length))?(new cljs.core.IndexedSeq(args__9188__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_connect_external_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9189__auto__);
});

chromex.ext.runtime.on_connect_external_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_23594 = (function (){var config__14251__auto__ = config;
var handler_key__14252__auto__ = cljs.core.cst$kw$event_DASH_listener_DASH_factory;
var handler__14253__auto__ = (handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1 ? handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler_key__14252__auto__.call(null,config__14251__auto__));
if(cljs.core.fn_QMARK_(handler__14253__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__14252__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14251__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__14253__auto__)")].join('')));
}

var G__23599 = config__14251__auto__;
var G__23600 = cljs.core.cst$kw$chromex$ext$runtime_SLASH_on_DASH_connect_DASH_external;
var G__23601 = channel;
return (handler__14253__auto__.cljs$core$IFn$_invoke$arity$3 ? handler__14253__auto__.cljs$core$IFn$_invoke$arity$3(G__23599,G__23600,G__23601) : handler__14253__auto__.call(null,G__23599,G__23600,G__23601));
})();
var handler_fn_23595 = ((function (event_fn_23594){
return (function (cb_port_23597){
var G__23602 = chromex.marshalling.from_native_chrome_port(config,cb_port_23597);
return (event_fn_23594.cljs$core$IFn$_invoke$arity$1 ? event_fn_23594.cljs$core$IFn$_invoke$arity$1(G__23602) : event_fn_23594.call(null,G__23602));
});})(event_fn_23594))
;
var logging_fn__22666__auto__ = ((function (event_fn_23594,handler_fn_23595){
return (function (cb_param_port_23598){
var config__14280__auto___23611 = config;
if(cljs.core.truth_(cljs.core.cst$kw$verbose_DASH_logging.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23611))){
var logger__14281__auto___23612 = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23611);
var prefix__14282__auto___23613 = ["event:","chrome.runtime.onConnectExternal"];
if(cljs.core.fn_QMARK_(logger__14281__auto___23612)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23611)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__14281__auto__)")].join('')));
}

logger__14281__auto___23612.apply(null,prefix__14282__auto___23613.concat(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_port_23598], null))));
} else {
}

return handler_fn_23595(cb_param_port_23598);
});})(event_fn_23594,handler_fn_23595))
;
var ns_obj_23596 = (function (){var target_obj_23603 = cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1(config);
var next_obj_23604 = (target_obj_23603["chrome"]);
var next_obj_23605 = (next_obj_23604["runtime"]);
return next_obj_23605;
})();
var config__14284__auto___23614 = config;
var api_check_fn__14285__auto___23615 = cljs.core.cst$kw$missing_DASH_api_DASH_check_DASH_fn.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23614);
if(cljs.core.fn_QMARK_(api_check_fn__14285__auto___23615)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23614)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__14285__auto__)")].join('')));
}

(api_check_fn__14285__auto___23615.cljs$core$IFn$_invoke$arity$3 ? api_check_fn__14285__auto___23615.cljs$core$IFn$_invoke$arity$3("chrome.runtime.onConnectExternal",ns_obj_23596,"onConnectExternal") : api_check_fn__14285__auto___23615.call(null,"chrome.runtime.onConnectExternal",ns_obj_23596,"onConnectExternal"));

var event_obj__22667__auto__ = (function (){var target_obj_23606 = ns_obj_23596;
var next_obj_23607 = (target_obj_23606["onConnectExternal"]);
return next_obj_23607;
})();
var result__22668__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription(event_obj__22667__auto__,logging_fn__22666__auto__,channel);
chromex.protocols.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2(result__22668__auto__,args);

return result__22668__auto__;
});

chromex.ext.runtime.on_connect_external_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_connect_external_STAR_.cljs$lang$applyTo = (function (seq23591){
var G__23592 = cljs.core.first(seq23591);
var seq23591__$1 = cljs.core.next(seq23591);
var G__23593 = cljs.core.first(seq23591__$1);
var seq23591__$2 = cljs.core.next(seq23591__$1);
return chromex.ext.runtime.on_connect_external_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__23592,G__23593,seq23591__$2);
});

chromex.ext.runtime.on_message_STAR_ = (function chromex$ext$runtime$on_message_STAR_(var_args){
var args__9188__auto__ = [];
var len__9181__auto___23636 = arguments.length;
var i__9182__auto___23637 = (0);
while(true){
if((i__9182__auto___23637 < len__9181__auto___23636)){
args__9188__auto__.push((arguments[i__9182__auto___23637]));

var G__23638 = (i__9182__auto___23637 + (1));
i__9182__auto___23637 = G__23638;
continue;
} else {
}
break;
}

var argseq__9189__auto__ = ((((2) < args__9188__auto__.length))?(new cljs.core.IndexedSeq(args__9188__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_message_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9189__auto__);
});

chromex.ext.runtime.on_message_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_23619 = (function (){var config__14251__auto__ = config;
var handler_key__14252__auto__ = cljs.core.cst$kw$event_DASH_listener_DASH_factory;
var handler__14253__auto__ = (handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1 ? handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler_key__14252__auto__.call(null,config__14251__auto__));
if(cljs.core.fn_QMARK_(handler__14253__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__14252__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14251__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__14253__auto__)")].join('')));
}

var G__23628 = config__14251__auto__;
var G__23629 = cljs.core.cst$kw$chromex$ext$runtime_SLASH_on_DASH_message;
var G__23630 = channel;
return (handler__14253__auto__.cljs$core$IFn$_invoke$arity$3 ? handler__14253__auto__.cljs$core$IFn$_invoke$arity$3(G__23628,G__23629,G__23630) : handler__14253__auto__.call(null,G__23628,G__23629,G__23630));
})();
var handler_fn_23620 = ((function (event_fn_23619){
return (function (cb_message_23622,cb_sender_23623,cb_send_response_23624){
return (event_fn_23619.cljs$core$IFn$_invoke$arity$3 ? event_fn_23619.cljs$core$IFn$_invoke$arity$3(cb_message_23622,cb_sender_23623,cb_send_response_23624) : event_fn_23619.call(null,cb_message_23622,cb_sender_23623,cb_send_response_23624));
});})(event_fn_23619))
;
var logging_fn__22666__auto__ = ((function (event_fn_23619,handler_fn_23620){
return (function (cb_param_message_23625,cb_param_sender_23626,cb_param_send_response_23627){
var config__14280__auto___23639 = config;
if(cljs.core.truth_(cljs.core.cst$kw$verbose_DASH_logging.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23639))){
var logger__14281__auto___23640 = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23639);
var prefix__14282__auto___23641 = ["event:","chrome.runtime.onMessage"];
if(cljs.core.fn_QMARK_(logger__14281__auto___23640)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23639)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__14281__auto__)")].join('')));
}

logger__14281__auto___23640.apply(null,prefix__14282__auto___23641.concat(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_message_23625,cb_param_sender_23626,cb_param_send_response_23627], null))));
} else {
}

return handler_fn_23620(cb_param_message_23625,cb_param_sender_23626,cb_param_send_response_23627);
});})(event_fn_23619,handler_fn_23620))
;
var ns_obj_23621 = (function (){var target_obj_23631 = cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1(config);
var next_obj_23632 = (target_obj_23631["chrome"]);
var next_obj_23633 = (next_obj_23632["runtime"]);
return next_obj_23633;
})();
var config__14284__auto___23642 = config;
var api_check_fn__14285__auto___23643 = cljs.core.cst$kw$missing_DASH_api_DASH_check_DASH_fn.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23642);
if(cljs.core.fn_QMARK_(api_check_fn__14285__auto___23643)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23642)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__14285__auto__)")].join('')));
}

(api_check_fn__14285__auto___23643.cljs$core$IFn$_invoke$arity$3 ? api_check_fn__14285__auto___23643.cljs$core$IFn$_invoke$arity$3("chrome.runtime.onMessage",ns_obj_23621,"onMessage") : api_check_fn__14285__auto___23643.call(null,"chrome.runtime.onMessage",ns_obj_23621,"onMessage"));

var event_obj__22667__auto__ = (function (){var target_obj_23634 = ns_obj_23621;
var next_obj_23635 = (target_obj_23634["onMessage"]);
return next_obj_23635;
})();
var result__22668__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription(event_obj__22667__auto__,logging_fn__22666__auto__,channel);
chromex.protocols.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2(result__22668__auto__,args);

return result__22668__auto__;
});

chromex.ext.runtime.on_message_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_message_STAR_.cljs$lang$applyTo = (function (seq23616){
var G__23617 = cljs.core.first(seq23616);
var seq23616__$1 = cljs.core.next(seq23616);
var G__23618 = cljs.core.first(seq23616__$1);
var seq23616__$2 = cljs.core.next(seq23616__$1);
return chromex.ext.runtime.on_message_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__23617,G__23618,seq23616__$2);
});

chromex.ext.runtime.on_message_external_STAR_ = (function chromex$ext$runtime$on_message_external_STAR_(var_args){
var args__9188__auto__ = [];
var len__9181__auto___23664 = arguments.length;
var i__9182__auto___23665 = (0);
while(true){
if((i__9182__auto___23665 < len__9181__auto___23664)){
args__9188__auto__.push((arguments[i__9182__auto___23665]));

var G__23666 = (i__9182__auto___23665 + (1));
i__9182__auto___23665 = G__23666;
continue;
} else {
}
break;
}

var argseq__9189__auto__ = ((((2) < args__9188__auto__.length))?(new cljs.core.IndexedSeq(args__9188__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_message_external_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9189__auto__);
});

chromex.ext.runtime.on_message_external_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_23647 = (function (){var config__14251__auto__ = config;
var handler_key__14252__auto__ = cljs.core.cst$kw$event_DASH_listener_DASH_factory;
var handler__14253__auto__ = (handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1 ? handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler_key__14252__auto__.call(null,config__14251__auto__));
if(cljs.core.fn_QMARK_(handler__14253__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__14252__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14251__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__14253__auto__)")].join('')));
}

var G__23656 = config__14251__auto__;
var G__23657 = cljs.core.cst$kw$chromex$ext$runtime_SLASH_on_DASH_message_DASH_external;
var G__23658 = channel;
return (handler__14253__auto__.cljs$core$IFn$_invoke$arity$3 ? handler__14253__auto__.cljs$core$IFn$_invoke$arity$3(G__23656,G__23657,G__23658) : handler__14253__auto__.call(null,G__23656,G__23657,G__23658));
})();
var handler_fn_23648 = ((function (event_fn_23647){
return (function (cb_message_23650,cb_sender_23651,cb_send_response_23652){
return (event_fn_23647.cljs$core$IFn$_invoke$arity$3 ? event_fn_23647.cljs$core$IFn$_invoke$arity$3(cb_message_23650,cb_sender_23651,cb_send_response_23652) : event_fn_23647.call(null,cb_message_23650,cb_sender_23651,cb_send_response_23652));
});})(event_fn_23647))
;
var logging_fn__22666__auto__ = ((function (event_fn_23647,handler_fn_23648){
return (function (cb_param_message_23653,cb_param_sender_23654,cb_param_send_response_23655){
var config__14280__auto___23667 = config;
if(cljs.core.truth_(cljs.core.cst$kw$verbose_DASH_logging.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23667))){
var logger__14281__auto___23668 = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23667);
var prefix__14282__auto___23669 = ["event:","chrome.runtime.onMessageExternal"];
if(cljs.core.fn_QMARK_(logger__14281__auto___23668)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23667)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__14281__auto__)")].join('')));
}

logger__14281__auto___23668.apply(null,prefix__14282__auto___23669.concat(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_message_23653,cb_param_sender_23654,cb_param_send_response_23655], null))));
} else {
}

return handler_fn_23648(cb_param_message_23653,cb_param_sender_23654,cb_param_send_response_23655);
});})(event_fn_23647,handler_fn_23648))
;
var ns_obj_23649 = (function (){var target_obj_23659 = cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1(config);
var next_obj_23660 = (target_obj_23659["chrome"]);
var next_obj_23661 = (next_obj_23660["runtime"]);
return next_obj_23661;
})();
var config__14284__auto___23670 = config;
var api_check_fn__14285__auto___23671 = cljs.core.cst$kw$missing_DASH_api_DASH_check_DASH_fn.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23670);
if(cljs.core.fn_QMARK_(api_check_fn__14285__auto___23671)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23670)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__14285__auto__)")].join('')));
}

(api_check_fn__14285__auto___23671.cljs$core$IFn$_invoke$arity$3 ? api_check_fn__14285__auto___23671.cljs$core$IFn$_invoke$arity$3("chrome.runtime.onMessageExternal",ns_obj_23649,"onMessageExternal") : api_check_fn__14285__auto___23671.call(null,"chrome.runtime.onMessageExternal",ns_obj_23649,"onMessageExternal"));

var event_obj__22667__auto__ = (function (){var target_obj_23662 = ns_obj_23649;
var next_obj_23663 = (target_obj_23662["onMessageExternal"]);
return next_obj_23663;
})();
var result__22668__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription(event_obj__22667__auto__,logging_fn__22666__auto__,channel);
chromex.protocols.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2(result__22668__auto__,args);

return result__22668__auto__;
});

chromex.ext.runtime.on_message_external_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_message_external_STAR_.cljs$lang$applyTo = (function (seq23644){
var G__23645 = cljs.core.first(seq23644);
var seq23644__$1 = cljs.core.next(seq23644);
var G__23646 = cljs.core.first(seq23644__$1);
var seq23644__$2 = cljs.core.next(seq23644__$1);
return chromex.ext.runtime.on_message_external_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__23645,G__23646,seq23644__$2);
});

chromex.ext.runtime.on_restart_required_STAR_ = (function chromex$ext$runtime$on_restart_required_STAR_(var_args){
var args__9188__auto__ = [];
var len__9181__auto___23688 = arguments.length;
var i__9182__auto___23689 = (0);
while(true){
if((i__9182__auto___23689 < len__9181__auto___23688)){
args__9188__auto__.push((arguments[i__9182__auto___23689]));

var G__23690 = (i__9182__auto___23689 + (1));
i__9182__auto___23689 = G__23690;
continue;
} else {
}
break;
}

var argseq__9189__auto__ = ((((2) < args__9188__auto__.length))?(new cljs.core.IndexedSeq(args__9188__auto__.slice((2)),(0),null)):null);
return chromex.ext.runtime.on_restart_required_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9189__auto__);
});

chromex.ext.runtime.on_restart_required_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (config,channel,args){
var event_fn_23675 = (function (){var config__14251__auto__ = config;
var handler_key__14252__auto__ = cljs.core.cst$kw$event_DASH_listener_DASH_factory;
var handler__14253__auto__ = (handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1 ? handler_key__14252__auto__.cljs$core$IFn$_invoke$arity$1(config__14251__auto__) : handler_key__14252__auto__.call(null,config__14251__auto__));
if(cljs.core.fn_QMARK_(handler__14253__auto__)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(handler_key__14252__auto__),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14251__auto__)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? handler__14253__auto__)")].join('')));
}

var G__23680 = config__14251__auto__;
var G__23681 = cljs.core.cst$kw$chromex$ext$runtime_SLASH_on_DASH_restart_DASH_required;
var G__23682 = channel;
return (handler__14253__auto__.cljs$core$IFn$_invoke$arity$3 ? handler__14253__auto__.cljs$core$IFn$_invoke$arity$3(G__23680,G__23681,G__23682) : handler__14253__auto__.call(null,G__23680,G__23681,G__23682));
})();
var handler_fn_23676 = ((function (event_fn_23675){
return (function (cb_reason_23678){
return (event_fn_23675.cljs$core$IFn$_invoke$arity$1 ? event_fn_23675.cljs$core$IFn$_invoke$arity$1(cb_reason_23678) : event_fn_23675.call(null,cb_reason_23678));
});})(event_fn_23675))
;
var logging_fn__22666__auto__ = ((function (event_fn_23675,handler_fn_23676){
return (function (cb_param_reason_23679){
var config__14280__auto___23691 = config;
if(cljs.core.truth_(cljs.core.cst$kw$verbose_DASH_logging.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23691))){
var logger__14281__auto___23692 = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23691);
var prefix__14282__auto___23693 = ["event:","chrome.runtime.onRestartRequired"];
if(cljs.core.fn_QMARK_(logger__14281__auto___23692)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :logger in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14280__auto___23691)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? logger__14281__auto__)")].join('')));
}

logger__14281__auto___23692.apply(null,prefix__14282__auto___23693.concat(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_param_reason_23679], null))));
} else {
}

return handler_fn_23676(cb_param_reason_23679);
});})(event_fn_23675,handler_fn_23676))
;
var ns_obj_23677 = (function (){var target_obj_23683 = cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1(config);
var next_obj_23684 = (target_obj_23683["chrome"]);
var next_obj_23685 = (next_obj_23684["runtime"]);
return next_obj_23685;
})();
var config__14284__auto___23694 = config;
var api_check_fn__14285__auto___23695 = cljs.core.cst$kw$missing_DASH_api_DASH_check_DASH_fn.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23694);
if(cljs.core.fn_QMARK_(api_check_fn__14285__auto___23695)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid :api-check-fn in chromex config\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("config:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(config__14284__auto___23694)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/fn? api-check-fn__14285__auto__)")].join('')));
}

(api_check_fn__14285__auto___23695.cljs$core$IFn$_invoke$arity$3 ? api_check_fn__14285__auto___23695.cljs$core$IFn$_invoke$arity$3("chrome.runtime.onRestartRequired",ns_obj_23677,"onRestartRequired") : api_check_fn__14285__auto___23695.call(null,"chrome.runtime.onRestartRequired",ns_obj_23677,"onRestartRequired"));

var event_obj__22667__auto__ = (function (){var target_obj_23686 = ns_obj_23677;
var next_obj_23687 = (target_obj_23686["onRestartRequired"]);
return next_obj_23687;
})();
var result__22668__auto__ = chromex.chrome_event_subscription.make_chrome_event_subscription(event_obj__22667__auto__,logging_fn__22666__auto__,channel);
chromex.protocols.subscribe_BANG_.cljs$core$IFn$_invoke$arity$2(result__22668__auto__,args);

return result__22668__auto__;
});

chromex.ext.runtime.on_restart_required_STAR_.cljs$lang$maxFixedArity = (2);

chromex.ext.runtime.on_restart_required_STAR_.cljs$lang$applyTo = (function (seq23672){
var G__23673 = cljs.core.first(seq23672);
var seq23672__$1 = cljs.core.next(seq23672);
var G__23674 = cljs.core.first(seq23672__$1);
var seq23672__$2 = cljs.core.next(seq23672__$1);
return chromex.ext.runtime.on_restart_required_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__23673,G__23674,seq23672__$2);
});

