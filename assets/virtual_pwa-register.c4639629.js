import{_ as g}from"./app.410cabad.js";function _(d={}){const{immediate:l=!1,onNeedRefresh:v,onOfflineReady:r,onRegistered:t,onRegisteredSW:o,onRegisterError:s}=d;let i,n;const c=async(a=!0)=>{await n};async function f(){if("serviceWorker"in navigator){const{Workbox:a,messageSW:u}=await g(()=>import("./workbox-window.prod.es5.d2780aeb.js"),[]);i=new a("/sw.js",{scope:"/",type:"classic"}),i.addEventListener("activated",e=>{e.isUpdate?window.location.reload():r==null||r()}),i.register({immediate:l}).then(e=>{o?o("/sw.js",e):t==null||t(e)}).catch(e=>{s==null||s(e)})}}return n=f(),c}export{_ as registerSW};
