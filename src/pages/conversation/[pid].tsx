import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid, Segment } from 'semantic-ui-react';
import ConversationForm from '../../components/conversations/conversationForm';
import ConversationHeader from '../../components/conversations/conversationHeader';
import { AlwaysScrollToBottom } from '../../components/layout/alwaysScrollToBottom';
import MessageText from '../../components/messages/messageText';
import { RootState } from '../../redux/rootReducer';
import * as conversationsService from '../../services/conversationsService';
import * as messagesService from '../../services/messagesService';
import { Conversation } from '../../types/conversation';
import { Message } from '../../types/message';

interface IMessagesListProps {
	conversationId: number;
}

const ConversationView = ({ conversationId }: IMessagesListProps) => {
	const currentUser = useSelector((state: RootState) => state.user.profile);
	const [conversation, setConversation] = useState<Conversation>();
	const [messages, setMessages] = useState<Message[]>([]);
	const { push } = useRouter();

	const getConversation = async () => {
		if (currentUser)
			await conversationsService.listByUser(currentUser.id).then(response => {
				const relevantConversation = response.find(c => c.id == conversationId);
				setConversation(relevantConversation);
			});
	};

	const loadMessages = async () => {
		await messagesService.listByConversation(conversationId).then(response => setMessages(response));
	};

	useEffect(() => {
		if (!currentUser) push('/');
	}, [currentUser]);

	useEffect(() => {
		loadMessages();
		getConversation();
	}, []);

	return (
		<>
			{conversation && <ConversationHeader conversation={conversation} />}
			<Grid as={Segment} basic>
				{messages.map(message => (
					<MessageText key={message.id} message={message} />
				))}
			</Grid>
			<ConversationForm conversationId={conversationId} onSubmit={loadMessages} />
			<AlwaysScrollToBottom />
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
