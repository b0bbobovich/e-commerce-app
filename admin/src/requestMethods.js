import axios from "axios";

const BASE_URL = "https://boboshop-api.onrender.com/api/v1";


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = (token) => {
    return axios.create({
      baseURL: BASE_URL,
      headers: { token: `Bearer ${token}` },
    })
};