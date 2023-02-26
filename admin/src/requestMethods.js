import axios from "axios";

const BASE_URL = "https://bbshop-api.cyclic.app/v1";


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = (token) => {
    return axios.create({
      baseURL: BASE_URL,
      headers: { token: `Bearer ${token}` },
    })
};