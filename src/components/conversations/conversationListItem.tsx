import { List } from 'semantic-ui-react';
import { Conversation } from '../../types/conversation';
import Link from 'next/link'

interface IConversationListItemProps {
    conversation: Conversation;
}

const ConversationListItem = ({ conversation }: IConversationListItemProps) => {

    return (
        <Link href={`/conversation/${conversation.id}`}>
            <List.Item >
                <List.Content>
                    <List.Header>{conversation.senderNickname}</List.Header>
                    <List.Description>
                        {conversation.recipientNickname}
                    </List.Description>
                </List.Content>
            </List.Item>
        </Link>
    )
}

export default ConversationListItem;