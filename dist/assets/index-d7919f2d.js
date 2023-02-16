import{i as ce,c as de,I as a}from"./Input-faacc60f.js";import{L as Y,d as b,_ as p,a as U,P as ve,G as fe,B as pe,b as be}from"./index-ea116739.js";import{d as ee,b as ne,c as M,r as me}from"./plugin-vueexport-helper-0ef99882.js";import{S as he}from"./SearchOutlined-c25cb455.js";import{a1 as _e,o as ye}from"./index-d6da99f3.js";import{_ as ge}from"./TextArea-cd8e5869.js";import{_ as xe}from"./Password-c37385cc.js";const Ae=ee({compatConfig:{MODE:3},name:"AInputGroup",props:{prefixCls:String,size:{type:String},compact:{type:Boolean,default:void 0},onMouseenter:{type:Function},onMouseleave:{type:Function},onFocus:{type:Function},onBlur:{type:Function}},setup:function(e,l){var u=l.slots,m=Y("input-group",e),y=m.prefixCls,v=m.direction,t=ne(function(){var r,h=y.value;return r={},b(r,"".concat(h),!0),b(r,"".concat(h,"-lg"),e.size==="large"),b(r,"".concat(h,"-sm"),e.size==="small"),b(r,"".concat(h,"-compact"),e.compact),b(r,"".concat(h,"-rtl"),v.value==="rtl"),r});return function(){var r;return M("span",{class:t.value,onMouseenter:e.onMouseenter,onMouseleave:e.onMouseleave,onFocus:e.onFocus,onBlur:e.onBlur},[(r=u.default)===null||r===void 0?void 0:r.call(u)])}}});var F=/iPhone/i,W=/iPod/i,V=/iPad/i,k=/\bAndroid(?:.+)Mobile\b/i,K=/Android/i,_=/\bAndroid(?:.+)SD4930UR\b/i,w=/\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i,d=/Windows Phone/i,L=/\bWindows(?:.+)ARM\b/i,Z=/BlackBerry/i,q=/BB10/i,H=/Opera Mini/i,J=/\b(CriOS|Chrome)(?:.+)Mobile/i,Q=/Mobile(?:.+)Firefox\b/i;function n(i,e){return i.test(e)}function X(i){var e=i||(typeof navigator<"u"?navigator.userAgent:""),l=e.split("[FBAN");if(typeof l[1]<"u"){var u=l,m=U(u,1);e=m[0]}if(l=e.split("Twitter"),typeof l[1]<"u"){var y=l,v=U(y,1);e=v[0]}var t={apple:{phone:n(F,e)&&!n(d,e),ipod:n(W,e),tablet:!n(F,e)&&n(V,e)&&!n(d,e),device:(n(F,e)||n(W,e)||n(V,e))&&!n(d,e)},amazon:{phone:n(_,e),tablet:!n(_,e)&&n(w,e),device:n(_,e)||n(w,e)},android:{phone:!n(d,e)&&n(_,e)||!n(d,e)&&n(k,e),tablet:!n(d,e)&&!n(_,e)&&!n(k,e)&&(n(w,e)||n(K,e)),device:!n(d,e)&&(n(_,e)||n(w,e)||n(k,e)||n(K,e))||n(/\bokhttp\b/i,e)},windows:{phone:n(d,e),tablet:n(L,e),device:n(d,e)||n(L,e)},other:{blackberry:n(Z,e),blackberry10:n(q,e),opera:n(H,e),firefox:n(Q,e),chrome:n(J,e),device:n(Z,e)||n(q,e)||n(H,e)||n(Q,e)||n(J,e)},any:null,phone:null,tablet:null};return t.any=t.apple.device||t.android.device||t.windows.device||t.other.device,t.phone=t.apple.phone||t.android.phone||t.windows.phone,t.tablet=t.apple.tablet||t.android.tablet||t.windows.tablet,t}var Be=p(p({},X()),{},{isMobile:X});const Ce=Be;var Pe=["disabled","loading","addonAfter","suffix"];const we=ee({compatConfig:{MODE:3},name:"AInputSearch",inheritAttrs:!1,props:p(p({},ce()),{},{inputPrefixCls:String,enterButton:ve.any,onSearch:{type:Function}}),setup:function(e,l){var u=l.slots,m=l.attrs,y=l.expose,v=l.emit,t=me(),r=function(){var o;(o=t.value)===null||o===void 0||o.focus()},h=function(){var o;(o=t.value)===null||o===void 0||o.blur()};y({focus:r,blur:h});var te=function(o){v("update:value",o.target.value),o&&o.target&&o.type==="click"&&v("search",o.target.value,o),v("change",o)},z=function(o){var s;document.activeElement===((s=t.value)===null||s===void 0?void 0:s.input)&&o.preventDefault()},S=function(o){var s;v("search",(s=t.value)===null||s===void 0?void 0:s.stateValue,o),Ce.tablet||t.value.focus()},P=Y("input-search",e),g=P.prefixCls,oe=P.getPrefixCls,ae=P.direction,x=P.size,re=ne(function(){return oe("input",e.inputPrefixCls)});return function(){var f,o,s,T,A,I=e.disabled,ie=e.loading,N=e.addonAfter,R=N===void 0?(f=u.addonAfter)===null||f===void 0?void 0:f.call(u):N,O=e.suffix,le=O===void 0?(o=u.suffix)===null||o===void 0?void 0:o.call(u):O,ue=fe(e,Pe),j=e.enterButton,c=j===void 0?(s=(T=u.enterButton)===null||T===void 0?void 0:T.call(u))!==null&&s!==void 0?s:!1:j;c=c||c==="";var $=typeof c=="boolean"?M(he,null,null):null,E="".concat(g.value,"-button"),B=Array.isArray(c)?c[0]:c,C,G=B.type&&de(B.type)&&B.type.__ANT_BUTTON;if(G||B.tagName==="button")C=_e(B,p({onMousedown:z,onClick:S,key:"enterButton"},G?{class:E,size:x.value}:{}),!1);else{var D=$&&!c;C=M(pe,{class:E,type:c?"primary":void 0,size:x.value,disabled:I,key:"enterButton",onMousedown:z,onClick:S,loading:ie,icon:D?$:null},{default:function(){return[D?null:$||c]}})}R&&(C=[C,R]);var se=be(g.value,(A={},b(A,"".concat(g.value,"-rtl"),ae.value==="rtl"),b(A,"".concat(g.value,"-").concat(x.value),!!x.value),b(A,"".concat(g.value,"-with-button"),!!c),A),m.class);return M(a,p(p(p({ref:t},ye(ue,["onUpdate:value","onSearch","enterButton"])),m),{},{onPressEnter:S,size:x.value,prefixCls:re.value,addonAfter:C,suffix:le,onChange:te,class:se,disabled:I}),u)}}});a.Group=Ae;a.Search=we;a.TextArea=ge;a.Password=xe;a.install=function(i){return i.component(a.name,a),i.component(a.Group.name,a.Group),i.component(a.Search.name,a.Search),i.component(a.TextArea.name,a.TextArea),i.component(a.Password.name,a.Password),i};
