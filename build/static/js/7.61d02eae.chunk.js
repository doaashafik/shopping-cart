(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[7],{228:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i})),n.d(t,"f",(function(){return o})),n.d(t,"e",(function(){return u}));var r=n(54),c=function(e){return{type:r.a,payload:e}},s=function(e){return{type:r.c,payload:e}},a=function(e){return{type:r.d,payload:e}},i=function(e){return{type:r.b,payload:e}},o=function(e){return{type:r.e,payload:e}},u=function(){return{type:r.f}}},317:function(e,t,n){},318:function(e,t,n){},319:function(e,t,n){},320:function(e,t,n){},329:function(e,t,n){"use strict";n.r(t);var r=n(7),c=n(0),s=n(324),a=n(330),i=function(e){var t=e.field.name,n=e.type,c=e.placeholder,s=e.className,i=e.value,o=e.form.setFieldValue;return Object(r.jsx)(a.a,{name:t,className:s,value:i,type:n,placeholder:c,onChange:function(e){return o(t,e.target.value)}})},o=n(13),u=n(81),l=function(e){var t=e.content,n=e.type;return Object(r.jsx)(u.a,Object(o.a)(Object(o.a)({},e),{},{htmlType:n,children:t}))},d=n(323),j=d.object().shape({address:d.string().required(),phone:d.number().required(),email:d.string().email().required()}),p=(n(317),function(e){var t=e.message;return Object(r.jsx)("div",{className:"error-message",children:t})}),b=(n(318),function(e){var t=e.submitForm;return Object(r.jsx)(s.c,{initialValues:{address:"",phone:"",email:""},onSubmit:t,validationSchema:j,children:function(e){var t=e.errors,n=e.values,c=n.phone,a=n.email,o=n.address;return Object(r.jsxs)(s.b,{children:[Object(r.jsx)("label",{children:"Email"}),Object(r.jsx)(s.a,{className:"order-input",component:i,name:"email",type:"text",placeholder:"Your Email",value:a}),Object(r.jsx)(p,{message:t.email}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{children:"Phone"}),Object(r.jsx)(s.a,{className:"order-input",component:i,name:"phone",type:"text",placeholder:"Your Phone",value:c}),Object(r.jsx)(p,{message:t.phone}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{children:"Address"}),Object(r.jsx)(s.a,{className:"order-input",component:i,name:"address",type:"text",placeholder:"Your Address",value:o}),Object(r.jsx)(p,{message:t.address}),Object(r.jsx)(l,{content:"Order Now",type:"submit"})]})}})}),h=(n(319),function(e){var t=e.product,n=t.count,c=t.title,s=t.price;return Object(r.jsxs)("div",{className:"order-product",children:[Object(r.jsxs)("p",{children:[Object(r.jsx)("strong",{children:"name: "})," ",c]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("strong",{children:"Quantity:"})," ",n]}),Object(r.jsxs)("p",{children:[Object(r.jsx)("strong",{children:"price Per Item:"})," ",s]})]})}),m=n(275),O=n(276),f=n(228),x=n(64),g=n(18);n(320),t.default=Object(g.h)((function(e){var t=e.history,n=Object(x.b)(),s=Object(x.c)((function(e){return e.cart})),a=s.items,i=s.total;Object(c.useEffect)((function(){n(Object(f.e)())}),[i]);return Object(r.jsx)(m.a,{children:a.length>0?Object(r.jsxs)(c.Fragment,{children:[Object(r.jsxs)(O.a,{className:"order-now",span:10,children:[Object(r.jsx)("h3",{className:"mt-2",children:"Order Now"}),Object(r.jsx)(b,{submitForm:function(e){n(Object(f.f)(e))}})]}),Object(r.jsxs)(O.a,{span:10,className:"order-products",children:[Object(r.jsx)("h3",{className:"mt-2",children:"Products"}),a.map((function(e,t){return Object(r.jsx)(h,{product:e},t)})),Object(r.jsxs)("strong",{children:["Total: ",i]})]})]}):Object(r.jsxs)(O.a,{className:"mt-2 submit-message",span:10,children:[Object(r.jsxs)("h3",{className:"",children:["Ok it's Done!,Back to Shopping Again!"," "," "," ",Object(r.jsx)("a",{href:"/shopping-cart/#/products",children:"Products"})," "]}),void setTimeout((function(){t.push("/products")}),3e3)]})})}))}}]);
//# sourceMappingURL=7.61d02eae.chunk.js.map