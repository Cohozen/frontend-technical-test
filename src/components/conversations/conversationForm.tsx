import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, Icon, Segment } from 'semantic-ui-react';
import { RootState } from '../../redux/rootReducer';
import * as messagesService from '../../services/messagesService';
import { Message } from '../../types/message';

interface IConversationFormProps {
	conversationId: number;
	onSubmit: () => void;
}

const ConversationForm = ({ conversationId, onSubmit }: IConversationFormProps) => {
	const profile = useSelector((state: RootState) => state.user.profile);
	const [inputMessage, setInputMessage] = useState('');

	const sendMessage = async () => {
		if (inputMessage) {
			const newMessage: Omit<Message, 'id'> = {
				body: inputMessage,
				timestamp: new Date().getTime() / 1000,
				authorId: profile.id,
				conversationId: conversationId,
			};
			await messagesService.insertMessage(conversationId, newMessage);
			setInputMessage('');
			onSubmit();
		}
	};

	return (
		<Segment basic>
			<Form onSubmit={() => sendMessage()}>
				<Form.Input
					fluid
					icon={<Icon name="send" type="submit" inverted circular link />}
					placeholder="envoyer un message"
					onChange={(_e, { value }) => setInputMessage(value)}
					value={inputMessage || ''}
				/>
			</Form>
		</Segment>
	);
};

export default ConversationForm;
