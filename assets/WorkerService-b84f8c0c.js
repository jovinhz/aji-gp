var a=Object.defineProperty;var r=(s,t,e)=>t in s?a(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var i=(s,t,e)=>(r(s,typeof t!="symbol"?t+"":t,e),e);import{H as n}from"./HttpClient-ea8ece11.js";class c{static list(){return this.HttpClient.axiosInstance.get("/workers")}static show(t){return this.HttpClient.axiosInstance.get(`/workers/${t}`)}static create(t){return this.HttpClient.withOptions({showSuccessFeedback:!0,successFeedbackMessage:"Pekerja berhasil ditambah"}).axiosInstance.post("/workers",t)}static update(t,e){return this.HttpClient.withOptions({showSuccessFeedback:!0,successFeedbackMessage:"Pekerja berhasil diupdate"}).axiosInstance.put(`/workers/${t}`,e)}static formOptions(){return this.HttpClient.axiosInstance.get("/workers/form_options")}}i(c,"HttpClient",new n);export{c as W};
