(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[8],{228:function(t,e,c){"use strict";c.d(e,"c",(function(){return r})),c.d(e,"d",(function(){return a})),c.d(e,"b",(function(){return i})),c.d(e,"a",(function(){return s})),c.d(e,"f",(function(){return u})),c.d(e,"e",(function(){return o}));var n=c(53),r=function(t){return{type:n.a,payload:t}},a=function(t){return{type:n.c,payload:t}},i=function(t){return{type:n.d,payload:t}},s=function(t){return{type:n.b,payload:t}},u=function(t){return{type:n.e,payload:t}},o=function(){return{type:n.f}}},235:function(t,e,c){"use strict";c.d(e,"a",(function(){return i}));var n=c(242),r=c(7),a=c(332),i=function(t){var e=a.a.useNotification(),c=Object(n.a)(e,2),i=c[0],s=c[1];return Object(r.jsxs)(r.Fragment,{children:[s,t.children({notifiy:function(t){var e=t.message,c=t.title;i.success({message:"ADD ITEM",description:"".concat(c," ").concat(e),duration:3,placement:"topRight"})}})]})}},245:function(t,e,c){},261:function(t,e,c){"use strict";c.d(e,"a",(function(){return v}));var n=c(35),r=c.n(n),a=c(85),i=c(7),s=c(0),u=c(57),o=c(228),d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"}},{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"}}]},name:"plus-square",theme:"outlined"},f=c(58),l=function(t,e){return s.createElement(f.a,Object.assign({},t,{ref:e,icon:d}))};l.displayName="PlusSquareOutlined";var j=s.forwardRef(l),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"}},{tag:"path",attrs:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"}}]},name:"minus-square",theme:"outlined"},b=function(t,e){return s.createElement(f.a,Object.assign({},t,{ref:e,icon:p}))};b.displayName="MinusSquareOutlined";var h=s.forwardRef(b),O=c(221),v=(c(245),function(t){var e=t.notifiy,c=t.item,n=Object(u.c)(),s=c.title,d=c.id,f=c.count;return Object(i.jsxs)("div",{className:"add-to-cart",children:[Object(i.jsxs)("span",{onClick:Object(a.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e({title:s,message:"Added To Cart"});case 2:if(0!=f){t.next=7;break}return t.next=5,n(Object(o.c)(c));case 5:t.next=9;break;case 7:return t.next=9,n(Object(o.b)(d));case 9:case"end":return t.stop()}}),t)}))),children:[Object(i.jsx)(j,{className:"product-icon"})," "]}),Object(i.jsx)(O.a,{className:"site-badge-count-109",count:f,showZero:!0,style:{backgroundColor:"#52c41a"}})," ",Object(i.jsx)("span",{onClick:function(){n(Object(o.a)(d))},children:Object(i.jsx)(h,{className:"product-icon"})})]})})},264:function(t,e,c){},334:function(t,e,c){"use strict";c.r(e);var n=c(18),r=c(242);var a=c(7),i=c(0),s=(c(264),c(127)),u=c(17),o=c(261),d=c(235),f=c(57);e.default=function(t){!function(t){if(null==t)throw new TypeError("Cannot destructure undefined")}(t);var e=Object(i.useState)({}),c=Object(r.a)(e,2),l=c[0],j=c[1],p=Object(u.g)().id,b=Object(f.d)((function(t){return t.cart})).items;Object(i.useEffect)((function(){Object(s.b)(p).then((function(t){var e=t.data;j({product:e,recieved:!0})}))}),[]),Object(i.useEffect)((function(){}),[b]);var h=l.recieved,O=l.product;return console.log(b),Object(a.jsx)(i.Fragment,{children:h&&Object(a.jsxs)("div",{className:"product-card-border-less-wrapper",children:[Object(a.jsx)("p",{children:O.title}),Object(a.jsx)("div",{className:"product-image",children:Object(a.jsx)("img",{src:O.image,alt:"product"})}),Object(a.jsxs)("div",{className:" mt-2 d-flex justify-content-around",children:[Object(a.jsx)("p",{children:O.category}),Object(a.jsx)("p",{children:O.price})]}),Object(a.jsx)(d.a,{children:function(t){var e=t.notifiy;console.log(O,b);var c=b.filter((function(t){return t.id==O.id}));return Object(a.jsx)(o.a,{item:Object(n.a)(Object(n.a)({},O),{},{count:c.length>0?c[0].count:0}),notifiy:e})}}),Object(a.jsx)("p",{className:"mt-2",children:O.description})]})})}}}]);
//# sourceMappingURL=8.5d80c273.chunk.js.map