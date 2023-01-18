import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1";

const getToken = () => {
    const userData = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser;
    return userData !== null ? userData.accessToken : ""
  }

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${getToken()}` }
});

