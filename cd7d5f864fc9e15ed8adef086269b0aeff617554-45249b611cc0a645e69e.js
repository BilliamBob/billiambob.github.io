"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[84],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,i=/([\p{Alpha}\p{N}_]|$)/u,n=/[_.\- ]+/,s=new RegExp("^"+n.source),l=new RegExp(n.source+i.source,"gu"),o=new RegExp("\\d+"+i.source,"gu"),c=(e,i)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(i={pascalCase:!1,preserveConsecutiveUppercase:!1,...i},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const n=!1===i.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(i.locale),c=!1===i.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(i.locale);if(1===e.length)return i.pascalCase?c(e):n(e);return e!==n(e)&&(e=((e,r,i)=>{let n=!1,s=!1,l=!1;for(let o=0;o<e.length;o++){const c=e[o];n&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),n=!1,l=s,s=!0,o++):s&&l&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),l=s,s=!1,n=!0):(n=r(c)===c&&i(c)!==c,l=s,s=i(c)===c&&r(c)!==c)}return e})(e,n,c)),e=e.replace(s,""),e=i.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,n):n(e),i.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,o.lastIndex=0,e.replace(l,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return k},P:function(){return E},S:function(){return D},_:function(){return l},a:function(){return s},b:function(){return d},g:function(){return u},h:function(){return o}});var r=a(7294),i=(a(3204),a(5697)),n=a.n(i);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)t.indexOf(a=n[r])>=0||(i[a]=e[a]);return i}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let i="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,i){return void 0===i&&(i={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},i,{opacity:t?1:0})})}function u(e,t,a,r,i,n,l,o){const c={};n&&(c.backgroundColor=n,"fixed"===a?(c.width=r,c.height=i,c.backgroundColor=n,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),o&&(c.objectPosition=o);const d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const p=["children"],m=function(e){let{layout:t,width:a,height:i}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+i+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=l(e,p);return r.createElement(r.Fragment,null,r.createElement(m,s({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:a,loading:i,alt:n="",shouldLoad:o}=e,c=l(e,f);return r.createElement("img",s({},c,{decoding:"async",loading:i,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:n}))},y=function(e){let{fallback:t,sources:a=[],shouldLoad:i=!0}=e,n=l(e,h);const o=n.sizes||(null==t?void 0:t.sizes),c=r.createElement(b,s({},n,t,{sizes:o,shouldLoad:i}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:n}=e;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:i?a:void 0,"data-srcset":i?void 0:a,sizes:o})})),c):c};var w;b.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},y.displayName="Picture",y.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};const v=["fallback"],E=function(e){let{fallback:t}=e,a=l(e,v);return t?r.createElement(y,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};E.displayName="Placeholder",E.propTypes={fallback:i.string,sources:null==(w=y.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const k=function(e){return r.createElement(r.Fragment,null,r.createElement(y,s({},e)),r.createElement("noscript",null,r.createElement(y,s({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=y.propTypes;const L=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],S=["style","className"],C=e=>e.replace(/\n/g,""),x=function(e,t,a){for(var r=arguments.length,i=new Array(r>3?r-3:0),s=3;s<r;s++)i[s-3]=arguments[s];return e.alt||""===e.alt?n().string.apply(n(),[e,t,a].concat(i)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},N={image:n().object.isRequired,alt:x},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],I=["style","className"],_=new Set;let O,j;const q=function(e){let{as:t="div",image:i,style:n,backgroundColor:d,className:u,class:p,onStartLoad:m,onLoad:g,onError:f}=e,h=l(e,T);const{width:b,height:y,layout:w}=i,v=c(b,y,w),{style:E,className:k}=v,L=l(v,I),S=(0,r.useRef)(),C=(0,r.useMemo)((()=>JSON.stringify(i.images)),[i.images]);p&&(u=p);const x=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(w,b,y);return(0,r.useEffect)((()=>{O||(O=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return j=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=S.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==m||m({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void _.add(C);if(j&&_.has(C))return;let t,r;return O.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;S.current&&(S.current.innerHTML=a(s({isLoading:!0,isLoaded:_.has(C),image:i},h)),_.has(C)||(t=requestAnimationFrame((()=>{S.current&&(r=l(S.current,C,_,n,m,g,f))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[i]),(0,r.useLayoutEffect)((()=>{_.has(C)&&j&&(S.current.innerHTML=j(s({isLoading:_.has(C),isLoaded:_.has(C),image:i},h)),null==m||m({wasCached:!0}),null==g||g({wasCached:!0}))}),[i]),(0,r.createElement)(t,s({},L,{style:s({},E,n,{backgroundColor:d}),className:k+(u?" "+u:""),ref:S,dangerouslySetInnerHTML:{__html:x},suppressHydrationWarning:!0}))},R=(0,r.memo)((function(e){return e.image?(0,r.createElement)(q,e):null}));R.propTypes=N,R.displayName="GatsbyImage";const M=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function z(e){return function(t){let{src:a,__imageData:i,__error:n}=t,o=l(t,M);return n&&console.warn(n),i?r.createElement(e,s({image:i},o)):(console.warn("Image not loaded",a),null)}}const P=z((function(e){let{as:t="div",className:a,class:i,style:n,image:o,loading:p="lazy",imgClassName:m,imgStyle:f,backgroundColor:h,objectFit:b,objectPosition:y}=e,w=l(e,L);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;i&&(a=i),f=s({objectFit:b,objectPosition:y,backgroundColor:h},f);const{width:v,height:x,layout:N,images:T,placeholder:I,backgroundColor:_}=o,O=c(v,x,N),{style:j,className:q}=O,R=l(O,S),M={fallback:void 0,sources:[]};return T.fallback&&(M.fallback=s({},T.fallback,{srcSet:T.fallback.srcSet?C(T.fallback.srcSet):void 0})),T.sources&&(M.sources=T.sources.map((e=>s({},e,{srcSet:C(e.srcSet)})))),r.createElement(t,s({},R,{style:s({},j,n,{backgroundColor:h}),className:q+(a?" "+a:"")}),r.createElement(g,{layout:N,width:v,height:x},r.createElement(E,s({},u(I,!1,N,v,x,_,b,y))),r.createElement(k,s({"data-gatsby-image-ssr":"",className:m},w,d("eager"===p,!1,M,p,f)))))})),A=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),i=2;i<a;i++)r[i-2]=arguments[i];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?n().number.apply(n(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},W=new Set(["fixed","fullWidth","constrained"]),F={src:n().string.isRequired,alt:x,width:A,height:A,sizes:n().string,layout:e=>{if(void 0!==e.layout&&!W.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};P.displayName="StaticImage",P.propTypes=F;const D=z(R);D.displayName="StaticImage",D.propTypes=F},8771:function(e,t,a){var r=a(7294),i=a(1883),n=a(8032);t.Z=()=>{var e,t;const s=(0,i.useStaticQuery)("3257411868"),l=null===(e=s.site.siteMetadata)||void 0===e?void 0:e.author,o=null===(t=s.site.siteMetadata)||void 0===t?void 0:t.social;return r.createElement("div",{className:"bio"},r.createElement(n.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.png",width:50,height:50,quality:95,alt:"Profile picture",__imageData:a(6504)}),(null==l?void 0:l.name)&&r.createElement("p",null,"Written by ",r.createElement("strong",null,l.name)," ",(null==l?void 0:l.summary)||null," ",r.createElement("a",{href:"https://twitter.com/"+((null==o?void 0:o.twitter)||"")},"You should follow them on Twitter")))}},8678:function(e,t,a){var r=a(7294),i=a(1883);t.Z=e=>{let{location:t,title:a,children:n}=e;const s="/billiambob.github.io/"===t.pathname;let l;return l=s?r.createElement("h1",{className:"main-heading"},r.createElement(i.Link,{to:"/"},a)):r.createElement(i.Link,{className:"header-link-home",to:"/"},a),r.createElement("div",{className:"global-wrapper","data-is-root-path":s},r.createElement("header",{className:"global-header"},l),r.createElement("main",null,n),r.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",r.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")))}},9357:function(e,t,a){var r=a(7294),i=a(1883);t.Z=e=>{var t,a,n;let{description:s,title:l,children:o}=e;const{site:c}=(0,i.useStaticQuery)("2841359383"),d=s||c.siteMetadata.description,u=null===(t=c.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(r.Fragment,null,r.createElement("title",null,u?l+" | "+u:l),r.createElement("meta",{name:"description",content:d}),r.createElement("meta",{property:"og:title",content:l}),r.createElement("meta",{property:"og:description",content:d}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:creator",content:(null===(a=c.siteMetadata)||void 0===a||null===(n=a.social)||void 0===n?void 0:n.twitter)||""}),r.createElement("meta",{name:"twitter:title",content:l}),r.createElement("meta",{name:"twitter:description",content:d}),o)}},6504:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/billiambob.github.io/static/6dacf7b2c4db85249eda1745ffb570ed/e5610/profile-pic.png","srcSet":"/billiambob.github.io/static/6dacf7b2c4db85249eda1745ffb570ed/e5610/profile-pic.png 50w,\\n/billiambob.github.io/static/6dacf7b2c4db85249eda1745ffb570ed/e9b55/profile-pic.png 100w","sizes":"50px"},"sources":[{"srcSet":"/billiambob.github.io/static/6dacf7b2c4db85249eda1745ffb570ed/d4bf4/profile-pic.avif 50w,\\n/billiambob.github.io/static/6dacf7b2c4db85249eda1745ffb570ed/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/billiambob.github.io/static/6dacf7b2c4db85249eda1745ffb570ed/3faea/profile-pic.webp 50w,\\n/billiambob.github.io/static/6dacf7b2c4db85249eda1745ffb570ed/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=cd7d5f864fc9e15ed8adef086269b0aeff617554-45249b611cc0a645e69e.js.map