import { useEffect, useState } from 'react';
import { Header } from 'semantic-ui-react';
import { useInterlocutor } from '../../hooks/useInterlocutor';
import * as messagesService from '../../services/messagesService';
import { Conversation } from '../../types/conversation';
import { Message } from '../../types/message';
import Datetime from '../Date/datetime';
import Avatar from '../user/avatar';

interface IConversationListItemProps {
	conversation: Conversation;
}

const ConversationHeader = ({ conversation }: IConversationListItemProps) => {
	const [lastMessage, setLastMessage] = useState<Message>();
	const interlocutor = useInterlocutor(conversation);

	const getLastMessage = async () => {
		await messagesService.getLastByConversation(conversation.id).then(response => {
			setLastMessage(response);
		});
	};

	useEffect(() => {
		getLastMessage();
	}, []);

	return (
		<>
			{interlocutor && (
				<Header as="h2" textAlign="center">
					<Avatar userId={interlocutor && interlocutor.id} />
					Discussion avec {interlocutor && interlocutor.nickname}
					<Header.Subheader>
						Dernier message le <Datetime timestamp={lastMessage && lastMessage.timestamp} />
					</Header.Subheader>
				</Header>
			)}
		</>
	);
};

export default ConversationHeader;
