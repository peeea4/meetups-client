import { IUser } from './user';

export type AuthResponse = {
    userData: IUser;
    accessToken: string;
};

export type SignUpArg = {
    email: string;
    password: string;
    name: string;
    lastName: string;
    userName: string;
};

export type SignInArg = {
    email: string;
    password: string;
};
