if(!self.define){let e,r={};const i=(i,s)=>(i=new URL(i+".js",s).href,r[i]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=r,document.head.appendChild(e)}else e=i,importScripts(i),r()})).then((()=>{let e=r[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,o)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(r[n])return;let u={};const l=e=>i(e,n),d={module:{uri:n},exports:u,require:l};r[n]=Promise.all(s.map((e=>d[e]||l(e)))).then((e=>(o(...e),u)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"redbird"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/vue2project-Redbird/css/878.99c140ae.css",revision:null},{url:"/vue2project-Redbird/css/about.1c7a66a0.css",revision:null},{url:"/vue2project-Redbird/css/app.99e4a12c.css",revision:null},{url:"/vue2project-Redbird/css/chunk-vendors.3d1ba216.css",revision:null},{url:"/vue2project-Redbird/fonts/element-icons.f1a45d74.ttf",revision:null},{url:"/vue2project-Redbird/fonts/element-icons.ff18efd1.woff",revision:null},{url:"/vue2project-Redbird/img/logo2.c407e0a4.png",revision:null},{url:"/vue2project-Redbird/img/redbird.3015582e.png",revision:null},{url:"/vue2project-Redbird/index.html",revision:"47e94db6fc41d0059365e649ae0cf6a1"},{url:"/vue2project-Redbird/js/826.1e2132df.js",revision:null},{url:"/vue2project-Redbird/js/867.c3b45ac2.js",revision:null},{url:"/vue2project-Redbird/js/878.f26d98a4.js",revision:null},{url:"/vue2project-Redbird/js/about.414c6882.js",revision:null},{url:"/vue2project-Redbird/js/app.9e5f489e.js",revision:null},{url:"/vue2project-Redbird/js/chunk-vendors.270947a0.js",revision:null},{url:"/vue2project-Redbird/manifest.json",revision:"620f228b94c54122c051e3bff2d25f73"},{url:"/vue2project-Redbird/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
