
import { useDispatch } from 'react-redux';
import { List } from 'semantic-ui-react';
import { RootActions } from '../../redux/rootActions';
import { User } from '../../types/user';

interface IUserSelectorItemProps {
    user: User
}

const UserSelectorItem = ({ user }: IUserSelectorItemProps) => {
    const dispatch = useDispatch();

    const ChooseUser = () => {
        console.log("click")
        dispatch(RootActions.userActions.setProfile(user));
    }

    return (
        <List.Item onClick={ChooseUser}>
            <List.Icon name='user' />
            <List.Content>
                <List.Header>{user.nickname}</List.Header>
            </List.Content>
        </List.Item>
    )
}

export default UserSelectorItem;