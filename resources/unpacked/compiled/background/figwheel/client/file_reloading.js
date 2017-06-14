// Compiled by ClojureScript 1.9.562 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__28459__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__28459__auto__){
return or__28459__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__28459__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["svgpan.SvgPan",null,"far.out",null,"cljs.nodejs",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__28459__auto__)){
return or__28459__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__55813_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__55813_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__55818 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__55819 = null;
var count__55820 = (0);
var i__55821 = (0);
while(true){
if((i__55821 < count__55820)){
var n = cljs.core._nth.call(null,chunk__55819,i__55821);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__55822 = seq__55818;
var G__55823 = chunk__55819;
var G__55824 = count__55820;
var G__55825 = (i__55821 + (1));
seq__55818 = G__55822;
chunk__55819 = G__55823;
count__55820 = G__55824;
i__55821 = G__55825;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__55818);
if(temp__5278__auto__){
var seq__55818__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55818__$1)){
var c__29370__auto__ = cljs.core.chunk_first.call(null,seq__55818__$1);
var G__55826 = cljs.core.chunk_rest.call(null,seq__55818__$1);
var G__55827 = c__29370__auto__;
var G__55828 = cljs.core.count.call(null,c__29370__auto__);
var G__55829 = (0);
seq__55818 = G__55826;
chunk__55819 = G__55827;
count__55820 = G__55828;
i__55821 = G__55829;
continue;
} else {
var n = cljs.core.first.call(null,seq__55818__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__55830 = cljs.core.next.call(null,seq__55818__$1);
var G__55831 = null;
var G__55832 = (0);
var G__55833 = (0);
seq__55818 = G__55830;
chunk__55819 = G__55831;
count__55820 = G__55832;
i__55821 = G__55833;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__55884_55895 = cljs.core.seq.call(null,deps);
var chunk__55885_55896 = null;
var count__55886_55897 = (0);
var i__55887_55898 = (0);
while(true){
if((i__55887_55898 < count__55886_55897)){
var dep_55899 = cljs.core._nth.call(null,chunk__55885_55896,i__55887_55898);
topo_sort_helper_STAR_.call(null,dep_55899,(depth + (1)),state);

var G__55900 = seq__55884_55895;
var G__55901 = chunk__55885_55896;
var G__55902 = count__55886_55897;
var G__55903 = (i__55887_55898 + (1));
seq__55884_55895 = G__55900;
chunk__55885_55896 = G__55901;
count__55886_55897 = G__55902;
i__55887_55898 = G__55903;
continue;
} else {
var temp__5278__auto___55904 = cljs.core.seq.call(null,seq__55884_55895);
if(temp__5278__auto___55904){
var seq__55884_55905__$1 = temp__5278__auto___55904;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55884_55905__$1)){
var c__29370__auto___55906 = cljs.core.chunk_first.call(null,seq__55884_55905__$1);
var G__55907 = cljs.core.chunk_rest.call(null,seq__55884_55905__$1);
var G__55908 = c__29370__auto___55906;
var G__55909 = cljs.core.count.call(null,c__29370__auto___55906);
var G__55910 = (0);
seq__55884_55895 = G__55907;
chunk__55885_55896 = G__55908;
count__55886_55897 = G__55909;
i__55887_55898 = G__55910;
continue;
} else {
var dep_55911 = cljs.core.first.call(null,seq__55884_55905__$1);
topo_sort_helper_STAR_.call(null,dep_55911,(depth + (1)),state);

var G__55912 = cljs.core.next.call(null,seq__55884_55905__$1);
var G__55913 = null;
var G__55914 = (0);
var G__55915 = (0);
seq__55884_55895 = G__55912;
chunk__55885_55896 = G__55913;
count__55886_55897 = G__55914;
i__55887_55898 = G__55915;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__55888){
var vec__55892 = p__55888;
var seq__55893 = cljs.core.seq.call(null,vec__55892);
var first__55894 = cljs.core.first.call(null,seq__55893);
var seq__55893__$1 = cljs.core.next.call(null,seq__55893);
var x = first__55894;
var xs = seq__55893__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__55892,seq__55893,first__55894,seq__55893__$1,x,xs,get_deps__$1){
return (function (p1__55834_SHARP_){
return clojure.set.difference.call(null,p1__55834_SHARP_,x);
});})(vec__55892,seq__55893,first__55894,seq__55893__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__55928 = cljs.core.seq.call(null,provides);
var chunk__55929 = null;
var count__55930 = (0);
var i__55931 = (0);
while(true){
if((i__55931 < count__55930)){
var prov = cljs.core._nth.call(null,chunk__55929,i__55931);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__55932_55940 = cljs.core.seq.call(null,requires);
var chunk__55933_55941 = null;
var count__55934_55942 = (0);
var i__55935_55943 = (0);
while(true){
if((i__55935_55943 < count__55934_55942)){
var req_55944 = cljs.core._nth.call(null,chunk__55933_55941,i__55935_55943);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_55944,prov);

var G__55945 = seq__55932_55940;
var G__55946 = chunk__55933_55941;
var G__55947 = count__55934_55942;
var G__55948 = (i__55935_55943 + (1));
seq__55932_55940 = G__55945;
chunk__55933_55941 = G__55946;
count__55934_55942 = G__55947;
i__55935_55943 = G__55948;
continue;
} else {
var temp__5278__auto___55949 = cljs.core.seq.call(null,seq__55932_55940);
if(temp__5278__auto___55949){
var seq__55932_55950__$1 = temp__5278__auto___55949;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55932_55950__$1)){
var c__29370__auto___55951 = cljs.core.chunk_first.call(null,seq__55932_55950__$1);
var G__55952 = cljs.core.chunk_rest.call(null,seq__55932_55950__$1);
var G__55953 = c__29370__auto___55951;
var G__55954 = cljs.core.count.call(null,c__29370__auto___55951);
var G__55955 = (0);
seq__55932_55940 = G__55952;
chunk__55933_55941 = G__55953;
count__55934_55942 = G__55954;
i__55935_55943 = G__55955;
continue;
} else {
var req_55956 = cljs.core.first.call(null,seq__55932_55950__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_55956,prov);

var G__55957 = cljs.core.next.call(null,seq__55932_55950__$1);
var G__55958 = null;
var G__55959 = (0);
var G__55960 = (0);
seq__55932_55940 = G__55957;
chunk__55933_55941 = G__55958;
count__55934_55942 = G__55959;
i__55935_55943 = G__55960;
continue;
}
} else {
}
}
break;
}

var G__55961 = seq__55928;
var G__55962 = chunk__55929;
var G__55963 = count__55930;
var G__55964 = (i__55931 + (1));
seq__55928 = G__55961;
chunk__55929 = G__55962;
count__55930 = G__55963;
i__55931 = G__55964;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__55928);
if(temp__5278__auto__){
var seq__55928__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55928__$1)){
var c__29370__auto__ = cljs.core.chunk_first.call(null,seq__55928__$1);
var G__55965 = cljs.core.chunk_rest.call(null,seq__55928__$1);
var G__55966 = c__29370__auto__;
var G__55967 = cljs.core.count.call(null,c__29370__auto__);
var G__55968 = (0);
seq__55928 = G__55965;
chunk__55929 = G__55966;
count__55930 = G__55967;
i__55931 = G__55968;
continue;
} else {
var prov = cljs.core.first.call(null,seq__55928__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__55936_55969 = cljs.core.seq.call(null,requires);
var chunk__55937_55970 = null;
var count__55938_55971 = (0);
var i__55939_55972 = (0);
while(true){
if((i__55939_55972 < count__55938_55971)){
var req_55973 = cljs.core._nth.call(null,chunk__55937_55970,i__55939_55972);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_55973,prov);

var G__55974 = seq__55936_55969;
var G__55975 = chunk__55937_55970;
var G__55976 = count__55938_55971;
var G__55977 = (i__55939_55972 + (1));
seq__55936_55969 = G__55974;
chunk__55937_55970 = G__55975;
count__55938_55971 = G__55976;
i__55939_55972 = G__55977;
continue;
} else {
var temp__5278__auto___55978__$1 = cljs.core.seq.call(null,seq__55936_55969);
if(temp__5278__auto___55978__$1){
var seq__55936_55979__$1 = temp__5278__auto___55978__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55936_55979__$1)){
var c__29370__auto___55980 = cljs.core.chunk_first.call(null,seq__55936_55979__$1);
var G__55981 = cljs.core.chunk_rest.call(null,seq__55936_55979__$1);
var G__55982 = c__29370__auto___55980;
var G__55983 = cljs.core.count.call(null,c__29370__auto___55980);
var G__55984 = (0);
seq__55936_55969 = G__55981;
chunk__55937_55970 = G__55982;
count__55938_55971 = G__55983;
i__55939_55972 = G__55984;
continue;
} else {
var req_55985 = cljs.core.first.call(null,seq__55936_55979__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_55985,prov);

var G__55986 = cljs.core.next.call(null,seq__55936_55979__$1);
var G__55987 = null;
var G__55988 = (0);
var G__55989 = (0);
seq__55936_55969 = G__55986;
chunk__55937_55970 = G__55987;
count__55938_55971 = G__55988;
i__55939_55972 = G__55989;
continue;
}
} else {
}
}
break;
}

var G__55990 = cljs.core.next.call(null,seq__55928__$1);
var G__55991 = null;
var G__55992 = (0);
var G__55993 = (0);
seq__55928 = G__55990;
chunk__55929 = G__55991;
count__55930 = G__55992;
i__55931 = G__55993;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__55998_56002 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__55999_56003 = null;
var count__56000_56004 = (0);
var i__56001_56005 = (0);
while(true){
if((i__56001_56005 < count__56000_56004)){
var ns_56006 = cljs.core._nth.call(null,chunk__55999_56003,i__56001_56005);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_56006);

var G__56007 = seq__55998_56002;
var G__56008 = chunk__55999_56003;
var G__56009 = count__56000_56004;
var G__56010 = (i__56001_56005 + (1));
seq__55998_56002 = G__56007;
chunk__55999_56003 = G__56008;
count__56000_56004 = G__56009;
i__56001_56005 = G__56010;
continue;
} else {
var temp__5278__auto___56011 = cljs.core.seq.call(null,seq__55998_56002);
if(temp__5278__auto___56011){
var seq__55998_56012__$1 = temp__5278__auto___56011;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55998_56012__$1)){
var c__29370__auto___56013 = cljs.core.chunk_first.call(null,seq__55998_56012__$1);
var G__56014 = cljs.core.chunk_rest.call(null,seq__55998_56012__$1);
var G__56015 = c__29370__auto___56013;
var G__56016 = cljs.core.count.call(null,c__29370__auto___56013);
var G__56017 = (0);
seq__55998_56002 = G__56014;
chunk__55999_56003 = G__56015;
count__56000_56004 = G__56016;
i__56001_56005 = G__56017;
continue;
} else {
var ns_56018 = cljs.core.first.call(null,seq__55998_56012__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_56018);

var G__56019 = cljs.core.next.call(null,seq__55998_56012__$1);
var G__56020 = null;
var G__56021 = (0);
var G__56022 = (0);
seq__55998_56002 = G__56019;
chunk__55999_56003 = G__56020;
count__56000_56004 = G__56021;
i__56001_56005 = G__56022;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__28459__auto__ = goog.require__;
if(cljs.core.truth_(or__28459__auto__)){
return or__28459__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__56023__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__56023 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56024__i = 0, G__56024__a = new Array(arguments.length -  0);
while (G__56024__i < G__56024__a.length) {G__56024__a[G__56024__i] = arguments[G__56024__i + 0]; ++G__56024__i;}
  args = new cljs.core.IndexedSeq(G__56024__a,0,null);
} 
return G__56023__delegate.call(this,args);};
G__56023.cljs$lang$maxFixedArity = 0;
G__56023.cljs$lang$applyTo = (function (arglist__56025){
var args = cljs.core.seq(arglist__56025);
return G__56023__delegate(args);
});
G__56023.cljs$core$IFn$_invoke$arity$variadic = G__56023__delegate;
return G__56023;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__56026 = cljs.core._EQ_;
var expr__56027 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__56026.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__56027))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__56026,expr__56027){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__56026,expr__56027))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__56026,expr__56027){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e56029){if((e56029 instanceof Error)){
var e = e56029;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e56029;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__56026,expr__56027))
} else {
if(cljs.core.truth_(pred__56026.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__56027))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__56026.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__56027))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__56026.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__56027))){
return ((function (pred__56026,expr__56027){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e56030){if((e56030 instanceof Error)){
var e = e56030;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e56030;

}
}})());
});
;})(pred__56026,expr__56027))
} else {
return ((function (pred__56026,expr__56027){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__56026,expr__56027))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__56031,callback){
var map__56034 = p__56031;
var map__56034__$1 = ((((!((map__56034 == null)))?((((map__56034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56034.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56034):map__56034);
var file_msg = map__56034__$1;
var request_url = cljs.core.get.call(null,map__56034__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__56034,map__56034__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__56034,map__56034__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__32057__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto__){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto__){
return (function (state_56058){
var state_val_56059 = (state_56058[(1)]);
if((state_val_56059 === (7))){
var inst_56054 = (state_56058[(2)]);
var state_56058__$1 = state_56058;
var statearr_56060_56080 = state_56058__$1;
(statearr_56060_56080[(2)] = inst_56054);

(statearr_56060_56080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56059 === (1))){
var state_56058__$1 = state_56058;
var statearr_56061_56081 = state_56058__$1;
(statearr_56061_56081[(2)] = null);

(statearr_56061_56081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56059 === (4))){
var inst_56038 = (state_56058[(7)]);
var inst_56038__$1 = (state_56058[(2)]);
var state_56058__$1 = (function (){var statearr_56062 = state_56058;
(statearr_56062[(7)] = inst_56038__$1);

return statearr_56062;
})();
if(cljs.core.truth_(inst_56038__$1)){
var statearr_56063_56082 = state_56058__$1;
(statearr_56063_56082[(1)] = (5));

} else {
var statearr_56064_56083 = state_56058__$1;
(statearr_56064_56083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56059 === (6))){
var state_56058__$1 = state_56058;
var statearr_56065_56084 = state_56058__$1;
(statearr_56065_56084[(2)] = null);

(statearr_56065_56084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56059 === (3))){
var inst_56056 = (state_56058[(2)]);
var state_56058__$1 = state_56058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56058__$1,inst_56056);
} else {
if((state_val_56059 === (2))){
var state_56058__$1 = state_56058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56058__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_56059 === (11))){
var inst_56050 = (state_56058[(2)]);
var state_56058__$1 = (function (){var statearr_56066 = state_56058;
(statearr_56066[(8)] = inst_56050);

return statearr_56066;
})();
var statearr_56067_56085 = state_56058__$1;
(statearr_56067_56085[(2)] = null);

(statearr_56067_56085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56059 === (9))){
var inst_56042 = (state_56058[(9)]);
var inst_56044 = (state_56058[(10)]);
var inst_56046 = inst_56044.call(null,inst_56042);
var state_56058__$1 = state_56058;
var statearr_56068_56086 = state_56058__$1;
(statearr_56068_56086[(2)] = inst_56046);

(statearr_56068_56086[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56059 === (5))){
var inst_56038 = (state_56058[(7)]);
var inst_56040 = figwheel.client.file_reloading.blocking_load.call(null,inst_56038);
var state_56058__$1 = state_56058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56058__$1,(8),inst_56040);
} else {
if((state_val_56059 === (10))){
var inst_56042 = (state_56058[(9)]);
var inst_56048 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_56042);
var state_56058__$1 = state_56058;
var statearr_56069_56087 = state_56058__$1;
(statearr_56069_56087[(2)] = inst_56048);

(statearr_56069_56087[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56059 === (8))){
var inst_56038 = (state_56058[(7)]);
var inst_56044 = (state_56058[(10)]);
var inst_56042 = (state_56058[(2)]);
var inst_56043 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_56044__$1 = cljs.core.get.call(null,inst_56043,inst_56038);
var state_56058__$1 = (function (){var statearr_56070 = state_56058;
(statearr_56070[(9)] = inst_56042);

(statearr_56070[(10)] = inst_56044__$1);

return statearr_56070;
})();
if(cljs.core.truth_(inst_56044__$1)){
var statearr_56071_56088 = state_56058__$1;
(statearr_56071_56088[(1)] = (9));

} else {
var statearr_56072_56089 = state_56058__$1;
(statearr_56072_56089[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__32057__auto__))
;
return ((function (switch__31943__auto__,c__32057__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__31944__auto__ = null;
var figwheel$client$file_reloading$state_machine__31944__auto____0 = (function (){
var statearr_56076 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56076[(0)] = figwheel$client$file_reloading$state_machine__31944__auto__);

(statearr_56076[(1)] = (1));

return statearr_56076;
});
var figwheel$client$file_reloading$state_machine__31944__auto____1 = (function (state_56058){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_56058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e56077){if((e56077 instanceof Object)){
var ex__31947__auto__ = e56077;
var statearr_56078_56090 = state_56058;
(statearr_56078_56090[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56091 = state_56058;
state_56058 = G__56091;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__31944__auto__ = function(state_56058){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__31944__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__31944__auto____1.call(this,state_56058);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__31944__auto____0;
figwheel$client$file_reloading$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__31944__auto____1;
return figwheel$client$file_reloading$state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto__))
})();
var state__32059__auto__ = (function (){var statearr_56079 = f__32058__auto__.call(null);
(statearr_56079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto__);

return statearr_56079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto__))
);

return c__32057__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__56092,callback){
var map__56095 = p__56092;
var map__56095__$1 = ((((!((map__56095 == null)))?((((map__56095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56095.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56095):map__56095);
var file_msg = map__56095__$1;
var namespace = cljs.core.get.call(null,map__56095__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__56095,map__56095__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__56095,map__56095__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__56097){
var map__56100 = p__56097;
var map__56100__$1 = ((((!((map__56100 == null)))?((((map__56100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56100.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56100):map__56100);
var file_msg = map__56100__$1;
var namespace = cljs.core.get.call(null,map__56100__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__56102){
var map__56105 = p__56102;
var map__56105__$1 = ((((!((map__56105 == null)))?((((map__56105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56105.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56105):map__56105);
var file_msg = map__56105__$1;
var namespace = cljs.core.get.call(null,map__56105__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__28447__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__28447__auto__){
var or__28459__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28459__auto__)){
return or__28459__auto__;
} else {
var or__28459__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28459__auto____$1)){
return or__28459__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__28447__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__56107,callback){
var map__56110 = p__56107;
var map__56110__$1 = ((((!((map__56110 == null)))?((((map__56110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56110.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56110):map__56110);
var file_msg = map__56110__$1;
var request_url = cljs.core.get.call(null,map__56110__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__56110__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__32057__auto___56214 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto___56214,out){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto___56214,out){
return (function (state_56196){
var state_val_56197 = (state_56196[(1)]);
if((state_val_56197 === (1))){
var inst_56170 = cljs.core.seq.call(null,files);
var inst_56171 = cljs.core.first.call(null,inst_56170);
var inst_56172 = cljs.core.next.call(null,inst_56170);
var inst_56173 = files;
var state_56196__$1 = (function (){var statearr_56198 = state_56196;
(statearr_56198[(7)] = inst_56172);

(statearr_56198[(8)] = inst_56171);

(statearr_56198[(9)] = inst_56173);

return statearr_56198;
})();
var statearr_56199_56215 = state_56196__$1;
(statearr_56199_56215[(2)] = null);

(statearr_56199_56215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56197 === (2))){
var inst_56179 = (state_56196[(10)]);
var inst_56173 = (state_56196[(9)]);
var inst_56178 = cljs.core.seq.call(null,inst_56173);
var inst_56179__$1 = cljs.core.first.call(null,inst_56178);
var inst_56180 = cljs.core.next.call(null,inst_56178);
var inst_56181 = (inst_56179__$1 == null);
var inst_56182 = cljs.core.not.call(null,inst_56181);
var state_56196__$1 = (function (){var statearr_56200 = state_56196;
(statearr_56200[(10)] = inst_56179__$1);

(statearr_56200[(11)] = inst_56180);

return statearr_56200;
})();
if(inst_56182){
var statearr_56201_56216 = state_56196__$1;
(statearr_56201_56216[(1)] = (4));

} else {
var statearr_56202_56217 = state_56196__$1;
(statearr_56202_56217[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56197 === (3))){
var inst_56194 = (state_56196[(2)]);
var state_56196__$1 = state_56196;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56196__$1,inst_56194);
} else {
if((state_val_56197 === (4))){
var inst_56179 = (state_56196[(10)]);
var inst_56184 = figwheel.client.file_reloading.reload_js_file.call(null,inst_56179);
var state_56196__$1 = state_56196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56196__$1,(7),inst_56184);
} else {
if((state_val_56197 === (5))){
var inst_56190 = cljs.core.async.close_BANG_.call(null,out);
var state_56196__$1 = state_56196;
var statearr_56203_56218 = state_56196__$1;
(statearr_56203_56218[(2)] = inst_56190);

(statearr_56203_56218[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56197 === (6))){
var inst_56192 = (state_56196[(2)]);
var state_56196__$1 = state_56196;
var statearr_56204_56219 = state_56196__$1;
(statearr_56204_56219[(2)] = inst_56192);

(statearr_56204_56219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56197 === (7))){
var inst_56180 = (state_56196[(11)]);
var inst_56186 = (state_56196[(2)]);
var inst_56187 = cljs.core.async.put_BANG_.call(null,out,inst_56186);
var inst_56173 = inst_56180;
var state_56196__$1 = (function (){var statearr_56205 = state_56196;
(statearr_56205[(9)] = inst_56173);

(statearr_56205[(12)] = inst_56187);

return statearr_56205;
})();
var statearr_56206_56220 = state_56196__$1;
(statearr_56206_56220[(2)] = null);

(statearr_56206_56220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__32057__auto___56214,out))
;
return ((function (switch__31943__auto__,c__32057__auto___56214,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto____0 = (function (){
var statearr_56210 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56210[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto__);

(statearr_56210[(1)] = (1));

return statearr_56210;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto____1 = (function (state_56196){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_56196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e56211){if((e56211 instanceof Object)){
var ex__31947__auto__ = e56211;
var statearr_56212_56221 = state_56196;
(statearr_56212_56221[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56222 = state_56196;
state_56196 = G__56222;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto__ = function(state_56196){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto____1.call(this,state_56196);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto___56214,out))
})();
var state__32059__auto__ = (function (){var statearr_56213 = f__32058__auto__.call(null);
(statearr_56213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto___56214);

return statearr_56213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto___56214,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__56223,opts){
var map__56227 = p__56223;
var map__56227__$1 = ((((!((map__56227 == null)))?((((map__56227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56227.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56227):map__56227);
var eval_body = cljs.core.get.call(null,map__56227__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__56227__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__28447__auto__ = eval_body;
if(cljs.core.truth_(and__28447__auto__)){
return typeof eval_body === 'string';
} else {
return and__28447__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e56229){var e = e56229;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5276__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__56230_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__56230_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5276__auto__)){
var file_msg = temp__5276__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__56239){
var vec__56240 = p__56239;
var k = cljs.core.nth.call(null,vec__56240,(0),null);
var v = cljs.core.nth.call(null,vec__56240,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__56243){
var vec__56244 = p__56243;
var k = cljs.core.nth.call(null,vec__56244,(0),null);
var v = cljs.core.nth.call(null,vec__56244,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__56250,p__56251){
var map__56499 = p__56250;
var map__56499__$1 = ((((!((map__56499 == null)))?((((map__56499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56499.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56499):map__56499);
var opts = map__56499__$1;
var before_jsload = cljs.core.get.call(null,map__56499__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__56499__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__56499__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__56500 = p__56251;
var map__56500__$1 = ((((!((map__56500 == null)))?((((map__56500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56500.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56500):map__56500);
var msg = map__56500__$1;
var files = cljs.core.get.call(null,map__56500__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__56500__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__56500__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__32057__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto__,map__56499,map__56499__$1,opts,before_jsload,on_jsload,reload_dependents,map__56500,map__56500__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto__,map__56499,map__56499__$1,opts,before_jsload,on_jsload,reload_dependents,map__56500,map__56500__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_56654){
var state_val_56655 = (state_56654[(1)]);
if((state_val_56655 === (7))){
var inst_56516 = (state_56654[(7)]);
var inst_56517 = (state_56654[(8)]);
var inst_56515 = (state_56654[(9)]);
var inst_56514 = (state_56654[(10)]);
var inst_56522 = cljs.core._nth.call(null,inst_56515,inst_56517);
var inst_56523 = figwheel.client.file_reloading.eval_body.call(null,inst_56522,opts);
var inst_56524 = (inst_56517 + (1));
var tmp56656 = inst_56516;
var tmp56657 = inst_56515;
var tmp56658 = inst_56514;
var inst_56514__$1 = tmp56658;
var inst_56515__$1 = tmp56657;
var inst_56516__$1 = tmp56656;
var inst_56517__$1 = inst_56524;
var state_56654__$1 = (function (){var statearr_56659 = state_56654;
(statearr_56659[(7)] = inst_56516__$1);

(statearr_56659[(11)] = inst_56523);

(statearr_56659[(8)] = inst_56517__$1);

(statearr_56659[(9)] = inst_56515__$1);

(statearr_56659[(10)] = inst_56514__$1);

return statearr_56659;
})();
var statearr_56660_56746 = state_56654__$1;
(statearr_56660_56746[(2)] = null);

(statearr_56660_56746[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56655 === (20))){
var inst_56557 = (state_56654[(12)]);
var inst_56565 = figwheel.client.file_reloading.sort_files.call(null,inst_56557);
var state_56654__$1 = state_56654;
var statearr_56661_56747 = state_56654__$1;
(statearr_56661_56747[(2)] = inst_56565);

(statearr_56661_56747[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56655 === (27))){
var state_56654__$1 = state_56654;
var statearr_56662_56748 = state_56654__$1;
(statearr_56662_56748[(2)] = null);

(statearr_56662_56748[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56655 === (1))){
var inst_56506 = (state_56654[(13)]);
var inst_56503 = before_jsload.call(null,files);
var inst_56504 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_56505 = (function (){return ((function (inst_56506,inst_56503,inst_56504,state_val_56655,c__32057__auto__,map__56499,map__56499__$1,opts,before_jsload,on_jsload,reload_dependents,map__56500,map__56500__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__56247_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__56247_SHARP_);
});
;})(inst_56506,inst_56503,inst_56504,state_val_56655,c__32057__auto__,map__56499,map__56499__$1,opts,before_jsload,on_jsload,reload_dependents,map__56500,map__56500__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_56506__$1 = cljs.core.filter.call(null,inst_56505,files);
var inst_56507 = cljs.core.not_empty.call(null,inst_56506__$1);
var state_56654__$1 = (function (){var statearr_56663 = state_56654;
(statearr_56663[(13)] = inst_56506__$1);

(statearr_56663[(14)] = inst_56504);

(statearr_56663[(15)] = inst_56503);

return statearr_56663;
})();
if(cljs.core.truth_(inst_56507)){
var statearr_56664_56749 = state_56654__$1;
(statearr_56664_56749[(1)] = (2));

} else {
var statearr_56665_56750 = state_56654__$1;
(statearr_56665_56750[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56655 === (24))){
var state_56654__$1 = state_56654;
var statearr_56666_56751 = state_56654__$1;
(statearr_56666_56751[(2)] = null);

(statearr_56666_56751[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56655 === (39))){
var inst_56607 = (state_56654[(16)]);
var state_56654__$1 = state_56654;
var statearr_56667_56752 = state_56654__$1;
(statearr_56667_56752[(2)] = inst_56607);

(statearr_56667_56752[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56655 === (46))){
var inst_56649 = (state_56654[(2)]);
var state_56654__$1 = state_56654;
var statearr_56668_56753 = state_56654__$1;
(statearr_56668_56753[(2)] = inst_56649);

(statearr_56668_56753[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56655 === (4))){
var inst_56551 = (state_56654[(2)]);
var inst_56552 = cljs.core.List.EMPTY;
var inst_56553 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_56552);
var inst_56554 = (function (){return ((function (inst_56551,inst_56552,inst_56553,state_val_56655,c__32057__auto__,map__56499,map__56499__$1,opts,before_jsload,on_jsload,reload_dependents,map__56500,map__56500__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__56248_SHARP_){
var and__28447__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__56248_SHARP_);
if(cljs.core.truth_(and__28447__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__56248_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__56248_SHARP_)));
} else {
return and__28447__auto__;
}
});
;})(inst_56551,inst_56552,inst_56553,state_val_56655,c__32057__auto__,map__56499,map__56499__$1,opts,before_jsload,on_jsload,reload_dependents,map__56500,map__56500__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_56555 = cljs.core.filter.call(null,inst_56554,files);
var inst_56556 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_56557 = cljs.core.concat.call(null,inst_56555,inst_56556);
var state_56654__$1 = (function (){var statearr_56669 = state_56654;
(statearr_56669[(17)] = inst_56551);

(statearr_56669[(18)] = inst_56553);

(statearr_56669[(12)] = inst_56557);

return statearr_56669;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_56670_56754 = state_56654__$1;
(statearr_56670_56754[(1)] = (16));

} else {
var statearr_56671_56755 = state_56654__$1;
(statearr_56671_56755[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56655 === (15))){
var inst_56541 = (state_56654[(2)]);
var state_56654__$1 = state_56654;
var statearr_56672_56756 = state_56654__$1;
(statearr_56672_56756[(2)] = inst_56541);

(statearr_56672_56756[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56655 === (21))){
var inst_56567 = (state_56654[(19)]);
var inst_56567__$1 = (state_56654[(2)]);
var inst_56568 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_56567__$1);
var state_56654__$1 = (function (){var statearr_56673 = state_56654;
(statearr_56673[(19)] = inst_56567__$1);

return statearr_56673;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56654__$1,(22),inst_56568);
} else {
if((state_val_56655 === (31))){
var inst_56652 = (state_56654[(2)]);
var state_56654__$1 = state_56654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56654__$1,inst_56652);
} else {
if((state_val_56655 === (32))){
var inst_56607 = (state_56654[(16)]);
var inst_56612 = inst_56607.cljs$lang$protocol_mask$partition0$;
var inst_56613 = (inst_56612 & (64));
var inst_56614 = inst_56607.cljs$core$ISeq$;
var inst_56615 = (cljs.core.PROTOCOL_SENTINEL === inst_56614);
var inst_56616 = (inst_56613) || (inst_56615);
var state_56654__$1 = state_56654;
if(cljs.core.truth_(inst_56616)){
var statearr_56674_56757 = state_56654__$1;
(statearr_56674_56757[(1)] = (35));

} else {
var statearr_56675_56758 = state_56654__$1;
(statearr_56675_56758[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56655 === (40))){
var inst_56629 = (state_56654[(20)]);
var inst_56628 = (state_56654[(2)]);
var inst_56629__$1 = cljs.core.get.call(null,inst_56628,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_56630 = cljs.core.get.call(null,inst_56628,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_56631 = cljs.core.not_empty.call(null,inst_56629__$1);
var state_56654__$1 = (function (){var statearr_56676 = state_56654;
(statearr_56676[(21)] = inst_56630);

(statearr_56676[(20)] = inst_56629__$1);

return statearr_56676;
})();
if(cljs.core.truth_(inst_56631)){
var statearr_56677_56759 = state_56654__$1;
(statearr_56677_56759[(1)] = (41));

} else {
var statearr_56678_56760 = state_56654__$1;
(statearr_56678_56760[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56655 === (33))){
var state_56654__$1 = state_56654;
var statearr_56679_56761 = state_56654__$1;
(statearr_56679_56761[(2)] = false);

(statearr_56679_56761[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56655 === (13))){
var inst_56527 = (state_56654[(22)]);
var inst_56531 = cljs.core.chunk_first.call(null,inst_56527);
var inst_56532 = cljs.core.chunk_rest.call(null,inst_56527);
var inst_56533 = cljs.core.count.call(null,inst_56531);
var inst_56514 = inst_56532;
var inst_56515 = inst_56531;
var inst_56516 = inst_56533;
var inst_56517 = (0);
var state_56654__$1 = (function (){var statearr_56680 = state_56654;
(statearr_56680[(7)] = inst_56516);

(statearr_56680[(8)] = inst_56517);

(statearr_56680[(9)] = inst_56515);

(statearr_56680[(10)] = inst_56514);

return statearr_56680;
})();
var statearr_56681_56762 = state_56654__$1;
(statearr_56681_56762[(2)] = null);

(statearr_56681_56762[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56655 === (22))){
var inst_56570 = (state_56654[(23)]);
var inst_56571 = (state_56654[(24)]);
var inst_56575 = (state_56654[(25)]);
var inst_56567 = (state_56654[(19)]);
var inst_56570__$1 = (state_56654[(2)]);
var inst_56571__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_56570__$1);
var inst_56572 = (function (){var all_files = inst_56567;
var res_SINGLEQUOTE_ = inst_56570__$1;
var res = inst_56571__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_56570,inst_56571,inst_56575,inst_56567,inst_56570__$1,inst_56571__$1,state_val_56655,c__32057__auto__,map__56499,map__56499__$1,opts,before_jsload,on_jsload,reload_dependents,map__56500,map__56500__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__56249_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__56249_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_56570,inst_56571,inst_56575,inst_56567,inst_56570__$1,inst_56571__$1,state_val_56655,c__32057__auto__,map__56499,map__56499__$1,opts,before_jsload,on_jsload,reload_dependents,map__56500,map__56500__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_56573 = cljs.core.filter.call(null,inst_56572,inst_56570__$1);
var inst_56574 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_56575__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_56574);
var inst_56576 = cljs.core.not_empty.call(null,inst_56575__$1);
var state_56654__$1 = (function (){var statearr_56682 = state_56654;
(statearr_56682[(26)] = inst_56573);

(statearr_56682[(23)] = inst_56570__$1);

(statearr_56682[(24)] = inst_56571__$1);

(statearr_56682[(25)] = inst_56575__$1);

return statearr_56682;
})();
if(cljs.core.truth_(inst_56576)){
var statearr_56683_56763 = state_56654__$1;
(statearr_56683_56763[(1)] = (23));

} else {
var statearr_56684_56764 = state_56654__$1;
(statearr_56684_56764[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56655 === (36))){
var state_56654__$1 = state_56654;
var statearr_56685_56765 = state_56654__$1;
(statearr_56685_56765[(2)] = false);

(statearr_56685_56765[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56655 === (41))){
var inst_56629 = (state_56654[(20)]);
var inst_56633 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_56634 = cljs.core.map.call(null,inst_56633,inst_56629);
var inst_56635 = cljs.core.pr_str.call(null,inst_56634);
var inst_56636 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_56635)].join('');
var inst_56637 = figwheel.client.utils.log.call(null,inst_56636);
var state_56654__$1 = state_56654;
var statearr_56686_56766 = state_56654__$1;
(statearr_56686_56766[(2)] = inst_56637);

(statearr_56686_56766[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56655 === (43))){
var inst_56630 = (state_56654[(21)]);
var inst_56640 = (state_56654[(2)]);
var inst_56641 = cljs.core.not_empty.call(null,inst_56630);
var state_56654__$1 = (function (){var statearr_56687 = state_56654;
(statearr_56687[(27)] = inst_56640);

return statearr_56687;
})();
if(cljs.core.truth_(inst_56641)){
var statearr_56688_56767 = state_56654__$1;
(statearr_56688_56767[(1)] = (44));

} else {
var statearr_56689_56768 = state_56654__$1;
(statearr_56689_56768[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56655 === (29))){
var inst_56573 = (state_56654[(26)]);
var inst_56570 = (state_56654[(23)]);
var inst_56571 = (state_56654[(24)]);
var inst_56575 = (state_56654[(25)]);
var inst_56607 = (state_56654[(16)]);
var inst_56567 = (state_56654[(19)]);
var inst_56603 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_56606 = (function (){var all_files = inst_56567;
var res_SINGLEQUOTE_ = inst_56570;
var res = inst_56571;
var files_not_loaded = inst_56573;
var dependencies_that_loaded = inst_56575;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_56573,inst_56570,inst_56571,inst_56575,inst_56607,inst_56567,inst_56603,state_val_56655,c__32057__auto__,map__56499,map__56499__$1,opts,before_jsload,on_jsload,reload_dependents,map__56500,map__56500__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__56605){
var map__56690 = p__56605;
var map__56690__$1 = ((((!((map__56690 == null)))?((((map__56690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56690.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56690):map__56690);
var namespace = cljs.core.get.call(null,map__56690__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_56573,inst_56570,inst_56571,inst_56575,inst_56607,inst_56567,inst_56603,state_val_56655,c__32057__auto__,map__56499,map__56499__$1,opts,before_jsload,on_jsload,reload_dependents,map__56500,map__56500__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_56607__$1 = cljs.core.group_by.call(null,inst_56606,inst_56573);
var inst_56609 = (inst_56607__$1 == null);
var inst_56610 = cljs.core.not.call(null,inst_56609);
var state_56654__$1 = (function (){var statearr_56692 = state_56654;
(statearr_56692[(28)] = inst_56603);

(statearr_56692[(16)] = inst_56607__$1);

return statearr_56692;
})();
if(inst_56610){
var statearr_56693_56769 = state_56654__$1;
(statearr_56693_56769[(1)] = (32));

} else {
var statearr_56694_56770 = state_56654__$1;
(statearr_56694_56770[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56655 === (44))){
var inst_56630 = (state_56654[(21)]);
var inst_56643 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_56630);
var inst_56644 = cljs.core.pr_str.call(null,inst_56643);
var inst_56645 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_56644)].join('');
var inst_56646 = figwheel.client.utils.log.call(null,inst_56645);
var state_56654__$1 = state_56654;
var statearr_56695_56771 = state_56654__$1;
(statearr_56695_56771[(2)] = inst_56646);

(statearr_56695_56771[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56655 === (6))){
var inst_56548 = (state_56654[(2)]);
var state_56654__$1 = state_56654;
var statearr_56696_56772 = state_56654__$1;
(statearr_56696_56772[(2)] = inst_56548);

(statearr_56696_56772[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56655 === (28))){
var inst_56573 = (state_56654[(26)]);
var inst_56600 = (state_56654[(2)]);
var inst_56601 = cljs.core.not_empty.call(null,inst_56573);
var state_56654__$1 = (function (){var statearr_56697 = state_56654;
(statearr_56697[(29)] = inst_56600);

return statearr_56697;
})();
if(cljs.core.truth_(inst_56601)){
var statearr_56698_56773 = state_56654__$1;
(statearr_56698_56773[(1)] = (29));

} else {
var statearr_56699_56774 = state_56654__$1;
(statearr_56699_56774[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56655 === (25))){
var inst_56571 = (state_56654[(24)]);
var inst_56587 = (state_56654[(2)]);
var inst_56588 = cljs.core.not_empty.call(null,inst_56571);
var state_56654__$1 = (function (){var statearr_56700 = state_56654;
(statearr_56700[(30)] = inst_56587);

return statearr_56700;
})();
if(cljs.core.truth_(inst_56588)){
var statearr_56701_56775 = state_56654__$1;
(statearr_56701_56775[(1)] = (26));

} else {
var statearr_56702_56776 = state_56654__$1;
(statearr_56702_56776[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56655 === (34))){
var inst_56623 = (state_56654[(2)]);
var state_56654__$1 = state_56654;
if(cljs.core.truth_(inst_56623)){
var statearr_56703_56777 = state_56654__$1;
(statearr_56703_56777[(1)] = (38));

} else {
var statearr_56704_56778 = state_56654__$1;
(statearr_56704_56778[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56655 === (17))){
var state_56654__$1 = state_56654;
var statearr_56705_56779 = state_56654__$1;
(statearr_56705_56779[(2)] = recompile_dependents);

(statearr_56705_56779[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56655 === (3))){
var state_56654__$1 = state_56654;
var statearr_56706_56780 = state_56654__$1;
(statearr_56706_56780[(2)] = null);

(statearr_56706_56780[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56655 === (12))){
var inst_56544 = (state_56654[(2)]);
var state_56654__$1 = state_56654;
var statearr_56707_56781 = state_56654__$1;
(statearr_56707_56781[(2)] = inst_56544);

(statearr_56707_56781[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56655 === (2))){
var inst_56506 = (state_56654[(13)]);
var inst_56513 = cljs.core.seq.call(null,inst_56506);
var inst_56514 = inst_56513;
var inst_56515 = null;
var inst_56516 = (0);
var inst_56517 = (0);
var state_56654__$1 = (function (){var statearr_56708 = state_56654;
(statearr_56708[(7)] = inst_56516);

(statearr_56708[(8)] = inst_56517);

(statearr_56708[(9)] = inst_56515);

(statearr_56708[(10)] = inst_56514);

return statearr_56708;
})();
var statearr_56709_56782 = state_56654__$1;
(statearr_56709_56782[(2)] = null);

(statearr_56709_56782[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56655 === (23))){
var inst_56573 = (state_56654[(26)]);
var inst_56570 = (state_56654[(23)]);
var inst_56571 = (state_56654[(24)]);
var inst_56575 = (state_56654[(25)]);
var inst_56567 = (state_56654[(19)]);
var inst_56578 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_56580 = (function (){var all_files = inst_56567;
var res_SINGLEQUOTE_ = inst_56570;
var res = inst_56571;
var files_not_loaded = inst_56573;
var dependencies_that_loaded = inst_56575;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_56573,inst_56570,inst_56571,inst_56575,inst_56567,inst_56578,state_val_56655,c__32057__auto__,map__56499,map__56499__$1,opts,before_jsload,on_jsload,reload_dependents,map__56500,map__56500__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__56579){
var map__56710 = p__56579;
var map__56710__$1 = ((((!((map__56710 == null)))?((((map__56710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56710.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56710):map__56710);
var request_url = cljs.core.get.call(null,map__56710__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_56573,inst_56570,inst_56571,inst_56575,inst_56567,inst_56578,state_val_56655,c__32057__auto__,map__56499,map__56499__$1,opts,before_jsload,on_jsload,reload_dependents,map__56500,map__56500__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_56581 = cljs.core.reverse.call(null,inst_56575);
var inst_56582 = cljs.core.map.call(null,inst_56580,inst_56581);
var inst_56583 = cljs.core.pr_str.call(null,inst_56582);
var inst_56584 = figwheel.client.utils.log.call(null,inst_56583);
var state_56654__$1 = (function (){var statearr_56712 = state_56654;
(statearr_56712[(31)] = inst_56578);

return statearr_56712;
})();
var statearr_56713_56783 = state_56654__$1;
(statearr_56713_56783[(2)] = inst_56584);

(statearr_56713_56783[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56655 === (35))){
var state_56654__$1 = state_56654;
var statearr_56714_56784 = state_56654__$1;
(statearr_56714_56784[(2)] = true);

(statearr_56714_56784[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56655 === (19))){
var inst_56557 = (state_56654[(12)]);
var inst_56563 = figwheel.client.file_reloading.expand_files.call(null,inst_56557);
var state_56654__$1 = state_56654;
var statearr_56715_56785 = state_56654__$1;
(statearr_56715_56785[(2)] = inst_56563);

(statearr_56715_56785[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56655 === (11))){
var state_56654__$1 = state_56654;
var statearr_56716_56786 = state_56654__$1;
(statearr_56716_56786[(2)] = null);

(statearr_56716_56786[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56655 === (9))){
var inst_56546 = (state_56654[(2)]);
var state_56654__$1 = state_56654;
var statearr_56717_56787 = state_56654__$1;
(statearr_56717_56787[(2)] = inst_56546);

(statearr_56717_56787[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56655 === (5))){
var inst_56516 = (state_56654[(7)]);
var inst_56517 = (state_56654[(8)]);
var inst_56519 = (inst_56517 < inst_56516);
var inst_56520 = inst_56519;
var state_56654__$1 = state_56654;
if(cljs.core.truth_(inst_56520)){
var statearr_56718_56788 = state_56654__$1;
(statearr_56718_56788[(1)] = (7));

} else {
var statearr_56719_56789 = state_56654__$1;
(statearr_56719_56789[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56655 === (14))){
var inst_56527 = (state_56654[(22)]);
var inst_56536 = cljs.core.first.call(null,inst_56527);
var inst_56537 = figwheel.client.file_reloading.eval_body.call(null,inst_56536,opts);
var inst_56538 = cljs.core.next.call(null,inst_56527);
var inst_56514 = inst_56538;
var inst_56515 = null;
var inst_56516 = (0);
var inst_56517 = (0);
var state_56654__$1 = (function (){var statearr_56720 = state_56654;
(statearr_56720[(7)] = inst_56516);

(statearr_56720[(8)] = inst_56517);

(statearr_56720[(9)] = inst_56515);

(statearr_56720[(10)] = inst_56514);

(statearr_56720[(32)] = inst_56537);

return statearr_56720;
})();
var statearr_56721_56790 = state_56654__$1;
(statearr_56721_56790[(2)] = null);

(statearr_56721_56790[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56655 === (45))){
var state_56654__$1 = state_56654;
var statearr_56722_56791 = state_56654__$1;
(statearr_56722_56791[(2)] = null);

(statearr_56722_56791[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56655 === (26))){
var inst_56573 = (state_56654[(26)]);
var inst_56570 = (state_56654[(23)]);
var inst_56571 = (state_56654[(24)]);
var inst_56575 = (state_56654[(25)]);
var inst_56567 = (state_56654[(19)]);
var inst_56590 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_56592 = (function (){var all_files = inst_56567;
var res_SINGLEQUOTE_ = inst_56570;
var res = inst_56571;
var files_not_loaded = inst_56573;
var dependencies_that_loaded = inst_56575;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_56573,inst_56570,inst_56571,inst_56575,inst_56567,inst_56590,state_val_56655,c__32057__auto__,map__56499,map__56499__$1,opts,before_jsload,on_jsload,reload_dependents,map__56500,map__56500__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__56591){
var map__56723 = p__56591;
var map__56723__$1 = ((((!((map__56723 == null)))?((((map__56723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56723.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56723):map__56723);
var namespace = cljs.core.get.call(null,map__56723__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__56723__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_56573,inst_56570,inst_56571,inst_56575,inst_56567,inst_56590,state_val_56655,c__32057__auto__,map__56499,map__56499__$1,opts,before_jsload,on_jsload,reload_dependents,map__56500,map__56500__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_56593 = cljs.core.map.call(null,inst_56592,inst_56571);
var inst_56594 = cljs.core.pr_str.call(null,inst_56593);
var inst_56595 = figwheel.client.utils.log.call(null,inst_56594);
var inst_56596 = (function (){var all_files = inst_56567;
var res_SINGLEQUOTE_ = inst_56570;
var res = inst_56571;
var files_not_loaded = inst_56573;
var dependencies_that_loaded = inst_56575;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_56573,inst_56570,inst_56571,inst_56575,inst_56567,inst_56590,inst_56592,inst_56593,inst_56594,inst_56595,state_val_56655,c__32057__auto__,map__56499,map__56499__$1,opts,before_jsload,on_jsload,reload_dependents,map__56500,map__56500__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_56573,inst_56570,inst_56571,inst_56575,inst_56567,inst_56590,inst_56592,inst_56593,inst_56594,inst_56595,state_val_56655,c__32057__auto__,map__56499,map__56499__$1,opts,before_jsload,on_jsload,reload_dependents,map__56500,map__56500__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_56597 = setTimeout(inst_56596,(10));
var state_56654__$1 = (function (){var statearr_56725 = state_56654;
(statearr_56725[(33)] = inst_56590);

(statearr_56725[(34)] = inst_56595);

return statearr_56725;
})();
var statearr_56726_56792 = state_56654__$1;
(statearr_56726_56792[(2)] = inst_56597);

(statearr_56726_56792[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56655 === (16))){
var state_56654__$1 = state_56654;
var statearr_56727_56793 = state_56654__$1;
(statearr_56727_56793[(2)] = reload_dependents);

(statearr_56727_56793[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56655 === (38))){
var inst_56607 = (state_56654[(16)]);
var inst_56625 = cljs.core.apply.call(null,cljs.core.hash_map,inst_56607);
var state_56654__$1 = state_56654;
var statearr_56728_56794 = state_56654__$1;
(statearr_56728_56794[(2)] = inst_56625);

(statearr_56728_56794[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56655 === (30))){
var state_56654__$1 = state_56654;
var statearr_56729_56795 = state_56654__$1;
(statearr_56729_56795[(2)] = null);

(statearr_56729_56795[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56655 === (10))){
var inst_56527 = (state_56654[(22)]);
var inst_56529 = cljs.core.chunked_seq_QMARK_.call(null,inst_56527);
var state_56654__$1 = state_56654;
if(inst_56529){
var statearr_56730_56796 = state_56654__$1;
(statearr_56730_56796[(1)] = (13));

} else {
var statearr_56731_56797 = state_56654__$1;
(statearr_56731_56797[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56655 === (18))){
var inst_56561 = (state_56654[(2)]);
var state_56654__$1 = state_56654;
if(cljs.core.truth_(inst_56561)){
var statearr_56732_56798 = state_56654__$1;
(statearr_56732_56798[(1)] = (19));

} else {
var statearr_56733_56799 = state_56654__$1;
(statearr_56733_56799[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56655 === (42))){
var state_56654__$1 = state_56654;
var statearr_56734_56800 = state_56654__$1;
(statearr_56734_56800[(2)] = null);

(statearr_56734_56800[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56655 === (37))){
var inst_56620 = (state_56654[(2)]);
var state_56654__$1 = state_56654;
var statearr_56735_56801 = state_56654__$1;
(statearr_56735_56801[(2)] = inst_56620);

(statearr_56735_56801[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56655 === (8))){
var inst_56527 = (state_56654[(22)]);
var inst_56514 = (state_56654[(10)]);
var inst_56527__$1 = cljs.core.seq.call(null,inst_56514);
var state_56654__$1 = (function (){var statearr_56736 = state_56654;
(statearr_56736[(22)] = inst_56527__$1);

return statearr_56736;
})();
if(inst_56527__$1){
var statearr_56737_56802 = state_56654__$1;
(statearr_56737_56802[(1)] = (10));

} else {
var statearr_56738_56803 = state_56654__$1;
(statearr_56738_56803[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32057__auto__,map__56499,map__56499__$1,opts,before_jsload,on_jsload,reload_dependents,map__56500,map__56500__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__31943__auto__,c__32057__auto__,map__56499,map__56499__$1,opts,before_jsload,on_jsload,reload_dependents,map__56500,map__56500__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto____0 = (function (){
var statearr_56742 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56742[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto__);

(statearr_56742[(1)] = (1));

return statearr_56742;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto____1 = (function (state_56654){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_56654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e56743){if((e56743 instanceof Object)){
var ex__31947__auto__ = e56743;
var statearr_56744_56804 = state_56654;
(statearr_56744_56804[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56805 = state_56654;
state_56654 = G__56805;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto__ = function(state_56654){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto____1.call(this,state_56654);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto__,map__56499,map__56499__$1,opts,before_jsload,on_jsload,reload_dependents,map__56500,map__56500__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__32059__auto__ = (function (){var statearr_56745 = f__32058__auto__.call(null);
(statearr_56745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto__);

return statearr_56745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto__,map__56499,map__56499__$1,opts,before_jsload,on_jsload,reload_dependents,map__56500,map__56500__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__32057__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__56808,link){
var map__56811 = p__56808;
var map__56811__$1 = ((((!((map__56811 == null)))?((((map__56811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56811.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56811):map__56811);
var file = cljs.core.get.call(null,map__56811__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5278__auto__ = link.href;
if(cljs.core.truth_(temp__5278__auto__)){
var link_href = temp__5278__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5278__auto__,map__56811,map__56811__$1,file){
return (function (p1__56806_SHARP_,p2__56807_SHARP_){
if(cljs.core._EQ_.call(null,p1__56806_SHARP_,p2__56807_SHARP_)){
return p1__56806_SHARP_;
} else {
return false;
}
});})(link_href,temp__5278__auto__,map__56811,map__56811__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5278__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__56817){
var map__56818 = p__56817;
var map__56818__$1 = ((((!((map__56818 == null)))?((((map__56818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56818.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56818):map__56818);
var match_length = cljs.core.get.call(null,map__56818__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__56818__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__56813_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__56813_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5278__auto__)){
var res = temp__5278__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__56820_SHARP_,p2__56821_SHARP_){
return cljs.core.assoc.call(null,p1__56820_SHARP_,cljs.core.get.call(null,p2__56821_SHARP_,key),p2__56821_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5276__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5276__auto__)){
var link = temp__5276__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5276__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5276__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_56822 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_56822);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_56822);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__56823,p__56824){
var map__56829 = p__56823;
var map__56829__$1 = ((((!((map__56829 == null)))?((((map__56829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56829.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56829):map__56829);
var on_cssload = cljs.core.get.call(null,map__56829__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__56830 = p__56824;
var map__56830__$1 = ((((!((map__56830 == null)))?((((map__56830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56830.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56830):map__56830);
var files_msg = map__56830__$1;
var files = cljs.core.get.call(null,map__56830__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5278__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5278__auto__)){
var f_datas = temp__5278__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1497481560666