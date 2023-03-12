import{K as H,G as E,_ as p,b as A,d as _,P as w,L as O,J as Q}from"./index-90b0ce28.js";import{d as N,r as F,w as U,c as b,N as z,P as X,S as Y}from"./plugin-vueexport-helper-50c92bea.js";import{u as M}from"./Input-171d1ec7.js";import{o as Z}from"./index-3c58d5d9.js";var ee=["prefixCls","name","id","type","disabled","readonly","tabindex","autofocus","value","required"],ae={prefixCls:String,name:String,id:String,type:String,defaultChecked:{type:[Boolean,Number],default:void 0},checked:{type:[Boolean,Number],default:void 0},disabled:Boolean,tabindex:{type:[Number,String]},readonly:Boolean,autofocus:Boolean,value:w.any,required:Boolean};const ne=N({compatConfig:{MODE:3},name:"Checkbox",inheritAttrs:!1,props:H(ae,{prefixCls:"rc-checkbox",type:"checkbox",defaultChecked:!1}),emits:["click","change"],setup:function(e,f){var t=f.attrs,m=f.emit,y=f.expose,u=F(e.checked===void 0?e.defaultChecked:e.checked),i=F();U(function(){return e.checked},function(){u.value=e.checked}),y({focus:function(){var a;(a=i.value)===null||a===void 0||a.focus()},blur:function(){var a;(a=i.value)===null||a===void 0||a.blur()}});var o=F(),k=function(a){if(!e.disabled){e.checked===void 0&&(u.value=a.target.checked),a.shiftKey=o.value;var s={target:p(p({},e),{},{checked:a.target.checked}),stopPropagation:function(){a.stopPropagation()},preventDefault:function(){a.preventDefault()},nativeEvent:a};e.checked!==void 0&&(i.value.checked=!!e.checked),m("change",s),o.value=!1}},d=function(a){m("click",a),o.value=a.shiftKey};return function(){var l,a=e.prefixCls,s=e.name,v=e.id,B=e.type,n=e.disabled,r=e.readonly,x=e.tabindex,S=e.autofocus,G=e.value,c=e.required,P=E(e,ee),R=t.class,g=t.onFocus,K=t.onBlur,D=t.onKeydown,I=t.onKeypress,V=t.onKeyup,T=p(p({},P),t),J=Object.keys(T).reduce(function(q,j){return(j.substr(0,5)==="aria-"||j.substr(0,5)==="data-"||j==="role")&&(q[j]=T[j]),q},{}),L=A(a,R,(l={},_(l,"".concat(a,"-checked"),u.value),_(l,"".concat(a,"-disabled"),n),l)),W=p(p({name:s,id:v,type:B,readonly:r,disabled:n,tabindex:x,class:"".concat(a,"-input"),checked:!!u.value,autofocus:S,value:G},J),{},{onChange:k,onClick:d,onFocus:g,onBlur:K,onKeydown:D,onKeypress:I,onKeyup:V,required:c});return b("span",{class:L},[b("input",p({ref:i},W),null),b("span",{class:"".concat(a,"-inner")},null)])}}});var te=["prefixCls","id"],$=function(){return{prefixCls:String,checked:{type:Boolean,default:void 0},disabled:{type:Boolean,default:void 0},isGroup:{type:Boolean,default:void 0},value:w.any,name:String,id:String,autofocus:{type:Boolean,default:void 0},onChange:Function,onFocus:Function,onBlur:Function,onClick:Function,"onUpdate:checked":Function,"onUpdate:value":Function}};const h=N({compatConfig:{MODE:3},name:"ARadio",props:$(),setup:function(e,f){var t=f.emit,m=f.expose,y=f.slots,u=M(),i=F(),o=z("radioGroupContext",void 0),k=O("radio",e),d=k.prefixCls,l=k.direction,a=function(){i.value.focus()},s=function(){i.value.blur()};m({focus:a,blur:s});var v=function(r){var x=r.target.checked;t("update:checked",x),t("update:value",x),t("change",r),u.onFieldChange()},B=function(r){t("change",r),o&&o.onRadioChange&&o.onRadioChange(r)};return function(){var n,r=o;e.prefixCls;var x=e.id,S=x===void 0?u.id.value:x,G=E(e,te),c=p({prefixCls:d.value,id:S},Z(G,["onUpdate:checked","onUpdate:value"]));r?(c.name=r.props.name,c.onChange=B,c.checked=e.value===r.stateValue.value,c.disabled=e.disabled||r.props.disabled):c.onChange=v;var P=A((n={},_(n,"".concat(d.value,"-wrapper"),!0),_(n,"".concat(d.value,"-wrapper-checked"),c.checked),_(n,"".concat(d.value,"-wrapper-disabled"),c.disabled),_(n,"".concat(d.value,"-wrapper-rtl"),l.value==="rtl"),n));return b("label",{class:P},[b(ne,p(p({},c),{},{type:"radio",ref:i}),null),y.default&&b("span",null,[y.default()])])}}});var oe=Q("large","default","small"),ue=function(){return{prefixCls:String,value:w.any,size:w.oneOf(oe),options:{type:Array},disabled:{type:Boolean,default:void 0},name:String,buttonStyle:{type:String,default:"outline"},id:String,optionType:{type:String,default:"default"},onChange:Function,"onUpdate:value":Function}};const ie=N({compatConfig:{MODE:3},name:"ARadioGroup",props:ue(),setup:function(e,f){var t=f.slots,m=f.emit,y=M(),u=O("radio",e),i=u.prefixCls,o=u.direction,k=u.size,d=F(e.value),l=F(!1);U(function(){return e.value},function(s){d.value=s,l.value=!1});var a=function(v){var B=d.value,n=v.target.value;"value"in e||(d.value=n),!l.value&&n!==B&&(l.value=!0,m("update:value",n),m("change",v),y.onFieldChange()),Y(function(){l.value=!1})};return X("radioGroupContext",{onRadioChange:a,stateValue:d,props:e}),function(){var s,v=e.options,B=e.optionType,n=e.buttonStyle,r=e.id,x=r===void 0?y.id.value:r,S="".concat(i.value,"-group"),G=A(S,"".concat(S,"-").concat(n),(s={},_(s,"".concat(S,"-").concat(k.value),k.value),_(s,"".concat(S,"-rtl"),o.value==="rtl"),s)),c=null;if(v&&v.length>0){var P=B==="button"?"".concat(i.value,"-button"):i.value;c=v.map(function(g){if(typeof g=="string"||typeof g=="number")return b(h,{key:g,prefixCls:P,disabled:e.disabled,value:g,checked:d.value===g},{default:function(){return[g]}});var K=g.value,D=g.disabled,I=g.label;return b(h,{key:"radio-group-value-options-".concat(K),prefixCls:P,disabled:D||e.disabled,value:K,checked:d.value===K},{default:function(){return[I]}})})}else{var R;c=(R=t.default)===null||R===void 0?void 0:R.call(t)}return b("div",{class:G,id:x},[c])}}}),le=N({compatConfig:{MODE:3},name:"ARadioButton",props:$(),setup:function(e,f){var t=f.slots,m=O("radio-button",e),y=m.prefixCls,u=z("radioGroupContext",void 0);return function(){var i,o=p(p({},e),{},{prefixCls:y.value});return u&&(o.onChange=u.onRadioChange,o.checked=o.value===u.stateValue.value,o.disabled=o.disabled||u.props.disabled),b(h,o,{default:function(){return[(i=t.default)===null||i===void 0?void 0:i.call(t)]}})}}});h.Group=ie;h.Button=le;h.install=function(C){return C.component(h.name,h),C.component(h.Group.name,h.Group),C.component(h.Button.name,h.Button),C};export{h as R,le as _,ie as a};
