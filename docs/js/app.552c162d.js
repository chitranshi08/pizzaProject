(function(e){function t(t){for(var n,u,i=t[0],o=t[1],d=t[2],p=0,l=[];p<i.length;p++)u=i[p],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&l.push(a[u][0]),a[u]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);c&&c(t);while(l.length)l.shift()();return s.push.apply(s,d||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var o=r[i];0!==a[o]&&(n=!1)}n&&(s.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={app:0},s=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var c=o;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Orders")],1)},s=[],u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("Orders List")]),r("table",[e._m(0),r("tbody",e._l(e.items,(function(t,n){return r("tr",{key:t.pizzaName},[r("td",[e._v(e._s(t.pizzaName))]),r("td",[e._v(e._s(t.number))]),r("td",[e._v(e._s(t.amountOrder))]),r("td",[e._v(e._s(t.customer))]),r("td",[e._v(e._s(t.address))]),r("td",[e._v(e._s(t.status))]),r("td",["Ready To Serve"!=t.status?r("button",{on:{click:function(t){return e.updateStatus(n)}}},[e._v("Change Status")]):e._e()])])})),0)])])},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",[r("tr",[r("th",[e._v("Pizza")]),r("th",[e._v("No. of items")]),r("th",[e._v("Total Price")]),r("th",[e._v("Customer Name")]),r("th",[e._v("Delivery Address")]),r("th",[e._v("Status")]),r("th")])])}],o={name:"Orders",data:function(){return{items:[{pizzaName:"Cheese and Corn",number:8,customer:"Roshini",amountOrder:200,address:"Vijayant Khand",status:"Order Recieved"},{pizzaName:"Margherita",number:4,customer:"Priya",amountOrder:270,address:"Hazrat Ganj",status:"Order Recieved"},{pizzaName:"Mexican Green Wave",number:6,customer:"Swati",amountOrder:250,address:"Ring Road",status:" Order Recieved"},{pizzaName:"Peppy Paneer",number:6,customer:"Shona",amountOrder:300,address:"Nishantganj",status:" Order Recieved"},{pizzaName:"Spicy Desi",number:6,customer:"Anamika",amountOrder:350,address:"Rajajipurum",status:" Order Recieved"},{pizzaName:"Delux Veggie",number:6,customer:"Pihu",amountOrder:200,address:"Daliganj",status:" Order Recieved"}]}},methods:{updateStatus:function(e){"Order Recieved"==this.items[e].status?this.items[e].status="Preparing":"Preparing"==this.items[e].status&&(this.items[e].status="Ready To Serve")}}},d=o,c=(r("f4ea"),r("2877")),p=Object(c["a"])(d,u,i,!1,null,"d7e9c7d8",null),l=p.exports,f={name:"App",components:{Orders:l}},m=f,v=(r("034f"),Object(c["a"])(m,a,s,!1,null,null,null)),h=v.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(h)}}).$mount("#app")},"85ec":function(e,t,r){},b24a:function(e,t,r){},f4ea:function(e,t,r){"use strict";r("b24a")}});
//# sourceMappingURL=app.552c162d.js.map