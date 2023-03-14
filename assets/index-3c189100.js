var q=Object.defineProperty;var W=(n,e,t)=>e in n?q(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var K=(n,e,t)=>(W(n,typeof e!="symbol"?e+"":e,t),t);import{B as R}from"./index-00a8ffd2.js";/* empty css              *//* empty css              */import"./index-97222043.js";/* empty css              *//* empty css              */import{H as z,u as S}from"./HttpClient-64290c27.js";import{o as A,a as O}from"./index-f9e6a35e.js";import{_ as G,F as J}from"./Form-2caee2e0.js";import"./index-22e2e4e6.js";import{d as $,r as b,O as B,w as V,e as _,a7 as E,ac as l,f as N,g as o,a9 as f,c as i,u as x,aa as T,ae as L,a as P,ak as Q}from"./_plugin-vue_export-helper-50c92bea.js";import{M as X}from"./Modal-5bd2bcee.js";import{_ as Y}from"./index-f9be8515.js";import{I as Z}from"./Input-97482d20.js";import{_ as ee}from"./AgGrid.vue_vue_type_script_setup_true_lang-d3dbb188.js";import{T as te,_ as ae}from"./TabPane-053c7c75.js";import"./index-24ec387b.js";import"./dayjs.min-2389bdff.js";import"./_flatRest-6ef3b5aa.js";import"./isSymbol-5a6ec0b4.js";import"./debounce-52dc8683.js";import"./pickAttrs-44b65975.js";import"./useRefs-9f478e5b.js";class w{static list(){return this.HttpClient.axiosInstance.get("/departements")}static create(e){return this.HttpClient.withOptions({showSuccessFeedback:!0,successFeedbackMessage:"Departemen berhasil ditambah"}).axiosInstance.post("/departements",e)}static update(e,t){return this.HttpClient.withOptions({showSuccessFeedback:!0,successFeedbackMessage:"Departemen berhasil diupdate"}).axiosInstance.put(`/departements/${e}`,t)}static delete(e){return this.HttpClient.withOptions({showSuccessFeedback:!0,successFeedbackMessage:"Departemen berhasil dihapus"}).axiosInstance.delete(`/departements/${e}`)}}K(w,"HttpClient",new z);const ne={class:"card card-custom card-dense"},oe={class:"card-header"},se={class:"card-title w-100 d-flex justify-content-between"},ie=l("h4",{class:"card-label"},"Form Master Departemen",-1),le={class:"card-body"},re={class:"row"},ce={class:"col-lg-6"},de=l("i",{class:"fe fe-save me-2"},null,-1),ue=$({__name:"Form",props:{formData:null,editMode:{type:Boolean}},emits:["cancelEdit","onSuccess"],setup(n,{emit:e}){const t=n,c=b(),a=B({}),h={code:[{required:!0,message:"Kode departemen wajib diisi",trigger:"change"}],name:[{required:!0,message:"Nama departemen wajib diisi",trigger:"change"}]},{run:p,loading:v,response:d}=S(),{run:m,loading:u,response:g}=S();async function C(){var r,s;try{t.editMode?await p(w.update(t.formData.id,{name:a.name})):(await p(w.create({code:a.code.toUpperCase(),name:a.name})),(r=d.value)!=null&&r.success&&M()),(s=d.value)!=null&&s.success&&e("onSuccess")}catch{}}async function D(){var r,s;try{await m(w.delete((r=t.formData)==null?void 0:r.id)),(s=g.value)!=null&&s.success&&(M(),e("onSuccess"))}catch{}}function M(){var r;if(t.editMode){for(const s in a)a[s]=void 0;e("cancelEdit")}else(r=c.value)==null||r.resetFields()}function U(){X.confirm({title:"Konfirmasi Hapus Departemen",content:"Apakah kamu sudah yakin ingin menghapus data "+a.name,cancelText:"Batal",onOk:D})}return V(()=>t.formData,()=>{var r;t.formData&&((r=c.value)==null||r.clearValidate(),a.code=t.formData.code,a.name=t.formData.name)}),(r,s)=>{const y=Y,H=Z,I=G,F=R,j=J;return _(),E("div",ne,[l("div",oe,[l("div",se,[ie,n.editMode?(_(),N(y,{key:0,color:"orange"},{default:o(()=>[f("Mode Edit")]),_:1})):(_(),N(y,{key:1,color:"cyan"},{default:o(()=>[f("Mode Input")]),_:1}))])]),l("div",le,[i(j,{ref_key:"formRef",ref:c,model:a,rules:h,"label-col":{style:{width:"220px"}},colon:!1,"label-align":"left",onFinish:s[2]||(s[2]=k=>x(A)(c.value,C))},{default:o(()=>[l("div",re,[l("div",ce,[i(I,{label:"Kode Departemen",name:"code",ref:"code"},{default:o(()=>[i(H,{value:a.code,"onUpdate:value":s[0]||(s[0]=k=>a.code=k),valueModifiers:{trim:!0},style:{"text-transform":"uppercase"},disabled:n.editMode},null,8,["value","disabled"])]),_:1},512),i(I,{label:"Nama Departemen",name:"name",ref:"name"},{default:o(()=>[i(H,{value:a.name,"onUpdate:value":s[1]||(s[1]=k=>a.name=k)},null,8,["value"])]),_:1},512),i(F,{type:"primary","html-type":"submit",loading:x(v)},{default:o(()=>[de,l("span",null,T(n.editMode?"Edit":"Simpan"),1)]),_:1},8,["loading"]),i(F,{class:"mx-3",onClick:M},{default:o(()=>[f(T(n.editMode?"Batal Edit":"Bersihkan"),1)]),_:1}),n.editMode?(_(),N(F,{key:0,danger:"",type:"primary",onClick:U,loading:x(u)},{default:o(()=>[f(" Hapus ")]),_:1},8,["loading"])):L("",!0)])])]),_:1},8,["model"])])])}}}),me=$({__name:"DataTable",props:{idx:null},emits:["rowClick"],setup(n,{emit:e}){const t=n,c=B({value:[{field:"code",headerName:"Kode Departemen",minWidth:150,pinned:"left"},{field:"name",headerName:"Nama",minWidth:150},{field:"created_at",headerName:"Diinput Tgl",...O},{field:"updated_at",headerName:"Diupdate Tgl",...O},{field:"created_by_user_username",headerName:"Diinput Oleh",flex:0,width:120},{field:"updated_by_user_username",headerName:"Diupdate Oleh",flex:0,width:120}]}),a=B({value:null}),{run:h,response:p,loading:v}=S();async function d(){var u;try{await h(w.list()),(u=p.value)!=null&&u.success&&(a.value=p.value.data)}catch{}}function m(u){e("rowClick",u)}return P(()=>{d()}),V(()=>t.idx,()=>{d()}),(u,g)=>(_(),E("div",null,[i(ee,{"row-data":a.value,"column-defs":c.value,loading:x(v),onRowClick:m},null,8,["row-data","column-defs","loading"])]))}}),pe=l("span",null,[l("i",{class:"fe fe-edit-2 me-2"}),f(" Input ")],-1),fe=l("span",null,[l("i",{class:"fe fe-search me-2"}),f(" Browse ")],-1),_e=l("i",{class:"fe fe-refresh-cw me-2"},null,-1),Ue=$({__name:"index",setup(n){const e=b("1"),t=b(),c=b(!1),a=b(1);function h(d){e.value="1",t.value={...d},c.value=!0}function p(){c.value=!1}function v(d){a.value+=1,d!==void 0&&(c.value=d)}return(d,m)=>{const u=ae,g=R,C=te;return _(),E("div",null,[i(C,{class:"input-browse-tab",activeKey:e.value,"onUpdate:activeKey":m[1]||(m[1]=D=>e.value=D),animated:""},Q({default:o(()=>[i(u,{key:"1"},{tab:o(()=>[pe]),default:o(()=>[i(ue,{"form-data":t.value,"edit-mode":c.value,onCancelEdit:p,onOnSuccess:v},null,8,["form-data","edit-mode"])]),_:1}),i(u,{key:"2"},{tab:o(()=>[fe]),default:o(()=>[i(me,{idx:a.value,onRowClick:h},null,8,["idx"])]),_:1})]),_:2},[e.value==="2"?{name:"rightExtra",fn:o(()=>[i(g,{size:"small",class:"mt-3",onClick:m[0]||(m[0]=D=>a.value+=1)},{default:o(()=>[_e,f(" Refresh Data ")]),_:1})]),key:"0"}:void 0]),1032,["activeKey"])])}}});export{Ue as default};
