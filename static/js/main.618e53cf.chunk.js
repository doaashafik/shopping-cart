(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[1],{126:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return j}));var r=n(38),c=n.n(r),a=n(102),u=n(141),o=n.n(u),i=(n(80),o.a.create({baseURL:"https://fakestoreapi.com"}));i.interceptors.response.use((function(t){return t}),(function(t){return t})),i.interceptors.request.use((function(t){return t}));var s=function(){var t=Object(a.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",i.get("/products"));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=function(){var t=Object(a.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",i.get("/products/".concat(e)));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},154:function(t,e,n){},155:function(t,e,n){},164:function(t,e,n){},165:function(t,e,n){},197:function(t,e,n){"use strict";n.r(e),n.d(e,"IS_LOADING",(function(){return r}));var r="IS_LOADING"},216:function(t,e,n){"use strict";n.r(e);var r=n(7),c=n(0),a=n.n(c),u=n(17),o=n.n(u),i=(n(154),n(85)),s=n(18),j=n(33),b=Object(j.a)(),d=n(222),f=(n(155),function(){return Object(r.jsx)("div",{className:"loading-content",children:Object(r.jsx)("div",{className:"loading-icon",children:Object(r.jsx)(d.a,{})})})}),l=n(13),O=n(147),p=function(t){var e=t.component,n=Object(O.a)(t,["component"]);return Object(r.jsx)(s.b,Object(l.a)(Object(l.a)({},n),{},{render:function(t){return Object(r.jsx)(e,Object(l.a)({},t))}}))},h=a.a.lazy((function(){return Promise.all([n.e(0),n.e(5),n.e(9)]).then(n.bind(null,334))})),x=a.a.lazy((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,332))})),m=a.a.lazy((function(){return Promise.all([n.e(4),n.e(7)]).then(n.bind(null,329))})),v=a.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,333))}));function y(t){var e=t.children;return Object(r.jsxs)(i.a,{basename:"/",history:b,children:[e,Object(r.jsx)(c.Suspense,{fallback:Object(r.jsx)(f,{}),children:Object(r.jsxs)(s.d,{children:[Object(r.jsx)(p,{exact:!0,path:"/products",component:h}),Object(r.jsx)(p,{exact:!0,path:"/products/:id",component:x}),Object(r.jsx)(p,{exact:!0,path:"/order",component:m}),Object(r.jsx)(p,{exact:!0,path:"/cart",component:v}),Object(r.jsx)(s.a,{from:"/",to:"/products"})]})})]})}var g=n(64),E=n(219),w=(n(164),n(223)),R=n(221),S=(n(165),function(){var t=Object(g.c)((function(t){return t.cart})).count;return Object(r.jsx)("a",{href:"/shopping-cart/#/cart",children:Object(r.jsx)(R.a,{className:"site-badge-count-109",count:t,showZero:!0,style:{backgroundColor:"#52c41a"},children:Object(r.jsx)(w.a,{style:{fontSize:20,verticalAlign:"top"}})})})}),_=n(104),k=n(218),I=n(81),T=n(224),A=Object(r.jsx)(_.a,{children:Object(r.jsxs)(_.a.Item,{children:[Object(r.jsx)("a",{href:"/profile",children:"Profile"}),Object(r.jsx)("a",{href:"/sign-out",children:"SignOut"})]})}),L=function(){return Object(r.jsx)(k.a,{overlay:A,children:Object(r.jsx)(I.a,{style:{border:"none",padding:0},children:Object(r.jsx)(T.a,{style:{fontSize:20,verticalAlign:"top"}})})},"more")},D=function(){return Object(r.jsx)(E.a,{className:"site-page-header",onBack:function(){return window.history.back()},title:"Ecommerce Shopping",extra:[Object(r.jsx)(L,{},"profile"),Object(r.jsx)(S,{},"cart")]})},C=function(t){return Object(r.jsxs)(c.Fragment,{children:[Object(r.jsx)(D,{}),t.children]})};var N=function(){return Object(r.jsx)(C,{children:Object(r.jsx)(y,{})})},P=n(80),z=n(143);o.a.render(Object(r.jsx)(g.a,{store:P.a,children:Object(r.jsx)(z.a,{loading:Object(r.jsx)(f,{}),persistor:P.b,children:Object(r.jsx)(N,{})})}),document.getElementById("root"))},49:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return a}));var r="ALL_PRODUCTS",c="ALL_PRODUCTS_RECIEVE",a="ERROR_REQUESTS"},54:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"d",(function(){return c})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"f",(function(){return o})),n.d(e,"e",(function(){return i}));var r="ADD_TO_CART",c="INCREASE_CART_ITEM",a="DECREASE_CART_ITEM",u="DELETE_ITEM",o="TOTAL_PRICE",i="SUBMIT_ORDER"},80:function(t,e,n){"use strict";n.d(e,"b",(function(){return M}));var r=n(32),c=n(13),a=n(49),u={},o=n(197).IS_LOADING,i=n(50),s=n(54),j=function(t){return t.count++,t},b=function(t){return t.count=t.count>=1?t.count-1:0,t},d=function(t){return t.total=t.count*t.price,t},f=function(t,e){var n=t.filter((function(t){return e.id==t.id}));return n.length>0?(n[0].count++,[].concat(Object(i.a)(t.filter((function(t){return t.id!==e.id}))),[n[0]])):[].concat(Object(i.a)(t),[Object(c.a)(Object(c.a)({},e),{},{count:1})])},l=function(t){var e=t.map((function(t){return t.count}));return e.length>0?e.reduce((function(t,e){return t+e})):0},O={items:[],count:0},p=Object(r.combineReducers)({products:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case a.b:return Object(c.a)(Object(c.a)({},t),{},{data:e.payload});case a.c:return Object(c.a)(Object(c.a)({},t),{},{error:!0});default:return t}},isLoading:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case o:return e.payload;default:return t}},cart:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case s.a:var n=Object(c.a)({},e.payload),r=f(Object(i.a)(t.items),n);return Object(c.a)(Object(c.a)({},t),{},{items:r,count:l(Object(i.a)(r))});case s.c:var a=t.items.filter((function(t){return t.id!==e.payload}));return Object(c.a)(Object(c.a)({},t),{},{items:a,count:l(Object(i.a)(a))});case s.b:var u=t.items.map((function(t){return t.id===e.payload&&b(t),t})).filter((function(t){return t.count>0}));return Object(c.a)(Object(c.a)({},t),{},{items:u,count:l(Object(i.a)(u))});case s.d:var o=t.items.map((function(t){return t.id===e.payload&&j(t),t}));return Object(c.a)(Object(c.a)({},t),{},{items:o,count:l(Object(i.a)(o))});case s.f:var p=t.items.map(d),h=p.map((function(t){return t.total})),x=h.length>0?h.reduce((function(t,e){return t+e})):0;return Object(c.a)(Object(c.a)({},t),{},{items:p,total:x});case s.e:return Object(c.a)(Object(c.a)({},t),{},{items:[],order:e.payload,count:0});default:return t}}}),h=n(140),x=n(146),m=n(38),v=n.n(m),y=n(57),g=n(126),E=n(94),w=v.a.mark(S),R=v.a.mark(_);function S(t){var e;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(y.b)(g.a,t.payload);case 3:return e=n.sent,n.next=6,Object(y.c)(Object(E.b)(e.data));case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(y.c)(Object(E.a)());case 12:case"end":return n.stop()}}),w,null,[[0,8]])}function _(){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(y.d)(a.a,S);case 2:case"end":return t.stop()}}),R)}var k=v.a.mark(I);function I(){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(y.a)([_()]);case 2:case"end":return t.stop()}}),k)}var T=n(142),A=n.n(T),L=n(103),D={key:"root",storage:A.a,whiteList:["products","cart"],blacklist:["isLoading"]},C=Object(L.a)(D,p),N=Object(x.a)(),P=Object(h.composeWithDevTools)(Object(r.applyMiddleware)(N)),z=Object(r.createStore)(C,P),M=Object(L.b)(z);N.run(I);e.a=z},94:function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return u}));var r=n(49),c=function(t){return{type:r.a,payload:t}},a=function(t){return{type:r.b,payload:t}},u=function(){return{type:r.c}}}},[[216,2,3]]]);
//# sourceMappingURL=main.618e53cf.chunk.js.map