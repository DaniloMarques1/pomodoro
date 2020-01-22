import { all } from 'redux-saga/effects';

import pomodoroSaga from './pomodoro/saga';
import authSaga from './auth/saga';

export default function* rootSaga() {
  return yield all([pomodoroSaga, authSaga]);
}
