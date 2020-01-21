import { all, put, takeLatest, call } from 'redux-saga/effects';

import { getTasks } from '../../../services/http';
import { GET_POMODOROS_REQUEST, getPomodoros } from './action';

function* doRequest() {
  try {
    const data = yield call(getTasks);
    yield put(getPomodoros(data));
  } catch (e) {}
}

export default all([takeLatest(GET_POMODOROS_REQUEST, doRequest)]);
