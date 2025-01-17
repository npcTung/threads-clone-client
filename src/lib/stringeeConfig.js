// import useCallStore from "@/zustand/useCallStore";
// import useCurrentStore from "@/zustand/useCurrentStore";
// import { useEffect, useState } from "react";

// const stringeeConfing = () => {
//   const [client, setClient] = useState(null);
//   const [connected, setConnected] = useState(false);
//   const [call, setCall] = useState(null);
//   const { token, currentData } = useCurrentStore();
//   const { setIsCall } = useCallStore();

//   useEffect(() => {
//     if (window.StringeeClient) {
//       // Khởi tạo StringeeClient từ global
//       const stringeeClient = new window.StringeeClient();
//       setClient(stringeeClient);

//       stringeeClient.connect(token);

//       stringeeClient.on("otherdeviceauthen", (data) => {
//         if (data && data.code === 200) {
//           // Thực hiện hành động khi xác thực thành công
//           console.log("Xác thực thành công từ thiết bị khác!");
//         } else {
//           // Thực hiện hành động khi xác thực thất bại
//           console.log("Xác thực thất bại từ thiết bị khác!");
//         }
//       });

//       stringeeClient.on("authen", (res) => {
//         if (res.r === 0) {
//           console.log("Authentication successful");
//         } else {
//           console.error("Authentication failed:", res);
//         }
//       });

//       stringeeClient.on("connect", () => {
//         console.log("Connected to Stringee server");
//         setConnected(true);

//         if (!call) return;

//         call.on("signalingstate", (state) => {
//           console.log("Signaling state:", state);
//         });

//         // Xử lý sự kiện khi có cuộc gọi đến
//         client.on("incomingcall", (data) => {
//           console.log("Cuộc gọi đến từ:", data.from);
//           setIsCall(true);

//           // Có thể yêu cầu người dùng nhận hoặc từ chối cuộc gọi
//           call.answer(); // Nhận cuộc gọi
//         });

//         // Xử lý cuộc gọi khi kết thúc
//         call.on("signalingstate", (state) => {
//           if (state === "ended") {
//             console.log("Cuộc gọi đã kết thúc");
//           }
//         });
//       });

//       stringeeClient.on("disconnect", () => {
//         console.log("Disconnected from server");
//         setConnected(false);
//       });
//     } else {
//       console.error("Stringee SDK not loaded!");
//     }
//   }, []);

//   const makeCall = (converstionId) => {
//     if (!client) return;

//     const call = new window.StringeeCall(
//       client,
//       currentData._id,
//       converstionId
//     );
//     setCall(call);

//     // Trạng thái cuộc gọi
//     call.makeCall((res) => {
//       console.log("Call status:", res);
//     });
//   };

//   return { connected, makeCall, client, call };
// };

// export default stringeeConfing;
