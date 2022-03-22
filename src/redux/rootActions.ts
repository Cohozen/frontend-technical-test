import { ActionType } from 'typesafe-actions';
import applicationActions from './modules/application/applicationActions';
import userActions from './modules/user/userActions';

export type userActions = ActionType<typeof userActions>;
export type applicationActions = ActionType<typeof applicationActions>;

export const RootActions = {
	userActions,
	applicationActions,
};
