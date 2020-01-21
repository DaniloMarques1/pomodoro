import { all, put, call, takeLatest } from 'redux-saga/effects';

import { addTask } from '../../../../services/http.js';

import { addPomodoro, ADD_POMODORO_REQUEST } from '../action';

function* doRequest({ title, qtdPomodoros }) {
  try {
    const data = yield call(addTask, title, qtdPomodoros);
    console.log('saga ', data);
    return yield put(addPomodoro(data));
  } catch (e) {}
}

export default all([takeLatest(ADD_POMODORO_REQUEST, doRequest)]);
