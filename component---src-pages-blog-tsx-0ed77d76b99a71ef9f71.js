(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"1GPU":function(e,t,r){"use strict";r.r(t),r.d(t,"pageQuery",(function(){return O}));var n=r("q1tI"),a=r.n(n),o=(r("XfO3"),r("HEwt"),r("f3/d"),r("a1Th"),r("rE2o"),r("ioFf"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("DYRK")),i=r("ab40"),l=r("dUGX"),c=r("MfX3"),u=r("dzo+"),f=r("szUt"),s=r("foaU"),m=r("2vEl"),p=r("WKca"),y=r("6o60"),b={};function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(c){a=!0,o=c}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function g(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var h=Object(o.createUseStyles)(b),E=function(e){e.children;var t,r,o,b,v,E=e.posts,O=g(e,["children","posts"]),w=(h(),d((t="blogPage",r=0,o=Object(n.useState)((function(){var e;try{e=JSON.parse(window.localStorage.getItem(t)||String(r))}catch(n){e=r}return e})),b=o[0],v=o[1],Object(n.useEffect)((function(){window.localStorage.setItem(t,JSON.stringify(b))}),[b,t]),[b,v]),2)),S=w[0],j=w[1],k=Object(n.useMemo)((function(){for(var e=E.filter((function(e){return!!e.frontmatter.pinned})).concat(E.filter((function(e){return!e.frontmatter.pinned}))),t=[];e.length;)t.push(e.splice(0,10));return t}),[E]);return a.a.createElement(i.a,null,a.a.createElement(y.a,O),a.a.createElement(u.a,null,a.a.createElement(f.a,{items:[{name:"Blog",url:{href:"/blog"}}]})),a.a.createElement(l.a,null,a.a.createElement(c.a,null,a.a.createElement(s.a,null,k[S].map((function(e){return a.a.createElement(m.a,{post:e,key:e.fields.slug})})),a.a.createElement(p.a,{prev:k[S-1]&&a.a.createElement("a",{onClick:function(){return j(S-1)},rel:"prev",className:"pagination-previous",title:"Daha yeni içerikler"},"← Daha yeni"),next:k[S+1]&&a.a.createElement("a",{onClick:function(){return j(S+1)},rel:"next",className:"pagination-next",title:"Daha eski içerikler"},"Daha eski →")})))))},O=(t.default=function(e){var t=e.data,r=(e.location,t.site.siteMetadata.description),n=t.allMarkdownRemark.edges;return a.a.createElement(E,{title:r,posts:n.map((function(e){return e.node}))})},"1162115288")},WKca:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n);t.a=function(e){var t=e.prev,r=e.next;return a.a.createElement("nav",{className:"pagination",role:"navigation","aria-label":"pagination"},a.a.createElement("span",null,t&&t),a.a.createElement("span",null,r&&r))}},szUt:function(e,t,r){"use strict";r("a1Th"),r("Btvt"),r("XfO3"),r("HEwt"),r("rGqo"),r("rE2o"),r("ioFf"),r("f3/d");var n=r("q1tI"),a=r.n(n),o=r("Wbzz"),i=r("iuhU");function l(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.a=function(e){var t=e.items,r=[{name:"Anasayfa",url:{href:"/"}}].concat(l(t));return a.a.createElement("nav",{className:"breadcrumb has-arrow-separator","aria-label":"breadcrumbs"},a.a.createElement("ul",null,r.map((function(e,t){var n=e.name,l=e.url;return a.a.createElement("li",{key:"breadcrumb-item-".concat(t),className:Object(i.a)({"is-active":t===r.length-1})},a.a.createElement(o.Link,{to:l.href},n))}))))}}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-0ed77d76b99a71ef9f71.js.map