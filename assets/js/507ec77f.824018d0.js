(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5309],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1645:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],s={sidebar_position:2},l={unversionedId:"manuals/getting-started/create-a-document",id:"manuals/getting-started/create-a-document",isDocsHomePage:!1,title:"Create a Document",description:"Documents are groups of pages connected through:",source:"@site/docs/manuals/getting-started/create-a-document.md",sourceDirName:"manuals/getting-started",slug:"/manuals/getting-started/create-a-document",permalink:"/docs/manuals/getting-started/create-a-document",editUrl:"https://github.com/Business-Software-Design/Docs/edit/master/website/docs/manuals/getting-started/create-a-document.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create a Page",permalink:"/docs/manuals/getting-started/create-a-page"},next:{title:"Create a Blog Post",permalink:"/docs/manuals/getting-started/create-a-blog-post"}},c=[{value:"Create your first Doc",id:"create-your-first-doc",children:[]},{value:"Configure the Sidebar",id:"configure-the-sidebar",children:[]}],u={toc:c};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Documents are ",(0,o.kt)("strong",{parentName:"p"},"groups of pages")," connected through:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("strong",{parentName:"li"},"sidebar")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"previous/next navigation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"versioning"))),(0,o.kt)("h2",{id:"create-your-first-doc"},"Create your first Doc"),(0,o.kt)("p",null,"Create a markdown file at ",(0,o.kt)("inlineCode",{parentName:"p"},"docs/hello.md"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="docs/hello.md"',title:'"docs/hello.md"'},"# Hello\n\nThis is my **first Docusaurus document**!\n")),(0,o.kt)("p",null,"A new document is now available at ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/docs/hello"),"."),(0,o.kt)("h2",{id:"configure-the-sidebar"},"Configure the Sidebar"),(0,o.kt)("p",null,"Docusaurus automatically ",(0,o.kt)("strong",{parentName:"p"},"creates a sidebar")," from the ",(0,o.kt)("inlineCode",{parentName:"p"},"docs")," folder."),(0,o.kt)("p",null,"Add metadatas to customize the sidebar label and position:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="docs/hello.md"',title:'"docs/hello.md"'},'+ ---\n+ sidebar_label: "Hi!"\n+ sidebar_position: 3\n+ ---\n\n\n# Hello\n\nThis is my **first Docusaurus document**!\n')),(0,o.kt)("p",null,"It is also possible to create your sidebar explicitly in ",(0,o.kt)("inlineCode",{parentName:"p"},"sidebars.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="sidebars.js"',title:'"sidebars.js"'},"module.exports = {\n  tutorialSidebar: [\n    {\n      type: 'category',\n      label: 'Tutorial',\n-     items: [...],\n+     items: ['hello'],\n    },\n  ],\n};\n")))}p.isMDXComponent=!0}}]);