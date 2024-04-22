import api from "./api";

export interface User {
    _id?: string,
    username: string,
    password: string
}

const prefix = "users";

const signup =async (user:User) => await api.post(`${prefix}/register`, user);

const signin =async (user:Partial<User> ) => await api.post(`${prefix}/login`, user);
    
const getUserInfo =async () => await api.post(`${prefix}/info`);

const authService = {
    signup,
    signin,
    getUserInfo
}

export default authService;