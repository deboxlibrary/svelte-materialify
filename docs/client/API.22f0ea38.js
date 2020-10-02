import{S as t,i as e,A as r,e as n,o as a,a as o,c as l,f as s,g as c,h,p as i,d as f,b as d,j as u,k as p,q as m,m as v,t as E,l as g,n as $,P as T,J as D,K as b,H as x,Q as y}from"./client.ba230517.js";import{T as H}from"./Table.012c45d1.js";function N(t,e,r){const n=t.slice();return n[4]=e[r],n}function O(t,e,r){const n=t.slice();return n[1]=e[r],n}function S(t,e,r){const n=t.slice();return n[7]=e[r],n}function A(t,e,r){const n=t.slice();return n[10]=e[r],n}function P(t){let e,r,l,d,v,E,g,$,T,D,b,y,H,N,O,S=t[10].name+"",A=t[10].type.text+"",P=t[10].defaultValue+"",w=(t[10].description||"Missing Description")+"";return{c(){e=n("tr"),r=n("td"),l=n("span"),d=a(S),v=o(),E=n("span"),g=a(A),$=o(),T=n("td"),D=n("code"),b=a(P),y=o(),H=n("td"),N=a(w),O=o(),this.h()},l(t){e=s(t,"TR",{});var n=c(e);r=s(n,"TD",{});var a=c(r);l=s(a,"SPAN",{class:!0});var o=c(l);d=i(o,S),o.forEach(h),v=f(a),E=s(a,"SPAN",{class:!0});var u=c(E);g=i(u,A),u.forEach(h),a.forEach(h),$=f(n),T=s(n,"TD",{});var p=c(T);D=s(p,"CODE",{});var m=c(D);b=i(m,P),m.forEach(h),p.forEach(h),y=f(n),H=s(n,"TD",{});var x=c(H);N=i(x,w),x.forEach(h),O=f(n),n.forEach(h),this.h()},h(){u(l,"class","font-weight-bold text-mono"),u(E,"class","d-block text-caption text--secondary")},m(t,n){p(t,e,n),m(e,r),m(r,l),m(l,d),m(r,v),m(r,E),m(E,g),m(e,$),m(e,T),m(T,D),m(D,b),m(e,y),m(e,H),m(H,N),m(e,O)},p(t,e){1&e&&S!==(S=t[10].name+"")&&x(d,S),1&e&&A!==(A=t[10].type.text+"")&&x(g,A),1&e&&P!==(P=t[10].defaultValue+"")&&x(b,P),1&e&&w!==(w=(t[10].description||"Missing Description")+"")&&x(N,w)},d(t){t&&h(e)}}}function w(t){let e,r="public"===t[10].visibility&&P(t);return{c(){r&&r.c(),e=T()},l(t){r&&r.l(t),e=T()},m(t,n){r&&r.m(t,n),p(t,e,n)},p(t,n){"public"===t[10].visibility?r?r.p(t,n):(r=P(t),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null)},d(t){r&&r.d(t),t&&h(e)}}}function R(t){let e,r,l,d,u,v,E,g,$,T,D,b,x=t[0].data,H=[];for(let e=0;e<x.length;e+=1)H[e]=w(A(t,x,e));return{c(){e=n("thead"),r=n("tr"),l=n("th"),d=a("Prop"),u=o(),v=n("th"),E=a("Default"),g=o(),$=n("th"),T=a("Description"),D=o(),b=n("tbody");for(let t=0;t<H.length;t+=1)H[t].c()},l(t){e=s(t,"THEAD",{});var n=c(e);r=s(n,"TR",{});var a=c(r);l=s(a,"TH",{});var o=c(l);d=i(o,"Prop"),o.forEach(h),u=f(a),v=s(a,"TH",{});var p=c(v);E=i(p,"Default"),p.forEach(h),g=f(a),$=s(a,"TH",{});var m=c($);T=i(m,"Description"),m.forEach(h),a.forEach(h),n.forEach(h),D=f(t),b=s(t,"TBODY",{});var x=c(b);for(let t=0;t<H.length;t+=1)H[t].l(x);x.forEach(h)},m(t,n){p(t,e,n),m(e,r),m(r,l),m(l,d),m(r,u),m(r,v),m(v,E),m(r,g),m(r,$),m($,T),p(t,D,n),p(t,b,n);for(let t=0;t<H.length;t+=1)H[t].m(b,null)},p(t,e){if(1&e){let r;for(x=t[0].data,r=0;r<x.length;r+=1){const n=A(t,x,r);H[r]?H[r].p(n,e):(H[r]=w(n),H[r].c(),H[r].m(b,null))}for(;r<H.length;r+=1)H[r].d(1);H.length=x.length}},d(t){t&&h(e),t&&h(D),t&&h(b),y(H,t)}}}function I(t){let e,r,T,D,b,x,y,N;return y=new H({props:{style:"border: thin solid var(--theme-dividers)",$$slots:{default:[C]},$$scope:{ctx:t}}}),{c(){e=n("section"),r=n("h3"),T=n("a"),D=n("i"),b=a("\n      Events"),x=o(),l(y.$$.fragment),this.h()},l(t){e=s(t,"SECTION",{});var n=c(e);r=s(n,"H3",{class:!0,id:!0});var a=c(r);T=s(a,"A",{href:!0,tabindex:!0,"aria-hidden":!0});var o=c(T);D=s(o,"I",{class:!0}),c(D).forEach(h),o.forEach(h),b=i(a,"\n      Events"),a.forEach(h),x=f(n),d(y.$$.fragment,n),n.forEach(h),this.h()},h(){u(D,"class","mdi mdi-pound"),u(T,"href","#events"),u(T,"tabindex","-1"),u(T,"aria-hidden","true"),u(r,"class","heading text-h5 mb-2"),u(r,"id","events")},m(t,n){p(t,e,n),m(e,r),m(r,T),m(T,D),m(r,b),m(e,x),v(y,e,null),N=!0},p(t,e){const r={};8193&e&&(r.$$scope={dirty:e,ctx:t}),y.$set(r)},i(t){N||(E(y.$$.fragment,t),N=!0)},o(t){g(y.$$.fragment,t),N=!1},d(t){t&&h(e),$(y)}}}function M(t){let e,r,l,d,v,E,g,$,T,D,b=t[7].name+"",y=J(t[7],"returns","DOMEvent")+"",H=(t[7].description||"DOM Event")+"";return{c(){e=n("tr"),r=n("td"),l=a(b),d=o(),v=n("td"),E=a(y),g=o(),$=n("td"),T=a(H),D=o(),this.h()},l(t){e=s(t,"TR",{});var n=c(e);r=s(n,"TD",{class:!0});var a=c(r);l=i(a,b),a.forEach(h),d=f(n),v=s(n,"TD",{});var o=c(v);E=i(o,y),o.forEach(h),g=f(n),$=s(n,"TD",{});var u=c($);T=i(u,H),u.forEach(h),D=f(n),n.forEach(h),this.h()},h(){u(r,"class","font-weight-bold text-mono")},m(t,n){p(t,e,n),m(e,r),m(r,l),m(e,d),m(e,v),m(v,E),m(e,g),m(e,$),m($,T),m(e,D)},p(t,e){1&e&&b!==(b=t[7].name+"")&&x(l,b),1&e&&y!==(y=J(t[7],"returns","DOMEvent")+"")&&x(E,y),1&e&&H!==(H=(t[7].description||"DOM Event")+"")&&x(T,H)},d(t){t&&h(e)}}}function C(t){let e,r,l,d,u,v,E,g,$,T,D,b,x=t[0].events,H=[];for(let e=0;e<x.length;e+=1)H[e]=M(S(t,x,e));return{c(){e=n("thead"),r=n("tr"),l=n("th"),d=a("Event"),u=o(),v=n("th"),E=a("Returns"),g=o(),$=n("th"),T=a("Description"),D=o(),b=n("tbody");for(let t=0;t<H.length;t+=1)H[t].c()},l(t){e=s(t,"THEAD",{});var n=c(e);r=s(n,"TR",{});var a=c(r);l=s(a,"TH",{});var o=c(l);d=i(o,"Event"),o.forEach(h),u=f(a),v=s(a,"TH",{});var p=c(v);E=i(p,"Returns"),p.forEach(h),g=f(a),$=s(a,"TH",{});var m=c($);T=i(m,"Description"),m.forEach(h),a.forEach(h),n.forEach(h),D=f(t),b=s(t,"TBODY",{});var x=c(b);for(let t=0;t<H.length;t+=1)H[t].l(x);x.forEach(h)},m(t,n){p(t,e,n),m(e,r),m(r,l),m(l,d),m(r,u),m(r,v),m(v,E),m(r,g),m(r,$),m($,T),p(t,D,n),p(t,b,n);for(let t=0;t<H.length;t+=1)H[t].m(b,null)},p(t,e){if(1&e){let r;for(x=t[0].events,r=0;r<x.length;r+=1){const n=S(t,x,r);H[r]?H[r].p(n,e):(H[r]=M(n),H[r].c(),H[r].m(b,null))}for(;r<H.length;r+=1)H[r].d(1);H.length=x.length}},d(t){t&&h(e),t&&h(D),t&&h(b),y(H,t)}}}function k(t){let e,r,T,D,b,x,y,N;return y=new H({props:{style:"border: thin solid var(--theme-dividers)",$$slots:{default:[V]},$$scope:{ctx:t}}}),{c(){e=n("section"),r=n("h3"),T=n("a"),D=n("i"),b=a("\n      Slots"),x=o(),l(y.$$.fragment),this.h()},l(t){e=s(t,"SECTION",{});var n=c(e);r=s(n,"H3",{class:!0,id:!0});var a=c(r);T=s(a,"A",{href:!0,tabindex:!0,"aria-hidden":!0});var o=c(T);D=s(o,"I",{class:!0}),c(D).forEach(h),o.forEach(h),b=i(a,"\n      Slots"),a.forEach(h),x=f(n),d(y.$$.fragment,n),n.forEach(h),this.h()},h(){u(D,"class","mdi mdi-pound"),u(T,"href","#slots"),u(T,"tabindex","-1"),u(T,"aria-hidden","true"),u(r,"class","heading text-h5 mb-2"),u(r,"id","slots")},m(t,n){p(t,e,n),m(e,r),m(r,T),m(T,D),m(r,b),m(e,x),v(y,e,null),N=!0},p(t,e){const r={};8193&e&&(r.$$scope={dirty:e,ctx:t}),y.$set(r)},i(t){N||(E(y.$$.fragment,t),N=!0)},o(t){g(y.$$.fragment,t),N=!1},d(t){t&&h(e),$(y)}}}function j(t){let e;return{c(){e=a("None")},l(t){e=i(t,"None")},m(t,r){p(t,e,r)},d(t){t&&h(e)}}}function B(t){let e,r,o,l=t[4].name+"";return{c(){e=n("code"),r=a(l),o=a("\n                ;")},l(t){e=s(t,"CODE",{});var n=c(e);r=i(n,l),n.forEach(h),o=i(t,"\n                ;")},m(t,n){p(t,e,n),m(e,r),p(t,o,n)},p(t,e){1&e&&l!==(l=t[4].name+"")&&x(r,l)},d(t){t&&h(e),t&&h(o)}}}function Y(t){let e,r,l,d,v,E,g,$,T,D=t[1].name+"",b=(t[1].description||"No Description")+"",H=t[1].parameters,O=[];for(let e=0;e<H.length;e+=1)O[e]=B(N(t,H,e));let S=null;return H.length||(S=j()),{c(){e=n("tr"),r=n("td"),l=a(D),d=o(),v=n("td");for(let t=0;t<O.length;t+=1)O[t].c();S&&S.c(),E=o(),g=n("td"),$=a(b),T=o(),this.h()},l(t){e=s(t,"TR",{});var n=c(e);r=s(n,"TD",{class:!0});var a=c(r);l=i(a,D),a.forEach(h),d=f(n),v=s(n,"TD",{});var o=c(v);for(let t=0;t<O.length;t+=1)O[t].l(o);S&&S.l(o),o.forEach(h),E=f(n),g=s(n,"TD",{});var u=c(g);$=i(u,b),u.forEach(h),T=f(n),n.forEach(h),this.h()},h(){u(r,"class","font-weight-bold text-mono")},m(t,n){p(t,e,n),m(e,r),m(r,l),m(e,d),m(e,v);for(let t=0;t<O.length;t+=1)O[t].m(v,null);S&&S.m(v,null),m(e,E),m(e,g),m(g,$),m(e,T)},p(t,e){if(1&e&&D!==(D=t[1].name+"")&&x(l,D),1&e){let r;for(H=t[1].parameters,r=0;r<H.length;r+=1){const n=N(t,H,r);O[r]?O[r].p(n,e):(O[r]=B(n),O[r].c(),O[r].m(v,null))}for(;r<O.length;r+=1)O[r].d(1);O.length=H.length,H.length?S&&(S.d(1),S=null):S||(S=j(),S.c(),S.m(v,null))}1&e&&b!==(b=(t[1].description||"No Description")+"")&&x($,b)},d(t){t&&h(e),y(O,t),S&&S.d()}}}function V(t){let e,r,l,d,u,v,E,g,$,T,D,b,x=t[0].slots,H=[];for(let e=0;e<x.length;e+=1)H[e]=Y(O(t,x,e));return{c(){e=n("thead"),r=n("tr"),l=n("th"),d=a("Slot"),u=o(),v=n("th"),E=a("Slot Props"),g=o(),$=n("th"),T=a("Description"),D=o(),b=n("tbody");for(let t=0;t<H.length;t+=1)H[t].c()},l(t){e=s(t,"THEAD",{});var n=c(e);r=s(n,"TR",{});var a=c(r);l=s(a,"TH",{});var o=c(l);d=i(o,"Slot"),o.forEach(h),u=f(a),v=s(a,"TH",{});var p=c(v);E=i(p,"Slot Props"),p.forEach(h),g=f(a),$=s(a,"TH",{});var m=c($);T=i(m,"Description"),m.forEach(h),a.forEach(h),n.forEach(h),D=f(t),b=s(t,"TBODY",{});var x=c(b);for(let t=0;t<H.length;t+=1)H[t].l(x);x.forEach(h)},m(t,n){p(t,e,n),m(e,r),m(r,l),m(l,d),m(r,u),m(r,v),m(v,E),m(r,g),m(r,$),m($,T),p(t,D,n),p(t,b,n);for(let t=0;t<H.length;t+=1)H[t].m(b,null)},p(t,e){if(1&e){let r;for(x=t[0].slots,r=0;r<x.length;r+=1){const n=O(t,x,r);H[r]?H[r].p(n,e):(H[r]=Y(n),H[r].c(),H[r].m(b,null))}for(;r<H.length;r+=1)H[r].d(1);H.length=x.length}},d(t){t&&h(e),t&&h(D),t&&h(b),y(H,t)}}}function q(t){let e,r,x,y,N,O,S,A,P,w,M;S=new H({props:{style:"border: thin solid var(--theme-dividers)",$$slots:{default:[R]},$$scope:{ctx:t}}});let C=0!==t[0].events.length&&I(t),j=0!==t[0].slots.length&&k(t);return{c(){e=n("section"),r=n("h3"),x=n("a"),y=n("i"),N=a("\n    Props"),O=o(),l(S.$$.fragment),A=o(),C&&C.c(),P=o(),j&&j.c(),w=T(),this.h()},l(t){e=s(t,"SECTION",{});var n=c(e);r=s(n,"H3",{class:!0,id:!0});var a=c(r);x=s(a,"A",{href:!0,tabindex:!0,"aria-hidden":!0});var o=c(x);y=s(o,"I",{class:!0}),c(y).forEach(h),o.forEach(h),N=i(a,"\n    Props"),a.forEach(h),O=f(n),d(S.$$.fragment,n),n.forEach(h),A=f(t),C&&C.l(t),P=f(t),j&&j.l(t),w=T(),this.h()},h(){u(y,"class","mdi mdi-pound"),u(x,"href","#props"),u(x,"tabindex","-1"),u(x,"aria-hidden","true"),u(r,"class","heading text-h5 mb-2"),u(r,"id","props")},m(t,n){p(t,e,n),m(e,r),m(r,x),m(x,y),m(r,N),m(e,O),v(S,e,null),p(t,A,n),C&&C.m(t,n),p(t,P,n),j&&j.m(t,n),p(t,w,n),M=!0},p(t,[e]){const r={};8193&e&&(r.$$scope={dirty:e,ctx:t}),S.$set(r),0!==t[0].events.length?C?(C.p(t,e),1&e&&E(C,1)):(C=I(t),C.c(),E(C,1),C.m(P.parentNode,P)):C&&(D(),g(C,1,1,()=>{C=null}),b()),0!==t[0].slots.length?j?(j.p(t,e),1&e&&E(j,1)):(j=k(t),j.c(),E(j,1),j.m(w.parentNode,w)):j&&(D(),g(j,1,1,()=>{j=null}),b())},i(t){M||(E(S.$$.fragment,t),E(C),E(j),M=!0)},o(t){g(S.$$.fragment,t),g(C),g(j),M=!1},d(t){t&&h(e),$(S),t&&h(A),C&&C.d(t),t&&h(P),j&&j.d(t),t&&h(w)}}}function J(t,e,r){if(0!==t.keywords.length){const r=t.keywords.find(t=>t.name===e);if(r)return r.description}return r}function K(t,e,r){let{doc:n}=e;return t.$$set=t=>{"doc"in t&&r(0,n=t.doc)},[n]}class Q extends t{constructor(t){super(),e(this,t,K,q,r,{doc:0})}}export{Q as A};
