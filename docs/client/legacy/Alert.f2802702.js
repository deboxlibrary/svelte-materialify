import{_ as t,a as n,b as c,c as o,i as r,H as a,d as e,S as s,e as i,h as f,o as u,q as l,t as $,r as p,u as m,I as d,g as v,k as h,l as g,m as y,n as x,p as R,z as b,A,f as D,j,D as w}from"./client.c6131498.js";import{A as k}from"./Alert.ab30e9b9.js";function I(t){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,a=n(t);if(o){var e=n(this).constructor;r=Reflect.construct(a,arguments,e)}else r=a.apply(this,arguments);return c(this,r)}}function S(t){var n,c,o;return c=new d({props:{class:"mdi mdi-"+t[1]}}),{c:function(){n=v("div"),i(c.$$.fragment),this.h()},l:function(t){n=h(t,"DIV",{slot:!0});var o=g(n);f(c.$$.fragment,o),o.forEach(y),this.h()},h:function(){x(n,"slot","icon")},m:function(t,r){R(t,n,r),u(c,n,null),o=!0},p:b,i:function(t){o||($(c.$$.fragment,t),o=!0)},o:function(t){p(c.$$.fragment,t),o=!1},d:function(t){t&&y(n),m(c)}}}function q(t){var n,c,o=t[2].default,r=A(o,t,t[3],null);return{c:function(){n=D(),r&&r.c()},l:function(t){n=j(t),r&&r.l(t)},m:function(t,o){R(t,n,o),r&&r.m(t,o),c=!0},p:function(t,n){r&&r.p&&8&n&&w(r,o,t,t[3],n,null,null)},i:function(t){c||($(r,t),c=!0)},o:function(t){p(r,t),c=!1},d:function(t){t&&y(n),r&&r.d(t)}}}function z(t){var n,c;return n=new k({props:{class:t[0]+"-text",border:"left",text:!0,$$slots:{default:[q],icon:[S]},$$scope:{ctx:t}}}),{c:function(){i(n.$$.fragment)},l:function(t){f(n.$$.fragment,t)},m:function(t,o){u(n,t,o),c=!0},p:function(t,c){var o=l(c,1)[0],r={};1&o&&(r.class=t[0]+"-text"),8&o&&(r.$$scope={dirty:o,ctx:t}),n.$set(r)},i:function(t){c||($(n.$$.fragment,t),c=!0)},o:function(t){p(n.$$.fragment,t),c=!1},d:function(t){m(n,t)}}}var E={info:"information",danger:"alert",warning:"alert-octagram",success:"check"};function H(t,n,c){var o=n.$$slots,r=void 0===o?{}:o,a=n.$$scope,e=n.type,s=void 0===e?"info":e,i=E[s];return t.$$set=function(t){"type"in t&&c(0,s=t.type),"$$scope"in t&&c(3,a=t.$$scope)},[s,i,r,a]}var P=function(n){t(i,s);var c=I(i);function i(t){var n;return o(this,i),n=c.call(this),r(e(n),t,H,z,a,{type:0}),n}return i}();export{P as A};