import{S as e,i as a,s,am as l,f as c,g as i,h as n,j as d,k as t,q as r,v as o,e as h,a as u,d as p,T as v,w as b,_ as f,y as m,a6 as k,z as x,x as g,t as _,l as y,$ as L,ad as w,ab as $}from"./client.ba230517.js";import{T as E}from"./index.e534b65b.js";function I(e){let a,s,o;return{c(){a=l("svg"),s=l("path"),this.h()},l(e){a=c(e,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0},1);var l=i(a);s=c(l,"path",{d:!0},1),i(s).forEach(n),l.forEach(n),this.h()},h(){d(s,"d",o=e[0]?A:B),d(a,"xmlns","http://www.w3.org/2000/svg"),d(a,"width","24"),d(a,"height","24"),d(a,"viewBox","0 0 24 24")},m(e,l){t(e,a,l),r(a,s)},p(e,a){1&a&&o!==(o=e[0]?A:B)&&d(s,"d",o)},d(e){e&&n(a)}}}function j(e){let a,s,l,w,$,j,A,B,D,T,V,M,O,Z=(e[0]||e[1])&&I(e);const q=e[11].default,z=o(q,e,e[10],null);return{c(){a=h("div"),s=h("div"),l=h("input"),w=u(),$=h("div"),Z&&Z.c(),D=u(),T=h("label"),z&&z.c(),this.h()},l(e){a=c(e,"DIV",{class:!0,style:!0});var d=i(a);s=c(d,"DIV",{class:!0});var t=i(s);l=c(t,"INPUT",{type:!0,role:!0,"aria-checked":!0,id:!0,disabled:!0,value:!0}),w=p(t),$=c(t,"DIV",{class:!0,"aria-hidden":!0});var r=i($);Z&&Z.l(r),r.forEach(n),t.forEach(n),D=p(d),T=c(d,"LABEL",{for:!0});var o=i(T);z&&z.l(o),o.forEach(n),d.forEach(n),this.h()},h(){d(l,"type","checkbox"),d(l,"role","checkbox"),d(l,"aria-checked",e[0]),d(l,"id",e[2]),l.disabled=e[5],l.__value=e[6],l.value=l.__value,void 0!==e[0]&&void 0!==e[1]||v(()=>e[13].call(l)),d($,"class","s-checkbox__background"),d($,"aria-hidden","true"),d(s,"class",j="s-checkbox__wrapper "+e[3]),b(s,"disabled",e[5]),d(T,"for",e[2]),d(a,"class","s-checkbox"),d(a,"style",e[7])},m(c,i){t(c,a,i),r(a,s),r(s,l),l.checked=e[0],l.indeterminate=e[1],r(s,w),r(s,$),Z&&Z.m($,null),r(a,D),r(a,T),z&&z.m(T,null),V=!0,M||(O=[f(l,"change",e[13]),f(l,"change",e[8]),f(l,"change",e[12]),m(A=k.call(null,s,{centered:!0})),m(B=E.call(null,s,!(!e[0]&&!e[1])&&e[4]))],M=!0)},p(e,[c]){(!V||1&c)&&d(l,"aria-checked",e[0]),(!V||4&c)&&d(l,"id",e[2]),(!V||32&c)&&(l.disabled=e[5]),(!V||64&c)&&(l.__value=e[6],l.value=l.__value),1&c&&(l.checked=e[0]),2&c&&(l.indeterminate=e[1]),e[0]||e[1]?Z?Z.p(e,c):(Z=I(e),Z.c(),Z.m($,null)):Z&&(Z.d(1),Z=null),(!V||8&c&&j!==(j="s-checkbox__wrapper "+e[3]))&&d(s,"class",j),B&&x(B.update)&&19&c&&B.update.call(null,!(!e[0]&&!e[1])&&e[4]),40&c&&b(s,"disabled",e[5]),z&&z.p&&1024&c&&g(z,q,e,e[10],c,null,null),(!V||4&c)&&d(T,"for",e[2]),(!V||128&c)&&d(a,"style",e[7])},i(e){V||(_(z,e),V=!0)},o(e){y(z,e),V=!1},d(e){e&&n(a),Z&&Z.d(),z&&z.d(e),M=!1,L(O)}}}const A="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",B="M4,11L4,13L20,13L20,11L4,11Z";function D(e,a,s){let{$$slots:l={},$$scope:c}=a,{class:i=""}=a,{color:n="primary"}=a,{checked:d=!1}=a,{indeterminate:t=!1}=a,{disabled:r=!1}=a,{value:o=null}=a,{group:h=null}=a,{id:u=null}=a,{style:p=null}=a;u=u||"s-checkbox-"+w(5);const v=Array.isArray(h);return v&&o&&h.indexOf(o)>=0&&(d=!0),e.$$set=e=>{"class"in e&&s(3,i=e.class),"color"in e&&s(4,n=e.color),"checked"in e&&s(0,d=e.checked),"indeterminate"in e&&s(1,t=e.indeterminate),"disabled"in e&&s(5,r=e.disabled),"value"in e&&s(6,o=e.value),"group"in e&&s(9,h=e.group),"id"in e&&s(2,u=e.id),"style"in e&&s(7,p=e.style),"$$scope"in e&&s(10,c=e.$$scope)},[d,t,u,i,n,r,o,p,function(){if(v&&o){const e=h.indexOf(o);e<0?h.push(o):h.splice(e,1),s(9,h)}},h,c,l,function(a){$(e,a)},function(){d=this.checked,t=this.indeterminate,s(0,d),s(1,t)}]}class T extends e{constructor(e){super(),a(this,e,D,j,s,{class:3,color:4,checked:0,indeterminate:1,disabled:5,value:6,group:9,id:2,style:7})}}export{T as C};
