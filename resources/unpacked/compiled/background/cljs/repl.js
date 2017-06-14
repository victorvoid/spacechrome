// Compiled by ClojureScript 1.9.562 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__56835){
var map__56860 = p__56835;
var map__56860__$1 = ((((!((map__56860 == null)))?((((map__56860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56860.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56860):map__56860);
var m = map__56860__$1;
var n = cljs.core.get.call(null,map__56860__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__56860__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5278__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5278__auto__)){
var ns = temp__5278__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__56862_56884 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56863_56885 = null;
var count__56864_56886 = (0);
var i__56865_56887 = (0);
while(true){
if((i__56865_56887 < count__56864_56886)){
var f_56888 = cljs.core._nth.call(null,chunk__56863_56885,i__56865_56887);
cljs.core.println.call(null,"  ",f_56888);

var G__56889 = seq__56862_56884;
var G__56890 = chunk__56863_56885;
var G__56891 = count__56864_56886;
var G__56892 = (i__56865_56887 + (1));
seq__56862_56884 = G__56889;
chunk__56863_56885 = G__56890;
count__56864_56886 = G__56891;
i__56865_56887 = G__56892;
continue;
} else {
var temp__5278__auto___56893 = cljs.core.seq.call(null,seq__56862_56884);
if(temp__5278__auto___56893){
var seq__56862_56894__$1 = temp__5278__auto___56893;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56862_56894__$1)){
var c__29370__auto___56895 = cljs.core.chunk_first.call(null,seq__56862_56894__$1);
var G__56896 = cljs.core.chunk_rest.call(null,seq__56862_56894__$1);
var G__56897 = c__29370__auto___56895;
var G__56898 = cljs.core.count.call(null,c__29370__auto___56895);
var G__56899 = (0);
seq__56862_56884 = G__56896;
chunk__56863_56885 = G__56897;
count__56864_56886 = G__56898;
i__56865_56887 = G__56899;
continue;
} else {
var f_56900 = cljs.core.first.call(null,seq__56862_56894__$1);
cljs.core.println.call(null,"  ",f_56900);

var G__56901 = cljs.core.next.call(null,seq__56862_56894__$1);
var G__56902 = null;
var G__56903 = (0);
var G__56904 = (0);
seq__56862_56884 = G__56901;
chunk__56863_56885 = G__56902;
count__56864_56886 = G__56903;
i__56865_56887 = G__56904;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_56905 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28459__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28459__auto__)){
return or__28459__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_56905);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_56905)))?cljs.core.second.call(null,arglists_56905):arglists_56905));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__56866_56906 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56867_56907 = null;
var count__56868_56908 = (0);
var i__56869_56909 = (0);
while(true){
if((i__56869_56909 < count__56868_56908)){
var vec__56870_56910 = cljs.core._nth.call(null,chunk__56867_56907,i__56869_56909);
var name_56911 = cljs.core.nth.call(null,vec__56870_56910,(0),null);
var map__56873_56912 = cljs.core.nth.call(null,vec__56870_56910,(1),null);
var map__56873_56913__$1 = ((((!((map__56873_56912 == null)))?((((map__56873_56912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56873_56912.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56873_56912):map__56873_56912);
var doc_56914 = cljs.core.get.call(null,map__56873_56913__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_56915 = cljs.core.get.call(null,map__56873_56913__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_56911);

cljs.core.println.call(null," ",arglists_56915);

if(cljs.core.truth_(doc_56914)){
cljs.core.println.call(null," ",doc_56914);
} else {
}

var G__56916 = seq__56866_56906;
var G__56917 = chunk__56867_56907;
var G__56918 = count__56868_56908;
var G__56919 = (i__56869_56909 + (1));
seq__56866_56906 = G__56916;
chunk__56867_56907 = G__56917;
count__56868_56908 = G__56918;
i__56869_56909 = G__56919;
continue;
} else {
var temp__5278__auto___56920 = cljs.core.seq.call(null,seq__56866_56906);
if(temp__5278__auto___56920){
var seq__56866_56921__$1 = temp__5278__auto___56920;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56866_56921__$1)){
var c__29370__auto___56922 = cljs.core.chunk_first.call(null,seq__56866_56921__$1);
var G__56923 = cljs.core.chunk_rest.call(null,seq__56866_56921__$1);
var G__56924 = c__29370__auto___56922;
var G__56925 = cljs.core.count.call(null,c__29370__auto___56922);
var G__56926 = (0);
seq__56866_56906 = G__56923;
chunk__56867_56907 = G__56924;
count__56868_56908 = G__56925;
i__56869_56909 = G__56926;
continue;
} else {
var vec__56875_56927 = cljs.core.first.call(null,seq__56866_56921__$1);
var name_56928 = cljs.core.nth.call(null,vec__56875_56927,(0),null);
var map__56878_56929 = cljs.core.nth.call(null,vec__56875_56927,(1),null);
var map__56878_56930__$1 = ((((!((map__56878_56929 == null)))?((((map__56878_56929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56878_56929.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56878_56929):map__56878_56929);
var doc_56931 = cljs.core.get.call(null,map__56878_56930__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_56932 = cljs.core.get.call(null,map__56878_56930__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_56928);

cljs.core.println.call(null," ",arglists_56932);

if(cljs.core.truth_(doc_56931)){
cljs.core.println.call(null," ",doc_56931);
} else {
}

var G__56933 = cljs.core.next.call(null,seq__56866_56921__$1);
var G__56934 = null;
var G__56935 = (0);
var G__56936 = (0);
seq__56866_56906 = G__56933;
chunk__56867_56907 = G__56934;
count__56868_56908 = G__56935;
i__56869_56909 = G__56936;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5278__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5278__auto__)){
var fnspec = temp__5278__auto__;
cljs.core.print.call(null,"Spec");

var seq__56880 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__56881 = null;
var count__56882 = (0);
var i__56883 = (0);
while(true){
if((i__56883 < count__56882)){
var role = cljs.core._nth.call(null,chunk__56881,i__56883);
var temp__5278__auto___56937__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___56937__$1)){
var spec_56938 = temp__5278__auto___56937__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_56938));
} else {
}

var G__56939 = seq__56880;
var G__56940 = chunk__56881;
var G__56941 = count__56882;
var G__56942 = (i__56883 + (1));
seq__56880 = G__56939;
chunk__56881 = G__56940;
count__56882 = G__56941;
i__56883 = G__56942;
continue;
} else {
var temp__5278__auto____$1 = cljs.core.seq.call(null,seq__56880);
if(temp__5278__auto____$1){
var seq__56880__$1 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56880__$1)){
var c__29370__auto__ = cljs.core.chunk_first.call(null,seq__56880__$1);
var G__56943 = cljs.core.chunk_rest.call(null,seq__56880__$1);
var G__56944 = c__29370__auto__;
var G__56945 = cljs.core.count.call(null,c__29370__auto__);
var G__56946 = (0);
seq__56880 = G__56943;
chunk__56881 = G__56944;
count__56882 = G__56945;
i__56883 = G__56946;
continue;
} else {
var role = cljs.core.first.call(null,seq__56880__$1);
var temp__5278__auto___56947__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___56947__$2)){
var spec_56948 = temp__5278__auto___56947__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_56948));
} else {
}

var G__56949 = cljs.core.next.call(null,seq__56880__$1);
var G__56950 = null;
var G__56951 = (0);
var G__56952 = (0);
seq__56880 = G__56949;
chunk__56881 = G__56950;
count__56882 = G__56951;
i__56883 = G__56952;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1497481560794