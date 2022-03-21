import { Item, List, Placeholder } from 'semantic-ui-react';
import { Conversation } from '../../types/conversation';
import Link from 'next/link'
import Avatar from '../user/avatar';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { useEffect, useState } from 'react';
import { User } from '../../types/user';

interface IConversationListItemProps {
    conversation: Conversation;
}

const ConversationListItem = ({ conversation }: IConversationListItemProps) => {
    const [interlocutor, setInterlocutor] = useState<User>();
    const currentUser = useSelector((state: RootState) => state.user.profile);

    useEffect(() => {
        const interlocutorName = conversation.recipientId !== currentUser.id && conversation.recipientNickname || conversation.senderNickname;
        const interlocutorId = conversation.recipientId !== currentUser.id && conversation.recipientId || conversation.senderId;
        const user = {
            id: interlocutorId,
            nickname: interlocutorName,
            token: ''
        }
        setInterlocutor(user);
    }, [currentUser])

    return (
        <>
            {interlocutor &&
                <Link href={`/conversation/${conversation.id}`}>
                    <List.Item >
                        <Avatar userId={interlocutor.id} />
                        <List.Content>
                            <List.Header>{interlocutor.nickname}</List.Header>
                            <List.Description>Has not watched anything recently</List.Description>
                        </List.Content>
                    </List.Item>
                </Link>
                ||
                <Placeholder>
                    <Placeholder.Header image >
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder.Header>
                </Placeholder>}

        </>
    )
}

export default ConversationListItem;