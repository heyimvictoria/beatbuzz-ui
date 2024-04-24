import React, { useCallback, useContext, useEffect, useState } from "react"
import authService from "../services/authService"
















    type Props = {
    childern:ReactNode
}

const AuthContextProvider = (props:Props) => {

    const [user, setUser] = useState<User>()
    const navigate = useNavigate()

    const getUserInfo = useCallback(async () => {
        try {
            const res = await authService.getUserInfo()
            setUser(res.data)
        }   catch(error) {
            navigate("/signin")
        }
    }, [navigate])

    useEffectOnce(() => {
        if(!user) getUserInfo()
    })
}

const signup = async (user:User) => {   
    try {
        const res = await authService.signup(user)
        localStorage.setItem("user-token", res.data.token)
        setUser(res.data)
    } catch(error) {
        console.error("Sign up error -->", error)
    }
}
const signin =async (user:Partial<User>) => {
    try {
        const res = await authService.signin(user)
        localStorage.setItem( "user-token", res.data.token)
        setUser(res.data)
    }  catch (error) {
        console.error("Sign in error -->", error)
    }
}

const signout = () => {
    localStorage.removeItem("user-token")
    setUser(undefined)
}
return (
    <authContext.Provider value={{user, signin, signout, signup}}>
    {props.childern}
    </authContext.Provider>
    )
}

export default AuthContextProvider;

export const useAuth = () => useContext(authContext)