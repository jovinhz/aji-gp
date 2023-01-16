var me=Object.defineProperty;var pe=(i,a,t)=>a in i?me(i,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[a]=t;var A=(i,a,t)=>(pe(i,typeof a!="symbol"?a+"":a,t),t);import{B as Q}from"./index-c2b9e26d.js";import{_ as J}from"./AgGrid.vuevuetypescriptsetuptruelang-57924cd0.js";import{u as fe,W as _e}from"./modal-5687005b.js";import{H as ge,u as D,o as H,a as F}from"./HttpClient-05f26028.js";import{I as ve,Y as ke,F as he}from"./index-d35a0029.js";import{_ as we}from"./InputDropdown.vuevuetypescriptsetuptruelang-e85e0881.js";import{d as B,Q as C,r as v,w as L,e as X,g as y,a7 as $,ac as l,j as R,k as n,a9 as g,b as o,u as p,ae as q,aa as Y,Y as be,ak as ye}from"./plugin-vueexport-helper-23a171d5.js";import{M as z}from"./Modal-3e6de3d8.js";import{_ as Me,T as De,a as xe}from"./index-69e0b682.js";class x{static list(){return this.HttpClient.axiosInstance.get("/worker_groups")}static create(a){return this.HttpClient.withOptions({showSuccessFeedback:!0,successFeedbackMessage:"Grup Pekerja berhasil ditambah"}).axiosInstance.post("/worker_groups",a)}static update(a,t){return this.HttpClient.withOptions({showSuccessFeedback:!0,successFeedbackMessage:"Grup Pekerja berhasil diupdate"}).axiosInstance.put(`/worker_groups/${a}`,t)}static listMembers(a){return this.HttpClient.axiosInstance.get(`/worker_groups/${a}/worker_group_members`)}static addMember(a,t){return this.HttpClient.withOptions({showSuccessFeedback:!0,successFeedbackMessage:"Pekerja berhasil ditambah kedalam grup"}).axiosInstance.post(`/worker_groups/${a}/worker_group_members`,t)}static updateMember(a,t,c){return this.HttpClient.withOptions({showSuccessFeedback:!0,successFeedbackMessage:"Anggota Grup berhasil diupdate"}).axiosInstance.put(`/worker_groups/${a}/worker_group_members/${t}`,c)}}A(x,"HttpClient",new ge);const Ce={class:"card card-custom card-dense"},Ne={class:"card-header"},je={class:"card-title w-100 d-flex justify-content-between"},Fe=l("h4",{class:"card-label"},"Form Grup Pekerja",-1),$e={class:"card-body"},Oe={class:"row"},Pe={class:"col-lg-6"},Se={key:0,class:"col-12"},He={class:"row"},Re={class:"col-lg-6 mt-4"},Be=l("i",{class:"fe fe-save me-2"},null,-1),Ge=B({__name:"Form",props:{formData:null,editMode:{type:Boolean}},emits:["cancelEdit","onSuccess"],setup(i,{emit:a}){const t=i,c=[{field:"worker.code",headerName:"Kode Pekerja"},{field:"worker.name",headerName:"Nama Pekerja"},{field:"created_at",headerName:"Diinput Tgl",...F},{field:"updated_at",headerName:"Diupdate Tgl",...F},{field:"created_by_user_username",headerName:"Diinput Oleh",flex:0,width:120},{field:"updated_by_user_username",headerName:"Diupdate Oleh",flex:0,width:120}],f=[{field:"code",headerName:"Kode Pekerja"},{field:"name",headerName:"Nama Pekerja"},{field:"status_caption",headerName:"Status Pekerja"}],M=C({value:null}),k=v([]),_=v(""),d=v(),s=C({}),m={code:[{required:!0,message:"Kode grup pekerja wajib diisi",trigger:"change"}],group_name:[{required:!0,message:"Nama grup pekerja wajib diisi",trigger:"change"}]},h=v(),w=C({}),N={worker_id:[{required:!0,message:"Pekerja wajib dipilih",trigger:"change"}]},{run:G,loading:Z,response:T}=D(),{run:ee,loading:ae,response:E}=D(),{run:te,loading:oe,response:I}=D(),{run:se,loading:We,response:ne}=D(),{run:Ue,loading:re,response:Ve}=D(),{visible:O,open:ie,close:Ae}=fe();async function le(){var r,e,b;try{t.editMode?await G(x.update((r=t.formData)==null?void 0:r.id,{group_name:s.group_name})):(await G(x.create({code:s.code.toUpperCase(),group_name:s.group_name})),(e=T.value)!=null&&e.success&&W()),(b=T.value)!=null&&b.success&&a("onSuccess")}catch{}}async function K(){var r,e;try{await se(x.addMember((r=t.formData)==null?void 0:r.id,{worker_id:w.worker_id})),(e=ne.value)!=null&&e.success&&(U(),_.value="",w.worker_id=void 0)}catch{}}async function de(){}function W(){var r;if(t.editMode){for(const e in s)s[e]=void 0;a("cancelEdit")}else(r=d.value)==null||r.resetFields()}function ue(){z.confirm({title:"Konfirmasi Hapus Grup Pekerja",content:"Apakah kamu sudah yakin ingin menghapus data [Edit Here]",cancelText:"Batal",onOk:de})}async function U(){var r,e;try{await ee(x.listMembers((r=t.formData)==null?void 0:r.id)),(e=E.value)!=null&&e.success&&(M.value=E.value.data)}catch{}}return L(()=>t.formData,()=>{var r;t.formData&&((r=d.value)==null||r.clearValidate(),s.code=t.formData.code,s.group_name=t.formData.group_name,_.value="",w.worker_id=void 0,U())}),X(async()=>{var r;try{await te(_e.list()),(r=I.value)!=null&&r.success&&(k.value=I.value.data)}catch{}}),(r,e)=>{const b=Me,P=ve,S=ke,j=Q,V=he,ce=z;return y(),$("div",Ce,[l("div",Ne,[l("div",je,[Fe,i.editMode?(y(),R(b,{key:0,color:"orange"},{default:n(()=>[g("Mode Edit")]),_:1})):(y(),R(b,{key:1,color:"cyan"},{default:n(()=>[g("Mode Input")]),_:1}))])]),l("div",$e,[o(V,{ref_key:"formRef",ref:d,model:s,rules:m,"label-col":{style:{width:"220px"}},colon:!1,"label-align":"left",onFinish:e[3]||(e[3]=u=>p(H)(d.value,le))},{default:n(()=>[l("div",Oe,[l("div",Pe,[o(S,{label:"Kode Grup",name:"code",ref:"code"},{default:n(()=>[o(P,{value:s.code,"onUpdate:value":e[0]||(e[0]=u=>s.code=u),valueModifiers:{trim:!0},style:{"text-transform":"uppercase"},disabled:i.editMode},null,8,["value","disabled"])]),_:1},512),o(S,{label:"Nama Grup",name:"group_name",ref:"group_name"},{default:n(()=>[o(P,{value:s.group_name,"onUpdate:value":e[1]||(e[1]=u=>s.group_name=u)},null,8,["value"])]),_:1},512)]),i.editMode?(y(),$("div",Se,[o(j,{onClick:p(ie),type:"primary"},{default:n(()=>[g("Tambah Anggota")]),_:1},8,["onClick"]),o(J,{class:"mt-3","row-data":M.value,"column-defs":c,loading:p(ae),onRowClick:e[2]||(e[2]=()=>{})},null,8,["row-data","column-defs","loading"])])):q("",!0)]),l("div",He,[l("div",Re,[o(j,{type:"primary","html-type":"submit",loading:p(Z)},{default:n(()=>[Be,l("span",null,Y(i.editMode?"Edit":"Simpan"),1)]),_:1},8,["loading"]),o(j,{class:"mx-3",onClick:W},{default:n(()=>[g(Y(i.editMode?"Batal Edit":"Bersihkan"),1)]),_:1}),i.editMode?(y(),R(j,{key:0,danger:"",type:"primary",onClick:ue,loading:p(re)},{default:n(()=>[g(" Hapus ")]),_:1},8,["loading"])):q("",!0)])])]),_:1},8,["model"])]),o(ce,{visible:p(O),"onUpdate:visible":e[6]||(e[6]=u=>be(O)?O.value=u:null),title:"Form Anggota Grup",width:"50vw",onOk:e[7]||(e[7]=u=>p(H)(h.value,K))},{default:n(()=>[o(V,{ref_key:"formRefMem",ref:h,model:w,rules:N,"label-col":{style:{width:"220px"}},colon:!1,"label-align":"left",onFinish:e[5]||(e[5]=u=>p(H)(h.value,K))},{default:n(()=>[o(S,{label:"Pekerja",name:"worker_id",ref:"worker_id"},{default:n(()=>[o(we,{"column-defs":f,"grid-data":k.value,loading:p(oe),value:void 0,"value-display":_.value,"min-width":"100%",onChange:e[4]||(e[4]=u=>{w.worker_id=u.id,_.value=`${u.code} - ${u.name}`})},null,8,["grid-data","loading","value-display"])]),_:1},512)]),_:1},8,["model"])]),_:1},8,["visible"])])}}}),Te=B({__name:"DataTable",props:{idx:null},emits:["rowClick"],setup(i,{emit:a}){const t=i,c=C({value:[{field:"code",headerName:"Kode Grup"},{field:"group_name",headerName:"Nama Grup"},{field:"created_at",headerName:"Diinput Tgl",...F},{field:"updated_at",headerName:"Diupdate Tgl",...F},{field:"created_by_user_username",headerName:"Diinput Oleh",flex:0,width:120},{field:"updated_by_user_username",headerName:"Diupdate Oleh",flex:0,width:120}]}),f=C({value:null}),{run:M,response:k,loading:_}=D();async function d(){var m;try{await M(x.list()),(m=k.value)!=null&&m.success&&(f.value=k.value.data)}catch{}}function s(m){a("rowClick",m)}return X(()=>{d()}),L(()=>t.idx,()=>{d()}),(m,h)=>(y(),$("div",null,[o(J,{"row-data":f.value,"column-defs":c.value,loading:p(_),onRowClick:s},null,8,["row-data","column-defs","loading"])]))}}),Ee=l("span",null,[l("i",{class:"fe fe-edit-2 me-2"}),g(" Input ")],-1),Ie=l("span",null,[l("i",{class:"fe fe-search me-2"}),g(" Browse ")],-1),Ke=l("i",{class:"fe fe-refresh-cw me-2"},null,-1),ta=B({__name:"index",setup(i){const a=v("1"),t=v(),c=v(!1),f=v(1);function M(d){a.value="1",t.value={...d},c.value=!0}function k(){c.value=!1}function _(d){f.value+=1,d!==void 0&&(c.value=d)}return(d,s)=>{const m=xe,h=Q,w=De;return y(),$("div",null,[o(w,{class:"input-browse-tab",activeKey:a.value,"onUpdate:activeKey":s[1]||(s[1]=N=>a.value=N),animated:""},ye({default:n(()=>[o(m,{key:"1"},{tab:n(()=>[Ee]),default:n(()=>[o(Ge,{"form-data":t.value,"edit-mode":c.value,onCancelEdit:k,onOnSuccess:_},null,8,["form-data","edit-mode"])]),_:1}),o(m,{key:"2"},{tab:n(()=>[Ie]),default:n(()=>[o(Te,{idx:f.value,onRowClick:M},null,8,["idx"])]),_:1})]),_:2},[a.value==="2"?{name:"rightExtra",fn:n(()=>[o(h,{size:"small",class:"mt-3",onClick:s[0]||(s[0]=N=>f.value+=1)},{default:n(()=>[Ke,g(" Refresh Data ")]),_:1})]),key:"0"}:void 0]),1032,["activeKey"])])}}});export{ta as default};
