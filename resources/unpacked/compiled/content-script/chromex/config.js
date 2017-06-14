// Compiled by ClojureScript 1.9.562 {:static-fns true, :optimize-constants true}
goog.provide('chromex.config');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('chromex.defaults');
chromex.config._STAR_active_config_STAR_ = chromex.defaults.default_config;
chromex.config.set_active_config_BANG_ = (function chromex$config$set_active_config_BANG_(config){
return chromex.config._STAR_active_config_STAR_ = config;
});
chromex.config.get_active_config = (function chromex$config$get_active_config(){
return chromex.config._STAR_active_config_STAR_;
});
