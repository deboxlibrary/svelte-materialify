import{_ as s,a,b as e,c,i,s as n,d as t,S as l,A as r,g as o,f as u,k as d,l as f,j as h,m as v,n as p,C as y,p as _,x as b,a6 as k,E as m,q as $,G as g,D as w,t as x,r as D,a7 as E,al as I,aj as R}from"./client.c6131498.js";import{T as j}from"./index.0a0a64b0.js";function A(s){var c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(s){return!1}}();return function(){var i,n=a(s);if(c){var t=a(this).constructor;i=Reflect.construct(n,arguments,t)}else i=n.apply(this,arguments);return e(this,i)}}function V(s){var a,e,c,i,n,t,l,I,R,A,V,S,L,O,P=s[12].default,T=r(P,s,s[11],null);return{c:function(){a=o("div"),e=o("div"),c=o("input"),i=u(),n=o("div"),t=u(),l=o("div"),R=u(),A=o("label"),T&&T.c(),this.h()},l:function(s){a=d(s,"DIV",{class:!0,style:!0});var r=f(a);e=d(r,"DIV",{class:!0});var o=f(e);c=d(o,"INPUT",{type:!0,role:!0,"aria-checked":!0,id:!0,disabled:!0,value:!0}),i=h(o),n=d(o,"DIV",{class:!0}),f(n).forEach(v),t=h(o),l=d(o,"DIV",{class:!0}),f(l).forEach(v),o.forEach(v),R=h(r),A=d(r,"LABEL",{for:!0});var u=f(A);T&&T.l(u),u.forEach(v),r.forEach(v),this.h()},h:function(){p(c,"type","checkbox"),p(c,"role","switch"),p(c,"aria-checked",s[0]),p(c,"id",s[1]),c.disabled=s[7],c.__value=s[4],c.value=c.__value,p(n,"class","s-switch__track"),p(l,"class","s-switch__thumb"),p(e,"class","s-switch__wrapper"),y(e,"dense",s[6]),y(e,"inset",s[5]),y(e,"disabled",s[7]),p(A,"for",s[1]),p(a,"class",V="s-switch "+s[2]),p(a,"style",s[8])},m:function(r,o){_(r,a,o),b(a,e),b(e,c),c.checked=s[0],b(e,i),b(e,n),b(e,t),b(e,l),b(a,R),b(a,A),T&&T.m(A,null),S=!0,L||(O=[k(c,"change",s[14]),k(c,"change",s[9]),k(c,"change",s[13]),m(I=j.call(null,e,s[0]&&s[3]))],L=!0)},p:function(s,i){var n=$(i,1)[0];(!S||1&n)&&p(c,"aria-checked",s[0]),(!S||2&n)&&p(c,"id",s[1]),(!S||128&n)&&(c.disabled=s[7]),(!S||16&n)&&(c.__value=s[4],c.value=c.__value),1&n&&(c.checked=s[0]),I&&g(I.update)&&9&n&&I.update.call(null,s[0]&&s[3]),64&n&&y(e,"dense",s[6]),32&n&&y(e,"inset",s[5]),128&n&&y(e,"disabled",s[7]),T&&T.p&&2048&n&&w(T,P,s,s[11],n,null,null),(!S||2&n)&&p(A,"for",s[1]),(!S||4&n&&V!==(V="s-switch "+s[2]))&&p(a,"class",V),(!S||256&n)&&p(a,"style",s[8])},i:function(s){S||(x(T,s),S=!0)},o:function(s){D(T,s),S=!1},d:function(s){s&&v(a),T&&T.d(s),L=!1,E(O)}}}function S(s,a,e){var c=a.$$slots,i=void 0===c?{}:c,n=a.$$scope,t=a.class,l=void 0===t?"":t,r=a.color,o=void 0===r?"primary":r,u=a.value,d=void 0===u?null:u,f=a.group,h=void 0===f?[]:f,v=a.checked,p=void 0!==v&&v,y=a.inset,_=void 0!==y&&y,b=a.dense,k=void 0!==b&&b,m=a.disabled,$=void 0!==m&&m,g=a.id,w=void 0===g?null:g,x=a.style,D=void 0===x?null:x;w=w||"s-switch-".concat(I(5));var E=Array.isArray(h);return E&&d&&h.indexOf(d)>=0&&(p=!0),s.$$set=function(s){"class"in s&&e(2,l=s.class),"color"in s&&e(3,o=s.color),"value"in s&&e(4,d=s.value),"group"in s&&e(10,h=s.group),"checked"in s&&e(0,p=s.checked),"inset"in s&&e(5,_=s.inset),"dense"in s&&e(6,k=s.dense),"disabled"in s&&e(7,$=s.disabled),"id"in s&&e(1,w=s.id),"style"in s&&e(8,D=s.style),"$$scope"in s&&e(11,n=s.$$scope)},[p,w,l,o,d,_,k,$,D,function(){if(E&&d){var s=h.indexOf(d);s<0?h.push(d):h.splice(s,1),e(10,h)}},h,n,i,function(a){R(s,a)},function(){p=this.checked,e(0,p)}]}var L=function(a){s(r,l);var e=A(r);function r(s){var a;return c(this,r),a=e.call(this),i(t(a),s,S,V,n,{class:2,color:3,value:4,group:10,checked:0,inset:5,dense:6,disabled:7,id:1,style:8}),a}return r}();export{L as S};
