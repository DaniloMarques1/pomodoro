import { combineReducers } from 'redux';
import pomodoro from './pomodoro/reducer';
import auth from './auth/reducer';

export default combineReducers({ pomodoro, auth });
