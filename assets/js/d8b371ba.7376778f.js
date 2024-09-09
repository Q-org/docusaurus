"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8621],{13674:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>t,metadata:()=>s,toc:()=>c});var s=i(51309),l=i(62540),a=i(43023);let t={mdx:{format:"md"},date:"2019-12-06T20:00",authors:["endiliey","FeynmanDNA","qshiwu","shivangna"]},r="2.0.0-alpha.38",h={authorsImageUrls:[void 0,void 0,void 0,void 0]},c=[{value:"\u{1F4A5} Breaking Change",id:"boom-breaking-change",level:2},{value:"\u{1F41B} Bug Fix",id:"bug-bug-fix",level:2},{value:"\u{1F485} Polish",id:"nail_care-polish",level:2},{value:"\u{1F3E0} Internal",id:"house-internal",level:2},{value:":running: Performance",id:"running-performance",level:2},{value:"Committers: 4",id:"committers-4",level:2}];function o(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"boom-breaking-change",children:"\u{1F4A5} Breaking Change"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"docusaurus-plugin-content-blog"}),", ",(0,l.jsx)(n.code,{children:"docusaurus-plugin-content-docs"}),", ",(0,l.jsx)(n.code,{children:"docusaurus-plugin-content-pages"}),", ",(0,l.jsx)(n.code,{children:"docusaurus-theme-classic"}),", ",(0,l.jsx)(n.code,{children:"docusaurus-utils"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/2088",children:"#2088"})," perf(v2): smaller bundlesize by embedding metadata to content (",(0,l.jsx)(n.a,{href:"https://github.com/endiliey",children:"@endiliey"}),")"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"If you have swizzled any Docs/Blog component that depends on metadata, you'll have to update. If you haven't, no action is needed."}),"\n",(0,l.jsxs)(n.p,{children:["For example, if you've swizzled ",(0,l.jsx)(n.code,{children:"@theme/DocItem"}),". You'll have to update"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-diff",children:"- const {metadata, content: DocContent} = props;\n+ const {content: DocContent} = props;\n+ const {metadata} = DocContent;\n"})}),"\n",(0,l.jsx)(n.h2,{id:"bug-bug-fix",children:"\u{1F41B} Bug Fix"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"docusaurus"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/2086",children:"#2086"})," fix(v2): windows compatibility regression (",(0,l.jsx)(n.a,{href:"https://github.com/endiliey",children:"@endiliey"}),")"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"docusaurus-plugin-ideal-image"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/2074",children:"#2074"})," fix(v2): fix plugin-ideal-image breaking website (exports not defined) (",(0,l.jsx)(n.a,{href:"https://github.com/endiliey",children:"@endiliey"}),")"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"nail_care-polish",children:"\u{1F485} Polish"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"docusaurus-mdx-loader"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/2085",children:"#2085"})," misc(v2): update mdx loader plugin README (",(0,l.jsx)(n.a,{href:"https://github.com/shivangna",children:"@shivangna"}),")"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"house-internal",children:"\u{1F3E0} Internal"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"docusaurus-1.x"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/2087",children:"#2087"})," fix(v1): add key to versions.map in versions.js (",(0,l.jsx)(n.a,{href:"https://github.com/FeynmanDNA",children:"@FeynmanDNA"}),")"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/2083",children:"#2083"})," refactor(v1): fix props for ProjectTitle (",(0,l.jsx)(n.a,{href:"https://github.com/FeynmanDNA",children:"@FeynmanDNA"}),")"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"docusaurus"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/2081",children:"#2081"})," refactor(v2): move scripts/stylesheets injection to server side (",(0,l.jsx)(n.a,{href:"https://github.com/endiliey",children:"@endiliey"}),")"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/2080",children:"#2080"})," refactor(v2): minor code refactoring on component creator (",(0,l.jsx)(n.a,{href:"https://github.com/endiliey",children:"@endiliey"}),")"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"running-performance",children:":running: Performance"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"docusaurus-utils"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/2089",children:"#2089"})," perf(v2): improve dev build time by not overwriting file if possible (",(0,l.jsx)(n.a,{href:"https://github.com/endiliey",children:"@endiliey"}),")"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"docusaurus-theme-search-algolia"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/2079",children:"#2079"})," perf(v2): algolia search result no longer cause full page refresh (",(0,l.jsx)(n.a,{href:"https://github.com/endiliey",children:"@endiliey"}),")"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://github.com/facebook/docusaurus/pull/2076",children:"#2076"})," perf(v2): load algolia JS only when user interacts with search (",(0,l.jsx)(n.a,{href:"https://github.com/endiliey",children:"@endiliey"}),")"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"committers-4",children:"Committers: 4"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Endi (",(0,l.jsx)(n.a,{href:"https://github.com/endiliey",children:"@endiliey"}),")"]}),"\n",(0,l.jsxs)(n.li,{children:["KYY (",(0,l.jsx)(n.a,{href:"https://github.com/FeynmanDNA",children:"@FeynmanDNA"}),")"]}),"\n",(0,l.jsxs)(n.li,{children:["Shivangna Kaistha (",(0,l.jsx)(n.a,{href:"https://github.com/shivangna",children:"@shivangna"}),")"]}),"\n",(0,l.jsxs)(n.li,{children:["kaichu (",(0,l.jsx)(n.a,{href:"https://github.com/qshiwu",children:"@qshiwu"}),")"]}),"\n"]})]})}function d(e={}){let{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},43023:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>r});var s=i(63696);let l={},a=s.createContext(l);function t(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),s.createElement(a.Provider,{value:n},e.children)}},51309:e=>{e.exports=JSON.parse('{"permalink":"/changelog/2.0.0-alpha.38","source":"@site/changelog/source/2.0.0-alpha.38.md","title":"2.0.0-alpha.38","description":"Breaking Change","date":"2019-12-06T20:00:00.000Z","tags":[],"hasTruncateMarker":true,"authors":[{"name":"Endi","alias":"endiliey","url":"https://github.com/endiliey","imageURL":"https://github.com/endiliey.png","key":"endiliey","page":null},{"name":"KYY","alias":"FeynmanDNA","url":"https://github.com/FeynmanDNA","imageURL":"https://github.com/FeynmanDNA.png","key":"FeynmanDNA","page":null},{"name":"kaichu","alias":"qshiwu","url":"https://github.com/qshiwu","imageURL":"https://github.com/qshiwu.png","key":"qshiwu","page":null},{"name":"Shivangna Kaistha","alias":"shivangna","url":"https://github.com/shivangna","imageURL":"https://github.com/shivangna.png","key":"shivangna","page":null}],"frontMatter":{"mdx":{"format":"md"},"date":"2019-12-06T20:00","authors":["endiliey","FeynmanDNA","qshiwu","shivangna"]},"unlisted":false,"prevItem":{"title":"2.0.0-alpha.39","permalink":"/changelog/2.0.0-alpha.39"},"nextItem":{"title":"2.0.0-alpha.37","permalink":"/changelog/2.0.0-alpha.37"},"listPageLink":"/changelog/page/4"}')}}]);