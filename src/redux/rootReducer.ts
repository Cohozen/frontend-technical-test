import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import applicationReducer from './modules/application/applicationReducer';
import userReducer from './modules/user/userReducer';

const rootReducer = combineReducers({
	user: userReducer,
	application: applicationReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;

export default store;
