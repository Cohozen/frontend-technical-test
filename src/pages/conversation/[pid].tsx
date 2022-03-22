import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import ConversationHeader from '../../components/conversations/conversationHeader';
import MessageText from '../../components/messages/messageText';
import { RootState } from '../../redux/rootReducer';
import * as conversationsService from '../../services/conversationsService';
import * as messagesService from '../../services/messagesService';
import { Conversation } from '../../types/conversation';
import { Message } from '../../types/message';

interface IMessagesListProps {
	messages: Message[];
	conversationId: number;
}

const ConversationView = ({ messages, conversationId }: IMessagesListProps) => {
	const [conversation, setConversation] = useState<Conversation>();
	const currentUser = useSelector((state: RootState) => state.user.profile);

	const getConversation = async () => {
		if (currentUser)
			await conversationsService.listByUser(currentUser.id).then(response => {
				const relevantConversation = response.find(c => c.id == conversationId);
				setConversation(relevantConversation);
			});
	};

	useEffect(() => {
		getConversation();
	}, []);

	return (
		<>
			{conversation && <ConversationHeader conversation={conversation} />}
			<Grid>
				{messages.map(message => (
					<MessageText key={message.id} conversationId={conversationId} message={message} />
				))}
			</Grid>
		</>
	);
};

export const getServerSideProps = async context => {
	const pid = context.params.pid;
	const messages = await messagesService.listByConversation(pid);

	return {
		props: {
			messages: messages,
			conversationId: pid,
		},
	};
};

export default ConversationView;
