var N=Object.defineProperty;var b=(a,e,t)=>e in a?N(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var f=(a,e,t)=>(b(a,typeof e!="symbol"?e+"":e,t),t);import{B as g}from"./index-153eefc2.js";import{_ as B}from"./AgGrid.vuevuetypescriptsetuptruelang-ab13ecb9.js";import{H as D,u as K}from"./HttpClient-9b37a6d8.js";import{d as v,O as p,a as H,w as T,e as w,a7 as x,c as i,u as F,r as _,ak as M,g as l,a9 as h,ac as d}from"./plugin-vueexport-helper-0ef99882.js";import{T as R,_ as S}from"./TabPane-a6349958.js";import"./index-7c3bc22f.js";class k{static list(){return this.HttpClient.axiosInstance.get("/product_stocks")}}f(k,"HttpClient",new D);const V=v({__name:"DataTable",props:{idx:null},emits:["rowClick"],setup(a,{emit:e}){const t=a,m=p({value:[{field:"product.code",headerName:"Kode Produk",flex:0,width:150,pinned:"left"},{field:"product.name",headerName:"Nama Produk",flex:0,width:250,pinned:"left"},{field:"minimum_stock",headerName:"Min Stok",flex:0,width:100,type:"numericColumn"},{field:"maximum_stock",headerName:"Max Stok",flex:0,width:100,type:"numericColumn"},{field:"qty",headerName:"Qty",filter:"agNumberColumnFilter",type:"numericColumn",valueGetter:o=>parseFloat(o.data.qty)}]}),n=p({value:null}),{run:c,response:r,loading:u}=K();async function s(){var o;try{await c(k.list()),(o=r.value)!=null&&o.success&&(n.value=r.value.data)}catch{}}function y(o){e("rowClick",o)}return H(()=>{s()}),T(()=>t.idx,()=>{s()}),(o,C)=>(w(),x("div",null,[i(B,{"row-data":n.value,"column-defs":m.value,loading:F(u),onRowClick:y},null,8,["row-data","column-defs","loading"])]))}}),$=d("span",null,[d("i",{class:"fe fe-search me-2"}),h(" Browse ")],-1),q=d("i",{class:"fe fe-refresh-cw me-2"},null,-1),U=v({__name:"index",setup(a){const e=_("2"),t=_(1);return(m,n)=>{const c=S,r=g,u=R;return w(),x("div",null,[i(u,{class:"input-browse-tab",activeKey:e.value,"onUpdate:activeKey":n[2]||(n[2]=s=>e.value=s),animated:""},M({default:l(()=>[i(c,{key:"2"},{tab:l(()=>[$]),default:l(()=>[i(V,{idx:t.value,onRowClick:n[0]||(n[0]=()=>{})},null,8,["idx"])]),_:1})]),_:2},[e.value==="2"?{name:"rightExtra",fn:l(()=>[i(r,{size:"small",class:"mt-3",onClick:n[1]||(n[1]=s=>t.value+=1)},{default:l(()=>[q,h(" Refresh Data ")]),_:1})]),key:"0"}:void 0]),1032,["activeKey"])])}}});export{U as default};
