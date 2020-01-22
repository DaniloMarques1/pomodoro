import { put, call, takeLatest, all } from 'redux-saga/effects';

import { createSession } from '../../../services/http';

import { SIGN_IN_REQUEST, signIn } from './action';

function* doRequest({ email, password }) {
  try {
    const data = yield call(createSession, email, password);
    return yield put(signIn(data));
  } catch (e) {}
}

export default all([takeLatest(SIGN_IN_REQUEST, doRequest)]);
