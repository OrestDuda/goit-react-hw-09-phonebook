(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[4],{103:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(33);function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],r=!0,n=!1,i=void 0;try{for(var s,l=e[Symbol.iterator]();!(r=(s=l.next()).done)&&(a.push(s.value),!t||a.length!==t);r=!0);}catch(c){n=!0,i=c}finally{try{r||null==l.return||l.return()}finally{if(n)throw i}}return a}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},108:function(e,t,a){e.exports={form:"RegisterView_form__3KUlo",title:"RegisterView_title__3te5Z",label:"RegisterView_label__1TkRG",input:"RegisterView_input__2iHyN",register:"RegisterView_register__2pjFi"}},111:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u}));var r=a(103),n=a(0),i=a(10),s=a(22),l=a(108),c=a.n(l),o=a(1);function u(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),a=t[0],l=t[1],u=Object(n.useState)(""),b=Object(r.a)(u,2),m=b[0],p=b[1],j=Object(n.useState)(""),f=Object(r.a)(j,2),d=f[0],h=f[1],g=Object(i.b)();return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{className:c.a.title,children:"Register"}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),g(s.a.userRegister({name:d,email:a,password:m})),p(""),l(""),h("")},autoComplete:"off",className:c.a.form,children:[Object(o.jsxs)("label",{className:c.a.label,children:["Name",Object(o.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:d,onChange:function(e){h(e.currentTarget.value)},className:c.a.input})]}),Object(o.jsxs)("label",{className:c.a.label,children:["Email",Object(o.jsx)("input",{type:"email",name:"email",required:!0,value:a,onChange:function(e){l(e.currentTarget.value)},className:c.a.input})]}),Object(o.jsxs)("label",{className:c.a.label,children:["Password",Object(o.jsx)("input",{type:"password",name:"password",required:!0,value:m,onChange:function(e){p(e.currentTarget.value)},className:c.a.input})]}),Object(o.jsx)("button",{type:"submit",className:c.a.register,children:"Register"})]})]})}}}]);
//# sourceMappingURL=register.7c1cf9a0.chunk.js.map