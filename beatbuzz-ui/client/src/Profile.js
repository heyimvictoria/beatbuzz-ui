// import { useSearchParams } from "react-router-dom";
import axios from "./api/axios";
import { useEffect, useState } from "react";
import Follow from "./Follow";
import Playlist from "./Playlist";


const Profile = () => {
    const fetchUser = localStorage.getItem("username");
    const [data, setData] = useState([]);
    const [isFollowing, setIsFollowing] = useState(false);

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
            const followerId = res.data.followerId;
            const followedId = res.data.followedId;
            const loggedInUserId = localStorage.getItem("user");
            setIsFollowing(followerId === loggedInUserId && followedId === fetchUser);
        })
    }, [fetchUser]);


    const handleSubmit = async (e) => {
        e.preventDefault()

        setIsFollowing(prevState => !prevState);
    }

    
    return (
        <div>
            <form id='profile' onSubmit={handleSubmit}>
              {/* <form id='profile' onSubmit={handleFollowToggle}>  */}
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
                        // <button type="submit">
                        //     {/* {Follow} */}
                        //     Follow
                        // </button>
                        <button type="submit">
                            {isFollowing ? "Unfollow" : "Follow"}
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
            {/* Render the Follow component */}
            {localStorage.getItem("postUser") !== localStorage.getItem("username") && (
                <Follow />
            )}

             {/* {localStorage.getItem("username") !== localStorage.getItem("postUser") && (
                <Playlist/> )} */}
        </div>
    )
}

export default Profile;
