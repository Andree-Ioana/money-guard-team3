!function(){function e(e){return e&&e.__esModule?e.default:e}function r(e,r,n,t){Object.defineProperty(e,r,{get:n,set:t,enumerable:!0,configurable:!0})}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequireb365;n.register("ckJCQ",(function(t,i){var s;s=t.exports,Object.defineProperty(s,"__esModule",{value:!0,configurable:!0}),r(t.exports,"default",(function(){return a}));var o=n("aSiaI");n("exYeM");var u=n("fDgDH"),c=n("9Zkb0"),a=function(){return(0,o.jsxs)("main",{className:e(c).background,children:[(0,o.jsxs)("div",{className:e(c).containerBg,children:[(0,o.jsx)("div",{className:e(c).bgRight,children:(0,o.jsx)("div",{className:e(c).circleRight})}),(0,o.jsxs)("div",{className:e(c).bgLeft,children:[(0,o.jsx)("div",{className:e(c).circleTop}),(0,o.jsx)("div",{className:e(c).circleTopR}),(0,o.jsx)("div",{className:e(c).circleLeft})]})]}),(0,o.jsx)(u.default,{})]})}})),n.register("fDgDH",(function(t,i){r(t.exports,"default",(function(){return h}));var s=n("bpxeT"),o=n("1t1Wn"),u=n("2TvXO"),c=n("aSiaI"),a=n("exYeM"),l=n("vAV6N"),d=n("arnIu"),f=n("6fU0Q"),p=n("3QeX2"),m=n("8is9z"),x=n("gM6VW"),g=n("dlMFC"),v=d.object().shape({username:d.string().min(2,"Too Short!").max(20,"Too Long!").required("Username is required"),email:d.string().email("Invalid email format").required("Email is required"),password:d.string().required("Password is required").min(6,"Password is too short - should be 6 chars minimum")}),h=function(){var r,n=(0,m.useDispatch)(),t=e(o)((0,a.useState)(""),2),i=t[0],d=t[1],h=(r=e(s)(e(u).mark((function r(t,i){var s;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=i.setSubmitting,e.prev=1,e.next=4,n((0,x.signUp)(t));case 4:s(!1),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),e.t0.response?400===e.t0.response.status?d("Validation error. Please check your inputs."):409===e.t0.response.status?d("User with such email already exists."):d("An error occurred. Please try again later."):e.t0.request?d("Network error. Please check your internet connection."):d("Unexpected error. Please try again later."),s(!1);case 11:case"end":return e.stop()}}),r,null,[[1,7]])}))),function(e,n){return r.apply(this,arguments)});return(0,c.jsx)("div",{className:e(f).register,children:(0,c.jsx)(l.Formik,{initialValues:{username:"",email:"",password:""},validationSchema:v,onSubmit:h,children:function(r){var n=r.isSubmitting;return(0,c.jsxs)(l.Form,{autoComplete:"off",className:e(f).form,children:[(0,c.jsx)("div",{className:e(f).containerLogo,children:(0,c.jsx)("img",{src:e(g),alt:"Logo"})}),(0,c.jsxs)("div",{className:e(f).wrapperInput,children:[(0,c.jsxs)("div",{children:[(0,c.jsx)(l.Field,{name:"username",type:"text",placeholder:"Name",className:"".concat(e(f).input," ").concat(e(f).user)}),(0,c.jsx)(l.ErrorMessage,{name:"username",component:"div",className:e(f).error})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)(l.Field,{name:"email",type:"email",placeholder:"E-mail",className:"".concat(e(f).input," ").concat(e(f).mail)}),(0,c.jsx)(l.ErrorMessage,{name:"email",component:"div",className:e(f).error})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)(l.Field,{name:"password",type:"password",placeholder:"Password",className:"".concat(e(f).input," ").concat(e(f).lock)}),(0,c.jsx)(l.ErrorMessage,{name:"password",component:"div",className:e(f).error})]})]}),(0,c.jsx)("div",{className:e(f).button,children:(0,c.jsx)("button",{type:"submit",disabled:n,children:n?"Signing up...":"Sign up"})}),(0,c.jsx)("div",{className:e(f).error,children:i}),(0,c.jsx)("div",{className:e(f).link,children:(0,c.jsx)(p.NavLink,{to:"/login",children:"Already have an account? Login"})})]})}})})}})),n.register("6fU0Q",(function(e,n){var t,i,s,o,u,c,a,l,d,f,p;r(e.exports,"user",(function(){return t}),(function(e){return t=e})),r(e.exports,"form",(function(){return i}),(function(e){return i=e})),r(e.exports,"containerLogo",(function(){return s}),(function(e){return s=e})),r(e.exports,"button",(function(){return o}),(function(e){return o=e})),r(e.exports,"register",(function(){return u}),(function(e){return u=e})),r(e.exports,"error",(function(){return c}),(function(e){return c=e})),r(e.exports,"input",(function(){return a}),(function(e){return a=e})),r(e.exports,"lock",(function(){return l}),(function(e){return l=e})),r(e.exports,"link",(function(){return d}),(function(e){return d=e})),r(e.exports,"wrapperInput",(function(){return f}),(function(e){return f=e})),r(e.exports,"mail",(function(){return p}),(function(e){return p=e})),t="vHucuG_user",i="vHucuG_form",s="vHucuG_containerLogo",o="vHucuG_button",u="vHucuG_register",c="vHucuG_error",a="vHucuG_input",l="vHucuG_lock",d="vHucuG_link",f="vHucuG_wrapperInput",p="vHucuG_mail"})),n.register("dlMFC",(function(e,r){e.exports=n("aNJCr").getBundleURL("b192j")+n("iE7OH").resolve("3pwsT")})),n.register("9Zkb0",(function(e,n){var t,i,s,o,u,c,a;r(e.exports,"bgLeft",(function(){return t}),(function(e){return t=e})),r(e.exports,"circleRight",(function(){return i}),(function(e){return i=e})),r(e.exports,"background",(function(){return s}),(function(e){return s=e})),r(e.exports,"circleLeft",(function(){return o}),(function(e){return o=e})),r(e.exports,"circleTop",(function(){return u}),(function(e){return u=e})),r(e.exports,"circleTopR",(function(){return c}),(function(e){return c=e})),r(e.exports,"bgRight",(function(){return a}),(function(e){return a=e})),t="ImkIiq_bgLeft",i="ImkIiq_circleRight",s="ImkIiq_background",o="ImkIiq_circleLeft",u="ImkIiq_circleTop",c="ImkIiq_circleTopR",a="ImkIiq_bgRight"}))}();
//# sourceMappingURL=RegistrationPage.9f582e6b.js.map
