// import { useEffect, useState } from "react";
// import axios from "./api/axios";

// //Dont really know if this works or is needed 


// const Unfollow = () => {
//     const UNFOLLOW_URL = "http://localhost:8080/api/follow/unfollow";
//     const username =localStorage.getItem('username');
//         const postUser= localStorage.getItem("postUser");
//         const payload = {
//             username, postUser
//         }
//     // const queryParams = new URLSearchParams(window.location.search)
//     // const currentUser = localStorage.getItem("username");

//     /*

//     user
// */

    
//     useEffect(() => {
//         // const username = JSON.parse(localStorage.getItem('username')).accessToken;
       
//         const AuthString = 'Bearer '.concat(username);
//         const response = axios.post(FOLLOW_URL,
//             // JSON.stringify({ username, }),
//             payload,
//             {
//                 headers: {
//                     accept: "*/*",
//                     "Content-Type": "application/json",
//                     Authorization: AuthString,
//                 }
//                 // response.data 
//             }
//         )
//     }
    


//     // const handleSubmit = async (e) => {
//     //     e.preventDefault();


        

//         );
//     }


// export default Follow;