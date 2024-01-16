export type IUser = {
    id: number;
    email: string;
    name: string;
    lastName: string;
    userName: string;
    role: 'USER' | 'ADMIN';
    Meetups: [];
};
