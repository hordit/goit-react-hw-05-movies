"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[390],{1233:function(n,t,e){e.d(t,{Nl:function(){return l},QX:function(){return u},s9:function(){return p},wu:function(){return d}});var r,i,o,a,s=e(168),c=e(6444),u=c.ZP.div(r||(r=(0,s.Z)(["\n  width: 100%;\n  padding: 0 20px;\n  margin: auto;\n\n  @media (min-width: ",") {\n    width: ",";\n  }\n  @media (min-width: ",") {\n    width: ",";\n  }\n  @media (min-width: ",") {\n    width: ",";\n  }\n"])),(function(n){return n.theme.breakpoints.s}),(function(n){return n.theme.breakpoints.s}),(function(n){return n.theme.breakpoints.m}),(function(n){return n.theme.breakpoints.m}),(function(n){return n.theme.breakpoints.l}),(function(n){return n.theme.breakpoints.l})),d=c.ZP.div(i||(i=(0,s.Z)(["\npadding: 30px;\n    @media (min-width: ",") {\n        display: flex;\n    }\n"])),(function(n){return n.theme.breakpoints.xs})),l=c.ZP.img(o||(o=(0,s.Z)(["\n  flex-shrink: 0;\n  width: 200px;\n  margin-left: auto;\n  margin-right: auto;\n  @media (min-width: ",") {\n    min-width: 30%;\n    margin: 0;\n  }\n"])),(function(n){return n.theme.breakpoints.xs})),p=c.ZP.div(a||(a=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 20px 0 0 0;\n  color: ",";\n  gap: 20px;\n  @media (min-width: ",") {\n    padding: 0 0 0 20px;\n  }\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.breakpoints.xs}))},5551:function(n,t,e){e.d(t,{Z:function(){return u}});var r=e(7689),i=e(1111),o=e(4781),a=function(n){return n.map((function(n){var t=n.id,e=n.title,r=n.original_title,a=n.name,s=n.original_name,c=n.poster_path;return{id:t,movieTitle:a||e||s||r,poster:c?"".concat(o.r1).concat(c):i}}))},s=e(6815),c=e(184),u=function(n){var t=n.movies,e=(0,r.TH)(),i=a(t);return(0,c.jsx)(s.He,{children:i.map((function(n){var t=n.id,r=n.movieTitle,i=n.poster;return(0,c.jsx)(s.Fd,{children:(0,c.jsx)(s.up,{to:"/movies/".concat(t),state:{from:e},children:(0,c.jsxs)(s.Ij,{children:[(0,c.jsx)("img",{src:i,alt:r}),(0,c.jsx)(s.Gd,{className:"js-overlay",children:(0,c.jsx)(s.rS,{children:r})})]})})},function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,t){return n+((t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_")}),"")}())}))})}},6815:function(n,t,e){e.d(t,{Fd:function(){return m},Gd:function(){return v},He:function(){return f},Ij:function(){return h},rS:function(){return x},up:function(){return g},vP:function(){return b}});var r,i,o,a,s,c,u,d=e(168),l=e(6444),p=e(1087),f=l.ZP.ul(r||(r=(0,d.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  grid-gap: 20px;\n  padding-bottom: 20px;\n"]))),m=l.ZP.li(i||(i=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  background-color: ",";\n\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: hidden;\n  cursor: zoom-in;\n\n  overflow: hidden;\n  cursor: zoom-in;\n\n  &:hover,\n  &:focus {\n    box-shadow: 0px 2px 10px 2px #1a0004;\n  }\n  &:hover img,\n  &:focus img {\n    transform: scale(1.05);\n  }\n  &:hover .js-overlay,\n  &:focus .js-overlay {\n    justify-content: center;\n    opacity: 1;\n    transform: translateY(0);\n  }\n"])),(function(n){return n.theme.colors.accent})),h=l.ZP.div(o||(o=(0,d.Z)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  & img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  }\n"]))),g=(0,l.ZP)(p.rU)(a||(a=(0,d.Z)(["\n  display: block;\n  flex-grow: 1;\n"]))),v=l.ZP.div(s||(s=(0,d.Z)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 20%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 20px;\n  background-color: ",";\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  ","\n"])),(function(n){return n.theme.colors.bgdWrapper}),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"transform: translateY(0); opacity: 1;":"transform: translateY(100%); opacity: 0;"),x=l.ZP.h3(c||(c=(0,d.Z)(["\n  text-align: center;\n  padding: 4px 10px;\n  font-size: 15px;\n  color: ",";\n"])),(function(n){return n.theme.colors.white})),b=l.ZP.h1(u||(u=(0,d.Z)(["\npadding: 15px;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\ncolor: ",";\ntext-shadow: 2px 2px 4px rgba(182, 179, 179, 0.5);\n"])),(function(n){return n.theme.colors.black}))},2390:function(n,t,e){e.r(t),e.d(t,{default:function(){return Gn}});var r,i,o=e(3433),a=e(5861),s=e(9439),c=e(7757),u=e.n(c),d=e(168),l=e(6444),p=l.ZP.div(r||(r=(0,d.Z)(["\ndisplay: flex;\n"]))),f=l.ZP.button(i||(i=(0,d.Z)(["\n  display: block;\n  padding: 10px 30px;\n  margin: 0 auto 20px auto;\n  border-radius: 2px;\n  background-color: ",";\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: ",";\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 20px;\n  font-weight: 700;\n  min-width: 180px;\n  border-radius: 4px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  &:hover {\n    color:",";\n  }\n"])),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.backgroundColor})),m=e(184),h=function(n){var t=n.onClick;return(0,m.jsx)(p,{children:(0,m.jsx)(f,{type:"button",onClick:t,children:"LOAD MORE"})})},g=e(1233),v=e(4585),x=e(5551),b=e(1087),y=e(9128),Z=e(1413),w=e(2791),k=e(4942),j={data:""},P=function(n){return"object"==typeof window?((n?n.querySelector("#_goober"):window._goober)||Object.assign((n||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:n||j},E=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,z=/\/\*[^]*?\*\/|  +/g,C=/\n+/g,O=function n(t,e){var r="",i="",o="",a=function(a){var c=t[a];"@"==a[0]?"i"==a[1]?r=a+" "+c+";":i+="f"==a[1]?n(c,a):a+"{"+n(c,"k"==a[1]?"":e)+"}":"object"==typeof c?i+=n(c,e?e.replace(/([^,])+/g,(function(n){return a.replace(/(^:.*)|([^,])+/g,(function(t){return/&/.test(t)?t.replace(/&/g,n):n?n+" "+t:t}))})):a):null!=c&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=n.p?n.p(a,c):a+":"+c+";"),s=a};for(var s in t)a(s);return r+(e&&o?e+"{"+o+"}":o)+i},S={},_=function n(t){if("object"==typeof t){var e="";for(var r in t)e+=r+n(t[r]);return e}return t},N=function(n,t,e,r,i){var o=_(n),a=S[o]||(S[o]=function(n){for(var t=0,e=11;t<n.length;)e=101*e+n.charCodeAt(t++)>>>0;return"go"+e}(o));if(!S[a]){var s=o!==n?n:function(n){for(var t,e,r=[{}];t=E.exec(n.replace(z,""));)t[4]?r.shift():t[3]?(e=t[3].replace(C," ").trim(),r.unshift(r[0][e]=r[0][e]||{})):r[0][t[1]]=t[2].replace(C," ").trim();return r[0]}(n);S[a]=O(i?(0,k.Z)({},"@keyframes "+a,s):s,e?"":"."+a)}var c=e&&S.g?S.g:null;return e&&(S.g=S[a]),function(n,t,e,r){r?t.data=t.data.replace(r,n):-1===t.data.indexOf(n)&&(t.data=e?n+t.data:t.data+n)}(S[a],t,r,c),a},A=function(n,t,e){return n.reduce((function(n,r,i){var o=t[i];if(o&&o.call){var a=o(e),s=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=s?"."+s:a&&"object"==typeof a?a.props?"":O(a,""):!1===a?"":a}return n+r+(null==o?"":o)}),"")};function D(n){var t=this||{},e=n.call?n(t.p):n;return N(e.unshift?e.raw?A(e,[].slice.call(arguments,1),t.p):e.reduce((function(n,e){return Object.assign(n,e&&e.call?e(t.p):e)}),{}):e,P(t.target),t.g,t.o,t.k)}D.bind({g:1});var I,T,M,H,L,F,$,R,U,Y,q,Q,B,W,G,K,V,X,J,nn=D.bind({k:1});function tn(n,t){var e=this||{};return function(){var r=arguments;function i(o,a){var s=Object.assign({},o),c=s.className||i.className;e.p=Object.assign({theme:T&&T()},s),e.o=/ *go\d+/.test(c),s.className=D.apply(e,r)+(c?" "+c:""),t&&(s.ref=a);var u=n;return n[0]&&(u=s.as||n,delete s.as),M&&u[0]&&M(s),I(u,s)}return t?t(i):i}}var en=function(n,t){return function(n){return"function"==typeof n}(n)?n(t):n},rn=function(){var n=0;return function(){return(++n).toString()}}(),on=function(){var n;return function(){if(void 0===n&&typeof window<"u"){var t=matchMedia("(prefers-reduced-motion: reduce)");n=!t||t.matches}return n}}(),an=new Map,sn=function(n){if(!an.has(n)){var t=setTimeout((function(){an.delete(n),ln({type:4,toastId:n})}),1e3);an.set(n,t)}},cn=function n(t,e){switch(e.type){case 0:return(0,Z.Z)((0,Z.Z)({},t),{},{toasts:[e.toast].concat((0,o.Z)(t.toasts)).slice(0,20)});case 1:return e.toast.id&&function(n){var t=an.get(n);t&&clearTimeout(t)}(e.toast.id),(0,Z.Z)((0,Z.Z)({},t),{},{toasts:t.toasts.map((function(n){return n.id===e.toast.id?(0,Z.Z)((0,Z.Z)({},n),e.toast):n}))});case 2:var r=e.toast;return t.toasts.find((function(n){return n.id===r.id}))?n(t,{type:1,toast:r}):n(t,{type:0,toast:r});case 3:var i=e.toastId;return i?sn(i):t.toasts.forEach((function(n){sn(n.id)})),(0,Z.Z)((0,Z.Z)({},t),{},{toasts:t.toasts.map((function(n){return n.id===i||void 0===i?(0,Z.Z)((0,Z.Z)({},n),{},{visible:!1}):n}))});case 4:return void 0===e.toastId?(0,Z.Z)((0,Z.Z)({},t),{},{toasts:[]}):(0,Z.Z)((0,Z.Z)({},t),{},{toasts:t.toasts.filter((function(n){return n.id!==e.toastId}))});case 5:return(0,Z.Z)((0,Z.Z)({},t),{},{pausedAt:e.time});case 6:var a=e.time-(t.pausedAt||0);return(0,Z.Z)((0,Z.Z)({},t),{},{pausedAt:void 0,toasts:t.toasts.map((function(n){return(0,Z.Z)((0,Z.Z)({},n),{},{pauseDuration:n.pauseDuration+a})}))})}},un=[],dn={toasts:[],pausedAt:void 0},ln=function(n){dn=cn(dn,n),un.forEach((function(n){n(dn)}))},pn={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},fn=function(n){return function(t,e){var r=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",e=arguments.length>2?arguments[2]:void 0;return(0,Z.Z)((0,Z.Z)({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:n,pauseDuration:0},e),{},{id:(null==e?void 0:e.id)||rn()})}(t,n,e);return ln({type:2,toast:r}),r.id}},mn=function(n,t){return fn("blank")(n,t)};mn.error=fn("error"),mn.success=fn("success"),mn.loading=fn("loading"),mn.custom=fn("custom"),mn.dismiss=function(n){ln({type:3,toastId:n})},mn.remove=function(n){return ln({type:4,toastId:n})},mn.promise=function(n,t,e){var r=mn.loading(t.loading,(0,Z.Z)((0,Z.Z)({},e),null==e?void 0:e.loading));return n.then((function(n){return mn.success(en(t.success,n),(0,Z.Z)((0,Z.Z)({id:r},e),null==e?void 0:e.success)),n})).catch((function(n){mn.error(en(t.error,n),(0,Z.Z)((0,Z.Z)({id:r},e),null==e?void 0:e.error))})),n};var hn=function(n,t){ln({type:1,toast:{id:n,height:t}})},gn=function(){ln({type:5,time:Date.now()})},vn=function(n){var t=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,w.useState)(dn),e=(0,s.Z)(t,2),r=e[0],i=e[1];(0,w.useEffect)((function(){return un.push(i),function(){var n=un.indexOf(i);n>-1&&un.splice(n,1)}}),[r]);var o=r.toasts.map((function(t){var e,r;return(0,Z.Z)((0,Z.Z)((0,Z.Z)((0,Z.Z)({},n),n[t.type]),t),{},{duration:t.duration||(null==(e=n[t.type])?void 0:e.duration)||(null==n?void 0:n.duration)||pn[t.type],style:(0,Z.Z)((0,Z.Z)((0,Z.Z)({},n.style),null==(r=n[t.type])?void 0:r.style),t.style)})}));return(0,Z.Z)((0,Z.Z)({},r),{},{toasts:o})}(n),e=t.toasts,r=t.pausedAt;(0,w.useEffect)((function(){if(!r){var n=Date.now(),t=e.map((function(t){if(t.duration!==1/0){var e=(t.duration||0)+t.pauseDuration-(n-t.createdAt);if(!(e<0))return setTimeout((function(){return mn.dismiss(t.id)}),e);t.visible&&mn.dismiss(t.id)}}));return function(){t.forEach((function(n){return n&&clearTimeout(n)}))}}}),[e,r]);var i=(0,w.useCallback)((function(){r&&ln({type:6,time:Date.now()})}),[r]),a=(0,w.useCallback)((function(n,t){var r,i=t||{},a=i.reverseOrder,s=void 0!==a&&a,c=i.gutter,u=void 0===c?8:c,d=i.defaultPosition,l=e.filter((function(t){return(t.position||d)===(n.position||d)&&t.height})),p=l.findIndex((function(t){return t.id===n.id})),f=l.filter((function(n,t){return t<p&&n.visible})).length;return(r=l.filter((function(n){return n.visible}))).slice.apply(r,(0,o.Z)(s?[f+1]:[0,f])).reduce((function(n,t){return n+(t.height||0)+u}),0)}),[e]);return{toasts:e,handlers:{updateHeight:hn,startPause:gn,endPause:i,calculateOffset:a}}},xn=nn(H||(H=(0,d.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]))),bn=nn(L||(L=(0,d.Z)(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),yn=nn(F||(F=(0,d.Z)(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]))),Zn=tn("div")($||($=(0,d.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"])),(function(n){return n.primary||"#ff4b4b"}),xn,bn,(function(n){return n.secondary||"#fff"}),yn),wn=nn(R||(R=(0,d.Z)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),kn=tn("div")(U||(U=(0,d.Z)(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"])),(function(n){return n.secondary||"#e0e0e0"}),(function(n){return n.primary||"#616161"}),wn),jn=nn(Y||(Y=(0,d.Z)(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]))),Pn=nn(q||(q=(0,d.Z)(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]))),En=tn("div")(Q||(Q=(0,d.Z)(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"])),(function(n){return n.primary||"#61d345"}),jn,Pn,(function(n){return n.secondary||"#fff"})),zn=tn("div")(B||(B=(0,d.Z)(["\n  position: absolute;\n"]))),Cn=tn("div")(W||(W=(0,d.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]))),On=nn(G||(G=(0,d.Z)(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),Sn=tn("div")(K||(K=(0,d.Z)(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"])),On),_n=function(n){var t=n.toast,e=t.icon,r=t.type,i=t.iconTheme;return void 0!==e?"string"==typeof e?w.createElement(Sn,null,e):e:"blank"===r?null:w.createElement(Cn,null,w.createElement(kn,(0,Z.Z)({},i)),"loading"!==r&&w.createElement(zn,null,"error"===r?w.createElement(Zn,(0,Z.Z)({},i)):w.createElement(En,(0,Z.Z)({},i))))},Nn=function(n){return"\n0% {transform: translate3d(0,".concat(-200*n,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n")},An=function(n){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*n,"%,-1px) scale(.6); opacity:0;}\n")},Dn=tn("div")(V||(V=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]))),In=tn("div")(X||(X=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]))),Tn=w.memo((function(n){var t=n.toast,e=n.position,r=n.style,i=n.children,o=t.height?function(n,t){var e=n.includes("top")?1:-1,r=on()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Nn(e),An(e)],i=(0,s.Z)(r,2),o=i[0],a=i[1];return{animation:t?"".concat(nn(o)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(nn(a)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}}(t.position||e||"top-center",t.visible):{opacity:0},a=w.createElement(_n,{toast:t}),c=w.createElement(In,(0,Z.Z)({},t.ariaProps),en(t.message,t));return w.createElement(Dn,{className:t.className,style:(0,Z.Z)((0,Z.Z)((0,Z.Z)({},o),r),t.style)},"function"==typeof i?i({icon:a,message:c}):w.createElement(w.Fragment,null,a,c))}));!function(n,t,e,r){O.p=t,I=n,T=e,M=r}(w.createElement);var Mn,Hn,Ln,Fn=function(n){var t=n.id,e=n.className,r=n.style,i=n.onHeightUpdate,o=n.children,a=w.useCallback((function(n){if(n){var e=function(){var e=n.getBoundingClientRect().height;i(t,e)};e(),new MutationObserver(e).observe(n,{subtree:!0,childList:!0,characterData:!0})}}),[t,i]);return w.createElement("div",{ref:a,className:e,style:r},o)},$n=D(J||(J=(0,d.Z)(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]))),Rn=function(n){var t=n.reverseOrder,e=n.position,r=void 0===e?"top-center":e,i=n.toastOptions,o=n.gutter,a=n.children,s=n.containerStyle,c=n.containerClassName,u=vn(i),d=u.toasts,l=u.handlers;return w.createElement("div",{style:(0,Z.Z)({position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none"},s),className:c,onMouseEnter:l.startPause,onMouseLeave:l.endPause},d.map((function(n){var e=n.position||r,i=function(n,t){var e=n.includes("top"),r=e?{top:0}:{bottom:0},i=n.includes("center")?{justifyContent:"center"}:n.includes("right")?{justifyContent:"flex-end"}:{};return(0,Z.Z)((0,Z.Z)({left:0,right:0,display:"flex",position:"absolute",transition:on()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY(".concat(t*(e?1:-1),"px)")},r),i)}(e,l.calculateOffset(n,{reverseOrder:t,gutter:o,defaultPosition:r}));return w.createElement(Fn,{id:n.id,key:n.id,onHeightUpdate:l.updateHeight,className:n.visible?$n:"",style:i},"custom"===n.type?en(n.message,n):a?a(n):w.createElement(Tn,{toast:n,position:e}))})))},Un=l.ZP.form(Mn||(Mn=(0,d.Z)(["\ndisplay: flex;\nmargin: 20px auto;\n-webkit-box-align: center;\nalign-items: center;\nwidth: 100%;\nmax-width: 400px;\nbackground-color: ",";\nborder-radius: 3px;\noverflow: hidden;\n"])),(function(n){return n.theme.colors.white})),Yn=l.ZP.input(Hn||(Hn=(0,d.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 16px;\n  border: none;\n  outline: none;\n  padding-left: 10px;\n  padding-right: 10px;\n  &:placeholder {\n    font: inherit;\n    font-size: 14px;\n  }\n"]))),qn=l.ZP.button(Ln||(Ln=(0,d.Z)(["\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  border: 0;\n  color: #626262;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]))),Qn=function(n){var t,e=n.onSubmit,r=(0,b.lr)(),i=(0,s.Z)(r,2),o=i[0],a=i[1],c=null!==(t=o.get("query"))&&void 0!==t?t:"";return(0,m.jsxs)(Un,{onSubmit:function(n){n.preventDefault();var t=n.target.elements.searchQuery.value;if(0===t.length)return mn.error("Please, enter search name!");a({query:t}),e()},children:[(0,m.jsx)(Yn,{type:"text",name:"searchQuery",defaultValue:c,autoComplete:"off",autoFocus:!0}),(0,m.jsx)(qn,{type:"submit",children:(0,m.jsx)(y.O6C,{})})]})},Bn=e(409),Wn=e(4781),Gn=function(){var n=(0,w.useState)([]),t=(0,s.Z)(n,2),e=t[0],r=t[1],i=(0,w.useState)(1),c=(0,s.Z)(i,2),d=c[0],l=c[1],p=(0,w.useState)(!1),f=(0,s.Z)(p,2),y=f[0],Z=f[1],k=(0,w.useState)(""),j=(0,s.Z)(k,2),P=j[0],E=j[1],z=(0,w.useState)(!1),C=(0,s.Z)(z,2),O=C[0],S=C[1],_=(0,b.lr)(),N=(0,s.Z)(_,1)[0].get("query");(0,w.useEffect)((function(){var n=new AbortController;if(N){var t=function(){var t=(0,a.Z)(u().mark((function t(){var e,i,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Z(!0),t.prev=1,t.next=4,(0,Bn.Wf)(N,d,n.signal);case 4:if(e=t.sent,i=e.results,a=e.total_results,i.length){t.next=10;break}return S(!1),t.abrupt("return",mn.error("No movies found. Please enter another keyword"));case 10:r((function(n){return[].concat((0,o.Z)(n),(0,o.Z)(i))})),S(d<Math.ceil(a/20)),t.next=19;break;case 14:t.prev=14,t.t0=t.catch(1),"ERR_CANCELED"!==t.t0.code&&E(Wn.YL);case 19:return t.prev=19,Z(!1),t.finish(19);case 22:case"end":return t.stop()}}),t,null,[[1,14,19,22]])})));return function(){return t.apply(this,arguments)}}();return t(),function(){return n.abort()}}}),[N,d]);return(0,m.jsx)("section",{children:(0,m.jsxs)(g.QX,{children:[(0,m.jsx)(Qn,{onSubmit:function(){l(1),r([]),E("")}}),P&&(0,m.jsx)("div",{children:P}),e&&(0,m.jsx)(x.Z,{movies:e}),y&&(0,m.jsx)(v.Z,{}),O&&(0,m.jsx)(h,{onClick:function(){l((function(n){return n+1}))}}),(0,m.jsx)(Rn,{position:"top-center",reverseOrder:!0})]})})}},409:function(n,t,e){e.d(t,{Hg:function(){return c},TP:function(){return d},Wf:function(){return u}});var r=e(5861),i=e(7757),o=e.n(i),a=e(1243),s=e(4781);a.Z.defaults.baseURL=s._n;var c=function(){var n=(0,r.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get(s.$K,{params:{api_key:s.$h}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(o().mark((function n(t,e,r){var i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get(s.cP,{signal:r,params:{api_key:s.$h,query:t,page:e}});case 2:return i=n.sent,n.abrupt("return",i.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(t,e,r){var i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("".concat(s.iN,"/").concat(t).concat(e),{signal:r,params:{api_key:s.$h}});case 2:return i=n.sent,n.abrupt("return",i.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}()},4781:function(n,t,e){e.d(t,{$K:function(){return o},$h:function(){return i},YL:function(){return u},_n:function(){return r},cP:function(){return a},iN:function(){return s},r1:function(){return c}});var r="https://api.themoviedb.org/3",i="7d691cb5b3405ae4ec9a5d6e389d01f2",o="/trending/movie/day",a="/search/movie",s="/movie",c="https://image.tmdb.org/t/p/w500/",u="Oops! Something went wrong! Try reloading the page!"},1111:function(n,t,e){n.exports=e.p+"static/media/no-poster.d7e60210de6e7d4fcc19.jpg"}}]);
//# sourceMappingURL=390.5b5f23ab.chunk.js.map