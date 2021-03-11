(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{105:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return l}));var r=a(3),i=a(7),n=(a(0),a(124)),c={id:"cameradevice.cameradeviceformat",title:"Interface: CameraDeviceFormat",sidebar_label:"CameraDeviceFormat",custom_edit_url:null,hide_title:!0},o={unversionedId:"api/interfaces/cameradevice.cameradeviceformat",id:"api/interfaces/cameradevice.cameradeviceformat",isDocsHomePage:!1,title:"Interface: CameraDeviceFormat",description:"Interface: CameraDeviceFormat",source:"@site/docs/api/interfaces/cameradevice.cameradeviceformat.md",slug:"/api/interfaces/cameradevice.cameradeviceformat",permalink:"/react-native-vision-camera/docs/api/interfaces/cameradevice.cameradeviceformat",editUrl:null,version:"current",sidebar_label:"CameraDeviceFormat",sidebar:"someSidebar",previous:{title:"Interface: CameraDevice",permalink:"/react-native-vision-camera/docs/api/interfaces/cameradevice.cameradevice-1"},next:{title:"Interface: FrameRateRange",permalink:"/react-native-vision-camera/docs/api/interfaces/cameradevice.frameraterange"}},b=[{value:"Properties",id:"properties",children:[{value:"autoFocusSystem",id:"autofocussystem",children:[]},{value:"colorSpaces",id:"colorspaces",children:[]},{value:"fieldOfView",id:"fieldofview",children:[]},{value:"frameRateRanges",id:"framerateranges",children:[]},{value:"isHighestPhotoQualitySupported",id:"ishighestphotoqualitysupported",children:[]},{value:"maxISO",id:"maxiso",children:[]},{value:"maxZoom",id:"maxzoom",children:[]},{value:"minISO",id:"miniso",children:[]},{value:"photoHeight",id:"photoheight",children:[]},{value:"photoWidth",id:"photowidth",children:[]},{value:"supportsPhotoHDR",id:"supportsphotohdr",children:[]},{value:"supportsVideoHDR",id:"supportsvideohdr",children:[]},{value:"videoHeight",id:"videoheight",children:[]},{value:"videoStabilizationModes",id:"videostabilizationmodes",children:[]},{value:"videoWidth",id:"videowidth",children:[]}]}],p={toc:b};function l(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"interface-cameradeviceformat"},"Interface: CameraDeviceFormat"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/cameradevice"},"CameraDevice"),".CameraDeviceFormat"),Object(n.b)("p",null,"A Camera Device's video format. Do not create instances of this type yourself, only use ",Object(n.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/classes/camera.camera-1#getavailablecameradevices"},Object(n.b)("inlineCode",{parentName:"a"},"Camera.getAvailableCameraDevices()")),"."),Object(n.b)("h2",{id:"properties"},"Properties"),Object(n.b)("h3",{id:"autofocussystem"},"autoFocusSystem"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"autoFocusSystem"),": ",Object(n.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/cameradevice#autofocussystem"},Object(n.b)("em",{parentName:"a"},"AutoFocusSystem"))),Object(n.b)("p",null,"Specifies this format's auto focus system."),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/8689923/src/CameraDevice.ts#L149"},"CameraDevice.ts:149")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"colorspaces"},"colorSpaces"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"colorSpaces"),": ",Object(n.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/cameradevice#colorspace"},Object(n.b)("em",{parentName:"a"},"ColorSpace")),"[]"),Object(n.b)("p",null,"The available color spaces."),Object(n.b)("p",null,"Note: On Android, this will always be only ",Object(n.b)("inlineCode",{parentName:"p"},'["yuv"]')),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/8689923/src/CameraDevice.ts#L133"},"CameraDevice.ts:133")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"fieldofview"},"fieldOfView"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"fieldOfView"),": ",Object(n.b)("em",{parentName:"p"},"number")),Object(n.b)("p",null,"The video field of view in degrees"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/8689923/src/CameraDevice.ts#L123"},"CameraDevice.ts:123")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"framerateranges"},"frameRateRanges"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"frameRateRanges"),": ",Object(n.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/interfaces/cameradevice.frameraterange"},Object(n.b)("em",{parentName:"a"},"FrameRateRange")),"[]"),Object(n.b)("p",null,"All available frame rate ranges. You can query this to find the highest frame rate available"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/8689923/src/CameraDevice.ts#L145"},"CameraDevice.ts:145")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"ishighestphotoqualitysupported"},"isHighestPhotoQualitySupported"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(n.b)("strong",{parentName:"p"},"isHighestPhotoQualitySupported"),": ",Object(n.b)("em",{parentName:"p"},"boolean")),Object(n.b)("p",null,"A boolean value specifying whether this format supports the highest possible photo quality that can be delivered on the current platform."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("inlineCode",{parentName:"strong"},"platform"))," iOS 13.0+"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/8689923/src/CameraDevice.ts#L111"},"CameraDevice.ts:111")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"maxiso"},"maxISO"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"maxISO"),": ",Object(n.b)("em",{parentName:"p"},"number")),Object(n.b)("p",null,"Maximum supported ISO value"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/8689923/src/CameraDevice.ts#L115"},"CameraDevice.ts:115")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"maxzoom"},"maxZoom"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"maxZoom"),": ",Object(n.b)("em",{parentName:"p"},"number")),Object(n.b)("p",null,"The maximum zoom factor"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/8689923/src/CameraDevice.ts#L127"},"CameraDevice.ts:127")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"miniso"},"minISO"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"minISO"),": ",Object(n.b)("em",{parentName:"p"},"number")),Object(n.b)("p",null,"Minimum supported ISO value"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/8689923/src/CameraDevice.ts#L119"},"CameraDevice.ts:119")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"photoheight"},"photoHeight"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"photoHeight"),": ",Object(n.b)("em",{parentName:"p"},"number")),Object(n.b)("p",null,"The height of the highest resolution a still image (photo) can be produced in"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/8689923/src/CameraDevice.ts#L89"},"CameraDevice.ts:89")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"photowidth"},"photoWidth"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"photoWidth"),": ",Object(n.b)("em",{parentName:"p"},"number")),Object(n.b)("p",null,"The width of the highest resolution a still image (photo) can be produced in"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/8689923/src/CameraDevice.ts#L93"},"CameraDevice.ts:93")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"supportsphotohdr"},"supportsPhotoHDR"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"supportsPhotoHDR"),": ",Object(n.b)("em",{parentName:"p"},"boolean")),Object(n.b)("p",null,"Specifies whether this format supports HDR mode for photo capture"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/8689923/src/CameraDevice.ts#L141"},"CameraDevice.ts:141")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"supportsvideohdr"},"supportsVideoHDR"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"supportsVideoHDR"),": ",Object(n.b)("em",{parentName:"p"},"boolean")),Object(n.b)("p",null,"Specifies whether this format supports HDR mode for video capture"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/8689923/src/CameraDevice.ts#L137"},"CameraDevice.ts:137")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"videoheight"},"videoHeight"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(n.b)("strong",{parentName:"p"},"videoHeight"),": ",Object(n.b)("em",{parentName:"p"},"number")),Object(n.b)("p",null,"The video resolutions's height"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("inlineCode",{parentName:"strong"},"platform"))," iOS 13.0"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/8689923/src/CameraDevice.ts#L99"},"CameraDevice.ts:99")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"videostabilizationmodes"},"videoStabilizationModes"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"videoStabilizationModes"),": ",Object(n.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/cameradevice#videostabilizationmode"},Object(n.b)("em",{parentName:"a"},"VideoStabilizationMode")),"[]"),Object(n.b)("p",null,"All supported video stabilization modes"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/8689923/src/CameraDevice.ts#L153"},"CameraDevice.ts:153")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"videowidth"},"videoWidth"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(n.b)("strong",{parentName:"p"},"videoWidth"),": ",Object(n.b)("em",{parentName:"p"},"number")),Object(n.b)("p",null,"The video resolution's width"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("inlineCode",{parentName:"strong"},"platform"))," iOS 13.0"),Object(n.b)("p",null,"Defined in: ",Object(n.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/8689923/src/CameraDevice.ts#L105"},"CameraDevice.ts:105")))}l.isMDXComponent=!0},124:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return d}));var r=a(0),i=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=i.a.createContext({}),l=function(e){var t=i.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=l(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),m=l(a),u=r,d=m["".concat(c,".").concat(u)]||m[u]||s[u]||n;return a?i.a.createElement(d,o(o({ref:t},p),{},{components:a})):i.a.createElement(d,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,c=new Array(n);c[0]=u;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<n;p++)c[p]=a[p];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);