import { useEffect, useState } from 'react';
import * as messagesService from '../../services/messagesService'
import { Message } from '../../types/message';
import { useDateTimeFromTimestamp } from '../../hooks/useDateTimeFromTimestamp';

interface IConversationListItemDescriptionProps {
    conversationId: number;
}

const ConversationListItemDescription = ({ conversationId }: IConversationListItemDescriptionProps) => {
    const [lateMessage, setLateMessage] = useState<Message>();
    const formatedDatetime = useDateTimeFromTimestamp(lateMessage && lateMessage.timestamp)

    const getLateMessage = async () => {
        await messagesService.getLastByConversation(conversationId).then(response => setLateMessage(response))
    }

    useEffect(() => {
        getLateMessage();
    }, [])

    return (
        <>
            {lateMessage && `${lateMessage.body} - ${formatedDatetime}` || 'Aucun message'}
        </>
    )
}

export default ConversationListItemDescription;