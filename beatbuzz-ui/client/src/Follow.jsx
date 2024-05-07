// import { useEffect, useState } from "react";
// import axios from "./api/axios";

// const Follow = () => {
//     const FOLLOW_URL = "http://localhost:8080/api/follow/follow";
//     // const queryParams = new URLSearchParams(window.location.search)
//     const currentUser = localStorage.getItem("username");

//     /*

//     user


//     */


//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const payload = {
//             username, userId
//         }

//         useEffect(() => {
//             const token = JSON.parse(localStorage.getItem('user')).accessToken;
//             const AuthString = 'Bearer '.concat(token);
//             const response = axios.post(FOLLOW_URL,
//                 JSON.stringify({ username, }),
//                 payload,
//                 {
//                     headers: {
//                         accept: "*/*",
//                         "Content-Type": "application/json",
//                         Authorization: AuthString,
//                     }
//                 }
//             )
//         }
//         );
//     }
// }

// // }



// export default Follow;