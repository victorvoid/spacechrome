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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__40724_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__40724_SHARP_));
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
var seq__40729 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__40730 = null;
var count__40731 = (0);
var i__40732 = (0);
while(true){
if((i__40732 < count__40731)){
var n = cljs.core._nth.call(null,chunk__40730,i__40732);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__40733 = seq__40729;
var G__40734 = chunk__40730;
var G__40735 = count__40731;
var G__40736 = (i__40732 + (1));
seq__40729 = G__40733;
chunk__40730 = G__40734;
count__40731 = G__40735;
i__40732 = G__40736;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__40729);
if(temp__5278__auto__){
var seq__40729__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40729__$1)){
var c__29370__auto__ = cljs.core.chunk_first.call(null,seq__40729__$1);
var G__40737 = cljs.core.chunk_rest.call(null,seq__40729__$1);
var G__40738 = c__29370__auto__;
var G__40739 = cljs.core.count.call(null,c__29370__auto__);
var G__40740 = (0);
seq__40729 = G__40737;
chunk__40730 = G__40738;
count__40731 = G__40739;
i__40732 = G__40740;
continue;
} else {
var n = cljs.core.first.call(null,seq__40729__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__40741 = cljs.core.next.call(null,seq__40729__$1);
var G__40742 = null;
var G__40743 = (0);
var G__40744 = (0);
seq__40729 = G__40741;
chunk__40730 = G__40742;
count__40731 = G__40743;
i__40732 = G__40744;
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

var seq__40795_40806 = cljs.core.seq.call(null,deps);
var chunk__40796_40807 = null;
var count__40797_40808 = (0);
var i__40798_40809 = (0);
while(true){
if((i__40798_40809 < count__40797_40808)){
var dep_40810 = cljs.core._nth.call(null,chunk__40796_40807,i__40798_40809);
topo_sort_helper_STAR_.call(null,dep_40810,(depth + (1)),state);

var G__40811 = seq__40795_40806;
var G__40812 = chunk__40796_40807;
var G__40813 = count__40797_40808;
var G__40814 = (i__40798_40809 + (1));
seq__40795_40806 = G__40811;
chunk__40796_40807 = G__40812;
count__40797_40808 = G__40813;
i__40798_40809 = G__40814;
continue;
} else {
var temp__5278__auto___40815 = cljs.core.seq.call(null,seq__40795_40806);
if(temp__5278__auto___40815){
var seq__40795_40816__$1 = temp__5278__auto___40815;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40795_40816__$1)){
var c__29370__auto___40817 = cljs.core.chunk_first.call(null,seq__40795_40816__$1);
var G__40818 = cljs.core.chunk_rest.call(null,seq__40795_40816__$1);
var G__40819 = c__29370__auto___40817;
var G__40820 = cljs.core.count.call(null,c__29370__auto___40817);
var G__40821 = (0);
seq__40795_40806 = G__40818;
chunk__40796_40807 = G__40819;
count__40797_40808 = G__40820;
i__40798_40809 = G__40821;
continue;
} else {
var dep_40822 = cljs.core.first.call(null,seq__40795_40816__$1);
topo_sort_helper_STAR_.call(null,dep_40822,(depth + (1)),state);

var G__40823 = cljs.core.next.call(null,seq__40795_40816__$1);
var G__40824 = null;
var G__40825 = (0);
var G__40826 = (0);
seq__40795_40806 = G__40823;
chunk__40796_40807 = G__40824;
count__40797_40808 = G__40825;
i__40798_40809 = G__40826;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__40799){
var vec__40803 = p__40799;
var seq__40804 = cljs.core.seq.call(null,vec__40803);
var first__40805 = cljs.core.first.call(null,seq__40804);
var seq__40804__$1 = cljs.core.next.call(null,seq__40804);
var x = first__40805;
var xs = seq__40804__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__40803,seq__40804,first__40805,seq__40804__$1,x,xs,get_deps__$1){
return (function (p1__40745_SHARP_){
return clojure.set.difference.call(null,p1__40745_SHARP_,x);
});})(vec__40803,seq__40804,first__40805,seq__40804__$1,x,xs,get_deps__$1))
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
var seq__40839 = cljs.core.seq.call(null,provides);
var chunk__40840 = null;
var count__40841 = (0);
var i__40842 = (0);
while(true){
if((i__40842 < count__40841)){
var prov = cljs.core._nth.call(null,chunk__40840,i__40842);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40843_40851 = cljs.core.seq.call(null,requires);
var chunk__40844_40852 = null;
var count__40845_40853 = (0);
var i__40846_40854 = (0);
while(true){
if((i__40846_40854 < count__40845_40853)){
var req_40855 = cljs.core._nth.call(null,chunk__40844_40852,i__40846_40854);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40855,prov);

var G__40856 = seq__40843_40851;
var G__40857 = chunk__40844_40852;
var G__40858 = count__40845_40853;
var G__40859 = (i__40846_40854 + (1));
seq__40843_40851 = G__40856;
chunk__40844_40852 = G__40857;
count__40845_40853 = G__40858;
i__40846_40854 = G__40859;
continue;
} else {
var temp__5278__auto___40860 = cljs.core.seq.call(null,seq__40843_40851);
if(temp__5278__auto___40860){
var seq__40843_40861__$1 = temp__5278__auto___40860;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40843_40861__$1)){
var c__29370__auto___40862 = cljs.core.chunk_first.call(null,seq__40843_40861__$1);
var G__40863 = cljs.core.chunk_rest.call(null,seq__40843_40861__$1);
var G__40864 = c__29370__auto___40862;
var G__40865 = cljs.core.count.call(null,c__29370__auto___40862);
var G__40866 = (0);
seq__40843_40851 = G__40863;
chunk__40844_40852 = G__40864;
count__40845_40853 = G__40865;
i__40846_40854 = G__40866;
continue;
} else {
var req_40867 = cljs.core.first.call(null,seq__40843_40861__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40867,prov);

var G__40868 = cljs.core.next.call(null,seq__40843_40861__$1);
var G__40869 = null;
var G__40870 = (0);
var G__40871 = (0);
seq__40843_40851 = G__40868;
chunk__40844_40852 = G__40869;
count__40845_40853 = G__40870;
i__40846_40854 = G__40871;
continue;
}
} else {
}
}
break;
}

var G__40872 = seq__40839;
var G__40873 = chunk__40840;
var G__40874 = count__40841;
var G__40875 = (i__40842 + (1));
seq__40839 = G__40872;
chunk__40840 = G__40873;
count__40841 = G__40874;
i__40842 = G__40875;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__40839);
if(temp__5278__auto__){
var seq__40839__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40839__$1)){
var c__29370__auto__ = cljs.core.chunk_first.call(null,seq__40839__$1);
var G__40876 = cljs.core.chunk_rest.call(null,seq__40839__$1);
var G__40877 = c__29370__auto__;
var G__40878 = cljs.core.count.call(null,c__29370__auto__);
var G__40879 = (0);
seq__40839 = G__40876;
chunk__40840 = G__40877;
count__40841 = G__40878;
i__40842 = G__40879;
continue;
} else {
var prov = cljs.core.first.call(null,seq__40839__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40847_40880 = cljs.core.seq.call(null,requires);
var chunk__40848_40881 = null;
var count__40849_40882 = (0);
var i__40850_40883 = (0);
while(true){
if((i__40850_40883 < count__40849_40882)){
var req_40884 = cljs.core._nth.call(null,chunk__40848_40881,i__40850_40883);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40884,prov);

var G__40885 = seq__40847_40880;
var G__40886 = chunk__40848_40881;
var G__40887 = count__40849_40882;
var G__40888 = (i__40850_40883 + (1));
seq__40847_40880 = G__40885;
chunk__40848_40881 = G__40886;
count__40849_40882 = G__40887;
i__40850_40883 = G__40888;
continue;
} else {
var temp__5278__auto___40889__$1 = cljs.core.seq.call(null,seq__40847_40880);
if(temp__5278__auto___40889__$1){
var seq__40847_40890__$1 = temp__5278__auto___40889__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40847_40890__$1)){
var c__29370__auto___40891 = cljs.core.chunk_first.call(null,seq__40847_40890__$1);
var G__40892 = cljs.core.chunk_rest.call(null,seq__40847_40890__$1);
var G__40893 = c__29370__auto___40891;
var G__40894 = cljs.core.count.call(null,c__29370__auto___40891);
var G__40895 = (0);
seq__40847_40880 = G__40892;
chunk__40848_40881 = G__40893;
count__40849_40882 = G__40894;
i__40850_40883 = G__40895;
continue;
} else {
var req_40896 = cljs.core.first.call(null,seq__40847_40890__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40896,prov);

var G__40897 = cljs.core.next.call(null,seq__40847_40890__$1);
var G__40898 = null;
var G__40899 = (0);
var G__40900 = (0);
seq__40847_40880 = G__40897;
chunk__40848_40881 = G__40898;
count__40849_40882 = G__40899;
i__40850_40883 = G__40900;
continue;
}
} else {
}
}
break;
}

var G__40901 = cljs.core.next.call(null,seq__40839__$1);
var G__40902 = null;
var G__40903 = (0);
var G__40904 = (0);
seq__40839 = G__40901;
chunk__40840 = G__40902;
count__40841 = G__40903;
i__40842 = G__40904;
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
var seq__40909_40913 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__40910_40914 = null;
var count__40911_40915 = (0);
var i__40912_40916 = (0);
while(true){
if((i__40912_40916 < count__40911_40915)){
var ns_40917 = cljs.core._nth.call(null,chunk__40910_40914,i__40912_40916);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_40917);

var G__40918 = seq__40909_40913;
var G__40919 = chunk__40910_40914;
var G__40920 = count__40911_40915;
var G__40921 = (i__40912_40916 + (1));
seq__40909_40913 = G__40918;
chunk__40910_40914 = G__40919;
count__40911_40915 = G__40920;
i__40912_40916 = G__40921;
continue;
} else {
var temp__5278__auto___40922 = cljs.core.seq.call(null,seq__40909_40913);
if(temp__5278__auto___40922){
var seq__40909_40923__$1 = temp__5278__auto___40922;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40909_40923__$1)){
var c__29370__auto___40924 = cljs.core.chunk_first.call(null,seq__40909_40923__$1);
var G__40925 = cljs.core.chunk_rest.call(null,seq__40909_40923__$1);
var G__40926 = c__29370__auto___40924;
var G__40927 = cljs.core.count.call(null,c__29370__auto___40924);
var G__40928 = (0);
seq__40909_40913 = G__40925;
chunk__40910_40914 = G__40926;
count__40911_40915 = G__40927;
i__40912_40916 = G__40928;
continue;
} else {
var ns_40929 = cljs.core.first.call(null,seq__40909_40923__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_40929);

var G__40930 = cljs.core.next.call(null,seq__40909_40923__$1);
var G__40931 = null;
var G__40932 = (0);
var G__40933 = (0);
seq__40909_40913 = G__40930;
chunk__40910_40914 = G__40931;
count__40911_40915 = G__40932;
i__40912_40916 = G__40933;
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
var G__40934__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__40934 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40935__i = 0, G__40935__a = new Array(arguments.length -  0);
while (G__40935__i < G__40935__a.length) {G__40935__a[G__40935__i] = arguments[G__40935__i + 0]; ++G__40935__i;}
  args = new cljs.core.IndexedSeq(G__40935__a,0,null);
} 
return G__40934__delegate.call(this,args);};
G__40934.cljs$lang$maxFixedArity = 0;
G__40934.cljs$lang$applyTo = (function (arglist__40936){
var args = cljs.core.seq(arglist__40936);
return G__40934__delegate(args);
});
G__40934.cljs$core$IFn$_invoke$arity$variadic = G__40934__delegate;
return G__40934;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__40937 = cljs.core._EQ_;
var expr__40938 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__40937.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__40938))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__40937,expr__40938){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__40937,expr__40938))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__40937,expr__40938){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e40940){if((e40940 instanceof Error)){
var e = e40940;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e40940;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__40937,expr__40938))
} else {
if(cljs.core.truth_(pred__40937.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__40938))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__40937.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__40938))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__40937.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__40938))){
return ((function (pred__40937,expr__40938){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e40941){if((e40941 instanceof Error)){
var e = e40941;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e40941;

}
}})());
});
;})(pred__40937,expr__40938))
} else {
return ((function (pred__40937,expr__40938){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__40937,expr__40938))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__40942,callback){
var map__40945 = p__40942;
var map__40945__$1 = ((((!((map__40945 == null)))?((((map__40945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40945.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40945):map__40945);
var file_msg = map__40945__$1;
var request_url = cljs.core.get.call(null,map__40945__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__40945,map__40945__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__40945,map__40945__$1,file_msg,request_url))
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
return (function (state_40969){
var state_val_40970 = (state_40969[(1)]);
if((state_val_40970 === (7))){
var inst_40965 = (state_40969[(2)]);
var state_40969__$1 = state_40969;
var statearr_40971_40991 = state_40969__$1;
(statearr_40971_40991[(2)] = inst_40965);

(statearr_40971_40991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40970 === (1))){
var state_40969__$1 = state_40969;
var statearr_40972_40992 = state_40969__$1;
(statearr_40972_40992[(2)] = null);

(statearr_40972_40992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40970 === (4))){
var inst_40949 = (state_40969[(7)]);
var inst_40949__$1 = (state_40969[(2)]);
var state_40969__$1 = (function (){var statearr_40973 = state_40969;
(statearr_40973[(7)] = inst_40949__$1);

return statearr_40973;
})();
if(cljs.core.truth_(inst_40949__$1)){
var statearr_40974_40993 = state_40969__$1;
(statearr_40974_40993[(1)] = (5));

} else {
var statearr_40975_40994 = state_40969__$1;
(statearr_40975_40994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40970 === (6))){
var state_40969__$1 = state_40969;
var statearr_40976_40995 = state_40969__$1;
(statearr_40976_40995[(2)] = null);

(statearr_40976_40995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40970 === (3))){
var inst_40967 = (state_40969[(2)]);
var state_40969__$1 = state_40969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40969__$1,inst_40967);
} else {
if((state_val_40970 === (2))){
var state_40969__$1 = state_40969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40969__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_40970 === (11))){
var inst_40961 = (state_40969[(2)]);
var state_40969__$1 = (function (){var statearr_40977 = state_40969;
(statearr_40977[(8)] = inst_40961);

return statearr_40977;
})();
var statearr_40978_40996 = state_40969__$1;
(statearr_40978_40996[(2)] = null);

(statearr_40978_40996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40970 === (9))){
var inst_40955 = (state_40969[(9)]);
var inst_40953 = (state_40969[(10)]);
var inst_40957 = inst_40955.call(null,inst_40953);
var state_40969__$1 = state_40969;
var statearr_40979_40997 = state_40969__$1;
(statearr_40979_40997[(2)] = inst_40957);

(statearr_40979_40997[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40970 === (5))){
var inst_40949 = (state_40969[(7)]);
var inst_40951 = figwheel.client.file_reloading.blocking_load.call(null,inst_40949);
var state_40969__$1 = state_40969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40969__$1,(8),inst_40951);
} else {
if((state_val_40970 === (10))){
var inst_40953 = (state_40969[(10)]);
var inst_40959 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_40953);
var state_40969__$1 = state_40969;
var statearr_40980_40998 = state_40969__$1;
(statearr_40980_40998[(2)] = inst_40959);

(statearr_40980_40998[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40970 === (8))){
var inst_40955 = (state_40969[(9)]);
var inst_40949 = (state_40969[(7)]);
var inst_40953 = (state_40969[(2)]);
var inst_40954 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_40955__$1 = cljs.core.get.call(null,inst_40954,inst_40949);
var state_40969__$1 = (function (){var statearr_40981 = state_40969;
(statearr_40981[(9)] = inst_40955__$1);

(statearr_40981[(10)] = inst_40953);

return statearr_40981;
})();
if(cljs.core.truth_(inst_40955__$1)){
var statearr_40982_40999 = state_40969__$1;
(statearr_40982_40999[(1)] = (9));

} else {
var statearr_40983_41000 = state_40969__$1;
(statearr_40983_41000[(1)] = (10));

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
var statearr_40987 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40987[(0)] = figwheel$client$file_reloading$state_machine__31944__auto__);

(statearr_40987[(1)] = (1));

return statearr_40987;
});
var figwheel$client$file_reloading$state_machine__31944__auto____1 = (function (state_40969){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_40969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e40988){if((e40988 instanceof Object)){
var ex__31947__auto__ = e40988;
var statearr_40989_41001 = state_40969;
(statearr_40989_41001[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41002 = state_40969;
state_40969 = G__41002;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__31944__auto__ = function(state_40969){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__31944__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__31944__auto____1.call(this,state_40969);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__31944__auto____0;
figwheel$client$file_reloading$state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__31944__auto____1;
return figwheel$client$file_reloading$state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto__))
})();
var state__32059__auto__ = (function (){var statearr_40990 = f__32058__auto__.call(null);
(statearr_40990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto__);

return statearr_40990;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__41003,callback){
var map__41006 = p__41003;
var map__41006__$1 = ((((!((map__41006 == null)))?((((map__41006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41006.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41006):map__41006);
var file_msg = map__41006__$1;
var namespace = cljs.core.get.call(null,map__41006__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__41006,map__41006__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__41006,map__41006__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__41008){
var map__41011 = p__41008;
var map__41011__$1 = ((((!((map__41011 == null)))?((((map__41011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41011.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41011):map__41011);
var file_msg = map__41011__$1;
var namespace = cljs.core.get.call(null,map__41011__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__41013){
var map__41016 = p__41013;
var map__41016__$1 = ((((!((map__41016 == null)))?((((map__41016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41016.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41016):map__41016);
var file_msg = map__41016__$1;
var namespace = cljs.core.get.call(null,map__41016__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__41018,callback){
var map__41021 = p__41018;
var map__41021__$1 = ((((!((map__41021 == null)))?((((map__41021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41021.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41021):map__41021);
var file_msg = map__41021__$1;
var request_url = cljs.core.get.call(null,map__41021__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__41021__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__32057__auto___41125 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto___41125,out){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto___41125,out){
return (function (state_41107){
var state_val_41108 = (state_41107[(1)]);
if((state_val_41108 === (1))){
var inst_41081 = cljs.core.seq.call(null,files);
var inst_41082 = cljs.core.first.call(null,inst_41081);
var inst_41083 = cljs.core.next.call(null,inst_41081);
var inst_41084 = files;
var state_41107__$1 = (function (){var statearr_41109 = state_41107;
(statearr_41109[(7)] = inst_41083);

(statearr_41109[(8)] = inst_41082);

(statearr_41109[(9)] = inst_41084);

return statearr_41109;
})();
var statearr_41110_41126 = state_41107__$1;
(statearr_41110_41126[(2)] = null);

(statearr_41110_41126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41108 === (2))){
var inst_41090 = (state_41107[(10)]);
var inst_41084 = (state_41107[(9)]);
var inst_41089 = cljs.core.seq.call(null,inst_41084);
var inst_41090__$1 = cljs.core.first.call(null,inst_41089);
var inst_41091 = cljs.core.next.call(null,inst_41089);
var inst_41092 = (inst_41090__$1 == null);
var inst_41093 = cljs.core.not.call(null,inst_41092);
var state_41107__$1 = (function (){var statearr_41111 = state_41107;
(statearr_41111[(11)] = inst_41091);

(statearr_41111[(10)] = inst_41090__$1);

return statearr_41111;
})();
if(inst_41093){
var statearr_41112_41127 = state_41107__$1;
(statearr_41112_41127[(1)] = (4));

} else {
var statearr_41113_41128 = state_41107__$1;
(statearr_41113_41128[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41108 === (3))){
var inst_41105 = (state_41107[(2)]);
var state_41107__$1 = state_41107;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41107__$1,inst_41105);
} else {
if((state_val_41108 === (4))){
var inst_41090 = (state_41107[(10)]);
var inst_41095 = figwheel.client.file_reloading.reload_js_file.call(null,inst_41090);
var state_41107__$1 = state_41107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41107__$1,(7),inst_41095);
} else {
if((state_val_41108 === (5))){
var inst_41101 = cljs.core.async.close_BANG_.call(null,out);
var state_41107__$1 = state_41107;
var statearr_41114_41129 = state_41107__$1;
(statearr_41114_41129[(2)] = inst_41101);

(statearr_41114_41129[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41108 === (6))){
var inst_41103 = (state_41107[(2)]);
var state_41107__$1 = state_41107;
var statearr_41115_41130 = state_41107__$1;
(statearr_41115_41130[(2)] = inst_41103);

(statearr_41115_41130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41108 === (7))){
var inst_41091 = (state_41107[(11)]);
var inst_41097 = (state_41107[(2)]);
var inst_41098 = cljs.core.async.put_BANG_.call(null,out,inst_41097);
var inst_41084 = inst_41091;
var state_41107__$1 = (function (){var statearr_41116 = state_41107;
(statearr_41116[(12)] = inst_41098);

(statearr_41116[(9)] = inst_41084);

return statearr_41116;
})();
var statearr_41117_41131 = state_41107__$1;
(statearr_41117_41131[(2)] = null);

(statearr_41117_41131[(1)] = (2));


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
});})(c__32057__auto___41125,out))
;
return ((function (switch__31943__auto__,c__32057__auto___41125,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto____0 = (function (){
var statearr_41121 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41121[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto__);

(statearr_41121[(1)] = (1));

return statearr_41121;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto____1 = (function (state_41107){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_41107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e41122){if((e41122 instanceof Object)){
var ex__31947__auto__ = e41122;
var statearr_41123_41132 = state_41107;
(statearr_41123_41132[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41133 = state_41107;
state_41107 = G__41133;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto__ = function(state_41107){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto____1.call(this,state_41107);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto___41125,out))
})();
var state__32059__auto__ = (function (){var statearr_41124 = f__32058__auto__.call(null);
(statearr_41124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto___41125);

return statearr_41124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto___41125,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__41134,opts){
var map__41138 = p__41134;
var map__41138__$1 = ((((!((map__41138 == null)))?((((map__41138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41138.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41138):map__41138);
var eval_body = cljs.core.get.call(null,map__41138__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__41138__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e41140){var e = e41140;
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
return (function (p1__41141_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__41141_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__41150){
var vec__41151 = p__41150;
var k = cljs.core.nth.call(null,vec__41151,(0),null);
var v = cljs.core.nth.call(null,vec__41151,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__41154){
var vec__41155 = p__41154;
var k = cljs.core.nth.call(null,vec__41155,(0),null);
var v = cljs.core.nth.call(null,vec__41155,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__41161,p__41162){
var map__41410 = p__41161;
var map__41410__$1 = ((((!((map__41410 == null)))?((((map__41410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41410.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41410):map__41410);
var opts = map__41410__$1;
var before_jsload = cljs.core.get.call(null,map__41410__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__41410__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__41410__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__41411 = p__41162;
var map__41411__$1 = ((((!((map__41411 == null)))?((((map__41411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41411.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41411):map__41411);
var msg = map__41411__$1;
var files = cljs.core.get.call(null,map__41411__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__41411__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__41411__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__32057__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32057__auto__,map__41410,map__41410__$1,opts,before_jsload,on_jsload,reload_dependents,map__41411,map__41411__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__32058__auto__ = (function (){var switch__31943__auto__ = ((function (c__32057__auto__,map__41410,map__41410__$1,opts,before_jsload,on_jsload,reload_dependents,map__41411,map__41411__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_41565){
var state_val_41566 = (state_41565[(1)]);
if((state_val_41566 === (7))){
var inst_41428 = (state_41565[(7)]);
var inst_41427 = (state_41565[(8)]);
var inst_41425 = (state_41565[(9)]);
var inst_41426 = (state_41565[(10)]);
var inst_41433 = cljs.core._nth.call(null,inst_41426,inst_41428);
var inst_41434 = figwheel.client.file_reloading.eval_body.call(null,inst_41433,opts);
var inst_41435 = (inst_41428 + (1));
var tmp41567 = inst_41427;
var tmp41568 = inst_41425;
var tmp41569 = inst_41426;
var inst_41425__$1 = tmp41568;
var inst_41426__$1 = tmp41569;
var inst_41427__$1 = tmp41567;
var inst_41428__$1 = inst_41435;
var state_41565__$1 = (function (){var statearr_41570 = state_41565;
(statearr_41570[(7)] = inst_41428__$1);

(statearr_41570[(8)] = inst_41427__$1);

(statearr_41570[(11)] = inst_41434);

(statearr_41570[(9)] = inst_41425__$1);

(statearr_41570[(10)] = inst_41426__$1);

return statearr_41570;
})();
var statearr_41571_41657 = state_41565__$1;
(statearr_41571_41657[(2)] = null);

(statearr_41571_41657[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (20))){
var inst_41468 = (state_41565[(12)]);
var inst_41476 = figwheel.client.file_reloading.sort_files.call(null,inst_41468);
var state_41565__$1 = state_41565;
var statearr_41572_41658 = state_41565__$1;
(statearr_41572_41658[(2)] = inst_41476);

(statearr_41572_41658[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (27))){
var state_41565__$1 = state_41565;
var statearr_41573_41659 = state_41565__$1;
(statearr_41573_41659[(2)] = null);

(statearr_41573_41659[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (1))){
var inst_41417 = (state_41565[(13)]);
var inst_41414 = before_jsload.call(null,files);
var inst_41415 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_41416 = (function (){return ((function (inst_41417,inst_41414,inst_41415,state_val_41566,c__32057__auto__,map__41410,map__41410__$1,opts,before_jsload,on_jsload,reload_dependents,map__41411,map__41411__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41158_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__41158_SHARP_);
});
;})(inst_41417,inst_41414,inst_41415,state_val_41566,c__32057__auto__,map__41410,map__41410__$1,opts,before_jsload,on_jsload,reload_dependents,map__41411,map__41411__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41417__$1 = cljs.core.filter.call(null,inst_41416,files);
var inst_41418 = cljs.core.not_empty.call(null,inst_41417__$1);
var state_41565__$1 = (function (){var statearr_41574 = state_41565;
(statearr_41574[(14)] = inst_41415);

(statearr_41574[(15)] = inst_41414);

(statearr_41574[(13)] = inst_41417__$1);

return statearr_41574;
})();
if(cljs.core.truth_(inst_41418)){
var statearr_41575_41660 = state_41565__$1;
(statearr_41575_41660[(1)] = (2));

} else {
var statearr_41576_41661 = state_41565__$1;
(statearr_41576_41661[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (24))){
var state_41565__$1 = state_41565;
var statearr_41577_41662 = state_41565__$1;
(statearr_41577_41662[(2)] = null);

(statearr_41577_41662[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (39))){
var inst_41518 = (state_41565[(16)]);
var state_41565__$1 = state_41565;
var statearr_41578_41663 = state_41565__$1;
(statearr_41578_41663[(2)] = inst_41518);

(statearr_41578_41663[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (46))){
var inst_41560 = (state_41565[(2)]);
var state_41565__$1 = state_41565;
var statearr_41579_41664 = state_41565__$1;
(statearr_41579_41664[(2)] = inst_41560);

(statearr_41579_41664[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (4))){
var inst_41462 = (state_41565[(2)]);
var inst_41463 = cljs.core.List.EMPTY;
var inst_41464 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_41463);
var inst_41465 = (function (){return ((function (inst_41462,inst_41463,inst_41464,state_val_41566,c__32057__auto__,map__41410,map__41410__$1,opts,before_jsload,on_jsload,reload_dependents,map__41411,map__41411__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41159_SHARP_){
var and__28447__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__41159_SHARP_);
if(cljs.core.truth_(and__28447__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__41159_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__41159_SHARP_)));
} else {
return and__28447__auto__;
}
});
;})(inst_41462,inst_41463,inst_41464,state_val_41566,c__32057__auto__,map__41410,map__41410__$1,opts,before_jsload,on_jsload,reload_dependents,map__41411,map__41411__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41466 = cljs.core.filter.call(null,inst_41465,files);
var inst_41467 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_41468 = cljs.core.concat.call(null,inst_41466,inst_41467);
var state_41565__$1 = (function (){var statearr_41580 = state_41565;
(statearr_41580[(12)] = inst_41468);

(statearr_41580[(17)] = inst_41464);

(statearr_41580[(18)] = inst_41462);

return statearr_41580;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_41581_41665 = state_41565__$1;
(statearr_41581_41665[(1)] = (16));

} else {
var statearr_41582_41666 = state_41565__$1;
(statearr_41582_41666[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (15))){
var inst_41452 = (state_41565[(2)]);
var state_41565__$1 = state_41565;
var statearr_41583_41667 = state_41565__$1;
(statearr_41583_41667[(2)] = inst_41452);

(statearr_41583_41667[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (21))){
var inst_41478 = (state_41565[(19)]);
var inst_41478__$1 = (state_41565[(2)]);
var inst_41479 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_41478__$1);
var state_41565__$1 = (function (){var statearr_41584 = state_41565;
(statearr_41584[(19)] = inst_41478__$1);

return statearr_41584;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41565__$1,(22),inst_41479);
} else {
if((state_val_41566 === (31))){
var inst_41563 = (state_41565[(2)]);
var state_41565__$1 = state_41565;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41565__$1,inst_41563);
} else {
if((state_val_41566 === (32))){
var inst_41518 = (state_41565[(16)]);
var inst_41523 = inst_41518.cljs$lang$protocol_mask$partition0$;
var inst_41524 = (inst_41523 & (64));
var inst_41525 = inst_41518.cljs$core$ISeq$;
var inst_41526 = (cljs.core.PROTOCOL_SENTINEL === inst_41525);
var inst_41527 = (inst_41524) || (inst_41526);
var state_41565__$1 = state_41565;
if(cljs.core.truth_(inst_41527)){
var statearr_41585_41668 = state_41565__$1;
(statearr_41585_41668[(1)] = (35));

} else {
var statearr_41586_41669 = state_41565__$1;
(statearr_41586_41669[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (40))){
var inst_41540 = (state_41565[(20)]);
var inst_41539 = (state_41565[(2)]);
var inst_41540__$1 = cljs.core.get.call(null,inst_41539,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_41541 = cljs.core.get.call(null,inst_41539,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_41542 = cljs.core.not_empty.call(null,inst_41540__$1);
var state_41565__$1 = (function (){var statearr_41587 = state_41565;
(statearr_41587[(21)] = inst_41541);

(statearr_41587[(20)] = inst_41540__$1);

return statearr_41587;
})();
if(cljs.core.truth_(inst_41542)){
var statearr_41588_41670 = state_41565__$1;
(statearr_41588_41670[(1)] = (41));

} else {
var statearr_41589_41671 = state_41565__$1;
(statearr_41589_41671[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (33))){
var state_41565__$1 = state_41565;
var statearr_41590_41672 = state_41565__$1;
(statearr_41590_41672[(2)] = false);

(statearr_41590_41672[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (13))){
var inst_41438 = (state_41565[(22)]);
var inst_41442 = cljs.core.chunk_first.call(null,inst_41438);
var inst_41443 = cljs.core.chunk_rest.call(null,inst_41438);
var inst_41444 = cljs.core.count.call(null,inst_41442);
var inst_41425 = inst_41443;
var inst_41426 = inst_41442;
var inst_41427 = inst_41444;
var inst_41428 = (0);
var state_41565__$1 = (function (){var statearr_41591 = state_41565;
(statearr_41591[(7)] = inst_41428);

(statearr_41591[(8)] = inst_41427);

(statearr_41591[(9)] = inst_41425);

(statearr_41591[(10)] = inst_41426);

return statearr_41591;
})();
var statearr_41592_41673 = state_41565__$1;
(statearr_41592_41673[(2)] = null);

(statearr_41592_41673[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (22))){
var inst_41486 = (state_41565[(23)]);
var inst_41478 = (state_41565[(19)]);
var inst_41481 = (state_41565[(24)]);
var inst_41482 = (state_41565[(25)]);
var inst_41481__$1 = (state_41565[(2)]);
var inst_41482__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41481__$1);
var inst_41483 = (function (){var all_files = inst_41478;
var res_SINGLEQUOTE_ = inst_41481__$1;
var res = inst_41482__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_41486,inst_41478,inst_41481,inst_41482,inst_41481__$1,inst_41482__$1,state_val_41566,c__32057__auto__,map__41410,map__41410__$1,opts,before_jsload,on_jsload,reload_dependents,map__41411,map__41411__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41160_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__41160_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_41486,inst_41478,inst_41481,inst_41482,inst_41481__$1,inst_41482__$1,state_val_41566,c__32057__auto__,map__41410,map__41410__$1,opts,before_jsload,on_jsload,reload_dependents,map__41411,map__41411__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41484 = cljs.core.filter.call(null,inst_41483,inst_41481__$1);
var inst_41485 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_41486__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41485);
var inst_41487 = cljs.core.not_empty.call(null,inst_41486__$1);
var state_41565__$1 = (function (){var statearr_41593 = state_41565;
(statearr_41593[(26)] = inst_41484);

(statearr_41593[(23)] = inst_41486__$1);

(statearr_41593[(24)] = inst_41481__$1);

(statearr_41593[(25)] = inst_41482__$1);

return statearr_41593;
})();
if(cljs.core.truth_(inst_41487)){
var statearr_41594_41674 = state_41565__$1;
(statearr_41594_41674[(1)] = (23));

} else {
var statearr_41595_41675 = state_41565__$1;
(statearr_41595_41675[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (36))){
var state_41565__$1 = state_41565;
var statearr_41596_41676 = state_41565__$1;
(statearr_41596_41676[(2)] = false);

(statearr_41596_41676[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (41))){
var inst_41540 = (state_41565[(20)]);
var inst_41544 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_41545 = cljs.core.map.call(null,inst_41544,inst_41540);
var inst_41546 = cljs.core.pr_str.call(null,inst_41545);
var inst_41547 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41546)].join('');
var inst_41548 = figwheel.client.utils.log.call(null,inst_41547);
var state_41565__$1 = state_41565;
var statearr_41597_41677 = state_41565__$1;
(statearr_41597_41677[(2)] = inst_41548);

(statearr_41597_41677[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (43))){
var inst_41541 = (state_41565[(21)]);
var inst_41551 = (state_41565[(2)]);
var inst_41552 = cljs.core.not_empty.call(null,inst_41541);
var state_41565__$1 = (function (){var statearr_41598 = state_41565;
(statearr_41598[(27)] = inst_41551);

return statearr_41598;
})();
if(cljs.core.truth_(inst_41552)){
var statearr_41599_41678 = state_41565__$1;
(statearr_41599_41678[(1)] = (44));

} else {
var statearr_41600_41679 = state_41565__$1;
(statearr_41600_41679[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (29))){
var inst_41484 = (state_41565[(26)]);
var inst_41518 = (state_41565[(16)]);
var inst_41486 = (state_41565[(23)]);
var inst_41478 = (state_41565[(19)]);
var inst_41481 = (state_41565[(24)]);
var inst_41482 = (state_41565[(25)]);
var inst_41514 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_41517 = (function (){var all_files = inst_41478;
var res_SINGLEQUOTE_ = inst_41481;
var res = inst_41482;
var files_not_loaded = inst_41484;
var dependencies_that_loaded = inst_41486;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41484,inst_41518,inst_41486,inst_41478,inst_41481,inst_41482,inst_41514,state_val_41566,c__32057__auto__,map__41410,map__41410__$1,opts,before_jsload,on_jsload,reload_dependents,map__41411,map__41411__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41516){
var map__41601 = p__41516;
var map__41601__$1 = ((((!((map__41601 == null)))?((((map__41601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41601.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41601):map__41601);
var namespace = cljs.core.get.call(null,map__41601__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41484,inst_41518,inst_41486,inst_41478,inst_41481,inst_41482,inst_41514,state_val_41566,c__32057__auto__,map__41410,map__41410__$1,opts,before_jsload,on_jsload,reload_dependents,map__41411,map__41411__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41518__$1 = cljs.core.group_by.call(null,inst_41517,inst_41484);
var inst_41520 = (inst_41518__$1 == null);
var inst_41521 = cljs.core.not.call(null,inst_41520);
var state_41565__$1 = (function (){var statearr_41603 = state_41565;
(statearr_41603[(16)] = inst_41518__$1);

(statearr_41603[(28)] = inst_41514);

return statearr_41603;
})();
if(inst_41521){
var statearr_41604_41680 = state_41565__$1;
(statearr_41604_41680[(1)] = (32));

} else {
var statearr_41605_41681 = state_41565__$1;
(statearr_41605_41681[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (44))){
var inst_41541 = (state_41565[(21)]);
var inst_41554 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41541);
var inst_41555 = cljs.core.pr_str.call(null,inst_41554);
var inst_41556 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41555)].join('');
var inst_41557 = figwheel.client.utils.log.call(null,inst_41556);
var state_41565__$1 = state_41565;
var statearr_41606_41682 = state_41565__$1;
(statearr_41606_41682[(2)] = inst_41557);

(statearr_41606_41682[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (6))){
var inst_41459 = (state_41565[(2)]);
var state_41565__$1 = state_41565;
var statearr_41607_41683 = state_41565__$1;
(statearr_41607_41683[(2)] = inst_41459);

(statearr_41607_41683[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (28))){
var inst_41484 = (state_41565[(26)]);
var inst_41511 = (state_41565[(2)]);
var inst_41512 = cljs.core.not_empty.call(null,inst_41484);
var state_41565__$1 = (function (){var statearr_41608 = state_41565;
(statearr_41608[(29)] = inst_41511);

return statearr_41608;
})();
if(cljs.core.truth_(inst_41512)){
var statearr_41609_41684 = state_41565__$1;
(statearr_41609_41684[(1)] = (29));

} else {
var statearr_41610_41685 = state_41565__$1;
(statearr_41610_41685[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (25))){
var inst_41482 = (state_41565[(25)]);
var inst_41498 = (state_41565[(2)]);
var inst_41499 = cljs.core.not_empty.call(null,inst_41482);
var state_41565__$1 = (function (){var statearr_41611 = state_41565;
(statearr_41611[(30)] = inst_41498);

return statearr_41611;
})();
if(cljs.core.truth_(inst_41499)){
var statearr_41612_41686 = state_41565__$1;
(statearr_41612_41686[(1)] = (26));

} else {
var statearr_41613_41687 = state_41565__$1;
(statearr_41613_41687[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (34))){
var inst_41534 = (state_41565[(2)]);
var state_41565__$1 = state_41565;
if(cljs.core.truth_(inst_41534)){
var statearr_41614_41688 = state_41565__$1;
(statearr_41614_41688[(1)] = (38));

} else {
var statearr_41615_41689 = state_41565__$1;
(statearr_41615_41689[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (17))){
var state_41565__$1 = state_41565;
var statearr_41616_41690 = state_41565__$1;
(statearr_41616_41690[(2)] = recompile_dependents);

(statearr_41616_41690[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (3))){
var state_41565__$1 = state_41565;
var statearr_41617_41691 = state_41565__$1;
(statearr_41617_41691[(2)] = null);

(statearr_41617_41691[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (12))){
var inst_41455 = (state_41565[(2)]);
var state_41565__$1 = state_41565;
var statearr_41618_41692 = state_41565__$1;
(statearr_41618_41692[(2)] = inst_41455);

(statearr_41618_41692[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (2))){
var inst_41417 = (state_41565[(13)]);
var inst_41424 = cljs.core.seq.call(null,inst_41417);
var inst_41425 = inst_41424;
var inst_41426 = null;
var inst_41427 = (0);
var inst_41428 = (0);
var state_41565__$1 = (function (){var statearr_41619 = state_41565;
(statearr_41619[(7)] = inst_41428);

(statearr_41619[(8)] = inst_41427);

(statearr_41619[(9)] = inst_41425);

(statearr_41619[(10)] = inst_41426);

return statearr_41619;
})();
var statearr_41620_41693 = state_41565__$1;
(statearr_41620_41693[(2)] = null);

(statearr_41620_41693[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (23))){
var inst_41484 = (state_41565[(26)]);
var inst_41486 = (state_41565[(23)]);
var inst_41478 = (state_41565[(19)]);
var inst_41481 = (state_41565[(24)]);
var inst_41482 = (state_41565[(25)]);
var inst_41489 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_41491 = (function (){var all_files = inst_41478;
var res_SINGLEQUOTE_ = inst_41481;
var res = inst_41482;
var files_not_loaded = inst_41484;
var dependencies_that_loaded = inst_41486;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41484,inst_41486,inst_41478,inst_41481,inst_41482,inst_41489,state_val_41566,c__32057__auto__,map__41410,map__41410__$1,opts,before_jsload,on_jsload,reload_dependents,map__41411,map__41411__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41490){
var map__41621 = p__41490;
var map__41621__$1 = ((((!((map__41621 == null)))?((((map__41621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41621.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41621):map__41621);
var request_url = cljs.core.get.call(null,map__41621__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41484,inst_41486,inst_41478,inst_41481,inst_41482,inst_41489,state_val_41566,c__32057__auto__,map__41410,map__41410__$1,opts,before_jsload,on_jsload,reload_dependents,map__41411,map__41411__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41492 = cljs.core.reverse.call(null,inst_41486);
var inst_41493 = cljs.core.map.call(null,inst_41491,inst_41492);
var inst_41494 = cljs.core.pr_str.call(null,inst_41493);
var inst_41495 = figwheel.client.utils.log.call(null,inst_41494);
var state_41565__$1 = (function (){var statearr_41623 = state_41565;
(statearr_41623[(31)] = inst_41489);

return statearr_41623;
})();
var statearr_41624_41694 = state_41565__$1;
(statearr_41624_41694[(2)] = inst_41495);

(statearr_41624_41694[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (35))){
var state_41565__$1 = state_41565;
var statearr_41625_41695 = state_41565__$1;
(statearr_41625_41695[(2)] = true);

(statearr_41625_41695[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (19))){
var inst_41468 = (state_41565[(12)]);
var inst_41474 = figwheel.client.file_reloading.expand_files.call(null,inst_41468);
var state_41565__$1 = state_41565;
var statearr_41626_41696 = state_41565__$1;
(statearr_41626_41696[(2)] = inst_41474);

(statearr_41626_41696[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (11))){
var state_41565__$1 = state_41565;
var statearr_41627_41697 = state_41565__$1;
(statearr_41627_41697[(2)] = null);

(statearr_41627_41697[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (9))){
var inst_41457 = (state_41565[(2)]);
var state_41565__$1 = state_41565;
var statearr_41628_41698 = state_41565__$1;
(statearr_41628_41698[(2)] = inst_41457);

(statearr_41628_41698[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (5))){
var inst_41428 = (state_41565[(7)]);
var inst_41427 = (state_41565[(8)]);
var inst_41430 = (inst_41428 < inst_41427);
var inst_41431 = inst_41430;
var state_41565__$1 = state_41565;
if(cljs.core.truth_(inst_41431)){
var statearr_41629_41699 = state_41565__$1;
(statearr_41629_41699[(1)] = (7));

} else {
var statearr_41630_41700 = state_41565__$1;
(statearr_41630_41700[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (14))){
var inst_41438 = (state_41565[(22)]);
var inst_41447 = cljs.core.first.call(null,inst_41438);
var inst_41448 = figwheel.client.file_reloading.eval_body.call(null,inst_41447,opts);
var inst_41449 = cljs.core.next.call(null,inst_41438);
var inst_41425 = inst_41449;
var inst_41426 = null;
var inst_41427 = (0);
var inst_41428 = (0);
var state_41565__$1 = (function (){var statearr_41631 = state_41565;
(statearr_41631[(7)] = inst_41428);

(statearr_41631[(8)] = inst_41427);

(statearr_41631[(32)] = inst_41448);

(statearr_41631[(9)] = inst_41425);

(statearr_41631[(10)] = inst_41426);

return statearr_41631;
})();
var statearr_41632_41701 = state_41565__$1;
(statearr_41632_41701[(2)] = null);

(statearr_41632_41701[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (45))){
var state_41565__$1 = state_41565;
var statearr_41633_41702 = state_41565__$1;
(statearr_41633_41702[(2)] = null);

(statearr_41633_41702[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (26))){
var inst_41484 = (state_41565[(26)]);
var inst_41486 = (state_41565[(23)]);
var inst_41478 = (state_41565[(19)]);
var inst_41481 = (state_41565[(24)]);
var inst_41482 = (state_41565[(25)]);
var inst_41501 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_41503 = (function (){var all_files = inst_41478;
var res_SINGLEQUOTE_ = inst_41481;
var res = inst_41482;
var files_not_loaded = inst_41484;
var dependencies_that_loaded = inst_41486;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41484,inst_41486,inst_41478,inst_41481,inst_41482,inst_41501,state_val_41566,c__32057__auto__,map__41410,map__41410__$1,opts,before_jsload,on_jsload,reload_dependents,map__41411,map__41411__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41502){
var map__41634 = p__41502;
var map__41634__$1 = ((((!((map__41634 == null)))?((((map__41634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41634.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41634):map__41634);
var namespace = cljs.core.get.call(null,map__41634__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__41634__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41484,inst_41486,inst_41478,inst_41481,inst_41482,inst_41501,state_val_41566,c__32057__auto__,map__41410,map__41410__$1,opts,before_jsload,on_jsload,reload_dependents,map__41411,map__41411__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41504 = cljs.core.map.call(null,inst_41503,inst_41482);
var inst_41505 = cljs.core.pr_str.call(null,inst_41504);
var inst_41506 = figwheel.client.utils.log.call(null,inst_41505);
var inst_41507 = (function (){var all_files = inst_41478;
var res_SINGLEQUOTE_ = inst_41481;
var res = inst_41482;
var files_not_loaded = inst_41484;
var dependencies_that_loaded = inst_41486;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41484,inst_41486,inst_41478,inst_41481,inst_41482,inst_41501,inst_41503,inst_41504,inst_41505,inst_41506,state_val_41566,c__32057__auto__,map__41410,map__41410__$1,opts,before_jsload,on_jsload,reload_dependents,map__41411,map__41411__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41484,inst_41486,inst_41478,inst_41481,inst_41482,inst_41501,inst_41503,inst_41504,inst_41505,inst_41506,state_val_41566,c__32057__auto__,map__41410,map__41410__$1,opts,before_jsload,on_jsload,reload_dependents,map__41411,map__41411__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41508 = setTimeout(inst_41507,(10));
var state_41565__$1 = (function (){var statearr_41636 = state_41565;
(statearr_41636[(33)] = inst_41501);

(statearr_41636[(34)] = inst_41506);

return statearr_41636;
})();
var statearr_41637_41703 = state_41565__$1;
(statearr_41637_41703[(2)] = inst_41508);

(statearr_41637_41703[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (16))){
var state_41565__$1 = state_41565;
var statearr_41638_41704 = state_41565__$1;
(statearr_41638_41704[(2)] = reload_dependents);

(statearr_41638_41704[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (38))){
var inst_41518 = (state_41565[(16)]);
var inst_41536 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41518);
var state_41565__$1 = state_41565;
var statearr_41639_41705 = state_41565__$1;
(statearr_41639_41705[(2)] = inst_41536);

(statearr_41639_41705[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (30))){
var state_41565__$1 = state_41565;
var statearr_41640_41706 = state_41565__$1;
(statearr_41640_41706[(2)] = null);

(statearr_41640_41706[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (10))){
var inst_41438 = (state_41565[(22)]);
var inst_41440 = cljs.core.chunked_seq_QMARK_.call(null,inst_41438);
var state_41565__$1 = state_41565;
if(inst_41440){
var statearr_41641_41707 = state_41565__$1;
(statearr_41641_41707[(1)] = (13));

} else {
var statearr_41642_41708 = state_41565__$1;
(statearr_41642_41708[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (18))){
var inst_41472 = (state_41565[(2)]);
var state_41565__$1 = state_41565;
if(cljs.core.truth_(inst_41472)){
var statearr_41643_41709 = state_41565__$1;
(statearr_41643_41709[(1)] = (19));

} else {
var statearr_41644_41710 = state_41565__$1;
(statearr_41644_41710[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (42))){
var state_41565__$1 = state_41565;
var statearr_41645_41711 = state_41565__$1;
(statearr_41645_41711[(2)] = null);

(statearr_41645_41711[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (37))){
var inst_41531 = (state_41565[(2)]);
var state_41565__$1 = state_41565;
var statearr_41646_41712 = state_41565__$1;
(statearr_41646_41712[(2)] = inst_41531);

(statearr_41646_41712[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (8))){
var inst_41438 = (state_41565[(22)]);
var inst_41425 = (state_41565[(9)]);
var inst_41438__$1 = cljs.core.seq.call(null,inst_41425);
var state_41565__$1 = (function (){var statearr_41647 = state_41565;
(statearr_41647[(22)] = inst_41438__$1);

return statearr_41647;
})();
if(inst_41438__$1){
var statearr_41648_41713 = state_41565__$1;
(statearr_41648_41713[(1)] = (10));

} else {
var statearr_41649_41714 = state_41565__$1;
(statearr_41649_41714[(1)] = (11));

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
});})(c__32057__auto__,map__41410,map__41410__$1,opts,before_jsload,on_jsload,reload_dependents,map__41411,map__41411__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__31943__auto__,c__32057__auto__,map__41410,map__41410__$1,opts,before_jsload,on_jsload,reload_dependents,map__41411,map__41411__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto____0 = (function (){
var statearr_41653 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41653[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto__);

(statearr_41653[(1)] = (1));

return statearr_41653;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto____1 = (function (state_41565){
while(true){
var ret_value__31945__auto__ = (function (){try{while(true){
var result__31946__auto__ = switch__31943__auto__.call(null,state_41565);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31946__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31946__auto__;
}
break;
}
}catch (e41654){if((e41654 instanceof Object)){
var ex__31947__auto__ = e41654;
var statearr_41655_41715 = state_41565;
(statearr_41655_41715[(5)] = ex__31947__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41565);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31945__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41716 = state_41565;
state_41565 = G__41716;
continue;
} else {
return ret_value__31945__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto__ = function(state_41565){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto____1.call(this,state_41565);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31944__auto__;
})()
;})(switch__31943__auto__,c__32057__auto__,map__41410,map__41410__$1,opts,before_jsload,on_jsload,reload_dependents,map__41411,map__41411__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__32059__auto__ = (function (){var statearr_41656 = f__32058__auto__.call(null);
(statearr_41656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32057__auto__);

return statearr_41656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32059__auto__);
});})(c__32057__auto__,map__41410,map__41410__$1,opts,before_jsload,on_jsload,reload_dependents,map__41411,map__41411__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__32057__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__41719,link){
var map__41722 = p__41719;
var map__41722__$1 = ((((!((map__41722 == null)))?((((map__41722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41722.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41722):map__41722);
var file = cljs.core.get.call(null,map__41722__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5278__auto__ = link.href;
if(cljs.core.truth_(temp__5278__auto__)){
var link_href = temp__5278__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5278__auto__,map__41722,map__41722__$1,file){
return (function (p1__41717_SHARP_,p2__41718_SHARP_){
if(cljs.core._EQ_.call(null,p1__41717_SHARP_,p2__41718_SHARP_)){
return p1__41717_SHARP_;
} else {
return false;
}
});})(link_href,temp__5278__auto__,map__41722,map__41722__$1,file))
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
var temp__5278__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__41728){
var map__41729 = p__41728;
var map__41729__$1 = ((((!((map__41729 == null)))?((((map__41729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41729.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41729):map__41729);
var match_length = cljs.core.get.call(null,map__41729__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__41729__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__41724_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__41724_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__41731_SHARP_,p2__41732_SHARP_){
return cljs.core.assoc.call(null,p1__41731_SHARP_,cljs.core.get.call(null,p2__41732_SHARP_,key),p2__41732_SHARP_);
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
var loaded_f_datas_41733 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_41733);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_41733);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__41734,p__41735){
var map__41740 = p__41734;
var map__41740__$1 = ((((!((map__41740 == null)))?((((map__41740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41740.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41740):map__41740);
var on_cssload = cljs.core.get.call(null,map__41740__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__41741 = p__41735;
var map__41741__$1 = ((((!((map__41741 == null)))?((((map__41741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41741.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41741):map__41741);
var files_msg = map__41741__$1;
var files = cljs.core.get.call(null,map__41741__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1497481544717