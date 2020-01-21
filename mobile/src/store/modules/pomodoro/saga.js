import { all, put, call, takeLatest } from 'redux-saga/effects';

import { addTask, getTasks } from '../../../services/http.js';

import {
  addPomodoro,
  ADD_POMODORO_REQUEST,
  GET_POMODOROS_REQUEST,
  getPomodoros,
} from './action';

function* requestAdd({ title, qtdPomodoros }) {
  try {
    const data = yield call(addTask, title, qtdPomodoros);
    return yield put(addPomodoro(data));
  } catch (e) {}
}

function* requestPomodoros() {
  try {
    const data = yield call(getTasks);
    yield put(getPomodoros(data));
  } catch (e) {}
}

export default all([
  takeLatest(ADD_POMODORO_REQUEST, requestAdd),
  takeLatest(GET_POMODOROS_REQUEST, requestPomodoros),
]);
