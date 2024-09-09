"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[44888],{22047:(e,t,n)=>{n.d(t,{A:()=>v});var r=n(62540);n(63696);var i=n(11750),o=n(46222),l=n(36372),s=n(13111),a=n(14652),c=n(81912),u=n(37425);let d={cardContainer:"cardContainer_Uewx",cardTitle:"cardTitle_dwRT",cardDescription:"cardDescription_mCBT"};function h({href:e,children:t}){return(0,r.jsx)(l.A,{href:e,className:(0,i.A)("card padding--lg",d.cardContainer),children:t})}function p({href:e,icon:t,title:n,description:o}){return(0,r.jsxs)(h,{href:e,children:[(0,r.jsxs)(u.A,{as:"h2",className:(0,i.A)("text--truncate",d.cardTitle),title:n,children:[t," ",n]}),o&&(0,r.jsx)("p",{className:(0,i.A)("text--truncate",d.cardDescription),title:o,children:o})]})}function f({item:e}){var t;let n=(0,o.Nr)(e),i=function(){let{selectMessage:e}=(0,s.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,r.jsx)(p,{href:n,icon:"\u{1F5C3}\uFE0F",title:e.label,description:null!==(t=e.description)&&void 0!==t?t:i(e.items.length)}):null}function m({item:e}){var t,n;let i=(0,a.A)(e.href)?"\u{1F4C4}\uFE0F":"\u{1F517}",l=(0,o.cC)(null!==(t=e.docId)&&void 0!==t?t:void 0);return(0,r.jsx)(p,{href:e.href,icon:i,title:e.label,description:null!==(n=e.description)&&void 0!==n?n:null==l?void 0:l.description})}function g({item:e}){switch(e.type){case"link":return(0,r.jsx)(m,{item:e});case"category":return(0,r.jsx)(f,{item:e});default:throw Error(`unknown item type ${JSON.stringify(e)}`)}}function x({className:e}){let t=(0,o.$S)();return(0,r.jsx)(v,{items:t.items,className:e})}function v(e){let{items:t,className:n}=e;if(!t)return(0,r.jsx)(x,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r})}return e}({},e));let l=(0,o.d1)(t);return(0,r.jsx)("section",{className:(0,i.A)("row",n),children:l.map((e,t)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(g,{item:e})},t))})}},13111:(e,t,n)=>{n.d(t,{W:()=>a});var r=n(63696),i=n(99468);let o=["zero","one","two","few","many","other"];function l(e){return o.filter(t=>e.includes(t))}let s={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function a(){let e=function(){let{i18n:{currentLocale:e}}=(0,i.A)();return(0,r.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),s}},[e])}();return{selectMessage:(t,n)=>(function(e,t,n){let r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);let i=n.select(t);return r[Math.min(n.pluralForms.indexOf(i),r.length-1)]})(n,t,e)}}},45864:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>u});let r=JSON.parse('{"id":"advanced/index","title":"Advanced Tutorials","description":"This section is not going to be very structured, but we will cover the following topics:","source":"@site/docs/advanced/index.mdx","sourceDirName":"advanced","slug":"/advanced/","permalink":"/docs/advanced/","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/advanced/index.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1725631629000,"frontMatter":{},"sidebar":"docs","previous":{"title":"What\'s next?","permalink":"/docs/guides/whats-next"},"next":{"title":"Architecture","permalink":"/docs/advanced/architecture"}}');var i=n(62540),o=n(43023),l=n(22047);let s={},a="Advanced Tutorials",c={},u=[];function d(e){let t={a:"a",h1:"h1",header:"header",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"advanced-tutorials",children:"Advanced Tutorials"})}),"\n",(0,i.jsx)(t.p,{children:"This section is not going to be very structured, but we will cover the following topics:"}),"\n","\n",(0,i.jsx)(l.A,{}),"\n",(0,i.jsxs)(t.p,{children:["We will assume that you have finished the guides, and know the basics like how to configure plugins, how to write React components, etc. These sections will have plugin authors and code contributors in mind, so we may occasionally refer to ",(0,i.jsx)(t.a,{href:"/docs/api/plugin-methods/",children:"plugin APIs"})," or other architecture details. Don't panic if you don't understand everything\u{1F609}"]})]})}function h(e={}){let{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},43023:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>s});var r=n(63696);let i={},o=r.createContext(i);function l(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);