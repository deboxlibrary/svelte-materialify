import{S as s,i as l,s as a,v as e,e as t,f as i,g as n,h as c,j as o,k as r,x as u,t as m,l as p,V as d,O as $,a8 as v,aj as y}from"./client.ba230517.js";function h(s){let l,a,d;const $=s[9].default,v=e($,s,s[8],null);return{c(){l=t("div"),v&&v.c(),this.h()},l(s){l=i(s,"DIV",{class:!0,role:!0,style:!0});var a=n(l);v&&v.l(a),a.forEach(c),this.h()},h(){o(l,"class",a="s-item-group "+s[0]),o(l,"role",s[1]),o(l,"style",s[2])},m(s,a){r(s,l,a),v&&v.m(l,null),d=!0},p(s,[e]){v&&v.p&&256&e&&u(v,$,s,s[8],e,null,null),(!d||1&e&&a!==(a="s-item-group "+s[0]))&&o(l,"class",a),(!d||2&e)&&o(l,"role",s[1]),(!d||4&e)&&o(l,"style",s[2])},i(s){d||(m(v,s),d=!0)},o(s){p(v,s),d=!1},d(s){s&&c(l),v&&v.d(s)}}}const x={};function f(s,l,a){let{$$slots:e={},$$scope:t}=l,{class:i=""}=l,{activeClass:n=""}=l,{value:c=[]}=l,{multiple:o=!1}=l,{mandatory:r=!1}=l,{max:u=1/0}=l,{role:m=null}=l,{style:p=null}=l;const h=d(),f=y(c),g=f.subscribe(s=>{h("change",s)});$(g);let b=-1;return v(x,{select:s=>{c.includes(s)?r&&1===c.length||(c.splice(c.indexOf(s),1),a(3,c)):o?c.length<u&&a(3,c=[...c,s]):a(3,c=[s])},register:s=>{const l=f.subscribe(l=>{s(l)});$(l)},index:()=>(b+=1,b),_activeClass:n}),s.$$set=s=>{"class"in s&&a(0,i=s.class),"activeClass"in s&&a(4,n=s.activeClass),"value"in s&&a(3,c=s.value),"multiple"in s&&a(5,o=s.multiple),"mandatory"in s&&a(6,r=s.mandatory),"max"in s&&a(7,u=s.max),"role"in s&&a(1,m=s.role),"style"in s&&a(2,p=s.style),"$$scope"in s&&a(8,t=s.$$scope)},s.$$.update=()=>{8&s.$$.dirty&&f.set(c)},[i,m,p,c,n,o,r,u,t,e]}class g extends s{constructor(s){super(),l(this,s,f,h,a,{class:0,activeClass:4,value:3,multiple:5,mandatory:6,max:7,role:1,style:2})}}export{g as I,x as a};
