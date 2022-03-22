import { useEffect, useState } from 'react';
import { useDateTimeFromTimestamp } from '../../hooks/useDateTimeFromTimestamp';
import * as messagesService from '../../services/messagesService';
import { Message } from '../../types/message';

interface IConversationListItemDescriptionProps {
	conversationId: number;
}

const ConversationsListItemDescription = ({ conversationId }: IConversationListItemDescriptionProps) => {
	const [lateMessage, setLateMessage] = useState<Message>();
	const formatedDatetime = useDateTimeFromTimestamp(lateMessage && lateMessage.timestamp);

	const getLateMessage = async () => {
		await messagesService.getLastByConversation(conversationId).then(response => setLateMessage(response));
	};

	useEffect(() => {
		getLateMessage();
	}, []);

	return <>{(lateMessage && `${lateMessage.body} - ${formatedDatetime}`) || 'Aucun message'}</>;
};

export default ConversationsListItemDescription;
