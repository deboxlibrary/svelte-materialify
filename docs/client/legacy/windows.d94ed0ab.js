import{_ as t,a as n,b as e,c as r,i as a,s as c,d as i,S as o,B as s,G as f,e as u,f as $,g as l,h,j as d,k as m,l as p,m as v,n as g,o as w,p as x,x as E,q as y,t as I,r as b,u as W,v as R,w as D,a8 as H,K as O,L as V,M as C,z as j}from"./client.c6131498.js";import{M as S}from"./MDXLayout.c14d7156.js";import"./Meta.f42f1077.js";import{W as L,a as P}from"./WindowItem.38551633.js";import{s as A,E as T}from"./Playground.7edcd6c4.js";function k(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,c=n(t);if(r){var i=n(this).constructor;a=Reflect.construct(c,arguments,i)}else a=c.apply(this,arguments);return e(this,a)}}function B(t){var n,e,r;return{c:function(){n=l("div"),e=l("h4"),r=R("Window Item 1"),this.h()},l:function(t){n=m(t,"DIV",{class:!0});var a=p(n);e=m(a,"H4",{});var c=p(e);r=D(c,"Window Item 1"),c.forEach(v),a.forEach(v),this.h()},h:function(){g(n,"class","slide red svelte-1y8wrmd")},m:function(t,a){x(t,n,a),E(n,e),E(e,r)},d:function(t){t&&v(n)}}}function N(t){var n,e,r;return{c:function(){n=l("div"),e=l("h4"),r=R("Window Item 2"),this.h()},l:function(t){n=m(t,"DIV",{class:!0});var a=p(n);e=m(a,"H4",{});var c=p(e);r=D(c,"Window Item 2"),c.forEach(v),a.forEach(v),this.h()},h:function(){g(n,"class","slide green svelte-1y8wrmd")},m:function(t,a){x(t,n,a),E(n,e),E(e,r)},d:function(t){t&&v(n)}}}function _(t){var n,e,r;return{c:function(){n=l("div"),e=l("h4"),r=R("Window Item 3"),this.h()},l:function(t){n=m(t,"DIV",{class:!0});var a=p(n);e=m(a,"H4",{});var c=p(e);r=D(c,"Window Item 3"),c.forEach(v),a.forEach(v),this.h()},h:function(){g(n,"class","slide blue svelte-1y8wrmd")},m:function(t,a){x(t,n,a),E(n,e),E(e,r)},d:function(t){t&&v(n)}}}function z(t){var n,e,r,a,c,i;return n=new P({props:{$$slots:{default:[B]},$$scope:{ctx:t}}}),r=new P({props:{$$slots:{default:[N]},$$scope:{ctx:t}}}),c=new P({props:{$$slots:{default:[_]},$$scope:{ctx:t}}}),{c:function(){u(n.$$.fragment),e=$(),u(r.$$.fragment),a=$(),u(c.$$.fragment)},l:function(t){h(n.$$.fragment,t),e=d(t),h(r.$$.fragment,t),a=d(t),h(c.$$.fragment,t)},m:function(t,o){w(n,t,o),x(t,e,o),w(r,t,o),x(t,a,o),w(c,t,o),i=!0},p:function(t,e){var a={};4&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);var i={};4&e&&(i.$$scope={dirty:e,ctx:t}),r.$set(i);var o={};4&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o)},i:function(t){i||(I(n.$$.fragment,t),I(r.$$.fragment,t),I(c.$$.fragment,t),i=!0)},o:function(t){b(n.$$.fragment,t),b(r.$$.fragment,t),b(c.$$.fragment,t),i=!1},d:function(t){W(n,t),t&&v(e),W(r,t),t&&v(a),W(c,t)}}}function M(t){var n;return{c:function(){n=R("Left")},l:function(t){n=D(t,"Left")},m:function(t,e){x(t,n,e)},d:function(t){t&&v(n)}}}function X(t){var n;return{c:function(){n=R("Right")},l:function(t){n=D(t,"Right")},m:function(t,e){x(t,n,e)},d:function(t){t&&v(n)}}}function Y(t){var n,e,r,a,c,i,o,R,D;return n=new L({props:{$$slots:{default:[z]},$$scope:{ctx:t}}}),t[1](n),(i=new s({props:{$$slots:{default:[M]},$$scope:{ctx:t}}})).$on("click",(function(){f(t[0].previous)&&t[0].previous.apply(this,arguments)})),(R=new s({props:{$$slots:{default:[X]},$$scope:{ctx:t}}})).$on("click",(function(){f(t[0].next)&&t[0].next.apply(this,arguments)})),{c:function(){u(n.$$.fragment),e=$(),r=l("br"),a=$(),c=l("div"),u(i.$$.fragment),o=$(),u(R.$$.fragment),this.h()},l:function(t){h(n.$$.fragment,t),e=d(t),r=m(t,"BR",{}),a=d(t),c=m(t,"DIV",{class:!0});var s=p(c);h(i.$$.fragment,s),o=d(s),h(R.$$.fragment,s),s.forEach(v),this.h()},h:function(){g(c,"class","d-flex justify-space-between")},m:function(t,s){w(n,t,s),x(t,e,s),x(t,r,s),x(t,a,s),x(t,c,s),w(i,c,null),E(c,o),w(R,c,null),D=!0},p:function(e,r){var a=y(r,1)[0];t=e;var c={};4&a&&(c.$$scope={dirty:a,ctx:t}),n.$set(c);var o={};4&a&&(o.$$scope={dirty:a,ctx:t}),i.$set(o);var s={};4&a&&(s.$$scope={dirty:a,ctx:t}),R.$set(s)},i:function(t){D||(I(n.$$.fragment,t),I(i.$$.fragment,t),I(R.$$.fragment,t),D=!0)},o:function(t){b(n.$$.fragment,t),b(i.$$.fragment,t),b(R.$$.fragment,t),D=!1},d:function(o){t[1](null),W(n,o),o&&v(e),o&&v(r),o&&v(a),o&&v(c),W(i),W(R)}}}function q(t,n,e){var r;return[r,function(t){H[t?"unshift":"push"]((function(){e(0,r=t)}))}]}var G=function(n){t(s,o);var e=k(s);function s(t){var n;return r(this,s),n=e.call(this),a(i(n),t,q,Y,c,{}),n}return s}();function K(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,c=n(t);if(r){var i=n(this).constructor;a=Reflect.construct(c,arguments,i)}else a=c.apply(this,arguments);return e(this,a)}}function U(t){var n,e,r;return{c:function(){n=l("div"),e=l("h4"),r=R("Window Item 1"),this.h()},l:function(t){n=m(t,"DIV",{class:!0});var a=p(n);e=m(a,"H4",{});var c=p(e);r=D(c,"Window Item 1"),c.forEach(v),a.forEach(v),this.h()},h:function(){g(n,"class","slide red svelte-1y8wrmd")},m:function(t,a){x(t,n,a),E(n,e),E(e,r)},d:function(t){t&&v(n)}}}function F(t){var n,e,r;return{c:function(){n=l("div"),e=l("h4"),r=R("Window Item 2"),this.h()},l:function(t){n=m(t,"DIV",{class:!0});var a=p(n);e=m(a,"H4",{});var c=p(e);r=D(c,"Window Item 2"),c.forEach(v),a.forEach(v),this.h()},h:function(){g(n,"class","slide green svelte-1y8wrmd")},m:function(t,a){x(t,n,a),E(n,e),E(e,r)},d:function(t){t&&v(n)}}}function J(t){var n,e,r;return{c:function(){n=l("div"),e=l("h4"),r=R("Window Item 3"),this.h()},l:function(t){n=m(t,"DIV",{class:!0});var a=p(n);e=m(a,"H4",{});var c=p(e);r=D(c,"Window Item 3"),c.forEach(v),a.forEach(v),this.h()},h:function(){g(n,"class","slide blue svelte-1y8wrmd")},m:function(t,a){x(t,n,a),E(n,e),E(e,r)},d:function(t){t&&v(n)}}}function Q(t){var n,e,r,a,c,i;return n=new P({props:{$$slots:{default:[U]},$$scope:{ctx:t}}}),r=new P({props:{$$slots:{default:[F]},$$scope:{ctx:t}}}),c=new P({props:{$$slots:{default:[J]},$$scope:{ctx:t}}}),{c:function(){u(n.$$.fragment),e=$(),u(r.$$.fragment),a=$(),u(c.$$.fragment)},l:function(t){h(n.$$.fragment,t),e=d(t),h(r.$$.fragment,t),a=d(t),h(c.$$.fragment,t)},m:function(t,o){w(n,t,o),x(t,e,o),w(r,t,o),x(t,a,o),w(c,t,o),i=!0},p:function(t,e){var a={};4&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);var i={};4&e&&(i.$$scope={dirty:e,ctx:t}),r.$set(i);var o={};4&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o)},i:function(t){i||(I(n.$$.fragment,t),I(r.$$.fragment,t),I(c.$$.fragment,t),i=!0)},o:function(t){b(n.$$.fragment,t),b(r.$$.fragment,t),b(c.$$.fragment,t),i=!1},d:function(t){W(n,t),t&&v(e),W(r,t),t&&v(a),W(c,t)}}}function Z(t){var n;return{c:function(){n=R("Left")},l:function(t){n=D(t,"Left")},m:function(t,e){x(t,n,e)},d:function(t){t&&v(n)}}}function tt(t){var n;return{c:function(){n=R("Right")},l:function(t){n=D(t,"Right")},m:function(t,e){x(t,n,e)},d:function(t){t&&v(n)}}}function nt(t){var n,e,r,a,c,i,o,R,D;return n=new L({props:{vertical:!0,$$slots:{default:[Q]},$$scope:{ctx:t}}}),t[1](n),(i=new s({props:{$$slots:{default:[Z]},$$scope:{ctx:t}}})).$on("click",(function(){f(t[0].previous)&&t[0].previous.apply(this,arguments)})),(R=new s({props:{$$slots:{default:[tt]},$$scope:{ctx:t}}})).$on("click",(function(){f(t[0].next)&&t[0].next.apply(this,arguments)})),{c:function(){u(n.$$.fragment),e=$(),r=l("br"),a=$(),c=l("div"),u(i.$$.fragment),o=$(),u(R.$$.fragment),this.h()},l:function(t){h(n.$$.fragment,t),e=d(t),r=m(t,"BR",{}),a=d(t),c=m(t,"DIV",{class:!0});var s=p(c);h(i.$$.fragment,s),o=d(s),h(R.$$.fragment,s),s.forEach(v),this.h()},h:function(){g(c,"class","d-flex justify-space-between")},m:function(t,s){w(n,t,s),x(t,e,s),x(t,r,s),x(t,a,s),x(t,c,s),w(i,c,null),E(c,o),w(R,c,null),D=!0},p:function(e,r){var a=y(r,1)[0];t=e;var c={};4&a&&(c.$$scope={dirty:a,ctx:t}),n.$set(c);var o={};4&a&&(o.$$scope={dirty:a,ctx:t}),i.$set(o);var s={};4&a&&(s.$$scope={dirty:a,ctx:t}),R.$set(s)},i:function(t){D||(I(n.$$.fragment,t),I(i.$$.fragment,t),I(R.$$.fragment,t),D=!0)},o:function(t){b(n.$$.fragment,t),b(i.$$.fragment,t),b(R.$$.fragment,t),D=!1},d:function(o){t[1](null),W(n,o),o&&v(e),o&&v(r),o&&v(a),o&&v(c),W(i),W(R)}}}function et(t,n,e){var r;return[r,function(t){H[t?"unshift":"push"]((function(){e(0,r=t)}))}]}var rt=function(n){t(s,o);var e=K(s);function s(t){var n;return r(this,s),n=e.call(this),a(i(n),t,et,nt,c,{}),n}return s}();function at(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,c=n(t);if(r){var i=n(this).constructor;a=Reflect.construct(c,arguments,i)}else a=c.apply(this,arguments);return e(this,a)}}function ct(t){var n,e,r;return{c:function(){n=l("div"),e=l("h4"),r=R("Window Item 1"),this.h()},l:function(t){n=m(t,"DIV",{class:!0});var a=p(n);e=m(a,"H4",{});var c=p(e);r=D(c,"Window Item 1"),c.forEach(v),a.forEach(v),this.h()},h:function(){g(n,"class","slide red svelte-1y8wrmd")},m:function(t,a){x(t,n,a),E(n,e),E(e,r)},d:function(t){t&&v(n)}}}function it(t){var n,e,r;return{c:function(){n=l("div"),e=l("h4"),r=R("Window Item 2"),this.h()},l:function(t){n=m(t,"DIV",{class:!0});var a=p(n);e=m(a,"H4",{});var c=p(e);r=D(c,"Window Item 2"),c.forEach(v),a.forEach(v),this.h()},h:function(){g(n,"class","slide green svelte-1y8wrmd")},m:function(t,a){x(t,n,a),E(n,e),E(e,r)},d:function(t){t&&v(n)}}}function ot(t){var n,e,r;return{c:function(){n=l("div"),e=l("h4"),r=R("Window Item 3"),this.h()},l:function(t){n=m(t,"DIV",{class:!0});var a=p(n);e=m(a,"H4",{});var c=p(e);r=D(c,"Window Item 3"),c.forEach(v),a.forEach(v),this.h()},h:function(){g(n,"class","slide blue svelte-1y8wrmd")},m:function(t,a){x(t,n,a),E(n,e),E(e,r)},d:function(t){t&&v(n)}}}function st(t){var n,e,r,a,c,i;return n=new P({props:{$$slots:{default:[ct]},$$scope:{ctx:t}}}),r=new P({props:{$$slots:{default:[it]},$$scope:{ctx:t}}}),c=new P({props:{$$slots:{default:[ot]},$$scope:{ctx:t}}}),{c:function(){u(n.$$.fragment),e=$(),u(r.$$.fragment),a=$(),u(c.$$.fragment)},l:function(t){h(n.$$.fragment,t),e=d(t),h(r.$$.fragment,t),a=d(t),h(c.$$.fragment,t)},m:function(t,o){w(n,t,o),x(t,e,o),w(r,t,o),x(t,a,o),w(c,t,o),i=!0},p:function(t,e){var a={};4&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a);var i={};4&e&&(i.$$scope={dirty:e,ctx:t}),r.$set(i);var o={};4&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o)},i:function(t){i||(I(n.$$.fragment,t),I(r.$$.fragment,t),I(c.$$.fragment,t),i=!0)},o:function(t){b(n.$$.fragment,t),b(r.$$.fragment,t),b(c.$$.fragment,t),i=!1},d:function(t){W(n,t),t&&v(e),W(r,t),t&&v(a),W(c,t)}}}function ft(t){var n;return{c:function(){n=R("Left")},l:function(t){n=D(t,"Left")},m:function(t,e){x(t,n,e)},d:function(t){t&&v(n)}}}function ut(t){var n;return{c:function(){n=R("Right")},l:function(t){n=D(t,"Right")},m:function(t,e){x(t,n,e)},d:function(t){t&&v(n)}}}function $t(t){var n,e,r,a,c,i,o,R,D;return n=new L({props:{reverse:!0,$$slots:{default:[st]},$$scope:{ctx:t}}}),t[1](n),(i=new s({props:{$$slots:{default:[ft]},$$scope:{ctx:t}}})).$on("click",(function(){f(t[0].previous)&&t[0].previous.apply(this,arguments)})),(R=new s({props:{$$slots:{default:[ut]},$$scope:{ctx:t}}})).$on("click",(function(){f(t[0].next)&&t[0].next.apply(this,arguments)})),{c:function(){u(n.$$.fragment),e=$(),r=l("br"),a=$(),c=l("div"),u(i.$$.fragment),o=$(),u(R.$$.fragment),this.h()},l:function(t){h(n.$$.fragment,t),e=d(t),r=m(t,"BR",{}),a=d(t),c=m(t,"DIV",{class:!0});var s=p(c);h(i.$$.fragment,s),o=d(s),h(R.$$.fragment,s),s.forEach(v),this.h()},h:function(){g(c,"class","d-flex justify-space-between")},m:function(t,s){w(n,t,s),x(t,e,s),x(t,r,s),x(t,a,s),x(t,c,s),w(i,c,null),E(c,o),w(R,c,null),D=!0},p:function(e,r){var a=y(r,1)[0];t=e;var c={};4&a&&(c.$$scope={dirty:a,ctx:t}),n.$set(c);var o={};4&a&&(o.$$scope={dirty:a,ctx:t}),i.$set(o);var s={};4&a&&(s.$$scope={dirty:a,ctx:t}),R.$set(s)},i:function(t){D||(I(n.$$.fragment,t),I(i.$$.fragment,t),I(R.$$.fragment,t),D=!0)},o:function(t){b(n.$$.fragment,t),b(i.$$.fragment,t),b(R.$$.fragment,t),D=!1},d:function(o){t[1](null),W(n,o),o&&v(e),o&&v(r),o&&v(a),o&&v(c),W(i),W(R)}}}function lt(t,n,e){var r;return[r,function(t){H[t?"unshift":"push"]((function(){e(0,r=t)}))}]}var ht=function(n){t(s,o);var e=at(s);function s(t){var n;return r(this,s),n=e.call(this),a(i(n),t,lt,$t,c,{}),n}return s}(),dt=Object.freeze({__proto__:null,basic:G,vertical:rt,reverse:ht});function mt(t){let n,e,r,a,c,i,o,s,f,y,H,O,V,C,S,L,P,A,k,B,N,_,z,M,X,Y,q,G,K,U,F,J,Q,Z,tt,nt,et,rt,at,ct,it,ot,st,ft,ut,$t,lt,ht,dt,mt,pt,vt,gt,wt,xt,Et,yt,It,bt,Wt,Rt,Dt,Ht,Ot,Vt,Ct,jt,St,Lt,Pt,At,Tt,kt;return pt=new T({props:{name:"basic"}}),Rt=new T({props:{name:"vertical"}}),Tt=new T({props:{name:"reverse"}}),{c(){n=l("section"),e=l("h1"),r=l("a"),a=l("i"),c=R("Windows"),i=l("p"),o=R("The "),s=l("code"),f=R("Window"),y=R(" component provides the baseline functionality for transitioning content from 1 pane to another. Other components such as "),H=l("code"),O=R("Tabs"),V=R(", "),C=l("code"),S=R("Carousel"),L=R(" and "),P=l("code"),A=R("Stepper"),k=R(" utilize this component at their core."),B=l("section"),N=l("h2"),_=l("a"),z=l("i"),M=R("Examples"),X=l("p"),Y=R("Below is a collection of simple to complex examples."),q=l("section"),G=l("h2"),K=l("a"),U=l("i"),F=R("API"),J=l("ul"),Q=l("li"),Z=l("a"),tt=R("Window"),nt=$(),et=l("li"),rt=l("a"),at=R("WindowItem"),ct=$(),it=l("section"),ot=l("h3"),st=l("a"),ft=l("i"),ut=R("Basic"),$t=l("p"),lt=R("Here is a basic example on how to use "),ht=l("code"),dt=R("Window"),mt=R("."),u(pt.$$.fragment),vt=l("section"),gt=l("h3"),wt=l("a"),xt=l("i"),Et=R("Vertical"),yt=l("p"),It=l("code"),bt=R("Window"),Wt=R(" can be vertical. Vertical windows have Y axis transition instead of X axis transition."),u(Rt.$$.fragment),Dt=l("section"),Ht=l("h3"),Ot=l("a"),Vt=l("i"),Ct=R("Reverse"),jt=l("p"),St=R("Reverse "),Lt=l("code"),Pt=R("Window"),At=R(" always displays reverse transition."),u(Tt.$$.fragment),this.h()},l(t){n=m(t,"SECTION",{});var u=p(n);e=m(u,"H1",{class:!0,id:!0});var $=p(e);r=m($,"A",{href:!0,"aria-hidden":!0,tabindex:!0});var l=p(r);a=m(l,"I",{class:!0}),p(a).forEach(v),l.forEach(v),c=D($,"Windows"),$.forEach(v),i=m(u,"P",{});var g=p(i);o=D(g,"The "),s=m(g,"CODE",{});var w=p(s);f=D(w,"Window"),w.forEach(v),y=D(g," component provides the baseline functionality for transitioning content from 1 pane to another. Other components such as "),H=m(g,"CODE",{});var x=p(H);O=D(x,"Tabs"),x.forEach(v),V=D(g,", "),C=m(g,"CODE",{});var E=p(C);S=D(E,"Carousel"),E.forEach(v),L=D(g," and "),P=m(g,"CODE",{});var I=p(P);A=D(I,"Stepper"),I.forEach(v),k=D(g," utilize this component at their core."),g.forEach(v),B=m(u,"SECTION",{});var b=p(B);N=m(b,"H2",{class:!0,id:!0});var W=p(N);_=m(W,"A",{href:!0,"aria-hidden":!0,tabindex:!0});var R=p(_);z=m(R,"I",{class:!0}),p(z).forEach(v),R.forEach(v),M=D(W,"Examples"),W.forEach(v),X=m(b,"P",{});var j=p(X);Y=D(j,"Below is a collection of simple to complex examples."),j.forEach(v),b.forEach(v),q=m(u,"SECTION",{});var T=p(q);G=m(T,"H2",{class:!0,id:!0});var kt=p(G);K=m(kt,"A",{href:!0,"aria-hidden":!0,tabindex:!0});var Bt=p(K);U=m(Bt,"I",{class:!0}),p(U).forEach(v),Bt.forEach(v),F=D(kt,"API"),kt.forEach(v),J=m(T,"UL",{});var Nt=p(J);Q=m(Nt,"LI",{});var _t=p(Q);Z=m(_t,"A",{href:!0,class:!0});var zt=p(Z);tt=D(zt,"Window"),zt.forEach(v),_t.forEach(v),nt=d(Nt),et=m(Nt,"LI",{});var Mt=p(et);rt=m(Mt,"A",{href:!0,class:!0});var Xt=p(rt);at=D(Xt,"WindowItem"),Xt.forEach(v),Mt.forEach(v),ct=d(Nt),Nt.forEach(v),it=m(T,"SECTION",{});var Yt=p(it);ot=m(Yt,"H3",{class:!0,id:!0});var qt=p(ot);st=m(qt,"A",{href:!0,"aria-hidden":!0,tabindex:!0});var Gt=p(st);ft=m(Gt,"I",{class:!0}),p(ft).forEach(v),Gt.forEach(v),ut=D(qt,"Basic"),qt.forEach(v),$t=m(Yt,"P",{});var Kt=p($t);lt=D(Kt,"Here is a basic example on how to use "),ht=m(Kt,"CODE",{});var Ut=p(ht);dt=D(Ut,"Window"),Ut.forEach(v),mt=D(Kt,"."),Kt.forEach(v),h(pt.$$.fragment,Yt),Yt.forEach(v),vt=m(T,"SECTION",{});var Ft=p(vt);gt=m(Ft,"H3",{class:!0,id:!0});var Jt=p(gt);wt=m(Jt,"A",{href:!0,"aria-hidden":!0,tabindex:!0});var Qt=p(wt);xt=m(Qt,"I",{class:!0}),p(xt).forEach(v),Qt.forEach(v),Et=D(Jt,"Vertical"),Jt.forEach(v),yt=m(Ft,"P",{});var Zt=p(yt);It=m(Zt,"CODE",{});var tn=p(It);bt=D(tn,"Window"),tn.forEach(v),Wt=D(Zt," can be vertical. Vertical windows have Y axis transition instead of X axis transition."),Zt.forEach(v),h(Rt.$$.fragment,Ft),Ft.forEach(v),Dt=m(T,"SECTION",{});var nn=p(Dt);Ht=m(nn,"H3",{class:!0,id:!0});var en=p(Ht);Ot=m(en,"A",{href:!0,"aria-hidden":!0,tabindex:!0});var rn=p(Ot);Vt=m(rn,"I",{class:!0}),p(Vt).forEach(v),rn.forEach(v),Ct=D(en,"Reverse"),en.forEach(v),jt=m(nn,"P",{});var an=p(jt);St=D(an,"Reverse "),Lt=m(an,"CODE",{});var cn=p(Lt);Pt=D(cn,"Window"),cn.forEach(v),At=D(an," always displays reverse transition."),an.forEach(v),h(Tt.$$.fragment,nn),nn.forEach(v),T.forEach(v),u.forEach(v),this.h()},h(){g(a,"class","mdi mdi-pound"),g(r,"href","#windows"),g(r,"aria-hidden","true"),g(r,"tabindex","-1"),g(e,"class","heading text-h3 mb-4"),g(e,"id","windows"),g(z,"class","mdi mdi-pound"),g(_,"href","#examples"),g(_,"aria-hidden","true"),g(_,"tabindex","-1"),g(N,"class","heading text-h4 mb-3"),g(N,"id","examples"),g(U,"class","mdi mdi-pound"),g(K,"href","#api"),g(K,"aria-hidden","true"),g(K,"tabindex","-1"),g(G,"class","heading text-h4 mb-3"),g(G,"id","api"),g(Z,"href","/api/Window/"),g(Z,"class","app-link"),g(rt,"href","/api/WindowItem/"),g(rt,"class","app-link"),g(ft,"class","mdi mdi-pound"),g(st,"href","#basic"),g(st,"aria-hidden","true"),g(st,"tabindex","-1"),g(ot,"class","heading text-h5 mb-2"),g(ot,"id","basic"),g(xt,"class","mdi mdi-pound"),g(wt,"href","#vertical"),g(wt,"aria-hidden","true"),g(wt,"tabindex","-1"),g(gt,"class","heading text-h5 mb-2"),g(gt,"id","vertical"),g(Vt,"class","mdi mdi-pound"),g(Ot,"href","#reverse"),g(Ot,"aria-hidden","true"),g(Ot,"tabindex","-1"),g(Ht,"class","heading text-h5 mb-2"),g(Ht,"id","reverse")},m(t,u){x(t,n,u),E(n,e),E(e,r),E(r,a),E(e,c),E(n,i),E(i,o),E(i,s),E(s,f),E(i,y),E(i,H),E(H,O),E(i,V),E(i,C),E(C,S),E(i,L),E(i,P),E(P,A),E(i,k),E(n,B),E(B,N),E(N,_),E(_,z),E(N,M),E(B,X),E(X,Y),E(n,q),E(q,G),E(G,K),E(K,U),E(G,F),E(q,J),E(J,Q),E(Q,Z),E(Z,tt),E(J,nt),E(J,et),E(et,rt),E(rt,at),E(J,ct),E(q,it),E(it,ot),E(ot,st),E(st,ft),E(ot,ut),E(it,$t),E($t,lt),E($t,ht),E(ht,dt),E($t,mt),w(pt,it,null),E(q,vt),E(vt,gt),E(gt,wt),E(wt,xt),E(gt,Et),E(vt,yt),E(yt,It),E(It,bt),E(yt,Wt),w(Rt,vt,null),E(q,Dt),E(Dt,Ht),E(Ht,Ot),E(Ot,Vt),E(Ht,Ct),E(Dt,jt),E(jt,St),E(jt,Lt),E(Lt,Pt),E(jt,At),w(Tt,Dt,null),kt=!0},p:j,i(t){kt||(I(pt.$$.fragment,t),I(Rt.$$.fragment,t),I(Tt.$$.fragment,t),kt=!0)},o(t){b(pt.$$.fragment,t),b(Rt.$$.fragment,t),b(Tt.$$.fragment,t),kt=!1},d(t){t&&v(n),W(pt),W(Rt),W(Tt)}}}function pt(t){let n,e;const r=[vt];let a={$$slots:{default:[mt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)a=O(a,r[t]);return n=new S({props:a}),{c(){u(n.$$.fragment)},l(t){h(n.$$.fragment,t)},m(t,r){w(n,t,r),e=!0},p(t,[e]){const a=0&e?V(r,[C(vt)]):{};2&e&&(a.$$scope={dirty:e,ctx:t}),n.$set(a)},i(t){e||(I(n.$$.fragment,t),e=!0)},o(t){b(n.$$.fragment,t),e=!1},d(t){W(n,t)}}}const vt={title:"Windows"};async function gt(){let t=await this.fetch("examples/components/windows.json");return t=await t.json(),{sources:t}}function wt(t,n,e){let{sources:r}=n;return A([r,dt]),t.$$set=t=>{"sources"in t&&e(0,r=t.sources)},[r]}export default class extends o{constructor(t){super(),a(this,t,wt,pt,c,{sources:0})}}export{vt as metadata,gt as preload};