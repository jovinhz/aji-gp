var ue=Object.defineProperty;var ce=(p,r,o)=>r in p?ue(p,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):p[r]=o;var J=(p,r,o)=>(ce(p,typeof r!="symbol"?r+"":r,o),o);import{B as W}from"./index-90b0ce28.js";/* empty css              */import{u as fe}from"./modal-5831ef41.js";/* empty css              */import"./index-f73f074f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{a as G}from"./dayjs.min-527378d9.js";import{H as be,u as M}from"./HttpClient-1b2eaec7.js";import{o as ge,c as ve,g as ke,a as F}from"./index-b46cc542.js";import{_ as z}from"./InputDropdown.vuevuetypescriptsetuptruelang-42ddf6af.js";import{d as K,r as b,O,w as X,a as Q,e as j,a7 as $,ac as l,f as T,g as s,a9 as D,c as t,u as v,aa as L,ae as he,F as ye,ab as we,X as xe,ak as je}from"./plugin-vueexport-helper-50c92bea.js";import{_ as De}from"./index-adc802a8.js";import{I as Pe}from"./Input-0690b7a8.js";import{_ as Ce,F as Ne}from"./Form-bf91ef97.js";import{D as $e}from"./dayjs-c4d578da.js";import{_ as Be}from"./TextArea-dc2b2442.js";import{_ as Fe,a as Me}from"./index-c9b60cec.js";import{M as Se}from"./Modal-7e7fe8a9.js";import{_ as Te}from"./AgGrid.vuevuetypescriptsetuptruelang-ab623fe9.js";import{T as Oe,_ as Ke}from"./TabPane-e550f0d2.js";import"./_flatRest-fbf250a7.js";import"./isSymbol-86c3dd79.js";import"./debounce-11220fe5.js";import"./useRefs-c0f8034e.js";import"./useMemo-b955d761.js";import"./EyeOutlined-94af75b6.js";import"./pickAttrs-efa5632c.js";import"./index-77a3d62a.js";import"./CheckOutlined-48efc1ed.js";import"./index-68047142.js";class C{static list(){return this.HttpClient.axiosInstance.get("/submission_reports")}static show(r){return this.HttpClient.withOptions({showSuccessFeedback:!1,showErrorFeedback:!1}).axiosInstance.get(`/submission_reports/${r}`)}static create(r){return this.HttpClient.withOptions({showSuccessFeedback:!0,successFeedbackMessage:"Berita Acara berhasil ditambah"}).axiosInstance.post("/submission_reports",r)}static update(r,o){return this.HttpClient.withOptions({showSuccessFeedback:!0,successFeedbackMessage:"Berita Acara berhasil diupdate"}).axiosInstance.put(`submission_reports/${r}`,o)}static print(r){return this.HttpClient.axiosInstance.get(`/submission_reports/${r}/print`)}static formOptions(){return this.HttpClient.axiosInstance.get("/submission_reports/form_options")}}J(C,"HttpClient",new be);const Ue={class:"card card-custom card-dense"},Ie={class:"card-header"},qe={class:"card-title w-100 d-flex justify-content-between"},Ee=l("h4",{class:"card-label"},"Form Berita Acara",-1),He={class:"card-body"},Ae={class:"row"},Re={class:"col-lg-6"},Ve=l("i",{class:"fe fe-save me-2"},null,-1),Je=l("span",null,"Cetak",-1),Ge={class:"col-lg-6"},ze=l("h6",null,"Galeri",-1),Le={class:"mb-3"},We=l("i",{class:"fe fe-upload me-2"},null,-1),Xe={class:"d-flex flex-wrap"},Qe=["onClick"],Ye=l("i",{class:"fe fe-trash"},null,-1),Ze=[Ye],ea=["data"],aa=K({__name:"Form",props:{formData:null,editMode:{type:Boolean}},emits:["cancelEdit","onSuccess"],setup(p,{emit:r}){const o=p,h=[{headerName:"No. Projek",field:"worklist_number"},{headerName:"Judul Projek",field:"title"}],y=[{headerName:"NIP",field:"employee_id_number"},{headerName:"Nama",field:"full_name"}],P=b(),k=b(""),w=b(""),f=b(""),u=b([]),m=b([]),x=b(),e=O({}),B={worklist_id:[{required:!0,message:"Projek wajib dipilih",trigger:"change"}],job_submission_report_date:[{required:!0,message:"Tgl transaksi wajib diisi",trigger:"change"}],first_party_id:[{required:!0,message:"Pihak pertama wajib dipilih",trigger:"change"}],second_party_name:[{required:!0,message:"Pihak kedua wajib diisi",trigger:"change"}],second_party_position:[{required:!0,message:"Posisi pihak kedua wajib diisi",trigger:"change"}],job_description:[{required:!0,message:"Deskripsi pekerjaan wajib diisi",trigger:"change"}],work_completion_report_date:[{required:!0,message:"Tgl pekerjaan selesai wajib diisi",trigger:"change"}],first_examiner_name:[{required:!0,message:"Pemeriksa pertama wajib diisi",trigger:"change"}],first_examiner_position:[{required:!0,message:"Posisi pemeriksa pertama wajib diisi",trigger:"change"}],last_condition:[{required:!0,message:"Kondisi terakhir wajib diisi",trigger:"change"}],signature_city:[{required:!0,message:"Kota ttd wajib diisi",trigger:"change"}]},{run:U,loading:Y,response:I}=M(),{run:Z,loading:q,response:E}=M(),{run:ee,loading:ae,response:H}=M(),{visible:S,open:te,close:ie}=fe();async function oe(){var d,a,g;try{if(o.editMode){const i=new FormData;i.append("first_examiner_name",e.first_examiner_name),i.append("first_party_id",e.first_party_id.toString()),i.append("first_examiner_position",e.first_examiner_position),i.append("job_description",e.job_description),i.append("job_submission_report_date",e.job_submission_report_date),i.append("last_condition",e.last_condition),i.append("second_party_name",e.second_party_name),i.append("second_party_position",e.second_party_position),i.append("signature_city",e.signature_city),i.append("work_completion_report_date",e.work_completion_report_date),i.append("worklist_id",e.worklist_id.toString()),i.append("second_examiner_name",e.second_examiner_name),i.append("second_examiner_position",e.second_examiner_position);for(let _=0;_<u.value.length;_++)i.append("results[]",u.value[_]);await U(C.update((d=o.formData)==null?void 0:d.id,i))}else{const i=new FormData;i.append("first_examiner_name",e.first_examiner_name),i.append("first_party_id",e.first_party_id.toString()),i.append("first_examiner_position",e.first_examiner_position),i.append("job_description",e.job_description),i.append("job_submission_report_date",e.job_submission_report_date),i.append("last_condition",e.last_condition),i.append("second_party_name",e.second_party_name),i.append("second_party_position",e.second_party_position),i.append("signature_city",e.signature_city),i.append("work_completion_report_date",e.work_completion_report_date),i.append("worklist_id",e.worklist_id.toString()),i.append("second_examiner_name",e.second_examiner_name),i.append("second_examiner_position",e.second_examiner_position);for(let _=0;_<u.value.length;_++)i.append("results[]",u.value[_]);await U(C.create(i)),(a=I.value)!=null&&a.success&&A()}(g=I.value)!=null&&g.success&&r("onSuccess")}catch{}}function A(){var d;if(o.editMode){for(const a in e)e[a]=void 0;r("cancelEdit")}else(d=x.value)==null||d.resetFields();u.value=[],m.value=[],k.value="",w.value=""}async function ne(){var d;try{await Z(C.formOptions()),(d=E.value)!=null&&d.success&&(P.value=E.value.data)}catch{}}async function se(){var d,a;try{await ee(C.print((d=o.formData)==null?void 0:d.id)),(a=H.value)!=null&&a.success&&(f.value="data:application/pdf;base64,"+H.value.data.base64,te())}catch{}}function re(d){ve(d.file)&&ke(d.file,a=>{console.log(m),u.value.push(d.file),m.value.push(a)})}function le(d){u.value=u.value.filter((a,g)=>g!==d),m.value=m.value.filter((a,g)=>g!==d)}return X(()=>o.formData,()=>{var d;o.formData&&((d=x.value)==null||d.clearValidate(),e.first_examiner_name=o.formData.first_examiner_name,e.first_examiner_position=o.formData.first_examiner_position,e.first_party_id=o.formData.first_party.id,e.job_description=o.formData.job_description,e.job_submission_report_date=o.formData.job_submission_report_date,e.last_condition=o.formData.last_condition,e.second_examiner_name=o.formData.second_examiner_name,e.second_examiner_position=o.formData.second_examiner_position,e.second_party_name=o.formData.second_party_name,e.second_party_position=o.formData.second_party_position,e.signature_city=o.formData.signature_city,e.work_completion_report_date=o.formData.work_completion_report_date,e.worklist_id=o.formData.worklist.id,k.value=`${o.formData.worklist.worklist_number} - ${o.formData.worklist.title}`,w.value=`${o.formData.first_party.employee_id_number} - ${o.formData.first_party.full_name}`,m.value=o.formData.result_images??[])}),Q(()=>{ne()}),(d,a)=>{const g=De,i=Pe,_=Ce,R=$e,V=Be,N=W,de=Fe,_e=Me,pe=Ne,me=Se;return j(),$("div",Ue,[l("div",Ie,[l("div",qe,[Ee,p.editMode?(j(),T(g,{key:0,color:"orange"},{default:s(()=>[D("Mode Edit")]),_:1})):(j(),T(g,{key:1,color:"cyan"},{default:s(()=>[D("Mode Input")]),_:1}))])]),l("div",He,[t(pe,{ref_key:"formRef",ref:x,model:e,rules:B,"label-col":{style:{width:"220px"}},colon:!1,"label-align":"left",onFinish:a[13]||(a[13]=n=>v(ge)(x.value,oe))},{default:s(()=>[l("div",Ae,[l("div",Re,[t(_,{label:"No BA"},{default:s(()=>{var n;return[t(i,{value:p.editMode?(n=p.formData)==null?void 0:n.submission_report_number:"",disabled:""},null,8,["value"])]}),_:1}),t(_,{label:"Projek",name:"worklist_id",ref:"worklist_id"},{default:s(()=>{var n;return[t(z,{"column-defs":h,"grid-data":((n=P.value)==null?void 0:n.worklists)??[],loading:v(q),value:void 0,"value-display":k.value,onChange:a[0]||(a[0]=c=>{e.worklist_id=c.id,k.value=`${c.worklist_number} - ${c.title}`})},null,8,["grid-data","loading","value-display"])]}),_:1},512),t(_,{label:"Tgl BA",name:"job_submission_report_date",ref:"job_submission_report_date"},{default:s(()=>[t(R,{value:e.job_submission_report_date?v(G)(e.job_submission_report_date):void 0,onChange:a[1]||(a[1]=(n,c)=>e.job_submission_report_date=c)},null,8,["value"])]),_:1},512),t(_,{label:"Pihak Pertama",name:"first_party_id",ref:"first_party_id"},{default:s(()=>{var n;return[t(z,{"column-defs":y,"grid-data":((n=P.value)==null?void 0:n.staffs)??[],loading:v(q),value:void 0,"value-display":w.value,onChange:a[2]||(a[2]=c=>{e.first_party_id=c.id,w.value=`${c.employee_id_number} - ${c.full_name}`})},null,8,["grid-data","loading","value-display"])]}),_:1},512),t(_,{label:"Pihak Kedua",name:"second_party_name",ref:"second_party_name"},{default:s(()=>[t(i,{value:e.second_party_name,"onUpdate:value":a[3]||(a[3]=n=>e.second_party_name=n)},null,8,["value"])]),_:1},512),t(_,{label:"Jabatan Pihak Kedua",name:"second_party_position",ref:"second_party_position"},{default:s(()=>[t(i,{value:e.second_party_position,"onUpdate:value":a[4]||(a[4]=n=>e.second_party_position=n)},null,8,["value"])]),_:1},512),t(_,{label:"Deskripsi Pekerjaan",name:"job_description",ref:"job_description"},{default:s(()=>[t(V,{value:e.job_description,"onUpdate:value":a[5]||(a[5]=n=>e.job_description=n),rows:4},null,8,["value"])]),_:1},512),t(_,{label:"Tgl Pekerjaan Selesai",name:"work_completion_report_date",ref:"work_completion_report_date"},{default:s(()=>[t(R,{value:e.work_completion_report_date?v(G)(e.work_completion_report_date):void 0,onChange:a[6]||(a[6]=(n,c)=>e.work_completion_report_date=c)},null,8,["value"])]),_:1},512),t(_,{label:"Pemeriksa Pertama",name:"first_examiner_name",ref:"first_examiner_name"},{default:s(()=>[t(i,{value:e.first_examiner_name,"onUpdate:value":a[7]||(a[7]=n=>e.first_examiner_name=n)},null,8,["value"])]),_:1},512),t(_,{label:"Jabatan Pemeriksa Pertama",name:"first_examiner_position",ref:"first_examiner_position"},{default:s(()=>[t(i,{value:e.first_examiner_position,"onUpdate:value":a[8]||(a[8]=n=>e.first_examiner_position=n)},null,8,["value"])]),_:1},512),t(_,{label:"Pemeriksa Kedua",name:"second_examiner_name",ref:"second_examiner_name"},{default:s(()=>[t(i,{value:e.second_examiner_name,"onUpdate:value":a[9]||(a[9]=n=>e.second_examiner_name=n)},null,8,["value"])]),_:1},512),t(_,{label:"Jabatan Pemeriksa Kedua",name:"second_examiner_position",ref:"second_examiner_position"},{default:s(()=>[t(i,{value:e.second_examiner_position,"onUpdate:value":a[10]||(a[10]=n=>e.second_examiner_position=n)},null,8,["value"])]),_:1},512),t(_,{label:"Kondisi Terakhir",name:"last_condition",ref:"last_condition"},{default:s(()=>[t(V,{value:e.last_condition,"onUpdate:value":a[11]||(a[11]=n=>e.last_condition=n),rows:4},null,8,["value"])]),_:1},512),t(_,{label:"Kota (TTD)",name:"signature_city",ref:"signature_city"},{default:s(()=>[t(i,{value:e.signature_city,"onUpdate:value":a[12]||(a[12]=n=>e.signature_city=n)},null,8,["value"])]),_:1},512),t(N,{type:"primary","html-type":"submit",loading:v(Y)},{default:s(()=>[Ve,l("span",null,L(p.editMode?"Edit":"Simpan"),1)]),_:1},8,["loading"]),t(N,{class:"mx-3",onClick:A},{default:s(()=>[D(L(p.editMode?"Batal Edit":"Bersihkan"),1)]),_:1}),p.editMode?(j(),T(N,{key:0,type:"primary",loading:v(ae),onClick:se},{default:s(()=>[Je]),_:1},8,["loading"])):he("",!0)]),l("div",Ge,[l("div",null,[ze,l("div",Le,[t(de,{accept:".png,.jpg,.jpeg","show-upload-list":!1,beforeUpload:()=>!1,onChange:re},{default:s(()=>[t(N,{size:"small"},{default:s(()=>[We,D(" Upload Gambar ")]),_:1})]),_:1},8,["beforeUpload"])]),l("div",Xe,[(j(!0),$(ye,null,we(m.value,(n,c)=>(j(),$("div",{class:"me-3 mb-2 text-center",key:`${c}`},[l("div",null,[t(_e,{class:"shadow",width:200,src:n},null,8,["src"])]),l("button",{class:"btn btn-danger mt-2",type:"button",onClick:sa=>le(c)},Ze,8,Qe)]))),128))])])])])]),_:1},8,["model"])]),t(me,{visible:v(S),"onUpdate:visible":a[14]||(a[14]=n=>xe(S)?S.value=n:null),title:"Cetak Berita Acara",width:"80vw",centered:"","body-style":{height:"80vh"}},{footer:s(()=>[t(N,{key:"back",onClick:v(ie),type:"primary"},{default:s(()=>[D(" Kembali ")]),_:1},8,["onClick"])]),default:s(()=>[l("object",{data:f.value,width:"100%",height:"100%"},null,8,ea)]),_:1},8,["visible"])])}}}),ta=K({__name:"DataTable",props:{idx:null},emits:["rowClick"],setup(p,{emit:r}){const o=p,h=O({value:[{field:"submission_report_number",headerName:"No BA",flex:0,width:140,pinned:"left"},{field:"job_submission_report_date",headerName:"Tgl BA",...F},{field:"worklist.worklist_number",headerName:"Projek",flex:0,width:140},{field:"work_completion_report_date",headerName:"Tgl Pekerjaan Selesai",...F},{field:"first_party.full_name",headerName:"Pihak Pertama",flex:0,width:150},{field:"second_party_name",headerName:"Pihak Kedua",flex:0,width:150},{field:"first_examiner_name",headerName:"Pemeriksa Pertama",flex:0,width:160},{field:"second_examiner_name",headerName:"Pemeriksa Kedua",flex:0,width:150},{field:"job_description",headerName:"Deskripsi Pekerjaan",flex:0,width:250,autoHeight:!0,wrapText:!0},{field:"created_at",headerName:"Diinput Tgl",...F},{field:"updated_at",headerName:"Diupdate Tgl",...F},{field:"created_by_user_username",headerName:"Diinput Oleh",flex:0,width:120},{field:"updated_by_user_username",headerName:"Diupdate Oleh",flex:0,width:120}]}),y=O({value:null}),{run:P,response:k,loading:w}=M();async function f(){var m;try{await P(C.list()),(m=k.value)!=null&&m.success&&(y.value=k.value.data)}catch{}}function u(m){r("rowClick",m)}return Q(()=>{f()}),X(()=>o.idx,()=>{f()}),(m,x)=>(j(),$("div",null,[t(Te,{"row-data":y.value,"column-defs":h.value,loading:v(w),onRowClick:u},null,8,["row-data","column-defs","loading"])]))}}),ia=l("span",null,[l("i",{class:"fe fe-edit-2 me-2"}),D(" Input ")],-1),oa=l("span",null,[l("i",{class:"fe fe-search me-2"}),D(" Browse ")],-1),na=l("i",{class:"fe fe-refresh-cw me-2"},null,-1),Aa=K({__name:"index",setup(p){const r=b("1"),o=b(),h=b(!1),y=b(1);function P(f){r.value="1",o.value={...f},h.value=!0}function k(){h.value=!1}function w(f){y.value+=1,f!==void 0&&(h.value=f)}return(f,u)=>{const m=Ke,x=W,e=Oe;return j(),$("div",null,[t(e,{class:"input-browse-tab",activeKey:r.value,"onUpdate:activeKey":u[1]||(u[1]=B=>r.value=B),animated:""},je({default:s(()=>[t(m,{key:"1"},{tab:s(()=>[ia]),default:s(()=>[t(aa,{"form-data":o.value,"edit-mode":h.value,onCancelEdit:k,onOnSuccess:w},null,8,["form-data","edit-mode"])]),_:1}),t(m,{key:"2"},{tab:s(()=>[oa]),default:s(()=>[t(ta,{idx:y.value,onRowClick:P},null,8,["idx"])]),_:1})]),_:2},[r.value==="2"?{name:"rightExtra",fn:s(()=>[t(x,{size:"small",class:"mt-3",onClick:u[0]||(u[0]=B=>y.value+=1)},{default:s(()=>[na,D(" Refresh Data ")]),_:1})]),key:"0"}:void 0]),1032,["activeKey"])])}}});export{Aa as default};
