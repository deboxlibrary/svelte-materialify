import{S as e,i as a,s,a as t,e as r,d as n,f as o,g as c,h as i,k as l,q as d,x as p,t as m,l as f,j as h,w as u,J as $,K as b,Q as g,v as x,P as v,o as E,p as k,E as y,af as w,H as I,F as j,c as C,b as A,m as B,u as P,n as S,I as D,a0 as T,a1 as L,a2 as O,G as N,a3 as H}from"./client.ba230517.js";import"./index.b94f33cd.js";import"./ItemGroup.a55d184a.js";import"./index.e534b65b.js";import"./Input.1dcd5e5c.js";import"./TextField.6de29894.js";import"./Slider.2acb6a1e.js";import"./Menu.487f6902.js";import"./ListItemGroup.a673834d.js";import"./Select.85551c5c.js";import"./Checkbox.87a5e0dc.js";import"./Switch.680fc30b.js";import{M}from"./MDXLayout.aa0fcd4f.js";import"./Meta.c9337a1c.js";import"./Table.012c45d1.js";import"./SlideGroup.2474e9ee.js";import"./SlideItem.e690d6bb.js";import{C as U}from"./CodeBlock.e87a4089.js";import{E as G,s as Y}from"./Playground.9638741d.js";import{A as _}from"./API.22f0ea38.js";import{P as z}from"./Playground.dc9a641c.js";const R=e=>({item:1&e}),F=e=>({item:e[6]}),V=e=>({item:1&e}),q=e=>({item:e[6]});function J(e,a,s){const t=e.slice();return t[6]=a[s],t[8]=s,t}function K(e){let a,s;const t=e[4].divider,n=x(t,e,e[3],q),d=n||function(e){let a;return{c(){a=E("/")},l(e){a=k(e,"/")},m(e,s){l(e,a,s)},d(e){e&&i(a)}}}();return{c(){a=r("li"),d&&d.c(),this.h()},l(e){a=o(e,"LI",{class:!0});var s=c(a);d&&d.l(s),s.forEach(i),this.h()},h(){h(a,"class","divider")},m(e,t){l(e,a,t),d&&d.m(a,null),s=!0},p(e,a){n&&n.p&&9&a&&p(n,t,e,e[3],a,V,q)},i(e){s||(m(d,e),s=!0)},o(e){f(d,e),s=!1},d(e){e&&i(a),d&&d.d(e)}}}function Q(e){let a,s,t,n=e[6].text+"",p=[{class:t="s-breadcrumb-item "+e[0].class},e[6].props],m={};for(let e=0;e<p.length;e+=1)m=y(m,p[e]);return{c(){a=r("span"),s=E(n),this.h()},l(e){a=o(e,"SPAN",{class:!0});var t=c(a);s=k(t,n),t.forEach(i),this.h()},h(){w(a,m),u(a,"disabled",e[6].disabled)},m(e,t){l(e,a,t),d(a,s)},p(e,r){1&r&&n!==(n=e[6].text+"")&&I(s,n),w(a,m=j(p,[1&r&&t!==(t="s-breadcrumb-item "+e[0].class)&&{class:t},1&r&&e[6].props])),u(a,"disabled",e[6].disabled)},d(e){e&&i(a)}}}function X(e){let a,s,t,n,p=e[6].text+"",m=[{href:t=e[6].href},{class:n="s-breadcrumb-item "+e[6].class},e[6].props],f={};for(let e=0;e<m.length;e+=1)f=y(f,m[e]);return{c(){a=r("a"),s=E(p),this.h()},l(e){a=o(e,"A",{href:!0,class:!0});var t=c(a);s=k(t,p),t.forEach(i),this.h()},h(){w(a,f),u(a,"disabled",e[6].disabled)},m(e,t){l(e,a,t),d(a,s)},p(e,r){1&r&&p!==(p=e[6].text+"")&&I(s,p),w(a,f=j(m,[1&r&&t!==(t=e[6].href)&&{href:t},1&r&&n!==(n="s-breadcrumb-item "+e[6].class)&&{class:n},1&r&&e[6].props])),u(a,"disabled",e[6].disabled)},d(e){e&&i(a)}}}function W(e){let a,s,h,u,$=0!==e[8]&&K(e);const b=e[4].default,g=x(b,e,e[3],F),E=g||function(e){let a;function s(e,a){return e[6].href?X:Q}let t=s(e),r=t(e);return{c(){r.c(),a=v()},l(e){r.l(e),a=v()},m(e,s){r.m(e,s),l(e,a,s)},p(e,n){t===(t=s(e))&&r?r.p(e,n):(r.d(1),r=t(e),r&&(r.c(),r.m(a.parentNode,a)))},d(e){r.d(e),e&&i(a)}}}(e);return{c(){$&&$.c(),a=t(),s=r("li"),E&&E.c(),h=t()},l(e){$&&$.l(e),a=n(e),s=o(e,"LI",{});var t=c(s);E&&E.l(t),h=n(t),t.forEach(i)},m(e,t){$&&$.m(e,t),l(e,a,t),l(e,s,t),E&&E.m(s,null),d(s,h),u=!0},p(e,a){0!==e[8]&&$.p(e,a),g?g.p&&9&a&&p(g,b,e,e[3],a,R,F):E&&E.p&&1&a&&E.p(e,a)},i(e){u||(m($),m(E,e),u=!0)},o(e){f($),f(E,e),u=!1},d(e){$&&$.d(e),e&&i(a),e&&i(s),E&&E.d(e)}}}function Z(e){let a,s,t,n=e[0],d=[];for(let a=0;a<n.length;a+=1)d[a]=W(J(e,n,a));const p=e=>f(d[e],1,1,()=>{d[e]=null});return{c(){a=r("ul");for(let e=0;e<d.length;e+=1)d[e].c();this.h()},l(e){a=o(e,"UL",{class:!0});var s=c(a);for(let e=0;e<d.length;e+=1)d[e].l(s);s.forEach(i),this.h()},h(){h(a,"class",s="s-breadcrumbs "+e[1]),u(a,"large",e[2])},m(e,s){l(e,a,s);for(let e=0;e<d.length;e+=1)d[e].m(a,null);t=!0},p(e,[r]){if(9&r){let s;for(n=e[0],s=0;s<n.length;s+=1){const t=J(e,n,s);d[s]?(d[s].p(t,r),m(d[s],1)):(d[s]=W(t),d[s].c(),m(d[s],1),d[s].m(a,null))}for($(),s=n.length;s<d.length;s+=1)p(s);b()}(!t||2&r&&s!==(s="s-breadcrumbs "+e[1]))&&h(a,"class",s),6&r&&u(a,"large",e[2])},i(e){if(!t){for(let e=0;e<n.length;e+=1)m(d[e]);t=!0}},o(e){d=d.filter(Boolean);for(let e=0;e<d.length;e+=1)f(d[e]);t=!1},d(e){e&&i(a),g(d,e)}}}function ee(e,a,s){let{$$slots:t={},$$scope:r}=a,{class:n=""}=a,{large:o=!1}=a,{items:c=[]}=a;const i={disabled:!1,href:"",text:"",class:"",props:{}};return c=c.map(e=>({...i,...e})),e.$$set=e=>{"class"in e&&s(1,n=e.class),"large"in e&&s(2,o=e.large),"items"in e&&s(0,c=e.items),"$$scope"in e&&s(3,r=e.$$scope)},[c,n,o,r,t]}class ae extends e{constructor(e){super(),a(this,e,ee,Z,s,{class:1,large:2,items:0})}}function se(e){let a,s,r,o;return a=new ae({props:{items:e[0]}}),r=new ae({props:{large:!0,items:e[0]}}),{c(){C(a.$$.fragment),s=t(),C(r.$$.fragment)},l(e){A(a.$$.fragment,e),s=n(e),A(r.$$.fragment,e)},m(e,t){B(a,e,t),l(e,s,t),B(r,e,t),o=!0},p:P,i(e){o||(m(a.$$.fragment,e),m(r.$$.fragment,e),o=!0)},o(e){f(a.$$.fragment,e),f(r.$$.fragment,e),o=!1},d(e){S(a,e),e&&i(s),S(r,e)}}}function te(e){return[[{text:"Dashboard",href:"/components/breadcrumbs/"},{text:"Link 1",href:"/components/breadcrumbs/"},{text:"Link 2",disabled:!0}]]}function re(e){let a,s;return{c(){a=r("div"),s=E("-"),this.h()},l(e){a=o(e,"DIV",{slot:!0});var t=c(a);s=k(t,"-"),t.forEach(i),this.h()},h(){h(a,"slot","divider")},m(e,t){l(e,a,t),d(a,s)},d(e){e&&i(a)}}}function ne(e){let a,s,t;return s=new D({props:{class:"mdi mdi-arrow-right-bold"}}),{c(){a=r("div"),C(s.$$.fragment),this.h()},l(e){a=o(e,"DIV",{slot:!0});var t=c(a);A(s.$$.fragment,t),t.forEach(i),this.h()},h(){h(a,"slot","divider")},m(e,r){l(e,a,r),B(s,a,null),t=!0},p:P,i(e){t||(m(s.$$.fragment,e),t=!0)},o(e){f(s.$$.fragment,e),t=!1},d(e){e&&i(a),S(s)}}}function oe(e){let a,s,r,o;return a=new ae({props:{items:e[0],$$slots:{divider:[re]},$$scope:{ctx:e}}}),r=new ae({props:{items:e[0],$$slots:{divider:[ne]},$$scope:{ctx:e}}}),{c(){C(a.$$.fragment),s=t(),C(r.$$.fragment)},l(e){A(a.$$.fragment,e),s=n(e),A(r.$$.fragment,e)},m(e,t){B(a,e,t),l(e,s,t),B(r,e,t),o=!0},p(e,[s]){const t={};2&s&&(t.$$scope={dirty:s,ctx:e}),a.$set(t);const n={};2&s&&(n.$$scope={dirty:s,ctx:e}),r.$set(n)},i(e){o||(m(a.$$.fragment,e),m(r.$$.fragment,e),o=!0)},o(e){f(a.$$.fragment,e),f(r.$$.fragment,e),o=!1},d(e){S(a,e),e&&i(s),S(r,e)}}}function ce(e){return[[{text:"Dashboard",href:"/components/breadcrumbs/"},{text:"Link 1",href:"/components/breadcrumbs/"},{text:"Link 2",disabled:!0}]]}function ie(e){let a,s,t=e[1].text.toUpperCase()+"";return{c(){a=r("span"),s=E(t),this.h()},l(e){a=o(e,"SPAN",{class:!0});var r=c(a);s=k(r,t),r.forEach(i),this.h()},h(){h(a,"class","s-breadcrumb-item"),u(a,"disabled",e[1].disabled)},m(e,t){l(e,a,t),d(a,s)},p(e,r){2&r&&t!==(t=e[1].text.toUpperCase()+"")&&I(s,t),2&r&&u(a,"disabled",e[1].disabled)},d(e){e&&i(a)}}}function le(e){let a,s,t,n=e[1].text.toUpperCase()+"";return{c(){a=r("a"),s=E(n),this.h()},l(e){a=o(e,"A",{class:!0,href:!0});var t=c(a);s=k(t,n),t.forEach(i),this.h()},h(){h(a,"class","s-breadcrumb-item"),h(a,"href",t=e[1].href),u(a,"disabled",e[1].disabled)},m(e,t){l(e,a,t),d(a,s)},p(e,r){2&r&&n!==(n=e[1].text.toUpperCase()+"")&&I(s,n),2&r&&t!==(t=e[1].href)&&h(a,"href",t),2&r&&u(a,"disabled",e[1].disabled)},d(e){e&&i(a)}}}function de(e){let a;function s(e,a){return e[1].href?le:ie}let t=s(e),r=t(e);return{c(){r.c(),a=v()},l(e){r.l(e),a=v()},m(e,s){r.m(e,s),l(e,a,s)},p(e,n){t===(t=s(e))&&r?r.p(e,n):(r.d(1),r=t(e),r&&(r.c(),r.m(a.parentNode,a)))},d(e){r.d(e),e&&i(a)}}}function pe(e){let a,s;return a=new ae({props:{items:e[0],$$slots:{default:[de,({item:e})=>({1:e}),({item:e})=>e?2:0]},$$scope:{ctx:e}}}),{c(){C(a.$$.fragment)},l(e){A(a.$$.fragment,e)},m(e,t){B(a,e,t),s=!0},p(e,[s]){const t={};6&s&&(t.$$scope={dirty:s,ctx:e}),a.$set(t)},i(e){s||(m(a.$$.fragment,e),s=!0)},o(e){f(a.$$.fragment,e),s=!1},d(e){S(a,e)}}}function me(e){return[[{text:"Dashboard",href:"/components/breadcrumbs/"},{text:"Link 1",href:"/components/breadcrumbs/"},{text:"Link 2",disabled:!0}]]}var fe=Object.freeze({__proto__:null,basic:class extends e{constructor(e){super(),a(this,e,te,se,s,{})}},customDivider:class extends e{constructor(e){super(),a(this,e,ce,oe,s,{})}},slots:class extends e{constructor(e){super(),a(this,e,me,pe,s,{})}}});function he(e){let a,s;return a=new ae({props:{large:e[0].large,items:e[2],divider:e[0].divider[0]}}),{c(){C(a.$$.fragment)},l(e){A(a.$$.fragment,e)},m(e,t){B(a,e,t),s=!0},p(e,s){const t={};1&s&&(t.large=e[0].large),1&s&&(t.divider=e[0].divider[0]),a.$set(t)},i(e){s||(m(a.$$.fragment,e),s=!0)},o(e){f(a.$$.fragment,e),s=!1},d(e){S(a,e)}}}function ue(e){let a,s,t;function r(a){e[3].call(null,a)}let n={controls:e[1],$$slots:{default:[he]},$$scope:{ctx:e}};return void 0!==e[0]&&(n.values=e[0]),a=new z({props:n}),T.push(()=>L(a,"values",r)),{c(){C(a.$$.fragment)},l(e){A(a.$$.fragment,e)},m(e,s){B(a,e,s),t=!0},p(e,[t]){const r={};17&t&&(r.$$scope={dirty:t,ctx:e}),!s&&1&t&&(s=!0,r.values=e[0],O(()=>s=!1)),a.$set(r)},i(e){t||(m(a.$$.fragment,e),t=!0)},o(e){f(a.$$.fragment,e),t=!1},d(e){S(a,e)}}}function $e(e,a,s){let t={large:!1,divider:["/"]};return[t,{large:{type:"switch"},divider:{type:"select",items:["/",">",":","\\"],mandatory:!0}},[{text:"Dashboard",href:"#"},{text:"Link 1",href:"#"},{text:"Link 2",disabled:!0}],function(e){t=e,s(0,t)}]}class be extends e{constructor(e){super(),a(this,e,$e,ue,s,{})}}function ge(e){let a,s;return{c(){a=r("pre"),s=r("code"),this.h()},l(e){a=o(e,"PRE",{class:!0});var t=c(a);s=o(t,"CODE",{class:!0}),c(s).forEach(i),t.forEach(i),this.h()},h(){h(s,"class","language-ts"),h(a,"class","language-ts")},m(e,t){l(e,a,t),d(a,s),s.innerHTML='<span class="token keyword">type</span> <span class="token class-name">items</span> <span class="token operator">=</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>item<span class="token operator">></span><span class="token punctuation">;</span>\n<span class="token keyword">type</span> <span class="token class-name">item</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n  href<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">\'\'</span><span class="token punctuation">;</span>\n  text<span class="token operator">:</span> <span class="token string">\'\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">class</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token string">\'\'</span><span class="token punctuation">;</span>\n  props<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>'},p:P,d(e){e&&i(a)}}}function xe(e){let a,s,t,n,p,u,$,b,g,x,v,y,w,I,j,P,D,T,L,O,N,M,Y,z,R,F,V,q,J,K,Q,X,W,Z,ee,ae,se,te,re,ne,oe,ce,ie,le,de,pe,me,fe,he,ue,$e,xe,ve,Ee,ke,ye,we,Ie,je,Ce,Ae,Be,Pe,Se,De,Te,Le,Oe;return T=new be({}),z=new _({props:{doc:H.Breadcrumbs}}),K=new U({props:{lang:"ts",$$slots:{default:[ge]},$$scope:{ctx:e}}}),de=new G({props:{name:"basic"}}),ye=new G({props:{name:"customDivider"}}),Le=new G({props:{name:"slots"}}),{c(){a=r("section"),s=r("h1"),t=r("a"),n=r("i"),p=E("Breadcrumbs"),u=r("p"),$=E("The "),b=r("code"),g=E("Breadcrumbs"),x=E(" component is a navigational helper for pages. It can accept a Material Icons icon or text characters as a divider. An array of objects can be passed to the items property of the component. Additionally, slots exists for more control of the breadcrumbs."),v=r("section"),y=r("h2"),w=r("a"),I=r("i"),j=E("Playground"),P=r("p"),D=E("By default, breadcrumbs use a text divider. This can be any string."),C(T.$$.fragment),L=r("section"),O=r("h2"),N=r("a"),M=r("i"),Y=E("API"),C(z.$$.fragment),R=r("p"),F=E("The array of item in the "),V=r("code"),q=E("items"),J=E(" prop."),C(K.$$.fragment),Q=r("section"),X=r("h2"),W=r("a"),Z=r("i"),ee=E("Examples"),ae=r("p"),se=E("Below is a collection of simple to complex examples."),te=r("section"),re=r("h3"),ne=r("a"),oe=r("i"),ce=E("Basic"),ie=r("p"),le=E("Basic examples for breadcrumbs."),C(de.$$.fragment),pe=r("section"),me=r("h3"),fe=r("a"),he=r("i"),ue=E("Custom Divider"),$e=r("p"),xe=E("Breadcrumbs separator can be set using "),ve=r("code"),Ee=E("divider"),ke=E(" slot. You can also use material icons as dividers."),C(ye.$$.fragment),we=r("section"),Ie=r("h3"),je=r("a"),Ce=r("i"),Ae=E("Slots"),Be=r("p"),Pe=E("You can use the default slot to customize each breadcrumb item. Remember to add class "),Se=r("code"),De=E("s-breadcrumb-item"),Te=E(" to each item to add the default styles."),C(Le.$$.fragment),this.h()},l(e){a=o(e,"SECTION",{});var r=c(a);s=o(r,"H1",{class:!0,id:!0});var l=c(s);t=o(l,"A",{href:!0,"aria-hidden":!0,tabindex:!0});var d=c(t);n=o(d,"I",{class:!0}),c(n).forEach(i),d.forEach(i),p=k(l,"Breadcrumbs"),l.forEach(i),u=o(r,"P",{});var m=c(u);$=k(m,"The "),b=o(m,"CODE",{});var f=c(b);g=k(f,"Breadcrumbs"),f.forEach(i),x=k(m," component is a navigational helper for pages. It can accept a Material Icons icon or text characters as a divider. An array of objects can be passed to the items property of the component. Additionally, slots exists for more control of the breadcrumbs."),m.forEach(i),v=o(r,"SECTION",{});var h=c(v);y=o(h,"H2",{class:!0,id:!0});var E=c(y);w=o(E,"A",{href:!0,"aria-hidden":!0,tabindex:!0});var C=c(w);I=o(C,"I",{class:!0}),c(I).forEach(i),C.forEach(i),j=k(E,"Playground"),E.forEach(i),P=o(h,"P",{});var B=c(P);D=k(B,"By default, breadcrumbs use a text divider. This can be any string."),B.forEach(i),A(T.$$.fragment,h),h.forEach(i),L=o(r,"SECTION",{});var S=c(L);O=o(S,"H2",{class:!0,id:!0});var H=c(O);N=o(H,"A",{href:!0,"aria-hidden":!0,tabindex:!0});var U=c(N);M=o(U,"I",{class:!0}),c(M).forEach(i),U.forEach(i),Y=k(H,"API"),H.forEach(i),A(z.$$.fragment,S),R=o(S,"P",{});var G=c(R);F=k(G,"The array of item in the "),V=o(G,"CODE",{});var _=c(V);q=k(_,"items"),_.forEach(i),J=k(G," prop."),G.forEach(i),A(K.$$.fragment,S),S.forEach(i),Q=o(r,"SECTION",{});var be=c(Q);X=o(be,"H2",{class:!0,id:!0});var ge=c(X);W=o(ge,"A",{href:!0,"aria-hidden":!0,tabindex:!0});var Oe=c(W);Z=o(Oe,"I",{class:!0}),c(Z).forEach(i),Oe.forEach(i),ee=k(ge,"Examples"),ge.forEach(i),ae=o(be,"P",{});var Ne=c(ae);se=k(Ne,"Below is a collection of simple to complex examples."),Ne.forEach(i),te=o(be,"SECTION",{});var He=c(te);re=o(He,"H3",{class:!0,id:!0});var Me=c(re);ne=o(Me,"A",{href:!0,"aria-hidden":!0,tabindex:!0});var Ue=c(ne);oe=o(Ue,"I",{class:!0}),c(oe).forEach(i),Ue.forEach(i),ce=k(Me,"Basic"),Me.forEach(i),ie=o(He,"P",{});var Ge=c(ie);le=k(Ge,"Basic examples for breadcrumbs."),Ge.forEach(i),A(de.$$.fragment,He),He.forEach(i),pe=o(be,"SECTION",{});var Ye=c(pe);me=o(Ye,"H3",{class:!0,id:!0});var _e=c(me);fe=o(_e,"A",{href:!0,"aria-hidden":!0,tabindex:!0});var ze=c(fe);he=o(ze,"I",{class:!0}),c(he).forEach(i),ze.forEach(i),ue=k(_e,"Custom Divider"),_e.forEach(i),$e=o(Ye,"P",{});var Re=c($e);xe=k(Re,"Breadcrumbs separator can be set using "),ve=o(Re,"CODE",{});var Fe=c(ve);Ee=k(Fe,"divider"),Fe.forEach(i),ke=k(Re," slot. You can also use material icons as dividers."),Re.forEach(i),A(ye.$$.fragment,Ye),Ye.forEach(i),we=o(be,"SECTION",{});var Ve=c(we);Ie=o(Ve,"H3",{class:!0,id:!0});var qe=c(Ie);je=o(qe,"A",{href:!0,"aria-hidden":!0,tabindex:!0});var Je=c(je);Ce=o(Je,"I",{class:!0}),c(Ce).forEach(i),Je.forEach(i),Ae=k(qe,"Slots"),qe.forEach(i),Be=o(Ve,"P",{});var Ke=c(Be);Pe=k(Ke,"You can use the default slot to customize each breadcrumb item. Remember to add class "),Se=o(Ke,"CODE",{});var Qe=c(Se);De=k(Qe,"s-breadcrumb-item"),Qe.forEach(i),Te=k(Ke," to each item to add the default styles."),Ke.forEach(i),A(Le.$$.fragment,Ve),Ve.forEach(i),be.forEach(i),r.forEach(i),this.h()},h(){h(n,"class","mdi mdi-pound"),h(t,"href","#breadcrumbs"),h(t,"aria-hidden","true"),h(t,"tabindex","-1"),h(s,"class","heading text-h3 mb-4"),h(s,"id","breadcrumbs"),h(I,"class","mdi mdi-pound"),h(w,"href","#playground"),h(w,"aria-hidden","true"),h(w,"tabindex","-1"),h(y,"class","heading text-h4 mb-3"),h(y,"id","playground"),h(M,"class","mdi mdi-pound"),h(N,"href","#api"),h(N,"aria-hidden","true"),h(N,"tabindex","-1"),h(O,"class","heading text-h4 mb-3"),h(O,"id","api"),h(Z,"class","mdi mdi-pound"),h(W,"href","#examples"),h(W,"aria-hidden","true"),h(W,"tabindex","-1"),h(X,"class","heading text-h4 mb-3"),h(X,"id","examples"),h(oe,"class","mdi mdi-pound"),h(ne,"href","#basic"),h(ne,"aria-hidden","true"),h(ne,"tabindex","-1"),h(re,"class","heading text-h5 mb-2"),h(re,"id","basic"),h(he,"class","mdi mdi-pound"),h(fe,"href","#custom-divider"),h(fe,"aria-hidden","true"),h(fe,"tabindex","-1"),h(me,"class","heading text-h5 mb-2"),h(me,"id","custom-divider"),h(Ce,"class","mdi mdi-pound"),h(je,"href","#slots"),h(je,"aria-hidden","true"),h(je,"tabindex","-1"),h(Ie,"class","heading text-h5 mb-2"),h(Ie,"id","slots")},m(e,r){l(e,a,r),d(a,s),d(s,t),d(t,n),d(s,p),d(a,u),d(u,$),d(u,b),d(b,g),d(u,x),d(a,v),d(v,y),d(y,w),d(w,I),d(y,j),d(v,P),d(P,D),B(T,v,null),d(a,L),d(L,O),d(O,N),d(N,M),d(O,Y),B(z,L,null),d(L,R),d(R,F),d(R,V),d(V,q),d(R,J),B(K,L,null),d(a,Q),d(Q,X),d(X,W),d(W,Z),d(X,ee),d(Q,ae),d(ae,se),d(Q,te),d(te,re),d(re,ne),d(ne,oe),d(re,ce),d(te,ie),d(ie,le),B(de,te,null),d(Q,pe),d(pe,me),d(me,fe),d(fe,he),d(me,ue),d(pe,$e),d($e,xe),d($e,ve),d(ve,Ee),d($e,ke),B(ye,pe,null),d(Q,we),d(we,Ie),d(Ie,je),d(je,Ce),d(Ie,Ae),d(we,Be),d(Be,Pe),d(Be,Se),d(Se,De),d(Be,Te),B(Le,we,null),Oe=!0},p(e,a){const s={};2&a&&(s.$$scope={dirty:a,ctx:e}),K.$set(s)},i(e){Oe||(m(T.$$.fragment,e),m(z.$$.fragment,e),m(K.$$.fragment,e),m(de.$$.fragment,e),m(ye.$$.fragment,e),m(Le.$$.fragment,e),Oe=!0)},o(e){f(T.$$.fragment,e),f(z.$$.fragment,e),f(K.$$.fragment,e),f(de.$$.fragment,e),f(ye.$$.fragment,e),f(Le.$$.fragment,e),Oe=!1},d(e){e&&i(a),S(T),S(z),S(K),S(de),S(ye),S(Le)}}}function ve(e){let a,s;const t=[Ee];let r={$$slots:{default:[xe]},$$scope:{ctx:e}};for(let e=0;e<t.length;e+=1)r=y(r,t[e]);return a=new M({props:r}),{c(){C(a.$$.fragment)},l(e){A(a.$$.fragment,e)},m(e,t){B(a,e,t),s=!0},p(e,[s]){const r=0&s?j(t,[N(Ee)]):{};2&s&&(r.$$scope={dirty:s,ctx:e}),a.$set(r)},i(e){s||(m(a.$$.fragment,e),s=!0)},o(e){f(a.$$.fragment,e),s=!1},d(e){S(a,e)}}}const Ee={title:"Breadcrumbs Component",related:[{Switch:"/components/switches/"},{Button:"/components/buttons/"},{NavigationDrawer:"/components/navigation-drawer/"}]};async function ke(){let e=await this.fetch("examples/components/breadcrumbs.json");return e=await e.json(),{sources:e}}function ye(e,a,s){let{sources:t}=a;return Y([t,fe]),e.$$set=e=>{"sources"in e&&s(0,t=e.sources)},[t]}export default class extends e{constructor(e){super(),a(this,e,ye,ve,s,{sources:0})}}export{Ee as metadata,ke as preload};
