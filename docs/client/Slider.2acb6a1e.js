import{S as n,i as t,s as e,c as s,b as a,m as i,t as l,l as r,n as o,V as c,M as d,ah as u,a9 as m,v as p,e as h,f as b,g as $,h as f,j as y,k as v,x as g,a as x,d as A,w as L,a0 as C}from"./client.ba230517.js";import{I as E}from"./Input.1dcd5e5c.js";const I=n=>({}),N=n=>({}),T=n=>({}),V=n=>({});function _(n){let t,e;const s=n[19].prepend,a=p(s,n,n[21],V);return{c(){t=h("div"),a&&a.c(),this.h()},l(n){t=b(n,"DIV",{slot:!0});var e=$(t);a&&a.l(e),e.forEach(f),this.h()},h(){y(t,"slot","prepend")},m(n,s){v(n,t,s),a&&a.m(t,null),e=!0},p(n,t){a&&a.p&&2097152&t&&g(a,s,n,n[21],t,T,V)},i(n){e||(l(a,n),e=!0)},o(n){r(a,n),e=!1},d(n){n&&f(t),a&&a.d(n)}}}function j(n){let t,e;const s=n[19].append,a=p(s,n,n[21],N);return{c(){t=h("div"),a&&a.c(),this.h()},l(n){t=b(n,"DIV",{slot:!0});var e=$(t);a&&a.l(e),e.forEach(f),this.h()},h(){y(t,"slot","append")},m(n,s){v(n,t,s),a&&a.m(t,null),e=!0},p(n,t){a&&a.p&&2097152&t&&g(a,s,n,n[21],t,I,N)},i(n){e||(l(a,n),e=!0)},o(n){r(a,n),e=!1},d(n){n&&f(t),a&&a.d(n)}}}function w(n){let t,e,s,a,i,o;const c=n[19].default,d=p(c,n,n[21],null);return{c(){t=x(),e=h("label"),d&&d.c(),s=x(),a=h("div"),i=x(),this.h()},l(n){t=A(n),e=b(n,"LABEL",{class:!0});var l=$(e);d&&d.l(l),l.forEach(f),s=A(n),a=b(n,"DIV",{disabled:!0,style:!0}),$(a).forEach(f),i=A(n),this.h()},h(){y(e,"class","s-slider__label"),L(e,"inverse-label",n[2]),y(a,"disabled",n[4]),y(a,"style",n[6]),L(a,"persistent-thumb",n[1])},m(l,r){v(l,t,r),v(l,e,r),d&&d.m(e,null),v(l,s,r),v(l,a,r),n[20](a),v(l,i,r),o=!0},p(n,t){d&&d.p&&2097152&t&&g(d,c,n,n[21],t,null,null),4&t&&L(e,"inverse-label",n[2]),(!o||16&t)&&y(a,"disabled",n[4]),(!o||64&t)&&y(a,"style",n[6]),2&t&&L(a,"persistent-thumb",n[1])},i(n){o||(l(d,n),o=!0)},o(n){r(d,n),o=!1},d(l){l&&f(t),l&&f(e),d&&d.d(l),l&&f(s),l&&f(a),n[20](null),l&&f(i)}}}function D(n){let t,e;return t=new E({props:{class:"s-slider",color:n[0],readonly:n[3],disabled:n[4],hint:n[5],$$slots:{default:[w],append:[j],prepend:[_]},$$scope:{ctx:n}}}),{c(){s(t.$$.fragment)},l(n){a(t.$$.fragment,n)},m(n,s){i(t,n,s),e=!0},p(n,[e]){const s={};1&e&&(s.color=n[0]),8&e&&(s.readonly=n[3]),16&e&&(s.disabled=n[4]),32&e&&(s.hint=n[5]),2097366&e&&(s.$$scope={dirty:e,ctx:n}),t.$set(s)},i(n){e||(l(t.$$.fragment,n),e=!0)},o(n){r(t.$$.fragment,n),e=!1},d(n){o(t,n)}}}function S(n,t,e){let s,a,i,{$$slots:l={},$$scope:r}=t;const o=c();let{min:p=0}=t,{max:h=100}=t,{value:b=(p+h)/2}=t,{connect:$=!!Array.isArray(b)||"lower"}=t,{color:f="primary"}=t,{step:y=null}=t,{margin:v=null}=t,{limit:g=null}=t,{padding:x=null}=t,{thumb:A=!1}=t,{persistentThumb:L=!1}=t,{thumbClass:E="primary-color"}=t,{vertical:I=!1}=t,{inverseLabel:N=!1}=t,{readonly:T=!1}=t,{disabled:V=null}=t,{hint:_=""}=t,{style:j=null}=t;return d(()=>(u.cssClasses.tooltip="tooltip "+E,u.create(s,{cssPrefix:"s-slider__",format:{to:n=>Math.round(n),from:n=>Number(n)},start:b,connect:$,margin:v,limit:g,padding:x,range:{min:p,max:h},orientation:I?"vertical":"horizontal",step:y,tooltips:Array.isArray(A)?A.map(n=>"function"==typeof n?{to:n}:n):"function"==typeof A?{to:A}:A}),e(22,a=s.noUiSlider),a.on("update",(n,t)=>{e(8,b=function(n){return Array.isArray(n)?1===n.length?Number(n[0]):n.map(n=>Number(n)):Number(n)}(n)),i=b,o("update",{value:n,handle:t})}),a.on("change",(n,t)=>{o("change",{value:n,handle:t})}),()=>{a.destroy()})),m(()=>{b!==i&&a.set(b,!1)}),n.$$set=n=>{"min"in n&&e(9,p=n.min),"max"in n&&e(10,h=n.max),"value"in n&&e(8,b=n.value),"connect"in n&&e(11,$=n.connect),"color"in n&&e(0,f=n.color),"step"in n&&e(12,y=n.step),"margin"in n&&e(13,v=n.margin),"limit"in n&&e(14,g=n.limit),"padding"in n&&e(15,x=n.padding),"thumb"in n&&e(16,A=n.thumb),"persistentThumb"in n&&e(1,L=n.persistentThumb),"thumbClass"in n&&e(17,E=n.thumbClass),"vertical"in n&&e(18,I=n.vertical),"inverseLabel"in n&&e(2,N=n.inverseLabel),"readonly"in n&&e(3,T=n.readonly),"disabled"in n&&e(4,V=n.disabled),"hint"in n&&e(5,_=n.hint),"style"in n&&e(6,j=n.style),"$$scope"in n&&e(21,r=n.$$scope)},n.$$.update=()=>{4517376&n.$$.dirty&&null!=a&&a.updateOptions({range:{min:p,max:h},orientation:I?"vertical":"horizontal",connect:$,margin:v,limit:g,padding:x})},[f,L,N,T,V,_,j,s,b,p,h,$,y,v,g,x,A,E,I,l,function(n){C[n?"unshift":"push"](()=>{s=n,e(7,s)})},r]}class z extends n{constructor(n){super(),t(this,n,S,D,e,{min:9,max:10,value:8,connect:11,color:0,step:12,margin:13,limit:14,padding:15,thumb:16,persistentThumb:1,thumbClass:17,vertical:18,inverseLabel:2,readonly:3,disabled:4,hint:5,style:6})}}export{z as S};