import axios from "axios";

const BASE_URL = "https://bbshop-api.cyclic.app/v1";

const DEV_URL = "http://localhost:5000/v1";


export const publicRequest = axios.create({
  baseURL: DEV_URL,
});

export const userRequest = (token) => {
    return axios.create({
      baseURL: DEV_URL,
      headers: { token: `Bearer ${token}` },
    })
};