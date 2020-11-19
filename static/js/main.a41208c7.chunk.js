(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{125:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return j}));var r=n(39),c=n.n(r),a=n(102),u=n(139),i=n.n(u),o=(n(81),i.a.create({baseURL:"https://fakestoreapi.com"}));o.interceptors.response.use((function(t){return t}),(function(t){return t})),o.interceptors.request.use((function(t){return t}));var s=function(){var t=Object(a.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.get("/products"));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=function(){var t=Object(a.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.get("/products/".concat(e)));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},153:function(t,e,n){},154:function(t,e,n){},163:function(t,e,n){},195:function(t,e,n){"use strict";n.r(e),n.d(e,"IS_LOADING",(function(){return r}));var r="IS_LOADING"},214:function(t,e,n){"use strict";n.r(e);var r=n(4),c=n(0),a=n.n(c),u=n(18),i=n.n(u),o=(n(153),n(85)),s=n(13),j=n(33),d=Object(j.a)(),b=n(219),f=(n(154),function(){return Object(r.jsx)("div",{className:"loading-content",children:Object(r.jsx)("div",{className:"loading-icon",children:Object(r.jsx)(b.a,{})})})}),l=n(32),p=n(146),O=function(t){var e=t.component,n=Object(p.a)(t,["component"]);return Object(r.jsx)(s.b,Object(l.a)(Object(l.a)({},n),{},{render:function(t){return Object(r.jsx)(e,Object(l.a)({},t))}}))},h=a.a.lazy((function(){return Promise.all([n.e(4),n.e(7)]).then(n.bind(null,315))})),x=a.a.lazy((function(){return n.e(6).then(n.bind(null,311))})),m=a.a.lazy((function(){return Promise.all([n.e(3),n.e(5)]).then(n.bind(null,314))}));function v(){return Object(r.jsx)(o.a,{basename:"/",history:d,children:Object(r.jsx)(c.Suspense,{fallback:Object(r.jsx)(f,{}),children:Object(r.jsxs)(s.d,{children:[Object(r.jsx)(O,{exact:!0,path:"/products",component:h}),Object(r.jsx)(O,{exact:!0,path:"/products/:id",component:x}),Object(r.jsx)(O,{exact:!0,path:"/order",component:m}),Object(r.jsx)(s.a,{from:"/",to:"/products"})]})})})}var y=n(54),g=n(217),w=(n(163),n(142)),E=n(104),S=n(216),k=n(82),R=n(221),I=n(224),C=n(223),T=n(222),_=n(72),A=function(){var t=Object(y.c)(),e=Object(y.d)((function(t){return t.cart})).items;return Object(r.jsx)(r.Fragment,{children:e.length>0?Object(r.jsxs)(c.Fragment,{children:[e.map((function(e){var n=e.title,c=e.id,a=e.count;return Object(r.jsxs)("div",{className:"cart-product",children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("strong",{children:"Name"})," ",n," ",Object(r.jsx)("strong",{children:"Count"})," ",a]})," ",Object(r.jsx)(k.a,{type:"button",onClick:function(){return t(Object(_.d)(c))},children:Object(r.jsx)(I.a,{})})," ",Object(r.jsx)(k.a,{type:"button",onClick:function(){return t(Object(_.b)(c))},children:Object(r.jsx)(C.a,{})})," ",Object(r.jsx)(k.a,{type:"button",onClick:function(){return t(Object(_.a)(c))},children:Object(r.jsx)(T.a,{})})," "]},c)})),Object(r.jsx)("a",{href:"/shopping-cart/#/order",className:"order-review",children:"Review Order"})]}):Object(r.jsx)("strong",{children:"Start Shopping Now!"})})},L=function(){var t=Object(c.useState)(!1),e=Object(w.a)(t,2),n=e[0],a=e[1],u=Object(r.jsx)(E.a,{onClick:function(t){"3"===t.key&&a(!1)},children:Object(r.jsx)(E.a.Item,{children:Object(r.jsx)(A,{})})});return Object(r.jsx)(S.a,{onVisibleChange:function(t){return a(t)},visible:n,overlay:u,children:Object(r.jsx)(k.a,{style:{border:"none",padding:0},children:Object(r.jsx)(R.a,{style:{fontSize:20,verticalAlign:"top"}})})},"more")},D=n(220),N=Object(r.jsx)(E.a,{children:Object(r.jsxs)(E.a.Item,{children:[Object(r.jsx)("a",{href:"/profile",children:"Profile"}),Object(r.jsx)("a",{href:"/sign-out",children:"SignOut"})]})}),P=function(){return Object(r.jsx)(S.a,{overlay:N,children:Object(r.jsx)(k.a,{style:{border:"none",padding:0},children:Object(r.jsx)(D.a,{style:{fontSize:20,verticalAlign:"top"}})})},"more")},z=function(){return Object(r.jsx)(g.a,{className:"site-page-header",backIcon:!1,subTitle:"Products Shopping Cart",title:Object(r.jsx)(L,{}),extra:[Object(r.jsx)(P,{},"more")]})},M=function(t){var e=Object(y.d)((function(t){return t.isLoading}));return Object(r.jsxs)(c.Fragment,{children:[e&&Object(r.jsx)(f,{}),Object(r.jsx)(z,{}),t.children]})};var U=function(){return Object(r.jsx)(M,{children:Object(r.jsx)(v,{})})},F=n(81),G=n(141);i.a.render(Object(r.jsx)(y.a,{store:F.a,children:Object(r.jsx)(G.a,{loading:Object(r.jsx)(f,{}),persistor:F.b,children:Object(r.jsx)(U,{})})}),document.getElementById("root"))},34:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"d",(function(){return c})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"f",(function(){return i})),n.d(e,"e",(function(){return o}));var r="ADD_TO_CART",c="INCREASE_CART_ITEM",a="DECREASE_CART_ITEM",u="DELETE_ITEM",i="TOTAL_PRICE",o="SUBMIT_ORDER"},50:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return a}));var r="ALL_PRODUCTS",c="ALL_PRODUCTS_RECIEVE",a="ERROR_REQUESTS"},72:function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return a})),n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return i})),n.d(e,"f",(function(){return o})),n.d(e,"e",(function(){return s}));var r=n(34),c=function(t){return{type:r.a,payload:t}},a=function(t){return{type:r.c,payload:t}},u=function(t){return{type:r.d,payload:t}},i=function(t){return{type:r.b,payload:t}},o=function(t){return{type:r.e,payload:t}},s=function(){return{type:r.f}}},81:function(t,e,n){"use strict";n.d(e,"b",(function(){return P}));var r=n(31),c=n(32),a=n(50),u={},i=n(195).IS_LOADING,o=n(143),s=n(34),j=function(t){return t.count++,t},d=function(t){return t.count=1==t.count?1:t.count-1,t},b=function(t){return t.total=t.count*t.price,t},f={items:[]},l=Object(r.combineReducers)({products:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case a.b:return Object(c.a)(Object(c.a)({},t),{},{data:e.payload});case a.c:return Object(c.a)(Object(c.a)({},t),{},{error:!0});default:return t}},isLoading:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case i:return e.payload;default:return t}},cart:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case s.a:var n=Object(c.a)(Object(c.a)({},e.payload),{},{count:1});return Object(c.a)(Object(c.a)({},t),{},{items:[].concat(Object(o.a)(t.items),[n])});case s.c:return{items:t.items.filter((function(t){return t.id!==e.payload}))};case s.b:return{items:t.items.map((function(t){return t.id==e.payload&&d(t),t}))};case s.d:return{items:t.items.map((function(t){return t.id==e.payload&&j(t),t}))};case s.f:var r=t.items.map(b),a=r.map((function(t){return t.total})).reduce((function(t,e){return t+e}));return{items:r,total:a};case s.e:return{items:[],order:e.payload};default:return t}}}),p=n(138),O=n(144),h=n(39),x=n.n(h),m=n(57),v=n(125),y=n(93),g=x.a.mark(E),w=x.a.mark(S);function E(t){var e;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(m.b)(v.a,t.payload);case 3:return e=n.sent,n.next=6,Object(m.c)(Object(y.b)(e.data));case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(m.c)(Object(y.a)());case 12:case"end":return n.stop()}}),g,null,[[0,8]])}function S(){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(m.d)(a.a,E);case 2:case"end":return t.stop()}}),w)}var k=x.a.mark(R);function R(){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(m.a)([S()]);case 2:case"end":return t.stop()}}),k)}var I=n(140),C=n.n(I),T=n(103),_={key:"root",storage:C.a,whiteList:["products","cart"],blacklist:["isLoading"]},A=Object(T.a)(_,l),L=Object(O.a)(),D=Object(p.composeWithDevTools)(Object(r.applyMiddleware)(L)),N=Object(r.createStore)(A,D),P=Object(T.b)(N);L.run(R);e.a=N},93:function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return u}));var r=n(50),c=function(t){return{type:r.a,payload:t}},a=function(t){return{type:r.b,payload:t}},u=function(){return{type:r.c}}}},[[214,1,2]]]);
//# sourceMappingURL=main.a41208c7.chunk.js.map