export const GET_POMODOROS_REQUEST = 'GET_POMODOROS_REQUEST';
export const GET_POMODOROS = 'GET_POMODOROS';

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
