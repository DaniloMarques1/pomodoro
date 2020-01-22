export const GET_POMODOROS_REQUEST = 'GET_POMODOROS_REQUEST';
export const GET_POMODOROS = 'GET_POMODOROS';
export const DELETE_POMODORO_REQUEST = 'DELETE_POMODORO_REQUEST';
export const DELETE_POMODORO = 'DELETE_POMODORO';
export const SIGN_OUT = 'SIGN_OUT';
export const ADD_POMODORO_REQUEST = 'ADD_POMODORO_REQUEST';
export const ADD_POMODORO = 'ADD_POMODORO';

export const getPomodorosRequest = () => ({ type: GET_POMODOROS_REQUEST });
export const getPomodoros = data => ({ type: GET_POMODOROS, data });

export const addPomodoroRequest = (title, qtdPomodoros) => ({
  type: ADD_POMODORO_REQUEST,
  title,
  qtdPomodoros,
});
export const addPomodoro = data => ({ type: ADD_POMODORO, data });

export const deletePomodoroRequest = pomodoroId => ({
  type: DELETE_POMODORO_REQUEST,
  pomodoroId,
});
export const deletePomodoro = data => ({ type: DELETE_POMODORO, data });

export const signOut = () => ({ type: SIGN_OUT });
