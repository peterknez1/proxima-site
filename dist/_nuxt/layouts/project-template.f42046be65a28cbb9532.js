webpackJsonp([2],{"+kFG":function(t,a,e){"use strict";var i=e("d343"),o=e("82Jt"),n=!1;var s=function(t){n||e("y8u1")},r=e("VU/8")(i.a,o.a,!1,s,"data-v-0c815337",null);r.options.__file="components/CookieNotice.vue",a.a=r.exports},"3VXi":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{staticClass:"header",class:t.color},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"four columns"},[e("div",{staticClass:"logo"},[e("nuxt-link",{attrs:{to:t.localePath("index")}},["white"===t.color?e("img",{attrs:{src:"/images/white_proxima.svg",alt:"Proxima logo"}}):e("img",{attrs:{src:"/images/proxima-logo.svg",alt:"Proxima logo"}})])],1)]),e("div",{staticClass:"eight columns"},[e("nav",{staticClass:"navigation"},[e("ul",{staticClass:"nav-wrapper"},["white"!==t.color?e("li",{staticClass:"nav-item"},[e("nuxt-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#employment",expression:"'#employment'"}],staticClass:"nav-link",attrs:{to:t.localePath({name:"employment-employment"})}},[t._v("\n                "+t._s(t.$t("links.job"))+"\n              ")])],1):t._e(),"white"!==t.color?e("li",{staticClass:"nav-item"},[e("nuxt-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#portfolio",expression:"'#portfolio'"}],staticClass:"nav-link",attrs:{to:t.localePath({name:"index",hash:"#portfolio"})}},[t._v("\n                "+t._s(t.$t("links.projects"))+"\n              ")])],1):t._e(),"white"!==t.color?e("li",{staticClass:"nav-item"},[e("nuxt-link",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#contact",expression:"'#contact'"}],staticClass:"nav-link",attrs:{to:t.localePath({name:"index",hash:"#contact"})}},[t._v("\n                "+t._s(t.$t("links.contact"))+"\n              ")])],1):t._e(),"white"===t.color?e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",attrs:{to:t.localePath("index")}},[e("i",{staticClass:"nc-icon nc-small-left",staticStyle:{"font-size":"16px","vertical-align":"sub"}}),t._v("\n                "+t._s(t.$t("links.projects"))+"\n              ")])],1):t._e(),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"tel:"+t.headerData.tel}},[t._v(t._s(t.headerData.tel))])]),e("li",{staticClass:"nav-item-mobile"},[e("a",{staticClass:"nav-link",attrs:{href:"tel:"+t.headerData.tel}},[e("i",{staticClass:"nc-icon nc-phone-2"})])])])])])])])])};i._withStripped=!0;var o={render:i,staticRenderFns:[]};a.a=o},"7boU":function(t,a,e){"use strict";a.a={name:"the-footer",data:function(){return{footerData:{},locale:"en"}},created:function(){this.setDataFromLocale()},methods:{setDataFromLocale:function(){this.locale=this.$i18n.locale,this.footerData=this.$i18n.messages[this.locale].footer}}}},"82Jt":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.$store.state.cookieAccepted?t._e():e("div",{staticClass:"cookie-notice"},[e("div",{staticClass:"cookie-inner"},[t._v("\n    "+t._s(t.$t("cookieNotice.text"))+"\n  ")]),e("div",{staticClass:"cookie-exit",on:{click:function(a){return t.closeCookie()}}},[t._v("x")])])};i._withStripped=!0;var o={render:i,staticRenderFns:[]};a.a=o},AKt4:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e("Qw1h"),o=e("rZ36"),n=!1;var s=function(t){n||e("EAku")},r=e("VU/8")(i.a,o.a,!1,s,null,null);r.options.__file="layouts/project-template.vue",a.default=r.exports},EAku:function(t,a,e){var i=e("R+r8");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("13562c25",i,!1,{sourceMap:!1})},EEjL:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,"#footer[data-v-50f6c8a1]{background-color:#000;color:#d8d8d8;padding-top:38px}#footer address[data-v-50f6c8a1]{font-style:normal}#footer .desktop-brake[data-v-50f6c8a1]{display:block}#footer h5[data-v-50f6c8a1]{font-size:14px;font-weight:700;line-height:20px;text-transform:uppercase;margin-bottom:5px}#footer a[data-v-50f6c8a1]{color:#d8d8d8}#footer a.social[data-v-50f6c8a1]{text-decoration:none;padding:5px;color:#272727;margin-top:5px;display:inline-block;font-size:20px;-webkit-transition:color .2s;transition:color .2s}#footer a.social[data-v-50f6c8a1]:hover{color:#d8d8d8}@media (max-width:550px){#footer .column[data-v-50f6c8a1]{margin-bottom:15px}}.copyright[data-v-50f6c8a1]{padding:6px;color:#d8d8d8;font-size:12px;line-height:15px;text-align:center;background-color:#191919;margin-top:20px}.contact-text[data-v-50f6c8a1]{width:60px;position:relative;display:inline-block}",""])},KuAL:function(t,a,e){"use strict";a.a={name:"the-header",props:["color"],data:function(){return{headerData:{},locale:"en"}},created:function(){this.setDataFromLocale()},methods:{setDataFromLocale:function(){this.locale=this.$i18n.locale,this.headerData=this.$i18n.messages[this.locale].links}}}},Qw1h:function(t,a,e){"use strict";var i=e("Xkjz"),o=e("ii2E"),n=e("+kFG");a.a={components:{CookieNotice:n.a,TheHeader:i.a,TheFooter:o.a}}},"R+r8":function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,"",""])},UNTq:function(t,a,e){var i=e("e5WP");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("635a1bce",i,!1,{sourceMap:!1})},Xkjz:function(t,a,e){"use strict";var i=e("KuAL"),o=e("3VXi"),n=!1;var s=function(t){n||e("UNTq")},r=e("VU/8")(i.a,o.a,!1,s,"data-v-72292c93",null);r.options.__file="components/TheHeader.vue",a.a=r.exports},d343:function(t,a,e){"use strict";a.a={name:"cookie-notice",data:function(){return{noticeVisible:!0}},methods:{closeCookie:function(){this.$store.commit("acceptCookie")}}}},e5WP:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,'.header .container[data-v-72292c93]{position:absolute;left:0;right:0;padding:35px 0;z-index:10}@media screen and (max-width:399px){.header .container[data-v-72292c93]{padding:35px 20px}}.navigation .nav-wrapper[data-v-72292c93]{text-align:right;margin-bottom:0}.navigation .nav-wrapper .nav-item[data-v-72292c93]{display:inline-block;margin-bottom:0;padding:0 16px}.navigation .nav-wrapper .nav-item[data-v-72292c93]:last-child{padding-right:0}.navigation .nav-wrapper .nav-item .nav-link[data-v-72292c93]{color:#000;font-size:13px;font-weight:300;letter-spacing:3px;text-align:center;text-decoration:none;text-transform:uppercase;position:relative}.white .navigation .nav-wrapper .nav-item .nav-link[data-v-72292c93]{color:#fff}.navigation .nav-wrapper .nav-item .nav-link[data-v-72292c93]:after{content:"";position:absolute;bottom:0;left:0;width:0;border-bottom:6px solid #2c6bf8;-webkit-transition:.4s;transition:.4s;z-index:-1}.navigation .nav-wrapper .nav-item .nav-link[data-v-72292c93]:hover:after{width:100%}@media (max-width:750px){.navigation .nav-wrapper .nav-item[data-v-72292c93]{display:none}}.navigation .nav-wrapper .nav-item-mobile[data-v-72292c93]{display:inline-block;margin-bottom:0;position:absolute;top:22px;right:32px;font-size:30px}.navigation .nav-wrapper .nav-item-mobile .nc-icon[data-v-72292c93]{color:#5b4be2}.white .navigation .nav-wrapper .nav-item-mobile .nc-icon[data-v-72292c93]{color:#fff}@media (max-width:550px){.navigation .nav-wrapper .nav-item-mobile[data-v-72292c93]{font-size:26px;top:26px}}@media (min-width:751px){.navigation .nav-wrapper .nav-item-mobile[data-v-72292c93]{display:none}}.logo[data-v-72292c93]{width:152px}.logo a[data-v-72292c93]{display:block}.logo a img[data-v-72292c93]{vertical-align:middle;width:100%}',""])},esoO:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,".cookie-notice[data-v-0c815337]{padding:10px;background-color:#000;position:absolute;bottom:0;color:#fff;margin:10px;right:0;width:300px;z-index:999;border:1px solid #444}.cookie-notice .cookie-exit[data-v-0c815337]{position:absolute;top:-8px;font-size:20px;right:0;padding:10px 15px;cursor:pointer}.cookie-notice .cookie-inner[data-v-0c815337]{margin-right:25px}",""])},ii2E:function(t,a,e){"use strict";var i=e("7boU"),o=e("ulwS"),n=!1;var s=function(t){n||e("wiWi")},r=e("VU/8")(i.a,o.a,!1,s,"data-v-50f6c8a1",null);r.options.__file="components/TheFooter.vue",a.a=r.exports},rZ36:function(t,a,e){"use strict";var i=function(){var t=this.$createElement,a=this._self._c||t;return a("section",[a("the-header",{attrs:{color:"white"}}),a("nuxt"),a("the-footer"),a("transition",{attrs:{name:"lol",mode:"out-in"}},[a("cookie-notice")],1)],1)};i._withStripped=!0;var o={render:i,staticRenderFns:[]};a.a=o},ulwS:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{attrs:{id:"footer",itemscope:"",itemtype:"http://schema.org/Organization"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[t._m(0),e("div",{staticClass:"one-third column"},[e("h5",[t._v(t._s(t.$t("footer.contactTitle")))]),t._m(1),t._m(2),t._m(3)]),e("div",{staticClass:"one-third column"},[e("h5",[t._v(t._s(t.$t("footer.languageTitle")))]),e("span",{staticClass:"desktop-brake"},[e("span",[e("nuxt-link",{attrs:{to:t.switchLocalePath("en")}},[t._v("English")]),t._v(" / "),e("nuxt-link",{attrs:{to:t.switchLocalePath("sl")}},[t._v("Slovenščina")])],1)])])])]),e("div",{staticClass:"copyright"},[e("span",[t._v(t._s(t.$t("footer.copyright")))])])])};i._withStripped=!0;var o={render:i,staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"one-third column"},[a("img",{attrs:{src:"/images/proxima-whitel-logo.svg",alt:"Proxima logo",itemprop:"image"}}),a("span",{staticClass:"desktop-brake"},[a("span",{attrs:{itemprop:"name"}},[this._v("NCOM d.o.o.")])]),a("address",{attrs:{itemprop:"address",itemscope:"",itemtype:"http://schema.org/PostalAddress"}},[a("span",{attrs:{itemprop:"streetAddress"}},[this._v("Bičevje 5")]),a("span",{staticClass:"desktop-brake"},[a("span",{attrs:{itemprop:"postalCode"}},[this._v("1000 ")]),a("span",{attrs:{itemprop:"addressLocality"}},[this._v("Ljubljana")])]),a("span",{staticClass:"desktop-brake"},[a("span",{attrs:{itemprop:"addressCountry"}},[this._v("Slovenia")]),this._v(", Europe\n          ")])]),a("span",{staticClass:"desktop-brake"},[a("span",[this._v("VAT ID: SI32789807")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"desktop-brake"},[a("span",{staticClass:"contact-text"},[this._v("TEL")]),a("span",{attrs:{itemprop:"telephone"}},[this._v("+386 40 855519")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"desktop-brake"},[a("span",{staticClass:"contact-text"},[this._v("EMAIL")]),a("span",{attrs:{itemprop:"email"}},[this._v("info@proxima.si")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",{staticClass:"desktop-brake"},[a("a",{staticClass:"social",attrs:{href:"https://www.facebook.com/PROXIMAinteractive?fref=ts",target:"_blank"}},[a("i",{staticClass:"nc-icon nc-logo-facebook"})]),a("a",{staticClass:"social",attrs:{href:"https://www.linkedin.com/company/proxima-interactive",target:"_blank"}},[a("i",{staticClass:"nc-icon nc-logo-linkedin"})])])}]};a.a=o},wiWi:function(t,a,e){var i=e("EEjL");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("a37f211e",i,!1,{sourceMap:!1})},y8u1:function(t,a,e){var i=e("esoO");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e("rjj0")("7e6e1a85",i,!1,{sourceMap:!1})}});