(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{EYWl:function(t,e,r){"use strict";r("91GP");var n=r("c/e4"),a=r("q1tI"),i=r.n(a),o=r("TJpk"),l=r.n(o),c=r("Wbzz");function s(t){var e=t.meta,r=t.image,a=t.title,o=t.description,s=t.slug,u=t.lang,p=void 0===u?"en":u;return i.a.createElement(c.StaticQuery,{query:"3236765318",render:function(t){var n=t.site.siteMetadata,c=o||n.description,u=r?n.siteUrl+"/"+r:null,m=""+n.siteUrl+s;return i.a.createElement(l.a,Object.assign({htmlAttributes:{lang:p}},a?{titleTemplate:"%s — "+n.title,title:a}:{title:n.title+" — A blog by Princiya Sequeira"},{meta:[{name:"description",content:c},{property:"og:url",content:m},{property:"og:title",content:a||n.title},{property:"og:description",content:c},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:n.social.twitter},{name:"twitter:title",content:a||n.title},{name:"twitter:description",content:c}].concat(u?[{property:"og:image",content:u},{name:"twitter:image",content:u}]:[]).concat(e)}))},data:n})}s.defaultProps={meta:[],title:"",slug:""},e.a=s},JLKy:function(t,e,r){"use strict";r("91GP");var n=r("q1tI"),a=r.n(n);e.a=function(t){var e=t.children,r=t.style,n=void 0===r?{}:r;return a.a.createElement("p",{style:Object.assign({fontSize:"0.9em",border:"1px solid var(--hr)",borderRadius:"0.75em",padding:"0.75em",background:"var(--inlineCode-bg)",wordBreak:"keep-all"},n)},e)}},JwsL:function(t,e,r){"use strict";var n=r("q1tI"),a=r.n(n),i=r("p3AD");e.a=function(t){var e=t.marginTop,r=void 0===e||e;return a.a.createElement("footer",{style:{marginTop:r?Object(i.a)(2.5):0,paddingTop:Object(i.a)(1)}},a.a.createElement("a",{href:"https://twitter.com/princi_ya",target:"_blank",rel:"noopener noreferrer"},"twitter")," ","•"," ",a.a.createElement("a",{href:"https://github.com/princiya",target:"_blank",rel:"noopener noreferrer"},"github")," ","•"," ",a.a.createElement("a",{href:"/blog/rss.xml",target:"_blank",rel:"noopener noreferrer"},"rss"))}},L6NH:function(t,e,r){"use strict";r.d(e,"b",(function(){return a})),r.d(e,"a",(function(){return i}));r("XfO3"),r("HEwt"),r("a1Th"),r("Btvt"),r("rE2o"),r("ioFf"),r("rGqo"),r("bHtr");function n(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(t){var e=Math.round(t/5);return e>5?new Array(Math.round(e/Math.E)).fill("🍱").join("")+" "+t+" min read":new Array(e||1).fill("☕️").join("")+" "+t+" min read"}function i(t,e){var r;if("function"!=typeof Date.prototype.toLocaleDateString)return t;t=new Date(t);var a=[e,{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(r=t).toLocaleDateString.apply(r,n(a))}},Nr18:function(t,e,r){"use strict";var n=r("S/j/"),a=r("d/Gc"),i=r("ne8i");t.exports=function(t){for(var e=n(this),r=i(e.length),o=arguments.length,l=a(o>1?arguments[1]:void 0,r),c=o>2?arguments[2]:void 0,s=void 0===c?r:a(c,r);s>l;)e[l++]=t;return e}},ODHz:function(t,e,r){t.exports=r.p+"static/profile-pic-839b4b350f22ac240dd20efc9cf8af01.jpeg"},SbOt:function(t,e,r){"use strict";var n=r("q1tI"),a=r.n(n),i=r("ODHz"),o=r.n(i),l=r("p3AD"),c=r("JwsL");var s=function(t){var e,r;function n(){return t.apply(this,arguments)||this}return r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,n.prototype.render=function(){return a.a.createElement("div",{style:{display:"flex",alignItems:"center",marginBottom:Object(l.a)(2)}},a.a.createElement("img",{src:o.a,alt:"Princiya Sequeira",style:{marginRight:Object(l.a)(.5),marginBottom:0,width:Object(l.a)(2),backgroundSize:"contain",borderRadius:"8px"}}),a.a.createElement("div",null,a.a.createElement("p",{style:{maxWidth:310,marginBottom:0}},"Personal blog by ",a.a.createElement("a",{href:"http://princiya.com"},"Princiya Sequeira"),"."),a.a.createElement(c.a,{marginTop:!1})))},n}(a.a.Component);e.a=s},TshS:function(t,e,r){"use strict";r.r(e),r.d(e,"pageQuery",(function(){return g}));var n=r("Wbzz"),a=r("L6NH"),i=r("SbOt"),o=r("JwsL"),l=r("7oih"),c=r("JLKy"),s=r("q1tI"),u=r.n(s),p=r("EYWl"),m=r("mwIZ"),d=r.n(m),f=r("p3AD");r("4+eR");var y=function(t){var e,r;function s(){return t.apply(this,arguments)||this}return r=t,(e=s).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,s.prototype.render=function(){var t=d()(this,"props.data.site.siteMetadata.title"),e=this.props.pageContext.langKey,r=d()(this,"props.data.allMarkdownRemark.edges");return u.a.createElement(l.a,{location:this.props.location,title:t},u.a.createElement(p.a,null),u.a.createElement("aside",null,u.a.createElement(i.a,null)),u.a.createElement("main",null,"en"!==e&&"ru"!==e&&u.a.createElement(c.a,null,"These articles have been"," ",u.a.createElement("a",{href:"https://github.com/princiya/blog#contributing-translations",target:"_blank",rel:"noopener noreferrer"},"translated by the community"),"."),u.a.createElement("div",{className:"blog-items"},r.map((function(t){var r=t.node,i=d()(r,"frontmatter.title")||r.fields.slug;return u.a.createElement("article",{key:r.fields.slug,className:"blog-item"},u.a.createElement("header",null,u.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",fontSize:Object(f.a)(1),marginBottom:Object(f.a)(.25)}},u.a.createElement(n.Link,{style:{boxShadow:"none"},to:r.fields.slug,rel:"bookmark"},i)),u.a.createElement("small",null,Object(a.a)(r.frontmatter.date,e)," • "+Object(a.b)(r.timeToRead))),u.a.createElement("p",{dangerouslySetInnerHTML:{__html:r.frontmatter.spoiler}}))})))),u.a.createElement(o.a,null))},s}(u.a.Component);e.default=y;var g="3710597169"},bHtr:function(t,e,r){var n=r("XKFU");n(n.P,"Array",{fill:r("Nr18")}),r("nGyu")("fill")},"c/e4":function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"P`s Blog","author":"Princiya Sequeira","description":"Personal blog by Princiya Sequeira","siteUrl":"http://princiya.com/blog","social":{"twitter":"@princi_ya"}}}}}')}}]);
//# sourceMappingURL=component---src-templates-blog-index-js-48e1eab5f8b05688c414.js.map