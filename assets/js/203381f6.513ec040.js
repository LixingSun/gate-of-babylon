"use strict";(self.webpackChunkgate_of_babylon=self.webpackChunkgate_of_babylon||[]).push([[5417],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),f=o,m=s["".concat(c,".").concat(f)]||s[f]||d[f]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8837:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],i={id:"BEM",title:"BEM",sidebar_position:1},c="BEM",u={unversionedId:"frontend/css/advanced/BEM",id:"frontend/css/advanced/BEM",title:"BEM",description:"BEM \u5168\u79f0\u662f Block Element Modifier\uff0c\u662f\u76ee\u524d\u88ab\u5e7f\u6cdb\u63a8\u8350\u91c7\u7528\u7684CSS\u547d\u540d\u89c4\u5219\u3002\u80fd\u4fc3\u4f7f\u7ec4\u4ef6\u6837\u5f0f\u4ee3\u7801\u88ab\u66f4\u52a0\u6e05\u6670\u6709\u5e8f\u5730\u7ec4\u7ec7\u3002",source:"@site/docs/frontend/css/advanced/BEM.md",sourceDirName:"frontend/css/advanced",slug:"/frontend/css/advanced/BEM",permalink:"/gate-of-babylon/docs/frontend/css/advanced/BEM",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"BEM",title:"BEM",sidebar_position:1},sidebar:"frontendSidebar",previous:{title:"\u6392\u7248",permalink:"/gate-of-babylon/docs/frontend/css/layout"},next:{title:"CSS\u9884\u7f16\u8bd1\u8bed\u8a00",permalink:"/gate-of-babylon/docs/frontend/css/advanced/precompiler"}},p=[{value:"\u7ec4\u6210\u90e8\u5206",id:"\u7ec4\u6210\u90e8\u5206",children:[{value:"Block",id:"block",children:[],level:3},{value:"Element",id:"element",children:[],level:3},{value:"Modifier",id:"modifier",children:[],level:3}],level:2},{value:"\u547d\u540d\u89c4\u5219",id:"\u547d\u540d\u89c4\u5219",children:[],level:2}],d={toc:p};function s(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bem"},"BEM"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://getbem.com/"},"BEM")," \u5168\u79f0\u662f ",(0,a.kt)("em",{parentName:"p"},"Block Element Modifier"),"\uff0c\u662f\u76ee\u524d\u88ab\u5e7f\u6cdb\u63a8\u8350\u91c7\u7528\u7684CSS\u547d\u540d\u89c4\u5219\u3002\u80fd\u4fc3\u4f7f\u7ec4\u4ef6\u6837\u5f0f\u4ee3\u7801\u88ab\u66f4\u52a0\u6e05\u6670\u6709\u5e8f\u5730\u7ec4\u7ec7\u3002"),(0,a.kt)("h2",{id:"\u7ec4\u6210\u90e8\u5206"},"\u7ec4\u6210\u90e8\u5206"),(0,a.kt)("h3",{id:"block"},"Block"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Standalone entity that is meaningful on its own.")),(0,a.kt)("p",null,"\u89c4\u5219\u4e0b\u7684\u6700\u9ad8\u5c42\u7ea7\uff0c\u5f80\u5f80\u6307\u4e00\u4e9b\u72ec\u7acb\u7684\u6574\u4f53\uff0c\u4f8b\u5982\u5bb9\u5668\u3001\u83dc\u5355\u3002"),(0,a.kt)("h3",{id:"element"},"Element"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A part of a block that has no standalone meaning and is semantically tied to its block.")),(0,a.kt)("p",null,"\u6307 Block \u7684\u4e00\u90e8\u5206\uff0c\u4f8b\u5982\u5bb9\u5668\u5185\u7684\u6807\u9898\u3001\u5217\u8868\u9879\u3002"),(0,a.kt)("h3",{id:"modifier"},"Modifier"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A flag on a block or element. Use them to change appearance or behavior.")),(0,a.kt)("p",null,"\u901a\u8fc7\u4e00\u4e2a\u4fee\u9970\u6765\u6307\u5b9a Block \u6216 Element \u7684\u4e00\u79cd\u7279\u5b9a\u72b6\u6001\uff0c "),(0,a.kt)("h2",{id:"\u547d\u540d\u89c4\u5219"},"\u547d\u540d\u89c4\u5219"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"    .block {\n        /* properties */\n    }\n\n    .block__element {\n        /* properties */\n    }\n\n    .block__element--modifer {\n        /* properties */\n    }\n")))}s.isMDXComponent=!0}}]);