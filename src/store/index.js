import { combineReducers, createStore } from 'redux';
import info from './reducers/info';
import user from './reducers/user';

export default createStore(combineReducers({
    info,
    user
}));
