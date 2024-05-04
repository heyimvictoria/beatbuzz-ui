// import { useSearchParams } from "react-router-dom";
import axios from "./api/axios";
import { useEffect, useState } from "react";


const Profile = () => {
    // const searchParams = useSearchParams();
    // const queryParams = new URLSearchParams(window.location.search)
    const fetchUser = localStorage.getItem("username");
    // const fetchUser = queryParams.get("username") ;
    const [data, setData] = useState([]);
    // const navigate = useNavigate();

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

    const handleSubmit= async(e) => {
        e.preventDefault()

// if(activeUser == profileUser) {
//     render(
//          <div> 
//         <button type="submit"> 
//         Profile/Follow
//         </button>
//         </div>
//     )
//trying to render button if profile user.

}
        

return (
<div>
<form id='profile' onSubmit={handleSubmit}>
    {
        // data.map((item) => {
        //     return (
                // <p> {item.username} </p>
                <h1> {data.username} </h1>
        //     )
        // })
    }
    <button type="submit"> 
    Profile/Follow
    </button>
</form>
</div>
)
}

export default Profile;
