import axios from "axios";  //52k (gzipped:18.8k)//

const token = localStorage.getItem("user-token")

const api = axios.create( {
    baseURL: "http://localhost:8080/api/",
    timeout: 1000,
    headers: {
        Authorization: `Bearer ${token}`
    }
} )
export default api;