import { all, put, call, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';

import {
  addTask,
  getTasks,
  deletePomodoroRequest,
  doUpdatePomodoro,
} from '../../../services/http.js';

import {
  addPomodoro,
  ADD_POMODORO_REQUEST,
  GET_POMODOROS_REQUEST,
  getPomodoros,
  DELETE_POMODORO_REQUEST,
  deletePomodoro,
  UPDATE_POMODORO_REQUEST,
  updatePomodoro,
} from './action';

function* requestAdd({ title, qtdPomodoros, token }) {
  try {
    const data = yield call(addTask, title, qtdPomodoros, token);
    return yield put(addPomodoro(data));
  } catch (e) {}
}

function* requestPomodoros({ token }) {
  try {
    const data = yield call(getTasks, token);
    yield put(getPomodoros(data));
  } catch (e) {}
}

function* requestDelete({ pomodoroId, token }) {
  try {
    const data = yield call(deletePomodoroRequest, pomodoroId, token);
    return yield put(deletePomodoro(data));
  } catch (e) {
    let txt;
    if (e.response) {
      txt = e.response.data.error;
    } else {
      txt = 'Unexpected error has occurred. please try again later';
    }
    Alert.alert('Error deleting', txt, [
      null,
      { text: 'Close', onPress: () => null, style: 'cancel' },
      null,
    ]);
  }
}

function* requestUpdate({ pomodoroId, token }) {
  try {
    const data = yield call(doUpdatePomodoro, pomodoroId, token);

    return yield put(updatePomodoro(data));
  } catch (e) {}
}

export default all([
  takeLatest(ADD_POMODORO_REQUEST, requestAdd),
  takeLatest(GET_POMODOROS_REQUEST, requestPomodoros),
  takeLatest(DELETE_POMODORO_REQUEST, requestDelete),
  takeLatest(UPDATE_POMODORO_REQUEST, requestUpdate),
]);
