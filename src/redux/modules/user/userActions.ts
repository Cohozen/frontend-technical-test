import { createAction } from 'typesafe-actions';
import { User } from '../../../types/user';

const setProfile = createAction('user/SET_PROFILE', action => {
    return (profile: User) => action(profile);
});

const resetProfile = createAction('user/RESET_PROFILE', action => {
    return () => action();
});

export default {
    setProfile,
    resetProfile
};
