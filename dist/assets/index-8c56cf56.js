var X=Object.defineProperty;var Y=(d,t,a)=>t in d?X(d,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):d[t]=a;var T=(d,t,a)=>(Y(d,typeof t!="symbol"?t+"":t,a),a);import{B as j}from"./index-153eefc2.js";import{_ as Z}from"./AgGrid.vuevuetypescriptsetuptruelang-ab13ecb9.js";import{o as ee,a as R}from"./index-88aa8355.js";import"./index-7c3bc22f.js";/* empty css              */import{H as ae,u as N}from"./HttpClient-9b37a6d8.js";import{_ as te}from"./InputDropdown.vuevuetypescriptsetuptruelang-d8e7c5f6.js";import{d as B,r as v,O as S,w as A,a as W,e as y,a7 as H,ac as r,f as K,g as i,a9 as h,c as o,u as k,aa as V,ae as se,ak as oe}from"./plugin-vueexport-helper-0ef99882.js";import{M as ne}from"./Modal-dae6d828.js";import{_ as ie}from"./index-a1c3b359.js";import{I as de,_ as re,F as le}from"./Input-df745255.js";import{_ as ue}from"./TextArea-dca2e1fe.js";import{T as ce,_ as me}from"./TabPane-a6349958.js";import"./pickAttrs-596f35c3.js";class C{static list(){return this.HttpClient.axiosInstance.get("/customer_units")}static create(t){return this.HttpClient.withOptions({showSuccessFeedback:!0,successFeedbackMessage:"Customer Unit berhasil ditambah"}).axiosInstance.post("/customer_units",t)}static update(t,a){return this.HttpClient.withOptions({showSuccessFeedback:!0,successFeedbackMessage:"Customer Unit berhasil diupdate"}).axiosInstance.put(`/customer_units/${t}`,a)}static formOptions(){return this.HttpClient.axiosInstance.get("/customer_units/form_options")}static delete(t){return this.HttpClient.withOptions({showSuccessFeedback:!0,successFeedbackMessage:"Customer Unit berhasil dihapus"}).axiosInstance.delete(`/customer_units/${t}`)}}T(C,"HttpClient",new ae);const fe={class:"card card-custom card-dense"},pe={class:"card-header"},_e={class:"card-title w-100 d-flex justify-content-between"},ve=r("h4",{class:"card-label"},"Form Master Customer Unit",-1),he={class:"card-body"},ge={class:"row"},be={class:"col-lg-6"},we=r("i",{class:"fe fe-save me-2"},null,-1),ye=B({__name:"Form",props:{formData:null,editMode:{type:Boolean}},emits:["cancelEdit","onSuccess"],setup(d,{emit:t}){const a=d,l=v(""),_=[{field:"code",headerName:"Kode Customer",flex:0,width:140},{field:"name",headerName:"Nama Customer"},{field:"customer_group.code",headerName:"Kode Grup",flex:0,width:120},{field:"customer_group.name",headerName:"Nama Grup"},{field:"address",headerName:"Alamat"}],g=v(),f=v(),e=S({}),c={code:[{required:!0,message:"Kode unit wajib diisi",trigger:"change"}],name:[{required:!0,message:"Nama unit wajib diisi",trigger:"change"}],customer_id:[{required:!0,message:"Customer wajib dipilih",trigger:"change"}]},{run:p,loading:m,response:b}=N(),{run:M,loading:x,response:E}=N(),{run:q,loading:G,response:z}=N();async function J(){var n,s,w;try{a.editMode?await p(C.update((n=a.formData)==null?void 0:n.id,{customer_id:e.customer_id,name:e.name,address:e.address,note:e.note})):(await p(C.create({code:e.code.toUpperCase(),customer_id:e.customer_id,name:e.name,address:e.address,note:e.note})),(s=b.value)!=null&&s.success&&$()),(w=b.value)!=null&&w.success&&t("onSuccess")}catch{}}async function L(){var n,s;try{await q(C.delete((n=a.formData)==null?void 0:n.id)),(s=z.value)!=null&&s.success&&($(),t("onSuccess"))}catch{}}function $(){var n;if(a.editMode){for(const s in e)e[s]=void 0;t("cancelEdit")}else(n=f.value)==null||n.resetFields();l.value=""}function P(){var n;ne.confirm({title:"Konfirmasi Hapus Unit",content:`Apakah kamu sudah yakin ingin menghapus data ${(n=a.formData)==null?void 0:n.code} ?`,cancelText:"Batal",onOk:L})}return A(()=>a.formData,()=>{var n;a.formData&&((n=f.value)==null||n.clearValidate(),e.code=a.formData.code,e.customer_id=a.formData.customer.id,e.address=a.formData.address,e.name=a.formData.name,e.note=a.formData.note,l.value=`${a.formData.customer.code} - ${a.formData.customer.name}`)}),W(async()=>{var n;try{await M(C.formOptions()),(n=E.value)!=null&&n.success&&(g.value=E.value.data)}catch{}}),(n,s)=>{const w=ie,F=de,D=re,I=ue,O=j,Q=le;return y(),H("div",fe,[r("div",pe,[r("div",_e,[ve,d.editMode?(y(),K(w,{key:0,color:"orange"},{default:i(()=>[h("Mode Edit")]),_:1})):(y(),K(w,{key:1,color:"cyan"},{default:i(()=>[h("Mode Input")]),_:1}))])]),r("div",he,[o(Q,{ref_key:"formRef",ref:f,model:e,rules:c,"label-col":{style:{width:"220px"}},colon:!1,"label-align":"left",onFinish:s[5]||(s[5]=u=>k(ee)(f.value,J))},{default:i(()=>[r("div",ge,[r("div",be,[o(D,{label:"Kode Unit",name:"code",ref:"code"},{default:i(()=>[o(F,{value:e.code,"onUpdate:value":s[0]||(s[0]=u=>e.code=u),valueModifiers:{trim:!0},style:{"text-transform":"uppercase"},disabled:d.editMode},null,8,["value","disabled"])]),_:1},512),o(D,{label:"Nama Unit",name:"name",ref:"name"},{default:i(()=>[o(F,{value:e.name,"onUpdate:value":s[1]||(s[1]=u=>e.name=u)},null,8,["value"])]),_:1},512),o(D,{label:"Customer",name:"customer_id",ref:"customer_id"},{default:i(()=>{var u;return[o(te,{"column-defs":_,"grid-data":((u=g.value)==null?void 0:u.customers)??[],loading:k(x),value:void 0,"value-display":l.value,onChange:s[2]||(s[2]=U=>{e.customer_id=U.id,l.value=`${U.code} - ${U.name}`})},null,8,["grid-data","loading","value-display"])]}),_:1},512),o(D,{label:"Alamat",name:"address",ref:"address"},{default:i(()=>[o(I,{value:e.address,"onUpdate:value":s[3]||(s[3]=u=>e.address=u)},null,8,["value"])]),_:1},512),o(D,{label:"Keterangan",name:"note",ref:"note"},{default:i(()=>[o(I,{value:e.note,"onUpdate:value":s[4]||(s[4]=u=>e.note=u)},null,8,["value"])]),_:1},512),o(O,{type:"primary","html-type":"submit",loading:k(m)},{default:i(()=>[we,r("span",null,V(d.editMode?"Edit":"Simpan"),1)]),_:1},8,["loading"]),o(O,{class:"mx-3",onClick:$},{default:i(()=>[h(V(d.editMode?"Batal Edit":"Bersihkan"),1)]),_:1}),d.editMode?(y(),K(O,{key:0,danger:"",type:"primary",onClick:P,loading:k(G)},{default:i(()=>[h(" Hapus ")]),_:1},8,["loading"])):se("",!0)])])]),_:1},8,["model"])])])}}}),Ce=B({__name:"DataTable",props:{idx:null},emits:["rowClick"],setup(d,{emit:t}){const a=d,l=S({value:[{field:"code",headerName:"Kode Unit",minWidth:100,pinned:"left"},{field:"name",headerName:"Nama Unit",minWidth:150},{field:"customer.name",headerName:"Nama Customer",minWidth:150},{field:"address",headerName:"Alamat",minWidth:100},{field:"note",headerName:"Keterangan",flex:0,width:110},{field:"created_at",headerName:"Diinput Tgl",...R},{field:"updated_at",headerName:"Diupdate Tgl",...R},{field:"created_by_user_username",headerName:"Diinput Oleh",flex:0,width:120},{field:"updated_by_user_username",headerName:"Diupdate Oleh",flex:0,width:120}]}),_=S({value:null}),{run:g,response:f,loading:e}=N();async function c(){var m;try{await g(C.list()),(m=f.value)!=null&&m.success&&(_.value=f.value.data)}catch{}}function p(m){t("rowClick",m)}return W(()=>{c()}),A(()=>a.idx,()=>{c()}),(m,b)=>(y(),H("div",null,[o(Z,{"row-data":_.value,"column-defs":l.value,loading:k(e),onRowClick:p},null,8,["row-data","column-defs","loading"])]))}}),De=r("span",null,[r("i",{class:"fe fe-edit-2 me-2"}),h(" Input ")],-1),ke=r("span",null,[r("i",{class:"fe fe-search me-2"}),h(" Browse ")],-1),xe=r("i",{class:"fe fe-refresh-cw me-2"},null,-1),je=B({__name:"index",setup(d){const t=v("1"),a=v(),l=v(!1),_=v(1);function g(c){t.value="1",a.value={...c},l.value=!0}function f(){l.value=!1}function e(c){_.value+=1,c!==void 0&&(l.value=c)}return(c,p)=>{const m=me,b=j,M=ce;return y(),H("div",null,[o(M,{class:"input-browse-tab",activeKey:t.value,"onUpdate:activeKey":p[1]||(p[1]=x=>t.value=x),animated:""},oe({default:i(()=>[o(m,{key:"1"},{tab:i(()=>[De]),default:i(()=>[o(ye,{"form-data":a.value,"edit-mode":l.value,onCancelEdit:f,onOnSuccess:e},null,8,["form-data","edit-mode"])]),_:1}),o(m,{key:"2"},{tab:i(()=>[ke]),default:i(()=>[o(Ce,{idx:_.value,onRowClick:g},null,8,["idx"])]),_:1})]),_:2},[t.value==="2"?{name:"rightExtra",fn:i(()=>[o(b,{size:"small",class:"mt-3",onClick:p[0]||(p[0]=x=>_.value+=1)},{default:i(()=>[xe,h(" Refresh Data ")]),_:1})]),key:"0"}:void 0]),1032,["activeKey"])])}}});export{je as default};
