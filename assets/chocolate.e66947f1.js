import{d as v,b as w,r as f,c as i,a as u,e as s,f as a,t as x,g as C,w as o,h as D,F as b,i as M,j as c,o as n,N as m,k as N,l as A,m as V}from"./app.ce1222ce.js";import{u as $}from"./use-message.1ca2c0c3.js";var j="/assets/gold.a2ec9fb4.png";const L={key:0,"i-mdi-music-note-outline":"",class:"animate-spin animate-slow"},P={key:1,"i-mdi-music-note-off-outline":""},S={class:"mt-20px text-24px font-600"},z={class:"mt-5"},I={class:"m-6 flex justify-around flex-wrap items-center"},K=["src","onClick"],R=u("img",{src:j,alt:"",class:"w-600px"},null,-1),T=u("div",null,[a("\u62FF\u7740\u6697\u53F7"),u("span",{class:"text-red-500"},"9383"),a("\u53BB\u627Esakasa\u7ED9\u4F60\u4E70\u5DE7\u514B\u529B\u5403\u5427~")],-1),O=v({__name:"chocolate",setup(q){const l=w("/audio/Marilyn Manson - KILL4ME (Explicit).mp3"),r=$(),h=()=>{l.isPlaying.value?l.pause():l.play()},d=f(!1),e=f(100),E=V(),B=()=>{E.push("/other")},g=()=>{window.open("https://www.jinyuwenhua.com/shipin/18329-0-0.html","_blank")},F=t=>{if(e.value<=0){r.warning("\u6CA1\u94B1\u5566\u4F60\u8FD9\u4E2A\u5012\u9709\u86CB\uFF01");return}else e.value=e.value-10;t===23||t===67||t===87||t===98||t===44?(d.value=!0,r.success("\u88AB\u4F60\u53D1\u73B0\u4E86\uFF01")):r.warning("\u4E0D\u662F\u8FD9\u4E2A\u54DF")},k=()=>{e.value=e.value+10};return(t,_)=>(n(),i("div",null,[u("button",{class:"music-btn absolute right-6 top-6 rounded-full",bg:"transparent",p:"1",text:"lg",onClick:h},[s(l).isPlaying.value?(n(),i("div",L)):(n(),i("div",P))]),u("div",S,[a(" \u6765\u9009\u5DE7\u514B\u529B\u5427~ \u4E5F\u6709\u4E94\u4E2A\u5E26\u7740\u5956\u54C1\u54E6 "),u("span",null,"\u5269\u4F59$"+x(s(e)),1),u("div",z,[s(e)===0?(n(),C(s(m),{key:0,type:"primary",onClick:k},{default:o(()=>[a(" sakasa\u8D50\u6211\u5341\u5757\u94B1\u5427 ")]),_:1})):D("",!0)])]),u("div",I,[(n(),i(b,null,M(110,(p,y)=>u("div",{key:p},[u("img",{src:`../../public/cho${p%4+1}.png`,alt:"",class:"w-60px h-60px mx-5 cursor-pointer",onClick:G=>F(y)},null,8,K)])),64))]),c(s(A),{show:s(d),onMaskClick:_[0]||(_[0]=p=>d.value=!1)},{default:o(()=>[c(s(N),{style:{width:"660px"},title:"\u606D\u559C\u5403\u5230\u91D1\u5238",size:"huge",bordered:!1},{default:o(()=>[R,T,c(s(m),{type:"primary",onClick:g},{default:o(()=>[a(" \u53EF\u4EE5\u53BB\u770B\u7535\u5F71\u4E86 ")]),_:1}),c(s(m),{type:"primary",class:"ml-10",onClick:B},{default:o(()=>[a(" \u4E5F\u53EF\u4EE5\u56DE\u53BB\u626B\u7801 ")]),_:1})]),_:1})]),_:1},8,["show"])]))}});export{O as default};
