import { createAction } from 'typesafe-actions';
import { User } from '../../../types/user';

const setProfile = createAction('user/SET_PROFILE', action => {
    return (profile: User) => action(profile);
});

export default {
    setProfile
};
