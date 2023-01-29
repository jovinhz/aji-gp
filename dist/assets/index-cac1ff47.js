var ae=Object.defineProperty;var oe=(d,a,o)=>a in d?ae(d,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):d[a]=o;var V=(d,a,o)=>(oe(d,typeof a!="symbol"?a+"":a,o),o);import{B as q}from"./index-0bb8ea7a.js";import{_ as W}from"./AgGrid.vuevuetypescriptsetuptruelang-7e3c6181.js";import{u as ne}from"./modal-8c6b86e3.js";import{a as K,o as L}from"./index-a69e05bf.js";import"./index-db653870.js";import{_ as ie,S as se}from"./index-6aba2020.js";import{H as le,u as y}from"./HttpClient-a8d470b1.js";import{d as E,Q as C,r as v,w as z,e as G,g as x,a7 as O,b as i,k as s,a9 as S,u as _,F as re,ab as de,Y as ue,j as ce,aa as me,ak as fe,ac as N}from"./plugin-vueexport-helper-23a171d5.js";import{I as pe,_ as _e,F as ve}from"./Input-6750102f.js";import{_ as be}from"./TextArea-fa00ec12.js";import{M as ge}from"./Modal-5e5e8906.js";import{W as ke}from"./WorkingToolService-f3ad13c7.js";import{T as we,_ as he}from"./TabPane-6246fdd8.js";import"./pickAttrs-349b6a5f.js";import"./useMemo-18bb8ebc.js";import"./DownOutlined-4b2aeb27.js";import"./SearchOutlined-731e9f20.js";class D{static list(a){return this.HttpClient.axiosInstance.get(`/working_tools/${a}/working_tool_items`)}static create(a,o){return this.HttpClient.withOptions({showSuccessFeedback:!0,successFeedbackMessage:"Stok Alat Kerja berhasil ditambah"}).axiosInstance.post(`/working_tools/${a}/working_tool_items`,o)}static update(a,o,u){return this.HttpClient.withOptions({showSuccessFeedback:!0,successFeedbackMessage:"Stok Alat Kerja berhasil diupdate"}).axiosInstance.put(`/working_tools/${a}/working_tool_items/${o}`,u)}static formOptions(){return this.HttpClient.axiosInstance.get("/working_tools/current/working_tool_items/form_options")}}V(D,"HttpClient",new le);const ye=E({__name:"Form",props:{formData:null,editMode:{type:Boolean}},emits:["cancelEdit","openEdit","onSuccess"],setup(d,{emit:a}){const o=d,u=C({value:[{field:"code",headerName:"Kode",pinned:"left"},{field:"condition_caption",headerName:"Kondisi"},{field:"brand",headerName:"Merk"},{field:"note",headerName:"Catatan"},{field:"created_at",headerName:"Diinput Tgl",...K},{field:"updated_at",headerName:"Diupdate Tgl",...K},{field:"created_by_user_username",headerName:"Diinput Oleh",flex:0,width:120},{field:"updated_by_user_username",headerName:"Diupdate Oleh",flex:0,width:120}]}),m=C({value:null}),b=v(),f=v(),c=v(),e=C({}),p={code:[{required:!0,message:"Kode stok alat kerja wajib diisi",trigger:"change"}],condition_id:[{required:!0,message:"Kondisi wajib dipilih",trigger:"change"}]},{run:r,loading:g,response:M}=y(),{run:F,loading:T,response:j}=y(),{run:Q,loading:Y,response:R}=y();y();const{open:U,close:Ne,visible:$}=ne();async function B(){var n,t,k,w;try{o.editMode?await r(D.update((n=o.formData)==null?void 0:n.id,f.value,{code:e.code.toUpperCase(),condition_id:e.condition_id,brand:e.brand,note:e.note})):(await r(D.create((t=o.formData)==null?void 0:t.id,{code:e.code.toUpperCase(),condition_id:e.condition_id,brand:e.brand,note:e.note})),(k=M.value)!=null&&k.success&&I()),(w=M.value)!=null&&w.success&&H()}catch{}}function I(){var n;if(o.editMode){for(const t in e)e[t]=void 0;a("cancelEdit")}else(n=c.value)==null||n.resetFields()}async function H(){var n,t;try{await Q(D.list((n=o.formData)==null?void 0:n.id)),(t=R.value)!=null&&t.success&&(m.value=R.value.data)}catch{}}function J(n){e.code=n.code,e.brand=n.brand,e.condition_id=n.condition_id,e.note=n.note,f.value=n.id,a("openEdit"),U()}return z(()=>o.formData,()=>{var n;o.formData&&((n=c.value)==null||n.clearValidate(),H())}),G(async()=>{var n;try{await F(D.formOptions()),(n=j.value)!=null&&n.success&&(b.value=j.value.data)}catch{}}),(n,t)=>{const k=q,w=pe,h=_e,P=se,X=ie,Z=be,ee=ve,te=ge;return x(),O("div",null,[i(k,{type:"primary",class:"mb-3",onClick:_(U)},{default:s(()=>[S(" Tambah ")]),_:1},8,["onClick"]),i(W,{"row-data":m.value,"column-defs":u.value,loading:_(Y),onRowClick:J},null,8,["row-data","column-defs","loading"]),i(te,{visible:_($),"onUpdate:visible":t[5]||(t[5]=l=>ue($)?$.value=l:null),title:d.editMode?"Update Stok Alat Kerja":"Input Stok Alat Kerja","confirm-loading":_(g),onOk:t[6]||(t[6]=l=>_(L)(c.value,B)),onCancel:t[7]||(t[7]=l=>I())},{default:s(()=>[i(ee,{ref_key:"formRef",ref:c,model:e,rules:p,"label-col":{style:{width:"120px"}},colon:!1,"label-align":"left",onFinish:t[4]||(t[4]=l=>_(L)(c.value,B))},{default:s(()=>[i(h,{label:"Kode",name:"code",ref:"code"},{default:s(()=>[i(w,{value:e.code,"onUpdate:value":t[0]||(t[0]=l=>e.code=l),valueModifiers:{trim:!0},style:{"text-transform":"uppercase"}},null,8,["value"])]),_:1},512),i(h,{label:"Kondisi",name:"condition_id",ref:"condition_id"},{default:s(()=>[i(X,{value:e.condition_id,"onUpdate:value":t[1]||(t[1]=l=>e.condition_id=l)},{default:s(()=>{var l;return[(x(!0),O(re,null,de((l=b.value)==null?void 0:l.conditions,A=>(x(),ce(P,{value:A.id},{default:s(()=>[S(me(A.title),1)]),_:2},1032,["value"]))),256))]}),_:1},8,["value"])]),_:1},512),i(h,{label:"Merk",name:"brand",ref:"brand"},{default:s(()=>[i(w,{value:e.brand,"onUpdate:value":t[2]||(t[2]=l=>e.brand=l),valueModifiers:{trim:!0}},null,8,["value"])]),_:1},512),i(h,{label:"Keterangan",name:"note",ref:"note"},{default:s(()=>[i(Z,{value:e.note,"onUpdate:value":t[3]||(t[3]=l=>e.note=l),valueModifiers:{trim:!0}},null,8,["value"])]),_:1},512)]),_:1},8,["model"])]),_:1},8,["visible","title","confirm-loading"])])}}}),De=E({__name:"DataTable",props:{idx:null},emits:["rowClick"],setup(d,{emit:a}){const o=d,u=C({value:[{field:"name",headerName:"Nama",pinned:"left"},{field:"specification",headerName:"Spesifikasi"},{field:"unit.name",headerName:"Satuan"},{field:"created_at",headerName:"Diinput Tgl",...K},{field:"updated_at",headerName:"Diupdate Tgl",...K},{field:"created_by_user_username",headerName:"Diinput Oleh",flex:0,width:120},{field:"updated_by_user_username",headerName:"Diupdate Oleh",flex:0,width:120}]}),m=C({value:null}),{run:b,response:f,loading:c}=y();async function e(){var r;try{await b(ke.list()),(r=f.value)!=null&&r.success&&(m.value=f.value.data)}catch{}}function p(r){a("rowClick",r)}return G(()=>{e()}),z(()=>o.idx,()=>{e()}),(r,g)=>(x(),O("div",null,[i(W,{"row-data":m.value,"column-defs":u.value,loading:_(c),onRowClick:p},null,8,["row-data","column-defs","loading"])]))}}),Ce=N("span",null,[N("i",{class:"fe fe-search me-2"}),S(" Browse ")],-1),xe=N("span",null,[N("i",{class:"fe fe-eye me-2"}),S(" View Stok Alat Kerja ")],-1),Se=N("i",{class:"fe fe-refresh-cw me-2"},null,-1),ze=E({__name:"index",setup(d){const a=v("2"),o=v(),u=v(!1),m=v(1);function b(p){a.value="1",o.value={...p},u.value=!1}function f(){u.value=!1}function c(){u.value=!0}function e(p){}return(p,r)=>{const g=he,M=q,F=we;return x(),O("div",null,[i(F,{class:"input-browse-tab",activeKey:a.value,"onUpdate:activeKey":r[1]||(r[1]=T=>a.value=T),animated:""},fe({default:s(()=>[i(g,{key:"2"},{tab:s(()=>[Ce]),default:s(()=>[i(De,{idx:m.value,onRowClick:b},null,8,["idx"])]),_:1}),i(g,{key:"1","force-render":!0,disabled:""},{tab:s(()=>[xe]),default:s(()=>[i(ye,{"form-data":o.value,"edit-mode":u.value,onOpenEdit:c,onCancelEdit:f,onOnSuccess:e},null,8,["form-data","edit-mode"])]),_:1})]),_:2},[a.value==="2"?{name:"rightExtra",fn:s(()=>[i(M,{size:"small",class:"mt-3",onClick:r[0]||(r[0]=T=>m.value+=1)},{default:s(()=>[Se,S(" Refresh Data ")]),_:1})]),key:"0"}:void 0]),1032,["activeKey"])])}}});export{ze as default};
