import { SIGN_IN, SIGN_IN_REQUEST } from './action';
const INITIAL_STATE = { token: null, loading: false };

export default function auth(state = INITIAL_STATE, { type, token }) {
  switch (type) {
    case SIGN_IN_REQUEST:
      state.loading = true;
      return state;
    case SIGN_IN:
      state.token = token;
      state.loading = false;
      return state;
    default:
      return state;
  }
}
