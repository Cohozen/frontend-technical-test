import { useEffect, useState } from 'react';
import { Header, List } from 'semantic-ui-react';
import * as usersService from '../../services/usersService'
import { User } from '../../types/user';
import UserSelectorItem from './userSelectorItem';

const UserSelector = () => {
    const [users, setUsers] = useState<User[]>([])

    const getUsers = async () => {
        await usersService.list().then(response => setUsers(response))
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <Header as='h2' textAlign='center'>
                Choix de l'utilisateur
                <Header.Subheader>
                    Veuillez sélectionner un utilisateur pour usurper son identité.
                </Header.Subheader>
            </Header>
            <List selection verticalAlign='middle' size='massive'>
                {users.map(user => {
                    return <UserSelectorItem key={user.id} user={user} />
                })}
            </List>
        </>
    )
}

export default UserSelector;