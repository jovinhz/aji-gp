import{a as r}from"./Input-bda0940e.js";const i=(t,a,e)=>{t==null||t.validate().then(()=>a()).catch(()=>{e&&e()})},o={width:162,flex:0,filter:"agDateColumnFilter",valueFormatter:t=>r(t.value).format("DD MMM YYYY"),filterParams:{comparator:(t,a)=>{const e=r(a).format("YYYY-MM-DD"),Y=r(t).format("YYYY-MM-DD");return r(e,"YYYY-MM-DD").isBefore(r(Y,"YYYY-MM-DD"))?-1:r(e,"YYYY-MM-DD").isAfter(r(Y,"YYYY-MM-DD"))?1:0}}},n={width:162,flex:0,filter:"agDateColumnFilter",valueFormatter:t=>r(t.value).format("DD MMM YYYY HH:mm:ss"),filterParams:{comparator:(t,a)=>{const e=r(a).format("YYYY-MM-DD HH:mm:ss"),Y=r(t).format("YYYY-MM-DD HH:mm:ss");return r(e,"YYYY-MM-DD").isBefore(r(Y,"YYYY-MM-DD HH:mm:ss"))?-1:r(e,"YYYY-MM-DD").isAfter(r(Y,"YYYY-MM-DD HH:mm:ss"))?1:0}}},D=t=>t==null?"":"Rp "+Number(parseFloat(t.toString()).toFixed(2)).toLocaleString("id"),m=(t,a=0)=>t==null?"":Number(parseFloat(t.toString()).toFixed(2)).toLocaleString("id",{minimumFractionDigits:a}),l=(t,a)=>{const e=new FileReader;e.addEventListener("load",()=>a(e.result)),e.readAsDataURL(t)};export{o as a,n as b,l as g,i as o,D as r,m as t};
