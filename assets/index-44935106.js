import{B as W}from"./index-153eefc2.js";import{_ as Q}from"./AgGrid.vuevuetypescriptsetuptruelang-ab13ecb9.js";import{o as X,a as R}from"./index-88aa8355.js";import"./index-7c3bc22f.js";/* empty css              */import{u as S}from"./HttpClient-9b37a6d8.js";import{_ as Y}from"./InputDropdown.vuevuetypescriptsetuptruelang-d8e7c5f6.js";import{W as w}from"./WorkingToolService-a269df9d.js";import{d as F,r as v,O as E,w as I,a as U,e as D,a7 as T,ac as s,f as O,g as i,a9 as g,c as o,u as b,aa as V,ae as Z,ak as ee}from"./plugin-vueexport-helper-0ef99882.js";import{M as ae}from"./Modal-dae6d828.js";import{_ as te}from"./index-a1c3b359.js";import{I as ne,_ as ie,F as oe}from"./Input-df745255.js";import{_ as se}from"./TextArea-dca2e1fe.js";import{T as le,_ as ce}from"./TabPane-a6349958.js";import"./pickAttrs-596f35c3.js";const re={class:"card card-custom card-dense"},de={class:"card-header"},ue={class:"card-title w-100 d-flex justify-content-between"},me=s("h4",{class:"card-label"},"Form Master Alat Kerja",-1),fe={class:"card-body"},_e={class:"row"},pe={class:"col-lg-6"},ve=s("i",{class:"fe fe-save me-2"},null,-1),ge=F({__name:"Form",props:{formData:null,editMode:{type:Boolean}},emits:["cancelEdit","onSuccess"],setup(m,{emit:r}){const t=m,f=[{field:"code",headerName:"Kode Satuan"},{field:"name",headerName:"Nama Satuan"}],l=v(""),_=v(),e=E({}),k={name:[{required:!0,message:"Nama alat kerja wajib diisi",trigger:"change"}],unit_id:[{required:!0,message:"Satuan wajib dipilih",trigger:"change"}],specification:[{required:!0,message:"Spesifikasi wajib diisi",trigger:"change"}]},c=v(),{run:u,loading:d,response:h}=S(),{run:N,loading:x,response:K}=S(),{run:q,loading:A,response:H}=S();async function z(){var a,n,y;try{t.editMode?await u(w.update((a=t.formData)==null?void 0:a.id,{name:e.name,unit_id:e.unit_id,specification:e.specification})):(await u(w.create({name:e.name,unit_id:e.unit_id,specification:e.specification})),(n=h.value)!=null&&n.success&&C()),(y=h.value)!=null&&y.success&&r("onSuccess")}catch{}}async function G(){var a,n;try{await q(w.delete((a=t.formData)==null?void 0:a.id)),(n=H.value)!=null&&n.success&&(C(),r("onSuccess"))}catch{}}function C(){var a;if(t.editMode){for(const n in e)e[n]=void 0;l.value="",r("cancelEdit")}else(a=_.value)==null||a.resetFields(),l.value=""}function J(){var a;ae.confirm({title:"Konfirmasi Hapus Alat Kerja",content:`Apakah kamu sudah yakin ingin menghapus data ${(a=t.formData)==null?void 0:a.name} ?`,cancelText:"Batal",onOk:G})}return I(()=>t.formData,()=>{var a;t.formData&&((a=_.value)==null||a.clearValidate(),e.name=t.formData.name,e.specification=t.formData.specification,e.unit_id=t.formData.unit.id,l.value=`${t.formData.unit.code} - ${t.formData.unit.name}`)}),U(async()=>{var a;try{await N(w.formOptions()),(a=K.value)!=null&&a.success&&(c.value=K.value.data)}catch{}}),(a,n)=>{const y=te,j=ne,M=ie,L=se,$=W,P=oe;return D(),T("div",re,[s("div",de,[s("div",ue,[me,m.editMode?(D(),O(y,{key:0,color:"orange"},{default:i(()=>[g("Mode Edit")]),_:1})):(D(),O(y,{key:1,color:"cyan"},{default:i(()=>[g("Mode Input")]),_:1}))])]),s("div",fe,[o(P,{ref_key:"formRef",ref:_,model:e,rules:k,"label-col":{style:{width:"220px"}},colon:!1,"label-align":"left",onFinish:n[3]||(n[3]=p=>b(X)(_.value,z))},{default:i(()=>[s("div",_e,[s("div",pe,[o(M,{label:"Nama",name:"name",ref:"name"},{default:i(()=>[o(j,{value:e.name,"onUpdate:value":n[0]||(n[0]=p=>e.name=p)},null,8,["value"])]),_:1},512),o(M,{label:"Satuan",name:"unit_id",ref:"unit_id"},{default:i(()=>{var p;return[o(Y,{"column-defs":f,"grid-data":((p=c.value)==null?void 0:p.units)??[],loading:b(x),value:void 0,"value-display":l.value,onChange:n[1]||(n[1]=B=>{e.unit_id=B.id,l.value=`${B.code} - ${B.name}`})},null,8,["grid-data","loading","value-display"])]}),_:1},512),o(M,{label:"Spesifikasi",name:"specification",ref:"specification"},{default:i(()=>[o(L,{value:e.specification,"onUpdate:value":n[2]||(n[2]=p=>e.specification=p)},null,8,["value"])]),_:1},512),o($,{type:"primary","html-type":"submit",loading:b(d)},{default:i(()=>[ve,s("span",null,V(m.editMode?"Edit":"Simpan"),1)]),_:1},8,["loading"]),o($,{class:"mx-3",onClick:C},{default:i(()=>[g(V(m.editMode?"Batal Edit":"Bersihkan"),1)]),_:1}),m.editMode?(D(),O($,{key:0,danger:"",type:"primary",onClick:J,loading:b(A)},{default:i(()=>[g(" Hapus ")]),_:1},8,["loading"])):Z("",!0)])])]),_:1},8,["model"])])])}}}),he=F({__name:"DataTable",props:{idx:null},emits:["rowClick"],setup(m,{emit:r}){const t=m,f=E({value:[{field:"name",headerName:"Nama",pinned:"left",minWidth:120},{field:"specification",headerName:"Spesifikasi",minWidth:100},{field:"unit.name",headerName:"Satuan",minWidth:100},{field:"created_at",headerName:"Diinput Tgl",...R},{field:"updated_at",headerName:"Diupdate Tgl",...R},{field:"created_by_user_username",headerName:"Diinput Oleh",flex:0,width:120},{field:"updated_by_user_username",headerName:"Diupdate Oleh",flex:0,width:120}]}),l=E({value:null}),{run:_,response:e,loading:k}=S();async function c(){var d;try{await _(w.list()),(d=e.value)!=null&&d.success&&(l.value=e.value.data)}catch{}}function u(d){r("rowClick",d)}return U(()=>{c()}),I(()=>t.idx,()=>{c()}),(d,h)=>(D(),T("div",null,[o(Q,{"row-data":l.value,"column-defs":f.value,loading:b(k),onRowClick:u},null,8,["row-data","column-defs","loading"])]))}}),ye=s("span",null,[s("i",{class:"fe fe-edit-2 me-2"}),g(" Input ")],-1),De=s("span",null,[s("i",{class:"fe fe-search me-2"}),g(" Browse ")],-1),ke=s("i",{class:"fe fe-refresh-cw me-2"},null,-1),Re=F({__name:"index",setup(m){const r=v("1"),t=v(),f=v(!1),l=v(1);function _(c){r.value="1",t.value={...c},f.value=!0}function e(){f.value=!1}function k(c){l.value+=1,c!==void 0&&(f.value=c)}return(c,u)=>{const d=ce,h=W,N=le;return D(),T("div",null,[o(N,{class:"input-browse-tab",activeKey:r.value,"onUpdate:activeKey":u[1]||(u[1]=x=>r.value=x),animated:""},ee({default:i(()=>[o(d,{key:"1"},{tab:i(()=>[ye]),default:i(()=>[o(ge,{"form-data":t.value,"edit-mode":f.value,onCancelEdit:e,onOnSuccess:k},null,8,["form-data","edit-mode"])]),_:1}),o(d,{key:"2"},{tab:i(()=>[De]),default:i(()=>[o(he,{idx:l.value,onRowClick:_},null,8,["idx"])]),_:1})]),_:2},[r.value==="2"?{name:"rightExtra",fn:i(()=>[o(h,{size:"small",class:"mt-3",onClick:u[0]||(u[0]=x=>l.value+=1)},{default:i(()=>[ke,g(" Refresh Data ")]),_:1})]),key:"0"}:void 0]),1032,["activeKey"])])}}});export{Re as default};
