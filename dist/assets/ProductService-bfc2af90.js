var a=Object.defineProperty;var c=(e,t,s)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var i=(e,t,s)=>(c(e,typeof t!="symbol"?t+"":t,s),s);import{H as r}from"./HttpClient-4d61e396.js";class n{static list(){return this.HttpClient.axiosInstance.get("/products")}static create(t){return this.HttpClient.withOptions({showSuccessFeedback:!0,successFeedbackMessage:"Produk berhasil ditambah"}).axiosInstance.post("/products",t)}static update(t,s){return this.HttpClient.withOptions({showSuccessFeedback:!0,successFeedbackMessage:"Produk berhasil diupdate"}).axiosInstance.put(`/products/${t}`,s)}static formOptions(){return this.HttpClient.axiosInstance.get("/products/form_options")}static delete(t){return this.HttpClient.withOptions({showSuccessFeedback:!0,successFeedbackMessage:"Produk berhasil dihapus"}).axiosInstance.delete(`/products/${t}`)}}i(n,"HttpClient",new r);export{n as P};
