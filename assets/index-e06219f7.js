var R=Object.defineProperty;var T=(l,a,t)=>a in l?R(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t;var b=(l,a,t)=>(T(l,typeof a!="symbol"?a+"":a,t),t);import{B as K}from"./index-00a8ffd2.js";/* empty css              */import{_ as g}from"./AgGrid.vue_vue_type_script_setup_true_lang-d3dbb188.js";import{H as z,u as D}from"./HttpClient-64290c27.js";import{t as _,a as p}from"./index-f9e6a35e.js";import{d as x,O as h,a as q,w as F,e as y,a7 as N,c as o,u as P,r as v,g as s,a9 as k,ac as f}from"./_plugin-vue_export-helper-50c92bea.js";import{T as B,_ as G}from"./TabPane-053c7c75.js";import"./index-97222043.js";import"./dayjs.min-2389bdff.js";import"./useRefs-9f478e5b.js";import"./_flatRest-6ef3b5aa.js";import"./isSymbol-5a6ec0b4.js";class C{static list(){return this.HttpClient.axiosInstance.get("/worklist_product_lists")}static history(){return this.HttpClient.axiosInstance.get("/worklist_product_lists/histories")}}b(C,"HttpClient",new z);const H=x({__name:"ListPermintaanTable",props:{idx:null},emits:["rowClick"],setup(l,{emit:a}){const t=l,u=h({value:[{field:"worklist.worklist_number",headerName:"No Projek",flex:0,width:120},{field:"product.code",headerName:"Kode Produk",flex:0,width:120},{field:"product.name",headerName:"Nama Produk",minWidth:120},{field:"product.unit.code",headerName:"Satuan",flex:0,width:90},{field:"qty_request",headerName:"Qty Request",flex:0,width:120,filter:"agNumberColumnFilter",type:"numericColumn",valueGetter:e=>parseFloat(e.data.qty_request),valueFormatter:e=>_(e.value)},{field:"qty_realization",headerName:"Qty Realisasi",flex:0,width:120,filter:"agNumberColumnFilter",type:"numericColumn",valueGetter:e=>parseFloat(e.data.qty_realization??0),valueFormatter:e=>_(e.value)},{field:"created_at",headerName:"Diinput Tgl",...p},{field:"updated_at",headerName:"Diupdate Tgl",...p},{field:"created_by_user_username",headerName:"Diinput Oleh",flex:0,width:120},{field:"updated_by_user_username",headerName:"Diupdate Oleh",flex:0,width:120}]}),d=h({value:null}),{run:i,response:r,loading:c}=D();async function n(){var e;try{await i(C.list()),(e=r.value)!=null&&e.success&&(d.value=r.value.data)}catch{}}function m(e){a("rowClick",e)}return q(()=>{n()}),F(()=>t.idx,()=>{n()}),(e,w)=>(y(),N("div",null,[o(g,{"row-data":d.value,"column-defs":u.value,loading:P(c),onRowClick:m},null,8,["row-data","column-defs","loading"])]))}}),O=x({__name:"RiwayatPermintaanTable",props:{idx:null},emits:["rowClick"],setup(l,{emit:a}){const t=l,u=h({value:[{field:"worklist.worklist_number",headerName:"No Projek",flex:0,width:120},{field:"product.code",headerName:"Kode Produk",flex:0,width:120},{field:"product.name",headerName:"Nama Produk",minWidth:120},{field:"product.unit.code",headerName:"Satuan",flex:0,width:90},{field:"qty_request",headerName:"Qty Request",flex:0,width:120,filter:"agNumberColumnFilter",type:"numericColumn",valueGetter:e=>parseFloat(e.data.qty_request),valueFormatter:e=>_(e.value)},{field:"qty_realization",headerName:"Qty Realisasi",flex:0,width:120,filter:"agNumberColumnFilter",type:"numericColumn",valueGetter:e=>parseFloat(e.data.qty_realization??0),valueFormatter:e=>_(e.value)},{field:"created_at",headerName:"Diinput Tgl",...p},{field:"updated_at",headerName:"Diupdate Tgl",...p},{field:"created_by_user_username",headerName:"Diinput Oleh",flex:0,width:120},{field:"updated_by_user_username",headerName:"Diupdate Oleh",flex:0,width:120}]}),d=h({value:null}),{run:i,response:r,loading:c}=D();async function n(){var e;try{await i(C.history()),(e=r.value)!=null&&e.success&&(d.value=r.value.data)}catch{}}function m(e){a("rowClick",e)}return q(()=>{n()}),F(()=>t.idx,()=>{n()}),(e,w)=>(y(),N("div",null,[o(g,{"row-data":d.value,"column-defs":u.value,loading:P(c),onRowClick:m},null,8,["row-data","column-defs","loading"])]))}}),Q=f("span",null,[f("i",{class:"fe fe-search me-2"}),k(" List Permintaan ")],-1),S=f("span",null,[f("i",{class:"fe fe-search me-2"}),k(" Riwayat ")],-1),V=f("i",{class:"fe fe-refresh-cw me-2"},null,-1),ee=x({__name:"index",setup(l){const a=v("1"),t=v(1),u=v(1);return(d,i)=>{const r=G,c=K,n=B;return y(),N("div",null,[o(n,{class:"input-browse-tab",activeKey:a.value,"onUpdate:activeKey":i[1]||(i[1]=m=>a.value=m),animated:""},{rightExtra:s(()=>[o(c,{size:"small",class:"mt-3",onClick:i[0]||(i[0]=()=>{a.value==="1"?t.value+=1:u.value+=1})},{default:s(()=>[V,k(" Refresh Data ")]),_:1})]),default:s(()=>[o(r,{key:"1"},{tab:s(()=>[Q]),default:s(()=>[o(H,{idx:t.value},null,8,["idx"])]),_:1}),o(r,{key:"2"},{tab:s(()=>[S]),default:s(()=>[o(O,{idx:u.value},null,8,["idx"])]),_:1})]),_:1},8,["activeKey"])])}}});export{ee as default};
