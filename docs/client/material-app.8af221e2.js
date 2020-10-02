import{S as a,i as s,s as t,E as n,c as e,b as o,m as p,F as l,t as c,l as r,n as i,G as h,a3 as u,e as d,o as m,f as k,g as f,h as g,p as y,j as $,k as v,q as E,u as b}from"./client.ba230517.js";import{M as w}from"./MDXLayout.aa0fcd4f.js";import"./Meta.c9337a1c.js";import"./Table.012c45d1.js";import{C as A}from"./CodeBlock.e87a4089.js";import{A as x}from"./API.22f0ea38.js";function M(a){let s,t;return{c(){s=d("pre"),t=d("code"),this.h()},l(a){s=k(a,"PRE",{class:!0});var n=f(s);t=k(n,"CODE",{class:!0}),f(t).forEach(g),n.forEach(g),this.h()},h(){$(t,"class","language-html"),$(s,"class","language-html")},m(a,n){v(a,s,n),E(s,t),t.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> MaterialApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'svelte-materialify\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> theme <span class="token operator">=</span> <span class="token string">\'light\'</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">function</span> <span class="token function">toggleTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>theme <span class="token operator">===</span> <span class="token string">\'light\'</span><span class="token punctuation">)</span> theme <span class="token operator">=</span> <span class="token string">\'dark\'</span><span class="token punctuation">;</span>\n    <span class="token keyword">else</span> theme <span class="token operator">=</span> <span class="token string">\'light\'</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MaterialApp</span> <span class="token attr-name">{theme}</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name"><span class="token namespace">on:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{toggleTheme}</span><span class="token punctuation">></span></span>Toggle Theme<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  ...\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MaterialApp</span><span class="token punctuation">></span></span>'},p:b,d(a){a&&g(s)}}}function I(a){let s,t;return{c(){s=d("pre"),t=d("code"),this.h()},l(a){s=k(a,"PRE",{class:!0});var n=f(s);t=k(n,"CODE",{class:!0}),f(t).forEach(g),n.forEach(g),this.h()},h(){$(t,"class","language-html"),$(s,"class","language-html")},m(a,n){v(a,s,n),E(s,t),t.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MaterialApp</span> <span class="token attr-name">{theme}</span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- this div will have dark theme no matter the value of {theme} --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">\'</span>theme--dark<span class="token punctuation">\'</span></span><span class="token punctuation">></span></span>\n    ...\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MaterialApp</span><span class="token punctuation">></span></span>'},p:b,d(a){a&&g(s)}}}function T(a){let s,t,n,l,h,b,w,T,C,S,O,P,j,D,H,q,B,N,U,L,R,W,z,F,G,X,_,J,K,Q,V,Y,Z,aa,sa,ta,na,ea,oa,pa,la,ca,ra,ia,ha,ua,da;return q=new x({props:{doc:u.MaterialApp}}),X=new A({props:{lang:"html",$$slots:{default:[M]},$$scope:{ctx:a}}}),ua=new A({props:{lang:"html",$$slots:{default:[I]},$$scope:{ctx:a}}}),{c(){s=d("section"),t=d("h1"),n=d("a"),l=d("i"),h=m("Material App"),b=d("p"),w=m("This component is the base for Svelte Materialify and helps you to bootstrap your app. All other svelte materialify components are required to be inside of this component in order for them to properly inherit styles and helpers. "),T=d("code"),C=m("MaterialApp"),S=m(" should ideally only be used once inside your app."),O=d("section"),P=d("h2"),j=d("a"),D=d("i"),H=m("API"),e(q.$$.fragment),B=d("section"),N=d("h2"),U=d("a"),L=d("i"),R=m("Usage"),W=d("p"),z=m("The default theme is the light theme, this is how ideally your base layout should look. It is also recommended that you store the theme variable in a store and can access it in any component you want and also if you want your user selected theme to be saved, use "),F=d("a"),G=m("localStorage"),e(X.$$.fragment),_=d("section"),J=d("h2"),K=d("a"),Q=d("i"),V=m("Manually set themes"),Y=d("p"),Z=m("Suppose if you want your "),aa=d("code"),sa=m("div"),ta=m(" to be dark themed no matter what the theme of the app is then add the class "),na=d("code"),ea=m("theme--dark"),oa=m(" to the "),pa=d("code"),la=m("div"),ca=m(" or "),ra=d("code"),ia=m("theme--light"),ha=m(" if you want it to be light themed."),e(ua.$$.fragment),this.h()},l(a){s=k(a,"SECTION",{});var e=f(s);t=k(e,"H1",{class:!0,id:!0});var p=f(t);n=k(p,"A",{href:!0,"aria-hidden":!0,tabindex:!0});var c=f(n);l=k(c,"I",{class:!0}),f(l).forEach(g),c.forEach(g),h=y(p,"Material App"),p.forEach(g),b=k(e,"P",{});var r=f(b);w=y(r,"This component is the base for Svelte Materialify and helps you to bootstrap your app. All other svelte materialify components are required to be inside of this component in order for them to properly inherit styles and helpers. "),T=k(r,"CODE",{});var i=f(T);C=y(i,"MaterialApp"),i.forEach(g),S=y(r," should ideally only be used once inside your app."),r.forEach(g),O=k(e,"SECTION",{});var u=f(O);P=k(u,"H2",{class:!0,id:!0});var d=f(P);j=k(d,"A",{href:!0,"aria-hidden":!0,tabindex:!0});var m=f(j);D=k(m,"I",{class:!0}),f(D).forEach(g),m.forEach(g),H=y(d,"API"),d.forEach(g),o(q.$$.fragment,u),u.forEach(g),B=k(e,"SECTION",{});var $=f(B);N=k($,"H2",{class:!0,id:!0});var v=f(N);U=k(v,"A",{href:!0,"aria-hidden":!0,tabindex:!0});var E=f(U);L=k(E,"I",{class:!0}),f(L).forEach(g),E.forEach(g),R=y(v,"Usage"),v.forEach(g),W=k($,"P",{});var A=f(W);z=y(A,"The default theme is the light theme, this is how ideally your base layout should look. It is also recommended that you store the theme variable in a store and can access it in any component you want and also if you want your user selected theme to be saved, use "),F=k(A,"A",{href:!0,rel:!0,class:!0,target:!0});var x=f(F);G=y(x,"localStorage"),x.forEach(g),A.forEach(g),o(X.$$.fragment,$),$.forEach(g),_=k(e,"SECTION",{});var M=f(_);J=k(M,"H2",{class:!0,id:!0});var I=f(J);K=k(I,"A",{href:!0,"aria-hidden":!0,tabindex:!0});var da=f(K);Q=k(da,"I",{class:!0}),f(Q).forEach(g),da.forEach(g),V=y(I,"Manually set themes"),I.forEach(g),Y=k(M,"P",{});var ma=f(Y);Z=y(ma,"Suppose if you want your "),aa=k(ma,"CODE",{});var ka=f(aa);sa=y(ka,"div"),ka.forEach(g),ta=y(ma," to be dark themed no matter what the theme of the app is then add the class "),na=k(ma,"CODE",{});var fa=f(na);ea=y(fa,"theme--dark"),fa.forEach(g),oa=y(ma," to the "),pa=k(ma,"CODE",{});var ga=f(pa);la=y(ga,"div"),ga.forEach(g),ca=y(ma," or "),ra=k(ma,"CODE",{});var ya=f(ra);ia=y(ya,"theme--light"),ya.forEach(g),ha=y(ma," if you want it to be light themed."),ma.forEach(g),o(ua.$$.fragment,M),M.forEach(g),e.forEach(g),this.h()},h(){$(l,"class","mdi mdi-pound"),$(n,"href","#material-app"),$(n,"aria-hidden","true"),$(n,"tabindex","-1"),$(t,"class","heading text-h3 mb-4"),$(t,"id","material-app"),$(D,"class","mdi mdi-pound"),$(j,"href","#api"),$(j,"aria-hidden","true"),$(j,"tabindex","-1"),$(P,"class","heading text-h4 mb-3"),$(P,"id","api"),$(L,"class","mdi mdi-pound"),$(U,"href","#usage"),$(U,"aria-hidden","true"),$(U,"tabindex","-1"),$(N,"class","heading text-h4 mb-3"),$(N,"id","usage"),$(F,"href","https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"),$(F,"rel","noopener noreferrer"),$(F,"class","app-link"),$(F,"target","_blank"),$(Q,"class","mdi mdi-pound"),$(K,"href","#manually-set-themes"),$(K,"aria-hidden","true"),$(K,"tabindex","-1"),$(J,"class","heading text-h4 mb-3"),$(J,"id","manually-set-themes")},m(a,e){v(a,s,e),E(s,t),E(t,n),E(n,l),E(t,h),E(s,b),E(b,w),E(b,T),E(T,C),E(b,S),E(s,O),E(O,P),E(P,j),E(j,D),E(P,H),p(q,O,null),E(s,B),E(B,N),E(N,U),E(U,L),E(N,R),E(B,W),E(W,z),E(W,F),E(F,G),p(X,B,null),E(s,_),E(_,J),E(J,K),E(K,Q),E(J,V),E(_,Y),E(Y,Z),E(Y,aa),E(aa,sa),E(Y,ta),E(Y,na),E(na,ea),E(Y,oa),E(Y,pa),E(pa,la),E(Y,ca),E(Y,ra),E(ra,ia),E(Y,ha),p(ua,_,null),da=!0},p(a,s){const t={};1&s&&(t.$$scope={dirty:s,ctx:a}),X.$set(t);const n={};1&s&&(n.$$scope={dirty:s,ctx:a}),ua.$set(n)},i(a){da||(c(q.$$.fragment,a),c(X.$$.fragment,a),c(ua.$$.fragment,a),da=!0)},o(a){r(q.$$.fragment,a),r(X.$$.fragment,a),r(ua.$$.fragment,a),da=!1},d(a){a&&g(s),i(q),i(X),i(ua)}}}function C(a){let s,t;const u=[S];let d={$$slots:{default:[T]},$$scope:{ctx:a}};for(let a=0;a<u.length;a+=1)d=n(d,u[a]);return s=new w({props:d}),{c(){e(s.$$.fragment)},l(a){o(s.$$.fragment,a)},m(a,n){p(s,a,n),t=!0},p(a,[t]){const n=0&t?l(u,[h(S)]):{};1&t&&(n.$$scope={dirty:t,ctx:a}),s.$set(n)},i(a){t||(c(s.$$.fragment,a),t=!0)},o(a){r(s.$$.fragment,a),t=!1},d(a){i(s,a)}}}const S={title:"Material App",related:[{Installation:"/getting-started/installation/"},{Usage:"/getting-started/usage/"},{Buttons:"/components/buttons/"}]};export default class extends a{constructor(a){super(),s(this,a,null,C,t,{})}}export{S as metadata};