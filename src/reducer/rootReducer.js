import { combineReducers } from 'redux';

import { tycReducer } from './tycReducer';
export const rootReducer = combineReducers({
reducertyc: tycReducer,
});