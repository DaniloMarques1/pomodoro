import axios from 'axios';
import { ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const http = axios.create({
  baseURL: 'http://192.168.1.4:5000',
});

async function createSession(email, password) {
  try {
    const response = await http.post('/session', {
      email,
      password,
    });
    const token = response.data.token;
    console.log(token);
    return token;
  } catch (e) {
    if (e.response) ToastAndroid.show(e.response.data.error, ToastAndroid.LONG);
    else
      ToastAndroid.show(
        'An error has occurred. Check your internet connection and try again',
        ToastAndroid.LONG
      );
  }
}

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
    return response.data;
  } catch (e) {
    throw e;
  }
}

async function deletePomodoroRequest(pomodoroId) {
  try {
    const token = await AsyncStorage.getItem('token');
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

export { createSession, getTasks, addTask, deletePomodoroRequest };

export default http;
