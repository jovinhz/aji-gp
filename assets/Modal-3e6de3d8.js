import{P as C,b as t,F as ae,T as le,G as ie,i as z,h as re,u as de,f as fe,Q as ve,_ as me,a as G,a9 as Ce,j as Q,B as H,e as ge}from"./index-c2b9e26d.js";import{o as ye,n as be,K as J,p as ke,P as pe,q as xe,s as he}from"./index-d35a0029.js";import{p as Te}from"./index-69e0b682.js";import{d as D,r as h,f as Pe,b as r,a1 as se,n as Ne,w as ue,o as we,V as Se,F as Oe}from"./plugin-vueexport-helper-23a171d5.js";function U(){return{keyboard:{type:Boolean,default:void 0},mask:{type:Boolean,default:void 0},afterClose:Function,closable:{type:Boolean,default:void 0},maskClosable:{type:Boolean,default:void 0},visible:{type:Boolean,default:void 0},destroyOnClose:{type:Boolean,default:void 0},mousePosition:C.shape({x:Number,y:Number}).loose,title:C.any,footer:C.any,transitionName:String,maskTransitionName:String,animation:C.any,maskAnimation:C.any,wrapStyle:{type:Object,default:void 0},bodyStyle:{type:Object,default:void 0},maskStyle:{type:Object,default:void 0},prefixCls:String,wrapClassName:String,rootClassName:String,width:[String,Number],height:[String,Number],zIndex:Number,bodyProps:C.any,maskProps:C.any,wrapProps:C.any,getContainer:C.any,dialogStyle:{type:Object,default:void 0},dialogClass:String,closeIcon:C.any,forceRender:{type:Boolean,default:void 0},getOpenCount:Function,focusTriggerAfterClose:{type:Boolean,default:void 0},onClose:Function,modalRender:Function}}function Z(c,e,a){var s=e;return!s&&a&&(s="".concat(c,"-").concat(a)),s}var ee=-1;function Ie(){return ee+=1,ee}function ne(c,e){var a=c["page".concat(e?"Y":"X","Offset")],s="scroll".concat(e?"Top":"Left");if(typeof a!="number"){var o=c.document;a=o.documentElement[s],typeof a!="number"&&(a=o.body[s])}return a}function Be(c){var e=c.getBoundingClientRect(),a={left:e.left,top:e.top},s=c.ownerDocument,o=s.defaultView||s.parentWindow;return a.left+=ne(o),a.top+=ne(o,!0),a}var te={width:0,height:0,overflow:"hidden",outline:"none"};const _e=D({compatConfig:{MODE:3},name:"Content",inheritAttrs:!1,props:t(t({},U()),{},{motionName:String,ariaId:String,onVisibleChanged:Function,onMousedown:Function,onMouseup:Function}),setup:function(e,a){var s=a.expose,o=a.slots,v=a.attrs,y=h(),b=h(),m=h();s({focus:function(){var l;(l=y.value)===null||l===void 0||l.focus()},changeActive:function(l){var g=document,w=g.activeElement;l&&w===b.value?y.value.focus():!l&&w===y.value&&b.value.focus()}});var k=h(),T=Pe(function(){var u=e.width,l=e.height,g={};return u!==void 0&&(g.width=typeof u=="number"?"".concat(u,"px"):u),l!==void 0&&(g.height=typeof l=="number"?"".concat(l,"px"):l),k.value&&(g.transformOrigin=k.value),g}),x=function(){Ne(function(){if(m.value){var l=Be(m.value);k.value=e.mousePosition?"".concat(e.mousePosition.x-l.left,"px ").concat(e.mousePosition.y-l.top,"px"):""}})},p=function(l){e.onVisibleChanged(l)};return function(){var u,l,g,w,f=e.prefixCls,n=e.footer,i=n===void 0?(u=o.footer)===null||u===void 0?void 0:u.call(o):n,d=e.title,S=d===void 0?(l=o.title)===null||l===void 0?void 0:l.call(o):d,P=e.ariaId,N=e.closable,O=e.closeIcon,I=O===void 0?(g=o.closeIcon)===null||g===void 0?void 0:g.call(o):O,B=e.onClose,_=e.bodyStyle,A=e.bodyProps,R=e.onMousedown,j=e.onMouseup,E=e.visible,F=e.modalRender,M=F===void 0?o.modalRender:F,$=e.destroyOnClose,V=e.motionName,L;i&&(L=r("div",{class:"".concat(f,"-footer")},[i]));var K;S&&(K=r("div",{class:"".concat(f,"-header")},[r("div",{class:"".concat(f,"-title"),id:P},[S])]));var X;N&&(X=r("button",{type:"button",onClick:B,"aria-label":"Close",class:"".concat(f,"-close")},[I||r("span",{class:"".concat(f,"-close-x")},null)]));var Y=r("div",{class:"".concat(f,"-content")},[X,K,r("div",t({class:"".concat(f,"-body"),style:_},A),[(w=o.default)===null||w===void 0?void 0:w.call(o)]),L]),ce=ae(V);return r(le,t(t({},ce),{},{onBeforeEnter:x,onAfterEnter:function(){return p(!0)},onAfterLeave:function(){return p(!1)}}),{default:function(){return[E||!$?se(r("div",t(t({},v),{},{ref:m,key:"dialog-element",role:"document",style:[T.value,v.style],class:[f,v.class],onMousedown:R,onMouseup:j}),[r("div",{tabindex:0,ref:y,style:te,"aria-hidden":"true"},null),M?M({originVNode:Y}):Y,r("div",{tabindex:0,ref:b,style:te,"aria-hidden":"true"},null)]),[[ie,E]]):null]}})}}});function Ae(c){if(c==null)throw new TypeError("Cannot destructure "+c)}const Me=D({compatConfig:{MODE:3},name:"Mask",props:{prefixCls:String,visible:Boolean,motionName:String,maskProps:Object},setup:function(e,a){return Ae(a),function(){var s=e.prefixCls,o=e.visible,v=e.maskProps,y=e.motionName,b=ae(y);return r(le,b,{default:function(){return[se(r("div",t({class:"".concat(s,"-mask")},v),null),[[ie,o]])]}})}}}),oe=D({compatConfig:{MODE:3},name:"Dialog",inheritAttrs:!1,props:z(t(t({},U()),{},{getOpenCount:Function,scrollLocker:Object}),{mask:!0,visible:!1,keyboard:!0,closable:!0,maskClosable:!0,destroyOnClose:!1,prefixCls:"rc-dialog",getOpenCount:function(){return null},focusTriggerAfterClose:!0}),setup:function(e,a){var s=a.attrs,o=a.slots,v=h(),y=h(),b=h(),m=h(e.visible),k=h("vcDialogTitle".concat(Ie())),T=function(i){if(i){if(!be(y.value,document.activeElement)){var d;v.value=document.activeElement,(d=b.value)===null||d===void 0||d.focus()}}else{var S=m.value;if(m.value=!1,e.mask&&v.value&&e.focusTriggerAfterClose){try{v.value.focus({preventScroll:!0})}catch{}v.value=null}if(S){var P;(P=e.afterClose)===null||P===void 0||P.call(e)}}},x=function(i){var d;(d=e.onClose)===null||d===void 0||d.call(e,i)},p=h(!1),u=h(),l=function(){clearTimeout(u.value),p.value=!0},g=function(){u.value=setTimeout(function(){p.value=!1})},w=function(i){if(!e.maskClosable)return null;p.value?p.value=!1:y.value===i.target&&x(i)},f=function(i){if(e.keyboard&&i.keyCode===J.ESC){i.stopPropagation(),x(i);return}e.visible&&i.keyCode===J.TAB&&b.value.changeActive(!i.shiftKey)};return ue(function(){return e.visible},function(){e.visible&&(m.value=!0)},{flush:"post"}),we(function(){var n;clearTimeout(u.value),(n=e.scrollLocker)===null||n===void 0||n.unLock()}),Se(function(){var n;if((n=e.scrollLocker)===null||n===void 0||n.unLock(),m.value){var i;(i=e.scrollLocker)===null||i===void 0||i.lock()}}),function(){var n=e.prefixCls,i=e.mask,d=e.visible,S=e.maskTransitionName,P=e.maskAnimation,N=e.zIndex,O=e.wrapClassName,I=e.rootClassName,B=e.wrapStyle,_=e.closable,A=e.maskProps,R=e.maskStyle,j=e.transitionName,E=e.animation,F=e.wrapProps,M=e.title,$=M===void 0?o.title:M,V=s.style,L=s.class;return r("div",t({class:["".concat(n,"-root"),I]},Te(e,{data:!0})),[r(Me,{prefixCls:n,visible:i&&d,motionName:Z(n,S,P),style:t({zIndex:N},R),maskProps:A},null),r("div",t({tabIndex:-1,onKeydown:f,class:re("".concat(n,"-wrap"),O),ref:y,onClick:w,role:"dialog","aria-labelledby":$?k.value:null,style:t(t({zIndex:N},B),{},{display:m.value?null:"none"})},F),[r(_e,t(t({},ye(e,["scrollLocker"])),{},{style:V,class:L,onMousedown:l,onMouseup:g,ref:b,closable:_,ariaId:k.value,prefixCls:n,visible:d,onClose:x,onVisibleChanged:T,motionName:Z(n,j,E)}),o)])])}}});var De=U(),Re=D({compatConfig:{MODE:3},name:"DialogWrap",inheritAttrs:!1,props:z(De,{visible:!1}),setup:function(e,a){var s=a.attrs,o=a.slots,v=h(e.visible);return ke({},{inTriggerContext:!1}),ue(function(){return e.visible},function(){e.visible&&(v.value=!0)},{flush:"post"}),function(){var y=e.visible,b=e.getContainer,m=e.forceRender,k=e.destroyOnClose,T=k===void 0?!1:k,x=e.afterClose,p=t(t(t({},e),s),{},{ref:"_component",key:"dialog"});return b===!1?r(oe,t(t({},p),{},{getOpenCount:function(){return 2}}),o):!m&&T&&!v.value?null:r(pe,{visible:y,forceRender:m,getContainer:b},{default:function(l){return p=t(t(t({},p),l),{},{afterClose:function(){x==null||x(),v.value=!1}}),r(oe,p,o)}})}}});const Ee=Re;var Fe=["prefixCls","visible","wrapClassName","centered","getContainer","closeIcon","focusTriggerAfterClose"],W=null,Le=function(e){W={x:e.pageX,y:e.pageY},setTimeout(function(){return W=null},100)};xe()&&he(document.documentElement,"click",Le,!0);var je=function(){return{prefixCls:String,visible:{type:Boolean,default:void 0},confirmLoading:{type:Boolean,default:void 0},title:C.any,closable:{type:Boolean,default:void 0},closeIcon:C.any,onOk:Function,onCancel:Function,"onUpdate:visible":Function,onChange:Function,afterClose:Function,centered:{type:Boolean,default:void 0},width:[String,Number],footer:C.any,okText:C.any,okType:String,cancelText:C.any,icon:C.any,maskClosable:{type:Boolean,default:void 0},forceRender:{type:Boolean,default:void 0},okButtonProps:Object,cancelButtonProps:Object,destroyOnClose:{type:Boolean,default:void 0},wrapClassName:String,maskTransitionName:String,transitionName:String,getContainer:{type:[String,Function,Boolean,Object],default:void 0},zIndex:Number,bodyStyle:{type:Object,default:void 0},maskStyle:{type:Object,default:void 0},mask:{type:Boolean,default:void 0},keyboard:{type:Boolean,default:void 0},wrapProps:Object,focusTriggerAfterClose:{type:Boolean,default:void 0},modalRender:Function}},Ue=[];const Ke=D({compatConfig:{MODE:3},name:"AModal",inheritAttrs:!1,props:z(je(),{width:520,transitionName:"zoom",maskTransitionName:"fade",confirmLoading:!1,visible:!1,okType:"primary"}),setup:function(e,a){var s=a.emit,o=a.slots,v=a.attrs,y=de("Modal"),b=fe(y,1),m=b[0],k=ve("modal",e),T=k.prefixCls,x=k.rootPrefixCls,p=k.direction,u=k.getPopupContainer,l=function(n){s("update:visible",!1),s("cancel",n),s("change",!1)},g=function(n){s("ok",n)},w=function(){var n,i,d=e.okText,S=d===void 0?(n=o.okText)===null||n===void 0?void 0:n.call(o):d,P=e.okType,N=e.cancelText,O=N===void 0?(i=o.cancelText)===null||i===void 0?void 0:i.call(o):N,I=e.confirmLoading;return r(Oe,null,[r(H,t({onClick:l},e.cancelButtonProps),{default:function(){return[O||m.value.cancelText]}}),r(H,t(t({},ge(P)),{},{loading:I,onClick:g},e.okButtonProps),{default:function(){return[S||m.value.okText]}})])};return function(){var f,n;e.prefixCls;var i=e.visible,d=e.wrapClassName,S=e.centered,P=e.getContainer,N=e.closeIcon,O=N===void 0?(f=o.closeIcon)===null||f===void 0?void 0:f.call(o):N,I=e.focusTriggerAfterClose,B=I===void 0?!0:I,_=me(e,Fe),A=re(d,(n={},G(n,"".concat(T.value,"-centered"),!!S),G(n,"".concat(T.value,"-wrap-rtl"),p.value==="rtl"),n));return r(Ee,t(t(t({},_),v),{},{getContainer:P||u.value,prefixCls:T.value,wrapClassName:A,visible:i,mousePosition:W,onClose:l,focusTriggerAfterClose:B,transitionName:Q(x.value,"zoom",e.transitionName),maskTransitionName:Q(x.value,"fade",e.maskTransitionName)}),t(t({},o),{},{footer:o.footer||w,closeIcon:function(){return r("span",{class:"".concat(T.value,"-close-x")},[O||r(Ce,{class:"".concat(T.value,"-close-icon")},null)])}}))}}});export{Ke as M,Ue as d};
