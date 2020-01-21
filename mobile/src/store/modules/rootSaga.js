import { all } from 'redux-saga/effects';

import getPomodoros from './pomodoro/saga/getPomodoros';
import addPomodoro from './pomodoro/saga/addPomodoro';

export default function* rootSaga() {
  return yield all([getPomodoros, addPomodoro]);
}
