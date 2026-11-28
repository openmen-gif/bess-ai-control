import{n as e,o as t,s as n,t as r}from"./jsx-runtime-lc9lxckx.js";import{t as i}from"./createLucideIcon-b29y3kb3.js";import{a,i as o,r as s,t as c}from"./index-kpgypcym.js";import{a as l,c as u,d,f,m as p,n as m,o as h,p as g,r as _,s as v,u as y}from"./data-go38ac3x.js";import{t as b}from"./AgentDetailModal-dmlxvh6z.js";var x=i(`git-branch`,[[`path`,{d:`M15 6a9 9 0 0 0-9 9V3`,key:`1cii5b`}],[`circle`,{cx:`18`,cy:`6`,r:`3`,key:`1h7g24`}],[`circle`,{cx:`6`,cy:`18`,r:`3`,key:`fqmcym`}]]),S=i(`maximize-2`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`m21 3-7 7`,key:`1l2asr`}],[`path`,{d:`m3 21 7-7`,key:`tjx5ai`}],[`path`,{d:`M9 21H3v-6`,key:`wtvkvv`}]]),C=i(`minimize-2`,[[`path`,{d:`m14 10 7-7`,key:`oa77jy`}],[`path`,{d:`M20 10h-6V4`,key:`mjg0md`}],[`path`,{d:`m3 21 7-7`,key:`tjx5ai`}],[`path`,{d:`M4 14h6v6`,key:`rmj7iw`}]]),ee=i(`send`,[[`path`,{d:`M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`,key:`1ffxy3`}],[`path`,{d:`m21.854 2.147-10.94 10.939`,key:`12cjpa`}]]),te=i(`terminal`,[[`path`,{d:`M12 19h8`,key:`baeox8`}],[`path`,{d:`m4 17 6-6-6-6`,key:`1yngyt`}]]),w=n(e(),1),ne=(0,w.createContext)({});function T(e){let t=(0,w.useRef)(null);return t.current===null&&(t.current=e()),t.current}var re=typeof window<`u`?w.useLayoutEffect:w.useEffect,ie=(0,w.createContext)(null);function ae(e,t){e.indexOf(t)===-1&&e.push(t)}function oe(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var E=(e,t,n)=>n>t?t:n<e?e:n,D={},O=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function k(e){return typeof e==`object`&&!!e}var se=e=>/^0[^.\s]+$/u.test(e);function ce(e){let t;return()=>(t===void 0&&(t=e()),t)}var A=e=>e,le=(e,t)=>n=>t(e(n)),j=(...e)=>e.reduce(le),ue=(e,t,n)=>{let r=t-e;return r===0?1:(n-e)/r},de=class{constructor(){this.subscriptions=[]}add(e){return ae(this.subscriptions,e),()=>oe(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},M=e=>e*1e3,N=e=>e/1e3;function fe(e,t){return t?1e3/t*e:0}var pe=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,me=1e-7,he=12;function ge(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=pe(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>me&&++s<he);return o}function _e(e,t,n,r){if(e===t&&n===r)return A;let i=t=>ge(t,0,1,e,n);return e=>e===0||e===1?e:pe(i(e),t,r)}var ve=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,ye=e=>t=>1-e(1-t),be=_e(.33,1.53,.69,.99),xe=ye(be),Se=ve(xe),Ce=e=>e>=1?1:(e*=2)<1?.5*xe(e):.5*(2-2**(-10*(e-1))),P=e=>1-Math.sin(Math.acos(e)),we=ye(P),Te=ve(P),Ee=_e(.42,0,1,1),De=_e(0,0,.58,1),Oe=_e(.42,0,.58,1),ke=e=>Array.isArray(e)&&typeof e[0]!=`number`,Ae=e=>Array.isArray(e)&&typeof e[0]==`number`,je={linear:A,easeIn:Ee,easeInOut:Oe,easeOut:De,circIn:P,circInOut:Te,circOut:we,backIn:xe,backInOut:Se,backOut:be,anticipate:Ce},Me=e=>typeof e==`string`,Ne=e=>{if(Ae(e)){e.length;let[t,n,r,i]=e;return _e(t,n,r,i)}else if(Me(e))return je[e],`${e}`,je[e];return e},Pe=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`],F={value:null,addProjectionMetrics:null};function Fe(e,t){let n=new Set,r=new Set,i=!1,a=!1,o=new WeakSet,s={delta:0,timestamp:0,isProcessing:!1},c=0;function l(t){o.has(t)&&(u.schedule(t),e()),c++,t(s)}let u={schedule:(e,t=!1,a=!1)=>{let s=a&&i?n:r;return t&&o.add(e),s.add(e),e},cancel:e=>{r.delete(e),o.delete(e)},process:e=>{if(s=e,i){a=!0;return}i=!0;let o=n;n=r,r=o,n.forEach(l),t&&F.value&&F.value.frameloop[t].push(c),c=0,n.clear(),i=!1,a&&(a=!1,u.process(e))}};return u}var Ie=40;function Le(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=Pe.reduce((e,n)=>(e[n]=Fe(a,t?n:void 0),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=D.useManualTiming,o=a?i.timestamp:performance.now();n=!1,a||(i.delta=r?1e3/60:Math.max(Math.min(o-i.timestamp,Ie),1)),i.timestamp=o,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},g=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:Pe.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<Pe.length;t++)o[Pe[t]].cancel(e)},state:i,steps:o}}var{schedule:I,cancel:Re,state:L,steps:ze}=Le(typeof requestAnimationFrame<`u`?requestAnimationFrame:A,!0),Be;function Ve(){Be=void 0}var R={now:()=>(Be===void 0&&R.set(L.isProcessing||D.useManualTiming?L.timestamp:performance.now()),Be),set:e=>{Be=e,queueMicrotask(Ve)}},He={layout:0,mainThread:0,waapi:0},Ue=e=>t=>typeof t==`string`&&t.startsWith(e),We=Ue(`--`),Ge=Ue(`var(--`),Ke=e=>Ge(e)?qe.test(e.split(`/*`)[0].trim()):!1,qe=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Je(e){return typeof e==`string`?e.split(`/*`)[0].includes(`var(--`):!1}var Ye={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},Xe={...Ye,transform:e=>E(0,1,e)},Ze={...Ye,default:1},Qe=e=>Math.round(e*1e5)/1e5,$e=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function et(e){return e==null}var tt=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,nt=(e,t)=>n=>!!(typeof n==`string`&&tt.test(n)&&n.startsWith(e)||t&&!et(n)&&Object.prototype.hasOwnProperty.call(n,t)),rt=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match($e);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},it=e=>E(0,255,e),at={...Ye,transform:e=>Math.round(it(e))},ot={test:nt(`rgb`,`red`),parse:rt(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+at.transform(e)+`, `+at.transform(t)+`, `+at.transform(n)+`, `+Qe(Xe.transform(r))+`)`};function st(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var ct={test:nt(`#`),parse:st,transform:ot.transform},lt=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),z=lt(`deg`),B=lt(`%`),V=lt(`px`),ut=lt(`vh`),dt=lt(`vw`),ft={...B,parse:e=>B.parse(e)/100,transform:e=>B.transform(e*100)},pt={test:nt(`hsl`,`hue`),parse:rt(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+B.transform(Qe(t))+`, `+B.transform(Qe(n))+`, `+Qe(Xe.transform(r))+`)`},H={test:e=>ot.test(e)||ct.test(e)||pt.test(e),parse:e=>ot.test(e)?ot.parse(e):pt.test(e)?pt.parse(e):ct.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?ot.transform(e):pt.transform(e),getAnimatableNone:e=>{let t=H.parse(e);return t.alpha=0,H.transform(t)}},mt=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function ht(e){return isNaN(e)&&typeof e==`string`&&(e.match($e)?.length||0)+(e.match(mt)?.length||0)>0}var gt=`number`,_t=`color`,vt=`var`,yt=`var(`,bt="${}",xt=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function St(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(xt,e=>(H.test(e)?(r.color.push(a),i.push(_t),n.push(H.parse(e))):e.startsWith(yt)?(r.var.push(a),i.push(vt),n.push(e)):(r.number.push(a),i.push(gt),n.push(parseFloat(e))),++a,bt)).split(bt),indexes:r,types:i}}function Ct(e){return St(e).values}function wt({split:e,types:t}){let n=e.length;return r=>{let i=``;for(let a=0;a<n;a++)if(i+=e[a],r[a]!==void 0){let e=t[a];e===gt?i+=Qe(r[a]):e===_t?i+=H.transform(r[a]):i+=r[a]}return i}}function Tt(e){return wt(St(e))}var Et=e=>typeof e==`number`?0:H.test(e)?H.getAnimatableNone(e):e,Dt=(e,t)=>typeof e==`number`?t?.trim().endsWith(`/`)?e:0:Et(e);function Ot(e){let t=St(e);return wt(t)(t.values.map((e,n)=>Dt(e,t.split[n])))}var U={test:ht,parse:Ct,createTransformer:Tt,getAnimatableNone:Ot};function kt(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function At({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=kt(s,r,e+1/3),a=kt(s,r,e),o=kt(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function jt(e,t){return n=>n>0?t:e}var W=(e,t,n)=>e+(t-e)*n,Mt=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},Nt=[ct,ot,pt],Pt=e=>Nt.find(t=>t.test(e));function Ft(e){let t=Pt(e);if(`${e}`,!t)return!1;let n=t.parse(e);return t===pt&&(n=At(n)),n}var It=(e,t)=>{let n=Ft(e),r=Ft(t);if(!n||!r)return jt(e,t);let i={...n};return e=>(i.red=Mt(n.red,r.red,e),i.green=Mt(n.green,r.green,e),i.blue=Mt(n.blue,r.blue,e),i.alpha=W(n.alpha,r.alpha,e),ot.transform(i))},Lt=new Set([`none`,`hidden`]);function Rt(e,t){return Lt.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function zt(e,t){return n=>W(e,t,n)}function Bt(e){return typeof e==`number`?zt:typeof e==`string`?Ke(e)?jt:H.test(e)?It:Wt:Array.isArray(e)?Vt:typeof e==`object`?H.test(e)?It:Ht:jt}function Vt(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>Bt(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function Ht(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Bt(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function Ut(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]];n[i]=e.values[o]??0,r[a]++}return n}var Wt=(e,t)=>{let n=U.createTransformer(t),r=St(e),i=St(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Lt.has(e)&&!i.values.length||Lt.has(t)&&!r.values.length?Rt(e,t):j(Vt(Ut(r,i),i.values),n):(`${e}${t}`,jt(e,t))};function Gt(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?W(e,t,n):Bt(e)(e,t)}var Kt=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>I.update(t,e),stop:()=>Re(t),now:()=>L.isProcessing?L.timestamp:R.now()}},qt=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},Jt=2e4;function Yt(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}function Xt(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(Yt(r),Jt);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:N(i)}}var G={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Zt(e,t){return e*Math.sqrt(1-t*t)}var Qt=12;function $t(e,t,n){let r=n;for(let n=1;n<Qt;n++)r-=e(r)/t(r);return r}var en=.001;function tn({duration:e=G.duration,bounce:t=G.bounce,velocity:n=G.velocity,mass:r=G.mass}){let i,a;G.maxDuration;let o=1-t;o=E(G.minDamping,G.maxDamping,o),e=E(G.minDuration,G.maxDuration,N(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=Zt(t,o),c=Math.exp(-i);return en-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=Zt(t**2,o);return(-i(t)+en>0?-1:1)*((a-s)*c)/l}):(i=t=>{let r=Math.exp(-t*e),i=(t-n)*e+1;return-en+r*i},a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=$t(i,a,s);if(e=M(e),isNaN(c))return{stiffness:G.stiffness,damping:G.damping,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}var nn=[`duration`,`bounce`],rn=[`stiffness`,`damping`,`mass`];function an(e,t){return t.some(t=>e[t]!==void 0)}function on(e){let t={velocity:G.velocity,stiffness:G.stiffness,damping:G.damping,mass:G.mass,isResolvedFromDuration:!1,...e};if(!an(e,rn)&&an(e,nn))if(t.velocity=0,e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*E(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:G.mass,stiffness:i,damping:a}}else{let n=tn({...e,velocity:0});t={...t,...n,mass:G.mass},t.isResolvedFromDuration=!0}return t}function sn(e=G.visualDuration,t=G.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=on({...n,velocity:-N(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=N(Math.sqrt(c/u)),v=Math.abs(g)<5;r||=v?G.restSpeed.granular:G.restSpeed.default,i||=v?G.restDelta.granular:G.restDelta.default;let y,b,x,S,C,ee;if(h<1)x=Zt(_,h),S=(m+h*_*g)/x,y=e=>o-Math.exp(-h*_*e)*(S*Math.sin(x*e)+g*Math.cos(x*e)),C=h*_*S+g*x,ee=h*_*g-S*x,b=e=>Math.exp(-h*_*e)*(C*Math.sin(x*e)+ee*Math.cos(x*e));else if(h===1){y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);let e=m+_*g;b=t=>Math.exp(-_*t)*(_*e*t-m)}else{let e=_*Math.sqrt(h*h-1);y=t=>{let n=Math.exp(-h*_*t),r=Math.min(e*t,300);return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e};let t=(m+h*_*g)/e,n=h*_*t-g*e,r=h*_*g-t*e;b=t=>{let i=Math.exp(-h*_*t),a=Math.min(e*t,300);return i*(n*Math.sinh(a)+r*Math.cosh(a))}}let te={calculatedDuration:p&&d||null,velocity:e=>M(b(e)),next:e=>{if(!p&&h<1){let t=Math.exp(-h*_*e),n=Math.sin(x*e),a=Math.cos(x*e),c=o-t*(S*n+g*a),l=M(t*(C*n+ee*a));return s.done=Math.abs(l)<=r&&Math.abs(o-c)<=i,s.value=s.done?o:c,s}let t=y(e);if(p)s.done=e>=d;else{let n=M(b(e));s.done=Math.abs(n)<=r&&Math.abs(o-t)<=i}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(Yt(te),Jt),t=qt(t=>te.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return te}sn.applyToOptions=e=>{let t=Xt(e,100,sn);return e.ease=t.ease,e.duration=M(t.duration),e.type=`keyframes`,e};var cn=5;function ln(e,t,n){let r=Math.max(t-cn,0);return fe(n-e(r),t-r)}function un({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,C=e=>{p(f.value)&&(x=e,S=sn({keyframes:[f.value,m(f.value)],velocity:ln(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),C(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}function dn(e,t,n){let r=[],i=n||D.mix||Gt,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=j(Array.isArray(t)?t[n]||A:t,a)),r.push(a)}return r}function fn(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=dn(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=ue(e[r],e[r+1],n);return s[r](i)};return n?t=>l(E(e[0],e[a-1],t)):l}function pn(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=ue(0,t,r);e.push(W(n,1,i))}}function mn(e){let t=[0];return pn(t,e.length-1),t}function hn(e,t){return e.map(e=>e*t)}function gn(e,t){return e.map(()=>t||Oe).splice(0,e.length-1)}function _n({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=ke(r)?r.map(Ne):Ne(r),a={done:!1,value:t[0]},o=fn(hn(n&&n.length===t.length?n:mn(t),e),t,{ease:Array.isArray(i)?i:gn(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var vn=e=>e!==null;function yn(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(vn),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var bn={decay:un,inertia:un,tween:_n,keyframes:_n,spring:sn};function xn(e){typeof e.type==`string`&&(e.type=bn[e.type])}var Sn=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}},Cn=e=>e/100,wn=class extends Sn{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==R.now()&&this.tick(R.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},He.mainThread++,this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;xn(e);let{type:t=_n,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||_n;s!==_n&&typeof o[0]!=`number`&&(this.mixKeyframes=j(Cn,Gt(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=Yt(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime===null?this.currentTime=t:this.currentTime=this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,y=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=E(0,1,n)*o}let b;_?(this.delayState.value=l[0],b=this.delayState):b=y.next(v),i&&!_&&(b.value=i(b.value));let{done:x}=b;!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&p!==un&&(b.value=yn(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return N(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+N(e)}get time(){return N(this.currentTime)}set time(e){e=M(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state=`paused`,this.holdTime=e,this.tick(e))}getGeneratorVelocity(){let e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);let t=this.generator.next(e).value;return ln(e=>this.generator.next(e).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(R.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=N(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=Kt,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(R.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null,He.mainThread--}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}};function Tn(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var En=e=>e*180/Math.PI,Dn=e=>kn(En(Math.atan2(e[1],e[0]))),On={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Dn,rotateZ:Dn,skewX:e=>En(Math.atan(e[1])),skewY:e=>En(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},kn=e=>(e%=360,e<0&&(e+=360),e),An=Dn,jn=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Mn=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),Nn={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:jn,scaleY:Mn,scale:e=>(jn(e)+Mn(e))/2,rotateX:e=>kn(En(Math.atan2(e[6],e[5]))),rotateY:e=>kn(En(Math.atan2(-e[2],e[0]))),rotateZ:An,rotate:An,skewX:e=>En(Math.atan(e[4])),skewY:e=>En(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Pn(e){return e.includes(`scale`)?1:0}function Fn(e,t){if(!e||e===`none`)return Pn(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=Nn,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=On,i=t}if(!i)return Pn(t);let a=r[t],o=i[1].split(`,`).map(Ln);return typeof a==`function`?a(o):o[a]}var In=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return Fn(n,t)};function Ln(e){return parseFloat(e.trim())}var Rn=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],zn=new Set(Rn),Bn=e=>e===Ye||e===V,Vn=new Set([`x`,`y`,`z`]),Hn=Rn.filter(e=>!Vn.has(e));function Un(e){let t=[];return Hn.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith(`scale`)?1:0))}),t}var Wn={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Fn(t,`x`),y:(e,{transform:t})=>Fn(t,`y`)};Wn.translateX=Wn.x,Wn.translateY=Wn.y;var Gn=new Set,Kn=!1,qn=!1,Jn=!1;function Yn(){if(qn){let e=Array.from(Gn).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=Un(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}qn=!1,Kn=!1,Gn.forEach(e=>e.complete(Jn)),Gn.clear()}function Xn(){Gn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(qn=!0)})}function Zn(){Jn=!0,Xn(),Yn(),Jn=!1}var Qn=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(Gn.add(this),Kn||(Kn=!0,I.read(Xn),I.resolveKeyframes(Yn))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}Tn(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Gn.delete(this)}cancel(){this.state===`scheduled`&&(Gn.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},$n=e=>e.startsWith(`--`);function er(e,t,n){$n(t)?e.style.setProperty(t,n):e.style[t]=n}var tr={};function nr(e,t){let n=ce(e);return()=>tr[t]??n()}var rr=nr(()=>window.ScrollTimeline!==void 0,`scrollTimeline`),ir=nr(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),ar=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,or={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:ar([0,.65,.55,1]),circOut:ar([.55,0,1,.45]),backIn:ar([.31,.01,.66,-.59]),backOut:ar([.33,1.53,.69,.99])};function sr(e,t){if(e)return typeof e==`function`?ir()?qt(e,t):`ease-out`:Ae(e)?ar(e):Array.isArray(e)?e.map(e=>sr(e,t)||or.easeOut):or[e]}function cr(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=sr(s,i);Array.isArray(d)&&(u.easing=d),F.value&&He.waapi++;let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};l&&(f.pseudoElement=l);let p=e.animate(u,f);return F.value&&p.finished.finally(()=>{He.waapi--}),p}function lr(e){return typeof e==`function`&&`applyToOptions`in e}function ur({type:e,...t}){return lr(e)&&ir()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var dr=class extends Sn{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=ur(e);this.animation=cr(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=yn(r,this.options,o,this.speed);this.updateMotionValue&&this.updateMotionValue(e),er(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e===`idle`||e===`finished`||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return N(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+N(e)}get time(){return N(Number(this.animation.currentTime)||0)}set time(e){let t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=M(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:n,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&rr()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),n&&(this.animation.rangeEnd=n),A):r(this)}},fr={anticipate:Ce,backInOut:Se,circInOut:Te};function pr(e){return e in fr}function mr(e){typeof e.ease==`string`&&pr(e.ease)&&(e.ease=fr[e.ease])}var hr=10,gr=class extends dr{constructor(e){mr(e),xn(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new wn({...a,autoplay:!1}),s=Math.max(hr,R.now()-this.startTime),c=E(0,hr,s-hr),l=o.sample(s).value,{name:u}=this.options;i&&u&&er(i,u,l),t.setWithVelocity(o.sample(Math.max(0,s-c)).value,l,c),o.stop()}},_r=(e,t)=>t===`zIndex`?!1:!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(U.test(e)||e===`0`)&&!e.startsWith(`url(`));function vr(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function yr(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=_r(i,t),s=_r(a,t);return`${t}${i}${a}${o?a:i}`,!o||!s?!1:vr(e)||(n===`spring`||lr(n))&&r}function br(e){e.duration=0,e.type=`keyframes`}var xr=new Set([`opacity`,`clipPath`,`filter`,`transform`]),Sr=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function Cr(e){for(let t=0;t<e.length;t++)if(typeof e[t]==`string`&&Sr.test(e[t]))return!0;return!1}var wr=new Set([`color`,`backgroundColor`,`outlineColor`,`fill`,`stroke`,`borderColor`,`borderTopColor`,`borderRightColor`,`borderBottomColor`,`borderLeftColor`]),Tr=ce(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function Er(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o,keyframes:s}=e;if(!(t?.owner?.current instanceof HTMLElement))return!1;let{onUpdate:c,transformTemplate:l}=t.owner.getProps();return Tr()&&n&&(xr.has(n)||wr.has(n)&&Cr(s))&&(n!==`transform`||!l)&&!c&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var Dr=40,Or=class extends Sn{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=R.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u};this.keyframeResolver=new(l?.KeyframeResolver||Qn)(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=R.now();let u=!0;yr(e,i,a,o)||(u=!1,(D.instantAnimations||!s)&&l?.(yn(e,n,t)),e[0]=e[e.length-1],br(n),n.repeat=0);let d={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>Dr?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},f=u&&!c&&Er(d),p=d.motionValue?.owner?.current,m;if(f)try{m=new gr({...d,element:p})}catch{m=new wn(d)}else m=new wn(d);m.finished.then(()=>{this.notifyFinished()}).catch(A),this.pendingTimeline&&=(this.stopTimeline=m.attachTimeline(this.pendingTimeline),void 0),this._animation=m}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),Zn()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};function kr(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}var Ar=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function jr(e){let t=Ar.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function Mr(e,t,n=1){`${e}`;let[r,i]=jr(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return O(e)?parseFloat(e):e}return Ke(i)?Mr(i,t,n+1):i}var Nr={type:`spring`,stiffness:500,damping:25,restSpeed:10},Pr=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Fr={type:`keyframes`,duration:.8},Ir={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},Lr=(e,{keyframes:t})=>t.length>2?Fr:zn.has(e)?e.startsWith(`scale`)?Pr(t[1]):Nr:Ir;function Rr(e,t){if(e?.inherit&&t){let{inherit:n,...r}=e;return{...t,...r}}return e}function zr(e,t){let n=e?.[t]??e?.default??e;return n===e?n:Rr(n,e)}var Br=new Set([`when`,`delay`,`delayChildren`,`staggerChildren`,`staggerDirection`,`repeat`,`repeatType`,`repeatDelay`,`from`,`elapsed`]);function Vr(e){for(let t in e)if(!Br.has(t))return!0;return!1}var Hr=(e,t,n,r={},i,a)=>o=>{let s=zr(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=M(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};Vr(s)||Object.assign(u,Lr(e,u)),u.duration&&=M(u.duration),u.repeatDelay&&=M(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(br(u),u.delay===0&&(d=!0)),(D.instantAnimations||D.skipAnimations||i?.shouldSkipAnimations)&&(d=!0,br(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=yn(u.keyframes,s);if(e!==void 0){I.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new wn(u):new Or(u)};function Ur(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function Wr(e,t,n,r){if(typeof t==`function`){let[i,a]=Ur(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=Ur(r);t=t(n===void 0?e.custom:n,i,a)}return t}function Gr(e,t,n){let r=e.getProps();return Wr(r,t,n===void 0?r.custom:n,e)}var Kr=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...Rn]),qr=30,Jr=e=>!isNaN(parseFloat(e)),Yr={current:void 0},Xr=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=R.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=R.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Jr(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new de);let n=this.events[e].add(t);return e===`change`?()=>{n(),I.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Yr.current&&Yr.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=R.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>qr)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,qr);return fe(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function Zr(e,t){return new Xr(e,t)}var Qr=e=>Array.isArray(e);function $r(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Zr(n))}function ei(e){return Qr(e)?e[e.length-1]||0:e}function ti(e,t){let{transitionEnd:n={},transition:r={},...i}=Gr(e,t)||{};i={...i,...n};for(let t in i)$r(e,t,ei(i[t]))}var K=e=>!!(e&&e.getVelocity);function ni(e){return!!(K(e)&&e.add)}function ri(e,t){let n=e.getValue(`willChange`);if(ni(n))return n.add(t);if(!n&&D.WillChange){let n=new D.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function ii(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var ai=`data-`+ii(`framerAppearId`);function oi(e){return e.props[ai]}function si({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function ci(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a,transitionEnd:o,...s}=t,c=e.getDefaultTransition();a=a?Rr(a,c):c;let l=a?.reduceMotion;r&&(a=r);let u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||d&&si(d,t))continue;let o={delay:n,...zr(a||{},t)},c=r.get();if(c!==void 0&&!r.isAnimating()&&!Array.isArray(i)&&i===c&&!o.velocity){I.update(()=>r.set(i));continue}let f=!1;if(window.MotionHandoffAnimation){let n=oi(e);if(n){let e=window.MotionHandoffAnimation(n,t,I);e!==null&&(o.startTime=e,f=!0)}}ri(e,t);let p=l??e.shouldReduceMotion;r.start(Hr(t,r,i,p&&Kr.has(t)?{type:!1}:o,e,f));let m=r.animation;m&&u.push(m)}if(o){let t=()=>I.update(()=>{o&&ti(e,o)});u.length?Promise.all(u).then(t):t()}return u}function li(e,t,n={}){let r=Gr(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(ci(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return ui(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}else return Promise.all([a(),o(n.delay)])}function ui(e,t,n=0,r=0,i=0,a=1,o){let s=[];for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push(li(c,t,{...o,delay:n+(typeof r==`function`?0:r)+kr(e.variantChildren,c,r,i,a)}).then(()=>c.notify(`AnimationComplete`,t)));return Promise.all(s)}function di(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>li(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=li(e,t,n);else{let i=typeof t==`function`?Gr(e,t,n.custom):t;r=Promise.all(ci(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}var fi={test:e=>e===`auto`,parse:e=>e},pi=e=>t=>t.test(e),mi=[Ye,V,B,z,dt,ut,fi],hi=e=>mi.find(pi(e));function gi(e){return typeof e==`number`?e===0:e===null?!0:e===`none`||e===`0`||se(e)}var _i=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function vi(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match($e)||[];if(!r)return e;let i=n.replace(r,``),a=_i.has(t)?1:0;return r!==n&&(a*=100),t+`(`+a+i+`)`}var yi=/\b([a-z-]*)\(.*?\)/gu,bi={...U,getAnimatableNone:e=>{let t=e.match(yi);return t?t.map(vi).join(` `):e}},xi={...U,getAnimatableNone:e=>{let t=U.parse(e);return U.createTransformer(e)(t.map(e=>typeof e==`number`?0:typeof e==`object`?{...e,alpha:1}:e))}},Si={...Ye,transform:Math.round},Ci={borderWidth:V,borderTopWidth:V,borderRightWidth:V,borderBottomWidth:V,borderLeftWidth:V,borderRadius:V,borderTopLeftRadius:V,borderTopRightRadius:V,borderBottomRightRadius:V,borderBottomLeftRadius:V,width:V,maxWidth:V,height:V,maxHeight:V,top:V,right:V,bottom:V,left:V,inset:V,insetBlock:V,insetBlockStart:V,insetBlockEnd:V,insetInline:V,insetInlineStart:V,insetInlineEnd:V,padding:V,paddingTop:V,paddingRight:V,paddingBottom:V,paddingLeft:V,paddingBlock:V,paddingBlockStart:V,paddingBlockEnd:V,paddingInline:V,paddingInlineStart:V,paddingInlineEnd:V,margin:V,marginTop:V,marginRight:V,marginBottom:V,marginLeft:V,marginBlock:V,marginBlockStart:V,marginBlockEnd:V,marginInline:V,marginInlineStart:V,marginInlineEnd:V,fontSize:V,backgroundPositionX:V,backgroundPositionY:V,rotate:z,rotateX:z,rotateY:z,rotateZ:z,scale:Ze,scaleX:Ze,scaleY:Ze,scaleZ:Ze,skew:z,skewX:z,skewY:z,distance:V,translateX:V,translateY:V,translateZ:V,x:V,y:V,z:V,perspective:V,transformPerspective:V,opacity:Xe,originX:ft,originY:ft,originZ:V,zIndex:Si,fillOpacity:Xe,strokeOpacity:Xe,numOctaves:Si},wi={...Ci,color:H,backgroundColor:H,outlineColor:H,fill:H,stroke:H,borderColor:H,borderTopColor:H,borderRightColor:H,borderBottomColor:H,borderLeftColor:H,filter:bi,WebkitFilter:bi,mask:xi,WebkitMask:xi},Ti=e=>wi[e],Ei=new Set([bi,xi]);function Di(e,t){let n=Ti(e);return Ei.has(n)||(n=U),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var Oi=new Set([`auto`,`none`,`0`]);function ki(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!Oi.has(t)&&St(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=Di(n,i)}var Ai=class extends Qn{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),Ke(r))){let i=Mr(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!Kr.has(n)||e.length!==2)return;let[r,i]=e,a=hi(r),o=hi(i);if(Je(r)!==Je(i)&&Wn[n]){this.needsMeasurement=!0;return}if(a!==o)if(Bn(a)&&Bn(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else Wn[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||gi(e[t]))&&n.push(t);n.length&&ki(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Wn[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=Wn[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}};function ji(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var Mi=(e,t)=>t&&typeof e==`number`?t.transform(e):e;function Ni(e){return k(e)&&`offsetHeight`in e&&!(`ownerSVGElement`in e)}var{schedule:Pi,cancel:Fi}=Le(queueMicrotask,!1),q={x:!1,y:!1};function Ii(){return q.x||q.y}function Li(e){return e===`x`||e===`y`?q[e]?null:(q[e]=!0,()=>{q[e]=!1}):q.x||q.y?null:(q.x=q.y=!0,()=>{q.x=q.y=!1})}function Ri(e,t){let n=ji(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function zi(e){return!(e.pointerType===`touch`||Ii())}function Bi(e,t,n={}){let[r,i,a]=Ri(e,n);return r.forEach(e=>{let n=!1,r=!1,a,o=()=>{e.removeEventListener(`pointerleave`,u)},s=e=>{a&&=(a(e),void 0),o()},c=e=>{n=!1,window.removeEventListener(`pointerup`,c),window.removeEventListener(`pointercancel`,c),r&&(r=!1,s(e))},l=()=>{n=!0,window.addEventListener(`pointerup`,c,i),window.addEventListener(`pointercancel`,c,i)},u=e=>{if(e.pointerType!==`touch`){if(n){r=!0;return}s(e)}};e.addEventListener(`pointerenter`,n=>{if(!zi(n))return;r=!1;let o=t(e,n);typeof o==`function`&&(a=o,e.addEventListener(`pointerleave`,u,i))},i),e.addEventListener(`pointerdown`,l,i)}),a}var Vi=(e,t)=>t?e===t?!0:Vi(e,t.parentElement):!1,Hi=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,Ui=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function Wi(e){return Ui.has(e.tagName)||e.isContentEditable===!0}var Gi=new Set([`INPUT`,`SELECT`,`TEXTAREA`]);function Ki(e){return Gi.has(e.tagName)||e.isContentEditable===!0}var qi=new WeakSet;function Ji(e){return t=>{t.key===`Enter`&&e(t)}}function Yi(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var Xi=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=Ji(()=>{if(qi.has(n))return;Yi(n,`down`);let e=Ji(()=>{Yi(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>Yi(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function Zi(e){return Hi(e)&&!Ii()}var Qi=new WeakSet;function $i(e,t,n={}){let[r,i,a]=Ri(e,n),o=e=>{let r=e.currentTarget;if(!Zi(e)||Qi.has(e))return;qi.add(r),n.stopPropagation&&Qi.add(e);let a=t(r,e),o=(e,t)=>{window.removeEventListener(`pointerup`,s),window.removeEventListener(`pointercancel`,c),qi.has(r)&&qi.delete(r),Zi(e)&&typeof a==`function`&&a(e,{success:t})},s=e=>{o(e,r===window||r===document||n.useGlobalTarget||Vi(r,e.target))},c=e=>{o(e,!1)};window.addEventListener(`pointerup`,s,i),window.addEventListener(`pointercancel`,c,i)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),Ni(e)&&(e.addEventListener(`focus`,e=>Xi(e,i)),!Wi(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}function ea(e){return k(e)&&`ownerSVGElement`in e}var ta=new WeakMap,na,ra=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+`Size`]:ea(r)&&`getBBox`in r?r.getBBox()[t]:r[n],ia=ra(`inline`,`width`,`offsetWidth`),aa=ra(`block`,`height`,`offsetHeight`);function oa({target:e,borderBoxSize:t}){ta.get(e)?.forEach(n=>{n(e,{get width(){return ia(e,t)},get height(){return aa(e,t)}})})}function sa(e){e.forEach(oa)}function ca(){typeof ResizeObserver>`u`||(na=new ResizeObserver(sa))}function la(e,t){na||ca();let n=ji(e);return n.forEach(e=>{let n=ta.get(e);n||(n=new Set,ta.set(e,n)),n.add(t),na?.observe(e)}),()=>{n.forEach(e=>{let n=ta.get(e);n?.delete(t),n?.size||na?.unobserve(e)})}}var ua=new Set,da;function fa(){da=()=>{let e={get width(){return window.innerWidth},get height(){return window.innerHeight}};ua.forEach(t=>t(e))},window.addEventListener(`resize`,da)}function pa(e){return ua.add(e),da||fa(),()=>{ua.delete(e),!ua.size&&typeof da==`function`&&(window.removeEventListener(`resize`,da),da=void 0)}}function ma(e,t){return typeof e==`function`?pa(e):la(e,t)}function ha(e){return ea(e)&&e.tagName===`svg`}var ga=[...mi,H,U],_a=e=>ga.find(pi(e)),va=()=>({translate:0,scale:1,origin:0,originPoint:0}),ya=()=>({x:va(),y:va()}),ba=()=>({min:0,max:0}),J=()=>({x:ba(),y:ba()}),xa=new WeakMap;function Sa(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function Ca(e){return typeof e==`string`||Array.isArray(e)}var wa=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],Ta=[`initial`,...wa];function Ea(e){return Sa(e.animate)||Ta.some(t=>Ca(e[t]))}function Da(e){return!!(Ea(e)||e.variants)}function Oa(e,t,n){for(let r in t){let i=t[r],a=n[r];if(K(i))e.addValue(r,i);else if(K(a))e.addValue(r,Zr(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,Zr(t===void 0?i:t,{owner:e}))}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var ka={current:null},Aa={current:!1},ja=typeof window<`u`;function Ma(){if(Aa.current=!0,ja)if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>ka.current=e.matches;e.addEventListener(`change`,t),t()}else ka.current=!1}var Na=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],Pa={};function Fa(e){Pa=e}function Ia(){return Pa}var La=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,skipAnimations:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Qn,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=R.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,I.render(this.render,!1,!0))};let{latestValues:c,renderState:l}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=t.initial?{...c}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=Ea(t),this.isVariantNode=Da(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:u,...d}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in d){let t=d[e];c[e]!==void 0&&K(t)&&t.set(c[e])}}mount(e){if(this.hasBeenMounted)for(let e in this.initialValues)this.values.get(e)?.jump(this.initialValues[e]),this.latestValues[e]=this.initialValues[e];this.current=e,xa.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(Aa.current||Ma(),this.shouldReduceMotion=ka.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),Re(this.notifyUpdate),Re(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(let e in this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&xr.has(e)&&this.current instanceof HTMLElement){let{factory:n,keyframes:r,times:i,ease:a,duration:o}=t.accelerate,s=new dr({element:this.current,name:e,keyframes:r,times:i,ease:a,duration:M(o)}),c=n(s);this.valueSubscriptions.set(e,()=>{c(),s.cancel()});return}let n=zn.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&I.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in Pa){let t=Pa[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):J()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<Na.length;t++){let n=Na[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=Oa(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=Zr(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(O(n)||se(n))?n=parseFloat(n):!_a(n)&&U.test(t)&&(n=Di(e,t)),this.setBaseTarget(e,K(n)?n.get():n)),K(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=Wr(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!K(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new de),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){Pi.render(this.render)}},Ra=class extends La{constructor(){super(...arguments),this.KeyframeResolver=Ai}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;K(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}},za=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function Ba({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function Va({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function Ha(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Ua(e){return e===void 0||e===1}function Wa({scale:e,scaleX:t,scaleY:n}){return!Ua(e)||!Ua(t)||!Ua(n)}function Ga(e){return Wa(e)||Ka(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Ka(e){return qa(e.x)||qa(e.y)}function qa(e){return e&&e!==`0%`}function Ja(e,t,n){return n+t*(e-n)}function Ya(e,t,n,r,i){return i!==void 0&&(e=Ja(e,i,r)),Ja(e,n,r)+t}function Xa(e,t=0,n=1,r,i){e.min=Ya(e.min,t,n,r,i),e.max=Ya(e.max,t,n,r,i)}function Za(e,{x:t,y:n}){Xa(e.x,t.translate,t.scale,t.originPoint),Xa(e.y,n.translate,n.scale,n.originPoint)}var Qa=.999999999999,$a=1.0000000000001;function eo(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(Y(e.x,-a.scroll.offset.x),Y(e.y,-a.scroll.offset.y)),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Za(e,o)),r&&Ga(a.latestValues)&&ro(e,a.latestValues,a.layout?.layoutBox))}t.x<$a&&t.x>Qa&&(t.x=1),t.y<$a&&t.y>Qa&&(t.y=1)}function Y(e,t){e.min+=t,e.max+=t}function to(e,t,n,r,i=.5){Xa(e,t,n,W(e.min,e.max,i),r)}function no(e,t){return typeof e==`string`?parseFloat(e)/100*(t.max-t.min):e}function ro(e,t,n){let r=n??e;to(e.x,no(t.x,r.x),t.scaleX,t.scale,t.originX),to(e.y,no(t.y,r.y),t.scaleY,t.scale,t.originY)}function io(e,t){return Ba(Ha(e.getBoundingClientRect(),t))}function ao(e,t,n){let r=io(e,n),{scroll:i}=t;return i&&(Y(r.x,i.offset.x),Y(r.y,i.offset.y)),r}var oo={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},so=Rn.length;function co(e,t,n){let r=``,i=!0;for(let a=0;a<so;a++){let o=Rn[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===(o.startsWith(`scale`)?1:0);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=Mi(s,Ci[o]);if(!c){i=!1;let t=oo[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}return r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}function lo(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if(zn.has(e)){o=!0;continue}else if(We(e)){i[e]=n;continue}else{let t=Mi(n,Ci[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=co(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function uo(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function fo(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var po={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`)if(V.test(e))e=parseFloat(e);else return e;return`${fo(e,t.target.x)}% ${fo(e,t.target.y)}%`}},mo={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=U.parse(e);if(i.length>5)return r;let a=U.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=W(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},ho={borderRadius:{...po,applyTo:[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`]},borderTopLeftRadius:po,borderTopRightRadius:po,borderBottomLeftRadius:po,borderBottomRightRadius:po,boxShadow:mo};function go(e,{layout:t,layoutId:n}){return zn.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!ho[e]||e===`opacity`)}function _o(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(K(r[t])||i&&K(i[t])||go(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function vo(e){return window.getComputedStyle(e)}var yo=class extends Ra{constructor(){super(...arguments),this.type=`html`,this.renderInstance=uo}readValueFromInstance(e,t){if(zn.has(t))return this.projection?.isProjecting?Pn(t):In(e,t);{let n=vo(e),r=(We(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return io(e,t)}build(e,t,n){lo(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return _o(e,t,n)}},bo={offset:`stroke-dashoffset`,array:`stroke-dasharray`},xo={offset:`strokeDashoffset`,array:`strokeDasharray`};function So(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?bo:xo;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var Co=[`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function wo(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(lo(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox);for(let e of Co)d[e]!==void 0&&(f[e]=d[e],delete d[e]);t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&So(d,i,a,o,!1)}var To=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),Eo=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function Do(e,t,n,r){uo(e,t,void 0,r);for(let n in t.attrs)e.setAttribute(To.has(n)?n:ii(n),t.attrs[n])}function Oo(e,t,n){let r=_o(e,t,n);for(let n in e)if(K(e[n])||K(t[n])){let t=Rn.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var ko=class extends Ra{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=J}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(zn.has(t)){let e=Ti(t);return e&&e.default||0}return t=To.has(t)?t:ii(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return Oo(e,t,n)}build(e,t,n){wo(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){Do(e,t,n,r)}mount(e){this.isSVGTag=Eo(e.tagName),super.mount(e)}},Ao=Ta.length;function jo(e){if(!e)return;if(!e.isControllingVariants){let t=e.parent&&jo(e.parent)||{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}let t={};for(let n=0;n<Ao;n++){let r=Ta[n],i=e.props[r];(Ca(i)||i===!1)&&(t[r]=i)}return t}function Mo(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}var No=[...wa].reverse(),Po=wa.length;function Fo(e){return t=>Promise.all(t.map(({animation:t,options:n})=>di(e,t,n)))}function Io(e){let t=Fo(e),n=zo(),r=!0,i=!1,a=t=>(n,r)=>{let i=Gr(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function o(n){t=n(e)}function s(o){let{props:s}=e,c=jo(e.parent)||{},l=[],u=new Set,d={},f=1/0;for(let t=0;t<Po;t++){let p=No[t],m=n[p],h=s[p]===void 0?c[p]:s[p],g=Ca(h),_=p===o?m.isActive:null;_===!1&&(f=t);let v=h===c[p]&&h!==s[p]&&g;if(v&&(r||i)&&e.manuallyAnimateOnMount&&(v=!1),m.protectedKeys={...d},!m.isActive&&_===null||!h&&!m.prevProp||Sa(h)||typeof h==`boolean`)continue;if(p===`exit`&&m.isActive&&_!==!0){m.prevResolvedValues&&(d={...d,...m.prevResolvedValues});continue}let y=Lo(m.prevProp,h),b=y||p===o&&m.isActive&&!v&&g||t>f&&g,x=!1,S=Array.isArray(h)?h:[h],C=S.reduce(a(p),{});_===!1&&(C={});let{prevResolvedValues:ee={}}=m,te={...ee,...C},w=t=>{b=!0,u.has(t)&&(x=!0,u.delete(t)),m.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in te){let t=C[e],n=ee[e];if(d.hasOwnProperty(e))continue;let r=!1;r=Qr(t)&&Qr(n)?!Mo(t,n):t!==n,r?t==null?u.add(e):w(e):t!==void 0&&u.has(e)?w(e):m.protectedKeys[e]=!0}m.prevProp=h,m.prevResolvedValues=C,m.isActive&&(d={...d,...C}),(r||i)&&e.blockInitialAnimation&&(b=!1);let ne=v&&y;b&&(!ne||x)&&l.push(...S.map(t=>{let n={type:p};if(typeof t==`string`&&(r||i)&&!ne&&e.manuallyAnimateOnMount&&e.parent){let{parent:r}=e,i=Gr(r,t);if(r.enteringChildren&&i){let{delayChildren:t}=i.transition||{};n.delay=kr(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(u.size){let t={};if(typeof s.initial!=`boolean`){let n=Gr(e,Array.isArray(s.initial)?s.initial[0]:s.initial);n&&n.transition&&(t.transition=n.transition)}u.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),l.push({animation:t})}let p=!!l.length;return r&&(s.initial===!1||s.initial===s.animate)&&!e.manuallyAnimateOnMount&&(p=!1),r=!1,i=!1,p?t(l):Promise.resolve()}function c(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=s(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:s,setActive:c,setAnimateFunction:o,getState:()=>n,reset:()=>{n=zo(),i=!0}}}function Lo(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!Mo(t,e):!1}function Ro(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function zo(){return{animate:Ro(!0),whileInView:Ro(),whileHover:Ro(),whileTap:Ro(),whileDrag:Ro(),whileFocus:Ro(),exit:Ro()}}function Bo(e,t){e.min=t.min,e.max=t.max}function X(e,t){Bo(e.x,t.x),Bo(e.y,t.y)}function Vo(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var Ho=1e-4,Uo=1-Ho,Wo=1+Ho,Go=.01,Ko=0-Go,qo=0+Go;function Z(e){return e.max-e.min}function Jo(e,t,n){return Math.abs(e-t)<=n}function Yo(e,t,n,r=.5){e.origin=r,e.originPoint=W(t.min,t.max,e.origin),e.scale=Z(n)/Z(t),e.translate=W(n.min,n.max,e.origin)-e.originPoint,(e.scale>=Uo&&e.scale<=Wo||isNaN(e.scale))&&(e.scale=1),(e.translate>=Ko&&e.translate<=qo||isNaN(e.translate))&&(e.translate=0)}function Xo(e,t,n,r){Yo(e.x,t.x,n.x,r?r.originX:void 0),Yo(e.y,t.y,n.y,r?r.originY:void 0)}function Zo(e,t,n,r=0){e.min=(r?W(n.min,n.max,r):n.min)+t.min,e.max=e.min+Z(t)}function Qo(e,t,n,r){Zo(e.x,t.x,n.x,r?.x),Zo(e.y,t.y,n.y,r?.y)}function $o(e,t,n,r=0){let i=r?W(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+Z(t)}function es(e,t,n,r){$o(e.x,t.x,n.x,r?.x),$o(e.y,t.y,n.y,r?.y)}function ts(e,t,n,r,i){return e-=t,e=Ja(e,1/n,r),i!==void 0&&(e=Ja(e,1/i,r)),e}function ns(e,t=0,n=1,r=.5,i,a=e,o=e){if(B.test(t)&&(t=parseFloat(t),t=W(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=W(a.min,a.max,r);e===a&&(s-=t),e.min=ts(e.min,t,n,s,i),e.max=ts(e.max,t,n,s,i)}function rs(e,t,[n,r,i],a,o){ns(e,t[n],t[r],t[i],t.scale,a,o)}var is=[`x`,`scaleX`,`originX`],as=[`y`,`scaleY`,`originY`];function os(e,t,n,r){rs(e.x,t,is,n?n.x:void 0,r?r.x:void 0),rs(e.y,t,as,n?n.y:void 0,r?r.y:void 0)}function ss(e){return e.translate===0&&e.scale===1}function cs(e){return ss(e.x)&&ss(e.y)}function ls(e,t){return e.min===t.min&&e.max===t.max}function us(e,t){return ls(e.x,t.x)&&ls(e.y,t.y)}function ds(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function fs(e,t){return ds(e.x,t.x)&&ds(e.y,t.y)}function ps(e){return Z(e.x)/Z(e.y)}function ms(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function Q(e){return[e(`x`),e(`y`)]}function hs(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,rotateX:i,rotateY:a,skewX:o,skewY:s}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotateX(${i}deg) `),a&&(r+=`rotateY(${a}deg) `),o&&(r+=`skewX(${o}deg) `),s&&(r+=`skewY(${s}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}var gs=[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`],_s=gs.length,vs=e=>typeof e==`string`?parseFloat(e):e,ys=e=>typeof e==`number`||V.test(e);function bs(e,t,n,r,i,a){i?(e.opacity=W(0,n.opacity??1,Ss(r)),e.opacityExit=W(t.opacity??1,0,Cs(r))):a&&(e.opacity=W(t.opacity??1,n.opacity??1,r));for(let i=0;i<_s;i++){let a=gs[i],o=xs(t,a),s=xs(n,a);o===void 0&&s===void 0||(o||=0,s||=0,o===0||s===0||ys(o)===ys(s)?(e[a]=Math.max(W(vs(o),vs(s),r),0),(B.test(s)||B.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=W(t.rotate||0,n.rotate||0,r))}function xs(e,t){return e[t]===void 0?e.borderRadius:e[t]}var Ss=ws(0,.5,we),Cs=ws(.5,.95,A);function ws(e,t,n){return r=>r<e?0:r>t?1:n(ue(e,t,r))}function Ts(e,t,n){let r=K(e)?e:Zr(e);return r.start(Hr(``,r,t,n)),r.animation}function Es(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}var Ds=(e,t)=>e.depth-t.depth,Os=class{constructor(){this.children=[],this.isDirty=!1}add(e){ae(this.children,e),this.isDirty=!0}remove(e){oe(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Ds),this.isDirty=!1,this.children.forEach(e)}};function ks(e,t){let n=R.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(Re(r),e(a-t))};return I.setup(r,!0),()=>Re(r)}function As(e){return K(e)?e.get():e}var js=class{constructor(){this.members=[]}add(e){ae(this.members,e);for(let t=this.members.length-1;t>=0;t--){let n=this.members[t];if(n===e||n===this.lead||n===this.prevLead)continue;let r=n.instance;(!r||r.isConnected===!1)&&!n.snapshot&&(oe(this.members,n),n.unmount())}e.scheduleRender()}remove(e){if(oe(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){for(let t=this.members.indexOf(e)-1;t>=0;t--){let e=this.members[t];if(e.isPresent!==!1&&e.instance?.isConnected!==!1)return this.promote(e),!0}return!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.updateSnapshot(),e.scheduleRender();let{layoutDependency:r}=n.options,{layoutDependency:i}=e.options;(r===void 0||r!==i)&&(e.resumeFrom=n,t&&(n.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}},Ms={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Ns={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},Ps=[``,`X`,`Y`,`Z`],Fs=1e3,Is=0;function Ls(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Rs(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=oi(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,I,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Rs(r)}function zs({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=Is++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,F.value&&(Ns.nodes=Ns.calculatedTargetDeltas=Ns.calculatedProjections=0),this.nodes.forEach(Hs),this.nodes.forEach(Zs),this.nodes.forEach(Qs),this.nodes.forEach(Us),F.addProjectionMetrics&&F.addProjectionMetrics(Ns)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new Os)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new de),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=ea(t)&&!ha(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;I.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=ks(i,250),Ms.hasAnimatedSinceResize&&(Ms.hasAnimatedSinceResize=!1,this.nodes.forEach(Xs)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||ac,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!fs(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...zr(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l)}else t||Xs(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Re(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach($s),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Rs(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,(typeof t.latestValues.x==`string`||typeof t.latestValues.y==`string`)&&(t.isLayoutDirty=!0),t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){let e=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),e&&this.nodes.forEach(Ks),this.nodes.forEach(Gs);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(qs);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Js),this.nodes.forEach(Ys),this.nodes.forEach(Bs),this.nodes.forEach(Vs)):this.nodes.forEach(qs),this.clearAllSnapshots();let e=R.now();L.delta=E(0,1e3/60,e-L.timestamp),L.timestamp=e,L.isProcessing=!0,ze.update.process(L),ze.preRender.process(L),ze.render.process(L),L.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Pi.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Ws),this.sharedNodes.forEach(ec)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,I.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){I.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Z(this.snapshot.measuredBox.x)&&!Z(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||=J(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!cs(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||Ga(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),lc(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return J();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(dc))){let{scroll:e}=this.root;e&&(Y(t.x,e.offset.x),Y(t.y,e.offset.y))}return t}removeElementScroll(e){let t=J();if(X(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&X(t,e),Y(t.x,i.offset.x),Y(t.y,i.offset.y))}return t}applyTransform(e,t=!1,n){let r=n||J();X(r,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];!t&&n.options.layoutScroll&&n.scroll&&n!==n.root&&(Y(r.x,-n.scroll.offset.x),Y(r.y,-n.scroll.offset.y)),Ga(n.latestValues)&&ro(r,n.latestValues,n.layout?.layoutBox)}return Ga(this.latestValues)&&ro(r,this.latestValues,this.layout?.layoutBox),r}removeTransform(e){let t=J();X(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!Ga(n.latestValues))continue;let r;n.instance&&(Wa(n.latestValues)&&n.updateSnapshot(),r=J(),X(r,n.measurePageBox())),os(t,n.latestValues,n.snapshot?.layoutBox,r)}return Ga(this.latestValues)&&os(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0?!0:e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==L.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=L.timestamp;let a=this.getClosestProjectingParent();a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=J(),this.targetWithTransforms=J()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Qo(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):X(this.target,this.layout.layoutBox),Za(this.target,this.targetDelta)):X(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),F.value&&Ns.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||Wa(this.parent.latestValues)||Ka(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=J(),this.relativeTargetOrigin=J(),es(this.relativeTargetOrigin,t,n,this.options.layoutAnchor||void 0),X(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===L.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;X(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;eo(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=J());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Vo(this.prevProjectionDelta.x,this.projectionDelta.x),Vo(this.prevProjectionDelta.y,this.projectionDelta.y)),Xo(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!ms(this.projectionDelta.x,this.prevProjectionDelta.x)||!ms(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),F.value&&Ns.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ya(),this.projectionDelta=ya(),this.projectionDeltaWithTransform=ya()}setAnimationOrigin(e,t=!1){let n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},a=ya();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let o=J(),s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),c=this.getStack(),l=!c||c.members.length<=1,u=!!(s&&!l&&this.options.crossfade===!0&&!this.path.some(ic));this.animationProgress=0;let d;this.mixTargetDelta=t=>{let n=t/1e3;tc(a.x,e.x,n),tc(a.y,e.y,n),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(es(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),rc(this.relativeTarget,this.relativeTargetOrigin,o,n),d&&us(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||=J(),X(d,this.relativeTarget)),s&&(this.animationValues=i,bs(i,r,this.latestValues,n,u,l)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(Re(this.pendingAnimation),void 0),this.pendingAnimation=I.update(()=>{Ms.hasAnimatedSinceResize=!0,He.layout++,this.motionValue||=Zr(0),this.motionValue.jump(0,!1),this.currentAnimation=Ts(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{He.layout--},onComplete:()=>{He.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Fs),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(!(!t||!n||!r)){if(this!==e&&this.layout&&r&&uc(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||J();let t=Z(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=Z(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}X(t,n),ro(t,i),Xo(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new js),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return e?e.lead===this:!0}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&Ls(`z`,e,r,this.animationValues);for(let t=0;t<Ps.length;t++)Ls(`rotate${Ps[t]}`,e,r,this.animationValues),Ls(`skew${Ps[t]}`,e,r,this.animationValues);e.render();for(let t in r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=As(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=As(t?.pointerEvents)||``),this.hasProjected&&!Ga(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=hs(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,r.animationValues?e.opacity=r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:e.opacity=r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit;for(let t in ho){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=ho[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?As(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(Gs),this.root.sharedNodes.clear()}}}function Bs(e){e.updateLayout()}function Vs(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;if(i===`size`)Q(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=Z(r);r.min=n[e].min,r.max=r.min+i});else if(i===`x`||i===`y`){let e=i===`x`?`y`:`x`;Bo(a?t.measuredBox[e]:t.layoutBox[e],n[e])}else uc(i,t.layoutBox,n)&&Q(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=Z(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=ya();Xo(o,n,t.layoutBox);let s=ya();a?Xo(s,e.applyTransform(r,!0),t.measuredBox):Xo(s,n,t.layoutBox);let c=!cs(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=e.options.layoutAnchor||void 0,s=J();es(s,t.layoutBox,i.layoutBox,o);let c=J();es(c,n,a.layoutBox,o),fs(s,c)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=c,e.relativeTargetOrigin=s,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function Hs(e){F.value&&Ns.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function Us(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Ws(e){e.clearSnapshot()}function Gs(e){e.clearMeasurements()}function Ks(e){e.isLayoutDirty=!0,e.updateLayout()}function qs(e){e.isLayoutDirty=!1}function Js(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function Ys(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function Xs(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Zs(e){e.resolveTargetDelta()}function Qs(e){e.calcProjection()}function $s(e){e.resetSkewAndRotation()}function ec(e){e.removeLeadSnapshot()}function tc(e,t,n){e.translate=W(t.translate,0,n),e.scale=W(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function nc(e,t,n,r){e.min=W(t.min,n.min,r),e.max=W(t.max,n.max,r)}function rc(e,t,n,r){nc(e.x,t.x,n.x,r),nc(e.y,t.y,n.y,r)}function ic(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var ac={duration:.45,ease:[.4,0,.1,1]},oc=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),sc=oc(`applewebkit/`)&&!oc(`chrome/`)?Math.round:A;function cc(e){e.min=sc(e.min),e.max=sc(e.max)}function lc(e){cc(e.x),cc(e.y)}function uc(e,t,n){return e===`position`||e===`preserve-aspect`&&!Jo(ps(t),ps(n),.2)}function dc(e){return e!==e.root&&e.scroll?.wasRoot}var fc=zs({attachResizeListener:(e,t)=>Es(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),pc={current:void 0},mc=zs({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!pc.current){let e=new fc({});e.mount(window),e.setOptions({layoutScroll:!0}),pc.current=e}return pc.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),hc=(0,w.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`});function gc(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function _c(...e){return t=>{let n=!1,r=e.map(e=>{let r=gc(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():gc(e[t],null)}}}}function vc(...e){return w.useCallback(_c(...e),e)}var $=r(),yc=class extends w.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(Ni(t)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){let e=t.offsetParent,n=Ni(e)&&e.offsetWidth||0,r=Ni(e)&&e.offsetHeight||0,i=getComputedStyle(t),a=this.props.sizeRef.current;a.height=parseFloat(i.height),a.width=parseFloat(i.width),a.top=t.offsetTop,a.left=t.offsetLeft,a.right=n-a.width-a.left,a.bottom=r-a.height-a.top}return null}componentDidUpdate(){}render(){return this.props.children}};function bc({children:e,isPresent:t,anchorX:n,anchorY:r,root:i,pop:a}){let o=(0,w.useId)(),s=(0,w.useRef)(null),c=(0,w.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:l}=(0,w.useContext)(hc),u=vc(s,e.props?.ref??e?.ref);return(0,w.useInsertionEffect)(()=>{let{width:e,height:u,top:d,left:f,right:p,bottom:m}=c.current;if(t||a===!1||!s.current||!e||!u)return;let h=n===`left`?`left: ${f}`:`right: ${p}`,g=r===`bottom`?`bottom: ${m}`:`top: ${d}`;s.current.dataset.motionPopId=o;let _=document.createElement(`style`);l&&(_.nonce=l);let v=i??document.head;return v.appendChild(_),_.sheet&&_.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${u}px !important;
            ${h}px !important;
            ${g}px !important;
          }
        `),()=>{s.current?.removeAttribute(`data-motion-pop-id`),v.contains(_)&&v.removeChild(_)}},[t]),(0,$.jsx)(yc,{isPresent:t,childRef:s,sizeRef:c,pop:a,children:a===!1?e:w.cloneElement(e,{ref:u})})}var xc=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o,anchorX:s,anchorY:c,root:l})=>{let u=T(Sc),d=(0,w.useId)(),f=!0,p=(0,w.useMemo)(()=>(f=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:e=>{u.set(e,!0);for(let e of u.values())if(!e)return;r&&r()},register:e=>(u.set(e,!1),()=>u.delete(e))}),[n,u,r]);return a&&f&&(p={...p}),(0,w.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[n]),w.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),e=(0,$.jsx)(bc,{pop:o===`popLayout`,isPresent:n,anchorX:s,anchorY:c,root:l,children:e}),(0,$.jsx)(ie.Provider,{value:p,children:e})};function Sc(){return new Map}function Cc(e=!0){let t=(0,w.useContext)(ie);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,w.useId)();(0,w.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,w.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var wc=e=>e.key||``;function Tc(e){let t=[];return w.Children.forEach(e,e=>{(0,w.isValidElement)(e)&&t.push(e)}),t}var Ec=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a=`sync`,propagate:o=!1,anchorX:s=`left`,anchorY:c=`top`,root:l})=>{let[u,d]=Cc(o),f=(0,w.useMemo)(()=>Tc(e),[e]),p=o&&!u?[]:f.map(wc),m=(0,w.useRef)(!0),h=(0,w.useRef)(f),g=T(()=>new Map),_=(0,w.useRef)(new Set),[v,y]=(0,w.useState)(f),[b,x]=(0,w.useState)(f);re(()=>{m.current=!1,h.current=f;for(let e=0;e<b.length;e++){let t=wc(b[e]);p.includes(t)?(g.delete(t),_.current.delete(t)):g.get(t)!==!0&&g.set(t,!1)}},[b,p.length,p.join(`-`)]);let S=[];if(f!==v){let e=[...f];for(let t=0;t<b.length;t++){let n=b[t],r=wc(n);p.includes(r)||(e.splice(t,0,n),S.push(n))}return a===`wait`&&S.length&&(e=S),x(Tc(e)),y(f),null}let{forceRender:C}=(0,w.useContext)(ne);return(0,$.jsx)($.Fragment,{children:b.map(e=>{let v=wc(e),y=o&&!u?!1:f===b||p.includes(v);return(0,$.jsx)(xc,{isPresent:y,initial:!m.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:a,root:l,onExitComplete:y?void 0:()=>{if(_.current.has(v))return;if(g.has(v))_.current.add(v),g.set(v,!0);else return;let e=!0;g.forEach(t=>{t||(e=!1)}),e&&(C?.(),x(h.current),o&&d?.(),r&&r())},anchorX:s,anchorY:c,children:e},v)})})},Dc=(0,w.createContext)({strict:!1}),Oc={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},kc=!1;function Ac(){if(kc)return;let e={};for(let t in Oc)e[t]={isEnabled:e=>Oc[t].some(t=>!!e[t])};Fa(e),kc=!0}function jc(){return Ac(),Ia()}function Mc(e){let t=jc();for(let n in e)t[n]={...t[n],...e[n]};Fa(t)}var Nc=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(`.`));function Pc(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||Nc.has(e)}var Fc=e=>!Pc(e);function Ic(e){typeof e==`function`&&(Fc=t=>t.startsWith(`on`)?!Pc(t):e(t))}try{Ic((a(),t(o)).default)}catch{}function Lc(e,t,n){let r={};for(let i in e)i===`values`&&typeof e.values==`object`||K(e[i])||(Fc(i)||n===!0&&Pc(i)||!t&&!Pc(i)||e.draggable&&i.startsWith(`onDrag`))&&(r[i]=e[i]);return r}var Rc=(0,w.createContext)({});function zc(e,t){if(Ea(e)){let{initial:t,animate:n}=e;return{initial:t===!1||Ca(t)?t:void 0,animate:Ca(n)?n:void 0}}return e.inherit===!1?{}:t}function Bc(e){let{initial:t,animate:n}=zc(e,(0,w.useContext)(Rc));return(0,w.useMemo)(()=>({initial:t,animate:n}),[Vc(t),Vc(n)])}function Vc(e){return Array.isArray(e)?e.join(` `):e}var Hc=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Uc(e,t,n){for(let r in t)!K(t[r])&&!go(r,n)&&(e[r]=t[r])}function Wc({transformTemplate:e},t){return(0,w.useMemo)(()=>{let n=Hc();return lo(n,t,e),Object.assign({},n.vars,n.style)},[t])}function Gc(e,t){let n=e.style||{},r={};return Uc(r,n,e),Object.assign(r,Wc(e,t)),r}function Kc(e,t){let n={},r=Gc(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var qc=()=>({...Hc(),attrs:{}});function Jc(e,t,n,r){let i=(0,w.useMemo)(()=>{let n=qc();return wo(n,t,Eo(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};Uc(t,e.style,e),i.style={...t,...i.style}}return i}var Yc=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];function Xc(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(Yc.indexOf(e)>-1||/[A-Z]/u.test(e))}function Zc(e,t,n,{latestValues:r},i,a=!1,o){let s=(o??Xc(e)?Jc:Kc)(t,r,i,e),c=Lc(t,typeof e==`string`,a),l=e===w.Fragment?{}:{...c,...s,ref:n},{children:u}=t,d=(0,w.useMemo)(()=>K(u)?u.get():u,[u]);return(0,w.createElement)(e,{...l,children:d})}function Qc({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:$c(n,r,i,e),renderState:t()}}function $c(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=As(a[e]);let{initial:o,animate:s}=e,c=Ea(e),l=Da(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!Sa(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=Wr(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var el=e=>(t,n)=>{let r=(0,w.useContext)(Rc),i=(0,w.useContext)(ie),a=()=>Qc(e,t,r,i);return n?a():T(a)},tl=el({scrapeMotionValuesFromProps:_o,createRenderState:Hc}),nl=el({scrapeMotionValuesFromProps:Oo,createRenderState:qc}),rl=Symbol.for(`motionComponentSymbol`);function il(e,t,n){let r=(0,w.useRef)(n);(0,w.useInsertionEffect)(()=>{r.current=n});let i=(0,w.useRef)(null);return(0,w.useCallback)(n=>{n&&e.onMount?.(n);let a=r.current;if(typeof a==`function`)if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n);else a&&(a.current=n);t&&(n?t.mount(n):t.unmount())},[t])}var al=(0,w.createContext)({});function ol(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function sl(e,t,n,r,i,a){let{visualElement:o}=(0,w.useContext)(Rc),s=(0,w.useContext)(Dc),c=(0,w.useContext)(ie),l=(0,w.useContext)(hc),u=l.reducedMotion,d=l.skipAnimations,f=(0,w.useRef)(null),p=(0,w.useRef)(!1);r||=s.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u,skipAnimations:d,isSVG:a}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));let m=f.current,h=(0,w.useContext)(al);m&&!m.projection&&i&&(m.type===`html`||m.type===`svg`)&&cl(f.current,n,i,h);let g=(0,w.useRef)(!1);(0,w.useInsertionEffect)(()=>{m&&g.current&&m.update(n,c)});let _=n[ai],v=(0,w.useRef)(!!_&&typeof window<`u`&&!window.MotionHandoffIsComplete?.(_)&&window.MotionHasOptimisedAnimation?.(_));return re(()=>{p.current=!0,m&&(g.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),v.current&&m.animationState&&m.animationState.animateChanges())}),(0,w.useEffect)(()=>{m&&(!v.current&&m.animationState&&m.animationState.animateChanges(),v.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(_)}),!1),m.enteringChildren=void 0)}),m}function cl(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutAnchor:u,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:ll(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&ol(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:d,layoutScroll:c,layoutRoot:l,layoutAnchor:u})}function ll(e){if(e)return e.options.allowProjection===!1?ll(e.parent):e.projection}function ul(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&Mc(r);let a=n?n===`svg`:Xc(e),o=a?nl:tl;function s(n,s){let c,l={...(0,w.useContext)(hc),...n,layoutId:dl(n)},{isStatic:u}=l,d=Bc(n),f=o(n,u);if(!u&&typeof window<`u`){fl(l,r);let t=pl(l);c=t.MeasureLayout,d.visualElement=sl(e,f,l,i,t.ProjectionNode,a)}return(0,$.jsxs)(Rc.Provider,{value:d,children:[c&&d.visualElement?(0,$.jsx)(c,{visualElement:d.visualElement,...l}):null,Zc(e,n,il(f,d.visualElement,s),f,u,t,a)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,w.forwardRef)(s);return c[rl]=e,c}function dl({layoutId:e}){let t=(0,w.useContext)(ne).id;return t&&e!==void 0?t+`-`+e:e}function fl(e,t){(0,w.useContext)(Dc).strict}function pl(e){let{drag:t,layout:n}=jc();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function ml(e,t){if(typeof Proxy>`u`)return ul;let n=new Map,r=(n,r)=>ul(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,ul(a,void 0,e,t)),n.get(a))})}var hl=(e,t)=>t.isSVG??Xc(e)?new ko(t):new yo(t,{allowProjection:e!==w.Fragment}),gl=class extends za{constructor(e){super(e),e.animationState||=Io(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();Sa(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},_l=0,vl={animation:{Feature:gl},exit:{Feature:class extends za{constructor(){super(...arguments),this.id=_l++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;if(e&&n===!1){if(this.isExitComplete){let{initial:e,custom:t}=this.node.getProps();if(typeof e==`string`){let n=Gr(this.node,e,t);if(n){let{transition:e,transitionEnd:t,...r}=n;for(let e in r)this.node.getValue(e)?.jump(r[e])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive(`exit`,!1);this.isExitComplete=!1;return}let r=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function yl(e){return{point:{x:e.pageX,y:e.pageY}}}var bl=e=>t=>Hi(t)&&e(t,yl(t));function xl(e,t,n,r){return Es(e,t,bl(n),r)}var Sl=({current:e})=>e?e.ownerDocument.defaultView:null,Cl=(e,t)=>Math.abs(e-t);function wl(e,t){let n=Cl(e.x,t.x),r=Cl(e.y,t.y);return Math.sqrt(n**2+r**2)}var Tl=new Set([`auto`,`scroll`]),El=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Dl(this.lastRawMoveEventInfo,this.transformPagePoint));let e=kl(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=wl(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=L;this.history.push({...r,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastRawMoveEventInfo=t,this.lastMoveEventInfo=Dl(t,this.transformPagePoint),I.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=kl(e.type===`pointercancel`?this.lastMoveEventInfo:Dl(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!Hi(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=Dl(yl(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=L;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,kl(s,this.history)),this.removeListeners=j(xl(this.contextWindow,`pointermove`,this.handlePointerMove),xl(this.contextWindow,`pointerup`,this.handlePointerUp),xl(this.contextWindow,`pointercancel`,this.handlePointerUp)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(Tl.has(e.overflowX)||Tl.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.addEventListener(`scroll`,this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};i.x===0&&i.y===0||(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),I.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Re(this.updatePoint)}};function Dl(e,t){return t?{point:t(e.point)}:e}function Ol(e,t){return{x:e.x-t.x,y:e.y-t.y}}function kl({point:e},t){return{point:e,delta:Ol(e,jl(t)),offset:Ol(e,Al(t)),velocity:Ml(t,.1)}}function Al(e){return e[0]}function jl(e){return e[e.length-1]}function Ml(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=jl(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>M(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>M(t)*2&&(r=e[1]);let a=N(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Nl(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?W(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?W(n,e,r.max):Math.min(e,n)),e}function Pl(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function Fl(e,{top:t,left:n,bottom:r,right:i}){return{x:Pl(e.x,n,i),y:Pl(e.y,t,r)}}function Il(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function Ll(e,t){return{x:Il(e.x,t.x),y:Il(e.y,t.y)}}function Rl(e,t){let n=.5,r=Z(e),i=Z(t);return i>r?n=ue(t.min,t.max-r,e.min):r>i&&(n=ue(e.min,e.max-i,t.min)),E(0,1,n)}function zl(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var Bl=.35;function Vl(e=Bl){return e===!1?e=0:e===!0&&(e=Bl),{x:Hl(e,`left`,`right`),y:Hl(e,`top`,`bottom`)}}function Hl(e,t,n){return{min:Ul(e,t),max:Ul(e,n)}}function Ul(e,t){return typeof e==`number`?e:e[t]||0}var Wl=new WeakMap,Gl=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=J(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t&&this.snapToCursor(yl(e).point),this.stopAnimation()},a=(e,t)=>{let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Li(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Q(e=>{let t=this.getAxisMotionValue(e).get()||0;if(B.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=Z(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&I.update(()=>i(e,t),!1,!0),ri(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){this.currentDirection=Yl(o),this.currentDirection!==null&&i&&i(this.currentDirection);return}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&I.update(()=>a(e,t),!1,!0)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{let{dragSnapToOrigin:e}=this.getProps();(e||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:l}=this.getProps();this.panSession=new El(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:Sl(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&I.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!Jl(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=Nl(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&ol(e)?this.constraints||=this.resolveRefConstraints():e&&n?this.constraints=Fl(n.layoutBox,e):this.constraints=!1,this.elastic=Vl(t),r!==this.constraints&&!ol(e)&&n&&this.constraints&&!this.hasMutatedConstraints&&Q(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=zl(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!ol(e))return!1;let n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;let i=ao(n,r.root,this.visualElement.getTransformPagePoint()),a=Ll(r.layout.layoutBox,i);if(t){let e=t(Va(a));this.hasMutatedConstraints=!!e,e&&(a=Ba(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=Q(o=>{if(!Jl(o,t,this.currentDirection))return;let c=s&&s[o]||{};(a===!0||a===o)&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return ri(this.visualElement,e),n.start(Hr(e,n,0,t,this.visualElement,!1))}stopAnimation(){Q(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps();return n[t]||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){Q(t=>{let{drag:n}=this.getProps();if(!Jl(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:a}=r.layout.layoutBox[t],o=i.get()||0;i.set(e[t]-W(n,a,.5)+o)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!ol(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};Q(e=>{let t=this.getAxisMotionValue(e);if(t&&this.constraints!==!1){let n=t.get();r[e]=Rl({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.constraints=!1,this.resolveConstraints(),Q(t=>{if(!Jl(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(W(i,a,r[t]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;Wl.set(this.visualElement,this);let e=this.visualElement.current,t=xl(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&Ki(i);n&&r&&!a&&this.start(t)}),n,r=()=>{let{dragConstraints:t}=this.getProps();ol(t)&&t.current&&(this.constraints=this.resolveRefConstraints(),n||=ql(e,t.current,()=>this.scalePositionWithinConstraints()))},{projection:i}=this.visualElement,a=i.addEventListener(`measure`,r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),I.read(r);let o=Es(window,`resize`,()=>this.scalePositionWithinConstraints()),s=i.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(Q(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{o(),t(),a(),s&&s(),n&&n()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=Bl,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}};function Kl(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function ql(e,t,n){let r=ma(e,Kl(n)),i=ma(t,Kl(n));return()=>{r(),i()}}function Jl(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Yl(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var Xl=class extends za{constructor(e){super(e),this.removeGroupControls=A,this.removeListeners=A,this.controls=new Gl(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||A}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},Zl=e=>(t,n)=>{e&&I.update(()=>e(t,n),!1,!0)},Ql=class extends za{constructor(){super(...arguments),this.removePointerDownListener=A}onPointerDown(e){this.session=new El(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Sl(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:Zl(e),onStart:Zl(t),onMove:Zl(n),onEnd:(e,t)=>{delete this.session,r&&I.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=xl(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}},$l=!1,eu=class extends w.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),$l&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Ms.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),$l=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||I.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()})),null):null}componentDidUpdate(){let{visualElement:e,layoutAnchor:t}=this.props,{projection:n}=e;n&&(n.options.layoutAnchor=t,n.root.didUpdate(),Pi.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;$l=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};function tu(e){let[t,n]=Cc(),r=(0,w.useContext)(ne);return(0,$.jsx)(eu,{...e,layoutGroup:r,switchLayoutGroup:(0,w.useContext)(al),isPresent:t,safeToRemove:n})}var nu={pan:{Feature:Ql},drag:{Feature:Xl,ProjectionNode:mc,MeasureLayout:tu}};function ru(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&I.postRender(()=>i(t,yl(t)))}var iu=class extends za{mount(){let{current:e}=this.node;e&&(this.unmount=Bi(e,(e,t)=>(ru(this.node,t,`Start`),e=>ru(this.node,e,`End`))))}unmount(){}},au=class extends za{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=j(Es(this.node.current,`focus`,()=>this.onFocus()),Es(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}};function ou(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&I.postRender(()=>i(t,yl(t)))}var su=class extends za{mount(){let{current:e}=this.node;if(!e)return;let{globalTapTarget:t,propagate:n}=this.node.props;this.unmount=$i(e,(e,t)=>(ou(this.node,t,`Start`),(e,{success:t})=>ou(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:t,stopPropagation:n?.tap===!1})}unmount(){}},cu=new WeakMap,lu=new WeakMap,uu=e=>{let t=cu.get(e.target);t&&t(e)},du=e=>{e.forEach(uu)};function fu({root:e,...t}){let n=e||document;lu.has(n)||lu.set(n,{});let r=lu.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(du,{root:e,...t})),r[i]}function pu(e,t,n){let r=fu(t);return cu.set(e,n),r.observe(e),()=>{cu.delete(e),r.unobserve(e)}}var mu={some:0,all:1},hu=class extends za{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:mu[r]};this.stopObserver=pu(this.node.current,a,e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)})}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(gu(e,t))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}};function gu({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var _u={inView:{Feature:hu},tap:{Feature:su},focus:{Feature:au},hover:{Feature:iu}},vu={layout:{ProjectionNode:mc,MeasureLayout:tu}},yu=ml({...vl,..._u,...nu,...vu},hl),bu={skill:`스킬`,discussion:`토론`,briefing:`브리핑`,activity:`활동`},xu=new Set([`bess-orchestrator`,`bess-agent-framework`]);function Su(e){if(!e)return``;let t=/^\d{4}-(\d{2}-\d{2})/.exec(e.trim());return t?t[1]:e.slice(0,10)}function Cu(e,t){let n=e.trim();return n.length>t?`${n.slice(0,t)}…`:n}function wu(e){return e?typeof e.todayCount==`number`?e.todayCount:typeof e.count==`number`?e.count:typeof e.total==`number`?e.total:Array.isArray(e.articles)?e.articles.length:null:null}function Tu(e,t,n){let r=new Map;for(let t of e)r.set(t.key,t);if(n?.events?.length){let i=[...n.events].sort((e,t)=>e.date<t.date?1:e.date>t.date?-1:0);for(let n of i){let i=(n.agents??[]).find(t=>!xu.has(t)&&(r.has(t)||!e.length));if(!i)continue;let a=r.get(i),o=t?.perAgent?.[i],s=bu[n.type]??n.type,c=Su(n.date),l=o?`Lv${o.level} · 누적 ${o.count.toLocaleString()}건`:`최근 ${s}`;return{agentId:a?.id??i,focusId:a?.id??`SYS-001`,agentKey:i,name:a?.name??i,dept:a?.dept??`실무 전문가`,division:a?.division??`CTO`,roleSummary:a?.desc?Cu(a.desc,48):`최신 지식 원장 갱신 실무 전문가`,metricPrimary:`최근 갱신 ${c} · [${s}] ${l}`,metricSecondary:Cu(n.title,44),isLive:!0}}}if(t?.perAgent){let e=Object.entries(t.perAgent).filter(([e])=>!xu.has(e)).sort((e,t)=>{let n=(t[1].lastGrown||``).localeCompare(e[1].lastGrown||``);return n===0?t[1].count-e[1].count:n})[0];if(e){let[t,n]=e,i=r.get(t);return{agentId:i?.id??t,focusId:i?.id??`SYS-001`,agentKey:t,name:i?.name??t,dept:i?.dept??`실무 전문가`,division:i?.division??`CTO`,roleSummary:i?.desc?Cu(i.desc,48):`최근 지식 갱신 실무 전문가`,metricPrimary:`Lv${n.level} · 누적 지식 ${n.count.toLocaleString()}건`,metricSecondary:`최근 갱신 ${Su(n.lastGrown)||`—`}`,isLive:!0}}}let i=r.get(`bess-system-engineer`);return{agentId:`SYS-101`,focusId:i?.id??`SYS-001`,agentKey:`bess-system-engineer`,name:`시스템 엔지니어`,dept:i?.dept??`기술본부 (CTO 산하)`,division:`CTO`,roleSummary:`EMS/BMS/PCS 아키텍처 · SLD 시스템 통합 실무`,metricPrimary:`실시간 원장 대기 · 기본 실무 축`,metricSecondary:`클릭하여 5단계 시스템 통합 프로세스 확인`,isLive:!1}}function Eu({agents:e,stats:t,recent:n,briefing:r}){let i=e.length||82,a=t?.totals?.all??null,o=t?.daily?.length?t.daily.slice(-7).reduce((e,t)=>e+(t.added||0),0):null,s={axisKey:`strategy`,axisBadge:`1축 · 전략 지휘`,accent:`#3B82F6`,agentId:`CEO-001`,focusId:`CEO-001`,agentKey:`bess-orchestrator`,name:`BESS Orchestrator`,dept:`CEO Office`,division:`CEO`,roleSummary:`${i}인 총괄 · 업무 분해·배분 · 최종 승인`,metricPrimary:a===null?`${i}인 전문가 총괄 · 원장 연동 대기`:`누적 지식 ${a.toLocaleString()}건 · ${i}인 총괄`,metricSecondary:o===null?t?.updated?`원장 기준일 ${Su(t.updated)}`:`5단계 위임 오케스트레이션 체계`:`최근 7일 +${o.toLocaleString()}건 · 기준일 ${Su(t?.updated)||`최신`}`,isLive:a!==null},c=wu(r),l=Su(r?.date||r?.updated||r?.lastUpdated),u=t?.totals?.briefing??null,d=t?.perAgent?.[`bess-agent-framework`],f={axisKey:`engineering`,axisBadge:`2축 · 기술 설계`,accent:`#8B5CF6`,agentId:`CTO-100`,focusId:`CTO-100`,agentKey:`bess-agent-framework`,name:`설계 총괄 컨설턴트`,dept:`CTO Office`,division:`CTO`,roleSummary:`EPC 시스템 설계 · 국제 규격 검증 · v6.1 기준 통솔`,metricPrimary:c===null?u===null?`v6.1 설계 프레임워크 기준 · 브리핑 대기`:`누적 기술 브리핑 ${u.toLocaleString()}건 · v6.1 기준`:`오늘 기술 브리핑 ${c.toLocaleString()}건 · v6.1 기준`,metricSecondary:l?`브리핑 갱신 ${l}${r?.status?` · ${r.status}`:``}`:d?`프레임워크 Lv${d.level} · 검증 이력 ${d.count}건`:`FEM/CFD/계통해석 · 10+ 국제 규격 검증`,isLive:c!==null||u!==null},p=Tu(e,t,n);return[s,f,{axisKey:`active`,axisBadge:`3축 · 오늘의 활성 실무`,accent:`#10B981`,agentId:p.agentId,focusId:p.focusId,agentKey:p.agentKey,name:p.name,dept:p.dept,division:p.division,roleSummary:p.roleSummary,metricPrimary:p.metricPrimary,metricSecondary:p.metricSecondary,isLive:p.isLive}]}var Du=`/api/chat`,Ou=`bess_access_key`,ku=`bess_anthropic_key`,Au=[{id:`claude-haiku-4-5`,label:`Haiku 4.5 · 저렴·빠름`},{id:`claude-sonnet-4-6`,label:`Sonnet 4.6 · 균형`},{id:`claude-opus-4-8`,label:`Opus 4.8 · 최고품질`}],ju=s.div`



  display: flex;



  flex-direction: column;



  height: 100%;



  padding: 20px 24px;



  gap: 14px;



  box-sizing: border-box;



  overflow-x: hidden;



  overflow-y: auto;







  @media (max-width: 768px) {



    padding: 12px 16px;



    gap: 10px;



    height: auto;        /* 문서 스크롤 모드: 내부 스크롤 해제 → 주소창 자동 숨김 */



    overflow-y: visible;



  }



`,Mu=s.div`



  display: flex;



  justify-content: space-between;



  align-items: center;



  flex-wrap: wrap;



  gap: 10px;



  flex-shrink: 0;



  h1 { font-size: 20px; font-weight: 800; color: #F9FAFB; letter-spacing: -0.5px; }



  @media (max-width: 480px) {



    h1 { font-size: 16px; }



  }



`,Nu=s.div`



  display: grid;



  grid-template-columns: repeat(4, 1fr);



  gap: 12px;



  flex-shrink: 0;







  @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }



  @media (max-width: 480px) { grid-template-columns: 1fr; }



`,Pu=s.div`



  background: rgba(255,255,255,0.04);



  border: 1px solid rgba(255,255,255,0.08);



  border-radius: 12px;



  padding: 14px 16px;



  .label { font-size: 10px; color: #6B7280; text-transform: uppercase; letter-spacing: 1px; font-weight: 800; }



  .value { font-size: 26px; font-weight: 800; color: #3B82F6; margin-top: 2px; }



  .sub   { font-size: 11px; color: #6B7280; margin-top: 2px; }



`,Fu=s.div`



  display: grid;



  grid-template-columns: 1fr 340px;



  gap: 14px;



  flex: 1;



  min-height: 440px; /* 콘솔 최소 높이 확보 — 하단 패널이 커져도 대화창이 짓눌리지 않게 */







  @media (max-width: 1024px) {



    grid-template-columns: 1fr;



    flex: none;



    min-height: 0;



  }



`,Iu=s.section`



  display: flex;



  flex-direction: column;



  gap: 10px;



  min-width: 0;



`,Lu=s.div`



  display: flex;



  flex-direction: column;



  gap: 3px;



  .title {



    font-size: 14px;



    font-weight: 800;



    color: #F9FAFB;



    display: flex;



    align-items: center;



    gap: 6px;



  }



  .sub {



    font-size: 11.5px;



    color: #9CA3AF;



    line-height: 1.45;



  }



`,Ru=s.div`



  display: grid;



  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));



  gap: 10px;



  overflow-y: auto;



  align-content: start;



  padding-right: 4px;



`,zu=s(yu.div)`



  position: relative;



  overflow: hidden;



  background: linear-gradient(160deg, rgba(255,255,255,0.048), rgba(255,255,255,0.02));



  border: 1px solid rgba(255,255,255,0.09);



  border-radius: 13px;



  padding: 15px 15px 13px;



  display: flex;



  flex-direction: column;



  gap: 9px;



  cursor: pointer;



  transition: border-color 0.2s, background 0.2s, transform 0.2s;



  &::before {



    content: '';



    position: absolute;



    top: 0;



    left: 0;



    right: 0;



    height: 3px;



    background: linear-gradient(90deg, ${({$accent:e})=>e}, transparent 85%);



  }



  &:hover {



    border-color: ${({$accent:e})=>`${e}77`};



    background: rgba(255,255,255,0.055);



    transform: translateY(-2px);



  }



  &:focus-visible {



    outline: 2px solid ${({$accent:e})=>e};



    outline-offset: 2px;



  }



`,Bu=s.span`



  display: inline-flex;



  align-items: center;



  gap: 5px;



  font-size: 10px;



  font-weight: 800;



  padding: 3px 8px;



  border-radius: 20px;



  background: ${({$accent:e})=>`${e}1f`};



  color: ${({$accent:e})=>e};



  border: 1px solid ${({$accent:e})=>`${e}55`};



  white-space: nowrap;



`,Vu=s.span`



  font-size: 9.5px;



  font-weight: 700;



  padding: 2px 7px;



  border-radius: 14px;



  background: ${({$live:e})=>e?`rgba(16,185,129,0.14)`:`rgba(148,163,184,0.12)`};



  color: ${({$live:e})=>e?`#34D399`:`#9CA3AF`};



  border: 1px solid ${({$live:e})=>e?`rgba(52,211,153,0.35)`:`rgba(148,163,184,0.22)`};



  white-space: nowrap;



`,Hu=s.div`



  background: rgba(0,0,0,0.25);



  border: 1px solid rgba(255,255,255,0.07);



  border-radius: 9px;



  padding: 8px 10px;



  display: flex;



  flex-direction: column;



  gap: 3px;



  .primary {



    font-size: 11.5px;



    font-weight: 700;



    color: #E5E7EB;



    line-height: 1.4;



  }



  .secondary {



    font-size: 10.5px;



    color: #9CA3AF;



    line-height: 1.4;



    overflow: hidden;



    text-overflow: ellipsis;



    white-space: nowrap;



  }



`,Uu=s.button`



  font-size: 10px;



  font-weight: 700;



  color: #60A5FA;



  background: rgba(59,130,246,0.12);



  border: 1px solid rgba(96,165,250,0.32);



  border-radius: 14px;



  padding: 3px 8px;



  cursor: pointer;



  flex-shrink: 0;



  transition: background 0.16s, border-color 0.16s;



  &:hover {



    background: rgba(59,130,246,0.24);



    border-color: #60A5FA;



  }



`,Wu=s.div`



  display: flex;



  flex-direction: column;



  background: rgba(255,255,255,0.03);



  border: 1px solid rgba(255,255,255,0.08);



  border-radius: 14px;



  overflow: hidden;



  height: 100%;



  @media (max-width: 1024px) { height: 450px; margin-top: 10px; }



`,Gu=s.div`



  display: flex; align-items: center; gap: 10px;



  padding: 14px 18px;



  background: rgba(255,255,255,0.02);



  border-bottom: 1px solid rgba(255,255,255,0.08);



  font-size: 13px; font-weight: 700; color: #F9FAFB;



`,Ku=s.div`



  flex: 1; overflow-y: auto; padding: 12px 18px;



  display: flex; flex-direction: column; gap: 6px;



  min-height: 0;



  font-family: 'JetBrains Mono', 'Fira Code', 'Pretendard', monospace; font-size: 12px;



  scrollbar-width: thin;



  scrollbar-color: rgba(255,255,255,0.1) transparent;



`,qu=s.div`



  color: ${({$type:e})=>e===`success`?`#34D399`:e===`error`?`#FB7185`:e===`warn`?`#FBBF24`:e===`cmd`?`#60A5FA`:`#9CA3AF`};



  word-break: break-all;



  line-height: 1.6;



`,Ju=s.div`



  display: flex; align-items: center; gap: 8px;



  padding: 12px 18px;



  border-top: 1px solid rgba(255,255,255,0.08);



`,Yu=s.input`



  flex: 1; background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.1);



  border-radius: 8px; padding: 10px 14px; color: #F9FAFB; font-size: 13px;



  outline: none;



  transition: all 0.2s;



  &:focus { border-color: rgba(59,130,246,0.6); box-shadow: 0 0 15px rgba(59,130,246,0.1); }



  &::placeholder { color: #4B5563; }



`,Xu=s.div`



  background: rgba(255,255,255,0.03);



  border: 1px solid rgba(255,255,255,0.08);



  border-radius: 14px;



  padding: 16px 20px;



  flex-shrink: 0;



  display: flex;



  flex-direction: column;



  gap: 12px;



  @media (max-width: 768px) { padding: 14px; }



`,Zu=s.div`



  display: flex;



  align-items: center;



  gap: 0;



  overflow-x: auto;



  padding: 12px 0;



  scrollbar-width: none;



  &::-webkit-scrollbar { display: none; }



`,Qu=s.button`



  background: #3B82F6;



  border: none;



  border-radius: 8px;



  width: 38px;



  height: 38px;



  display: flex;



  align-items: center;



  justify-content: center;



  color: white;



  cursor: pointer;



  &:hover { opacity: 0.85; }



`,$u=s.div`



  width: 8px;



  height: 8px;



  border-radius: 50%;



  background: #34D399;



  box-shadow: 0 0 10px #34D399;



`,ed=s.div`



  display: flex;



  gap: 10px;



  align-items: center;



  color: #6B7280;



  font-size: 13px;



  font-weight: 600;



  white-space: nowrap;



`,td=s.div`



  display: flex;



  gap: 10px;



  align-items: center;



  flex-wrap: wrap;



`,nd=s.a`



  display: flex;



  align-items: center;



  gap: 5px;



  padding: 5px 11px;



  border-radius: 20px;



  background: rgba(16,185,129,0.1);



  border: 1px solid rgba(16,185,129,0.32);



  color: #34D399;



  font-size: 11.5px;



  font-weight: 700;



  text-decoration: none;



  white-space: nowrap;



  transition: transform 0.18s, box-shadow 0.18s;



  &:hover { transform: translateY(-1px); box-shadow: 0 6px 14px rgba(16,185,129,0.25); }



`,rd=s.div`



  display: flex;



  align-items: center;



  gap: 10px;



  font-size: 14px;



  font-weight: 800;



  color: #F9FAFB;



`,id=c`



  0%   { box-shadow: 0 0 0 0 rgba(59,130,246,0.4); }



  70%  { box-shadow: 0 0 0 8px rgba(59,130,246,0); }



  100% { box-shadow: 0 0 0 0 rgba(59,130,246,0); }



`,ad=c`



  0%   { stroke-dashoffset: 20; }



  100% { stroke-dashoffset: 0; }



`,od=s(yu.div)`



  flex-shrink: 0;



  display: flex;



  flex-direction: column;



  align-items: center;



  gap: 6px;



  padding: 12px 18px;



  border-radius: 12px;



  background: ${({$active:e,$color:t})=>e?`${t}15`:`rgba(255,255,255,0.02)`};



  border: 1px solid ${({$active:e,$color:t})=>e?t:`rgba(255,255,255,0.08)`};



  animation: ${({$active:e})=>e?id:`none`} 2s infinite;



  min-width: 100px;



  .label { font-size: 11px; font-weight: 700; color: #F3F4F6; text-align: center; white-space: pre-line; line-height: 1.3; }



  .id    { font-size: 9px;  color: #6B7280; font-family: monospace; }



`,sd=s(yu.svg)`



  flex-shrink: 0; width: 36px; height: 24px;



  line { 



    stroke: ${({$active:e})=>e?`#60A5FA`:`rgba(255,255,255,0.12)`};



    stroke-width: 1.5;



    stroke-dasharray: ${({$active:e})=>e?`5 3`:`none`};



    animation: ${({$active:e})=>e?ad:`none`} 0.8s linear infinite;



  }



`;function cd({agents:e,collabAdj:t,onFocusAgent:n}){let r=e.length<=1?0:Math.min(60,34+e.length*5),i=e.map((t,n)=>{let i=-Math.PI/2+n*2*Math.PI/Math.max(e.length,1);return{...t,x:160+r*Math.cos(i),y:89+r*Math.sin(i)}}),a=[];for(let e=0;e<i.length;e++)for(let n=e+1;n<i.length;n++)t.get(i[e].id)?.has(i[n].id)&&a.push({a:i[e],b:i[n]});return(0,$.jsxs)(`div`,{"data-testid":`rel-minimap`,children:[(0,$.jsxs)(`div`,{style:{fontSize:11,color:`#9CA3AF`,marginBottom:4},children:[`🔗 협업 관계 — `,e.length,`개 에이전트 · `,a.length,`개 직접 링크 `,a.length===0&&`(공통 협의체 협업)`,` · `,(0,$.jsx)(`span`,{style:{color:`#60A5FA`},children:`노드 클릭 → 3D 포커스`})]}),(0,$.jsxs)(`svg`,{viewBox:`0 0 320 170`,style:{width:`100%`,maxHeight:180,display:`block`},preserveAspectRatio:`xMidYMid meet`,children:[a.length===0&&i.length>1&&i.map((e,t)=>{let n=i[(t+1)%i.length];return(0,$.jsx)(`line`,{x1:e.x,y1:e.y,x2:n.x,y2:n.y,stroke:`rgba(96,165,250,0.25)`,strokeWidth:1,strokeDasharray:`4 4`},`r${t}`)}),a.map((e,t)=>(0,$.jsx)(`line`,{x1:e.a.x,y1:e.a.y,x2:e.b.x,y2:e.b.y,stroke:`rgba(148,163,184,0.45)`,strokeWidth:1.2},t)),i.map(e=>(0,$.jsxs)(`g`,{style:{cursor:n?`pointer`:`default`},onClick:()=>n?.(e.id),children:[(0,$.jsx)(`circle`,{cx:e.x,cy:e.y,r:13,fill:e.color,fillOpacity:.22,stroke:e.color,strokeWidth:1.5}),(0,$.jsx)(`circle`,{cx:e.x,cy:e.y,r:4.5,fill:e.color}),(0,$.jsx)(`text`,{x:e.x,y:e.y+26,textAnchor:`middle`,fontSize:9,fill:`#CBD5E1`,children:e.name.replace(` 전문가`,``).replace(` 에이전트`,``).slice(0,9)}),(0,$.jsx)(`text`,{x:e.x,y:e.y+36,textAnchor:`middle`,fontSize:7.5,fill:`#6B7280`,children:e.id})]},e.id))]})]})}var ld=[{id:`CORE-001`,label:`CORE
Orchestrator`,color:`#3B82F6`,defaultActive:!0}],ud=[{id:1,type:`success`,text:`[SYS] BESS-AI.LOCAL CONTROL CENTER v6.1 ONLINE.`},{id:2,type:``,text:`[CORE-001] Mission active. Waiting for command...`}],dd=(0,w.memo)(({onFocusAgent:e,onNavigate:t})=>{let[n,r]=(0,w.useState)([]),[i,a]=(0,w.useState)(ld),[o,s]=(0,w.useState)(ud),[c,ne]=(0,w.useState)(``),T=(0,w.useRef)(3),[re,ie]=(0,w.useState)(0),[ae,oe]=(0,w.useState)(82),[E,D]=(0,w.useState)([]),[O,k]=(0,w.useState)(!1),[se,ce]=(0,w.useState)(Au[0].id),[A,le]=(0,w.useState)(!1),[j,ue]=(0,w.useState)(null),[de,M]=(0,w.useState)(null),[N,fe]=(0,w.useState)(null),[pe,me]=(0,w.useState)(null),he=(0,w.useRef)([]),ge=(0,w.useRef)(new Map),_e=(0,w.useRef)(null),ve=(0,w.useRef)(null),ye=(0,w.useRef)(null),be=(0,w.useRef)(null),xe=(0,w.useRef)(null);(0,w.useEffect)(()=>{let e=be.current;if(e==null||xe.current===e)return;let t=ye.current?.querySelector(`[data-log-id="${e}"]`);t&&(t.scrollIntoView({block:`start`,behavior:`smooth`}),xe.current=e)},[o]),(0,w.useEffect)(()=>{let e=!0;return h().then(t=>{e&&(he.current=t,r(t),oe(t.length))}).catch(()=>{}),u().then(t=>{e&&(ge.current=_(t))}).catch(()=>{}),y().then(t=>{e&&(_e.current=t,ue(t))}).catch(()=>{}),d().then(t=>{e&&(ve.current=t,M(t))}).catch(()=>{}),v().then(t=>{e&&fe(t)}).catch(()=>{}),()=>{e=!1}},[]);let Se=(0,w.useMemo)(()=>Eu({agents:n,stats:j,recent:de,briefing:N}),[n,j,de,N]),Ce=(0,w.useCallback)((e,t)=>{let n=_e.current;if(!n)return;let r=l(e,p(e,t).map(e=>({id:e.id,name:e.name,key:e.key})),n,ve.current);r.length&&s(e=>[...e,...r.map(e=>({id:T.current++,...e}))])},[]);(0,w.useEffect)(()=>{if(i.length<=1)return;let e=setInterval(()=>{ie(e=>(e+1)%(i.length-1))},2400);return()=>clearInterval(e)},[i.length]);let P=(0,w.useCallback)((e,t)=>{let n=f(e,t);s(e=>[...e,...n.logs.map(e=>({id:T.current++,...e}))]),n.matched_agents?.length&&D(n.matched_agents),Ce(e,t)},[Ce]),we=(0,w.useCallback)(async e=>{let t=he.current;t.length||(t=await h(),he.current=t,oe(t.length));let n=p(e,t)[0],r=n?.id??`CEO-001`,i=n?.name??`BESS Orchestrator`;n&&D([{id:n.id,name:n.name,dept:n.dept,color:n.color,label:n.name}]);let a=T.current++;s(e=>[...e,{id:a,type:`warn`,text:`[${r}] ${i} · ${se.replace(`claude-`,``)} 응답 중…`}]);let o=window.localStorage.getItem(ku);if(o){try{let c=n?m(n):`당신은 BESS EPC 전문가 조직의 오케스트레이터입니다. 한국어로 정확하고 간결하게 답하세요.`,l=``;s(e=>e.map(e=>e.id===a?{...e,type:``,text:`[${r}] ${i}: `}:e)),await g(o,se,c,e,e=>{l+=e,s(e=>e.map(e=>e.id===a?{...e,text:`[${r}] ${i}: ${l}`}:e))}),l.trim()||(s(e=>e.map(e=>e.id===a?{...e,type:`warn`,text:`[SYS] 빈 응답 — 정적 매칭으로 대체합니다.`}:e)),P(e,t))}catch(n){window.localStorage.removeItem(ku);let r=`[SYS] 본인 API 키 오류(${(n instanceof Error?n.message:String(n)).slice(0,80)}) — 키를 삭제했습니다. 실시간 OFF 전환.`;console.log(r),s(e=>e.map(e=>e.id===a?{...e,type:`error`,text:r}:e)),k(!1),P(e,t)}return}try{let n=await fetch(Du,{method:`POST`,headers:{"Content-Type":`application/json`,"X-Access-Key":window.localStorage.getItem(Ou)||``},body:JSON.stringify({model:se,agentId:r,message:e})}),o=n.headers.get(`content-type`)||``,c=e=>s(t=>t.map(t=>t.id===a?{...t,type:`warn`,text:e}:t));if(n.status===401){window.localStorage.removeItem(Ou),c(`[SYS] 액세스 키 불일치 — 실시간 OFF로 전환합니다.`),console.log(`[SYS] 액세스 키 불일치 — 실시간 OFF로 전환합니다.`),k(!1),P(e,t);return}if(o.includes(`text/html`)){c(`[SYS] 실시간 백엔드(/api/chat) 미배포 — 정적 매칭으로 대체합니다.`),P(e,t);return}if(!n.ok){let r=(await n.text().catch(()=>``)).trim()||`HTTP ${n.status}`;c(`[SYS] 실시간 백엔드 응답(${n.status}): ${r.slice(0,100)} — 정적 매칭으로 대체합니다.`),P(e,t);return}if(!n.body){c(`[SYS] 스트림 없음 — 정적 매칭으로 대체합니다.`),P(e,t);return}let l=n.body.getReader(),u=new TextDecoder,d=``;for(s(e=>e.map(e=>e.id===a?{...e,type:``,text:`[${r}] ${i}: `}:e));;){let{done:e,value:t}=await l.read();if(e)break;d+=u.decode(t,{stream:!0}),s(e=>e.map(e=>e.id===a?{...e,text:`[${r}] ${i}: ${d}`}:e))}d.trim()||(s(e=>e.map(e=>e.id===a?{...e,type:`warn`,text:`[SYS] 빈 응답 — 정적 매칭으로 대체합니다.`}:e)),P(e,t))}catch(n){s(e=>e.map(e=>e.id===a?{...e,type:`error`,text:`[SYS] 실시간 응답 실패(${String(n).slice(0,60)}) — 정적 매칭으로 대체합니다.`}:e)),P(e,t)}},[se,P]),Te=(0,w.useCallback)(()=>{let e=window.prompt(`실시간 상담 키 입력 — 소유자 액세스 키 또는 본인 Anthropic API 키(sk-ant-…)`)?.trim();if(!e)return console.log(`[SYS] 키가 필요합니다 — 실시간 상담은 소유자 액세스 키 또는 본인 API 키가 필요합니다.`),!1;if(e.startsWith(`sk-ant-`)){window.localStorage.setItem(ku,e);let t=`[SYS] 본인 API 키 모드(디바이스 저장) — 웹검색 도구 미지원·본인 크레딧 과금. 공용 PC에서는 사용 후 키를 삭제하세요.`;console.log(t),s(e=>[...e,{id:T.current++,type:`warn`,text:t}])}else window.localStorage.setItem(Ou,e);return!0},[]),Ee=(0,w.useCallback)(async()=>{if(!c.trim())return;let e=c;ne(``);let t=T.current++;be.current=t,s(n=>[...n,{id:t,type:`cmd`,text:`> ${e}`}]);let n=e.trim();if(n===`키 삭제`||n===`키 변경`){window.localStorage.removeItem(Ou),window.localStorage.removeItem(ku),n===`키 삭제`?(s(e=>[...e,{id:T.current++,type:`warn`,text:`[SYS] 저장된 실시간 키를 모두 삭제했습니다. 실시간 OFF.`}]),k(!1)):Te()?k(!0):(s(e=>[...e,{id:T.current++,type:`warn`,text:`[SYS] 키 입력이 취소되었습니다. 실시간 OFF.`}]),k(!1));return}if(O){await we(e);return}try{let t=he.current;t.length||(t=await h(),he.current=t,oe(t.length));let n=f(e,t),r=n.logs.map(e=>({id:T.current++,...e}));s(e=>[...e,...r]),n.matched_agents&&n.matched_agents.length>0&&(a([ld[0],...n.matched_agents.map(e=>({id:e.id,label:e.label,color:e.color,defaultActive:!0}))]),D(n.matched_agents)),Ce(e,t)}catch{s(e=>[...e,{id:T.current++,type:`error`,text:`[SYS] 에이전트 데이터 로드 실패. /agents.json 경로를 확인하십시오.`}])}},[c,O,we,Ce,Te]),De=(0,w.useCallback)(()=>{if(O){k(!1);return}let e=!!window.localStorage.getItem(Ou),t=!!window.localStorage.getItem(ku);if(!e&&!t){if(!Te())return}else s(e=>[...e,{id:T.current++,type:`warn`,text:`[SYS] 저장된 키로 실시간 ON — 키 교체는 '키 변경', 제거는 '키 삭제' 입력.`}]);k(!0)},[O,Te]);return(0,$.jsxs)(ju,{children:[(0,$.jsxs)(Mu,{children:[(0,$.jsx)(`h1`,{children:`⚡ 시스템 현황 — BESS-AI.LOCAL`}),(0,$.jsxs)(td,{children:[j&&(0,$.jsxs)(nd,{href:`/growth/`,title:`최근 갱신 ${j.updated}`,children:[`🌱 누적 지식 `,j.totals.all??0,`건 · 최근 7일 +`,(j.daily??[]).slice(-7).reduce((e,t)=>e+t.added,0)]}),(0,$.jsxs)(ed,{children:[(0,$.jsx)($u,{}),`실시간 세션 활성`]})]})]}),(0,$.jsxs)(Nu,{children:[(0,$.jsxs)(Pu,{children:[(0,$.jsx)(`div`,{className:`label`,children:`전체 에이전트`}),(0,$.jsx)(`div`,{className:`value`,children:ae}),(0,$.jsx)(`div`,{className:`sub`,children:`v6.3 分散 시스템`})]}),(0,$.jsxs)(Pu,{children:[(0,$.jsx)(`div`,{className:`label`,children:`활성 스웜`}),(0,$.jsx)(`div`,{className:`value`,style:{color:`#60A5FA`},children:i.length}),(0,$.jsx)(`div`,{className:`sub`,children:`협업 협의체`})]}),(0,$.jsxs)(Pu,{onClick:()=>t?.(`graph3d`),title:`클릭 시 3D 지식 노드 및 관계도 인터랙티브 맵으로 이동`,style:{cursor:t?`pointer`:`default`,transition:`border-color 0.2s`},children:[(0,$.jsx)(`div`,{className:`label`,children:`지식 베이스 · 3D 관계도`}),(0,$.jsxs)(`div`,{className:`value`,style:{color:`#34D399`},children:[`400+ `,(0,$.jsx)(`span`,{style:{fontSize:`14px`,color:`#60A5FA`},children:`🕸 3D`})]}),(0,$.jsx)(`div`,{className:`sub`,children:`3,315건 지식 원장 · 1,131 링크 →`})]}),(0,$.jsxs)(Pu,{children:[(0,$.jsx)(`div`,{className:`label`,children:`네트워크 부하`}),(0,$.jsx)(`div`,{className:`value`,style:{color:`#A855F7`},children:`최적`}),(0,$.jsx)(`div`,{className:`sub`,children:`응답 < 85ms`})]})]}),(0,$.jsxs)(Fu,{children:[(0,$.jsxs)(Iu,{"aria-label":`BESS AI 핵심 지휘 3축`,children:[(0,$.jsxs)(Lu,{children:[(0,$.jsx)(`div`,{className:`title`,children:`🏛️ BESS AI 핵심 지휘 3축`}),(0,$.jsx)(`div`,{className:`sub`,children:`실시간 원장·브리핑 연동 · 카드를 클릭하면 업무 프로세스를 볼 수 있습니다`})]}),(0,$.jsx)(Ru,{children:(0,$.jsx)(Ec,{children:Se.map(t=>{let n=()=>me({id:t.agentId,focusId:t.focusId,key:t.agentKey,name:t.name,dept:t.dept,division:t.division,color:t.accent,desc:t.roleSummary});return(0,$.jsxs)(zu,{"data-axis-key":t.axisKey,"data-agent-id":t.agentId,$accent:t.accent,layout:!0,role:`button`,tabIndex:0,initial:{opacity:0,scale:.96},animate:{opacity:1,scale:1},onClick:n,onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),n())},title:`클릭 → 업무 프로세스·협업 흐름 상세 보기`,children:[(0,$.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,gap:6},children:[(0,$.jsx)(Bu,{$accent:t.accent,children:t.axisBadge}),(0,$.jsx)(Vu,{$live:t.isLive,children:t.isLive?`● 실데이터`:`폴백`})]}),(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`div`,{style:{fontSize:14,fontWeight:800,color:`#F9FAFB`},children:t.name}),(0,$.jsxs)(`div`,{style:{fontSize:10.5,color:`#6B7280`,marginTop:2},children:[t.agentId,` · `,t.dept]})]}),(0,$.jsx)(`div`,{style:{fontSize:11.5,color:`#CBD5E1`,lineHeight:1.5},children:t.roleSummary}),(0,$.jsxs)(Hu,{children:[(0,$.jsx)(`div`,{className:`primary`,children:t.metricPrimary}),(0,$.jsx)(`div`,{className:`secondary`,title:t.metricSecondary,children:t.metricSecondary})]}),(0,$.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,gap:6,marginTop:`auto`,paddingTop:2},children:[(0,$.jsx)(`span`,{style:{fontSize:11,fontWeight:700,color:t.accent},children:`프로세스 보기 →`}),e&&(0,$.jsx)(Uu,{type:`button`,onClick:n=>{n.stopPropagation(),e(t.focusId)},title:`3D 지식맵에서 관계 포커스`,children:`🧠 3D`})]})]},t.axisKey)})})})]}),A&&(0,$.jsx)(`div`,{onClick:()=>le(!1),title:`배경 클릭 시 축소`,style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.62)`,backdropFilter:`blur(2px)`,zIndex:199}}),(0,$.jsxs)(Wu,{style:A?{position:`fixed`,top:`5vh`,left:`4vw`,width:`min(1100px, 92vw)`,height:`88vh`,maxWidth:`92vw`,maxHeight:`90vh`,minWidth:300,minHeight:260,zIndex:200,resize:`both`,overflow:`hidden`,boxShadow:`0 30px 80px rgba(0,0,0,0.7)`}:void 0,children:[(0,$.jsxs)(Gu,{children:[(0,$.jsx)(te,{size:14,color:`#3B82F6`}),` Mission Control Console`,(0,$.jsxs)(`div`,{style:{marginLeft:`auto`,display:`flex`,alignItems:`center`,gap:8},children:[(0,$.jsxs)(`button`,{onClick:De,title:O?`실시간 Claude 응답 사용 중 (클릭=끄기)`:`실시간 Claude 응답 사용 (클릭=켜기, 액세스 키 필요)`,style:{display:`flex`,alignItems:`center`,gap:6,cursor:`pointer`,fontSize:11,fontWeight:700,padding:`4px 9px`,borderRadius:20,border:`1px solid ${O?`rgba(52,211,153,0.5)`:`rgba(148,163,184,0.3)`}`,background:O?`rgba(16,185,129,0.14)`:`rgba(255,255,255,0.03)`,color:O?`#34D399`:`#9CA3AF`},children:[(0,$.jsx)(`span`,{style:{width:7,height:7,borderRadius:`50%`,background:O?`#34D399`:`#6B7280`,boxShadow:O?`0 0 7px #34D399`:`none`}}),`실시간 `,O?`ON`:`OFF`]}),O&&(0,$.jsx)(`select`,{value:se,onChange:e=>ce(e.target.value),title:`Claude 모델 선택`,style:{fontSize:10.5,background:`rgba(0,0,0,0.4)`,color:`#D1D5DB`,border:`1px solid rgba(148,163,184,0.3)`,borderRadius:8,padding:`4px 6px`,outline:`none`,maxWidth:150},children:Au.map(e=>(0,$.jsx)(`option`,{value:e.id,style:{background:`#0a0e1a`},children:e.label},e.id))}),(0,$.jsx)(`button`,{onClick:()=>le(e=>!e),title:A?`대화창 축소`:`대화창 확장 (크게 보기·크기 조절)`,"aria-label":A?`대화창 축소`:`대화창 확장`,style:{display:`flex`,alignItems:`center`,justifyContent:`center`,cursor:`pointer`,background:`rgba(255,255,255,0.04)`,border:`1px solid rgba(148,163,184,0.3)`,borderRadius:7,color:`#9CA3AF`,width:26,height:24},children:A?(0,$.jsx)(C,{size:13}):(0,$.jsx)(S,{size:13})})]})]}),(0,$.jsx)(Ku,{ref:ye,children:o.map(e=>(0,$.jsx)(qu,{"data-log-id":e.id,$type:e.type,children:e.text},e.id))}),(0,$.jsxs)(Ju,{children:[(0,$.jsx)(Yu,{value:c,onChange:e=>ne(e.target.value),onKeyDown:e=>e.key===`Enter`&&Ee(),placeholder:`커맨드 입력 (예: '배터리 설계전략' / '전재 타당성')`}),(0,$.jsx)(Qu,{onClick:Ee,"aria-label":`명령 전송`,children:(0,$.jsx)(ee,{size:16})})]})]})]}),(0,$.jsxs)(Xu,{children:[(0,$.jsxs)(rd,{children:[(0,$.jsx)(x,{size:16,color:`#3B82F6`}),` 동적 콜라보레이션 스웜 — 에이전트 실시간 협업 체계`]}),(0,$.jsx)(Zu,{children:(0,$.jsx)(Ec,{children:i.map((t,n)=>(0,$.jsxs)(w.Fragment,{children:[(0,$.jsxs)(od,{initial:{opacity:0,x:-20,scale:.9},animate:{opacity:1,x:0,scale:1},$active:!0,$color:t.color,onClick:()=>{e&&t.id!==`CORE-001`&&e(t.id)},title:t.id===`CORE-001`?void 0:`클릭 → 3D 지식맵에서 관계 포커스`,style:{cursor:e&&t.id!==`CORE-001`?`pointer`:`default`},children:[(0,$.jsx)(`div`,{style:{width:7,height:7,borderRadius:`50%`,background:t.color,marginBottom:2}}),(0,$.jsx)(`div`,{className:`label`,children:t.label}),(0,$.jsx)(`div`,{className:`id`,children:t.id})]}),n<i.length-1&&(0,$.jsxs)(sd,{$active:re===n,viewBox:`0 0 36 24`,initial:{opacity:0},animate:{opacity:1},children:[(0,$.jsx)(`line`,{x1:`4`,y1:`12`,x2:`32`,y2:`12`}),(0,$.jsx)(`polyline`,{points:`26,8 32,12 26,16`,stroke:`#60A5FA`,strokeWidth:`1.5`,fill:`none`})]})]},t.id))})}),E.length>0&&(0,$.jsx)(`div`,{style:{borderTop:`1px solid rgba(255,255,255,0.08)`,paddingTop:12},children:(0,$.jsx)(cd,{agents:E,collabAdj:ge.current,onFocusAgent:e})})]}),(0,$.jsx)(b,{agent:pe,onClose:()=>me(null),onSelectAgent:me,onFocusAgent:e})]})});export{dd as default};