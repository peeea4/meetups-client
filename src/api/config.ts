import axios from 'axios';

export const baseURL = 'https://meetup-api-jon3.onrender.com/api';

const apiInstance = axios.create({
    baseURL,
});

export default apiInstance;
