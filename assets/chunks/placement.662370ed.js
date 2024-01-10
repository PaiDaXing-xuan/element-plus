import{h as b,k as _,r as n,o as $,c as k,a as e,w as o,u as O,b1 as C,F as h,d,b as S,t as x}from"../app.e6cee091.js";const T=d("Begin Tour"),j=d("upload"),P=d("save"),U=S("img",{src:"https://element-plus.org/images/element-plus-logo.svg",alt:"tour.png"},null,-1),B=S("div",null,"Put you files here.",-1),F=b({__name:"basic",setup(V){const s=_(),u=_(),f=_(),a=_(!1);return(y,l)=>{const r=n("el-button"),c=n("el-divider"),g=n("el-space"),i=n("el-tour-step"),v=n("el-tour");return $(),k(h,null,[e(r,{type:"primary",onClick:l[0]||(l[0]=t=>a.value=!0)},{default:o(()=>[T]),_:1}),e(c),e(g,null,{default:o(()=>[e(r,{ref_key:"ref1",ref:s},{default:o(()=>[j]),_:1},512),e(r,{ref_key:"ref2",ref:u,type:"primary"},{default:o(()=>[P]),_:1},512),e(r,{ref_key:"ref3",ref:f,icon:O(C)},null,8,["icon"])]),_:1}),e(v,{modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=t=>a.value=t)},{default:o(()=>{var t,p,m;return[e(i,{target:(t=s.value)==null?void 0:t.$el,title:"Upload File"},{default:o(()=>[U,B]),_:1},8,["target"]),e(i,{target:(p=u.value)==null?void 0:p.$el,title:"Save",description:"Save your changes"},null,8,["target"]),e(i,{target:(m=f.value)==null?void 0:m.$el,title:"Other Actions",description:"Click to see other"},null,8,["target"])]}),_:1},8,["modelValue"])],64)}}});var X=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));const z=d("Begin Tour"),M=d("upload"),w=d("save"),A=b({__name:"indicator",setup(V){const s=_(),u=_(),f=_(),a=_(!1);return(y,l)=>{const r=n("el-button"),c=n("el-divider"),g=n("el-space"),i=n("el-tour-step"),v=n("el-tour");return $(),k(h,null,[e(r,{type:"primary",onClick:l[0]||(l[0]=t=>a.value=!0)},{default:o(()=>[z]),_:1}),e(c),e(g,null,{default:o(()=>[e(r,{ref_key:"ref1",ref:s},{default:o(()=>[M]),_:1},512),e(r,{ref_key:"ref2",ref:u,type:"primary"},{default:o(()=>[w]),_:1},512),e(r,{ref_key:"ref3",ref:f,icon:O(C)},null,8,["icon"])]),_:1}),e(v,{modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=t=>a.value=t)},{indicators:o(({current:t,total:p})=>[S("span",null,x(t+1)+" / "+x(p),1)]),default:o(()=>{var t,p,m;return[e(i,{target:(t=s.value)==null?void 0:t.$el,title:"Upload File",description:"Put you files here."},null,8,["target"]),e(i,{target:(p=u.value)==null?void 0:p.$el,title:"Save",description:"Save your changes"},null,8,["target"]),e(i,{target:(m=f.value)==null?void 0:m.$el,title:"Other Actions",description:"Click to see other"},null,8,["target"])]}),_:1},8,["modelValue"])],64)}}});var Y=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"}));const N=d("Begin Tour"),R=d("upload"),D=d("save"),E=S("img",{src:"https://element-plus.org/images/element-plus-logo.svg",alt:"tour.png"},null,-1),q=S("div",null,"Put you files here.",-1),G=b({__name:"mask",setup(V){const s=_(),u=_(),f=_(),a=_(!1);return(y,l)=>{const r=n("el-button"),c=n("el-divider"),g=n("el-space"),i=n("el-tour-step"),v=n("el-tour");return $(),k(h,null,[e(r,{type:"primary",onClick:l[0]||(l[0]=t=>a.value=!0)},{default:o(()=>[N]),_:1}),e(c),e(g,null,{default:o(()=>[e(r,{ref_key:"ref1",ref:s},{default:o(()=>[R]),_:1},512),e(r,{ref_key:"ref2",ref:u,type:"primary"},{default:o(()=>[D]),_:1},512),e(r,{ref_key:"ref3",ref:f,icon:O(C)},null,8,["icon"])]),_:1}),e(v,{modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=t=>a.value=t),mask:{style:{boxShadow:"inset 0 0 15px #333"},color:"rgba(80, 255, 255, .4)"}},{default:o(()=>{var t,p,m;return[e(i,{target:(t=s.value)==null?void 0:t.$el,title:"Upload File"},{default:o(()=>[E,q]),_:1},8,["target"]),e(i,{target:(p=u.value)==null?void 0:p.$el,title:"Save",description:"Save your changes",mask:{style:{boxShadow:"inset 0 0 15px #fff"},color:"rgba(40, 0, 255, .4)"}},null,8,["target","mask"]),e(i,{target:(m=f.value)==null?void 0:m.$el,title:"Other Actions",description:"Click to see other",mask:!1},null,8,["target"])]}),_:1},8,["modelValue","mask"])],64)}}});var Z=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"}));const H=d("Begin Tour"),I=d("upload"),J=d("save"),K=b({__name:"non-modal",setup(V){const s=_(),u=_(),f=_(),a=_(!1);return(y,l)=>{const r=n("el-button"),c=n("el-divider"),g=n("el-space"),i=n("el-tour-step"),v=n("el-tour");return $(),k(h,null,[e(r,{type:"primary",onClick:l[0]||(l[0]=t=>a.value=!0)},{default:o(()=>[H]),_:1}),e(c),e(g,null,{default:o(()=>[e(r,{ref_key:"ref1",ref:s},{default:o(()=>[I]),_:1},512),e(r,{ref_key:"ref2",ref:u,type:"primary"},{default:o(()=>[J]),_:1},512),e(r,{ref_key:"ref3",ref:f,icon:O(C)},null,8,["icon"])]),_:1}),e(v,{modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=t=>a.value=t),type:"primary",mask:!1},{default:o(()=>{var t,p,m;return[e(i,{target:(t=s.value)==null?void 0:t.$el,title:"Upload File",description:"Put you files here."},null,8,["target"]),e(i,{target:(p=u.value)==null?void 0:p.$el,title:"Save",description:"Save your changes"},null,8,["target"]),e(i,{target:(m=f.value)==null?void 0:m.$el,title:"Other Actions",description:"Click to see other"},null,8,["target"])]}),_:1},8,["modelValue"])],64)}}});var ee=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"}));const L=d(" Begin Tour "),Q=b({__name:"placement",setup(V){const s=_(),u=_(!1);return(f,a)=>{const y=n("el-button"),l=n("el-tour-step"),r=n("el-tour");return $(),k(h,null,[e(y,{ref_key:"btnRef",ref:s,type:"primary",onClick:a[0]||(a[0]=c=>u.value=!0)},{default:o(()=>[L]),_:1},512),e(r,{modelValue:u.value,"onUpdate:modelValue":a[1]||(a[1]=c=>u.value=c)},{default:o(()=>{var c,g;return[e(l,{title:"Center",description:"Displayed in the center of screen."}),e(l,{title:"Right",description:"On the right of target.",placement:"right",target:(c=s.value)==null?void 0:c.$el},null,8,["target"]),e(l,{title:"Top",description:"On the top of target.",placement:"top",target:(g=s.value)==null?void 0:g.$el},null,8,["target"])]}),_:1},8,["modelValue"])],64)}}});var te=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"}));export{X as _,Y as a,Z as b,ee as c,te as d};