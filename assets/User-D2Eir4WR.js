import{r as y,a as N,j as e,D as w,h as S,i as j,k as C,l as A,I as U,N as k,f as L,p as I,U as T,Z as F,_,z as G,u as P,$ as K,a0 as x,a1 as R,W as H,X as O,Y as z,a2 as V,a3 as Z,a4 as J,a5 as W,a6 as Y,a7 as $,L as q,B as f,a8 as Q,a9 as X,aa as D,ab as aa,ac as na,ad as g,ae as ea,J as oa}from"./index-DusGuswS.js";import{P as ia}from"./Post-TbkWUd4A.js";import{i as ta}from"./app-DvoR7ey1.js";import{s as ra,f as a}from"./chunk-IJNAL57A-CeChZQ5R.js";import{a as sa,f as ba,b as ca}from"./actions-BWtxrs-5.js";import"./DialogCreateCommnet-a84AeAgJ.js";import"./conversation-DqF3yZPf.js";const la=async n=>{const{recipientId:i,...t}=n;return(await ra(i,t)).data},ua=async()=>{const n=await ta("5c417909f0ccf4");return{city:n.data.city,country:n.data.country,postal:n.data.postal}},da=({open:n,onOpenChange:i,recipientId:t})=>{const[r,l]=y.useState(""),[b,u]=y.useState(!1),c=N(),v=async()=>{u(!0);try{(await la({recipientId:t,content:r})).success&&(i(!1),l(""),c(`/${I.MESSAGER}`))}catch(d){u(!1),console.error(d.message)}finally{u(!1)}};return e.jsx(w,{open:n,onOpenChange:i,children:e.jsxs(S,{children:[e.jsxs(j,{children:[e.jsx(C,{children:"Tạo tin nhắ mới"}),e.jsx(A,{children:"Bạn chưa có cuộc trò truyện nào với người này. Vui lòng nhập tin nhắn để bắt đầu cuộc trò chuyện."})]}),e.jsx(U,{placeholder:"Nhập tin nhắn...",className:"w-full rounded-md bg-muted",onChange:d=>l(d.target.value),value:r}),e.jsx(k,{children:e.jsx(L,{variant:"outline",loading:b,disabled:b||!r.trim(),onClick:v,children:"Tạo tin nhắn"})})]})})},ya=[{country:"Afghanistan",abbreviation:"AF"},{country:"Albania",abbreviation:"AL"},{country:"Algeria",abbreviation:"DZ"},{country:"American Samoa",abbreviation:"AS"},{country:"Andorra",abbreviation:"AD"},{country:"Angola",abbreviation:"AO"},{country:"Anguilla",abbreviation:"AI"},{country:"Antarctica",abbreviation:"AQ"},{country:"Antigua and Barbuda",abbreviation:"AG"},{country:"Argentina",abbreviation:"AR"},{country:"Armenia",abbreviation:"AM"},{country:"Aruba",abbreviation:"AW"},{country:"Australia",abbreviation:"AU"},{country:"Austria",abbreviation:"AT"},{country:"Azerbaijan",abbreviation:"AZ"},{country:"Bahamas",abbreviation:"BS"},{country:"Bahrain",abbreviation:"BH"},{country:"Bangladesh",abbreviation:"BD"},{country:"Barbados",abbreviation:"BB"},{country:"Belarus",abbreviation:"BY"},{country:"Belgium",abbreviation:"BE"},{country:"Belize",abbreviation:"BZ"},{country:"Benin",abbreviation:"BJ"},{country:"Bermuda",abbreviation:"BM"},{country:"Bhutan",abbreviation:"BT"},{country:"Bolivia",abbreviation:"BO"},{country:"Bosnia and Herzegovina",abbreviation:"BA"},{country:"Botswana",abbreviation:"BW"},{country:"Bouvet Island",abbreviation:"BV"},{country:"Brazil",abbreviation:"BR"},{country:"British Indian Ocean Territory",abbreviation:"IO"},{country:"Brunei",abbreviation:"BN"},{country:"Bulgaria",abbreviation:"BG"},{country:"Burkina Faso",abbreviation:"BF"},{country:"Burundi",abbreviation:"BI"},{country:"Cambodia",abbreviation:"KH"},{country:"Cameroon",abbreviation:"CM"},{country:"Canada",abbreviation:"CA"},{country:"Cape Verde",abbreviation:"CV"},{country:"Cayman Islands",abbreviation:"KY"},{country:"Central African Republic",abbreviation:"CF"},{country:"Chad",abbreviation:"TD"},{country:"Chile",abbreviation:"CL"},{country:"China",abbreviation:"CN"},{country:"Christmas Island",abbreviation:"CX"},{country:"Cocos (Keeling) Islands",abbreviation:"CC"},{country:"Colombia",abbreviation:"CO"},{country:"Comoros",abbreviation:"KM"},{country:"Congo",abbreviation:"CG"},{country:"Cook Islands",abbreviation:"CK"},{country:"Costa Rica",abbreviation:"CR"},{country:"Croatia",abbreviation:"HR"},{country:"Cuba",abbreviation:"CU"},{country:"Cyprus",abbreviation:"CY"},{country:"Czech Republic",abbreviation:"CZ"},{country:"Denmark",abbreviation:"DK"},{country:"Djibouti",abbreviation:"DJ"},{country:"Dominica",abbreviation:"DM"},{country:"Dominican Republic",abbreviation:"DO"},{country:"East Timor",abbreviation:"TP"},{country:"Ecuador",abbreviation:"EC"},{country:"Egypt",abbreviation:"EG"},{country:"El Salvador",abbreviation:"SV"},{country:"Equatorial Guinea",abbreviation:"GQ"},{country:"Eritrea",abbreviation:"ER"},{country:"Estonia",abbreviation:"EE"},{country:"Eswatini",abbreviation:"SZ"},{country:"Ethiopia",abbreviation:"ET"},{country:"Falkland Islands",abbreviation:"FK"},{country:"Faroe Islands",abbreviation:"FO"},{country:"Fiji Islands",abbreviation:"FJ"},{country:"Finland",abbreviation:"FI"},{country:"France",abbreviation:"FR"},{country:"French Guiana",abbreviation:"GF"},{country:"French Polynesia",abbreviation:"PF"},{country:"French Southern territories",abbreviation:"TF"},{country:"Gabon",abbreviation:"GA"},{country:"Gambia",abbreviation:"GM"},{country:"Georgia",abbreviation:"GE"},{country:"Germany",abbreviation:"DE"},{country:"Ghana",abbreviation:"GH"},{country:"Gibraltar",abbreviation:"GI"},{country:"Greece",abbreviation:"GR"},{country:"Greenland",abbreviation:"GL"},{country:"Grenada",abbreviation:"GD"},{country:"Guadeloupe",abbreviation:"GP"},{country:"Guam",abbreviation:"GU"},{country:"Guatemala",abbreviation:"GT"},{country:"Guernsey",abbreviation:"GG"},{country:"Guinea",abbreviation:"GN"},{country:"Guinea-Bissau",abbreviation:"GW"},{country:"Guyana",abbreviation:"GY"},{country:"Haiti",abbreviation:"HT"},{country:"Heard Island and McDonald Islands",abbreviation:"HM"},{country:"Holy See (Vatican City State)",abbreviation:"VA"},{country:"Honduras",abbreviation:"HN"},{country:"Hong Kong",abbreviation:"HK"},{country:"Hungary",abbreviation:"HU"},{country:"Iceland",abbreviation:"IS"},{country:"India",abbreviation:"IN"},{country:"Indonesia",abbreviation:"ID"},{country:"Iran",abbreviation:"IR"},{country:"Iraq",abbreviation:"IQ"},{country:"Ireland",abbreviation:"IE"},{country:"Isle of Man",abbreviation:"IM"},{country:"Israel",abbreviation:"IL"},{country:"Italy",abbreviation:"IT"},{country:"Ivory Coast",abbreviation:"CI"},{country:"Jamaica",abbreviation:"JM"},{country:"Japan",abbreviation:"JP"},{country:"Jersey",abbreviation:"JE"},{country:"Jordan",abbreviation:"JO"},{country:"Kazakhstan",abbreviation:"KZ"},{country:"Kenya",abbreviation:"KE"},{country:"Kiribati",abbreviation:"KI"},{country:"Kuwait",abbreviation:"KW"},{country:"Kyrgyzstan",abbreviation:"KG"},{country:"Laos",abbreviation:"LA"},{country:"Latvia",abbreviation:"LV"},{country:"Lebanon",abbreviation:"LB"},{country:"Lesotho",abbreviation:"LS"},{country:"Liberia",abbreviation:"LR"},{country:"Libya",abbreviation:"LY"},{country:"Liechtenstein",abbreviation:"LI"},{country:"Lithuania",abbreviation:"LT"},{country:"Luxembourg",abbreviation:"LU"},{country:"Macao",abbreviation:"MO"},{country:"North Macedonia",abbreviation:"MK"},{country:"Madagascar",abbreviation:"MG"},{country:"Malawi",abbreviation:"MW"},{country:"Malaysia",abbreviation:"MY"},{country:"Maldives",abbreviation:"MV"},{country:"Mali",abbreviation:"ML"},{country:"Malta",abbreviation:"MT"},{country:"Marshall Islands",abbreviation:"MH"},{country:"Martinique",abbreviation:"MQ"},{country:"Mauritania",abbreviation:"MR"},{country:"Mauritius",abbreviation:"MU"},{country:"Mayotte",abbreviation:"YT"},{country:"Mexico",abbreviation:"MX"},{country:"Micronesia, Federated States of",abbreviation:"FM"},{country:"Moldova",abbreviation:"MD"},{country:"Monaco",abbreviation:"MC"},{country:"Mongolia",abbreviation:"MN"},{country:"Montenegro",abbreviation:"ME"},{country:"Montserrat",abbreviation:"MS"},{country:"Morocco",abbreviation:"MA"},{country:"Mozambique",abbreviation:"MZ"},{country:"Myanmar",abbreviation:"MM"},{country:"Namibia",abbreviation:"NA"},{country:"Nauru",abbreviation:"NR"},{country:"Nepal",abbreviation:"NP"},{country:"Netherlands",abbreviation:"NL"},{country:"Netherlands Antilles",abbreviation:"AN"},{country:"New Caledonia",abbreviation:"NC"},{country:"New Zealand",abbreviation:"NZ"},{country:"Nicaragua",abbreviation:"NI"},{country:"Niger",abbreviation:"NE"},{country:"Nigeria",abbreviation:"NG"},{country:"Niue",abbreviation:"NU"},{country:"Norfolk Island",abbreviation:"NF"},{country:"North Korea",abbreviation:"KP"},{country:"Northern Ireland",abbreviation:"GB"},{country:"Northern Mariana Islands",abbreviation:"MP"},{country:"Norway",abbreviation:"NO"},{country:"Oman",abbreviation:"OM"},{country:"Pakistan",abbreviation:"PK"},{country:"Palau",abbreviation:"PW"},{country:"Palestine",abbreviation:"PS"},{country:"Panama",abbreviation:"PA"},{country:"Papua New Guinea",abbreviation:"PG"},{country:"Paraguay",abbreviation:"PY"},{country:"Peru",abbreviation:"PE"},{country:"Philippines",abbreviation:"PH"},{country:"Pitcairn",abbreviation:"PN"},{country:"Poland",abbreviation:"PL"},{country:"Portugal",abbreviation:"PT"},{country:"Puerto Rico",abbreviation:"PR"},{country:"Qatar",abbreviation:"QA"},{country:"Reunion",abbreviation:"RE"},{country:"Romania",abbreviation:"RO"},{country:"Russia",abbreviation:"RU"},{country:"Rwanda",abbreviation:"RW"},{country:"Saint Helena",abbreviation:"SH"},{country:"Saint Kitts and Nevis",abbreviation:"KN"},{country:"Saint Lucia",abbreviation:"LC"},{country:"Saint Pierre and Miquelon",abbreviation:"PM"},{country:"Saint Vincent and the Grenadines",abbreviation:"VC"},{country:"Samoa",abbreviation:"WS"},{country:"San Marino",abbreviation:"SM"},{country:"Sao Tome and Principe",abbreviation:"ST"},{country:"Saudi Arabia",abbreviation:"SA"},{country:"Senegal",abbreviation:"SN"},{country:"Serbia",abbreviation:"RS"},{country:"Seychelles",abbreviation:"SC"},{country:"Sierra Leone",abbreviation:"SL"},{country:"Singapore",abbreviation:"SG"},{country:"Slovakia",abbreviation:"SK"},{country:"Slovenia",abbreviation:"SI"},{country:"Solomon Islands",abbreviation:"SB"},{country:"Somalia",abbreviation:"SO"},{country:"South Africa",abbreviation:"ZA"},{country:"South Georgia and the South Sandwich Islands",abbreviation:"GS"},{country:"South Korea",abbreviation:"KR"},{country:"South Sudan",abbreviation:"SS"},{country:"Spain",abbreviation:"ES"},{country:"Sri Lanka",abbreviation:"LK"},{country:"Sudan",abbreviation:"SD"},{country:"Suriname",abbreviation:"SR"},{country:"Svalbard and Jan Mayen",abbreviation:"SJ"},{country:"Sweden",abbreviation:"SE"},{country:"Switzerland",abbreviation:"CH"},{country:"Syria",abbreviation:"SY"},{country:"Tajikistan",abbreviation:"TJ"},{country:"Tanzania",abbreviation:"TZ"},{country:"Thailand",abbreviation:"TH"},{country:"The Democratic Republic of Congo",abbreviation:"CD"},{country:"Timor-Leste",abbreviation:"TL"},{country:"Togo",abbreviation:"TG"},{country:"Tokelau",abbreviation:"TK"},{country:"Tonga",abbreviation:"TO"},{country:"Trinidad and Tobago",abbreviation:"TT"},{country:"Tunisia",abbreviation:"TN"},{country:"Turkey",abbreviation:"TR"},{country:"Turkmenistan",abbreviation:"TM"},{country:"Turks and Caicos Islands",abbreviation:"TC"},{country:"Tuvalu",abbreviation:"TV"},{country:"Uganda",abbreviation:"UG"},{country:"Ukraine",abbreviation:"UA"},{country:"United Arab Emirates",abbreviation:"AE"},{country:"United Kingdom",abbreviation:"UK"},{country:"United States",abbreviation:"US"},{country:"United States Minor Outlying Islands",abbreviation:"UM"},{country:"Uruguay",abbreviation:"UY"},{country:"Uzbekistan",abbreviation:"UZ"},{country:"Vanuatu",abbreviation:"VU"},{country:"Venezuela",abbreviation:"VE"},{country:"Vietnam",abbreviation:"VN"},{country:"Virgin Islands, British",abbreviation:"VG"},{country:"Virgin Islands, U.S.",abbreviation:"VI"},{country:"Wallis and Futuna",abbreviation:"WF"},{country:"Western Sahara",abbreviation:"EH"},{country:"Yemen",abbreviation:"YE"},{country:"Zambia",abbreviation:"ZM"},{country:"Zimbabwe",abbreviation:"ZW"}];[...Array(20)].map(()=>({id:a.number.int(),user:{avatarUrl:a.image.avatar(),userName:a.internet.userName(),displayName:a.internet.displayName(),following:a.number.int({min:10,max:99999999}),follower:a.number.int({min:10,max:99999999}),gender:a.person.sex(),bio:a.person.bio(),posts:a.number.int({min:10,max:9999999})},context:a.word.words(),imageUrl:[...Array(Math.floor(Math.random()*10+1))].map(()=>({type:"IMAGE",url:a.image.urlPicsumPhotos()})),likes:a.number.int({min:10,max:99999999}),comments:a.number.int({min:10,max:99999999}),createdAt:a.date.recent()}));a.number.int(),a.image.avatar(),a.internet.userName(),a.internet.displayName(),a.number.int({min:10,max:99999999}),a.number.int({min:10,max:99999999}),a.person.sex(),a.person.bio(),a.number.int({min:10,max:9999999}),a.word.words(),[...Array(Math.floor(Math.random()*10+1))].map(()=>({type:"IMAGE",url:a.image.urlPicsumPhotos()})),a.number.int({min:10,max:99999999}),a.number.int({min:10,max:99999999}),a.date.recent();[...Array(20)].map(()=>({id:a.number.int(),avatarUrl:a.image.avatar(),userName:a.internet.userName(),displayName:a.internet.displayName(),following:a.number.int({min:10,max:99999999}),follower:a.number.int({min:10,max:99999999}),gender:a.person.sex(),bio:a.person.bio(),posts:a.number.int({min:10,max:9999999}),link:a.internet.url(),createdAt:a.date.past()}));a.image.avatar(),a.internet.userName(),a.internet.displayName(),a.number.int({min:10,max:99999999}),a.number.int({min:10,max:99999999}),a.person.sex(),a.person.bio(),a.number.int({min:10,max:9999999}),a.internet.url(),a.date.past();[...Array(20)].map(()=>({id:a.number.int(),user:{avatarUrl:a.image.avatar(),userName:a.internet.userName(),displayName:a.internet.userName(),following:a.number.int({min:10,max:99999999}),follower:a.number.int({min:10,max:99999999}),gender:a.person.sex(),bio:a.person.bio(),posts:a.number.int({min:10,max:9999999})},comment:a.lorem.sentence(),likes:a.number.int({min:10,max:99999999}),createdAt:a.date.recent()}));const ma=()=>{let n="";for(;n.length<500;){const i=a.word.words();if(n.length+i.length+1>500)break;return n+=(n?" ":"")+i,n}};[...Array(20)].map((n,i)=>({id:i,url:a.image.avatar(),name:a.internet.userName(),msg:ma(),time:Date(a.date.recent()),unread:Math.floor(Math.random()*100)+1,online:a.datatype.boolean()}));const o=["sent","read","delivered"];a.word.words(Math.floor(Math.random()*200)+1),a.datatype.boolean(),o[Math.floor(Math.random()*o.length)],a.word.words(Math.floor(Math.random()*200)+1),a.datatype.boolean(),o[Math.floor(Math.random()*o.length)],Date(a.date.recent()),a.word.words(Math.floor(Math.random()*200)+1),a.datatype.boolean(),o[Math.floor(Math.random()*o.length)],a.datatype.boolean(),o[Math.floor(Math.random()*o.length)],a.word.words(Math.floor(Math.random()*200)+1),a.datatype.boolean(),o[Math.floor(Math.random()*o.length)],a.word.words(Math.floor(Math.random()*200)+1),a.datatype.boolean(),o[Math.floor(Math.random()*o.length)],[...Array(Math.floor(Math.random()*20)+1)].map(()=>a.image.urlPicsumPhotos()),a.word.words(Math.floor(Math.random()*200)+1),a.datatype.boolean(),o[Math.floor(Math.random()*o.length)],Date(a.date.recent()),a.word.words(Math.floor(Math.random()*200)+1),a.datatype.boolean(),o[Math.floor(Math.random()*o.length)],a.datatype.boolean(),o[Math.floor(Math.random()*o.length)],`${a.word.words(Math.floor(Math.random()*50)+1)}`,a.datatype.boolean(),o[Math.floor(Math.random()*o.length)],a.word.words(Math.floor(Math.random()*200)+1),a.datatype.boolean(),o[Math.floor(Math.random()*o.length)],a.word.words(Math.floor(Math.random()*200)+1),a.datatype.boolean(),o[Math.floor(Math.random()*o.length)],a.word.words(Math.floor(Math.random()*200)+1),a.datatype.boolean(),o[Math.floor(Math.random()*o.length)],a.word.words(Math.floor(Math.random()*200)+1),a.datatype.boolean(),o[Math.floor(Math.random()*o.length)],[...Array(Math.floor(Math.random()*20)+1)].map(()=>a.image.urlPicsumPhotos()),Date(a.date.recent()),a.word.words(Math.floor(Math.random()*200)+1),a.datatype.boolean(),o[Math.floor(Math.random()*o.length)],a.word.words(Math.floor(Math.random()*200)+1),a.datatype.boolean(),o[Math.floor(Math.random()*o.length)];const{Dot:va}=G,pa=({userData:n,open:i,onOpenChange:t})=>{var u;const[r,l]=y.useState({city:"",country:"",postal:""}),b=async()=>{const c=await ua();c&&l(c)};return y.useEffect(()=>{b()},[]),e.jsxs(w,{open:i,onOpenChange:t,children:[e.jsxs(j,{className:"p-0",children:[e.jsx(C,{}),e.jsx(A,{})]}),e.jsxs(S,{className:"w-[400px]",children:[e.jsxs("div",{className:"flex items-center justify-between space-x-5",children:[e.jsxs("div",{className:"flex flex-col w-full space-y-1 border-b pb-2",children:[e.jsx("span",{className:"font-semibold",children:"Tên"}),e.jsx("span",{className:"text-sm",children:`${n==null?void 0:n.displayName} (@${n==null?void 0:n.userName})`})]}),e.jsx(T,{avatarUrl:n==null?void 0:n.avatarUrl,displayName:n.displayName,className:"size-[80px]"})]}),e.jsxs("div",{className:"flex flex-col py-2 border-b",children:[e.jsx("span",{className:"font-semibold",children:"Ngày tham gia"}),(n==null?void 0:n.createdAt)&&e.jsx("span",{className:"text-sm",children:F(n==null?void 0:n.createdAt,"EEEE, d MMMM, yyyy",{locale:_})})]}),e.jsxs("div",{className:"flex flex-col py-2",children:[e.jsx("span",{className:"font-semibold",children:"Địa điểm"}),e.jsxs("div",{className:"text-sm flex items-center",children:[e.jsx("span",{children:r.city}),e.jsx(va,{}),e.jsx("span",{children:(u=ya.find(c=>c.abbreviation===r.country))==null?void 0:u.country})]})]})]})]})},{CircleEllipsis:ha,Link2:ga,Info:Ma,UserX:xa,Dot:fa,LoaderCircle:Na}=G,Ba=()=>{const{currentData:n}=P(),{user_name:i}=K();if(n.blockedUsers.map(s=>s.userName).includes(i))return e.jsx(x,{});const{data:t,isLoading:r,isError:l}=R({queryKey:["user",i],queryFn:()=>ba(i),staleTime:5e3});if(l)return e.jsx(x,{});const{data:b,fetchNextPage:u,hasNextPage:c,isFetching:v,isFetchingNextPage:d,status:p}=H({queryKey:["posts",i],queryFn:({pageParam:s})=>ca(i,s),initialPageParam:null,getNextPageParam:s=>s.nextCursor,staleTime:5e3}),m=(b==null?void 0:b.pages.flatMap(s=>s.posts))||[];return r||p==="pending"?e.jsx(O,{}):e.jsxs("div",{className:"max-w-[720px] w-full mx-auto mb-10 border space-y-5 md:rounded-2xl bg-card",children:[e.jsx(wa,{userData:(t==null?void 0:t._id)===n._id?n:t,isEdit:(t==null?void 0:t._id)===(n==null?void 0:n._id)}),e.jsxs(z,{onBottomReached:()=>c&&!v&&u(),children:[m.map((s,h)=>e.jsx(ia,{className:h!==m.length-1&&"border-b",data:s,isEdit:(t==null?void 0:t._id)===(n==null?void 0:n._id)},h)),p==="success"&&!m.length&&!c&&e.jsx("div",{className:"p-5 flex items-center justify-center",children:e.jsx("span",{children:"Không có bài viết nào"})}),d&&e.jsx(Na,{className:"mx-auto size-5 animate-spin"})]})]})},wa=({userData:n,isEdit:i})=>{const[t,r]=y.useState(!1),[l,b]=y.useState(!1),[u,c]=y.useState(!1),[v,d]=y.useState(!1),[p,m]=y.useState(!1),{currentData:s}=P(),h=s.following.map(M=>M._id),B=N(),E=async()=>{await sa(n._id)?B(`/${I.MESSAGER}`):m(!0)};return e.jsxs(e.Fragment,{children:[e.jsx(V,{userData:n,open:t,onOpenChange:r}),e.jsx(pa,{userData:n,onOpenChange:b,open:l}),e.jsx(Z,{data:n,onOpenChange:c,open:u}),e.jsx(J,{open:v,onOpenChange:d,data:(n==null?void 0:n._id)===s._id?s:n}),e.jsx(da,{open:p,onOpenChange:m,recipientId:n._id}),e.jsxs("div",{className:"border-b p-5 space-y-5",children:[e.jsxs("div",{className:"flex w-full flex-col gap-3 break-words px-1 py-2.5 md:min-w-52",children:[e.jsxs("div",{className:"flex items-center justify-between gap-20",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-lg font-semibold hover:underline cursor-pointer",onClick:()=>b(!0),children:n==null?void 0:n.displayName}),e.jsxs("small",{className:"flex items-center gap-1 text-muted-foreground",children:["@",n==null?void 0:n.userName," ",(n==null?void 0:n.gender)==="female"&&e.jsx("img",{src:W,alt:`${n==null?void 0:n.gender} icon`,className:"size-4"}),(n==null?void 0:n.gender)==="male"&&e.jsx("img",{src:Y,alt:`${n==null?void 0:n.gender} icon`,className:"size-4"})]})]}),e.jsx(T,{avatarUrl:n==null?void 0:n.avatarUrl,displayName:n==null?void 0:n.displayName,className:"cursor-pointer size-28",handelOnclick:()=>r(!0)})]}),(n==null?void 0:n.bio)&&e.jsx("div",{className:"line-clamp-4 whitespace-pre-line",children:n==null?void 0:n.bio})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx($,{className:"text-sm opacity-50",follower:n==null?void 0:n.follower.length,handelOnclick:()=>d(!0)}),(n==null?void 0:n.link)&&e.jsxs(e.Fragment,{children:[e.jsx(fa,{className:"opacity-50"}),e.jsx(q,{to:n==null?void 0:n.link,target:"_blank",className:"text-sm opacity-50 hover:underline whitespace-nowrap",children:n==null?void 0:n.link})]})]}),!i&&e.jsx(Sa,{onOpenChange:()=>b(!0),uid:n._id})]}),i?e.jsx(f,{variant:"outline",className:"w-full text-md",onClick:()=>c(!0),children:"Chỉnh sửa trang cá nhân"}):e.jsxs("div",{className:"flex items-center gap-5",children:[e.jsx(Q,{className:"flex-1",isFollow:h.includes(n._id),userId:n._id}),e.jsx(f,{variant:"outline",className:"flex-1",onClick:E,children:"Nhắn tin"})]})]})]})},Sa=({onOpenChange:n,uid:i})=>{const t=X(),r=()=>{const l=window.location.href;navigator.clipboard.writeText(l).then(()=>{oa.success("Đã sao chép url của người dùng.")})};return e.jsxs(D,{children:[e.jsx(aa,{asChild:!0,children:e.jsx(ha,{className:"p-1 rounded-full hover:bg-muted size-8 cursor-pointer"})}),e.jsxs(na,{side:"bottom",align:"end",children:[e.jsxs(g,{className:"flex items-center justify-between gap-5 cursor-pointer py-3",onClick:r,children:[e.jsx("span",{children:"Sao chép liên kết"}),e.jsx(ga,{className:"size-5 -rotate-45"})]}),e.jsxs(g,{className:"flex items-center justify-between gap-5 cursor-pointer py-3",onClick:n,children:[e.jsx("span",{children:"Giới thiệu về trang cá nhân này"}),e.jsx(Ma,{className:"size-5"})]}),e.jsx(ea,{}),e.jsxs(g,{className:"flex items-center justify-between gap-5 cursor-pointer py-3 text-red-600",onClick:()=>t.blockAccount(i),children:[e.jsx("span",{children:"Chặn"}),e.jsx(xa,{className:"size-5"})]})]})]})};export{Ba as default};
