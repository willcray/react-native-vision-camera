(self.webpackChunkvision_camera=self.webpackChunkvision_camera||[]).push([[1909],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return l},kt:function(){return m}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(t),m=i,p=f["".concat(c,".").concat(m)]||f[m]||d[m]||o;return t?n.createElement(p,a(a({ref:r},l),{},{components:t})):n.createElement(p,a({ref:r},l))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3919:function(e,r,t){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}t.d(r,{b:function(){return n},Z:function(){return i}})},4996:function(e,r,t){"use strict";t.d(r,{C:function(){return o},Z:function(){return a}});var n=t(2263),i=t(3919);function o(){var e=(0,n.default)().siteConfig,r=(e=void 0===e?{}:e).baseUrl,t=void 0===r?"/":r,o=e.url;return{withBaseUrl:function(e,r){return function(e,r,t,n){var o=void 0===n?{}:n,a=o.forcePrependBaseUrl,s=void 0!==a&&a,c=o.absolute,u=void 0!==c&&c;if(!t)return t;if(t.startsWith("#"))return t;if((0,i.b)(t))return t;if(s)return r+t;var l=t.startsWith(r)?t:r+t.replace(/^\//,"");return u?e+l:l}(o,t,e,r)}}}function a(e,r){return void 0===r&&(r={}),(0,o().withBaseUrl)(e,r)}},8215:function(e,r,t){"use strict";var n=t(7294);r.Z=function(e){var r=e.children,t=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:i},r)}},1395:function(e,r,t){"use strict";t.d(r,{Z:function(){return l}});var n=t(7294),i=t(944),o=t(6010),a="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,u=39;var l=function(e){var r=e.lazy,t=e.block,l=e.defaultValue,d=e.values,f=e.groupId,m=e.className,p=(0,i.Z)(),v=p.tabGroupChoices,g=p.setTabGroupChoices,b=(0,n.useState)(l),h=b[0],y=b[1],P=n.Children.toArray(e.children),O=[];if(null!=f){var w=v[f];null!=w&&w!==h&&d.some((function(e){return e.value===w}))&&y(w)}var C=function(e){var r=e.currentTarget,t=O.indexOf(r),n=d[t].value;y(n),null!=f&&(g(f,n),setTimeout((function(){var e,t,n,i,o,a,c,u;(e=r.getBoundingClientRect(),t=e.top,n=e.left,i=e.bottom,o=e.right,a=window,c=a.innerHeight,u=a.innerWidth,t>=0&&o<=u&&i<=c&&n>=0)||(r.scrollIntoView({block:"center",behavior:"smooth"}),r.classList.add(s),setTimeout((function(){return r.classList.remove(s)}),2e3))}),150))},k=function(e){var r,t;switch(e.keyCode){case u:var n=O.indexOf(e.target)+1;t=O[n]||O[0];break;case c:var i=O.indexOf(e.target)-1;t=O[i]||O[O.length-1]}null==(r=t)||r.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},m)},d.map((function(e){var r=e.value,t=e.label;return n.createElement("li",{role:"tab",tabIndex:h===r?0:-1,"aria-selected":h===r,className:(0,o.Z)("tabs__item",a,{"tabs__item--active":h===r}),key:r,ref:function(e){return O.push(e)},onKeyDown:k,onFocus:C,onClick:C},t)}))),r?(0,n.cloneElement)(P.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},P.map((function(e,r){return(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==h})}))))}},9443:function(e,r,t){"use strict";var n=(0,t(7294).createContext)(void 0);r.Z=n},944:function(e,r,t){"use strict";var n=t(7294),i=t(9443);r.Z=function(){var e=(0,n.useContext)(i.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},323:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return c},default:function(){return l}});var n=t(2122),i=t(9756),o=(t(7294),t(3905)),a=(t(4996),t(1395),t(8215),{id:"frame-processors-plugins-android",title:"Creating Frame Processor Plugins for Android",sidebar_label:"Creating Frame Processor Plugins (Android)"}),s={unversionedId:"guides/frame-processors-plugins-android",id:"guides/frame-processors-plugins-android",isDocsHomePage:!1,title:"Creating Frame Processor Plugins for Android",description:"Frame Processors are not yet available for Android.",source:"@site/docs/guides/FRAME_PROCESSOR_CREATE_PLUGIN_ANDROID.mdx",sourceDirName:"guides",slug:"/guides/frame-processors-plugins-android",permalink:"/react-native-vision-camera/docs/guides/frame-processors-plugins-android",editUrl:"https://github.com/cuvent/react-native-vision-camera/edit/main/docs/docs/guides/FRAME_PROCESSOR_CREATE_PLUGIN_ANDROID.mdx",version:"current",sidebar_label:"Creating Frame Processor Plugins (Android)",frontMatter:{id:"frame-processors-plugins-android",title:"Creating Frame Processor Plugins for Android",sidebar_label:"Creating Frame Processor Plugins (Android)"},sidebar:"visionSidebar",previous:{title:"Creating Frame Processor Plugins for iOS",permalink:"/react-native-vision-camera/docs/guides/frame-processors-plugins-ios"},next:{title:"Finish creating your Frame Processor Plugin",permalink:"/react-native-vision-camera/docs/guides/frame-processors-plugins-final"}},c=[],u={toc:c};function l(e){var r=e.components,t=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Frame Processors are not yet available for Android."))),(0,o.kt)("br",null),(0,o.kt)("h4",{id:"-next-section-finish-creating-your-frame-processor-plugin-or-add-ios-support-to-your-frame-processor-plugin"},"\ud83d\ude80 Next section: ",(0,o.kt)("a",{parentName:"h4",href:"frame-processors-plugins-final"},"Finish creating your Frame Processor Plugin")," (or ",(0,o.kt)("a",{parentName:"h4",href:"frame-processors-plugins-ios"},"add iOS support to your Frame Processor Plugin"),")"))}l.isMDXComponent=!0},6010:function(e,r,t){"use strict";function n(e){var r,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=n(e[r]))&&(i&&(i+=" "),i+=t);else for(r in e)e[r]&&(i&&(i+=" "),i+=r);return i}function i(){for(var e,r,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(r=n(e))&&(i&&(i+=" "),i+=r);return i}t.d(r,{Z:function(){return i}})}}]);