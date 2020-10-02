import{S as a,i as s,s as t,K as n,e,h as o,o as p,L as l,M as c,t as r,r as i,u as h,ab as u,g as d,v as m,k,l as f,m as g,w as y,n as $,p as v,x as E,z as b}from"./client.c6131498.js";import{M as w}from"./MDXLayout.c14d7156.js";import"./Meta.f42f1077.js";import"./Table.29a240d9.js";import{C as x}from"./CodeBlock.3590adda.js";import{A}from"./API.831ff106.js";function M(a){let s,t;return{c(){s=d("pre"),t=d("code"),this.h()},l(a){s=k(a,"PRE",{class:!0});var n=f(s);t=k(n,"CODE",{class:!0}),f(t).forEach(g),n.forEach(g),this.h()},h(){$(t,"class","language-html"),$(s,"class","language-html")},m(a,n){v(a,s,n),E(s,t),t.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> MaterialApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'svelte-materialify\'</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> theme <span class="token operator">=</span> <span class="token string">\'light\'</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">function</span> <span class="token function">toggleTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>theme <span class="token operator">===</span> <span class="token string">\'light\'</span><span class="token punctuation">)</span> theme <span class="token operator">=</span> <span class="token string">\'dark\'</span><span class="token punctuation">;</span>\n    <span class="token keyword">else</span> theme <span class="token operator">=</span> <span class="token string">\'light\'</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MaterialApp</span> <span class="token attr-name">{theme}</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name"><span class="token namespace">on:</span>click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{toggleTheme}</span><span class="token punctuation">></span></span>Toggle Theme<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  ...\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MaterialApp</span><span class="token punctuation">></span></span>'},p:b,d(a){a&&g(s)}}}function I(a){let s,t;return{c(){s=d("pre"),t=d("code"),this.h()},l(a){s=k(a,"PRE",{class:!0});var n=f(s);t=k(n,"CODE",{class:!0}),f(t).forEach(g),n.forEach(g),this.h()},h(){$(t,"class","language-html"),$(s,"class","language-html")},m(a,n){v(a,s,n),E(s,t),t.innerHTML='<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MaterialApp</span> <span class="token attr-name">{theme}</span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- this div will have dark theme no matter the value of {theme} --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">\'</span>theme--dark<span class="token punctuation">\'</span></span><span class="token punctuation">></span></span>\n    ...\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>MaterialApp</span><span class="token punctuation">></span></span>'},p:b,d(a){a&&g(s)}}}function T(a){let s,t,n,l,c,b,w,T,C,S,O,P,D,j,H,q,B,L,N,U,z,R,W,K,X,_,F,G,J,Q,V,Y,Z,aa,sa,ta,na,ea,oa,pa,la,ca,ra,ia,ha,ua,da;return q=new A({props:{doc:u.MaterialApp}}),_=new x({props:{lang:"html",$$slots:{default:[M]},$$scope:{ctx:a}}}),ua=new x({props:{lang:"html",$$slots:{default:[I]},$$scope:{ctx:a}}}),{c(){s=d("section"),t=d("h1"),n=d("a"),l=d("i"),c=m("Material App"),b=d("p"),w=m("This component is the base for Svelte Materialify and helps you to bootstrap your app. All other svelte materialify components are required to be inside of this component in order for them to properly inherit styles and helpers. "),T=d("code"),C=m("MaterialApp"),S=m(" should ideally only be used once inside your app."),O=d("section"),P=d("h2"),D=d("a"),j=d("i"),H=m("API"),e(q.$$.fragment),B=d("section"),L=d("h2"),N=d("a"),U=d("i"),z=m("Usage"),R=d("p"),W=m("The default theme is the light theme, this is how ideally your base layout should look. It is also recommended that you store the theme variable in a store and can access it in any component you want and also if you want your user selected theme to be saved, use "),K=d("a"),X=m("localStorage"),e(_.$$.fragment),F=d("section"),G=d("h2"),J=d("a"),Q=d("i"),V=m("Manually set themes"),Y=d("p"),Z=m("Suppose if you want your "),aa=d("code"),sa=m("div"),ta=m(" to be dark themed no matter what the theme of the app is then add the class "),na=d("code"),ea=m("theme--dark"),oa=m(" to the "),pa=d("code"),la=m("div"),ca=m(" or "),ra=d("code"),ia=m("theme--light"),ha=m(" if you want it to be light themed."),e(ua.$$.fragment),this.h()},l(a){s=k(a,"SECTION",{});var e=f(s);t=k(e,"H1",{class:!0,id:!0});var p=f(t);n=k(p,"A",{href:!0,"aria-hidden":!0,tabindex:!0});var r=f(n);l=k(r,"I",{class:!0}),f(l).forEach(g),r.forEach(g),c=y(p,"Material App"),p.forEach(g),b=k(e,"P",{});var i=f(b);w=y(i,"This component is the base for Svelte Materialify and helps you to bootstrap your app. All other svelte materialify components are required to be inside of this component in order for them to properly inherit styles and helpers. "),T=k(i,"CODE",{});var h=f(T);C=y(h,"MaterialApp"),h.forEach(g),S=y(i," should ideally only be used once inside your app."),i.forEach(g),O=k(e,"SECTION",{});var u=f(O);P=k(u,"H2",{class:!0,id:!0});var d=f(P);D=k(d,"A",{href:!0,"aria-hidden":!0,tabindex:!0});var m=f(D);j=k(m,"I",{class:!0}),f(j).forEach(g),m.forEach(g),H=y(d,"API"),d.forEach(g),o(q.$$.fragment,u),u.forEach(g),B=k(e,"SECTION",{});var $=f(B);L=k($,"H2",{class:!0,id:!0});var v=f(L);N=k(v,"A",{href:!0,"aria-hidden":!0,tabindex:!0});var E=f(N);U=k(E,"I",{class:!0}),f(U).forEach(g),E.forEach(g),z=y(v,"Usage"),v.forEach(g),R=k($,"P",{});var x=f(R);W=y(x,"The default theme is the light theme, this is how ideally your base layout should look. It is also recommended that you store the theme variable in a store and can access it in any component you want and also if you want your user selected theme to be saved, use "),K=k(x,"A",{href:!0,rel:!0,class:!0,target:!0});var A=f(K);X=y(A,"localStorage"),A.forEach(g),x.forEach(g),o(_.$$.fragment,$),$.forEach(g),F=k(e,"SECTION",{});var M=f(F);G=k(M,"H2",{class:!0,id:!0});var I=f(G);J=k(I,"A",{href:!0,"aria-hidden":!0,tabindex:!0});var da=f(J);Q=k(da,"I",{class:!0}),f(Q).forEach(g),da.forEach(g),V=y(I,"Manually set themes"),I.forEach(g),Y=k(M,"P",{});var ma=f(Y);Z=y(ma,"Suppose if you want your "),aa=k(ma,"CODE",{});var ka=f(aa);sa=y(ka,"div"),ka.forEach(g),ta=y(ma," to be dark themed no matter what the theme of the app is then add the class "),na=k(ma,"CODE",{});var fa=f(na);ea=y(fa,"theme--dark"),fa.forEach(g),oa=y(ma," to the "),pa=k(ma,"CODE",{});var ga=f(pa);la=y(ga,"div"),ga.forEach(g),ca=y(ma," or "),ra=k(ma,"CODE",{});var ya=f(ra);ia=y(ya,"theme--light"),ya.forEach(g),ha=y(ma," if you want it to be light themed."),ma.forEach(g),o(ua.$$.fragment,M),M.forEach(g),e.forEach(g),this.h()},h(){$(l,"class","mdi mdi-pound"),$(n,"href","#material-app"),$(n,"aria-hidden","true"),$(n,"tabindex","-1"),$(t,"class","heading text-h3 mb-4"),$(t,"id","material-app"),$(j,"class","mdi mdi-pound"),$(D,"href","#api"),$(D,"aria-hidden","true"),$(D,"tabindex","-1"),$(P,"class","heading text-h4 mb-3"),$(P,"id","api"),$(U,"class","mdi mdi-pound"),$(N,"href","#usage"),$(N,"aria-hidden","true"),$(N,"tabindex","-1"),$(L,"class","heading text-h4 mb-3"),$(L,"id","usage"),$(K,"href","https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"),$(K,"rel","noopener noreferrer"),$(K,"class","app-link"),$(K,"target","_blank"),$(Q,"class","mdi mdi-pound"),$(J,"href","#manually-set-themes"),$(J,"aria-hidden","true"),$(J,"tabindex","-1"),$(G,"class","heading text-h4 mb-3"),$(G,"id","manually-set-themes")},m(a,e){v(a,s,e),E(s,t),E(t,n),E(n,l),E(t,c),E(s,b),E(b,w),E(b,T),E(T,C),E(b,S),E(s,O),E(O,P),E(P,D),E(D,j),E(P,H),p(q,O,null),E(s,B),E(B,L),E(L,N),E(N,U),E(L,z),E(B,R),E(R,W),E(R,K),E(K,X),p(_,B,null),E(s,F),E(F,G),E(G,J),E(J,Q),E(G,V),E(F,Y),E(Y,Z),E(Y,aa),E(aa,sa),E(Y,ta),E(Y,na),E(na,ea),E(Y,oa),E(Y,pa),E(pa,la),E(Y,ca),E(Y,ra),E(ra,ia),E(Y,ha),p(ua,F,null),da=!0},p(a,s){const t={};1&s&&(t.$$scope={dirty:s,ctx:a}),_.$set(t);const n={};1&s&&(n.$$scope={dirty:s,ctx:a}),ua.$set(n)},i(a){da||(r(q.$$.fragment,a),r(_.$$.fragment,a),r(ua.$$.fragment,a),da=!0)},o(a){i(q.$$.fragment,a),i(_.$$.fragment,a),i(ua.$$.fragment,a),da=!1},d(a){a&&g(s),h(q),h(_),h(ua)}}}function C(a){let s,t;const u=[S];let d={$$slots:{default:[T]},$$scope:{ctx:a}};for(let a=0;a<u.length;a+=1)d=n(d,u[a]);return s=new w({props:d}),{c(){e(s.$$.fragment)},l(a){o(s.$$.fragment,a)},m(a,n){p(s,a,n),t=!0},p(a,[t]){const n=0&t?l(u,[c(S)]):{};1&t&&(n.$$scope={dirty:t,ctx:a}),s.$set(n)},i(a){t||(r(s.$$.fragment,a),t=!0)},o(a){i(s.$$.fragment,a),t=!1},d(a){h(s,a)}}}const S={title:"Material App",related:[{Installation:"/getting-started/installation/"},{Usage:"/getting-started/usage/"},{Buttons:"/components/buttons/"}]};export default class extends a{constructor(a){super(),s(this,a,null,C,t,{})}}export{S as metadata};
