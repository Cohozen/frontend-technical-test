import { List } from 'semantic-ui-react';
import { Conversation } from '../../types/conversation';
import * as messagesService from '../../services/messagesService'
import * as conversationsService from '../../services/conversationsService'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { Message } from '../../types/message';
import { useEffect, useState } from 'react';

interface IMessagesListProps {
    messages: Message[],
    conversationId: number,
}

const MessagesList = ({ messages, conversationId }: IMessagesListProps) => {
    const [conversation, setConversation] = useState<Conversation>();
    const currentUser = useSelector((state: RootState) => state.user.profile);

    const getConversation = async () => {
        if (currentUser)
            await conversationsService.listByUser(currentUser.id).then(response => {
                const relevantConversation = response.find(c => c.id === conversationId);
                setConversation(relevantConversation);
            });
    }

    useEffect(() => {
        getConversation();
    }, [])

    return (
        <List>
            {messages.map(message => {
                return (<List.Item>
                    <List.Content>
                        <List.Header>{message.body}</List.Header>
                        <List.Description>
                            {message.timestamp}
                        </List.Description>
                    </List.Content>
                </List.Item>)
            })}

        </List>
    )
}

export const getStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export const getStaticProps = async (context) => {
    const pid = context.params.pid;

    const messages = await messagesService.listByConversation(pid);

    return {
        props: {
            messages: messages
        },
    }
}

export default MessagesList;