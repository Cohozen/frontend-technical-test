import { useDispatch } from 'react-redux';
import { List, Image } from 'semantic-ui-react';
import { RootActions } from '../../redux/rootActions';
import { User } from '../../types/user';

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
            <Image avatar src={`${process.env.PUBLIC_URL}/avatar/small/${user.id}.jpg`} />
            <List.Content>
                <List.Header>{user.nickname}</List.Header>
            </List.Content>
        </List.Item>
    )
}

export default UserSelectorItem;