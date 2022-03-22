import { useSelector } from 'react-redux';
import { Grid, Message as SemanticMessage, Popup } from 'semantic-ui-react';
import { RootState } from '../../redux/rootReducer';
import { Message } from '../../types/message';
import Datetime from '../Date/datetime';

interface IMessageProps {
	message: Message;
}

const MessageText = ({ message }: IMessageProps) => {
	const currentUser = useSelector((state: RootState) => state.user.profile);

	const isMyMessage = () => {
		return currentUser && message.authorId === currentUser.id;
	};

	return (
		<Grid.Row>
			<Grid.Column floated={(isMyMessage() && 'right') || 'left'} largeScreen={6} mobile={10}>
				<Popup
					trigger={<SemanticMessage color={(isMyMessage() && 'blue') || null}>{message.body}</SemanticMessage>}
					content={<Datetime timestamp={message.timestamp} />}
					position={(isMyMessage() && 'left center') || 'right center'}
					size="mini"
				/>
			</Grid.Column>
		</Grid.Row>
	);
};

export default MessageText;
