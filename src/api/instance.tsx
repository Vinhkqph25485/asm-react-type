
import axios from "axios";
let token = JSON.parse(localStorage.getItem("user") as string);
const instance = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token.accessToken}`,

    },
    timeout: 3000
    
})

export default instance