import{W as S,j as e,X as f,Y as _,r as x,u as p,L as u,U as g,aj as N,ak as v,al as y,am as C,an as D,ao as w,Z as b,_ as P,g as M,aq as h,aa as T,ab as B,ac as H,ad as L,D as U,h as F,i as z,k as $,l as q,N as A,as as O,B as X,f as R,z as k,$ as K,a1 as Q,a0 as W,ai as Y,ah as Z,ap as G}from"./index-DusGuswS.js";import{u as J,d as V,g as ee,D as se,a as te,b as ne,c as le}from"./DialogCreateCommnet-a84AeAgJ.js";import{d as ie}from"./actions-BWtxrs-5.js";import"./conversation-DqF3yZPf.js";const{ChevronRight:re,Dot:ae,Heart:oe,Ellipsis:ce,Trash2:de,LoaderCircle:me}=k,xe=({postId:s})=>{var m;const i=["comments",s],{data:n,fetchNextPage:r,hasNextPage:l,isFetching:o,isFetchingNextPage:d,status:c}=S({queryKey:i,queryFn:({pageParam:t})=>ee(s,t),initialPageParam:null,getNextPageParam:t=>t==null?void 0:t.nextCursor,staleTime:5e3}),a=n==null?void 0:n.pages.find(t=>t);return c==="pending"?e.jsx(f,{}):c==="success"&&!((m=a==null?void 0:a.comments)!=null&&m.length)&&!l?e.jsx("div",{className:"p-5 flex items-center justify-center",children:e.jsx("span",{className:"text-center",children:"Không có bình luận nào."})}):c==="error"?e.jsx("div",{className:"p-5 flex items-center justify-center",children:e.jsx("span",{className:"text-center text-destructive",children:"Đã xảy ra lỗi khi tải bình luận."})}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"w-full flex flex-col space-y-5",children:[e.jsxs("div",{className:"flex justify-between items-center p-5 border-b",children:[e.jsx("span",{children:"Thread trả lời"}),e.jsxs("div",{className:"flex items-center gap-1 text-sm opacity-50 cursor-pointer",children:[e.jsx("span",{children:"Xem hoạt động"}),e.jsx(re,{className:"size-5"})]})]}),e.jsxs(_,{onBottomReached:()=>l&&!o&&r(),children:[a==null?void 0:a.comments.map(t=>e.jsx(ue,{data:t},t._id)),d&&e.jsx(me,{className:"mx-auto size-5 animate-spin"})]})]})})},ue=({data:s})=>{const[i,n]=x.useState(!1),{currentData:r}=p(),l=s.likes.includes(r._id),o=J(s.postId);return e.jsxs(e.Fragment,{children:[e.jsx(je,{open:i,onOpenChange:()=>n(!1),postId:s.postId,commentId:s._id}),e.jsx("div",{className:"w-full flex items-center justify-between p-5 border-b",children:e.jsxs("div",{className:"flex gap-3 w-full",children:[e.jsx("div",{className:"flex flex-col items-center",children:e.jsx(u,{to:`/${s.userId.userName}`,children:e.jsx(g,{avatarUrl:s.userId.avatarUrl})})}),e.jsx("div",{className:"flex-1 w-full space-y-5",children:e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex justify-between w-full",children:[e.jsxs("div",{className:"flex w-full items-center",children:[e.jsx(N,{user:s.userId,children:e.jsx(u,{to:`/${s.userId.userName}`,className:"text-sm font-medium hover:underline",children:s.userId.userName})}),e.jsx(ae,{}),e.jsx(v,{delayDuration:300,children:e.jsxs(y,{children:[e.jsx(C,{asChild:!0,children:e.jsx("small",{className:"opacity-50 cursor-default",children:D(s.createdAt)})}),e.jsx(w,{side:"bottom",align:"start",children:b(s.createdAt,"EEEE, d MMMM, yyyy, HH:mm",{locale:P})})]})})]}),s.userId._id===r._id&&e.jsx(he,{setShowDeletecomment:n})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm",children:s.context}),e.jsxs("div",{className:"flex w-fit gap-1 items-center cursor-pointer rounded-full hover:bg-muted p-2",onClick:()=>o.mutate(s._id),children:[e.jsx(oe,{className:M("size-5",l&&"fill-red-500 text-red-500")}),e.jsx("small",{children:h(s.likes.length)})]})]})]})})]})})]})},he=({setShowDeletecomment:s})=>e.jsxs(T,{children:[e.jsx(B,{asChild:!0,children:e.jsx(ce,{className:"cursor-pointer size-7 p-1 rounded-full hover:bg-muted"})}),e.jsx(H,{side:"rigth",align:"start",children:e.jsxs(L,{className:"flex items-center justify-between gap-5 cursor-pointer text-red-600",onClick:s,children:[e.jsx("span",{children:"Xóa"}),e.jsx(de,{className:"size-5"})]})})]}),je=({open:s,onOpenChange:i,postId:n,commentId:r})=>{const l=V(n);return e.jsx(U,{open:s,onOpenChange:i,children:e.jsxs(F,{children:[e.jsxs(z,{children:[e.jsx($,{children:"Xóa bình luận"}),e.jsx(q,{children:"Bạn có chắc muốn xóa bình luận này?"})]}),e.jsxs(A,{children:[e.jsx(O,{asChild:!0,children:e.jsx(X,{variant:"outline",children:"Hủy"})}),e.jsx(R,{variant:"destructive",loading:l.isPending,onClick:()=>l.mutate(r,{onSuccess:i(!1)}),children:"Xóa"})]})]})})},{Dot:fe,Heart:pe,MessageSquare:ge}=k,we=()=>{var j;const[s,i]=x.useState(!1),[n,r]=x.useState(!1),[l,o]=x.useState(!1),[d,c]=x.useState(!1),{currentData:a}=p(),{post_id:m}=K(),{data:t,isLoading:E,error:I}=Q({queryKey:["detail-post",m],queryFn:()=>ie(m),staleTime:5e3});return E?e.jsx(f,{}):I?e.jsx(W,{}):e.jsxs(e.Fragment,{children:[((j=t==null?void 0:t.fileUrls)==null?void 0:j.length)>0&&e.jsx(se,{open:s,onOpenChange:i,attachments:t.fileUrls}),e.jsx(Y,{open:n,onOpenChange:r,postId:t._id}),e.jsx(te,{data:a,onOpenChange:o,open:l,postId:t._id}),e.jsx(ne,{data:t,onOpenChange:c,open:d}),e.jsxs("div",{className:"max-w-[720px] mx-auto mb-5 border md:rounded-2xl bg-card",children:[e.jsx(Ne,{data:t,setShowDeletePost:r,setShowMedia:i,setShowCreateCommnet:o,setShowEditPost:c,currentData:a}),e.jsx(xe,{postId:t._id})]})]})},Ne=({data:s,setShowDeletePost:i,setShowMedia:n,setShowCreateCommnet:r,currentData:l,setShowEditPost:o})=>{const d=s.likes.includes(l._id),c=Z();return e.jsx("div",{className:"w-full flex items-center justify-between p-5",children:e.jsx("div",{className:"flex flex-col items-center w-full",children:e.jsxs("div",{className:"flex flex-col space-y-3 w-full",children:[e.jsxs("div",{className:"flex justify-between gap-5 w-full",children:[e.jsx(u,{to:`/${s.postedBy.userName}`,children:e.jsx(g,{avatarUrl:s.postedBy.avatarUrl})}),e.jsxs("div",{className:"flex w-full items-center",children:[e.jsx(N,{user:s.postedBy,children:e.jsx(u,{to:`/${s.postedBy.userName}`,className:"text-sm font-medium hover:underline",children:s.postedBy.userName})}),e.jsx(fe,{}),e.jsx(v,{delayDuration:300,children:e.jsxs(y,{children:[e.jsx(C,{asChild:!0,children:e.jsx("small",{className:"cursor-default opacity-50",children:D(s.createdAt)})}),e.jsx(w,{side:"bottom",align:"start",children:b(s.createdAt,"EEEE, d MMMM, yyyy, HH:mm",{locale:P})})]})})]}),e.jsx(le,{postId:s._id,setDeletePost:i,isEdit:s.postedBy._id===l._id,setEditPost:o})]}),e.jsx("span",{className:"text-sm",children:s.context}),e.jsx(G,{attachments:s.fileUrls,onOpenChange:n}),e.jsxs("div",{className:"flex gap-3 mt-1 border-b",children:[e.jsxs("div",{className:"flex gap-1 items-center cursor-pointer rounded-full hover:bg-muted p-2",onClick:()=>c.mutate(s._id),children:[e.jsx(pe,{className:M("size-5",d&&"fill-red-500 text-red-500")}),e.jsx("small",{children:h(s.likes.length)})]}),e.jsxs("div",{className:"flex gap-1 items-center cursor-pointer rounded-full hover:bg-muted p-2",onClick:r,children:[e.jsx(ge,{className:"size-5"}),e.jsx("small",{children:h(s.totalCountComment||0)})]})]})]})})})};export{we as default};
