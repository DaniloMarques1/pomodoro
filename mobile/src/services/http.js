import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const http = axios.create({
  baseURL: 'http://192.168.1.7:5000',
});

async function getTasks() {
  try {
    const token = await AsyncStorage.getItem('token');
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

async function addTask(title, qtdPomodoros) {
  try {
    const token = await AsyncStorage.getItem('token');
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
export { getTasks, addTask };

export default http;
