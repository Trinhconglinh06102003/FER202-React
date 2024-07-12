// import { useEffect, useState } from "react";

// const dataUserArray = [
//   {
//     id: 1,
//     name: "linh",
//     email: "test1 @ca.ca",
//     password: "1234",
//     phone: "0123456789",
//     bod: "06/10/2003",
//     address: "Hồ Chí Minh",
//   },
//   {
//     id: 2,
//     name: "phuc",
//     email: "test2@ca.ca",
//     password: "1234",
//     phone: "0123456789",
//     bod: "06/10/2004",
//     address: "Hà Nội",
//   },
//   {
//     id: 3,
//     name: "thich",
//     email: "test3@ca.ca",
//     password: "1234",
//     phone: "0123456789",
//     bod: "06/10/2005",
//     address: "Hà Nội",
//   },
// ];

// function App() {
//   let [list, setList] = useState([]);
//   let [isFetch, setIsFetch] = useState(false);
//   let [count, setCount] = useState(0);
//   const GetUserData = () => {
//     return new Promise((resolve, _) => {
//       resolve(dataUserArray);
//     });
//   };

//   // gọi API
//   useEffect(() => {
//     if (isFetch) {
//       GetUserData().then((result) => setList(result));
//     }
//   }, [isFetch]);
//   //đăng kí sự kiện
//   useEffect(() => {
//     const buttonClick = document.querySelector("button");
//     buttonClick.addEventListener("click", () => {
//       setCount(count + 1);
//     });
//     return () => {
//       buttonClick.removeEventListener("click", () => {});
//     };
//   }, [count]);

//   // subsciption
//   useEffect(() => {
//     console.log("linh");
//   }, [count]);

//   //reder dom
//   useEffect(() => {
//     console.log("hai");
//   });
//   return (
//     <>
//       <button
//         onClick={() => {
//           setIsFetch(!isFetch);
//         }}
//       >
//         AddList
//       </button>
//     </>
//   );
// }

// export default userEffctLesssion;
