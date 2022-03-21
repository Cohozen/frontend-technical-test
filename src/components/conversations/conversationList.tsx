import { useEffect, useState } from 'react';
import { Header, List } from 'semantic-ui-react';
import * as conversationsService from '../../services/conversationsService'
import { Conversation } from '../../types/conversation';
import { User } from '../../types/user';
import ConversationListItem from './conversationListItem';

interface IConversationListProps {
    user: User;
}

const ConversationList = ({ user }: IConversationListProps) => {
    const [conversations, setConversations] = useState<Conversation[]>([])

    const getConversations = async () => {
        await conversationsService.listByUser(user.id).then(response => setConversations(response))
    }

    useEffect(() => {
        getConversations();
    }, []);

    return (
        <>
            <Header as='h2' textAlign='center'>
                Bonjour {user.nickname}
            </Header>
            <List selection verticalAlign='middle' size='massive'>
                {conversations.map(conversation => {
                    return (
                        <ConversationListItem key={conversation.id} conversation={conversation} />
                    )
                })}
            </List>
        </>
    )
}

export default ConversationList;