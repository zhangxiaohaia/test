"use strict";(self.webpackChunkproje=self.webpackChunkproje||[]).push([[8940],{78940:(e,s,t)=>{t.r(s),t.d(s,{default:()=>f});var a=t(9950);const i="detailList_detailList__4w12I",l="detailList_listCon__KZcWb",c="detailList_item__yL1Rq",n="detailList_header__wyHjl",d="detailList_title__9HRJI",r="detailList_contentStyle__cFWdQ",h="detailList_loadMore__NgL6I";var o=t(28429),_=t(67385),j=t(73636),p=t(56414),u=t(91331),x=t(70399),m=t(85061),L=t(13),N=t(44414);const f=()=>{const[e,s]=(0,a.useState)([]),[t,f]=(0,a.useState)(1),[v,g]=(0,a.useState)(10),[S,b]=(0,a.useState)(!1),k=(0,o.Zp)(),[w,y]=(0,a.useState)(!1);(0,j.A)((async()=>{const e={page:t,size:20,channelType:1};y(1===t);const a=await(0,p.fG)(e);if(y(!1),!a.code){const{list:e,totalPage:i}=a.data;s((s=>[...s,...e])),g(i),b(t<i)}}),[t]);const{ref:A}=(0,x.Wx)({threshold:.5,onChange:(e,s)=>{e&&t<v&&(f((e=>e+1)),b(!0))}});return(0,N.jsx)(m.A,{title:"TH\xd4NG B\xc1O",goBack:()=>{k("/notes/sport",{replace:!0})},classNames:i,children:(0,N.jsx)("div",{className:l,children:(0,N.jsx)(L.A,{visible:e.length>0,children:(0,N.jsxs)("ul",{children:[e.map((e=>(0,N.jsx)("li",{children:(0,N.jsxs)("div",{className:c,children:[(0,N.jsxs)("div",{className:n,children:[(0,N.jsx)("span",{className:d,children:e.title}),(0,N.jsx)("span",{className:r,children:(0,_.Yq)(e.publishTime,!0)})]}),(0,N.jsx)("div",{className:r,children:e.content})]})},e.id))),(0,N.jsx)("span",{className:h,ref:A,children:(0,N.jsx)(u.A,{hasMore:S})})]})})})})}}}]);