(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{RXBc:function(t,e,n){"use strict";n.r(e);var a=n("q1tI"),r=n.n(a),o=n("Wbzz"),i=n("+oRm"),l=n("L6Je"),c=n("EH9Q"),p=n("TJpk"),s=n.n(p);function m(t){var e=t.description,n=t.lang,a=t.meta,o=t.title,i=c.data.site,l=e||i.siteMetadata.description;return r.a.createElement(s.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:o},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:l}].concat(a)})}m.defaultProps={lang:"en",meta:[],description:""};var d=m,u=n("p3AD");n.d(e,"pageQuery",(function(){return y}));var f=function(t){var e,n;function a(){return t.apply(this,arguments)||this}return n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,a.prototype.render=function(){var t=this.props.data,e=t.site.siteMetadata.title,n=t.allMarkdownRemark.edges;return r.a.createElement(l.a,{location:this.props.location,title:e},r.a.createElement(d,{title:"All posts"}),r.a.createElement(i.a,null),n.map((function(t){var e=t.node,n=e.frontmatter.title||e.fields.slug;return r.a.createElement("article",{key:e.fields.slug},r.a.createElement("header",null,r.a.createElement("h3",{style:{marginBottom:Object(u.a)(.25)}},r.a.createElement(o.Link,{style:{boxShadow:"none"},to:e.fields.slug},n)),r.a.createElement("small",null,e.frontmatter.date)),r.a.createElement("section",null,r.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt}})))})))},a}(r.a.Component),y=(e.default=f,"2785444898")}}]);
//# sourceMappingURL=component---src-pages-index-js-7b07878c478c765ca285.js.map