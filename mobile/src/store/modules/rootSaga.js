import { all } from 'redux-saga/effects';

import saga from './pomodoro/saga';

export default function* rootSaga() {
  return yield all([saga]);
}
