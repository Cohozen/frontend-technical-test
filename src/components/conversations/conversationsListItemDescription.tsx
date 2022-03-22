import { useEffect, useState } from 'react';
import * as messagesService from '../../services/messagesService';
import { Message } from '../../types/message';
import Datetime from '../Date/datetime';

interface IConversationListItemDescriptionProps {
	conversationId: number;
}

const ConversationsListItemDescription = ({ conversationId }: IConversationListItemDescriptionProps) => {
	const [lateMessage, setLateMessage] = useState<Message>();

	const getLateMessage = async () => {
		await messagesService.getLastByConversation(conversationId).then(response => setLateMessage(response));
	};

	useEffect(() => {
		getLateMessage();
	}, []);

	return (
		<>
			{(lateMessage && `${lateMessage.body.substring(0, 25)}... `) || 'Aucun message'}
			<i style={{ fontSize: 14 }}>
				(<Datetime timestamp={lateMessage && lateMessage.timestamp} />)
			</i>
		</>
	);
};

export default ConversationsListItemDescription;
