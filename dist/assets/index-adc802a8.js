import{L as F,b as S,d,ac as M,P as N,X as W}from"./index-90b0ce28.js";import{Y as L,Z as V}from"./index-f73f074f.js";import{d as j,b as m,c as s,r as X,U as Y,F as Z}from"./plugin-vueexport-helper-50c92bea.js";var q=function(){return{prefixCls:String,checked:{type:Boolean,default:void 0},onChange:{type:Function},onClick:{type:Function},"onUpdate:checked":Function}},z=j({compatConfig:{MODE:3},name:"ACheckableTag",props:q(),setup:function(e,i){var o=i.slots,r=i.emit,g=F("tag",e),u=g.prefixCls,l=function(C){var v=e.checked;r("update:checked",!v),r("change",!v),r("click",C)},p=m(function(){var a;return S(u.value,(a={},d(a,"".concat(u.value,"-checkable"),!0),d(a,"".concat(u.value,"-checkable-checked"),e.checked),a))});return function(){var a;return s("span",{class:p.value,onClick:l},[(a=o.default)===null||a===void 0?void 0:a.call(o)])}}});const h=z;var G=new RegExp("^(".concat(L.join("|"),")(-inverse)?$")),H=new RegExp("^(".concat(V.join("|"),")$")),J=function(){return{prefixCls:String,color:{type:String},closable:{type:Boolean,default:!1},closeIcon:N.any,visible:{type:Boolean,default:void 0},onClose:{type:Function},"onUpdate:visible":Function,icon:N.any}},f=j({compatConfig:{MODE:3},name:"ATag",props:J(),slots:["closeIcon","icon"],setup:function(e,i){var o=i.slots,r=i.emit,g=i.attrs,u=F("tag",e),l=u.prefixCls,p=u.direction,a=X(!0);Y(function(){e.visible!==void 0&&(a.value=e.visible)});var C=function(t){t.stopPropagation(),r("update:visible",!1),r("close",t),!t.defaultPrevented&&e.visible===void 0&&(a.value=!1)},v=m(function(){var n=e.color;return n?G.test(n)||H.test(n):!1}),E=m(function(){var n;return S(l.value,(n={},d(n,"".concat(l.value,"-").concat(e.color),v.value),d(n,"".concat(l.value,"-has-color"),e.color&&!v.value),d(n,"".concat(l.value,"-hidden"),!a.value),d(n,"".concat(l.value,"-rtl"),p.value==="rtl"),n))});return function(){var n,t,k,b=e.icon,R=b===void 0?(n=o.icon)===null||n===void 0?void 0:n.call(o):b,y=e.color,_=e.closeIcon,P=_===void 0?(t=o.closeIcon)===null||t===void 0?void 0:t.call(o):_,I=e.closable,w=I===void 0?!1:I,B=function(){return w?P?s("span",{class:"".concat(l.value,"-close-icon"),onClick:C},[P]):s(W,{class:"".concat(l.value,"-close-icon"),onClick:C},null):null},O={backgroundColor:y&&!v.value?y:void 0},x=R||null,T=(k=o.default)===null||k===void 0?void 0:k.call(o),U=x?s(Z,null,[x,s("span",null,[T])]):T,A="onClick"in g,$=s("span",{class:E.value,style:O},[U,B()]);return A?s(M,null,{default:function(){return[$]}}):$}}});f.CheckableTag=h;f.install=function(c){return c.component(f.name,f),c.component(h.name,h),c};const ne=f;export{ne as _};
