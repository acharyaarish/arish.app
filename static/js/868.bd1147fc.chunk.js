"use strict";(self.webpackChunkarish_portfolio=self.webpackChunkarish_portfolio||[]).push([[868],{3868:(e,a,i)=>{i.r(a),i.d(a,{default:()=>H});var t=i(5043),o=i(4778),r=i(8514),s=i(2193);function n(e){const{theme:a}=(0,s.UQ)(),i=(0,o.NU)();return(0,t.useMemo)((()=>(0,r.UP)(a.direction,{...i,...e})),[e,a.direction,i])}var l=i(7118),d=i(5522),c=i(3637),u=i(4377),h=i(834),m=i(7852),p=i(4554),b=i(3226),v=i(3761),x=i(6254),g=i(6437),f=i(9254),y=i(579),[C,F]=(0,m.q)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[j,R]=(0,m.q)({strict:!1,name:"FormControlContext"});function k(e){const{isDisabled:a,isInvalid:i,isReadOnly:t,isRequired:o,...r}=function(e){var a,i,t;const o=R(),{id:r,disabled:s,readOnly:n,required:l,isRequired:d,isInvalid:c,isReadOnly:u,isDisabled:h,onFocus:m,onBlur:p,...b}=e,v=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==o?void 0:o.hasFeedbackText)&&(null==o?void 0:o.isInvalid)&&v.push(o.feedbackId);(null==o?void 0:o.hasHelpText)&&v.push(o.helpTextId);return{...b,"aria-describedby":v.join(" ")||void 0,id:null!=r?r:null==o?void 0:o.id,isDisabled:null!=(a=null!=s?s:h)?a:null==o?void 0:o.isDisabled,isReadOnly:null!=(i=null!=n?n:u)?i:null==o?void 0:o.isReadOnly,isRequired:null!=(t=null!=l?l:d)?t:null==o?void 0:o.isRequired,isInvalid:null!=c?c:null==o?void 0:o.isInvalid,onFocus:(0,f.Hj)(null==o?void 0:o.onFocus,m),onBlur:(0,f.Hj)(null==o?void 0:o.onBlur,p)}}(e);return{...r,disabled:a,readOnly:t,required:o,"aria-invalid":(0,f.rq)(i),"aria-required":(0,f.rq)(o),"aria-readonly":(0,f.rq)(t)}}(0,b.R)((function(e,a){const i=(0,v.o5)("Form",e),o=(0,x.MN)(e),{getRootProps:r,htmlProps:s,...n}=function(e){const{id:a,isRequired:i,isInvalid:o,isDisabled:r,isReadOnly:s,...n}=e,l=(0,t.useId)(),d=a||"field-".concat(l),c="".concat(d,"-label"),u="".concat(d,"-feedback"),h="".concat(d,"-helptext"),[m,b]=(0,t.useState)(!1),[v,x]=(0,t.useState)(!1),[g,y]=(0,t.useState)(!1),C=(0,t.useCallback)((function(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{id:h,...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},ref:(0,p.Px)(e,(e=>{e&&x(!0)}))}}),[h]),F=(0,t.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,ref:a,"data-focus":(0,f.sE)(g),"data-disabled":(0,f.sE)(r),"data-invalid":(0,f.sE)(o),"data-readonly":(0,f.sE)(s),id:void 0!==e.id?e.id:c,htmlFor:void 0!==e.htmlFor?e.htmlFor:d}}),[d,r,g,o,s,c]),j=(0,t.useCallback)((function(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{id:u,...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},ref:(0,p.Px)(e,(e=>{e&&b(!0)})),"aria-live":"polite"}}),[u]),R=(0,t.useCallback)((function(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},...n,ref:e,role:"group","data-focus":(0,f.sE)(g),"data-disabled":(0,f.sE)(r),"data-invalid":(0,f.sE)(o),"data-readonly":(0,f.sE)(s)}}),[n,r,g,o,s]),k=(0,t.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,ref:a,role:"presentation","aria-hidden":!0,children:e.children||"*"}}),[]);return{isRequired:!!i,isInvalid:!!o,isReadOnly:!!s,isDisabled:!!r,isFocused:!!g,onFocus:()=>y(!0),onBlur:()=>y(!1),hasFeedbackText:m,setHasFeedbackText:b,hasHelpText:v,setHasHelpText:x,id:d,labelId:c,feedbackId:u,helpTextId:h,htmlProps:n,getHelpTextProps:C,getErrorMessageProps:j,getRootProps:R,getLabelProps:F,getRequiredIndicatorProps:k}}(o),l=(0,f.cx)("chakra-form-control",e.className);return(0,y.jsx)(j,{value:n,children:(0,y.jsx)(C,{value:i,children:(0,y.jsx)(g.B.div,{...r({},a),className:l,__css:i.container})})})})).displayName="FormControl",(0,b.R)((function(e,a){const i=R(),t=F(),o=(0,f.cx)("chakra-form__helper-text",e.className);return(0,y.jsx)(g.B.div,{...null==i?void 0:i.getHelpTextProps(e,a),__css:t.helperText,className:o})})).displayName="FormHelperText";var S=(0,b.R)((function(e,a){const{htmlSize:i,...t}=e,o=(0,v.o5)("Input",t),r=k((0,x.MN)(t)),s=(0,f.cx)("chakra-input",e.className);return(0,y.jsx)(g.B.input,{size:i,...r,__css:o.field,ref:a,className:s})}));S.displayName="Input",S.id="Input";var _=["h","minH","height","minHeight"],N=(0,b.R)(((e,a)=>{const i=(0,v.Vl)("Textarea",e),{className:t,rows:o,...r}=(0,x.MN)(e),s=k(r),n=o?function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const i=Object.assign({},e);for(const t of a)t in i&&delete i[t];return i}(i,_):i;return(0,y.jsx)(g.B.textarea,{ref:a,rows:o,...s,className:(0,f.cx)("chakra-textarea",t),__css:n})}));N.displayName="Textarea";var P=i(8028),q=i(1918),I=i(8700),T=i(3204),E=i(1866);const H=()=>{const[e,a]=(0,t.useState)({name:"",email:"",message:""}),i=n(),o=i=>{const{name:t,value:o}=i.target;a({...e,[t]:o})},r=(0,l.dU)("#333","#E2E8F0"),s=(0,l.dU)("#CCCCCC","#555555"),m=(0,l.dU)("#FFFFFF","#3D3D3D"),p=(0,l.dU)("#3182ce","#90CDF4"),b=(0,l.dU)("#ebebe7","#263238");return(0,y.jsx)(d.az,{as:"section",bg:b,color:r,py:16,id:"contact",borderRadius:"lg",boxShadow:"lg",position:"relative",overflow:"hidden",children:(0,y.jsxs)(c.m,{maxW:"container.md",textAlign:"center",children:[(0,y.jsx)(u.D,{as:E.P.h2,size:"xl",mb:10,color:r,fontWeight:"bold",initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.8},children:"Get in Touch \ud83d\udcec"}),(0,y.jsxs)("form",{onSubmit:t=>{t.preventDefault();fetch("https://formspree.io/f/mvgpzrlw",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>{e.ok?(i({title:"Message sent.",description:"Your message was sent successfully!",status:"success",duration:5e3,isClosable:!0}),a({name:"",email:"",message:""})):i({title:"Error.",description:"Failed to send message.",status:"error",duration:5e3,isClosable:!0})})).catch((e=>{console.error("Error:",e),i({title:"Error.",description:"Failed to send message.",status:"error",duration:5e3,isClosable:!0})}))},children:[(0,y.jsxs)(h.T,{spacing:6,align:"stretch",children:[(0,y.jsx)(S,{placeholder:"Your Name",name:"name",value:e.name,onChange:o,borderColor:s,bg:m,_hover:{borderColor:p},_focus:{borderColor:p,boxShadow:"0 0 0 1px #3182ce"},isRequired:!0,as:E.P.input,initial:{opacity:0},animate:{opacity:1},transition:{duration:.5}}),(0,y.jsx)(S,{placeholder:"Your Email",type:"email",name:"email",value:e.email,onChange:o,borderColor:s,bg:m,_hover:{borderColor:p},_focus:{borderColor:p,boxShadow:"0 0 0 1px #3182ce"},isRequired:!0,as:E.P.input,initial:{opacity:0},animate:{opacity:1},transition:{duration:.6}}),(0,y.jsx)(N,{placeholder:"Your Message",name:"message",value:e.message,onChange:o,borderColor:s,bg:m,_hover:{borderColor:p},_focus:{borderColor:p,boxShadow:"0 0 0 1px #3182ce"},isRequired:!0,as:E.P.textarea,initial:{opacity:0},animate:{opacity:1},transition:{duration:.7}})]}),(0,y.jsx)(P.$,{type:"submit",colorScheme:"teal",bg:"#479761",_hover:{bg:"#367d5b",transform:"scale(1.05)"},size:"lg",mt:8,isFullWidth:!0,transition:"all 0.3s",as:E.P.button,initial:{opacity:0},animate:{opacity:1},children:"Send Message \ud83d\udcac"})]}),(0,y.jsx)(q.s,{justify:"center",mt:8,children:(0,y.jsx)(I.N,{href:"https://github.com/acharyaarish",isExternal:!0,children:(0,y.jsx)(P.$,{leftIcon:(0,y.jsx)(T.hL4,{}),colorScheme:"gray",variant:"ghost",fontSize:"2xl",_hover:{color:"teal.500"},as:E.P.button,initial:{opacity:0},animate:{opacity:1},transition:{duration:1},children:"GitHub"})})}),(0,y.jsx)(d.az,{mt:8,fontSize:"sm",color:r,children:"\xa9 2024 Arish Acharya - All rights reserved."})]})})}}}]);
//# sourceMappingURL=868.bd1147fc.chunk.js.map