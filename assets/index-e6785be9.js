var W=Object.defineProperty;var X=(o,t,e)=>t in o?W(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var I=(o,t,e)=>(X(o,typeof t!="symbol"?t+"":t,e),e);import{B as A}from"./index-166a5e79.js";/* empty css              */import{H as Y,u as C}from"./HttpClient-ff08f65a.js";import{I as Z}from"./index-91845532.js";import{o as ee,a as T}from"./index-44824ea8.js";import{_ as ae}from"./InputDropdown.vue_vue_type_script_setup_true_lang-30fcb548.js";import{d as j,r as v,Q as O,w as V,e as U,g as k,a2 as B,a7 as l,j as F,k as n,a4 as g,b as i,u as b,a5 as R,a9 as te,aj as ne}from"./runtime-core.esm-bundler-441c3591.js";import{M as ie,_ as oe,T as se,a as le}from"./Modal-c770c219.js";import{_ as ce,F as re}from"./index-1ee0591d.js";import{_ as de}from"./TextArea-d0614689.js";import{_ as ue}from"./AgGrid.vue_vue_type_script_setup_true_lang-2a0939af.js";import"./_plugin-vue_export-helper-c27b6911.js";class D{static list(){return this.HttpClient.axiosInstance.get("/working_tools")}static create(t){return this.HttpClient.withOptions({showSuccessFeedback:!0,successFeedbackMessage:"Alat Kerja berhasil ditambah"}).axiosInstance.post("/working_tools",t)}static update(t,e){return this.HttpClient.withOptions({showSuccessFeedback:!0,successFeedbackMessage:"Alat Kerja berhasil diupdate"}).axiosInstance.put(`/working_tools/${t}`,e)}static formOptions(){return this.HttpClient.axiosInstance.get("/working_tools/form_options")}}I(D,"HttpClient",new Y);const me={class:"card card-custom card-dense"},fe={class:"card-header"},pe={class:"card-title w-100 d-flex justify-content-between"},_e=l("h4",{class:"card-label"},"Form Master Alat Kerja",-1),ve={class:"card-body"},ge={class:"row"},he={class:"col-lg-6"},ke=l("i",{class:"fe fe-save me-2"},null,-1),we=j({__name:"Form",props:{formData:null,editMode:{type:Boolean}},emits:["cancelEdit","onSuccess"],setup(o,{emit:t}){const e=o,f=[{field:"code",headerName:"Kode Satuan"},{field:"name",headerName:"Nama Satuan"}],c=v(""),p=v(),a=O({}),w={name:[{required:!0,message:"Nama alat kerja wajib diisi",trigger:"change"}],unit_id:[{required:!0,message:"Satuan wajib dipilih",trigger:"change"}],specification:[{required:!0,message:"Spesifikasi wajib diisi",trigger:"change"}]},d=v(),{run:m,loading:u,response:h}=C(),{run:S,loading:x,response:E}=C(),{run:Ce,loading:q,response:Se}=C();async function z(){var r,s,y;try{e.editMode?await m(D.update((r=e.formData)==null?void 0:r.id,{name:a.name,unit_id:a.unit_id,specification:a.specification})):(await m(D.create({name:a.name,unit_id:a.unit_id,specification:a.specification})),(s=h.value)!=null&&s.success&&H()),(y=h.value)!=null&&y.success&&t("onSuccess")}catch{}}async function G(){}function H(){var r;if(e.editMode){for(const s in a)a[s]=void 0;c.value="",t("cancelEdit")}else(r=p.value)==null||r.resetFields(),c.value=""}function Q(){ie.confirm({title:"Konfirmasi Hapus Alat Kerja",content:"Apakah kamu sudah yakin ingin menghapus data [Edit Here]",cancelText:"Batal",onOk:G})}return V(()=>e.formData,()=>{var r;e.formData&&((r=p.value)==null||r.clearValidate(),a.name=e.formData.name,a.specification=e.formData.specification,a.unit_id=e.formData.unit.id,c.value=`${e.formData.unit.code} - ${e.formData.unit.name}`)}),U(async()=>{var r;try{await S(D.formOptions()),(r=E.value)!=null&&r.success&&(d.value=E.value.data)}catch{}}),(r,s)=>{const y=oe,K=Z,M=ce,J=ae,L=de,N=A,P=re;return k(),B("div",me,[l("div",fe,[l("div",pe,[_e,o.editMode?(k(),F(y,{key:0,color:"orange"},{default:n(()=>[g("Mode Edit")]),_:1})):(k(),F(y,{key:1,color:"cyan"},{default:n(()=>[g("Mode Input")]),_:1}))])]),l("div",ve,[i(P,{ref_key:"formRef",ref:p,model:a,rules:w,"label-col":{style:{width:"220px"}},colon:!1,"label-align":"left",onFinish:s[3]||(s[3]=_=>b(ee)(p.value,z))},{default:n(()=>[l("div",ge,[l("div",he,[i(M,{label:"Nama",name:"name",ref:"name"},{default:n(()=>[i(K,{value:a.name,"onUpdate:value":s[0]||(s[0]=_=>a.name=_)},null,8,["value"])]),_:1},512),i(M,{label:"Satuan",name:"unit_id",ref:"unit_id"},{default:n(()=>{var _;return[i(J,{"column-defs":f,"grid-data":((_=d.value)==null?void 0:_.units)??[],loading:b(x),value:void 0,"value-display":c.value,onChange:s[1]||(s[1]=$=>{a.unit_id=$.id,c.value=`${$.code} - ${$.name}`})},null,8,["grid-data","loading","value-display"])]}),_:1},512),i(M,{label:"Spesifikasi",name:"specification",ref:"specification"},{default:n(()=>[i(L,{value:a.specification,"onUpdate:value":s[2]||(s[2]=_=>a.specification=_)},null,8,["value"])]),_:1},512),i(N,{type:"primary","html-type":"submit",loading:b(u)},{default:n(()=>[ke,l("span",null,R(o.editMode?"Edit":"Simpan"),1)]),_:1},8,["loading"]),i(N,{class:"mx-3",onClick:H},{default:n(()=>[g(R(o.editMode?"Batal Edit":"Bersihkan"),1)]),_:1}),o.editMode?(k(),F(N,{key:0,danger:"",type:"primary",onClick:Q,loading:b(q)},{default:n(()=>[g(" Hapus ")]),_:1},8,["loading"])):te("",!0)])])]),_:1},8,["model"])])])}}}),ye=j({__name:"DataTable",props:{idx:null},emits:["rowClick"],setup(o,{emit:t}){const e=o,f=O({value:[{field:"name",headerName:"Nama",pinned:"left"},{field:"specification",headerName:"Spesifikasi"},{field:"unit.name",headerName:"Satuan"},{field:"created_at",headerName:"Diinput Tgl",...T},{field:"updated_at",headerName:"Diupdate Tgl",...T},{field:"created_by_user_username",headerName:"Diinput Oleh",flex:0,width:120},{field:"updated_by_user_username",headerName:"Diupdate Oleh",flex:0,width:120}]}),c=O({value:null}),{run:p,response:a,loading:w}=C();async function d(){var u;try{await p(D.list()),(u=a.value)!=null&&u.success&&(c.value=a.value.data)}catch{}}function m(u){t("rowClick",u)}return U(()=>{d()}),V(()=>e.idx,()=>{d()}),(u,h)=>(k(),B("div",null,[i(ue,{"row-data":c.value,"column-defs":f.value,loading:b(w),onRowClick:m},null,8,["row-data","column-defs","loading"])]))}}),be=l("span",null,[l("i",{class:"fe fe-edit-2 me-2"}),g(" Input ")],-1),De=l("span",null,[l("i",{class:"fe fe-search me-2"}),g(" Browse ")],-1),xe=l("i",{class:"fe fe-refresh-cw me-2"},null,-1),Ae=j({__name:"index",setup(o){const t=v("1"),e=v(),f=v(!1),c=v(1);function p(d){t.value="1",e.value={...d},f.value=!0}function a(){f.value=!1}function w(d){c.value+=1,d!==void 0&&(f.value=d)}return(d,m)=>{const u=le,h=A,S=se;return k(),B("div",null,[i(S,{class:"input-browse-tab",activeKey:t.value,"onUpdate:activeKey":m[1]||(m[1]=x=>t.value=x),animated:""},ne({default:n(()=>[i(u,{key:"1"},{tab:n(()=>[be]),default:n(()=>[i(we,{"form-data":e.value,"edit-mode":f.value,onCancelEdit:a,onOnSuccess:w},null,8,["form-data","edit-mode"])]),_:1}),i(u,{key:"2"},{tab:n(()=>[De]),default:n(()=>[i(ye,{idx:c.value,onRowClick:p},null,8,["idx"])]),_:1})]),_:2},[t.value==="2"?{name:"rightExtra",fn:n(()=>[i(h,{size:"small",class:"mt-3",onClick:m[0]||(m[0]=x=>c.value+=1)},{default:n(()=>[xe,g(" Refresh Data ")]),_:1})]),key:"0"}:void 0]),1032,["activeKey"])])}}});export{Ae as default};
