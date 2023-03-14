var q=Object.defineProperty;var P=(i,o,a)=>o in i?q(i,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[o]=a;var U=(i,o,a)=>(P(i,typeof o!="symbol"?o+"":o,a),a);import{B as O}from"./index-00a8ffd2.js";/* empty css              *//* empty css              */import"./index-97222043.js";/* empty css              *//* empty css              */import{H as z,u as $}from"./HttpClient-64290c27.js";import{o as G,a as T}from"./index-f9e6a35e.js";import{d as H,r as y,O as B,w as R,e as x,a7 as K,ac as d,f as E,g as l,a9 as v,c as n,u as C,aa as I,ae as J,a as L,ak as Q}from"./_plugin-vue_export-helper-50c92bea.js";import{M as W}from"./Modal-5bd2bcee.js";import{_ as X}from"./index-f9be8515.js";import{I as Y}from"./Input-97482d20.js";import{_ as Z,F as ee}from"./Form-2caee2e0.js";import{_ as ae}from"./TextArea-afcadf10.js";import{_ as te}from"./AgGrid.vue_vue_type_script_setup_true_lang-d3dbb188.js";import{T as ne,_ as oe}from"./TabPane-053c7c75.js";import"./dayjs.min-2389bdff.js";import"./pickAttrs-44b65975.js";import"./_flatRest-6ef3b5aa.js";import"./isSymbol-5a6ec0b4.js";import"./debounce-52dc8683.js";import"./useRefs-9f478e5b.js";class D{static list(){return this.HttpClient.axiosInstance.get("/suppliers")}static create(o){return this.HttpClient.withOptions({showSuccessFeedback:!0,successFeedbackMessage:"Supplier berhasil ditambah"}).axiosInstance.post("/suppliers",o)}static update(o,a){return this.HttpClient.withOptions({showSuccessFeedback:!0,successFeedbackMessage:"Supplier berhasil diupdate"}).axiosInstance.put(`/suppliers/${o}`,a)}static delete(o){return this.HttpClient.withOptions({showSuccessFeedback:!0,successFeedbackMessage:"Supplier berhasil dihapus"}).axiosInstance.delete(`/suppliers/${o}`)}}U(D,"HttpClient",new z);const le={class:"card card-custom card-dense"},se={class:"card-header"},ie={class:"card-title w-100 d-flex justify-content-between"},re=d("h4",{class:"card-label"},"Form Master Supplier",-1),de={class:"card-body"},ue={class:"row"},ce={class:"col-lg-6"},me=d("i",{class:"fe fe-save me-2"},null,-1),pe=H({__name:"Form",props:{formData:null,editMode:{type:Boolean}},emits:["cancelEdit","onSuccess"],setup(i,{emit:o}){const a=i,u=y(),e=B({}),g={code:[{required:!0,message:"Kode supplier wajib diisi",trigger:"change"}],name:[{required:!0,message:"Nama supplier wajib diisi",trigger:"change"}],email:[{type:"email",message:"Email tidak valid",trigger:"change"}]},{run:h,loading:w,response:c}=$(),{run:_,loading:m,response:k}=$();async function M(){var r,t,b;try{a.editMode?await h(D.update((r=a.formData)==null?void 0:r.id,{name:e.name,address:e.address,contact_person:e.contact_person,email:e.email,fax:e.fax,handphone:e.handphone,note:e.note,phone_number:e.phone_number})):(await h(D.create({code:e.code.toUpperCase(),name:e.name,address:e.address,contact_person:e.contact_person,email:e.email,fax:e.fax,handphone:e.handphone,note:e.note,phone_number:e.phone_number})),(t=c.value)!=null&&t.success&&S()),(b=c.value)!=null&&b.success&&o("onSuccess")}catch{}}async function N(){var r,t;try{await _(D.delete((r=a.formData)==null?void 0:r.id)),(t=k.value)!=null&&t.success&&(S(),o("onSuccess"))}catch{}}function S(){var r;if(a.editMode){for(const t in e)e[t]=void 0;o("cancelEdit")}else(r=u.value)==null||r.resetFields()}function V(){var r;W.confirm({title:"Konfirmasi Hapus Supplier",content:`Apakah kamu sudah yakin ingin menghapus data ${(r=a.formData)==null?void 0:r.code} ?`,cancelText:"Batal",onOk:N})}return R(()=>a.formData,()=>{var r;a.formData&&((r=u.value)==null||r.clearValidate(),e.code=a.formData.code,e.address=a.formData.address,e.contact_person=a.formData.contact_person,e.email=a.formData.email,e.fax=a.formData.fax,e.handphone=a.formData.handphone,e.name=a.formData.name,e.note=a.formData.note,e.phone_number=a.formData.phone_number)}),(r,t)=>{const b=X,p=Y,f=Z,j=ae,F=O,A=ee;return x(),K("div",le,[d("div",se,[d("div",ie,[re,i.editMode?(x(),E(b,{key:0,color:"orange"},{default:l(()=>[v("Mode Edit")]),_:1})):(x(),E(b,{key:1,color:"cyan"},{default:l(()=>[v("Mode Input")]),_:1}))])]),d("div",de,[n(A,{ref_key:"formRef",ref:u,model:e,rules:g,"label-col":{style:{width:"220px"}},colon:!1,"label-align":"left",onFinish:t[9]||(t[9]=s=>C(G)(u.value,M))},{default:l(()=>[d("div",ue,[d("div",ce,[n(f,{label:"Kode Supplier",name:"code",ref:"code"},{default:l(()=>[n(p,{value:e.code,"onUpdate:value":t[0]||(t[0]=s=>e.code=s),valueModifiers:{trim:!0},style:{"text-transform":"uppercase"},disabled:i.editMode},null,8,["value","disabled"])]),_:1},512),n(f,{label:"Nama Supplier",name:"name",ref:"name"},{default:l(()=>[n(p,{value:e.name,"onUpdate:value":t[1]||(t[1]=s=>e.name=s)},null,8,["value"])]),_:1},512),n(f,{label:"Alamat",name:"address",ref:"address"},{default:l(()=>[n(p,{value:e.address,"onUpdate:value":t[2]||(t[2]=s=>e.address=s)},null,8,["value"])]),_:1},512),n(f,{label:"No Telp",name:"phone_number",ref:"phone_number"},{default:l(()=>[n(p,{value:e.phone_number,"onUpdate:value":t[3]||(t[3]=s=>e.phone_number=s)},null,8,["value"])]),_:1},512),n(f,{label:"HP",name:"handphone",ref:"handphone"},{default:l(()=>[n(p,{value:e.handphone,"onUpdate:value":t[4]||(t[4]=s=>e.handphone=s)},null,8,["value"])]),_:1},512),n(f,{label:"Fax",name:"fax",ref:"fax"},{default:l(()=>[n(p,{value:e.fax,"onUpdate:value":t[5]||(t[5]=s=>e.fax=s)},null,8,["value"])]),_:1},512),n(f,{label:"Email",name:"email",ref:"email"},{default:l(()=>[n(p,{value:e.email,"onUpdate:value":t[6]||(t[6]=s=>e.email=s)},null,8,["value"])]),_:1},512),n(f,{label:"Kontak",name:"contact_person",ref:"contact_person"},{default:l(()=>[n(p,{value:e.contact_person,"onUpdate:value":t[7]||(t[7]=s=>e.contact_person=s)},null,8,["value"])]),_:1},512),n(f,{label:"Note",name:"note",ref:"note"},{default:l(()=>[n(j,{value:e.note,"onUpdate:value":t[8]||(t[8]=s=>e.note=s)},null,8,["value"])]),_:1},512),n(F,{type:"primary","html-type":"submit",loading:C(w)},{default:l(()=>[me,d("span",null,I(i.editMode?"Edit":"Simpan"),1)]),_:1},8,["loading"]),n(F,{class:"mx-3",onClick:S},{default:l(()=>[v(I(i.editMode?"Batal Edit":"Bersihkan"),1)]),_:1}),i.editMode?(x(),E(F,{key:0,danger:"",type:"primary",onClick:V,loading:C(m)},{default:l(()=>[v(" Hapus ")]),_:1},8,["loading"])):J("",!0)])])]),_:1},8,["model"])])])}}}),fe=H({__name:"DataTable",props:{idx:null},emits:["rowClick"],setup(i,{emit:o}){const a=i,u=B({value:[{field:"code",headerName:"Kode Supplier",flex:0,width:120,pinned:"left"},{field:"name",headerName:"Nama",flex:0,width:120,pinned:"left"},{field:"address",headerName:"Alamat",flex:0,width:150},{field:"contact_person",headerName:"Kontak",flex:0,width:150},{field:"phone_number",headerName:"Telp",flex:0,width:100},{field:"handphone",headerName:"HP",flex:0,width:100},{field:"fax",headerName:"Fax",flex:0,width:100},{field:"email",headerName:"Email",flex:0,width:120},{field:"note",headerName:"Keterangan",flex:0,width:150},{field:"created_at",headerName:"Diinput Tgl",...T},{field:"updated_at",headerName:"Diupdate Tgl",...T},{field:"created_by_user_username",headerName:"Diinput Oleh",flex:0,width:120},{field:"updated_by_user_username",headerName:"Diupdate Oleh",flex:0,width:120}]}),e=B({value:null}),{run:g,response:h,loading:w}=$();async function c(){var m;try{await g(D.list()),(m=h.value)!=null&&m.success&&(e.value=h.value.data)}catch{}}function _(m){o("rowClick",m)}return L(()=>{c()}),R(()=>a.idx,()=>{c()}),(m,k)=>(x(),K("div",null,[n(te,{"row-data":e.value,"column-defs":u.value,loading:C(w),onRowClick:_},null,8,["row-data","column-defs","loading"])]))}}),_e=d("span",null,[d("i",{class:"fe fe-edit-2 me-2"}),v(" Input ")],-1),he=d("span",null,[d("i",{class:"fe fe-search me-2"}),v(" Browse ")],-1),ve=d("i",{class:"fe fe-refresh-cw me-2"},null,-1),je=H({__name:"index",setup(i){const o=y("1"),a=y(),u=y(!1),e=y(1);function g(c){o.value="1",a.value={...c},u.value=!0}function h(){u.value=!1}function w(c){e.value+=1,c!==void 0&&(u.value=c)}return(c,_)=>{const m=oe,k=O,M=ne;return x(),K("div",null,[n(M,{class:"input-browse-tab",activeKey:o.value,"onUpdate:activeKey":_[1]||(_[1]=N=>o.value=N),animated:""},Q({default:l(()=>[n(m,{key:"1"},{tab:l(()=>[_e]),default:l(()=>[n(pe,{"form-data":a.value,"edit-mode":u.value,onCancelEdit:h,onOnSuccess:w},null,8,["form-data","edit-mode"])]),_:1}),n(m,{key:"2"},{tab:l(()=>[he]),default:l(()=>[n(fe,{idx:e.value,onRowClick:g},null,8,["idx"])]),_:1})]),_:2},[o.value==="2"?{name:"rightExtra",fn:l(()=>[n(k,{size:"small",class:"mt-3",onClick:_[0]||(_[0]=N=>e.value+=1)},{default:l(()=>[ve,v(" Refresh Data ")]),_:1})]),key:"0"}:void 0]),1032,["activeKey"])])}}});export{je as default};
