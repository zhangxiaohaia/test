"use strict";(self.webpackChunkproje=self.webpackChunkproje||[]).push([[857],{857:(e,s,t)=>{t.r(s),t.d(s,{default:()=>C});var a=t(79434),l=t(96797),i=t(38630),n=t(67191),c=t(97467),m=t.n(c),d=t(37119),r=t(12754),_=t(5821),o=t(61402);const h={emailStiteMessageWrap:"styles_emailStiteMessageWrap__mvGs6",tabs:"styles_tabs__z+e0n",badge:"styles_badge__aNTYD",tag:"styles_tag__piFx1",empty:"styles_empty__1gQBv",emptySvg:"styles_emptySvg__fDm+k",text:"styles_text__R5vTq",noticeWrap:"styles_noticeWrap__fzW76",listWrap:"styles_listWrap__vifoO",list:"styles_list__0uBKh",listItem:"styles_listItem__YfGC+",itemTitle:"styles_itemTitle__Iqssq",svgIcon:"styles_svgIcon__wQlo8",title:"styles_title__uAiqP",itemTime:"styles_itemTime__Fz6IA",time:"styles_time__NZydw",itemContent:"styles_itemContent__udKeq",emailList:"styles_emailList__Yr3bg",itemHeader:"styles_itemHeader__h7auf",status:"styles_status__dCsD8",unread:"styles_unread__eMORS",content:"styles_content__cfwz6",detailsLink:"styles_detailsLink__4p4j2",detail:"styles_detail__JHQr3",header:"styles_header__aH300",button:"styles_button__yka8i",buttonText:"styles_buttonText__nQh1l"};var x=t(37247),j=t(30336),u=t(62952),N=t(97542),y=t(98138),v=t(88297),p=t(46552),g=t.n(p),T=t(9250);const b=()=>{const[e,s]=(0,a.useState)(null),[t,i]=(0,a.useState)(1),[n,c]=(0,a.useState)(6),[r,o]=(0,a.useState)(0);return(0,j.A)((async()=>{const{code:e,data:{list:a,totalRecord:l}}=await(0,x.hJ)({page:t,size:n});0===e&&(s(a),o(l))}),[t]),(0,T.jsxs)("div",{className:h.noticeWrap,children:[e&&e.length<=0&&(0,T.jsx)(f,{text:"Kh\xf4ng c\xf3 th\xf4ng b\xe1o m\u1edbi"}),e&&e.length>0&&(0,T.jsxs)("div",{className:h.listWrap,children:[(0,T.jsx)("div",{className:h.list,children:e.map((e=>(0,T.jsxs)("div",{className:h.listItem,children:[(0,T.jsxs)("div",{className:h.itemTitle,children:[(0,T.jsx)(d.h,{fill:"#6C7AAB",className:h.svgIcon}),(0,T.jsx)("p",{className:h.title,children:e.radioName})]}),(0,T.jsxs)("div",{className:h.itemTime,children:[(0,T.jsx)(_.h,{fill:"#5A5A5A",className:h.svgIcon}),(0,T.jsx)("p",{className:h.time,children:m()(e.createTime).format("DD-MM-YYYY HH:mm:ss")})]}),(0,T.jsx)("div",{className:h.itemContent,dangerouslySetInnerHTML:{__html:e.radioTxt}})]},e.id)))}),(0,T.jsx)(l.A,{defaultCurrent:t,defaultPageSize:n,total:r,onChange:e=>{i(e),window.scrollTo(0,0)}})]})]})},S=e=>{let{item:s,getVisible:t}=e;return(0,T.jsxs)("div",{className:h.detail,children:[(0,T.jsxs)("div",{className:h.header,children:[(0,T.jsx)("p",{className:h.title,children:s.title}),(0,T.jsxs)("div",{className:h.itemTime,children:[(0,T.jsx)(_.h,{fill:"#5A5A5A",className:h.svgIcon}),(0,T.jsx)("p",{className:h.time,children:m()(s.sendTime).format("DD-MM-YYYY HH:mm:ss")})]})]}),(0,T.jsx)("div",{className:h.itemContent,dangerouslySetInnerHTML:{__html:s.content}}),(0,T.jsx)(N.A,{classNames:h.button,handleSubmit:()=>{t(!1),window.scrollTo(0,0)},btnText:(0,T.jsxs)("div",{className:h.buttonText,children:[(0,T.jsx)(r.h,{fill:"#B6F6FF",className:h.svgIcon})," ",(0,T.jsx)("span",{children:"TR\u1ede V\u1ec0"})]})})]})},A=e=>{let{item:s}=e;const[t,i]=(0,a.useState)(1),[n,c]=(0,a.useState)(7),[m,d]=(0,a.useState)(0),[r,N]=(0,a.useState)(null),[v,p]=(0,a.useState)(!1),[b,A]=(0,a.useState)(void 0),C=(0,u._W)(),H=(0,u.sF)(),I=(0,u.rV)();(0,j.A)((async()=>{await w()}),[t]),(0,j.A)((async()=>{s&&await k(s)()}),[s]);const w=async()=>{const{code:e,data:{list:s,totalElements:a}}=await(0,x.Cb)({pageNum:t,pageSize:n});0===e&&(N(s),d(a))},k=e=>async()=>{if(A(e),p(!0),e.status)return;const{code:s,data:t}=await(0,x.UU)(e.id);s||(H(C-1),e.status=1)};return(0,T.jsxs)("div",{className:h.noticeWrap,children:[r&&r.length<=0&&(0,T.jsx)(f,{text:"Kh\xf4ng c\xf3 th\u01b0 m\u1edbi"}),r&&r.length>0&&!v&&(0,T.jsxs)("div",{className:h.listWrap,children:[(0,T.jsx)("div",{className:g()(h.list,h.emailList),children:r.map((e=>(0,T.jsxs)("div",{className:h.listItem,children:[(0,T.jsxs)("div",{className:h.itemHeader,children:[(0,T.jsxs)("div",{className:h.itemTitle,children:[(0,T.jsx)(o.h,{fill:"#6C7AAB",className:h.svgIcon}),(0,T.jsx)("p",{className:h.title,children:e.title})]}),(0,T.jsx)("div",{className:g()(h.status,{[h.unread]:0==e.status&&!I.includes(e.id)})})]}),(0,T.jsxs)("div",{className:h.itemTime,children:[(0,T.jsx)(_.h,{fill:"#5A5A5A",className:h.svgIcon}),(0,T.jsx)("p",{className:h.time,children:(0,y.Yq)(e.sendTime,!0)})]}),(0,T.jsxs)("div",{className:h.content,children:[(0,T.jsx)("div",{className:h.itemContent,dangerouslySetInnerHTML:{__html:e.content}}),(0,T.jsx)("div",{className:h.detailsLink,onClick:k(e),children:"Xem th\xeam>>"})]})]},e.id)))}),(0,T.jsx)(l.A,{defaultCurrent:t,defaultPageSize:n,total:m,onChange:e=>{i(e),window.scrollTo(0,0)}})]}),v&&(0,T.jsx)(S,{item:b,getVisible:e=>p(e)})]})},f=e=>{let{text:s}=e;return(0,T.jsxs)("div",{className:h.empty,children:[(0,T.jsx)("img",{src:t(77960),alt:"alt"}),(0,T.jsx)("p",{className:h.text,children:s})]})},C=()=>{const e=(0,v.Zp)(),{pathname:s,state:t}=(0,v.zy)(),l=(0,u._W)(),[c,m]=(0,a.useState)("1"),[d,r]=(0,a.useState)(null);(0,a.useEffect)((()=>{t&&(_(t.type),r(t.item),e(s,{...t,state:null,replace:!0}))}),[t]);const _=e=>m(e),o=()=>(0,T.jsx)("div",{className:h.badge,children:(0,T.jsx)("span",{className:h.label,children:"TH\xd4NG B\xc1O H\u1ec6 TH\u1ed0NG"})}),x=()=>(0,T.jsxs)("div",{className:h.badge,children:[(0,T.jsx)("span",{className:h.label,children:"H\u1ed8P TH\u01af"}),l>0&&(0,T.jsx)("i",{className:h.tag,children:l})]}),j=[{key:"1",label:(0,T.jsx)(o,{}),children:(0,T.jsx)(b,{})},{key:"2",label:(0,T.jsx)(x,{}),children:(0,T.jsx)(A,{item:d})}];return(0,T.jsx)("div",{className:h.emailStiteMessageWrap,children:(0,T.jsx)(i.Ay,{theme:{components:{Tabs:{itemColor:"#6C7AAB",itemSelectedColor:"#4098D8",itemHoverColor:"#4098D8",inkBarColor:"#4098D8",horizontalMargin:"0 0 10px 0",horizontalItemPadding:"5px 0"}}},children:(0,T.jsx)(n.A,{className:h.tabs,activeKey:c,onTabClick:_,items:j})})})}}}]);