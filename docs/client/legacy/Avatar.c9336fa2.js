import{_ as t,a as s,b as a,c as n,i as e,s as i,d as c,S as l,A as r,g as o,k as u,l as f,m as v,n as p,C as d,p as h,E as y,af as $,q as m,D as z,G as R,t as D,r as x}from"./client.c6131498.js";function g(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,i=s(t);if(n){var c=s(this).constructor;e=Reflect.construct(i,arguments,c)}else e=i.apply(this,arguments);return a(this,e)}}function A(t){var s,a,n,e,i,c,l=t[5].default,g=r(l,t,t[4],null);return{c:function(){s=o("div"),g&&g.c(),this.h()},l:function(t){s=u(t,"DIV",{class:!0,style:!0});var a=f(s);g&&g.l(a),a.forEach(v),this.h()},h:function(){p(s,"class",a="s-avatar "+t[0]),p(s,"style",t[3]),d(s,"tile",t[2])},m:function(a,l){h(a,s,l),g&&g.m(s,null),e=!0,i||(c=y(n=$.call(null,s,{"avatar-size":t[1]})),i=!0)},p:function(t,i){var c=m(i,1)[0];g&&g.p&&16&c&&z(g,l,t,t[4],c,null,null),(!e||1&c&&a!==(a="s-avatar "+t[0]))&&p(s,"class",a),(!e||8&c)&&p(s,"style",t[3]),n&&R(n.update)&&2&c&&n.update.call(null,{"avatar-size":t[1]}),5&c&&d(s,"tile",t[2])},i:function(t){e||(D(g,t),e=!0)},o:function(t){x(g,t),e=!1},d:function(t){t&&v(s),g&&g.d(t),i=!1,c()}}}function E(t,s,a){var n=s.$$slots,e=void 0===n?{}:n,i=s.$$scope,c=s.class,l=void 0===c?"":c,r=s.size,o=void 0===r?"48px":r,u=s.tile,f=void 0!==u&&u,v=s.style,p=void 0===v?"":v;return t.$$set=function(t){"class"in t&&a(0,l=t.class),"size"in t&&a(1,o=t.size),"tile"in t&&a(2,f=t.tile),"style"in t&&a(3,p=t.style),"$$scope"in t&&a(4,i=t.$$scope)},[l,o,f,p,i,e]}var S=function(s){t(r,l);var a=g(r);function r(t){var s;return n(this,r),s=a.call(this),e(c(s),t,E,A,i,{class:0,size:1,tile:2,style:3}),s}return r}();export{S as A};
