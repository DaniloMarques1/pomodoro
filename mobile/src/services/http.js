import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { ToastAndroid } from 'react-native';

const http = axios.create({
  baseURL: 'https://pomodoroapi.herokuapp.com',
});

async function getTasks(token) {
  try {
    if (!token) throw new Error('No token');
    const response = await http.get('/tasks', {
      headers: {
        token: token,
      },
    });
    return response.data;
  } catch (e) {
    await AsyncStorage.removeItem('token');
    throw e;
  }
}

async function addTask(title, qtdPomodoros, token) {
  try {
    const response = await http.post(
      '/tasks',
      { title, qtdPomodoros },
      {
        headers: {
          token: token,
        },
      }
    );
    ToastAndroid.show('Task created with success', ToastAndroid.LONG);
    return response.data;
  } catch (e) {
    throw e;
  }
}

async function deletePomodoroRequest(pomodoroId, token) {
  try {
    const response = await http.delete(`/tasks/${pomodoroId}`, {
      headers: {
        token: token,
      },
    });
    return response.data;
  } catch (e) {
    throw e;
  }
}

async function doUpdatePomodoro(pomodoroId, token) {
  try {
    const response = await http.put(`tasks/${pomodoroId}`, null, {
      headers: {
        token,
      },
    });
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

export { getTasks, addTask, deletePomodoroRequest, doUpdatePomodoro };

export default http;
