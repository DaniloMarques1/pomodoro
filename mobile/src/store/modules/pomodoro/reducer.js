import { GET_POMODOROS, ADD_POMODORO, SIGN_OUT } from './action';

const INITIAL_STATE = {
  tasks: [
    {
      _id: null,
      title: null,
      qtdPomodoros: null,
      finishedPomodoros: null,
      active: null,
      createdAt: null,
      updatedAt: null,
    },
  ],
  _id: null,
  name: null,
  email: null,
  password: null,
  __v: null,
};

export default function pomodoro(state = INITIAL_STATE, { type, data }) {
  switch (type) {
    case GET_POMODOROS:
      state = data;
      return state;
    case ADD_POMODORO:
      state = { ...state, tasks: [data, ...state.tasks] };
      return state;
    case SIGN_OUT:
      state = INITIAL_STATE;
      return state;
    default:
      return state;
  }
}
