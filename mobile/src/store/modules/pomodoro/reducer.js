import {
  GET_POMODOROS,
  ADD_POMODORO,
  SIGN_OUT,
  DELETE_POMODORO,
} from './action';

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
    case DELETE_POMODORO:
      const nState = {
        ...state,
        tasks: state.tasks.filter(task => task._id !== data._id),
      };
      state = nState;
      return state;
    default:
      return state;
  }
}
