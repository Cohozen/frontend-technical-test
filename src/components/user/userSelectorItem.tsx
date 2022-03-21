import { useDispatch } from 'react-redux';
import { List, Image } from 'semantic-ui-react';
import { RootActions } from '../../redux/rootActions';
import { User } from '../../types/user';
import Avatar from './avatar';

interface IUserSelectorItemProps {
    user: User
}

const UserSelectorItem = ({ user }: IUserSelectorItemProps) => {
    const dispatch = useDispatch();

    const ChooseUser = () => {
        dispatch(RootActions.userActions.setProfile(user));
    }

    return (
        <List.Item onClick={ChooseUser}>
            <Avatar userId={user.id} />
            <List.Content>
                <List.Header>{user.nickname}</List.Header>
            </List.Content>
        </List.Item>
    )
}

export default UserSelectorItem;