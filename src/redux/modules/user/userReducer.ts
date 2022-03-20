import { createReducer } from 'typesafe-actions';
import { User } from '../../../types/user';
import { userActions } from '../../rootActions';

interface UserState {
    profile: User;
}

const initialState: UserState = { profile: null };

const userReducer = createReducer<UserState, userActions>(initialState)
    .handleAction('user/SET_PROFILE', (state, action) => ({ ...state, profile: action.payload }));

export default userReducer;
