import{S as s,i as a,s as t,c as e,b as n,m as o,t as r,l as c,n as m,e as $,o as i,a as f,f as p,g as l,p as d,h as u,d as h,j as g,k as j,q as x,H as A}from"./client.ba230517.js";import{M as I}from"./MDXLayout.aa0fcd4f.js";import"./Meta.c9337a1c.js";import"./Table.012c45d1.js";import{A as P}from"./API.22f0ea38.js";function b(s){let a,t,I,b,w,y;return w=new P({props:{doc:s[0]}}),{c(){a=$("h1"),t=i(s[1]),I=i(" API"),b=f(),e(w.$$.fragment),this.h()},l(e){a=p(e,"H1",{class:!0});var o=l(a);t=d(o,s[1]),I=d(o," API"),o.forEach(u),b=h(e),n(w.$$.fragment,e),this.h()},h(){g(a,"class","text-h3 mb-6")},m(s,e){j(s,a,e),x(a,t),x(a,I),j(s,b,e),o(w,s,e),y=!0},p(s,a){(!y||2&a)&&A(t,s[1]);const e={};1&a&&(e.doc=s[0]),w.$set(e)},i(s){y||(r(w.$$.fragment,s),y=!0)},o(s){c(w.$$.fragment,s),y=!1},d(s){s&&u(a),s&&u(b),m(w,s)}}}function w(s){let a,t;return a=new I({props:{title:s[1]+" API",$$slots:{default:[b]},$$scope:{ctx:s}}}),{c(){e(a.$$.fragment)},l(s){n(a.$$.fragment,s)},m(s,e){o(a,s,e),t=!0},p(s,[t]){const e={};2&t&&(e.title=s[1]+" API"),7&t&&(e.$$scope={dirty:t,ctx:s}),a.$set(e)},i(s){t||(r(a.$$.fragment,s),t=!0)},o(s){c(a.$$.fragment,s),t=!1},d(s){m(a,s)}}}async function y({params:s}){const a=await this.fetch(`api/${s.slug}.json`),t=await a.json();return 200===a.status?{doc:t,name:s.slug}:(this.error(a.status,t.message),{doc:"",name:""})}function M(s,a,t){let{doc:e}=a,{name:n}=a;return s.$$set=s=>{"doc"in s&&t(0,e=s.doc),"name"in s&&t(1,n=s.name)},[e,n]}export default class extends s{constructor(s){super(),a(this,s,M,w,t,{doc:0,name:1})}}export{y as preload};
