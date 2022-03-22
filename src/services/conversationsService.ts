import { Conversation } from '../types/conversation';
import { del, get, post } from './apiService';

export const listByUser = (userId: number) => {
	return get<Conversation[]>(`/conversations/${userId}`);
};

export const insertConversation = (userId: number, conversation: Conversation) => {
	return post<Conversation>(`/conversations/${userId}`, conversation);
};

export const deleteConversation = (conversationId: number) => {
	return del(`/conversation/${conversationId}`);
};
