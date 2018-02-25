!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.dialog=e():t.dialog=e()}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e){var n={getTypeStr:function(t,e){return this.toString.call(t)===e},isArray:function(t){return this.getTypeStr(t,"[object Array]")},isFunction:function(t){return this.getTypeStr(t,"[object Function]")},isString:function(t){return this.getTypeStr(t,"[object String]")},isNumber:function(t){return this.getTypeStr(t,"[object Undefined]")},isNull:function(t){return this.getTypeStr(t,"[object Null]")},isUndefined:function(t){return this.getTypeStr(t,"[object Undefined]")},isRegExp:function(){return this.getTypeStr(obj,"[object RegExp]")},isObject:function(t){return this.getTypeStr(t,"[object Object]")},isNaN:window.isNaN};t.exports={onload:function(t){"complete"===document.readyState?t&&t():window.addEventListener("DOMContentLoaded",function(){t&&t()})},getFncName:function(t){return t.toString().match(/function\s*([^(]*)\(/)[1]},addClass:function(t,e){var n=t.className.replace(/\s+/g," "),i=n.split(" ");-1===i.indexOf(e)&&(i.push(e),n=i.join(" ")),t.className=n},constructor:function(t){return t.extend=function(e){return t.prototype=new e,t.prototype.constructor=t,t},t},type:n}},function(t,e){function n(){this.name="ui-alert",this.$el=null,this.$showNum=0}n.prototype={constructor:n,$init:function(){},setTitle:function(t){return this.head.innerText=t||"",this},setMessage:function(t){return this.body.innerText=t||"",this},show:function(){this.$showNum++,this.$el.style.display="block"},hidden:function(){this.$showNum>0&&this.$showNum--,0===this.$showNum&&(this.$el.style.display="none")}},t.exports=n},function(t,e,n){var i=n(3);t.exports=i},function(t,e,n){n(4);var i=n(0),s=n(5),o=n(7),r=n(10),u=i.onload;u(function(){if(-1!==navigator.appVersion.toUpperCase().indexOf("MSIE")){var t=document.createElement("div"),e=document.createElement("button");e.innerText="compatible",t.style.overflow="hidden",t.style.height="0px",t.appendChild(e),document.body.insertBefore(t,document.body.childNodes[0])}});var l={confirm:function(t){u(function(){s.getSingle().$init(t)})},prompt:function(t){u(function(){o.getSingle().$init(t)})},toast:function(t){u(function(){r.getSingle().$init(t)})}};t.exports=l},function(t,e){},function(t,e,n){var i=n(6),s=n(0),o=n(1),r=s.type,u=s.constructor(function(){o.call(this),this.name="ui-confirm",this.$showNum=0,this.$el=null});u.extend(o),u.prototype.$init=function(t){if("object"!=typeof t&&(t={}),null===this.$el){var e=document.createElement("div");e.innerHTML=i,this.$el=e.children[0],this.$el.id=this.name,this.hidden(),function(t){this.head=this.$el.querySelector(".ui-alert-head"),this.body=this.$el.querySelector(".ui-alert-body"),this.cancelBut=this.$el.querySelector(".ui-alert-cancel"),this.confirmBut=this.$el.querySelector(".ui-alert-confirm")}.call(this,t),document.body.appendChild(this.$el)}r.isString(t.message)&&""!==t.message&&(this.setTitle(t.title).setMessage(t.message),function(t){var e=this;this.confirmBut.onclick=function(){r.isFunction(t.confirm)&&!1===t.confirm.call(e)||e.hidden()},this.cancelBut.onclick=function(){r.isFunction(t.cancel)&&!1===t.cancel.call(e)||e.hidden()}}.call(this,t),this.show())};var l=null;u.getSingle=function(){return null===l?l=new u:l},t.exports=u},function(t,e){t.exports='<div class="ui-alert-mask black">\r\n    <div class="ui-alert">\r\n        <div class="ui-alert-head"></div>\r\n        <div class="ui-alert-body"></div>\r\n        <div class="ui-alert-footer">\r\n            <button class="ui-alert-but ui-alert-cancel">取消</button>\r\n            <button class="ui-alert-but ui-alert-confirm">确认</button>\r\n        </div>\r\n    </div>\r\n</div>'},function(t,e,n){n(8);var i=n(1),s=n(9),o=n(0),r=o.type,u=o.constructor(function(){i.call(this),this.name="ui-prompt",this.$el=null});u.extend(i),u.prototype.$init=function(t){if(r.isObject(t)||(t={}),null===this.$el){var e=document.createElement("div");e.innerHTML=s,this.$el=e.children[0],this.$el.id=this.name,this.hidden(),function(){this.head=this.$el.querySelector(".ui-alert-head"),this.body=this.$el.querySelector(".ui-alert-body"),this.message=this.$el.querySelector(".ui-prompt-text"),this.inputEle=this.$el.querySelector(".ui-prompt-input"),this.confirmBut=this.$el.querySelector(".ui-alert-confirm"),this.cancelBut=this.$el.querySelector(".ui-alert-cancel")}.call(this),document.body.appendChild(this.$el)}r.isString(t.message)&&""!==t.message&&(this.setTitle(t.title).setMessage(t.message).setPlaceholder(t.placeholder),this.inputEle.value="",function(t){var e=this;this.confirmBut.onclick=function(){r.isFunction(t.confirm)&&!1===t.confirm.call(e,e.inputEle.value)||e.hidden()},this.cancelBut.onclick=function(){r.isFunction(t.cancel)&&!1===t.cancel.call(e,e.inputEle.value)||e.hidden()}}.call(this,t),this.show(),this.inputEle.focus())},u.prototype.setMessage=function(t){return this.message.innerHTML=t,this},u.prototype.setPlaceholder=function(t){return"string"==typeof t&&this.inputEle.setAttribute("placeholder",t),this};var l=null;u.getSingle=function(){return null===l?l=new u:l},t.exports=u},function(t,e){},function(t,e){t.exports='<div class="ui-alert-mask black">\r\n    <div class="ui-alert">\r\n        <div class="ui-alert-head"></div>\r\n        <div class="ui-alert-body">\r\n            <div class="ui-prompt">\r\n                <div class="ui-prompt-text"></div>\r\n                <input type="text" class="ui-prompt-input">\r\n            </div>\r\n        </div>\r\n        <div class="ui-alert-footer">\r\n            <button class="ui-alert-but ui-alert-cancel">取消</button>\r\n            <button class="ui-alert-but ui-alert-confirm">确认</button>\r\n        </div>\r\n    </div>\r\n</div>'},function(t,e,n){n(11);var i=n(12),s=n(0).type,o=1500;function r(){this.name="ui-toast",this.$el=null}r.prototype={constructor:r,$init:function(t){if(s.isObject(t)){if(null===this.$el){var e=document.createElement("div");e.innerHTML=i,this.$el=e.childNodes[0],this.$el.id=this.name,this.hidden(),function(){this.messageEle=this.$el.querySelector(".ui-toast")}.call(this),document.body.appendChild(this.$el)}s.isString(t.message)&&""!==t.message&&(this.setMessage(t.message),function(t){var e=this,n=setTimeout(function(){e.hidden(),clearTimeout(n)},t||o)}.call(this,t.timeout),this.show())}},setMessage:function(t){return this.messageEle.innerText=t||"",this},show:function(){return this.$el.style.display="block",this},hidden:function(){return this.$el.style.display="none",this}};var u=null;r.getSingle=function(){return null===u?u=new r:u},t.exports=r},function(t,e){},function(t,e){t.exports='<div class="ui-toast-mask">\r\n    <div class="ui-toast"></div>\r\n</div>'}])});