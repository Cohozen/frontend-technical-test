import { useEffect, useState } from 'react';
import { Conversation } from '../types/conversation';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/rootReducer';
import { User } from '../types/user';

export const useInterlocutor = (conversation: Conversation) => {
    const [interlocutor, setInterlocutor] = useState<User>();
    const currentUser = useSelector((state: RootState) => state.user.profile);

    useEffect(() => {
        if (currentUser) {
            const interlocutorName = conversation.recipientId !== currentUser.id && conversation.recipientNickname || conversation.senderNickname;
            const interlocutorId = conversation.recipientId !== currentUser.id && conversation.recipientId || conversation.senderId;
            const user = {
                id: interlocutorId,
                nickname: interlocutorName,
                token: ''
            }
            setInterlocutor(user);
        }
    }, [conversation, currentUser]);

    return interlocutor;
};
