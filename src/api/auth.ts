import { SignInArg, SignUpArg } from '../types/auth';
import api from './config';

export const signIn = (data: SignInArg) => {
    return api.post('/users/sign-in', data);
};

export const signUp = (data: SignUpArg) => {
    return api.post('/users/sign-up', data);
};
