import{n as e,o as t,s as n,t as r}from"./jsx-runtime-C7M7YA1l.js";import{n as i,r as a,t as o}from"./zap-B13Z2DUZ.js";import{a as s,i as c,n as l,r as u,t as d}from"./index-BhVbfcgx.js";import{a as f,i as p,n as m,o as h,s as g,t as _}from"./3d-force-graph-BInWcQRB.js";import{a as v,c as y,d as b,f as x,i as S,l as C,n as ee,o as te,s as w,u as ne}from"./data-BUNJzJYQ.js";var re=s(`battery-charging`,[[`path`,{d:`m11 7-3 5h4l-3 5`,key:`b4a64w`}],[`path`,{d:`M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935`,key:`lre1cr`}],[`path`,{d:`M22 14v-4`,key:`14q9d5`}],[`path`,{d:`M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936`,key:`13q5k0`}]]),ie=s(`gauge`,[[`path`,{d:`m12 14 4-4`,key:`9kzdfg`}],[`path`,{d:`M3.34 19a10 10 0 1 1 17.32 0`,key:`19p75a`}]]),ae=s(`git-branch`,[[`path`,{d:`M15 6a9 9 0 0 0-9 9V3`,key:`1cii5b`}],[`circle`,{cx:`18`,cy:`6`,r:`3`,key:`1h7g24`}],[`circle`,{cx:`6`,cy:`18`,r:`3`,key:`fqmcym`}]]),oe=s(`layers`,[[`path`,{d:`M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z`,key:`zw3jo`}],[`path`,{d:`M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12`,key:`1wduqc`}],[`path`,{d:`M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17`,key:`kqbvx6`}]]),se=s(`maximize-2`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`m21 3-7 7`,key:`1l2asr`}],[`path`,{d:`m3 21 7-7`,key:`tjx5ai`}],[`path`,{d:`M9 21H3v-6`,key:`wtvkvv`}]]),ce=s(`minimize-2`,[[`path`,{d:`m14 10 7-7`,key:`oa77jy`}],[`path`,{d:`M20 10h-6V4`,key:`mjg0md`}],[`path`,{d:`m3 21 7-7`,key:`tjx5ai`}],[`path`,{d:`M4 14h6v6`,key:`rmj7iw`}]]),le=s(`pause`,[[`rect`,{x:`14`,y:`3`,width:`5`,height:`18`,rx:`1`,key:`kaeet6`}],[`rect`,{x:`5`,y:`3`,width:`5`,height:`18`,rx:`1`,key:`1wsw3u`}]]),ue=s(`rotate-ccw`,[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`1357e3`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}]]),de=s(`send`,[[`path`,{d:`M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`,key:`1ffxy3`}],[`path`,{d:`m21.854 2.147-10.94 10.939`,key:`12cjpa`}]]),fe=s(`terminal`,[[`path`,{d:`M12 19h8`,key:`baeox8`}],[`path`,{d:`m4 17 6-6-6-6`,key:`1yngyt`}]]),pe=s(`thermometer`,[[`path`,{d:`M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z`,key:`17jzev`}]]),T=n(e(),1),E=(0,T.createContext)({});function me(e){let t=(0,T.useRef)(null);return t.current===null&&(t.current=e()),t.current}var he=typeof window<`u`?T.useLayoutEffect:T.useEffect,ge=(0,T.createContext)(null);function _e(e,t){e.indexOf(t)===-1&&e.push(t)}function ve(e,t){let n=e.indexOf(t);n>-1&&e.splice(n,1)}var D=(e,t,n)=>n>t?t:n<e?e:n,O={},ye=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function k(e){return typeof e==`object`&&!!e}var be=e=>/^0[^.\s]+$/u.test(e);function xe(e){let t;return()=>(t===void 0&&(t=e()),t)}var A=e=>e,Se=(e,t)=>n=>t(e(n)),Ce=(...e)=>e.reduce(Se),we=(e,t,n)=>{let r=t-e;return r===0?1:(n-e)/r},Te=class{constructor(){this.subscriptions=[]}add(e){return _e(this.subscriptions,e),()=>ve(this.subscriptions,e)}notify(e,t,n){let r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){let r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}},j=e=>e*1e3,M=e=>e/1e3;function Ee(e,t){return t?1e3/t*e:0}var De=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Oe=1e-7,ke=12;function Ae(e,t,n,r,i){let a,o,s=0;do o=t+(n-t)/2,a=De(o,r,i)-e,a>0?n=o:t=o;while(Math.abs(a)>Oe&&++s<ke);return o}function je(e,t,n,r){if(e===t&&n===r)return A;let i=t=>Ae(t,0,1,e,n);return e=>e===0||e===1?e:De(i(e),t,r)}var Me=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Ne=e=>t=>1-e(1-t),Pe=je(.33,1.53,.69,.99),Fe=Ne(Pe),Ie=Me(Fe),Le=e=>e>=1?1:(e*=2)<1?.5*Fe(e):.5*(2-2**(-10*(e-1))),Re=e=>1-Math.sin(Math.acos(e)),ze=Ne(Re),Be=Me(Re),Ve=je(.42,0,1,1),He=je(0,0,.58,1),Ue=je(.42,0,.58,1),We=e=>Array.isArray(e)&&typeof e[0]!=`number`,Ge=e=>Array.isArray(e)&&typeof e[0]==`number`,Ke={linear:A,easeIn:Ve,easeInOut:Ue,easeOut:He,circIn:Re,circInOut:Be,circOut:ze,backIn:Fe,backInOut:Ie,backOut:Pe,anticipate:Le},qe=e=>typeof e==`string`,Je=e=>{if(Ge(e)){e.length;let[t,n,r,i]=e;return je(t,n,r,i)}else if(qe(e))return Ke[e],`${e}`,Ke[e];return e},Ye=[`setup`,`read`,`resolveKeyframes`,`preUpdate`,`update`,`preRender`,`render`,`postRender`],N={value:null,addProjectionMetrics:null};function Xe(e,t){let n=new Set,r=new Set,i=!1,a=!1,o=new WeakSet,s={delta:0,timestamp:0,isProcessing:!1},c=0;function l(t){o.has(t)&&(u.schedule(t),e()),c++,t(s)}let u={schedule:(e,t=!1,a=!1)=>{let s=a&&i?n:r;return t&&o.add(e),s.add(e),e},cancel:e=>{r.delete(e),o.delete(e)},process:e=>{if(s=e,i){a=!0;return}i=!0;let o=n;n=r,r=o,n.forEach(l),t&&N.value&&N.value.frameloop[t].push(c),c=0,n.clear(),i=!1,a&&(a=!1,u.process(e))}};return u}var Ze=40;function Qe(e,t){let n=!1,r=!0,i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=Ye.reduce((e,n)=>(e[n]=Xe(a,t?n:void 0),e),{}),{setup:s,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,h=()=>{let a=O.useManualTiming,o=a?i.timestamp:performance.now();n=!1,a||(i.delta=r?1e3/60:Math.max(Math.min(o-i.timestamp,Ze),1)),i.timestamp=o,i.isProcessing=!0,s.process(i),c.process(i),l.process(i),u.process(i),d.process(i),f.process(i),p.process(i),m.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(h))},g=()=>{n=!0,r=!0,i.isProcessing||e(h)};return{schedule:Ye.reduce((e,t)=>{let r=o[t];return e[t]=(e,t=!1,i=!1)=>(n||g(),r.schedule(e,t,i)),e},{}),cancel:e=>{for(let t=0;t<Ye.length;t++)o[Ye[t]].cancel(e)},state:i,steps:o}}var{schedule:P,cancel:F,state:I,steps:$e}=Qe(typeof requestAnimationFrame<`u`?requestAnimationFrame:A,!0),et;function tt(){et=void 0}var L={now:()=>(et===void 0&&L.set(I.isProcessing||O.useManualTiming?I.timestamp:performance.now()),et),set:e=>{et=e,queueMicrotask(tt)}},nt={layout:0,mainThread:0,waapi:0},rt=e=>t=>typeof t==`string`&&t.startsWith(e),it=rt(`--`),at=rt(`var(--`),ot=e=>at(e)?st.test(e.split(`/*`)[0].trim()):!1,st=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function ct(e){return typeof e==`string`?e.split(`/*`)[0].includes(`var(--`):!1}var lt={test:e=>typeof e==`number`,parse:parseFloat,transform:e=>e},ut={...lt,transform:e=>D(0,1,e)},dt={...lt,default:1},ft=e=>Math.round(e*1e5)/1e5,pt=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function mt(e){return e==null}var ht=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,gt=(e,t)=>n=>!!(typeof n==`string`&&ht.test(n)&&n.startsWith(e)||t&&!mt(n)&&Object.prototype.hasOwnProperty.call(n,t)),_t=(e,t,n)=>r=>{if(typeof r!=`string`)return r;let[i,a,o,s]=r.match(pt);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:s===void 0?1:parseFloat(s)}},vt=e=>D(0,255,e),yt={...lt,transform:e=>Math.round(vt(e))},bt={test:gt(`rgb`,`red`),parse:_t(`red`,`green`,`blue`),transform:({red:e,green:t,blue:n,alpha:r=1})=>`rgba(`+yt.transform(e)+`, `+yt.transform(t)+`, `+yt.transform(n)+`, `+ft(ut.transform(r))+`)`};function xt(e){let t=``,n=``,r=``,i=``;return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}var St={test:gt(`#`),parse:xt,transform:bt.transform},Ct=e=>({test:t=>typeof t==`string`&&t.endsWith(e)&&t.split(` `).length===1,parse:parseFloat,transform:t=>`${t}${e}`}),R=Ct(`deg`),z=Ct(`%`),B=Ct(`px`),wt=Ct(`vh`),Tt=Ct(`vw`),Et={...z,parse:e=>z.parse(e)/100,transform:e=>z.transform(e*100)},Dt={test:gt(`hsl`,`hue`),parse:_t(`hue`,`saturation`,`lightness`),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>`hsla(`+Math.round(e)+`, `+z.transform(ft(t))+`, `+z.transform(ft(n))+`, `+ft(ut.transform(r))+`)`},V={test:e=>bt.test(e)||St.test(e)||Dt.test(e),parse:e=>bt.test(e)?bt.parse(e):Dt.test(e)?Dt.parse(e):St.parse(e),transform:e=>typeof e==`string`?e:e.hasOwnProperty(`red`)?bt.transform(e):Dt.transform(e),getAnimatableNone:e=>{let t=V.parse(e);return t.alpha=0,V.transform(t)}},Ot=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function kt(e){return isNaN(e)&&typeof e==`string`&&(e.match(pt)?.length||0)+(e.match(Ot)?.length||0)>0}var At=`number`,jt=`color`,Mt=`var`,Nt=`var(`,Pt="${}",Ft=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function It(e){let t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[],a=0;return{values:n,split:t.replace(Ft,e=>(V.test(e)?(r.color.push(a),i.push(jt),n.push(V.parse(e))):e.startsWith(Nt)?(r.var.push(a),i.push(Mt),n.push(e)):(r.number.push(a),i.push(At),n.push(parseFloat(e))),++a,Pt)).split(Pt),indexes:r,types:i}}function Lt(e){return It(e).values}function Rt({split:e,types:t}){let n=e.length;return r=>{let i=``;for(let a=0;a<n;a++)if(i+=e[a],r[a]!==void 0){let e=t[a];e===At?i+=ft(r[a]):e===jt?i+=V.transform(r[a]):i+=r[a]}return i}}function zt(e){return Rt(It(e))}var Bt=e=>typeof e==`number`?0:V.test(e)?V.getAnimatableNone(e):e,Vt=(e,t)=>typeof e==`number`?t?.trim().endsWith(`/`)?e:0:Bt(e);function Ht(e){let t=It(e);return Rt(t)(t.values.map((e,n)=>Vt(e,t.split[n])))}var H={test:kt,parse:Lt,createTransformer:zt,getAnimatableNone:Ht};function Ut(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Wt({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,o=0;if(!t)i=a=o=n;else{let r=n<.5?n*(1+t):n+t-n*t,s=2*n-r;i=Ut(s,r,e+1/3),a=Ut(s,r,e),o=Ut(s,r,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:r}}function Gt(e,t){return n=>n>0?t:e}var U=(e,t,n)=>e+(t-e)*n,Kt=(e,t,n)=>{let r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},qt=[St,bt,Dt],Jt=e=>qt.find(t=>t.test(e));function Yt(e){let t=Jt(e);if(`${e}`,!t)return!1;let n=t.parse(e);return t===Dt&&(n=Wt(n)),n}var Xt=(e,t)=>{let n=Yt(e),r=Yt(t);if(!n||!r)return Gt(e,t);let i={...n};return e=>(i.red=Kt(n.red,r.red,e),i.green=Kt(n.green,r.green,e),i.blue=Kt(n.blue,r.blue,e),i.alpha=U(n.alpha,r.alpha,e),bt.transform(i))},Zt=new Set([`none`,`hidden`]);function Qt(e,t){return Zt.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function $t(e,t){return n=>U(e,t,n)}function en(e){return typeof e==`number`?$t:typeof e==`string`?ot(e)?Gt:V.test(e)?Xt:an:Array.isArray(e)?tn:typeof e==`object`?V.test(e)?Xt:nn:Gt}function tn(e,t){let n=[...e],r=n.length,i=e.map((e,n)=>en(e)(e,t[n]));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function nn(e,t){let n={...e,...t},r={};for(let i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=en(e[i])(e[i],t[i]));return e=>{for(let t in r)n[t]=r[t](e);return n}}function rn(e,t){let n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){let a=t.types[i],o=e.indexes[a][r[a]];n[i]=e.values[o]??0,r[a]++}return n}var an=(e,t)=>{let n=H.createTransformer(t),r=It(e),i=It(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Zt.has(e)&&!i.values.length||Zt.has(t)&&!r.values.length?Qt(e,t):Ce(tn(rn(r,i),i.values),n):(`${e}${t}`,Gt(e,t))};function on(e,t,n){return typeof e==`number`&&typeof t==`number`&&typeof n==`number`?U(e,t,n):en(e)(e,t)}var sn=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>P.update(t,e),stop:()=>F(t),now:()=>I.isProcessing?I.timestamp:L.now()}},cn=(e,t,n=10)=>{let r=``,i=Math.max(Math.round(t/n),2);for(let t=0;t<i;t++)r+=Math.round(e(t/(i-1))*1e4)/1e4+`, `;return`linear(${r.substring(0,r.length-2)})`},ln=2e4;function un(e){let t=0,n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}function dn(e,t=100,n){let r=n({...e,keyframes:[0,t]}),i=Math.min(un(r),ln);return{type:`keyframes`,ease:e=>r.next(i*e).value/t,duration:M(i)}}var W={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function fn(e,t){return e*Math.sqrt(1-t*t)}var pn=12;function mn(e,t,n){let r=n;for(let n=1;n<pn;n++)r-=e(r)/t(r);return r}var hn=.001;function gn({duration:e=W.duration,bounce:t=W.bounce,velocity:n=W.velocity,mass:r=W.mass}){let i,a;W.maxDuration;let o=1-t;o=D(W.minDamping,W.maxDamping,o),e=D(W.minDuration,W.maxDuration,M(e)),o<1?(i=t=>{let r=t*o,i=r*e,a=r-n,s=fn(t,o),c=Math.exp(-i);return hn-a/s*c},a=t=>{let r=t*o*e,a=r*n+n,s=o**2*t**2*e,c=Math.exp(-r),l=fn(t**2,o);return(-i(t)+hn>0?-1:1)*((a-s)*c)/l}):(i=t=>{let r=Math.exp(-t*e),i=(t-n)*e+1;return-hn+r*i},a=t=>Math.exp(-t*e)*((n-t)*(e*e)));let s=5/e,c=mn(i,a,s);if(e=j(e),isNaN(c))return{stiffness:W.stiffness,damping:W.damping,duration:e};{let t=c**2*r;return{stiffness:t,damping:o*2*Math.sqrt(r*t),duration:e}}}var _n=[`duration`,`bounce`],vn=[`stiffness`,`damping`,`mass`];function yn(e,t){return t.some(t=>e[t]!==void 0)}function bn(e){let t={velocity:W.velocity,stiffness:W.stiffness,damping:W.damping,mass:W.mass,isResolvedFromDuration:!1,...e};if(!yn(e,vn)&&yn(e,_n))if(t.velocity=0,e.visualDuration){let n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*D(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:W.mass,stiffness:i,damping:a}}else{let n=gn({...e,velocity:0});t={...t,...n,mass:W.mass},t.isResolvedFromDuration=!0}return t}function xn(e=W.visualDuration,t=W.bounce){let n=typeof e==`object`?e:{visualDuration:e,keyframes:[0,1],bounce:t},{restSpeed:r,restDelta:i}=n,a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:c,damping:l,mass:u,duration:d,velocity:f,isResolvedFromDuration:p}=bn({...n,velocity:-M(n.velocity||0)}),m=f||0,h=l/(2*Math.sqrt(c*u)),g=o-a,_=M(Math.sqrt(c/u)),v=Math.abs(g)<5;r||=v?W.restSpeed.granular:W.restSpeed.default,i||=v?W.restDelta.granular:W.restDelta.default;let y,b,x,S,C,ee;if(h<1)x=fn(_,h),S=(m+h*_*g)/x,y=e=>o-Math.exp(-h*_*e)*(S*Math.sin(x*e)+g*Math.cos(x*e)),C=h*_*S+g*x,ee=h*_*g-S*x,b=e=>Math.exp(-h*_*e)*(C*Math.sin(x*e)+ee*Math.cos(x*e));else if(h===1){y=e=>o-Math.exp(-_*e)*(g+(m+_*g)*e);let e=m+_*g;b=t=>Math.exp(-_*t)*(_*e*t-m)}else{let e=_*Math.sqrt(h*h-1);y=t=>{let n=Math.exp(-h*_*t),r=Math.min(e*t,300);return o-n*((m+h*_*g)*Math.sinh(r)+e*g*Math.cosh(r))/e};let t=(m+h*_*g)/e,n=h*_*t-g*e,r=h*_*g-t*e;b=t=>{let i=Math.exp(-h*_*t),a=Math.min(e*t,300);return i*(n*Math.sinh(a)+r*Math.cosh(a))}}let te={calculatedDuration:p&&d||null,velocity:e=>j(b(e)),next:e=>{if(!p&&h<1){let t=Math.exp(-h*_*e),n=Math.sin(x*e),a=Math.cos(x*e),c=o-t*(S*n+g*a),l=j(t*(C*n+ee*a));return s.done=Math.abs(l)<=r&&Math.abs(o-c)<=i,s.value=s.done?o:c,s}let t=y(e);if(p)s.done=e>=d;else{let n=j(b(e));s.done=Math.abs(n)<=r&&Math.abs(o-t)<=i}return s.value=s.done?o:t,s},toString:()=>{let e=Math.min(un(te),ln),t=cn(t=>te.next(e*t).value,e,30);return e+`ms `+t},toTransition:()=>{}};return te}xn.applyToOptions=e=>{let t=dn(e,100,xn);return e.ease=t.ease,e.duration=j(t.duration),e.type=`keyframes`,e};var Sn=5;function Cn(e,t,n){let r=Math.max(t-Sn,0);return Ee(n-e(r),t-r)}function wn({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:o,min:s,max:c,restDelta:l=.5,restSpeed:u}){let d=e[0],f={done:!1,value:d},p=e=>s!==void 0&&e<s||c!==void 0&&e>c,m=e=>s===void 0?c:c===void 0||Math.abs(s-e)<Math.abs(c-e)?s:c,h=n*t,g=d+h,_=o===void 0?g:o(g);_!==g&&(h=_-d);let v=e=>-h*Math.exp(-e/r),y=e=>_+v(e),b=e=>{let t=v(e),n=y(e);f.done=Math.abs(t)<=l,f.value=f.done?_:n},x,S,C=e=>{p(f.value)&&(x=e,S=xn({keyframes:[f.value,m(f.value)],velocity:Cn(y,e,f.value),damping:i,stiffness:a,restDelta:l,restSpeed:u}))};return C(0),{calculatedDuration:null,next:e=>{let t=!1;return!S&&x===void 0&&(t=!0,b(e),C(e)),x!==void 0&&e>=x?S.next(e-x):(!t&&b(e),f)}}}function Tn(e,t,n){let r=[],i=n||O.mix||on,a=e.length-1;for(let n=0;n<a;n++){let a=i(e[n],e[n+1]);t&&(a=Ce(Array.isArray(t)?t[n]||A:t,a)),r.push(a)}return r}function En(e,t,{clamp:n=!0,ease:r,mixer:i}={}){let a=e.length;if(t.length,a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];let o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());let s=Tn(t,r,i),c=s.length,l=n=>{if(o&&n<e[0])return t[0];let r=0;if(c>1)for(;r<e.length-2&&!(n<e[r+1]);r++);let i=we(e[r],e[r+1],n);return s[r](i)};return n?t=>l(D(e[0],e[a-1],t)):l}function Dn(e,t){let n=e[e.length-1];for(let r=1;r<=t;r++){let i=we(0,t,r);e.push(U(n,1,i))}}function On(e){let t=[0];return Dn(t,e.length-1),t}function kn(e,t){return e.map(e=>e*t)}function An(e,t){return e.map(()=>t||Ue).splice(0,e.length-1)}function jn({duration:e=300,keyframes:t,times:n,ease:r=`easeInOut`}){let i=We(r)?r.map(Je):Je(r),a={done:!1,value:t[0]},o=En(kn(n&&n.length===t.length?n:On(t),e),t,{ease:Array.isArray(i)?i:An(t,i)});return{calculatedDuration:e,next:t=>(a.value=o(t),a.done=t>=e,a)}}var Mn=e=>e!==null;function Nn(e,{repeat:t,repeatType:n=`loop`},r,i=1){let a=e.filter(Mn),o=i<0||t&&n!==`loop`&&t%2==1?0:a.length-1;return!o||r===void 0?a[o]:r}var Pn={decay:wn,inertia:wn,tween:jn,keyframes:jn,spring:xn};function Fn(e){typeof e.type==`string`&&(e.type=Pn[e.type])}var In=class{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}},Ln=e=>e/100,Rn=class extends In{constructor(e){super(),this.state=`idle`,this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==L.now()&&this.tick(L.now()),this.isStopped=!0,this.state!==`idle`&&(this.teardown(),this.options.onStop?.())},nt.mainThread++,this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){let{options:e}=this;Fn(e);let{type:t=jn,repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=e,{keyframes:o}=e,s=t||jn;s!==jn&&typeof o[0]!=`number`&&(this.mixKeyframes=Ce(Ln,on(o[0],o[1])),o=[0,100]);let c=s({...e,keyframes:o});i===`mirror`&&(this.mirroredGenerator=s({...e,keyframes:[...o].reverse(),velocity:-a})),c.calculatedDuration===null&&(c.calculatedDuration=un(c));let{calculatedDuration:l}=c;this.calculatedDuration=l,this.resolvedDuration=l+r,this.totalDuration=this.resolvedDuration*(n+1)-r,this.generator=c}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime===null?this.currentTime=t:this.currentTime=this.holdTime}tick(e,t=!1){let{generator:n,totalDuration:r,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:o,calculatedDuration:s}=this;if(this.startTime===null)return n.next(0);let{delay:c=0,keyframes:l,repeat:u,repeatType:d,repeatDelay:f,type:p,onUpdate:m,finalKeyframe:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let g=this.currentTime-c*(this.playbackSpeed>=0?1:-1),_=this.playbackSpeed>=0?g<0:g>r;this.currentTime=Math.max(g,0),this.state===`finished`&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,y=n;if(u){let e=Math.min(this.currentTime,r)/o,t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),n===1&&t--,t=Math.min(t,u+1),t%2&&(d===`reverse`?(n=1-n,f&&(n-=f/o)):d===`mirror`&&(y=a)),v=D(0,1,n)*o}let b;_?(this.delayState.value=l[0],b=this.delayState):b=y.next(v),i&&!_&&(b.value=i(b.value));let{done:x}=b;!_&&s!==null&&(x=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);let S=this.holdTime===null&&(this.state===`finished`||this.state===`running`&&x);return S&&p!==wn&&(b.value=Nn(l,this.options,h,this.speed)),m&&m(b.value),S&&this.finish(),b}then(e,t){return this.finished.then(e,t)}get duration(){return M(this.calculatedDuration)}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+M(e)}get time(){return M(this.currentTime)}set time(e){e=j(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state=`paused`,this.holdTime=e,this.tick(e))}getGeneratorVelocity(){let e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);let t=this.generator.next(e).value;return Cn(e=>this.generator.next(e).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){let t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(L.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=M(this.currentTime))}play(){if(this.isStopped)return;let{driver:e=sn,startTime:t}=this.options;this.driver||=e(e=>this.tick(e)),this.options.onPlay?.();let n=this.driver.now();this.state===`finished`?(this.updateFinished(),this.startTime=n):this.holdTime===null?this.startTime||=t??n:this.startTime=n-this.holdTime,this.state===`finished`&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state=`running`,this.driver.start()}pause(){this.state=`paused`,this.updateTime(L.now()),this.holdTime=this.currentTime}complete(){this.state!==`running`&&this.play(),this.state=`finished`,this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state=`finished`,this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state=`idle`,this.stopDriver(),this.startTime=this.holdTime=null,nt.mainThread--}stopDriver(){this.driver&&=(this.driver.stop(),void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type=`keyframes`,this.options.ease=`linear`,this.initAnimation()),this.driver?.stop(),e.observe(this)}};function zn(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}var Bn=e=>e*180/Math.PI,Vn=e=>Un(Bn(Math.atan2(e[1],e[0]))),Hn={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Vn,rotateZ:Vn,skewX:e=>Bn(Math.atan(e[1])),skewY:e=>Bn(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Un=e=>(e%=360,e<0&&(e+=360),e),Wn=Vn,Gn=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),Kn=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),qn={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Gn,scaleY:Kn,scale:e=>(Gn(e)+Kn(e))/2,rotateX:e=>Un(Bn(Math.atan2(e[6],e[5]))),rotateY:e=>Un(Bn(Math.atan2(-e[2],e[0]))),rotateZ:Wn,rotate:Wn,skewX:e=>Bn(Math.atan(e[4])),skewY:e=>Bn(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Jn(e){return e.includes(`scale`)?1:0}function Yn(e,t){if(!e||e===`none`)return Jn(t);let n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u),r,i;if(n)r=qn,i=n;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=Hn,i=t}if(!i)return Jn(t);let a=r[t],o=i[1].split(`,`).map(Zn);return typeof a==`function`?a(o):o[a]}var Xn=(e,t)=>{let{transform:n=`none`}=getComputedStyle(e);return Yn(n,t)};function Zn(e){return parseFloat(e.trim())}var Qn=[`transformPerspective`,`x`,`y`,`z`,`translateX`,`translateY`,`translateZ`,`scale`,`scaleX`,`scaleY`,`rotate`,`rotateX`,`rotateY`,`rotateZ`,`skew`,`skewX`,`skewY`],$n=new Set(Qn),er=e=>e===lt||e===B,tr=new Set([`x`,`y`,`z`]),nr=Qn.filter(e=>!tr.has(e));function rr(e){let t=[];return nr.forEach(n=>{let r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith(`scale`)?1:0))}),t}var G={width:({x:e},{paddingLeft:t=`0`,paddingRight:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t=`0`,paddingBottom:n=`0`,boxSizing:r})=>{let i=e.max-e.min;return r===`border-box`?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Yn(t,`x`),y:(e,{transform:t})=>Yn(t,`y`)};G.translateX=G.x,G.translateY=G.y;var ir=new Set,ar=!1,or=!1,sr=!1;function cr(){if(or){let e=Array.from(ir).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),n=new Map;t.forEach(e=>{let t=rr(e);t.length&&(n.set(e,t),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=n.get(e);t&&t.forEach(([t,n])=>{e.getValue(t)?.set(n)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{e.suspendedScrollY!==void 0&&window.scrollTo(0,e.suspendedScrollY)})}or=!1,ar=!1,ir.forEach(e=>e.complete(sr)),ir.clear()}function lr(){ir.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(or=!0)})}function ur(){sr=!0,lr(),cr(),sr=!1}var dr=class{constructor(e,t,n,r,i,a=!1){this.state=`pending`,this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.state=`scheduled`,this.isAsync?(ir.add(this),ar||(ar=!0,P.read(lr),P.resolveKeyframes(cr))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;if(e[0]===null){let i=r?.get(),a=e[e.length-1];if(i!==void 0)e[0]=i;else if(n&&t){let r=n.readValue(t,a);r!=null&&(e[0]=r)}e[0]===void 0&&(e[0]=a),r&&i===void 0&&r.set(e[0])}zn(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state=`complete`,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),ir.delete(this)}cancel(){this.state===`scheduled`&&(ir.delete(this),this.state=`pending`)}resume(){this.state===`pending`&&this.scheduleResolve()}},fr=e=>e.startsWith(`--`);function pr(e,t,n){fr(t)?e.style.setProperty(t,n):e.style[t]=n}var mr={};function hr(e,t){let n=xe(e);return()=>mr[t]??n()}var gr=hr(()=>window.ScrollTimeline!==void 0,`scrollTimeline`),_r=hr(()=>{try{document.createElement(`div`).animate({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0},`linearEasing`),vr=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,yr={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,circIn:vr([0,.65,.55,1]),circOut:vr([.55,0,1,.45]),backIn:vr([.31,.01,.66,-.59]),backOut:vr([.33,1.53,.69,.99])};function br(e,t){if(e)return typeof e==`function`?_r()?cn(e,t):`ease-out`:Ge(e)?vr(e):Array.isArray(e)?e.map(e=>br(e,t)||yr.easeOut):yr[e]}function xr(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:o=`loop`,ease:s=`easeOut`,times:c}={},l=void 0){let u={[t]:n};c&&(u.offset=c);let d=br(s,i);Array.isArray(d)&&(u.easing=d),N.value&&nt.waapi++;let f={delay:r,duration:i,easing:Array.isArray(d)?`linear`:d,fill:`both`,iterations:a+1,direction:o===`reverse`?`alternate`:`normal`};l&&(f.pseudoElement=l);let p=e.animate(u,f);return N.value&&p.finished.finally(()=>{nt.waapi--}),p}function Sr(e){return typeof e==`function`&&`applyToOptions`in e}function Cr({type:e,...t}){return Sr(e)&&_r()?e.applyToOptions(t):(t.duration??=300,t.ease??=`easeOut`,t)}var wr=class extends In{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;let{element:t,name:n,keyframes:r,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:o,onComplete:s}=e;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=e,e.type;let c=Cr(e);this.animation=xr(t,n,r,c,i),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){let e=Nn(r,this.options,o,this.speed);this.updateMotionValue&&this.updateMotionValue(e),pr(t,n,e),this.animation.cancel()}s?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state===`finished`&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;e===`idle`||e===`finished`||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){let e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){let e=this.animation.effect?.getComputedTiming?.().duration||0;return M(Number(e))}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+M(e)}get time(){return M(Number(this.animation.currentTime)||0)}set time(e){let t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=j(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime===null?this.animation.playState:`finished`}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:n,observe:r}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:`linear`}),this.animation.onfinish=null,e&&gr()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),n&&(this.animation.rangeEnd=n),A):r(this)}},Tr={anticipate:Le,backInOut:Ie,circInOut:Be};function Er(e){return e in Tr}function Dr(e){typeof e.ease==`string`&&Er(e.ease)&&(e.ease=Tr[e.ease])}var Or=10,kr=class extends wr{constructor(e){Dr(e),Fn(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:n,onComplete:r,element:i,...a}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}let o=new Rn({...a,autoplay:!1}),s=Math.max(Or,L.now()-this.startTime),c=D(0,Or,s-Or),l=o.sample(s).value,{name:u}=this.options;i&&u&&pr(i,u,l),t.setWithVelocity(o.sample(Math.max(0,s-c)).value,l,c),o.stop()}},Ar=(e,t)=>t===`zIndex`?!1:!!(typeof e==`number`||Array.isArray(e)||typeof e==`string`&&(H.test(e)||e===`0`)&&!e.startsWith(`url(`));function jr(e){let t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function Mr(e,t,n,r){let i=e[0];if(i===null)return!1;if(t===`display`||t===`visibility`)return!0;let a=e[e.length-1],o=Ar(i,t),s=Ar(a,t);return`${t}${i}${a}${o?a:i}`,!o||!s?!1:jr(e)||(n===`spring`||Sr(n))&&r}function Nr(e){e.duration=0,e.type=`keyframes`}var Pr=new Set([`opacity`,`clipPath`,`filter`,`transform`]),Fr=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function Ir(e){for(let t=0;t<e.length;t++)if(typeof e[t]==`string`&&Fr.test(e[t]))return!0;return!1}var Lr=new Set([`color`,`backgroundColor`,`outlineColor`,`fill`,`stroke`,`borderColor`,`borderTopColor`,`borderRightColor`,`borderBottomColor`,`borderLeftColor`]),Rr=xe(()=>Object.hasOwnProperty.call(Element.prototype,`animate`));function zr(e){let{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o,keyframes:s}=e;if(!(t?.owner?.current instanceof HTMLElement))return!1;let{onUpdate:c,transformTemplate:l}=t.owner.getProps();return Rr()&&n&&(Pr.has(n)||Lr.has(n)&&Ir(s))&&(n!==`transform`||!l)&&!c&&!r&&i!==`mirror`&&a!==0&&o!==`inertia`}var Br=40,Vr=class extends In{constructor({autoplay:e=!0,delay:t=0,type:n=`keyframes`,repeat:r=0,repeatDelay:i=0,repeatType:a=`loop`,keyframes:o,name:s,motionValue:c,element:l,...u}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=L.now();let d={autoplay:e,delay:t,type:n,repeat:r,repeatDelay:i,repeatType:a,name:s,motionValue:c,element:l,...u};this.keyframeResolver=new(l?.KeyframeResolver||dr)(o,(e,t,n)=>this.onKeyframesResolved(e,t,d,!n),s,c,l),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,n,r){this.keyframeResolver=void 0;let{name:i,type:a,velocity:o,delay:s,isHandoff:c,onUpdate:l}=n;this.resolvedAt=L.now();let u=!0;Mr(e,i,a,o)||(u=!1,(O.instantAnimations||!s)&&l?.(Nn(e,n,t)),e[0]=e[e.length-1],Nr(n),n.repeat=0);let d={startTime:r?this.resolvedAt&&this.resolvedAt-this.createdAt>Br?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...n,keyframes:e},f=u&&!c&&zr(d),p=d.motionValue?.owner?.current,m;if(f)try{m=new kr({...d,element:p})}catch{m=new Rn(d)}else m=new Rn(d);m.finished.then(()=>{this.notifyFinished()}).catch(A),this.pendingTimeline&&=(this.stopTimeline=m.attachTimeline(this.pendingTimeline),void 0),this._animation=m}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),ur()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}};function Hr(e,t,n,r=0,i=1){let a=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),o=e.size,s=(o-1)*r;return typeof n==`function`?n(a,o):i===1?a*r:s-a*r}var Ur=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Wr(e){let t=Ur.exec(e);if(!t)return[,];let[,n,r,i]=t;return[`--${n??r}`,i]}function Gr(e,t,n=1){`${e}`;let[r,i]=Wr(e);if(!r)return;let a=window.getComputedStyle(t).getPropertyValue(r);if(a){let e=a.trim();return ye(e)?parseFloat(e):e}return ot(i)?Gr(i,t,n+1):i}var Kr={type:`spring`,stiffness:500,damping:25,restSpeed:10},qr=e=>({type:`spring`,stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Jr={type:`keyframes`,duration:.8},Yr={type:`keyframes`,ease:[.25,.1,.35,1],duration:.3},Xr=(e,{keyframes:t})=>t.length>2?Jr:$n.has(e)?e.startsWith(`scale`)?qr(t[1]):Kr:Yr;function Zr(e,t){if(e?.inherit&&t){let{inherit:n,...r}=e;return{...t,...r}}return e}function Qr(e,t){let n=e?.[t]??e?.default??e;return n===e?n:Zr(n,e)}var $r=new Set([`when`,`delay`,`delayChildren`,`staggerChildren`,`staggerDirection`,`repeat`,`repeatType`,`repeatDelay`,`from`,`elapsed`]);function ei(e){for(let t in e)if(!$r.has(t))return!0;return!1}var ti=(e,t,n,r={},i,a)=>o=>{let s=Qr(r,e)||{},c=s.delay||r.delay||0,{elapsed:l=0}=r;l-=j(c);let u={keyframes:Array.isArray(n)?n:[null,n],ease:`easeOut`,velocity:t.getVelocity(),...s,delay:-l,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};ei(s)||Object.assign(u,Xr(e,u)),u.duration&&=j(u.duration),u.repeatDelay&&=j(u.repeatDelay),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(Nr(u),u.delay===0&&(d=!0)),(O.instantAnimations||O.skipAnimations||i?.shouldSkipAnimations)&&(d=!0,Nr(u),u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&t.get()!==void 0){let e=Nn(u.keyframes,s);if(e!==void 0){P.update(()=>{u.onUpdate(e),u.onComplete()});return}}return s.isSync?new Rn(u):new Vr(u)};function ni(e){let t=[{},{}];return e?.values.forEach((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()}),t}function ri(e,t,n,r){if(typeof t==`function`){let[i,a]=ni(r);t=t(n===void 0?e.custom:n,i,a)}if(typeof t==`string`&&(t=e.variants&&e.variants[t]),typeof t==`function`){let[i,a]=ni(r);t=t(n===void 0?e.custom:n,i,a)}return t}function ii(e,t,n){let r=e.getProps();return ri(r,t,n===void 0?r.custom:n,e)}var ai=new Set([`width`,`height`,`top`,`left`,`right`,`bottom`,...Qn]),oi=30,si=e=>!isNaN(parseFloat(e)),ci={current:void 0},li=class{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=L.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=L.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=si(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on(`change`,e)}on(e,t){this.events[e]||(this.events[e]=new Te);let n=this.events[e].add(t);return e===`change`?()=>{n(),P.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||=new Set,this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return ci.current&&ci.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){let e=L.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>oi)return 0;let t=Math.min(this.updatedAt-this.prevUpdatedAt,oi);return Ee(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}};function ui(e,t){return new li(e,t)}var di=e=>Array.isArray(e);function fi(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,ui(n))}function pi(e){return di(e)?e[e.length-1]||0:e}function mi(e,t){let{transitionEnd:n={},transition:r={},...i}=ii(e,t)||{};i={...i,...n};for(let t in i)fi(e,t,pi(i[t]))}var K=e=>!!(e&&e.getVelocity);function hi(e){return!!(K(e)&&e.add)}function gi(e,t){let n=e.getValue(`willChange`);if(hi(n))return n.add(t);if(!n&&O.WillChange){let n=new O.WillChange(`auto`);e.addValue(`willChange`,n),n.add(t)}}function _i(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}var vi=`data-`+_i(`framerAppearId`);function yi(e){return e.props[vi]}function bi({protectedKeys:e,needsAnimating:t},n){let r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function xi(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a,transitionEnd:o,...s}=t,c=e.getDefaultTransition();a=a?Zr(a,c):c;let l=a?.reduceMotion;r&&(a=r);let u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(let t in s){let r=e.getValue(t,e.latestValues[t]??null),i=s[t];if(i===void 0||d&&bi(d,t))continue;let o={delay:n,...Qr(a||{},t)},c=r.get();if(c!==void 0&&!r.isAnimating()&&!Array.isArray(i)&&i===c&&!o.velocity){P.update(()=>r.set(i));continue}let f=!1;if(window.MotionHandoffAnimation){let n=yi(e);if(n){let e=window.MotionHandoffAnimation(n,t,P);e!==null&&(o.startTime=e,f=!0)}}gi(e,t);let p=l??e.shouldReduceMotion;r.start(ti(t,r,i,p&&ai.has(t)?{type:!1}:o,e,f));let m=r.animation;m&&u.push(m)}if(o){let t=()=>P.update(()=>{o&&mi(e,o)});u.length?Promise.all(u).then(t):t()}return u}function Si(e,t,n={}){let r=ii(e,t,n.type===`exit`?e.presenceContext?.custom:void 0),{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);let a=r?()=>Promise.all(xi(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(r=0)=>{let{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return Ci(e,t,r,a,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){let[e,t]=s===`beforeChildren`?[a,o]:[o,a];return e().then(()=>t())}else return Promise.all([a(),o(n.delay)])}function Ci(e,t,n=0,r=0,i=0,a=1,o){let s=[];for(let c of e.variantChildren)c.notify(`AnimationStart`,t),s.push(Si(c,t,{...o,delay:n+(typeof r==`function`?0:r)+Hr(e.variantChildren,c,r,i,a)}).then(()=>c.notify(`AnimationComplete`,t)));return Promise.all(s)}function wi(e,t,n={}){e.notify(`AnimationStart`,t);let r;if(Array.isArray(t)){let i=t.map(t=>Si(e,t,n));r=Promise.all(i)}else if(typeof t==`string`)r=Si(e,t,n);else{let i=typeof t==`function`?ii(e,t,n.custom):t;r=Promise.all(xi(e,i,n))}return r.then(()=>{e.notify(`AnimationComplete`,t)})}var Ti={test:e=>e===`auto`,parse:e=>e},Ei=e=>t=>t.test(e),Di=[lt,B,z,R,Tt,wt,Ti],Oi=e=>Di.find(Ei(e));function ki(e){return typeof e==`number`?e===0:e===null?!0:e===`none`||e===`0`||be(e)}var Ai=new Set([`brightness`,`contrast`,`saturate`,`opacity`]);function ji(e){let[t,n]=e.slice(0,-1).split(`(`);if(t===`drop-shadow`)return e;let[r]=n.match(pt)||[];if(!r)return e;let i=n.replace(r,``),a=Ai.has(t)?1:0;return r!==n&&(a*=100),t+`(`+a+i+`)`}var Mi=/\b([a-z-]*)\(.*?\)/gu,Ni={...H,getAnimatableNone:e=>{let t=e.match(Mi);return t?t.map(ji).join(` `):e}},Pi={...H,getAnimatableNone:e=>{let t=H.parse(e);return H.createTransformer(e)(t.map(e=>typeof e==`number`?0:typeof e==`object`?{...e,alpha:1}:e))}},Fi={...lt,transform:Math.round},Ii={borderWidth:B,borderTopWidth:B,borderRightWidth:B,borderBottomWidth:B,borderLeftWidth:B,borderRadius:B,borderTopLeftRadius:B,borderTopRightRadius:B,borderBottomRightRadius:B,borderBottomLeftRadius:B,width:B,maxWidth:B,height:B,maxHeight:B,top:B,right:B,bottom:B,left:B,inset:B,insetBlock:B,insetBlockStart:B,insetBlockEnd:B,insetInline:B,insetInlineStart:B,insetInlineEnd:B,padding:B,paddingTop:B,paddingRight:B,paddingBottom:B,paddingLeft:B,paddingBlock:B,paddingBlockStart:B,paddingBlockEnd:B,paddingInline:B,paddingInlineStart:B,paddingInlineEnd:B,margin:B,marginTop:B,marginRight:B,marginBottom:B,marginLeft:B,marginBlock:B,marginBlockStart:B,marginBlockEnd:B,marginInline:B,marginInlineStart:B,marginInlineEnd:B,fontSize:B,backgroundPositionX:B,backgroundPositionY:B,rotate:R,rotateX:R,rotateY:R,rotateZ:R,scale:dt,scaleX:dt,scaleY:dt,scaleZ:dt,skew:R,skewX:R,skewY:R,distance:B,translateX:B,translateY:B,translateZ:B,x:B,y:B,z:B,perspective:B,transformPerspective:B,opacity:ut,originX:Et,originY:Et,originZ:B,zIndex:Fi,fillOpacity:ut,strokeOpacity:ut,numOctaves:Fi},Li={...Ii,color:V,backgroundColor:V,outlineColor:V,fill:V,stroke:V,borderColor:V,borderTopColor:V,borderRightColor:V,borderBottomColor:V,borderLeftColor:V,filter:Ni,WebkitFilter:Ni,mask:Pi,WebkitMask:Pi},Ri=e=>Li[e],zi=new Set([Ni,Pi]);function Bi(e,t){let n=Ri(e);return zi.has(n)||(n=H),n.getAnimatableNone?n.getAnimatableNone(t):void 0}var Vi=new Set([`auto`,`none`,`0`]);function Hi(e,t,n){let r=0,i;for(;r<e.length&&!i;){let t=e[r];typeof t==`string`&&!Vi.has(t)&&It(t).values.length&&(i=e[r]),r++}if(i&&n)for(let r of t)e[r]=Bi(n,i)}var Ui=class extends dr{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let n=0;n<e.length;n++){let r=e[n];if(typeof r==`string`&&(r=r.trim(),ot(r))){let i=Gr(r,t.current);i!==void 0&&(e[n]=i),n===e.length-1&&(this.finalKeyframe=r)}}if(this.resolveNoneKeyframes(),!ai.has(n)||e.length!==2)return;let[r,i]=e,a=Oi(r),o=Oi(i);if(ct(r)!==ct(i)&&G[n]){this.needsMeasurement=!0;return}if(a!==o)if(er(a)&&er(o))for(let t=0;t<e.length;t++){let n=e[t];typeof n==`string`&&(e[t]=parseFloat(n))}else G[n]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,n=[];for(let t=0;t<e.length;t++)(e[t]===null||ki(e[t]))&&n.push(t);n.length&&Hi(e,n,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;n===`height`&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=G[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let r=t[t.length-1];r!==void 0&&e.getValue(n,r).jump(r,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;let r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);let i=n.length-1,a=n[i];n[i]=G[t](e.measureViewportBox(),window.getComputedStyle(e.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,n])=>{e.getValue(t).set(n)}),this.resolveNoneKeyframes()}};function Wi(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e==`string`){let r=document;t&&(r=t.current);let i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(e=>e!=null)}var Gi=(e,t)=>t&&typeof e==`number`?t.transform(e):e;function Ki(e){return k(e)&&`offsetHeight`in e&&!(`ownerSVGElement`in e)}var{schedule:qi,cancel:Ji}=Qe(queueMicrotask,!1),q={x:!1,y:!1};function Yi(){return q.x||q.y}function Xi(e){return e===`x`||e===`y`?q[e]?null:(q[e]=!0,()=>{q[e]=!1}):q.x||q.y?null:(q.x=q.y=!0,()=>{q.x=q.y=!1})}function Zi(e,t){let n=Wi(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function Qi(e){return!(e.pointerType===`touch`||Yi())}function $i(e,t,n={}){let[r,i,a]=Zi(e,n);return r.forEach(e=>{let n=!1,r=!1,a,o=()=>{e.removeEventListener(`pointerleave`,u)},s=e=>{a&&=(a(e),void 0),o()},c=e=>{n=!1,window.removeEventListener(`pointerup`,c),window.removeEventListener(`pointercancel`,c),r&&(r=!1,s(e))},l=()=>{n=!0,window.addEventListener(`pointerup`,c,i),window.addEventListener(`pointercancel`,c,i)},u=e=>{if(e.pointerType!==`touch`){if(n){r=!0;return}s(e)}};e.addEventListener(`pointerenter`,n=>{if(!Qi(n))return;r=!1;let o=t(e,n);typeof o==`function`&&(a=o,e.addEventListener(`pointerleave`,u,i))},i),e.addEventListener(`pointerdown`,l,i)}),a}var ea=(e,t)=>t?e===t?!0:ea(e,t.parentElement):!1,ta=e=>e.pointerType===`mouse`?typeof e.button!=`number`||e.button<=0:e.isPrimary!==!1,na=new Set([`BUTTON`,`INPUT`,`SELECT`,`TEXTAREA`,`A`]);function ra(e){return na.has(e.tagName)||e.isContentEditable===!0}var ia=new Set([`INPUT`,`SELECT`,`TEXTAREA`]);function aa(e){return ia.has(e.tagName)||e.isContentEditable===!0}var oa=new WeakSet;function sa(e){return t=>{t.key===`Enter`&&e(t)}}function ca(e,t){e.dispatchEvent(new PointerEvent(`pointer`+t,{isPrimary:!0,bubbles:!0}))}var la=(e,t)=>{let n=e.currentTarget;if(!n)return;let r=sa(()=>{if(oa.has(n))return;ca(n,`down`);let e=sa(()=>{ca(n,`up`)});n.addEventListener(`keyup`,e,t),n.addEventListener(`blur`,()=>ca(n,`cancel`),t)});n.addEventListener(`keydown`,r,t),n.addEventListener(`blur`,()=>n.removeEventListener(`keydown`,r),t)};function ua(e){return ta(e)&&!Yi()}var da=new WeakSet;function fa(e,t,n={}){let[r,i,a]=Zi(e,n),o=e=>{let r=e.currentTarget;if(!ua(e)||da.has(e))return;oa.add(r),n.stopPropagation&&da.add(e);let a=t(r,e),o=(e,t)=>{window.removeEventListener(`pointerup`,s),window.removeEventListener(`pointercancel`,c),oa.has(r)&&oa.delete(r),ua(e)&&typeof a==`function`&&a(e,{success:t})},s=e=>{o(e,r===window||r===document||n.useGlobalTarget||ea(r,e.target))},c=e=>{o(e,!1)};window.addEventListener(`pointerup`,s,i),window.addEventListener(`pointercancel`,c,i)};return r.forEach(e=>{(n.useGlobalTarget?window:e).addEventListener(`pointerdown`,o,i),Ki(e)&&(e.addEventListener(`focus`,e=>la(e,i)),!ra(e)&&!e.hasAttribute(`tabindex`)&&(e.tabIndex=0))}),a}function pa(e){return k(e)&&`ownerSVGElement`in e}var ma=new WeakMap,ha,ga=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+`Size`]:pa(r)&&`getBBox`in r?r.getBBox()[t]:r[n],_a=ga(`inline`,`width`,`offsetWidth`),va=ga(`block`,`height`,`offsetHeight`);function ya({target:e,borderBoxSize:t}){ma.get(e)?.forEach(n=>{n(e,{get width(){return _a(e,t)},get height(){return va(e,t)}})})}function ba(e){e.forEach(ya)}function xa(){typeof ResizeObserver>`u`||(ha=new ResizeObserver(ba))}function Sa(e,t){ha||xa();let n=Wi(e);return n.forEach(e=>{let n=ma.get(e);n||(n=new Set,ma.set(e,n)),n.add(t),ha?.observe(e)}),()=>{n.forEach(e=>{let n=ma.get(e);n?.delete(t),n?.size||ha?.unobserve(e)})}}var Ca=new Set,wa;function Ta(){wa=()=>{let e={get width(){return window.innerWidth},get height(){return window.innerHeight}};Ca.forEach(t=>t(e))},window.addEventListener(`resize`,wa)}function Ea(e){return Ca.add(e),wa||Ta(),()=>{Ca.delete(e),!Ca.size&&typeof wa==`function`&&(window.removeEventListener(`resize`,wa),wa=void 0)}}function Da(e,t){return typeof e==`function`?Ea(e):Sa(e,t)}function Oa(e){return pa(e)&&e.tagName===`svg`}var ka=[...Di,V,H],Aa=e=>ka.find(Ei(e)),ja=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ma=()=>({x:ja(),y:ja()}),Na=()=>({min:0,max:0}),J=()=>({x:Na(),y:Na()}),Pa=new WeakMap;function Fa(e){return typeof e==`object`&&!!e&&typeof e.start==`function`}function Ia(e){return typeof e==`string`||Array.isArray(e)}var La=[`animate`,`whileInView`,`whileFocus`,`whileHover`,`whileTap`,`whileDrag`,`exit`],Ra=[`initial`,...La];function za(e){return Fa(e.animate)||Ra.some(t=>Ia(e[t]))}function Ba(e){return!!(za(e)||e.variants)}function Va(e,t,n){for(let r in t){let i=t[r],a=n[r];if(K(i))e.addValue(r,i);else if(K(a))e.addValue(r,ui(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){let t=e.getValue(r);t.liveStyle===!0?t.jump(i):t.hasAnimated||t.set(i)}else{let t=e.getStaticValue(r);e.addValue(r,ui(t===void 0?i:t,{owner:e}))}}for(let r in n)t[r]===void 0&&e.removeValue(r);return t}var Ha={current:null},Ua={current:!1},Wa=typeof window<`u`;function Ga(){if(Ua.current=!0,Wa)if(window.matchMedia){let e=window.matchMedia(`(prefers-reduced-motion)`),t=()=>Ha.current=e.matches;e.addEventListener(`change`,t),t()}else Ha.current=!1}var Ka=[`AnimationStart`,`AnimationComplete`,`Update`,`BeforeLayoutMeasure`,`LayoutMeasure`,`LayoutAnimationStart`,`LayoutAnimationComplete`],qa={};function Ja(e){qa=e}function Ya(){return qa}var Xa=class{scrapeMotionValuesFromProps(e,t,n){return{}}constructor({parent:e,props:t,presenceContext:n,reducedMotionConfig:r,skipAnimations:i,blockInitialAnimation:a,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=dr,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify(`Update`,this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=L.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,P.render(this.render,!1,!0))};let{latestValues:c,renderState:l}=o;this.latestValues=c,this.baseTarget={...c},this.initialValues=t.initial?{...c}:{},this.renderState=l,this.parent=e,this.props=t,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=i,this.options=s,this.blockInitialAnimation=!!a,this.isControllingVariants=za(t),this.isVariantNode=Ba(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);let{willChange:u,...d}=this.scrapeMotionValuesFromProps(t,{},this);for(let e in d){let t=d[e];c[e]!==void 0&&K(t)&&t.set(c[e])}}mount(e){if(this.hasBeenMounted)for(let e in this.initialValues)this.values.get(e)?.jump(this.initialValues[e]),this.latestValues[e]=this.initialValues[e];this.current=e,Pa.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),this.reducedMotionConfig===`never`?this.shouldReduceMotion=!1:this.reducedMotionConfig===`always`?this.shouldReduceMotion=!0:(Ua.current||Ga(),this.shouldReduceMotion=Ha.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),F(this.notifyUpdate),F(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(let e in this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??=new Set,this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&Pr.has(e)&&this.current instanceof HTMLElement){let{factory:n,keyframes:r,times:i,ease:a,duration:o}=t.accelerate,s=new wr({element:this.current,name:e,keyframes:r,times:i,ease:a,duration:j(o)}),c=n(s);this.valueSubscriptions.set(e,()=>{c(),s.cancel()});return}let n=$n.has(e);n&&this.onBindTransform&&this.onBindTransform();let r=t.on(`change`,t=>{this.latestValues[e]=t,this.props.onUpdate&&P.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()}),i;typeof window<`u`&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{r(),i&&i(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e=`animation`;for(e in qa){let t=qa[e];if(!t)continue;let{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):J()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<Ka.length;t++){let n=Ka[t];this.propEventSubscriptions[n]&&(this.propEventSubscriptions[n](),delete this.propEventSubscriptions[n]);let r=e[`on`+n];r&&(this.propEventSubscriptions[n]=this.on(n,r))}this.prevMotionValues=Va(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&t!==void 0&&(n=ui(t===null?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return n!=null&&(typeof n==`string`&&(ye(n)||be(n))?n=parseFloat(n):!Aa(n)&&H.test(t)&&(n=Bi(e,t)),this.setBaseTarget(e,K(n)?n.get():n)),K(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let{initial:t}=this.props,n;if(typeof t==`string`||typeof t==`object`){let r=ri(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&n!==void 0)return n;let r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!K(r)?r:this.initialValues[e]!==void 0&&n===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Te),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){qi.render(this.render)}},Za=class extends Xa{constructor(){super(...arguments),this.KeyframeResolver=Ui}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){let n=e.style;return n?n[t]:void 0}removeValueFromRenderState(e,{vars:t,style:n}){delete t[e],delete n[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;K(e)&&(this.childSubscription=e.on(`change`,e=>{this.current&&(this.current.textContent=`${e}`)}))}},Qa=class{constructor(e){this.isMounted=!1,this.node=e}update(){}};function $a({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function eo({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function to(e,t){if(!t)return e;let n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function no(e){return e===void 0||e===1}function ro({scale:e,scaleX:t,scaleY:n}){return!no(e)||!no(t)||!no(n)}function io(e){return ro(e)||ao(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function ao(e){return oo(e.x)||oo(e.y)}function oo(e){return e&&e!==`0%`}function so(e,t,n){return n+t*(e-n)}function co(e,t,n,r,i){return i!==void 0&&(e=so(e,i,r)),so(e,n,r)+t}function lo(e,t=0,n=1,r,i){e.min=co(e.min,t,n,r,i),e.max=co(e.max,t,n,r,i)}function uo(e,{x:t,y:n}){lo(e.x,t.translate,t.scale,t.originPoint),lo(e.y,n.translate,n.scale,n.originPoint)}var fo=.999999999999,po=1.0000000000001;function mo(e,t,n,r=!1){let i=n.length;if(!i)return;t.x=t.y=1;let a,o;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;let{visualElement:i}=a.options;i&&i.props.style&&i.props.style.display===`contents`||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(Y(e.x,-a.scroll.offset.x),Y(e.y,-a.scroll.offset.y)),o&&(t.x*=o.x.scale,t.y*=o.y.scale,uo(e,o)),r&&io(a.latestValues)&&_o(e,a.latestValues,a.layout?.layoutBox))}t.x<po&&t.x>fo&&(t.x=1),t.y<po&&t.y>fo&&(t.y=1)}function Y(e,t){e.min+=t,e.max+=t}function ho(e,t,n,r,i=.5){lo(e,t,n,U(e.min,e.max,i),r)}function go(e,t){return typeof e==`string`?parseFloat(e)/100*(t.max-t.min):e}function _o(e,t,n){let r=n??e;ho(e.x,go(t.x,r.x),t.scaleX,t.scale,t.originX),ho(e.y,go(t.y,r.y),t.scaleY,t.scale,t.originY)}function vo(e,t){return $a(to(e.getBoundingClientRect(),t))}function yo(e,t,n){let r=vo(e,n),{scroll:i}=t;return i&&(Y(r.x,i.offset.x),Y(r.y,i.offset.y)),r}var bo={x:`translateX`,y:`translateY`,z:`translateZ`,transformPerspective:`perspective`},xo=Qn.length;function So(e,t,n){let r=``,i=!0;for(let a=0;a<xo;a++){let o=Qn[a],s=e[o];if(s===void 0)continue;let c=!0;if(typeof s==`number`)c=s===(o.startsWith(`scale`)?1:0);else{let e=parseFloat(s);c=o.startsWith(`scale`)?e===1:e===0}if(!c||n){let e=Gi(s,Ii[o]);if(!c){i=!1;let t=bo[o]||o;r+=`${t}(${e}) `}n&&(t[o]=e)}}return r=r.trim(),n?r=n(t,i?``:r):i&&(r=`none`),r}function Co(e,t,n){let{style:r,vars:i,transformOrigin:a}=e,o=!1,s=!1;for(let e in t){let n=t[e];if($n.has(e)){o=!0;continue}else if(it(e)){i[e]=n;continue}else{let t=Gi(n,Ii[e]);e.startsWith(`origin`)?(s=!0,a[e]=t):r[e]=t}}if(t.transform||(o||n?r.transform=So(t,e.transform,n):r.transform&&=`none`),s){let{originX:e=`50%`,originY:t=`50%`,originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}function wo(e,{style:t,vars:n},r,i){let a=e.style,o;for(o in t)a[o]=t[o];for(o in i?.applyProjectionStyles(a,r),n)a.setProperty(o,n[o])}function To(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}var Eo={correct:(e,t)=>{if(!t.target)return e;if(typeof e==`string`)if(B.test(e))e=parseFloat(e);else return e;return`${To(e,t.target.x)}% ${To(e,t.target.y)}%`}},Do={correct:(e,{treeScale:t,projectionDelta:n})=>{let r=e,i=H.parse(e);if(i.length>5)return r;let a=H.createTransformer(e),o=typeof i[0]==`number`?0:1,s=n.x.scale*t.x,c=n.y.scale*t.y;i[0+o]/=s,i[1+o]/=c;let l=U(s,c,.5);return typeof i[2+o]==`number`&&(i[2+o]/=l),typeof i[3+o]==`number`&&(i[3+o]/=l),a(i)}},Oo={borderRadius:{...Eo,applyTo:[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`]},borderTopLeftRadius:Eo,borderTopRightRadius:Eo,borderBottomLeftRadius:Eo,borderBottomRightRadius:Eo,boxShadow:Do};function ko(e,{layout:t,layoutId:n}){return $n.has(e)||e.startsWith(`origin`)||(t||n!==void 0)&&(!!Oo[e]||e===`opacity`)}function Ao(e,t,n){let r=e.style,i=t?.style,a={};if(!r)return a;for(let t in r)(K(r[t])||i&&K(i[t])||ko(t,e)||n?.getValue(t)?.liveStyle!==void 0)&&(a[t]=r[t]);return a}function jo(e){return window.getComputedStyle(e)}var Mo=class extends Za{constructor(){super(...arguments),this.type=`html`,this.renderInstance=wo}readValueFromInstance(e,t){if($n.has(t))return this.projection?.isProjecting?Jn(t):Xn(e,t);{let n=jo(e),r=(it(t)?n.getPropertyValue(t):n[t])||0;return typeof r==`string`?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:t}){return vo(e,t)}build(e,t,n){Co(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return Ao(e,t,n)}},No={offset:`stroke-dashoffset`,array:`stroke-dasharray`},Po={offset:`strokeDashoffset`,array:`strokeDasharray`};function Fo(e,t,n=1,r=0,i=!0){e.pathLength=1;let a=i?No:Po;e[a.offset]=`${-r}`,e[a.array]=`${t} ${n}`}var Io=[`offsetDistance`,`offsetPath`,`offsetRotate`,`offsetAnchor`];function Lo(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:o=0,...s},c,l,u){if(Co(e,s,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:d,style:f}=e;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??`50% 50%`,delete d.transformOrigin),f.transform&&(f.transformBox=u?.transformBox??`fill-box`,delete d.transformBox);for(let e of Io)d[e]!==void 0&&(f[e]=d[e],delete d[e]);t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&Fo(d,i,a,o,!1)}var Ro=new Set([`baseFrequency`,`diffuseConstant`,`kernelMatrix`,`kernelUnitLength`,`keySplines`,`keyTimes`,`limitingConeAngle`,`markerHeight`,`markerWidth`,`numOctaves`,`targetX`,`targetY`,`surfaceScale`,`specularConstant`,`specularExponent`,`stdDeviation`,`tableValues`,`viewBox`,`gradientTransform`,`pathLength`,`startOffset`,`textLength`,`lengthAdjust`]),zo=e=>typeof e==`string`&&e.toLowerCase()===`svg`;function Bo(e,t,n,r){wo(e,t,void 0,r);for(let n in t.attrs)e.setAttribute(Ro.has(n)?n:_i(n),t.attrs[n])}function Vo(e,t,n){let r=Ao(e,t,n);for(let n in e)if(K(e[n])||K(t[n])){let t=Qn.indexOf(n)===-1?n:`attr`+n.charAt(0).toUpperCase()+n.substring(1);r[t]=e[n]}return r}var Ho=class extends Za{constructor(){super(...arguments),this.type=`svg`,this.isSVGTag=!1,this.measureInstanceViewportBox=J}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if($n.has(t)){let e=Ri(t);return e&&e.default||0}return t=Ro.has(t)?t:_i(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return Vo(e,t,n)}build(e,t,n){Lo(e,t,this.isSVGTag,n.transformTemplate,n.style)}renderInstance(e,t,n,r){Bo(e,t,n,r)}mount(e){this.isSVGTag=zo(e.tagName),super.mount(e)}},Uo=Ra.length;function Wo(e){if(!e)return;if(!e.isControllingVariants){let t=e.parent&&Wo(e.parent)||{};return e.props.initial!==void 0&&(t.initial=e.props.initial),t}let t={};for(let n=0;n<Uo;n++){let r=Ra[n],i=e.props[r];(Ia(i)||i===!1)&&(t[r]=i)}return t}function Go(e,t){if(!Array.isArray(t))return!1;let n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}var Ko=[...La].reverse(),qo=La.length;function Jo(e){return t=>Promise.all(t.map(({animation:t,options:n})=>wi(e,t,n)))}function Yo(e){let t=Jo(e),n=Qo(),r=!0,i=!1,a=t=>(n,r)=>{let i=ii(e,r,t===`exit`?e.presenceContext?.custom:void 0);if(i){let{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function o(n){t=n(e)}function s(o){let{props:s}=e,c=Wo(e.parent)||{},l=[],u=new Set,d={},f=1/0;for(let t=0;t<qo;t++){let p=Ko[t],m=n[p],h=s[p]===void 0?c[p]:s[p],g=Ia(h),_=p===o?m.isActive:null;_===!1&&(f=t);let v=h===c[p]&&h!==s[p]&&g;if(v&&(r||i)&&e.manuallyAnimateOnMount&&(v=!1),m.protectedKeys={...d},!m.isActive&&_===null||!h&&!m.prevProp||Fa(h)||typeof h==`boolean`)continue;if(p===`exit`&&m.isActive&&_!==!0){m.prevResolvedValues&&(d={...d,...m.prevResolvedValues});continue}let y=Xo(m.prevProp,h),b=y||p===o&&m.isActive&&!v&&g||t>f&&g,x=!1,S=Array.isArray(h)?h:[h],C=S.reduce(a(p),{});_===!1&&(C={});let{prevResolvedValues:ee={}}=m,te={...ee,...C},w=t=>{b=!0,u.has(t)&&(x=!0,u.delete(t)),m.needsAnimating[t]=!0;let n=e.getValue(t);n&&(n.liveStyle=!1)};for(let e in te){let t=C[e],n=ee[e];if(d.hasOwnProperty(e))continue;let r=!1;r=di(t)&&di(n)?!Go(t,n):t!==n,r?t==null?u.add(e):w(e):t!==void 0&&u.has(e)?w(e):m.protectedKeys[e]=!0}m.prevProp=h,m.prevResolvedValues=C,m.isActive&&(d={...d,...C}),(r||i)&&e.blockInitialAnimation&&(b=!1);let ne=v&&y;b&&(!ne||x)&&l.push(...S.map(t=>{let n={type:p};if(typeof t==`string`&&(r||i)&&!ne&&e.manuallyAnimateOnMount&&e.parent){let{parent:r}=e,i=ii(r,t);if(r.enteringChildren&&i){let{delayChildren:t}=i.transition||{};n.delay=Hr(r.enteringChildren,e,t)}}return{animation:t,options:n}}))}if(u.size){let t={};if(typeof s.initial!=`boolean`){let n=ii(e,Array.isArray(s.initial)?s.initial[0]:s.initial);n&&n.transition&&(t.transition=n.transition)}u.forEach(n=>{let r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null}),l.push({animation:t})}let p=!!l.length;return r&&(s.initial===!1||s.initial===s.animate)&&!e.manuallyAnimateOnMount&&(p=!1),r=!1,i=!1,p?t(l):Promise.resolve()}function c(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,r)),n[t].isActive=r;let i=s(t);for(let e in n)n[e].protectedKeys={};return i}return{animateChanges:s,setActive:c,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Qo(),i=!0}}}function Xo(e,t){return typeof t==`string`?t!==e:Array.isArray(t)?!Go(t,e):!1}function Zo(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Qo(){return{animate:Zo(!0),whileInView:Zo(),whileHover:Zo(),whileTap:Zo(),whileDrag:Zo(),whileFocus:Zo(),exit:Zo()}}function $o(e,t){e.min=t.min,e.max=t.max}function X(e,t){$o(e.x,t.x),$o(e.y,t.y)}function es(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}var ts=1e-4,ns=1-ts,rs=1+ts,is=.01,as=0-is,os=0+is;function Z(e){return e.max-e.min}function ss(e,t,n){return Math.abs(e-t)<=n}function cs(e,t,n,r=.5){e.origin=r,e.originPoint=U(t.min,t.max,e.origin),e.scale=Z(n)/Z(t),e.translate=U(n.min,n.max,e.origin)-e.originPoint,(e.scale>=ns&&e.scale<=rs||isNaN(e.scale))&&(e.scale=1),(e.translate>=as&&e.translate<=os||isNaN(e.translate))&&(e.translate=0)}function ls(e,t,n,r){cs(e.x,t.x,n.x,r?r.originX:void 0),cs(e.y,t.y,n.y,r?r.originY:void 0)}function us(e,t,n,r=0){e.min=(r?U(n.min,n.max,r):n.min)+t.min,e.max=e.min+Z(t)}function ds(e,t,n,r){us(e.x,t.x,n.x,r?.x),us(e.y,t.y,n.y,r?.y)}function fs(e,t,n,r=0){let i=r?U(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+Z(t)}function ps(e,t,n,r){fs(e.x,t.x,n.x,r?.x),fs(e.y,t.y,n.y,r?.y)}function ms(e,t,n,r,i){return e-=t,e=so(e,1/n,r),i!==void 0&&(e=so(e,1/i,r)),e}function hs(e,t=0,n=1,r=.5,i,a=e,o=e){if(z.test(t)&&(t=parseFloat(t),t=U(o.min,o.max,t/100)-o.min),typeof t!=`number`)return;let s=U(a.min,a.max,r);e===a&&(s-=t),e.min=ms(e.min,t,n,s,i),e.max=ms(e.max,t,n,s,i)}function gs(e,t,[n,r,i],a,o){hs(e,t[n],t[r],t[i],t.scale,a,o)}var _s=[`x`,`scaleX`,`originX`],vs=[`y`,`scaleY`,`originY`];function ys(e,t,n,r){gs(e.x,t,_s,n?n.x:void 0,r?r.x:void 0),gs(e.y,t,vs,n?n.y:void 0,r?r.y:void 0)}function bs(e){return e.translate===0&&e.scale===1}function xs(e){return bs(e.x)&&bs(e.y)}function Ss(e,t){return e.min===t.min&&e.max===t.max}function Cs(e,t){return Ss(e.x,t.x)&&Ss(e.y,t.y)}function ws(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Ts(e,t){return ws(e.x,t.x)&&ws(e.y,t.y)}function Es(e){return Z(e.x)/Z(e.y)}function Ds(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function Q(e){return[e(`x`),e(`y`)]}function Os(e,t,n){let r=``,i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){let{transformPerspective:e,rotate:t,rotateX:i,rotateY:a,skewX:o,skewY:s}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotateX(${i}deg) `),a&&(r+=`rotateY(${a}deg) `),o&&(r+=`skewX(${o}deg) `),s&&(r+=`skewY(${s}deg) `)}let s=e.x.scale*t.x,c=e.y.scale*t.y;return(s!==1||c!==1)&&(r+=`scale(${s}, ${c})`),r||`none`}var ks=[`borderTopLeftRadius`,`borderTopRightRadius`,`borderBottomLeftRadius`,`borderBottomRightRadius`],As=ks.length,js=e=>typeof e==`string`?parseFloat(e):e,Ms=e=>typeof e==`number`||B.test(e);function Ns(e,t,n,r,i,a){i?(e.opacity=U(0,n.opacity??1,Fs(r)),e.opacityExit=U(t.opacity??1,0,Is(r))):a&&(e.opacity=U(t.opacity??1,n.opacity??1,r));for(let i=0;i<As;i++){let a=ks[i],o=Ps(t,a),s=Ps(n,a);o===void 0&&s===void 0||(o||=0,s||=0,o===0||s===0||Ms(o)===Ms(s)?(e[a]=Math.max(U(js(o),js(s),r),0),(z.test(s)||z.test(o))&&(e[a]+=`%`)):e[a]=s)}(t.rotate||n.rotate)&&(e.rotate=U(t.rotate||0,n.rotate||0,r))}function Ps(e,t){return e[t]===void 0?e.borderRadius:e[t]}var Fs=Ls(0,.5,ze),Is=Ls(.5,.95,A);function Ls(e,t,n){return r=>r<e?0:r>t?1:n(we(e,t,r))}function Rs(e,t,n){let r=K(e)?e:ui(e);return r.start(ti(``,r,t,n)),r.animation}function zs(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}var Bs=(e,t)=>e.depth-t.depth,Vs=class{constructor(){this.children=[],this.isDirty=!1}add(e){_e(this.children,e),this.isDirty=!0}remove(e){ve(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Bs),this.isDirty=!1,this.children.forEach(e)}};function Hs(e,t){let n=L.now(),r=({timestamp:i})=>{let a=i-n;a>=t&&(F(r),e(a-t))};return P.setup(r,!0),()=>F(r)}function Us(e){return K(e)?e.get():e}var Ws=class{constructor(){this.members=[]}add(e){_e(this.members,e);for(let t=this.members.length-1;t>=0;t--){let n=this.members[t];if(n===e||n===this.lead||n===this.prevLead)continue;let r=n.instance;(!r||r.isConnected===!1)&&!n.snapshot&&(ve(this.members,n),n.unmount())}e.scheduleRender()}remove(e){if(ve(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){for(let t=this.members.indexOf(e)-1;t>=0;t--){let e=this.members[t];if(e.isPresent!==!1&&e.instance?.isConnected!==!1)return this.promote(e),!0}return!1}promote(e,t){let n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.updateSnapshot(),e.scheduleRender();let{layoutDependency:r}=n.options,{layoutDependency:i}=e.options;(r===void 0||r!==i)&&(e.resumeFrom=n,t&&(n.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}},Gs={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Ks={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},qs=[``,`X`,`Y`,`Z`],Js=1e3,Ys=0;function Xs(e,t,n,r){let{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Zs(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;let{visualElement:t}=e.options;if(!t)return;let n=yi(t);if(window.MotionHasOptimisedAnimation(n,`transform`)){let{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,`transform`,P,!(t||r))}let{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Zs(r)}function Qs({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(e={},n=t?.()){this.id=Ys++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,N.value&&(Ks.nodes=Ks.calculatedTargetDeltas=Ks.calculatedProjections=0),this.nodes.forEach(tc),this.nodes.forEach(uc),this.nodes.forEach(dc),this.nodes.forEach(nc),N.addProjectionMetrics&&N.addProjectionMetrics(Ks)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new Vs)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new Te),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let n=this.eventHandlers.get(e);n&&n.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=pa(t)&&!Oa(t),this.instance=t;let{layoutId:n,layout:r,visualElement:i}=this.options;if(i&&!i.current&&i.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(r||n)&&(this.isLayoutDirty=!0),e){let n,r=0,i=()=>this.root.updateBlockedByResize=!1;P.read(()=>{r=window.innerWidth}),e(t,()=>{let e=window.innerWidth;e!==r&&(r=e,this.root.updateBlockedByResize=!0,n&&n(),n=Hs(i,250),Gs.hasAnimatedSinceResize&&(Gs.hasAnimatedSinceResize=!1,this.nodes.forEach(lc)))})}n&&this.root.registerSharedNode(n,this),this.options.animate!==!1&&i&&(n||r)&&this.addEventListener(`didUpdate`,({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:n,layout:r})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let a=this.options.transition||i.getDefaultTransition()||vc,{onLayoutAnimationStart:o,onLayoutAnimationComplete:s}=i.getProps(),c=!this.targetLayout||!Ts(this.targetLayout,r),l=!t&&n;if(this.options.layoutRoot||this.resumeFrom||l||t&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...Qr(a,`layout`),onPlay:o,onComplete:s};(i.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,l)}else t||lc(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=r})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),F(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(fc),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Zs(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,(typeof t.latestValues.x==`string`||typeof t.latestValues.y==`string`)&&(t.isLayoutDirty=!0),t.updateScroll(`snapshot`),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:n}=this.options;if(t===void 0&&!n)return;let r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,``):void 0,this.updateSnapshot(),e&&this.notifyListeners(`willUpdate`)}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){let e=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),e&&this.nodes.forEach(ac),this.nodes.forEach(ic);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(oc);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(sc),this.nodes.forEach(cc),this.nodes.forEach($s),this.nodes.forEach(ec)):this.nodes.forEach(oc),this.clearAllSnapshots();let e=L.now();I.delta=D(0,1e3/60,e-I.timestamp),I.timestamp=e,I.isProcessing=!0,$e.update.process(I),$e.preRender.process(I),$e.render.process(I),I.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,qi.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(rc),this.sharedNodes.forEach(pc)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,P.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){P.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Z(this.snapshot.measuredBox.x)&&!Z(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||=J(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners(`measure`,this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify(`LayoutMeasure`,this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e=`measure`){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=r(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!xs(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,``):void 0,a=r!==this.prevTransformTemplateValue;e&&this.instance&&(t||io(this.latestValues)||a)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){let t=this.measurePageBox(),n=this.removeElementScroll(t);return e&&(n=this.removeTransform(n)),Sc(n),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return J();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(wc))){let{scroll:e}=this.root;e&&(Y(t.x,e.offset.x),Y(t.y,e.offset.y))}return t}removeElementScroll(e){let t=J();if(X(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){let r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&X(t,e),Y(t.x,i.offset.x),Y(t.y,i.offset.y))}return t}applyTransform(e,t=!1,n){let r=n||J();X(r,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];!t&&n.options.layoutScroll&&n.scroll&&n!==n.root&&(Y(r.x,-n.scroll.offset.x),Y(r.y,-n.scroll.offset.y)),io(n.latestValues)&&_o(r,n.latestValues,n.layout?.layoutBox)}return io(this.latestValues)&&_o(r,this.latestValues,this.layout?.layoutBox),r}removeTransform(e){let t=J();X(t,e);for(let e=0;e<this.path.length;e++){let n=this.path[e];if(!io(n.latestValues))continue;let r;n.instance&&(ro(n.latestValues)&&n.updateSnapshot(),r=J(),X(r,n.measurePageBox())),ys(t,n.latestValues,n.snapshot?.layoutBox,r)}return io(this.latestValues)&&ys(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:e.crossfade===void 0?!0:e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==I.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||=t.isProjectionDirty,this.isTransformDirty||=t.isTransformDirty,this.isSharedProjectionDirty||=t.isSharedProjectionDirty;let n=!!this.resumingFrom||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:r,layoutId:i}=this.options;if(!this.layout||!(r||i))return;this.resolvedRelativeTargetAt=I.timestamp;let a=this.getClosestProjectingParent();a&&this.linkedParentVersion!==a.layoutVersion&&!a.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&a&&a.layout?this.createRelativeTarget(a,this.layout.layoutBox,a.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=J(),this.targetWithTransforms=J()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),ds(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):X(this.target,this.layout.layoutBox),uo(this.target,this.targetDelta)):X(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&a&&!!a.resumingFrom==!!this.resumingFrom&&!a.options.layoutScroll&&a.target&&this.animationProgress!==1?this.createRelativeTarget(a,this.target,a.target):this.relativeParent=this.relativeTarget=void 0),N.value&&Ks.calculatedTargetDeltas++)}getClosestProjectingParent(){if(!(!this.parent||ro(this.parent.latestValues)||ao(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,n){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=J(),this.relativeTargetOrigin=J(),ps(this.relativeTargetOrigin,t,n,this.options.layoutAnchor||void 0),X(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===I.timestamp&&(n=!1),n)return;let{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(r||i))return;X(this.layoutCorrected,this.layout.layoutBox);let a=this.treeScale.x,o=this.treeScale.y;mo(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=J());let{target:s}=e;if(!s){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(es(this.prevProjectionDelta.x,this.projectionDelta.x),es(this.prevProjectionDelta.y,this.projectionDelta.y)),ls(this.projectionDelta,this.layoutCorrected,s,this.latestValues),(this.treeScale.x!==a||this.treeScale.y!==o||!Ds(this.projectionDelta.x,this.prevProjectionDelta.x)||!Ds(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners(`projectionUpdate`,s)),N.value&&Ks.calculatedProjections++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ma(),this.projectionDelta=Ma(),this.projectionDeltaWithTransform=Ma()}setAnimationOrigin(e,t=!1){let n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},a=Ma();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let o=J(),s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),c=this.getStack(),l=!c||c.members.length<=1,u=!!(s&&!l&&this.options.crossfade===!0&&!this.path.some(_c));this.animationProgress=0;let d;this.mixTargetDelta=t=>{let n=t/1e3;mc(a.x,e.x,n),mc(a.y,e.y,n),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ps(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),gc(this.relativeTarget,this.relativeTargetOrigin,o,n),d&&Cs(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||=J(),X(d,this.relativeTarget)),s&&(this.animationValues=i,Ns(i,r,this.latestValues,n,u,l)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners(`animationStart`),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&=(F(this.pendingAnimation),void 0),this.pendingAnimation=P.update(()=>{Gs.hasAnimatedSinceResize=!0,nt.layout++,this.motionValue||=ui(0),this.motionValue.jump(0,!1),this.currentAnimation=Rs(this.motionValue,[0,1e3],{...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{nt.layout--},onComplete:()=>{nt.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners(`animationComplete`)}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Js),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(!(!t||!n||!r)){if(this!==e&&this.layout&&r&&Cc(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||J();let t=Z(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;let r=Z(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}X(t,n),_o(t,i),ls(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new Ws),this.sharedNodes.get(e).add(t);let n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return e?e.lead===this:!0}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:n}={}){let r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return e?e.relegate(this):!1}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;let r={};n.z&&Xs(`z`,e,r,this.animationValues);for(let t=0;t<qs.length;t++)Xs(`rotate${qs[t]}`,e,r,this.animationValues),Xs(`skew${qs[t]}`,e,r,this.animationValues);e.render();for(let t in r)e.setStaticValue(t,r[t]),this.animationValues&&(this.animationValues[t]=r[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility=`hidden`;return}let n=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility=``,e.opacity=``,e.pointerEvents=Us(t?.pointerEvents)||``,e.transform=n?n(this.latestValues,``):`none`;return}let r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){this.options.layoutId&&(e.opacity=this.latestValues.opacity===void 0?1:this.latestValues.opacity,e.pointerEvents=Us(t?.pointerEvents)||``),this.hasProjected&&!io(this.latestValues)&&(e.transform=n?n({},``):`none`,this.hasProjected=!1);return}e.visibility=``;let i=r.animationValues||r.latestValues;this.applyTransformsToTarget();let a=Os(this.projectionDeltaWithTransform,this.treeScale,i);n&&(a=n(i,a)),e.transform=a;let{x:o,y:s}=this.projectionDelta;e.transformOrigin=`${o.origin*100}% ${s.origin*100}% 0`,r.animationValues?e.opacity=r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:e.opacity=r===this?i.opacity===void 0?``:i.opacity:i.opacityExit===void 0?0:i.opacityExit;for(let t in Oo){if(i[t]===void 0)continue;let{correct:n,applyTo:o,isCSSVariable:s}=Oo[t],c=a===`none`?i[t]:n(i[t],r);if(o){let t=o.length;for(let n=0;n<t;n++)e[o[n]]=c}else s?this.options.visualElement.renderState.vars[t]=c:e[t]=c}this.options.layoutId&&(e.pointerEvents=r===this?Us(t?.pointerEvents)||``:`none`)}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(ic),this.root.sharedNodes.clear()}}}function $s(e){e.updateLayout()}function ec(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners(`didUpdate`)){let{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;if(i===`size`)Q(e=>{let r=a?t.measuredBox[e]:t.layoutBox[e],i=Z(r);r.min=n[e].min,r.max=r.min+i});else if(i===`x`||i===`y`){let e=i===`x`?`y`:`x`;$o(a?t.measuredBox[e]:t.layoutBox[e],n[e])}else Cc(i,t.layoutBox,n)&&Q(r=>{let i=a?t.measuredBox[r]:t.layoutBox[r],o=Z(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)});let o=Ma();ls(o,n,t.layoutBox);let s=Ma();a?ls(s,e.applyTransform(r,!0),t.measuredBox):ls(s,n,t.layoutBox);let c=!xs(o),l=!1;if(!e.resumeFrom){let r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){let{snapshot:i,layout:a}=r;if(i&&a){let o=e.options.layoutAnchor||void 0,s=J();ps(s,t.layoutBox,i.layoutBox,o);let c=J();ps(c,n,a.layoutBox,o),Ts(s,c)||(l=!0),r.options.layoutRoot&&(e.relativeTarget=c,e.relativeTargetOrigin=s,e.relativeParent=r)}}}e.notifyListeners(`didUpdate`,{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:l})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function tc(e){N.value&&Ks.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty),e.isTransformDirty||=e.parent.isTransformDirty)}function nc(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function rc(e){e.clearSnapshot()}function ic(e){e.clearMeasurements()}function ac(e){e.isLayoutDirty=!0,e.updateLayout()}function oc(e){e.isLayoutDirty=!1}function sc(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function cc(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify(`BeforeLayoutMeasure`),e.resetTransform()}function lc(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function uc(e){e.resolveTargetDelta()}function dc(e){e.calcProjection()}function fc(e){e.resetSkewAndRotation()}function pc(e){e.removeLeadSnapshot()}function mc(e,t,n){e.translate=U(t.translate,0,n),e.scale=U(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function hc(e,t,n,r){e.min=U(t.min,n.min,r),e.max=U(t.max,n.max,r)}function gc(e,t,n,r){hc(e.x,t.x,n.x,r),hc(e.y,t.y,n.y,r)}function _c(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}var vc={duration:.45,ease:[.4,0,.1,1]},yc=e=>typeof navigator<`u`&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),bc=yc(`applewebkit/`)&&!yc(`chrome/`)?Math.round:A;function xc(e){e.min=bc(e.min),e.max=bc(e.max)}function Sc(e){xc(e.x),xc(e.y)}function Cc(e,t,n){return e===`position`||e===`preserve-aspect`&&!ss(Es(t),Es(n),.2)}function wc(e){return e!==e.root&&e.scroll?.wasRoot}var Tc=Qs({attachResizeListener:(e,t)=>zs(e,`resize`,t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),Ec={current:void 0},Dc=Qs({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Ec.current){let e=new Tc({});e.mount(window),e.setOptions({layoutScroll:!0}),Ec.current=e}return Ec.current},resetTransform:(e,t)=>{e.style.transform=t===void 0?`none`:t},checkIsScrollRoot:e=>window.getComputedStyle(e).position===`fixed`}),Oc=(0,T.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:`never`});function kc(e,t){if(typeof e==`function`)return e(t);e!=null&&(e.current=t)}function Ac(...e){return t=>{let n=!1,r=e.map(e=>{let r=kc(e,t);return!n&&typeof r==`function`&&(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];typeof n==`function`?n():kc(e[t],null)}}}}function jc(...e){return T.useCallback(Ac(...e),e)}var $=r(),Mc=class extends T.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(Ki(t)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){let e=t.offsetParent,n=Ki(e)&&e.offsetWidth||0,r=Ki(e)&&e.offsetHeight||0,i=getComputedStyle(t),a=this.props.sizeRef.current;a.height=parseFloat(i.height),a.width=parseFloat(i.width),a.top=t.offsetTop,a.left=t.offsetLeft,a.right=n-a.width-a.left,a.bottom=r-a.height-a.top}return null}componentDidUpdate(){}render(){return this.props.children}};function Nc({children:e,isPresent:t,anchorX:n,anchorY:r,root:i,pop:a}){let o=(0,T.useId)(),s=(0,T.useRef)(null),c=(0,T.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:l}=(0,T.useContext)(Oc),u=jc(s,e.props?.ref??e?.ref);return(0,T.useInsertionEffect)(()=>{let{width:e,height:u,top:d,left:f,right:p,bottom:m}=c.current;if(t||a===!1||!s.current||!e||!u)return;let h=n===`left`?`left: ${f}`:`right: ${p}`,g=r===`bottom`?`bottom: ${m}`:`top: ${d}`;s.current.dataset.motionPopId=o;let _=document.createElement(`style`);l&&(_.nonce=l);let v=i??document.head;return v.appendChild(_),_.sheet&&_.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${u}px !important;
            ${h}px !important;
            ${g}px !important;
          }
        `),()=>{s.current?.removeAttribute(`data-motion-pop-id`),v.contains(_)&&v.removeChild(_)}},[t]),(0,$.jsx)(Mc,{isPresent:t,childRef:s,sizeRef:c,pop:a,children:a===!1?e:T.cloneElement(e,{ref:u})})}var Pc=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:o,anchorX:s,anchorY:c,root:l})=>{let u=me(Fc),d=(0,T.useId)(),f=!0,p=(0,T.useMemo)(()=>(f=!1,{id:d,initial:t,isPresent:n,custom:i,onExitComplete:e=>{u.set(e,!0);for(let e of u.values())if(!e)return;r&&r()},register:e=>(u.set(e,!1),()=>u.delete(e))}),[n,u,r]);return a&&f&&(p={...p}),(0,T.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[n]),T.useEffect(()=>{!n&&!u.size&&r&&r()},[n]),e=(0,$.jsx)(Nc,{pop:o===`popLayout`,isPresent:n,anchorX:s,anchorY:c,root:l,children:e}),(0,$.jsx)(ge.Provider,{value:p,children:e})};function Fc(){return new Map}function Ic(e=!0){let t=(0,T.useContext)(ge);if(t===null)return[!0,null];let{isPresent:n,onExitComplete:r,register:i}=t,a=(0,T.useId)();(0,T.useEffect)(()=>{if(e)return i(a)},[e]);let o=(0,T.useCallback)(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,o]:[!0]}var Lc=e=>e.key||``;function Rc(e){let t=[];return T.Children.forEach(e,e=>{(0,T.isValidElement)(e)&&t.push(e)}),t}var zc=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a=`sync`,propagate:o=!1,anchorX:s=`left`,anchorY:c=`top`,root:l})=>{let[u,d]=Ic(o),f=(0,T.useMemo)(()=>Rc(e),[e]),p=o&&!u?[]:f.map(Lc),m=(0,T.useRef)(!0),h=(0,T.useRef)(f),g=me(()=>new Map),_=(0,T.useRef)(new Set),[v,y]=(0,T.useState)(f),[b,x]=(0,T.useState)(f);he(()=>{m.current=!1,h.current=f;for(let e=0;e<b.length;e++){let t=Lc(b[e]);p.includes(t)?(g.delete(t),_.current.delete(t)):g.get(t)!==!0&&g.set(t,!1)}},[b,p.length,p.join(`-`)]);let S=[];if(f!==v){let e=[...f];for(let t=0;t<b.length;t++){let n=b[t],r=Lc(n);p.includes(r)||(e.splice(t,0,n),S.push(n))}return a===`wait`&&S.length&&(e=S),x(Rc(e)),y(f),null}let{forceRender:C}=(0,T.useContext)(E);return(0,$.jsx)($.Fragment,{children:b.map(e=>{let v=Lc(e),y=o&&!u?!1:f===b||p.includes(v);return(0,$.jsx)(Pc,{isPresent:y,initial:!m.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:a,root:l,onExitComplete:y?void 0:()=>{if(_.current.has(v))return;if(g.has(v))_.current.add(v),g.set(v,!0);else return;let e=!0;g.forEach(t=>{t||(e=!1)}),e&&(C?.(),x(h.current),o&&d?.(),r&&r())},anchorX:s,anchorY:c,children:e},v)})})},Bc=(0,T.createContext)({strict:!1}),Vc={animation:[`animate`,`variants`,`whileHover`,`whileTap`,`exit`,`whileInView`,`whileFocus`,`whileDrag`],exit:[`exit`],drag:[`drag`,`dragControls`],focus:[`whileFocus`],hover:[`whileHover`,`onHoverStart`,`onHoverEnd`],tap:[`whileTap`,`onTap`,`onTapStart`,`onTapCancel`],pan:[`onPan`,`onPanStart`,`onPanSessionStart`,`onPanEnd`],inView:[`whileInView`,`onViewportEnter`,`onViewportLeave`],layout:[`layout`,`layoutId`]},Hc=!1;function Uc(){if(Hc)return;let e={};for(let t in Vc)e[t]={isEnabled:e=>Vc[t].some(t=>!!e[t])};Ja(e),Hc=!0}function Wc(){return Uc(),Ya()}function Gc(e){let t=Wc();for(let n in e)t[n]={...t[n],...e[n]};Ja(t)}var Kc=new Set(`animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport`.split(`.`));function qc(e){return e.startsWith(`while`)||e.startsWith(`drag`)&&e!==`draggable`||e.startsWith(`layout`)||e.startsWith(`onTap`)||e.startsWith(`onPan`)||e.startsWith(`onLayout`)||Kc.has(e)}var Jc=e=>!qc(e);function Yc(e){typeof e==`function`&&(Jc=t=>t.startsWith(`on`)?!qc(t):e(t))}try{Yc((c(),t(u)).default)}catch{}function Xc(e,t,n){let r={};for(let i in e)i===`values`&&typeof e.values==`object`||K(e[i])||(Jc(i)||n===!0&&qc(i)||!t&&!qc(i)||e.draggable&&i.startsWith(`onDrag`))&&(r[i]=e[i]);return r}var Zc=(0,T.createContext)({});function Qc(e,t){if(za(e)){let{initial:t,animate:n}=e;return{initial:t===!1||Ia(t)?t:void 0,animate:Ia(n)?n:void 0}}return e.inherit===!1?{}:t}function $c(e){let{initial:t,animate:n}=Qc(e,(0,T.useContext)(Zc));return(0,T.useMemo)(()=>({initial:t,animate:n}),[el(t),el(n)])}function el(e){return Array.isArray(e)?e.join(` `):e}var tl=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function nl(e,t,n){for(let r in t)!K(t[r])&&!ko(r,n)&&(e[r]=t[r])}function rl({transformTemplate:e},t){return(0,T.useMemo)(()=>{let n=tl();return Co(n,t,e),Object.assign({},n.vars,n.style)},[t])}function il(e,t){let n=e.style||{},r={};return nl(r,n,e),Object.assign(r,rl(e,t)),r}function al(e,t){let n={},r=il(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout=`none`,r.touchAction=e.drag===!0?`none`:`pan-${e.drag===`x`?`y`:`x`}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}var ol=()=>({...tl(),attrs:{}});function sl(e,t,n,r){let i=(0,T.useMemo)(()=>{let n=ol();return Lo(n,t,zo(r),e.transformTemplate,e.style),{...n.attrs,style:{...n.style}}},[t]);if(e.style){let t={};nl(t,e.style,e),i.style={...t,...i.style}}return i}var cl=[`animate`,`circle`,`defs`,`desc`,`ellipse`,`g`,`image`,`line`,`filter`,`marker`,`mask`,`metadata`,`path`,`pattern`,`polygon`,`polyline`,`rect`,`stop`,`switch`,`symbol`,`svg`,`text`,`tspan`,`use`,`view`];function ll(e){return typeof e!=`string`||e.includes(`-`)?!1:!!(cl.indexOf(e)>-1||/[A-Z]/u.test(e))}function ul(e,t,n,{latestValues:r},i,a=!1,o){let s=(o??ll(e)?sl:al)(t,r,i,e),c=Xc(t,typeof e==`string`,a),l=e===T.Fragment?{}:{...c,...s,ref:n},{children:u}=t,d=(0,T.useMemo)(()=>K(u)?u.get():u,[u]);return(0,T.createElement)(e,{...l,children:d})}function dl({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:fl(n,r,i,e),renderState:t()}}function fl(e,t,n,r){let i={},a=r(e,{});for(let e in a)i[e]=Us(a[e]);let{initial:o,animate:s}=e,c=za(e),l=Ba(e);t&&l&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),s===void 0&&(s=t.animate));let u=n?n.initial===!1:!1;u||=o===!1;let d=u?s:o;if(d&&typeof d!=`boolean`&&!Fa(d)){let t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){let r=ri(e,t[n]);if(r){let{transitionEnd:e,transition:t,...n}=r;for(let e in n){let t=n[e];if(Array.isArray(t)){let e=u?t.length-1:0;t=t[e]}t!==null&&(i[e]=t)}for(let t in e)i[t]=e[t]}}}return i}var pl=e=>(t,n)=>{let r=(0,T.useContext)(Zc),i=(0,T.useContext)(ge),a=()=>dl(e,t,r,i);return n?a():me(a)},ml=pl({scrapeMotionValuesFromProps:Ao,createRenderState:tl}),hl=pl({scrapeMotionValuesFromProps:Vo,createRenderState:ol}),gl=Symbol.for(`motionComponentSymbol`);function _l(e,t,n){let r=(0,T.useRef)(n);(0,T.useInsertionEffect)(()=>{r.current=n});let i=(0,T.useRef)(null);return(0,T.useCallback)(n=>{n&&e.onMount?.(n);let a=r.current;if(typeof a==`function`)if(n){let e=a(n);typeof e==`function`&&(i.current=e)}else i.current?(i.current(),i.current=null):a(n);else a&&(a.current=n);t&&(n?t.mount(n):t.unmount())},[t])}var vl=(0,T.createContext)({});function yl(e){return e&&typeof e==`object`&&Object.prototype.hasOwnProperty.call(e,`current`)}function bl(e,t,n,r,i,a){let{visualElement:o}=(0,T.useContext)(Zc),s=(0,T.useContext)(Bc),c=(0,T.useContext)(ge),l=(0,T.useContext)(Oc),u=l.reducedMotion,d=l.skipAnimations,f=(0,T.useRef)(null),p=(0,T.useRef)(!1);r||=s.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u,skipAnimations:d,isSVG:a}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));let m=f.current,h=(0,T.useContext)(vl);m&&!m.projection&&i&&(m.type===`html`||m.type===`svg`)&&xl(f.current,n,i,h);let g=(0,T.useRef)(!1);(0,T.useInsertionEffect)(()=>{m&&g.current&&m.update(n,c)});let _=n[vi],v=(0,T.useRef)(!!_&&typeof window<`u`&&!window.MotionHandoffIsComplete?.(_)&&window.MotionHasOptimisedAnimation?.(_));return he(()=>{p.current=!0,m&&(g.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),v.current&&m.animationState&&m.animationState.animateChanges())}),(0,T.useEffect)(()=>{m&&(!v.current&&m.animationState&&m.animationState.animateChanges(),v.current&&=(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(_)}),!1),m.enteringChildren=void 0)}),m}function xl(e,t,n,r){let{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:c,layoutRoot:l,layoutAnchor:u,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t[`data-framer-portal-id`]?void 0:Sl(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!o||s&&yl(s),visualElement:e,animationType:typeof a==`string`?a:`both`,initialPromotionConfig:r,crossfade:d,layoutScroll:c,layoutRoot:l,layoutAnchor:u})}function Sl(e){if(e)return e.options.allowProjection===!1?Sl(e.parent):e.projection}function Cl(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&Gc(r);let a=n?n===`svg`:ll(e),o=a?hl:ml;function s(n,s){let c,l={...(0,T.useContext)(Oc),...n,layoutId:wl(n)},{isStatic:u}=l,d=$c(n),f=o(n,u);if(!u&&typeof window<`u`){Tl(l,r);let t=El(l);c=t.MeasureLayout,d.visualElement=bl(e,f,l,i,t.ProjectionNode,a)}return(0,$.jsxs)(Zc.Provider,{value:d,children:[c&&d.visualElement?(0,$.jsx)(c,{visualElement:d.visualElement,...l}):null,ul(e,n,_l(f,d.visualElement,s),f,u,t,a)]})}s.displayName=`motion.${typeof e==`string`?e:`create(${e.displayName??e.name??``})`}`;let c=(0,T.forwardRef)(s);return c[gl]=e,c}function wl({layoutId:e}){let t=(0,T.useContext)(E).id;return t&&e!==void 0?t+`-`+e:e}function Tl(e,t){(0,T.useContext)(Bc).strict}function El(e){let{drag:t,layout:n}=Wc();if(!t&&!n)return{};let r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function Dl(e,t){if(typeof Proxy>`u`)return Cl;let n=new Map,r=(n,r)=>Cl(n,r,e,t);return new Proxy((e,t)=>r(e,t),{get:(i,a)=>a===`create`?r:(n.has(a)||n.set(a,Cl(a,void 0,e,t)),n.get(a))})}var Ol=(e,t)=>t.isSVG??ll(e)?new Ho(t):new Mo(t,{allowProjection:e!==T.Fragment}),kl=class extends Qa{constructor(e){super(e),e.animationState||=Yo(e)}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();Fa(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}},Al=0,jl={animation:{Feature:kl},exit:{Feature:class extends Qa{constructor(){super(...arguments),this.id=Al++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;if(e&&n===!1){if(this.isExitComplete){let{initial:e,custom:t}=this.node.getProps();if(typeof e==`string`){let n=ii(this.node,e,t);if(n){let{transition:e,transitionEnd:t,...r}=n;for(let e in r)this.node.getValue(e)?.jump(r[e])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive(`exit`,!1);this.isExitComplete=!1;return}let r=this.node.animationState.setActive(`exit`,!e);t&&!e&&r.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}};function Ml(e){return{point:{x:e.pageX,y:e.pageY}}}var Nl=e=>t=>ta(t)&&e(t,Ml(t));function Pl(e,t,n,r){return zs(e,t,Nl(n),r)}var Fl=({current:e})=>e?e.ownerDocument.defaultView:null,Il=(e,t)=>Math.abs(e-t);function Ll(e,t){let n=Il(e.x,t.x),r=Il(e.y,t.y);return Math.sqrt(n**2+r**2)}var Rl=new Set([`auto`,`scroll`]),zl=class{constructor(e,t,{transformPagePoint:n,contextWindow:r=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:o}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Bl(this.lastRawMoveEventInfo,this.transformPagePoint));let e=Hl(this.lastMoveEventInfo,this.history),t=this.startEvent!==null,n=Ll(e.offset,{x:0,y:0})>=this.distanceThreshold;if(!t&&!n)return;let{point:r}=e,{timestamp:i}=I;this.history.push({...r,timestamp:i});let{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastRawMoveEventInfo=t,this.lastMoveEventInfo=Bl(t,this.transformPagePoint),P.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&i&&i(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let a=Hl(e.type===`pointercancel`?this.lastMoveEventInfo:Bl(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!ta(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.distanceThreshold=a,this.contextWindow=r||window;let s=Bl(Ml(e),this.transformPagePoint),{point:c}=s,{timestamp:l}=I;this.history=[{...c,timestamp:l}];let{onSessionStart:u}=t;u&&u(e,Hl(s,this.history)),this.removeListeners=Ce(Pl(this.contextWindow,`pointermove`,this.handlePointerMove),Pl(this.contextWindow,`pointerup`,this.handlePointerUp),Pl(this.contextWindow,`pointercancel`,this.handlePointerUp)),o&&this.startScrollTracking(o)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(Rl.has(e.overflowX)||Rl.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.addEventListener(`scroll`,this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener(`scroll`,this.onElementScroll,{capture:!0}),window.removeEventListener(`scroll`,this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let n=e===window,r=n?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},i={x:r.x-t.x,y:r.y-t.y};i.x===0&&i.y===0||(n?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(e,r),P.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),F(this.updatePoint)}};function Bl(e,t){return t?{point:t(e.point)}:e}function Vl(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Hl({point:e},t){return{point:e,delta:Vl(e,Wl(t)),offset:Vl(e,Ul(t)),velocity:Gl(t,.1)}}function Ul(e){return e[0]}function Wl(e){return e[e.length-1]}function Gl(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null,i=Wl(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>j(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>j(t)*2&&(r=e[1]);let a=M(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};let o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Kl(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?U(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?U(n,e,r.max):Math.min(e,n)),e}function ql(e,t,n){return{min:t===void 0?void 0:e.min+t,max:n===void 0?void 0:e.max+n-(e.max-e.min)}}function Jl(e,{top:t,left:n,bottom:r,right:i}){return{x:ql(e.x,n,i),y:ql(e.y,t,r)}}function Yl(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function Xl(e,t){return{x:Yl(e.x,t.x),y:Yl(e.y,t.y)}}function Zl(e,t){let n=.5,r=Z(e),i=Z(t);return i>r?n=we(t.min,t.max-r,e.min):r>i&&(n=we(e.min,e.max-i,t.min)),D(0,1,n)}function Ql(e,t){let n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}var $l=.35;function eu(e=$l){return e===!1?e=0:e===!0&&(e=$l),{x:tu(e,`left`,`right`),y:tu(e,`top`,`bottom`)}}function tu(e,t,n){return{min:nu(e,t),max:nu(e,n)}}function nu(e,t){return typeof e==`number`?e:e[t]||0}var ru=new WeakMap,iu=class{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=J(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:n}={}){let{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;let i=e=>{t&&this.snapToCursor(Ml(e).point),this.stopAnimation()},a=(e,t)=>{let{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Xi(n),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Q(e=>{let t=this.getAxisMotionValue(e).get()||0;if(z.test(t)){let{projection:n}=this.visualElement;if(n&&n.layout){let r=n.layout.layoutBox[e];r&&(t=Z(r)*(parseFloat(t)/100))}}this.originPoint[e]=t}),i&&P.update(()=>i(e,t),!1,!0),gi(this.visualElement,`transform`);let{animationState:a}=this.visualElement;a&&a.setActive(`whileDrag`,!0)},o=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;let{offset:o}=t;if(r&&this.currentDirection===null){this.currentDirection=cu(o),this.currentDirection!==null&&i&&i(this.currentDirection);return}this.updateAxis(`x`,t.point,o),this.updateAxis(`y`,t.point,o),this.visualElement.render(),a&&P.update(()=>a(e,t),!1,!0)},s=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{let{dragSnapToOrigin:e}=this.getProps();(e||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:l}=this.getProps();this.panSession=new zl(e,{onSessionStart:i,onStart:a,onMove:o,onSessionEnd:s,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:l,distanceThreshold:n,contextWindow:Fl(this.visualElement),element:this.visualElement.current})}stop(e,t){let n=e||this.latestPointerEvent,r=t||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!r||!n)return;let{velocity:a}=r;this.startAnimation(a);let{onDragEnd:o}=this.getProps();o&&P.postRender(()=>o(n,r))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();let{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive(`whileDrag`,!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,n){let{drag:r}=this.getProps();if(!n||!su(e,r,this.currentDirection))return;let i=this.getAxisMotionValue(e),a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=Kl(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&yl(e)?this.constraints||=this.resolveRefConstraints():e&&n?this.constraints=Jl(n.layoutBox,e):this.constraints=!1,this.elastic=eu(t),r!==this.constraints&&!yl(e)&&n&&this.constraints&&!this.hasMutatedConstraints&&Q(e=>{this.constraints!==!1&&this.getAxisMotionValue(e)&&(this.constraints[e]=Ql(n.layoutBox[e],this.constraints[e]))})}resolveRefConstraints(){let{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!yl(e))return!1;let n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;let i=yo(n,r.root,this.visualElement.getTransformPagePoint()),a=Xl(r.layout.layoutBox,i);if(t){let e=t(eo(a));this.hasMutatedConstraints=!!e,e&&(a=$a(e))}return a}startAnimation(e){let{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},c=Q(o=>{if(!su(o,t,this.currentDirection))return;let c=s&&s[o]||{};(a===!0||a===o)&&(c={min:0,max:0});let l=r?200:1e6,u=r?40:1e7,d={type:`inertia`,velocity:n?e[o]:0,bounceStiffness:l,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...c};return this.startAxisValueAnimation(o,d)});return Promise.all(c).then(o)}startAxisValueAnimation(e,t){let n=this.getAxisMotionValue(e);return gi(this.visualElement,e),n.start(ti(e,n,0,t,this.visualElement,!1))}stopAnimation(){Q(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps();return n[t]||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){Q(t=>{let{drag:n}=this.getProps();if(!su(t,n,this.currentDirection))return;let{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){let{min:n,max:a}=r.layout.layoutBox[t],o=i.get()||0;i.set(e[t]-U(n,a,.5)+o)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!yl(t)||!n||!this.constraints)return;this.stopAnimation();let r={x:0,y:0};Q(e=>{let t=this.getAxisMotionValue(e);if(t&&this.constraints!==!1){let n=t.get();r[e]=Zl({min:n,max:n},this.constraints[e])}});let{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},``):`none`,n.root&&n.root.updateScroll(),n.updateLayout(),this.constraints=!1,this.resolveConstraints(),Q(t=>{if(!su(t,e,null))return;let n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(U(i,a,r[t]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;ru.set(this.visualElement,this);let e=this.visualElement.current,t=Pl(e,`pointerdown`,t=>{let{drag:n,dragListener:r=!0}=this.getProps(),i=t.target,a=i!==e&&aa(i);n&&r&&!a&&this.start(t)}),n,r=()=>{let{dragConstraints:t}=this.getProps();yl(t)&&t.current&&(this.constraints=this.resolveRefConstraints(),n||=ou(e,t.current,()=>this.scalePositionWithinConstraints()))},{projection:i}=this.visualElement,a=i.addEventListener(`measure`,r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),P.read(r);let o=zs(window,`resize`,()=>this.scalePositionWithinConstraints()),s=i.addEventListener(`didUpdate`,(({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(Q(t=>{let n=this.getAxisMotionValue(t);n&&(this.originPoint[t]+=e[t].translate,n.set(n.get()+e[t].translate))}),this.visualElement.render())}));return()=>{o(),t(),a(),s&&s(),n&&n()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=$l,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}};function au(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function ou(e,t,n){let r=Da(e,au(n)),i=Da(t,au(n));return()=>{r(),i()}}function su(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function cu(e,t=10){let n=null;return Math.abs(e.y)>t?n=`y`:Math.abs(e.x)>t&&(n=`x`),n}var lu=class extends Qa{constructor(e){super(e),this.removeGroupControls=A,this.removeListeners=A,this.controls=new iu(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||A}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}},uu=e=>(t,n)=>{e&&P.update(()=>e(t,n),!1,!0)},du=class extends Qa{constructor(){super(...arguments),this.removePointerDownListener=A}onPointerDown(e){this.session=new zl(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Fl(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:uu(e),onStart:uu(t),onMove:uu(n),onEnd:(e,t)=>{delete this.session,r&&P.postRender(()=>r(e,t))}}}mount(){this.removePointerDownListener=Pl(this.node.current,`pointerdown`,e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}},fu=!1,pu=class extends T.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),fu&&i.root.didUpdate(),i.addEventListener(`animationComplete`,()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Gs.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,{projection:a}=n;return a?(a.isPresent=i,e.layoutDependency!==t&&a.setOptions({...a.options,layoutDependency:t}),fu=!0,r||e.layoutDependency!==t||t===void 0||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||P.postRender(()=>{let e=a.getStack();(!e||!e.members.length)&&this.safeToRemove()})),null):null}componentDidUpdate(){let{visualElement:e,layoutAnchor:t}=this.props,{projection:n}=e;n&&(n.options.layoutAnchor=t,n.root.didUpdate(),qi.postRender(()=>{!n.currentAnimation&&n.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;fu=!0,r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}};function mu(e){let[t,n]=Ic(),r=(0,T.useContext)(E);return(0,$.jsx)(pu,{...e,layoutGroup:r,switchLayoutGroup:(0,T.useContext)(vl),isPresent:t,safeToRemove:n})}var hu={pan:{Feature:du},drag:{Feature:lu,ProjectionNode:Dc,MeasureLayout:mu}};function gu(e,t,n){let{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive(`whileHover`,n===`Start`);let i=r[`onHover`+n];i&&P.postRender(()=>i(t,Ml(t)))}var _u=class extends Qa{mount(){let{current:e}=this.node;e&&(this.unmount=$i(e,(e,t)=>(gu(this.node,t,`Start`),e=>gu(this.node,e,`End`))))}unmount(){}},vu=class extends Qa{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(`:focus-visible`)}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive(`whileFocus`,!1),this.isActive=!1)}mount(){this.unmount=Ce(zs(this.node.current,`focus`,()=>this.onFocus()),zs(this.node.current,`blur`,()=>this.onBlur()))}unmount(){}};function yu(e,t,n){let{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive(`whileTap`,n===`Start`);let i=r[`onTap`+(n===`End`?``:n)];i&&P.postRender(()=>i(t,Ml(t)))}var bu=class extends Qa{mount(){let{current:e}=this.node;if(!e)return;let{globalTapTarget:t,propagate:n}=this.node.props;this.unmount=fa(e,(e,t)=>(yu(this.node,t,`Start`),(e,{success:t})=>yu(this.node,e,t?`End`:`Cancel`)),{useGlobalTarget:t,stopPropagation:n?.tap===!1})}unmount(){}},xu=new WeakMap,Su=new WeakMap,Cu=e=>{let t=xu.get(e.target);t&&t(e)},wu=e=>{e.forEach(Cu)};function Tu({root:e,...t}){let n=e||document;Su.has(n)||Su.set(n,{});let r=Su.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(wu,{root:e,...t})),r[i]}function Eu(e,t,n){let r=Tu(t);return xu.set(e,n),r.observe(e),()=>{xu.delete(e),r.unobserve(e)}}var Du={some:0,all:1},Ou=class extends Qa{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.stopObserver?.();let{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r=`some`,once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:typeof r==`number`?r:Du[r]};this.stopObserver=Eu(this.node.current,a,e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,i&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive(`whileInView`,t);let{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)})}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>`u`)return;let{props:e,prevProps:t}=this.node;[`amount`,`margin`,`root`].some(ku(e,t))&&this.startObserver()}unmount(){this.stopObserver?.(),this.hasEnteredView=!1,this.isInView=!1}};function ku({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}var Au={inView:{Feature:Ou},tap:{Feature:bu},focus:{Feature:vu},hover:{Feature:_u}},ju={layout:{ProjectionNode:Dc,MeasureLayout:mu}},Mu=Dl({...jl,...Au,...hu,...ju},Ol),Nu=l.div`

  background: rgba(15, 23, 42, 0.65);

  border: 1px solid rgba(59, 130, 246, 0.25);

  border-radius: 14px;

  overflow: hidden;

  display: flex;

  flex-direction: column;

  position: relative;

  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);

`,Pu=l.div`

  display: flex;

  justify-content: space-between;

  align-items: center;

  padding: 12px 18px;

  background: rgba(255, 255, 255, 0.03);

  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  flex-wrap: wrap;

  gap: 8px;

`,Fu=l.div`

  display: flex;

  align-items: center;

  gap: 10px;

  font-size: 13.5px;

  font-weight: 700;

  color: #F9FAFB;

  .badge {

    font-size: 10px;

    font-weight: 800;

    padding: 3px 8px;

    border-radius: 12px;

    background: rgba(59, 130, 246, 0.2);

    color: #60A5FA;

    border: 1px solid rgba(59, 130, 246, 0.4);

  }

`,Iu=l.div`

  display: flex;

  align-items: center;

  gap: 8px;

`,Lu=l.button`

  display: flex;

  align-items: center;

  gap: 5px;

  padding: 5px 10px;

  background: rgba(255, 255, 255, 0.05);

  border: 1px solid rgba(255, 255, 255, 0.12);

  border-radius: 6px;

  color: #D1D5DB;

  font-size: 11px;

  cursor: pointer;

  transition: all 0.2s;

  &:hover {

    background: rgba(59, 130, 246, 0.2);

    border-color: rgba(59, 130, 246, 0.5);

    color: #60A5FA;

  }

`,Ru=l.div`

  width: 100%;

  height: 380px;

  position: relative;

  background: radial-gradient(circle at center, #0B132B 0%, #030712 100%);

`,zu=l.div`

  position: absolute;

  bottom: 12px;

  left: 14px;

  display: flex;

  flex-wrap: wrap;

  gap: 10px;

  background: rgba(0, 0, 0, 0.7);

  backdrop-filter: blur(6px);

  padding: 6px 12px;

  border-radius: 8px;

  border: 1px solid rgba(255, 255, 255, 0.08);

  font-size: 10.5px;

  color: #9CA3AF;

  pointer-events: none;

  z-index: 10;

  .item {

    display: flex;

    align-items: center;

    gap: 5px;

  }

  .dot {

    width: 7px;

    height: 7px;

    border-radius: 50%;

  }

`,Bu=l.div`

  position: absolute;

  top: 12px;

  right: 14px;

  background: rgba(15, 23, 42, 0.85);

  backdrop-filter: blur(8px);

  border: 1px solid rgba(59, 130, 246, 0.4);

  border-radius: 8px;

  padding: 10px 14px;

  font-size: 11.5px;

  color: #E2E8F0;

  max-width: 220px;

  z-index: 10;

  box-shadow: 0 4px 16px rgba(0,0,0,0.4);

  .title { font-weight: 700; color: #60A5FA; margin-bottom: 3px; }

  .desc { font-size: 10.5px; color: #94A3B8; line-height: 1.4; }

`,Vu=(0,T.memo)(({onFocusAgent:e,onNavigate:t})=>{let n=(0,T.useRef)(null),r=(0,T.useRef)(null),[a,o]=(0,T.useState)(!0),[s,c]=(0,T.useState)(null),[l,u]=(0,T.useState)({nodes:0,links:0,knowledgeCount:0});return(0,T.useEffect)(()=>{if(!n.current)return;let t=!1;return Promise.all([te(),w()]).then(([i,o])=>{if(t||!n.current)return;let s=new Map;i.nodes.forEach(e=>s.set(e.id,{...e,val:Math.max(e.val*.4,4)}));let l=0;if(o&&o.nodes){let e=o.nodes.slice(-80);l=e.length,e.forEach(e=>{s.set(e.id,{id:e.id,name:e.name,group:`KNOWLEDGE`,dept:`🌱 지식 성장 원장`,color:`#10B981`,val:3,ktype:e.type})})}let d=[];i.links.forEach(e=>{let t=typeof e.source==`object`?e.source.id:e.source,n=typeof e.target==`object`?e.target.id:e.target;s.has(t)&&s.has(n)&&d.push({source:t,target:n,type:e.type})}),o&&o.links&&o.links.forEach(e=>{let t=typeof e.source==`object`?e.source.id:e.source,n=typeof e.target==`object`?e.target.id:e.target;s.has(t)&&s.has(n)&&d.push({source:t,target:n,type:`knowledge`})});let v=Array.from(s.values());u({nodes:v.length,links:d.length,knowledgeCount:l});let y=new _(n.current).graphData({nodes:v,links:d}).backgroundColor(`rgba(0,0,0,0)`).nodeId(`id`).nodeLabel(e=>`${e.name} (${e.dept||e.group})`).nodeVal(`val`).nodeColor(e=>e.color||`#3B82F6`).nodeThreeObject(e=>new f(new g(Math.max(e.val,2.5),16,16),new h({color:new p(e.color||`#3B82F6`),emissive:new p(e.color||`#3B82F6`),emissiveIntensity:.6,roughness:.3,metalness:.2}))).linkColor(e=>e.type===`knowledge`?`rgba(16, 185, 129, 0.45)`:e.type===`collab`?`rgba(96, 165, 250, 0.35)`:`rgba(148, 163, 184, 0.18)`).linkWidth(e=>e.type===`knowledge`?1.5:1).linkDirectionalParticles(e=>e.type===`knowledge`?2:1).linkDirectionalParticleSpeed(.006).linkDirectionalParticleWidth(2.2).linkDirectionalParticleColor(e=>e.type===`knowledge`?`#34D399`:`#60A5FA`).onNodeClick(t=>{c({id:t.id,name:t.name,dept:t.dept||t.group,type:t.ktype,group:t.group}),t.group!==`KNOWLEDGE`&&e&&e(t.id)}),b=y.scene(),x=new m(16777215,1.2);b.add(x),y.cameraPosition({x:0,y:0,z:320}),r.current=y;let S=0,C=setInterval(()=>{!r.current||!a||(S+=.005,r.current.cameraPosition({x:320*Math.sin(S),z:320*Math.cos(S)}))},33);return()=>{clearInterval(C)}}).catch(e=>{console.warn(`Dashboard 3D load error:`,e)}),()=>{if(t=!0,r.current)try{r.current._destructor?.()}catch{}}},[]),(0,$.jsxs)(Nu,{children:[(0,$.jsxs)(Pu,{children:[(0,$.jsxs)(Fu,{children:[(0,$.jsx)(oe,{size:16,color:`#60A5FA`}),(0,$.jsx)(`span`,{children:`지식맵 기반 3D 인터랙티브 관계도`}),(0,$.jsx)(`span`,{className:`badge`,children:`LIVE 3D`}),(0,$.jsxs)(`span`,{style:{fontSize:11,color:`#9CA3AF`,fontWeight:400},children:[`(`,l.nodes,` 노드 · `,l.links,` 관계 링크 · `,l.knowledgeCount,` 지식노드)`]})]}),(0,$.jsxs)(Iu,{children:[(0,$.jsxs)(Lu,{onClick:()=>{o(e=>!e)},title:a?`회전 일시정지`:`자동 회전 시작`,children:[a?(0,$.jsx)(le,{size:12}):(0,$.jsx)(i,{size:12}),a?`회전 정지`:`자동 회전`]}),(0,$.jsxs)(Lu,{onClick:()=>{r.current&&r.current.cameraPosition({x:0,y:0,z:320},{x:0,y:0,z:0},1e3)},title:`카메라 시점 초기화`,children:[(0,$.jsx)(ue,{size:12}),` 초기화`]}),t&&(0,$.jsxs)(Lu,{onClick:()=>t(`graph3d`),style:{background:`rgba(59, 130, 246, 0.2)`,borderColor:`rgba(59, 130, 246, 0.4)`,color:`#60A5FA`},title:`전체화면 3D 지식맵으로 확장`,children:[(0,$.jsx)(se,{size:12}),` 전체화면 3D`]})]})]}),(0,$.jsxs)(Ru,{ref:n,children:[(0,$.jsxs)(zu,{children:[(0,$.jsxs)(`div`,{className:`item`,children:[(0,$.jsx)(`span`,{className:`dot`,style:{background:`#3B82F6`}}),` CEO`]}),(0,$.jsxs)(`div`,{className:`item`,children:[(0,$.jsx)(`span`,{className:`dot`,style:{background:`#8B5CF6`}}),` CTO 기술`]}),(0,$.jsxs)(`div`,{className:`item`,children:[(0,$.jsx)(`span`,{className:`dot`,style:{background:`#F59E0B`}}),` CFO 재무`]}),(0,$.jsxs)(`div`,{className:`item`,children:[(0,$.jsx)(`span`,{className:`dot`,style:{background:`#10B981`}}),` COO 운영`]}),(0,$.jsxs)(`div`,{className:`item`,children:[(0,$.jsx)(`span`,{className:`dot`,style:{background:`#10B981`,boxShadow:`0 0 6px #10B981`}}),` 🌱 지식 성장`]}),(0,$.jsx)(`div`,{className:`item`,style:{color:`#60A5FA`},children:`⚡ 빛나는 점: 실시간 관계 흐름`})]}),s&&(0,$.jsxs)(Bu,{children:[(0,$.jsx)(`div`,{className:`title`,children:s.group===`KNOWLEDGE`?`🌱 지식 이벤트`:`👤 에이전트`}),(0,$.jsx)(`div`,{style:{fontWeight:600,fontSize:12,marginBottom:2},children:s.name}),(0,$.jsx)(`div`,{className:`desc`,children:s.dept}),(0,$.jsxs)(`div`,{style:{fontSize:9.5,color:`#64748B`,marginTop:4},children:[`ID: `,s.id]})]})]})]})}),Hu=d`

  0%, 100% { opacity: 0.8; box-shadow: 0 0 10px rgba(16, 185, 129, 0.4); }

  50% { opacity: 1; box-shadow: 0 0 20px rgba(16, 185, 129, 0.8); }

`,Uu=l.div`

  background: rgba(15, 23, 42, 0.65);

  border: 1px solid rgba(16, 185, 129, 0.25);

  border-radius: 14px;

  overflow: hidden;

  display: flex;

  flex-direction: column;

  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35);

`,Wu=l.div`

  display: flex;

  justify-content: space-between;

  align-items: center;

  padding: 12px 18px;

  background: rgba(255, 255, 255, 0.03);

  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  flex-wrap: wrap;

  gap: 8px;

`,Gu=l.div`

  display: flex;

  align-items: center;

  gap: 10px;

  font-size: 13.5px;

  font-weight: 700;

  color: #F9FAFB;

  .badge {

    font-size: 10px;

    font-weight: 800;

    padding: 3px 8px;

    border-radius: 12px;

    background: rgba(16, 185, 129, 0.2);

    color: #34D399;

    border: 1px solid rgba(16, 185, 129, 0.4);

    animation: ${Hu} 2s infinite ease-in-out;

  }

`,Ku=l.div`

  display: flex;

  align-items: center;

  gap: 6px;

  flex-wrap: wrap;

`,qu=l.button`

  padding: 4px 10px;

  border-radius: 6px;

  font-size: 11px;

  font-weight: 600;

  cursor: pointer;

  transition: all 0.2s;

  background: ${({$active:e})=>e?`rgba(16, 185, 129, 0.25)`:`rgba(255, 255, 255, 0.04)`};

  border: 1px solid ${({$active:e})=>e?`#10B981`:`rgba(255, 255, 255, 0.1)`};

  color: ${({$active:e})=>e?`#34D399`:`#9CA3AF`};

  &:hover {

    background: rgba(16, 185, 129, 0.15);

    color: #F9FAFB;

  }

`,Ju=l.div`

  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 10px;

  padding: 14px 18px 8px;



  @media (max-width: 900px) {

    grid-template-columns: repeat(2, 1fr);

  }

  @media (max-width: 480px) {

    grid-template-columns: 1fr;

  }

`,Yu=l.div`

  background: rgba(0, 0, 0, 0.35);

  border: 1px solid rgba(255, 255, 255, 0.06);

  border-radius: 8px;

  padding: 10px 14px;

  display: flex;

  flex-direction: column;

  gap: 3px;

  .label {

    font-size: 10.5px;

    color: #94A3B8;

    display: flex;

    align-items: center;

    gap: 5px;

    font-weight: 600;

  }

  .value {

    font-size: 20px;

    font-weight: 800;

    color: ${({$color:e})=>e||`#3B82F6`};

    font-family: 'JetBrains Mono', 'Fira Code', monospace;

  }

  .sub {

    font-size: 10px;

    color: #64748B;

  }

`,Xu=l.div`

  padding: 10px 18px 16px;

  display: flex;

  flex-direction: column;

  gap: 8px;

`,Zu=l.canvas`

  width: 100%;

  height: 140px;

  border-radius: 8px;

  background: #040711;

  border: 1px solid rgba(59, 130, 246, 0.2);

  display: block;

`,Qu=l.div`

  display: flex;

  justify-content: space-between;

  align-items: center;

  font-size: 11px;

  color: #94A3B8;

  flex-wrap: wrap;

  gap: 6px;

  .items {

    display: flex;

    gap: 12px;

  }

  .indicator {

    display: flex;

    align-items: center;

    gap: 5px;

  }

  .bar {

    width: 14px;

    height: 3px;

    border-radius: 2px;

  }

`,$u=(0,T.memo)(()=>{let e=(0,T.useRef)(null),[t,n]=(0,T.useState)(`charge`),[r,s]=(0,T.useState)(!0),[c,l]=(0,T.useState)(86.4),[u,d]=(0,T.useState)(48.2),[f,p]=(0,T.useState)(60.01),[m,h]=(0,T.useState)(24.3),[g,_]=(0,T.useState)(1254.2),v=(0,T.useRef)(0),y=(0,T.useRef)(0),b=(0,T.useRef)(0),x=e=>{n(e),d(e===`charge`?48.5:e===`discharge`?-36.2:e===`fr`?12.4:0)};return(0,T.useEffect)(()=>{let n=e.current;if(!n)return;let i=n.getContext(`2d`);if(!i)return;let a=!1,o=()=>{if(a)return;let e=n.offsetWidth;(n.width!==e*window.devicePixelRatio||n.height!==140*window.devicePixelRatio)&&(n.width=e*window.devicePixelRatio,n.height=140*window.devicePixelRatio,i.scale(window.devicePixelRatio,window.devicePixelRatio)),i.fillStyle=`#040711`,i.fillRect(0,0,e,140),i.strokeStyle=`rgba(255, 255, 255, 0.04)`,i.lineWidth=1;for(let t=0;t<e;t+=40)i.beginPath(),i.moveTo(t,0),i.lineTo(t,140),i.stroke();for(let t=0;t<140;t+=28)i.beginPath(),i.moveTo(0,t),i.lineTo(e,t),i.stroke();i.strokeStyle=`rgba(255, 255, 255, 0.12)`,i.beginPath(),i.moveTo(0,140/2),i.lineTo(e,140/2),i.stroke(),r&&(v.current+=t===`idle`?.01:.05,b.current++,b.current%15==0&&(t===`charge`?(l(e=>Math.min(99.9,+(e+.02).toFixed(2))),d(+(48+(Math.random()*.8-.4)).toFixed(1)),p(+(60+(Math.random()*.04-.02)).toFixed(2)),_(+(1254+(Math.random()*1.5-.7)).toFixed(1)),h(+(24.3+(Math.random()*.2-.1)).toFixed(1))):t===`discharge`?(l(e=>Math.max(5,+(e-.03).toFixed(2))),d(+(-36+(Math.random()*.8-.4)).toFixed(1)),p(+(59.98+(Math.random()*.04-.02)).toFixed(2)),_(+(1242+(Math.random()*1.5-.7)).toFixed(1)),h(+(25.1+(Math.random()*.2-.1)).toFixed(1))):t===`fr`&&(d(+(Math.sin(v.current*.5)*35).toFixed(1)),p(+(60+Math.sin(v.current*.3)*.08).toFixed(2)))));let s=v.current,c=t===`idle`?140*.15:140*.35,u=t===`idle`?140*.05:t===`charge`?140*.28:140*.22;i.beginPath(),i.strokeStyle=`#38BDF8`,i.lineWidth=2.2,i.shadowColor=`#38BDF8`,i.shadowBlur=8;for(let t=0;t<e;t++){let n=s+t/e*Math.PI*6,r=140/2-Math.sin(n)*c;t===0?i.moveTo(t,r):i.lineTo(t,r)}i.stroke(),i.beginPath(),i.strokeStyle=`rgba(96, 165, 250, 0.45)`,i.lineWidth=1.2,i.shadowBlur=0;for(let t=0;t<e;t++){let n=s+t/e*Math.PI*6-2*Math.PI/3,r=140/2-Math.sin(n)*c;t===0?i.moveTo(t,r):i.lineTo(t,r)}i.stroke(),i.beginPath(),i.strokeStyle=`rgba(168, 85, 247, 0.45)`,i.lineWidth=1.2;for(let t=0;t<e;t++){let n=s+t/e*Math.PI*6-4*Math.PI/3,r=140/2-Math.sin(n)*c;t===0?i.moveTo(t,r):i.lineTo(t,r)}i.stroke(),i.beginPath(),i.strokeStyle=`#34D399`,i.lineWidth=2,i.shadowColor=`#34D399`,i.shadowBlur=10;let f=t===`charge`?-.2:t===`discharge`?Math.PI-.2:0;for(let t=0;t<e;t++){let n=s+t/e*Math.PI*6+f,r=140/2-Math.sin(n)*u;t===0?i.moveTo(t,r):i.lineTo(t,r)}i.stroke(),i.shadowBlur=0,y.current=requestAnimationFrame(o)};return y.current=requestAnimationFrame(o),()=>{a=!0,cancelAnimationFrame(y.current)}},[r,t]),(0,$.jsxs)(Uu,{children:[(0,$.jsxs)(Wu,{children:[(0,$.jsxs)(Gu,{children:[(0,$.jsx)(a,{size:16,color:`#34D399`}),(0,$.jsx)(`span`,{children:`BESS 실시간 관제 모니터링 & EMT 시뮬레이션`}),(0,$.jsx)(`span`,{className:`badge`,children:`REAL-TIME SIM`})]}),(0,$.jsxs)(Ku,{children:[(0,$.jsx)(`span`,{style:{fontSize:11,color:`#94A3B8`,marginRight:4},children:`모의 시나리오:`}),(0,$.jsx)(qu,{$active:t===`charge`,onClick:()=>x(`charge`),children:`⚡ 정상 충전 (+48MW)`}),(0,$.jsx)(qu,{$active:t===`discharge`,onClick:()=>x(`discharge`),children:`🔋 피크 방전 (-36MW)`}),(0,$.jsx)(qu,{$active:t===`fr`,onClick:()=>x(`fr`),children:`🔄 주파수 추종 (FR)`}),(0,$.jsx)(qu,{$active:t===`idle`,onClick:()=>x(`idle`),children:`⏸ 대기 (Idle)`}),(0,$.jsxs)(`button`,{onClick:()=>s(e=>!e),title:r?`시뮬레이션 일시정지`:`시뮬레이션 재개`,style:{display:`flex`,alignItems:`center`,gap:4,padding:`4px 8px`,borderRadius:6,background:`rgba(255,255,255,0.08)`,border:`1px solid rgba(255,255,255,0.15)`,color:`#F9FAFB`,fontSize:11,cursor:`pointer`,marginLeft:4},children:[r?(0,$.jsx)(le,{size:12}):(0,$.jsx)(i,{size:12}),r?`정지`:`재개`]})]})]}),(0,$.jsxs)(Ju,{children:[(0,$.jsxs)(Yu,{$color:`#10B981`,children:[(0,$.jsxs)(`div`,{className:`label`,children:[(0,$.jsx)(re,{size:13,color:`#10B981`}),` 배터리 SOC (충전율)`]}),(0,$.jsxs)(`div`,{className:`value`,children:[c.toFixed(1),`%`]}),(0,$.jsx)(`div`,{className:`sub`,children:t===`charge`?`⚡ 172.8 MWh 충전 진행 중`:t===`discharge`?`🔻 피크 부하 방전 중`:`대기 안정 상태`})]}),(0,$.jsxs)(Yu,{$color:u>=0?`#38BDF8`:`#F59E0B`,children:[(0,$.jsxs)(`div`,{className:`label`,children:[(0,$.jsx)(o,{size:13,color:`#38BDF8`}),` PCS 실시간 출력`]}),(0,$.jsxs)(`div`,{className:`value`,children:[u>0?`+${u}`:u,` `,(0,$.jsx)(`span`,{style:{fontSize:12},children:`MW`})]}),(0,$.jsxs)(`div`,{className:`sub`,children:[`DC 링크: `,g,` V · 역률 0.99`]})]}),(0,$.jsxs)(Yu,{$color:Math.abs(f-60)<.05?`#34D399`:`#EF4444`,children:[(0,$.jsxs)(`div`,{className:`label`,children:[(0,$.jsx)(ie,{size:13,color:`#34D399`}),` 계통 주파수 (Grid Freq)`]}),(0,$.jsxs)(`div`,{className:`value`,children:[f.toFixed(2),` `,(0,$.jsx)(`span`,{style:{fontSize:12},children:`Hz`})]}),(0,$.jsx)(`div`,{className:`sub`,children:`허용편차 ±0.2Hz 이내 정상`})]}),(0,$.jsxs)(Yu,{$color:`#A855F7`,children:[(0,$.jsxs)(`div`,{className:`label`,children:[(0,$.jsx)(pe,{size:13,color:`#A855F7`}),` 랙 평균 / 핫스팟 온도`]}),(0,$.jsxs)(`div`,{className:`value`,children:[m.toFixed(1),` `,(0,$.jsx)(`span`,{style:{fontSize:12},children:`℃`})]}),(0,$.jsx)(`div`,{className:`sub`,children:`수랭식 칠러 가동율 42% (정상)`})]})]}),(0,$.jsxs)(Xu,{children:[(0,$.jsxs)(Qu,{children:[(0,$.jsxs)(`div`,{className:`items`,children:[(0,$.jsxs)(`div`,{className:`indicator`,children:[(0,$.jsx)(`span`,{className:`bar`,style:{background:`#38BDF8`,boxShadow:`0 0 6px #38BDF8`}}),(0,$.jsx)(`span`,{children:`계통 3상 전압 (Va / 22.9kV)`})]}),(0,$.jsxs)(`div`,{className:`indicator`,children:[(0,$.jsx)(`span`,{className:`bar`,style:{background:`#34D399`,boxShadow:`0 0 6px #34D399`}}),(0,$.jsx)(`span`,{children:`PCS 충·방전 전류 (Ia / 실시간 위상 추종)`})]})]}),(0,$.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:6},children:[(0,$.jsx)(`span`,{style:{width:6,height:6,borderRadius:`50%`,background:r?`#34D399`:`#6B7280`}}),(0,$.jsx)(`span`,{children:`Sparse EMT Solver 60FPS`})]})]}),(0,$.jsx)(Zu,{ref:e})]})]})}),ed=`/api/chat`,td=`bess_access_key`,nd=`bess_anthropic_key`,rd=[{id:`claude-haiku-4-5`,label:`Haiku 4.5 · 저렴·빠름`},{id:`claude-sonnet-4-6`,label:`Sonnet 4.6 · 균형`},{id:`claude-opus-4-8`,label:`Opus 4.8 · 최고품질`}],id=l.div`



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



`,ad=l.div`



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



`,od=l.div`



  display: grid;



  grid-template-columns: repeat(4, 1fr);



  gap: 12px;



  flex-shrink: 0;







  @media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }



  @media (max-width: 480px) { grid-template-columns: 1fr; }



`,sd=l.div`



  background: rgba(255,255,255,0.04);



  border: 1px solid rgba(255,255,255,0.08);



  border-radius: 12px;



  padding: 14px 16px;



  .label { font-size: 10px; color: #6B7280; text-transform: uppercase; letter-spacing: 1px; font-weight: 800; }



  .value { font-size: 26px; font-weight: 800; color: #3B82F6; margin-top: 2px; }



  .sub   { font-size: 11px; color: #6B7280; margin-top: 2px; }



`,cd=l.div`



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



`,ld=l.div`



  display: grid;



  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));



  gap: 10px;



  overflow-y: auto;



  align-content: start;



  padding-right: 4px;



`,ud=l(Mu.div)`



  background: rgba(255,255,255,0.03);



  border: 1px solid rgba(255,255,255,0.08);



  border-radius: 12px;



  padding: 14px;



  display: flex;



  flex-direction: column;



  gap: 8px;



  &:hover { border-color: rgba(59, 130, 246, 0.4); background: rgba(255,255,255,0.05); }



`,dd=l.div`



  display: flex; align-items: center; gap: 5px;



  font-size: 10px; font-weight: 800; padding: 4px 8px; border-radius: 20px;



  text-transform: uppercase;



  background: ${({$status:e})=>e===`analyzing`?`rgba(59,130,246,0.12)`:e===`success`?`rgba(16,185,129,0.12)`:`rgba(107,114,128,0.08)`};



  color: ${({$status:e})=>e===`analyzing`?`#60A5FA`:e===`success`?`#34D399`:`#9CA3AF`};



  border: 1px solid ${({$status:e})=>e===`analyzing`?`rgba(96,165,250,0.3)`:e===`success`?`rgba(52,211,153,0.3)`:`rgba(156,163,175,0.2)`};



`,fd=l.div`



  width: 100%; height: 4px;



  background: rgba(255,255,255,0.07); border-radius: 2px; overflow: hidden;



  position: relative;



  &::after {



    content: ''; display: block; height: 100%; position: absolute; left: 0; top: 0;



    width: ${({$pct:e})=>e}%; background: ${({$color:e})=>e};



    transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);



  }



`,pd=l.div`



  display: flex;



  flex-direction: column;



  background: rgba(255,255,255,0.03);



  border: 1px solid rgba(255,255,255,0.08);



  border-radius: 14px;



  overflow: hidden;



  height: 100%;



  @media (max-width: 1024px) { height: 450px; margin-top: 10px; }



`,md=l.div`



  display: flex; align-items: center; gap: 10px;



  padding: 14px 18px;



  background: rgba(255,255,255,0.02);



  border-bottom: 1px solid rgba(255,255,255,0.08);



  font-size: 13px; font-weight: 700; color: #F9FAFB;



`,hd=l.div`



  flex: 1; overflow-y: auto; padding: 12px 18px;



  display: flex; flex-direction: column; gap: 6px;



  min-height: 0;



  font-family: 'JetBrains Mono', 'Fira Code', 'Pretendard', monospace; font-size: 12px;



  scrollbar-width: thin;



  scrollbar-color: rgba(255,255,255,0.1) transparent;



`,gd=l.div`



  color: ${({$type:e})=>e===`success`?`#34D399`:e===`error`?`#FB7185`:e===`warn`?`#FBBF24`:e===`cmd`?`#60A5FA`:`#9CA3AF`};



  word-break: break-all;



  line-height: 1.6;



`,_d=l.div`



  display: flex; align-items: center; gap: 8px;



  padding: 12px 18px;



  border-top: 1px solid rgba(255,255,255,0.08);



`,vd=l.input`



  flex: 1; background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.1);



  border-radius: 8px; padding: 10px 14px; color: #F9FAFB; font-size: 13px;



  outline: none;



  transition: all 0.2s;



  &:focus { border-color: rgba(59,130,246,0.6); box-shadow: 0 0 15px rgba(59,130,246,0.1); }



  &::placeholder { color: #4B5563; }



`,yd=l.div`



  background: rgba(255,255,255,0.03);



  border: 1px solid rgba(255,255,255,0.08);



  border-radius: 14px;



  padding: 16px 20px;



  flex-shrink: 0;



  display: flex;



  flex-direction: column;



  gap: 12px;



  @media (max-width: 768px) { padding: 14px; }



`,bd=l.div`



  display: flex;



  align-items: center;



  gap: 0;



  overflow-x: auto;



  padding: 12px 0;



  scrollbar-width: none;



  &::-webkit-scrollbar { display: none; }



`,xd=l.button`



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



`,Sd=l.div`



  width: 8px;



  height: 8px;



  border-radius: 50%;



  background: #34D399;



  box-shadow: 0 0 10px #34D399;



`,Cd=l.div`



  display: flex;



  gap: 10px;



  align-items: center;



  color: #6B7280;



  font-size: 13px;



  font-weight: 600;



  white-space: nowrap;



`,wd=l.div`



  display: flex;



  gap: 10px;



  align-items: center;



  flex-wrap: wrap;



`,Td=l.a`



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



`,Ed=l.div`



  display: flex;



  align-items: center;



  gap: 10px;



  font-size: 14px;



  font-weight: 800;



  color: #F9FAFB;



`,Dd=d`



  0%   { box-shadow: 0 0 0 0 rgba(59,130,246,0.4); }



  70%  { box-shadow: 0 0 0 8px rgba(59,130,246,0); }



  100% { box-shadow: 0 0 0 0 rgba(59,130,246,0); }



`,Od=d`



  0%   { stroke-dashoffset: 20; }



  100% { stroke-dashoffset: 0; }



`,kd=l(Mu.div)`



  flex-shrink: 0;



  display: flex;



  flex-direction: column;



  align-items: center;



  gap: 6px;



  padding: 12px 18px;



  border-radius: 12px;



  background: ${({$active:e,$color:t})=>e?`${t}15`:`rgba(255,255,255,0.02)`};



  border: 1px solid ${({$active:e,$color:t})=>e?t:`rgba(255,255,255,0.08)`};



  animation: ${({$active:e})=>e?Dd:`none`} 2s infinite;



  min-width: 100px;



  .label { font-size: 11px; font-weight: 700; color: #F3F4F6; text-align: center; white-space: pre-line; line-height: 1.3; }



  .id    { font-size: 9px;  color: #6B7280; font-family: monospace; }



`,Ad=l(Mu.svg)`



  flex-shrink: 0; width: 36px; height: 24px;



  line { 



    stroke: ${({$active:e})=>e?`#60A5FA`:`rgba(255,255,255,0.12)`};



    stroke-width: 1.5;



    stroke-dasharray: ${({$active:e})=>e?`5 3`:`none`};



    animation: ${({$active:e})=>e?Od:`none`} 0.8s linear infinite;



  }



`;function jd({agents:e,collabAdj:t,onFocusAgent:n}){let r=e.length<=1?0:Math.min(60,34+e.length*5),i=e.map((t,n)=>{let i=-Math.PI/2+n*2*Math.PI/Math.max(e.length,1);return{...t,x:160+r*Math.cos(i),y:89+r*Math.sin(i)}}),a=[];for(let e=0;e<i.length;e++)for(let n=e+1;n<i.length;n++)t.get(i[e].id)?.has(i[n].id)&&a.push({a:i[e],b:i[n]});return(0,$.jsxs)(`div`,{"data-testid":`rel-minimap`,children:[(0,$.jsxs)(`div`,{style:{fontSize:11,color:`#9CA3AF`,marginBottom:4},children:[`🔗 협업 관계 — `,e.length,`개 에이전트 · `,a.length,`개 직접 링크 `,a.length===0&&`(공통 협의체 협업)`,` · `,(0,$.jsx)(`span`,{style:{color:`#60A5FA`},children:`노드 클릭 → 3D 포커스`})]}),(0,$.jsxs)(`svg`,{viewBox:`0 0 320 170`,style:{width:`100%`,maxHeight:180,display:`block`},preserveAspectRatio:`xMidYMid meet`,children:[a.length===0&&i.length>1&&i.map((e,t)=>{let n=i[(t+1)%i.length];return(0,$.jsx)(`line`,{x1:e.x,y1:e.y,x2:n.x,y2:n.y,stroke:`rgba(96,165,250,0.25)`,strokeWidth:1,strokeDasharray:`4 4`},`r${t}`)}),a.map((e,t)=>(0,$.jsx)(`line`,{x1:e.a.x,y1:e.a.y,x2:e.b.x,y2:e.b.y,stroke:`rgba(148,163,184,0.45)`,strokeWidth:1.2},t)),i.map(e=>(0,$.jsxs)(`g`,{style:{cursor:n?`pointer`:`default`},onClick:()=>n?.(e.id),children:[(0,$.jsx)(`circle`,{cx:e.x,cy:e.y,r:13,fill:e.color,fillOpacity:.22,stroke:e.color,strokeWidth:1.5}),(0,$.jsx)(`circle`,{cx:e.x,cy:e.y,r:4.5,fill:e.color}),(0,$.jsx)(`text`,{x:e.x,y:e.y+26,textAnchor:`middle`,fontSize:9,fill:`#CBD5E1`,children:e.name.replace(` 전문가`,``).replace(` 에이전트`,``).slice(0,9)}),(0,$.jsx)(`text`,{x:e.x,y:e.y+36,textAnchor:`middle`,fontSize:7.5,fill:`#6B7280`,children:e.id})]},e.id))]})]})}var Md=[{id:`CORE-001`,label:`CORE
Orchestrator`,color:`#3B82F6`,defaultActive:!0}],Nd=[{id:`CEO-001`,name:`BESS Orchestrator`,dept:`CEO Office`,status:`analyzing`,progress:85,task:`3단계 설계 승인 검토 중`},{id:`CTO-100`,name:`설계 총괄 컨설턴트`,dept:`CTO Office`,status:`success`,progress:100,task:`프레임워크 v6.1 검증 완료`},{id:`SYS-101`,name:`시스템 엔지니어`,dept:`Engineering`,status:`analyzing`,progress:38,task:`EMS 아키텍처 SLD 작성 중`}],Pd=[{id:1,type:`success`,text:`[SYS] BESS-AI.LOCAL CONTROL CENTER v6.1 ONLINE.`},{id:2,type:``,text:`[CORE-001] Mission active. Waiting for command...`}],Fd=(0,T.memo)(({onFocusAgent:e,onNavigate:t})=>{let[n,r]=(0,T.useState)(Nd),[i,a]=(0,T.useState)(Md),[o,s]=(0,T.useState)(Pd),[c,l]=(0,T.useState)(``),u=(0,T.useRef)(3),[d,f]=(0,T.useState)(0),[p,m]=(0,T.useState)(82),[h,g]=(0,T.useState)([]),[_,w]=(0,T.useState)(!1),[re,ie]=(0,T.useState)(rd[0].id),[oe,le]=(0,T.useState)(!1),[ue,pe]=(0,T.useState)(null),E=(0,T.useRef)([]),me=(0,T.useRef)(new Map),he=(0,T.useRef)(null),ge=(0,T.useRef)(null),_e=(0,T.useRef)(null),ve=(0,T.useRef)(null),D=(0,T.useRef)(null);(0,T.useEffect)(()=>{let e=ve.current;if(e==null||D.current===e)return;let t=_e.current?.querySelector(`[data-log-id="${e}"]`);t&&(t.scrollIntoView({block:`start`,behavior:`smooth`}),D.current=e)},[o]),(0,T.useEffect)(()=>{let e=!0;return v().then(t=>{e&&(E.current=t,m(t.length))}).catch(()=>{}),te().then(t=>{let n=new Map;for(let e of t.links){if(e.type!==`collab`)continue;let t=typeof e.source==`string`?e.source:e.source.id,r=typeof e.target==`string`?e.target:e.target.id;n.has(t)||n.set(t,new Set),n.has(r)||n.set(r,new Set),n.get(t).add(r),n.get(r).add(t)}e&&(me.current=n)}).catch(()=>{}),y().then(t=>{e&&(he.current=t,pe(t))}).catch(()=>{}),C().then(t=>{e&&(ge.current=t)}).catch(()=>{}),()=>{e=!1}},[]);let O=(0,T.useCallback)((e,t)=>{let n=he.current;if(!n)return;let r=S(e,x(e,t).map(e=>({id:e.id,name:e.name,key:e.key})),n,ge.current);r.length&&s(e=>[...e,...r.map(e=>({id:u.current++,...e}))])},[]),ye=(0,T.useMemo)(()=>n.some(e=>e.status===`analyzing`),[n]);(0,T.useEffect)(()=>{if(!ye)return;let e=setInterval(()=>{r(e=>e.map(e=>{if(e.status!==`analyzing`)return e;let t=Math.min(e.progress+Math.floor(Math.random()*3)+1,100);return{...e,progress:t,status:t===100?`success`:`analyzing`}})),f(e=>(e+1)%Math.max(i.length,1))},2800);return()=>clearInterval(e)},[ye,i.length]);let k=(0,T.useCallback)((e,t)=>{let n=ne(e,t);s(e=>[...e,...n.logs.map(e=>({id:u.current++,...e}))]),n.matched_agents?.length&&g(n.matched_agents),O(e,t)},[O]),be=(0,T.useCallback)(async e=>{let t=E.current;t.length||(t=await v(),E.current=t,m(t.length));let n=x(e,t)[0],r=n?.id??`CEO-001`,i=n?.name??`BESS Orchestrator`;n&&g([{id:n.id,name:n.name,dept:n.dept,color:n.color,label:n.name}]);let a=u.current++;s(e=>[...e,{id:a,type:`warn`,text:`[${r}] ${i} · ${re.replace(`claude-`,``)} 응답 중…`}]);let o=window.localStorage.getItem(nd);if(o){try{let c=n?ee(n):`당신은 BESS EPC 전문가 조직의 오케스트레이터입니다. 한국어로 정확하고 간결하게 답하세요.`,l=``;s(e=>e.map(e=>e.id===a?{...e,type:``,text:`[${r}] ${i}: `}:e)),await b(o,re,c,e,e=>{l+=e,s(e=>e.map(e=>e.id===a?{...e,text:`[${r}] ${i}: ${l}`}:e))}),l.trim()||(s(e=>e.map(e=>e.id===a?{...e,type:`warn`,text:`[SYS] 빈 응답 — 정적 매칭으로 대체합니다.`}:e)),k(e,t))}catch(n){window.localStorage.removeItem(nd);let r=`[SYS] 본인 API 키 오류(${(n instanceof Error?n.message:String(n)).slice(0,80)}) — 키를 삭제했습니다. 실시간 OFF 전환.`;console.log(r),s(e=>e.map(e=>e.id===a?{...e,type:`error`,text:r}:e)),w(!1),k(e,t)}return}try{let n=await fetch(ed,{method:`POST`,headers:{"Content-Type":`application/json`,"X-Access-Key":window.localStorage.getItem(td)||``},body:JSON.stringify({model:re,agentId:r,message:e})}),o=n.headers.get(`content-type`)||``,c=e=>s(t=>t.map(t=>t.id===a?{...t,type:`warn`,text:e}:t));if(n.status===401){window.localStorage.removeItem(td),c(`[SYS] 액세스 키 불일치 — 실시간 OFF로 전환합니다.`),console.log(`[SYS] 액세스 키 불일치 — 실시간 OFF로 전환합니다.`),w(!1),k(e,t);return}if(o.includes(`text/html`)){c(`[SYS] 실시간 백엔드(/api/chat) 미배포 — 정적 매칭으로 대체합니다.`),k(e,t);return}if(!n.ok){let r=(await n.text().catch(()=>``)).trim()||`HTTP ${n.status}`;c(`[SYS] 실시간 백엔드 응답(${n.status}): ${r.slice(0,100)} — 정적 매칭으로 대체합니다.`),k(e,t);return}if(!n.body){c(`[SYS] 스트림 없음 — 정적 매칭으로 대체합니다.`),k(e,t);return}let l=n.body.getReader(),u=new TextDecoder,d=``;for(s(e=>e.map(e=>e.id===a?{...e,type:``,text:`[${r}] ${i}: `}:e));;){let{done:e,value:t}=await l.read();if(e)break;d+=u.decode(t,{stream:!0}),s(e=>e.map(e=>e.id===a?{...e,text:`[${r}] ${i}: ${d}`}:e))}d.trim()||(s(e=>e.map(e=>e.id===a?{...e,type:`warn`,text:`[SYS] 빈 응답 — 정적 매칭으로 대체합니다.`}:e)),k(e,t))}catch(n){s(e=>e.map(e=>e.id===a?{...e,type:`error`,text:`[SYS] 실시간 응답 실패(${String(n).slice(0,60)}) — 정적 매칭으로 대체합니다.`}:e)),k(e,t)}},[re,k]),xe=(0,T.useCallback)(()=>{let e=window.prompt(`실시간 상담 키 입력 — 소유자 액세스 키 또는 본인 Anthropic API 키(sk-ant-…)`)?.trim();if(!e)return console.log(`[SYS] 키가 필요합니다 — 실시간 상담은 소유자 액세스 키 또는 본인 API 키가 필요합니다.`),!1;if(e.startsWith(`sk-ant-`)){window.localStorage.setItem(nd,e);let t=`[SYS] 본인 API 키 모드(디바이스 저장) — 웹검색 도구 미지원·본인 크레딧 과금. 공용 PC에서는 사용 후 키를 삭제하세요.`;console.log(t),s(e=>[...e,{id:u.current++,type:`warn`,text:t}])}else window.localStorage.setItem(td,e);return!0},[]),A=(0,T.useCallback)(async()=>{if(!c.trim())return;let e=c;l(``);let t=u.current++;ve.current=t,s(n=>[...n,{id:t,type:`cmd`,text:`> ${e}`}]);let n=e.trim();if(n===`키 삭제`||n===`키 변경`){window.localStorage.removeItem(td),window.localStorage.removeItem(nd),n===`키 삭제`?(s(e=>[...e,{id:u.current++,type:`warn`,text:`[SYS] 저장된 실시간 키를 모두 삭제했습니다. 실시간 OFF.`}]),w(!1)):xe()?w(!0):(s(e=>[...e,{id:u.current++,type:`warn`,text:`[SYS] 키 입력이 취소되었습니다. 실시간 OFF.`}]),w(!1));return}if(_){await be(e);return}try{let t=E.current;t.length||(t=await v(),E.current=t,m(t.length));let n=ne(e,t),i=n.logs.map(e=>({id:u.current++,...e}));s(e=>[...e,...i]),n.matched_agents&&n.matched_agents.length>0&&(a([Md[0],...n.matched_agents.map(e=>({id:e.id,label:e.label,color:e.color,defaultActive:!0}))]),g(n.matched_agents),r(e=>{let t=new Set(e.map(e=>e.id)),r=n.matched_agents.filter(e=>!t.has(e.id)).map(e=>({id:e.id,name:e.name,dept:e.dept,status:`analyzing`,progress:Math.floor(Math.random()*15),task:`지침 분석 및 작업 착수 중...`}));return[...e,...r].slice(-8)})),O(e,t)}catch{s(e=>[...e,{id:u.current++,type:`error`,text:`[SYS] 에이전트 데이터 로드 실패. /agents.json 경로를 확인하십시오.`}])}},[c,_,be,O,xe]),Se=(0,T.useCallback)(()=>{if(_){w(!1);return}let e=!!window.localStorage.getItem(td),t=!!window.localStorage.getItem(nd);if(!e&&!t){if(!xe())return}else s(e=>[...e,{id:u.current++,type:`warn`,text:`[SYS] 저장된 키로 실시간 ON — 키 교체는 '키 변경', 제거는 '키 삭제' 입력.`}]);w(!0)},[_,xe]);return(0,$.jsxs)(id,{children:[(0,$.jsxs)(ad,{children:[(0,$.jsx)(`h1`,{children:`⚡ 시스템 현황 — BESS-AI.LOCAL`}),(0,$.jsxs)(wd,{children:[ue&&(0,$.jsxs)(Td,{href:`/growth/`,title:`최근 갱신 ${ue.updated}`,children:[`🌱 누적 지식 `,ue.totals.all??0,`건 · 최근 7일 +`,(ue.daily??[]).slice(-7).reduce((e,t)=>e+t.added,0)]}),t&&(0,$.jsx)(`button`,{onClick:()=>t(`graph3d`),title:`3D 지식 노드 및 에이전트 관계도 열기`,style:{display:`flex`,alignItems:`center`,gap:`6px`,padding:`5px 12px`,background:`rgba(59, 130, 246, 0.15)`,border:`1px solid rgba(59, 130, 246, 0.4)`,borderRadius:`20px`,color:`#60A5FA`,fontSize:`11px`,fontWeight:700,cursor:`pointer`,transition:`all 0.2s ease`},children:`🕸 3D 관계도`}),t&&(0,$.jsx)(`button`,{onClick:()=>t(`simulation`),title:`BESS 실시간 관제 모니터링 & EMT 시뮬레이션 허브 열기`,style:{display:`flex`,alignItems:`center`,gap:`5px`,padding:`5px 12px`,background:`rgba(16, 185, 129, 0.15)`,border:`1px solid rgba(16, 185, 129, 0.4)`,borderRadius:`20px`,color:`#34D399`,fontSize:`11px`,fontWeight:700,cursor:`pointer`,transition:`all 0.2s ease`},children:`🧬 관제 시뮬레이션`}),(0,$.jsxs)(Cd,{children:[(0,$.jsx)(Sd,{}),`실시간 세션 활성`]})]})]}),(0,$.jsxs)(od,{children:[(0,$.jsxs)(sd,{children:[(0,$.jsx)(`div`,{className:`label`,children:`전체 에이전트`}),(0,$.jsx)(`div`,{className:`value`,children:p}),(0,$.jsx)(`div`,{className:`sub`,children:`v6.3 分散 시스템`})]}),(0,$.jsxs)(sd,{children:[(0,$.jsx)(`div`,{className:`label`,children:`활성 스웜`}),(0,$.jsx)(`div`,{className:`value`,style:{color:`#60A5FA`},children:i.length}),(0,$.jsx)(`div`,{className:`sub`,children:`협업 협의체`})]}),(0,$.jsxs)(sd,{onClick:()=>t?.(`graph3d`),title:`클릭 시 3D 지식 노드 및 관계도 인터랙티브 맵으로 이동`,style:{cursor:t?`pointer`:`default`,transition:`border-color 0.2s`},children:[(0,$.jsx)(`div`,{className:`label`,children:`지식 베이스 · 3D 관계도`}),(0,$.jsxs)(`div`,{className:`value`,style:{color:`#34D399`},children:[`400+ `,(0,$.jsx)(`span`,{style:{fontSize:`14px`,color:`#60A5FA`},children:`🕸 3D`})]}),(0,$.jsx)(`div`,{className:`sub`,children:`3,315건 지식 원장 · 1,131 링크 →`})]}),(0,$.jsxs)(sd,{children:[(0,$.jsx)(`div`,{className:`label`,children:`네트워크 부하`}),(0,$.jsx)(`div`,{className:`value`,style:{color:`#A855F7`},children:`최적`}),(0,$.jsx)(`div`,{className:`sub`,children:`응답 < 85ms`})]})]}),(0,$.jsx)($u,{}),(0,$.jsx)(Vu,{onFocusAgent:e,onNavigate:t}),(0,$.jsxs)(cd,{children:[(0,$.jsx)(ld,{children:(0,$.jsx)(zc,{children:n.map(t=>(0,$.jsxs)(ud,{"data-agent-id":t.id,layout:!0,initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},onClick:()=>e?.(t.id),title:`클릭 → 3D 지식맵에서 관계 포커스`,style:{cursor:e?`pointer`:`default`},children:[(0,$.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-start`},children:[(0,$.jsxs)(`div`,{children:[(0,$.jsx)(`div`,{style:{fontSize:13,fontWeight:700,color:`#F9FAFB`},children:t.name}),(0,$.jsxs)(`div`,{style:{fontSize:10,color:`#6B7280`,marginTop:1},children:[t.id,` · `,t.dept]})]}),(0,$.jsx)(dd,{$status:t.status,children:t.status===`analyzing`?`분석 중`:`완료`})]}),(0,$.jsx)(fd,{$pct:t.progress,$color:t.status===`success`?`#10B981`:`#3B82F6`}),(0,$.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`center`,gap:6,marginTop:2},children:[(0,$.jsx)(`span`,{style:{fontSize:11,color:`#9CA3AF`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`},children:t.status===`success`?`✅ 분석 완료 및 리포트 대기`:`⏳ ${t.task}`}),e&&(0,$.jsx)(`span`,{style:{fontSize:10,color:`#60A5FA`,flexShrink:0},children:`🧠 3D`})]})]},t.id))})}),oe&&(0,$.jsx)(`div`,{onClick:()=>le(!1),title:`배경 클릭 시 축소`,style:{position:`fixed`,inset:0,background:`rgba(0,0,0,0.62)`,backdropFilter:`blur(2px)`,zIndex:199}}),(0,$.jsxs)(pd,{style:oe?{position:`fixed`,top:`5vh`,left:`4vw`,width:`min(1100px, 92vw)`,height:`88vh`,maxWidth:`92vw`,maxHeight:`90vh`,minWidth:300,minHeight:260,zIndex:200,resize:`both`,overflow:`hidden`,boxShadow:`0 30px 80px rgba(0,0,0,0.7)`}:void 0,children:[(0,$.jsxs)(md,{children:[(0,$.jsx)(fe,{size:14,color:`#3B82F6`}),` Mission Control Console`,(0,$.jsxs)(`div`,{style:{marginLeft:`auto`,display:`flex`,alignItems:`center`,gap:8},children:[(0,$.jsxs)(`button`,{onClick:Se,title:_?`실시간 Claude 응답 사용 중 (클릭=끄기)`:`실시간 Claude 응답 사용 (클릭=켜기, 액세스 키 필요)`,style:{display:`flex`,alignItems:`center`,gap:6,cursor:`pointer`,fontSize:11,fontWeight:700,padding:`4px 9px`,borderRadius:20,border:`1px solid ${_?`rgba(52,211,153,0.5)`:`rgba(148,163,184,0.3)`}`,background:_?`rgba(16,185,129,0.14)`:`rgba(255,255,255,0.03)`,color:_?`#34D399`:`#9CA3AF`},children:[(0,$.jsx)(`span`,{style:{width:7,height:7,borderRadius:`50%`,background:_?`#34D399`:`#6B7280`,boxShadow:_?`0 0 7px #34D399`:`none`}}),`실시간 `,_?`ON`:`OFF`]}),_&&(0,$.jsx)(`select`,{value:re,onChange:e=>ie(e.target.value),title:`Claude 모델 선택`,style:{fontSize:10.5,background:`rgba(0,0,0,0.4)`,color:`#D1D5DB`,border:`1px solid rgba(148,163,184,0.3)`,borderRadius:8,padding:`4px 6px`,outline:`none`,maxWidth:150},children:rd.map(e=>(0,$.jsx)(`option`,{value:e.id,style:{background:`#0a0e1a`},children:e.label},e.id))}),(0,$.jsx)(`button`,{onClick:()=>le(e=>!e),title:oe?`대화창 축소`:`대화창 확장 (크게 보기·크기 조절)`,"aria-label":oe?`대화창 축소`:`대화창 확장`,style:{display:`flex`,alignItems:`center`,justifyContent:`center`,cursor:`pointer`,background:`rgba(255,255,255,0.04)`,border:`1px solid rgba(148,163,184,0.3)`,borderRadius:7,color:`#9CA3AF`,width:26,height:24},children:oe?(0,$.jsx)(ce,{size:13}):(0,$.jsx)(se,{size:13})})]})]}),(0,$.jsx)(hd,{ref:_e,children:o.map(e=>(0,$.jsx)(gd,{"data-log-id":e.id,$type:e.type,children:e.text},e.id))}),(0,$.jsxs)(_d,{children:[(0,$.jsx)(vd,{value:c,onChange:e=>l(e.target.value),onKeyDown:e=>e.key===`Enter`&&A(),placeholder:`커맨드 입력 (예: '배터리 설계전략' / '전재 타당성')`}),(0,$.jsx)(xd,{onClick:A,"aria-label":`명령 전송`,children:(0,$.jsx)(de,{size:16})})]})]})]}),(0,$.jsxs)(yd,{children:[(0,$.jsxs)(Ed,{children:[(0,$.jsx)(ae,{size:16,color:`#3B82F6`}),` 동적 콜라보레이션 스웜 — 에이전트 실시간 협업 체계`]}),(0,$.jsx)(bd,{children:(0,$.jsx)(zc,{children:i.map((t,n)=>(0,$.jsxs)(T.Fragment,{children:[(0,$.jsxs)(kd,{initial:{opacity:0,x:-20,scale:.9},animate:{opacity:1,x:0,scale:1},$active:!0,$color:t.color,onClick:()=>{e&&t.id!==`CORE-001`&&e(t.id)},title:t.id===`CORE-001`?void 0:`클릭 → 3D 지식맵에서 관계 포커스`,style:{cursor:e&&t.id!==`CORE-001`?`pointer`:`default`},children:[(0,$.jsx)(`div`,{style:{width:7,height:7,borderRadius:`50%`,background:t.color,marginBottom:2}}),(0,$.jsx)(`div`,{className:`label`,children:t.label}),(0,$.jsx)(`div`,{className:`id`,children:t.id})]}),n<i.length-1&&(0,$.jsxs)(Ad,{$active:d===n,viewBox:`0 0 36 24`,initial:{opacity:0},animate:{opacity:1},children:[(0,$.jsx)(`line`,{x1:`4`,y1:`12`,x2:`32`,y2:`12`}),(0,$.jsx)(`polyline`,{points:`26,8 32,12 26,16`,stroke:`#60A5FA`,strokeWidth:`1.5`,fill:`none`})]})]},t.id))})}),h.length>0&&(0,$.jsx)(`div`,{style:{borderTop:`1px solid rgba(255,255,255,0.08)`,paddingTop:12},children:(0,$.jsx)(jd,{agents:h,collabAdj:me.current,onFocusAgent:e})})]})]})});export{Fd as default};