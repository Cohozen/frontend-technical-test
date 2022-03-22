import { createReducer } from 'typesafe-actions';
import { applicationActions } from '../../rootActions';

interface ApplicationState {
	loading: boolean;
}

const initialState: ApplicationState = { loading: false };

const userReducer = createReducer<ApplicationState, applicationActions>(initialState)
	.handleAction('application/BEGIN_LOADING', state => ({ ...state, loading: true }))
	.handleAction('application/STOP_LOADING', state => ({ ...state, loading: false }));

export default userReducer;
