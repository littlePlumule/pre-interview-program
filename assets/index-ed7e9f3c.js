(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();function Ln(e,t){const n=Object.create(null),s=e.split(",");for(let o=0;o<s.length;o++)n[s[o]]=!0;return t?o=>!!n[o.toLowerCase()]:o=>!!n[o]}const W={},it=[],Te=()=>{},lr=()=>!1,cr=/^on[^a-z]/,rn=e=>cr.test(e),Bn=e=>e.startsWith("onUpdate:"),ce=Object.assign,Vn=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ur=Object.prototype.hasOwnProperty,R=(e,t)=>ur.call(e,t),O=Array.isArray,lt=e=>mt(e)==="[object Map]",gt=e=>mt(e)==="[object Set]",ms=e=>mt(e)==="[object Date]",fr=e=>mt(e)==="[object RegExp]",S=e=>typeof e=="function",G=e=>typeof e=="string",Ft=e=>typeof e=="symbol",q=e=>e!==null&&typeof e=="object",Gs=e=>q(e)&&S(e.then)&&S(e.catch),eo=Object.prototype.toString,mt=e=>eo.call(e),ar=e=>mt(e).slice(8,-1),to=e=>mt(e)==="[object Object]",Hn=e=>G(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Zt=Ln(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ln=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},dr=/-(\w)/g,Fe=ln(e=>e.replace(dr,(t,n)=>n?n.toUpperCase():"")),pr=/\B([A-Z])/g,tt=ln(e=>e.replace(pr,"-$1").toLowerCase()),cn=ln(e=>e.charAt(0).toUpperCase()+e.slice(1)),yn=ln(e=>e?`on${cn(e)}`:""),Pt=(e,t)=>!Object.is(e,t),ct=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Gt=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},en=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let _s;const $n=()=>_s||(_s=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Wn(e){if(O(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],o=G(s)?_r(s):Wn(s);if(o)for(const r in o)t[r]=o[r]}return t}else{if(G(e))return e;if(q(e))return e}}const hr=/;(?![^(]*\))/g,gr=/:([^]+)/,mr=/\/\*[^]*?\*\//g;function _r(e){const t={};return e.replace(mr,"").split(hr).forEach(n=>{if(n){const s=n.split(gr);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function _t(e){let t="";if(G(e))t=e;else if(O(e))for(let n=0;n<e.length;n++){const s=_t(e[n]);s&&(t+=s+" ")}else if(q(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const br="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",yr=Ln(br);function no(e){return!!e||e===""}function xr(e,t){if(e.length!==t.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=jt(e[s],t[s]);return n}function jt(e,t){if(e===t)return!0;let n=ms(e),s=ms(t);if(n||s)return n&&s?e.getTime()===t.getTime():!1;if(n=Ft(e),s=Ft(t),n||s)return e===t;if(n=O(e),s=O(t),n||s)return n&&s?xr(e,t):!1;if(n=q(e),s=q(t),n||s){if(!n||!s)return!1;const o=Object.keys(e).length,r=Object.keys(t).length;if(o!==r)return!1;for(const i in e){const l=e.hasOwnProperty(i),u=t.hasOwnProperty(i);if(l&&!u||!l&&u||!jt(e[i],t[i]))return!1}}return String(e)===String(t)}function qn(e,t){return e.findIndex(n=>jt(n,t))}const Se=e=>G(e)?e:e==null?"":O(e)||q(e)&&(e.toString===eo||!S(e.toString))?JSON.stringify(e,so,2):String(e),so=(e,t)=>t&&t.__v_isRef?so(e,t.value):lt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,o])=>(n[`${s} =>`]=o,n),{})}:gt(t)?{[`Set(${t.size})`]:[...t.values()]}:q(t)&&!O(t)&&!to(t)?String(t):t;let xe;class vr{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xe,!t&&xe&&(this.index=(xe.scopes||(xe.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=xe;try{return xe=this,t()}finally{xe=n}}}on(){xe=this}off(){xe=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function wr(e,t=xe){t&&t.active&&t.effects.push(e)}function Tr(){return xe}const zn=e=>{const t=new Set(e);return t.w=0,t.n=0,t},oo=e=>(e.w&Le)>0,ro=e=>(e.n&Le)>0,Cr=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Le},Er=e=>{const{deps:t}=e;if(t.length){let n=0;for(let s=0;s<t.length;s++){const o=t[s];oo(o)&&!ro(o)?o.delete(e):t[n++]=o,o.w&=~Le,o.n&=~Le}t.length=n}},On=new WeakMap;let vt=0,Le=1;const In=30;let ve;const Ye=Symbol(""),Fn=Symbol("");class Jn{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,wr(this,s)}run(){if(!this.active)return this.fn();let t=ve,n=ke;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ve,ve=this,ke=!0,Le=1<<++vt,vt<=In?Cr(this):bs(this),this.fn()}finally{vt<=In&&Er(this),Le=1<<--vt,ve=this.parent,ke=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ve===this?this.deferStop=!0:this.active&&(bs(this),this.onStop&&this.onStop(),this.active=!1)}}function bs(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let ke=!0;const io=[];function bt(){io.push(ke),ke=!1}function yt(){const e=io.pop();ke=e===void 0?!0:e}function pe(e,t,n){if(ke&&ve){let s=On.get(e);s||On.set(e,s=new Map);let o=s.get(n);o||s.set(n,o=zn()),lo(o)}}function lo(e,t){let n=!1;vt<=In?ro(e)||(e.n|=Le,n=!oo(e)):n=!e.has(ve),n&&(e.add(ve),ve.deps.push(e))}function Ne(e,t,n,s,o,r){const i=On.get(e);if(!i)return;let l=[];if(t==="clear")l=[...i.values()];else if(n==="length"&&O(e)){const u=Number(s);i.forEach((a,d)=>{(d==="length"||d>=u)&&l.push(a)})}else switch(n!==void 0&&l.push(i.get(n)),t){case"add":O(e)?Hn(n)&&l.push(i.get("length")):(l.push(i.get(Ye)),lt(e)&&l.push(i.get(Fn)));break;case"delete":O(e)||(l.push(i.get(Ye)),lt(e)&&l.push(i.get(Fn)));break;case"set":lt(e)&&l.push(i.get(Ye));break}if(l.length===1)l[0]&&Pn(l[0]);else{const u=[];for(const a of l)a&&u.push(...a);Pn(zn(u))}}function Pn(e,t){const n=O(e)?e:[...e];for(const s of n)s.computed&&ys(s);for(const s of n)s.computed||ys(s)}function ys(e,t){(e!==ve||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Ar=Ln("__proto__,__v_isRef,__isVue"),co=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ft)),$r=Yn(),Or=Yn(!1,!0),Ir=Yn(!0),xs=Fr();function Fr(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=j(this);for(let r=0,i=this.length;r<i;r++)pe(s,"get",r+"");const o=s[t](...n);return o===-1||o===!1?s[t](...n.map(j)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){bt();const s=j(this)[t].apply(this,n);return yt(),s}}),e}function Pr(e){const t=j(this);return pe(t,"has",e),t.hasOwnProperty(e)}function Yn(e=!1,t=!1){return function(s,o,r){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&r===(e?t?zr:ho:t?po:ao).get(s))return s;const i=O(s);if(!e){if(i&&R(xs,o))return Reflect.get(xs,o,r);if(o==="hasOwnProperty")return Pr}const l=Reflect.get(s,o,r);return(Ft(o)?co.has(o):Ar(o))||(e||pe(s,"get",o),t)?l:ne(l)?i&&Hn(o)?l:l.value:q(l)?e?go(l):Qn(l):l}}const Mr=uo(),Sr=uo(!0);function uo(e=!1){return function(n,s,o,r){let i=n[s];if(dt(i)&&ne(i)&&!ne(o))return!1;if(!e&&(!tn(o)&&!dt(o)&&(i=j(i),o=j(o)),!O(n)&&ne(i)&&!ne(o)))return i.value=o,!0;const l=O(n)&&Hn(s)?Number(s)<n.length:R(n,s),u=Reflect.set(n,s,o,r);return n===j(r)&&(l?Pt(o,i)&&Ne(n,"set",s,o):Ne(n,"add",s,o)),u}}function Nr(e,t){const n=R(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&Ne(e,"delete",t,void 0),s}function Rr(e,t){const n=Reflect.has(e,t);return(!Ft(t)||!co.has(t))&&pe(e,"has",t),n}function Dr(e){return pe(e,"iterate",O(e)?"length":Ye),Reflect.ownKeys(e)}const fo={get:$r,set:Mr,deleteProperty:Nr,has:Rr,ownKeys:Dr},Ur={get:Ir,set(e,t){return!0},deleteProperty(e,t){return!0}},jr=ce({},fo,{get:Or,set:Sr}),Xn=e=>e,un=e=>Reflect.getPrototypeOf(e);function Vt(e,t,n=!1,s=!1){e=e.__v_raw;const o=j(e),r=j(t);n||(t!==r&&pe(o,"get",t),pe(o,"get",r));const{has:i}=un(o),l=s?Xn:n?es:Mt;if(i.call(o,t))return l(e.get(t));if(i.call(o,r))return l(e.get(r));e!==o&&e.get(t)}function Ht(e,t=!1){const n=this.__v_raw,s=j(n),o=j(e);return t||(e!==o&&pe(s,"has",e),pe(s,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function Wt(e,t=!1){return e=e.__v_raw,!t&&pe(j(e),"iterate",Ye),Reflect.get(e,"size",e)}function vs(e){e=j(e);const t=j(this);return un(t).has.call(t,e)||(t.add(e),Ne(t,"add",e,e)),this}function ws(e,t){t=j(t);const n=j(this),{has:s,get:o}=un(n);let r=s.call(n,e);r||(e=j(e),r=s.call(n,e));const i=o.call(n,e);return n.set(e,t),r?Pt(t,i)&&Ne(n,"set",e,t):Ne(n,"add",e,t),this}function Ts(e){const t=j(this),{has:n,get:s}=un(t);let o=n.call(t,e);o||(e=j(e),o=n.call(t,e)),s&&s.call(t,e);const r=t.delete(e);return o&&Ne(t,"delete",e,void 0),r}function Cs(){const e=j(this),t=e.size!==0,n=e.clear();return t&&Ne(e,"clear",void 0,void 0),n}function qt(e,t){return function(s,o){const r=this,i=r.__v_raw,l=j(i),u=t?Xn:e?es:Mt;return!e&&pe(l,"iterate",Ye),i.forEach((a,d)=>s.call(o,u(a),u(d),r))}}function zt(e,t,n){return function(...s){const o=this.__v_raw,r=j(o),i=lt(r),l=e==="entries"||e===Symbol.iterator&&i,u=e==="keys"&&i,a=o[e](...s),d=n?Xn:t?es:Mt;return!t&&pe(r,"iterate",u?Fn:Ye),{next(){const{value:_,done:x}=a.next();return x?{value:_,done:x}:{value:l?[d(_[0]),d(_[1])]:d(_),done:x}},[Symbol.iterator](){return this}}}}function De(e){return function(...t){return e==="delete"?!1:this}}function kr(){const e={get(r){return Vt(this,r)},get size(){return Wt(this)},has:Ht,add:vs,set:ws,delete:Ts,clear:Cs,forEach:qt(!1,!1)},t={get(r){return Vt(this,r,!1,!0)},get size(){return Wt(this)},has:Ht,add:vs,set:ws,delete:Ts,clear:Cs,forEach:qt(!1,!0)},n={get(r){return Vt(this,r,!0)},get size(){return Wt(this,!0)},has(r){return Ht.call(this,r,!0)},add:De("add"),set:De("set"),delete:De("delete"),clear:De("clear"),forEach:qt(!0,!1)},s={get(r){return Vt(this,r,!0,!0)},get size(){return Wt(this,!0)},has(r){return Ht.call(this,r,!0)},add:De("add"),set:De("set"),delete:De("delete"),clear:De("clear"),forEach:qt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=zt(r,!1,!1),n[r]=zt(r,!0,!1),t[r]=zt(r,!1,!0),s[r]=zt(r,!0,!0)}),[e,n,t,s]}const[Kr,Lr,Br,Vr]=kr();function Zn(e,t){const n=t?e?Vr:Br:e?Lr:Kr;return(s,o,r)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?s:Reflect.get(R(n,o)&&o in s?n:s,o,r)}const Hr={get:Zn(!1,!1)},Wr={get:Zn(!1,!0)},qr={get:Zn(!0,!1)},ao=new WeakMap,po=new WeakMap,ho=new WeakMap,zr=new WeakMap;function Jr(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yr(e){return e.__v_skip||!Object.isExtensible(e)?0:Jr(ar(e))}function Qn(e){return dt(e)?e:Gn(e,!1,fo,Hr,ao)}function Xr(e){return Gn(e,!1,jr,Wr,po)}function go(e){return Gn(e,!0,Ur,qr,ho)}function Gn(e,t,n,s,o){if(!q(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=o.get(e);if(r)return r;const i=Yr(e);if(i===0)return e;const l=new Proxy(e,i===2?s:n);return o.set(e,l),l}function ut(e){return dt(e)?ut(e.__v_raw):!!(e&&e.__v_isReactive)}function dt(e){return!!(e&&e.__v_isReadonly)}function tn(e){return!!(e&&e.__v_isShallow)}function mo(e){return ut(e)||dt(e)}function j(e){const t=e&&e.__v_raw;return t?j(t):e}function _o(e){return Gt(e,"__v_skip",!0),e}const Mt=e=>q(e)?Qn(e):e,es=e=>q(e)?go(e):e;function bo(e){ke&&ve&&(e=j(e),lo(e.dep||(e.dep=zn())))}function yo(e,t){e=j(e);const n=e.dep;n&&Pn(n)}function ne(e){return!!(e&&e.__v_isRef===!0)}function Ce(e){return Zr(e,!1)}function Zr(e,t){return ne(e)?e:new Qr(e,t)}class Qr{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:j(t),this._value=n?t:Mt(t)}get value(){return bo(this),this._value}set value(t){const n=this.__v_isShallow||tn(t)||dt(t);t=n?t:j(t),Pt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Mt(t),yo(this))}}function L(e){return ne(e)?e.value:e}const Gr={get:(e,t,n)=>L(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const o=e[t];return ne(o)&&!ne(n)?(o.value=n,!0):Reflect.set(e,t,n,s)}};function xo(e){return ut(e)?e:new Proxy(e,Gr)}class ei{constructor(t,n,s,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Jn(t,()=>{this._dirty||(this._dirty=!0,yo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=s}get value(){const t=j(this);return bo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function ti(e,t,n=!1){let s,o;const r=S(e);return r?(s=e,o=Te):(s=e.get,o=e.set),new ei(s,o,r||!o,n)}function Ke(e,t,n,s){let o;try{o=s?e(...s):e()}catch(r){fn(r,t,n)}return o}function Ee(e,t,n,s){if(S(e)){const r=Ke(e,t,n,s);return r&&Gs(r)&&r.catch(i=>{fn(i,t,n)}),r}const o=[];for(let r=0;r<e.length;r++)o.push(Ee(e[r],t,n,s));return o}function fn(e,t,n,s=!0){const o=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,l=n;for(;r;){const a=r.ec;if(a){for(let d=0;d<a.length;d++)if(a[d](e,i,l)===!1)return}r=r.parent}const u=t.appContext.config.errorHandler;if(u){Ke(u,null,10,[e,i,l]);return}}ni(e,n,o,s)}function ni(e,t,n,s=!0){console.error(e)}let St=!1,Mn=!1;const ue=[];let Ie=0;const ft=[];let Me=null,qe=0;const vo=Promise.resolve();let ts=null;function si(e){const t=ts||vo;return e?t.then(this?e.bind(this):e):t}function oi(e){let t=Ie+1,n=ue.length;for(;t<n;){const s=t+n>>>1;Nt(ue[s])<e?t=s+1:n=s}return t}function ns(e){(!ue.length||!ue.includes(e,St&&e.allowRecurse?Ie+1:Ie))&&(e.id==null?ue.push(e):ue.splice(oi(e.id),0,e),wo())}function wo(){!St&&!Mn&&(Mn=!0,ts=vo.then(Co))}function ri(e){const t=ue.indexOf(e);t>Ie&&ue.splice(t,1)}function ii(e){O(e)?ft.push(...e):(!Me||!Me.includes(e,e.allowRecurse?qe+1:qe))&&ft.push(e),wo()}function Es(e,t=St?Ie+1:0){for(;t<ue.length;t++){const n=ue[t];n&&n.pre&&(ue.splice(t,1),t--,n())}}function To(e){if(ft.length){const t=[...new Set(ft)];if(ft.length=0,Me){Me.push(...t);return}for(Me=t,Me.sort((n,s)=>Nt(n)-Nt(s)),qe=0;qe<Me.length;qe++)Me[qe]();Me=null,qe=0}}const Nt=e=>e.id==null?1/0:e.id,li=(e,t)=>{const n=Nt(e)-Nt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Co(e){Mn=!1,St=!0,ue.sort(li);const t=Te;try{for(Ie=0;Ie<ue.length;Ie++){const n=ue[Ie];n&&n.active!==!1&&Ke(n,null,14)}}finally{Ie=0,ue.length=0,To(),St=!1,ts=null,(ue.length||ft.length)&&Co()}}function ci(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||W;let o=n;const r=t.startsWith("update:"),i=r&&t.slice(7);if(i&&i in s){const d=`${i==="modelValue"?"model":i}Modifiers`,{number:_,trim:x}=s[d]||W;x&&(o=n.map(I=>G(I)?I.trim():I)),_&&(o=n.map(en))}let l,u=s[l=yn(t)]||s[l=yn(Fe(t))];!u&&r&&(u=s[l=yn(tt(t))]),u&&Ee(u,e,6,o);const a=s[l+"Once"];if(a){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Ee(a,e,6,o)}}function Eo(e,t,n=!1){const s=t.emitsCache,o=s.get(e);if(o!==void 0)return o;const r=e.emits;let i={},l=!1;if(!S(e)){const u=a=>{const d=Eo(a,t,!0);d&&(l=!0,ce(i,d))};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!r&&!l?(q(e)&&s.set(e,null),null):(O(r)?r.forEach(u=>i[u]=null):ce(i,r),q(e)&&s.set(e,i),i)}function an(e,t){return!e||!rn(t)?!1:(t=t.slice(2).replace(/Once$/,""),R(e,t[0].toLowerCase()+t.slice(1))||R(e,tt(t))||R(e,t))}let ge=null,Ao=null;function nn(e){const t=ge;return ge=e,Ao=e&&e.type.__scopeId||null,t}function ui(e,t=ge,n){if(!t||e._n)return e;const s=(...o)=>{s._d&&Us(-1);const r=nn(t);let i;try{i=e(...o)}finally{nn(r),s._d&&Us(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function xn(e){const{type:t,vnode:n,proxy:s,withProxy:o,props:r,propsOptions:[i],slots:l,attrs:u,emit:a,render:d,renderCache:_,data:x,setupState:I,ctx:k,inheritAttrs:M}=e;let z,X;const E=nn(e);try{if(n.shapeFlag&4){const w=o||s;z=Oe(d.call(w,w,_,r,I,x,k)),X=u}else{const w=t;z=Oe(w.length>1?w(r,{attrs:u,slots:l,emit:a}):w(r,null)),X=t.props?u:fi(u)}}catch(w){It.length=0,fn(w,e,1),z=me(Qe)}let F=z;if(X&&M!==!1){const w=Object.keys(X),{shapeFlag:B}=F;w.length&&B&7&&(i&&w.some(Bn)&&(X=ai(X,i)),F=et(F,X))}return n.dirs&&(F=et(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),z=F,nn(E),z}const fi=e=>{let t;for(const n in e)(n==="class"||n==="style"||rn(n))&&((t||(t={}))[n]=e[n]);return t},ai=(e,t)=>{const n={};for(const s in e)(!Bn(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function di(e,t,n){const{props:s,children:o,component:r}=e,{props:i,children:l,patchFlag:u}=t,a=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return s?As(s,i,a):!!i;if(u&8){const d=t.dynamicProps;for(let _=0;_<d.length;_++){const x=d[_];if(i[x]!==s[x]&&!an(a,x))return!0}}}else return(o||l)&&(!l||!l.$stable)?!0:s===i?!1:s?i?As(s,i,a):!0:!!i;return!1}function As(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let o=0;o<s.length;o++){const r=s[o];if(t[r]!==e[r]&&!an(n,r))return!0}return!1}function pi({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const $o=e=>e.__isSuspense;function hi(e,t){t&&t.pendingBranch?O(e)?t.effects.push(...e):t.effects.push(e):ii(e)}const Jt={};function Ct(e,t,n){return Oo(e,t,n)}function Oo(e,t,{immediate:n,deep:s,flush:o,onTrack:r,onTrigger:i}=W){var l;const u=Tr()===((l=se)==null?void 0:l.scope)?se:null;let a,d=!1,_=!1;if(ne(e)?(a=()=>e.value,d=tn(e)):ut(e)?(a=()=>e,s=!0):O(e)?(_=!0,d=e.some(w=>ut(w)||tn(w)),a=()=>e.map(w=>{if(ne(w))return w.value;if(ut(w))return Je(w);if(S(w))return Ke(w,u,2)})):S(e)?t?a=()=>Ke(e,u,2):a=()=>{if(!(u&&u.isUnmounted))return x&&x(),Ee(e,u,3,[I])}:a=Te,t&&s){const w=a;a=()=>Je(w())}let x,I=w=>{x=E.onStop=()=>{Ke(w,u,4)}},k;if(Dt)if(I=Te,t?n&&Ee(t,u,3,[a(),_?[]:void 0,I]):a(),o==="sync"){const w=fl();k=w.__watcherHandles||(w.__watcherHandles=[])}else return Te;let M=_?new Array(e.length).fill(Jt):Jt;const z=()=>{if(E.active)if(t){const w=E.run();(s||d||(_?w.some((B,Z)=>Pt(B,M[Z])):Pt(w,M)))&&(x&&x(),Ee(t,u,3,[w,M===Jt?void 0:_&&M[0]===Jt?[]:M,I]),M=w)}else E.run()};z.allowRecurse=!!t;let X;o==="sync"?X=z:o==="post"?X=()=>ie(z,u&&u.suspense):(z.pre=!0,u&&(z.id=u.uid),X=()=>ns(z));const E=new Jn(a,X);t?n?z():M=E.run():o==="post"?ie(E.run.bind(E),u&&u.suspense):E.run();const F=()=>{E.stop(),u&&u.scope&&Vn(u.scope.effects,E)};return k&&k.push(F),F}function gi(e,t,n){const s=this.proxy,o=G(e)?e.includes(".")?Io(s,e):()=>s[e]:e.bind(s,s);let r;S(t)?r=t:(r=t.handler,n=t);const i=se;pt(this);const l=Oo(o,r.bind(s),n);return i?pt(i):Xe(),l}function Io(e,t){const n=t.split(".");return()=>{let s=e;for(let o=0;o<n.length&&s;o++)s=s[n[o]];return s}}function Je(e,t){if(!q(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ne(e))Je(e.value,t);else if(O(e))for(let n=0;n<e.length;n++)Je(e[n],t);else if(gt(e)||lt(e))e.forEach(n=>{Je(n,t)});else if(to(e))for(const n in e)Je(e[n],t);return e}function Et(e,t){const n=ge;if(n===null)return e;const s=gn(n)||n.proxy,o=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[i,l,u,a=W]=t[r];i&&(S(i)&&(i={mounted:i,updated:i}),i.deep&&Je(l),o.push({dir:i,instance:s,value:l,oldValue:void 0,arg:u,modifiers:a}))}return e}function He(e,t,n,s){const o=e.dirs,r=t&&t.dirs;for(let i=0;i<o.length;i++){const l=o[i];r&&(l.oldValue=r[i].value);let u=l.dir[s];u&&(bt(),Ee(u,n,8,[e.el,l,e,t]),yt())}}function Fo(e,t){e.shapeFlag&6&&e.component?Fo(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}const At=e=>!!e.type.__asyncLoader,Po=e=>e.type.__isKeepAlive,mi={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=Zo(),s=n.ctx;if(!s.renderer)return()=>{const E=t.default&&t.default();return E&&E.length===1?E[0]:E};const o=new Map,r=new Set;let i=null;const l=n.suspense,{renderer:{p:u,m:a,um:d,o:{createElement:_}}}=s,x=_("div");s.activate=(E,F,w,B,Z)=>{const Y=E.component;a(E,F,w,0,l),u(Y.vnode,E,F,w,Y,l,B,E.slotScopeIds,Z),ie(()=>{Y.isDeactivated=!1,Y.a&&ct(Y.a);const ee=E.props&&E.props.onVnodeMounted;ee&&be(ee,Y.parent,E)},l)},s.deactivate=E=>{const F=E.component;a(E,x,null,1,l),ie(()=>{F.da&&ct(F.da);const w=E.props&&E.props.onVnodeUnmounted;w&&be(w,F.parent,E),F.isDeactivated=!0},l)};function I(E){vn(E),d(E,n,l,!0)}function k(E){o.forEach((F,w)=>{const B=kn(F.type);B&&(!E||!E(B))&&M(w)})}function M(E){const F=o.get(E);!i||!rt(F,i)?I(F):i&&vn(i),o.delete(E),r.delete(E)}Ct(()=>[e.include,e.exclude],([E,F])=>{E&&k(w=>wt(E,w)),F&&k(w=>!wt(F,w))},{flush:"post",deep:!0});let z=null;const X=()=>{z!=null&&o.set(z,wn(n.subTree))};return So(X),No(X),Ro(()=>{o.forEach(E=>{const{subTree:F,suspense:w}=n,B=wn(F);if(E.type===B.type&&E.key===B.key){vn(B);const Z=B.component.da;Z&&ie(Z,w);return}I(E)})}),()=>{if(z=null,!t.default)return null;const E=t.default(),F=E[0];if(E.length>1)return i=null,E;if(!Jo(F)||!(F.shapeFlag&4)&&!(F.shapeFlag&128))return i=null,F;let w=wn(F);const B=w.type,Z=kn(At(w)?w.type.__asyncResolved||{}:B),{include:Y,exclude:ee,max:_e}=e;if(Y&&(!Z||!wt(Y,Z))||ee&&Z&&wt(ee,Z))return i=w,F;const oe=w.key==null?B:w.key,de=o.get(oe);return w.el&&(w=et(w),F.shapeFlag&128&&(F.ssContent=w)),z=oe,de?(w.el=de.el,w.component=de.component,w.transition&&Fo(w,w.transition),w.shapeFlag|=512,r.delete(oe),r.add(oe)):(r.add(oe),_e&&r.size>parseInt(_e,10)&&M(r.values().next().value)),w.shapeFlag|=256,i=w,$o(F.type)?F:w}}},_i=mi;function wt(e,t){return O(e)?e.some(n=>wt(n,t)):G(e)?e.split(",").includes(t):fr(e)?e.test(t):!1}function bi(e,t){Mo(e,"a",t)}function yi(e,t){Mo(e,"da",t)}function Mo(e,t,n=se){const s=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(dn(t,s,n),n){let o=n.parent;for(;o&&o.parent;)Po(o.parent.vnode)&&xi(s,t,n,o),o=o.parent}}function xi(e,t,n,s){const o=dn(t,e,s,!0);Do(()=>{Vn(s[t],o)},n)}function vn(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function wn(e){return e.shapeFlag&128?e.ssContent:e}function dn(e,t,n=se,s=!1){if(n){const o=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;bt(),pt(n);const l=Ee(t,n,e,i);return Xe(),yt(),l});return s?o.unshift(r):o.push(r),r}}const Re=e=>(t,n=se)=>(!Dt||e==="sp")&&dn(e,(...s)=>t(...s),n),vi=Re("bm"),So=Re("m"),wi=Re("bu"),No=Re("u"),Ro=Re("bum"),Do=Re("um"),Ti=Re("sp"),Ci=Re("rtg"),Ei=Re("rtc");function Ai(e,t=se){dn("ec",e,t)}const Uo="components",jo=Symbol.for("v-ndc");function $i(e){return G(e)?Oi(Uo,e,!1)||e:e||jo}function Oi(e,t,n=!0,s=!1){const o=ge||se;if(o){const r=o.type;if(e===Uo){const l=kn(r,!1);if(l&&(l===t||l===Fe(t)||l===cn(Fe(t))))return r}const i=$s(o[e]||r[e],t)||$s(o.appContext[e],t);return!i&&s?r:i}}function $s(e,t){return e&&(e[t]||e[Fe(t)]||e[cn(Fe(t))])}function Ze(e,t,n,s){let o;const r=n&&n[s];if(O(e)||G(e)){o=new Array(e.length);for(let i=0,l=e.length;i<l;i++)o[i]=t(e[i],i,void 0,r&&r[i])}else if(typeof e=="number"){o=new Array(e);for(let i=0;i<e;i++)o[i]=t(i+1,i,void 0,r&&r[i])}else if(q(e))if(e[Symbol.iterator])o=Array.from(e,(i,l)=>t(i,l,void 0,r&&r[l]));else{const i=Object.keys(e);o=new Array(i.length);for(let l=0,u=i.length;l<u;l++){const a=i[l];o[l]=t(e[a],a,l,r&&r[l])}}else o=[];return n&&(n[s]=o),o}const Sn=e=>e?Qo(e)?gn(e)||e.proxy:Sn(e.parent):null,$t=ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Sn(e.parent),$root:e=>Sn(e.root),$emit:e=>e.emit,$options:e=>ss(e),$forceUpdate:e=>e.f||(e.f=()=>ns(e.update)),$nextTick:e=>e.n||(e.n=si.bind(e.proxy)),$watch:e=>gi.bind(e)}),Tn=(e,t)=>e!==W&&!e.__isScriptSetup&&R(e,t),Ii={get({_:e},t){const{ctx:n,setupState:s,data:o,props:r,accessCache:i,type:l,appContext:u}=e;let a;if(t[0]!=="$"){const I=i[t];if(I!==void 0)switch(I){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return r[t]}else{if(Tn(s,t))return i[t]=1,s[t];if(o!==W&&R(o,t))return i[t]=2,o[t];if((a=e.propsOptions[0])&&R(a,t))return i[t]=3,r[t];if(n!==W&&R(n,t))return i[t]=4,n[t];Nn&&(i[t]=0)}}const d=$t[t];let _,x;if(d)return t==="$attrs"&&pe(e,"get",t),d(e);if((_=l.__cssModules)&&(_=_[t]))return _;if(n!==W&&R(n,t))return i[t]=4,n[t];if(x=u.config.globalProperties,R(x,t))return x[t]},set({_:e},t,n){const{data:s,setupState:o,ctx:r}=e;return Tn(o,t)?(o[t]=n,!0):s!==W&&R(s,t)?(s[t]=n,!0):R(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:o,propsOptions:r}},i){let l;return!!n[i]||e!==W&&R(e,i)||Tn(t,i)||(l=r[0])&&R(l,i)||R(s,i)||R($t,i)||R(o.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:R(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Os(e){return O(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Nn=!0;function Fi(e){const t=ss(e),n=e.proxy,s=e.ctx;Nn=!1,t.beforeCreate&&Is(t.beforeCreate,e,"bc");const{data:o,computed:r,methods:i,watch:l,provide:u,inject:a,created:d,beforeMount:_,mounted:x,beforeUpdate:I,updated:k,activated:M,deactivated:z,beforeDestroy:X,beforeUnmount:E,destroyed:F,unmounted:w,render:B,renderTracked:Z,renderTriggered:Y,errorCaptured:ee,serverPrefetch:_e,expose:oe,inheritAttrs:de,components:kt,directives:Kt,filters:mn}=t;if(a&&Pi(a,s,null),i)for(const Q in i){const V=i[Q];S(V)&&(s[Q]=V.bind(n))}if(o){const Q=o.call(n,n);q(Q)&&(e.data=Qn(Q))}if(Nn=!0,r)for(const Q in r){const V=r[Q],Be=S(V)?V.bind(n,n):S(V.get)?V.get.bind(n,n):Te,Lt=!S(V)&&S(V.set)?V.set.bind(n):Te,Ve=cs({get:Be,set:Lt});Object.defineProperty(s,Q,{enumerable:!0,configurable:!0,get:()=>Ve.value,set:Ae=>Ve.value=Ae})}if(l)for(const Q in l)ko(l[Q],s,n,Q);if(u){const Q=S(u)?u.call(n):u;Reflect.ownKeys(Q).forEach(V=>{Ui(V,Q[V])})}d&&Is(d,e,"c");function fe(Q,V){O(V)?V.forEach(Be=>Q(Be.bind(n))):V&&Q(V.bind(n))}if(fe(vi,_),fe(So,x),fe(wi,I),fe(No,k),fe(bi,M),fe(yi,z),fe(Ai,ee),fe(Ei,Z),fe(Ci,Y),fe(Ro,E),fe(Do,w),fe(Ti,_e),O(oe))if(oe.length){const Q=e.exposed||(e.exposed={});oe.forEach(V=>{Object.defineProperty(Q,V,{get:()=>n[V],set:Be=>n[V]=Be})})}else e.exposed||(e.exposed={});B&&e.render===Te&&(e.render=B),de!=null&&(e.inheritAttrs=de),kt&&(e.components=kt),Kt&&(e.directives=Kt)}function Pi(e,t,n=Te){O(e)&&(e=Rn(e));for(const s in e){const o=e[s];let r;q(o)?"default"in o?r=at(o.from||s,o.default,!0):r=at(o.from||s):r=at(o),ne(r)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:i=>r.value=i}):t[s]=r}}function Is(e,t,n){Ee(O(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function ko(e,t,n,s){const o=s.includes(".")?Io(n,s):()=>n[s];if(G(e)){const r=t[e];S(r)&&Ct(o,r)}else if(S(e))Ct(o,e.bind(n));else if(q(e))if(O(e))e.forEach(r=>ko(r,t,n,s));else{const r=S(e.handler)?e.handler.bind(n):t[e.handler];S(r)&&Ct(o,r,e)}}function ss(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:o,optionsCache:r,config:{optionMergeStrategies:i}}=e.appContext,l=r.get(t);let u;return l?u=l:!o.length&&!n&&!s?u=t:(u={},o.length&&o.forEach(a=>sn(u,a,i,!0)),sn(u,t,i)),q(t)&&r.set(t,u),u}function sn(e,t,n,s=!1){const{mixins:o,extends:r}=t;r&&sn(e,r,n,!0),o&&o.forEach(i=>sn(e,i,n,!0));for(const i in t)if(!(s&&i==="expose")){const l=Mi[i]||n&&n[i];e[i]=l?l(e[i],t[i]):t[i]}return e}const Mi={data:Fs,props:Ps,emits:Ps,methods:Tt,computed:Tt,beforeCreate:ae,created:ae,beforeMount:ae,mounted:ae,beforeUpdate:ae,updated:ae,beforeDestroy:ae,beforeUnmount:ae,destroyed:ae,unmounted:ae,activated:ae,deactivated:ae,errorCaptured:ae,serverPrefetch:ae,components:Tt,directives:Tt,watch:Ni,provide:Fs,inject:Si};function Fs(e,t){return t?e?function(){return ce(S(e)?e.call(this,this):e,S(t)?t.call(this,this):t)}:t:e}function Si(e,t){return Tt(Rn(e),Rn(t))}function Rn(e){if(O(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ae(e,t){return e?[...new Set([].concat(e,t))]:t}function Tt(e,t){return e?ce(Object.create(null),e,t):t}function Ps(e,t){return e?O(e)&&O(t)?[...new Set([...e,...t])]:ce(Object.create(null),Os(e),Os(t??{})):t}function Ni(e,t){if(!e)return t;if(!t)return e;const n=ce(Object.create(null),e);for(const s in t)n[s]=ae(e[s],t[s]);return n}function Ko(){return{app:null,config:{isNativeTag:lr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ri=0;function Di(e,t){return function(s,o=null){S(s)||(s=ce({},s)),o!=null&&!q(o)&&(o=null);const r=Ko(),i=new Set;let l=!1;const u=r.app={_uid:Ri++,_component:s,_props:o,_container:null,_context:r,_instance:null,version:al,get config(){return r.config},set config(a){},use(a,...d){return i.has(a)||(a&&S(a.install)?(i.add(a),a.install(u,...d)):S(a)&&(i.add(a),a(u,...d))),u},mixin(a){return r.mixins.includes(a)||r.mixins.push(a),u},component(a,d){return d?(r.components[a]=d,u):r.components[a]},directive(a,d){return d?(r.directives[a]=d,u):r.directives[a]},mount(a,d,_){if(!l){const x=me(s,o);return x.appContext=r,d&&t?t(x,a):e(x,a,_),l=!0,u._container=a,a.__vue_app__=u,gn(x.component)||x.component.proxy}},unmount(){l&&(e(null,u._container),delete u._container.__vue_app__)},provide(a,d){return r.provides[a]=d,u},runWithContext(a){on=u;try{return a()}finally{on=null}}};return u}}let on=null;function Ui(e,t){if(se){let n=se.provides;const s=se.parent&&se.parent.provides;s===n&&(n=se.provides=Object.create(s)),n[e]=t}}function at(e,t,n=!1){const s=se||ge;if(s||on){const o=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:on._context.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&S(t)?t.call(s&&s.proxy):t}}function ji(e,t,n,s=!1){const o={},r={};Gt(r,hn,1),e.propsDefaults=Object.create(null),Lo(e,t,o,r);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=s?o:Xr(o):e.type.props?e.props=o:e.props=r,e.attrs=r}function ki(e,t,n,s){const{props:o,attrs:r,vnode:{patchFlag:i}}=e,l=j(o),[u]=e.propsOptions;let a=!1;if((s||i>0)&&!(i&16)){if(i&8){const d=e.vnode.dynamicProps;for(let _=0;_<d.length;_++){let x=d[_];if(an(e.emitsOptions,x))continue;const I=t[x];if(u)if(R(r,x))I!==r[x]&&(r[x]=I,a=!0);else{const k=Fe(x);o[k]=Dn(u,l,k,I,e,!1)}else I!==r[x]&&(r[x]=I,a=!0)}}}else{Lo(e,t,o,r)&&(a=!0);let d;for(const _ in l)(!t||!R(t,_)&&((d=tt(_))===_||!R(t,d)))&&(u?n&&(n[_]!==void 0||n[d]!==void 0)&&(o[_]=Dn(u,l,_,void 0,e,!0)):delete o[_]);if(r!==l)for(const _ in r)(!t||!R(t,_))&&(delete r[_],a=!0)}a&&Ne(e,"set","$attrs")}function Lo(e,t,n,s){const[o,r]=e.propsOptions;let i=!1,l;if(t)for(let u in t){if(Zt(u))continue;const a=t[u];let d;o&&R(o,d=Fe(u))?!r||!r.includes(d)?n[d]=a:(l||(l={}))[d]=a:an(e.emitsOptions,u)||(!(u in s)||a!==s[u])&&(s[u]=a,i=!0)}if(r){const u=j(n),a=l||W;for(let d=0;d<r.length;d++){const _=r[d];n[_]=Dn(o,u,_,a[_],e,!R(a,_))}}return i}function Dn(e,t,n,s,o,r){const i=e[n];if(i!=null){const l=R(i,"default");if(l&&s===void 0){const u=i.default;if(i.type!==Function&&!i.skipFactory&&S(u)){const{propsDefaults:a}=o;n in a?s=a[n]:(pt(o),s=a[n]=u.call(null,t),Xe())}else s=u}i[0]&&(r&&!l?s=!1:i[1]&&(s===""||s===tt(n))&&(s=!0))}return s}function Bo(e,t,n=!1){const s=t.propsCache,o=s.get(e);if(o)return o;const r=e.props,i={},l=[];let u=!1;if(!S(e)){const d=_=>{u=!0;const[x,I]=Bo(_,t,!0);ce(i,x),I&&l.push(...I)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!r&&!u)return q(e)&&s.set(e,it),it;if(O(r))for(let d=0;d<r.length;d++){const _=Fe(r[d]);Ms(_)&&(i[_]=W)}else if(r)for(const d in r){const _=Fe(d);if(Ms(_)){const x=r[d],I=i[_]=O(x)||S(x)?{type:x}:ce({},x);if(I){const k=Rs(Boolean,I.type),M=Rs(String,I.type);I[0]=k>-1,I[1]=M<0||k<M,(k>-1||R(I,"default"))&&l.push(_)}}}const a=[i,l];return q(e)&&s.set(e,a),a}function Ms(e){return e[0]!=="$"}function Ss(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Ns(e,t){return Ss(e)===Ss(t)}function Rs(e,t){return O(t)?t.findIndex(n=>Ns(n,e)):S(t)&&Ns(t,e)?0:-1}const Vo=e=>e[0]==="_"||e==="$stable",os=e=>O(e)?e.map(Oe):[Oe(e)],Ki=(e,t,n)=>{if(t._n)return t;const s=ui((...o)=>os(t(...o)),n);return s._c=!1,s},Ho=(e,t,n)=>{const s=e._ctx;for(const o in e){if(Vo(o))continue;const r=e[o];if(S(r))t[o]=Ki(o,r,s);else if(r!=null){const i=os(r);t[o]=()=>i}}},Wo=(e,t)=>{const n=os(t);e.slots.default=()=>n},Li=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=j(t),Gt(t,"_",n)):Ho(t,e.slots={})}else e.slots={},t&&Wo(e,t);Gt(e.slots,hn,1)},Bi=(e,t,n)=>{const{vnode:s,slots:o}=e;let r=!0,i=W;if(s.shapeFlag&32){const l=t._;l?n&&l===1?r=!1:(ce(o,t),!n&&l===1&&delete o._):(r=!t.$stable,Ho(t,o)),i=t}else t&&(Wo(e,t),i={default:1});if(r)for(const l in o)!Vo(l)&&!(l in i)&&delete o[l]};function Un(e,t,n,s,o=!1){if(O(e)){e.forEach((x,I)=>Un(x,t&&(O(t)?t[I]:t),n,s,o));return}if(At(s)&&!o)return;const r=s.shapeFlag&4?gn(s.component)||s.component.proxy:s.el,i=o?null:r,{i:l,r:u}=e,a=t&&t.r,d=l.refs===W?l.refs={}:l.refs,_=l.setupState;if(a!=null&&a!==u&&(G(a)?(d[a]=null,R(_,a)&&(_[a]=null)):ne(a)&&(a.value=null)),S(u))Ke(u,l,12,[i,d]);else{const x=G(u),I=ne(u);if(x||I){const k=()=>{if(e.f){const M=x?R(_,u)?_[u]:d[u]:u.value;o?O(M)&&Vn(M,r):O(M)?M.includes(r)||M.push(r):x?(d[u]=[r],R(_,u)&&(_[u]=d[u])):(u.value=[r],e.k&&(d[e.k]=u.value))}else x?(d[u]=i,R(_,u)&&(_[u]=i)):I&&(u.value=i,e.k&&(d[e.k]=i))};i?(k.id=-1,ie(k,n)):k()}}}const ie=hi;function Vi(e){return Hi(e)}function Hi(e,t){const n=$n();n.__VUE__=!0;const{insert:s,remove:o,patchProp:r,createElement:i,createText:l,createComment:u,setText:a,setElementText:d,parentNode:_,nextSibling:x,setScopeId:I=Te,insertStaticContent:k}=e,M=(c,f,p,g=null,h=null,y=null,T=!1,b=null,v=!!f.dynamicChildren)=>{if(c===f)return;c&&!rt(c,f)&&(g=Bt(c),Ae(c,h,y,!0),c=null),f.patchFlag===-2&&(v=!1,f.dynamicChildren=null);const{type:m,ref:A,shapeFlag:C}=f;switch(m){case pn:z(c,f,p,g);break;case Qe:X(c,f,p,g);break;case Cn:c==null&&E(f,p,g,T);break;case le:kt(c,f,p,g,h,y,T,b,v);break;default:C&1?B(c,f,p,g,h,y,T,b,v):C&6?Kt(c,f,p,g,h,y,T,b,v):(C&64||C&128)&&m.process(c,f,p,g,h,y,T,b,v,nt)}A!=null&&h&&Un(A,c&&c.ref,y,f||c,!f)},z=(c,f,p,g)=>{if(c==null)s(f.el=l(f.children),p,g);else{const h=f.el=c.el;f.children!==c.children&&a(h,f.children)}},X=(c,f,p,g)=>{c==null?s(f.el=u(f.children||""),p,g):f.el=c.el},E=(c,f,p,g)=>{[c.el,c.anchor]=k(c.children,f,p,g,c.el,c.anchor)},F=({el:c,anchor:f},p,g)=>{let h;for(;c&&c!==f;)h=x(c),s(c,p,g),c=h;s(f,p,g)},w=({el:c,anchor:f})=>{let p;for(;c&&c!==f;)p=x(c),o(c),c=p;o(f)},B=(c,f,p,g,h,y,T,b,v)=>{T=T||f.type==="svg",c==null?Z(f,p,g,h,y,T,b,v):_e(c,f,h,y,T,b,v)},Z=(c,f,p,g,h,y,T,b)=>{let v,m;const{type:A,props:C,shapeFlag:$,transition:P,dirs:N}=c;if(v=c.el=i(c.type,y,C&&C.is,C),$&8?d(v,c.children):$&16&&ee(c.children,v,null,g,h,y&&A!=="foreignObject",T,b),N&&He(c,null,g,"created"),Y(v,c,c.scopeId,T,g),C){for(const K in C)K!=="value"&&!Zt(K)&&r(v,K,null,C[K],y,c.children,g,h,Pe);"value"in C&&r(v,"value",null,C.value),(m=C.onVnodeBeforeMount)&&be(m,g,c)}N&&He(c,null,g,"beforeMount");const H=(!h||h&&!h.pendingBranch)&&P&&!P.persisted;H&&P.beforeEnter(v),s(v,f,p),((m=C&&C.onVnodeMounted)||H||N)&&ie(()=>{m&&be(m,g,c),H&&P.enter(v),N&&He(c,null,g,"mounted")},h)},Y=(c,f,p,g,h)=>{if(p&&I(c,p),g)for(let y=0;y<g.length;y++)I(c,g[y]);if(h){let y=h.subTree;if(f===y){const T=h.vnode;Y(c,T,T.scopeId,T.slotScopeIds,h.parent)}}},ee=(c,f,p,g,h,y,T,b,v=0)=>{for(let m=v;m<c.length;m++){const A=c[m]=b?Ue(c[m]):Oe(c[m]);M(null,A,f,p,g,h,y,T,b)}},_e=(c,f,p,g,h,y,T)=>{const b=f.el=c.el;let{patchFlag:v,dynamicChildren:m,dirs:A}=f;v|=c.patchFlag&16;const C=c.props||W,$=f.props||W;let P;p&&We(p,!1),(P=$.onVnodeBeforeUpdate)&&be(P,p,f,c),A&&He(f,c,p,"beforeUpdate"),p&&We(p,!0);const N=h&&f.type!=="foreignObject";if(m?oe(c.dynamicChildren,m,b,p,g,N,y):T||V(c,f,b,null,p,g,N,y,!1),v>0){if(v&16)de(b,f,C,$,p,g,h);else if(v&2&&C.class!==$.class&&r(b,"class",null,$.class,h),v&4&&r(b,"style",C.style,$.style,h),v&8){const H=f.dynamicProps;for(let K=0;K<H.length;K++){const te=H[K],ye=C[te],st=$[te];(st!==ye||te==="value")&&r(b,te,ye,st,h,c.children,p,g,Pe)}}v&1&&c.children!==f.children&&d(b,f.children)}else!T&&m==null&&de(b,f,C,$,p,g,h);((P=$.onVnodeUpdated)||A)&&ie(()=>{P&&be(P,p,f,c),A&&He(f,c,p,"updated")},g)},oe=(c,f,p,g,h,y,T)=>{for(let b=0;b<f.length;b++){const v=c[b],m=f[b],A=v.el&&(v.type===le||!rt(v,m)||v.shapeFlag&70)?_(v.el):p;M(v,m,A,null,g,h,y,T,!0)}},de=(c,f,p,g,h,y,T)=>{if(p!==g){if(p!==W)for(const b in p)!Zt(b)&&!(b in g)&&r(c,b,p[b],null,T,f.children,h,y,Pe);for(const b in g){if(Zt(b))continue;const v=g[b],m=p[b];v!==m&&b!=="value"&&r(c,b,m,v,T,f.children,h,y,Pe)}"value"in g&&r(c,"value",p.value,g.value)}},kt=(c,f,p,g,h,y,T,b,v)=>{const m=f.el=c?c.el:l(""),A=f.anchor=c?c.anchor:l("");let{patchFlag:C,dynamicChildren:$,slotScopeIds:P}=f;P&&(b=b?b.concat(P):P),c==null?(s(m,p,g),s(A,p,g),ee(f.children,p,A,h,y,T,b,v)):C>0&&C&64&&$&&c.dynamicChildren?(oe(c.dynamicChildren,$,p,h,y,T,b),(f.key!=null||h&&f===h.subTree)&&rs(c,f,!0)):V(c,f,p,A,h,y,T,b,v)},Kt=(c,f,p,g,h,y,T,b,v)=>{f.slotScopeIds=b,c==null?f.shapeFlag&512?h.ctx.activate(f,p,g,T,v):mn(f,p,g,h,y,T,v):fs(c,f,v)},mn=(c,f,p,g,h,y,T)=>{const b=c.component=sl(c,g,h);if(Po(c)&&(b.ctx.renderer=nt),ol(b),b.asyncDep){if(h&&h.registerDep(b,fe),!c.el){const v=b.subTree=me(Qe);X(null,v,f,p)}return}fe(b,c,f,p,h,y,T)},fs=(c,f,p)=>{const g=f.component=c.component;if(di(c,f,p))if(g.asyncDep&&!g.asyncResolved){Q(g,f,p);return}else g.next=f,ri(g.update),g.update();else f.el=c.el,g.vnode=f},fe=(c,f,p,g,h,y,T)=>{const b=()=>{if(c.isMounted){let{next:A,bu:C,u:$,parent:P,vnode:N}=c,H=A,K;We(c,!1),A?(A.el=N.el,Q(c,A,T)):A=N,C&&ct(C),(K=A.props&&A.props.onVnodeBeforeUpdate)&&be(K,P,A,N),We(c,!0);const te=xn(c),ye=c.subTree;c.subTree=te,M(ye,te,_(ye.el),Bt(ye),c,h,y),A.el=te.el,H===null&&pi(c,te.el),$&&ie($,h),(K=A.props&&A.props.onVnodeUpdated)&&ie(()=>be(K,P,A,N),h)}else{let A;const{el:C,props:$}=f,{bm:P,m:N,parent:H}=c,K=At(f);if(We(c,!1),P&&ct(P),!K&&(A=$&&$.onVnodeBeforeMount)&&be(A,H,f),We(c,!0),C&&bn){const te=()=>{c.subTree=xn(c),bn(C,c.subTree,c,h,null)};K?f.type.__asyncLoader().then(()=>!c.isUnmounted&&te()):te()}else{const te=c.subTree=xn(c);M(null,te,p,g,c,h,y),f.el=te.el}if(N&&ie(N,h),!K&&(A=$&&$.onVnodeMounted)){const te=f;ie(()=>be(A,H,te),h)}(f.shapeFlag&256||H&&At(H.vnode)&&H.vnode.shapeFlag&256)&&c.a&&ie(c.a,h),c.isMounted=!0,f=p=g=null}},v=c.effect=new Jn(b,()=>ns(m),c.scope),m=c.update=()=>v.run();m.id=c.uid,We(c,!0),m()},Q=(c,f,p)=>{f.component=c;const g=c.vnode.props;c.vnode=f,c.next=null,ki(c,f.props,g,p),Bi(c,f.children,p),bt(),Es(),yt()},V=(c,f,p,g,h,y,T,b,v=!1)=>{const m=c&&c.children,A=c?c.shapeFlag:0,C=f.children,{patchFlag:$,shapeFlag:P}=f;if($>0){if($&128){Lt(m,C,p,g,h,y,T,b,v);return}else if($&256){Be(m,C,p,g,h,y,T,b,v);return}}P&8?(A&16&&Pe(m,h,y),C!==m&&d(p,C)):A&16?P&16?Lt(m,C,p,g,h,y,T,b,v):Pe(m,h,y,!0):(A&8&&d(p,""),P&16&&ee(C,p,g,h,y,T,b,v))},Be=(c,f,p,g,h,y,T,b,v)=>{c=c||it,f=f||it;const m=c.length,A=f.length,C=Math.min(m,A);let $;for($=0;$<C;$++){const P=f[$]=v?Ue(f[$]):Oe(f[$]);M(c[$],P,p,null,h,y,T,b,v)}m>A?Pe(c,h,y,!0,!1,C):ee(f,p,g,h,y,T,b,v,C)},Lt=(c,f,p,g,h,y,T,b,v)=>{let m=0;const A=f.length;let C=c.length-1,$=A-1;for(;m<=C&&m<=$;){const P=c[m],N=f[m]=v?Ue(f[m]):Oe(f[m]);if(rt(P,N))M(P,N,p,null,h,y,T,b,v);else break;m++}for(;m<=C&&m<=$;){const P=c[C],N=f[$]=v?Ue(f[$]):Oe(f[$]);if(rt(P,N))M(P,N,p,null,h,y,T,b,v);else break;C--,$--}if(m>C){if(m<=$){const P=$+1,N=P<A?f[P].el:g;for(;m<=$;)M(null,f[m]=v?Ue(f[m]):Oe(f[m]),p,N,h,y,T,b,v),m++}}else if(m>$)for(;m<=C;)Ae(c[m],h,y,!0),m++;else{const P=m,N=m,H=new Map;for(m=N;m<=$;m++){const he=f[m]=v?Ue(f[m]):Oe(f[m]);he.key!=null&&H.set(he.key,m)}let K,te=0;const ye=$-N+1;let st=!1,ps=0;const xt=new Array(ye);for(m=0;m<ye;m++)xt[m]=0;for(m=P;m<=C;m++){const he=c[m];if(te>=ye){Ae(he,h,y,!0);continue}let $e;if(he.key!=null)$e=H.get(he.key);else for(K=N;K<=$;K++)if(xt[K-N]===0&&rt(he,f[K])){$e=K;break}$e===void 0?Ae(he,h,y,!0):(xt[$e-N]=m+1,$e>=ps?ps=$e:st=!0,M(he,f[$e],p,null,h,y,T,b,v),te++)}const hs=st?Wi(xt):it;for(K=hs.length-1,m=ye-1;m>=0;m--){const he=N+m,$e=f[he],gs=he+1<A?f[he+1].el:g;xt[m]===0?M(null,$e,p,gs,h,y,T,b,v):st&&(K<0||m!==hs[K]?Ve($e,p,gs,2):K--)}}},Ve=(c,f,p,g,h=null)=>{const{el:y,type:T,transition:b,children:v,shapeFlag:m}=c;if(m&6){Ve(c.component.subTree,f,p,g);return}if(m&128){c.suspense.move(f,p,g);return}if(m&64){T.move(c,f,p,nt);return}if(T===le){s(y,f,p);for(let C=0;C<v.length;C++)Ve(v[C],f,p,g);s(c.anchor,f,p);return}if(T===Cn){F(c,f,p);return}if(g!==2&&m&1&&b)if(g===0)b.beforeEnter(y),s(y,f,p),ie(()=>b.enter(y),h);else{const{leave:C,delayLeave:$,afterLeave:P}=b,N=()=>s(y,f,p),H=()=>{C(y,()=>{N(),P&&P()})};$?$(y,N,H):H()}else s(y,f,p)},Ae=(c,f,p,g=!1,h=!1)=>{const{type:y,props:T,ref:b,children:v,dynamicChildren:m,shapeFlag:A,patchFlag:C,dirs:$}=c;if(b!=null&&Un(b,null,p,c,!0),A&256){f.ctx.deactivate(c);return}const P=A&1&&$,N=!At(c);let H;if(N&&(H=T&&T.onVnodeBeforeUnmount)&&be(H,f,c),A&6)ir(c.component,p,g);else{if(A&128){c.suspense.unmount(p,g);return}P&&He(c,null,f,"beforeUnmount"),A&64?c.type.remove(c,f,p,h,nt,g):m&&(y!==le||C>0&&C&64)?Pe(m,f,p,!1,!0):(y===le&&C&384||!h&&A&16)&&Pe(v,f,p),g&&as(c)}(N&&(H=T&&T.onVnodeUnmounted)||P)&&ie(()=>{H&&be(H,f,c),P&&He(c,null,f,"unmounted")},p)},as=c=>{const{type:f,el:p,anchor:g,transition:h}=c;if(f===le){rr(p,g);return}if(f===Cn){w(c);return}const y=()=>{o(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(c.shapeFlag&1&&h&&!h.persisted){const{leave:T,delayLeave:b}=h,v=()=>T(p,y);b?b(c.el,y,v):v()}else y()},rr=(c,f)=>{let p;for(;c!==f;)p=x(c),o(c),c=p;o(f)},ir=(c,f,p)=>{const{bum:g,scope:h,update:y,subTree:T,um:b}=c;g&&ct(g),h.stop(),y&&(y.active=!1,Ae(T,c,f,p)),b&&ie(b,f),ie(()=>{c.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},Pe=(c,f,p,g=!1,h=!1,y=0)=>{for(let T=y;T<c.length;T++)Ae(c[T],f,p,g,h)},Bt=c=>c.shapeFlag&6?Bt(c.component.subTree):c.shapeFlag&128?c.suspense.next():x(c.anchor||c.el),ds=(c,f,p)=>{c==null?f._vnode&&Ae(f._vnode,null,null,!0):M(f._vnode||null,c,f,null,null,null,p),Es(),To(),f._vnode=c},nt={p:M,um:Ae,m:Ve,r:as,mt:mn,mc:ee,pc:V,pbc:oe,n:Bt,o:e};let _n,bn;return t&&([_n,bn]=t(nt)),{render:ds,hydrate:_n,createApp:Di(ds,_n)}}function We({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function rs(e,t,n=!1){const s=e.children,o=t.children;if(O(s)&&O(o))for(let r=0;r<s.length;r++){const i=s[r];let l=o[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=o[r]=Ue(o[r]),l.el=i.el),n||rs(i,l)),l.type===pn&&(l.el=i.el)}}function Wi(e){const t=e.slice(),n=[0];let s,o,r,i,l;const u=e.length;for(s=0;s<u;s++){const a=e[s];if(a!==0){if(o=n[n.length-1],e[o]<a){t[s]=o,n.push(s);continue}for(r=0,i=n.length-1;r<i;)l=r+i>>1,e[n[l]]<a?r=l+1:i=l;a<e[n[r]]&&(r>0&&(t[s]=n[r-1]),n[r]=s)}}for(r=n.length,i=n[r-1];r-- >0;)n[r]=i,i=t[i];return n}const qi=e=>e.__isTeleport,Ot=e=>e&&(e.disabled||e.disabled===""),Ds=e=>typeof SVGElement<"u"&&e instanceof SVGElement,jn=(e,t)=>{const n=e&&e.to;return G(n)?t?t(n):null:n},zi={__isTeleport:!0,process(e,t,n,s,o,r,i,l,u,a){const{mc:d,pc:_,pbc:x,o:{insert:I,querySelector:k,createText:M,createComment:z}}=a,X=Ot(t.props);let{shapeFlag:E,children:F,dynamicChildren:w}=t;if(e==null){const B=t.el=M(""),Z=t.anchor=M("");I(B,n,s),I(Z,n,s);const Y=t.target=jn(t.props,k),ee=t.targetAnchor=M("");Y&&(I(ee,Y),i=i||Ds(Y));const _e=(oe,de)=>{E&16&&d(F,oe,de,o,r,i,l,u)};X?_e(n,Z):Y&&_e(Y,ee)}else{t.el=e.el;const B=t.anchor=e.anchor,Z=t.target=e.target,Y=t.targetAnchor=e.targetAnchor,ee=Ot(e.props),_e=ee?n:Z,oe=ee?B:Y;if(i=i||Ds(Z),w?(x(e.dynamicChildren,w,_e,o,r,i,l),rs(e,t,!0)):u||_(e,t,_e,oe,o,r,i,l,!1),X)ee||Yt(t,n,B,a,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const de=t.target=jn(t.props,k);de&&Yt(t,de,null,a,0)}else ee&&Yt(t,Z,Y,a,1)}qo(t)},remove(e,t,n,s,{um:o,o:{remove:r}},i){const{shapeFlag:l,children:u,anchor:a,targetAnchor:d,target:_,props:x}=e;if(_&&r(d),(i||!Ot(x))&&(r(a),l&16))for(let I=0;I<u.length;I++){const k=u[I];o(k,t,n,!0,!!k.dynamicChildren)}},move:Yt,hydrate:Ji};function Yt(e,t,n,{o:{insert:s},m:o},r=2){r===0&&s(e.targetAnchor,t,n);const{el:i,anchor:l,shapeFlag:u,children:a,props:d}=e,_=r===2;if(_&&s(i,t,n),(!_||Ot(d))&&u&16)for(let x=0;x<a.length;x++)o(a[x],t,n,2);_&&s(l,t,n)}function Ji(e,t,n,s,o,r,{o:{nextSibling:i,parentNode:l,querySelector:u}},a){const d=t.target=jn(t.props,u);if(d){const _=d._lpa||d.firstChild;if(t.shapeFlag&16)if(Ot(t.props))t.anchor=a(i(e),t,l(e),n,s,o,r),t.targetAnchor=_;else{t.anchor=i(e);let x=_;for(;x;)if(x=i(x),x&&x.nodeType===8&&x.data==="teleport anchor"){t.targetAnchor=x,d._lpa=t.targetAnchor&&i(t.targetAnchor);break}a(_,t,d,n,s,o,r)}qo(t)}return t.anchor&&i(t.anchor)}const Yi=zi;function qo(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const le=Symbol.for("v-fgt"),pn=Symbol.for("v-txt"),Qe=Symbol.for("v-cmt"),Cn=Symbol.for("v-stc"),It=[];let we=null;function U(e=!1){It.push(we=e?null:[])}function Xi(){It.pop(),we=It[It.length-1]||null}let Rt=1;function Us(e){Rt+=e}function zo(e){return e.dynamicChildren=Rt>0?we||it:null,Xi(),Rt>0&&we&&we.push(e),e}function J(e,t,n,s,o,r){return zo(D(e,t,n,s,o,r,!0))}function Ge(e,t,n,s,o){return zo(me(e,t,n,s,o,!0))}function Jo(e){return e?e.__v_isVNode===!0:!1}function rt(e,t){return e.type===t.type&&e.key===t.key}const hn="__vInternal",Yo=({key:e})=>e??null,Qt=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?G(e)||ne(e)||S(e)?{i:ge,r:e,k:t,f:!!n}:e:null);function D(e,t=null,n=null,s=0,o=null,r=e===le?0:1,i=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Yo(t),ref:t&&Qt(t),scopeId:Ao,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:ge};return l?(is(u,n),r&128&&e.normalize(u)):n&&(u.shapeFlag|=G(n)?8:16),Rt>0&&!i&&we&&(u.patchFlag>0||r&6)&&u.patchFlag!==32&&we.push(u),u}const me=Zi;function Zi(e,t=null,n=null,s=0,o=null,r=!1){if((!e||e===jo)&&(e=Qe),Jo(e)){const l=et(e,t,!0);return n&&is(l,n),Rt>0&&!r&&we&&(l.shapeFlag&6?we[we.indexOf(e)]=l:we.push(l)),l.patchFlag|=-2,l}if(cl(e)&&(e=e.__vccOpts),t){t=Qi(t);let{class:l,style:u}=t;l&&!G(l)&&(t.class=_t(l)),q(u)&&(mo(u)&&!O(u)&&(u=ce({},u)),t.style=Wn(u))}const i=G(e)?1:$o(e)?128:qi(e)?64:q(e)?4:S(e)?2:0;return D(e,t,n,s,o,i,r,!0)}function Qi(e){return e?mo(e)||hn in e?ce({},e):e:null}function et(e,t,n=!1){const{props:s,ref:o,patchFlag:r,children:i}=e,l=t?el(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Yo(l),ref:t&&t.ref?n&&o?O(o)?o.concat(Qt(t)):[o,Qt(t)]:Qt(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==le?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&et(e.ssContent),ssFallback:e.ssFallback&&et(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Gi(e=" ",t=0){return me(pn,null,e,t)}function Xo(e="",t=!1){return t?(U(),Ge(Qe,null,e)):me(Qe,null,e)}function Oe(e){return e==null||typeof e=="boolean"?me(Qe):O(e)?me(le,null,e.slice()):typeof e=="object"?Ue(e):me(pn,null,String(e))}function Ue(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:et(e)}function is(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(O(t))n=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),is(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!(hn in t)?t._ctx=ge:o===3&&ge&&(ge.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else S(t)?(t={default:t,_ctx:ge},n=32):(t=String(t),s&64?(n=16,t=[Gi(t)]):n=8);e.children=t,e.shapeFlag|=n}function el(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=_t([t.class,s.class]));else if(o==="style")t.style=Wn([t.style,s.style]);else if(rn(o)){const r=t[o],i=s[o];i&&r!==i&&!(O(r)&&r.includes(i))&&(t[o]=r?[].concat(r,i):i)}else o!==""&&(t[o]=s[o])}return t}function be(e,t,n,s=null){Ee(e,t,7,[n,s])}const tl=Ko();let nl=0;function sl(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||tl,r={uid:nl++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new vr(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bo(s,o),emitsOptions:Eo(s,o),emit:null,emitted:null,propsDefaults:W,inheritAttrs:s.inheritAttrs,ctx:W,data:W,props:W,attrs:W,slots:W,refs:W,setupState:W,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=ci.bind(null,r),e.ce&&e.ce(r),r}let se=null;const Zo=()=>se||ge;let ls,ot,js="__VUE_INSTANCE_SETTERS__";(ot=$n()[js])||(ot=$n()[js]=[]),ot.push(e=>se=e),ls=e=>{ot.length>1?ot.forEach(t=>t(e)):ot[0](e)};const pt=e=>{ls(e),e.scope.on()},Xe=()=>{se&&se.scope.off(),ls(null)};function Qo(e){return e.vnode.shapeFlag&4}let Dt=!1;function ol(e,t=!1){Dt=t;const{props:n,children:s}=e.vnode,o=Qo(e);ji(e,n,o,t),Li(e,s);const r=o?rl(e,t):void 0;return Dt=!1,r}function rl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=_o(new Proxy(e.ctx,Ii));const{setup:s}=n;if(s){const o=e.setupContext=s.length>1?ll(e):null;pt(e),bt();const r=Ke(s,e,0,[e.props,o]);if(yt(),Xe(),Gs(r)){if(r.then(Xe,Xe),t)return r.then(i=>{ks(e,i,t)}).catch(i=>{fn(i,e,0)});e.asyncDep=r}else ks(e,r,t)}else Go(e,t)}function ks(e,t,n){S(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:q(t)&&(e.setupState=xo(t)),Go(e,n)}let Ks;function Go(e,t,n){const s=e.type;if(!e.render){if(!t&&Ks&&!s.render){const o=s.template||ss(e).template;if(o){const{isCustomElement:r,compilerOptions:i}=e.appContext.config,{delimiters:l,compilerOptions:u}=s,a=ce(ce({isCustomElement:r,delimiters:l},i),u);s.render=Ks(o,a)}}e.render=s.render||Te}pt(e),bt(),Fi(e),yt(),Xe()}function il(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return pe(e,"get","$attrs"),t[n]}}))}function ll(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return il(e)},slots:e.slots,emit:e.emit,expose:t}}function gn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(xo(_o(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in $t)return $t[n](e)},has(t,n){return n in t||n in $t}}))}function kn(e,t=!0){return S(e)?e.displayName||e.name:e.name||t&&e.__name}function cl(e){return S(e)&&"__vccOpts"in e}const cs=(e,t)=>ti(e,t,Dt),ul=Symbol.for("v-scx"),fl=()=>at(ul),al="3.3.4",dl="http://www.w3.org/2000/svg",ze=typeof document<"u"?document:null,Ls=ze&&ze.createElement("template"),pl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t?ze.createElementNS(dl,e):ze.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>ze.createTextNode(e),createComment:e=>ze.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ze.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,o,r){const i=n?n.previousSibling:t.lastChild;if(o&&(o===r||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===r||!(o=o.nextSibling)););else{Ls.innerHTML=s?`<svg>${e}</svg>`:e;const l=Ls.content;if(s){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}t.insertBefore(l,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function hl(e,t,n){const s=e._vtc;s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function gl(e,t,n){const s=e.style,o=G(n);if(n&&!o){if(t&&!G(t))for(const r in t)n[r]==null&&Kn(s,r,"");for(const r in n)Kn(s,r,n[r])}else{const r=s.display;o?t!==n&&(s.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(s.display=r)}}const Bs=/\s*!important$/;function Kn(e,t,n){if(O(n))n.forEach(s=>Kn(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=ml(e,t);Bs.test(n)?e.setProperty(tt(s),n.replace(Bs,""),"important"):e[s]=n}}const Vs=["Webkit","Moz","ms"],En={};function ml(e,t){const n=En[t];if(n)return n;let s=Fe(t);if(s!=="filter"&&s in e)return En[t]=s;s=cn(s);for(let o=0;o<Vs.length;o++){const r=Vs[o]+s;if(r in e)return En[t]=r}return t}const Hs="http://www.w3.org/1999/xlink";function _l(e,t,n,s,o){if(s&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Hs,t.slice(6,t.length)):e.setAttributeNS(Hs,t,n);else{const r=yr(t);n==null||r&&!no(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function bl(e,t,n,s,o,r,i){if(t==="innerHTML"||t==="textContent"){s&&i(s,o,r),e[t]=n??"";return}const l=e.tagName;if(t==="value"&&l!=="PROGRESS"&&!l.includes("-")){e._value=n;const a=l==="OPTION"?e.getAttribute("value"):e.value,d=n??"";a!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let u=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=no(n):n==null&&a==="string"?(n="",u=!0):a==="number"&&(n=0,u=!0)}try{e[t]=n}catch{}u&&e.removeAttribute(t)}function je(e,t,n,s){e.addEventListener(t,n,s)}function yl(e,t,n,s){e.removeEventListener(t,n,s)}function xl(e,t,n,s,o=null){const r=e._vei||(e._vei={}),i=r[t];if(s&&i)i.value=s;else{const[l,u]=vl(t);if(s){const a=r[t]=Cl(s,o);je(e,l,a,u)}else i&&(yl(e,l,i,u),r[t]=void 0)}}const Ws=/(?:Once|Passive|Capture)$/;function vl(e){let t;if(Ws.test(e)){t={};let s;for(;s=e.match(Ws);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):tt(e.slice(2)),t]}let An=0;const wl=Promise.resolve(),Tl=()=>An||(wl.then(()=>An=0),An=Date.now());function Cl(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ee(El(s,n.value),t,5,[s])};return n.value=e,n.attached=Tl(),n}function El(e,t){if(O(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>o=>!o._stopped&&s&&s(o))}else return t}const qs=/^on[a-z]/,Al=(e,t,n,s,o=!1,r,i,l,u)=>{t==="class"?hl(e,s,o):t==="style"?gl(e,n,s):rn(t)?Bn(t)||xl(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):$l(e,t,s,o))?bl(e,t,s,r,i,l,u):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),_l(e,t,s,o))};function $l(e,t,n,s){return s?!!(t==="innerHTML"||t==="textContent"||t in e&&qs.test(t)&&S(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||qs.test(t)&&G(n)?!1:t in e}const ht=e=>{const t=e.props["onUpdate:modelValue"]||!1;return O(t)?n=>ct(t,n):t};function Ol(e){e.target.composing=!0}function zs(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Il={created(e,{modifiers:{lazy:t,trim:n,number:s}},o){e._assign=ht(o);const r=s||o.props&&o.props.type==="number";je(e,t?"change":"input",i=>{if(i.target.composing)return;let l=e.value;n&&(l=l.trim()),r&&(l=en(l)),e._assign(l)}),n&&je(e,"change",()=>{e.value=e.value.trim()}),t||(je(e,"compositionstart",Ol),je(e,"compositionend",zs),je(e,"change",zs))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:o}},r){if(e._assign=ht(r),e.composing||document.activeElement===e&&e.type!=="range"&&(n||s&&e.value.trim()===t||(o||e.type==="number")&&en(e.value)===t))return;const i=t??"";e.value!==i&&(e.value=i)}},er={deep:!0,created(e,t,n){e._assign=ht(n),je(e,"change",()=>{const s=e._modelValue,o=Ut(e),r=e.checked,i=e._assign;if(O(s)){const l=qn(s,o),u=l!==-1;if(r&&!u)i(s.concat(o));else if(!r&&u){const a=[...s];a.splice(l,1),i(a)}}else if(gt(s)){const l=new Set(s);r?l.add(o):l.delete(o),i(l)}else i(tr(e,r))})},mounted:Js,beforeUpdate(e,t,n){e._assign=ht(n),Js(e,t,n)}};function Js(e,{value:t,oldValue:n},s){e._modelValue=t,O(t)?e.checked=qn(t,s.props.value)>-1:gt(t)?e.checked=t.has(s.props.value):t!==n&&(e.checked=jt(t,tr(e,!0)))}const Ys={deep:!0,created(e,{value:t,modifiers:{number:n}},s){const o=gt(t);je(e,"change",()=>{const r=Array.prototype.filter.call(e.options,i=>i.selected).map(i=>n?en(Ut(i)):Ut(i));e._assign(e.multiple?o?new Set(r):r:r[0])}),e._assign=ht(s)},mounted(e,{value:t}){Xs(e,t)},beforeUpdate(e,t,n){e._assign=ht(n)},updated(e,{value:t}){Xs(e,t)}};function Xs(e,t){const n=e.multiple;if(!(n&&!O(t)&&!gt(t))){for(let s=0,o=e.options.length;s<o;s++){const r=e.options[s],i=Ut(r);if(n)O(t)?r.selected=qn(t,i)>-1:r.selected=t.has(i);else if(jt(Ut(r),t)){e.selectedIndex!==s&&(e.selectedIndex=s);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Ut(e){return"_value"in e?e._value:e.value}function tr(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Fl=["ctrl","shift","alt","meta"],Pl={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Fl.some(n=>e[`${n}Key`]&&!t.includes(n))},Ml=(e,t)=>(n,...s)=>{for(let o=0;o<t.length;o++){const r=Pl[t[o]];if(r&&r(n,t))return}return e(n,...s)},Sl={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},nr=(e,t)=>n=>{if(!("key"in n))return;const s=tt(n.key);if(t.some(o=>o===s||Sl[o]===s))return e(n)},Nl=ce({patchProp:Al},pl);let Zs;function Rl(){return Zs||(Zs=Vi(Nl))}const Dl=(...e)=>{const t=Rl().createApp(...e),{mount:n}=t;return t.mount=s=>{const o=Ul(s);if(!o)return;const r=t._component;!S(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.innerHTML="";const i=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},t};function Ul(e){return G(e)?document.querySelector(e):e}const jl={class:"todo-add"},kl=["onKeyup"],Kl={__name:"TodoAdd",emits:["add-todo"],setup(e,{emit:t}){const n=Ce("");function s(){if(n.value.trim()==="")return;const o={content:n.value,completed:!1};t("add-todo",o),n.value=""}return(o,r)=>(U(),J("div",jl,[Et(D("input",{"onUpdate:modelValue":r[0]||(r[0]=i=>n.value=i),type:"text",placeholder:"Add New Todo",onKeyup:nr(s,["enter"])},null,40,kl),[[Il,n.value]]),D("button",{onClick:s},"Add")]))}},Ll={class:"filters"},Bl=["onClick"],Vl={__name:"TodoFilter",props:{selected:{type:String,required:!0}},emits:["change-filter"],setup(e,{emit:t}){const n=[{label:"全部",value:"all"},{label:"已完成",value:"completed"},{label:"未完成",value:"incomplete"}];return(s,o)=>(U(),J("div",Ll,[(U(),J(le,null,Ze(n,r=>D("div",{key:r.value,class:_t(["filter",{active:e.selected===r.value}]),onClick:i=>t("change-filter",r.value)},Se(r.label),11,Bl)),64))]))}},Hl=D("span",{class:"check-button"},null,-1),Wl={key:0,class:"todo-content"},ql=["value","onKeyup"],zl=D("i",{class:"material-icons"},"edit",-1),Jl=[zl],Yl=D("i",{class:"material-icons"},"delete",-1),Xl=[Yl],Zl={__name:"TodoItem",props:{todoItem:{type:Object}},emits:["delete-todo","update-todo"],setup(e,{emit:t}){const n=e,{todoItem:s}=n,o=Ce(!1),r=Ce(s.content||"");function i(){s.content=r.value,t("update-todo",{id:s.id,content:s.content,completed:s.completed}),o.value=!1}return(l,u)=>(U(),J("label",{class:_t(["todo-item",{done:L(s).completed}])},[Et(D("input",{type:"checkbox","onUpdate:modelValue":u[0]||(u[0]=a=>L(s).completed=a),onChange:i},null,544),[[er,L(s).completed]]),Hl,o.value?(U(),J("input",{key:1,type:"text",title:"enter to update",value:L(s).content,onInput:u[1]||(u[1]=a=>r.value=a.target.value),onKeyup:nr(i,["enter"])},null,40,ql)):(U(),J("p",Wl,Se(L(s).content),1)),D("button",{class:"todo-update",title:"edit",onClick:u[2]||(u[2]=a=>o.value=!o.value)},Jl),D("button",{class:"todo-delete",title:"remove",onClick:u[3]||(u[3]=a=>t("delete-todo",L(s).id))},Xl)],2))}};let Xt;const Ql=new Uint8Array(16);function Gl(){if(!Xt&&(Xt=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Xt))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Xt(Ql)}const re=[];for(let e=0;e<256;++e)re.push((e+256).toString(16).slice(1));function ec(e,t=0){return(re[e[t+0]]+re[e[t+1]]+re[e[t+2]]+re[e[t+3]]+"-"+re[e[t+4]]+re[e[t+5]]+"-"+re[e[t+6]]+re[e[t+7]]+"-"+re[e[t+8]]+re[e[t+9]]+"-"+re[e[t+10]]+re[e[t+11]]+re[e[t+12]]+re[e[t+13]]+re[e[t+14]]+re[e[t+15]]).toLowerCase()}const tc=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Qs={randomUUID:tc};function nc(e,t,n){if(Qs.randomUUID&&!t&&!e)return Qs.randomUUID();e=e||{};const s=e.random||(e.rng||Gl)();if(s[6]=s[6]&15|64,s[8]=s[8]&63|128,t){n=n||0;for(let o=0;o<16;++o)t[n+o]=s[o];return t}return ec(s)}const us="https://jsonplaceholder.typicode.com/todos";function sc(e){return fetch(`${us}`,{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}}).then(t=>t.json()).catch(t=>{console.log(t)})}function oc(e){return fetch(`${us}/${e.id}`,{method:"PATCH",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}}).then(t=>t.json()).catch(t=>{console.log(t)})}function rc(e){return fetch(`${us}/${e}`,{method:"DELETE"}).then(t=>t).catch(t=>{console.log(t)})}function ic(){const e=at("isLoading");function t(n){e.value=n}return{isLoading:e,setIsLoading:t}}function lc(){const e=Ce([]),{setIsLoading:t}=ic();function n(r){t(!0),sc(r).then(i=>{e.value.push({id:nc(),content:i.content,completed:i.completed}),t(!1)}).catch(i=>{console.log(i),t(!1)})}function s(r){t(!0),oc(r).then(i=>{const l=e.value.findIndex(u=>u.id===i.id);e.value.splice(l,1,i),t(!1)}).catch(i=>{console.log(i),t(!1)})}function o(r){t(!0),rc(r).then(i=>{switch(i.status){case 200:e.value=e.value.filter(l=>l.id!==r),t(!1);break;default:t(!1);break}})}return{todoList:e,addTodo:n,updateTodo:s,deleteTodo:o}}function cc(e){const t=Ce("all");function n(o){t.value=o}const s=cs(()=>{switch(t.value){case"completed":return e.value.filter(o=>o.completed);case"incomplete":return e.value.filter(o=>!o.completed);default:return e.value}});return{selected:t,changeFilter:n,filteredTodoList:s}}const uc={class:"container"},fc=D("h1",null,"Todo List",-1),ac={key:0,class:"todo-list"},dc={key:1,class:"nothing"},pc={__name:"TheTodo",setup(e){const{todoList:t,addTodo:n,updateTodo:s,deleteTodo:o}=lc(),{selected:r,changeFilter:i,filteredTodoList:l}=cc(t);return(u,a)=>(U(),J("div",uc,[fc,me(Kl,{onAddTodo:L(n)},null,8,["onAddTodo"]),me(Vl,{selected:L(r),onChangeFilter:L(i)},null,8,["selected","onChangeFilter"]),L(l).length?(U(),J("div",ac,[(U(!0),J(le,null,Ze(L(l),d=>(U(),Ge(Zl,{key:d.id,todoItem:d,onDeleteTodo:L(o),onUpdateTodo:L(s)},null,8,["todoItem","onDeleteTodo","onUpdateTodo"]))),128))])):(U(),J("div",dc,"No Any todo"))]))}};function hc(e){const t=r(),n=Ce(!1),s=Ce("00:00"),o=Ce("23:59");function r(){const l=[];let u=0,a=0;for(;!(u===24&&a===0);){const d=u.toString().padStart(2,"0"),_=a.toString().padStart(2,"0"),x=`${d}:${_}`;l.push(x),a+=30,a===60&&(u++,a=0)}return l.push("23:59"),l}const i=cs(()=>{if(!n.value)return[e,"0".repeat(48)];const l=Array.from({length:48},(u,a)=>{const d=t[a];return d>=s.value&&d<o.value?"1":"0"});return[e,l.join("")]});return{times:t,isMealTime:n,startTime:s,endTime:o,exportData:i}}const gc={class:"mealtime"},mc=["id"],_c=["for"],bc={key:0,class:"time"},yc={class:"select-block"},xc=D("option",{value:"",disabled:""},"請選擇時間",-1),vc=["value","disabled"],wc=D("span",null,"-",-1),Tc={class:"select-block"},Cc=D("option",{value:"",disabled:""},"請選擇時間",-1),Ec=["value","disabled"],Ac={__name:"MealTimeItem",props:{label:{type:String,required:!0}},emits:["export-data"],setup(e,{emit:t}){const n=Zo().vnode.key,{times:s,isMealTime:o,startTime:r,endTime:i,exportData:l}=hc(n);return Ct(l,u=>{t("export-data",u)},{immediate:!0}),(u,a)=>(U(),J("div",gc,[D("h2",null,Se(e.label),1),Et(D("input",{type:"checkbox",id:L(n),class:"toggle","onUpdate:modelValue":a[0]||(a[0]=d=>ne(o)?o.value=d:null)},null,8,mc),[[er,L(o)]]),D("label",{for:L(n)},null,8,_c),D("p",null,Se(L(o)?"本日供餐":"本日不供餐"),1),L(o)?(U(),J("div",bc,[D("div",yc,[Et(D("select",{"onUpdate:modelValue":a[1]||(a[1]=d=>ne(r)?r.value=d:null)},[xc,(U(!0),J(le,null,Ze(L(s),d=>(U(),J("option",{value:d,disabled:d===L(i)||d>=L(i)},Se(d),9,vc))),256))],512),[[Ys,L(r)]])]),wc,D("div",Tc,[Et(D("select",{"onUpdate:modelValue":a[2]||(a[2]=d=>ne(i)?i.value=d:null)},[Cc,(U(!0),J(le,null,Ze(L(s),d=>(U(),J("option",{value:d,disabled:d===L(r)||d<=L(r)},Se(d),9,Ec))),256))],512),[[Ys,L(i)]])])])):Xo("",!0)]))}},$c={class:"container"},Oc=D("h1",null,"供餐系統",-1),Ic={class:"formatted-data"},Fc={__name:"MealTime",setup(e){const t={week_day0:"星期日",week_day1:"星期一",week_day2:"星期二",week_day3:"星期三",week_day4:"星期四",week_day5:"星期五",week_day6:"星期六"},n=Ce({});function s(o){n.value[o[0]]=o[1]}return(o,r)=>(U(),J("div",$c,[Oc,(U(),J(le,null,Ze(t,(i,l)=>me(Ac,{key:l,label:i,onExportData:s},null,8,["label"])),64)),D("div",Ic,[D("pre",null,Se(JSON.stringify(n.value,null,1)),1)])]))}},Pc={key:0,class:"overlay"},Mc=D("div",{class:"loading"},null,-1),Sc=[Mc],Nc={__name:"TheLoading",setup(e){const t=at("isLoading");return(n,s)=>(U(),Ge(Yi,{to:"body"},[L(t)?(U(),J("div",Pc,Sc)):Xo("",!0)]))}},Rc={class:"column"},Dc={class:"formatted-data"},Uc={lang:"javascript"},sr={__name:"TheTopic",props:{codes:{type:Object,required:!0}},setup(e){return(t,n)=>(U(),J("div",Rc,[(U(!0),J(le,null,Ze(e.codes,s=>(U(),J("div",Dc,[D("pre",null,[D("code",Uc,Se(s),1)])]))),256))]))}},jc=`
<div
  class="gdb-input"
  :class="{ // 可以改成 computed 來簡短 :class 的寫法
    [\`gdb-input--\${size}\`]: true,
    'gdb-input--error': state.isError,
    'gdb-input--password': state.inputType === 'password',
    'gdb-input--disabled': state.isDisabled,
    'gdb-input--full': fullWidth,
  }"
>
  <div class="gdb-input__inner" :class="{ 'gdb-input__inner--focus': isFocus }">
    <div v-if="state.hasPrefix" class="gdb-input__prefix">{{ prefix }}</div>
    <div class="gdb-input__input-wrapper">
      <input
        v-model="value"
        :type="state.inputType"
        class="gdb-input__input"
        :placeholder="placeholder"
        :disabled="state.isDisabled"
        @focus="focusEvent"
        @blur="blurEvent"
        @change="changeEvent"
      />
      <div v-if="type === 'password'" class="gdb-input__password" @click="isShowPassword = !isShowPassword">
        <span v-if="isShowPassword" class="gdb-input__password-icon material-icons-round">visibility</span>
        <span v-else class="gdb-input__password-icon material-icons-round">visibility_off</span>
      </div>
    </div>
    <div v-if="state.hasSuffix" class="gdb-input__suffix">{{ suffix }}</div>
  </div>
</div>
    `,kc=`
import { isEmpty } from 'lodash-es'
import { isFieldError } from '@/components/form/GDBFormItem.vue'
import type { PropType } from 'vue'

export default defineComponent({
  name: 'GDBInput',
  props: {
    modelValue: { // 將名稱改成 inputValue 更好理解
      type: [String, Number] as PropType<string | number | null>,
      default: null,
    },
    type: {
      type: String,
      default: 'text', // text | password | number
    },
    placeholder: {
      type: String,
      default: '',
    },
    prefix: {
      type: String,
      default: '',
    },
    suffix: {
      type: String,
      default: '',
    },
    max: {
      type: Number,
      default: Infinity,
    },
    min: {
      type: Number,
      default: -Infinity,
    },
    hasDecimalPoint: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String as PropType<'small' | 'medium'>,
      default: 'medium',
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
    emptyToNull: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {

    // 將 props 解構以提高可讀性，若在 script 用不到可以不解構，也不用再多寫 props.xxx
    const {
      modelValue,
      type,
      placeholder,
      prefix,
      suffix,
      max,
      min,
      ...
    } = props

    const value = computed({
      get: () => props.modelValue,
      set: (val) => {
        switch (true) {
          case props.disabled:
            break
          case props.type === 'number':
            if (val === '') {
              emit('update:modelValue', val)
              return
            }
            emit('update:modelValue', Number(val))
            break
          case props.emptyToNull && val === '':
            emit('update:modelValue', null)
            break
          default:
            emit('update:modelValue', val)
            break
        }
      },
    })

    const isShowPassword = ref(false)
    const isFocus = ref(false)

    const isError = inject(isFieldError, readonly(computed(() => false)))

    const state = computed(() => {
      return {
        inputType: props.type === 'password' ? (isShowPassword.value ? 'text' : 'password') : props.type,
        isError: isError.value,
        isDisabled: props.disabled,
        hasPrefix: !isEmpty(props.prefix),
        hasSuffix: !isEmpty(props.suffix),
      }
    })

    const changeEvent = () => {
      !props.disabled && emit('change', value.value)
    }

    const focusEvent = () => {
      isFocus.value = true
    }

    const blurEvent = () => {
      const { max, min, hasDecimalPoint, type } = props

      if (type !== 'number') return
      if (value.value === '') value.value = 0
      if (!hasDecimalPoint) value.value = Math.floor(Number(value.value))
      if (Number(value.value) < min) value.value = min
      if (Number(value.value) > max) value.value = max

      isFocus.value = false
    }

    return {
      value,
      isShowPassword,
      isFocus,
      state,
      changeEvent,
      focusEvent,
      blurEvent,
    }
  },
})

    `,Kc=`
// style 保持不變
.gdb-input {
  $self: &;

  position: relative;
  display: block;
  width: 100%;
  max-width: 400px;

  &--full {
    max-width: unset;
  }

  &--medium {
    #{$self}__inner {
      height: 50px;
    }
  }

  &--small {
    #{$self}__inner {
      height: 40px;
    }
  }

  &__inner {
    display: flex;
    width: 100%;
    overflow: hidden;
    border: 1px map-get($theme-colors, gray-3) solid;
    border-radius: map-get($border-radius, s);

    &--focus {
      border-color: map-get($theme-colors, green-1);
    }
  }

  &__prefix,
  &__suffix {
    @extend %font-s-default-regular;
    @extend %px-l;

    display: flex;
    flex: 1 0 max-content;
    align-items: center;
    height: 100%;
    color: map-get($theme-colors, white);
    background-color: map-get($theme-colors, gray-3);
  }

  &__input-wrapper {
    width: 100%;
    height: 100%;
    background-color: map-get($theme-colors, white);
  }

  &__input {
    @extend %font-m-default-regular;
    @extend %px-l;

    width: 100%;
    height: 100%;
    color: map-get($theme-colors, gray-1);
    border: unset;

    &:focus {
      outline: unset;
    }

    &:disabled {
      color: map-get($theme-colors, gray-1);
      background-color: unset;
    }

    &::placeholder {
      color: map-get($theme-colors, gray-3);
    }
  }

  &__password {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 100%;
    cursor: pointer;
  }

  &__password-icon {
    @extend %icon-s;

    color: map-get($theme-colors, gray-3);
  }

  &--password {
    #{$self}__input-wrapper {
      padding-right: 40px;
    }
  }

  &--error {
    #{$self}__inner {
      border-color: map-get($theme-colors, red-1);
    }
  }

  &--disabled {
    #{$self}__input-wrapper {
      background-color: map-get($theme-colors, gray-5);
    }
  }
}

    `,Lc={__name:"Topic3",setup(e){const t={code1:jc,code2:kc,code3:Kc};return(n,s)=>(U(),Ge(sr,{codes:t}))}},Bc=`
// template 保持不變
<span
  class="gdb-switch"
  :class="{
    'gdb-switch--checked': checked,
    'gdb-switch--disabled': disabled,
    'gdb-switch--spacing': spacing,
  }"
  @click="toggle"
>
  <div class="gdb-switch__inner">
    <div class="gdb-switch__switch">
      <span class="gdb-switch__icon material-icons-outlined"> {{ checked ? 'done' : 'close ' }} </span>
    </div>
  </div>
  <div v-if="label || description" class="gdb-switch__right">
    <span v-if="label" class="gdb-switch__label" v-text="label" />
    <div v-if="description" class="gdb-switch__description">
      <GDBDescription :text-color="descriptionColor" :icon-color="iconDescriptionColor">
        {{ description }}
      </GDBDescription>
    </div>
  </div>
</span>

    `,Vc=`

import { isNumber, isString, isNull, isBoolean, isUndefined } from 'lodash-es'

export default defineComponent({
  props: {
    modelValue: {
      type: [String, Boolean, Number],
      default: undefined,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    activeColor: {
      type: String,
      default: 'green-1',
    },
    disActiveColor: {
      type: String,
      default: 'gray-3',
    },
    trueValue: {
      type: [String, Number],
      default: null,
    },
    falseValue: {
      type: [String, Number],
      default: null,
    },
    label: {
      type: String,
      default: '標題文字',
    },
    labelColor: {
      type: String,
      default: 'gray-1',
    },
    description: {
      type: String,
      default: '',
    },
    descriptionColor: {
      type: String,
      default: 'gray-2',
    },
    iconDescriptionColor: {
      type: String,
      default: 'gray-2',
    },
    spacing: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {

    // 將 props 解構以提高可讀性，若在 script 用不到可以不解構，也不用再多寫 props.xxx
    const {
      modelValue,
      disabled,
      activeColor,
      disActiveColor,
      trueValue,
      falseValue,
      label,
      ...
    } = props

    // set css var
    const style = computed(() => ({
      activeColor: \`var(--\${props.activeColor}-color)\`,
      disactiveColor: \`var(--\${props.disActiveColor}-color)\`,
      labelColor: \`var(--\${props.labelColor}-color)\`,
    }))

    // switch functionality
    const checked = computed(() => {
      if (isNumber(props.modelValue) || isString(props.modelValue) || isUndefined(props.modelValue)) return props.modelValue === props.trueValue

      return props.modelValue
    })
    const toggle = () => {
      if (props.disabled) return
      if (isBoolean(props.modelValue)) return emit('update:modelValue', !checked.value)
      if (isNull(props.trueValue) || isNull(props.falseValue)) return console.warn('missing required prop.')

      emit('update:modelValue', !checked.value ? props.trueValue : props.falseValue)
    }

    return {
      style,
      toggle,
      checked,
    }
  },
})

    `,Hc=`
// style 保持不變
.gdb-switch {
  $self: &;

  display: inline-flex;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;

  &--spacing {
    @extend %mb-xl;
  }

  &__inner {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 26px;
    background-color: v-bind('style.disactiveColor');
    border-radius: map-get($border-radius, m);
  }

  &__switch {
    position: absolute;
    top: 50%;
    left: 3px;
    z-index: 1;
    width: 20px;
    height: 20px;
    color: v-bind('style.disactiveColor');
    background-color: map-get($theme-colors, white);
    border-radius: map-get($border-radius, circle);
    transition: all 0.3s;
    transform: translate(0, -50%);
  }

  &__icon {
    @extend %icon-s;

    &--spacing {
      @extend %me-xs;
    }
  }

  &__right {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
  }

  &__label {
    @extend %font-m-default-bold;
    @extend %ms-s;

    color: v-bind('style.labelColor');
  }

  &__description {
    display: inline-flex;

    @extend %ms-s;
  }

  &--checked {
    #{$self}__inner {
      background-color: v-bind('style.activeColor');
    }

    #{$self}__switch {
      left: 27px;
      color: v-bind('style.activeColor');
    }
  }

  &--disabled {
    cursor: not-allowed;

    #{$self}__inner,
    #{$self}__label {
      opacity: 0.5;
    }
  }
}

    `,Wc={__name:"Topic4",setup(e){const t={code1:Bc,code2:Vc,code3:Hc};return(n,s)=>(U(),Ge(sr,{codes:t}))}},qc=["onClick"],zc={__name:"App",setup(e){const t={TheTodo:pc,MealTime:Fc,Topic3:Lc,Topic4:Wc},n=Ce("TheTodo");return(s,o)=>(U(),J(le,null,[D("header",null,[D("nav",null,[(U(),J(le,null,Ze(t,r=>D("a",{key:r,class:_t({active:r.__name===n.value}),onClick:Ml(i=>n.value=r.__name,["prevent"])},Se(r.__name),11,qc)),64))])]),D("main",null,[(U(),Ge(_i,null,[(U(),Ge($i(t[n.value])))],1024))]),me(Nc)],64))}},Jc=Ce(!1),or=Dl(zc);or.provide("isLoading",Jc);or.mount("#app");
