import{_ as t,a as n,b as s,c as a,i as e,s as i,d as c,S as l,A as r,g as o,k as u,l as f,m as v,n as d,p,q as m,D as y,t as h,r as $,a1 as g,U as x,ag as b,ar as C,as as R}from"./client.c6131498.js";function D(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,i=n(t);if(a){var c=n(this).constructor;e=Reflect.construct(i,arguments,c)}else e=i.apply(this,arguments);return s(this,e)}}function I(t){var n,s,a,e=t[9].default,i=r(e,t,t[8],null);return{c:function(){n=o("div"),i&&i.c(),this.h()},l:function(t){n=u(t,"DIV",{class:!0,role:!0,style:!0});var s=f(n);i&&i.l(s),s.forEach(v),this.h()},h:function(){d(n,"class",s="s-item-group "+t[0]),d(n,"role",t[1]),d(n,"style",t[2])},m:function(t,s){p(t,n,s),i&&i.m(n,null),a=!0},p:function(t,c){var l=m(c,1)[0];i&&i.p&&256&l&&y(i,e,t,t[8],l,null,null),(!a||1&l&&s!==(s="s-item-group "+t[0]))&&d(n,"class",s),(!a||2&l)&&d(n,"role",t[1]),(!a||4&l)&&d(n,"style",t[2])},i:function(t){a||(h(i,t),a=!0)},o:function(t){$(i,t),a=!1},d:function(t){t&&v(n),i&&i.d(t)}}}var S={};function _(t,n,s){var a=n.$$slots,e=void 0===a?{}:a,i=n.$$scope,c=n.class,l=void 0===c?"":c,r=n.activeClass,o=void 0===r?"":r,u=n.value,f=void 0===u?[]:u,v=n.multiple,d=void 0!==v&&v,p=n.mandatory,m=void 0!==p&&p,y=n.max,h=void 0===y?1/0:y,$=n.role,D=void 0===$?null:$,I=n.style,_=void 0===I?null:I,j=g(),k=R(f),q=k.subscribe((function(t){j("change",t)}));x(q);var A=-1;return b(S,{select:function(t){f.includes(t)?m&&1===f.length||(f.splice(f.indexOf(t),1),s(3,f)):d?f.length<h&&s(3,f=[].concat(C(f),[t])):s(3,f=[t])},register:function(t){var n=k.subscribe((function(n){t(n)}));x(n)},index:function(){return A+=1},_activeClass:o}),t.$$set=function(t){"class"in t&&s(0,l=t.class),"activeClass"in t&&s(4,o=t.activeClass),"value"in t&&s(3,f=t.value),"multiple"in t&&s(5,d=t.multiple),"mandatory"in t&&s(6,m=t.mandatory),"max"in t&&s(7,h=t.max),"role"in t&&s(1,D=t.role),"style"in t&&s(2,_=t.style),"$$scope"in t&&s(8,i=t.$$scope)},t.$$.update=function(){8&t.$$.dirty&&k.set(f)},[l,D,_,f,o,d,m,h,i,e]}var j=function(n){t(r,l);var s=D(r);function r(t){var n;return a(this,r),n=s.call(this),e(c(n),t,_,I,i,{class:0,activeClass:4,value:3,multiple:5,mandatory:6,max:7,role:1,style:2}),n}return r}();export{j as I,S as a};
