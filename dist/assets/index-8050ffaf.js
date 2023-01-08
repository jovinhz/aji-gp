var q=Object.defineProperty;var P=(i,l,t)=>l in i?q(i,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[l]=t;var T=(i,l,t)=>(P(i,typeof l!="symbol"?l+"":l,t),t);import{B as R}from"./index-166a5e79.js";/* empty css              */import{H as z,u as E}from"./HttpClient-3450d3e1.js";import{I as G}from"./index-91845532.js";import{o as Q,a as $}from"./index-44824ea8.js";import{d as H,r as k,Q as B,w as O,g as b,a2 as U,a7 as d,j as F,k as o,a4 as v,b as a,u as N,a5 as I,a9 as J,e as L,aj as W}from"./runtime-core.esm-bundler-441c3591.js";import{M as X,_ as Y,T as Z,a as ee}from"./Modal-1ac32efd.js";import{_ as ae,F as te}from"./index-ccdd175c.js";import{_ as ne}from"./TextArea-d0614689.js";import{_ as oe}from"./AgGrid.vuevuetypescriptsetuptruelang-2a0939af.js";import"./plugin-vueexport-helper-c27b6911.js";class C{static list(){return this.HttpClient.axiosInstance.get("/suppliers")}static create(l){return this.HttpClient.withOptions({showSuccessFeedback:!0,successFeedbackMessage:"Supplier berhasil ditambah"}).axiosInstance.post("/suppliers",l)}static update(l,t){return this.HttpClient.withOptions({showSuccessFeedback:!0,successFeedbackMessage:"Supplier berhasil diupdate"}).axiosInstance.put(`/suppliers/${l}`,t)}}T(C,"HttpClient",new z);const le={class:"card card-custom card-dense"},se={class:"card-header"},ie={class:"card-title w-100 d-flex justify-content-between"},de=d("h4",{class:"card-label"},"Form Master Supplier",-1),re={class:"card-body"},ue={class:"row"},ce={class:"col-lg-6"},me=d("i",{class:"fe fe-save me-2"},null,-1),pe=H({__name:"Form",props:{formData:null,editMode:{type:Boolean}},emits:["cancelEdit","onSuccess"],setup(i,{emit:l}){const t=i,r=k(),e=B({}),x={code:[{required:!0,message:"Kode supplier wajib diisi",trigger:"change"}],name:[{required:!0,message:"Nama supplier wajib diisi",trigger:"change"}],email:[{type:"email",message:"Email tidak valid",trigger:"change"}]},{run:_,loading:g,response:u}=E(),{run:h,loading:c,response:y}=E();async function M(){var m,n,w;try{t.editMode?await _(C.update((m=t.formData)==null?void 0:m.id,{name:e.name,address:e.address,contact_person:e.contact_person,email:e.email,fax:e.fax,handphone:e.handphone,note:e.note,phone_number:e.phone_number})):(await _(C.create({code:e.code.toUpperCase(),name:e.name,address:e.address,contact_person:e.contact_person,email:e.email,fax:e.fax,handphone:e.handphone,note:e.note,phone_number:e.phone_number})),(n=u.value)!=null&&n.success&&K()),(w=u.value)!=null&&w.success&&l("onSuccess")}catch{}}async function D(){}function K(){var m;if(t.editMode){for(const n in e)e[n]=void 0;l("cancelEdit")}else(m=r.value)==null||m.resetFields()}function j(){X.confirm({title:"Konfirmasi Hapus Supplier",content:"Apakah kamu sudah yakin ingin menghapus data [Edit Here]",cancelText:"Batal",onOk:D})}return O(()=>t.formData,()=>{var m;t.formData&&((m=r.value)==null||m.clearValidate(),e.code=t.formData.code,e.address=t.formData.address,e.contact_person=t.formData.contact_person,e.email=t.formData.email,e.fax=t.formData.fax,e.handphone=t.formData.handphone,e.name=t.formData.name,e.note=t.formData.note,e.phone_number=t.formData.phone_number)}),(m,n)=>{const w=Y,p=G,f=ae,V=ne,S=R,A=te;return b(),U("div",le,[d("div",se,[d("div",ie,[de,i.editMode?(b(),F(w,{key:0,color:"orange"},{default:o(()=>[v("Mode Edit")]),_:1})):(b(),F(w,{key:1,color:"cyan"},{default:o(()=>[v("Mode Input")]),_:1}))])]),d("div",re,[a(A,{ref_key:"formRef",ref:r,model:e,rules:x,"label-col":{style:{width:"220px"}},colon:!1,"label-align":"left",onFinish:n[9]||(n[9]=s=>N(Q)(r.value,M))},{default:o(()=>[d("div",ue,[d("div",ce,[a(f,{label:"Kode Supplier",name:"code",ref:"code"},{default:o(()=>[a(p,{value:e.code,"onUpdate:value":n[0]||(n[0]=s=>e.code=s),valueModifiers:{trim:!0},style:{"text-transform":"uppercase"},disabled:i.editMode},null,8,["value","disabled"])]),_:1},512),a(f,{label:"Nama Supplier",name:"name",ref:"name"},{default:o(()=>[a(p,{value:e.name,"onUpdate:value":n[1]||(n[1]=s=>e.name=s)},null,8,["value"])]),_:1},512),a(f,{label:"Alamat",name:"address",ref:"address"},{default:o(()=>[a(p,{value:e.address,"onUpdate:value":n[2]||(n[2]=s=>e.address=s)},null,8,["value"])]),_:1},512),a(f,{label:"No Telp",name:"phone_number",ref:"phone_number"},{default:o(()=>[a(p,{value:e.phone_number,"onUpdate:value":n[3]||(n[3]=s=>e.phone_number=s)},null,8,["value"])]),_:1},512),a(f,{label:"HP",name:"handphone",ref:"handphone"},{default:o(()=>[a(p,{value:e.handphone,"onUpdate:value":n[4]||(n[4]=s=>e.handphone=s)},null,8,["value"])]),_:1},512),a(f,{label:"Fax",name:"fax",ref:"fax"},{default:o(()=>[a(p,{value:e.fax,"onUpdate:value":n[5]||(n[5]=s=>e.fax=s)},null,8,["value"])]),_:1},512),a(f,{label:"email",name:"email",ref:"email"},{default:o(()=>[a(p,{value:e.email,"onUpdate:value":n[6]||(n[6]=s=>e.email=s)},null,8,["value"])]),_:1},512),a(f,{label:"Kontak",name:"contact_person",ref:"contact_person"},{default:o(()=>[a(p,{value:e.contact_person,"onUpdate:value":n[7]||(n[7]=s=>e.contact_person=s)},null,8,["value"])]),_:1},512),a(f,{label:"Note",name:"note",ref:"note"},{default:o(()=>[a(V,{value:e.note,"onUpdate:value":n[8]||(n[8]=s=>e.note=s)},null,8,["value"])]),_:1},512),a(S,{type:"primary","html-type":"submit",loading:N(g)},{default:o(()=>[me,d("span",null,I(i.editMode?"Edit":"Simpan"),1)]),_:1},8,["loading"]),a(S,{class:"mx-3",onClick:K},{default:o(()=>[v(I(i.editMode?"Batal Edit":"Bersihkan"),1)]),_:1}),i.editMode?(b(),F(S,{key:0,danger:"",type:"primary",onClick:j,loading:N(c)},{default:o(()=>[v(" Hapus ")]),_:1},8,["loading"])):J("",!0)])])]),_:1},8,["model"])])])}}}),fe=H({__name:"DataTable",props:{idx:null},emits:["rowClick"],setup(i,{emit:l}){const t=i,r=B({value:[{field:"code",headerName:"Kode Supplier",flex:0,width:120,pinned:"left"},{field:"name",headerName:"Nama",flex:0,width:120,pinned:"left"},{field:"address",headerName:"Alamat",flex:0,width:150},{field:"contact_person",headerName:"Kontak",flex:0,width:150},{field:"phone_number",headerName:"Telp",flex:0,width:100},{field:"handphone",headerName:"HP",flex:0,width:100},{field:"fax",headerName:"Fax",flex:0,width:100},{field:"email",headerName:"Email",flex:0,width:120},{field:"note",headerName:"Catatan",flex:0,width:150},{field:"created_at",headerName:"Diinput Tgl",...$},{field:"updated_at",headerName:"Diupdate Tgl",...$},{field:"created_by_user_username",headerName:"Diinput Oleh",flex:0,width:120},{field:"updated_by_user_username",headerName:"Diupdate Oleh",flex:0,width:120}]}),e=B({value:null}),{run:x,response:_,loading:g}=E();async function u(){var c;try{await x(C.list()),(c=_.value)!=null&&c.success&&(e.value=_.value.data)}catch{}}function h(c){l("rowClick",c)}return L(()=>{u()}),O(()=>t.idx,()=>{u()}),(c,y)=>(b(),U("div",null,[a(oe,{"row-data":e.value,"column-defs":r.value,loading:N(g),onRowClick:h},null,8,["row-data","column-defs","loading"])]))}}),_e=d("span",null,[d("i",{class:"fe fe-edit-2 me-2"}),v(" Input ")],-1),he=d("span",null,[d("i",{class:"fe fe-search me-2"}),v(" Browse ")],-1),ve=d("i",{class:"fe fe-refresh-cw me-2"},null,-1),Ee=H({__name:"index",setup(i){const l=k("1"),t=k(),r=k(!1),e=k(1);function x(u){l.value="1",t.value={...u},r.value=!0}function _(){r.value=!1}function g(u){e.value+=1,u!==void 0&&(r.value=u)}return(u,h)=>{const c=ee,y=R,M=Z;return b(),U("div",null,[a(M,{class:"input-browse-tab",activeKey:l.value,"onUpdate:activeKey":h[1]||(h[1]=D=>l.value=D),animated:""},W({default:o(()=>[a(c,{key:"1"},{tab:o(()=>[_e]),default:o(()=>[a(pe,{"form-data":t.value,"edit-mode":r.value,onCancelEdit:_,onOnSuccess:g},null,8,["form-data","edit-mode"])]),_:1}),a(c,{key:"2"},{tab:o(()=>[he]),default:o(()=>[a(fe,{idx:e.value,onRowClick:x},null,8,["idx"])]),_:1})]),_:2},[l.value==="2"?{name:"rightExtra",fn:o(()=>[a(y,{size:"small",class:"mt-3",onClick:h[0]||(h[0]=D=>e.value+=1)},{default:o(()=>[ve,v(" Refresh Data ")]),_:1})]),key:"0"}:void 0]),1032,["activeKey"])])}}});export{Ee as default};
