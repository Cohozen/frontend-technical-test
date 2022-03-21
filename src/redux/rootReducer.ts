import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './modules/user/userReducer';
import applicationReducer from './modules/application/applicationReducer';

const rootReducer = combineReducers({
    user: userReducer,
    application: applicationReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;

export default store;
