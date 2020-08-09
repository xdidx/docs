(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{202:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._m(1),a("p",[t._v("This component show a dialog on the top of any "),a("strong",[t._v("zircle-ui")]),t._v(" component when is invoked. Inside it you can only nest "),a("router-link",{attrs:{to:"/api/z-spot.html"}},[t._v("z-spot")]),t._v(" components. In further realeases this could be extended to another "),a("strong",[t._v("zircle-ui")]),t._v(" components.")],1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),a("table",[t._m(16),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("$emit('done') | This event is emitted in case the property")]),t._v("selfClose"),a("code",[t._v("is")]),t._v("true"),a("code",[t._v("and the progress slider has been completed. You can listen this event (")]),t._v(":done=yourMethod()`) to perfom some action. For example: "),a("router-link",{attrs:{to:"/tutorial/logs-view.html"}},[t._v("tutorial - logs view")])],1),a("td",{staticStyle:{"text-align":"left"}})])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"z-dialog"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#z-dialog","aria-hidden":"true"}},[this._v("#")]),this._v(" z-dialog")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description","aria-hidden":"true"}},[this._v("#")]),this._v(" Description")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("By default, "),e("code",[this._v("z-dialog")]),this._v(" will remains open until the user manually close it.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This is a "),e("code",[this._v("modal")]),this._v(" view.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"self-close-dialog"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#self-close-dialog","aria-hidden":"true"}},[this._v("#")]),this._v(" Self close dialog")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("However it is possible to add the property "),a("code",[t._v("selfClose")]),t._v(" and in this case the "),a("code",[t._v("z-dialog")]),t._v(" will be closed after 3 seconds when a circular "),a("code",[t._v("z-slider")]),t._v(" is completed and the "),a("code",[t._v("z-dialog")]),t._v(" event "),a("code",[t._v("done")]),t._v(" is [emitted]((https://vuejs.org/v2/api/#vm-emit).")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("z-dialog")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dialog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("self-close")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@done")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dialog = false"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("z-dialog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("In you view's Vue instance add "),a("code",[t._v("$data.dialog")]),t._v(" (or your prefered name) and set it to "),a("code",[t._v("false")]),t._v(". This way the "),a("code",[t._v("z-dialog")]),t._v(" is not rendered. When dialog is set "),a("code",[t._v("true")]),t._v(" the dialog will be rendered until the user closed it or self closed if it is enabled.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    dialog"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("z-dialog")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dialog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- default slot--\x3e")]),t._v("\n    proceed?\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("z-spot")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("button")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("slot")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("extension"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":angle")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v("45")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("size")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("small"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click.native")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("dialog = false"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      Close\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("z-spot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("z-dialog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"props"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#props","aria-hidden":"true"}},[this._v("#")]),this._v(" Props")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Prop")]),a("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),a("th",{staticStyle:{"text-align":"left"}},[t._v("Default value")]),a("th",{staticStyle:{"text-align":"left"}},[t._v("Required")]),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("selfClose")])]),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("No")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("When it is true an the component will self closed after a while.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"slots"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#slots","aria-hidden":"true"}},[this._v("#")]),this._v(" Slots")])},function(){var t=this.$createElement,e=this._self._c||t;return e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[this._v("Slot")]),e("th",{staticStyle:{"text-align":"left"}},[this._v("Description")])])]),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[this._v("default")])]),e("td",{staticStyle:{"text-align":"left"}},[this._v("Default Vue Slot. It is used to put any kind of content such as text, icons, etc.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[this._v("#")]),this._v(" Events")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[this._v("event")]),e("th",{staticStyle:{"text-align":"left"}},[this._v("Description")])])])}],!1,null,null,null);e.default=n.exports}}]);