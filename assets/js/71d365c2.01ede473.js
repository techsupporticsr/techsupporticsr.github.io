(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[834],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4187:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d},Highlight:function(){return c},default:function(){return p}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:4},l={unversionedId:"user-guide/markdown-features",id:"user-guide/markdown-features",isDocsHomePage:!1,title:"Markdown Syntax and Features Page",description:"Docusaurus supports Markdown and a few additional features.",source:"@site/docs/user-guide/markdown-features.mdx",sourceDirName:"user-guide",slug:"/user-guide/markdown-features",permalink:"/docs/user-guide/markdown-features",editUrl:"https://github.com/Business-Software-Design/Docs/edit/master/website/docs/user-guide/markdown-features.mdx",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Tips and Hints",permalink:"/docs/faq/tips"},next:{title:"Docusaurus User Guide",permalink:"/docs/user-guide/docusaurus-getting-started-manual"}},d=[{value:"Markdown Heading 2",id:"markdown-heading-2",children:[{value:"Markdown Heading 3",id:"markdown-heading-3",children:[]}]},{value:"HyperLinks",id:"hyperlinks",children:[]},{value:"Italics",id:"italics",children:[]},{value:"Bold",id:"bold",children:[]},{value:"Paragraphs",id:"paragraphs",children:[]},{value:"Line Breaks",id:"line-breaks",children:[]},{value:"images",id:"images",children:[]},{value:"code sample",id:"code-sample",children:[]},{value:"alerts - green, yellow red",id:"alerts---green-yellow-red",children:[]},{value:"MDX and React Components",id:"mdx-and-react-components",children:[]},{value:"highlighted text with color and text",id:"highlighted-text-with-color-and-text",children:[]},{value:"Front Matter",id:"front-matter",children:[]},{value:"Links",id:"links",children:[]},{value:"Images",id:"images-1",children:[]},{value:"Code Blocks",id:"code-blocks",children:[]},{value:"Admonitions",id:"admonitions",children:[]}],c=function(e){var t=e.children,n=e.color;return(0,i.kt)("span",{style:{backgroundColor:n,borderRadius:"20px",color:"#fff",padding:"10px",cursor:"pointer"},onClick:function(){alert("You clicked the color "+n+" with label "+t)}},t)},u={toc:d,Highlight:c};function p(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Docusaurus supports ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://daringfireball.net/projects/markdown/syntax"},"Markdown"))," and a few ",(0,i.kt)("strong",{parentName:"p"},"additional features"),"."),(0,i.kt)("p",null,"Headings start with a hash 1 hash for heading 1, 2 for h2 etc."),(0,i.kt)(c,{color:"#ff0000",mdxType:"Highlight"},"ONLY H2 & H3 will add link")," to the RHS nav panel in docusaurus",(0,i.kt)("h1",{id:"markdown-heading-1"},"Markdown Heading 1"),(0,i.kt)("h2",{id:"markdown-heading-2"},"Markdown Heading 2"),(0,i.kt)("h3",{id:"markdown-heading-3"},"Markdown Heading 3"),(0,i.kt)("h4",{id:"markdown-heading-4"},"Markdown Heading 4"),(0,i.kt)("h5",{id:"markdown-heading-5"},"Markdown Heading 5"),(0,i.kt)("h6",{id:"markdown-heading-6"},"Markdown Heading 6"),(0,i.kt)("h2",{id:"hyperlinks"},"HyperLinks"),(0,i.kt)("p",null,"Markdown text with ",(0,i.kt)("a",{parentName:"p",href:"./docusaurus-getting-started-manual"},"internal link")," label in ","[  ]"," square brackets and link in ( ) parentheses"),(0,i.kt)("p",null,"Markdown text with ",(0,i.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/"},"external link"),". to the Markdown syntax site"),(0,i.kt)("p",null,"Here is an external hyperlink to an md doc  ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:3000/docs/user-guide/docusaurus-getting-started-manual"},"do not put the dotmd in link"),"."),(0,i.kt)("h2",{id:"italics"},"Italics"),(0,i.kt)("p",null,"Italicized text is ",(0,i.kt)("em",{parentName:"p"},"inside a single asterixes"),"."),(0,i.kt)("h2",{id:"bold"},"Bold"),(0,i.kt)("p",null,"Bold text is ",(0,i.kt)("strong",{parentName:"p"},"inside double asterixes"),".  "),(0,i.kt)("h2",{id:"paragraphs"},"Paragraphs"),(0,i.kt)("p",null,"are simply 'entered down' in code file"),(0,i.kt)("p",null,"Like this, dont put an indent."),(0,i.kt)("h2",{id:"line-breaks"},"Line Breaks"),(0,i.kt)("p",null,"Line Breaks have two spaces after the first (previous) line."),(0,i.kt)("h2",{id:"images"},"images"),(0,i.kt)("p",null,"images have an ! folowed by alt text in square brackets  ","[ ]"," and image link inside parentheses ( ) .",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"Docusaurus logo",src:n(1812).Z})),(0,i.kt)("h2",{id:"code-sample"},"code sample"),(0,i.kt)("p",null,"to add a sample code window, use triple `\nfollowed by jsx title= then link in quoatation marks ENTER"),(0,i.kt)("p",null,"then enter code, end it with triple ` again"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/components/HelloDocusaurus.js"',title:'"src/components/HelloDocusaurus.js"'},"function HelloDocusaurus() {\n    return (\n        <h1>Hello, Docusaurus!</h1>\n    )\n}\n")),(0,i.kt)("h2",{id:"alerts---green-yellow-red"},"alerts - green, yellow red"),(0,i.kt)("p",null,"Use Triple colon : followed by tip, danger or caution then Heading words then Enter"),(0,i.kt)("p",null,"for label text"),(0,i.kt)("p",null,"end it with triple colon :"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"My tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Use this awesome feature option"))),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Take care")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This action is dangerous"))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is a warning"))),(0,i.kt)("h2",{id:"mdx-and-react-components"},"MDX and React Components"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://mdxjs.com/"},"MDX")," can make your documentation more ",(0,i.kt)("strong",{parentName:"p"},"interactive")," and allows using any ",(0,i.kt)("strong",{parentName:"p"},"React components inside Markdown"),":"),(0,i.kt)("h2",{id:"highlighted-text-with-color-and-text"},"highlighted text with color and text"),(0,i.kt)("p",null,"create custom css and onclick functions for spans like the highlights below"),(0,i.kt)("p",null,"This is ",(0,i.kt)(c,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," !"),(0,i.kt)("p",null,"This is ",(0,i.kt)(c,{color:"#1877F2",mdxType:"Highlight"},"Facebook blue")," !"),(0,i.kt)("h2",{id:"front-matter"},"Front Matter"),(0,i.kt)("p",null,"Markdown documents have metadata at the top called ",(0,i.kt)("a",{parentName:"p",href:"https://jekyllrb.com/docs/front-matter/"},"Front Matter"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="my-doc.md"',title:'"my-doc.md"'},"// highlight-start\n---\nid: my-doc-id\ntitle: My document title\ndescription: My document description\nslug: /my-custom-url\n---\n// highlight-end\n\n## Markdown heading\n\nMarkdown text with [links](./docusaurus-getting-started-manual.md)\n")),(0,i.kt)("h2",{id:"links"},"Links"),(0,i.kt)("p",null,"Regular Markdown links are supported, using url paths or relative file paths."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},"Let's see how to [Create a page](/docusaurus-getting-started-manual).\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},"Let's see how to [Create a page](./docusaurus-getting-started-manual.md).\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," Let's see how to ",(0,i.kt)("a",{parentName:"p",href:"/docs/user-guide/docusaurus-getting-started-manual"},"Create a page"),"."),(0,i.kt)("h2",{id:"images-1"},"Images"),(0,i.kt)("p",null,"Regular Markdown images are supported."),(0,i.kt)("p",null,"Add an image at ",(0,i.kt)("inlineCode",{parentName:"p"},"static/img/logo.png")," and display it in Markdown:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-md"},"![Docusaurus logo](/img/logo.png)\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Docusaurus logo",src:n(1812).Z})),(0,i.kt)("h2",{id:"code-blocks"},"Code Blocks"),(0,i.kt)("p",null,"Markdown code blocks are supported with Syntax highlighting."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'```jsx title="src/components/HelloDocusaurus.js"\nfunction HelloDocusaurus() {\n    return (\n        <h1>Hello, Docusaurus!</h1>\n    )\n}\n```\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/components/HelloDocusaurus.js"',title:'"src/components/HelloDocusaurus.js"'},"function HelloDocusaurus() {\n  return <h1>Hello, Docusaurus!</h1>;\n}\n")),(0,i.kt)("h2",{id:"admonitions"},"Admonitions"),(0,i.kt)("p",null,"Docusaurus has a special syntax to create admonitions and callouts:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},":::tip My tip\n\nUse this awesome feature option\n\n:::\n\n:::danger Take care\n\nThis action is dangerous\n\n:::\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"My tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Use this awesome feature option"))),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Take care")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This action is dangerous"))))}p.isMDXComponent=!0},1812:function(e,t,n){"use strict";t.Z=n.p+"assets/images/logo-d550d3df36cfc8ff0b6d34ff41d22e52.png"}}]);