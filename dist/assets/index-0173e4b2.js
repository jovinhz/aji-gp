var q=Object.defineProperty;var W=(n,e,a)=>e in n?q(n,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[e]=a;var K=(n,e,a)=>(W(n,typeof e!="symbol"?e+"":e,a),a);import{B as R}from"./index-153eefc2.js";import{_ as z}from"./AgGrid.vuevuetypescriptsetuptruelang-ab13ecb9.js";import{o as A,a as O}from"./index-8f77c718.js";import"./index-516ff1a6.js";/* empty css              */import{H as G,u as S}from"./HttpClient-7fc79ba3.js";import{I as J,_ as L,F as P}from"./Input-bda0940e.js";import"./index-17b77924.js";import{d as $,r as b,O as B,w as V,e as _,a7 as E,ac as l,f as N,g as s,a9 as p,c as i,u as x,aa as T,ae as Q,a as X,ak as Y}from"./plugin-vueexport-helper-0ef99882.js";import{M as Z}from"./Modal-79dc3d32.js";import{_ as ee}from"./index-0437c30a.js";import{T as ae,_ as te}from"./TabPane-9c8435b0.js";import"./index-95382b53.js";import"./pickAttrs-596f35c3.js";class w{static list(){return this.HttpClient.axiosInstance.get("/departements")}static create(e){return this.HttpClient.withOptions({showSuccessFeedback:!0,successFeedbackMessage:"Departemen berhasil ditambah"}).axiosInstance.post("/departements",e)}static update(e,a){return this.HttpClient.withOptions({showSuccessFeedback:!0,successFeedbackMessage:"Departemen berhasil diupdate"}).axiosInstance.put(`/departements/${e}`,a)}static delete(e){return this.HttpClient.withOptions({showSuccessFeedback:!0,successFeedbackMessage:"Departemen berhasil dihapus"}).axiosInstance.delete(`/departements/${e}`)}}K(w,"HttpClient",new G);const ne={class:"card card-custom card-dense"},se={class:"card-header"},oe={class:"card-title w-100 d-flex justify-content-between"},ie=l("h4",{class:"card-label"},"Form Master Departemen",-1),le={class:"card-body"},ce={class:"row"},de={class:"col-lg-6"},re=l("i",{class:"fe fe-save me-2"},null,-1),ue=$({__name:"Form",props:{formData:null,editMode:{type:Boolean}},emits:["cancelEdit","onSuccess"],setup(n,{emit:e}){const a=n,d=b(),t=B({}),h={code:[{required:!0,message:"Kode departemen wajib diisi",trigger:"change"}],name:[{required:!0,message:"Nama departemen wajib diisi",trigger:"change"}]},{run:f,loading:v,response:r}=S(),{run:m,loading:u,response:g}=S();async function C(){var c,o;try{a.editMode?await f(w.update(a.formData.id,{name:t.name})):(await f(w.create({code:t.code.toUpperCase(),name:t.name})),(c=r.value)!=null&&c.success&&M()),(o=r.value)!=null&&o.success&&e("onSuccess")}catch{}}async function D(){var c,o;try{await m(w.delete((c=a.formData)==null?void 0:c.id)),(o=g.value)!=null&&o.success&&(M(),e("onSuccess"))}catch{}}function M(){var c;if(a.editMode){for(const o in t)t[o]=void 0;e("cancelEdit")}else(c=d.value)==null||c.resetFields()}function U(){Z.confirm({title:"Konfirmasi Hapus Departemen",content:"Apakah kamu sudah yakin ingin menghapus data "+t.name,cancelText:"Batal",onOk:D})}return V(()=>a.formData,()=>{var c;a.formData&&((c=d.value)==null||c.clearValidate(),t.code=a.formData.code,t.name=a.formData.name)}),(c,o)=>{const y=ee,H=J,I=L,F=R,j=P;return _(),E("div",ne,[l("div",se,[l("div",oe,[ie,n.editMode?(_(),N(y,{key:0,color:"orange"},{default:s(()=>[p("Mode Edit")]),_:1})):(_(),N(y,{key:1,color:"cyan"},{default:s(()=>[p("Mode Input")]),_:1}))])]),l("div",le,[i(j,{ref_key:"formRef",ref:d,model:t,rules:h,"label-col":{style:{width:"220px"}},colon:!1,"label-align":"left",onFinish:o[2]||(o[2]=k=>x(A)(d.value,C))},{default:s(()=>[l("div",ce,[l("div",de,[i(I,{label:"Kode Departemen",name:"code",ref:"code"},{default:s(()=>[i(H,{value:t.code,"onUpdate:value":o[0]||(o[0]=k=>t.code=k),valueModifiers:{trim:!0},style:{"text-transform":"uppercase"},disabled:n.editMode},null,8,["value","disabled"])]),_:1},512),i(I,{label:"Nama Departemen",name:"name",ref:"name"},{default:s(()=>[i(H,{value:t.name,"onUpdate:value":o[1]||(o[1]=k=>t.name=k)},null,8,["value"])]),_:1},512),i(F,{type:"primary","html-type":"submit",loading:x(v)},{default:s(()=>[re,l("span",null,T(n.editMode?"Edit":"Simpan"),1)]),_:1},8,["loading"]),i(F,{class:"mx-3",onClick:M},{default:s(()=>[p(T(n.editMode?"Batal Edit":"Bersihkan"),1)]),_:1}),n.editMode?(_(),N(F,{key:0,danger:"",type:"primary",onClick:U,loading:x(u)},{default:s(()=>[p(" Hapus ")]),_:1},8,["loading"])):Q("",!0)])])]),_:1},8,["model"])])])}}}),me=$({__name:"DataTable",props:{idx:null},emits:["rowClick"],setup(n,{emit:e}){const a=n,d=B({value:[{field:"code",headerName:"Kode Departemen",minWidth:150,pinned:"left"},{field:"name",headerName:"Nama",minWidth:150},{field:"created_at",headerName:"Diinput Tgl",...O},{field:"updated_at",headerName:"Diupdate Tgl",...O},{field:"created_by_user_username",headerName:"Diinput Oleh",flex:0,width:120},{field:"updated_by_user_username",headerName:"Diupdate Oleh",flex:0,width:120}]}),t=B({value:null}),{run:h,response:f,loading:v}=S();async function r(){var u;try{await h(w.list()),(u=f.value)!=null&&u.success&&(t.value=f.value.data)}catch{}}function m(u){e("rowClick",u)}return X(()=>{r()}),V(()=>a.idx,()=>{r()}),(u,g)=>(_(),E("div",null,[i(z,{"row-data":t.value,"column-defs":d.value,loading:x(v),onRowClick:m},null,8,["row-data","column-defs","loading"])]))}}),fe=l("span",null,[l("i",{class:"fe fe-edit-2 me-2"}),p(" Input ")],-1),pe=l("span",null,[l("i",{class:"fe fe-search me-2"}),p(" Browse ")],-1),_e=l("i",{class:"fe fe-refresh-cw me-2"},null,-1),$e=$({__name:"index",setup(n){const e=b("1"),a=b(),d=b(!1),t=b(1);function h(r){e.value="1",a.value={...r},d.value=!0}function f(){d.value=!1}function v(r){t.value+=1,r!==void 0&&(d.value=r)}return(r,m)=>{const u=te,g=R,C=ae;return _(),E("div",null,[i(C,{class:"input-browse-tab",activeKey:e.value,"onUpdate:activeKey":m[1]||(m[1]=D=>e.value=D),animated:""},Y({default:s(()=>[i(u,{key:"1"},{tab:s(()=>[fe]),default:s(()=>[i(ue,{"form-data":a.value,"edit-mode":d.value,onCancelEdit:f,onOnSuccess:v},null,8,["form-data","edit-mode"])]),_:1}),i(u,{key:"2"},{tab:s(()=>[pe]),default:s(()=>[i(me,{idx:t.value,onRowClick:h},null,8,["idx"])]),_:1})]),_:2},[e.value==="2"?{name:"rightExtra",fn:s(()=>[i(g,{size:"small",class:"mt-3",onClick:m[0]||(m[0]=D=>t.value+=1)},{default:s(()=>[_e,p(" Refresh Data ")]),_:1})]),key:"0"}:void 0]),1032,["activeKey"])])}}});export{$e as default};
