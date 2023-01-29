var X=Object.defineProperty;var Y=(l,s,t)=>s in l?X(l,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[s]=t;var G=(l,s,t)=>(Y(l,typeof s!="symbol"?s+"":s,t),t);import{B as j}from"./index-0bb8ea7a.js";import{_ as Z}from"./AgGrid.vuevuetypescriptsetuptruelang-7e3c6181.js";import{o as ee,a as S}from"./index-a69e05bf.js";import"./index-db653870.js";import{S as ae,_ as te}from"./index-6aba2020.js";/* empty css              */import{_ as oe}from"./InputDropdown.vuevuetypescriptsetuptruelang-94aa0dee.js";import{H as ne,u as M}from"./HttpClient-a8d470b1.js";import{d as K,r as b,Q as B,w as A,e as V,g as y,a7 as T,ac as r,j as H,k as n,a9 as v,b as a,u as k,aa as R,ae as se,ak as ie}from"./plugin-vueexport-helper-23a171d5.js";import{M as le}from"./Modal-5e5e8906.js";import{_ as re}from"./index-2b5a45ec.js";import{I as de,_ as ue,F as ce}from"./Input-6750102f.js";import{_ as me}from"./TextArea-fa00ec12.js";import{T as fe,_ as pe}from"./TabPane-6246fdd8.js";import"./pickAttrs-349b6a5f.js";import"./useMemo-18bb8ebc.js";import"./DownOutlined-4b2aeb27.js";import"./SearchOutlined-731e9f20.js";class C{static list(){return this.HttpClient.axiosInstance.get("/customers")}static create(s){return this.HttpClient.withOptions({showSuccessFeedback:!0,successFeedbackMessage:"Customer berhasil ditambah"}).axiosInstance.post("/customers",s)}static update(s,t){return this.HttpClient.withOptions({showSuccessFeedback:!0,successFeedbackMessage:"Customer berhasil diupdate"}).axiosInstance.put(`/customers/${s}`,t)}static formOptions(){return this.HttpClient.axiosInstance.get("/customers/form_options")}}G(C,"HttpClient",new ne);const _e={class:"card card-custom card-dense"},ve={class:"card-header"},he={class:"card-title w-100 d-flex justify-content-between"},ge=r("h4",{class:"card-label"},"Form Master Customer",-1),be={class:"card-body"},xe={class:"row"},we={class:"col-lg-6"},ye=r("i",{class:"fe fe-save me-2"},null,-1),De=K({__name:"Form",props:{formData:null,editMode:{type:Boolean}},emits:["cancelEdit","onSuccess"],setup(l,{emit:s}){const t=l,h=[{field:"code",headerName:"Kode Grup"},{field:"name",headerName:"Nama Grup"}],c=b(""),x=b(),f=b(),e=B({is_active:!0}),m={code:[{required:!0,message:"Kode customer wajib diisi",trigger:"change"}],name:[{required:!0,message:"Nama customer wajib diisi",trigger:"change"}],customer_group_id:[{required:!0,message:"Grup customer wajib dipilih",trigger:"change"}],address:[{required:!0,message:"Alamat customer wajib diisi",trigger:"change"}]},{run:p,loading:d,response:w}=M(),{run:F,loading:N,response:E}=M(),{run:Fe,loading:q,response:$e}=M();async function P(){var u,o,D;try{t.editMode?await p(C.update((u=t.formData)==null?void 0:u.id,{address:e.address,customer_group_id:e.customer_group_id,name:e.name,fax:e.fax,handphone:e.handphone,note:e.note,is_active:e.is_active,phone_number:e.phone_number})):(await p(C.create({code:e.code.toUpperCase(),address:e.address,customer_group_id:e.customer_group_id,name:e.name,fax:e.fax,handphone:e.handphone,note:e.note,is_active:e.is_active,phone_number:e.phone_number})),(o=w.value)!=null&&o.success&&U()),(D=w.value)!=null&&D.success&&s("onSuccess")}catch{}}async function z(){}function U(){var u;if(t.editMode){for(const o in e)e[o]=void 0;e.is_active=!0,s("cancelEdit")}else(u=f.value)==null||u.resetFields();c.value=""}function Q(){le.confirm({title:"Konfirmasi Hapus Customer",content:"Apakah kamu sudah yakin ingin menghapus data [Edit Here]",cancelText:"Batal",onOk:z})}return A(()=>t.formData,()=>{var u;t.formData&&((u=f.value)==null||u.clearValidate(),e.code=t.formData.code,e.address=t.formData.address,e.customer_group_id=t.formData.customer_group.id,e.fax=t.formData.fax,e.handphone=t.formData.handphone,e.name=t.formData.name,e.note=t.formData.note,e.phone_number=t.formData.phone_number,e.is_active=t.formData.is_active,c.value=`${t.formData.customer_group.code} - ${t.formData.customer_group.name}`)}),V(async()=>{var u;try{await F(C.formOptions()),(u=E.value)!=null&&u.success&&(x.value=E.value.data)}catch{}}),(u,o)=>{const D=re,g=de,_=ue,J=me,I=ae,L=te,$=j,W=ce;return y(),T("div",_e,[r("div",ve,[r("div",he,[ge,l.editMode?(y(),H(D,{key:0,color:"orange"},{default:n(()=>[v("Mode Edit")]),_:1})):(y(),H(D,{key:1,color:"cyan"},{default:n(()=>[v("Mode Input")]),_:1}))])]),r("div",be,[a(W,{ref_key:"formRef",ref:f,model:e,rules:m,"label-col":{style:{width:"220px"}},colon:!1,"label-align":"left",onFinish:o[9]||(o[9]=i=>k(ee)(f.value,P))},{default:n(()=>[r("div",xe,[r("div",we,[a(_,{label:"Kode Customer",name:"code",ref:"code"},{default:n(()=>[a(g,{value:e.code,"onUpdate:value":o[0]||(o[0]=i=>e.code=i),valueModifiers:{trim:!0},style:{"text-transform":"uppercase"},disabled:l.editMode},null,8,["value","disabled"])]),_:1},512),a(_,{label:"Nama Customer",name:"name",ref:"name"},{default:n(()=>[a(g,{value:e.name,"onUpdate:value":o[1]||(o[1]=i=>e.name=i)},null,8,["value"])]),_:1},512),a(_,{label:"Grup Customer",name:"customer_group_id",ref:"customer_group_id"},{default:n(()=>{var i;return[a(oe,{"column-defs":h,"grid-data":((i=x.value)==null?void 0:i.customer_groups)??[],loading:k(N),value:void 0,"value-display":c.value,onChange:o[2]||(o[2]=O=>{e.customer_group_id=O.id,c.value=`${O.code} - ${O.name}`})},null,8,["grid-data","loading","value-display"])]}),_:1},512),a(_,{label:"Alamat",name:"address",ref:"address"},{default:n(()=>[a(J,{value:e.address,"onUpdate:value":o[3]||(o[3]=i=>e.address=i)},null,8,["value"])]),_:1},512),a(_,{label:"Telp",name:"phone_number",ref:"phone_number"},{default:n(()=>[a(g,{value:e.phone_number,"onUpdate:value":o[4]||(o[4]=i=>e.phone_number=i)},null,8,["value"])]),_:1},512),a(_,{label:"HP",name:"handphone",ref:"handphone"},{default:n(()=>[a(g,{value:e.handphone,"onUpdate:value":o[5]||(o[5]=i=>e.handphone=i)},null,8,["value"])]),_:1},512),a(_,{label:"Fax",name:"fax",ref:"fax"},{default:n(()=>[a(g,{value:e.fax,"onUpdate:value":o[6]||(o[6]=i=>e.fax=i)},null,8,["value"])]),_:1},512),a(_,{label:"Keterangan",name:"note",ref:"note"},{default:n(()=>[a(g,{value:e.note,"onUpdate:value":o[7]||(o[7]=i=>e.note=i)},null,8,["value"])]),_:1},512),a(_,{label:"Status",name:"is_active",ref:"is_active"},{default:n(()=>[a(L,{value:e.is_active,"onUpdate:value":o[8]||(o[8]=i=>e.is_active=i)},{default:n(()=>[a(I,{value:!0},{default:n(()=>[v(" Aktif ")]),_:1}),a(I,{value:!1},{default:n(()=>[v(" Nonaktif ")]),_:1})]),_:1},8,["value"])]),_:1},512),a($,{type:"primary","html-type":"submit",loading:k(d)},{default:n(()=>[ye,r("span",null,R(l.editMode?"Edit":"Simpan"),1)]),_:1},8,["loading"]),a($,{class:"mx-3",onClick:U},{default:n(()=>[v(R(l.editMode?"Batal Edit":"Bersihkan"),1)]),_:1}),l.editMode?(y(),H($,{key:0,danger:"",type:"primary",onClick:Q,loading:k(q)},{default:n(()=>[v(" Hapus ")]),_:1},8,["loading"])):se("",!0)])])]),_:1},8,["model"])])])}}}),ke=K({__name:"DataTable",props:{idx:null},emits:["rowClick"],setup(l,{emit:s}){const t=l,h=B({value:[{field:"code",headerName:"Kode Customer",flex:0,width:130,pinned:"left"},{field:"name",headerName:"Nama",flex:0,width:170},{field:"address",headerName:"Alamat",flex:0,width:150},{field:"customer_group.code",headerName:"Grup",flex:0,width:80},{field:"is_active",headerName:"Status",flex:0,width:100,valueGetter:d=>d.data.is_active?"Aktif":"Nonaktif"},{field:"phone_number",headerName:"Telp",flex:0,width:100},{field:"fax",headerName:"Fax",flex:0,width:100},{field:"handphone",headerName:"HP",flex:0,width:100},{field:"note",headerName:"Keterangan",flex:0,width:100},{field:"created_at",headerName:"Diinput Tgl",...S},{field:"created_at",headerName:"Diinput Tgl",...S},{field:"updated_at",headerName:"Diupdate Tgl",...S},{field:"created_by_user_username",headerName:"Diinput Oleh",flex:0,width:120},{field:"updated_by_user_username",headerName:"Diupdate Oleh",flex:0,width:120}]}),c=B({value:null}),{run:x,response:f,loading:e}=M();async function m(){var d;try{await x(C.list()),(d=f.value)!=null&&d.success&&(c.value=f.value.data)}catch{}}function p(d){s("rowClick",d)}return V(()=>{m()}),A(()=>t.idx,()=>{m()}),(d,w)=>(y(),T("div",null,[a(Z,{"row-data":c.value,"column-defs":h.value,loading:k(e),onRowClick:p},null,8,["row-data","column-defs","loading"])]))}}),Ce=r("span",null,[r("i",{class:"fe fe-edit-2 me-2"}),v(" Input ")],-1),Ne=r("span",null,[r("i",{class:"fe fe-search me-2"}),v(" Browse ")],-1),Me=r("i",{class:"fe fe-refresh-cw me-2"},null,-1),Le=K({__name:"index",setup(l){const s=b("1"),t=b(),h=b(!1),c=b(1);function x(m){s.value="1",t.value={...m},h.value=!0}function f(){h.value=!1}function e(m){c.value+=1,m!==void 0&&(h.value=m)}return(m,p)=>{const d=pe,w=j,F=fe;return y(),T("div",null,[a(F,{class:"input-browse-tab",activeKey:s.value,"onUpdate:activeKey":p[1]||(p[1]=N=>s.value=N),animated:""},ie({default:n(()=>[a(d,{key:"1"},{tab:n(()=>[Ce]),default:n(()=>[a(De,{"form-data":t.value,"edit-mode":h.value,onCancelEdit:f,onOnSuccess:e},null,8,["form-data","edit-mode"])]),_:1}),a(d,{key:"2"},{tab:n(()=>[Ne]),default:n(()=>[a(ke,{idx:c.value,onRowClick:x},null,8,["idx"])]),_:1})]),_:2},[s.value==="2"?{name:"rightExtra",fn:n(()=>[a(w,{size:"small",class:"mt-3",onClick:p[0]||(p[0]=N=>c.value+=1)},{default:n(()=>[Me,v(" Refresh Data ")]),_:1})]),key:"0"}:void 0]),1032,["activeKey"])])}}});export{Le as default};
