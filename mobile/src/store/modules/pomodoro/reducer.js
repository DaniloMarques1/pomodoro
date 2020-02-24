import {
  GET_POMODOROS,
  GET_POMODOROS_REQUEST,
  ADD_POMODORO_REQUEST,
  ADD_POMODORO,
  SIGN_OUT,
  DELETE_POMODORO,
  DELETE_POMODORO_REQUEST,
  UPDATE_POMODORO,
  ACTIVE_TASK,
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
  loading: false,
  activeTask: null,
};

export default function pomodoro(state = INITIAL_STATE, { type, data }) {
  switch (type) {
    case GET_POMODOROS_REQUEST:
      return { ...state, loading: true };
    case GET_POMODOROS:
      return { ...data, loading: false };
    case ADD_POMODORO_REQUEST:
      return { ...state, loading: true };
    case ADD_POMODORO:
      state = { ...state, tasks: [data, ...state.tasks], loading: false };
      return state;
    case SIGN_OUT:
      state = INITIAL_STATE;
    case DELETE_POMODORO_REQUEST:
      return { ...state, loading: true };
    case DELETE_POMODORO:
      const nState = {
        ...state,
        tasks: state.tasks.filter(task => task._id !== data._id),
      };
      return { ...nState, loading: false };
    case UPDATE_POMODORO:
      const updatedTasks = state.tasks
        .map(task => {
          if (task._id === data._id) {
            return data;
          } else {
            return task;
          }
        })
        .filter(task => task.active !== false);
      return { ...state, tasks: updatedTasks, activeTask: data };
    case ACTIVE_TASK:
      return { ...state, activeTask: data };
    default:
      return state;
  }
}
