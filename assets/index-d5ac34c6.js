var Me=Object.defineProperty;var Re=(m,d,n)=>d in m?Me(m,d,{enumerable:!0,configurable:!0,writable:!0,value:n}):m[d]=n;var ne=(m,d,n)=>(Re(m,typeof d!="symbol"?d+"":d,n),n);import{B as me}from"./index-153eefc2.js";import{_ as pe}from"./AgGrid.vuevuetypescriptsetuptruelang-ab13ecb9.js";import{u as oe}from"./modal-e8545dd0.js";import{r as O,o as A,t as je,a as Q}from"./index-88aa8355.js";import"./index-7c3bc22f.js";import{_ as Ue}from"./index-1212a0e4.js";import{_ as He,S as Be}from"./index-fcb540cd.js";/* empty css              *//* empty css              */import{a as Ie,I as Ke,_ as Ee,F as Ge}from"./Input-df745255.js";import{H as Ve,u as S}from"./HttpClient-9b37a6d8.js";import{_ as de}from"./InputDropdown.vuevuetypescriptsetuptruelang-d8e7c5f6.js";import{_ as Ae}from"./AgGridActionCell.vuevuetypescriptsetuptruelang-e542f767.js";import{P as Qe}from"./ProductService-6eb59271.js";import{d as z,r as f,O as E,w as _e,a as fe,e as k,a7 as H,ac as c,f as U,g as i,a9 as b,c as r,u as _,F as se,ab as ue,aa as K,ae as ze,X as ce,ak as Je}from"./plugin-vueexport-helper-0ef99882.js";import{_ as Le}from"./index-a1c3b359.js";import{D as Xe}from"./dayjs-fd1479da.js";import{_ as We}from"./TextArea-dca2e1fe.js";import{M as Ye}from"./Modal-dae6d828.js";import{T as Ze,_ as ea}from"./TabPane-a6349958.js";import"./DownOutlined-80526c88.js";import"./pickAttrs-596f35c3.js";import"./useMemo-49158cc8.js";import"./CheckOutlined-94b1a800.js";import"./SearchOutlined-1764655a.js";class P{static list(d,n){return this.HttpClient.axiosInstance.get("/purchase_orders",{params:{start_date:d,end_date:n}})}static show(d){return this.HttpClient.axiosInstance.get(`/purchase_orders/${d}`)}static create(d){return this.HttpClient.withOptions({showSuccessFeedback:!0,successFeedbackMessage:"PO berhasil dibuat"}).axiosInstance.post("/purchase_orders",d)}static update(d,n){return this.HttpClient.withOptions({showSuccessFeedback:!0,successFeedbackMessage:"PO berhasil diupdate"}).axiosInstance.put(`/purchase_orders/${d}`,n)}static print(d){return this.HttpClient.axiosInstance.get(`/purchase_orders/${d}/print`)}static formOptions(){return this.HttpClient.axiosInstance.get("/purchase_orders/form_options")}}ne(P,"HttpClient",new Ve);const aa={class:"card card-custom card-dense"},ta={class:"card-header"},ra={class:"card-title w-100 d-flex justify-content-between"},ia=c("h4",{class:"card-label"},"Form Purchase Order",-1),la={class:"card-body"},na={class:"row"},oa={class:"col-lg-6"},da=c("span",null,"Hari",-1),sa={class:"col-lg-12"},ua={class:"col-lg-6 mt-3"},ca=c("i",{class:"fe fe-save me-2"},null,-1),ma=c("span",null,"Rp",-1),pa=["data"],_a=z({__name:"Form",props:{formData:null,editMode:{type:Boolean}},emits:["cancelEdit","onSuccess"],setup(m,{emit:d}){const n=m,x=[{headerName:"Kode Supplier",field:"code"},{headerName:"Nama Supplier",field:"name"}],D=[{headerName:"Kode Produk",field:"product_code"},{headerName:"Nama Produk",field:"product_name"},{headerName:"Qty",field:"qty",filter:"agNumberColumnFilter",type:"numericColumn",valueFormatter:l=>je(l.value)},{headerName:"Harga",field:"price",filter:"agNumberColumnFilter",type:"numericColumn",valueFormatter:l=>O(l.value)},{headerName:"Subtotal",filter:"agNumberColumnFilter",type:"numericColumn",valueGetter:l=>l.data.qty*l.data.price,valueFormatter:l=>O(l.value)},{headerName:"Catatan",field:"note"},{headerName:"Aksi",filter:!1,floatingFilter:!1,sortable:!1,resizable:!1,suppressMovable:!0,pinned:"right",width:75,flex:0,cellRenderer:Ae,cellRendererParams:l=>({onDelete:()=>{y.value=y.value.filter(a=>a.id!==l.data.id),typeof l.data.id=="number"?M.value.push({id:l.data.id,_destroy:1}):F.value=F.value.filter(a=>a._id!==l.data.id)}})}],T=[{field:"code",headerName:"Kode Produk"},{field:"name",headerName:"Nama Produk"},{field:"category_caption",headerName:"Kategori"},{field:"unit.name",headerName:"Satuan"}],C=f(),N=f(""),v=f(""),g=f(""),s=f([]),q=f(""),$=f(),e=E({}),ve={supplier_id:[{required:!0,message:"Kode satuan wajib diisi",trigger:"change"}],date:[{required:!0,message:"Tanggal wajib diisi",trigger:"change"}],status_id:[{required:!0,message:"Status wajib dipilih",trigger:"change"}],tax_percentage:[{required:!0,message:"Persen PPn wajib diisi",trigger:"change"}],for_attention:[{required:!0,message:"Nama PIC wajib diisi",trigger:"change"}],payment_method_id:[{required:!0,message:"Metode pembayaran wajib dipilih",trigger:"change"}],delivery_via:[{required:!0,message:"Delivery via wajib diisi",trigger:"change"}],payment_term_in_days:[{required:!0,message:"Pembayaran jatuh tempo wajib diisi",trigger:"change"}],tnc_price:[{required:!0,message:"T&C harga wajib diisi",trigger:"change"}],tnc_franco:[{required:!0,message:"T&C franco wajib diisi",trigger:"change"}],remark:[{required:!0,message:"Remark wajib diisi",trigger:"change"}]},B=f(),u=E({}),ge={product_id:[{required:!0,message:"Produk wajib dipilih",trigger:"change"}],qty:[{required:!0,message:"Qty wajib diisi",trigger:"change"}],price:[{required:!0,message:"Harga wajib diisi",trigger:"change"}]},y=f([]),F=f([]),M=f([]),{run:J,loading:ye,response:R}=S(),{run:he,loading:be,response:L}=S(),{run:we,loading:ke,response:X}=S(),{run:Ce,loading:xe,response:W}=S(),{run:De,loading:Ne,response:Y}=S(),{visible:G,open:Fe,close:ha}=oe(),{visible:V,open:Pe,close:qe}=oe();async function $e(){var l,a,p,w;try{n.editMode?(await J(P.update((l=n.formData)==null?void 0:l.id,{date:e.date,delivery_via:e.delivery_via,for_attention:e.delivery_via,note:e.note,payment_method_id:e.payment_method_id,payment_term_in_days:e.payment_term_in_days,remark:e.remark,status_id:e.status_id,supplier_id:e.supplier_id,tax_percentage:e.tax_percentage,tnc_franco:e.tnc_franco,tnc_price:e.tnc_price,items_attributes:[...F.value,...M.value]})),(a=R.value)!=null&&a.success&&(g.value=R.value.data.total_price,F.value=[],M.value=[],y.value=R.value.data.items.map(o=>({id:o.id,price:parseFloat(o.price),qty:parseFloat(o.qty),note:o.note,product_id:o.product.id,product_code:o.product.code,product_name:o.product.name})))):(await J(P.create({date:e.date,delivery_via:e.delivery_via,for_attention:e.delivery_via,note:e.note,payment_method_id:e.payment_method_id,payment_term_in_days:e.payment_term_in_days,remark:e.remark,status_id:e.status_id,supplier_id:e.supplier_id,tax_percentage:e.tax_percentage,tnc_franco:e.tnc_franco,tnc_price:e.tnc_price,warehouse_id:1,items_attributes:y.value.map(o=>({product_id:o.product_id,price:o.price,qty:o.qty,note:o.note}))})),(p=R.value)!=null&&p.success&&Z()),(w=R.value)!=null&&w.success&&d("onSuccess")}catch{}}function Z(){var l;if(n.editMode){for(const a in e)e[a]=void 0;d("cancelEdit")}else(l=$.value)==null||l.resetFields();y.value=[],F.value=[],M.value=[],N.value="",g.value=""}async function Se(){var l,a;try{await he(P.show((l=n.formData)==null?void 0:l.id)),(a=L.value)!=null&&a.success&&(y.value=L.value.data.items.map(p=>({id:p.id,product_id:p.product.id,product_code:p.product.code,product_name:p.product.name,qty:parseFloat(p.qty),price:parseFloat(p.price),note:p.note})))}catch{}}function ee(){var a;const l={id:`new-${y.value.length+1}`,qty:u.qty,price:u.price,product_id:u.product_id,product_code:u.product_code,product_name:u.product_name,note:u.note};y.value=[...y.value,l],F.value.push({_id:l.id,product_id:u.product_id,qty:u.qty,price:u.price,note:u.note}),(a=B.value)==null||a.resetFields(),v.value=""}async function Oe(){var l,a;try{await De(P.print((l=n.formData)==null?void 0:l.id)),(a=Y.value)!=null&&a.success&&(q.value="data:application/pdf;base64,"+Y.value.data.base64,Pe())}catch{}}return _e(()=>n.formData,()=>{var l;n.formData&&((l=$.value)==null||l.clearValidate(),y.value=[],F.value=[],M.value=[],e.supplier_id=n.formData.supplier.id,e.status_id=n.formData.status_id,e.date=n.formData.date,e.delivery_via=n.formData.delivery_via,e.for_attention=n.formData.for_attention,e.note=n.formData.note,e.payment_method_id=n.formData.payment_method_id,e.payment_term_in_days=n.formData.payment_term_in_days,e.remark=n.formData.remark,e.tax_percentage=parseFloat(n.formData.tax_percentage),e.tnc_franco=n.formData.tnc_franco,e.tnc_price=n.formData.tnc_price,N.value=`${n.formData.supplier.code} - ${n.formData.supplier.name}`,g.value=n.formData.total_price,setTimeout(()=>{Se()},0))}),fe(()=>{try{(async()=>{var l;await we(P.formOptions()),(l=X.value)!=null&&l.success&&(C.value=X.value.data)})(),(async()=>{var l;await Ce(Qe.list()),(l=W.value)!=null&&l.success&&(s.value=W.value.data)})()}catch{}}),(l,a)=>{const p=Le,w=Ke,o=Ee,Te=Xe,ae=Be,te=He,I=Ue,re=We,j=me,ie=Ge,le=Ye;return k(),H("div",aa,[c("div",ta,[c("div",ra,[ia,m.editMode?(k(),U(p,{key:0,color:"orange"},{default:i(()=>[b("Mode Edit")]),_:1})):(k(),U(p,{key:1,color:"cyan"},{default:i(()=>[b("Mode Input")]),_:1}))])]),c("div",la,[r(ie,{ref_key:"formRef",ref:$,model:e,rules:ve,"label-col":{style:{width:"220px"}},colon:!1,"label-align":"left",onFinish:a[13]||(a[13]=t=>_(A)($.value,$e))},{default:i(()=>[c("div",na,[c("div",oa,[r(o,{label:"No PO"},{default:i(()=>{var t;return[r(w,{value:m.editMode?(t=m.formData)==null?void 0:t.purchase_order_number:"",disabled:""},null,8,["value"])]}),_:1}),r(o,{label:"Supplier",name:"supplier_id",ref:"supplier_id"},{default:i(()=>{var t;return[r(de,{"column-defs":x,"grid-data":((t=C.value)==null?void 0:t.suppliers)??[],loading:_(ke),value:void 0,"value-display":N.value,onChange:a[0]||(a[0]=h=>{e.supplier_id=h.id,N.value=`${h.code} - ${h.name}`})},null,8,["grid-data","loading","value-display"])]}),_:1},512),r(o,{label:"Untuk PIC",name:"for_attention",ref:"for_attention"},{default:i(()=>[r(w,{value:e.for_attention,"onUpdate:value":a[1]||(a[1]=t=>e.for_attention=t)},null,8,["value"])]),_:1},512),r(o,{label:"Tgl PO",name:"date",ref:"date"},{default:i(()=>[r(Te,{value:e.date?_(Ie)(e.date):void 0,onChange:a[2]||(a[2]=(t,h)=>e.date=h)},null,8,["value"])]),_:1},512),r(o,{label:"Metode Pembayaran",name:"payment_method_id",ref:"payment_method_id"},{default:i(()=>[r(te,{value:e.payment_method_id,"onUpdate:value":a[3]||(a[3]=t=>e.payment_method_id=t)},{default:i(()=>{var t;return[(k(!0),H(se,null,ue((t=C.value)==null?void 0:t.payment_methods,h=>(k(),U(ae,{value:h.id},{default:i(()=>[b(K(h.title),1)]),_:2},1032,["value"]))),256))]}),_:1},8,["value"])]),_:1},512),r(o,{label:"Pembayaran Jatuh Tempo",name:"payment_term_in_days",ref:"payment_term_in_days"},{default:i(()=>[r(I,{value:e.payment_term_in_days,"onUpdate:value":a[4]||(a[4]=t=>e.payment_term_in_days=t),min:"0"},{addonAfter:i(()=>[da]),_:1},8,["value"])]),_:1},512),r(o,{label:"Status",name:"status_id",ref:"status_id"},{default:i(()=>[r(te,{value:e.status_id,"onUpdate:value":a[5]||(a[5]=t=>e.status_id=t)},{default:i(()=>{var t;return[(k(!0),H(se,null,ue((t=C.value)==null?void 0:t.statuses,h=>(k(),U(ae,{value:h.id},{default:i(()=>[b(K(h.title),1)]),_:2},1032,["value"]))),256))]}),_:1},8,["value"])]),_:1},512),r(o,{label:"PPn %",name:"tax_percentage",ref:"tax_percentage"},{default:i(()=>[r(I,{value:e.tax_percentage,"onUpdate:value":a[6]||(a[6]=t=>e.tax_percentage=t),min:0},null,8,["value"])]),_:1},512),r(o,{label:"T&C Franco",name:"tnc_franco",ref:"tnc_franco"},{default:i(()=>[r(w,{value:e.tnc_franco,"onUpdate:value":a[7]||(a[7]=t=>e.tnc_franco=t)},null,8,["value"])]),_:1},512),r(o,{label:"T&C Harga",name:"tnc_price",ref:"tnc_price"},{default:i(()=>[r(w,{value:e.tnc_price,"onUpdate:value":a[8]||(a[8]=t=>e.tnc_price=t)},null,8,["value"])]),_:1},512),r(o,{label:"Remark",name:"remark",ref:"remark"},{default:i(()=>[r(w,{value:e.remark,"onUpdate:value":a[9]||(a[9]=t=>e.remark=t)},null,8,["value"])]),_:1},512),r(o,{label:"Delivery Via",name:"delivery_via",ref:"delivery_via"},{default:i(()=>[r(w,{value:e.delivery_via,"onUpdate:value":a[10]||(a[10]=t=>e.delivery_via=t)},null,8,["value"])]),_:1},512),r(o,{label:"Keterangan",name:"note",ref:"note"},{default:i(()=>[r(re,{value:e.note,"onUpdate:value":a[11]||(a[11]=t=>e.note=t)},null,8,["value"])]),_:1},512),r(o,{label:"Total Harga"},{default:i(()=>[r(w,{value:g.value?_(O)(g.value):"",disabled:""},null,8,["value"])]),_:1})]),c("div",sa,[r(j,{class:"mb-3",type:"primary",onClick:_(Fe)},{default:i(()=>[b(" Tambah ")]),_:1},8,["onClick"]),r(pe,{style:{height:"300px"},"row-data":y.value,"column-defs":D,loading:_(be),onRowClick:a[12]||(a[12]=()=>{})},null,8,["row-data","column-defs","loading"])]),c("div",ua,[r(j,{type:"primary","html-type":"submit",loading:_(ye)},{default:i(()=>[ca,c("span",null,K(m.editMode?"Edit":"Simpan"),1)]),_:1},8,["loading"]),r(j,{class:"mx-3",onClick:Z},{default:i(()=>[b(K(m.editMode?"Batal Edit":"Bersihkan"),1)]),_:1}),m.editMode?(k(),U(j,{key:0,type:"primary",loading:_(Ne),onClick:Oe},{default:i(()=>[b(" Cetak ")]),_:1},8,["loading"])):ze("",!0)])])]),_:1},8,["model"])]),r(le,{visible:_(G),"onUpdate:visible":a[19]||(a[19]=t=>ce(G)?G.value=t:null),title:"Tambah Detail","cancel-text":"Tutup",onOk:a[20]||(a[20]=t=>_(A)(B.value,ee))},{default:i(()=>[r(ie,{ref_key:"formRefAddDet",ref:B,model:u,rules:ge,"label-col":{style:{width:"220px"}},colon:!1,"label-align":"left",onFinish:a[18]||(a[18]=t=>_(A)(B.value,ee))},{default:i(()=>[r(o,{label:"Produk",name:"product_id",ref:"product_id"},{default:i(()=>[r(de,{"column-defs":T,"grid-data":s.value??[],loading:_(xe),value:void 0,"value-display":v.value,onChange:a[14]||(a[14]=t=>{u.product_id=t.id,u.product_code=t.code,u.product_name=t.name,v.value=`${t.code} - ${t.name}`})},null,8,["grid-data","loading","value-display"])]),_:1},512),r(o,{label:"Qty",name:"qty",ref:"qty"},{default:i(()=>[r(I,{value:u.qty,"onUpdate:value":a[15]||(a[15]=t=>u.qty=t),min:0,formatter:t=>`${t}`.replace(/\B(?=(\d{3})+(?!\d))/g,"."),parser:t=>t.replace(/\$\s?|(\.*)/g,"")},null,8,["value","formatter","parser"])]),_:1},512),r(o,{label:"Harga",name:"price",ref:"price"},{default:i(()=>[r(I,{value:u.price,"onUpdate:value":a[16]||(a[16]=t=>u.price=t),min:0,formatter:t=>`${t}`.replace(/\B(?=(\d{3})+(?!\d))/g,"."),parser:t=>t.replace(/\$\s?|(\.*)/g,"")},{addonBefore:i(()=>[ma]),_:1},8,["value","formatter","parser"])]),_:1},512),r(o,{label:"Catatan",name:"note",ref:"note"},{default:i(()=>[r(re,{value:u.note,"onUpdate:value":a[17]||(a[17]=t=>u.note=t)},null,8,["value"])]),_:1},512)]),_:1},8,["model"])]),_:1},8,["visible"]),r(le,{visible:_(V),"onUpdate:visible":a[21]||(a[21]=t=>ce(V)?V.value=t:null),title:"Cetak PO",width:"80vw",centered:"","body-style":{height:"80vh"}},{footer:i(()=>[r(j,{key:"back",onClick:_(qe),type:"primary"},{default:i(()=>[b("Kembali")]),_:1},8,["onClick"])]),default:i(()=>[c("object",{data:q.value,width:"100%",height:"100%"},null,8,pa)]),_:1},8,["visible"])])}}}),fa=z({__name:"DataTable",props:{idx:null},emits:["rowClick"],setup(m,{emit:d}){const n=m,x=E({value:[{field:"purchase_order_number",headerName:"No. PO",width:120,flex:0,pinned:"left"},{field:"supplier.name",headerName:"Supplier",width:120,flex:0,pinned:"left"},{field:"for_attention",headerName:"Utk PIC",width:120,flex:0},{field:"date",headerName:"Tgl PO",...Q},{field:"status_caption",headerName:"Status",width:120,flex:0},{field:"subtotal",headerName:"Subtotal",width:100,flex:0,valueGetter:s=>parseFloat(s.data.subtotal),valueFormatter:s=>O(s.value)},{field:"tax_percentage",headerName:"PPn (%)",width:90,flex:0,filter:"agNumberColumnFilter",type:"numericColumn",valueGetter:s=>parseFloat(s.data.tax_percentage)},{field:"tax_nominal",headerName:"PPn Nilai",filter:"agNumberColumnFilter",type:"numericColumn",width:100,flex:0,valueGetter:s=>parseFloat(s.data.tax_nominal),valueFormatter:s=>O(s.value)},{field:"total_price",headerName:"Grand Total",filter:"agNumberColumnFilter",type:"numericColumn",width:120,flex:0,valueGetter:s=>parseFloat(s.data.total_price),valueFormatter:s=>O(s.value)},{field:"payment_method_caption",headerName:"Metode Pembayaran",width:100,flex:0},{field:"payment_term_in_days",headerName:"JTO (Hari)",width:100,flex:0,filter:"agNumberColumnFilter",type:"numericColumn"},{field:"tnc_franco",headerName:"T&C Franco",width:100,flex:0},{field:"tnc_price",headerName:"T&C Harga",width:120,flex:0},{field:"remark",headerName:"Remark",width:100,flex:0},{field:"delivery_via",headerName:"Delivery Via",width:100,flex:0},{field:"note",headerName:"Catatan",width:100,flex:0},{field:"created_at",headerName:"Diinput Tgl",...Q},{field:"updated_at",headerName:"Diupdate Tgl",...Q},{field:"created_by_user_username",headerName:"Diinput Oleh",flex:0,width:120},{field:"updated_by_user_username",headerName:"Diupdate Oleh",flex:0,width:120}]}),D=E({value:null}),{run:T,response:C,loading:N}=S();async function v(){var s;try{await T(P.list()),(s=C.value)!=null&&s.success&&(D.value=C.value.data)}catch{}}function g(s){d("rowClick",s)}return fe(()=>{v()}),_e(()=>n.idx,()=>{v()}),(s,q)=>(k(),H("div",null,[r(pe,{"row-data":D.value,"column-defs":x.value,loading:_(N),onRowClick:g},null,8,["row-data","column-defs","loading"])]))}}),va=c("span",null,[c("i",{class:"fe fe-edit-2 me-2"}),b(" Input ")],-1),ga=c("span",null,[c("i",{class:"fe fe-search me-2"}),b(" Browse ")],-1),ya=c("i",{class:"fe fe-refresh-cw me-2"},null,-1),Qa=z({__name:"index",setup(m){const d=f("1"),n=f(),x=f(!1),D=f(1);function T(v){d.value="1",n.value={...v},x.value=!0}function C(){x.value=!1}function N(v){D.value+=1,v!==void 0&&(x.value=v)}return(v,g)=>{const s=ea,q=me,$=Ze;return k(),H("div",null,[r($,{class:"input-browse-tab",activeKey:d.value,"onUpdate:activeKey":g[1]||(g[1]=e=>d.value=e),animated:""},Je({default:i(()=>[r(s,{key:"1"},{tab:i(()=>[va]),default:i(()=>[r(_a,{"form-data":n.value,"edit-mode":x.value,onCancelEdit:C,onOnSuccess:N},null,8,["form-data","edit-mode"])]),_:1}),r(s,{key:"2"},{tab:i(()=>[ga]),default:i(()=>[r(fa,{idx:D.value,onRowClick:T},null,8,["idx"])]),_:1})]),_:2},[d.value==="2"?{name:"rightExtra",fn:i(()=>[r(q,{size:"small",class:"mt-3",onClick:g[0]||(g[0]=e=>D.value+=1)},{default:i(()=>[ya,b(" Refresh Data ")]),_:1})]),key:"0"}:void 0]),1032,["activeKey"])])}}});export{Qa as default};
