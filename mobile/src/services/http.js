import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const http = axios.create({
  baseURL: 'http://192.168.1.5:5000',
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
