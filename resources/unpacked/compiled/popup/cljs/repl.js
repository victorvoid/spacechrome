// Compiled by ClojureScript 1.9.562 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__41746){
var map__41771 = p__41746;
var map__41771__$1 = ((((!((map__41771 == null)))?((((map__41771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41771.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41771):map__41771);
var m = map__41771__$1;
var n = cljs.core.get.call(null,map__41771__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__41771__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__41773_41795 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41774_41796 = null;
var count__41775_41797 = (0);
var i__41776_41798 = (0);
while(true){
if((i__41776_41798 < count__41775_41797)){
var f_41799 = cljs.core._nth.call(null,chunk__41774_41796,i__41776_41798);
cljs.core.println.call(null,"  ",f_41799);

var G__41800 = seq__41773_41795;
var G__41801 = chunk__41774_41796;
var G__41802 = count__41775_41797;
var G__41803 = (i__41776_41798 + (1));
seq__41773_41795 = G__41800;
chunk__41774_41796 = G__41801;
count__41775_41797 = G__41802;
i__41776_41798 = G__41803;
continue;
} else {
var temp__5278__auto___41804 = cljs.core.seq.call(null,seq__41773_41795);
if(temp__5278__auto___41804){
var seq__41773_41805__$1 = temp__5278__auto___41804;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41773_41805__$1)){
var c__29370__auto___41806 = cljs.core.chunk_first.call(null,seq__41773_41805__$1);
var G__41807 = cljs.core.chunk_rest.call(null,seq__41773_41805__$1);
var G__41808 = c__29370__auto___41806;
var G__41809 = cljs.core.count.call(null,c__29370__auto___41806);
var G__41810 = (0);
seq__41773_41795 = G__41807;
chunk__41774_41796 = G__41808;
count__41775_41797 = G__41809;
i__41776_41798 = G__41810;
continue;
} else {
var f_41811 = cljs.core.first.call(null,seq__41773_41805__$1);
cljs.core.println.call(null,"  ",f_41811);

var G__41812 = cljs.core.next.call(null,seq__41773_41805__$1);
var G__41813 = null;
var G__41814 = (0);
var G__41815 = (0);
seq__41773_41795 = G__41812;
chunk__41774_41796 = G__41813;
count__41775_41797 = G__41814;
i__41776_41798 = G__41815;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_41816 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28459__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28459__auto__)){
return or__28459__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_41816);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_41816)))?cljs.core.second.call(null,arglists_41816):arglists_41816));
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
var seq__41777_41817 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41778_41818 = null;
var count__41779_41819 = (0);
var i__41780_41820 = (0);
while(true){
if((i__41780_41820 < count__41779_41819)){
var vec__41781_41821 = cljs.core._nth.call(null,chunk__41778_41818,i__41780_41820);
var name_41822 = cljs.core.nth.call(null,vec__41781_41821,(0),null);
var map__41784_41823 = cljs.core.nth.call(null,vec__41781_41821,(1),null);
var map__41784_41824__$1 = ((((!((map__41784_41823 == null)))?((((map__41784_41823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41784_41823.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41784_41823):map__41784_41823);
var doc_41825 = cljs.core.get.call(null,map__41784_41824__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41826 = cljs.core.get.call(null,map__41784_41824__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_41822);

cljs.core.println.call(null," ",arglists_41826);

if(cljs.core.truth_(doc_41825)){
cljs.core.println.call(null," ",doc_41825);
} else {
}

var G__41827 = seq__41777_41817;
var G__41828 = chunk__41778_41818;
var G__41829 = count__41779_41819;
var G__41830 = (i__41780_41820 + (1));
seq__41777_41817 = G__41827;
chunk__41778_41818 = G__41828;
count__41779_41819 = G__41829;
i__41780_41820 = G__41830;
continue;
} else {
var temp__5278__auto___41831 = cljs.core.seq.call(null,seq__41777_41817);
if(temp__5278__auto___41831){
var seq__41777_41832__$1 = temp__5278__auto___41831;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41777_41832__$1)){
var c__29370__auto___41833 = cljs.core.chunk_first.call(null,seq__41777_41832__$1);
var G__41834 = cljs.core.chunk_rest.call(null,seq__41777_41832__$1);
var G__41835 = c__29370__auto___41833;
var G__41836 = cljs.core.count.call(null,c__29370__auto___41833);
var G__41837 = (0);
seq__41777_41817 = G__41834;
chunk__41778_41818 = G__41835;
count__41779_41819 = G__41836;
i__41780_41820 = G__41837;
continue;
} else {
var vec__41786_41838 = cljs.core.first.call(null,seq__41777_41832__$1);
var name_41839 = cljs.core.nth.call(null,vec__41786_41838,(0),null);
var map__41789_41840 = cljs.core.nth.call(null,vec__41786_41838,(1),null);
var map__41789_41841__$1 = ((((!((map__41789_41840 == null)))?((((map__41789_41840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41789_41840.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41789_41840):map__41789_41840);
var doc_41842 = cljs.core.get.call(null,map__41789_41841__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41843 = cljs.core.get.call(null,map__41789_41841__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_41839);

cljs.core.println.call(null," ",arglists_41843);

if(cljs.core.truth_(doc_41842)){
cljs.core.println.call(null," ",doc_41842);
} else {
}

var G__41844 = cljs.core.next.call(null,seq__41777_41832__$1);
var G__41845 = null;
var G__41846 = (0);
var G__41847 = (0);
seq__41777_41817 = G__41844;
chunk__41778_41818 = G__41845;
count__41779_41819 = G__41846;
i__41780_41820 = G__41847;
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

var seq__41791 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__41792 = null;
var count__41793 = (0);
var i__41794 = (0);
while(true){
if((i__41794 < count__41793)){
var role = cljs.core._nth.call(null,chunk__41792,i__41794);
var temp__5278__auto___41848__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___41848__$1)){
var spec_41849 = temp__5278__auto___41848__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_41849));
} else {
}

var G__41850 = seq__41791;
var G__41851 = chunk__41792;
var G__41852 = count__41793;
var G__41853 = (i__41794 + (1));
seq__41791 = G__41850;
chunk__41792 = G__41851;
count__41793 = G__41852;
i__41794 = G__41853;
continue;
} else {
var temp__5278__auto____$1 = cljs.core.seq.call(null,seq__41791);
if(temp__5278__auto____$1){
var seq__41791__$1 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41791__$1)){
var c__29370__auto__ = cljs.core.chunk_first.call(null,seq__41791__$1);
var G__41854 = cljs.core.chunk_rest.call(null,seq__41791__$1);
var G__41855 = c__29370__auto__;
var G__41856 = cljs.core.count.call(null,c__29370__auto__);
var G__41857 = (0);
seq__41791 = G__41854;
chunk__41792 = G__41855;
count__41793 = G__41856;
i__41794 = G__41857;
continue;
} else {
var role = cljs.core.first.call(null,seq__41791__$1);
var temp__5278__auto___41858__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___41858__$2)){
var spec_41859 = temp__5278__auto___41858__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_41859));
} else {
}

var G__41860 = cljs.core.next.call(null,seq__41791__$1);
var G__41861 = null;
var G__41862 = (0);
var G__41863 = (0);
seq__41791 = G__41860;
chunk__41792 = G__41861;
count__41793 = G__41862;
i__41794 = G__41863;
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

//# sourceMappingURL=repl.js.map?rel=1497481544818