import{u as m,r as d,S as c,j as e,L as u,i as p,g,a as h}from"./index-48da078b.js";import{u as b}from"./useForm-ca3668e9.js";const x={loginEmail:"",loginPassword:""},{title:f,email:j,password:w,button:N,text:v,link:E,error:t}=p?g():h(),y=()=>{const{loginEmail:s,loginPassword:i,onInputChange:a}=b(x),{startLogin:o,errorMessage:n}=m();d.useEffect(()=>{n!==void 0&&c.fire(t.errorTitle,t.errorText,"error")},[n]);const r=l=>{l.preventDefault(),o({email:s,password:i})};return e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"font-bold tracking-tight",children:f}),e.jsxs("form",{className:"space-y-4 md:space-y-6",onSubmit:r,children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"mb-2 block text-sm font-medium",children:j}),e.jsx("input",{type:"email",id:"email",name:"loginEmail",value:s,onChange:a,className:"input-bordered input-info input w-full",placeholder:"name@company.com",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"password",className:"mb-2 block text-sm font-medium",children:w}),e.jsx("input",{type:"password",id:"password",name:"loginPassword","aria-label":"password",value:i,onChange:a,placeholder:"••••••••",className:"input-bordered input-info input w-full",required:!0})]}),e.jsx("button",{"aria-label":"login-button",type:"submit",className:"btn-info btn w-full transition hover:brightness-110",children:N}),e.jsxs("p",{className:"text-sm font-light",children:[v,e.jsx(u,{to:"/auth/signup",className:"link-info link font-bold",children:E})]})]})]})};export{y as LoginPage};
