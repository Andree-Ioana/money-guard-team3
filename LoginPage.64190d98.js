function e(e){return e&&e.__esModule?e.default:e}function r(e,r,n,t){Object.defineProperty(e,r,{get:n,set:t,enumerable:!0,configurable:!0})}var n=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequireb365;n.register("ktPSt",(function(t,i){var s;s=t.exports,Object.defineProperty(s,"__esModule",{value:!0,configurable:!0}),r(t.exports,"default",(function(){return u}));var o=n("ih19M");n("bh6RR");var a=n("iCn9S"),c=n("gZPWC");var u=()=>(0,o.jsxs)("main",{className:e(c).background,children:[(0,o.jsxs)("div",{className:e(c).containerBg,children:[(0,o.jsx)("div",{className:e(c).bgRight,children:(0,o.jsx)("div",{className:e(c).circleRight})}),(0,o.jsxs)("div",{className:e(c).bgLeft,children:[(0,o.jsx)("div",{className:e(c).circleTop}),(0,o.jsx)("div",{className:e(c).circleTopR}),(0,o.jsx)("div",{className:e(c).circleLeft})]})]}),(0,o.jsx)(a.default,{})]})})),n.register("iCn9S",(function(t,i){r(t.exports,"default",(function(){return g}));var s=n("ih19M"),o=n("bh6RR"),a=n("lW2XZ"),c=n("jhgZe"),u=n("I3ixn"),l=n("13Wt1"),d=n("10WBQ"),p=n("lLl11"),f=n("dTQoQ");const m=c.object().shape({email:c.string().email().required("Email is required"),password:c.string().required("Password is required").min(4,"Password is too short - should be 4 chars minimum")});var g=()=>{const r=(0,u.useDispatch)(),[n,t]=(0,o.useState)("");return(0,s.jsx)(a.Formik,{initialValues:{email:"",password:""},validationSchema:m,onSubmit:async(e,{setSubmitting:n})=>{try{await r((0,l.signIn)(e)),n(!1)}catch(e){e.response?400===e.response.status?t("Validation error. Please check your inputs."):409===e.response.status?t("User with such email already exists."):t("An error occurred. Please try again later."):e.request?t("Network error. Please check your internet connection."):t("Unexpected error. Please try again later."),n(!1)}},children:({isSubmitting:r})=>(0,s.jsxs)(a.Form,{autoComplete:"off",className:e(p).form,children:[(0,s.jsx)("div",{className:e(p).containerLogo,children:(0,s.jsx)("img",{src:e(f),alt:"Logo"})}),(0,s.jsxs)("div",{className:e(p).wrapperInput,children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(a.Field,{name:"email",type:"email",placeholder:"E-mail",className:`${e(p).input} ${e(p).mail}`}),(0,s.jsx)(a.ErrorMessage,{name:"email",component:"div",className:e(p).error})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(a.Field,{name:"password",type:"password",placeholder:"Password",className:`${e(p).input} ${e(p).lock}`}),(0,s.jsx)(a.ErrorMessage,{name:"password",component:"div",className:e(p).error})]})]}),(0,s.jsx)("div",{className:e(p).button,children:(0,s.jsx)("button",{type:"submit",disabled:r,children:r?"Signing up...":"Sign up"})}),(0,s.jsx)("div",{className:e(p).error,children:n}),(0,s.jsx)("div",{className:e(p).link,children:(0,s.jsx)(d.NavLink,{to:"/register",children:"Don't have an account? Register"})})]})})}})),n.register("lLl11",(function(e,n){var t,i,s,o,a,c,u,l,d,p,f;r(e.exports,"wrapperInput",(function(){return t}),(function(e){return t=e})),r(e.exports,"register",(function(){return i}),(function(e){return i=e})),r(e.exports,"button",(function(){return s}),(function(e){return s=e})),r(e.exports,"mail",(function(){return o}),(function(e){return o=e})),r(e.exports,"user",(function(){return a}),(function(e){return a=e})),r(e.exports,"lock",(function(){return c}),(function(e){return c=e})),r(e.exports,"link",(function(){return u}),(function(e){return u=e})),r(e.exports,"error",(function(){return l}),(function(e){return l=e})),r(e.exports,"input",(function(){return d}),(function(e){return d=e})),r(e.exports,"containerLogo",(function(){return p}),(function(e){return p=e})),r(e.exports,"form",(function(){return f}),(function(e){return f=e})),t="W4esta_wrapperInput",i="W4esta_register",s="W4esta_button",o="W4esta_mail",a="W4esta_user",c="W4esta_lock",u="W4esta_link",l="W4esta_error",d="W4esta_input",p="W4esta_containerLogo",f="W4esta_form"})),n.register("dTQoQ",(function(e,r){e.exports=new URL(n("kyEFX").resolve("bdUzN"),import.meta.url).toString()})),n.register("gZPWC",(function(e,n){var t,i,s,o,a,c,u;r(e.exports,"circleTopR",(function(){return t}),(function(e){return t=e})),r(e.exports,"circleLeft",(function(){return i}),(function(e){return i=e})),r(e.exports,"circleTop",(function(){return s}),(function(e){return s=e})),r(e.exports,"background",(function(){return o}),(function(e){return o=e})),r(e.exports,"bgRight",(function(){return a}),(function(e){return a=e})),r(e.exports,"bgLeft",(function(){return c}),(function(e){return c=e})),r(e.exports,"circleRight",(function(){return u}),(function(e){return u=e})),t="npnNRq_circleTopR",i="npnNRq_circleLeft",s="npnNRq_circleTop",o="npnNRq_background",a="npnNRq_bgRight",c="npnNRq_bgLeft",u="npnNRq_circleRight"}));
//# sourceMappingURL=LoginPage.64190d98.js.map
