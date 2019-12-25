(function(t){function e(e){for(var r,s,u=e[0],a=e[1],c=e[2],f=0,p=[];f<u.length;f++)s=u[f],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,u=1;u<n.length;u++){var a=n[u];0!==o[a]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/dist/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var l=a;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"JetRuby",contain:"",src:"https://hhcdn.ru/employer-logo/2777580.png",transition:"scale-transition",width:"40"}})],1)]),n("v-content",[n("Logger")],1)],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"mb-4"},t._l(t.buttons,(function(e,r){return n("v-btn",{key:r,staticClass:"mr-4",attrs:{large:"",color:"primary",outlined:""},on:{click:function(e){return t.onClick(r+1)}}},[t._v(t._s(e.text))])})),1),n("v-row",[n("v-textarea",{attrs:{solo:"",label:"Logs",readonly:"","auto-grow":"",value:t.formattedLogs,loading:t.isProcessing}})],1),n("v-row",{attrs:{justify:"end"}},[n("v-btn",{attrs:{large:"",color:"secondary"},on:{click:t.reset}},[t._v("RESET")])],1)],1)},u=[],a=(n("99af"),n("a15b"),n("d3b7"),n("159b"),n("2909")),c={name:"Logger",data:function(){return{logs:[],queue:[],timeoutList:[],isProcessing:!1,buttons:[{text:"Button 1"},{text:"Button 2"},{text:"Button 3"}]}},computed:{formattedLogs:function(){return this.logs.join("\n")}},methods:{formatDate:function(t){return t.toLocaleDateString("ru-RU",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})},printString:function(t,e,n,r){return"".concat(this.formatDate(e),": Нажата кнопка ").concat(n,", задержка ").concat(r," сек., время нажатия ").concat(this.formatDate(t))},getPromise:function(t,e,n){var r=this;return new Promise((function(o){var i=setTimeout((function(){o(r.printString(t,new Date,n,e))}),1e3*e);r.timeoutList.push(i)}))},processQueue:function(){var t=this;this.queue.length&&(this.isProcessing=!0,this.getPromise.apply(this,Object(a["a"])(this.queue.shift())).then((function(e){t.logs.push(e),t.queue.length?t.processQueue():t.isProcessing=!1})))},onClick:function(t){var e=Math.floor(10*Math.random())+1,n=new Date;this.queue.push([n,e,t]),this.isProcessing||this.processQueue()},reset:function(){this.timeoutList.forEach((function(t){clearInterval(t)})),this.logs=[],this.queue=[],this.timeoutList=[],this.isProcessing=!1}}},l=c,f=n("2877"),p=Object(f["a"])(l,s,u,!1,null,null,null),d=p.exports,h={name:"LoggerApp",components:{Logger:d},data:function(){return{}}},g=h,v=Object(f["a"])(g,o,i,!1,null,null,null),m=v.exports,b=n("ce5b"),y=n.n(b);n("bf40");r["default"].use(y.a);var w=new y.a({});r["default"].config.productionTip=!1,new r["default"]({vuetify:w,render:function(t){return t(m)}}).$mount("#app")}});
//# sourceMappingURL=app.4b733f99.js.map