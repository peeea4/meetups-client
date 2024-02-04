import Cookies from 'js-cookie';

import api from './config';

export const getUserById = (id: number) => {
    const token = Cookies.get('accessToken');

    return api.get(`/users/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};
