"use strict";(self["webpackChunkweb_1keeper"]=self["webpackChunkweb_1keeper"]||[]).push([[437],{6220:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});var i=n(3396),o=n(7139),a=n.p+"img/token_carousel_img_1.7796874a.png";const c={class:"explore_box"},l={class:"token_Out wrapperB"},r={class:"token_top_box flex_row_box"},m=(0,i._)("div",{class:"token_top_left"},[(0,i._)("h1",{class:"themeColor"},[(0,i.Uk)("Discover the New "),(0,i._)("span",{style:{color:"#837DFF"}},"Token"),(0,i.Uk)(" on 1Keeper")]),(0,i._)("p",{class:"mineColor"},"Dive into the evolving world of decentralized applications with 1Keeper, your premier destination for")],-1),s={class:"token_top_right"},u=(0,i._)("img",{class:"carousel_img",src:a,alt:""},null,-1),g=(0,i._)("img",{class:"carousel_img",src:a,alt:""},null,-1),A=(0,i._)("img",{class:"carousel_img",src:a,alt:""},null,-1),d={class:"token_center_box flex_row_box"},h={class:"token_center_left"},k={class:"center_left_box"},E=["onClick"],B=["src"],p={class:"token_center_right"},w={class:"chain_list_out"},O={class:"chain_list_item flex_row_box"},_=["src"],x={class:"themeColor"},D={class:"themeColor"};function f(e,t,n,a,f,v){const K=(0,i.up)("a-carousel"),M=(0,i.up)("a-list-item"),T=(0,i.up)("a-list");return(0,i.wg)(),(0,i.iD)("div",c,[(0,i._)("div",l,[(0,i._)("div",r,[m,(0,i._)("div",s,[(0,i.Wm)(K,{style:{width:"494px",background:"transparent"},autoplay:""},{default:(0,i.w5)((()=>[u,g,A])),_:1})])]),(0,i._)("div",d,[(0,i._)("div",h,[(0,i._)("div",k,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.tabLeftBtn,(t=>((0,i.wg)(),(0,i.iD)("div",{class:(0,o.C_)([{token_btn_left_active:t.id===e.leftBtnIndex},"token_btn_left","flex_row","themeColor"]),onClick:n=>e.onLeftSwitch(t.id)},[(0,i._)("img",{src:t.icon,alt:""},null,8,B),(0,i._)("span",null,(0,o.zw)(t.name),1)],10,E)))),256))])]),(0,i._)("div",p,[(0,i.Wm)(T,{grid:{column:5},"data-source":e.tokenData,loading:e.tokenLoad,style:{"margin-left":"-12px","margin-right":"-12px"}},{renderItem:(0,i.w5)((({item:e})=>[(0,i.Wm)(M,{style:{height:"87px",padding:"0 10px"}},{default:(0,i.w5)((()=>[(0,i._)("div",w,[(0,i._)("div",O,[(0,i._)("img",{src:e.icon,alt:""},null,8,_),(0,i._)("div",null,[(0,i._)("h5",x,(0,o.zw)(e.title),1),(0,i._)("p",D,(0,o.zw)(e.name),1)])])])])),_:2},1024)])),_:1},8,["data-source","loading"])])])])])}var v=n(4870),K=n(65),M=n(7853),T={name:"TokenExplore",setup(){(0,K.oR)();const{t:e,locale:t}=(0,M.QT)(),o=(0,v.qj)({leftBtnIndex:1,tabLeftBtn:[{name:"所有网络",icon:n(8254),id:1},{name:"Ethereum",icon:n(2355),id:2},{name:"Ploygon",icon:n(834),id:3},{name:"Solana",icon:n(3496),id:4},{name:"zKSync Rra",icon:n(6173),id:5},{name:"Aptos",icon:n(3497),id:6},{name:"Arbitrum Nova",icon:n(6703),id:7},{name:"Aurora",icon:n(9637),id:8},{name:"Yield",icon:n(610),id:9},{name:"Magic",icon:n(2043),id:10},{name:"Avalance",icon:n(8254),id:12}],tokenLoad:!1,tokenData:[{title:"Bitcion",name:"BTC",icon:n(331)},{title:"Ethereum",name:"ETH",icon:n(1265)},{title:"Ethereum",name:"BNB",icon:n(8133)},{title:"Ethereum",name:"ATMO",icon:n(1979)},{title:"Bitcion",name:"PLOGY",icon:n(5655)},{title:"Ethereum",name:"ETC",icon:n(6769)},{title:"Ethereum",name:"DOGE",icon:n(5162)},{title:"Ethereum",name:"ETHW",icon:n(1422)},{title:"Bitcion",name:"ETM",icon:n(8191)},{title:"OKcion",name:"CRO",icon:n(7376)},{title:"Ethereum",name:"DOGE",icon:n(5519)},{title:"Ethereum",name:"ETHW",icon:n(7806)},{title:"Ethereum",name:"DOGE",icon:n(5929)},{title:"Bitcion",name:"ETM",icon:n(8705)},{title:"OKcion",name:"CRO",icon:n(6404)},{title:"Ethereum",name:"DOGE",icon:n(331)},{title:"Ethereum",name:"ETHW",icon:n(1265)},{title:"Ethereum",name:"DOGE",icon:n(8133)},{title:"Ethereum",name:"ATMO",icon:n(1979)},{title:"Bitcion",name:"PLOGY",icon:n(5655)},{title:"Ethereum",name:"ETC",icon:n(6769)},{title:"Ethereum",name:"DOGE",icon:n(5162)},{title:"Ethereum",name:"ETHW",icon:n(1422)},{title:"Bitcion",name:"ETM",icon:n(8191)},{title:"OKcion",name:"CRO",icon:n(7376)},{title:"Ethereum",name:"DOGE",icon:n(5519)},{title:"Ethereum",name:"ETHW",icon:n(7806)},{title:"Ethereum",name:"DOGE",icon:n(5929)},{title:"Bitcion",name:"ETM",icon:n(8705)},{title:"OKcion",name:"CRO",icon:n(6404)}]});(0,i.bv)((()=>{a.getTokenData(1)}));const a={onLeftSwitch(e){o.leftBtnIndex=e,a.getTokenData(e)},getTokenData(e){o.tokenLoad=!0,o.tokenData=[...o.tokenData].sort((()=>.5-Math.random())),o.tokenLoad=!1}};return{t:e,locale:t,...(0,v.BK)(o),...a}}},S=n(89);const Y=(0,S.Z)(T,[["render",f]]);var F=Y},2043:function(e){e.exports="data:image/png;base64,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"}}]);