import axios from 'axios';

const PROD_URL = 'https://bbshop-api.cyclic.app/v1';

const DEV_URL = 'http://localhost:5000/v1';

export const publicRequest = axios.create({
  baseURL: PROD_URL,
});

export const userRequest = () => {
  return axios.create({
    baseURL: PROD_URL,
    headers: { token: `Bearer ${getToken()}` },
  });

  function getToken() {
    const userDataString = localStorage.getItem('persist:root');
    const userData = JSON.parse(JSON.parse(userDataString).user).currentUser;

    return userData && userData.accessToken ? userData.accessToken : '';
  }
};
