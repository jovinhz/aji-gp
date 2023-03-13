var W=Object.defineProperty;var q=(o,e,a)=>e in o?W(o,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[e]=a;var I=(o,e,a)=>(q(o,typeof e!="symbol"?e+"":e,a),a);import{B as T}from"./index-90b0ce28.js";/* empty css              *//* empty css              */import"./index-f73f074f.js";/* empty css              *//* empty css              */import{H as z,u as B}from"./HttpClient-1b2eaec7.js";import{o as A,a as K}from"./index-b46cc542.js";import{d as E,r as w,O as G,w as R,e as h,a7 as H,ac as l,f as $,g as n,a9 as f,c as i,u as C,aa as O,ae as J,a as L,ak as P}from"./plugin-vueexport-helper-50c92bea.js";import{M as Q}from"./Modal-7e7fe8a9.js";import{_ as X}from"./index-adc802a8.js";import{I as Y}from"./Input-0690b7a8.js";import{_ as Z,F as ee}from"./Form-bf91ef97.js";import{_ as te}from"./TextArea-dc2b2442.js";import{_ as ae}from"./AgGrid.vuevuetypescriptsetuptruelang-ab623fe9.js";import{T as oe,_ as se}from"./TabPane-e550f0d2.js";import"./dayjs.min-527378d9.js";import"./pickAttrs-efa5632c.js";import"./_flatRest-fbf250a7.js";import"./isSymbol-86c3dd79.js";import"./debounce-11220fe5.js";import"./useRefs-c0f8034e.js";class y{static list(){return this.HttpClient.axiosInstance.get("/customer_groups")}static create(e){return this.HttpClient.withOptions({showSuccessFeedback:!0,successFeedbackMessage:"Customer Group berhasil ditambah"}).axiosInstance.post("/customer_groups",e)}static update(e,a){return this.HttpClient.withOptions({showSuccessFeedback:!0,successFeedbackMessage:"Customer Group berhasil diupdate"}).axiosInstance.put(`/customer_groups/${e}`,a)}static delete(e){return this.HttpClient.withOptions({showSuccessFeedback:!0,successFeedbackMessage:"Customer Group berhasil dihapus"}).axiosInstance.delete(`/customer_groups/${e}`)}}I(y,"HttpClient",new z);const ne={class:"card card-custom card-dense"},ie={class:"card-header"},re={class:"card-title w-100 d-flex justify-content-between"},le=l("h4",{class:"card-label"},"Form Master Grup Customer",-1),ce={class:"card-body"},de={class:"row"},ue={class:"col-lg-6"},me=l("i",{class:"fe fe-save me-2"},null,-1),pe=E({__name:"Form",props:{formData:null,editMode:{type:Boolean}},emits:["cancelEdit","onSuccess"],setup(o,{emit:e}){const a=o,c=w(),t=G({}),g={code:[{required:!0,message:"Kode grup wajib diisi",trigger:"change"}],name:[{required:!0,message:"Nama grup wajib diisi",trigger:"change"}]},{run:p,loading:b,response:d}=B(),{run:m,loading:u,response:k}=B();async function x(){var r,s,_;try{a.editMode?await p(y.update((r=a.formData)==null?void 0:r.id,{name:t.name,description:t.description})):(await p(y.create({code:t.code.toUpperCase(),name:t.name,description:t.description})),(s=d.value)!=null&&s.success&&M()),(_=d.value)!=null&&_.success&&e("onSuccess")}catch{}}async function D(){var r,s;try{await m(y.delete((r=a.formData)==null?void 0:r.id)),(s=k.value)!=null&&s.success&&(M(),e("onSuccess"))}catch{}}function M(){var r;if(a.editMode){for(const s in t)t[s]=void 0;e("cancelEdit")}else(r=c.value)==null||r.resetFields()}function U(){var r;Q.confirm({title:"Konfirmasi Hapus Customer Grup",content:`Apakah kamu sudah yakin ingin menghapus data ${(r=a.formData)==null?void 0:r.code} ?`,cancelText:"Batal",onOk:D})}return R(()=>a.formData,()=>{var r;a.formData&&((r=c.value)==null||r.clearValidate(),t.code=a.formData.code,t.name=a.formData.name,t.description=a.formData.description)}),(r,s)=>{const _=X,F=Y,N=Z,V=te,S=T,j=ee;return h(),H("div",ne,[l("div",ie,[l("div",re,[le,o.editMode?(h(),$(_,{key:0,color:"orange"},{default:n(()=>[f("Mode Edit")]),_:1})):(h(),$(_,{key:1,color:"cyan"},{default:n(()=>[f("Mode Input")]),_:1}))])]),l("div",ce,[i(j,{ref_key:"formRef",ref:c,model:t,rules:g,"label-col":{style:{width:"220px"}},colon:!1,"label-align":"left",onFinish:s[3]||(s[3]=v=>C(A)(c.value,x))},{default:n(()=>[l("div",de,[l("div",ue,[i(N,{label:"Kode Grup",name:"code",ref:"code"},{default:n(()=>[i(F,{value:t.code,"onUpdate:value":s[0]||(s[0]=v=>t.code=v),valueModifiers:{trim:!0},style:{"text-transform":"uppercase"},disabled:o.editMode},null,8,["value","disabled"])]),_:1},512),i(N,{label:"Nama Grup",name:"name",ref:"name"},{default:n(()=>[i(F,{value:t.name,"onUpdate:value":s[1]||(s[1]=v=>t.name=v)},null,8,["value"])]),_:1},512),i(N,{label:"Deskripsi",name:"description",ref:"description"},{default:n(()=>[i(V,{value:t.description,"onUpdate:value":s[2]||(s[2]=v=>t.description=v)},null,8,["value"])]),_:1},512),i(S,{type:"primary","html-type":"submit",loading:C(b)},{default:n(()=>[me,l("span",null,O(o.editMode?"Edit":"Simpan"),1)]),_:1},8,["loading"]),i(S,{class:"mx-3",onClick:M},{default:n(()=>[f(O(o.editMode?"Batal Edit":"Bersihkan"),1)]),_:1}),o.editMode?(h(),$(S,{key:0,danger:"",type:"primary",onClick:U,loading:C(u)},{default:n(()=>[f(" Hapus ")]),_:1},8,["loading"])):J("",!0)])])]),_:1},8,["model"])])])}}}),fe=E({__name:"DataTable",props:{idx:null},emits:["rowClick"],setup(o,{emit:e}){const a=o,c=G({value:[{field:"code",headerName:"Kode Grup",minWidth:120,pinned:"left"},{field:"name",headerName:"Nama Grup",minWidth:150},{field:"description",headerName:"Deskripsi",minWidth:100},{field:"created_at",headerName:"Diinput Tgl",...K},{field:"updated_at",headerName:"Diupdate Tgl",...K},{field:"created_by_user_username",headerName:"Diinput Oleh",flex:0,width:120},{field:"updated_by_user_username",headerName:"Diupdate Oleh",flex:0,width:120}]}),t=G({value:null}),{run:g,response:p,loading:b}=B();async function d(){var u;try{await g(y.list()),(u=p.value)!=null&&u.success&&(t.value=p.value.data)}catch{}}function m(u){e("rowClick",u)}return L(()=>{d()}),R(()=>a.idx,()=>{d()}),(u,k)=>(h(),H("div",null,[i(ae,{"row-data":t.value,"column-defs":c.value,loading:C(b),onRowClick:m},null,8,["row-data","column-defs","loading"])]))}}),_e=l("span",null,[l("i",{class:"fe fe-edit-2 me-2"}),f(" Input ")],-1),ve=l("span",null,[l("i",{class:"fe fe-search me-2"}),f(" Browse ")],-1),he=l("i",{class:"fe fe-refresh-cw me-2"},null,-1),Ve=E({__name:"index",setup(o){const e=w("1"),a=w(),c=w(!1),t=w(1);function g(d){e.value="1",a.value={...d},c.value=!0}function p(){c.value=!1}function b(d){t.value+=1,d!==void 0&&(c.value=d)}return(d,m)=>{const u=se,k=T,x=oe;return h(),H("div",null,[i(x,{class:"input-browse-tab",activeKey:e.value,"onUpdate:activeKey":m[1]||(m[1]=D=>e.value=D),animated:""},P({default:n(()=>[i(u,{key:"1"},{tab:n(()=>[_e]),default:n(()=>[i(pe,{"form-data":a.value,"edit-mode":c.value,onCancelEdit:p,onOnSuccess:b},null,8,["form-data","edit-mode"])]),_:1}),i(u,{key:"2"},{tab:n(()=>[ve]),default:n(()=>[i(fe,{idx:t.value,onRowClick:g},null,8,["idx"])]),_:1})]),_:2},[e.value==="2"?{name:"rightExtra",fn:n(()=>[i(k,{size:"small",class:"mt-3",onClick:m[0]||(m[0]=D=>t.value+=1)},{default:n(()=>[he,f(" Refresh Data ")]),_:1})]),key:"0"}:void 0]),1032,["activeKey"])])}}});export{Ve as default};
