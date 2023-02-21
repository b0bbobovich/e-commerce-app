import axios from "axios";

const PROD_URL = "https://boboshop-api.onrender.com/api/v1";

const DEV_URL = "http://localhost:5000/api/v1";



export const publicRequest = axios.create({
    baseURL: DEV_URL
});

export const userRequest = () => {
    
    const getToken = () => {
        const userData = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser;
        return userData !== null ? userData.accessToken : ""
    }

    return (
        axios.create({
            baseURL: PROD_URL,
            headers: { token: `Bearer ${getToken()}` }
        })
    )
}


