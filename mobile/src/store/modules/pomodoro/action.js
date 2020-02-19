export const GET_POMODOROS_REQUEST = 'GET_POMODOROS_REQUEST';
export const GET_POMODOROS = 'GET_POMODOROS';
export const DELETE_POMODORO_REQUEST = 'DELETE_POMODORO_REQUEST';
export const DELETE_POMODORO = 'DELETE_POMODORO';
export const SIGN_OUT = 'SIGN_OUT';
export const ADD_POMODORO_REQUEST = 'ADD_POMODORO_REQUEST';
export const ADD_POMODORO = 'ADD_POMODORO';
export const UPDATE_POMODORO_REQUEST = 'UPDATE_POMODORO_REQUEST';
export const UPDATE_POMODORO = 'UPDATE_POMODORO';
export const ACTIVE_TASK = 'ACTIVE_TASK';

export const getPomodorosRequest = token => ({
  type: GET_POMODOROS_REQUEST,
  token,
});
export const getPomodoros = data => ({ type: GET_POMODOROS, data });

export const addPomodoroRequest = (title, qtdPomodoros, token) => ({
  type: ADD_POMODORO_REQUEST,
  title,
  qtdPomodoros,
  token,
});
export const addPomodoro = data => ({ type: ADD_POMODORO, data });

export const deletePomodoroRequest = (pomodoroId, token) => ({
  type: DELETE_POMODORO_REQUEST,
  pomodoroId,
  token,
});
export const deletePomodoro = data => ({ type: DELETE_POMODORO, data });

export const signOut = () => ({ type: SIGN_OUT });

export const updatePomodoroRequest = (pomodoroId, token) => ({
  type: UPDATE_POMODORO_REQUEST,
  pomodoroId,
  token,
});

export const updatePomodoro = data => ({ type: UPDATE_POMODORO, data });

// quando no icone de detalhes ira receber a task
export const setActiveTask = data => ({ type: ACTIVE_TASK, data });
