(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[844],{709:function(e,t,l){Promise.resolve().then(l.bind(l,6469))},6469:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return x}});var n=l(7437),a=l(2265),s=l(1126);l(5355);var r=(0,l(3472).$)("5220c02c37976ea67a54b64c4de7ec5c123ddb3c"),i=l(8792),o=e=>{var t;let[l,s]=(0,a.useState)(!1),r=t=>{e.setSelected(t),s(!1)},i=(null===(t=e.list)||void 0===t?void 0:t.find(t=>t.id===e.selected))||{name:"Select a category"};return(0,n.jsxs)("div",{className:"my-6",children:[(0,n.jsx)("button",{type:"button",onClick:()=>{s(e=>!e)},className:"px-3 py-3 bg-yellow-500 rounded-md border",children:i.name}),l?(0,n.jsx)("div",{className:"absolute mt-2 bg-white rounded-md border neo-shadow",children:e.list.map(e=>(0,n.jsx)("div",{className:"px-3 py-2 hover:bg-gray-100 cursor-pointer",onClick:()=>r(e.id),children:e.name},e.id))}):null]})};l(6214);var c=l(9069),u=l(9289),d=l(9064);l(7919),l(4517);let f=(e=>{let t=(0,c.T8)(void 0);return e=>(0,n.jsx)(u.U,{...e,url:t})})();(e=>{let t=(0,c.T8)(void 0);return e=>(0,n.jsx)(d.U,{...e,url:t})})();var m=l(703),x=e=>{let{data:t,status:l}=(0,s.useSession)(),[c,u]=(0,a.useState)(""),[d,x]=(0,a.useState)(""),[h,b]=(0,a.useState)(null),[p,g]=(0,a.useState)(null),[v,j]=(0,a.useState)(null),[y,N]=(0,a.useState)(!1);if(!t&&"loading"!==l)return(0,n.jsx)("div",{children:"You must be signed in to post"});let S=async e=>{e.preventDefault();let l=null==t?void 0:t.user,n=null==l?void 0:l.id;if(n)try{let e={title:c,content:d,authorId:n,imgURL:h};p&&(e.categories={connect:[{id:p}]});let t=await r(e);j(t.id),N(!0),window.alert("Post successfully added to the database")}catch(e){console.log(e)}};return y?(0,n.jsx)("div",{className:"py-2 container flex flex-col",children:(0,n.jsxs)("div",{className:"flex flex-col flex-1 items-stretch justify-center h-full text-left border p-8",children:[(0,n.jsx)("h1",{className:"text-4xl",children:"Your post has been published:"}),(0,n.jsx)(i.default,{href:"/blog/".concat(v),className:"text-indigo-500 text-xl mt-4",children:"Click here to view"})]})}):(0,n.jsx)("div",{className:"min-h-[calc(100vh-130px)] py-2 container flex flex-col mt-12",children:(0,n.jsxs)("form",{className:"flex flex-col flex-1 items-stretch justify-center h-full text-left my-12",onSubmit:S,children:[(0,n.jsx)("input",{type:"text",className:"text-3xl font-bold bg-blue-100 rounded-md focus-visible:outline-none p-6",placeholder:"Title",value:c,onChange:e=>u(e.target.value),name:"title"}),(0,n.jsx)("textarea",{name:"content",className:"flex-1 bg-pink-100 rounded-md focus-visible:outline-none text-4xl p-6 mt-4",placeholder:"Content ...",value:d,onChange:e=>x(e.target.value)}),(0,n.jsxs)("div",{className:"self-start mt-4",children:[h&&(0,n.jsx)(m.default,{src:h,alt:"Thumbnail",width:300,height:200,className:"w-20 h-20 object-cover rounded-full"}),(0,n.jsx)("label",{className:"text-slate-600 mb-3",children:h?"Change Image":"Add thumbnail image(optional)"}),(0,n.jsx)(f,{className:"items-start",endpoint:"imageUploader",onClientUploadComplete:e=>{e&&b(e[0].url)},onUploadError:e=>{alert("ERROR! ".concat(e.message))}}),(0,n.jsx)(o,{list:e.blogCategories,selected:p,setSelected:e=>g(e)})]}),(0,n.jsx)("button",{type:"submit",className:"w-fit-content text-white text-2xl text-bold bg-indigo-300 px-4 py-2 sm:px-6 sm:py-4 mt-6 border-2 rounded",children:"Create"})]})})}},703:function(e,t,l){"use strict";l.d(t,{default:function(){return a.a}});var n=l(7447),a=l.n(n)},8792:function(e,t,l){"use strict";l.d(t,{default:function(){return a.a}});var n=l(5250),a=l.n(n)},3472:function(e,t,l){"use strict";Object.defineProperty(t,"$",{enumerable:!0,get:function(){return a}});let n=l(5355);function a(e){let{createServerReference:t}=l(6671);return t(e,n.callServer)}},7447:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var l in t)Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}(t,{getImageProps:function(){return i},default:function(){return o}});let n=l(6921),a=l(8630),s=l(1749),r=n._(l(536)),i=e=>{let{props:t}=(0,a.getImgProps)(e,{defaultLoader:r.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,l]of Object.entries(t))void 0===l&&delete t[e];return{props:t}},o=s.Image},6214:function(){}},function(e){e.O(0,[749,250,126,919,971,69,744],function(){return e(e.s=709)}),_N_E=e.O()}]);