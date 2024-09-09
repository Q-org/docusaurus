"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[43107],{15995:(e,n,s)=>{s.d(n,{A:()=>r});var t=s(62540);s(63696);var i=s(11750);function r({children:e,hidden:n,className:s}){return(0,t.jsx)("div",{role:"tabpanel",className:(0,i.A)("tabItem_pnkT",s),hidden:n,children:e})}},27446:(e,n,s)=>{s.d(n,{A:()=>x});var t=s(62540),i=s(63696),r=s(11750),o=s(7846),a=s(49519),l=s(96439),c=s(19739),d=s(66904),u=s(79244);function h(e){var n,s;return null!==(s=null===(n=i.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))||void 0===n?void 0:n.filter(Boolean))&&void 0!==s?s:[]}function p({value:e,tabValues:n}){return n.some(n=>n.value===e)}var m=s(10709);function g(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{},t=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(s).filter(function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable}))),t.forEach(function(n){var t;t=s[n],n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t})}return e}function j(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s.push.apply(s,t)}return s})(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))}),e}function b({className:e,block:n,selectedValue:s,selectValue:i,tabValues:a}){let l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{let n=e.currentTarget,t=a[l.indexOf(n)].value;t!==s&&(c(n),i(t))},u=e=>{var n,s;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let s=l.indexOf(e.currentTarget)+1;t=null!==(n=l[s])&&void 0!==n?n:l[0];break}case"ArrowLeft":{let n=l.indexOf(e.currentTarget)-1;t=null!==(s=l[n])&&void 0!==s?s:l[l.length-1]}}null==t||t.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},e),children:a.map(({value:e,label:n,attributes:i})=>(0,t.jsx)("li",j(g({role:"tab",tabIndex:s===e?0:-1,"aria-selected":s===e,ref:e=>l.push(e),onKeyDown:u,onClick:d},i),{className:(0,r.A)("tabs__item","tabItem_AQgk",null==i?void 0:i.className,{"tabs__item--active":s===e}),children:null!=n?n:e}),e))})}function f({lazy:e,children:n,selectedValue:s}){let o=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){let e=o.find(e=>e.props.value===s);return e?(0,i.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:o.map((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==s}))})}function v(e){let n=function(e){let{defaultValue:n,queryString:s=!1,groupId:t}=e,r=function(e){let{values:n,children:s}=e;return(0,i.useMemo)(()=>{let e=null!=n?n:h(s).map(({props:{value:e,label:n,attributes:s,default:t}})=>({value:e,label:n,attributes:s,default:t}));return!function(e){let n=(0,d.XI)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,s])}(e),[o,m]=(0,i.useState)(()=>(function({defaultValue:e,tabValues:n}){var s;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let t=null!==(s=n.find(e=>e.default))&&void 0!==s?s:n[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:n,tabValues:r})),[g,j]=function({queryString:e=!1,groupId:n}){let s=(0,a.W6)(),t=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n});return[(0,c.aZ)(t),(0,i.useCallback)(e=>{var n,i;if(!t)return;let r=new URLSearchParams(s.location.search);r.set(t,e),s.replace((n=function(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{},t=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(s).filter(function(e){return Object.getOwnPropertyDescriptor(s,e).enumerable}))),t.forEach(function(n){var t;t=s[n],n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t})}return e}({},s.location),i=i={search:r.toString()},Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):(function(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s.push.apply(s,t)}return s})(Object(i)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(i,e))}),n))},[t,s])]}({queryString:s,groupId:t}),[b,f]=function({groupId:e}){let n=e?`docusaurus.tab.${e}`:null,[s,t]=(0,u.Dv)(n);return[s,(0,i.useCallback)(e=>{n&&t.set(e)},[n,t])]}({groupId:t}),v=(()=>{let e=null!=g?g:b;return p({value:e,tabValues:r})?e:null})();return(0,l.A)(()=>{v&&m(v)},[v]),{selectedValue:o,selectValue:(0,i.useCallback)(e=>{if(!p({value:e,tabValues:r}))throw Error(`Can't select invalid tab value=${e}`);m(e),j(e),f(e)},[j,f,r]),tabValues:r}}(e);return(0,t.jsxs)("div",{className:(0,r.A)("tabs-container","tabList_Qoir"),children:[(0,t.jsx)(b,g({},n,e)),(0,t.jsx)(f,g({},n,e))]})}function x(e){let n=(0,m.A)();return(0,t.jsx)(v,j(g({},e),{children:h(e.children)}),String(n))}},56836:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>t,toc:()=>u});let t=JSON.parse('{"id":"guides/docs/multi-instance","title":"Docs Multi-instance","description":"Use multiple docs plugin instances on a single Docusaurus site.","source":"@site/docs/guides/docs/docs-multi-instance.mdx","sourceDirName":"guides/docs","slug":"/docs-multi-instance","permalink":"/docs/docs-multi-instance","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/docs/docs-multi-instance.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1725631629000,"frontMatter":{"id":"multi-instance","description":"Use multiple docs plugin instances on a single Docusaurus site.","slug":"/docs-multi-instance"},"sidebar":"docs","previous":{"title":"Versioning","permalink":"/docs/versioning"},"next":{"title":"Blog","permalink":"/docs/blog"}}');var i=s(62540),r=s(43023),o=s(27446),a=s(15995);let l={id:"multi-instance",description:"Use multiple docs plugin instances on a single Docusaurus site.",slug:"/docs-multi-instance"},c="Docs Multi-instance",d={},u=[{value:"Use-cases",id:"use-cases",level:2},{value:"Mobile SDKs documentation",id:"mobile-sdks-documentation",level:3},{value:"Versioned and unversioned doc",id:"versioned-and-unversioned-doc",level:3},{value:"Setup",id:"setup",level:2},{value:"Versioned paths",id:"versioned-paths",level:2},{value:"Tagging new versions",id:"tagging-new-versions",level:2},{value:"Docs navbar items",id:"docs-navbar-items",level:2}];function h(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"docs-multi-instance",children:"Docs Multi-instance"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"@docusaurus/plugin-content-docs"})," plugin can support ",(0,i.jsx)(n.a,{href:"/docs/using-plugins#multi-instance-plugins-and-plugin-ids",children:"multi-instance"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["This feature is only useful for ",(0,i.jsx)(n.a,{href:"/docs/versioning",children:"versioned documentation"}),". It is recommended to be familiar with docs versioning before reading this page. If you just want ",(0,i.jsx)(n.a,{href:"/docs/sidebar/multiple-sidebars",children:"multiple sidebars"}),", you can do so within one plugin."]})}),"\n",(0,i.jsx)(n.h2,{id:"use-cases",children:"Use-cases"}),"\n",(0,i.jsx)(n.p,{children:"Sometimes you want a Docusaurus site to host 2 distinct sets of documentation (or more)."}),"\n",(0,i.jsx)(n.p,{children:"These documentations may even have different versioning/release lifecycles."}),"\n",(0,i.jsx)(n.h3,{id:"mobile-sdks-documentation",children:"Mobile SDKs documentation"}),"\n",(0,i.jsx)(n.p,{children:"If you build a cross-platform mobile SDK, you may have 2 documentations:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Android SDK documentation (",(0,i.jsx)(n.code,{children:"v1.0"}),", ",(0,i.jsx)(n.code,{children:"v1.1"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["iOS SDK documentation (",(0,i.jsx)(n.code,{children:"v1.0"}),", ",(0,i.jsx)(n.code,{children:"v2.0"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"In this case, you can use a distinct docs plugin instance per mobile SDK documentation."}),"\n",(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsx)(n.p,{children:"If each documentation instance is very large, you should rather create 2 distinct Docusaurus sites."}),(0,i.jsx)(n.p,{children:"If someone edits the iOS documentation, is it really useful to rebuild everything, including the whole Android documentation that did not change?"})]}),"\n",(0,i.jsx)(n.h3,{id:"versioned-and-unversioned-doc",children:"Versioned and unversioned doc"}),"\n",(0,i.jsx)(n.p,{children:'Sometimes, you want some documents to be versioned, while other documents are more "global", and it feels useless to version them.'}),"\n",(0,i.jsx)(n.p,{children:"We use this pattern on the Docusaurus website itself:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.a,{href:"/docs",children:"/docs/*"})," section is versioned"]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.a,{href:"/community/support",children:"/community/*"})," section is unversioned"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsx)(n.p,{children:"Suppose you have 2 documentations:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Product: some versioned doc about your product"}),"\n",(0,i.jsx)(n.li,{children:"Community: some unversioned doc about the community around your product"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"In this case, you should use the same plugin twice in your site configuration."}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"@docusaurus/preset-classic"})," already includes a docs plugin instance for you!"]})}),"\n",(0,i.jsx)(n.p,{children:"When using the preset:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-start\n          // id: 'product', // omitted => default instance\n          // highlight-end\n          path: 'product',\n          routeBasePath: 'product',\n          sidebarPath: './sidebarsProduct.js',\n          // ... other options\n        },\n      },\n    ],\n  ],\n  plugins: [\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        // highlight-start\n        id: 'community',\n        // highlight-end\n        path: 'community',\n        routeBasePath: 'community',\n        sidebarPath: './sidebarsCommunity.js',\n        // ... other options\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,i.jsx)(n.p,{children:"When not using the preset:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  plugins: [\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        // highlight-start\n        // id: 'product', // omitted => default instance\n        // highlight-end\n        path: 'product',\n        routeBasePath: 'product',\n        sidebarPath: './sidebarsProduct.js',\n        // ... other options\n      },\n    ],\n    [\n      '@docusaurus/plugin-content-docs',\n      {\n        // highlight-start\n        id: 'community',\n        // highlight-end\n        path: 'community',\n        routeBasePath: 'community',\n        sidebarPath: './sidebarsCommunity.js',\n        // ... other options\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Don't forget to assign a unique ",(0,i.jsx)(n.code,{children:"id"})," attribute to plugin instances."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["We consider that the ",(0,i.jsx)(n.code,{children:"product"}),' instance is the most important one, and make it the "default" instance by not assigning any ID.']})}),"\n",(0,i.jsx)(n.h2,{id:"versioned-paths",children:"Versioned paths"}),"\n",(0,i.jsx)(n.p,{children:"Each plugin instance will store versioned docs in a distinct folder."}),"\n",(0,i.jsx)(n.p,{children:"The default plugin instance will use these paths:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"website/versions.json"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"website/versioned_docs"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"website/versioned_sidebars"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The other plugin instances (with an ",(0,i.jsx)(n.code,{children:"id"})," attribute) will use these paths:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"website/[pluginId]_versions.json"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"website/[pluginId]_versioned_docs"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"website/[pluginId]_versioned_sidebars"})}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsxs)(n.p,{children:["You can omit the ",(0,i.jsx)(n.code,{children:"id"})," attribute (defaults to ",(0,i.jsx)(n.code,{children:"default"}),") for one of the docs plugin instances."]}),(0,i.jsx)(n.p,{children:"The instance paths will be simpler, and retro-compatible with a single-instance setup."})]}),"\n",(0,i.jsx)(n.h2,{id:"tagging-new-versions",children:"Tagging new versions"}),"\n",(0,i.jsx)(n.p,{children:"Each plugin instance will have its own CLI command to tag a new version. They will be displayed if you run:"}),"\n",(0,i.jsxs)(o.A,{groupId:"npm2yarn",children:[(0,i.jsx)(a.A,{value:"npm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm run docusaurus -- --help\n"})})}),(0,i.jsx)(a.A,{value:"yarn",label:"Yarn",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn docusaurus --help\n"})})}),(0,i.jsx)(a.A,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm run docusaurus --help\n"})})})]}),"\n",(0,i.jsx)(n.p,{children:"To version the product/default docs plugin instance:"}),"\n",(0,i.jsxs)(o.A,{groupId:"npm2yarn",children:[(0,i.jsx)(a.A,{value:"npm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm run docusaurus docs:version 1.0.0\n"})})}),(0,i.jsx)(a.A,{value:"yarn",label:"Yarn",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn docusaurus docs:version 1.0.0\n"})})}),(0,i.jsx)(a.A,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm run docusaurus docs:version 1.0.0\n"})})})]}),"\n",(0,i.jsx)(n.p,{children:"To version the non-default/community docs plugin instance:"}),"\n",(0,i.jsxs)(o.A,{groupId:"npm2yarn",children:[(0,i.jsx)(a.A,{value:"npm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm run docusaurus docs:version:community 1.0.0\n"})})}),(0,i.jsx)(a.A,{value:"yarn",label:"Yarn",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"yarn docusaurus docs:version:community 1.0.0\n"})})}),(0,i.jsx)(a.A,{value:"pnpm",label:"pnpm",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pnpm run docusaurus docs:version:community 1.0.0\n"})})})]}),"\n",(0,i.jsx)(n.h2,{id:"docs-navbar-items",children:"Docs navbar items"}),"\n",(0,i.jsxs)(n.p,{children:["Each docs-related ",(0,i.jsx)(n.a,{href:"/docs/api/themes/configuration#navbar",children:"theme navbar items"})," take an optional ",(0,i.jsx)(n.code,{children:"docsPluginId"})," attribute."]}),"\n",(0,i.jsx)(n.p,{children:"For example, if you want to have one version dropdown for each mobile SDK (iOS and Android), you could do:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  themeConfig: {\n    navbar: {\n      items: [\n        {\n          type: 'docsVersionDropdown',\n          // highlight-start\n          docsPluginId: 'ios',\n          // highlight-end\n        },\n        {\n          type: 'docsVersionDropdown',\n          // highlight-start\n          docsPluginId: 'android',\n          // highlight-end\n        },\n      ],\n    },\n  },\n};\n"})})]})}function p(e={}){let{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},43023:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var t=s(63696);let i={},r=t.createContext(i);function o(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);