var k=Object.defineProperty;var I=(s,a,t)=>a in s?k(s,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[a]=t;var g=(s,a,t)=>(I(s,typeof a!="symbol"?a+"":a,t),t);import{B as S}from"./index-0bb8ea7a.js";import{o as F}from"./index-a5a9580b.js";import{b as j,ao as C}from"./index-88df4a80.js";import{H as B,u as P}from"./HttpClient-ea8ece11.js";import{d as U,r as H,Q as N,g as O,a7 as R,ac as r,b as n,k as i,u as _,am as q,af as z,ag as D,aa as V,a6 as A}from"./plugin-vueexport-helper-23a171d5.js";import{F as J,I as E,_ as G}from"./Input-1a0f2199.js";import{_ as M}from"./Password-29e3d508.js";class v{static login(a){return this.HttpClient.withOptions({showSuccessFeedback:!0,successFeedbackMessage:"Selamat Datang"}).axiosInstance.post("/sessions",a)}}g(v,"HttpClient",new B);const u=s=>(z("data-v-e272f207"),s=s(),D(),s),Q={class:"container-fluid",style:{overflow:"hidden",height:"100vh"}},T={class:"row h-100"},$=q('<div class="col-lg-5 left-side" data-v-e272f207><div class="d-flex flex-column justify-content-between left-content" data-v-e272f207><div class="d-flex align-items-center position-relative" data-v-e272f207><img id="company-logo" src="'+C+'" alt="" data-v-e272f207><h1 class="t-white brand-title m-0" data-v-e272f207>Aneka Jasa Indonesia</h1></div><div data-v-e272f207><h3 class="t-white" data-v-e272f207>Core System</h3><span class="t-gray" data-v-e272f207>Ready To Operate</span></div><div data-v-e272f207><span class="t-gray" data-v-e272f207>© 2023 Aneka Jasa Indonesia</span></div></div></div>',1),K={class:"col-lg-7 d-flex justify-content-center align-items-center"},W={class:"right-content"},X=u(()=>r("h2",{class:"mb-5 text-center"},"Office Login",-1)),Y=u(()=>r("i",{class:"fe fe-user"},null,-1)),Z=u(()=>r("i",{class:"fe fe-lock"},null,-1)),ee=U({__name:"LoginPage",setup(s){const a=j(),{run:t,loading:p,response:f}=P(),m=H(),o=N({username:"john_doe",password:"john"}),h={username:[{required:!0,message:"Username wajib diisi",trigger:"change"}],password:[{required:!0,message:"Password wajib diisi",trigger:"change"}]};async function w(){var l;try{if(await t(v.login({username:o.username,password:o.password})),(l=f.value)!=null&&l.success){const e=f.value.data;a.login(e.token,{id:e.user.id,is_allow_to_login:e.user.is_allow_to_login,staff:e.user.staff,username:e.user.username})}}catch{}}return(l,e)=>{const y=E,c=G,x=M,L=S,b=J;return O(),R("div",Q,[r("div",T,[$,r("div",K,[r("div",W,[X,n(b,{ref_key:"formRefLogin",ref:m,layout:"vertical",model:o,rules:h,"hide-required-mark":"",onFinish:e[2]||(e[2]=d=>_(F)(m.value,w))},{default:i(()=>[n(c,{ref:"username",name:"username"},{default:i(()=>[n(y,{size:"large",placeholder:"User ID",value:o.username,"onUpdate:value":e[0]||(e[0]=d=>o.username=d)},{prefix:i(()=>[Y]),_:1},8,["value"])]),_:1},512),n(c,{ref:"password",name:"password"},{default:i(()=>[n(x,{size:"large",placeholder:"Password",value:o.password,"onUpdate:value":e[1]||(e[1]=d=>o.password=d)},{prefix:i(()=>[Z]),_:1},8,["value"])]),_:1},512),n(c,{class:"mt-5"},{default:i(()=>[n(L,{type:"primary","html-type":"submit",size:"large",class:"w-100 hover-drop-shadow",loading:_(p)},{default:i(()=>[r("span",null,V(_(p)?"":"LOGIN"),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])])])])])}}});const le=A(ee,[["__scopeId","data-v-e272f207"]]);export{le as default};
