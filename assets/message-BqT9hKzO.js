import{at as a,af as d}from"./index-B3204SZ6.js";const o=(s,e)=>a({url:d.messages.sendMessage+s,method:"POST",data:e}),t=(s,e)=>a({url:d.messages.sendMedias+s,method:"POST",data:e}),m=(s,e)=>a({url:d.messages.sendAudio+s,method:"POST",data:e}),g=(s,e)=>a({url:d.messages.sendDocument+s,method:"POST",data:e}),r=(s,e)=>a({url:d.messages.sendGiphy+s,method:"POST",data:e}),c=(s,e)=>a({url:d.messages.getMessages+s,method:"GET",params:e}),u=()=>a({url:d.messages.markAsRead,method:"PUT"});export{t as a,g as b,m as c,r as d,c as g,u as m,o as s};