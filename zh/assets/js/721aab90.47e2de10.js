(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[6798],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return d}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,k=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return t?i.createElement(k,l(l({ref:n},u),{},{components:t})):i.createElement(k,l({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=t[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},36808:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p},default:function(){return u}});var i=t(22122),r=t(19756),a=(t(67294),t(3905)),l={title:"\u81ea\u5b9a\u4e49\u73af\u5883\u521d\u59cb\u5316"},o={unversionedId:"platform-engineers/initializer/basic-initializer",id:"version-v1.1/platform-engineers/initializer/basic-initializer",isDocsHomePage:!1,title:"\u81ea\u5b9a\u4e49\u73af\u5883\u521d\u59cb\u5316",description:"\u672c\u7ae0\u8282\u4ecb\u7ecd\u73af\u5883\u7684\u6982\u5ff5\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528\u73af\u5883\u521d\u59cb\u5316\uff08Initializer\uff09\u521d\u59cb\u5316\u4e00\u4e2a\u73af\u5883\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1/platform-engineers/initializer/basic-initializer.md",sourceDirName:"platform-engineers/initializer",slug:"/platform-engineers/initializer/basic-initializer",permalink:"/zh/docs/platform-engineers/initializer/basic-initializer",editUrl:"https://github.com/oam-dev/kubevela/edit/master/docs/zh/platform-engineers/initializer/basic-initializer.md",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1629468747,formattedLastUpdatedAt:"2021/8/20",frontMatter:{title:"\u81ea\u5b9a\u4e49\u73af\u5883\u521d\u59cb\u5316"},sidebar:"version-v1.1/docs",previous:{title:"\u7ba1\u7406 X-Definition",permalink:"/zh/docs/platform-engineers/cue/definition-edit"},next:{title:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5165\u95e8",permalink:"/zh/docs/platform-engineers/components/custom-component"}},p=[{value:"\u4ec0\u4e48\u662f\u73af\u5883\uff1f",id:"\u4ec0\u4e48\u662f\u73af\u5883\uff1f",children:[]},{value:"\u73af\u5883\u521d\u59cb\u5316\uff08Initializer\uff09",id:"\u73af\u5883\u521d\u59cb\u5316\uff08initializer\uff09",children:[{value:"\u73af\u5883\u521d\u59cb\u5316\u4f9d\u8d56",id:"\u73af\u5883\u521d\u59cb\u5316\u4f9d\u8d56",children:[]}]},{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",children:[{value:"\u5229\u7528 Helm \u7ec4\u4ef6\u521d\u59cb\u5316\u73af\u5883",id:"\u5229\u7528-helm-\u7ec4\u4ef6\u521d\u59cb\u5316\u73af\u5883",children:[]},{value:"\u5728 Initializer \u4e2d\u76f4\u63a5\u586b\u5199 Kubernetes \u539f\u751f\u8d44\u6e90",id:"\u5728-initializer-\u4e2d\u76f4\u63a5\u586b\u5199-kubernetes-\u539f\u751f\u8d44\u6e90",children:[]},{value:"\u4f7f\u7528\u90e8\u7f72\u5de5\u4f5c\u6d41\u6765\u6d41\u7a0b\u5316\u521d\u59cb\u5316\u73af\u5883",id:"\u4f7f\u7528\u90e8\u7f72\u5de5\u4f5c\u6d41\u6765\u6d41\u7a0b\u5316\u521d\u59cb\u5316\u73af\u5883",children:[]}]}],s={toc:p};function u(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u7ae0\u8282\u4ecb\u7ecd\u73af\u5883\u7684\u6982\u5ff5\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528\u73af\u5883\u521d\u59cb\u5316\uff08Initializer\uff09\u521d\u59cb\u5316\u4e00\u4e2a\u73af\u5883\u3002"),(0,a.kt)("h2",{id:"\u4ec0\u4e48\u662f\u73af\u5883\uff1f"},"\u4ec0\u4e48\u662f\u73af\u5883\uff1f"),(0,a.kt)("p",null,"\u4e00\u4e2a\u5e94\u7528\u5f00\u53d1\u56e2\u961f\u901a\u5e38\u9700\u8981\u521d\u59cb\u5316\u4e00\u4e9b\u5171\u4eab\u73af\u5883\u4f9b\u7528\u6237\u90e8\u7f72\u4ed6\u4eec\u7684\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\uff08Application\uff09\u3002\u73af\u5883\u662f\u4e00\u4e2a\u903b\u8f91\u6982\u5ff5\uff0c\u4ed6\u8868\u793a\u4e00\u7ec4\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u4f9d\u8d56\u7684\u516c\u5171\u8d44\u6e90\u3002\n\u4f8b\u5982\uff0c\u4e00\u4e2a\u56e2\u961f\u60f3\u8981\u521d\u59cb\u53162\u4e2a\u73af\u5883\uff1a \u4e00\u4e2a\u5f00\u53d1\u73af\u5883\u7528\u4e8e\u5f00\u53d1\u548c\u6d4b\u8bd5\uff0c\u4e00\u4e2a\u751f\u4ea7\u73af\u5883\u7528\u4e8e\u5b9e\u9645\u5e94\u7528\u90e8\u7f72\u5e76\u63d0\u4f9b\u5bf9\u5916\u670d\u52a1\u3002\n\u7ba1\u7406\u5458\u53ef\u4ee5\u9488\u5bf9\u73af\u5883\u6240\u4ee3\u8868\u7684\u5b9e\u9645\u542b\u4e49\u914d\u7f6e\u76f8\u5173\u7684\u521d\u59cb\u5316\u65b9\u5f0f\uff0c\u521b\u5efa\u4e0d\u540c\u7684\u8d44\u6e90\u3002"),(0,a.kt)("p",null,"\u73af\u5883\u521d\u59cb\u5316\u80cc\u540e\u4e5f\u662f\u7528 OAM \u6a21\u578b\u7684\u65b9\u5f0f\u6765\u6267\u884c\u7684\uff0c\u6240\u4ee5\u73af\u5883\u521d\u59cb\u5316\u63a7\u5236\u5668\u7684\u529f\u80fd\u975e\u5e38\u7075\u6d3b\uff0c\u51e0\u4e4e\u53ef\u4ee5\u6ee1\u8db3\u4efb\u4f55\u521d\u59cb\u5316\u7684\u9700\u6c42\uff0c\u540c\u65f6\u4e5f\u662f\u53ef\u63d2\u62d4\u7684\u3002\u901a\u5e38\u800c\u8a00\uff0c\u53ef\u4ee5\u521d\u59cb\u5316\u7684\u8d44\u6e90\u7c7b\u578b\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u4e0b\u5217\u7c7b\u578b\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4e00\u4e2a\u6216\u591a\u4e2a Kubernetes \u96c6\u7fa4\uff0c\u4e0d\u540c\u7684\u73af\u5883\u53ef\u80fd\u9700\u8981\u4e0d\u540c\u89c4\u6a21\u548c\u4e0d\u540c\u7248\u672c\u7684 Kubernetes \u96c6\u7fa4\u3002\u540c\u65f6\u73af\u5883\u521d\u59cb\u5316\u8fd8\u53ef\u4ee5\u5c06\u591a\u4e2a Kubernetes \u96c6\u7fa4\u6ce8\u518c\u5230\u4e00\u4e2a\u4e2d\u592e\u96c6\u7fa4\u8fdb\u884c\u7edf\u4e00\u7684\u591a\u96c6\u7fa4\u7ba1\u63a7\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4efb\u610f\u7c7b\u578b\u7684 Kubernetes \u81ea\u5b9a\u4e49\u8d44\u6e90\uff08CRD\uff09\u548c\u7cfb\u7edf\u63d2\u4ef6\uff0c\u4e00\u4e2a\u73af\u5883\u4f1a\u62e5\u6709\u5f88\u591a\u79cd\u4e0d\u540c\u7684\u81ea\u5b9a\u4e49\u8d44\u6e90\u6765\u63d0\u4f9b\u7cfb\u7edf\u80fd\u529b\uff0c\u6bd4\u5982\u4e0d\u540c\u7684\u5de5\u4f5c\u8d1f\u8f7d\u3001\u4e0d\u540c\u7684\u8fd0\u7ef4\u7ba1\u7406\u529f\u80fd\u7b49\u7b49\u3002\u521d\u59cb\u5316\u73af\u5883\u53ef\u4ee5\u5305\u542b\u73af\u5883\u6240\u4f9d\u8d56\u7684\u4e00\u7cfb\u5217\u529f\u80fd\u7684\u521d\u59cb\u5316\u5b89\u88c5\uff0c\u6bd4\u5982\u5404\u7c7b\u4e2d\u95f4\u4ef6\u5de5\u4f5c\u8d1f\u8f7d\u3001\u6d41\u91cf\u7ba1\u7406\u3001\u65e5\u5fd7\u76d1\u63a7\u7b49\u5404\u7c7b\u8fd0\u7ef4\u7cfb\u7edf\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5404\u7c7b\u5171\u4eab\u8d44\u6e90\u548c\u670d\u52a1\uff0c\u4e00\u4e2a\u5fae\u670d\u52a1\u5728\u4e0d\u540c\u73af\u5883\u4e2d\u6d4b\u8bd5\u9a8c\u8bc1\u65f6\uff0c\u9664\u4e86\u81ea\u8eab\u6240\u5f00\u53d1\u7684\u7ec4\u4ef6\u4ee5\u5916\uff0c\u5f80\u5f80\u8fd8\u4f1a\u5305\u542b\u4e00\u7cfb\u5217\u5176\u4ed6\u56e2\u961f\u7ef4\u62a4\u7684\u7ec4\u4ef6\u548c\u4e00\u4e9b\u516c\u5171\u8d44\u6e90\u3002\u73af\u5883\u521d\u59cb\u5316\u529f\u80fd\u53ef\u4ee5\u5c06\u5176\u4ed6\u7ec4\u4ef6\u548c\u516c\u5171\u8d44\u6e90\u7edf\u4e00\u90e8\u7f72\uff0c\u5728\u65e0\u9700\u4f7f\u7528\u65f6\u9500\u6bc1\u3002\u8fd9\u4e9b\u5171\u4eab\u8d44\u6e90\u53ef\u4ee5\u662f\u4e00\u4e2a\u5fae\u670d\u52a1\u7ec4\u4ef6\u3001\u4e91\u6570\u636e\u5e93\u3001\u7f13\u5b58\u3001\u8d1f\u8f7d\u5747\u8861\u3001API\u7f51\u5173\u7b49\u7b49\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5404\u7c7b\u7ba1\u7406\u7b56\u7565\u548c\u6d41\u7a0b\uff0c\u4e00\u4e2a\u73af\u5883\u53ef\u80fd\u4f1a\u914d\u5907\u4e0d\u540c\u7684\u5168\u5c40\u7b56\u7565\u548c\u6d41\u7a0b\uff0c\u4e3e\u4f8b\u6765\u8bf4\uff0c\u73af\u5883\u7b56\u7565\u53ef\u80fd\u4f1a\u5305\u62ec\u6df7\u6c8c\u6d4b\u8bd5\u3001\u5b89\u5168\u626b\u63cf\u3001\u9519\u8bef\u914d\u7f6e\u68c0\u6d4b\u3001SLO\u6307\u6807\u7b49\u7b49\uff1b\u800c\u6d41\u7a0b\u5219\u53ef\u4ee5\u662f\u521d\u59cb\u5316\u4e00\u4e2a\u6570\u636e\u5e93\u8868\u3001\u6ce8\u518c\u4e00\u4e2a\u81ea\u52a8\u53d1\u73b0\u914d\u7f6e\u7b49\u3002"))),(0,a.kt)("h2",{id:"\u73af\u5883\u521d\u59cb\u5316\uff08initializer\uff09"},"\u73af\u5883\u521d\u59cb\u5316\uff08Initializer\uff09"),(0,a.kt)("p",null,'KubeVela \u63d0\u4f9b\u4e86\u73af\u5883\u521d\u59cb\u5316\uff08Initializer\uff09\u5141\u8bb8\u4f60\u81ea\u5b9a\u4e49\u7ec4\u5408\u4e0d\u540c\u7684\u8d44\u6e90\u6765\u521d\u59cb\u5316\u73af\u5883\u3002\u73af\u5883\u521d\u59cb\u5316\u5229\u7528\u4e86\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u7684\u80fd\u529b\u6765\u521b\u5efa\u4e00\u4e2a\u73af\u5883\u6240\u9700\u7684\u8d44\u6e90\uff0c\n\u4f60\u751a\u81f3\u53ef\u4ee5\u5229\u7528\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u4e2d\u7684 \u201c\u5e94\u7528\u7684\u6267\u884c\u7b56\u7565\uff08Policy\uff09" \u548c \u201c\u90e8\u7f72\u5de5\u4f5c\u6d41\uff08Workflow\uff09\u201d \u6765\u6d41\u7a0b\u5316\u3001\u914d\u7f6e\u5316\u5730\u521b\u5efa\u73af\u5883\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u591a\u4e2a\u73af\u5883\u521d\u59cb\u5316\n\u4e4b\u95f4\u53ef\u80fd\u4f1a\u5b58\u5728\u4f9d\u8d56\u5173\u7cfb\uff0c\u4e00\u4e2a\u73af\u5883\u521d\u59cb\u5316\u4f1a\u4f9d\u8d56\u5176\u4ed6\u73af\u5883\u521d\u59cb\u5316\u63d0\u4f9b\u7684\u80fd\u529b\u3002'),(0,a.kt)("p",null,"\u4e00\u4e2a\u73af\u5883\u521d\u59cb\u5316\u7684\u6574\u4f53\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Initializer\nmetadata:\n  name: <Initializer \u540d\u79f0>\nspec:\n  # \u6211\u4eec\u5229\u7528 Application \u6765\u90e8\u7f72\u4e00\u4e2a\u73af\u5883\u9700\u8981\u7684\u8d44\u6e90\n  appTemplate:\n    spec:\n      components:\n      - name: <\u73af\u5883\u7ec4\u4ef6\u540d\u79f0>\n        type: <\u73af\u5883\u7ec4\u4ef6\u7c7b\u578b>\n        properties:\n          <\u73af\u5883\u7ec4\u4ef6\u53c2\u6570>\n      policies:\n      - name: <\u5e94\u7528\u7b56\u7565\u540d\u79f0>\n        type: <\u5e94\u7528\u7b56\u7565\u7c7b\u578b>\n        properties:\n          <\u5e94\u7528\u7b56\u7565\u53c2\u6570>\n      workflow:\n        - name: <\u5de5\u4f5c\u6d41\u8282\u70b9\u540d\u79f0>\n          type: <\u5de5\u4f5c\u6d41\u8282\u70b9\u7c7b\u578b>\n  # dependsOn \u8868\u793a\u4f9d\u8d56\u7684 Initializer\n  dependsOn:\n  - ref:\n      apiVersion: core.oam.dev/v1beta1\n      kind: Initializer\n      name: <\u4f9d\u8d56\u7684 Initializer \u7684\u540d\u79f0>\n      namespace: <\u4f9d\u8d56\u7684 Initializer \u6240\u5728\u7684\u547d\u540d\u7a7a\u95f4>\n")),(0,a.kt)("p",null,"\u73af\u5883\u521d\u59cb\u5316\u5b9a\u4e49\u7684\u6838\u5fc3\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},".spec")," \u4e0b\u9762\u7684\u4e24\u90e8\u5206\uff0c\u4e00\u90e8\u5206\u662f\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u7684\u6a21\u677f\uff0c\u53e6\u4e00\u90e8\u5206\u662f\u73af\u5883\u521d\u59cb\u5316\u7684\u4f9d\u8d56\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u6a21\u677f\uff08\u5bf9\u5e94",(0,a.kt)("inlineCode",{parentName:"li"},".spec.appTemplate"),"\u5b57\u6bb5\uff09\uff0c\u73af\u5883\u521d\u59cb\u5316\u5229\u7528\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u6765\u521b\u5efa\u73af\u5883\u9700\u8981\u7684\u8d44\u6e90\uff0c \u4f60\u53ef\u4ee5\u6309\u7167\u7f16\u5199\u4e00\u4e2a\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u7684\u6a21\u5f0f\u586b\u5199\u8be5\u5b57\u6bb5\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u73af\u5883\u521d\u59cb\u5316\u4f9d\u8d56\uff08\u5bf9\u5e94",(0,a.kt)("inlineCode",{parentName:"li"},".spec.dependsOn"),"\u5b57\u6bb5\uff09\uff0c\u4e00\u4e2a\u73af\u5883\u521d\u59cb\u5316 A \u53ef\u80fd\u4f1a\u4f9d\u8d56\u5176\u4ed6\u73af\u5883\u521d\u59cb\u5316\u7684\u80fd\u529b\uff0c\u53ea\u6709\u5f53\u4f9d\u8d56\u7684\u73af\u5883\u521d\u59cb\u5316\u6b63\u5e38\u8fd0\u884c\u5728\u73af\u5883\u4e2d\uff0c\u624d\u4f1a\u521b\u5efa\u73af\u5883\u521d\u59cb\u5316 A \u5305\u542b\u7684\u8d44\u6e90\u3002")),(0,a.kt)("h3",{id:"\u73af\u5883\u521d\u59cb\u5316\u4f9d\u8d56"},"\u73af\u5883\u521d\u59cb\u5316\u4f9d\u8d56"),(0,a.kt)("p",null,"\u4e0d\u540c\u73af\u5883\u521d\u59cb\u5316\u5b58\u5728\u4f9d\u8d56\u5173\u7cfb\uff0c\u53ef\u4ee5\u5c06\u4e0d\u540c\u73af\u5883\u521d\u59cb\u5316\u7684\u516c\u5171\u8d44\u6e90\u5206\u79bb\u51fa\u4e00\u4e2a\u5355\u72ec\u7684\u73af\u5883\u521d\u59cb\u5316\u4f5c\u4e3a\u4f9d\u8d56\uff0c\u8fd9\u6837\u53ef\u4ee5\u5f62\u6210\u53ef\u4ee5\u88ab\u590d\u7528\u7684\u521d\u59cb\u5316\u6a21\u5757\u3002\n\u4f8b\u5982\uff0c\u6d4b\u8bd5\u73af\u5883\u548c\u5f00\u53d1\u73af\u5883\u90fd\u4f9d\u8d56\u4e86\u4e00\u4e9b\u76f8\u540c\u7684\u63a7\u5236\u5668\uff0c\u53ef\u4ee5\u5c06\u8fd9\u4e9b\u63a7\u5236\u5668\u63d0\u53d6\u51fa\u6765\u4f5c\u4e3a\u5355\u72ec\u7684\u73af\u5883\u521d\u59cb\u5316\uff0c\u5728\u5f00\u53d1\u73af\u5883\u548c\u6d4b\u8bd5\u73af\u5883\u4e2d\u90fd\u6307\u5b9a\u4f9d\u8d56\u8be5\u73af\u5883\u521d\u59cb\u5316\u3002"),(0,a.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"),(0,a.kt)("h3",{id:"\u5229\u7528-helm-\u7ec4\u4ef6\u521d\u59cb\u5316\u73af\u5883"},"\u5229\u7528 Helm \u7ec4\u4ef6\u521d\u59cb\u5316\u73af\u5883"),(0,a.kt)("p",null,"\u5728\u4f7f\u7528 Helm \u7ec4\u4ef6\u4e4b\u524d\uff0c\u4f60\u9700\u8981\u5f00\u542f ",(0,a.kt)("inlineCode",{parentName:"p"},"fluxcd")," \u8fd9\u4e2a",(0,a.kt)("a",{parentName:"p",href:"../../end-user/addons/introduction"},"\u7cfb\u7edf\u63d2\u4ef6"),"\u3002\u5f00\u542f ",(0,a.kt)("inlineCode",{parentName:"p"},"fluxcd")," \u7cfb\u7edf\u63d2\u4ef6\u540e\uff0c\u4f1a\u81ea\u52a8\u5e2e\u4f60\u5b89\u88c5 helm \u7ec4\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"vela addon enable fluxcd\n")),(0,a.kt)("p",null,"\u6211\u4eec\u4ee5\u73af\u5883\u521d\u59cb\u5316 kruise \u4e3a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'cat <<EOF | kubectl apply -f -\napiVersion: core.oam.dev/v1beta1\nkind: Initializer\nmetadata:\n  name: kruise\n  namespace: vela-system\nspec:\n  appTemplate:\n    spec:\n      components:\n      - name: kruise\n        type: helm\n        properties:\n          branch: master\n          chart: ./charts/kruise/v0.9.0\n          version: "*"\n          repoType: git\n          repoUrl: https://github.com/openkruise/kruise\n  dependsOn:\n  - ref:\n      apiVersion: core.oam.dev/v1beta1\n      kind: Initializer\n      name: fluxcd\n      namespace: vela-system\nEOF\n')),(0,a.kt)("p",null,"\u73af\u5883\u521d\u59cb\u5316 kruise \u80fd\u5e2e\u4f60\u5728\u96c6\u7fa4\u4e2d\u90e8\u7f72\u4e00\u4e2a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise"},"kruise")," \u7684\u63a7\u5236\u5668\uff0c\u7ed9\u96c6\u7fa4\u63d0\u4f9b kruise \u7684\u5404\u79cd\u80fd\u529b\u3002\n",(0,a.kt)("inlineCode",{parentName:"p"},"dependsOn")," \u5b57\u6bb5\u8868\u793a\u73af\u5883\u521d\u59cb\u5316 kruise \u4f9d\u8d56\u73af\u5883\u521d\u59cb\u5316 fluxcd \u63d0\u4f9b\u7684\u80fd\u529b\u3002 \u5176\u4e2d\uff0c\u73af\u5883\u521d\u59cb\u5316 fluxcd \u662f KubeVela \u5185\u7f6e\u7684\u73af\u5883\u521d\u59cb\u5316,\n\u5f53\u96c6\u7fa4\u4e2d\u6ca1\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"fluxcd")," \u8fd9\u4e2a\u73af\u5883\u521d\u59cb\u5316\u65f6\uff0cKubeVela \u4f1a\u81ea\u52a8\u5e2e\u4f60\u5b89\u88c5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get initializers.core.oam.dev -n vela-system\nNAMESPACE     NAME             PHASE     AGE\nvela-system   fluxcd           success   33s\nvela-system   kruise           success   33s\n")),(0,a.kt)("p",null,"\u73af\u5883\u521d\u59cb\u5316\u7684 PHASE \u5b57\u6bb5\u4e3a success \u8868\u793a\u6210\u529f\u521d\u59cb\u5316\u4e86\u73af\u5883\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230 kruise \u7684\u63a7\u5236\u5668\u4e5f\u6210\u529f\u8fd0\u884c\u5728\u96c6\u7fa4\u3002\u672a\u6765\u73af\u5883\u521d\u59cb\u5316\u4f1a\u652f\u6301\u7528\u6237\u81ea\u5b9a\u4e49\u5224\u65ad\n\u521d\u59cb\u5316\u73af\u5883\u662f\u5426\u6210\u529f\u7684\u80fd\u529b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get pod -n kruise-system\nNAME                                         READY   STATUS    RESTARTS   AGE\nkruise-controller-manager-7f77ddc667-htp2f   1/1     Running   0          28m\nkruise-controller-manager-7f77ddc667-kzws8   1/1     Running   0          28m\nkruise-daemon-5jrq6                          1/1     Running   0          28m\n")),(0,a.kt)("p",null,"\u73af\u5883\u521d\u59cb\u5316 fluxcd \u4f1a\u4e3a\u73af\u5883\u5b89\u88c5 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fluxcd/flux2"},"fluxcd")," \u4e2d\u7684\u63a7\u5236\u5668\u548c\u81ea\u5b9a\u4e49\u8d44\u6e90\uff0c\u540c\u65f6\u4e5f\u4f1a\u5b89\u88c5\u591a\u4e2a\u4f9d\u8d56 fluxcd \u80fd\u529b\u7684\u7ec4\u4ef6\u5b9a\u4e49\uff08ComponentDefinition\uff09\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get componentdefinitions.core.oam.dev -n vela-system\nNAMESPACE     NAME         WORKLOAD-KIND   DESCRIPTION\nvela-system   helm                         helm release is a group of K8s resources from either git repository or helm repo\nvela-system   kustomize                    kustomize can fetching, building, updating and applying Kustomize manifests from git repo.\n")),(0,a.kt)("p",null,"\u5f53\u4f60\u60f3\u8981\u521b\u5efa\u4e00\u4e2a\u4ee5 Helm Chart \u65b9\u5f0f\u6253\u5305\u7684\u63a7\u5236\u5668\u65f6\uff0c\u53ef\u4ee5\u76f4\u63a5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},".spec.appTemplate")," \u4e2d\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"helm")," \u7ec4\u4ef6\u5b9a\u4e49\uff0c\n\u73af\u5883\u521d\u59cb\u5316 kruise \u5c31\u662f\u5229\u7528\u4e86\u7ec4\u4ef6\u5b9a\u4e49 ",(0,a.kt)("inlineCode",{parentName:"p"},"helm")," \u6765\u521b\u5efa ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openkruise/kruise"},"kruise")," \u7684\u63a7\u5236\u5668\u548c\u81ea\u5b9a\u4e49\u8d44\u6e90\u3002"),(0,a.kt)("h3",{id:"\u5728-initializer-\u4e2d\u76f4\u63a5\u586b\u5199-kubernetes-\u539f\u751f\u8d44\u6e90"},"\u5728 Initializer \u4e2d\u76f4\u63a5\u586b\u5199 Kubernetes \u539f\u751f\u8d44\u6e90"),(0,a.kt)("p",null,"KubeVela \u4e3a\u4f60\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5185\u7f6e\u7684\u7ec4\u4ef6\u5b9a\u4e49 ",(0,a.kt)("inlineCode",{parentName:"p"},"raw"),"\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u5728\u7ec4\u4ef6\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"properties")," \u5b57\u6bb5\u4e2d\u586b\u5199\u521b\u5efa\u5230\u73af\u5883\u4e2d\u7684\u539f\u751f Kubernetes \u8d44\u6e90\u3002\n\u8fd9\u79cd\u5728 Initializer \u4e2d\u76f4\u63a5\u586b\u5199 Kubernetes \u539f\u751f\u8d44\u6e90\u7684\u65b9\u5f0f\uff0c\u53ef\u4ee5\u907f\u514d\u7f16\u5199\u591a\u4f59\u7684\u7ec4\u4ef6\u5b9a\u4e49\uff08ComponentDefinition\uff09\u3002"),(0,a.kt)("p",null,"\u4ee5\u5185\u7f6e\u7684\u73af\u5883\u521d\u59cb\u5316 fluxcd \u4e3a\u4f8b\uff0c\u4f60\u53ef\u4ee5\u628a\u4efb\u610f\u7684 Kubernetes \u539f\u751f\u8d44\u6e90\u586b\u5199\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"properties")," \u5b57\u6bb5\u4e2d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: core.oam.dev/v1beta1\nkind: Initializer\nmetadata:\n  annotations:\n    addons.oam.dev/description: Flux is a set of continuous and progressive delivery\n      solutions for Kubernetes\n  name: fluxcd\n  namespace: vela-system\nspec:\n  appTemplate:\n    spec:\n      components:\n      - name: alerts.notification.toolkit.fluxcd.io\n        type: raw\n        properties:\n          apiVersion: apiextensions.k8s.io/v1\n          kind: CustomResourceDefinition\n          metadata:\n            annotations:\n              controller-gen.kubebuilder.io/version: v0.5.0\n            labels:\n              app.kubernetes.io/instance: flux-system\n            name: alerts.notification.toolkit.fluxcd.io\n          spec:\n            group: notification.toolkit.fluxcd.io\n            names:\n              kind: Alert\n              listKind: AlertList\n              plural: alerts\n              singular: alert\n            scope: Namespaced\n          ....\n")),(0,a.kt)("h3",{id:"\u4f7f\u7528\u90e8\u7f72\u5de5\u4f5c\u6d41\u6765\u6d41\u7a0b\u5316\u521d\u59cb\u5316\u73af\u5883"},"\u4f7f\u7528\u90e8\u7f72\u5de5\u4f5c\u6d41\u6765\u6d41\u7a0b\u5316\u521d\u59cb\u5316\u73af\u5883"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u5229\u7528\u5e94\u7528\u90e8\u7f72\u8ba1\u5212\u4e2d\u7684\u90e8\u7f72\u5de5\u4f5c\u6d41\uff08Workflow\uff09\u6765\u6d41\u7a0b\u5316\u521d\u59cb\u5316\u73af\u5883\u3002\u6211\u4eec\u4ee5\u5b9e\u8df5\u6848\u4f8b ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"../../case-studies/workflow-with-ocm"},"\u591a\u96c6\u7fa4\u90e8\u7f72")),"\n\u4e2d\u7684\u73af\u5883\u521d\u59cb\u5316 ",(0,a.kt)("a",{parentName:"p",href:"../../case-studies/workflow-with-ocm#%E5%88%9D%E5%A7%8B%E5%8C%96%E5%A4%9A%E9%9B%86%E7%BE%A4%E8%B0%83%E5%BA%A6%E5%8A%9F%E8%83%BD"},"managed-cluster")," \u4e3a\u4f8b\uff1a"),(0,a.kt)("p",null,"\u73af\u5883\u521d\u59cb\u5316 managed-cluster \u4f1a\u4e3a\u73af\u5883\u521b\u5efa\u4e00\u4e2a ACK \u96c6\u7fa4\uff0c\u5e76\u5229\u7528 OCM \u5c06\u65b0\u521b\u5efa\u7684\u96c6\u7fa4\u6ce8\u518c\u5230\u7ba1\u63a7\u96c6\u7fa4\u4e0a\u3002\n\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"AppTemplate")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"workflow")," \u5b57\u6bb5\u4e2d\u63cf\u8ff0\u4e86\u73af\u5883\u521d\u59cb\u5316\u7684\u6d41\u7a0b:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5229\u7528 terraform \u63a7\u5236\u5668\u7684\u80fd\u529b\u521b\u5efa\u4e00\u4e2a ACK \u96c6\u7fa4\uff0c\u7b49\u5f85 ACK \u521b\u5efa\u6210\u529f\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5c06\u65b0\u521b\u5efa\u7684 ACK \u96c6\u7fa4\u6ce8\u518c\u5230\u7ba1\u63a7\u96c6\u7fa4\u3002")))}u.isMDXComponent=!0}}]);