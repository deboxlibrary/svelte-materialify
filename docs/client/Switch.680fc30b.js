import{S as s,i as e,s as a,v as l,e as c,a as i,f as n,g as d,d as t,h as r,j as o,w as u,k as h,q as p,_ as f,y as v,z as b,x as _,t as k,l as y,$,ad as w,ab as g}from"./client.ba230517.js";import{T as m}from"./index.e534b65b.js";function x(s){let e,a,w,g,x,E,I,D,V,j,A,L,O,S;const T=s[12].default,q=l(T,s,s[11],null);return{c(){e=c("div"),a=c("div"),w=c("input"),g=i(),x=c("div"),E=i(),I=c("div"),V=i(),j=c("label"),q&&q.c(),this.h()},l(s){e=n(s,"DIV",{class:!0,style:!0});var l=d(e);a=n(l,"DIV",{class:!0});var c=d(a);w=n(c,"INPUT",{type:!0,role:!0,"aria-checked":!0,id:!0,disabled:!0,value:!0}),g=t(c),x=n(c,"DIV",{class:!0}),d(x).forEach(r),E=t(c),I=n(c,"DIV",{class:!0}),d(I).forEach(r),c.forEach(r),V=t(l),j=n(l,"LABEL",{for:!0});var i=d(j);q&&q.l(i),i.forEach(r),l.forEach(r),this.h()},h(){o(w,"type","checkbox"),o(w,"role","switch"),o(w,"aria-checked",s[0]),o(w,"id",s[1]),w.disabled=s[7],w.__value=s[4],w.value=w.__value,o(x,"class","s-switch__track"),o(I,"class","s-switch__thumb"),o(a,"class","s-switch__wrapper"),u(a,"dense",s[6]),u(a,"inset",s[5]),u(a,"disabled",s[7]),o(j,"for",s[1]),o(e,"class",A="s-switch "+s[2]),o(e,"style",s[8])},m(l,c){h(l,e,c),p(e,a),p(a,w),w.checked=s[0],p(a,g),p(a,x),p(a,E),p(a,I),p(e,V),p(e,j),q&&q.m(j,null),L=!0,O||(S=[f(w,"change",s[14]),f(w,"change",s[9]),f(w,"change",s[13]),v(D=m.call(null,a,s[0]&&s[3]))],O=!0)},p(s,[l]){(!L||1&l)&&o(w,"aria-checked",s[0]),(!L||2&l)&&o(w,"id",s[1]),(!L||128&l)&&(w.disabled=s[7]),(!L||16&l)&&(w.__value=s[4],w.value=w.__value),1&l&&(w.checked=s[0]),D&&b(D.update)&&9&l&&D.update.call(null,s[0]&&s[3]),64&l&&u(a,"dense",s[6]),32&l&&u(a,"inset",s[5]),128&l&&u(a,"disabled",s[7]),q&&q.p&&2048&l&&_(q,T,s,s[11],l,null,null),(!L||2&l)&&o(j,"for",s[1]),(!L||4&l&&A!==(A="s-switch "+s[2]))&&o(e,"class",A),(!L||256&l)&&o(e,"style",s[8])},i(s){L||(k(q,s),L=!0)},o(s){y(q,s),L=!1},d(s){s&&r(e),q&&q.d(s),O=!1,$(S)}}}function E(s,e,a){let{$$slots:l={},$$scope:c}=e,{class:i=""}=e,{color:n="primary"}=e,{value:d=null}=e,{group:t=[]}=e,{checked:r=!1}=e,{inset:o=!1}=e,{dense:u=!1}=e,{disabled:h=!1}=e,{id:p=null}=e,{style:f=null}=e;p=p||"s-switch-"+w(5);const v=Array.isArray(t);return v&&d&&t.indexOf(d)>=0&&(r=!0),s.$$set=s=>{"class"in s&&a(2,i=s.class),"color"in s&&a(3,n=s.color),"value"in s&&a(4,d=s.value),"group"in s&&a(10,t=s.group),"checked"in s&&a(0,r=s.checked),"inset"in s&&a(5,o=s.inset),"dense"in s&&a(6,u=s.dense),"disabled"in s&&a(7,h=s.disabled),"id"in s&&a(1,p=s.id),"style"in s&&a(8,f=s.style),"$$scope"in s&&a(11,c=s.$$scope)},[r,p,i,n,d,o,u,h,f,function(){if(v&&d){const s=t.indexOf(d);s<0?t.push(d):t.splice(s,1),a(10,t)}},t,c,l,function(e){g(s,e)},function(){r=this.checked,a(0,r)}]}class I extends s{constructor(s){super(),e(this,s,E,x,a,{class:2,color:3,value:4,group:10,checked:0,inset:5,dense:6,disabled:7,id:1,style:8})}}export{I as S};
