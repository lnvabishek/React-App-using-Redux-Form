(this.webpackJsonpmyform=this.webpackJsonpmyform||[]).push([[0],{229:function(e,s,t){"use strict";t.r(s);var r=t(4),a=t(0),c=t.n(a),i=t(40),n=t.n(i),o=t(9),l=t(7),j={};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,s=arguments.length>1?arguments[1]:void 0;return"createUser"===s.type?s.payload:e},m=t(87),b=Object(l.b)({createUser:d,form:m.a}),p=Object(l.c)(b),u=t(91),h=t(92),O=t(95),f=t(94);var x=t(85),w=t(86),v=Object(o.b)((function(e){return{user:e.createUser}}))((function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"Details"}),Object(r.jsx)("br",{}),"Firstname: ",e.user.firstName,Object(r.jsx)("br",{}),"LastName: ",e.user.lastName,Object(r.jsx)("br",{}),"Email: ",e.user.email,Object(r.jsx)("br",{}),"Password: ",e.user.password,Object(r.jsx)("br",{}),"Confirmpassword: ",e.user.confirmPassword]})})),N=Object(w.a)({form:"simple"})(Object(o.b)((function(e){return{user:e.createUser}}))((function(e){var s=e.handleSubmit,t=e.pristine,a=e.submitting,c=e.user;return console.log(c),Object(r.jsxs)("div",{children:[Object(r.jsxs)("form",{onSubmit:s,children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"First Name"}),Object(r.jsx)("div",{children:Object(r.jsx)(x.a,{name:"firstName",component:"input",type:"text",placeholder:"First Name"})})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"Last Name"}),Object(r.jsx)("div",{children:Object(r.jsx)(x.a,{name:"lastName",component:"input",type:"text",placeholder:"Last Name"})})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"Email"}),Object(r.jsx)("div",{children:Object(r.jsx)(x.a,{name:"email",component:"input",type:"email",placeholder:"Email"})})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"Password"}),Object(r.jsx)("div",{children:Object(r.jsx)(x.a,{name:"password",component:"input",type:"password",placeholder:"Password"})})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{children:"ConfirmPassword"}),Object(r.jsx)("div",{children:Object(r.jsx)(x.a,{name:"confirmPassword",component:"input",type:"password",placeholder:"Confirm Password"})})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",disabled:t||a,children:"Submit"})})]}),c.show&&Object(r.jsx)("div",{children:Object(r.jsx)(v,{})})]})}))),y=t(42);var P=function(e){Object(O.a)(t,e);var s=Object(f.a)(t);function t(e){var r;return Object(u.a)(this,t),(r=s.call(this,e)).submit=function(e){console.log(e),r.setState({firstName:e.firstName,lastName:e.lastName,email:e.email,password:e.password,confirmPassword:e.confirmPassword}),r.setState({show:!0});var s=r.state,t=s.firstName,a=s.lastName,c=s.email,i=s.password,n=s.confirmPassword,o=s.show;r.props.createUser({firstName:t,lastName:a,email:c,password:i,confirmPassword:n,show:o}),r.props.dispatch(Object(y.a)("simple"))},r.state={firstName:"",lastName:"",email:"",password:"",confirmPassword:"",show:!1},r}return Object(h.a)(t,[{key:"render",value:function(){var e=this.state,s=e.firstName,t=e.lastName,a=e.email,c=e.password,i=e.confirmPassword,n=e.show;return this.props.createUser({firstName:s,lastName:t,email:a,password:c,confirmPassword:i,show:n}),Object(r.jsx)(N,{onSubmit:this.submit})}}]),t}(c.a.Component),U=Object(o.b)(null,(function(e){return{createUser:function(s){return e({type:"createUser",payload:s})},dispatch:e}}))(P);n.a.render(Object(r.jsx)(o.a,{store:p,children:Object(r.jsx)(U,{})}),document.getElementById("root"))}},[[229,1,2]]]);
//# sourceMappingURL=main.0d50bbe5.chunk.js.map