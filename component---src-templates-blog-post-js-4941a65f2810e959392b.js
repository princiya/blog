(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{EYWl:function(e,t,n){"use strict";n("91GP");var a=n("c/e4"),r=n("q1tI"),i=n.n(r),l=n("TJpk"),o=n.n(l),c=n("Wbzz");function s(e){var t=e.meta,n=e.image,r=e.title,l=e.description,s=e.slug,u=e.lang,p=void 0===u?"en":u;return i.a.createElement(c.StaticQuery,{query:"3236765318",render:function(e){var a=e.site.siteMetadata,c=l||a.description,u=n?a.siteUrl+"/"+n:null,m=""+a.siteUrl+s;return i.a.createElement(o.a,Object.assign({htmlAttributes:{lang:p}},r?{titleTemplate:"%s — "+a.title,title:r}:{title:a.title+" — A blog by Princiya Sequeira"},{meta:[{name:"description",content:c},{property:"og:url",content:m},{property:"og:title",content:r||a.title},{property:"og:description",content:c},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:a.social.twitter},{name:"twitter:title",content:r||a.title},{name:"twitter:description",content:c}].concat(u?[{property:"og:image",content:u},{name:"twitter:image",content:u}]:[]).concat(t)}))},data:a})}s.defaultProps={meta:[],title:"",slug:""},t.a=s},JLKy:function(e,t,n){"use strict";n("91GP");var a=n("q1tI"),r=n.n(a);t.a=function(e){var t=e.children,n=e.style,a=void 0===n?{}:n;return r.a.createElement("p",{style:Object.assign({fontSize:"0.9em",border:"1px solid var(--hr)",borderRadius:"0.75em",padding:"0.75em",background:"var(--inlineCode-bg)",wordBreak:"keep-all"},a)},t)}},L6NH:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));n("XfO3"),n("HEwt"),n("a1Th"),n("Btvt"),n("rE2o"),n("ioFf"),n("rGqo"),n("bHtr");function a(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function r(e){var t=Math.round(e/5);return t>5?new Array(Math.round(t/Math.E)).fill("🍱").join("")+" "+e+" min read":new Array(t||1).fill("☕️").join("")+" "+e+" min read"}function i(e,t){var n;if("function"!=typeof Date.prototype.toLocaleDateString)return e;e=new Date(e);var r=[t,{day:"numeric",month:"long",year:"numeric"}].filter(Boolean);return(n=e).toLocaleDateString.apply(n,a(r))}},Nr18:function(e,t,n){"use strict";var a=n("S/j/"),r=n("d/Gc"),i=n("ne8i");e.exports=function(e){for(var t=a(this),n=i(t.length),l=arguments.length,o=r(l>1?arguments[1]:void 0,n),c=l>2?arguments[2]:void 0,s=void 0===c?n:r(c,n);s>o;)t[o++]=e;return t}},ODHz:function(e,t,n){e.exports=n.p+"static/profile-pic-839b4b350f22ac240dd20efc9cf8af01.jpeg"},SbOt:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("ODHz"),l=n.n(i),o=n("p3AD");var c=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return r.a.createElement("div",{style:{display:"flex",marginBottom:Object(o.a)(2)}},r.a.createElement("img",{src:l.a,alt:"Princiya Sequeira",style:{marginRight:Object(o.a)(.5),marginBottom:0,width:Object(o.a)(2),backgroundSize:"contain"}}),r.a.createElement("p",{style:{maxWidth:310}},"Personal blog by"," ",r.a.createElement("a",{href:"https://twitter.com/princi_ya"},"Princiya Sequeira"),"."))},a}(r.a.Component);t.a=c},bHtr:function(e,t,n){var a=n("XKFU");a(a.P,"Array",{fill:n("Nr18")}),n("nGyu")("fill")},"c/e4":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"P`s Blog","author":"Princiya Sequeira","description":"Personal blog by Princiya Sequeira","siteUrl":"http://princiya.com/blog","social":{"twitter":"@princi_ya"}}}}}')},k7Sn:function(e,t){t.supportedLanguages={en:"English",ru:"Русский",tr:"Türkçe",es:"Español",ko:"한국어",sv:"Svenska",it:"Italiano",id:"Bahasa Indonesia","pt-br":"Português do Brasil",pl:"Polski","zh-hant":"繁體中文","zh-hans":"简体中文",ja:"日本語",fr:"Français",he:"עברית",hu:"Magyar",vi:"Tiếng Việt",th:"ไทย",my:"မြန်မာဘာသာ",sk:"Slovenčina",te:"తెలుగు",uk:"Українська",bg:"Български",cs:"Čeština",de:"Deutsch",nl:"Nederlands",nb:"Norsk",fa:"فارسی",ar:"العربية",sr:"srpski"}},yZlL:function(e,t,n){"use strict";n.r(t);n("91GP"),n("Vd3H"),n("Oyvg"),n("pIFo");var a=n("q1tI"),r=n.n(a),i=n("Wbzz"),l=n("mwIZ"),o=n.n(l),c=(n("vPK/"),n("SbOt")),s=n("7oih"),u=n("EYWl");n("MvKu");r.a.Component;var p=n("JLKy"),m=n("L6NH"),d=n("p3AD"),f=(n("SRfc"),n("k7Sn")),g={"https://reactjs.org":{"pt-br":"https://pt-br.reactjs.org"}},b=function(e){return f.supportedLanguages[e].replace(/ /g," ")};function h(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"pageQuery",(function(){return k}));var y='system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",\n    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",\n    "Droid Sans", "Helvetica Neue", sans-serif',E=function(e){function t(){return e.apply(this,arguments)||this}return h(t,e),t.prototype.render=function(){var e=this.props,t=e.translations,n=e.lang,a=e.languageLink,l=e.editUrl,o=t.filter((function(e){return"ru"!==e})),c=-1!==t.indexOf("ru");return r.a.createElement("div",{className:"translations"},r.a.createElement(p.a,{style:{fontFamily:y}},t.length>0&&r.a.createElement("span",null,c&&r.a.createElement("span",null,"Originally written in:"," ","en"===n?r.a.createElement("b",null,b("en")):r.a.createElement(i.Link,{to:a("en")},"English")," • ","ru"===n?r.a.createElement("b",null,"Русский (авторский перевод)"):r.a.createElement(i.Link,{to:a("ru")},"Русский (авторский перевод)"),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("span",null,"Translated by readers into: "),o.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:e},e===n?r.a.createElement("b",null,b(e)):r.a.createElement(i.Link,{to:a(e)},b(e)),t===o.length-1?"":" • ")}))),"en"!==n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("br",null),"ru"!==n&&r.a.createElement(r.a.Fragment,null,r.a.createElement(i.Link,{to:a("en")},"Read the original")," • ",r.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer"},"Improve this translation")," • "),r.a.createElement(i.Link,{to:"/"+n},"View all translated posts")," ")))},t}(r.a.Component),v=function(e){function t(){return e.apply(this,arguments)||this}return h(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=o()(this.props,"data.site.siteMetadata.title"),a=this.props.pageContext,l=a.previous,p=a.next,h=a.slug,v=a.translations,k=a.translatedLinks,w=e.fields.langKey,S=e.html;S=function(e,t){var n=e.match(/https?:\/\/(www)?[^\/\s)"?]+/gm);return n&&f.supportedLanguages[t]?(n.forEach((function(n){g[n]&&g[n][t]&&(e=e.replace(n,g[n][t]))})),e):e}(S,w),k.forEach((function(e){var t="/"+w+e;S=S.replace(new RegExp('"'+e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+'"',"g"),'"'+t+'"')})),(v=v.slice()).sort((function(e,t){return b(e)<b(t)?-1:1})),function(e){switch(e){case"ru":case"bg":n.e(0).then(n.t.bind(null,"EsZP",7)),n.e(0).then(n.t.bind(null,"s85H",7));break;case"uk":n.e(0).then(n.t.bind(null,"EsZP",7)),n.e(0).then(n.t.bind(null,"s85H",7)),n.e(0).then(n.t.bind(null,"Mq6Z",7)),n.e(0).then(n.t.bind(null,"e/YJ",7));break;case"cs":case"da":case"de":case"es":case"fi":case"fr":case"he":case"hu":case"it":case"nl":case"no":case"pl":case"pt-br":case"sk":case"sr":case"sq":case"sv":case"tr":n.e(0).then(n.t.bind(null,"Mq6Z",7)),n.e(0).then(n.t.bind(null,"e/YJ",7));break;case"vi":n.e(0).then(n.t.bind(null,"Vjog",7)),n.e(0).then(n.t.bind(null,"Pf5Y",7));break;case"fa":n.e(0).then(n.t.bind(null,"BiVN",7));break;case"ar":n.e(0).then(n.t.bind(null,"xpFW",7))}}(w);var j=function(e,t){var n=e.replace(t+"/","");return function(e){return"en"===e?n:""+e+n}}(h,w),O=j("en"),L="https://github.com/princiya/blog/edit/master/src/pages/"+O.slice(1,O.length-1)+"/index"+("en"===w?"":"."+w)+".md",x="https://twitter.com/search?q="+encodeURIComponent("http://princiya.com/blog"+O);return r.a.createElement(s.a,{location:this.props.location,title:t},r.a.createElement(u.a,{lang:w,title:e.frontmatter.title,description:e.frontmatter.spoiler,slug:e.fields.slug}),r.a.createElement("main",null,r.a.createElement("article",null,r.a.createElement("header",null,r.a.createElement("h1",{style:{color:"var(--textTitle)"}},e.frontmatter.title),r.a.createElement("p",{style:Object.assign({},Object(d.b)(-.2),{display:"block",marginBottom:Object(d.a)(1),marginTop:Object(d.a)(-.8)})},Object(m.a)(e.frontmatter.date,w)," • "+Object(m.b)(e.timeToRead)),v.length>0&&r.a.createElement(E,{translations:v,editUrl:L,languageLink:j,lang:w})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:S}}),r.a.createElement("footer",null,r.a.createElement("p",null,r.a.createElement("a",{href:x,target:"_blank",rel:"noopener noreferrer"},"Discuss on Twitter")," • ",r.a.createElement("a",{href:L,target:"_blank",rel:"noopener noreferrer"},"Edit on GitHub"))))),r.a.createElement("aside",null,r.a.createElement("div",{style:{margin:"90px 0 40px 0",fontFamily:y}}),r.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:Object(d.a)(.25)}},r.a.createElement(i.Link,{style:{boxShadow:"none",textDecoration:"none",color:"var(--pink)"},to:"/"},"P's Blog")),r.a.createElement(c.a,null),r.a.createElement("nav",null,r.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.a.createElement("li",null,l&&r.a.createElement(i.Link,{to:l.fields.slug,rel:"prev",style:{marginRight:20}},"← ",l.frontmatter.title)),r.a.createElement("li",null,p&&r.a.createElement(i.Link,{to:p.fields.slug,rel:"next"},p.frontmatter.title," →"))))))},t}(r.a.Component),k=(t.default=v,"973609681")}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-4941a65f2810e959392b.js.map