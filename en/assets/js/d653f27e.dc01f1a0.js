"use strict";(self.webpackChunkgate_of_babylon=self.webpackChunkgate_of_babylon||[]).push([[6054],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=p(n),m=a,y=f["".concat(c,".").concat(m)]||f[m]||u[m]||i;return n?r.createElement(y,o(o({ref:t},s),{},{components:n})):r.createElement(y,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3451:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return f}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"typescript",title:"TypeScript"},c="TypeScript",p={unversionedId:"frontend/javascript/typescript",id:"frontend/javascript/typescript",title:"TypeScript",description:"\u7b80\u5355\u6765\u8bf4TypeScript\u5c31\u662f\u6dfb\u52a0\u4e86\u201c\u7c7b\u578b\u201d\u7684JavaScript\u3002TS\u5df2\u7ecf\u9010\u6e10\u6f14\u53d8\u6210\u4e86\u76ee\u524d\u524d\u7aef\u5f00\u53d1\u7684\u5fc5\u4fee\u8bfe\u3002\u4e2a\u4eba\u89c9\u5f97\u8fd9\u5f97\u76ca\u4e8e\u5176\u4e24\u5927\u597d\u5904:",source:"@site/docs/frontend/javascript/typescript.md",sourceDirName:"frontend/javascript",slug:"/frontend/javascript/typescript",permalink:"/gate-of-babylon/en/docs/frontend/javascript/typescript",tags:[],version:"current",frontMatter:{id:"typescript",title:"TypeScript"},sidebar:"frontendSidebar",previous:{title:"Symbol",permalink:"/gate-of-babylon/en/docs/frontend/javascript/data-type/symbol"},next:{title:"\u6d4f\u89c8\u5668\u5de5\u4f5c\u539f\u7406",permalink:"/gate-of-babylon/en/docs/frontend/browser/principle"}},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[{value:"\u57fa\u672c",id:"\u57fa\u672c",children:[],level:3},{value:"\u8fdb\u9636",id:"\u8fdb\u9636",children:[],level:3},{value:"\u7279\u6b8a",id:"\u7279\u6b8a",children:[],level:3}],level:2}],u={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"typescript"},"TypeScript"),(0,i.kt)("p",null,"\u7b80\u5355\u6765\u8bf4TypeScript\u5c31\u662f\u6dfb\u52a0\u4e86\u201c\u7c7b\u578b\u201d\u7684JavaScript\u3002TS\u5df2\u7ecf\u9010\u6e10\u6f14\u53d8\u6210\u4e86\u76ee\u524d\u524d\u7aef\u5f00\u53d1\u7684\u5fc5\u4fee\u8bfe\u3002\u4e2a\u4eba\u89c9\u5f97\u8fd9\u5f97\u76ca\u4e8e\u5176\u4e24\u5927\u597d\u5904:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u7c7b\u578b\u9650\u5236")," - \u867d\u7136\u8fd9\u662f\u4e00\u4e2a\u6bd4\u8f83\u6709\u4e89\u8bae\u7684\u8bdd\u9898\uff0c\u6bd5\u7adf\u548cJavaScript\u6240\u8bbe\u8ba1\u7684\u52a8\u6001\u7c7b\u578b\u76f8\u8fdd\u80cc\uff0c\u4f46\u901a\u8fc7\u5728\u9879\u76ee\u4e2d\u7684\u5b9e\u8df5\uff0cTS\u5728\u5927\u90e8\u5206\u65f6\u5019\u901a\u8fc7\u7c7b\u578b\u529f\u80fd\u6240\u5e26\u6765\u7684\u597d\u5904\u662f\u5f88\u663e\u8457\u7684\uff0c\u4f8b\u5982\u5bf9\u5bf9\u8c61\u7684\u63a5\u53e3\u5b9a\u4e49\u3001\u5bf9\u51fd\u6570\u4f20\u53c2\u7684\u58f0\u660e\u7b49\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u63d0\u793a\u62a5\u9519")," - \u5728\u57fa\u7840\u7c7b\u578b\u548c\u66f4\u9ad8\u7ea7\u7684\u50cfinterface\u3001type\u7684\u7c7b\u578b\u5b9a\u4e49\u4e4b\u4e0b\uff0c\u5bf9\u5c5e\u6027\u3001\u65b9\u6cd5\u63d0\u793a\u80fd\u8ba9\u5f00\u53d1\u6548\u7387\u5927\u5927\u63d0\u5347\uff0c\u540c\u65f6\u4e5f\u4f7f\u5f97\u5728\u8fd0\u884c\u524d\u5c31\u80fd\u63d0\u65e9\u53d1\u73b0\u65e0\u8bba\u662ftypo\u6216\u8005\u65e0\u6548\u8c03\u7528\u8fd9\u6837\u7684\u9519\u8bef\u3002\u8fd9\u4e9b\u662f\u5373\u4f7f\u901a\u8fc7IDE\u914d\u7f6e\u4e5f\u4e0d\u4e00\u5b9a\u80fd\u8986\u76d6\u5b8c\u5168\u7684\u529f\u80fd\u3002")),(0,i.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,i.kt)("h3",{id:"\u57fa\u672c"},"\u57fa\u672c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// \u660e\u786e\u7684\u8d4b\u503c\u53ef\u4ee5\u7701\u7565": string"\u8fd9\u7c7b\u7684\u58f0\u660e\u4ea4\u7531ts\u5224\u65ad\nlet name = "Tony";  // string\nlet age = 27;       // number\nlet isMale = true;  // boolean\n\n')),(0,i.kt)("h3",{id:"\u8fdb\u9636"},"\u8fdb\u9636"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=\u6570\u7ec4",title:"\u6570\u7ec4"},"let books: string[];\n// \u660e\u786e\u7684\u6210\u5458\u7c7b\u578b\u540c\u6837\u53ef\u4ee5\u7701\u7565\u58f0\u660e\nlet animals = ['cat', 'dog'];\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=\u51fd\u6570",title:"\u51fd\u6570"},"// \u660e\u786e\u7684\u8fd4\u56de\u503c\u7c7b\u578b\u540c\u6837\u53ef\u4ee5\u7701\u7565\nfunction isMyName (name: string) {\n   return name === 'My Name';\n}\n\n// \u533f\u540d\u51fd\u6570\u540c\u6837\u53ef\u4ee5\u6839\u636e\u8bed\u5883\u7701\u7565\u5165\u53c2\u7684\u7c7b\u578b\nconst animals = animals = ['cat', 'dog'];\nanimals.forEach((animal) => {\n    // \u6839\u636eanimals\u7684\u7c7b\u578b\uff0canimal\u6b64\u65f6\u5df2\u7ecf\u88ab\u8bc6\u522b\u4e3astring\u7c7b\u578b\n    console.log(animal.toUpperCase());\n})\n")),(0,i.kt)("h3",{id:"\u7279\u6b8a"},"\u7279\u6b8a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// \u7279\u6b8a\nlet something: any;\n\n")))}f.isMDXComponent=!0}}]);