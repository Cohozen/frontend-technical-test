import { ActionType } from 'typesafe-actions';
import userActions from './modules/user/userActions';

export type userActions = ActionType<typeof userActions>;

export const RootActions = {
    userActions,
};
