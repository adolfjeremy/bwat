import{q as g,r as l,S as c,A as x,W as f,j as e}from"./app-BS1kkZLW.js";import{L as h}from"./Layouts-F9RjfXzc.js";import j from"./ImageUpload-Bgm6kTXV.js";import C from"./ImageItem-DdXBr3I8.js";import{B as m}from"./ButtonBase-CPWRTBOI.js";import{T as p}from"./TextField-CNRPB-li.js";import"./_commonjsHelpers-BosuxZz1.js";import"./createSvgIcon-BS8ypXj4.js";import"./Grow-lmFpWSRo.js";import"./Button-DZ1XbuNc.js";function A(){const{tagLine:o,sliders:r}=g().props,{toggleSpinner:i}=l.useContext(c),{toggleAlert:u}=l.useContext(x),{data:a,setData:n,post:d}=f({tag:o.tag,short_description:o.short_description});console.log(r);const s=t=>{t.preventDefault(),d(route("hero-post"),{onStart:()=>{i(!0)},onSuccess:()=>{i(!1),u(!0)}})};return e.jsx(h,{heading:"Home Page - Hero Section",children:e.jsxs(m,{sx:{display:"flex",flexDirection:"column"},children:[e.jsx(p,{id:"outlined-basic",label:"Tag Line",variant:"outlined",name:"tag",value:a.tag,onChange:t=>n("tag",t.target.value),onBlur:s}),e.jsx(p,{id:"outlined-multiline-flexible",label:"Short Description",multiline:!0,minRows:4,sx:{mt:2},name:"short_description",value:a.short_description,onChange:t=>n("short_description",t.target.value),onBlur:s}),e.jsx(j,{}),e.jsx(m,{sx:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"1fr",gap:"1rem",mt:1},children:r.map(t=>e.jsx(C,{image:t.image,id:t.id},t.id))})]})})}export{A as default};
