import { Message } from '../types/message';
import { del, get, post } from './apiService';

export const listByConversation = (conversationId: number) => {
    return get<Message[]>(`/messages/${conversationId}`);
};

export const getLastByConversation = (conversationId: number) => {
    return listByConversation(conversationId).then(response => {
        const sorted = response.sort(m => m.timestamp);
        return sorted.pop();
    });
};

export const insertMessage = (conversationId: number, message: Message) => {
    return post<Message>(`/messages/${conversationId}`, message);
};

export const deleteMessage = (conversationId: number) => {
    return del(`/message/${conversationId}`);
};
