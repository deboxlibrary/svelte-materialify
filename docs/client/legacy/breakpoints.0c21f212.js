var n=getComputedStyle(document.documentElement),e=parseInt(n.getPropertyValue("--theme-bp-xs"),10),t=parseInt(n.getPropertyValue("--theme-bp-sm"),10),a=parseInt(n.getPropertyValue("--theme-bp-md"),10),d=parseInt(n.getPropertyValue("--theme-bp-lg"),10),o=parseInt(n.getPropertyValue("--theme-bp-xl"),10),c={xs:e,sm:t,md:a,lg:d,xl:o},p={"xs-only":"only screen and (max-width: ".concat(t-1,"px)"),"sm-only":"only screen and (min-width: ".concat(t,"px) and (max-width: ").concat(a-1,"px)"),"sm-and-down":"only screen and (max-width: ".concat(a-1,"px)"),"sm-and-up":"only screen and (min-width: ".concat(t,"px)"),"md-only":"only screen and (min-width: ".concat(a,"px) and (max-width: ").concat(d-1,"px)"),"md-and-down":"only screen and (max-width: ".concat(d-1,"px)"),"md-and-up":"only screen and (min-width: ".concat(a,"px)"),"lg-only":"only screen and (min-width: ".concat(d,"px) and (max-width: ").concat(o-1,"px)"),"lg-and-down":"only screen and (max-width: ".concat(o-1,"px)"),"lg-and-up":"only screen and (min-width: ".concat(d,"px)"),"xl-only":"only screen and (min-width: ".concat(o,"px)")};export default p;export{c as breakpoints};