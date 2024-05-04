import React from 'react'
import { useNavigate } from 'react-router'
const Logout = () => {
    const navigate = useNavigate();
    const handleSubmit= async(e) => {
        e.preventDefault()
        try {
            window.localStorage.removeItem("user");
            window.localStorage.removeItem("username");
            navigate("/signin")
        }
        catch(error) {
            console.log(error);
        }
    }
  return (
    <div>
    <form id='logout' onSubmit={handleSubmit}>
        <button type="submit"> 
        Logout
        </button>
    </form>
   </div>
  )
}

export default Logout;