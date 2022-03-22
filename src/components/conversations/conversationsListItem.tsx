import { List, Placeholder } from 'semantic-ui-react';
import { Conversation } from '../../types/conversation';
import Link from 'next/link'
import Avatar from '../user/avatar';
import ConversationsListItemDescription from './conversationsListItemDescription';
import { useInterlocutor } from '../../hooks/useInterlocutor';

interface IConversationListItemProps {
    conversation: Conversation;
}

const ConversationsListItem = ({ conversation }: IConversationListItemProps) => {
    const interlocutor = useInterlocutor(conversation);

    return (
        <>
            {interlocutor &&
                <Link href={`/conversation/${conversation.id}`}>
                    <List.Item >
                        <Avatar userId={interlocutor.id} />
                        <List.Content>
                            <List.Header>{interlocutor.nickname}</List.Header>
                            <ConversationsListItemDescription conversationId={conversation.id} />
                        </List.Content>
                    </List.Item>
                </Link>
                ||
                <Placeholder>
                    <Placeholder.Header image >
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder.Header>
                </Placeholder>
            }
        </>
    )
}

export default ConversationsListItem;