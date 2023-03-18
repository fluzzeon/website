(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{7484:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,A=36e5,i="millisecond",n="second",r="minute",a="hour",o="day",s="week",c="month",l="quarter",u="year",d="date",h="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],A=t%100;return"["+t+(e[(A-20)%10]||e[A]||e[0])+"]"}},p=function(t,e,A){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(A)+t},y={s:p,z:function(t){var e=-t.utcOffset(),A=Math.abs(e),i=Math.floor(A/60),n=A%60;return(e<=0?"+":"-")+p(i,2,"0")+":"+p(n,2,"0")},m:function t(e,A){if(e.date()<A.date())return-t(A,e);var i=12*(A.year()-e.year())+(A.month()-e.month()),n=e.clone().add(i,c),r=A-n<0,a=e.clone().add(i+(r?-1:1),c);return+(-(i+(A-n)/(r?n-a:a-n))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:u,w:s,d:o,D:d,h:a,m:r,s:n,ms:i,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},b="en",w={};w[b]=m;var v=function(t){return t instanceof S},x=function t(e,A,i){var n;if(!e)return b;if("string"==typeof e){var r=e.toLowerCase();w[r]&&(n=r),A&&(w[r]=A,n=r);var a=e.split("-");if(!n&&a.length>1)return t(a[0])}else{var o=e.name;w[o]=e,n=o}return!i&&n&&(b=n),n||!i&&b},E=function(t,e){if(v(t))return t.clone();var A="object"==typeof e?e:{};return A.date=t,A.args=arguments,new S(A)},C=y;C.l=x,C.i=v,C.w=function(t,e){return E(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function m(t){this.$L=x(t.locale,null,!0),this.parse(t)}var p=m.prototype;return p.parse=function(t){this.$d=function(t){var e=t.date,A=t.utc;if(null===e)return new Date(NaN);if(C.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(f);if(i){var n=i[2]-1||0,r=(i[7]||"0").substring(0,3);return A?new Date(Date.UTC(i[1],n,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],n,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},p.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},p.$utils=function(){return C},p.isValid=function(){return!(this.$d.toString()===h)},p.isSame=function(t,e){var A=E(t);return this.startOf(e)<=A&&A<=this.endOf(e)},p.isAfter=function(t,e){return E(t)<this.startOf(e)},p.isBefore=function(t,e){return this.endOf(e)<E(t)},p.$g=function(t,e,A){return C.u(t)?this[e]:this.set(A,t)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(t,e){var A=this,i=!!C.u(e)||e,l=C.p(t),h=function(t,e){var n=C.w(A.$u?Date.UTC(A.$y,e,t):new Date(A.$y,e,t),A);return i?n:n.endOf(o)},f=function(t,e){return C.w(A.toDate()[t].apply(A.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(e)),A)},g=this.$W,m=this.$M,p=this.$D,y="set"+(this.$u?"UTC":"");switch(l){case u:return i?h(1,0):h(31,11);case c:return i?h(1,m):h(0,m+1);case s:var b=this.$locale().weekStart||0,w=(g<b?g+7:g)-b;return h(i?p-w:p+(6-w),m);case o:case d:return f(y+"Hours",0);case a:return f(y+"Minutes",1);case r:return f(y+"Seconds",2);case n:return f(y+"Milliseconds",3);default:return this.clone()}},p.endOf=function(t){return this.startOf(t,!1)},p.$set=function(t,e){var A,s=C.p(t),l="set"+(this.$u?"UTC":""),h=(A={},A[o]=l+"Date",A[d]=l+"Date",A[c]=l+"Month",A[u]=l+"FullYear",A[a]=l+"Hours",A[r]=l+"Minutes",A[n]=l+"Seconds",A[i]=l+"Milliseconds",A)[s],f=s===o?this.$D+(e-this.$W):e;if(s===c||s===u){var g=this.clone().set(d,1);g.$d[h](f),g.init(),this.$d=g.set(d,Math.min(this.$D,g.daysInMonth())).$d}else h&&this.$d[h](f);return this.init(),this},p.set=function(t,e){return this.clone().$set(t,e)},p.get=function(t){return this[C.p(t)]()},p.add=function(i,l){var d,h=this;i=Number(i);var f=C.p(l),g=function(t){var e=E(h);return C.w(e.date(e.date()+Math.round(t*i)),h)};if(f===c)return this.set(c,this.$M+i);if(f===u)return this.set(u,this.$y+i);if(f===o)return g(1);if(f===s)return g(7);var m=(d={},d[r]=e,d[a]=A,d[n]=t,d)[f]||1,p=this.$d.getTime()+i*m;return C.w(p,this)},p.subtract=function(t,e){return this.add(-1*t,e)},p.format=function(t){var e=this,A=this.$locale();if(!this.isValid())return A.invalidDate||h;var i=t||"YYYY-MM-DDTHH:mm:ssZ",n=C.z(this),r=this.$H,a=this.$m,o=this.$M,s=A.weekdays,c=A.months,l=function(t,A,n,r){return t&&(t[A]||t(e,i))||n[A].slice(0,r)},u=function(t){return C.s(r%12||12,t,"0")},d=A.meridiem||function(t,e,A){var i=t<12?"AM":"PM";return A?i.toLowerCase():i},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:C.s(o+1,2,"0"),MMM:l(A.monthsShort,o,c,3),MMMM:l(c,o),D:this.$D,DD:C.s(this.$D,2,"0"),d:String(this.$W),dd:l(A.weekdaysMin,this.$W,s,2),ddd:l(A.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(r),HH:C.s(r,2,"0"),h:u(1),hh:u(2),a:d(r,a,!0),A:d(r,a,!1),m:String(a),mm:C.s(a,2,"0"),s:String(this.$s),ss:C.s(this.$s,2,"0"),SSS:C.s(this.$ms,3,"0"),Z:n};return i.replace(g,(function(t,e){return e||f[t]||n.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(i,d,h){var f,g=C.p(d),m=E(i),p=(m.utcOffset()-this.utcOffset())*e,y=this-m,b=C.m(this,m);return b=(f={},f[u]=b/12,f[c]=b,f[l]=b/3,f[s]=(y-p)/6048e5,f[o]=(y-p)/864e5,f[a]=y/A,f[r]=y/e,f[n]=y/t,f)[g]||y,h?b:C.a(b)},p.daysInMonth=function(){return this.endOf(c).$D},p.$locale=function(){return w[this.$L]},p.locale=function(t,e){if(!t)return this.$L;var A=this.clone(),i=x(t,e,!0);return i&&(A.$L=i),A},p.clone=function(){return C.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},m}(),D=S.prototype;return E.prototype=D,[["$ms",i],["$s",n],["$m",r],["$H",a],["$W",o],["$M",c],["$y",u],["$D",d]].forEach((function(t){D[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),E.extend=function(t,e){return t.$i||(t(e,S,E),t.$i=!0),E},E.locale=x,E.isDayjs=v,E.unix=function(t){return E(1e3*t)},E.en=w[b],E.Ls=w,E.p={},E}()},4110:function(t){t.exports=function(){"use strict";return function(t,e,A){t=t||{};var i=e.prototype,n={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function r(t,e,A,n){return i.fromToBase(t,e,A,n)}A.en.relativeTime=n,i.fromToBase=function(e,i,r,a,o){for(var s,c,l,u=r.$locale().relativeTime||n,d=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],h=d.length,f=0;f<h;f+=1){var g=d[f];g.d&&(s=a?A(e).diff(r,g.d,!0):r.diff(e,g.d,!0));var m=(t.rounding||Math.round)(Math.abs(s));if(l=s>0,m<=g.r||!g.r){m<=1&&f>0&&(g=d[f-1]);var p=u[g.l];o&&(m=o(""+m)),c="string"==typeof p?p.replace("%d",m):p(m,i,g.l,l);break}}if(i)return c;var y=l?u.future:u.past;return"function"==typeof y?y(c):y.replace("%s",c)},i.to=function(t,e){return r(t,e,this,!0)},i.from=function(t,e){return r(t,e,this)};var a=function(t){return t.$u?A.utc():A()};i.toNow=function(t){return this.to(a(this),t)},i.fromNow=function(t){return this.from(a(this),t)}}}()},9917:function(t,e,A){"use strict";var i=A(3848),n=A(3115);e.default=function(t){var e=t.src,A=t.sizes,n=t.unoptimized,s=void 0!==n&&n,l=t.priority,u=void 0!==l&&l,f=t.loading,m=t.lazyBoundary,p=void 0===m?"200px":m,y=t.className,b=t.quality,w=t.width,v=t.height,S=t.objectFit,D=t.objectPosition,Q=t.onLoadingComplete,M=t.loader,B=void 0===M?C:M,I=t.placeholder,j=void 0===I?"empty":I,$=t.blurDataURL,k=function(t,e){if(null==t)return{};var A,i,n=function(t,e){if(null==t)return{};var A,i,n={},r=Object.keys(t);for(i=0;i<r.length;i++)A=r[i],e.indexOf(A)>=0||(n[A]=t[A]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)A=r[i],e.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(t,A)&&(n[A]=t[A])}return n}(t,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),U=A?"responsive":"intrinsic";"layout"in k&&(k.layout&&(U=k.layout),delete k.layout);var O="";if(function(t){return"object"===typeof t&&(g(t)||function(t){return void 0!==t.src}(t))}(e)){var F=g(e)?e.default:e;if(!F.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(F)));if($=$||F.blurDataURL,O=F.src,(!U||"fill"!==U)&&(v=v||F.height,w=w||F.width,!F.height||!F.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(F)))}e="string"===typeof e?e:O;var P=E(w),N=E(v),L=E(b),_=!u&&("lazy"===f||"undefined"===typeof f);(e.startsWith("data:")||e.startsWith("blob:"))&&(s=!0,_=!1);h.has(e)&&(_=!1);0;var z,R,T,Y=c.useIntersection({rootMargin:p,disabled:!_}),H=i(Y,2),W=H[0],V=H[1],G=!_||V,J={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:S,objectPosition:D},K="blur"===j?{filter:"blur(20px)",backgroundSize:S||"cover",backgroundImage:'url("'.concat($,'")'),backgroundPosition:D||"0% 0%"}:{};if("fill"===U)z={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0};else if("undefined"!==typeof P&&"undefined"!==typeof N){var Z=N/P,q=isNaN(Z)?"100%":"".concat(100*Z,"%");"responsive"===U?(z={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},R={display:"block",boxSizing:"border-box",paddingTop:q}):"intrinsic"===U?(z={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},R={boxSizing:"border-box",display:"block",maxWidth:"100%"},T='<svg width="'.concat(P,'" height="').concat(N,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===U&&(z={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:P,height:N})}else 0;var X={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};G&&(X=x({src:e,unoptimized:s,layout:U,width:P,quality:L,sizes:A,loader:B}));var tt=e;return r.default.createElement("div",{style:z},R?r.default.createElement("div",{style:R},T?r.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(o.toBase64(T))}):null):null,r.default.createElement("img",Object.assign({},k,X,{decoding:"async","data-nimg":U,className:y,ref:function(t){W(t),function(t,e,A,i,n){if(!t)return;var r=function(){t.src.startsWith("data:")||("decode"in t?t.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===i&&(t.style.filter="none",t.style.backgroundSize="none",t.style.backgroundImage="none"),h.add(e),n){var A=t.naturalWidth,r=t.naturalHeight;n({naturalWidth:A,naturalHeight:r})}}))};t.complete?r():t.onload=r}(t,tt,0,j,Q)},style:d({},J,K)})),r.default.createElement("noscript",null,r.default.createElement("img",Object.assign({},k,x({src:e,unoptimized:s,layout:U,width:P,quality:L,sizes:A,loader:B}),{decoding:"async","data-nimg":U,style:J,className:y,loading:f||"lazy"}))),u?r.default.createElement(a.default,null,r.default.createElement("link",{key:"__nimg-"+X.src+X.srcSet+X.sizes,rel:"preload",as:"image",href:X.srcSet?void 0:X.src,imagesrcset:X.srcSet,imagesizes:X.sizes})):null)};var r=u(A(7294)),a=u(A(639)),o=A(8997),s=A(5809),c=A(7426);function l(t,e,A){return e in t?Object.defineProperty(t,e,{value:A,enumerable:!0,configurable:!0,writable:!0}):t[e]=A,t}function u(t){return t&&t.__esModule?t:{default:t}}function d(t){for(var e=1;e<arguments.length;e++){var A=null!=arguments[e]?arguments[e]:{},i=Object.keys(A);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(A).filter((function(t){return Object.getOwnPropertyDescriptor(A,t).enumerable})))),i.forEach((function(e){l(t,e,A[e])}))}return t}var h=new Set;var f=new Map([["default",function(t){var e=t.root,A=t.src,i=t.width,n=t.quality;0;return"".concat(e,"?url=").concat(encodeURIComponent(A),"&w=").concat(i,"&q=").concat(n||75)}],["imgix",function(t){var e=t.root,A=t.src,i=t.width,n=t.quality,r=new URL("".concat(e).concat(S(A))),a=r.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||i.toString()),n&&a.set("q",n.toString());return r.href}],["cloudinary",function(t){var e=t.root,A=t.src,i=t.width,n=t.quality,r=["f_auto","c_limit","w_"+i,"q_"+(n||"auto")].join(",")+"/";return"".concat(e).concat(r).concat(S(A))}],["akamai",function(t){var e=t.root,A=t.src,i=t.width;return"".concat(e).concat(S(A),"?imwidth=").concat(i)}],["custom",function(t){var e=t.src;throw new Error('Image with src "'.concat(e,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function g(t){return void 0!==t.default}var m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai"}||s.imageConfigDefault,p=m.deviceSizes,y=m.imageSizes,b=m.loader,w=m.path,v=(m.domains,[].concat(n(p),n(y)));function x(t){var e=t.src,A=t.unoptimized,i=t.layout,r=t.width,a=t.quality,o=t.sizes,s=t.loader;if(A)return{src:e,srcSet:void 0,sizes:void 0};var c=function(t,e,A){if(A&&("fill"===e||"responsive"===e)){for(var i,r=/(^|\s)(1?\d?\d)vw/g,a=[];i=r.exec(A);i)a.push(parseInt(i[2]));if(a.length){var o=.01*Math.min.apply(Math,a);return{widths:v.filter((function(t){return t>=p[0]*o})),kind:"w"}}return{widths:v,kind:"w"}}return"number"!==typeof t||"fill"===e||"responsive"===e?{widths:p,kind:"w"}:{widths:n(new Set([t,2*t].map((function(t){return v.find((function(e){return e>=t}))||v[v.length-1]})))),kind:"x"}}(r,i,o),l=c.widths,u=c.kind,d=l.length-1;return{sizes:o||"w"!==u?o:"100vw",srcSet:l.map((function(t,A){return"".concat(s({src:e,quality:a,width:t})," ").concat("w"===u?t:A+1).concat(u)})).join(", "),src:s({src:e,quality:a,width:l[d]})}}function E(t){return"number"===typeof t?t:"string"===typeof t?parseInt(t,10):void 0}function C(t){var e=f.get(b);if(e)return e(d({root:w},t));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(s.VALID_LOADERS.join(", "),". Received: ").concat(b))}function S(t){return"/"===t[0]?t.slice(1):t}p.sort((function(t,e){return t-e})),v.sort((function(t,e){return t-e}))},8997:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.toBase64=function(t){return window.btoa(t)}},2621:function(t,e,A){"use strict";A.r(e),A.d(e,{default:function(){return p}});var i=A(1770),n=A(5675),r={src:"/_next/static/image/public/banner.c64424fc9a14bcf24c00338bc712dd91.jpg",height:1701,width:3024,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAG/9oACAEBAAAAAB//xAAUAQEAAAAAAAAAAAAAAAAAAAAE/9oACAECEAAAADf/xAAUAQEAAAAAAAAAAAAAAAAAAAAF/9oACAEDEAAAAEv/xAAfEAABAwMFAAAAAAAAAAAAAAABAwQRACExAhITIlH/2gAIAQEAAT8AZcWhktsSg9CL2nBn3Ff/xAAXEQADAQAAAAAAAAAAAAAAAAAAAQJC/9oACAECAQE/AFdLTP/EABcRAAMBAAAAAAAAAAAAAAAAAAABA0L/2gAIAQMBAT8Ac5vCP//Z"},a=A(7484),o=A.n(a),s=A(4110),c=A.n(s),l={src:"/_next/static/image/public/art/cup.199a612f9b2255a5cf28b9e548b3be3d.jpg",height:1080,width:1080,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAE/9oACAEBAAAAAG//xAAUAQEAAAAAAAAAAAAAAAAAAAAE/9oACAECEAAAAE//xAAUAQEAAAAAAAAAAAAAAAAAAAAE/9oACAEDEAAAAH//xAAeEAAABAcAAAAAAAAAAAAAAAAAAQMRBBIUFSFCcf/aAAgBAQABPwCIuFQySRSPsWOuP//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z"},u={src:"/_next/static/image/public/art/balls.0b04df423a5946e47870715030cab24e.gif",height:1080,width:1220},d={src:"/_next/static/image/public/art/Donut.67a89af0662c9de0e06f55908eeed566.png",height:1080,width:1920,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAArklEQVR4nA3MPQ7BYBwH4N+/vg0ShNEmFhKLOEAniSuYHcZFJLUYimBwg6aJWCrRig79kqYNStv31f3JQ9LmzlLGkUQBUeBw5PIIhTLShCGJvyBp++AUhYhve7iqik6vD7dQRdQYgBNlYGdybhv4aSfESRH+y4Nl6agMpmh3uqCVbPD47UORF4ieDj5MwPV8QHM8hziZgZZrjVFWeZZOF+XIbcuEUGpiOBJRq7fwB/PFT+PeCRJvAAAAAElFTkSuQmCC"},h={src:"/_next/static/image/public/art/image1.93e62ec2aa3d824b755af7317ef04777.jpg",height:1080,width:1080,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAF/9oACAEBAAAAABP/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oACAECEAAAAD//xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oACAEDEAAAAH//xAAdEAACAgEFAAAAAAAAAAAAAAACAwEEAAUGEhMy/9oACAEBAAE/ANN3nWpVVA2q5reuIMuQes//xAAXEQADAQAAAAAAAAAAAAAAAAAAASFS/9oACAECAQE/ALpn/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAECYZH/2gAIAQMBAT8AbqOH/9k="},f={src:"/_next/static/image/public/art/image2.9196241cf835e1de1598773f7cdb00c7.jpg",height:1080,width:1080,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAF/9oACAEBAAAAACf/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAECEAAAAH//xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDEAAAAH//xAAdEAABAgcAAAAAAAAAAAAAAAADABMCBQYRFSNC/9oACAEBAAE/AJjVQmBY60JXNjg+V//EABYRAAMAAAAAAAAAAAAAAAAAAAAhUf/aAAgBAgEBPwB0/8QAFhEAAwAAAAAAAAAAAAAAAAAAADFB/9oACAEDAQE/AHD/2Q=="},g={src:"/_next/static/image/public/art/image3.5b6342eb4cee4277b05a30582979a8f7.jpg",height:1080,width:1080,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAF/9oACAEBAAAAAA//xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oACAECEAAAAH//xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDEAAAAH//xAAbEAACAQUAAAAAAAAAAAAAAAACAyEAAQQGEv/aAAgBAQABPwA9rbdBAGKkGxycnX//xAAXEQEAAwAAAAAAAAAAAAAAAAABABFR/9oACAECAQE/AArZ/8QAFxEBAAMAAAAAAAAAAAAAAAAAAQARQf/aAAgBAwEBPwBbwn//2Q=="},m=A(5893);o().extend(c());var p=function(){return(0,m.jsx)(i.E.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.95},transition:{ease:"easeOut",duration:.15},className:"mt-24 w-full mb-32",children:(0,m.jsxs)("div",{className:"mt-36 space-y-8",children:[(0,m.jsx)("h1",{className:"block text-3xl font-bold sm:text-4xl md:text-6xl",children:"About"}),(0,m.jsxs)("div",{className:"text-gray-900/30 hover:text-gray-900 dark:text-white/20 dark:hover:text-white/100 transition-all",children:[(0,m.jsx)(n.default,{alt:"Me and my troop at Lake Casitas",src:r,width:1e3,height:400,placeholder:"blur",className:"block object-cover rounded-xl border-2 border-white"}),(0,m.jsx)("span",{className:"text-sm not-sr-only",children:"a trip to Lake Casitas with my Boy Scouts troop"})]}),(0,m.jsxs)("div",{className:"space-y-8",children:[(0,m.jsx)("h2",{className:"text-3xl font-bold",children:"Scouting"}),(0,m.jsxs)("p",{children:["I am currently in Troop-858 and am a Star Scout. I enjoy all the fun activities we do especially camping and being outdoors. But it's only fun with everyone there. I am currently youth equipment manager but I have been in all sorts of possitions like Patrol Leader, Assistant Patrol Leader, Den Cheif, and etc.",(0,m.jsx)("br",{}),"I am also part of Venturing Crew 9333. A Venture crew is the same as a Boy Scouts troop, but with a larger focus on high-adventure activities, first aid, and leadership training. It is only one of two co-ed scouting programs, and since Venturing crews are typically smaller, Venturers also do more personal events, like a game night or bowling."]}),(0,m.jsx)("h2",{className:"text-3xl font-bold",children:"Music"}),(0,m.jsx)("p",{children:"I listen to a lot of Spotify and have always had a passion for music ever since I was young. I have experimented with digital music but the main thing I have really done is play in a middle school band for 3 years plus 3 years of Camarillo Music which is basically highschool synphonic/concert band on top of that. Last year however I moved more twoards digital music class to get more experiance in digital form of music instead."}),(0,m.jsx)("h2",{className:"text-3xl font-bold",children:"Art"}),(0,m.jsx)("p",{children:"With some of my friend's inspiration and encouragement, I am currently learning more about art. Some of the tools I am using are Blender for modeling, Photoshop, Krita for photo editing, and free-hand drawing in my spare time. With these tools, I'm able to immerse myself in photography and the fascinating world behind it. I have been surprised by how much I've discovered so far! To see some of my work simply look below at the images to see my current progress!"}),(0,m.jsxs)("div",{className:"flex flex-row",children:[(0,m.jsx)("div",{className:"flex flex-col mr-5",children:(0,m.jsx)(n.default,{alt:"image3",src:g,width:230,height:200,placeholder:"blur",className:"object-cover rounded-xl"})}),(0,m.jsx)("div",{className:"flex flex-col mr-5",children:(0,m.jsx)(n.default,{alt:"image1",src:h,width:200,height:200,placeholder:"blur",className:"object-cover rounded-xl"})}),(0,m.jsx)("div",{className:"flex flex-col mr-5",children:(0,m.jsx)(n.default,{alt:"image2",src:f,width:240,height:200,placeholder:"blur",className:"object-cover rounded-xl"})})]}),(0,m.jsxs)("div",{className:"flex flex-row",children:[(0,m.jsx)("div",{className:"flex flex-col mr-5",children:(0,m.jsx)(n.default,{alt:"cup",src:l,width:220,height:200,placeholder:"blur",className:"object-cover rounded-xl"})}),(0,m.jsx)("div",{className:"flex flex-col mr-5",children:(0,m.jsx)(n.default,{alt:"balls",src:u,width:210,height:200,className:"object-cover rounded-xl"})}),(0,m.jsx)("div",{className:"flex flex-col mr-5",children:(0,m.jsx)(n.default,{alt:"donut",src:d,width:240,height:200,placeholder:"blur",className:"object-cover rounded-xl"})})]})]})]})})}},4613:function(t,e,A){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return A(2621)}])},5809:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.imageConfigDefault=e.VALID_LOADERS=void 0;e.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];e.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60}},5675:function(t,e,A){t.exports=A(9917)}},function(t){t.O(0,[774,888,179],(function(){return e=4613,t(t.s=e);var e}));var e=t.O();_N_E=e}]);