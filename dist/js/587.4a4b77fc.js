"use strict";(self["webpackChunkvue_2_crm"]=self["webpackChunkvue_2_crm"]||[]).push([[587],{587:function(e,t,i){i.r(t),i.d(t,{default:function(){return $}});var r=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"page-title"},[t("h3",[e._v(e._s(e._f("localize")("Categories")))])]),t("section",[e.loading?t("loader-component"):t("div",{staticClass:"row"},[t("create-component",{on:{created:e.addNewCategory}}),e.categories.length?t("edit-component",{key:e.categories.length+e.updateCount,attrs:{categories:e.categories},on:{updated:e.updateCategories}}):t("p",{staticClass:"center"},[e._v(" "+e._s(e._f("localize")("Message_There_are_no_categories_yet"))+" ")])],1)],1)])},n=[],a=(i(7658),function(){var e=this,t=e._self._c;return t("div",{staticClass:"col s12 m6"},[t("div",[t("div",{staticClass:"page-subtitle"},[t("h4",[e._v(e._s(e._f("localize")("Create")))])]),t("form",{on:{submit:function(t){return t.preventDefault(),e.submitHandler.apply(null,arguments)}}},[t("div",{staticClass:"input-field"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],class:{invalid:e.$v.title.$dirty&&!e.$v.title.required},attrs:{id:"name",type:"text"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}}),t("label",{attrs:{for:"name"}},[e._v(e._s(e._f("localize")("Title")))]),e.$v.title.$dirty&&!e.$v.title.required?t("span",{staticClass:"helper-text invalid"},[e._v(e._s(e._f("localize")("Message_Validation_Category_Name")))]):e._e()]),t("div",{staticClass:"input-field"},[t("input",{directives:[{name:"model",rawName:"v-model.number",value:e.limit,expression:"limit",modifiers:{number:!0}}],class:{invalid:e.$v.limit.$dirty&&!e.$v.limit.minValue},attrs:{id:"limit",type:"number"},domProps:{value:e.limit},on:{input:function(t){t.target.composing||(e.limit=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),t("label",{attrs:{for:"limit"}},[e._v(e._s(e._f("localize")("Limit")))]),e.$v.limit.$dirty&&!e.$v.limit.minValue?t("span",{staticClass:"helper-text invalid"},[e._v(e._s(e._f("localize")("Message_Validation_Minimum_Value"))+" "+e._s(e.$v.limit.$params.minValue.min))]):e._e()]),t("button",{staticClass:"btn waves-effect waves-light",attrs:{type:"submit"}},[e._v(" "+e._s(e._f("localize")("Create"))+" "),t("i",{staticClass:"material-icons right"},[e._v("send")])])])])])}),l=[],u=i(5795),o={name:"CreateComponent",data(){return{title:"",limit:100}},validations:{title:{required:u.C1},limit:{minValue:(0,u.uv)(100)}},mounted(){window.M.updateTextFields()},methods:{async submitHandler(){if(this.$v.$invalid)this.$v.$touch();else try{const e=await this.$store.dispatch("createCategory",{title:this.title,limit:this.limit});this.title="",this.limit=100,this.$v.$reset(),this.$message("Категория была создана"),this.$emit("created",e)}catch(e){console.log(e)}}}},s=o,f=i(1001),d=(0,f.Z)(s,a,l,!1,null,null,null),c=d.exports,v=function(){var e=this,t=e._self._c;return t("div",{staticClass:"col s12 m6 mt-2"},[t("div",[t("div",{staticClass:"page-subtitle"},[t("h4",[e._v(e._s(e._f("localize")("Edit")))])]),t("form",{on:{submit:function(t){return t.preventDefault(),e.submitHandler.apply(null,arguments)}}},[t("div",{staticClass:"input-field"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.current,expression:"current"}],ref:"select",on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.current=t.target.multiple?i:i[0]}}},e._l(e.categories,(function(i){return t("option",{key:i.id,domProps:{value:i.id}},[e._v(" "+e._s(i.title)+" ")])})),0),t("label",[e._v(e._s(e._f("localize")("Edit")))])]),t("div",{staticClass:"input-field"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],class:{invalid:e.$v.title.$dirty&&!e.$v.title.required},attrs:{id:"name",type:"text"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}}),t("label",{attrs:{for:"name"}},[e._v(e._s(e._f("localize")("Title")))]),e.$v.title.$dirty&&!e.$v.title.required?t("span",{staticClass:"helper-text invalid"},[e._v(e._s(e._f("localize")("Select_category")))]):e._e()]),t("div",{staticClass:"input-field"},[t("input",{directives:[{name:"model",rawName:"v-model.number",value:e.limit,expression:"limit",modifiers:{number:!0}}],class:{invalid:e.$v.limit.$dirty&&!e.$v.limit.minValue},attrs:{id:"limit",type:"number"},domProps:{value:e.limit},on:{input:function(t){t.target.composing||(e.limit=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),t("label",{attrs:{for:"limit"}},[e._v(e._s(e._f("localize")("Limit")))]),e.$v.limit.$dirty&&!e.$v.limit.minValue?t("span",{staticClass:"helper-text invalid"},[e._v(e._s(e._f("localize")("Message_Validation_Minimum_Value"))+" "+e._s(e.$v.limit.$params.minValue.min)+" ")]):e._e()]),t("button",{staticClass:"btn waves-effect waves-light",attrs:{type:"submit"}},[e._v(" "+e._s(e._f("localize")("Update"))+" "),t("i",{staticClass:"material-icons right"},[e._v("send")])])])])])},m=[],p={name:"EditComponent",props:{categories:{type:Array,required:!0}},data(){return{select:null,title:"",limit:100,current:null}},validations:{title:{required:u.C1},limit:{minValue:(0,u.uv)(100)}},watch:{current(e){const{title:t,limit:i}=this.categories.find((t=>t.id===e));this.title=t,this.limit=i}},created(){const{id:e,title:t,limit:i}=this.categories[0];this.current=e,this.title=t,this.limit=i},methods:{async submitHandler(){if(this.$v.$invalid)this.$v.$touch();else try{const e={id:this.current,title:this.title,limit:this.limit};await this.$store.dispatch("updateCategory",e),this.$message("Сатегория успешно обновлена"),this.$emit("updated",e)}catch(e){console.log(e)}}},mounted(){window.M.updateTextFields(),this.select=window.M.FormSelect.init(this.$refs.select)},destroyed(){this.select&&this.select.destroy&&this.select.destroy()}},y=p,_=(0,f.Z)(y,v,m,!1,null,null,null),h=_.exports,g={name:"CategoriesView",metaInfo(){return{title:this.$title("Menu_Categories")}},data(){return{categories:[],loading:!0,updateCount:0}},components:{CreateComponent:c,EditComponent:h},async mounted(){this.categories=await this.$store.dispatch("fetchCategories"),console.log(this.categories),this.loading=!1},methods:{addNewCategory(e){this.categories.push(e)},updateCategories(e){const t=this.categories.findIndex((t=>t.id===e.id));this.categories[t].title=e.title,this.categories[t].limit=e.limit,this.updateCount++}}},b=g,x=(0,f.Z)(b,r,n,!1,null,null,null),$=x.exports},4689:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=i(4111),n=(0,r.regex)("alpha",/^[a-zA-Z]*$/);t["default"]=n},3331:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=i(4111),n=(0,r.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t["default"]=n},7673:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=i(4111),n=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(0,r.withParams)({type:"and"},(function(){for(var e=this,i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return t.length>0&&t.reduce((function(t,i){return t&&i.apply(e,r)}),!0)}))};t["default"]=n},450:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=i(4111),n=function(e,t){return(0,r.withParams)({type:"between",min:e,max:t},(function(i){return!(0,r.req)(i)||(!/\s/.test(i)||i instanceof Date)&&+e<=+i&&+t>=+i}))};t["default"]=n},4111:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t.req=t.regex=t.ref=t.len=void 0,Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return r.default}});var r=n(i(8751));function n(e){return e&&e.__esModule?e:{default:e}}function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}var l=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===a(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=l;var u=function(e){return Array.isArray(e)?e.length:"object"===a(e)?Object.keys(e).length:String(e).length};t.len=u;var o=function(e,t,i){return"function"===typeof e?e.call(t,i):i[e]};t.ref=o;var s=function(e,t){return(0,r.default)({type:e},(function(e){return!l(e)||t.test(e)}))};t.regex=s},3107:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=i(4111),n=(0,r.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t["default"]=n},184:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=i(4111),n=/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i,a=(0,r.regex)("email",n);t["default"]=a},5795:function(e,t,i){function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"Do",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Ei",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"uv",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"C1",{enumerable:!0,get:function(){return v.default}});var n=O(i(4689)),a=O(i(3331)),l=O(i(8603)),u=O(i(450)),o=O(i(184)),s=O(i(2632)),f=O(i(837)),d=O(i(5136)),c=O(i(3795)),v=O(i(367)),m=O(i(2035)),p=O(i(310)),y=O(i(8612)),_=O(i(2009)),h=O(i(5208)),g=O(i(7673)),b=O(i(7850)),x=O(i(9935)),$=O(i(3134)),w=O(i(719)),P=O(i(3107)),C=j(i(4111));function M(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,i=new WeakMap;return(M=function(e){return e?i:t})(e)}function j(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var i=M(t);if(i&&i.has(e))return i.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var u=a?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(n,l,u):n[l]=e[l]}return n.default=e,i&&i.set(e,n),n}function O(e){return e&&e.__esModule?e:{default:e}}},719:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=i(4111),n=(0,r.regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t["default"]=n},2632:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=i(4111),n=(0,r.withParams)({type:"ipAddress"},(function(e){if(!(0,r.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(a)}));t["default"]=n;var a=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},837:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=i(4111),n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,r.withParams)({type:"macAddress"},(function(t){if(!(0,r.req)(t))return!0;if("string"!==typeof t)return!1;var i="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==i&&(6===i.length||8===i.length)&&i.every(a)}))};t["default"]=n;var a=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},5136:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=i(4111),n=function(e){return(0,r.withParams)({type:"maxLength",max:e},(function(t){return!(0,r.req)(t)||(0,r.len)(t)<=e}))};t["default"]=n},3134:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=i(4111),n=function(e){return(0,r.withParams)({type:"maxValue",max:e},(function(t){return!(0,r.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))};t["default"]=n},3795:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=i(4111),n=function(e){return(0,r.withParams)({type:"minLength",min:e},(function(t){return!(0,r.req)(t)||(0,r.len)(t)>=e}))};t["default"]=n},9935:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=i(4111),n=function(e){return(0,r.withParams)({type:"minValue",min:e},(function(t){return!(0,r.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))};t["default"]=n},7850:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=i(4111),n=function(e){return(0,r.withParams)({type:"not"},(function(t,i){return!(0,r.req)(t)||!e.call(this,t,i)}))};t["default"]=n},8603:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=i(4111),n=(0,r.regex)("numeric",/^[0-9]*$/);t["default"]=n},5208:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=i(4111),n=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return(0,r.withParams)({type:"or"},(function(){for(var e=this,i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return t.length>0&&t.reduce((function(t,i){return t||i.apply(e,r)}),!1)}))};t["default"]=n},367:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=i(4111),n=(0,r.withParams)({type:"required"},(function(e){return"string"===typeof e?(0,r.req)(e.trim()):(0,r.req)(e)}));t["default"]=n},2035:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=i(4111),n=function(e){return(0,r.withParams)({type:"requiredIf",prop:e},(function(t,i){return!(0,r.ref)(e,this,i)||(0,r.req)(t)}))};t["default"]=n},310:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=i(4111),n=function(e){return(0,r.withParams)({type:"requiredUnless",prop:e},(function(t,i){return!!(0,r.ref)(e,this,i)||(0,r.req)(t)}))};t["default"]=n},8612:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=i(4111),n=function(e){return(0,r.withParams)({type:"sameAs",eq:e},(function(t,i){return t===(0,r.ref)(e,this,i)}))};t["default"]=n},2009:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=i(4111),n=/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i,a=(0,r.regex)("url",n);t["default"]=a},8751:function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r="web"==={NODE_ENV:"production",VUE_APP_FIXER:"whn9fqLkBQsaVQZveXB0lxnkXK3lBuf8",VUE_APP_TITLE:"MY CRM",BASE_URL:"/"}.BUILD?i(9886).R:i(7801).withParams,n=r;t["default"]=n},9886:function(e,t,i){function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.R=void 0;var n="undefined"!==typeof window?window:"undefined"!==typeof i.g?i.g:{},a=function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))},l=n.vuelidate?n.vuelidate.withParams:a;t.R=l}}]);
//# sourceMappingURL=587.4a4b77fc.js.map