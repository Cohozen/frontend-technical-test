import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    user: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;

export default store;
