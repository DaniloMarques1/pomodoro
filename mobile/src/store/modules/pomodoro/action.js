export const GET_POMODOROS_REQUEST = 'GET_POMODOROS_REQUEST';
export const GET_POMODOROS = 'GET_POMODOROS';

export const getPomodorosRequest = () => ({ type: GET_POMODOROS_REQUEST });
export const getPomodoros = data => ({ type: GET_POMODOROS, data });
