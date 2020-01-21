import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const http = axios.create({
  baseURL: 'http://127.0.0.1:5000',
});

const getTasks = async () => {
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
};

export { getTasks };

export default http;
