(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[57],{9361:function(e,t){"use strict";t.Z=function(e,t,i){t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i;return e}},2286:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/masters-thesis",function(){return i(883)}])},8045:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(9361).Z,o=i(4941).Z,a=i(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,i=e.sizes,s=e.unoptimized,c=void 0!==s&&s,h=e.priority,p=void 0!==h&&h,w=e.loading,A=e.lazyRoot,k=void 0===A?null:A,E=e.lazyBoundary,I=e.className,L=e.quality,R=e.width,N=e.height,O=e.style,q=e.objectFit,C=e.objectPosition,P=e.onLoadingComplete,H=e.placeholder,B=void 0===H?"empty":H,M=e.blurDataURL,W=l(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),D=d.useContext(m.ImageConfigContext),Z=d.useMemo((function(){var e=y||D||f.imageConfigDefault,t=a(e.deviceSizes).concat(a(e.imageSizes)).sort((function(e,t){return e-t})),i=e.deviceSizes.sort((function(e,t){return e-t}));return r({},e,{allSizes:t,deviceSizes:i})}),[D]),T=W,G=i?"responsive":"intrinsic";"layout"in T&&(T.layout&&(G=T.layout),delete T.layout);var U=S;if("loader"in T){if(T.loader){var V=T.loader;U=function(e){e.config;var t=l(e,["config"]);return V(t)}}delete T.loader}var F="";if(function(e){return"object"===typeof e&&(z(e)||function(e){return void 0!==e.src}(e))}(t)){var J=z(t)?t.default:t;if(!J.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(J)));if(M=M||J.blurDataURL,F=J.src,(!G||"fill"!==G)&&(N=N||J.height,R=R||J.width,!J.height||!J.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(J)))}var Q=!p&&("lazy"===w||"undefined"===typeof w);((t="string"===typeof t?t:F).startsWith("data:")||t.startsWith("blob:"))&&(c=!0,Q=!1);v.has(t)&&(Q=!1);Z.unoptimized&&(c=!0);var X,K=o(d.useState(!1),2),Y=K[0],$=K[1],ee=o(g.useIntersection({rootRef:k,rootMargin:E||"200px",disabled:!Q}),3),te=ee[0],ie=ee[1],ne=ee[2],oe=!Q||ie,ae={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},re={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},se=!1,ce={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:q,objectPosition:C},le=_(R),de=_(N),ue=_(L);0;var fe=Object.assign({},O,ce),ge="blur"!==B||Y?{}:{backgroundSize:q||"cover",backgroundPosition:C||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(M,'")')};if("fill"===G)ae.display="block",ae.position="absolute",ae.top=0,ae.left=0,ae.bottom=0,ae.right=0;else if("undefined"!==typeof le&&"undefined"!==typeof de){var me=de/le,he=isNaN(me)?"100%":"".concat(100*me,"%");"responsive"===G?(ae.display="block",ae.position="relative",se=!0,re.paddingTop=he):"intrinsic"===G?(ae.display="inline-block",ae.position="relative",ae.maxWidth="100%",se=!0,re.maxWidth="100%",X="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(le,"%27%20height=%27").concat(de,"%27/%3e")):"fixed"===G&&(ae.display="inline-block",ae.position="relative",ae.width=le,ae.height=de)}else 0;var pe={src:b,srcSet:void 0,sizes:void 0};oe&&(pe=x({config:Z,src:t,unoptimized:c,layout:G,width:le,quality:ue,sizes:i,loader:U}));var ye=t;0;var ve;0;var be=(n(ve={},"imagesrcset",pe.srcSet),n(ve,"imagesizes",pe.sizes),n(ve,"crossOrigin",T.crossOrigin),ve),we=d.default.useLayoutEffect,ze=d.useRef(P),xe=d.useRef(t);d.useEffect((function(){ze.current=P}),[P]),we((function(){xe.current!==t&&(ne(),xe.current=t)}),[ne,t]);var _e=r({isLazy:Q,imgAttributes:pe,heightInt:de,widthInt:le,qualityInt:ue,layout:G,className:I,imgStyle:fe,blurStyle:ge,loading:w,config:Z,unoptimized:c,placeholder:B,loader:U,srcString:ye,onLoadingCompleteRef:ze,setBlurComplete:$,setIntersection:te,isVisible:oe,noscriptSizes:i},T);return d.default.createElement(d.default.Fragment,null,d.default.createElement("span",{style:ae},se?d.default.createElement("span",{style:re},X?d.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:X}):null):null,d.default.createElement(j,Object.assign({},_e))),p?d.default.createElement(u.default,null,d.default.createElement("link",Object.assign({key:"__nimg-"+pe.src+pe.srcSet+pe.sizes,rel:"preload",as:"image",href:pe.srcSet?void 0:pe.src},be))):null)};var r=i(6495).Z,s=i(2648).Z,c=i(1598).Z,l=i(7273).Z,d=c(i(7294)),u=s(i(5443)),f=i(9309),g=i(7190),m=i(9977),h=(i(3794),i(2392));function p(e){return"/"===e[0]?e.slice(1):e}var y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0},v=new Set,b=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var w=new Map([["default",function(e){var t=e.config,i=e.src,n=e.width,o=e.quality;return i.endsWith(".svg")&&!t.dangerouslyAllowSVG?i:"".concat(h.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(o||75)}],["imgix",function(e){var t=e.config,i=e.src,n=e.width,o=e.quality,a=new URL("".concat(t.path).concat(p(i))),r=a.searchParams;return r.set("auto",r.getAll("auto").join(",")||"format"),r.set("fit",r.get("fit")||"max"),r.set("w",r.get("w")||n.toString()),o&&r.set("q",o.toString()),a.href}],["cloudinary",function(e){var t=e.config,i=e.src,n=["f_auto","c_limit","w_"+e.width,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(t.path).concat(n).concat(p(i))}],["akamai",function(e){var t=e.config,i=e.src,n=e.width;return"".concat(t.path).concat(p(i),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function z(e){return void 0!==e.default}function x(e){var t=e.config,i=e.src,n=e.unoptimized,o=e.layout,r=e.width,s=e.quality,c=e.sizes,l=e.loader;if(n)return{src:i,srcSet:void 0,sizes:void 0};var d=function(e,t,i,n){var o=e.deviceSizes,r=e.allSizes;if(n&&("fill"===i||"responsive"===i)){for(var s,c=/(^|\s)(1?\d?\d)vw/g,l=[];s=c.exec(n);s)l.push(parseInt(s[2]));if(l.length){var d,u=.01*(d=Math).min.apply(d,a(l));return{widths:r.filter((function(e){return e>=o[0]*u})),kind:"w"}}return{widths:r,kind:"w"}}return"number"!==typeof t||"fill"===i||"responsive"===i?{widths:o,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return r.find((function(t){return t>=e}))||r[r.length-1]})))),kind:"x"}}(t,r,o,c),u=d.widths,f=d.kind,g=u.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:u.map((function(e,n){return"".concat(l({config:t,src:i,quality:s,width:e})," ").concat("w"===f?e:n+1).concat(f)})).join(", "),src:l({config:t,src:i,quality:s,width:u[g]})}}function _(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function S(e){var t,i=(null==(t=e.config)?void 0:t.loader)||"default",n=w.get(i);if(n)return n(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(i))}function A(e,t,i,n,o,a){e&&e.src!==b&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(v.add(t),"blur"===n&&a(!0),null==o?void 0:o.current)){var i=e.naturalWidth,r=e.naturalHeight;o.current({naturalWidth:i,naturalHeight:r})}})))}var j=function(e){var t=e.imgAttributes,i=(e.heightInt,e.widthInt),n=e.qualityInt,o=e.layout,a=e.className,s=e.imgStyle,c=e.blurStyle,u=e.isLazy,f=e.placeholder,g=e.loading,m=e.srcString,h=e.config,p=e.unoptimized,y=e.loader,v=e.onLoadingCompleteRef,b=e.setBlurComplete,w=e.setIntersection,z=e.onLoad,_=e.onError,S=(e.isVisible,e.noscriptSizes),j=l(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return g=u?"lazy":g,d.default.createElement(d.default.Fragment,null,d.default.createElement("img",Object.assign({},j,t,{decoding:"async","data-nimg":o,className:a,style:r({},s,c),ref:d.useCallback((function(e){w(e),(null==e?void 0:e.complete)&&A(e,m,0,f,v,b)}),[w,m,o,f,v,b]),onLoad:function(e){A(e.currentTarget,m,0,f,v,b),z&&z(e)},onError:function(e){"blur"===f&&b(!0),_&&_(e)}})),(u||"blur"===f)&&d.default.createElement("noscript",null,d.default.createElement("img",Object.assign({},j,x({config:h,src:m,unoptimized:p,layout:o,width:i,quality:n,sizes:S,loader:y}),{decoding:"async","data-nimg":o,style:s,className:a,loading:g}))))};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},883:function(e,t,i){"use strict";i.r(t);var n=i(5893),o=i(9008),a=i.n(o),r=i(5675),s=i.n(r),c=i(214),l=i.n(c);t.default=function(){return(0,n.jsxs)("div",{className:l().container,children:[(0,n.jsxs)(a(),{children:[(0,n.jsx)("title",{children:"\u0141ukasz Blachnicki | Projects"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)("main",{className:l().main,children:(0,n.jsxs)("section",{children:[(0,n.jsx)("h2",{children:"Master's thesis - Tools and practices to improve developer efficiency"}),(0,n.jsx)(s(),{src:"/gifs/AtAthens6321underconstruction_lemmings.gif",width:"600",height:"32",unoptimized:!0}),(0,n.jsx)(s(),{src:"/gifs/HeHeartlandGrove2575lineconstruction.gif",width:"573",height:"18",unoptimized:!0})]})})]})}},214:function(e){e.exports={title:"Home_title__T09hD",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},9008:function(e,t,i){e.exports=i(5443)},5675:function(e,t,i){e.exports=i(8045)}},function(e){e.O(0,[774,888,179],(function(){return t=2286,e(e.s=t);var t}));var t=e.O();_N_E=t}]);