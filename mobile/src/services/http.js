import axios from 'axios';
import { AsyncStorage } from 'react-native';

const http = axios.create({
  baseURL: 'http://127.0.0.1:5000',
});

const getTasks = async () => {
  const token = await AsyncStorage.getItem('token');
  const response = await http.get('/tasks', null, {
    headers: {
      token: token,
    },
  });
  return response.data;
};

export { getTasks };

export default http;
