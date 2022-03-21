import { ActionType } from 'typesafe-actions';
import userActions from './modules/user/userActions';
import applicationActions from './modules/application/applicationActions';

export type userActions = ActionType<typeof userActions>;
export type applicationActions = ActionType<typeof applicationActions>;

export const RootActions = {
    userActions,
    applicationActions,
};
