import { all } from 'redux-saga/effects';

import getPomodoros from './pomodoro/saga/getPomodoros';

export default function* rootSaga() {
  return yield all([getPomodoros]);
}
