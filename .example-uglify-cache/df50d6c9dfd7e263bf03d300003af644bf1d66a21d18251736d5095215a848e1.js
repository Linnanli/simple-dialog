{"source":"!function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,\"a\",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p=\"\",n(n.s=2)}([function(t,e){var n={getTypeStr:function(t,e){return this.toString.call(t)===e},isArray:function(t){return this.getTypeStr(t,\"[object Array]\")},isFunction:function(t){return this.getTypeStr(t,\"[object Function]\")},isString:function(t){return this.getTypeStr(t,\"[object String]\")},isNumber:function(t){return this.getTypeStr(t,\"[object Undefined]\")},isNull:function(t){return this.getTypeStr(t,\"[object Null]\")},isUndefined:function(t){return this.getTypeStr(t,\"[object Undefined]\")},isRegExp:function(){return this.getTypeStr(obj,\"[object RegExp]\")},isObject:function(t){return this.getTypeStr(t,\"[object Object]\")},isNaN:window.isNaN};t.exports={onload:function(t){\"complete\"===document.readyState?t&&t():window.addEventListener(\"DOMContentLoaded\",function(){t&&t()})},getFncName:function(t){return t.toString().match(/function\\s*([^(]*)\\(/)[1]},addClass:function(t,e){var n=t.className.replace(/\\s+/g,\" \"),i=n.split(\" \");-1===i.indexOf(e)&&(i.push(e),n=i.join(\" \")),t.className=n},constructor:function(t){return t.extend=function(e){return t.prototype=new e,t.prototype.constructor=t,t},t},type:n}},function(t,e){function n(){this.name=\"ui-alert\",this.$el=null,this.$showNum=0}n.prototype={constructor:n,$init:function(){},setTitle:function(t){return this.head.innerText=t||\"\",this},setMessage:function(t){return this.body.innerText=t||\"\",this},show:function(){this.$showNum++,this.$el.style.display=\"block\"},hidden:function(){this.$showNum>0&&this.$showNum--,0===this.$showNum&&(this.$el.style.display=\"none\")}},t.exports=n},function(t,e,n){n(3);var i=n(4),s=document.getElementById(\"app-root\"),o=document.createElement(\"button\"),r=document.createElement(\"button\"),c=document.createElement(\"button\");o.innerHTML=\"弹出confirm\",r.innerHTML=\"弹出prompt\",c.innerHTML=\"弹出toast\",s.appendChild(o),s.appendChild(r),s.appendChild(c),o.addEventListener(\"click\",function(){i.confirm({title:\"消息\",mask:\"white\",message:\"确定删除网关562555:云南省昆明市盘龙区(龙欣路)吗?\",confirm:function(){i.confirm({title:\"警告\",message:\"删除网关可能会失去历史记录\"})},cancel:function(){console.log(this)}})}),r.addEventListener(\"click\",function(){i.prompt({title:\"prompt\",message:\"请输入你的名字\",placeholder:\"如:林楠力\",confirm:function(t){console.log(t),\"\"!==t&&i.toast({message:t,timeout:3e3})}})}),c.addEventListener(\"click\",function(){i.toast({message:\"删除成功！\"})})},function(t,e){},function(t,e,n){n(5);var i=n(0),s=n(6),o=n(8),r=n(11),c=i.onload;c(function(){if(-1!==navigator.appVersion.toUpperCase().indexOf(\"MSIE\")){var t=document.createElement(\"div\"),e=document.createElement(\"button\");e.innerText=\"compatible\",t.style.overflow=\"hidden\",t.style.height=\"0px\",t.appendChild(e),document.body.insertBefore(t,document.body.childNodes[0])}});var l={confirm:function(t){c(function(){s.getSingle().$init(t)})},prompt:function(t){c(function(){o.getSingle().$init(t)})},toast:function(t){c(function(){r.getSingle().$init(t)})}};t.exports=l},function(t,e){},function(t,e,n){var i=n(7),s=n(0),o=n(1),r=s.type,c=s.constructor(function(){o.call(this),this.name=\"ui-confirm\",this.$showNum=0,this.$el=null});c.extend(o),c.prototype.$init=function(t){if(\"object\"!=typeof t&&(t={}),null===this.$el){var e=document.createElement(\"div\");e.innerHTML=i,this.$el=e.children[0],this.$el.id=this.name,this.hidden(),function(t){this.head=this.$el.querySelector(\".ui-alert-head\"),this.body=this.$el.querySelector(\".ui-alert-body\"),this.cancelBut=this.$el.querySelector(\".ui-alert-cancel\"),this.confirmBut=this.$el.querySelector(\".ui-alert-confirm\")}.call(this,t),document.body.appendChild(this.$el)}r.isString(t.message)&&\"\"!==t.message&&(this.setTitle(t.title).setMessage(t.message),function(t){var e=this;this.confirmBut.onclick=function(){r.isFunction(t.confirm)&&!1===t.confirm.call(e)||e.hidden()},this.cancelBut.onclick=function(){r.isFunction(t.cancel)&&!1===t.cancel.call(e)||e.hidden()}}.call(this,t),this.show())};var l=null;c.getSingle=function(){return null===l?l=new c:l},t.exports=c},function(t,e){t.exports='<div class=\"ui-alert-mask black\">\\r\\n    <div class=\"ui-alert\">\\r\\n        <div class=\"ui-alert-head\"></div>\\r\\n        <div class=\"ui-alert-body\"></div>\\r\\n        <div class=\"ui-alert-footer\">\\r\\n            <button class=\"ui-alert-but ui-alert-cancel\">取消</button>\\r\\n            <button class=\"ui-alert-but ui-alert-confirm\">确认</button>\\r\\n        </div>\\r\\n    </div>\\r\\n</div>'},function(t,e,n){n(9);var i=n(1),s=n(10),o=n(0),r=o.type,c=o.constructor(function(){i.call(this),this.name=\"ui-prompt\",this.$el=null});c.extend(i),c.prototype.$init=function(t){if(r.isObject(t)||(t={}),null===this.$el){var e=document.createElement(\"div\");e.innerHTML=s,this.$el=e.children[0],this.$el.id=this.name,this.hidden(),function(){this.head=this.$el.querySelector(\".ui-alert-head\"),this.body=this.$el.querySelector(\".ui-alert-body\"),this.message=this.$el.querySelector(\".ui-prompt-text\"),this.inputEle=this.$el.querySelector(\".ui-prompt-input\"),this.confirmBut=this.$el.querySelector(\".ui-alert-confirm\"),this.cancelBut=this.$el.querySelector(\".ui-alert-cancel\")}.call(this),document.body.appendChild(this.$el)}r.isString(t.message)&&\"\"!==t.message&&(this.setTitle(t.title).setMessage(t.message).setPlaceholder(t.placeholder),this.inputEle.value=\"\",function(t){var e=this;this.confirmBut.onclick=function(){r.isFunction(t.confirm)&&!1===t.confirm.call(e,e.inputEle.value)||e.hidden()},this.cancelBut.onclick=function(){r.isFunction(t.cancel)&&!1===t.cancel.call(e,e.inputEle.value)||e.hidden()}}.call(this,t),this.show(),this.inputEle.focus())},c.prototype.setMessage=function(t){return this.message.innerHTML=t,this},c.prototype.setPlaceholder=function(t){return\"string\"==typeof t&&this.inputEle.setAttribute(\"placeholder\",t),this};var l=null;c.getSingle=function(){return null===l?l=new c:l},t.exports=c},function(t,e){},function(t,e){t.exports='<div class=\"ui-alert-mask black\">\\r\\n    <div class=\"ui-alert\">\\r\\n        <div class=\"ui-alert-head\"></div>\\r\\n        <div class=\"ui-alert-body\">\\r\\n            <div class=\"ui-prompt\">\\r\\n                <div class=\"ui-prompt-text\"></div>\\r\\n                <input type=\"text\" class=\"ui-prompt-input\">\\r\\n            </div>\\r\\n        </div>\\r\\n        <div class=\"ui-alert-footer\">\\r\\n            <button class=\"ui-alert-but ui-alert-cancel\">取消</button>\\r\\n            <button class=\"ui-alert-but ui-alert-confirm\">确认</button>\\r\\n        </div>\\r\\n    </div>\\r\\n</div>'},function(t,e,n){n(12);var i=n(13),s=n(0).type,o=1500;function r(){this.name=\"ui-toast\",this.$el=null}r.prototype={constructor:r,$init:function(t){if(s.isObject(t)){if(null===this.$el){var e=document.createElement(\"div\");e.innerHTML=i,this.$el=e.childNodes[0],this.$el.id=this.name,this.hidden(),function(){this.messageEle=this.$el.querySelector(\".ui-toast\")}.call(this),document.body.appendChild(this.$el)}s.isString(t.message)&&\"\"!==t.message&&(this.setMessage(t.message),function(t){var e=this,n=setTimeout(function(){e.hidden(),clearTimeout(n)},t||o)}.call(this,t.timeout),this.show())}},setMessage:function(t){return this.messageEle.innerText=t||\"\",this},show:function(){return this.$el.style.display=\"block\",this},hidden:function(){return this.$el.style.display=\"none\",this}};var c=null;r.getSingle=function(){return null===c?c=new r:c},t.exports=r},function(t,e){},function(t,e){t.exports='<div class=\"ui-toast-mask\">\\r\\n    <div class=\"ui-toast\"></div>\\r\\n</div>'}]);","map":"{\"version\":3,\"sources\":[\"webpack/bootstrap 3fa7102dcbdc26c75a1b\",\"C:\\\\Users\\\\84505\\\\Documents\\\\GitHub\\\\simple-dialog\\\\src\\\\util\\\\index.js\",\"C:\\\\Users\\\\84505\\\\Documents\\\\GitHub\\\\simple-dialog\\\\src\\\\component\\\\dialog\\\\alert\\\\index.js\",\"C:\\\\Users\\\\84505\\\\Documents\\\\GitHub\\\\simple-dialog\\\\example\\\\main.js\",\"C:\\\\Users\\\\84505\\\\Documents\\\\GitHub\\\\simple-dialog\\\\src\\\\component\\\\dialog\\\\index.js\",\"C:\\\\Users\\\\84505\\\\Documents\\\\GitHub\\\\simple-dialog\\\\src\\\\component\\\\dialog\\\\confirm\\\\index.js\",\"C:\\\\Users\\\\84505\\\\Documents\\\\GitHub\\\\simple-dialog\\\\node_modules\\\\html-loader\\\\index.js!C:\\\\Users\\\\84505\\\\Documents\\\\GitHub\\\\simple-dialog\\\\src\\\\component\\\\dialog\\\\confirm\\\\index.html\",\"C:\\\\Users\\\\84505\\\\Documents\\\\GitHub\\\\simple-dialog\\\\src\\\\component\\\\dialog\\\\prompt\\\\index.js\",\"C:\\\\Users\\\\84505\\\\Documents\\\\GitHub\\\\simple-dialog\\\\node_modules\\\\html-loader\\\\index.js!C:\\\\Users\\\\84505\\\\Documents\\\\GitHub\\\\simple-dialog\\\\src\\\\component\\\\dialog\\\\prompt\\\\index.html\",\"C:\\\\Users\\\\84505\\\\Documents\\\\GitHub\\\\simple-dialog\\\\src\\\\component\\\\dialog\\\\toast\\\\index.js\",\"C:\\\\Users\\\\84505\\\\Documents\\\\GitHub\\\\simple-dialog\\\\node_modules\\\\html-loader\\\\index.js!C:\\\\Users\\\\84505\\\\Documents\\\\GitHub\\\\simple-dialog\\\\src\\\\component\\\\dialog\\\\toast\\\\index.html\"],\"names\":[\"installedModules\",\"__webpack_require__\",\"moduleId\",\"exports\",\"module\",\"i\",\"l\",\"modules\",\"call\",\"m\",\"c\",\"d\",\"name\",\"getter\",\"o\",\"Object\",\"defineProperty\",\"configurable\",\"enumerable\",\"get\",\"n\",\"__esModule\",\"object\",\"property\",\"prototype\",\"hasOwnProperty\",\"p\",\"s\",\"type\",\"getTypeStr\",\"obj\",\"typeStr\",\"this\",\"toString\",\"isArray\",\"isFunction\",\"isString\",\"isNumber\",\"isNull\",\"isUndefined\",\"isRegExp\",\"isObject\",\"isNaN\",\"window\",\"onload\",\"callback\",\"document\",\"readyState\",\"addEventListener\",\"getFncName\",\"func\",\"match\",\"addClass\",\"ele\",\"className\",\"clas\",\"replace\",\"clasArr\",\"split\",\"indexOf\",\"push\",\"join\",\"constructor\",\"SubClass\",\"extend\",\"SuperClass\",\"Alert\",\"$el\",\"$showNum\",\"$init\",\"setTitle\",\"title\",\"head\",\"innerText\",\"setMessage\",\"message\",\"body\",\"show\",\"style\",\"display\",\"hidden\",\"dialog\",\"root\",\"getElementById\",\"confirmBut\",\"createElement\",\"promptBut\",\"toastBut\",\"innerHTML\",\"appendChild\",\"confirm\",\"mask\",\"cancel\",\"console\",\"log\",\"prompt\",\"placeholder\",\"value\",\"toast\",\"timeout\",\"util\",\"Confirm\",\"Prompt\",\"Toast\",\"navigator\",\"appVersion\",\"toUpperCase\",\"box\",\"but\",\"overflow\",\"height\",\"insertBefore\",\"childNodes\",\"options\",\"getSingle\",\"tpl\",\"params\",\"div\",\"children\",\"id\",\"querySelector\",\"cancelBut\",\"_this\",\"onclick\",\"instances\",\"inputEle\",\"setPlaceholder\",\"focus\",\"text\",\"setAttribute\",\"DEFAULT_TIMES\",\"messageEle\",\"timer\",\"setTimeout\",\"clearTimeout\",\"instancs\"],\"mappings\":\"aACA,IAAAA,KAGA,SAAAC,EAAAC,GAGA,GAAAF,EAAAE,GACA,OAAAF,EAAAE,GAAAC,QAGA,IAAAC,EAAAJ,EAAAE,IACAG,EAAAH,EACAI,GAAA,EACAH,YAUA,OANAI,EAAAL,GAAAM,KAAAJ,EAAAD,QAAAC,EAAAA,EAAAD,QAAAF,GAGAG,EAAAE,GAAA,EAGAF,EAAAD,QAKAF,EAAAQ,EAAAF,EAGAN,EAAAS,EAAAV,EAGAC,EAAAU,EAAA,SAAAR,EAAAS,EAAAC,GACAZ,EAAAa,EAAAX,EAAAS,IACAG,OAAAC,eAAAb,EAAAS,GACAK,cAAA,EACAC,YAAA,EACAC,IAAAN,KAMAZ,EAAAmB,EAAA,SAAAhB,GACA,IAAAS,EAAAT,GAAAA,EAAAiB,WACA,WAA2B,OAAAjB,EAAA,SAC3B,WAAiC,OAAAA,GAEjC,OADAH,EAAAU,EAAAE,EAAA,IAAAA,GACAA,GAIAZ,EAAAa,EAAA,SAAAQ,EAAAC,GAAsD,OAAAR,OAAAS,UAAAC,eAAAjB,KAAAc,EAAAC,IAGtDtB,EAAAyB,EAAA,GAGAzB,EAAAA,EAAA0B,EAAA,mBCrDA,IAAAC,GACAC,WAAA,SAAAC,EAAAC,GACA,OAAAC,KAAAC,SAAAzB,KAAAsB,KAAAC,GAEAG,QAAA,SAAAJ,GACA,OAAAE,KAAAH,WAAAC,EAAA,mBAEAK,WAAA,SAAAL,GACA,OAAAE,KAAAH,WAAAC,EAAA,sBAEAM,SAAA,SAAAN,GACA,OAAAE,KAAAH,WAAAC,EAAA,oBAEAO,SAAA,SAAAP,GACA,OAAAE,KAAAH,WAAAC,EAAA,uBAEAQ,OAAA,SAAAR,GACA,OAAAE,KAAAH,WAAAC,EAAA,kBAEAS,YAAA,SAAAT,GACA,OAAAE,KAAAH,WAAAC,EAAA,uBAEAU,SAAA,WACA,OAAAR,KAAAH,WAAAC,IAAA,oBAEAW,SAAA,SAAAX,GACA,OAAAE,KAAAH,WAAAC,EAAA,oBAEAY,MAAAC,OAAAD,OA2EAtC,EAAAD,SACAyC,OA1DA,SAAAC,GACA,aAAAC,SAAAC,WACAF,GAAAA,IAEAF,OAAAK,iBAAA,mBAAA,WACAH,GAAAA,OAsDAI,WApEA,SAAAC,GACA,OAAAA,EAAAjB,WAAAkB,MAAA,wBAAA,IAoEAC,SA5CA,SAAAC,EAAAC,GACA,IAAAC,EAAAF,EAAAC,UAAAE,QAAA,OAAA,KACAC,EAAAF,EAAAG,MAAA,MAEA,IAAAD,EAAAE,QAAAL,KACAG,EAAAG,KAAAN,GACAC,EAAAE,EAAAI,KAAA,MAGAR,EAAAC,UAAAC,GAoCAO,YAdA,SAAAC,GAOA,OALAA,EAAAC,OAAA,SAAAC,GAGA,OAFAF,EAAAvC,UAAA,IAAAyC,EACAF,EAAAvC,UAAAsC,YAAAC,EACAA,GAEAA,GAQAnC,KAAAA,kBC5GA,SAAAsC,IACAlC,KAAApB,KAAA,WACAoB,KAAAmC,IAAA,KACAnC,KAAAoC,SAAA,EAGAF,EAAA1C,WACAsC,YAAAI,EACAG,MAAA,aACAC,SAAA,SAAAC,GAEA,OADAvC,KAAAwC,KAAAC,UAAAF,GAAA,GACAvC,MAEA0C,WAAA,SAAAC,GAEA,OADA3C,KAAA4C,KAAAH,UAAAE,GAAA,GACA3C,MAEA6C,KAAA,WACA7C,KAAAoC,WACApC,KAAAmC,IAAAW,MAAAC,QAAA,SAEAC,OAAA,WACAhD,KAAAoC,SAAA,GACApC,KAAAoC,WACA,IAAApC,KAAAoC,WACApC,KAAAmC,IAAAW,MAAAC,QAAA,UAIA3E,EAAAD,QAAA+D,mBCrCAjE,EAAA,GACA,IAAAgF,EAAAhF,EAAA,GAEAiF,EAAApC,SAAAqC,eAAA,YACAC,EAAAtC,SAAAuC,cAAA,UACAC,EAAAxC,SAAAuC,cAAA,UACAE,EAAAzC,SAAAuC,cAAA,UAEAD,EAAAI,UAAA,YACAF,EAAAE,UAAA,WACAD,EAAAC,UAAA,UAEAN,EAAAO,YAAAL,GACAF,EAAAO,YAAAH,GACAJ,EAAAO,YAAAF,GAEAH,EAAApC,iBAAA,QAAA,WACAiC,EAAAS,SACAnB,MAAA,KACAoB,KAAA,QACAhB,QAAA,gCACAe,QAAA,WACAT,EAAAS,SAEAnB,MAAA,KACAI,QAAA,mBAGAiB,OAAA,WACAC,QAAAC,IAAA9D,WAKAsD,EAAAtC,iBAAA,QAAA,WAEAiC,EAAAc,QACAxB,MAAA,SACAI,QAAA,UACAqB,YAAA,QACAN,QAAA,SAAAO,GACAJ,QAAAC,IAAAG,GACA,KAAAA,GACAhB,EAAAiB,OACAvB,QAAAsB,EACAE,QAAA,WAOAZ,EAAAvC,iBAAA,QAAA,WACAiC,EAAAiB,OACAvB,QAAA,6CCtDA1E,EAAA,GACA,IAAAmG,EAAAnG,EAAA,GACAoG,EAAApG,EAAA,GACAqG,EAAArG,EAAA,GACAsG,EAAAtG,EAAA,IAEA2C,EAAAwD,EAAAxD,OAGAA,EAAA,WACA,IAAA,IAAA4D,UAAAC,WAAAC,cAAA/C,QAAA,QAAA,CACA,IAAAgD,EAAA7D,SAAAuC,cAAA,OACAuB,EAAA9D,SAAAuC,cAAA,UACAuB,EAAAnC,UAAA,aACAkC,EAAA7B,MAAA+B,SAAA,SACAF,EAAA7B,MAAAgC,OAAA,MACAH,EAAAlB,YAAAmB,GACA9D,SAAA8B,KAAAmC,aAAAJ,EAAA7D,SAAA8B,KAAAoC,WAAA,OAGA,IAAA/B,GACAS,QAAA,SAAAuB,GACArE,EAAA,WAEAyD,EAAAa,YACA7C,MAAA4C,MAGAlB,OAAA,SAAAkB,GACArE,EAAA,WACA0D,EAAAY,YACA7C,MAAA4C,MAGAf,MAAA,SAAAe,GACArE,EAAA,WACA2D,EAAAW,YACA7C,MAAA4C,OAKA7G,EAAAD,QAAA8E,mCCnCA,IAAAkC,EAAAlH,EAAA,GACAmG,EAAAnG,EAAA,GACAiE,EAAAjE,EAAA,GAEA2B,EAAAwE,EAAAxE,KAQAyE,EAAAD,EAAAtC,YAAA,WACAI,EAAA1D,KAAAwB,MACAA,KAAApB,KAAA,aACAoB,KAAAoC,SAAA,EACApC,KAAAmC,IAAA,OAGAkC,EAAArC,OAAAE,GAwCAmC,EAAA7E,UAAA6C,MAAA,SAAA+C,GAGA,GAFA,iBAAAA,IAAAA,MAEA,OAAApF,KAAAmC,IAAA,CACA,IAAAkD,EAAAvE,SAAAuC,cAAA,OACAgC,EAAA7B,UAAA2B,EACAnF,KAAAmC,IAAAkD,EAAAC,SAAA,GACAtF,KAAAmC,IAAAoD,GAAAvF,KAAApB,KACAoB,KAAAgD,SA1CA,SAAAoC,GAEApF,KAAAwC,KAAAxC,KAAAmC,IAAAqD,cAAA,kBACAxF,KAAA4C,KAAA5C,KAAAmC,IAAAqD,cAAA,kBACAxF,KAAAyF,UAAAzF,KAAAmC,IAAAqD,cAAA,oBACAxF,KAAAoD,WAAApD,KAAAmC,IAAAqD,cAAA,sBAuCAhH,KAAAwB,KAAAoF,GACAtE,SAAA8B,KAAAa,YAAAzD,KAAAmC,KAGAvC,EAAAQ,SAAAgF,EAAAzC,UAAA,KAAAyC,EAAAzC,UAEA3C,KAAAsC,SAAA8C,EAAA7C,OACAG,WAAA0C,EAAAzC,SAtCA,SAAAyC,GACA,IAAAM,EAAA1F,KAEAA,KAAAoD,WAAAuC,QAAA,WACA/F,EAAAO,WAAAiF,EAAA1B,WACA,IAAA0B,EAAA1B,QAAAlF,KAAAkH,IAEAA,EAAA1C,UAEAhD,KAAAyF,UAAAE,QAAA,WACA/F,EAAAO,WAAAiF,EAAAxB,UACA,IAAAwB,EAAAxB,OAAApF,KAAAkH,IAEAA,EAAA1C,WA2BAxE,KAAAwB,KAAAoF,GAEApF,KAAA6C,SAOA,IAAA+C,EAAA,KACAvB,EAAAa,UAAA,WACA,OAAA,OAAAU,EACAA,EAAA,IAAAvB,EAEAuB,GAIAxH,EAAAD,QAAAkG,iBCvGAjG,EAAAD,QAAA,iZCAAF,EAAA,GACA,IAAAiE,EAAAjE,EAAA,GACAkH,EAAAlH,EAAA,IACAmG,EAAAnG,EAAA,GAEA2B,EAAAwE,EAAAxE,KAGA0E,EAAAF,EAAAtC,YAAA,WACAI,EAAA1D,KAAAwB,MACAA,KAAApB,KAAA,YACAoB,KAAAmC,IAAA,OAGAmC,EAAAtC,OAAAE,GAwCAoC,EAAA9E,UAAA6C,MAAA,SAAA4C,GAGA,GAFArF,EAAAa,SAAAwE,KAAAA,MAEA,OAAAjF,KAAAmC,IAAA,CACA,IAAAkD,EAAAvE,SAAAuC,cAAA,OACAgC,EAAA7B,UAAA2B,EACAnF,KAAAmC,IAAAkD,EAAAC,SAAA,GACAtF,KAAAmC,IAAAoD,GAAAvF,KAAApB,KACAoB,KAAAgD,SAzCA,WACAhD,KAAAwC,KAAAxC,KAAAmC,IAAAqD,cAAA,kBACAxF,KAAA4C,KAAA5C,KAAAmC,IAAAqD,cAAA,kBACAxF,KAAA2C,QAAA3C,KAAAmC,IAAAqD,cAAA,mBACAxF,KAAA6F,SAAA7F,KAAAmC,IAAAqD,cAAA,oBACAxF,KAAAoD,WAAApD,KAAAmC,IAAAqD,cAAA,qBACAxF,KAAAyF,UAAAzF,KAAAmC,IAAAqD,cAAA,qBAqCAhH,KAAAwB,MACAc,SAAA8B,KAAAa,YAAAzD,KAAAmC,KAEAvC,EAAAQ,SAAA6E,EAAAtC,UAAA,KAAAsC,EAAAtC,UAEA3C,KAAAsC,SAAA2C,EAAA1C,OACAG,WAAAuC,EAAAtC,SACAmD,eAAAb,EAAAjB,aAEAhE,KAAA6F,SAAA5B,MAAA,GAtCA,SAAAgB,GACA,IAAAS,EAAA1F,KAEAA,KAAAoD,WAAAuC,QAAA,WAEA/F,EAAAO,WAAA8E,EAAAvB,WACA,IAAAuB,EAAAvB,QAAAlF,KAAAkH,EAAAA,EAAAG,SAAA5B,QAEAyB,EAAA1C,UAGAhD,KAAAyF,UAAAE,QAAA,WACA/F,EAAAO,WAAA8E,EAAArB,UACA,IAAAqB,EAAArB,OAAApF,KAAAkH,EAAAA,EAAAG,SAAA5B,QAEAyB,EAAA1C,WAyBAxE,KAAAwB,KAAAiF,GACAjF,KAAA6C,OACA7C,KAAA6F,SAAAE,UAGAzB,EAAA9E,UAAAkD,WAAA,SAAAC,GAEA,OADA3C,KAAA2C,QAAAa,UAAAb,EACA3C,MAGAsE,EAAA9E,UAAAsG,eAAA,SAAAE,GAIA,MAHA,iBAAAA,GACAhG,KAAA6F,SAAAI,aAAA,cAAAD,GAEAhG,MAOA,IAAA4F,EAAA,KACAtB,EAAAY,UAAA,WACA,OAAA,OAAAU,EACAA,EAAA,IAAAtB,EAEAsB,GAIAxH,EAAAD,QAAAmG,iCCzGAlG,EAAAD,QAAA,+kBCQAF,EAAA,IACA,IAAAkH,EAAAlH,EAAA,IAEA2B,EADA3B,EAAA,GACA2B,KAGAsG,EAAA,KAEA,SAAA3B,IACAvE,KAAApB,KAAA,WACAoB,KAAAmC,IAAA,KA0BAoC,EAAA/E,WACAsC,YAAAyC,EACAlC,MAAA,SAAA4C,GACA,GAAArF,EAAAa,SAAAwE,GAAA,CAEA,GAAA,OAAAjF,KAAAmC,IAAA,CACA,IAAAkD,EAAAvE,SAAAuC,cAAA,OACAgC,EAAA7B,UAAA2B,EACAnF,KAAAmC,IAAAkD,EAAAL,WAAA,GACAhF,KAAAmC,IAAAoD,GAAAvF,KAAApB,KACAoB,KAAAgD,SA5BA,WACAhD,KAAAmG,WAAAnG,KAAAmC,IAAAqD,cAAA,cA4BAhH,KAAAwB,MACAc,SAAA8B,KAAAa,YAAAzD,KAAAmC,KAEAvC,EAAAQ,SAAA6E,EAAAtC,UAAA,KAAAsC,EAAAtC,UAEA3C,KAAA0C,WAAAuC,EAAAtC,SAzBA,SAAAwB,GACA,IAAAuB,EAAA1F,KAEAoG,EAAAC,WAAA,WACAX,EAAA1C,SACAsD,aAAAF,IACKjC,GAAA+B,IAqBL1H,KAAAwB,KAAAiF,EAAAd,SACAnE,KAAA6C,UAEAH,WAAA,SAAAsD,GAEA,OADAhG,KAAAmG,WAAA1D,UAAAuD,GAAA,GACAhG,MAEA6C,KAAA,WAEA,OADA7C,KAAAmC,IAAAW,MAAAC,QAAA,QACA/C,MAEAgD,OAAA,WAEA,OADAhD,KAAAmC,IAAAW,MAAAC,QAAA,OACA/C,OAQA,IAAAuG,EAAA,KACAhC,EAAAW,UAAA,WACA,OAAA,OAAAqB,EAAAA,EAAA,IAAAhC,EAAAgC,GAGAnI,EAAAD,QAAAoG,iCCxFAnG,EAAAD,QAAA\",\"sourcesContent\":[\" \\t// The module cache\\n \\tvar installedModules = {};\\n\\n \\t// The require function\\n \\tfunction __webpack_require__(moduleId) {\\n\\n \\t\\t// Check if module is in cache\\n \\t\\tif(installedModules[moduleId]) {\\n \\t\\t\\treturn installedModules[moduleId].exports;\\n \\t\\t}\\n \\t\\t// Create a new module (and put it into the cache)\\n \\t\\tvar module = installedModules[moduleId] = {\\n \\t\\t\\ti: moduleId,\\n \\t\\t\\tl: false,\\n \\t\\t\\texports: {}\\n \\t\\t};\\n\\n \\t\\t// Execute the module function\\n \\t\\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\\n\\n \\t\\t// Flag the module as loaded\\n \\t\\tmodule.l = true;\\n\\n \\t\\t// Return the exports of the module\\n \\t\\treturn module.exports;\\n \\t}\\n\\n\\n \\t// expose the modules object (__webpack_modules__)\\n \\t__webpack_require__.m = modules;\\n\\n \\t// expose the module cache\\n \\t__webpack_require__.c = installedModules;\\n\\n \\t// define getter function for harmony exports\\n \\t__webpack_require__.d = function(exports, name, getter) {\\n \\t\\tif(!__webpack_require__.o(exports, name)) {\\n \\t\\t\\tObject.defineProperty(exports, name, {\\n \\t\\t\\t\\tconfigurable: false,\\n \\t\\t\\t\\tenumerable: true,\\n \\t\\t\\t\\tget: getter\\n \\t\\t\\t});\\n \\t\\t}\\n \\t};\\n\\n \\t// getDefaultExport function for compatibility with non-harmony modules\\n \\t__webpack_require__.n = function(module) {\\n \\t\\tvar getter = module && module.__esModule ?\\n \\t\\t\\tfunction getDefault() { return module['default']; } :\\n \\t\\t\\tfunction getModuleExports() { return module; };\\n \\t\\t__webpack_require__.d(getter, 'a', getter);\\n \\t\\treturn getter;\\n \\t};\\n\\n \\t// Object.prototype.hasOwnProperty.call\\n \\t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\\n\\n \\t// __webpack_public_path__\\n \\t__webpack_require__.p = \\\"\\\";\\n\\n \\t// Load entry module and return exports\\n \\treturn __webpack_require__(__webpack_require__.s = 2);\\n\",\"/*\\r\\n * @Author: linnanli \\r\\n * @Date: 2018-02-18 19:53:37 \\r\\n * @Last Modified by: linnanli\\r\\n * @Last Modified time: 2018-02-25 10:28:33\\r\\n * @Dscription: 工具类 \\r\\n*/\\r\\n\\r\\nvar type = {\\r\\n    getTypeStr:function(obj,typeStr){\\r\\n        return this.toString.call(obj) === typeStr;\\r\\n    },\\r\\n    isArray:function(obj){\\r\\n        return this.getTypeStr(obj, '[object Array]');\\r\\n    },\\r\\n    isFunction: function (obj) {\\r\\n        return this.getTypeStr(obj, '[object Function]');\\r\\n    },\\r\\n    isString: function (obj) {\\r\\n        return this.getTypeStr(obj, '[object String]');\\r\\n    },\\r\\n    isNumber: function (obj) {\\r\\n        return this.getTypeStr(obj, '[object Undefined]');\\r\\n    },\\r\\n    isNull: function (obj) {\\r\\n        return this.getTypeStr(obj, '[object Null]');\\r\\n    },\\r\\n    isUndefined: function (obj) {\\r\\n        return this.getTypeStr(obj, '[object Undefined]');\\r\\n    },\\r\\n    isRegExp:function(){\\r\\n        return this.getTypeStr(obj, '[object RegExp]');\\r\\n    },\\r\\n    isObject: function (obj){\\r\\n        return this.getTypeStr(obj, '[object Object]');\\r\\n    },\\r\\n    isNaN:window.isNaN\\r\\n};\\r\\n\\r\\n\\r\\n/**\\r\\n * @name getFncName\\r\\n * @description 获取函数的字符串名称\\r\\n * @param {Function} func \\r\\n */\\r\\nfunction getFncName(func){\\r\\n    return func.toString().match(/function\\\\s*([^(]*)\\\\(/)[1];\\r\\n}\\r\\n\\r\\n/**\\r\\n * @name onload\\r\\n * @description 等待加载完成触发回调函数\\r\\n * @param {Function} callback\\r\\n */\\r\\nfunction onload(callback){\\r\\n    if (document.readyState === 'complete'){\\r\\n            callback && callback();\\r\\n    }else{\\r\\n        window.addEventListener('DOMContentLoaded',function(){\\r\\n            callback && callback();\\r\\n        });\\r\\n    }\\r\\n}\\r\\n\\r\\n/**\\r\\n * @name addClass\\r\\n * @description 给指定DOM添加class名称\\r\\n * @param {DOM} ele 需要添加class的DOM元素\\r\\n * @param {String} className class的字符串名称\\r\\n */\\r\\nfunction addClass(ele,className) {\\r\\n    var clas = ele.className.replace(/\\\\s+/g,' '),\\r\\n        clasArr = clas.split(' ');\\r\\n\\r\\n    if (clasArr.indexOf(className) === -1){\\r\\n        clasArr.push(className);\\r\\n        clas = clasArr.join(' ');\\r\\n    }\\r\\n\\r\\n    ele.className = clas;\\r\\n}\\r\\n\\r\\n/**\\r\\n * @name hasClass\\r\\n * @description 判断是否有相应class\\r\\n * @param {DOM} ele 需要添加class的DOM元素\\r\\n * @param {String} className class的字符串名称\\r\\n */\\r\\nfunction hasClass(ele,className) {\\r\\n    var clas = ele.className.replace(/\\\\s+/g,' ');\\r\\n        clasArr = clas.split(' ');\\r\\n    \\r\\n    return clasArr.indexOf(className) === -1?false:true;\\r\\n}\\r\\n\\r\\n/**\\r\\n * @name inherit\\r\\n * @description 继承父类的原型对象和属性\\r\\n * @param {any} SubClass 子类的构造函数\\r\\n * @param {any} SuperClass 父类的构造函数\\r\\n */\\r\\nfunction constructor(SubClass){\\r\\n\\r\\n    SubClass.extend = function (SuperClass){\\r\\n        SubClass.prototype = new SuperClass();\\r\\n        SubClass.prototype.constructor = SubClass;\\r\\n        return SubClass;\\r\\n    }\\r\\n    return SubClass;\\r\\n}\\r\\n\\r\\nmodule.exports = {\\r\\n    onload: onload,\\r\\n    getFncName: getFncName,\\r\\n    addClass: addClass,\\r\\n    constructor: constructor,\\r\\n    type: type\\r\\n};\",\"/*\\r\\n * @Author: linnanli \\r\\n * @Description: alert 类,作为confirm和prompt的父类 \\r\\n * @Date: 2018-02-23 18:00:53 \\r\\n * @Last Modified by: linnanli\\r\\n * @Last Modified time: 2018-02-25 18:34:12\\r\\n */\\r\\n\\r\\n function Alert(){\\r\\n     this.name = 'ui-alert';\\r\\n     this.$el = null;\\r\\n     this.$showNum = 0;\\r\\n }\\r\\n\\r\\nAlert.prototype = {\\r\\n    constructor:Alert,\\r\\n    $init:function(){},\\r\\n    setTitle: function (title){\\r\\n        this.head.innerText = title || '';\\r\\n        return this;\\r\\n    },\\r\\n    setMessage: function (message){\\r\\n        this.body.innerText = message || '';\\r\\n        return this;\\r\\n    },\\r\\n    show: function () {\\r\\n        this.$showNum++;\\r\\n        this.$el.style.display = 'block';\\r\\n    },\\r\\n    hidden: function () {\\r\\n        if(this.$showNum>0)\\r\\n            this.$showNum--;\\r\\n        if (this.$showNum === 0)\\r\\n            this.$el.style.display = 'none';\\r\\n    }\\r\\n};\\r\\n\\r\\nmodule.exports = Alert;\\r\\n\",\"require('./styles/index.scss');\\r\\nvar dialog = require('component/dialog');\\r\\n\\r\\nvar root = document.getElementById('app-root');\\r\\nvar confirmBut = document.createElement('button');\\r\\nvar promptBut = document.createElement('button');\\r\\nvar toastBut = document.createElement('button');\\r\\n\\r\\nconfirmBut.innerHTML = '弹出confirm';\\r\\npromptBut.innerHTML = '弹出prompt';\\r\\ntoastBut.innerHTML = '弹出toast';\\r\\n\\r\\nroot.appendChild(confirmBut);\\r\\nroot.appendChild(promptBut);\\r\\nroot.appendChild(toastBut);\\r\\n\\r\\nconfirmBut.addEventListener('click',function(){\\r\\n    dialog.confirm({\\r\\n        title: '消息',\\r\\n        mask: 'white',\\r\\n        message: '确定删除网关562555:云南省昆明市盘龙区(龙欣路)吗?',\\r\\n        confirm: function () {\\r\\n            dialog.confirm({\\r\\n                \\r\\n                title:'警告',\\r\\n                message:'删除网关可能会失去历史记录'\\r\\n            });\\r\\n        },\\r\\n        cancel:function(){\\r\\n            console.log(this);\\r\\n        }\\r\\n    });\\r\\n});\\r\\n\\r\\npromptBut.addEventListener('click',function(){\\r\\n    // debugger    \\r\\n    dialog.prompt({\\r\\n        title:'prompt',\\r\\n        message:'请输入你的名字',\\r\\n        placeholder:'如:林楠力',\\r\\n        confirm:function (value) {\\r\\n            console.log(value);\\r\\n            if (value !== ''){\\r\\n                dialog.toast({\\r\\n                    message: value,\\r\\n                    timeout: 3000\\r\\n                });\\r\\n            }\\r\\n        }\\r\\n    });\\r\\n});\\r\\n\\r\\ntoastBut.addEventListener('click',function(){\\r\\n    dialog.toast({\\r\\n        message:\\\"删除成功！\\\"\\r\\n    });\\r\\n});\",\"require('./alert/index.scss');\\r\\nvar util = require('util');\\r\\nvar Confirm = require('./confirm');\\r\\nvar Prompt = require('./prompt');\\r\\nvar Toast = require('./toast');\\r\\n\\r\\nvar onload = util.onload;\\r\\n\\r\\n//兼容IE中按回车键,会触发页面第一个按钮的BUG\\r\\nonload(function(){\\r\\n    if( navigator.appVersion.toUpperCase().indexOf('MSIE') === -1) return;\\r\\n    var box = document.createElement('div'),\\r\\n        but = document.createElement('button');\\r\\n    but.innerText = 'compatible';\\r\\n    box.style.overflow = 'hidden';\\r\\n    box.style.height = '0px';\\r\\n    box.appendChild(but);\\r\\n    document.body.insertBefore(box,document.body.childNodes[0]);\\r\\n});\\r\\n\\r\\nvar dialog = {\\r\\n    confirm: function (options){\\r\\n        onload(function (){\\r\\n            //使用代理获取Confirm的单例对象\\r\\n            var confirm = Confirm.getSingle();\\r\\n            confirm.$init(options);\\r\\n        });\\r\\n    },\\r\\n    prompt: function (options){\\r\\n        onload(function(){\\r\\n            var prompt = Prompt.getSingle();\\r\\n            prompt.$init(options);\\r\\n        });\\r\\n    },\\r\\n    toast:function(options){\\r\\n        onload(function(){\\r\\n            var toast = Toast.getSingle();\\r\\n            toast.$init(options);\\r\\n        });\\r\\n    }\\r\\n};\\r\\n\\r\\nmodule.exports = dialog;\",\"/*\\r\\n * @Author: linnanli \\r\\n * @Date: 2018-02-19 00:29:19 \\r\\n * @Last Modified by: linnanli\\r\\n * @Last Modified time: 2018-02-25 23:25:17\\r\\n * @Dscription: Confirm js文件 \\r\\n*/\\r\\nvar tpl = require('./index.html');\\r\\nvar util = require('util');\\r\\nvar Alert = require('../alert');\\r\\n\\r\\nvar type = util.type;\\r\\n\\r\\n/**\\r\\n * @class Confirm\\r\\n * @param {string} template \\r\\n * @description 构造函数\\r\\n */\\r\\n\\r\\nvar Confirm = util.constructor(function () {\\r\\n    Alert.call(this);\\r\\n    this.name = 'ui-confirm';\\r\\n    this.$showNum = 0;\\r\\n    this.$el = null;\\r\\n});\\r\\n\\r\\nConfirm.extend(Alert);\\r\\n/**\\r\\n * @private\\r\\n * @param {object} params \\r\\n * @description 定义的私有变量,用来查找各个DOM节点并设置DOM的初始化属性\\r\\n */\\r\\nfunction $findEle(params) {\\r\\n    //查找各个DOM元素\\r\\n    this.head = this.$el.querySelector('.ui-alert-head');\\r\\n    this.body = this.$el.querySelector('.ui-alert-body');\\r\\n    this.cancelBut = this.$el.querySelector('.ui-alert-cancel');\\r\\n    this.confirmBut = this.$el.querySelector('.ui-alert-confirm');\\r\\n}\\r\\n\\r\\n/**\\r\\n * @private\\r\\n * @param {object} params\\r\\n * @description 为DOM绑定新的事件,清除上一次留存的事件\\r\\n */\\r\\nfunction $bindEven(params) {\\r\\n    var _this = this;\\r\\n    //绑定各个DOM元素的事件\\r\\n    this.confirmBut.onclick = function () {\\r\\n        if (type.isFunction(params.confirm)) {\\r\\n            if (params.confirm.call(_this) === false) return;\\r\\n        }\\r\\n        _this.hidden();\\r\\n    }\\r\\n    this.cancelBut.onclick = function () {\\r\\n        if (type.isFunction(params.cancel)) {\\r\\n            if (params.cancel.call(_this) === false) return;\\r\\n        }\\r\\n        _this.hidden();\\r\\n    }\\r\\n}\\r\\n\\r\\n/**\\r\\n * @name $init\\r\\n * @param {*} params 初始化参数\\r\\n */\\r\\nConfirm.prototype.$init = function (params) {\\r\\n    if (typeof params !== 'object') params = {};\\r\\n \\r\\n    if (this.$el === null) {\\r\\n        var div = document.createElement('div');\\r\\n        div.innerHTML = tpl;\\r\\n        this.$el = div.children[0];\\r\\n        this.$el.id = this.name;\\r\\n        this.hidden();\\r\\n        //绑定DOM事件\\r\\n        $findEle.call(this, params);\\r\\n        document.body.appendChild(this.$el);\\r\\n    }\\r\\n  \\r\\n    if (!type.isString(params.message) || params.message === '') return;\\r\\n    //设置title和message\\r\\n    this.setTitle(params.title)\\r\\n        .setMessage(params.message);\\r\\n    //绑定事件\\r\\n    $bindEven.call(this, params);\\r\\n\\r\\n    this.show();\\r\\n}\\r\\n\\r\\n/**\\r\\n * @name Confirm.getSingle\\r\\n * @description 获取构造函数的单例对象\\r\\n */\\r\\nvar instances = null;\\r\\nConfirm.getSingle = function () {\\r\\n    if (instances === null) {\\r\\n        return instances = new Confirm();\\r\\n    } else {\\r\\n        return instances;\\r\\n    }\\r\\n}\\r\\n\\r\\nmodule.exports = Confirm;\\r\\n\",\"module.exports = \\\"<div class=\\\\\\\"ui-alert-mask black\\\\\\\">\\\\r\\\\n    <div class=\\\\\\\"ui-alert\\\\\\\">\\\\r\\\\n        <div class=\\\\\\\"ui-alert-head\\\\\\\"></div>\\\\r\\\\n        <div class=\\\\\\\"ui-alert-body\\\\\\\"></div>\\\\r\\\\n        <div class=\\\\\\\"ui-alert-footer\\\\\\\">\\\\r\\\\n            <button class=\\\\\\\"ui-alert-but ui-alert-cancel\\\\\\\">取消</button>\\\\r\\\\n            <button class=\\\\\\\"ui-alert-but ui-alert-confirm\\\\\\\">确认</button>\\\\r\\\\n        </div>\\\\r\\\\n    </div>\\\\r\\\\n</div>\\\";\",\"require('./index.scss');\\r\\nvar Alert = require('../alert');\\r\\nvar tpl = require('./index.html');\\r\\nvar util = require('util');\\r\\n\\r\\nvar type = util.type;\\r\\n\\r\\n//定义一个构造函数 Prompt\\r\\nvar Prompt = util.constructor(function () {\\r\\n    Alert.call(this);\\r\\n    this.name = 'ui-prompt';\\r\\n    this.$el = null;\\r\\n});\\r\\n// Prompt继承自Alert\\r\\nPrompt.extend(Alert);\\r\\n\\r\\n/**\\r\\n * @name $bindEvent\\r\\n * @private \\r\\n * @description 绑定DOM事件，私有方法\\r\\n */\\r\\nfunction $findEle(){\\r\\n    this.head = this.$el.querySelector('.ui-alert-head');\\r\\n    this.body = this.$el.querySelector('.ui-alert-body');\\r\\n    this.message = this.$el.querySelector('.ui-prompt-text');\\r\\n    this.inputEle = this.$el.querySelector('.ui-prompt-input');\\r\\n    this.confirmBut = this.$el.querySelector('.ui-alert-confirm');\\r\\n    this.cancelBut = this.$el.querySelector('.ui-alert-cancel');\\r\\n}\\r\\n\\r\\n/**\\r\\n * @name $bindEvent\\r\\n * @private\\r\\n * @description 绑定事件\\r\\n */\\r\\nfunction $bindEvent(options){\\r\\n    var _this = this;\\r\\n    \\r\\n    this.confirmBut.onclick = function(){\\r\\n        // debugger\\r\\n        if (type.isFunction(options.confirm)){\\r\\n            if (options.confirm.call(_this, _this.inputEle.value) === false) return;\\r\\n        }\\r\\n        _this.hidden();\\r\\n    }\\r\\n\\r\\n    this.cancelBut.onclick = function(){\\r\\n        if(type.isFunction(options.cancel)){\\r\\n            if (options.cancel.call(_this, _this.inputEle.value) === false) return;\\r\\n        }\\r\\n        _this.hidden();\\r\\n    }\\r\\n}\\r\\n\\r\\nPrompt.prototype.$init = function(options) {\\r\\n    if (!type.isObject(options)) options = {};\\r\\n\\r\\n    if (this.$el === null) {\\r\\n        var div = document.createElement('div');\\r\\n        div.innerHTML = tpl;\\r\\n        this.$el = div.children[0];\\r\\n        this.$el.id = this.name;\\r\\n        this.hidden();\\r\\n        //查找DOM\\r\\n        $findEle.call(this);\\r\\n        document.body.appendChild(this.$el);\\r\\n    }\\r\\n    if (!type.isString(options.message) || options.message === '') return;\\r\\n\\r\\n    this.setTitle(options.title)\\r\\n        .setMessage(options.message)\\r\\n        .setPlaceholder(options.placeholder);\\r\\n    //清空输入框的值\\r\\n    this.inputEle.value = '';\\r\\n    //绑定事件\\r\\n    $bindEvent.call(this, options);\\r\\n    this.show();\\r\\n    this.inputEle.focus();\\r\\n}\\r\\n\\r\\nPrompt.prototype.setMessage = function (message) {\\r\\n    this.message.innerHTML = message;\\r\\n    return this;\\r\\n}\\r\\n\\r\\nPrompt.prototype.setPlaceholder = function(text) {\\r\\n    if (typeof text === 'string')\\r\\n        this.inputEle.setAttribute('placeholder', text);\\r\\n\\r\\n    return this;\\r\\n}\\r\\n\\r\\n/**\\r\\n * @name Prompt.getSingle\\r\\n * @description 获取构造函数的单例对象\\r\\n */\\r\\nvar instances = null;\\r\\nPrompt.getSingle = function(){\\r\\n    if (instances === null){\\r\\n        return instances = new Prompt();\\r\\n    }else{\\r\\n        return instances;\\r\\n    }\\r\\n}\\r\\n\\r\\nmodule.exports = Prompt;\",\"module.exports = \\\"<div class=\\\\\\\"ui-alert-mask black\\\\\\\">\\\\r\\\\n    <div class=\\\\\\\"ui-alert\\\\\\\">\\\\r\\\\n        <div class=\\\\\\\"ui-alert-head\\\\\\\"></div>\\\\r\\\\n        <div class=\\\\\\\"ui-alert-body\\\\\\\">\\\\r\\\\n            <div class=\\\\\\\"ui-prompt\\\\\\\">\\\\r\\\\n                <div class=\\\\\\\"ui-prompt-text\\\\\\\"></div>\\\\r\\\\n                <input type=\\\\\\\"text\\\\\\\" class=\\\\\\\"ui-prompt-input\\\\\\\">\\\\r\\\\n            </div>\\\\r\\\\n        </div>\\\\r\\\\n        <div class=\\\\\\\"ui-alert-footer\\\\\\\">\\\\r\\\\n            <button class=\\\\\\\"ui-alert-but ui-alert-cancel\\\\\\\">取消</button>\\\\r\\\\n            <button class=\\\\\\\"ui-alert-but ui-alert-confirm\\\\\\\">确认</button>\\\\r\\\\n        </div>\\\\r\\\\n    </div>\\\\r\\\\n</div>\\\";\",\"/*\\r\\n * @Author: linnanli \\r\\n * @Description: Toast js文件 \\r\\n * @Date: 2018-02-25 16:55:26 \\r\\n * @Last Modified by: linnanli\\r\\n * @Last Modified time: 2018-02-25 18:37:53\\r\\n */\\r\\n\\r\\nrequire('./index.scss');\\r\\nvar tpl = require('./index.html');\\r\\nvar util = require('util');\\r\\nvar type = util.type;\\r\\n\\r\\n// 常量\\r\\nvar DEFAULT_TIMES = 1500;\\r\\n\\r\\nfunction Toast() {\\r\\n    this.name = 'ui-toast';\\r\\n    this.$el = null;\\r\\n}\\r\\n\\r\\n/**\\r\\n * @name $findEle\\r\\n * @private\\r\\n * @description 查找DOM节点方法\\r\\n */\\r\\nfunction $findEle(){\\r\\n    this.messageEle = this.$el.querySelector('.ui-toast');\\r\\n}\\r\\n\\r\\n/**\\r\\n * @name $timeoutHide\\r\\n * @private\\r\\n * @description toast 定时关闭\\r\\n */\\r\\nfunction $timeoutHide(timeout){\\r\\n    var _this = this;\\r\\n\\r\\n    var timer = setTimeout(function(){\\r\\n        _this.hidden();\\r\\n        clearTimeout(timer);\\r\\n    }, timeout || DEFAULT_TIMES);\\r\\n}\\r\\n\\r\\nToast.prototype = {\\r\\n    constructor: Toast,\\r\\n    $init: function (options) {\\r\\n        if (!type.isObject(options)) return;\\r\\n\\r\\n        if(this.$el === null){\\r\\n            var div = document.createElement('div');\\r\\n            div.innerHTML = tpl;\\r\\n            this.$el = div.childNodes[0];\\r\\n            this.$el.id = this.name;\\r\\n            this.hidden();\\r\\n            $findEle.call(this);\\r\\n            document.body.appendChild(this.$el);\\r\\n        }\\r\\n        if (!type.isString(options.message) || options.message === '') return;\\r\\n        \\r\\n        this.setMessage(options.message);\\r\\n        //超时关闭toast\\r\\n        $timeoutHide.call(this,options.timeout);\\r\\n        this.show();\\r\\n    },\\r\\n    setMessage:function(text){\\r\\n        this.messageEle.innerText = text || '';\\r\\n        return this;\\r\\n    },\\r\\n    show:function(){\\r\\n        this.$el.style.display = 'block';\\r\\n        return this;\\r\\n    },\\r\\n    hidden:function(){\\r\\n        this.$el.style.display = 'none';\\r\\n        return this;\\r\\n    }\\r\\n};\\r\\n\\r\\n/**\\r\\n * @name Toast.getSingle\\r\\n * @description 获取构造函数的单例对象\\r\\n */\\r\\nvar instancs = null;\\r\\nToast.getSingle = function(){\\r\\n    return instancs === null ? instancs = new Toast() : instancs;\\r\\n}\\r\\n\\r\\nmodule.exports = Toast;\",\"module.exports = \\\"<div class=\\\\\\\"ui-toast-mask\\\\\\\">\\\\r\\\\n    <div class=\\\\\\\"ui-toast\\\\\\\"></div>\\\\r\\\\n</div>\\\";\"]}"}