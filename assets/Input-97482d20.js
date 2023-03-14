import{P as y,_ as A,b as N,d as s,o as Fe,J as Ie,a7 as Ce,L as Be,y as Ae,q as _e}from"./index-00a8ffd2.js";import{o as Z,J as U}from"./index-97222043.js";import{b as me,N as fe,o as pe,P as L,d as le,r as E,w as re,A as ye,c as I,a as Se,a0 as $e,F as Pe,S as Y}from"./_plugin-vue_export-helper-50c92bea.js";function Ne(n){n.target.composing=!0}function se(n){n.target.composing&&(n.target.composing=!1,Re(n.target,"input"))}function Re(n,e){var u=document.createEvent("HTMLEvents");u.initEvent(e,!0,!0),n.dispatchEvent(u)}function te(n,e,u,t){n.addEventListener(e,u,t)}var ze={created:function(e,u){(!u.modifiers||!u.modifiers.lazy)&&(te(e,"compositionstart",Ne),te(e,"compositionend",se),te(e,"change",se))}};const Me=ze;var ee=Symbol("ContextProps"),ne=Symbol("InternalContextProps"),We=function(e){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:me(function(){return!0}),t=E(new Map),r=function(v,K){t.value.set(v,K),t.value=new Map(t.value)},m=function(v){t.value.delete(v),t.value=new Map(t.value)};re([u,t],function(){}),L(ee,e),L(ne,{addFormItemField:r,removeFormItemField:m})},ue={id:me(function(){}),onFieldBlur:function(){},onFieldChange:function(){},clearValidate:function(){}},ie={addFormItemField:function(){},removeFormItemField:function(){}},Ve=function(){var e=fe(ne,ie),u=Symbol("FormItemFieldKey"),t=ye();return e.addFormItemField(u,t.type),pe(function(){e.removeFormItemField(u)}),L(ne,ie),L(ee,ue),fe(ee,ue)};const Ue=le({compatConfig:{MODE:3},name:"AFormItemRest",setup:function(e,u){var t=u.slots;return L(ne,ie),L(ee,ue),function(){var r;return(r=t.default)===null||r===void 0?void 0:r.call(t)}}});var ge=function(){return{id:String,prefixCls:String,inputPrefixCls:String,defaultValue:y.oneOfType([y.string,y.number]),value:{type:[String,Number,Symbol],default:void 0},placeholder:{type:[String,Number]},autocomplete:String,type:{type:String,default:"text"},name:String,size:{type:String},disabled:{type:Boolean,default:void 0},readonly:{type:Boolean,default:void 0},addonBefore:y.any,addonAfter:y.any,prefix:y.any,suffix:y.any,autofocus:{type:Boolean,default:void 0},allowClear:{type:Boolean,default:void 0},lazy:{type:Boolean,default:!0},maxlength:Number,loading:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},showCount:{type:[Boolean,Object]},htmlSize:Number,onPressEnter:Function,onKeydown:Function,onKeyup:Function,onFocus:Function,onBlur:Function,onChange:Function,onInput:Function,"onUpdate:value":Function,valueModifiers:Object,hidden:Boolean}};const je=ge;var Je=function(){return A(A({},Z(ge(),["prefix","addonBefore","addonAfter","suffix"])),{},{rows:Number,autosize:{type:[Boolean,Object],default:void 0},autoSize:{type:[Boolean,Object],default:void 0},onResize:{type:Function},onCompositionstart:Function,onCompositionend:Function,valueModifiers:Object})};function xe(n,e,u,t,r){var m;return N(n,(m={},s(m,"".concat(n,"-sm"),u==="small"),s(m,"".concat(n,"-lg"),u==="large"),s(m,"".concat(n,"-disabled"),t),s(m,"".concat(n,"-rtl"),r==="rtl"),s(m,"".concat(n,"-borderless"),!e),m))}var J=function(e){return e!=null&&(Array.isArray(e)?Fe(e).length:!0)};function Te(n){return J(n.prefix)||J(n.suffix)||J(n.allowClear)}function oe(n){return J(n.addonBefore)||J(n.addonAfter)}var Oe=["text","input"];const Ee=le({compatConfig:{MODE:3},name:"ClearableLabeledInput",inheritAttrs:!1,props:{prefixCls:String,inputType:y.oneOf(Ie("text","input")),value:y.any,defaultValue:y.any,allowClear:{type:Boolean,default:void 0},element:y.any,handleReset:Function,disabled:{type:Boolean,default:void 0},direction:{type:String},size:{type:String},suffix:y.any,prefix:y.any,addonBefore:y.any,addonAfter:y.any,readonly:{type:Boolean,default:void 0},focused:{type:Boolean,default:void 0},bordered:{type:Boolean,default:!0},triggerFocus:{type:Function},hidden:Boolean},setup:function(e,u){var t=u.slots,r=u.attrs,m=E(),$=function(o){var f;if((f=m.value)!==null&&f!==void 0&&f.contains(o.target)){var d=e.triggerFocus;d==null||d()}},v=function(o){var f,d=e.allowClear,i=e.value,l=e.disabled,h=e.readonly,g=e.handleReset,C=e.suffix,x=C===void 0?t.suffix:C;if(!d)return null;var B=!l&&!h&&i,b="".concat(o,"-clear-icon");return I(Ce,{onClick:g,onMousedown:function(w){return w.preventDefault()},class:N((f={},s(f,"".concat(b,"-hidden"),!B),s(f,"".concat(b,"-has-suffix"),!!x),f),b),role:"button"},null)},K=function(o){var f,d=e.suffix,i=d===void 0?(f=t.suffix)===null||f===void 0?void 0:f.call(t):d,l=e.allowClear;return i||l?I("span",{class:"".concat(o,"-suffix")},[v(o),i]):null},q=function(o,f){var d,i,l,h=e.focused,g=e.value,C=e.prefix,x=C===void 0?(d=t.prefix)===null||d===void 0?void 0:d.call(t):C,B=e.size,b=e.suffix,P=b===void 0?(i=t.suffix)===null||i===void 0?void 0:i.call(t):b,w=e.disabled,R=e.allowClear,j=e.direction,k=e.readonly,z=e.bordered,W=e.hidden,G=e.addonAfter,ae=G===void 0?t.addonAfter:G,p=e.addonBefore,a=p===void 0?t.addonBefore:p,c=K(o);if(!Te({prefix:x,suffix:P,allowClear:R}))return U(f,{value:g});var S=x?I("span",{class:"".concat(o,"-prefix")},[x]):null,F=N("".concat(o,"-affix-wrapper"),(l={},s(l,"".concat(o,"-affix-wrapper-focused"),h),s(l,"".concat(o,"-affix-wrapper-disabled"),w),s(l,"".concat(o,"-affix-wrapper-sm"),B==="small"),s(l,"".concat(o,"-affix-wrapper-lg"),B==="large"),s(l,"".concat(o,"-affix-wrapper-input-with-clear-btn"),P&&R&&g),s(l,"".concat(o,"-affix-wrapper-rtl"),j==="rtl"),s(l,"".concat(o,"-affix-wrapper-readonly"),k),s(l,"".concat(o,"-affix-wrapper-borderless"),!z),s(l,"".concat(r.class),!oe({addonAfter:ae,addonBefore:a})&&r.class),l));return I("span",{ref:m,class:F,style:r.style,onMouseup:$,hidden:W},[S,U(f,{style:null,value:g,class:xe(o,z,B,w)}),c])},D=function(o,f){var d,i,l,h=e.addonBefore,g=h===void 0?(d=t.addonBefore)===null||d===void 0?void 0:d.call(t):h,C=e.addonAfter,x=C===void 0?(i=t.addonAfter)===null||i===void 0?void 0:i.call(t):C,B=e.size,b=e.direction,P=e.hidden;if(!oe({addonBefore:g,addonAfter:x}))return f;var w="".concat(o,"-group"),R="".concat(w,"-addon"),j=g?I("span",{class:R},[g]):null,k=x?I("span",{class:R},[x]):null,z=N("".concat(o,"-wrapper"),w,s({},"".concat(w,"-rtl"),b==="rtl")),W=N("".concat(o,"-group-wrapper"),(l={},s(l,"".concat(o,"-group-wrapper-sm"),B==="small"),s(l,"".concat(o,"-group-wrapper-lg"),B==="large"),s(l,"".concat(o,"-group-wrapper-rtl"),b==="rtl"),l),r.class);return I("span",{class:W,style:r.style,hidden:P},[I("span",{class:z},[j,U(f,{style:null}),k])])},V=function(o,f){var d,i=e.value,l=e.allowClear,h=e.direction,g=e.bordered,C=e.hidden,x=e.addonAfter,B=x===void 0?t.addonAfter:x,b=e.addonBefore,P=b===void 0?t.addonBefore:b;if(!l)return U(f,{value:i});var w=N("".concat(o,"-affix-wrapper"),"".concat(o,"-affix-wrapper-textarea-with-clear-btn"),(d={},s(d,"".concat(o,"-affix-wrapper-rtl"),h==="rtl"),s(d,"".concat(o,"-affix-wrapper-borderless"),!g),s(d,"".concat(r.class),!oe({addonAfter:B,addonBefore:P})&&r.class),d));return I("span",{class:w,style:r.style,hidden:C},[U(f,{style:null,value:i}),v(o)])};return function(){var _,o=e.prefixCls,f=e.inputType,d=e.element,i=d===void 0?(_=t.element)===null||_===void 0?void 0:_.call(t):d;return f===Oe[0]?V(o,i):D(o,q(o,i))}}});function ce(n){return typeof n>"u"||n===null?"":String(n)}function ve(n,e,u,t){if(u){var r=e;if(e.type==="click"){Object.defineProperty(r,"target",{writable:!0}),Object.defineProperty(r,"currentTarget",{writable:!0});var m=n.cloneNode(!0);r.target=m,r.currentTarget=m,m.value="",u(r);return}if(t!==void 0){Object.defineProperty(r,"target",{writable:!0}),Object.defineProperty(r,"currentTarget",{writable:!0}),r.target=n,r.currentTarget=n,n.value=t,u(r);return}u(r)}}function Le(n,e){if(n){n.focus(e);var u=e||{},t=u.cursor;if(t){var r=n.value.length;switch(t){case"start":n.setSelectionRange(0,0);break;case"end":n.setSelectionRange(r,r);break;default:n.setSelectionRange(0,r)}}}}const qe=le({compatConfig:{MODE:3},name:"AInput",inheritAttrs:!1,props:je(),setup:function(e,u){var t=u.slots,r=u.attrs,m=u.expose,$=u.emit,v=E(),K=E(),q,D=Ve(),V=Be("input",e),_=V.direction,o=V.prefixCls,f=V.size,d=V.autocomplete,i=E(e.value===void 0?e.defaultValue:e.value),l=E(!1);re(function(){return e.value},function(){i.value=e.value}),re(function(){return e.disabled},function(){e.value!==void 0&&(i.value=e.value),e.disabled&&(l.value=!1)});var h=function(){q=setTimeout(function(){var a;((a=v.value)===null||a===void 0?void 0:a.getAttribute("type"))==="password"&&v.value.hasAttribute("value")&&v.value.removeAttribute("value")})},g=function(a){Le(v.value,a)},C=function(){var a;(a=v.value)===null||a===void 0||a.blur()},x=function(a,c,S){var F;(F=v.value)===null||F===void 0||F.setSelectionRange(a,c,S)},B=function(){var a;(a=v.value)===null||a===void 0||a.select()};m({focus:g,blur:C,input:v,stateValue:i,setSelectionRange:x,select:B});var b=function(a){var c=e.onFocus;l.value=!0,c==null||c(a),Y(function(){h()})},P=function(a){var c=e.onBlur;l.value=!1,c==null||c(a),D.onFieldBlur(),Y(function(){h()})},w=function(a){$("update:value",a.target.value),$("change",a),$("input",a),D.onFieldChange()},R=ye(),j=function(a,c){i.value!==a&&(e.value===void 0?i.value=a:Y(function(){v.value.value!==i.value&&R.update()}),Y(function(){c&&c()}))},k=function(a){ve(v.value,a,w),j("",function(){g()})},z=function(a){var c=a.target,S=c.value,F=c.composing;if(!((a.isComposing||F)&&e.lazy||i.value===S)){var M=a.target.value;ve(v.value,a,w),j(M,function(){h()})}},W=function(a){a.keyCode===13&&$("pressEnter",a),$("keydown",a)};Se(function(){h()}),pe(function(){clearTimeout(q)});var G=function(){var a,c=e.addonBefore,S=c===void 0?t.addonBefore:c,F=e.addonAfter,M=F===void 0?t.addonAfter:F,T=e.disabled,H=e.bordered,Q=H===void 0?!0:H,O=e.valueModifiers,be=O===void 0?{}:O,he=e.htmlSize,de=Z(e,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","size","bordered","htmlSize","lazy","showCount","valueModifiers"]),X=A(A(A({},de),r),{},{autocomplete:d.value,onChange:z,onInput:z,onFocus:b,onBlur:P,onKeydown:W,class:N(xe(o.value,Q,f.value,T,_.value),s({},r.class,r.class&&!S&&!M)),ref:v,key:"ant-input",size:he,id:(a=de.id)!==null&&a!==void 0?a:D.id.value});be.lazy&&delete X.onInput,X.autofocus||delete X.autofocus;var we=I("input",Z(X,["size"]),null);return $e(we,[[Me]])},ae=function(){var a,c=i.value,S=e.maxlength,F=e.suffix,M=F===void 0?(a=t.suffix)===null||a===void 0?void 0:a.call(t):F,T=e.showCount,H=Number(S)>0;if(M||T){var Q=Ae(ce(c)).length,O=null;return _e(T)==="object"?O=T.formatter({count:Q,maxlength:S}):O="".concat(Q).concat(H?" / ".concat(S):""),I(Pe,null,[!!T&&I("span",{class:N("".concat(o.value,"-show-count-suffix"),s({},"".concat(o.value,"-show-count-has-suffix"),!!M))},[O]),M])}return null};return function(){var p=A(A(A({},r),e),{},{prefixCls:o.value,inputType:"input",value:ce(i.value),handleReset:k,focused:l.value&&!e.disabled});return I(Ee,A(A({},Z(p,["element","valueModifiers","suffix","showCount"])),{},{ref:K}),A(A({},t),{},{element:G,suffix:ae}))}}});export{Ee as C,Ue as F,qe as I,We as a,Me as b,Le as c,ce as f,je as i,ve as r,Je as t,Ve as u};
