/*!
 * vue-material v1.0.0-beta-10.2
 * Made with <3 by marcosmoura 2018
 * Released under the MIT License.
 */
!(function(e,t){var n,o;if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],t);else{n=t("object"==typeof exports?require("vue"):e.Vue);for(o in n)("object"==typeof exports?exports:e)[o]=n[o]}})("undefined"!=typeof self?self:this,(function(e){return (function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=536)})({0:function(e,t){e.exports=function(e,t,n,o,r,i){var u,s,a,l,c,d=e=e||{},f=typeof e.default;return"object"!==f&&"function"!==f||(u=e,d=e.default),s="function"==typeof d?d.options:d,t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns,s._compiled=!0),n&&(s.functional=!0),r&&(s._scopeId=r),i?(a=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},s._ssrRegister=a):o&&(a=o),a&&(l=s.functional,c=l?s.render:s.beforeCreate,l?(s._injectStyles=a,s.render=function(e,t){return a.call(t),c(e,t)}):s.beforeCreate=c?[].concat(c,a):[a]),{esModule:u,exports:d,options:s}}},123:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r,i,u,s,a;Object.defineProperty(t,"__esModule",{value:!0}),r=Object.assign||function(e){var t,n,o;for(t=1;t<arguments.length;t++){n=arguments[t];for(o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=n(262),o(i),u=n(263),o(u),s=n(8),a=o(s),t.default={name:"MdAutocomplete",props:{value:{type:null,required:!0},autocomplete:{type:[String,Boolean],default:!1},mdDense:Boolean,mdLayout:r({type:String,default:"floating"},(0,a.default)("md-layout",["floating","box"])),mdOpenOnFocus:{type:Boolean,default:!0},mdFuzzySearch:{type:Boolean,default:!0},mdOptions:{type:[Array,Promise],required:!0},mdInputName:String,mdInputId:String,mdInputMaxlength:[String,Number],mdInputPlaceholder:[String,Number]},data:function(){return{searchTerm:this.value,showMenu:!1,triggerPopover:!1,isPromisePending:!1,ignoreNextInput:!1}},computed:{isBoxLayout:function(){return"box"===this.mdLayout},fieldClasses:function(){if(this.isBoxLayout)return"md-autocomplete-box"},contentClasses:function(){var e="";return this.isBoxLayout&&(e+="md-autocomplete-box-content "),this.hasItems||(e+="no-items"),e},hasItems:function(){return this.mdOptions.length>0},hasScopedEmptySlot:function(){return this.$scopedSlots["md-autocomplete-empty"]}},watch:{value:function(e){this.searchTerm=e,this.$refs.menuContent&&this.$refs.menuContent.setInitialHighlightIndex()},mdOptions:function(e){this.fixPopperBug(e)}},methods:{listItemHover:function(e){this.$refs.menuContent.setHighlightIndex(e)},openOnFocus:function(){this.mdOpenOnFocus&&this.showOptions()},fixPopperBug:function(e){var t=this;this.showMenu&&e.length>0&&this.$nextTick((function(){t.$refs.menuContent.$el.style?"none"==t.$refs.menuContent.$el.style.display&&(t.$refs.menuContent.$el.style.display="flex"):t.$nextTick((function(){t.fixPopperBug(e)}))}))},onInput:function(e){this.$emit("input",e),this.ignoreNextInput||this.showOptions(),"inputevent"!==(""+this.searchTerm.constructor).match(/function (\w*)/)[1].toLowerCase()&&this.$emit("md-changed",this.searchTerm),this.ignoreNextInput=!1},onBlur:function(e){var t=this;this.hideOptions(),this.$nextTick((function(){t.$emit("blur",e)}))},showOptions:function(){var e=this;if(this.showMenu)return!1;this.showMenu=!0,this.$nextTick((function(){e.$emit("md-opened")}))},hideOptions:function(){var e=this;this.$nextTick((function(){e.showMenu=!1,e.$emit("md-closed")}))},selectItem:function(e,t){this.ignoreNextInput=!0,this.searchTerm=e,this.$emit("input",e),this.$emit("md-selected",e),this.hideOptions()}}}},2:function(t,n){t.exports=e},259:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r,i,u,s;Object.defineProperty(t,"__esModule",{value:!0}),r=n(3),i=o(r),u=n(260),s=o(u),t.default=function(e){(0,i.default)(e),e.component(s.default.name,s.default)}},260:function(e,t,n){"use strict";function o(e){n(261)}var r,i,u,s,a,l,c,d,f,m;Object.defineProperty(t,"__esModule",{value:!0}),r=n(123),i=n.n(r);for(u in r)"default"!==u&&(function(e){n.d(t,e,(function(){return r[e]}))})(u);s=n(264),a=n(0),l=!1,c=o,d=null,f=null,m=a(i.a,s.a,l,c,d,f),t.default=m.exports},261:function(e,t){},262:function(e,t,n){"use strict";function o(e,t){var n,o,r,i=t.length,u=e.length;if(u>i)return!1;if(u===i)return e===t;e:for(n=0,o=0;n<u;n++){for(r=e.charCodeAt(n);o<i;)if(t.charCodeAt(o++)===r)continue e;return!1}return!0}e.exports=o},263:function(e,t){function n(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}e.exports=n},264:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("md-field",{staticClass:"md-autocomplete",class:e.fieldClasses,attrs:{"md-clearable":"","md-inline":e.isBoxLayout}},[n("md-menu",{attrs:{"md-direction":"bottom-start","md-dense":e.mdDense,"md-align-trigger":"","md-full-width":"","md-active":e.showMenu},on:{"update:mdActive":function(t){e.showMenu=t}}},[n("md-input",e._b({attrs:{id:e.mdInputId,name:e.mdInputName,maxlength:e.mdInputMaxlength,placeholder:e.mdInputPlaceholder,autocomplete:e.autocomplete},on:{focus:function(t){return t.stopPropagation(),e.openOnFocus(t)},blur:e.onBlur,input:e.onInput,click:function(t){return t.stopPropagation(),t.preventDefault(),e.openOnFocus(t)}},model:{value:e.searchTerm,callback:function(t){e.searchTerm=t},expression:"searchTerm"}},"md-input",e.$attrs,!1)),e._v(" "),n("md-menu-content",{ref:"menuContent",class:e.contentClasses},[e.hasItems?n("div",{staticClass:"md-autocomplete-items"},e._l(e.mdOptions,(function(t,o){return n("md-menu-item",{key:o,on:{click:function(n){e.selectItem(t,n)},mouseover:function(t){e.listItemHover(o)},mousemove:function(t){e.listItemHover(o)}}},[e.$scopedSlots["md-autocomplete-item"]?e._t("md-autocomplete-item",null,{item:t,term:e.searchTerm}):[e._v(e._s(t))]],2)}))):e._e()])],1),e._v(" "),e._t("default")],2)},r=[],i={render:o,staticRenderFns:r};t.a=i},3:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r,i,u,s,a;Object.defineProperty(t,"__esModule",{value:!0}),n(7),r=n(5),i=o(r),u=n(4),s=o(u),a=function(){var e=new i.default({ripple:!0,theming:{},locale:{startYear:1900,endYear:2099,dateFormat:"YYYY-MM-DD",days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shorterDays:["S","M","T","W","T","F","S"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],shorterMonths:["J","F","M","A","M","Ju","Ju","A","Se","O","N","D"],firstDayOfAWeek:0},router:{linkActiveClass:"router-link-active"}});return Object.defineProperties(e.theming,{metaColors:{get:function(){return s.default.metaColors},set:function(e){s.default.metaColors=e}},theme:{get:function(){return s.default.theme},set:function(e){s.default.theme=e}},enabled:{get:function(){return s.default.enabled},set:function(e){s.default.enabled=e}}}),e},t.default=function(e){e.material||(e.material=a(),e.prototype.$material=e.material)}},4:function(e,t,n){"use strict";var o,r,i,u,s;Object.defineProperty(t,"__esModule",{value:!0}),o=n(2),r=(function(e){return e&&e.__esModule?e:{default:e}})(o),i=null,u=null,s=null,t.default=new r.default({data:function(){return{prefix:"md-theme-",theme:"default",enabled:!0,metaColors:!1}},computed:{themeTarget:function(){return!this.$isServer&&document.documentElement},fullThemeName:function(){return this.getThemeName()}},watch:{enabled:{immediate:!0,handler:function(){var e=this.fullThemeName,t=this.themeTarget,n=this.enabled;t&&(n?(t.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)):(t.classList.remove(e),this.metaColors&&this.setHtmlMetaColors()))}},theme:function(e,t){var n=this.getThemeName,o=this.themeTarget;e=n(e),o.classList.remove(n(t)),o.classList.add(e),this.metaColors&&this.setHtmlMetaColors(e)},metaColors:function(e){e?this.setHtmlMetaColors(this.fullThemeName):this.setHtmlMetaColors()}},methods:{getAncestorTheme:function(e){var t,n=this;return e?(t=e.mdTheme,(function e(o){if(o){var r=o.mdTheme,i=o.$parent;return r&&r!==t?r:e(i)}return n.theme})(e.$parent)):null},getThemeName:function(e){var t=e||this.theme;return this.prefix+t},setMicrosoftColors:function(e){i&&i.setAttribute("content",e)},setThemeColors:function(e){u&&u.setAttribute("content",e)},setMaskColors:function(e){s&&s.setAttribute("color",e)},setHtmlMetaColors:function(e){var t,n="#fff";e&&(t=window.getComputedStyle(document.documentElement),n=t.getPropertyValue("--"+e+"-primary")),n&&(this.setMicrosoftColors(n),this.setThemeColors(n),this.setMaskColors(n))}},mounted:function(){var e=this;i=document.querySelector('[name="msapplication-TileColor"]'),u=document.querySelector('[name="theme-color"]'),s=document.querySelector('[rel="mask-icon"]'),this.enabled&&this.metaColors&&window.addEventListener("load",(function(){e.setHtmlMetaColors(e.fullThemeName)}))}})},5:function(e,t,n){"use strict";var o,r;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={};return r.default.util.defineReactive(t,"reactive",e),t.reactive},o=n(2),r=(function(e){return e&&e.__esModule?e:{default:e}})(o)},536:function(e,t,n){e.exports=n(259)},7:function(e,t){},8:function(e,t,n){"use strict";var o,r;Object.defineProperty(t,"__esModule",{value:!0}),o=n(2),r=(function(e){return e&&e.__esModule?e:{default:e}})(o),t.default=function(e,t){return{validator:function(n){return!!t.includes(n)||(r.default.util.warn("The "+e+" prop is invalid. Given value: "+n+". Available options: "+t.join(", ")+".",void 0),!1)}}}}})}));