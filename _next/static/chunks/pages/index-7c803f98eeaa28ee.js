(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7484:function(a){!function(c,b){a.exports=b()}(this,function(){"use strict";var r=6e4,g="millisecond",h="second",i="minute",j="hour",s="week",k="month",t="quarter",l="year",m="date",u="Invalid Date",v=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,w=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,n={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},o=function(a,c,d){var b=String(a);return!b||b.length>=c?a:""+Array(c+1-b.length).join(d)+a},d="en",b={};b[d]=n;var e=function(a){return a instanceof p},f=function j(c,f,g){var a;if(!c)return d;if("string"==typeof c){var e=c.toLowerCase();b[e]&&(a=e),f&&(b[e]=f,a=e);var h=c.split("-");if(!a&&h.length>1)return j(h[0])}else{var i=c.name;b[i]=c,a=i}return!g&&a&&(d=a),a|| !g&&d},a=function(a,c){if(e(a))return a.clone();var b="object"==typeof c?c:{};return b.date=a,b.args=arguments,new p(b)},c={s:o,z:function(c){var a=-c.utcOffset(),b=Math.abs(a);return(a<=0?"+":"-")+o(Math.floor(b/60),2,"0")+":"+o(b%60,2,"0")},m:function g(a,b){if(a.date()<b.date())return-g(b,a);var d=12*(b.year()-a.year())+(b.month()-a.month()),c=a.clone().add(d,k),e=b-c<0,f=a.clone().add(d+(e?-1:1),k);return+(-(d+(b-c)/(e?c-f:f-c))||0)},a:function(a){return a<0?Math.ceil(a)||0:Math.floor(a)},p:function(a){return({M:k,y:l,w:s,d:"day",D:m,h:j,m:i,s:h,ms:g,Q:t})[a]||String(a||"").toLowerCase().replace(/s$/,"")},u:function(a){return void 0===a}};c.l=f,c.i=e,c.w=function(c,b){return a(c,{locale:b.$L,utc:b.$u,x:b.$x,$offset:b.$offset})};var p=function(){function e(a){this.$L=f(a.locale,null,!0),this.parse(a)}var d=e.prototype;return d.parse=function(a){this.$d=function(d){var b=d.date,g=d.utc;if(null===b)return new Date(NaN);if(c.u(b))return new Date;if(b instanceof Date)return new Date(b);if("string"==typeof b&&!/Z$/i.test(b)){var a=b.match(v);if(a){var e=a[2]-1||0,f=(a[7]||"0").substring(0,3);return g?new Date(Date.UTC(a[1],e,a[3]||1,a[4]||0,a[5]||0,a[6]||0,f)):new Date(a[1],e,a[3]||1,a[4]||0,a[5]||0,a[6]||0,f)}}return new Date(b)}(a),this.$x=a.x||{},this.init()},d.init=function(){var a=this.$d;this.$y=a.getFullYear(),this.$M=a.getMonth(),this.$D=a.getDate(),this.$W=a.getDay(),this.$H=a.getHours(),this.$m=a.getMinutes(),this.$s=a.getSeconds(),this.$ms=a.getMilliseconds()},d.$utils=function(){return c},d.isValid=function(){return this.$d.toString()!==u},d.isSame=function(d,b){var c=a(d);return this.startOf(b)<=c&&c<=this.endOf(b)},d.isAfter=function(b,c){return a(b)<this.startOf(c)},d.isBefore=function(b,c){return this.endOf(c)<a(b)},d.$g=function(a,b,d){return c.u(a)?this[b]:this.set(d,a)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(r,n){var u=this,e=!!c.u(n)||n,t=c.p(r),a=function(a,b){var d=c.w(u.$u?Date.UTC(u.$y,b,a):new Date(u.$y,b,a),u);return e?d:d.endOf("day")},b=function(a,b){return c.w(u.toDate()[a].apply(u.toDate("s"),(e?[0,0,0,0]:[23,59,59,999]).slice(b)),u)},f=this.$W,g=this.$M,o=this.$D,d="set"+(this.$u?"UTC":"");switch(t){case l:return e?a(1,0):a(31,11);case k:return e?a(1,g):a(0,g+1);case s:var p=this.$locale().weekStart||0,q=(f<p?f+7:f)-p;return a(e?o-q:o+(6-q),g);case"day":case m:return b(d+"Hours",0);case j:return b(d+"Minutes",1);case i:return b(d+"Seconds",2);case h:return b(d+"Milliseconds",3);default:return this.clone()}},d.endOf=function(a){return this.startOf(a,!1)},d.$set=function(p,n){var a,d=c.p(p),b="set"+(this.$u?"UTC":""),f=((a={}).day=b+"Date",a[m]=b+"Date",a[k]=b+"Month",a[l]=b+"FullYear",a[j]=b+"Hours",a[i]=b+"Minutes",a[h]=b+"Seconds",a[g]=b+"Milliseconds",a)[d],o="day"===d?this.$D+(n-this.$W):n;if(d===k||d===l){var e=this.clone().set(m,1);e.$d[f](o),e.init(),this.$d=e.set(m,Math.min(this.$D,e.daysInMonth())).$d}else f&&this.$d[f](o);return this.init(),this},d.set=function(a,b){return this.clone().$set(a,b)},d.get=function(a){return this[c.p(a)]()},d.add=function(b,g){var e,o=this;b=Number(b);var d=c.p(g),f=function(e){var d=a(o);return c.w(d.date(d.date()+Math.round(e*b)),o)};if(d===k)return this.set(k,this.$M+b);if(d===l)return this.set(l,this.$y+b);if("day"===d)return f(1);if(d===s)return f(7);var m=((e={})[i]=r,e[j]=36e5,e[h]=1e3,e)[d]||1,n=this.$d.getTime()+b*m;return c.w(n,this)},d.subtract=function(a,b){return this.add(-1*a,b)},d.format=function(k){var n=this,a=this.$locale();if(!this.isValid())return a.invalidDate||u;var l=k||"YYYY-MM-DDTHH:mm:ssZ",m=c.z(this),b=this.$H,d=this.$m,e=this.$M,g=a.weekdays,h=a.months,f=function(a,b,c,d){return a&&(a[b]||a(n,l))||c[b].slice(0,d)},i=function(a){return c.s(b%12||12,a,"0")},j=a.meridiem||function(b,d,c){var a=b<12?"AM":"PM";return c?a.toLowerCase():a},o={YY:String(this.$y).slice(-2),YYYY:this.$y,M:e+1,MM:c.s(e+1,2,"0"),MMM:f(a.monthsShort,e,h,3),MMMM:f(h,e),D:this.$D,DD:c.s(this.$D,2,"0"),d:String(this.$W),dd:f(a.weekdaysMin,this.$W,g,2),ddd:f(a.weekdaysShort,this.$W,g,3),dddd:g[this.$W],H:String(b),HH:c.s(b,2,"0"),h:i(1),hh:i(2),a:j(b,d,!0),A:j(b,d,!1),m:String(d),mm:c.s(d,2,"0"),s:String(this.$s),ss:c.s(this.$s,2,"0"),SSS:c.s(this.$ms,3,"0"),Z:m};return l.replace(w,function(a,b){return b||o[a]||m.replace(":","")})},d.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},d.diff=function(m,n,o){var b,p=c.p(n),f=a(m),g=(f.utcOffset()-this.utcOffset())*r,d=this-f,e=c.m(this,f);return e=((b={})[l]=e/12,b[k]=e,b[t]=e/3,b[s]=(d-g)/6048e5,b.day=(d-g)/864e5,b[j]=d/36e5,b[i]=d/r,b[h]=d/1e3,b)[p]||d,o?e:c.a(e)},d.daysInMonth=function(){return this.endOf(k).$D},d.$locale=function(){return b[this.$L]},d.locale=function(a,d){if(!a)return this.$L;var b=this.clone(),c=f(a,d,!0);return c&&(b.$L=c),b},d.clone=function(){return c.w(this.$d,this)},d.toDate=function(){return new Date(this.valueOf())},d.toJSON=function(){return this.isValid()?this.toISOString():null},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},e}(),q=p.prototype;return a.prototype=q,[["$ms",g],["$s",h],["$m",i],["$H",j],["$W","day"],["$M",k],["$y",l],["$D",m]].forEach(function(a){q[a[1]]=function(b){return this.$g(b,a[0],a[1])}}),a.extend=function(b,c){return b.$i||(b(c,p,a),b.$i=!0),a},a.locale=f,a.isDayjs=e,a.unix=function(b){return a(1e3*b)},a.en=b[d],a.Ls=b,a.p={},a})},4110:function(a){!function(c,b){a.exports=b()}(this,function(){return function(b,c,d){b=b||{};var a=c.prototype,e={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function f(b,c,d,e){return a.fromToBase(b,c,d,e)}d.en.relativeTime=e,a.fromToBase=function(o,p,h,r,q){for(var i,g,j,k=h.$locale().relativeTime||e,l=b.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],s=l.length,f=0;f<s;f+=1){var a=l[f];a.d&&(i=r?d(o).diff(h,a.d,!0):h.diff(o,a.d,!0));var c=(b.rounding||Math.round)(Math.abs(i));if(j=i>0,c<=a.r||!a.r){c<=1&&f>0&&(a=l[f-1]);var m=k[a.l];q&&(c=q(""+c)),g="string"==typeof m?m.replace("%d",c):m(c,p,a.l,j);break}}if(p)return g;var n=j?k.future:k.past;return"function"==typeof n?n(g):n.replace("%s",g)},a.to=function(a,b){return f(a,b,this,!0)},a.from=function(a,b){return f(a,b,this)};var g=function(a){return a.$u?d.utc():d()};a.toNow=function(a){return this.to(g(this),a)},a.fromNow=function(a){return this.from(g(this),a)}}})},8312:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(6647)}])},6647:function(i,b,a){"use strict";a.r(b),a.d(b,{"__N_SSG":function(){return v},"default":function(){return w}});var j=a(5893),k=a(7294),l=a(775),m=a(1190),n=a(8504),o=a(1713),p=a(8100);function q(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function r(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){q(d,a,c[a])})}return d}function s(a){var b=a.text,c=a.icon;return(0,j.jsxs)("li",{className:"flex space-x-2",children:[(0,j.jsx)("span",{children:c({className:"h-6 w-6"})}),(0,j.jsx)("span",{children:b})]})}var t=a(3378),c=new Date("2006-06-10T10:10-07:00"),d=Date.now()-c.getTime(),u=d/31536e6,e=a(7484),f=a.n(e),g=a(4110),h=a.n(g);f().extend(h());var v=!0;function w(b){var c,a,d,e=(c="Killerjet101",r({},d=(0,p.ZP)("https://gh-pinned-repos.egoist.sh/?username=".concat(c)),{data:null===(a=d.data)|| void 0===a?void 0:a.map(function(a){return r({},a,{url:"https://github.com/".concat(a.owner,"/").concat(a.repo)})})})).data,f=void 0===e?b.pinnedRepos:e,g=(0,o.qP)(t.s,{fallbackData:b.lanyard}).data;return null==g||g.activities.find(function(a){return"932730208820265011"===a.application_id}),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("div",{className:"space-y-4",children:[(0,j.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,j.jsxs)("a",{href:"https://github.com/Killerjet101",target:"_blank",rel:"noreferrer","aria-label":"GitHub Profile",children:[(0,j.jsx)(n.pZu,{className:"w-7 h-7"}),(0,j.jsx)("span",{className:"sr-only",children:"GitHub Profile"})]}),(0,j.jsxs)("a",{href:"https://twitter.com/Killerjet101",target:"_blank",rel:"noreferrer","aria-label":"Twitter Profile",children:[(0,j.jsx)(n.mWf,{className:"w-7 h-7"}),(0,j.jsx)("span",{className:"sr-only",children:"Twitter Profile"})]})]}),(0,j.jsxs)("h1",{className:"text-3xl font-bold sm:text-4xl md:text-6xl",children:["Hey, I'm"," ",(0,j.jsx)("span",{className:"text-blue-700 dark:text-white",children:"Jet"})," \u270C\uFE0F"]}),(0,j.jsxs)("p",{className:"opacity-80",children:["I'm a ~",u.toPrecision(4)," year old software engineer from the United States. I'm interested in full stack web development including large scale frontend applications and performant serverside code."]})]}),(0,j.jsxs)("div",{className:"space-y-4",children:[(0,j.jsx)("h1",{className:"text-2xl font-bold sm:text-3xl",children:"What do I do? \uD83D\uDCAD"}),(0,j.jsxs)("p",{className:"opacity-80",children:["Honestly, a few too many things to count on one hand... I'm currently having a fantastic time working with"," ",(0,j.jsx)("a",{href:"https://hop.io",target:"_blank",rel:"noreferrer",children:"Hop"})," ","- we're building an e2e realtime engine for video. Below are some of the more popular open source projects I've worked on. In total, the following repos have earnt me"," ",f.reduce(function(a,b){return a+parseInt(b.stars,10)},0)," ","stars! Thank you! \uD83D\uDC96"]}),(0,j.jsx)("div",{className:"grid grid-cols-1 auto-cols-max gap-1 sm:grid-cols-2 sm:gap-3",children:f.map(function(a){return(0,j.jsx)(x,{repo:a},a.repo)})})]}),(0,j.jsxs)("div",{className:"space-y-4",children:[(0,j.jsx)("h1",{className:"text-2xl font-bold sm:text-3xl",children:"Technologies \uD83D\uDCBB"}),(0,j.jsx)("p",{className:"opacity-80",children:"I use a wide range of tools to tackle each hurdle in the most efficient manner possible. I really love working with containersation, especially Docker; it's proven to be a reliable bit of kit for both production and development environments."}),(0,j.jsxs)("ul",{className:"grid grid-cols-3 gap-4 sm:grid-cols-4",children:[(0,j.jsx)(s,{icon:n.VIR,text:"Docker"}),(0,j.jsx)(s,{icon:n.uds,text:"Node.js"}),(0,j.jsx)(s,{icon:n.LIX,text:"Java"}),(0,j.jsx)(s,{icon:n.WZi,text:"TypeScript"}),(0,j.jsx)(s,{icon:n.Cul,text:"Python"}),(0,j.jsx)(s,{icon:n.PSn,text:"HTML"}),(0,j.jsx)(s,{icon:n.H5g,text:"CSS"}),(0,j.jsx)(s,{icon:n.pNp,text:"React.js"}),(0,j.jsx)(s,{icon:n.Xou,text:"Next.js"}),(0,j.jsx)(s,{icon:n.Mqf,text:"Discord.js"}),(0,j.jsx)(s,{icon:n.FhO,text:"Yarn"}),(0,j.jsx)(s,{icon:n.Kt8,text:"AWS"}),(0,j.jsx)(s,{icon:n.zS0,text:"Git"}),(0,j.jsx)(s,{icon:n.t$b,text:"MongoDB"}),(0,j.jsx)(s,{icon:n.xEg,text:"Firebase"}),(0,j.jsx)(s,{icon:n.K5G,text:"Blender"})]})]})]})}function x(d){var a=d.repo,c=(0,k.useReducer)(function(a){return!a},!1),b=c[0],e=c[1];return(0,j.jsxs)(l.E.div,{animate:{height:b?"auto":"54px"},className:"flex overflow-hidden relative flex-col text-blue-900/80 dark:text-gray-100 no-underline dark:hover:bg-white/10 bg-gradient-to-tr from-blue-100 dark:from-white/5 to-blue-700/5 dark:to-white/5 rounded-md dark:border border-white/10 md:rounded-lg",children:[(0,j.jsxs)("button",{type:"button",className:"flex items-center py-4 px-5 space-x-2 text-lg font-bold border-b border-white/10 focus:outline-none cursor-pointer select-none",onClick:e,children:[(0,j.jsxs)("div",{className:"flex flex-1 items-center space-x-2 text-left",children:[(0,j.jsx)("span",{children:a.repo}),(0,j.jsxs)("span",{className:"flex items-center space-x-3 text-xs",children:[(0,j.jsxs)("span",{className:"space-x-1",children:[(0,j.jsx)("span",{children:"\u2B50"}),(0,j.jsx)("span",{children:a.stars})]}),(0,j.jsxs)("span",{className:"space-x-1",children:[(0,j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"inline w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,j.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"})}),(0,j.jsx)("span",{children:a.forks})]})]})]}),(0,j.jsx)("div",{children:(0,j.jsx)(l.E.div,{className:"p-1 bg-white/0 hover:bg-white/10 rounded-full",animate:{rotate:b?90:0},children:(0,j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,j.jsx)("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"})})})})]}),(0,j.jsx)(m.M,{children:b&&(0,j.jsx)(l.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"flex h-full",children:(0,j.jsxs)("div",{className:"flex flex-col py-4 px-5 space-y-4",children:[(0,j.jsx)("p",{className:"flex-1",children:a.description}),(0,j.jsx)("div",{children:(0,j.jsxs)("a",{href:"https://github.com/".concat(a.owner,"/").concat(a.repo),target:"_blank",rel:"noreferrer",className:"inline-flex items-center py-2 px-6 space-x-2 text-white no-underline bg-blue-700 dark:bg-white/10 rounded-full transition-transform duration-500 hover:scale-95 select-none",children:[(0,j.jsx)("span",{children:"View Project"}),(0,j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,j.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"})})]})})]})})})]})}}},function(a){a.O(0,[774,888,179],function(){return a(a.s=8312)}),_N_E=a.O()}])