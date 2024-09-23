import{u as e,Q as s,r as a,j as t,I as o,U as i,B as n,V as r,W as l,X as c}from"./index-7b122661.js";import{u as d,d as m,o as h,P as u,D as x,T as j,S as p}from"./ShareModal-ebe974f4.js";import{a as y}from"./accountService-87c7786a.js";import{u as f,a as k,b as w,c as S,C as T,E as g,B as C,S as K,R as N,A as V}from"./AccountModal-020ada88.js";import{F as v}from"./index-d7b73418.js";import{T as I,E as z}from"./index-c8cfc0dd.js";import{u as F}from"./useQuery-4ded507d.js";import{R as L,C as W}from"./row-5876ec93.js";function b(){const[b]=v.useForm(),{t:A}=e(),E=f(),O=k(),_=w(),q=S(),B=d(),G=s(),[M,Q]=a.useState(-1),[R,Y]=a.useState(-1),D=v.useWatch("email",b),P={id:void 0,email:"",accountType:"claude",password:"",refreshToken:"",accessToken:"",sessionKey:"",shared:0},[U,X]=a.useState({formValue:{id:void 0,sessionKey:"",email:"",accountType:"claude",password:"",refreshToken:""},title:"New",show:!1,onOk:(e,s)=>{e.id?O.mutate(e,{onSuccess:()=>{X((e=>({...e,show:!1,formValue:{...P}})))},onSettled:()=>s(!1)}):E.mutate(e,{onSuccess:()=>{X((e=>({...e,show:!1,formValue:{...P}})))},onSettled:()=>s(!1)})},onCancel:()=>{X((e=>({...e,show:!1,formValue:{...P}})))}}),[$,H]=a.useState({formValue:{...m,shareType:"claude"},title:"New",show:!1,onOk:(e,s)=>{s(!0),B.mutate(e,{onSuccess:()=>{H((e=>({...e,show:!1})))},onSettled:()=>{s(!1)}})},onCancel:()=>{H((e=>({...e,show:!1})))}}),J=[{title:A("token.email"),dataIndex:"email",ellipsis:!0,align:"center",render:e=>t.jsx(I.Text,{style:{maxWidth:200},ellipsis:!0,children:e})},{title:A("token.password"),dataIndex:"password",align:"center",ellipsis:!0,render:e=>t.jsx(I.Text,{style:{maxWidth:200},ellipsis:!0,children:e})},{title:"Session Key",dataIndex:"sessionKey",align:"center",width:150,render:(e,s)=>s.sessionKey?t.jsx(o,{value:s.sessionKey,onClick:e=>h(s.sessionKey,A,e),readOnly:!0}):t.jsx(i,{color:"error",children:"Empty"})},{title:A("token.shareStatus"),dataIndex:"shared",align:"center",width:100,render:(e,s)=>1==s.shared?t.jsx(T,{twoToneColor:"#52c41a"}):t.jsx(g,{twoToneColor:"#fa8c16"})},{title:A("token.updateTime"),dataIndex:"updateTime",align:"center",width:200},{title:A("token.share"),key:"share",align:"center",render:(e,s)=>t.jsxs(n.Group,{children:[t.jsx(C,{count:s.shareList?.length,style:{zIndex:9},children:t.jsx(n,{icon:t.jsx(K,{}),onClick:()=>G({pathname:"/admin/share/claude",search:`?email=${s.email}`}),children:A("token.shareList")})}),t.jsx(n,{icon:t.jsx(r,{}),onClick:()=>ee(s)})]})},{title:A("token.action"),key:"operation",align:"center",render:(e,s)=>t.jsxs(n.Group,{children:[t.jsx(u,{title:A("common.refreshConfirm"),okText:"Yes",cancelText:"No",placement:"left",onConfirm:()=>{Y(s.id),q.mutate(s.id,{onSettled:()=>Y(void 0)})},children:t.jsx(n,{icon:t.jsx(N,{}),type:"primary",loading:R===s.id,children:A("common.refresh")},s.id)}),t.jsx(n,{onClick:()=>se(s),icon:t.jsx(z,{}),type:"primary"}),t.jsx(u,{title:A("common.deleteConfirm"),okText:"Yes",cancelText:"No",placement:"left",onConfirm:()=>{Q(s.id),_.mutate(s.id,{onSuccess:()=>Q(void 0)})},children:t.jsx(n,{icon:t.jsx(x,{}),type:"primary",loading:M===s.id,danger:!0})})]})}],{data:Z}=F({queryKey:["accounts","claude",D],queryFn:()=>y.searchAccountList(D,"claude")}),ee=e=>{H((s=>({...s,show:!0,title:A("token.share"),formValue:{...m,accountId:e.id,shareType:"claude"}})))},se=e=>{X((s=>({...s,show:!0,title:A("token.edit"),formValue:{...s.formValue,id:e.id,email:e.email,password:e.password,shared:e.shared,sessionKey:e.sessionKey}})))};return t.jsxs(l,{direction:"vertical",size:"large",className:"w-full",children:[t.jsx(c,{children:t.jsx(v,{form:b,children:t.jsxs(L,{gutter:[16,16],children:[t.jsx(W,{span:6,lg:6,children:t.jsx(v.Item,{label:A("token.email"),name:"email",className:"!mb-0",children:t.jsx(o,{})})}),t.jsx(W,{span:18,lg:18,children:t.jsxs("div",{className:"flex justify-end",children:[t.jsx(n,{onClick:()=>{b.resetFields()},children:A("token.reset")}),t.jsx(n,{type:"primary",className:"ml-4",children:A("token.search")})]})})]})})}),t.jsx(c,{title:A("token.accountList"),extra:t.jsx(l,{children:t.jsx(n,{type:"primary",onClick:()=>{X((e=>({...e,show:!0,title:A("token.createNew"),formValue:{id:void 0,email:"",password:"",sessionKey:"",accountType:"claude",shared:0,custom_type:"refresh_token",custom_token:""}})))},children:A("token.createNew")})}),children:t.jsx(j,{rowKey:"id",size:"small",scroll:{x:"max-content"},pagination:{pageSize:10},columns:J,dataSource:Z})}),t.jsx(V,{...U}),t.jsx(p,{...$})]})}export{b as default};