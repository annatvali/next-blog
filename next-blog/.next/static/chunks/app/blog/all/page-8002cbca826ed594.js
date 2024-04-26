(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[985],{5097:function(e,l,t){Promise.resolve().then(t.bind(t,4816))},4816:function(e,l,t){"use strict";t.r(l),t.d(l,{default:function(){return d}});var s=t(7437),r=t(2265);let n=e=>{let l=["bg-blue-200","bg-green-200","bg-yellow-200","bg-indigo-200","bg-purple-200","bg-pink-200"];return(0,s.jsxs)("div",{className:"flex flex-col justify-center my-4",children:[(0,s.jsx)("div",{className:"flex justify-center flex-wrap",children:e.categories.map((t,r)=>(0,s.jsx)("button",{onClick:()=>e.selectCategory(t.id),className:"inline-block rounded-full text-xl px-4 py-2 text-white mr-4 mb-4 ".concat(l[r]," ").concat(e.selectedCategoryId===t.id?"neo-shadow":""),children:t.name},t.id))}),e.selectedCategoryId?(0,s.jsx)("button",{className:"cursor-pointer underline",onClick:()=>e.selectCategory(null),children:"Remove Selection"},"remove selection"):null]})};var a=t(8792),o=t(703),i=e=>{let{handleLoadMore:l,showButton:t}=e;return t?(0,s.jsx)("button",{onClick:l,className:"text-xl text-white font-semibold rounded-full border-2 border-purple-600 bg-purple-600 hover:bg-purple-800 hover:border-purple-800 px-8 py-4",children:"Load More"}):null};let c=e=>{var l;let[t,n]=(0,r.useState)(6);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-12 mt-4",children:[e.posts.slice(0,t).map(e=>{var l;return(0,s.jsx)("div",{className:"w-full h-full bg-white",children:(0,s.jsxs)(a.default,{href:"/blog/".concat(e.id),className:"block cursor-pointer bg-gray-100 rounded-md neo-shadow focus:shadow-none focus:translate-x-1 focus:translate-y-1 transform transition-shadow duration-100",children:[(0,s.jsx)("article",{className:"w-full h-full",children:(0,s.jsx)("figure",{className:"w-full h-30 lg:h-72",children:e.imgURL?(0,s.jsx)(o.default,{src:e.imgURL,alt:"thumbnail",width:300,height:200,className:"w-full h-full rounded object-cover"}):(0,s.jsx)(o.default,{src:"/article-placeholder.png",alt:"thumbnail",width:300,height:200,className:"w-full h-full rounded object-cover"})})}),(0,s.jsxs)("div",{className:"px-6 py-5 text-left h-full",children:[(0,s.jsx)("p",{className:"text-base mb-4",children:null===(l=e.createdAt)||void 0===l?void 0:l.toLocaleString()}),(0,s.jsx)("h1",{className:"text-xl mb-4",children:e.title}),(0,s.jsx)("p",{className:"text-xs mb-4 line-clamp-4",children:e.content}),(0,s.jsx)("p",{className:"text-indigo-600",children:"Read More"})]})]})},e.id)}),e.newBlog&&(0,s.jsx)("div",{className:"w-full sm:w-40 md:w-60 lg:w-80 h-full bg-white",children:(0,s.jsxs)(a.default,{href:"/blog/".concat(e.newBlog.id),className:"block cursor-pointer bg-gray-100 rounded-md neo-shadow focus:shadow-none focus:translate-x-1 focus:translate-y-1 transform transition-shadow duration-100",children:[(0,s.jsx)("article",{className:"w-full h-full",children:(0,s.jsx)("figure",{className:"w-full h-30 md:h-40 lg:h-72 ",children:e.newBlog.imgURL?(0,s.jsx)(o.default,{src:e.newBlog.imgURL,alt:"thumbnail",width:300,height:200,className:"w-full h-full rounded object-cover"}):(0,s.jsx)(o.default,{src:"/article-placeholder.png",alt:"thumbnail",width:300,height:200,className:"w-full h-full rounded object-cover"})})}),(0,s.jsxs)("div",{className:"px-6 py-5 text-left h-full",children:[(0,s.jsx)("p",{className:"text-base mb-4",children:null===(l=e.newBlog.createdAt)||void 0===l?void 0:l.toLocaleString()}),(0,s.jsx)("h1",{className:"text-xl mb-4",children:e.newBlog.title}),(0,s.jsx)("p",{className:"text-xs mb-4 line-clamp-4",children:e.newBlog.content}),(0,s.jsx)("p",{className:"text-indigo-600",children:"Read More"})]})]})})]}),(0,s.jsx)("div",{className:"w-full h-full flex items-center justify-center mt-12",children:(0,s.jsx)(i,{handleLoadMore:()=>{n(e=>e+6)},showButton:t<e.posts.length})})]})};var d=e=>{let[l,t]=(0,r.useState)(null),a=l?e.posts.filter(e=>e.categories.find(e=>e.id===l)):e.posts;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n,{categories:e.categories,selectedCategoryId:l,selectCategory:e=>{t(e)}}),(0,s.jsx)(c,{posts:a,newBlog:null})]})}},703:function(e,l,t){"use strict";t.d(l,{default:function(){return r.a}});var s=t(7447),r=t.n(s)},8792:function(e,l,t){"use strict";t.d(l,{default:function(){return r.a}});var s=t(5250),r=t.n(s)},7447:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),function(e,l){for(var t in l)Object.defineProperty(e,t,{enumerable:!0,get:l[t]})}(l,{getImageProps:function(){return o},default:function(){return i}});let s=t(6921),r=t(8630),n=t(1749),a=s._(t(536)),o=e=>{let{props:l}=(0,r.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,t]of Object.entries(l))void 0===t&&delete l[e];return{props:l}},i=n.Image}},function(e){e.O(0,[749,250,971,69,744],function(){return e(e.s=5097)}),_N_E=e.O()}]);