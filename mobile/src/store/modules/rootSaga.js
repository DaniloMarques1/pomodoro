import { all } from 'redux-saga/effects';

import getPomodoros from './pomodoro/saga/getPomodoros';
import addPomodoro from './pomodoro/saga/addPomodoro';
import saga from './pomodoro/saga';

export default function* rootSaga() {
  // return yield all([getPomodoros, addPomodoro]);
  return yield all([saga]);
}
