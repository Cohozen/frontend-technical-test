import { useEffect, useState } from 'react';
import { Header, List } from 'semantic-ui-react';
import * as conversationsService from '../../services/conversationsService';
import { Conversation } from '../../types/conversation';
import { User } from '../../types/user';
import ConversationsListItem from './conversationsListItem';

interface IConversationListProps {
	user: User;
}

const ConversationsList = ({ user }: IConversationListProps) => {
	const [conversations, setConversations] = useState<Conversation[]>([]);

	const getConversations = async () => {
		await conversationsService.listByUser(user.id).then(response => setConversations(response));
	};

	useEffect(() => {
		getConversations();
	}, []);

	return (
		<>
			<Header as="h2" textAlign="center">
				Bonjour {user.nickname}
				<Header.Subheader>
					{conversations.length +
						` conversation${(conversations.length > 1 && 's') || ''} disponible${
							(conversations.length > 1 && 's') || ''
						}`}
				</Header.Subheader>
			</Header>
			<List selection relaxed="very" verticalAlign="middle" size="massive">
				{conversations.map(conversation => {
					return <ConversationsListItem key={conversation.id} conversation={conversation} />;
				})}
			</List>
		</>
	);
};

export default ConversationsList;
