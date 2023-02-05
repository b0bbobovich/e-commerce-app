import axios from "axios";

const BASE_URL = "https://boboshop-api.onrender.com/api/v1";



export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = () => {
    
    const getToken = () => {
        const userData = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser;
        return userData !== null ? userData.accessToken : ""
    }

    return (
        axios.create({
            baseURL: BASE_URL,
            headers: { token: `Bearer ${getToken()}` }
        })
    )
}


