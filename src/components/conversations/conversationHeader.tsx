import { Header } from 'semantic-ui-react';
import { Conversation } from '../../types/conversation';
import Avatar from '../user/avatar';
import { useEffect, useState } from 'react';
import * as messagesService from '../../services/messagesService'
import Datetime from '../Date/datetime';
import { Message } from '../../types/message';
import { useInterlocutor } from '../../hooks/useInterlocutor';

interface IConversationListItemProps {
    conversation: Conversation;
}

const ConversationHeader = ({ conversation }: IConversationListItemProps) => {
    const [lastMessage, setLastMessage] = useState<Message>();
    const interlocutor = useInterlocutor(conversation);

    const getLastMessage = async () => {
        await messagesService.getLastByConversation(conversation.id).then(response => {
            setLastMessage(response);
        });
    }

    useEffect(() => {
        getLastMessage();
    }, [])

    return (
        <>
            {interlocutor &&
                <Header as='h2' textAlign='center'>
                    <Avatar userId={interlocutor && interlocutor.id} />
                    Discussion avec {interlocutor && interlocutor.nickname}
                    <Header.Subheader>
                        Dernier message le <Datetime timestamp={lastMessage && lastMessage.timestamp} />
                    </Header.Subheader>
                </Header>
            }
        </>
    )
}

export default ConversationHeader;