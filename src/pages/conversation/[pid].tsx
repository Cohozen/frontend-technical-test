import { Grid, List } from 'semantic-ui-react';
import { Conversation } from '../../types/conversation';
import * as messagesService from '../../services/messagesService'
import * as conversationsService from '../../services/conversationsService'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { Message } from '../../types/message';
import { useEffect, useState } from 'react';
import MessageText from '../../components/messages/messageText';

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
        <Grid>
            {messages.map(message => (
                <MessageText key={message.id} conversationId={conversationId} message={message} />
            ))}
        </Grid>
    )
}

export const getServerSideProps = async (context) => {
    const pid = context.params.pid;
    const messages = await messagesService.listByConversation(pid);

    return {
        props: {
            messages: messages
        },
    }
}

export default MessagesList;