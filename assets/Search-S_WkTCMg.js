import{r as u,W as d,j as e,Y as h,aq as f,I as p,g as j,a as N,L as g,U as v,ai as b,a6 as y,z as w}from"./index-B3204SZ6.js";import{u as q}from"./useDebounce-BeHVEC1R.js";import{c as U}from"./actions-sOUqoog4.js";import"./conversation-D3y-OY1v.js";const{SearchIcon:C,LoaderCircle:S}=w,T=()=>{const[r,l]=u.useState({q:null}),s=q(r,800),{data:n,fetchNextPage:c,hasNextPage:t,isFetchingNextPage:o,isFetching:m,status:x}=d({queryKey:["search",s],queryFn:({pageParam:a})=>U(s,a),initialPageParam:null,getNextPageParam:a=>a==null?void 0:a.nextCursor,staleTime:5e3}),i=(n==null?void 0:n.pages.flatMap(a=>a.data))||[];return e.jsxs("div",{className:"max-w-[720px] w-full p-5 mx-auto mb-10 border space-y-5 md:rounded-2xl bg-card",children:[e.jsx(F,{setQueries:l}),e.jsxs(h,{onBottomReached:()=>t&&!m&&c(),children:[e.jsx("div",{children:e.jsx("span",{className:"font-semibold text-sm opacity-50",children:"Gợi ý theo dõi"})}),e.jsx(I,{datas:i}),x==="success"&&!i.length&&!t&&e.jsx("span",{children:"Không có người dùng nào."}),o&&e.jsx(S,{className:"mx-auto size-5 animate-spin"})]})]})},F=({setQueries:r})=>{const{theme:l}=f();return e.jsxs("div",{className:"relative",children:[e.jsx(C,{className:"absolute left-3 top-1/2 size-5 -translate-y-1/2 transform text-muted-foreground"}),e.jsx(p,{placeholder:"Search",onChange:s=>r({q:s.target.value.trim()||null}),className:j("ps-10",l==="dark"?"bg-background":"bg-muted")})]})},I=({datas:r})=>{const l=N();return e.jsx("div",{children:(r==null?void 0:r.length)&&r.map(s=>e.jsx("div",{className:"w-full flex items-center justify-between p-5",children:e.jsxs("div",{className:"flex gap-3 w-full",children:[e.jsx("div",{className:"flex flex-col items-center",children:e.jsx(g,{to:`/${s.userName}`,children:e.jsx(v,{avatarUrl:s.avatarUrl,displayName:s.displayName})})}),e.jsxs("div",{className:"flex-1 w-full space-y-5 border-b pb-2 cursor-pointer",onClick:()=>l(`/${s.userName}`),children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"flex justify-between w-full",children:e.jsx("div",{className:"flex w-full items-center",children:e.jsx(b,{user:s,children:e.jsx("span",{className:"text-sm font-medium hover:underline",children:s.userName})})})}),e.jsx("span",{className:"text-sm opacity-50",children:s.displayName})]}),e.jsx(y,{className:"text-sm",follower:s.follower.length})]})]})},s._id))})};export{T as default};