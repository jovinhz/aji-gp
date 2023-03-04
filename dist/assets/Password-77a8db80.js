import{S as A,_ as s,L as $,G as T,b as q,d as l,M as D}from"./index-153eefc2.js";import{o as N,a1 as V}from"./index-7c3bc22f.js";import{i as Q,I as k}from"./Input-df745255.js";import{E as B}from"./EyeOutlined-308ec9ea.js";import{c as u,d as F,r as I,b as G}from"./plugin-vueexport-helper-0ef99882.js";var W={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"};const H=W;function O(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},a=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),a.forEach(function(o){J(i,o,t[o])})}return i}function J(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var P=function(e,t){var a=O({},e,t.attrs);return u(A,O({},a,{icon:H}),null)};P.displayName="EyeInvisibleOutlined";P.inheritAttrs=!1;const U=P;var X=["size","visibilityToggle"],Y={click:"onClick",hover:"onMouseover"},Z=function(e){return e?u(B,null,null):u(U,null,null)};const re=F({compatConfig:{MODE:3},name:"AInputPassword",inheritAttrs:!1,props:s(s({},Q()),{},{prefixCls:String,inputPrefixCls:String,action:{type:String,default:"click"},visibilityToggle:{type:Boolean,default:!0},iconRender:Function}),setup:function(e,t){var a=t.slots,o=t.attrs,_=t.expose,c=I(!1),h=function(){var n=e.disabled;n||(c.value=!c.value)},p=I(),E=function(){var n;(n=p.value)===null||n===void 0||n.focus()},w=function(){var n;(n=p.value)===null||n===void 0||n.blur()};_({focus:E,blur:w});var M=function(n){var r,g=e.action,v=e.iconRender,m=v===void 0?a.iconRender||Z:v,d=Y[g]||"",y=m(c.value),j=(r={},l(r,d,h),l(r,"class","".concat(n,"-icon")),l(r,"key","passwordIcon"),l(r,"onMousedown",function(C){C.preventDefault()}),l(r,"onMouseup",function(C){C.preventDefault()}),r);return V(D(y)?y:u("span",null,[y]),j)},x=$("input-password",e),b=x.prefixCls,R=x.getPrefixCls,z=G(function(){return R("input",e.inputPrefixCls)}),S=function(){var n=e.size,r=e.visibilityToggle,g=T(e,X),v=r&&M(b.value),m=q(b.value,o.class,l({},"".concat(b.value,"-").concat(n),!!n)),d=s(s(s({},N(g,["suffix","iconRender","action"])),o),{},{type:c.value?"text":"password",class:m,prefixCls:z.value,suffix:v});return n&&(d.size=n),u(k,s({ref:p},d),a)};return function(){return S()}}});export{re as _};
