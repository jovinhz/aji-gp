import{t as i}from"./index-90b0ce28.js";/* empty css              *//* empty css              */import"./index-3c58d5d9.js";import{c as g,g as v}from"./index-4821d3fa.js";import{P as h}from"./TabPane-0e361ed2.js";import{d as k,r as y,e as s,a7 as t,c,g as C,ac as l,ae as U,u as b,af as w,ag as I,a6 as x}from"./plugin-vueexport-helper-50c92bea.js";import{_ as V,a as P}from"./index-4df9c67c.js";const B=e=>(w("data-v-7fb9ad93"),e=e(),I(),e),N=["onClick"],S=["onClick"],j=["src"],D={key:2},E=B(()=>l("div",{class:"ant-upload-text"},"Upload",-1)),M=k({__name:"UploadImage",props:{imgUrl:null},emits:["change"],setup(e,{emit:r}){const n=y(!1);function p(a){n.value=a}function d(){n.value=!0}function _(a){g(a.file)&&v(a.file,o=>{r("change",o,a.file)})}function u(){r("change","",null)}return(a,o)=>{const m=V,f=P;return s(),t("div",null,[c(m,{name:"icon",listType:"picture-card",accept:".png,.jpg,.jpeg",class:"avatar-uploader-has-overlay","show-upload-list":!1,beforeUpload:()=>!1,onChange:_},{default:C(()=>[l("div",null,[e.imgUrl?(s(),t("div",{key:0,class:"avatar-uploader-overlay",onClick:o[0]||(o[0]=i(()=>{},["stop"]))},[l("i",{class:"fe fe-eye me-3",onClick:i(d,["stop"])},null,8,N),l("i",{class:"fe fe-trash-2",onClick:i(u,["stop"])},null,8,S)])):U("",!0),e.imgUrl?(s(),t("img",{key:1,class:"upload-image-thumbnail",src:e.imgUrl,alt:""},null,8,j)):(s(),t("div",D,[c(b(h)),E]))])]),_:1},8,["beforeUpload"]),c(f,{style:{display:"none"},preview:{visible:n.value,onVisibleChange:p},src:e.imgUrl},null,8,["preview","src"])])}}});const J=x(M,[["__scopeId","data-v-7fb9ad93"]]);export{J as _};
