// import { useSearchParams } from "react-router-dom";
import axios from "./api/axios";
import { useEffect, useState } from "react";
import Follow from "./Follow";


const Profile = () => {
    const fetchUser = localStorage.getItem("username");
    const [data, setData] = useState([]);
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('user')).accessToken;
        const AuthString = 'Bearer '.concat(token);
        axios.get(
            "http://localhost:8080/api/auth/read/" + fetchUser,
            {
                headers: {
                    accept: "*/*",
                    "Content-Type": "application/json",
                    Authorization: AuthString,
                }
            }
        ).then((res) => {
            console.log(res)
            setData(res.data);
        })
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault()
    }

    
    return (
        <div>
            <form id='profile' onSubmit={handleSubmit}>
                <h1> {localStorage.getItem("postUser")} </h1>
                { 
                    localStorage.getItem("postUser") !== localStorage.getItem("username") ? (
                        /*
                            foreach (pair in follows)
                            {
                                if (pair[0] == username && pair[1] == postUser)
                                {
                                    // You are following
                                } else
                                {
                                    // Give follow options
                                }
                            }
                        */
                        <button type="submit">
                            {/* {Follow} */}
                            Follow
                        </button>
                    ) :
                    (
                        // This is where the code goes
                        <div>
                            {<a>Welcome to your profile</a>}
                        </div>
                    )
                }
            </form>
        </div>
    )
}

export default Profile;
