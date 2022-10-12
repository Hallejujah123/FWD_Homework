import{F as le,S as ee,i as te,s as se,l as p,a as L,G as w,u as z,m as h,p as v,h as c,c as A,H as C,v as F,q as e,I as M,b as G,J as a,n as W,K as oe,L as ne,x as ce,y as ie,z as ve,M as ue,N as fe,O as _e,f as X,t as Y,C as pe}from"../chunks/index-57583f8e.js";const he=()=>{const l=le("__svelte__");return{page:{subscribe:l.page.subscribe},navigating:{subscribe:l.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:l.navigating.subscribe}},session:l.session,updated:l.updated}},de={subscribe(l){return he().page.subscribe(l)}};function me(l){let t,f,i,r,u,o,s,n,m,b,B,D,g,$,N,S,E,x,V,q,y,I,Z,j;return{c(){t=p("header"),f=p("div"),i=L(),r=p("nav"),u=w("svg"),o=w("path"),s=L(),n=p("ul"),m=p("li"),b=p("a"),B=z("Home"),D=L(),g=p("li"),$=p("a"),N=z("About me"),S=L(),E=p("li"),x=p("a"),V=z("My project"),q=L(),y=w("svg"),I=w("path"),Z=L(),j=p("div"),this.h()},l(d){t=h(d,"HEADER",{class:!0});var _=v(t);f=h(_,"DIV",{class:!0});var ae=v(f);ae.forEach(c),i=A(_),r=h(_,"NAV",{class:!0});var k=v(r);u=C(k,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var J=v(u);o=C(J,"path",{d:!0,class:!0}),v(o).forEach(c),J.forEach(c),s=A(k),n=h(k,"UL",{class:!0});var H=v(n);m=h(H,"LI",{class:!0});var K=v(m);b=h(K,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var O=v(b);B=F(O,"Home"),O.forEach(c),K.forEach(c),D=A(H),g=h(H,"LI",{class:!0});var R=v(g);$=h(R,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var U=v($);N=F(U,"About me"),U.forEach(c),R.forEach(c),S=A(H),E=h(H,"LI",{class:!0});var P=v(E);x=h(P,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var Q=v(x);V=F(Q,"My project"),Q.forEach(c),P.forEach(c),H.forEach(c),q=A(k),y=C(k,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var T=v(y);I=C(T,"path",{d:!0,class:!0}),v(I).forEach(c),T.forEach(c),k.forEach(c),Z=A(_),j=h(_,"DIV",{class:!0});var re=v(j);re.forEach(c),_.forEach(c),this.h()},h(){e(f,"class","corner svelte-15v1box"),e(o,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),e(o,"class","svelte-15v1box"),e(u,"viewBox","0 0 2 3"),e(u,"aria-hidden","true"),e(u,"class","svelte-15v1box"),e(b,"sveltekit:prefetch",""),e(b,"href","/"),e(b,"class","svelte-15v1box"),e(m,"class","svelte-15v1box"),M(m,"active",l[0].url.pathname==="/"),e($,"sveltekit:prefetch",""),e($,"href","/about"),e($,"class","svelte-15v1box"),e(g,"class","svelte-15v1box"),M(g,"active",l[0].url.pathname==="/about"),e(x,"sveltekit:prefetch",""),e(x,"href","/projects"),e(x,"class","svelte-15v1box"),e(E,"class","svelte-15v1box"),M(E,"active",l[0].url.pathname==="/projects"),e(n,"class","svelte-15v1box"),e(I,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),e(I,"class","svelte-15v1box"),e(y,"viewBox","0 0 2 3"),e(y,"aria-hidden","true"),e(y,"class","svelte-15v1box"),e(r,"class","svelte-15v1box"),e(j,"class","corner svelte-15v1box"),e(t,"class","svelte-15v1box")},m(d,_){G(d,t,_),a(t,f),a(t,i),a(t,r),a(r,u),a(u,o),a(r,s),a(r,n),a(n,m),a(m,b),a(b,B),a(n,D),a(n,g),a(g,$),a($,N),a(n,S),a(n,E),a(E,x),a(x,V),a(r,q),a(r,y),a(y,I),a(t,Z),a(t,j)},p(d,[_]){_&1&&M(m,"active",d[0].url.pathname==="/"),_&1&&M(g,"active",d[0].url.pathname==="/about"),_&1&&M(E,"active",d[0].url.pathname==="/projects")},i:W,o:W,d(d){d&&c(t)}}}function be(l,t,f){let i;return oe(l,de,r=>f(0,i=r)),[i]}class ge extends ee{constructor(t){super(),te(this,t,be,me,se,{})}}function $e(l){let t,f,i,r;t=new ge({});const u=l[1].default,o=ne(u,l,l[0],null);return{c(){ce(t.$$.fragment),f=L(),i=p("main"),o&&o.c(),this.h()},l(s){ie(t.$$.fragment,s),f=A(s),i=h(s,"MAIN",{class:!0});var n=v(i);o&&o.l(n),n.forEach(c),this.h()},h(){e(i,"class","svelte-frf2tm")},m(s,n){ve(t,s,n),G(s,f,n),G(s,i,n),o&&o.m(i,null),r=!0},p(s,[n]){o&&o.p&&(!r||n&1)&&ue(o,u,s,s[0],r?_e(u,s[0],n,null):fe(s[0]),null)},i(s){r||(X(t.$$.fragment,s),X(o,s),r=!0)},o(s){Y(t.$$.fragment,s),Y(o,s),r=!1},d(s){pe(t,s),s&&c(f),s&&c(i),o&&o.d(s)}}}function Ee(l,t,f){let{$$slots:i={},$$scope:r}=t;return l.$$set=u=>{"$$scope"in u&&f(0,r=u.$$scope)},[r,i]}class ye extends ee{constructor(t){super(),te(this,t,Ee,$e,se,{})}}export{ye as default};
