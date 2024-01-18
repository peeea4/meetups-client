import axios from 'axios';
import Cookies from 'js-cookie';

export const baseURL = 'https://meetup-api-jon3.onrender.com/api';

const api = axios.create({
    baseURL,
});


// if (token) {
//     api.interceptors.request.use((config) => {
//         config.headers.Authorization = `Bearer ${token}`;
//         return config;
//     });
// }

export default api;
