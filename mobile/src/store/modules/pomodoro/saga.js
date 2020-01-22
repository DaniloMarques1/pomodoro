import { all, put, call, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';

import {
  addTask,
  getTasks,
  deletePomodoroRequest,
} from '../../../services/http.js';

import {
  addPomodoro,
  ADD_POMODORO_REQUEST,
  GET_POMODOROS_REQUEST,
  getPomodoros,
  DELETE_POMODORO_REQUEST,
  deletePomodoro,
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

function* requestDelete({ pomodoroId }) {
  try {
    const data = yield call(deletePomodoroRequest, pomodoroId);
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

export default all([
  takeLatest(ADD_POMODORO_REQUEST, requestAdd),
  takeLatest(GET_POMODOROS_REQUEST, requestPomodoros),
  takeLatest(DELETE_POMODORO_REQUEST, requestDelete),
]);
