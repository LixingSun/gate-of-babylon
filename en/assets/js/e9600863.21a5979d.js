"use strict";(self.webpackChunkgate_of_babylon=self.webpackChunkgate_of_babylon||[]).push([[5492],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return y}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=m(n),y=r,u=d["".concat(p,".").concat(y)]||d[y]||c[y]||o;return n?a.createElement(u,l(l({ref:t},s),{},{components:n})):a.createElement(u,l({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6322:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return s},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],i={id:"symbol",title:"Symbol",sidebar_position:4},p="Symbol - \u7b26\u53f7",m={unversionedId:"frontend/javascript/data-type/symbol",id:"frontend/javascript/data-type/symbol",title:"Symbol",description:"ES6\u4e2d\u5f15\u5165\u7684\u7c7b\u578b\uff0c\u7528\u4e8e\u5bf9\u8c61\u7684\u975e\u5b57\u7b26\u4e32\u952e\u503c\u3002\u901a\u8fc7\u5168\u5c40Symbol\u51fd\u6570\u521b\u5efa\uff0c\u6bcf\u4e2a\u8fd4\u56de\u503c\u90fd\u662f\u552f\u4e00\u7684\u3002",source:"@site/docs/frontend/javascript/data-type/symbol.mdx",sourceDirName:"frontend/javascript/data-type",slug:"/frontend/javascript/data-type/symbol",permalink:"/gate-of-babylon/en/docs/frontend/javascript/data-type/symbol",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"symbol",title:"Symbol",sidebar_position:4},sidebar:"frontendSidebar",previous:{title:"Number",permalink:"/gate-of-babylon/en/docs/frontend/javascript/data-type/number"},next:{title:"TypeScript",permalink:"/gate-of-babylon/en/docs/frontend/javascript/typescript"}},s=[{value:"\u6ce8\u518c\u3001\u53d6\u5f97\u5168\u5c40symbol",id:"\u6ce8\u518c\u53d6\u5f97\u5168\u5c40symbol",children:[],level:2},{value:"\u5185\u5efa\u5168\u5c40symbols",id:"\u5185\u5efa\u5168\u5c40symbols",children:[],level:2}],c={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"symbol---\u7b26\u53f7"},"Symbol - \u7b26\u53f7"),(0,o.kt)("p",null,"ES6\u4e2d\u5f15\u5165\u7684\u7c7b\u578b\uff0c\u7528\u4e8e",(0,o.kt)("em",{parentName:"p"},"\u5bf9\u8c61\u7684\u975e\u5b57\u7b26\u4e32\u952e\u503c"),"\u3002\u901a\u8fc7\u5168\u5c40",(0,o.kt)("inlineCode",{parentName:"p"},"Symbol"),"\u51fd\u6570\u521b\u5efa\uff0c\u6bcf\u4e2a\u8fd4\u56de\u503c\u90fd\u662f",(0,o.kt)("em",{parentName:"p"},"\u552f\u4e00\u7684"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"  let firstSymbol = Symbol('key');\n  let secondSymbol = Symbol('key');\n  firstSymbol === secondSymbol; // false\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u4e0d\u652f\u6301new")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"  new Symbol('key'); // TypeError\n")))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Symbol\u662f\u4e0d\u53ef\u8fed\u4ee3\u7684")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-js"},"  let o = new Object;\n  o[Symbol('a')] = 'a';\n  o['b'] = 'b';\n\n  for (let i in o) {\n    console.log(i); // 'b'\n  }\n\n  console.log(Object.getOwnPropertySymbols(o)); // '[Symbol('a')]'\n")))),(0,o.kt)("h2",{id:"\u6ce8\u518c\u53d6\u5f97\u5168\u5c40symbol"},"\u6ce8\u518c\u3001\u53d6\u5f97\u5168\u5c40symbol"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Symbol.for(key)"),"\u4f1a\u57fa\u4e8e\u7ed9\u5b9a\u7684 key \u67e5\u627e\u6216\u6ce8\u518c\u5168\u5c40symbol"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Symbol.keyFor(symbol)"),"\u4f1a\u57fa\u4e8e\u7ed9\u5b9a\u7684 symbol \u67e5\u627e\u5168\u5c40symbol key")),(0,o.kt)("h2",{id:"\u5185\u5efa\u5168\u5c40symbols"},(0,o.kt)("a",{parentName:"h2",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol#%E4%BC%97%E6%89%80%E5%91%A8%E7%9F%A5%E7%9A%84_symbols"},"\u5185\u5efa\u5168\u5c40symbols")),(0,o.kt)("p",null,"\u9664\u4e86\u81ea\u5df1\u521b\u5efa\u7684symbols\uff0cJavaScript\u8fd8\u5185\u5efa\u6709\u5f88\u591a\u7528\u4e8e\u5404\u79cd\u8bed\u8a00\u5185\u90e8\u884c\u4e3a\u3002\u53ef\u4ee5\u901a\u8fc7\u66ff\u6362\u7684\u65b9\u5f0f\u4fee\u6539\u9ed8\u8ba4\u884c\u4e3a\uff0c\u4f8b\u5982\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u5bf9\u8c61\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"Symbol.iterator"),"\u6765\u4fee\u6539",(0,o.kt)("inlineCode",{parentName:"p"},"for...of"),"\u7684\u884c\u4e3a:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"  let o = new Object;\n  o[Symbol.iterator] = () => {\n    let value = 0;\n    return {\n      next: () => ({ value: value++, done: value > 3 })\n    }\n  };\n\n  for (let value of o) {\n    console.log(value); // 0,1,2\n  }\n")),(0,o.kt)("p",null,"\u7b80\u5355\u5217\u4e00\u4e9b\u6bd4\u8f83\u6d45\u663e\u7684Symbol:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8fed\u4ee3",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Symbol.iterator"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"for...of")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Symbol.iterator"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"for await of")))),(0,o.kt)("li",{parentName:"ul"},"\u5b57\u7b26\u4e32",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Symbol.match"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"String.prototype.match()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Symbol.search"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"String.prototype.search()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Symbol.replace"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"String.prototype.replace()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Symbol.split"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"String.prototype.split()"))))))}d.isMDXComponent=!0}}]);