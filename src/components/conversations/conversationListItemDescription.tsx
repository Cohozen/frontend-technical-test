import { useEffect, useState } from 'react';
import { useIntl, useTranslations } from 'next-intl'
import * as messagesService from '../../services/messagesService'
import { Message } from '../../types/message';

interface IConversationListItemDescriptionProps {
    conversationId: number;
}

const ConversationListItemDescription = ({ conversationId }: IConversationListItemDescriptionProps) => {
    const [lateMessage, setLateMessage] = useState<Message>();
    const t = useTranslations('Conversation')
    const intl = useIntl()

    const getLateMessage = async () => {
        await messagesService.getLastByConversation(conversationId).then(response => setLateMessage(response))
    }

    useEffect(() => {
        getLateMessage();
    }, [])

    return (
        <>
            {/* {lateMessage && `${lateMessage.body} - ${lateMessage.timestamp}` || 'Aucun message'} */}
            {lateMessage && t('lastMessage', {
                lastMessage: lateMessage.body,
                lastUpdated: intl.formatDateTime(lateMessage.timestamp),
            })}
        </>
    )
}

export default ConversationListItemDescription;