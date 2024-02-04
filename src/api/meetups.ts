import Cookies from 'js-cookie';

import { CreateMeetupArg } from '../types/meetups';
import api from './config';

export const createMeetup = (data: CreateMeetupArg) => {
    const token = Cookies.get('accessToken');

    return api.post('/meetups', data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const getMeetupsData = (id?: number) => {
    const token = Cookies.get('accessToken');

    return api.get(`/meetups/`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        params: {
            id: id || undefined,
        },
    });
};

export const updateMeetup = (id: number, data: CreateMeetupArg) => {
    const token = Cookies.get('accessToken');

    return api.put(`/meetups/${id}`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const deleteMeetup = (id: number) => {
    const token = Cookies.get('accessToken');

    return api.delete(`/meetups/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const registerForMeetup = (meetupId: number) => {
    const token = Cookies.get('accessToken');

    return api.post(
        `/meetups/${meetupId}/users`,
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );
};
