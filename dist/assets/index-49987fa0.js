var q=Object.defineProperty;var z=(n,e,a)=>e in n?q(n,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[e]=a;var T=(n,e,a)=>(z(n,typeof e!="symbol"?e+"":e,a),a);import{B as O}from"./index-166a5e79.js";/* empty css              */import{H as A,u as N}from"./HttpClient-ff08f65a.js";import{I as G}from"./index-91845532.js";import{o as Q,a as I}from"./index-44824ea8.js";import{_ as J,F as L}from"./index-1ee0591d.js";import"./index-263ddce6.js";import{d as S,r as g,Q as B,w as j,g as _,a2 as $,a7 as i,j as F,k as o,a4 as p,b as s,u as D,a5 as R,a9 as P,e as W,aj as X}from"./runtime-core.esm-bundler-441c3591.js";import{M as Y,_ as Z,T as ee,a as ae}from"./Modal-c770c219.js";import{_ as te}from"./AgGrid.vue_vue_type_script_setup_true_lang-2a0939af.js";import"./_plugin-vue_export-helper-c27b6911.js";class k{static list(){return this.HttpClient.axiosInstance.get("/departements")}static create(e){return this.HttpClient.withOptions({showSuccessFeedback:!0,successFeedbackMessage:"Departemen berhasil ditambah"}).axiosInstance.post("/departements",e)}static update(e,a){return this.HttpClient.withOptions({showSuccessFeedback:!0,successFeedbackMessage:"Departemen berhasil diupdate"}).axiosInstance.put(`/departements/${e}`,a)}}T(k,"HttpClient",new A);const ne={class:"card card-custom card-dense"},oe={class:"card-header"},se={class:"card-title w-100 d-flex justify-content-between"},ie=i("h4",{class:"card-label"},"Form Master Departemen",-1),le={class:"card-body"},de={class:"row"},ce={class:"col-lg-6"},re=i("i",{class:"fe fe-save me-2"},null,-1),ue=S({__name:"Form",props:{formData:null,editMode:{type:Boolean}},emits:["cancelEdit","onSuccess"],setup(n,{emit:e}){const a=n,l=g(),t=B({}),v={code:[{required:!0,message:"Kode departemen wajib diisi",trigger:"change"}],name:[{required:!0,message:"Nama departemen wajib diisi",trigger:"change"}]},{run:m,loading:h,response:d}=N(),{run:f,loading:r,response:b}=N();async function x(){var u,c;try{a.editMode?await m(k.update(a.formData.id,{name:t.name})):(await m(k.create({code:t.code.toUpperCase(),name:t.name})),(u=d.value)!=null&&u.success&&E()),(c=d.value)!=null&&c.success&&e("onSuccess")}catch{}}async function w(){}function E(){var u;if(a.editMode){for(const c in t)t[c]=void 0;e("cancelEdit")}else(u=l.value)==null||u.resetFields()}function V(){Y.confirm({title:"Konfirmasi Hapus Departemen",content:"Apakah kamu sudah yakin ingin menghapus data "+t.name,cancelText:"Batal",onOk:w})}return j(()=>a.formData,()=>{var u;a.formData&&((u=l.value)==null||u.clearValidate(),t.code=a.formData.code,t.name=a.formData.name)}),(u,c)=>{const C=Z,H=G,K=J,M=O,U=L;return _(),$("div",ne,[i("div",oe,[i("div",se,[ie,n.editMode?(_(),F(C,{key:0,color:"orange"},{default:o(()=>[p("Mode Edit")]),_:1})):(_(),F(C,{key:1,color:"cyan"},{default:o(()=>[p("Mode Input")]),_:1}))])]),i("div",le,[s(U,{ref_key:"formRef",ref:l,model:t,rules:v,"label-col":{style:{width:"220px"}},colon:!1,"label-align":"left",onFinish:c[2]||(c[2]=y=>D(Q)(l.value,x))},{default:o(()=>[i("div",de,[i("div",ce,[s(K,{label:"Kode Departemen",name:"code",ref:"code"},{default:o(()=>[s(H,{value:t.code,"onUpdate:value":c[0]||(c[0]=y=>t.code=y),valueModifiers:{trim:!0},style:{"text-transform":"uppercase"},disabled:n.editMode},null,8,["value","disabled"])]),_:1},512),s(K,{label:"Nama Departemen",name:"name",ref:"name"},{default:o(()=>[s(H,{value:t.name,"onUpdate:value":c[1]||(c[1]=y=>t.name=y)},null,8,["value"])]),_:1},512),s(M,{type:"primary","html-type":"submit",loading:D(h)},{default:o(()=>[re,i("span",null,R(n.editMode?"Edit":"Simpan"),1)]),_:1},8,["loading"]),s(M,{class:"mx-3",onClick:E},{default:o(()=>[p(R(n.editMode?"Batal Edit":"Bersihkan"),1)]),_:1}),n.editMode?(_(),F(M,{key:0,danger:"",type:"primary",onClick:V,loading:D(r)},{default:o(()=>[p(" Hapus ")]),_:1},8,["loading"])):P("",!0)])])]),_:1},8,["model"])])])}}}),me=S({__name:"DataTable",props:{idx:null},emits:["rowClick"],setup(n,{emit:e}){const a=n,l=B({value:[{field:"code",headerName:"Kode Departemen",flex:0,width:150,pinned:"left"},{field:"name",headerName:"Nama"},{field:"created_at",headerName:"Diinput Tgl",...I},{field:"updated_at",headerName:"Diupdate Tgl",...I},{field:"created_by_user_username",headerName:"Diinput Oleh",flex:0,width:120},{field:"updated_by_user_username",headerName:"Diupdate Oleh",flex:0,width:120}]}),t=B({value:null}),{run:v,response:m,loading:h}=N();async function d(){var r;try{await v(k.list()),(r=m.value)!=null&&r.success&&(t.value=m.value.data)}catch{}}function f(r){e("rowClick",r)}return W(()=>{d()}),j(()=>a.idx,()=>{d()}),(r,b)=>(_(),$("div",null,[s(te,{"row-data":t.value,"column-defs":l.value,loading:D(h),onRowClick:f},null,8,["row-data","column-defs","loading"])]))}}),fe=i("span",null,[i("i",{class:"fe fe-edit-2 me-2"}),p(" Input ")],-1),pe=i("span",null,[i("i",{class:"fe fe-search me-2"}),p(" Browse ")],-1),_e=i("i",{class:"fe fe-refresh-cw me-2"},null,-1),Ne=S({__name:"index",setup(n){const e=g("1"),a=g(),l=g(!1),t=g(1);function v(d){e.value="1",a.value={...d},l.value=!0}function m(){l.value=!1}function h(d){t.value+=1,d!==void 0&&(l.value=d)}return(d,f)=>{const r=ae,b=O,x=ee;return _(),$("div",null,[s(x,{class:"input-browse-tab",activeKey:e.value,"onUpdate:activeKey":f[1]||(f[1]=w=>e.value=w),animated:""},X({default:o(()=>[s(r,{key:"1"},{tab:o(()=>[fe]),default:o(()=>[s(ue,{"form-data":a.value,"edit-mode":l.value,onCancelEdit:m,onOnSuccess:h},null,8,["form-data","edit-mode"])]),_:1}),s(r,{key:"2"},{tab:o(()=>[pe]),default:o(()=>[s(me,{idx:t.value,onRowClick:v},null,8,["idx"])]),_:1})]),_:2},[e.value==="2"?{name:"rightExtra",fn:o(()=>[s(b,{size:"small",class:"mt-3",onClick:f[0]||(f[0]=w=>t.value+=1)},{default:o(()=>[_e,p(" Refresh Data ")]),_:1})]),key:"0"}:void 0]),1032,["activeKey"])])}}});export{Ne as default};
