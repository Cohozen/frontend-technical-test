import { useSelector } from 'react-redux';
import { Grid, Message as SemanticMessage, Popup } from 'semantic-ui-react';
import { useDateTimeFromTimestamp } from '../../hooks/useDateTimeFromTimestamp';
import { RootState } from '../../redux/rootReducer';
import { Message } from '../../types/message';

interface IMessageProps {
	message: Message;
	conversationId: number;
}

const MessageText = ({ message, conversationId }: IMessageProps) => {
	const currentUser = useSelector((state: RootState) => state.user.profile);
	const formatedDatetime = useDateTimeFromTimestamp(message.timestamp);

	const isMyMessage = () => {
		return currentUser && message.authorId === currentUser.id;
	};

	return (
		<Grid.Row>
			<Grid.Column floated={(isMyMessage() && 'right') || 'left'} largeScreen={6} mobile={10}>
				<Popup
					trigger={
						<SemanticMessage compact color={(isMyMessage() && 'blue') || null}>
							{message.body}
						</SemanticMessage>
					}
					content={formatedDatetime}
					position={(isMyMessage() && 'left center') || 'right center'}
					size="mini"
				/>
			</Grid.Column>
		</Grid.Row>
	);
};

export default MessageText;
