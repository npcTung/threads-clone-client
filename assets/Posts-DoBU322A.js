import{r as u,u as l,j as e,T as p,L as f,U as h,B as j,V as g,W as N,X as v,Y as y,z as P}from"./index-B3204SZ6.js";import{P as C}from"./Post-DSkKwqmK.js";import{g as b}from"./actions-sOUqoog4.js";import"./DialogCreateCommnet-CXOi-yF-.js";import"./conversation-D3y-OY1v.js";const w=()=>{const[a,r]=u.useState(!1),{currentData:s}=l();return e.jsxs(e.Fragment,{children:[e.jsx(p,{open:a,onOpenChange:()=>r(!1)}),e.jsxs("div",{className:"w-full flex items-center justify-between p-5 border-b",children:[e.jsxs("div",{className:"flex gap-5 items-center w-full",children:[e.jsx(f,{to:`/${s==null?void 0:s.userName}`,children:e.jsx(h,{avatarUrl:s==null?void 0:s.avatarUrl,displayName:s==null?void 0:s.displayName})}),e.jsx("span",{className:"opacity-50 w-full cursor-text",onClick:()=>r(!0),children:"Có gì mới?"})]}),e.jsx(j,{variant:"outline",onClick:()=>r(!0),children:"Đăng"})]})]})},{LoaderCircle:F}=P,I=()=>{const{sortPost:a}=g(),{isLoggedIn:r}=l(),{data:s,fetchNextPage:x,hasNextPage:o,isFetching:m,isFetchingNextPage:d,status:n}=N({queryKey:["posts",a],queryFn:({pageParam:t})=>r&&b(t,a),initialPageParam:null,getNextPageParam:t=>t==null?void 0:t.nextCursor,staleTime:5e3}),i=(s==null?void 0:s.pages.flatMap(t=>t==null?void 0:t.posts))||[];return n==="pending"?e.jsx(v,{}):n==="success"&&!i.length&&!o?e.jsx("div",{className:"p-5 flex items-center justify-center",children:e.jsx("span",{className:"text-center text-destructive",children:"Không có bài viết nào."})}):n==="error"?e.jsx("div",{className:"p-5 flex items-center justify-center",children:e.jsx("span",{className:"text-center text-destructive",children:"Đã xảy ra lỗi khi tải bài viết."})}):e.jsxs("div",{className:"max-w-[720px] w-full mx-auto mb-10 border space-y-5 md:rounded-2xl bg-card",children:[e.jsx(w,{}),e.jsxs(y,{onBottomReached:()=>o&&!m&&x(),children:[i.map((t,c)=>e.jsx(C,{className:c!==i.length-1&&"border-b",data:t},c)),d&&e.jsx(F,{className:"mx-auto size-5 animate-spin"})]})]})};export{I as default};