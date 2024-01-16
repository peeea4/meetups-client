import axios from 'axios';

export const baseURL = 'https://meetup-api-jon3.onrender.com/api';

const api = axios.create({
    baseURL,
});

// api.interceptors.request.use((config) => {
//   config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
//   return config;
// });

export default api;
