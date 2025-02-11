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

export const insertMessage = (conversationId: number, message: Omit<Message, 'id'>) => {
	return post<Message>(`/messages/${conversationId}`, message);
};

export const deleteMessage = (messageId: number) => {
	return del(`/message/${messageId}`);
};
