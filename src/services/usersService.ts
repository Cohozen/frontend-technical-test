import { User } from '../types/user';
import { get } from './apiService';

export const list = () => {
    return get<User[]>(`/users`);
};

export const getById = (userId: number) => {
    return get<User>(`/users/${userId}`);
};